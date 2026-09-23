# Science tagging and export reference

## Principles

The data describe possible interests, not ability, personality, intelligence, or future identity. No student receives a science-career result. The review screen shows answers, while the teacher's exported file includes controlled tags and the choices supporting them. The tags are hidden from the questionnaire interface, not secret: source code and downloaded files are inspectable on a static website.

Every selectable option has one or more explicit tags. A tag is a category and stable slug, such as `domain:hydrology` or `method:mapping`. The student never sees tags next to the choices. Raw written responses are retained for teacher review, not automatically interpreted into tags.

## Categories

| Prefix | Meaning |
|---|---|
| `domain:` | Science area directly supported by a selected phenomenon, environment, problem, or explicit hobby follow-up. |
| `phenomenon:` | A specific scientific question that caught attention. |
| `environment:` | A place or context the student would investigate, including through images/data. |
| `interest:` / `interest-focus:` | Everyday interest and any more specific selected follow-up. |
| `experience:` | Broad activity tried or observed; no skill/wealth judgment. |
| `method:` | Preferred ways to investigate; selected mystery types plus method ratings of Excited/Open. |
| `problem:` | An issue worth understanding; no political position is inferred. |
| `resource:` | Broad possible access or preference for school resources. |
| `project-format:` | Sustainable pattern, such as repeated observations or iterative design. |
| `work-style:` | Routine, variety, or school-based preference. |
| `skill-level:` | Self-reported skill and chosen scale level; not an assessed ability. |
| `consultant-strength:` | Skill marked Strong or Comfortable; the specific rating is also preserved. |
| `consultant-interest:` | One of the selected preferred consulting jobs. |
| `growth:` | Selected development goal or skill marked Want to learn. |
| `state:` | Uncertainty or something else; produces no science-domain conclusion. |

## Science areas

Grade 6: astronomy, planetary-science, geology, geophysics, paleontology, meteorology, climatology, hydrology, hydrogeology, oceanography, geomorphology, soils, natural-hazards, earth-systems, environmental-earth-science, gis-mapping, remote-sensing, space-exploration.

Grade 7: cell-biology, molecular-biology, microbiology, genetics, evolution, ecology, conservation, botany, zoology, physiology, anatomy, animal-behavior, plant-biology, environmental-biology, biotechnology. Some fields overlap, especially botany/plant-biology. Multiple related tags preserve those connections rather than counting them as independent evidence.

## Defensible connections and limits

A selected sinkhole question supports geology and hydrogeology. A selected question about how muscles use energy supports physiology. Selecting yeast and dough supports microbiology and molecular biology. Selecting camouflage over generations supports evolution and zoology. These are topic associations, not judgments about the student.

A broad interest in gaming, clothing, or cooking creates an interest tag only. Grade-specific follow-ups offer more concrete possibilities; students can reject them. Cooking alone does not establish microbiology. Clothing alone does not establish anatomy. Game codes alone do not establish genetics. Access to a pet, a camera, or a garden does not determine a domain. Neither do consultant skills.

`domainConnections` lists every supported domain and the distinct question IDs behind it. It is alphabetized, not ranked. `tagEvidence` records the exact question and selected choice for each tag. A phenomenon and an environment can support the same field; neither becomes an aptitude score.

A small set of explicit cross-interest rules produces `tentativeBridges` with a stated basis and `teacher-review-hypothesis` status. These do not add invented domain tags. For example, gaming + maps + a selected weather/climate connection suggests considering weather maps or simple simulations. The teacher checks each proposal with the student.

`examples/Science_Mapping_Audit.md` displays the full output for three fictional students per grade, including two cases where interests do not yet justify a domain. `examples/mapping-audit.json` includes all selected answer keys and provenance. Each case also has a readable final TXT and importable draft.

## Export schema 2.0

Final records contain `app`, `kind`, `schemaVersion`, `questionnaireVersion`, `exportedAt`, `classOnlyId`, `grade`, `period`, `answers`, `tags`, `domainConnections`, `tagEvidence`, `tentativeBridges`, `openResponseInterpretation`, `freeTextReviewStatus`, and `directIdentifierCheck`.

Answers are keyed by question ID: lists of stable option values for multi-select; strings for writing; objects mapping row values to rating values for matrices. Missing optional responses remain missing, rather than being invented. Text exports show them as not answered. A canonical JSON record is the final nonempty line of TXT; newline characters inside answers are escaped in that one line. Use `JSON.parse`, never `eval`. Human-readable response lines use `> ` prefixes so a student's punctuation or heading-like text cannot masquerade as the machine record.

Draft records contain identity fields, versions, timestamp, and answers, with `kind: draft`. They do not claim completion, and tags are recalculated from the current valid definitions after import. Imports reject wrong versions, unrecognized questions/options, duplicate choices, invalid ratings, incompatible conditional answers, oversized files, and answers over the length limit. Only trusted schema fields are copied into page state; file content is displayed as text, never HTML.

The parser example is a format reader, not a replacement for teacher privacy review. Before using AI, review and minimize the free text and any identifying details. Keep the real-name mapping separate.
