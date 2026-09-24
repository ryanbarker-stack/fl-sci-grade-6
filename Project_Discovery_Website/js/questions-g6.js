/* Grade 6: edit prompts and options here. Keep existing ids/values stable. */
PD.questions = PD.questions || {};
PD.questions[6] = [
  {
    "id": "phenomena",
    "section": "A",
    "prompt": "Which questions would you most like to explore?",
    "type": "multi",
    "options": [
      {
        "value": "why-do-hurricanes-sometimes-strengthen-quickly",
        "label": "Why do hurricanes sometimes strengthen quickly?",
        "tags": [
          "phenomenon:why-do-hurricanes-sometimes-strengthen-quickly",
          "domain:meteorology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "why-does-florida-have-sinkholes",
        "label": "Why does Florida have sinkholes?",
        "tags": [
          "phenomenon:why-does-florida-have-sinkholes",
          "domain:hydrogeology",
          "domain:geology"
        ]
      },
      {
        "value": "why-does-a-beach-change-after-a-storm",
        "label": "Why does a beach change after a storm?",
        "tags": [
          "phenomenon:why-does-a-beach-change-after-a-storm",
          "domain:geomorphology",
          "domain:oceanography"
        ]
      },
      {
        "value": "why-is-rain-heavy-on-one-street-but-light-nearby",
        "label": "Why is rain heavy on one street but light nearby?",
        "tags": [
          "phenomenon:why-is-rain-heavy-on-one-street-but-light-nearby",
          "domain:meteorology"
        ]
      },
      {
        "value": "how-does-a-sea-fossil-end-up-inside-a-rock-on-land",
        "label": "How does a sea fossil end up inside a rock on land?",
        "tags": [
          "phenomenon:how-does-a-sea-fossil-end-up-inside-a-rock-on-land",
          "domain:paleontology",
          "domain:geology"
        ]
      },
      {
        "value": "why-do-earthquakes-happen-more-often-in-some-places",
        "label": "Why do earthquakes happen more often in some places?",
        "tags": [
          "phenomenon:why-do-earthquakes-happen-more-often-in-some-places",
          "domain:geophysics",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "how-do-volcanoes-build-islands",
        "label": "How do volcanoes build islands?",
        "tags": [
          "phenomenon:how-do-volcanoes-build-islands",
          "domain:geology",
          "domain:geomorphology"
        ]
      },
      {
        "value": "where-does-rainwater-go-after-it-sinks-underground",
        "label": "Where does rainwater go after it sinks underground?",
        "tags": [
          "phenomenon:where-does-rainwater-go-after-it-sinks-underground",
          "domain:hydrology",
          "domain:hydrogeology"
        ]
      },
      {
        "value": "how-can-ice-and-rocks-reveal-past-climates",
        "label": "How can ice and rocks reveal past climates?",
        "tags": [
          "phenomenon:how-can-ice-and-rocks-reveal-past-climates",
          "domain:climatology",
          "domain:geology"
        ]
      },
      {
        "value": "why-do-stars-have-different-colors",
        "label": "Why do stars have different colors?",
        "tags": [
          "phenomenon:why-do-stars-have-different-colors",
          "domain:astronomy"
        ]
      },
      {
        "value": "why-does-the-moon-seem-to-change-shape",
        "label": "Why does the Moon seem to change shape?",
        "tags": [
          "phenomenon:why-does-the-moon-seem-to-change-shape",
          "domain:astronomy"
        ]
      },
      {
        "value": "why-do-some-planets-have-rings",
        "label": "Why do some planets have rings?",
        "tags": [
          "phenomenon:why-do-some-planets-have-rings",
          "domain:planetary-science"
        ]
      },
      {
        "value": "how-can-scientists-study-the-inside-of-earth",
        "label": "How can scientists study the inside of Earth?",
        "tags": [
          "phenomenon:how-can-scientists-study-the-inside-of-earth",
          "domain:geophysics"
        ]
      },
      {
        "value": "how-do-satellites-show-changes-on-earth",
        "label": "How do satellites show changes on Earth?",
        "tags": [
          "phenomenon:how-do-satellites-show-changes-on-earth",
          "domain:remote-sensing",
          "domain:earth-systems"
        ]
      },
      {
        "value": "why-do-some-neighborhoods-flood-more-easily",
        "label": "Why do some neighborhoods flood more easily?",
        "tags": [
          "phenomenon:why-do-some-neighborhoods-flood-more-easily",
          "domain:hydrology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "why-do-continents-seem-to-fit-together",
        "label": "Why do continents seem to fit together?",
        "tags": [
          "phenomenon:why-do-continents-seem-to-fit-together",
          "domain:geology"
        ]
      },
      {
        "value": "how-can-we-measure-the-distance-to-a-star",
        "label": "How can we measure the distance to a star?",
        "tags": [
          "phenomenon:how-can-we-measure-the-distance-to-a-star",
          "domain:astronomy"
        ]
      },
      {
        "value": "why-do-some-soils-hold-more-water",
        "label": "Why do some soils hold more water?",
        "tags": [
          "phenomenon:why-do-some-soils-hold-more-water",
          "domain:soils",
          "domain:hydrology"
        ]
      },
      {
        "value": "how-do-ocean-currents-carry-heat",
        "label": "How do ocean currents carry heat?",
        "tags": [
          "phenomenon:how-do-ocean-currents-carry-heat",
          "domain:oceanography",
          "domain:climatology"
        ]
      },
      {
        "value": "how-can-a-rover-find-a-safe-route-on-mars",
        "label": "How can a rover find a safe route on Mars?",
        "tags": [
          "phenomenon:how-can-a-rover-find-a-safe-route-on-mars",
          "domain:space-exploration",
          "domain:planetary-science"
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
    "grade": 6
  },
  {
    "id": "environments",
    "section": "B",
    "prompt": "Where would you spend a day investigating?",
    "type": "multi",
    "options": [
      {
        "value": "a-cave",
        "label": "A cave",
        "tags": [
          "environment:a-cave",
          "domain:geology",
          "domain:hydrogeology"
        ]
      },
      {
        "value": "a-beach",
        "label": "A beach",
        "tags": [
          "environment:a-beach",
          "domain:oceanography",
          "domain:geomorphology"
        ]
      },
      {
        "value": "a-river",
        "label": "A river",
        "tags": [
          "environment:a-river",
          "domain:hydrology"
        ]
      },
      {
        "value": "a-mountain",
        "label": "A mountain",
        "tags": [
          "environment:a-mountain",
          "domain:geology",
          "domain:geomorphology"
        ]
      },
      {
        "value": "a-desert",
        "label": "A desert",
        "tags": [
          "environment:a-desert",
          "domain:geomorphology",
          "domain:climatology"
        ]
      },
      {
        "value": "a-volcano-through-images",
        "label": "A volcano, through images",
        "tags": [
          "environment:a-volcano-through-images",
          "domain:geology"
        ]
      },
      {
        "value": "a-glacier-through-data",
        "label": "A glacier, through data",
        "tags": [
          "environment:a-glacier-through-data",
          "domain:climatology"
        ]
      },
      {
        "value": "the-deep-ocean-through-images",
        "label": "The deep ocean, through images",
        "tags": [
          "environment:the-deep-ocean-through-images",
          "domain:oceanography"
        ]
      },
      {
        "value": "a-florida-wetland",
        "label": "A Florida wetland",
        "tags": [
          "environment:a-florida-wetland",
          "domain:hydrology",
          "domain:earth-systems"
        ]
      },
      {
        "value": "a-city-during-a-storm-through-data",
        "label": "A city during a storm, through data",
        "tags": [
          "environment:a-city-during-a-storm-through-data",
          "domain:meteorology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "the-night-sky",
        "label": "The night sky",
        "tags": [
          "environment:the-night-sky",
          "domain:astronomy"
        ]
      },
      {
        "value": "the-moon-through-images",
        "label": "The Moon, through images",
        "tags": [
          "environment:the-moon-through-images",
          "domain:planetary-science"
        ]
      },
      {
        "value": "mars-through-rover-data",
        "label": "Mars, through rover data",
        "tags": [
          "environment:mars-through-rover-data",
          "domain:planetary-science",
          "domain:space-exploration"
        ]
      },
      {
        "value": "an-asteroid-through-spacecraft-data",
        "label": "An asteroid, through spacecraft data",
        "tags": [
          "environment:an-asteroid-through-spacecraft-data",
          "domain:planetary-science",
          "domain:space-exploration"
        ]
      },
      {
        "value": "an-underground-aquifer-through-a-model",
        "label": "An underground aquifer, through a model",
        "tags": [
          "environment:an-underground-aquifer-through-a-model",
          "domain:hydrogeology"
        ]
      },
      {
        "value": "a-fossil-site",
        "label": "A fossil site",
        "tags": [
          "environment:a-fossil-site",
          "domain:paleontology"
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
    "grade": 6
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
    "grade": 6
  },
  {
    "id": "interest-focus",
    "section": "C",
    "prompt": "Which part of your interests might you like to look at more closely?",
    "type": "multi",
    "options": [
      {
        "value": "how-weather-changes-a-game-trip-or-outdoor-activity",
        "label": "How weather changes a game, trip, or outdoor activity",
        "whenAny": [
          "sports-basketball-soccer",
          "fishing",
          "hiking-outdoors",
          "weather",
          "boating",
          "beaches"
        ],
        "tags": [
          "interest-focus:how-weather-changes-a-game-trip-or-outdoor-activity",
          "domain:meteorology"
        ]
      },
      {
        "value": "how-maps-help-people-find-places-and-patterns",
        "label": "How maps help people find places and patterns",
        "whenAny": [
          "gaming",
          "maps",
          "puzzles",
          "technology"
        ],
        "tags": [
          "interest-focus:how-maps-help-people-find-places-and-patterns",
          "domain:gis-mapping"
        ]
      },
      {
        "value": "how-images-taken-from-above-reveal-changes",
        "label": "How images taken from above reveal changes",
        "whenAny": [
          "photography-video",
          "technology",
          "maps",
          "creating-online-content"
        ],
        "tags": [
          "interest-focus:how-images-taken-from-above-reveal-changes",
          "domain:remote-sensing"
        ]
      },
      {
        "value": "how-water-moves-sand-soil-or-a-riverbank",
        "label": "How water moves sand, soil, or a riverbank",
        "whenAny": [
          "fishing",
          "beaches",
          "boating",
          "gardening"
        ],
        "tags": [
          "interest-focus:how-water-moves-sand-soil-or-a-riverbank",
          "domain:hydrology",
          "domain:geomorphology"
        ]
      },
      {
        "value": "how-materials-and-surfaces-wear-or-change",
        "label": "How materials and surfaces wear or change",
        "whenAny": [
          "fashion-sneakers-design",
          "building-making",
          "cars-vehicles",
          "collecting-things"
        ],
        "tags": [
          "interest-focus:how-materials-and-surfaces-wear-or-change"
        ]
      },
      {
        "value": "how-color-light-or-sound-can-carry-information",
        "label": "How color, light, or sound can carry information",
        "whenAny": [
          "drawing-art",
          "music",
          "photography-video",
          "gaming"
        ],
        "tags": [
          "interest-focus:how-color-light-or-sound-can-carry-information"
        ]
      },
      {
        "value": "how-people-test-or-improve-a-design",
        "label": "How people test or improve a design",
        "whenAny": [
          "sports-basketball-soccer",
          "fashion-sneakers-design",
          "building-making",
          "technology"
        ],
        "tags": [
          "interest-focus:how-people-test-or-improve-a-design"
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
    "grade": 6
  },
  {
    "id": "interest-detail",
    "section": "C",
    "prompt": "Pick one thing you enjoy. What part keeps your attention?",
    "type": "text",
    "required": true,
    "hint": "For example: a pattern, a challenge, a detail, or how something changes. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
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
    "grade": 6
  },
  {
    "id": "noticed",
    "section": "D",
    "prompt": "What have you noticed that seems strange, surprising, or hard to explain?",
    "type": "text",
    "required": true,
    "hint": "For example: a puddle disappears unevenly, or a plant leans. Your own example can be very different. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
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
    "grade": 6
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
    "grade": 6
  },
  {
    "id": "problems",
    "section": "G",
    "prompt": "Which problems would you like to understand better?",
    "type": "multi",
    "options": [
      {
        "value": "flooding",
        "label": "Flooding",
        "tags": [
          "problem:flooding",
          "domain:hydrology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "hurricane-damage",
        "label": "Hurricane damage",
        "tags": [
          "problem:hurricane-damage",
          "domain:meteorology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "beach-erosion",
        "label": "Beach erosion",
        "tags": [
          "problem:beach-erosion",
          "domain:geomorphology",
          "domain:oceanography"
        ]
      },
      {
        "value": "extreme-heat",
        "label": "Extreme heat",
        "tags": [
          "problem:extreme-heat",
          "domain:climatology",
          "domain:environmental-earth-science"
        ]
      },
      {
        "value": "drought",
        "label": "Drought",
        "tags": [
          "problem:drought",
          "domain:climatology",
          "domain:hydrology"
        ]
      },
      {
        "value": "water-pollution",
        "label": "Water pollution",
        "tags": [
          "problem:water-pollution",
          "domain:environmental-earth-science",
          "domain:hydrology"
        ]
      },
      {
        "value": "drinking-water-supplies",
        "label": "Drinking-water supplies",
        "tags": [
          "problem:drinking-water-supplies",
          "domain:hydrogeology",
          "domain:hydrology"
        ]
      },
      {
        "value": "light-pollution",
        "label": "Light pollution",
        "tags": [
          "problem:light-pollution",
          "domain:astronomy",
          "domain:environmental-earth-science"
        ]
      },
      {
        "value": "space-debris",
        "label": "Space debris",
        "tags": [
          "problem:space-debris",
          "domain:space-exploration"
        ]
      },
      {
        "value": "dangerous-weather",
        "label": "Dangerous weather",
        "tags": [
          "problem:dangerous-weather",
          "domain:meteorology",
          "domain:natural-hazards"
        ]
      },
      {
        "value": "coastline-changes",
        "label": "Coastline changes",
        "tags": [
          "problem:coastline-changes",
          "domain:geomorphology"
        ]
      },
      {
        "value": "climate-changes",
        "label": "Climate changes",
        "tags": [
          "problem:climate-changes",
          "domain:climatology"
        ]
      },
      {
        "value": "protecting-natural-areas",
        "label": "Protecting natural areas",
        "tags": [
          "problem:protecting-natural-areas",
          "domain:environmental-earth-science"
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
    "grade": 6
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
    "grade": 6
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
    "grade": 6
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
    "grade": 6
  },
  {
    "id": "keep-going",
    "section": "I",
    "prompt": "What would make you want to keep coming back to a project?",
    "type": "text",
    "required": false,
    "hint": "Optional: think about noticing change, solving a puzzle, making something, or learning more. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
  },
  {
    "id": "wonder",
    "section": "J",
    "prompt": "What is something about nature, Earth, space, or living things that you wonder about?",
    "type": "text",
    "required": true,
    "hint": "You do not need a project idea yet. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
  },
  {
    "id": "scientist-question",
    "section": "J",
    "prompt": "If a scientist could answer one question for you, what would you ask?",
    "type": "text",
    "required": true,
    "hint": "It can be about something you see often or something far away. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
  },
  {
    "id": "improve",
    "section": "J",
    "prompt": "Is there something you would like to understand, predict, explain, or improve?",
    "type": "text",
    "required": false,
    "hint": "Optional. Add a different idea, or leave this blank. A phrase or 1–2 sentences is enough. Do not include names or personal details.",
    "grade": 6
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
    "grade": 6
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
    "grade": 6
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
    "grade": 6
  }
];
