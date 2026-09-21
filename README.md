# BasilAOS AOS Work Playbook (English Release)

Content source: `BasilAOS AOS Work Playbook (English Release) (1).docx`, supplied on 2026-09-21.

This standalone package contains the Bluebook only. It does not modify the organization's Solve It application or its repository.

## Local Preview

Requires Node.js 22.13 or newer.

This is the source branch of the personal repository `lizheng0928/aos`. The built website is published separately on `gh-pages` at https://lizheng0928.github.io/aos/. Build locally using the commands below; the root build is for local preview, while the `/aos` build is for GitHub Pages.

To rebuild from source:

```sh
npm ci
npm run build -- --webpack
npm test
npm start
```

Open http://localhost:3001/. To use another port, set `PORT` when starting.

## GitHub Pages

For the personal repository `lizheng0928/aos`, build with:

```sh
NEXT_PUBLIC_BASE_PATH=/aos npm run build -- --webpack
```

Publish the contents of `out/`. This package does not automatically publish anything.

## Content Fidelity

- 4 chapters, 29 sections, 143 Word tables, 119 image occurrences (114 image files).
- Text, inline formatting, explicit line breaks, list markers, and image order are read directly from Word.
- Images are byte-identical to the embedded originals.
- Existing process-flow, HR swimlane, and Skill folder diagram cards are retained. The AI task overview card is retained at the appendix's corresponding heading by explicit request.
- Source strings are not rewritten or heuristically split. The standalone `text` / `Plain Text` label at the start of a card is removed as requested; the rest of the content is unchanged. The manifest records each removal.
- The Chinese document-generation footer is excluded from the English website. Legitimate safety tips and compliance notes remain. The source audit records this approved removal.
- Stable section URLs are retained for existing links.
- Each of the 47 multi-column tables has content-specific column widths in `app/bluebook/table-layouts.json`. Numeric and short-label columns use compact widths; comparison and long-description columns have individually assigned proportions. Wide tables scroll internally on small screens.
- All table headers share the sampled light-theme gray `#EEEDE9` and dark-theme gray `#383838`, with consistent theme-specific body and divider colors.
- `qa/source-manifest.json` records source nodes, order, and image hashes.

To import this same document again (requires Python and `python-docx`):

```sh
python3 scripts/import_release.py "/path/to/BasilAOS AOS Work Playbook (English Release) (1).docx"
```

Browser regression checks require Playwright and a running local preview:

```sh
node scripts/browser-check.mjs
```
