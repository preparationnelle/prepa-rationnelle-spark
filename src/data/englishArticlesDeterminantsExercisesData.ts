export interface ArticlesDeterminantsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const articlesDeterminantsExercises: ArticlesDeterminantsExercise[] = [
  // QCM - Articles a/an/the (10 questions)
  {
    id: "articles_qcm_1",
    type: "qcm",
    question: "Choose the correct article: I saw ___ interesting movie yesterday.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "b) an",
    explanation: "Use 'an' before words starting with a vowel sound (interesting begins with /ɪ/).",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_2",
    type: "qcm",
    question: "Select the right article: ___ sun rises in the east.",
    options: ["a) A", "b) An", "c) The", "d) no article"],
    correctAnswer: "c) The",
    explanation: "Use 'the' for unique objects like the sun, moon, etc.",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_3",
    type: "qcm",
    question: "Choose the correct option: She works as ___ engineer.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "b) an",
    explanation: "Use 'an' before words starting with a vowel sound (engineer begins with /ɛ/).",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_4",
    type: "qcm",
    question: "Select the right form: Please close ___ door.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "c) the",
    explanation: "Use 'the' when referring to something specific already mentioned or known.",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_5",
    type: "qcm",
    question: "Choose the correct article: ___ water is essential for life.",
    options: ["a) A", "b) An", "c) The", "d) no article"],
    correctAnswer: "d) no article",
    explanation: "No article is used with uncountable nouns in general statements.",
    level: "intermédiaire",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_6",
    type: "qcm",
    question: "Select the right option: I bought ___ umbrella yesterday.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "b) an",
    explanation: "Use 'an' before words starting with a vowel sound (umbrella begins with /ʌ/).",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_7",
    type: "qcm",
    question: "Choose the correct form: ___ Eiffel Tower is in Paris.",
    options: ["a) A", "b) An", "c) The", "d) no article"],
    correctAnswer: "c) The",
    explanation: "Use 'the' for unique landmarks and monuments.",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_8",
    type: "qcm",
    question: "Select the right article: She is ___ honest person.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "b) an",
    explanation: "Use 'an' before words starting with a vowel sound (honest begins with /ɒ/).",
    level: "débutant",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_9",
    type: "qcm",
    question: "Choose the correct option: ___ books are expensive.",
    options: ["a) A", "b) An", "c) The", "d) no article"],
    correctAnswer: "d) no article",
    explanation: "No article is used with plural nouns in general statements.",
    level: "intermédiaire",
    category: "articles a/an/the"
  },
  {
    id: "articles_qcm_10",
    type: "qcm",
    question: "Select the right form: He lives in ___ United States.",
    options: ["a) a", "b) an", "c) the", "d) no article"],
    correctAnswer: "c) the",
    explanation: "Use 'the' for countries with plural names or with 'United'.",
    level: "intermédiaire",
    category: "articles a/an/the"
  },

  // QCM - Some/Any/A lot of (10 questions)
  {
    id: "determinants_qcm_11",
    type: "qcm",
    question: "Choose the correct determiner: Would you like ___ tea?",
    options: ["a) some", "b) any", "c) a lot of", "d) much"],
    correctAnswer: "a) some",
    explanation: "Use 'some' in affirmative sentences, offers, and requests.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_12",
    type: "qcm",
    question: "Select the right option: Do you have ___ questions?",
    options: ["a) some", "b) any", "c) a lot of", "d) many"],
    correctAnswer: "b) any",
    explanation: "Use 'any' in questions and negative sentences.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_13",
    type: "qcm",
    question: "Choose the correct determiner: There are ___ people at the party.",
    options: ["a) some", "b) any", "c) a lot of", "d) much"],
    correctAnswer: "c) a lot of",
    explanation: "Use 'a lot of' for large quantities (informal register).",
    level: "intermédiaire",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_14",
    type: "qcm",
    question: "Select the right form: I don't have ___ money left.",
    options: ["a) some", "b) any", "c) a lot of", "d) many"],
    correctAnswer: "b) any",
    explanation: "Use 'any' in negative sentences.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_15",
    type: "qcm",
    question: "Choose the correct option: She bought ___ apples at the market.",
    options: ["a) some", "b) any", "c) a lot of", "d) much"],
    correctAnswer: "a) some",
    explanation: "Use 'some' in affirmative sentences with unspecified quantities.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_16",
    type: "qcm",
    question: "Select the right determiner: Are there ___ cookies in the jar?",
    options: ["a) some", "b) any", "c) a lot of", "d) many"],
    correctAnswer: "b) any",
    explanation: "Use 'any' in questions when the answer might be negative.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_17",
    type: "qcm",
    question: "Choose the correct form: They have ___ friends in London.",
    options: ["a) some", "b) any", "c) a lot of", "d) much"],
    correctAnswer: "c) a lot of",
    explanation: "Use 'a lot of' for large quantities of countable nouns.",
    level: "intermédiaire",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_18",
    type: "qcm",
    question: "Select the right option: I need ___ help with this exercise.",
    options: ["a) some", "b) any", "c) a lot of", "d) many"],
    correctAnswer: "a) some",
    explanation: "Use 'some' for unspecified amounts in affirmative sentences.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_19",
    type: "qcm",
    question: "Choose the correct determiner: Is there ___ milk in the fridge?",
    options: ["a) some", "b) any", "c) a lot of", "d) much"],
    correctAnswer: "b) any",
    explanation: "Use 'any' in questions with uncountable nouns.",
    level: "débutant",
    category: "some/any/a lot of"
  },
  {
    id: "determinants_qcm_20",
    type: "qcm",
    question: "Select the right form: There isn't ___ water in the bottle.",
    options: ["a) some", "b) any", "c) a lot of", "d) many"],
    correctAnswer: "b) any",
    explanation: "Use 'any' in negative sentences.",
    level: "débutant",
    category: "some/any/a lot of"
  },

  // QCM - Much/Many/Little/Few (10 questions)
  {
    id: "quantifiers_qcm_21",
    type: "qcm",
    question: "Choose the correct quantifier: How ___ money do you have?",
    options: ["a) much", "b) many", "c) little", "d) few"],
    correctAnswer: "b) many",
    explanation: "Use 'much' with uncountable nouns, 'many' with countable nouns.",
    level: "débutant",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_22",
    type: "qcm",
    question: "Select the right option: There is ___ time left.",
    options: ["a) much", "b) many", "c) little", "d) few"],
    correctAnswer: "c) little",
    explanation: "Use 'little' with uncountable nouns to indicate small quantity.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_23",
    type: "qcm",
    question: "Choose the correct form: ___ students passed the exam.",
    options: ["a) Much", "b) Many", "c) Little", "d) Few"],
    correctAnswer: "d) Few",
    explanation: "Use 'few' with countable nouns to indicate small number.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_24",
    type: "qcm",
    question: "Select the right quantifier: I have ___ friends in this city.",
    options: ["a) much", "b) many", "c) a little", "d) a few"],
    correctAnswer: "d) a few",
    explanation: "Use 'a few' for small but positive number of countable nouns.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_25",
    type: "qcm",
    question: "Choose the correct option: How ___ time do you need?",
    options: ["a) much", "b) many", "c) little", "d) few"],
    correctAnswer: "a) much",
    explanation: "Use 'much' with uncountable nouns like time.",
    level: "débutant",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_26",
    type: "qcm",
    question: "Select the right form: She has ___ patience with difficult students.",
    options: ["a) much", "b) many", "c) a little", "d) a few"],
    correctAnswer: "c) a little",
    explanation: "Use 'a little' for small but positive amount of uncountable nouns.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_27",
    type: "qcm",
    question: "Choose the correct quantifier: ___ people understand this concept.",
    options: ["a) Much", "b) Many", "c) Little", "d) Few"],
    correctAnswer: "d) Few",
    explanation: "Use 'few' for small number (almost none) of countable nouns.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_28",
    type: "qcm",
    question: "Select the right option: There is ___ sugar in my coffee.",
    options: ["a) much", "b) many", "c) little", "d) few"],
    correctAnswer: "c) little",
    explanation: "Use 'little' for small amount (almost none) of uncountable nouns.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_29",
    type: "qcm",
    question: "Choose the correct form: How ___ books did you read?",
    options: ["a) much", "b) many", "c) little", "d) few"],
    correctAnswer: "b) many",
    explanation: "Use 'many' with countable nouns like books.",
    level: "débutant",
    category: "much/many/little/few"
  },
  {
    id: "quantifiers_qcm_30",
    type: "qcm",
    question: "Select the right quantifier: I have ___ time to finish this.",
    options: ["a) much", "b) many", "c) a little", "d) a few"],
    correctAnswer: "c) a little",
    explanation: "Use 'a little' for small but sufficient amount of uncountable nouns.",
    level: "intermédiaire",
    category: "much/many/little/few"
  },

  // Choix multiples - Mixed exercises (10 questions)
  {
    id: "mixed_choix_31",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) I saw a interesting movie.",
      "b) I saw an interesting movie.",
      "c) I saw the interesting movie.",
      "d) I saw interesting movie."
    ],
    correctAnswer: "b) I saw an interesting movie.",
    explanation: "'An' is used before words beginning with vowel sounds.",
    level: "débutant",
    category: "mixed articles"
  },
  {
    id: "mixed_choix_32",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) She has many informations.",
      "b) She has much informations.",
      "c) She has a lot of information.",
      "d) She has many information."
    ],
    correctAnswer: "c) She has a lot of information.",
    explanation: "'Information' is uncountable, so use 'a lot of' or 'much', not 'many'.",
    level: "intermédiaire",
    category: "mixed quantifiers"
  },
  {
    id: "mixed_choix_33",
    type: "choix",
    question: "Which option shows correct article usage?",
    options: [
      "a) The Paris is beautiful.",
      "b) Paris is beautiful.",
      "c) A Paris is beautiful.",
      "d) An Paris is beautiful."
    ],
    correctAnswer: "b) Paris is beautiful.",
    explanation: "City names don't take articles in general statements.",
    level: "intermédiaire",
    category: "mixed articles"
  },
  {
    id: "mixed_choix_34",
    type: "choix",
    question: "Choose the grammatically correct sentence:",
    options: [
      "a) Do you have some question?",
      "b) Do you have any questions?",
      "c) Do you have the questions?",
      "d) Do you have a questions?"
    ],
    correctAnswer: "b) Do you have any questions?",
    explanation: "Use 'any' in questions, and 'questions' is plural.",
    level: "débutant",
    category: "mixed some/any"
  },
  {
    id: "mixed_choix_35",
    type: "choix",
    question: "Which sentence uses the correct quantifier?",
    options: [
      "a) There are few time left.",
      "b) There is little time left.",
      "c) There are little time left.",
      "d) There is few time left."
    ],
    correctAnswer: "b) There is little time left.",
    explanation: "'Time' is uncountable, so use 'little', not 'few'.",
    level: "intermédiaire",
    category: "mixed quantifiers"
  },
  {
    id: "mixed_choix_36",
    type: "choix",
    question: "Select the correct option:",
    options: [
      "a) I need a information.",
      "b) I need an information.",
      "c) I need information.",
      "d) I need informations."
    ],
    correctAnswer: "c) I need information.",
    explanation: "'Information' is uncountable and doesn't take an indefinite article.",
    level: "intermédiaire",
    category: "mixed articles"
  },
  {
    id: "mixed_choix_37",
    type: "choix",
    question: "Which sentence is correct?",
    options: [
      "a) She doesn't have some friends.",
      "b) She doesn't have any friends.",
      "c) She doesn't have a friends.",
      "d) She doesn't have an friends."
    ],
    correctAnswer: "b) She doesn't have any friends.",
    explanation: "Use 'any' in negative sentences.",
    level: "débutant",
    category: "mixed some/any"
  },
  {
    id: "mixed_choix_38",
    type: "choix",
    question: "Choose the right sentence:",
    options: [
      "a) How much students are there?",
      "b) How many students are there?",
      "c) How much student are there?",
      "d) How many student are there?"
    ],
    correctAnswer: "b) How many students are there?",
    explanation: "'Students' is countable plural, so use 'many'.",
    level: "débutant",
    category: "mixed quantifiers"
  },
  {
    id: "mixed_choix_39",
    type: "choix",
    question: "Which option shows correct usage?",
    options: [
      "a) The water are cold.",
      "b) Water is cold.",
      "c) A water is cold.",
      "d) Waters are cold."
    ],
    correctAnswer: "b) Water is cold.",
    explanation: "Uncountable nouns like 'water' don't take articles in general statements.",
    level: "intermédiaire",
    category: "mixed articles"
  },
  {
    id: "mixed_choix_40",
    type: "choix",
    question: "Select the grammatically correct sentence:",
    options: [
      "a) I have a few money.",
      "b) I have a little money.",
      "c) I have few money.",
      "d) I have little money."
    ],
    correctAnswer: "b) I have a little money.",
    explanation: "'Money' is uncountable, so use 'little' or 'a little'.",
    level: "intermédiaire",
    category: "mixed quantifiers"
  },

  // Mots à compléter - All concepts (30 questions)
  {
    id: "complet_41",
    type: "complet",
    question: "I saw ___ interesting documentary last night. (article)",
    correctAnswer: "an",
    explanation: "Use 'an' before words starting with vowel sounds.",
    level: "débutant",
    category: "articles completion"
  },
  {
    id: "complet_42",
    type: "complet",
    question: "___ sun sets in the west. (article)",
    correctAnswer: "The",
    explanation: "Use 'the' for unique objects.",
    level: "débutant",
    category: "articles completion"
  },
  {
    id: "complet_43",
    type: "complet",
    question: "Would you like ___ coffee? (determiner)",
    correctAnswer: "some",
    explanation: "Use 'some' in offers and affirmative sentences.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_44",
    type: "complet",
    question: "Do you have ___ questions? (determiner)",
    correctAnswer: "any",
    explanation: "Use 'any' in questions.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_45",
    type: "complet",
    question: "There are ___ people in the room. (quantifier)",
    correctAnswer: "a lot of",
    explanation: "Use 'a lot of' for large quantities.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_46",
    type: "complet",
    question: "How ___ money do you need? (quantifier)",
    correctAnswer: "much",
    explanation: "Use 'much' with uncountable nouns.",
    level: "débutant",
    category: "quantifiers completion"
  },
  {
    id: "complet_47",
    type: "complet",
    question: "She has ___ patience. (quantifier)",
    correctAnswer: "a little",
    explanation: "Use 'a little' for small positive amounts of uncountable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_48",
    type: "complet",
    question: "___ students failed the exam. (quantifier)",
    correctAnswer: "Few",
    explanation: "Use 'few' for small numbers of countable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_49",
    type: "complet",
    question: "I bought ___ umbrella. (article)",
    correctAnswer: "an",
    explanation: "Use 'an' before words starting with vowel sounds.",
    level: "débutant",
    category: "articles completion"
  },
  {
    id: "complet_50",
    type: "complet",
    question: "___ United Kingdom is an island nation. (article)",
    correctAnswer: "The",
    explanation: "Use 'the' for countries with plural names or with 'United'.",
    level: "intermédiaire",
    category: "articles completion"
  },
  {
    id: "complet_51",
    type: "complet",
    question: "She doesn't have ___ friends here. (determiner)",
    correctAnswer: "any",
    explanation: "Use 'any' in negative sentences.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_52",
    type: "complet",
    question: "There is ___ time left. (quantifier)",
    correctAnswer: "little",
    explanation: "Use 'little' for small amounts of uncountable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_53",
    type: "complet",
    question: "___ information is available online. (article)",
    correctAnswer: "",
    explanation: "No article with uncountable nouns in general statements.",
    level: "intermédiaire",
    category: "articles completion"
  },
  {
    id: "complet_54",
    type: "complet",
    question: "How ___ books did you read? (quantifier)",
    correctAnswer: "many",
    explanation: "Use 'many' with countable nouns.",
    level: "débutant",
    category: "quantifiers completion"
  },
  {
    id: "complet_55",
    type: "complet",
    question: "He has ___ ideas for the project. (quantifier)",
    correctAnswer: "a few",
    explanation: "Use 'a few' for small positive numbers of countable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_56",
    type: "complet",
    question: "___ Eiffel Tower is beautiful at night. (article)",
    correctAnswer: "The",
    explanation: "Use 'the' for unique landmarks.",
    level: "débutant",
    category: "articles completion"
  },
  {
    id: "complet_57",
    type: "complet",
    question: "Are there ___ messages for me? (determiner)",
    correctAnswer: "any",
    explanation: "Use 'any' in questions.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_58",
    type: "complet",
    question: "She bought ___ bread. (determiner)",
    correctAnswer: "some",
    explanation: "Use 'some' in affirmative sentences.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_59",
    type: "complet",
    question: "There is ___ milk in the fridge. (quantifier)",
    correctAnswer: "a little",
    explanation: "Use 'a little' for small positive amounts of uncountable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_60",
    type: "complet",
    question: "___ people like spicy food. (article)",
    correctAnswer: "",
    explanation: "No article with plural nouns in general statements.",
    level: "intermédiaire",
    category: "articles completion"
  },
  {
    id: "complet_61",
    type: "complet",
    question: "He doesn't need ___ help. (determiner)",
    correctAnswer: "any",
    explanation: "Use 'any' in negative sentences.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_62",
    type: "complet",
    question: "How ___ time do you have? (quantifier)",
    correctAnswer: "much",
    explanation: "Use 'much' with uncountable nouns.",
    level: "débutant",
    category: "quantifiers completion"
  },
  {
    id: "complet_63",
    type: "complet",
    question: "___ students are present today. (quantifier)",
    correctAnswer: "Few",
    explanation: "Use 'few' for small numbers (almost none) of countable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_64",
    type: "complet",
    question: "I need ___ information about the course. (determiner)",
    correctAnswer: "some",
    explanation: "Use 'some' in affirmative sentences.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_65",
    type: "complet",
    question: "___ honesty is important in business. (article)",
    correctAnswer: "",
    explanation: "No article with uncountable nouns in general statements.",
    level: "intermédiaire",
    category: "articles completion"
  },
  {
    id: "complet_66",
    type: "complet",
    question: "She has ___ friends in Paris. (quantifier)",
    correctAnswer: "a few",
    explanation: "Use 'a few' for small positive numbers of countable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_67",
    type: "complet",
    question: "___ water is essential for survival. (article)",
    correctAnswer: "",
    explanation: "No article with uncountable nouns in general statements.",
    level: "intermédiaire",
    category: "articles completion"
  },
  {
    id: "complet_68",
    type: "complet",
    question: "Do you have ___ plans for the weekend? (determiner)",
    correctAnswer: "any",
    explanation: "Use 'any' in questions.",
    level: "débutant",
    category: "some/any completion"
  },
  {
    id: "complet_69",
    type: "complet",
    question: "There are ___ cars in the parking lot. (quantifier)",
    correctAnswer: "a lot of",
    explanation: "Use 'a lot of' for large quantities of countable nouns.",
    level: "intermédiaire",
    category: "quantifiers completion"
  },
  {
    id: "complet_70",
    type: "complet",
    question: "He works as ___ university professor. (article)",
    correctAnswer: "a",
    explanation: "Use 'a' before consonant sounds.",
    level: "débutant",
    category: "articles completion"
  }
];

export const articlesDeterminantsCategories = [
  "articles a/an/the",
  "some/any/a lot of",
  "much/many/little/few",
  "mixed articles",
  "mixed quantifiers",
  "mixed some/any",
  "articles completion",
  "some/any completion",
  "quantifiers completion"
];

export const getArticlesDeterminantsExercisesByType = (type: ArticlesDeterminantsExercise['type']) => {
  return articlesDeterminantsExercises.filter(exercise => exercise.type === type);
};

export const getArticlesDeterminantsExercisesByCategory = (category: string) => {
  return articlesDeterminantsExercises.filter(exercise => exercise.category === category);
};

export const getArticlesDeterminantsExercisesByLevel = (level: ArticlesDeterminantsExercise['level']) => {
  return articlesDeterminantsExercises.filter(exercise => exercise.level === level);
};
