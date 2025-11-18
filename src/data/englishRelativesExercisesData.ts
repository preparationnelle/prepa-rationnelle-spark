export interface RelativesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const relativesExercises: RelativesExercise[] = [
  // QCM - Who/Whom/Which/That (15 questions)
  {
    id: "relatives_qcm_1",
    type: "qcm",
    question: "Choose the correct relative pronoun: The man ___ lives next door is very friendly.",
    options: ["a) who", "b) which", "c) that", "d) whose"],
    correctAnswer: "a) who",
    explanation: "Use 'who' for people as subjects.",
    level: "débutant",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_2",
    type: "qcm",
    question: "Select the right pronoun: The book ___ I read last week was interesting.",
    options: ["a) who", "b) which", "c) whose", "d) where"],
    correctAnswer: "b) which",
    explanation: "Use 'which' for things/objects.",
    level: "débutant",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_3",
    type: "qcm",
    question: "Choose the correct option: The person ___ car is red is my neighbor.",
    options: ["a) who", "b) which", "c) whose", "d) whom"],
    correctAnswer: "c) whose",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "whose"
  },
  {
    id: "relatives_qcm_4",
    type: "qcm",
    question: "Select the right pronoun: The restaurant ___ we ate was excellent.",
    options: ["a) who", "b) whose", "c) where", "d) when"],
    correctAnswer: "c) where",
    explanation: "Use 'where' to refer to places.",
    level: "intermédiaire",
    category: "where/when"
  },
  {
    id: "relatives_qcm_5",
    type: "qcm",
    question: "Choose the correct option: The day ___ we met was sunny.",
    options: ["a) who", "b) which", "c) when", "d) whose"],
    correctAnswer: "c) when",
    explanation: "Use 'when' to refer to times/dates.",
    level: "intermédiaire",
    category: "where/when"
  },
  {
    id: "relatives_qcm_6",
    type: "qcm",
    question: "Select the right pronoun: The students ___ study hard will succeed.",
    options: ["a) who", "b) which", "c) that", "d) whose"],
    correctAnswer: "c) that",
    explanation: "Use 'that' as a general relative pronoun for restrictive clauses.",
    level: "intermédiaire",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_7",
    type: "qcm",
    question: "Choose the correct option: The woman ___ I spoke to yesterday is a doctor.",
    options: ["a) who", "b) whom", "c) which", "d) whose"],
    correctAnswer: "b) whom",
    explanation: "Use 'whom' for people as objects (formal).",
    level: "avancé",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_8",
    type: "qcm",
    question: "Select the right pronoun: The movie ___ we saw was boring.",
    options: ["a) who", "b) which", "c) whose", "d) that"],
    correctAnswer: "b) which",
    explanation: "Use 'which' for things/objects.",
    level: "débutant",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_9",
    type: "qcm",
    question: "Choose the correct option: The city ___ I was born is beautiful.",
    options: ["a) who", "b) which", "c) where", "d) when"],
    correctAnswer: "c) where",
    explanation: "Use 'where' to refer to places.",
    level: "intermédiaire",
    category: "where/when"
  },
  {
    id: "relatives_qcm_10",
    type: "qcm",
    question: "Select the right pronoun: The people ___ work here are friendly.",
    options: ["a) who", "b) which", "c) whose", "d) that"],
    correctAnswer: "a) who",
    explanation: "Use 'who' for people.",
    level: "débutant",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_11",
    type: "qcm",
    question: "Choose the correct option: The time ___ I arrived was 5 PM.",
    options: ["a) who", "b) which", "c) when", "d) where"],
    correctAnswer: "c) when",
    explanation: "Use 'when' to refer to times.",
    level: "intermédiaire",
    category: "where/when"
  },
  {
    id: "relatives_qcm_12",
    type: "qcm",
    question: "Select the right pronoun: The gift ___ I received was expensive.",
    options: ["a) who", "b) which", "c) whose", "d) that"],
    correctAnswer: "b) which",
    explanation: "Use 'which' for things/objects.",
    level: "débutant",
    category: "who/which/that"
  },
  {
    id: "relatives_qcm_13",
    type: "qcm",
    question: "Choose the correct option: The man ___ dog is barking is my neighbor.",
    options: ["a) who", "b) which", "c) whose", "d) whom"],
    correctAnswer: "c) whose",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "whose"
  },
  {
    id: "relatives_qcm_14",
    type: "qcm",
    question: "Select the right pronoun: The hotel ___ we stayed was luxurious.",
    options: ["a) who", "b) whose", "c) where", "d) when"],
    correctAnswer: "c) where",
    explanation: "Use 'where' to refer to places.",
    level: "intermédiaire",
    category: "where/when"
  },
  {
    id: "relatives_qcm_15",
    type: "qcm",
    question: "Choose the correct option: The students ___ arrived late were punished.",
    options: ["a) who", "b) which", "c) that", "d) whose"],
    correctAnswer: "c) that",
    explanation: "Use 'that' for restrictive clauses with people or things.",
    level: "intermédiaire",
    category: "who/which/that"
  },

  // QCM - Restrictive vs Non-Restrictive (10 questions)
  {
    id: "relatives_qcm_16",
    type: "qcm",
    question: "Choose the correct clause type: The book ___ I borrowed from the library was interesting. (no commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "a) restrictive",
    explanation: "Restrictive clauses identify which book specifically, no commas needed.",
    level: "intermédiaire",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_17",
    type: "qcm",
    question: "Select the right option: My brother, ___ lives in Paris, is coming to visit. (with commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "b) non-restrictive",
    explanation: "Non-restrictive clauses add extra information and use commas.",
    level: "intermédiaire",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_18",
    type: "qcm",
    question: "Choose the correct pronoun for a restrictive clause: The student ___ got the highest grade will get a prize.",
    options: ["a) who", "b) which", "c) that", "d) all of the above"],
    correctAnswer: "d) all of the above",
    explanation: "In restrictive clauses, who, which, or that can all be used.",
    level: "avancé",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_19",
    type: "qcm",
    question: "Select the right pronoun: My car, ___ I bought last year, needs repair. (with commas)",
    options: ["a) who", "b) which", "c) that", "d) whose"],
    correctAnswer: "b) which",
    explanation: "In non-restrictive clauses, 'that' cannot be used.",
    level: "avancé",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_20",
    type: "qcm",
    question: "Choose the correct clause type: The house ___ Jack built is famous. (no commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "a) restrictive",
    explanation: "This identifies which specific house, so it's restrictive.",
    level: "intermédiaire",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_21",
    type: "qcm",
    question: "Select the right option: London, ___ is the capital of England, is a big city. (with commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "b) non-restrictive",
    explanation: "This adds extra information about London, using commas.",
    level: "intermédiaire",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_22",
    type: "qcm",
    question: "Choose the correct pronoun: The man ___ lives next door is my friend. (no commas)",
    options: ["a) who", "b) which", "c) that", "d) all except which"],
    correctAnswer: "d) all except which",
    explanation: "For people, you can use who or that in restrictive clauses.",
    level: "avancé",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_23",
    type: "qcm",
    question: "Select the right clause type: Shakespeare, ___ wrote Romeo and Juliet, was a famous playwright. (with commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "b) non-restrictive",
    explanation: "This adds extra information about Shakespeare.",
    level: "intermédiaire",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_24",
    type: "qcm",
    question: "Choose the correct option: The movie ___ we saw yesterday was terrible. (no commas)",
    options: ["a) restrictive", "b) non-restrictive", "c) both possible", "d) neither"],
    correctAnswer: "a) restrictive",
    explanation: "This identifies which specific movie, so it's restrictive.",
    level: "débutant",
    category: "restrictive/non-restrictive"
  },
  {
    id: "relatives_qcm_25",
    type: "qcm",
    question: "Select the right pronoun for non-restrictive clauses:",
    options: ["a) that", "b) who", "c) which", "d) b and c only"],
    correctAnswer: "d) b and c only",
    explanation: "'That' cannot be used in non-restrictive clauses.",
    level: "avancé",
    category: "restrictive/non-restrictive"
  },

  // Choix multiples - Mixed exercises (15 questions)
  {
    id: "relatives_choix_26",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) The man who car is red is my neighbor.",
      "b) The man whose car is red is my neighbor.",
      "c) The man which car is red is my neighbor.",
      "d) The man that car is red is my neighbor."
    ],
    correctAnswer: "b) The man whose car is red is my neighbor.",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_27",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) The city where I live is Paris.",
      "b) The city which I live is Paris.",
      "c) The city who I live is Paris.",
      "d) The city when I live is Paris."
    ],
    correctAnswer: "a) The city where I live is Paris.",
    explanation: "Use 'where' for places.",
    level: "débutant",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_28",
    type: "choix",
    question: "Choose the grammatically correct option:",
    options: [
      "a) The day when we met was rainy.",
      "b) The day where we met was rainy.",
      "c) The day which we met was rainy.",
      "d) The day who we met was rainy."
    ],
    correctAnswer: "a) The day when we met was rainy.",
    explanation: "Use 'when' for times/dates.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_29",
    type: "choix",
    question: "Which sentence uses the correct relative pronoun?",
    options: [
      "a) The book who I read was interesting.",
      "b) The book which I read was interesting.",
      "c) The book that I read was interesting.",
      "d) Both b and c are correct."
    ],
    correctAnswer: "d) Both b and c are correct.",
    explanation: "Both 'which' and 'that' can be used for things in restrictive clauses.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_30",
    type: "choix",
    question: "Select the correct sentence with commas:",
    options: [
      "a) My sister who lives in London is coming to visit.",
      "b) My sister, who lives in London, is coming to visit.",
      "c) My sister that lives in London is coming to visit.",
      "d) My sister, that lives in London, is coming to visit."
    ],
    correctAnswer: "b) My sister, who lives in London, is coming to visit.",
    explanation: "Non-restrictive clauses require commas and cannot use 'that'.",
    level: "avancé",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_31",
    type: "choix",
    question: "Choose the correct option:",
    options: [
      "a) The restaurant where we ate was expensive.",
      "b) The restaurant which we ate was expensive.",
      "c) The restaurant who we ate was expensive.",
      "d) The restaurant when we ate was expensive."
    ],
    correctAnswer: "a) The restaurant where we ate was expensive.",
    explanation: "Use 'where' for places.",
    level: "débutant",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_32",
    type: "choix",
    question: "Which sentence is correct?",
    options: [
      "a) The teacher whom the students respect is strict.",
      "b) The teacher who the students respect is strict.",
      "c) The teacher that the students respect is strict.",
      "d) All of the above are correct."
    ],
    correctAnswer: "d) All of the above are correct.",
    explanation: "All three pronouns can be used for people as objects.",
    level: "avancé",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_33",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) This is the house where I grew up.",
      "b) This is the house which I grew up.",
      "c) This is the house who I grew up.",
      "d) This is the house when I grew up."
    ],
    correctAnswer: "a) This is the house where I grew up.",
    explanation: "Use 'where' for places.",
    level: "débutant",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_34",
    type: "choix",
    question: "Choose the grammatically correct option:",
    options: [
      "a) The year when I was born was 1990.",
      "b) The year where I was born was 1990.",
      "c) The year which I was born was 1990.",
      "d) The year who I was born was 1990."
    ],
    correctAnswer: "a) The year when I was born was 1990.",
    explanation: "Use 'when' for times/dates.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_35",
    type: "choix",
    question: "Which sentence uses 'whose' correctly?",
    options: [
      "a) The woman whose husband is a doctor.",
      "b) The woman who husband is a doctor.",
      "c) The woman which husband is a doctor.",
      "d) The woman that husband is a doctor."
    ],
    correctAnswer: "a) The woman whose husband is a doctor.",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_36",
    type: "choix",
    question: "Select the correct non-restrictive clause:",
    options: [
      "a) Paris, that is the capital of France, is beautiful.",
      "b) Paris, which is the capital of France, is beautiful.",
      "c) Paris that is the capital of France is beautiful.",
      "d) Paris which is the capital of France is beautiful."
    ],
    correctAnswer: "b) Paris, which is the capital of France, is beautiful.",
    explanation: "Non-restrictive clauses use commas and cannot use 'that'.",
    level: "avancé",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_37",
    type: "choix",
    question: "Choose the correct option:",
    options: [
      "a) The museum where we visited was interesting.",
      "b) The museum which we visited was interesting.",
      "c) The museum that we visited was interesting.",
      "d) All of the above are correct."
    ],
    correctAnswer: "d) All of the above are correct.",
    explanation: "All three pronouns can be used for places in restrictive clauses.",
    level: "intermédiaire",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_38",
    type: "choix",
    question: "Which sentence is correct?",
    options: [
      "a) This is the moment when I met her.",
      "b) This is the moment where I met her.",
      "c) This is the moment which I met her.",
      "d) This is the moment who I met her."
    ],
    correctAnswer: "a) This is the moment when I met her.",
    explanation: "Use 'when' for times/dates.",
    level: "débutant",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_39",
    type: "choix",
    question: "Select the correct restrictive clause:",
    options: [
      "a) The book, which I borrowed, was good.",
      "b) The book which I borrowed was good.",
      "c) The book, that I borrowed, was good.",
      "d) Both a and b are correct."
    ],
    correctAnswer: "b) The book which I borrowed was good.",
    explanation: "Restrictive clauses don't use commas, and 'that' can be used.",
    level: "avancé",
    category: "mixed relatives"
  },
  {
    id: "relatives_choix_40",
    type: "choix",
    question: "Choose the correct sentence:",
    options: [
      "a) The person whose I spoke to was helpful.",
      "b) The person who I spoke to was helpful.",
      "c) The person whom I spoke to was helpful.",
      "d) Both b and c are correct."
    ],
    correctAnswer: "d) Both b and c are correct.",
    explanation: "Both 'who' and 'whom' can be used for people as objects.",
    level: "avancé",
    category: "mixed relatives"
  },

  // Mots à compléter - All concepts (20 questions)
  {
    id: "relatives_complet_41",
    type: "complet",
    question: "The man ___ lives next door is very friendly. (people, subject)",
    correctAnswer: "who",
    explanation: "Use 'who' for people as subjects.",
    level: "débutant",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_42",
    type: "complet",
    question: "The book ___ I read was interesting. (things)",
    correctAnswer: "which",
    explanation: "Use 'which' for things/objects.",
    level: "débutant",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_43",
    type: "complet",
    question: "The woman ___ car is red is my neighbor. (possession)",
    correctAnswer: "whose",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_44",
    type: "complet",
    question: "The restaurant ___ we ate was excellent. (place)",
    correctAnswer: "where",
    explanation: "Use 'where' to refer to places.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_45",
    type: "complet",
    question: "The day ___ we met was sunny. (time)",
    correctAnswer: "when",
    explanation: "Use 'when' to refer to times/dates.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_46",
    type: "complet",
    question: "The students ___ study hard will succeed. (general, restrictive)",
    correctAnswer: "that",
    explanation: "Use 'that' as a general relative pronoun in restrictive clauses.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_47",
    type: "complet",
    question: "The person ___ I spoke to was helpful. (people, object, formal)",
    correctAnswer: "whom",
    explanation: "Use 'whom' for people as objects in formal contexts.",
    level: "avancé",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_48",
    type: "complet",
    question: "The movie ___ we saw was boring. (things)",
    correctAnswer: "which",
    explanation: "Use 'which' for things/objects.",
    level: "débutant",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_49",
    type: "complet",
    question: "The city ___ I was born is beautiful. (place)",
    correctAnswer: "where",
    explanation: "Use 'where' to refer to places.",
    level: "débutant",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_50",
    type: "complet",
    question: "The time ___ I arrived was 5 PM. (time)",
    correctAnswer: "when",
    explanation: "Use 'when' to refer to times.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_51",
    type: "complet",
    question: "The gift ___ I received was expensive. (things)",
    correctAnswer: "that",
    explanation: "Use 'that' as a general relative pronoun.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_52",
    type: "complet",
    question: "The man ___ dog is barking is my neighbor. (possession)",
    correctAnswer: "whose",
    explanation: "Use 'whose' to show possession.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_53",
    type: "complet",
    question: "The hotel ___ we stayed was luxurious. (place)",
    correctAnswer: "where",
    explanation: "Use 'where' to refer to places.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_54",
    type: "complet",
    question: "The students ___ arrived late were punished. (general, restrictive)",
    correctAnswer: "that",
    explanation: "Use 'that' in restrictive clauses.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_55",
    type: "complet",
    question: "The people ___ work here are friendly. (people, subject)",
    correctAnswer: "who",
    explanation: "Use 'who' for people as subjects.",
    level: "débutant",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_56",
    type: "complet",
    question: "The year ___ I was born was 1990. (time)",
    correctAnswer: "when",
    explanation: "Use 'when' to refer to times/dates.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_57",
    type: "complet",
    question: "The woman ___ I met yesterday is a doctor. (people, object)",
    correctAnswer: "whom",
    explanation: "Use 'whom' for people as objects.",
    level: "avancé",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_58",
    type: "complet",
    question: "The house ___ Jack built is famous. (things, restrictive)",
    correctAnswer: "that",
    explanation: "Use 'that' in restrictive clauses.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_59",
    type: "complet",
    question: "The moment ___ I saw her was magical. (time)",
    correctAnswer: "when",
    explanation: "Use 'when' to refer to times.",
    level: "intermédiaire",
    category: "relatives completion"
  },
  {
    id: "relatives_complet_60",
    type: "complet",
    question: "The teacher ___ students respect is strict. (people, object)",
    correctAnswer: "whose",
    explanation: "Use 'whose' when the relative pronoun is followed by a noun.",
    level: "avancé",
    category: "relatives completion"
  }
];

export const relativesCategories = [
  "toutes",
  "who/which/that",
  "whose",
  "where/when",
  "restrictive/non-restrictive",
  "mixed relatives",
  "relatives completion"
];

export const getRelativesExercisesByType = (type: RelativesExercise['type']) => {
  return relativesExercises.filter(exercise => exercise.type === type);
};

export const getRelativesExercisesByCategory = (category: string) => {
  return relativesExercises.filter(exercise => exercise.category === category);
};

export const getRelativesExercisesByLevel = (level: RelativesExercise['level']) => {
  return relativesExercises.filter(exercise => exercise.level === level);
};
