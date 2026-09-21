import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const manifest = JSON.parse(await readFile("qa/source-manifest.json", "utf8"));
const base = process.env.PREVIEW_URL || "http://localhost:3001";
await mkdir("qa/screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
await context.addInitScript(() => localStorage.setItem("basil-theme", "light"));
const page = await context.newPage();
const errors = [];
page.on("pageerror", error => errors.push(error.message));
let images = 0, diagrams = 0, blocks = 0;
try {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const section of manifest.sections) {
      const response = await page.goto(`${base}/bluebook/${section.id}/`);
      assert.equal(response.status(), 200);
      assert.equal(await page.locator(".section-head h1").textContent(), section.title);
      const result = await page.evaluate(async (section) => {
        const problems = [];
        const pageText = document.title + document.body.innerText + [...document.querySelectorAll("[alt], [title], [aria-label]")].map(node => [node.getAttribute("alt"), node.getAttribute("title"), node.getAttribute("aria-label")].join(" ")).join(" ");
        if (/\p{Script=Han}/u.test(pageText)) problems.push("Chinese text remaining");
        const nodes = [...document.querySelector("#content").children];
        if (nodes.length !== section.blocks.length) problems.push("Top-level block count differs");
        const text = b => b.runs.map(r => r.text).join("");
        function check(node, block) {
          if (!node || node.dataset.sourceId !== block.sourceId) {
            problems.push("Order/source id differs: " + block.sourceId);
            return;
          }
          if (block.diagram) {
            if (node.dataset.retainedDiagram !== block.diagram) problems.push("Missing diagram");
          } else if (block.type === "paragraph" || block.type === "heading") {
            const content = block.marker ? node.querySelector("p") : node;
            if (content.textContent !== text(block)) problems.push("Text differs: " + block.sourceId);
            if (block.marker && node.dataset.sourceMarker !== block.marker) problems.push("Marker differs");
            if (text(block).includes("\n") && !["pre-wrap", "break-spaces"].includes(getComputedStyle(content).whiteSpace)) problems.push("Lost line break: " + block.sourceId);
          } else if (block.type === "image") {
            if (!node.querySelector("img").getAttribute("src").endsWith(block.src)) problems.push("Wrong image");
          } else if (block.type === "table") {
            const cells = node.matches("blockquote") ? [node] : [...node.querySelectorAll("th, td")];
            const expected = block.cells.flat();
            if (cells.length !== expected.length) problems.push("Cell count differs");
            expected.forEach((cell, ci) => {
              if (cells[ci].children.length !== cell.length) problems.push("Cell paragraphs differ");
              cell.forEach((b, bi) => check(cells[ci].children[bi], b));
            });
          }
        }
        section.blocks.forEach((block, i) => check(nodes[i], block));
        for (const card of document.querySelectorAll(".source-prompt")) {
          if (/^\s*(?:text|plain text)[ \t]*(?:\n|$)/i.test(card.textContent)) problems.push("Stray card label: " + card.dataset.sourceId);
        }
        const imgs = [...document.querySelectorAll("#content img")];
        for (const img of imgs) {
          img.loading = "eager";
          try { await img.decode(); } catch { problems.push("Image failed: " + img.src); }
          if (!img.naturalWidth || img.clientWidth < 1) problems.push("Blank image");
        }
        if (document.documentElement.scrollWidth > window.innerWidth + 1) problems.push("Page horizontal overflow");
        return { problems, images: imgs.length, diagrams: document.querySelectorAll("[data-retained-diagram]").length, blocks: nodes.length };
      }, section);
      assert.deepEqual(result.problems, [], `${width}px ${section.title}: ${result.problems.join(", ")}`);
      if (width === 1440) {
        images += result.images;
        diagrams += result.diagrams;
        blocks += result.blocks;
      }
      if ([0, 2, 6, 15, 22, 28].includes(section.index - 1)) {
        await page.screenshot({ path: `qa/screenshots/${section.index}-${width}.png` });
      }
      if (section.index === 29) {
        const flow = page.locator(".ai-flow-diagram");
        await flow.screenshot({ path: `qa/screenshots/ai-flow-${width}.png`, style: ".book-topbar { visibility: hidden; }" });
        assert.equal(await flow.locator(".ai-flow-node").count(), 9);
        assert.equal(await flow.locator(".ai-flow-connector").count(), 7);
      }
      if (section.title.startsWith("4.5 ")) {
        await page.locator('[data-source-id="body-985"]').screenshot({ path: `qa/screenshots/work-prompt-${width}.png`, style: ".book-topbar { visibility: hidden; }" });
      }
      console.log(`PASS ${width}px: ${section.title}`);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/");
  assert.equal(await page.locator("h1").textContent(), "BasilAOS AOS Work Playbook (English Release)");
  assert.equal(await page.locator(".release-contents a").count(), 29);
  assert(!/\p{Script=Han}/u.test(await page.locator("body").innerText()));
  await page.screenshot({ path: "qa/screenshots/home.png" });
  await page.goto(`${base}/bluebook/${manifest.sections[28].id}/`);
  await page.evaluate(() => { document.documentElement.dataset.theme = "dark"; });
  await page.locator(".ai-flow-diagram").screenshot({ path: "qa/screenshots/ai-flow-dark.png" });
  assert.equal(images, 119);
  assert.equal(diagrams, 6);
  assert.deepEqual(errors, []);
  const report = { sections: 29, viewports: [1440, 390], exactBlockOrder: true, exactText: true, sourceImagesLoaded: images, retainedDiagrams: diagrams, blocks, browserErrors: errors };
  await writeFile("qa/browser-report.json", JSON.stringify(report, null, 2));
  console.log(report);
} finally {
  await browser.close();
}
