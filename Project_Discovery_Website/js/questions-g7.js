/* Grade 7: edit prompts and options here. Keep existing ids/values stable. */
PD.questions = PD.questions || {};
PD.questions[7] = [
  {
    "id": "phenomena",
    "section": "A",
    "prompt": "Which questions would you most like to explore?",
    "type": "multi",
    "options": [
      {
        "value": "how-does-a-cut-heal",
        "label": "How does a cut heal?",
        "tags": [
          "phenomenon:how-does-a-cut-heal",
          "domain:cell-biology",
          "domain:physiology"
        ]
      },
      {
        "value": "why-do-siblings-look-different",
        "label": "Why do siblings look different?",
        "tags": [
          "phenomenon:why-do-siblings-look-different",
          "domain:genetics"
        ]
      },
      {
        "value": "how-does-a-seed-grow-into-a-whole-plant",
        "label": "How does a seed grow into a whole plant?",
        "tags": [
          "phenomenon:how-does-a-seed-grow-into-a-whole-plant",
          "domain:botany",
          "domain:plant-biology",
          "domain:cell-biology"
        ]
      },
      {
        "value": "why-do-muscles-get-tired",
        "label": "Why do muscles get tired?",
        "tags": [
          "phenomenon:why-do-muscles-get-tired",
          "domain:physiology"
        ]
      },
      {
        "value": "how-can-some-animals-regrow-a-body-part",
        "label": "How can some animals regrow a body part?",
        "tags": [
          "phenomenon:how-can-some-animals-regrow-a-body-part",
          "domain:cell-biology",
          "domain:zoology"
        ]
      },
      {
        "value": "how-can-camouflage-become-common-over-generations",
        "label": "How can camouflage become common over generations?",
        "tags": [
          "phenomenon:how-can-camouflage-become-common-over-generations",
          "domain:evolution",
          "domain:zoology"
        ]
      },
      {
        "value": "what-clues-guide-migrating-animals",
        "label": "What clues guide migrating animals?",
        "tags": [
          "phenomenon:what-clues-guide-migrating-animals",
          "domain:animal-behavior"
        ]
      },
      {
        "value": "why-do-some-bacteria-resist-antibiotics",
        "label": "Why do some bacteria resist antibiotics?",
        "tags": [
          "phenomenon:why-do-some-bacteria-resist-antibiotics",
          "domain:microbiology",
          "domain:evolution"
        ]
      },
      {
        "value": "what-lives-in-a-drop-of-pond-water",
        "label": "What lives in a drop of pond water?",
        "tags": [
          "phenomenon:what-lives-in-a-drop-of-pond-water",
          "domain:microbiology",
          "domain:ecology"
        ]
      },
      {
        "value": "why-do-leaves-change-color",
        "label": "Why do leaves change color?",
        "tags": [
          "phenomenon:why-do-leaves-change-color",
          "domain:botany",
          "domain:plant-biology"
        ]
      },
      {
        "value": "why-does-an-ecosystem-change-when-one-species-disappears",
        "label": "Why does an ecosystem change when one species disappears?",
        "tags": [
          "phenomenon:why-does-an-ecosystem-change-when-one-species-disappears",
          "domain:ecology",
          "domain:conservation"
        ]
      },
      {
        "value": "how-can-cells-with-the-same-dna-do-different-jobs",
        "label": "How can cells with the same DNA do different jobs?",
        "tags": [
          "phenomenon:how-can-cells-with-the-same-dna-do-different-jobs",
          "domain:cell-biology",
          "domain:molecular-biology"
        ]
      },
      {
        "value": "how-are-traits-passed-from-parents-to-offspring",
        "label": "How are traits passed from parents to offspring?",
        "tags": [
          "phenomenon:how-are-traits-passed-from-parents-to-offspring",
          "domain:genetics"
        ]
      },
      {
        "value": "how-do-organisms-survive-very-hot-or-salty-places",
        "label": "How do organisms survive very hot or salty places?",
        "tags": [
          "phenomenon:how-do-organisms-survive-very-hot-or-salty-places",
          "domain:physiology",
          "domain:microbiology"
        ]
      },
      {
        "value": "why-does-exercise-make-a-body-warmer",
        "label": "Why does exercise make a body warmer?",
        "tags": [
          "phenomenon:why-does-exercise-make-a-body-warmer",
          "domain:physiology"
        ]
      },
      {
        "value": "how-do-roots-and-stems-grow-in-different-directions",
        "label": "How do roots and stems grow in different directions?",
        "tags": [
          "phenomenon:how-do-roots-and-stems-grow-in-different-directions",
          "domain:plant-biology",
          "domain:botany"
        ]
      },
      {
        "value": "why-do-some-animals-live-much-longer-than-others",
        "label": "Why do some animals live much longer than others?",
        "tags": [
          "phenomenon:why-do-some-animals-live-much-longer-than-others",
          "domain:zoology",
          "domain:physiology"
        ]
      },
      {
        "value": "how-does-yeast-help-bread-rise",
        "label": "How does yeast help bread rise?",
        "tags": [
          "phenomenon:how-does-yeast-help-bread-rise",
          "domain:microbiology",
          "domain:molecular-biology"
        ]
      },
      {
        "value": "how-can-dna-help-identify-an-organism",
        "label": "How can DNA help identify an organism?",
        "tags": [
          "phenomenon:how-can-dna-help-identify-an-organism",
          "domain:genetics",
          "domain:biotechnology"
        ]
      },
      {
        "value": "how-do-pollinators-and-flowers-affect-each-other",
        "label": "How do pollinators and flowers affect each other?",
        "tags": [
          "phenomenon:how-do-pollinators-and-flowers-affect-each-other",
          "domain:ecology",
          "domain:botany"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 4,
    "min": 1,
    "required": true,
    "hint": "Choose up to 4. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "environments",
    "section": "B",
    "prompt": "Where would you spend a day investigating?",
    "type": "multi",
    "options": [
      {
        "value": "a-coral-reef",
        "label": "A coral reef",
        "tags": [
          "environment:a-coral-reef",
          "domain:ecology",
          "domain:zoology"
        ]
      },
      {
        "value": "a-forest",
        "label": "A forest",
        "tags": [
          "environment:a-forest",
          "domain:ecology"
        ]
      },
      {
        "value": "a-swamp",
        "label": "A swamp",
        "tags": [
          "environment:a-swamp",
          "domain:ecology",
          "domain:environmental-biology"
        ]
      },
      {
        "value": "a-garden",
        "label": "A garden",
        "tags": [
          "environment:a-garden",
          "domain:botany"
        ]
      },
      {
        "value": "a-tide-pool",
        "label": "A tide pool",
        "tags": [
          "environment:a-tide-pool",
          "domain:ecology",
          "domain:zoology"
        ]
      },
      {
        "value": "an-animal-habitat-at-a-zoo",
        "label": "An animal habitat at a zoo",
        "tags": [
          "environment:an-animal-habitat-at-a-zoo",
          "domain:animal-behavior",
          "domain:zoology"
        ]
      },
      {
        "value": "a-farm",
        "label": "A farm",
        "tags": [
          "environment:a-farm",
          "domain:botany",
          "domain:zoology"
        ]
      },
      {
        "value": "the-human-body-through-models",
        "label": "The human body, through models",
        "tags": [
          "environment:the-human-body-through-models",
          "domain:anatomy",
          "domain:physiology"
        ]
      },
      {
        "value": "a-microscopic-world",
        "label": "A microscopic world",
        "tags": [
          "environment:a-microscopic-world",
          "domain:cell-biology",
          "domain:microbiology"
        ]
      },
      {
        "value": "a-pond",
        "label": "A pond",
        "tags": [
          "environment:a-pond",
          "domain:ecology"
        ]
      },
      {
        "value": "a-rainforest",
        "label": "A rainforest",
        "tags": [
          "environment:a-rainforest",
          "domain:ecology",
          "domain:conservation"
        ]
      },
      {
        "value": "a-desert-ecosystem",
        "label": "A desert ecosystem",
        "tags": [
          "environment:a-desert-ecosystem",
          "domain:ecology",
          "domain:physiology"
        ]
      },
      {
        "value": "an-animal-s-habitat",
        "label": "An animal’s habitat",
        "tags": [
          "environment:an-animal-s-habitat",
          "domain:animal-behavior",
          "domain:ecology"
        ]
      },
      {
        "value": "the-world-around-plant-roots",
        "label": "The world around plant roots",
        "tags": [
          "environment:the-world-around-plant-roots",
          "domain:plant-biology",
          "domain:ecology"
        ]
      },
      {
        "value": "a-research-lab-through-approved-examples",
        "label": "A research lab, through approved examples",
        "tags": [
          "environment:a-research-lab-through-approved-examples",
          "domain:biotechnology"
        ]
      },
      {
        "value": "extreme-environments-through-research",
        "label": "Extreme environments, through research",
        "tags": [
          "environment:extreme-environments-through-research",
          "domain:physiology",
          "domain:microbiology"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 1,
    "required": true,
    "hint": "Choose up to 3. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "interests",
    "section": "C",
    "prompt": "What do you already enjoy?",
    "type": "multi",
    "options": [
      {
        "value": "sports-basketball-soccer",
        "label": "Sports / basketball / soccer",
        "tags": [
          "interest:sports-basketball-soccer"
        ]
      },
      {
        "value": "gaming",
        "label": "Gaming",
        "tags": [
          "interest:gaming"
        ]
      },
      {
        "value": "music",
        "label": "Music",
        "tags": [
          "interest:music"
        ]
      },
      {
        "value": "drawing-art",
        "label": "Drawing / art",
        "tags": [
          "interest:drawing-art"
        ]
      },
      {
        "value": "cooking-baking",
        "label": "Cooking / baking",
        "tags": [
          "interest:cooking-baking"
        ]
      },
      {
        "value": "animals-pets",
        "label": "Animals / pets",
        "tags": [
          "interest:animals-pets"
        ]
      },
      {
        "value": "gardening",
        "label": "Gardening",
        "tags": [
          "interest:gardening"
        ]
      },
      {
        "value": "fishing",
        "label": "Fishing",
        "tags": [
          "interest:fishing"
        ]
      },
      {
        "value": "hiking-outdoors",
        "label": "Hiking / outdoors",
        "tags": [
          "interest:hiking-outdoors"
        ]
      },
      {
        "value": "cars-vehicles",
        "label": "Cars / vehicles",
        "tags": [
          "interest:cars-vehicles"
        ]
      },
      {
        "value": "technology",
        "label": "Technology",
        "tags": [
          "interest:technology"
        ]
      },
      {
        "value": "photography-video",
        "label": "Photography / video",
        "tags": [
          "interest:photography-video"
        ]
      },
      {
        "value": "fashion-sneakers-design",
        "label": "Fashion / sneakers / design",
        "tags": [
          "interest:fashion-sneakers-design"
        ]
      },
      {
        "value": "building-making",
        "label": "Building / making",
        "tags": [
          "interest:building-making"
        ]
      },
      {
        "value": "collecting-things",
        "label": "Collecting things",
        "tags": [
          "interest:collecting-things"
        ]
      },
      {
        "value": "maps",
        "label": "Maps",
        "tags": [
          "interest:maps"
        ]
      },
      {
        "value": "weather",
        "label": "Weather",
        "tags": [
          "interest:weather"
        ]
      },
      {
        "value": "space",
        "label": "Space",
        "tags": [
          "interest:space"
        ]
      },
      {
        "value": "food",
        "label": "Food",
        "tags": [
          "interest:food"
        ]
      },
      {
        "value": "exercise-movement",
        "label": "Exercise / movement",
        "tags": [
          "interest:exercise-movement"
        ]
      },
      {
        "value": "beaches",
        "label": "Beaches",
        "tags": [
          "interest:beaches"
        ]
      },
      {
        "value": "boating",
        "label": "Boating",
        "tags": [
          "interest:boating"
        ]
      },
      {
        "value": "reading-stories",
        "label": "Reading / stories",
        "tags": [
          "interest:reading-stories"
        ]
      },
      {
        "value": "puzzles",
        "label": "Puzzles",
        "tags": [
          "interest:puzzles"
        ]
      },
      {
        "value": "creating-online-content",
        "label": "Creating online content",
        "tags": [
          "interest:creating-online-content"
        ]
      },
      {
        "value": "something-else",
        "label": "Something else",
        "tags": [
          "state:something-else"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 5,
    "min": 1,
    "required": true,
    "hint": "Choose up to 5. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "interest-focus",
    "section": "C",
    "prompt": "Which part of your interests might you like to look at more closely?",
    "type": "multi",
    "options": [
      {
        "value": "how-movement-uses-muscles-and-energy",
        "label": "How movement uses muscles and energy",
        "whenAny": [
          "sports-basketball-soccer",
          "exercise-movement",
          "fashion-sneakers-design"
        ],
        "tags": [
          "interest-focus:how-movement-uses-muscles-and-energy",
          "domain:physiology",
          "domain:anatomy"
        ]
      },
      {
        "value": "how-yeast-makes-dough-rise",
        "label": "How yeast makes dough rise",
        "whenAny": [
          "cooking-baking",
          "food"
        ],
        "tags": [
          "interest-focus:how-yeast-makes-dough-rise",
          "domain:microbiology",
          "domain:molecular-biology"
        ]
      },
      {
        "value": "how-animals-use-colors-and-patterns-to-blend-in",
        "label": "How animals use colors and patterns to blend in",
        "whenAny": [
          "drawing-art",
          "fashion-sneakers-design",
          "animals-pets",
          "photography-video"
        ],
        "tags": [
          "interest-focus:how-animals-use-colors-and-patterns-to-blend-in",
          "domain:evolution",
          "domain:zoology"
        ]
      },
      {
        "value": "how-an-animal-learns-or-responds-to-its-surroundings",
        "label": "How an animal learns or responds to its surroundings",
        "whenAny": [
          "animals-pets",
          "fishing",
          "hiking-outdoors"
        ],
        "tags": [
          "interest-focus:how-an-animal-learns-or-responds-to-its-surroundings",
          "domain:animal-behavior"
        ]
      },
      {
        "value": "how-a-plant-responds-to-light-or-water",
        "label": "How a plant responds to light or water",
        "whenAny": [
          "gardening",
          "photography-video",
          "hiking-outdoors"
        ],
        "tags": [
          "interest-focus:how-a-plant-responds-to-light-or-water",
          "domain:plant-biology",
          "domain:botany"
        ]
      },
      {
        "value": "how-instructions-or-codes-can-build-something-complex",
        "label": "How instructions or codes can build something complex",
        "whenAny": [
          "gaming",
          "technology",
          "puzzles",
          "building-making"
        ],
        "tags": [
          "interest-focus:how-instructions-or-codes-can-build-something-complex"
        ]
      },
      {
        "value": "how-organisms-depend-on-one-another",
        "label": "How organisms depend on one another",
        "whenAny": [
          "gaming",
          "fishing",
          "gardening",
          "animals-pets",
          "reading-stories"
        ],
        "tags": [
          "interest-focus:how-organisms-depend-on-one-another",
          "domain:ecology"
        ]
      },
      {
        "value": "how-it-works",
        "label": "How something works or changes",
        "tags": [
          "method:causal-explanation"
        ]
      },
      {
        "value": "something-else",
        "label": "Something else",
        "tags": [
          "state:something-else"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 2,
    "min": 1,
    "required": false,
    "hint": "Optional. These ideas change with your interests above. None of them has to fit.",
    "conditionalOn": "interests",
    "grade": 7
  },
  {
    "id": "interest-detail",
    "section": "C",
    "prompt": "Pick one thing you enjoy. What part keeps your attention?",
    "type": "text",
    "required": true,
    "hint": "For example: a pattern, a challenge, a detail, or how something changes. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "experiences",
    "section": "D",
    "prompt": "Which have you tried or watched?",
    "type": "multi",
    "options": [
      {
        "value": "caring-for-an-animal",
        "label": "Caring for an animal",
        "tags": [
          "experience:caring-for-an-animal"
        ]
      },
      {
        "value": "growing-plants-gardening",
        "label": "Growing plants / gardening",
        "tags": [
          "experience:growing-plants-gardening"
        ]
      },
      {
        "value": "fishing",
        "label": "Fishing",
        "tags": [
          "experience:fishing"
        ]
      },
      {
        "value": "spending-time-at-a-beach",
        "label": "Spending time at a beach",
        "tags": [
          "experience:spending-time-at-a-beach"
        ]
      },
      {
        "value": "watching-storms-from-a-safe-place",
        "label": "Watching storms from a safe place",
        "tags": [
          "experience:watching-storms-from-a-safe-place"
        ]
      },
      {
        "value": "cooking-baking",
        "label": "Cooking / baking",
        "tags": [
          "experience:cooking-baking"
        ]
      },
      {
        "value": "playing-sports",
        "label": "Playing sports",
        "tags": [
          "experience:playing-sports"
        ]
      },
      {
        "value": "observing-stars",
        "label": "Observing stars",
        "tags": [
          "experience:observing-stars"
        ]
      },
      {
        "value": "camping",
        "label": "Camping",
        "tags": [
          "experience:camping"
        ]
      },
      {
        "value": "collecting-rocks-or-shells",
        "label": "Collecting rocks or shells",
        "tags": [
          "experience:collecting-rocks-or-shells"
        ]
      },
      {
        "value": "hiking",
        "label": "Hiking",
        "tags": [
          "experience:hiking"
        ]
      },
      {
        "value": "keeping-an-aquarium",
        "label": "Keeping an aquarium",
        "tags": [
          "experience:keeping-an-aquarium"
        ]
      },
      {
        "value": "photographing-nature",
        "label": "Photographing nature",
        "tags": [
          "experience:photographing-nature"
        ]
      },
      {
        "value": "using-maps",
        "label": "Using maps",
        "tags": [
          "experience:using-maps"
        ]
      },
      {
        "value": "visiting-parks",
        "label": "Visiting parks",
        "tags": [
          "experience:visiting-parks"
        ]
      },
      {
        "value": "building-things",
        "label": "Building things",
        "tags": [
          "experience:building-things"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 4,
    "min": 1,
    "required": false,
    "hint": "Choose up to 4. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "noticed",
    "section": "D",
    "prompt": "What have you noticed that seems strange, surprising, or hard to explain?",
    "type": "text",
    "required": true,
    "hint": "For example: a puddle disappears unevenly, or a plant leans. Your own example can be very different. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "mysteries",
    "section": "E",
    "prompt": "Which kinds of figuring things out sound satisfying?",
    "type": "multi",
    "options": [
      {
        "value": "figuring-out-why-something-happened",
        "label": "Figuring out why something happened",
        "tags": [
          "method:causal-explanation"
        ]
      },
      {
        "value": "predicting-what-happens-next",
        "label": "Predicting what happens next",
        "tags": [
          "method:prediction"
        ]
      },
      {
        "value": "discovering-a-hidden-pattern",
        "label": "Discovering a hidden pattern",
        "tags": [
          "method:pattern-analysis"
        ]
      },
      {
        "value": "comparing-two-things",
        "label": "Comparing two things",
        "tags": [
          "method:comparison"
        ]
      },
      {
        "value": "watching-change-over-time",
        "label": "Watching change over time",
        "tags": [
          "method:longitudinal-observation"
        ]
      },
      {
        "value": "figuring-out-how-something-works",
        "label": "Figuring out how something works",
        "tags": [
          "method:modeling"
        ]
      },
      {
        "value": "checking-whether-a-claim-is-true",
        "label": "Checking whether a claim is true",
        "tags": [
          "method:evidence-checking"
        ]
      },
      {
        "value": "understanding-a-local-problem",
        "label": "Understanding a local problem",
        "tags": [
          "method:local-investigation"
        ]
      },
      {
        "value": "building-something-and-improving-it",
        "label": "Building something and improving it",
        "tags": [
          "method:design-testing"
        ]
      },
      {
        "value": "noticing-something-others-overlook",
        "label": "Noticing something others overlook",
        "tags": [
          "method:observation"
        ]
      },
      {
        "value": "mapping-where-something-happens",
        "label": "Mapping where something happens",
        "tags": [
          "method:mapping"
        ]
      },
      {
        "value": "sorting-things-into-useful-groups",
        "label": "Sorting things into useful groups",
        "tags": [
          "method:classification"
        ]
      },
      {
        "value": "collecting-measurements",
        "label": "Collecting measurements",
        "tags": [
          "method:measurement"
        ]
      },
      {
        "value": "explaining-why-two-things-are-different",
        "label": "Explaining why two things are different",
        "tags": [
          "method:comparison"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 1,
    "required": true,
    "hint": "Choose up to 3. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "methods",
    "section": "F",
    "prompt": "How interested are you in trying these methods?",
    "type": "matrix",
    "matrix": "methods",
    "required": true,
    "minRows": 5,
    "hint": "Rate at least 5 that you notice; the rest are optional. “Not sure yet” counts. You do not need experience.",
    "grade": 7
  },
  {
    "id": "problems",
    "section": "G",
    "prompt": "Which problems would you like to understand better?",
    "type": "multi",
    "options": [
      {
        "value": "habitat-loss",
        "label": "Habitat loss",
        "tags": [
          "problem:habitat-loss",
          "domain:ecology",
          "domain:conservation"
        ]
      },
      {
        "value": "invasive-species",
        "label": "Invasive species",
        "tags": [
          "problem:invasive-species",
          "domain:ecology",
          "domain:conservation"
        ]
      },
      {
        "value": "pollinator-decline",
        "label": "Pollinator decline",
        "tags": [
          "problem:pollinator-decline",
          "domain:ecology",
          "domain:botany"
        ]
      },
      {
        "value": "how-diseases-spread-general-science-only",
        "label": "How diseases spread — general science only",
        "tags": [
          "problem:how-diseases-spread-general-science-only",
          "domain:microbiology"
        ]
      },
      {
        "value": "antibiotic-resistance",
        "label": "Antibiotic resistance",
        "tags": [
          "problem:antibiotic-resistance",
          "domain:microbiology",
          "domain:evolution"
        ]
      },
      {
        "value": "food-waste",
        "label": "Food waste",
        "tags": [
          "problem:food-waste",
          "domain:environmental-biology"
        ]
      },
      {
        "value": "crop-problems",
        "label": "Crop problems",
        "tags": [
          "problem:crop-problems",
          "domain:botany",
          "domain:plant-biology"
        ]
      },
      {
        "value": "animal-health-general-science-only",
        "label": "Animal health — general science only",
        "tags": [
          "problem:animal-health-general-science-only",
          "domain:zoology",
          "domain:physiology"
        ]
      },
      {
        "value": "water-quality",
        "label": "Water quality",
        "tags": [
          "problem:water-quality",
          "domain:ecology",
          "domain:environmental-biology"
        ]
      },
      {
        "value": "ecosystem-changes",
        "label": "Ecosystem changes",
        "tags": [
          "problem:ecosystem-changes",
          "domain:ecology"
        ]
      },
      {
        "value": "endangered-species",
        "label": "Endangered species",
        "tags": [
          "problem:endangered-species",
          "domain:conservation",
          "domain:zoology"
        ]
      },
      {
        "value": "how-bodies-stay-healthy-no-personal-health-information",
        "label": "How bodies stay healthy — no personal health information",
        "tags": [
          "problem:how-bodies-stay-healthy-no-personal-health-information",
          "domain:physiology"
        ]
      },
      {
        "value": "loss-of-biodiversity",
        "label": "Loss of biodiversity",
        "tags": [
          "problem:loss-of-biodiversity",
          "domain:ecology",
          "domain:conservation"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 1,
    "required": true,
    "hint": "Choose up to 3. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "resources",
    "section": "H",
    "prompt": "Which resources could you comfortably use?",
    "type": "multi",
    "options": [
      {
        "value": "resources-available-at-school-my-preferred-option",
        "label": "Resources available at school — my preferred option",
        "tags": [
          "resource:resources-available-at-school-my-preferred-option"
        ]
      },
      {
        "value": "outdoor-space",
        "label": "Outdoor space",
        "tags": [
          "resource:outdoor-space"
        ]
      },
      {
        "value": "plants",
        "label": "Plants",
        "tags": [
          "resource:plants"
        ]
      },
      {
        "value": "pets-observation-only",
        "label": "Pets — observation only",
        "tags": [
          "resource:pets-observation-only"
        ]
      },
      {
        "value": "basic-household-materials",
        "label": "Basic household materials",
        "tags": [
          "resource:basic-household-materials"
        ]
      },
      {
        "value": "craft-building-materials",
        "label": "Craft / building materials",
        "tags": [
          "resource:craft-building-materials"
        ]
      },
      {
        "value": "camera-on-a-phone-or-tablet",
        "label": "Camera on a phone or tablet",
        "tags": [
          "resource:camera-on-a-phone-or-tablet"
        ]
      },
      {
        "value": "chromebook-computer",
        "label": "Chromebook / computer",
        "tags": [
          "resource:chromebook-computer"
        ]
      },
      {
        "value": "a-safe-view-of-the-night-sky",
        "label": "A safe view of the night sky",
        "tags": [
          "resource:a-safe-view-of-the-night-sky"
        ]
      },
      {
        "value": "sports-equipment",
        "label": "Sports equipment",
        "tags": [
          "resource:sports-equipment"
        ]
      },
      {
        "value": "garden",
        "label": "Garden",
        "tags": [
          "resource:garden"
        ]
      },
      {
        "value": "aquarium-observation-only",
        "label": "Aquarium — observation only",
        "tags": [
          "resource:aquarium-observation-only"
        ]
      },
      {
        "value": "school-lab-materials-with-teacher-approval",
        "label": "School lab materials with teacher approval",
        "tags": [
          "resource:school-lab-materials-with-teacher-approval"
        ]
      },
      {
        "value": "public-scientific-datasets",
        "label": "Public scientific datasets",
        "tags": [
          "resource:public-scientific-datasets"
        ]
      },
      {
        "value": "parks-or-natural-areas",
        "label": "Parks or natural areas",
        "tags": [
          "resource:parks-or-natural-areas"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 5,
    "min": 1,
    "required": true,
    "hint": "Choose up to 5. Choose school resources if you prefer. No purchases or special trips are expected.",
    "grade": 7
  },
  {
    "id": "sustain",
    "section": "I",
    "prompt": "What could you keep doing for several months?",
    "type": "multi",
    "options": [
      {
        "value": "weekly-observation",
        "label": "Make an observation each week",
        "tags": [
          "project-format:weekly-observation"
        ]
      },
      {
        "value": "repeated-measurement",
        "label": "Collect measurements repeatedly",
        "tags": [
          "project-format:repeated-measurement"
        ]
      },
      {
        "value": "photo-record",
        "label": "Photograph change over time",
        "tags": [
          "project-format:photo-record"
        ]
      },
      {
        "value": "iterative-design",
        "label": "Build something and keep improving it",
        "tags": [
          "project-format:iterative-design"
        ]
      },
      {
        "value": "data-series",
        "label": "Analyze new data each week",
        "tags": [
          "project-format:data-series"
        ]
      },
      {
        "value": "research-sequence",
        "label": "Research different parts of a big question",
        "tags": [
          "project-format:research-sequence"
        ]
      },
      {
        "value": "plant-observation",
        "label": "Care for and observe a plant at school",
        "tags": [
          "project-format:plant-observation"
        ]
      },
      {
        "value": "field-monitoring",
        "label": "Monitor a safe outdoor place",
        "tags": [
          "project-format:field-monitoring"
        ]
      },
      {
        "value": "longitudinal-comparison",
        "label": "Compare things over time",
        "tags": [
          "project-format:longitudinal-comparison"
        ]
      },
      {
        "value": "school-based",
        "label": "Do most project work at school",
        "tags": [
          "project-format:school-based"
        ]
      },
      {
        "value": "public-data",
        "label": "Use public scientific datasets",
        "tags": [
          "project-format:public-data"
        ]
      },
      {
        "value": "adaptive-methods",
        "label": "Change methods as the project develops",
        "tags": [
          "project-format:adaptive-methods"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 1,
    "required": true,
    "hint": "Choose up to 3. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "routine",
    "section": "I",
    "prompt": "What kind of weekly work would suit you?",
    "type": "multi",
    "options": [
      {
        "value": "routine",
        "label": "A familiar routine",
        "tags": [
          "work-style:repeated-routine"
        ]
      },
      {
        "value": "variety",
        "label": "Different tasks from week to week",
        "tags": [
          "work-style:variety"
        ]
      },
      {
        "value": "school",
        "label": "Mostly work I can do at school",
        "tags": [
          "work-style:school-based"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 2,
    "min": 1,
    "required": false,
    "hint": "Choose up to 2. “Not sure yet” is always okay.",
    "grade": 7
  },
  {
    "id": "keep-going",
    "section": "I",
    "prompt": "What would make you want to keep coming back to a project?",
    "type": "text",
    "required": false,
    "hint": "Optional: think about noticing change, solving a puzzle, making something, or learning more. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "wonder",
    "section": "J",
    "prompt": "What is something about nature, Earth, space, or living things that you wonder about?",
    "type": "text",
    "required": true,
    "hint": "You do not need a project idea yet. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "scientist-question",
    "section": "J",
    "prompt": "If a scientist could answer one question for you, what would you ask?",
    "type": "text",
    "required": true,
    "hint": "It can be about something you see often or something far away. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "improve",
    "section": "J",
    "prompt": "Is there something you would like to understand, predict, explain, or improve?",
    "type": "text",
    "required": false,
    "hint": "Optional. Add a different idea, or leave this blank. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 7
  },
  {
    "id": "skills",
    "section": "K",
    "prompt": "How do these consultant skills feel right now?",
    "type": "matrix",
    "matrix": "skills",
    "required": true,
    "minRows": 21,
    "hint": "Choose one per row. Strong = I can help; Comfortable = I can do it; Learning = I need practice; Want to learn = I want to try it. These are not grades.",
    "grade": 7
  },
  {
    "id": "consultant-jobs",
    "section": "K",
    "prompt": "Which THREE consultant jobs would you most enjoy?",
    "type": "multi",
    "options": [
      {
        "value": "finding-information",
        "label": "Finding information",
        "tags": [
          "consultant-interest:finding-information"
        ]
      },
      {
        "value": "summarizing-information",
        "label": "Summarizing information",
        "tags": [
          "consultant-interest:summarizing-information"
        ]
      },
      {
        "value": "explaining-difficult-ideas",
        "label": "Explaining difficult ideas",
        "tags": [
          "consultant-interest:explaining-difficult-ideas"
        ]
      },
      {
        "value": "writing",
        "label": "Writing",
        "tags": [
          "consultant-interest:writing"
        ]
      },
      {
        "value": "drawing-diagrams",
        "label": "Drawing diagrams",
        "tags": [
          "consultant-interest:drawing-diagrams"
        ]
      },
      {
        "value": "visual-design",
        "label": "Visual design",
        "tags": [
          "consultant-interest:visual-design"
        ]
      },
      {
        "value": "graphing",
        "label": "Graphing",
        "tags": [
          "consultant-interest:graphing"
        ]
      },
      {
        "value": "working-with-numbers",
        "label": "Working with numbers",
        "tags": [
          "consultant-interest:working-with-numbers"
        ]
      },
      {
        "value": "spotting-patterns",
        "label": "Spotting patterns",
        "tags": [
          "consultant-interest:spotting-patterns"
        ]
      },
      {
        "value": "building",
        "label": "Building",
        "tags": [
          "consultant-interest:building"
        ]
      },
      {
        "value": "experimenting",
        "label": "Experimenting",
        "tags": [
          "consultant-interest:experimenting"
        ]
      },
      {
        "value": "technology",
        "label": "Technology",
        "tags": [
          "consultant-interest:technology"
        ]
      },
      {
        "value": "organization",
        "label": "Organization",
        "tags": [
          "consultant-interest:organization"
        ]
      },
      {
        "value": "troubleshooting",
        "label": "Troubleshooting",
        "tags": [
          "consultant-interest:troubleshooting"
        ]
      },
      {
        "value": "generating-ideas",
        "label": "Generating ideas",
        "tags": [
          "consultant-interest:generating-ideas"
        ]
      },
      {
        "value": "asking-good-questions",
        "label": "Asking good questions",
        "tags": [
          "consultant-interest:asking-good-questions"
        ]
      },
      {
        "value": "presenting",
        "label": "Presenting",
        "tags": [
          "consultant-interest:presenting"
        ]
      },
      {
        "value": "noticing-details",
        "label": "Noticing details",
        "tags": [
          "consultant-interest:noticing-details"
        ]
      },
      {
        "value": "checking-evidence",
        "label": "Checking evidence",
        "tags": [
          "consultant-interest:checking-evidence"
        ]
      },
      {
        "value": "improving-someone-else-s-idea",
        "label": "Improving someone else’s idea",
        "tags": [
          "consultant-interest:improving-someone-else-s-idea"
        ]
      },
      {
        "value": "giving-useful-feedback",
        "label": "Giving useful feedback",
        "tags": [
          "consultant-interest:giving-useful-feedback"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 3,
    "required": true,
    "hint": "Choose 3, or choose “Not sure yet” by itself.",
    "grade": 7
  },
  {
    "id": "growth",
    "section": "K",
    "prompt": "Which TWO OR THREE skills would you like to improve?",
    "type": "multi",
    "options": [
      {
        "value": "finding-information",
        "label": "Finding information",
        "tags": [
          "growth:finding-information"
        ]
      },
      {
        "value": "summarizing-information",
        "label": "Summarizing information",
        "tags": [
          "growth:summarizing-information"
        ]
      },
      {
        "value": "explaining-difficult-ideas",
        "label": "Explaining difficult ideas",
        "tags": [
          "growth:explaining-difficult-ideas"
        ]
      },
      {
        "value": "writing",
        "label": "Writing",
        "tags": [
          "growth:writing"
        ]
      },
      {
        "value": "drawing-diagrams",
        "label": "Drawing diagrams",
        "tags": [
          "growth:drawing-diagrams"
        ]
      },
      {
        "value": "visual-design",
        "label": "Visual design",
        "tags": [
          "growth:visual-design"
        ]
      },
      {
        "value": "graphing",
        "label": "Graphing",
        "tags": [
          "growth:graphing"
        ]
      },
      {
        "value": "working-with-numbers",
        "label": "Working with numbers",
        "tags": [
          "growth:working-with-numbers"
        ]
      },
      {
        "value": "spotting-patterns",
        "label": "Spotting patterns",
        "tags": [
          "growth:spotting-patterns"
        ]
      },
      {
        "value": "building",
        "label": "Building",
        "tags": [
          "growth:building"
        ]
      },
      {
        "value": "experimenting",
        "label": "Experimenting",
        "tags": [
          "growth:experimenting"
        ]
      },
      {
        "value": "technology",
        "label": "Technology",
        "tags": [
          "growth:technology"
        ]
      },
      {
        "value": "organization",
        "label": "Organization",
        "tags": [
          "growth:organization"
        ]
      },
      {
        "value": "troubleshooting",
        "label": "Troubleshooting",
        "tags": [
          "growth:troubleshooting"
        ]
      },
      {
        "value": "generating-ideas",
        "label": "Generating ideas",
        "tags": [
          "growth:generating-ideas"
        ]
      },
      {
        "value": "asking-good-questions",
        "label": "Asking good questions",
        "tags": [
          "growth:asking-good-questions"
        ]
      },
      {
        "value": "presenting",
        "label": "Presenting",
        "tags": [
          "growth:presenting"
        ]
      },
      {
        "value": "noticing-details",
        "label": "Noticing details",
        "tags": [
          "growth:noticing-details"
        ]
      },
      {
        "value": "checking-evidence",
        "label": "Checking evidence",
        "tags": [
          "growth:checking-evidence"
        ]
      },
      {
        "value": "improving-someone-else-s-idea",
        "label": "Improving someone else’s idea",
        "tags": [
          "growth:improving-someone-else-s-idea"
        ]
      },
      {
        "value": "giving-useful-feedback",
        "label": "Giving useful feedback",
        "tags": [
          "growth:giving-useful-feedback"
        ]
      },
      {
        "value": "not-sure",
        "label": "None of these / not sure yet",
        "exclusive": true,
        "tags": [
          "state:not-sure"
        ]
      }
    ],
    "max": 3,
    "min": 2,
    "required": true,
    "hint": "Choose 2 or 3, or choose “Not sure yet” by itself.",
    "grade": 7
  }
];
