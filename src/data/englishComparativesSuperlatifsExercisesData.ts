export interface ComparativesSuperlatifsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const comparativesSuperlatifsExercises: ComparativesSuperlatifsExercise[] = [
  // QCM - Formation des comparatifs courts (10 questions)
  {
    id: "formation_qcm_1",
    type: "qcm",
    question: "Choose the correct comparative form: small → ?",
    options: ["a) smaller", "b) more small", "c) smalllier", "d) smallier"],
    correctAnswer: "a) smaller",
    explanation: "Short adjectives (1 syllable) form comparatives by adding -er.",
    level: "débutant",
    category: "formation comparatifs courts"
  },
  {
    id: "formation_qcm_2",
    type: "qcm",
    question: "Select the right superlative: big → ?",
    options: ["a) bigger", "b) the biggest", "c) the most big", "d) bigly"],
    correctAnswer: "b) the biggest",
    explanation: "Short adjectives (1 syllable) form superlatives with the + -est.",
    level: "débutant",
    category: "formation superlatifs courts"
  },
  {
    id: "formation_qcm_3",
    type: "qcm",
    question: "Choose the correct comparative: happy → ?",
    options: ["a) happier", "b) more happy", "c) happyer", "d) happilier"],
    correctAnswer: "a) happier",
    explanation: "Adjectives ending in -y change y to i and add -er.",
    level: "débutant",
    category: "formation comparatifs courts"
  },
  {
    id: "formation_qcm_4",
    type: "qcm",
    question: "Select the right superlative: hot → ?",
    options: ["a) hotter", "b) the hottest", "c) the most hot", "d) hotly"],
    correctAnswer: "b) the hottest",
    explanation: "Short adjectives form superlatives with the + -est.",
    level: "débutant",
    category: "formation superlatifs courts"
  },
  {
    id: "formation_qcm_5",
    type: "qcm",
    question: "Choose the correct comparative: big → ?",
    options: ["a) biger", "b) bigger", "c) more big", "d) biglier"],
    correctAnswer: "b) bigger",
    explanation: "CVC adjectives double the final consonant before adding -er.",
    level: "débutant",
    category: "formation comparatifs courts"
  },
  {
    id: "formation_qcm_6",
    type: "qcm",
    question: "Select the right comparative: good → ?",
    options: ["a) gooder", "b) better", "c) more good", "d) goodlier"],
    correctAnswer: "b) better",
    explanation: "Good is an irregular adjective: good → better → best.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "formation_qcm_7",
    type: "qcm",
    question: "Choose the correct superlative: bad → ?",
    options: ["a) badder", "b) worse", "c) the worst", "d) the baddest"],
    correctAnswer: "c) the worst",
    explanation: "Bad is irregular: bad → worse → the worst.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "formation_qcm_8",
    type: "qcm",
    question: "Select the right comparative: far → ?",
    options: ["a) farther", "b) further", "c) more far", "d) farer"],
    correctAnswer: "a) farther",
    explanation: "Far has two comparative forms: farther/further (distance) and further (additional).",
    level: "intermédiaire",
    category: "irréguliers"
  },
  {
    id: "formation_qcm_9",
    type: "qcm",
    question: "Choose the correct comparative: interesting → ?",
    options: ["a) interestinger", "b) more interesting", "c) interestinger", "d) interestinglier"],
    correctAnswer: "b) more interesting",
    explanation: "Long adjectives (≥2 syllables) use more + adjective.",
    level: "débutant",
    category: "formation comparatifs longs"
  },
  {
    id: "formation_qcm_10",
    type: "qcm",
    question: "Select the right superlative: beautiful → ?",
    options: ["a) beautifulest", "b) the most beautiful", "c) more beautiful", "d) beautifuller"],
    correctAnswer: "b) the most beautiful",
    explanation: "Long adjectives use the most + adjective for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  },

  // QCM - Structures d'égalité et inégalité (10 questions)
  {
    id: "structures_qcm_11",
    type: "qcm",
    question: "Choose the correct structure for equality: She is ___ tall ___ her brother.",
    options: ["a) taller than", "b) as tall as", "c) the tallest", "d) more tall than"],
    correctAnswer: "b) as tall as",
    explanation: "Equality is expressed with 'as + adjective + as'.",
    level: "débutant",
    category: "égalité"
  },
  {
    id: "structures_qcm_12",
    type: "qcm",
    question: "Select the right form for inferiority: This book is ___ interesting ___ that one.",
    options: ["a) as interesting as", "b) less interesting than", "c) the least interesting", "d) more interesting than"],
    correctAnswer: "b) less interesting than",
    explanation: "Inferiority uses 'less + adjective + than'.",
    level: "intermédiaire",
    category: "infériorité"
  },
  {
    id: "structures_qcm_13",
    type: "qcm",
    question: "Choose the correct sentence: My car is ___ expensive ___ yours.",
    options: ["a) as expensive as", "b) not as expensive as", "c) less expensive than", "d) more expensive than"],
    correctAnswer: "b) not as expensive as",
    explanation: "'Not as...as' expresses inferiority or inequality.",
    level: "intermédiaire",
    category: "inégalité"
  },
  {
    id: "structures_qcm_14",
    type: "qcm",
    question: "Select the right intensifier: She's ___ better than before.",
    options: ["a) a bit", "b) far", "c) much", "d) slightly"],
    correctAnswer: "c) much",
    explanation: "'Much' intensifies comparatives for significant differences.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "structures_qcm_15",
    type: "qcm",
    question: "Choose the correct form: He's ___ taller than his sister.",
    options: ["a) a bit", "b) far", "c) much", "d) by far"],
    correctAnswer: "a) a bit",
    explanation: "'A bit' expresses small differences in comparatives.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "structures_qcm_16",
    type: "qcm",
    question: "Select the right superlative intensifier: This is ___ the best movie ever.",
    options: ["a) a bit", "b) far", "c) much", "d) by far"],
    correctAnswer: "d) by far",
    explanation: "'By far' intensifies superlatives.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "structures_qcm_17",
    type: "qcm",
    question: "Choose the correct structure: ___ you study, ___ you learn.",
    options: ["a) The more / the more", "b) More / more", "c) The most / the most", "d) As more / as more"],
    correctAnswer: "a) The more / the more",
    explanation: "'The more..., the more...' expresses parallel increases.",
    level: "avancé",
    category: "structures avancées"
  },
  {
    id: "structures_qcm_18",
    type: "qcm",
    question: "Select the right comparative: She sings ___ beautifully ___ her sister.",
    options: ["a) more beautifully than", "b) beautifuler than", "c) as beautiful as", "d) less beautiful than"],
    correctAnswer: "a) more beautifully than",
    explanation: "Adverbs use 'more + adverb + than' for comparatives.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "structures_qcm_19",
    type: "qcm",
    question: "Choose the correct form: This is ___ expensive car in the showroom.",
    options: ["a) the expensiver", "b) the more expensive", "c) the most expensive", "d) expensiver"],
    correctAnswer: "c) the most expensive",
    explanation: "Long adjectives use 'the most + adjective' for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  },
  {
    id: "structures_qcm_20",
    type: "qcm",
    question: "Select the right structure: He runs ___ fast ___ a cheetah.",
    options: ["a) faster than", "b) as fast as", "c) the fastest", "d) more fast than"],
    correctAnswer: "b) as fast as",
    explanation: "'As...as' expresses equality between two elements.",
    level: "débutant",
    category: "égalité"
  },

  // Choix multiples - Exercices mixtes (10 questions)
  {
    id: "mixed_choix_21",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) She is taller than me.",
      "b) She is taller than I.",
      "c) She is more tall than me.",
      "d) She is the taller than me."
    ],
    correctAnswer: "a) She is taller than me.",
    explanation: "Use object pronouns (me) after 'than', not subject pronouns (I).",
    level: "intermédiaire",
    category: "pièges courants"
  },
  {
    id: "mixed_choix_22",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) This is the most interesting book I ever read.",
      "b) This is the most interesting book I ever have read.",
      "c) This is the most interesting book I ever will read.",
      "d) This is the most interesting book I ever had read."
    ],
    correctAnswer: "a) This is the most interesting book I ever read.",
    explanation: "In informal English, present perfect is often omitted in superlative constructions.",
    level: "avancé",
    category: "structures avancées"
  },
  {
    id: "mixed_choix_23",
    type: "choix",
    question: "Which option shows correct usage?",
    options: [
      "a) He is the better student in the class.",
      "b) He is better than any student in the class.",
      "c) He is better than any other student in the class.",
      "d) He is the most good student in the class."
    ],
    correctAnswer: "c) He is better than any other student in the class.",
    explanation: "Use 'any other' when comparing to a group that includes the person.",
    level: "avancé",
    category: "structures avancées"
  },
  {
    id: "mixed_choix_24",
    type: "choix",
    question: "Choose the grammatically correct sentence:",
    options: [
      "a) The more I study, the more I understand.",
      "b) More I study, more I understand.",
      "c) The more I study, more I understand.",
      "d) I study more, I understand more."
    ],
    correctAnswer: "a) The more I study, the more I understand.",
    explanation: "'The more..., the more...' requires 'the' in both clauses.",
    level: "avancé",
    category: "structures avancées"
  },
  {
    id: "mixed_choix_25",
    type: "choix",
    question: "Which sentence uses the correct comparative?",
    options: [
      "a) She's much more smarter than her brother.",
      "b) She's much smarter than her brother.",
      "c) She's smarter much than her brother.",
      "d) She's more much smarter than her brother."
    ],
    correctAnswer: "b) She's much smarter than her brother.",
    explanation: "Avoid double comparatives: not 'more smarter'.",
    level: "intermédiaire",
    category: "pièges courants"
  },
  {
    id: "mixed_choix_26",
    type: "choix",
    question: "Select the correct option:",
    options: [
      "a) Paris is more bigger than London.",
      "b) Paris is bigger than London.",
      "c) Paris is more big than London.",
      "d) Paris is biger than London."
    ],
    correctAnswer: "b) Paris is bigger than London.",
    explanation: "Don't use 'more' with short adjectives that already use -er/-est.",
    level: "débutant",
    category: "pièges courants"
  },
  {
    id: "mixed_choix_27",
    type: "choix",
    question: "Which sentence is correct?",
    options: [
      "a) This test is not as harder as the last one.",
      "b) This test is not as hard as the last one.",
      "c) This test is not harder as the last one.",
      "d) This test is less harder than the last one."
    ],
    correctAnswer: "b) This test is not as hard as the last one.",
    explanation: "'Not as...as' is correct for inequality; avoid mixing structures.",
    level: "intermédiaire",
    category: "inégalité"
  },
  {
    id: "mixed_choix_28",
    type: "choix",
    question: "Choose the right sentence:",
    options: [
      "a) He's the most talentedest musician I know.",
      "b) He's the most talented musician I know.",
      "c) He's talentedest than any musician I know.",
      "d) He's more talented than most musicians I know."
    ],
    correctAnswer: "b) He's the most talented musician I know.",
    explanation: "Don't use 'more' with long adjectives in superlatives.",
    level: "débutant",
    category: "pièges courants"
  },
  {
    id: "mixed_choix_29",
    type: "choix",
    question: "Which option shows correct usage?",
    options: [
      "a) She's far more intelligent than him.",
      "b) She's far more intelligent than he.",
      "c) She's far more intelligent than his.",
      "d) She's far more intelligent than himself."
    ],
    correctAnswer: "a) She's far more intelligent than him.",
    explanation: "Use object pronouns after 'than'.",
    level: "intermédiaire",
    category: "pièges courants"
  },
  {
    id: "mixed_choix_30",
    type: "choix",
    question: "Select the grammatically correct sentence:",
    options: [
      "a) This is by far the better movie of the year.",
      "b) This is by far the best movie of the year.",
      "c) This is far by the best movie of the year.",
      "d) This is the far best movie of the year."
    ],
    correctAnswer: "b) This is by far the best movie of the year.",
    explanation: "'By far' is placed before the superlative.",
    level: "intermédiaire",
    category: "intensificateurs"
  },

  // Mots à compléter - Tous les concepts (30 questions)
  {
    id: "complet_31",
    type: "complet",
    question: "My sister is ___ (tall) than me. (comparatif court)",
    correctAnswer: "taller",
    explanation: "Short adjectives add -er for comparatives.",
    level: "débutant",
    category: "formation comparatifs courts"
  },
  {
    id: "complet_32",
    type: "complet",
    question: "This is ___ (good) restaurant in town. (superlatif irrégulier)",
    correctAnswer: "the best",
    explanation: "Good becomes 'best' in superlative form.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "complet_33",
    type: "complet",
    question: "She sings ___ (beautiful) than her friend. (comparatif long)",
    correctAnswer: "more beautifully",
    explanation: "Long adverbs use 'more + adverb + than'.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "complet_34",
    type: "complet",
    question: "He's ___ (bad) student in the class. (superlatif irrégulier)",
    correctAnswer: "the worst",
    explanation: "Bad becomes 'worst' in superlative form.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "complet_35",
    type: "complet",
    question: "This exercise is ___ (difficult) than the last one. (comparatif long)",
    correctAnswer: "more difficult",
    explanation: "Long adjectives use 'more + adjective + than'.",
    level: "débutant",
    category: "formation comparatifs longs"
  },
  {
    id: "complet_36",
    type: "complet",
    question: "Paris is ___ (old) than New York. (comparatif court)",
    correctAnswer: "older",
    explanation: "Short adjectives ending in -d add -er.",
    level: "débutant",
    category: "formation comparatifs courts"
  },
  {
    id: "complet_37",
    type: "complet",
    question: "This is ___ (expensive) car in the showroom. (superlatif long)",
    correctAnswer: "the most expensive",
    explanation: "Long adjectives use 'the most + adjective' for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  },
  {
    id: "complet_38",
    type: "complet",
    question: "She works ___ (hard) than anyone else. (comparatif d'adverbe)",
    correctAnswer: "harder",
    explanation: "Short adverbs add -er for comparatives.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "complet_39",
    type: "complet",
    question: "He's ___ (far) from home than I thought. (comparatif irrégulier)",
    correctAnswer: "farther",
    explanation: "Far has irregular forms: farther/further.",
    level: "intermédiaire",
    category: "irréguliers"
  },
  {
    id: "complet_40",
    type: "complet",
    question: "This painting is ___ (valuable) in the collection. (superlatif long)",
    correctAnswer: "the most valuable",
    explanation: "Long adjectives use 'the most + adjective' for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  },
  {
    id: "complet_41",
    type: "complet",
    question: "She is ___ tall ___ her brother. (égalité)",
    correctAnswer: "as / as",
    explanation: "Equality is expressed with 'as...as'.",
    level: "débutant",
    category: "égalité"
  },
  {
    id: "complet_42",
    type: "complet",
    question: "This book is ___ interesting ___ that one. (infériorité)",
    correctAnswer: "less / than",
    explanation: "Inferiority uses 'less...than'.",
    level: "intermédiaire",
    category: "infériorité"
  },
  {
    id: "complet_43",
    type: "complet",
    question: "The movie was ___ bad ___ I expected. (inégalité)",
    correctAnswer: "not as / as",
    explanation: "'Not as...as' expresses inferiority.",
    level: "intermédiaire",
    category: "inégalité"
  },
  {
    id: "complet_44",
    type: "complet",
    question: "She's ___ better at math than before. (intensificateur)",
    correctAnswer: "much",
    explanation: "'Much' intensifies comparatives for significant differences.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "complet_45",
    type: "complet",
    question: "He's ___ taller than his sister. (intensificateur)",
    correctAnswer: "a bit",
    explanation: "'A bit' expresses small differences.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "complet_46",
    type: "complet",
    question: "This is ___ the best performance ever. (intensificateur)",
    correctAnswer: "by far",
    explanation: "'By far' intensifies superlatives.",
    level: "intermédiaire",
    category: "intensificateurs"
  },
  {
    id: "complet_47",
    type: "complet",
    question: "___ you practice, ___ you improve. (structure avancée)",
    correctAnswer: "The more / the more",
    explanation: "'The more..., the more...' expresses parallel increases.",
    level: "avancé",
    category: "structures avancées"
  },
  {
    id: "complet_48",
    type: "complet",
    question: "This test is ___ difficult ___ the previous one. (comparatif long)",
    correctAnswer: "more / than",
    explanation: "Long adjectives use 'more...than' for comparatives.",
    level: "débutant",
    category: "formation comparatifs longs"
  },
  {
    id: "complet_49",
    type: "complet",
    question: "She's ___ beautiful woman I've ever met. (superlatif court)",
    correctAnswer: "the most",
    explanation: "Beautiful has 3 syllables, so uses 'the most'.",
    level: "débutant",
    category: "formation superlatifs longs"
  },
  {
    id: "complet_50",
    type: "complet",
    question: "He runs ___ fast ___ a professional athlete. (égalité)",
    correctAnswer: "as / as",
    explanation: "Equality with adverbs uses 'as...as'.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "complet_51",
    type: "complet",
    question: "This is ___ interesting documentary I've seen. (superlatif long)",
    correctAnswer: "the most",
    explanation: "Long adjectives use 'the most' for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  },
  {
    id: "complet_52",
    type: "complet",
    question: "She works ___ hard ___ anyone in the team. (comparatif d'adverbe)",
    correctAnswer: "harder / than",
    explanation: "Short adverbs add -er for comparatives.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "complet_53",
    type: "complet",
    question: "The weather is getting ___ bad ___ last week. (comparatif irrégulier)",
    correctAnswer: "worse / than",
    explanation: "Bad becomes 'worse' in comparative form.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "complet_54",
    type: "complet",
    question: "He's ___ good student in his class. (superlatif irrégulier)",
    correctAnswer: "the best",
    explanation: "Good becomes 'best' in superlative form.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "complet_55",
    type: "complet",
    question: "This problem is ___ complex ___ I thought. (comparatif long)",
    correctAnswer: "more / than",
    explanation: "Long adjectives use 'more...than' for comparatives.",
    level: "débutant",
    category: "formation comparatifs longs"
  },
  {
    id: "complet_56",
    type: "complet",
    question: "She speaks English ___ fluently ___ a native speaker. (égalité)",
    correctAnswer: "as / as",
    explanation: "Equality is expressed with 'as...as'.",
    level: "intermédiaire",
    category: "adverbes"
  },
  {
    id: "complet_57",
    type: "complet",
    question: "This restaurant is ___ expensive ___ the other one. (comparatif long)",
    correctAnswer: "more / than",
    explanation: "Long adjectives use 'more...than' for comparatives.",
    level: "débutant",
    category: "formation comparatifs longs"
  },
  {
    id: "complet_58",
    type: "complet",
    question: "He's ___ fast runner in the school. (superlatif court)",
    correctAnswer: "the fastest",
    explanation: "Fast is a short adjective, so uses 'the fastest'.",
    level: "débutant",
    category: "formation superlatifs courts"
  },
  {
    id: "complet_59",
    type: "complet",
    question: "The situation is getting ___ worse ___ before. (comparatif irrégulier)",
    correctAnswer: "worse / than",
    explanation: "Bad becomes 'worse' in comparative form.",
    level: "débutant",
    category: "irréguliers"
  },
  {
    id: "complet_60",
    type: "complet",
    question: "This is ___ beautiful place I've ever visited. (superlatif long)",
    correctAnswer: "the most",
    explanation: "Long adjectives use 'the most' for superlatives.",
    level: "débutant",
    category: "formation superlatifs longs"
  }
];

export const comparativesSuperlatifsCategories = [
  "formation comparatifs courts",
  "formation comparatifs longs",
  "formation superlatifs courts",
  "formation superlatifs longs",
  "irréguliers",
  "égalité",
  "infériorité",
  "inégalité",
  "intensificateurs",
  "adverbes",
  "structures avancées",
  "pièges courants"
];

export const getComparativesSuperlatifsExercisesByType = (type: ComparativesSuperlatifsExercise['type']) => {
  return comparativesSuperlatifsExercises.filter(exercise => exercise.type === type);
};

export const getComparativesSuperlatifsExercisesByCategory = (category: string) => {
  return comparativesSuperlatifsExercises.filter(exercise => exercise.category === category);
};

export const getComparativesSuperlatifsExercisesByLevel = (level: ComparativesSuperlatifsExercise['level']) => {
  return comparativesSuperlatifsExercises.filter(exercise => exercise.level === level);
};
