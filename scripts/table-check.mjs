import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const manifest = JSON.parse(await readFile("qa/source-manifest.json", "utf8"));
const layouts = JSON.parse(await readFile("app/bluebook/table-layouts.json", "utf8"));
const base = process.env.PREVIEW_URL || "http://localhost:3001";
await mkdir("qa/tables", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
await page.addInitScript(() => localStorage.setItem("basil-theme", "light"));
const report = [];
try {
  for (const width of [1440, 1024, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const section of manifest.sections) {
      const tables = section.blocks.filter(b => b.type === "table" && b.rows[0].length > 1);
      if (!tables.length) continue;
      await page.goto(`${base}/bluebook/${section.id}/`);
      for (const block of tables) {
        const wrapper = page.locator(`.source-table[data-source-id="${block.sourceId}"]`);
        const sizes = await wrapper.evaluate(node => {
          const table = node.querySelector("table");
          return {
            table: table.getBoundingClientRect().width,
            wrapper: node.clientWidth,
            columns: [...table.rows[0].cells].map(cell => cell.getBoundingClientRect().width),
            clippedCells: [...table.querySelectorAll("th, td")].filter(cell => cell.scrollWidth > cell.clientWidth + 1).length,
            pageOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          };
        });
        const layout = layouts[block.sourceId];
        for (const theme of ["light", "dark"]) {
          await page.evaluate(theme => { document.documentElement.dataset.theme = theme; }, theme);
          const colors = await wrapper.evaluate(node => ({
            headers: [...node.querySelectorAll("thead th")].map(cell => getComputedStyle(cell).backgroundColor),
            body: [...new Set([...node.querySelectorAll("tbody td")].map(cell => getComputedStyle(cell).backgroundColor))],
            borders: [...new Set([...node.querySelectorAll("th, td")].map(cell => getComputedStyle(cell).borderBottomColor))],
          }));
          assert.equal(colors.headers.length, layout.columns.length);
          assert(colors.headers.every(color => color === (theme === "light" ? "rgb(238, 237, 233)" : "rgb(56, 56, 56)")), block.sourceId);
          assert.deepEqual(colors.body, [theme === "light" ? "rgb(255, 254, 251)" : "rgb(45, 45, 45)"]);
          assert.deepEqual(colors.borders, [theme === "light" ? "rgb(217, 217, 217)" : "rgb(74, 74, 74)"]);
          if (width === 1440 && block.sourceId === "body-826") {
            await wrapper.screenshot({ path: `qa/tables/theme-${theme}.png`, style: ".book-topbar { visibility: hidden; }" });
          }
        }
        await page.evaluate(() => { document.documentElement.dataset.theme = "light"; });
        assert.equal(sizes.pageOverflow, false, block.sourceId);
        assert.equal(sizes.clippedCells, 0, block.sourceId);
        layout.columns.forEach((size, i) => {
          if (size === "auto") return;
          const expected = size.endsWith("px") ? parseFloat(size) : sizes.table * parseFloat(size) / 100;
          assert(Math.abs(sizes.columns[i] - expected) < 2, `${width}px ${block.sourceId} column ${i}: ${sizes.columns[i]} != ${expected}`);
        });
        if (width === 1440 || block.sourceId === "body-969") {
          await wrapper.screenshot({ path: `qa/tables/${block.sourceId}-${width}.png`, style: ".book-topbar { visibility: hidden; }" });
        }
        if (sizes.table > sizes.wrapper + 1) {
          await wrapper.evaluate(node => { node.scrollLeft = node.scrollWidth; });
          assert(await wrapper.evaluate(node => node.scrollLeft > 0));
        }
        report.push({ sourceId: block.sourceId, section: section.title, viewport: width, ...sizes });
      }
    }
    console.log(`PASS: 47 individually sized tables, consistent light/dark themes at ${width}px`);
  }
  assert.equal(report.length, 141);
  await page.setViewportSize({ width: 1000, height: 900 });
  await page.goto(`${base}/bluebook/4-4-tuning-skills-when-standard-isn-t-enough/`);
  await page.evaluate(() => { document.documentElement.dataset.theme = "dark"; });
  await page.locator('[data-source-id="body-969"]').screenshot({ path: "qa/tables/steps-dark.png", style: ".book-topbar { visibility: hidden; }" });
  await writeFile("qa/table-report.json", JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
