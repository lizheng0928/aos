import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { createHash } from "node:crypto";

const manifest = JSON.parse(await readFile("qa/source-manifest.json", "utf8"));
assert.equal(manifest.chapters.length, 4);
assert.equal(manifest.sections.length, 29);
assert.equal(manifest.images.length, 119);
assert(!/\p{Script=Han}/u.test(JSON.stringify(manifest.sections)), "Chinese text in exported section content");
assert(!/\p{Script=Han}/u.test(JSON.stringify(manifest.chapters)), "Chinese text in navigation");
const layouts = JSON.parse(await readFile("app/bluebook/table-layouts.json", "utf8"));
const tables = manifest.sections.flatMap(s => s.blocks).filter(b => b.type === "table" && b.rows[0].length > 1);
assert.equal(tables.length, 47);
assert.deepEqual(Object.keys(layouts).sort(), tables.map(t => t.sourceId).sort());
for (const table of tables) {
  const layout = layouts[table.sourceId];
  assert.equal(layout.columns.length, table.rows[0].length, table.sourceId);
  assert(layout.minWidth >= 320);
  if (layout.columns.every(width => width.endsWith("%"))) {
    assert.equal(layout.columns.reduce((sum, width) => sum + parseFloat(width), 0), 100, table.sourceId);
  }
}
for (const image of manifest.images) {
  const hash = createHash("sha256").update(await readFile("public" + image.src)).digest("hex");
  assert.equal(hash, image.sha256, image.src);
}
for (const section of manifest.sections) await access(`out/bluebook/${section.id}/index.html`);
await assert.rejects(access("out/solve-it"));
console.log("PASS: 29 exported sections; 119 unchanged source image occurrences; no Solve It route.");
