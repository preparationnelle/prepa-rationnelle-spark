export interface NuancesLexicalesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const nuancesLexicalesExercises: NuancesLexicalesExercise[] = [
  // QCM - Affect vs Effect
  {
    id: "nuances_qcm_1",
    type: "qcm",
    question: "Select: 'The weather will ___ our plans.'",
    options: ["a) effect", "b) affect", "c) effects", "d) affects"],
    correctAnswer: "b) affect",
    explanation: "Affect (verb) means to produce a change or influence.",
    level: "intermediate",
    category: "common confusions"
  },
  {
    id: "nuances_qcm_2",
    type: "qcm",
    question: "Choose: 'The new law had a positive ___ on the economy.'",
    options: ["a) affect", "b) effect", "c) affecting", "d) affected"],
    correctAnswer: "b) effect",
    explanation: "Effect (noun) is a change that results when something is done or happens.",
    level: "intermediate",
    category: "common confusions"
  },

  // QCM - Advice vs Advise
  {
    id: "nuances_qcm_3",
    type: "qcm",
    question: "Select: 'Can you give me some ___?'",
    options: ["a) advise", "b) advices", "c) advice", "d) advising"],
    correctAnswer: "c) advice",
    explanation: "Advice is an uncountable noun. Do not use 'advices'.",
    level: "beginner",
    category: "common confusions"
  },
  {
    id: "nuances_qcm_4",
    type: "qcm",
    question: "Choose: 'I ___ you to stay home.'",
    options: ["a) advice", "b) advise", "c) advices", "d) advisor"],
    correctAnswer: "b) advise",
    explanation: "Advise (verb) means to recommend or suggest.",
    level: "beginner",
    category: "common confusions"
  },

  // QCM - Economic vs Economical
  {
    id: "nuances_qcm_5",
    type: "qcm",
    question: "Select: 'The country is facing an ___ crisis.'",
    options: ["a) economical", "b) economic", "c) economy", "d) economics"],
    correctAnswer: "b) economic",
    explanation: "Economic relates to the economy (money, trade).",
    level: "advanced",
    category: "adjective nuancs"
  },
  {
    id: "nuances_qcm_6",
    type: "qcm",
    question: "Choose: 'This car is very ___.'",
    options: ["a) economic", "b) economical", "c) economics", "d) economy"],
    correctAnswer: "b) economical",
    explanation: "Economical means giving good value or return in relation to the money, time, or effort spent (saving money).",
    level: "advanced",
    category: "adjective nuancs"
  },

  // Complete the sentence exercises
  {
    id: "nuances_complete_1",
    type: "complet",
    question: "Complete: 'She gave me a nice ___ (compliment/complement).' (Praise)",
    correctAnswer: "compliment",
    explanation: "Compliment with an 'i' is praise.",
    level: "intermediate",
    category: "common confusions"
  },
  {
    id: "nuances_complete_2",
    type: "complet",
    question: "Complete: 'This wine is a perfect ___ (compliment/complement) to the meal.' (Goes well with)",
    correctAnswer: "complement",
    explanation: "Complement with an 'e' completes or enhances something.",
    level: "intermediate",
    category: "common confusions"
  },
  {
    id: "nuances_complete_3",
    type: "complet",
    question: "Complete: 'The ___ (principal/principle) reason for my visit is business.'",
    correctAnswer: "principal",
    explanation: "Principal means main or most important.",
    level: "advanced",
    category: "common confusions"
  },
  {
    id: "nuances_complete_4",
    type: "complet",
    question: "Complete: 'It is a matter of ___ (principal/principle).'",
    correctAnswer: "principle",
    explanation: "Principle refers to a fundamental truth or proposition.",
    level: "advanced",
    category: "common confusions"
  },

  // Choice exercises
  {
    id: "nuances_choice_1",
    type: "choix",
    question: "Choose: 'He is a highly ___ (respected/respectful) professor.'",
    options: ["a) respected", "b) respectful"],
    correctAnswer: "a) respected",
    explanation: "Respected means admired by people. Respectful means showing respect.",
    level: "intermediate",
    category: "adjective nuancs"
  },
  {
    id: "nuances_choice_2",
    type: "choix",
    question: "Choose: 'Please be ___ (respected/respectful) of others.'",
    options: ["a) respected", "b) respectful"],
    correctAnswer: "b) respectful",
    explanation: "Respectful means showing politeness or honor to someone.",
    level: "intermediate",
    category: "adjective nuancs"
  }
];

export const getNuancesLexicalesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return nuancesLexicalesExercises.filter(exercise => exercise.type === type);
};

export const nuancesLexicalesExerciseCategories = [
  'toutes',
  'common confusions',
  'adjective nuancs',
  'false friends'
];