export interface SubjunctifExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const subjunctifExercises: SubjunctifExercise[] = [
  {
    id: "subjunctif_qcm_1",
    type: "qcm",
    question: "Choose the correct quantifier: 'There is ___ milk in the fridge.'",
    options: ["a) many", "b) much", "c) little", "d) few"],
    correctAnswer: "c) little",
    explanation: "Little is used with uncountable nouns like milk.",
    level: "beginner",
    category: "countable/uncountable"
  },
  {
    id: "subjunctif_qcm_2",
    type: "qcm",
    question: "Select: 'I have ___ friends in Paris.'",
    options: ["a) many", "b) much", "c) little", "d) few"],
    correctAnswer: "a) many",
    explanation: "Many is used with countable nouns like friends.",
    level: "beginner",
    category: "countable/uncountable"
  },
  {
    id: "subjunctif_complete_1",
    type: "complet",
    question: "Complete: 'How ___ sugar do you want?'",
    correctAnswer: "much",
    explanation: "How much is used with uncountable nouns.",
    level: "intermediate",
    category: "countable/uncountable"
  },
  {
    id: "subjunctif_complete_2",
    type: "complet",
    question: "Complete: 'How ___ books have you read?'",
    correctAnswer: "many",
    explanation: "How many is used with countable nouns.",
    level: "intermediate",
    category: "countable/uncountable"
  }
];

export const getSubjunctifExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return subjunctifExercises.filter(exercise => exercise.type === type);
};

export const subjunctifExerciseCategories = [
  'toutes',
  'countable/uncountable',
  'expressions of quantity'
];
