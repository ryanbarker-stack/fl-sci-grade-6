# IACA Project Discovery

A complete static questionnaire for Grades 6 and 7. Open `index.html` locally to try it, or upload the site to GitHub Pages. No installation, npm, build step, account, database, or submission endpoint is needed to use or deploy it.

## Start here

1. Read `GitHub_Setup.md` and publish this folder's contents in a new `project-discovery` repository.
2. Edit the clearly marked settings in `js/config.js` before assigning it. Defaults accept 5–6 character Class-Only IDs, including the six-character IDs from the earlier project package, and periods 1–8.
3. Test the public link on a school Chromebook with a fictional ID.
4. Paste `Google_Classroom_Assignment.txt` into Classroom and replace the website placeholder with your public Pages URL.

`teacher-guide.md` explains the lesson, privacy, recovery, and processing student files. `Science_Tagging_Guide.md` explains the controlled tags. `examples/Science_Mapping_Audit.md` shows all tags and their evidence for six fictional students. `tests/Validation_Report.md` distinguishes automated tests, actual browser tests, and remaining school-device checks.

## Files that run the site

- `index.html`
- `css/styles.css`
- `js/config.js`
- `js/questions-common.js`
- `js/questions-g6.js`
- `js/questions-g7.js`
- `js/tagging.js`
- `js/storage.js`
- `js/export.js`
- `js/app.js`

All URLs are relative, so the same files work at a repository root or inside a folder of an existing Pages site. No external font, image, analytics, or script is loaded. The environment cards use text and layout, so there are no image downloads to fail.

## What students create

- Final Classroom submission: `G6_Project_Discovery_K7M4Q.txt` (or Grade 7).
- Portable unfinished work: `G6_Project_Discovery_K7M4Q_DRAFT.json`.
- Optional structured final copy: `G6_Project_Discovery_K7M4Q.json`.

Only a `_DRAFT.json` file is accepted by Open draft. The primary final TXT also ends with one complete JSON record for reliable machine parsing.

## Optional developer checks

The supplied `package.json` is for optional developer QA only; GitHub Pages ignores it. It has no dependencies. If Node.js is already installed, `node tests/unit.cjs` runs the data, validation, export, mapping-boundary, and storage tests. `node tests/preview.cjs --port 4173` starts a local static preview. Neither command is needed by the teacher or students.

This website replaces the questionnaire front end from the earlier launch package. Its version-2 records are a new format: do not feed them into the older Apps Script JSON intake without an explicit adapter. Use the human-readable TXT and teacher review workflow described here.
