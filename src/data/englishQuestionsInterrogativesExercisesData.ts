export interface QuestionsInterrogativesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const questionsInterrogativesExercises: QuestionsInterrogativesExercise[] = [
  // QCM - Who/What/Where (10 questions)
  {
    id: "questions_qcm_1",
    type: "qcm",
    question: "Choose the correct question word: '___ is that man over there?'",
    options: ["a) What", "b) Who", "c) Where", "d) When"],
    correctAnswer: "b) Who",
    explanation: "Who is used to ask about people.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_2",
    type: "qcm",
    question: "Complete: '___ did you go last weekend?'",
    options: ["a) What", "b) Who", "c) Where", "d) When"],
    correctAnswer: "c) Where",
    explanation: "Where is used to ask about places/locations.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_3",
    type: "qcm",
    question: "Choose: '___ is your favorite color?'",
    options: ["a) Who", "b) What", "c) Where", "d) Why"],
    correctAnswer: "b) What",
    explanation: "What is used to ask about things or descriptions.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_4",
    type: "qcm",
    question: "Select: '___ are you from?' (asking about origin)",
    options: ["a) What", "b) Who", "c) Where", "d) When"],
    correctAnswer: "c) Where",
    explanation: "Where is used to ask about origin or location.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_5",
    type: "qcm",
    question: "Choose: '___ wrote this book?'",
    options: ["a) What", "b) Who", "c) Where", "d) Why"],
    correctAnswer: "b) Who",
    explanation: "Who is used to ask about the subject/agent of an action.",
    level: "beginner",
    category: "who/what/where"
  },

  // When/Why/How (10 questions)
  {
    id: "questions_qcm_6",
    type: "qcm",
    question: "Choose: '___ did the meeting start?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "b) When",
    explanation: "When is used to ask about time.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_qcm_7",
    type: "qcm",
    question: "Select: '___ are you crying?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "c) Why",
    explanation: "Why is used to ask about reasons/causes.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_qcm_8",
    type: "qcm",
    question: "Choose: '___ did you solve this problem?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "d) How",
    explanation: "How is used to ask about manner or method.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_qcm_9",
    type: "qcm",
    question: "Select: '___ do you go to school?' (asking about transportation)",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "d) How",
    explanation: "How is used to ask about means of transportation.",
    level: "intermediate",
    category: "when/why/how"
  },
  {
    id: "questions_qcm_10",
    type: "qcm",
    question: "Choose: '___ were you born?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "b) When",
    explanation: "When is used to ask about dates or periods in time.",
    level: "beginner",
    category: "when/why/how"
  },

  // Which/Whose/How much/How many (10 questions)
  {
    id: "questions_qcm_11",
    type: "qcm",
    question: "Choose: '___ book is this?' (asking about possession)",
    options: ["a) Which", "b) Whose", "c) What", "d) Who"],
    correctAnswer: "b) Whose",
    explanation: "Whose is used to ask about possession/ownership.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_12",
    type: "qcm",
    question: "Select: '___ jacket do you prefer?'",
    options: ["a) What", "b) Which", "c) Whose", "d) Who"],
    correctAnswer: "b) Which",
    explanation: "Which is used when choosing from a limited set of options.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_13",
    type: "qcm",
    question: "Choose: '___ money do you have?'",
    options: ["a) How much", "b) How many", "c) How", "d) What"],
    correctAnswer: "a) How much",
    explanation: "How much is used with uncountable nouns (money).",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_14",
    type: "qcm",
    question: "Select: '___ students are in your class?'",
    options: ["a) How much", "b) How many", "c) How", "d) What"],
    correctAnswer: "b) How many",
    explanation: "How many is used with countable nouns (students).",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_15",
    type: "qcm",
    question: "Choose: '___ car is yours?' (from a group)",
    options: ["a) What", "b) Which", "c) Whose", "d) Who"],
    correctAnswer: "b) Which",
    explanation: "Which is used when selecting from a specific group.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },

  // Complete the sentence exercises (15 questions)
  {
    id: "questions_complete_1",
    type: "complet",
    question: "Complete: '___ is your best friend?'",
    correctAnswer: "Who",
    explanation: "Who is used to ask about people.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_complete_2",
    type: "complet",
    question: "Complete: '___ did you buy this gift?'",
    correctAnswer: "Where",
    explanation: "Where is used to ask about places.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_complete_3",
    type: "complet",
    question: "Complete: '___ is your phone number?'",
    correctAnswer: "What",
    explanation: "What is used to ask about information or things.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_complete_4",
    type: "complet",
    question: "Complete: '___ will the concert begin?'",
    correctAnswer: "When",
    explanation: "When is used to ask about time.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_complete_5",
    type: "complet",
    question: "Complete: '___ are you so happy today?'",
    correctAnswer: "Why",
    explanation: "Why is used to ask about reasons.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_complete_6",
    type: "complet",
    question: "Complete: '___ did you learn English?'",
    correctAnswer: "How",
    explanation: "How is used to ask about manner or method.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_complete_7",
    type: "complet",
    question: "Complete: '___ bag is this?'",
    correctAnswer: "Whose",
    explanation: "Whose is used to ask about possession.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_complete_8",
    type: "complet",
    question: "Complete: '___ one do you want?'",
    correctAnswer: "Which",
    explanation: "Which is used when choosing from options.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_complete_9",
    type: "complet",
    question: "Complete: '___ does this cost?'",
    correctAnswer: "How much",
    explanation: "How much is used with prices and uncountable nouns.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_complete_10",
    type: "complet",
    question: "Complete: '___ books do you need?'",
    correctAnswer: "How many",
    explanation: "How many is used with countable nouns.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_complete_11",
    type: "complet",
    question: "Complete: '___ did you arrive here?'",
    correctAnswer: "How",
    explanation: "How is used to ask about means of transportation.",
    level: "intermediate",
    category: "when/why/how"
  },
  {
    id: "questions_complete_12",
    type: "complet",
    question: "Complete: '___ time do you have?'",
    correctAnswer: "How much",
    explanation: "How much is used with time expressions sometimes.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_complete_13",
    type: "complet",
    question: "Complete: '___ are your parents?'",
    correctAnswer: "How",
    explanation: "How is used to ask about health or condition.",
    level: "intermediate",
    category: "when/why/how"
  },
  {
    id: "questions_complete_14",
    type: "complet",
    question: "Complete: '___ does your sister look like?'",
    correctAnswer: "What",
    explanation: "What is used to ask about appearance or description.",
    level: "intermediate",
    category: "who/what/where"
  },
  {
    id: "questions_complete_15",
    type: "complet",
    question: "Complete: '___ were you thinking?'",
    correctAnswer: "What",
    explanation: "What is used in expressions like 'what were you thinking?'",
    level: "advanced",
    category: "who/what/where"
  },

  // Choice exercises (5 questions)
  {
    id: "questions_choice_1",
    type: "choix",
    question: "Choose the correct question word: '___ is your name?'",
    options: ["a) What", "b) Who", "c) Where", "d) When"],
    correctAnswer: "a) What",
    explanation: "What is used to ask for names or information.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_choice_2",
    type: "choix",
    question: "Choose the correct question word: '___ do you live?'",
    options: ["a) What", "b) Who", "c) Where", "d) Why"],
    correctAnswer: "c) Where",
    explanation: "Where is used to ask about place of residence.",
    level: "beginner",
    category: "who/what/where"
  },
  {
    id: "questions_choice_3",
    type: "choix",
    question: "Choose the correct question word: '___ did you do that?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "d) How",
    explanation: "How is used to ask about the method or manner.",
    level: "beginner",
    category: "when/why/how"
  },
  {
    id: "questions_choice_4",
    type: "choix",
    question: "Choose the correct question word: '___ pencil is yours?'",
    options: ["a) Which", "b) Whose", "c) What", "d) Who"],
    correctAnswer: "b) Whose",
    explanation: "Whose is used to ask about ownership.",
    level: "intermediate",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_choice_5",
    type: "choix",
    question: "Choose the correct question word: '___ did the accident happen?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "b) When",
    explanation: "When is used to ask about the time of an event.",
    level: "beginner",
    category: "when/why/how"
  },

  // Advanced questions
  {
    id: "questions_qcm_16",
    type: "qcm",
    question: "Choose: '___ of these books interests you most?'",
    options: ["a) What", "b) Which", "c) Whose", "d) Who"],
    correctAnswer: "b) Which",
    explanation: "Which is used when choosing from a specific set.",
    level: "advanced",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_17",
    type: "qcm",
    question: "Select: '___ do you think you are?' (rude question)",
    options: ["a) What", "b) Who", "c) Where", "d) When"],
    correctAnswer: "b) Who",
    explanation: "Who is used in expressions like 'who do you think you are?'.",
    level: "advanced",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_18",
    type: "qcm",
    question: "Choose: '___ does it matter?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "a) What",
    explanation: "What is used in 'what does it matter?' meaning 'why should it matter?'.",
    level: "advanced",
    category: "who/what/where"
  },
  {
    id: "questions_qcm_19",
    type: "qcm",
    question: "Select: '___ more time do you need?'",
    options: ["a) How much", "b) How many", "c) How", "d) What"],
    correctAnswer: "a) How much",
    explanation: "How much is used with time when asking about quantity.",
    level: "advanced",
    category: "which/whose/quantifiers"
  },
  {
    id: "questions_qcm_20",
    type: "qcm",
    question: "Choose: '___ did you manage to do it?'",
    options: ["a) What", "b) When", "c) Why", "d) How"],
    correctAnswer: "d) How",
    explanation: "How is used to ask about the method of achieving something.",
    level: "intermediate",
    category: "when/why/how"
  }
];

export const getQuestionsInterrogativesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return questionsInterrogativesExercises.filter(exercise => exercise.type === type);
};

export const questionsInterrogativesExerciseCategories = [
  'toutes',
  'who/what/where',
  'when/why/how',
  'which/whose/quantifiers'
];
