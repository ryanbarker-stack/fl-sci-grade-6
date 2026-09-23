# Validation report

All test records are fictional. No real student data, Google account, or GitHub repository was used.

## Executed checks

| Area | Result and evidence |
|---|---|
| Data, IDs, validation, tags, storage, and exports | **558 checks passed** using the actual shipped scripts. See `unit-results.json` and `unit.cjs`. |
| UI event handlers | **75 checks passed** in jsdom for both grades: start, invalid ID, required-answer gate, checkbox limits, uncertainty, draft creation/import, mismatched drafts, review reset, overlong text, repeat exports, clearing, and blocked storage. See `dom-results.json` and `dom.cjs`. This is a DOM simulation, not a native browser or layout test. |
| Grade 6 browser workflow | Completed in Chrome from an empty form. Invalid ID was rejected; partial answers survived refresh and explicit restore; required fields blocked export; a complete reviewed TXT was downloaded and parsed. |
| Grade 7 browser workflow | Completed in Chrome from an empty form. Partial draft downloaded; refresh restored choices and writing; “not sure” choices completed valid required groups; changing writing after review disabled export; a current reviewed TXT was downloaded and parsed. |
| Actual browser downloads | `Browser_G6_Submission.txt` and `Browser_G7_Submission.txt` retain correct grade/ID, latest answers, Unicode, line breaks, and optional omissions. Draft examples downloaded from Chrome are also included. |
| Shared-device behavior | Chrome final-clear confirmation removed Grade 6 page state and its saved copy; starting the same ID again showed an empty questionnaire. Grade/ID-change warning and Cancel were exercised. Additional clear-all and blocked-storage paths passed DOM tests. |
| Tagging audit | Three complete fictional profiles per grade, including non-obvious interests and two deliberately uncertain domain outcomes, passed expected-domain checks. See `examples/Science_Mapping_Audit.md` and `mapping-audit.json`. All six TXT exports parsed successfully. |
| Network/privacy design | Runtime source has no fetch, XHR, beacon, socket, analytics, endpoint, external font, or remote image request. CSP sets `connect-src 'none'` and `form-action 'none'`. DOM tests instrumented transport APIs and observed zero calls while filling/importing/exporting. All UI output of responses uses text, not HTML. |
| Syntax and visual checks | All eight runtime JavaScript files passed syntax checks. Chrome opening screen and desktop questionnaire/review were visually inspected. Tested text/background color pairs exceed 4.5:1; see `contrast-results.json`. |
| Optional browser-native navigation hook | Valid and invalid calls passed DOM tests. It only changes section position and returns a section ID. It never reads or exports answers. Native WebMCP-context verification was unavailable. |

## Limits of verification

The browser automation's download-event wait did not return normally, although the actual downloaded files appeared and were inspected successfully. Its native file-chooser automation then stalled. The import handler itself passed valid, partial, and invalid-file DOM tests, but the native chooser interaction is not claimed as verified.

A narrow-screen browser pass and a physical school-Chromebook run were not completed. Responsive rules include single-column cards, wrapping navigation, and a two-column skill-rating layout below 480 pixels. `responsive.html` is a local developer check surface for a 375-pixel frame, not proof of an executed mobile test. Check the actual school device's zoom, scrolling, download, draft-open, and Classroom attachment behavior before assigning it.

No live GitHub deployment or Google Classroom submission was performed. The separate GitHub instructions were checked against official GitHub and Google help. Timing is an instructional estimate, not a classroom pilot.

## Defects caught and fixed

- Two mystery options initially reused one key; each now has a unique stable value and DOM ID.
- Overlong synthetic input initially produced a generic record-level error. It now points to the exact written question and asks for 600 characters or fewer.
- Review initially repeated every rating row. Ratings now appear grouped, reducing the amount students must reread while the export retains each rating.
- Skill labels were enlarged and given a two-column layout on small screens.
- The saved-status live region updates only when its message changes, avoiding repeated announcements on every keystroke.

## Reproduce

Run `node tests/unit.cjs` with Node.js. No packages are needed for that suite.

The optional UI-handler suite uses jsdom 26.1.0 in a developer QA environment: install that package there, then run `node tests/dom.cjs`. You can instead point `PD_JSDOM_PATH` at that package's absolute path. It is not a production dependency and should not be added to the deployed website.

Use `node tests/parse-export.cjs path/to/submission.txt` to read a final record locally. The teacher guide contains the school-device smoke test.
