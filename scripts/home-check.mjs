import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.PREVIEW_URL || "http://localhost:3001";
await mkdir("qa/screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", error => errors.push(error.message));
try {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const theme of ["light", "dark"]) {
      await page.addInitScript(theme => localStorage.setItem("basil-theme", theme), theme);
      assert.equal((await page.goto(base + "/")).status(), 200);
      await page.waitForFunction(theme => document.documentElement.dataset.theme === theme, theme);
      assert.equal(await page.locator("h1").textContent(), "AOS Work Playbook");
      assert.equal(await page.locator(".track-card").count(), 4);
      assert.equal(await page.locator(".quick-card").count(), 6);
      assert.equal(await page.locator(".level-card").count(), 4);
      assert.equal(await page.locator(".release-index").count(), 0);
      const problems = await page.evaluate(async () => {
        const problems = [];
        if (document.documentElement.scrollWidth > innerWidth + 1) problems.push("Horizontal overflow");
        if (/\p{Script=Han}/u.test(document.body.innerText)) problems.push("Chinese text");
        for (const image of document.images) {
          await image.decode();
          if (!image.naturalWidth) problems.push("Image not loaded");
        }
        for (const node of document.querySelectorAll("h1, h2, h3, .track-card, .quick-card")) {
          if (node.scrollWidth > node.clientWidth + 1) problems.push("Clipped content: " + node.textContent);
        }
        return problems;
      });
      assert.deepEqual(problems, []);
      await page.screenshot({ path: `qa/screenshots/restored-home-${theme}-${width}.png`, fullPage: true });
      console.log(`PASS homepage: ${theme} ${width}px`);
    }
  }
  const links = await page.locator("a[href]").evaluateAll(nodes => nodes.map(node => node.href));
  for (const href of new Set(links)) {
    const url = new URL(href);
    if (url.origin !== new URL(base).origin || url.hash) continue;
    assert.equal((await page.request.get(href)).status(), 200, href);
  }
  await page.locator(".home-primary").click();
  await page.locator(".section-head h1").waitFor();
  assert(page.url().includes("/bluebook/1-1-"));
  assert.deepEqual(errors, []);
  console.log("PASS homepage navigation and all local links");
} finally {
  await browser.close();
}
