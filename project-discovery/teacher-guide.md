# Teacher guide — Project Discovery

## Before class

1. Assign stable random Class-Only IDs separately. Give students their codes privately. Never upload the name-to-ID mapping into this website or its repository. The default accepts 5 or 6 uppercase letters/digits, excludes I/O/0/1, and requires at least one letter and one digit. It accepts K7M4Q and the earlier package's K7M4QA.
2. Open `js/config.js`. Set your class periods and, if needed, your ID pattern. You can also change the grade labels, filename pattern, questionnaire version, maximum written-answer length, and autosave setting. Keep these stable once students begin.
3. Publish using `GitHub_Setup.md`. Only the application files are needed online. Do not put student exports, drafts, rosters, or the ID map in any public repository.
4. Open the public URL on a school Chromebook. Complete the short checklist at the end of this guide, including an actual Classroom attachment using a fictional file.
5. Create a normal Google Classroom assignment. Use `Google_Classroom_Assignment.txt`, replace the link placeholder, and choose your deadline. The website itself has no deadline or connection to Classroom.

## Introduction to read aloud

“Today you are not picking your final project. You are helping us find science connections inside things you already care about. A game, a recipe, a drawing, or something strange you noticed might lead to a useful question. There are no correct interests. ‘I don’t know yet’ is okay.

“Eventually, everyone will lead an individual project. You will also consult on classmates’ projects, and they will consult on yours. Ideas can change as you learn more. Use only the Class-Only ID I gave you. Do not type names or private information.”

## A 50–55 minute lesson

| Time | Students do |
|---|---|
| 0–6 min | Introduction; distribute/check IDs; open the link and choose grade/period. |
| 6–32 min | Complete the questionnaire. Short written responses; use the uncertainty options freely. |
| 32–39 min | Review, fix missing required items, and check the ID carefully. |
| 39–46 min | Download the TXT, attach it in Classroom, and click Turn in. |
| Remaining time | Confirm submission; clear the saved browser copy; briefly discuss how a consultant gives useful help. |

The questionnaire has 20 question groups, including six short written prompts (four required, two optional). Students rate at least five of nineteen investigation methods and all twenty-one consultant skills. They choose three preferred consulting jobs and two or three growth skills; the explicit uncertainty option counts by itself. Experience, work-style, and interest-follow-up groups are optional. Students are not required to select every category.

The 25–30 minute estimate is a design estimate: roughly 8–10 minutes for interest/environment/problem selections, 5–6 for short writing, 2–3 for methods, 4–5 for consulting, and 3–4 for checking. It is not a timed pilot with children. Read prompts aloud or let students save a draft if reading or typing takes longer. Keep the activity low-stakes; do not grade students' interests or access to resources.

## What happens to the answers

GitHub Pages serves the same HTML, CSS, and JavaScript to everyone. Students' answers stay in page memory and, when autosave is enabled and available, the browser's local storage. The website makes no response requests, has no submission endpoint, and uses no analytics or remote libraries. A Content Security Policy blocks script network connections and HTML form submission.

When a student presses a download button, the browser creates a file locally. The student separately attaches that file in Google Classroom. Classroom provides the teacher's identity context; the website never receives the Classroom identity. Normal requests to load the site still reach its host; the no-transmission claim concerns questionnaire responses.

This is **pseudonymization**, not anonymization. Text can still contain identifying details. The site reminds students, flags some obvious patterns during review, and asks them to remove personal details. Pattern checks cannot reliably find names or every identifier. Every written response still needs teacher review before AI use.

## Save and recovery on school devices

- After each answer, the saved indicator reports whether local autosave succeeded. If storage is blocked or full, students can keep working and use Save draft to file.
- Refresh returns to the opening screen. Students select their grade and re-enter the same ID to restore. Saved answers are not automatically displayed to the next student. No list of saved IDs is shown.
- A local save is scoped to this website path and Class-Only ID. It is not encrypted, password-protected, or identity verification. Anyone using the same browser who knows the ID could reopen it. School profile clearing can erase it.
- Portable recovery uses the downloaded `_DRAFT.json`. Open draft reads it locally, validates its schema/version/options/lengths, and asks the student to confirm the ID before replacing current work. It never uploads the file.
- Changing grade or ID warns before closing current answers and offers a draft download. A saved draft belonging to another grade cannot be silently overwritten through the start screen.
- The website cannot confirm that a requested download succeeded. It therefore asks students to check Downloads first, then explicitly clear their saved copy. Final export does not erase work before the student has a chance to check the file.
- Clear this device’s saved answers removes this questionnaire's local saves and open answers, after confirmation. It does not clear unrelated websites, downloaded files, or Classroom attachments.
- Two tabs using the same ID may overwrite each other's local save. Use one tab per student; use the downloaded draft as the portable backup.

## After class

Open the assignment's Student work view. Open each student's attached TXT and download it using the attachment viewer's download control; exact controls can vary with the school's viewer. Keep the filenames with their Class-Only IDs. Compare the ID to your private mapping inside your own teacher workflow if a file is misidentified. Do not rename AI-facing copies with student names.

Keep original submissions in the school's approved private location. Make a separate, reviewed AI-facing copy. Read the six written-response fields, remove names, contact/account details, locations or stories that identify people, and unnecessary personal information. Prefer short science-interest summaries. Keep only the ID and fields needed for the specific task. The export's `TEACHER_REVIEW_REQUIRED` status is deliberate; a TXT file is not automatically ready for an AI upload.

For project generation, use the controlled tags, their supporting choices, preferred methods, school resource preference, growth goals, and your reviewed curiosity summary. Do not combine these with the identity map. Use your school's approved AI workflow and have the output use Class-Only IDs. Review all project suggestions before students receive them. This design does not establish legal or district-policy compliance.

An example teacher instruction for AI: “These are teacher-reviewed pseudonymous project profiles. Suggest 3–5 feasible, school-based investigation directions per ID. Explain the evidence for each connection. Preserve uncertainty; do not infer aptitude or identity from hobbies. Distinguish selected science interests from tentative bridges. No unsafe biological work or personal health data. Return only the supplied IDs. Include a small first investigation and limitations. Teacher approval is required.”

## Files and compatibility

Final `.txt` files are readable without special software. Every answer has a stable question ID; the last nonempty line is a complete JSON object. `tests/parse-export.cjs` demonstrates extracting that record. Optional final JSON contains the same structured fields. Draft JSON is intentionally marked `kind: draft` and does not claim completeness.

Version 2 is a new questionnaire schema. The older year-long launch package's Apps Script JSON importer expects different question codes. Do not import these records into that older tool unchanged. The current delivery is the requested independent static collection site; reviewed TXT/JSON can support the separate teacher AI workflow.

## Editing questions

Grade-specific definitions are in `js/questions-g6.js` and `js/questions-g7.js`. Shared sections, skill rows, and scales are in `js/questions-common.js`. Each question contains an `id`, `grade`, `section`, `prompt`, `type`, `required`, and the relevant options or matrix definition. Selectable options have stable `value` keys and explicit tags. Some hobby follow-ups also have `whenAny` conditions.

Edit displayed labels and hints carefully; retain existing IDs and values during an active collection. Use unique values for new options. Keep the school-resources option and uncertainty choices. Do not add name/contact questions. Resources and consultant ratings must not create discipline tags. Run `node tests/unit.cjs` if Node is available, and try both grade paths after changes. For structural or meaning changes, increase the questionnaire version and preserve an old site URL until outstanding drafts are finished; see the deployment guide.

## Five-minute school-device check

1. Open the public Pages URL from Classroom, choose each grade, and confirm correct content.
2. Use a fictional ID. Make a few answers; refresh and restore with that same ID.
3. Save a draft, clear the page, and reopen that draft. Check special characters and multiline writing.
4. Confirm an incomplete response cannot produce a final file. A full fictional draft from `examples/` can speed up the complete-path check.
5. Create the TXT, open it, verify its ID and contents, and attach it to a test Classroom assignment. Check that Turn in works under your school settings.
6. Clear saved answers, then try the same ID again. Old answers should not return. Remove the fictional Classroom attachment afterward.
