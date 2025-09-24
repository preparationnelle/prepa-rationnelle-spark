export interface ModalVerbsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const modalVerbsExercises: ModalVerbsExercise[] = [
  // QCM - Can/Could (10 questions)
  {
    id: "modal_qcm_1",
    type: "qcm",
    question: "Choose the correct modal: 'She ___ speak three languages.'",
    options: ["a) can", "b) could", "c) may", "d) must"],
    correctAnswer: "a) can",
    explanation: "Can expresses present ability.",
    level: "beginner",
    category: "can/could"
  },
  {
    id: "modal_qcm_2",
    type: "qcm",
    question: "Complete: '___ you help me with this?'",
    options: ["a) Can", "b) Could", "c) May", "d) Must"],
    correctAnswer: "b) Could",
    explanation: "Could is more polite than can for requests.",
    level: "intermediate",
    category: "can/could"
  },
  {
    id: "modal_qcm_3",
    type: "qcm",
    question: "Choose: 'When I was 5, I ___ ride a bike.'",
    options: ["a) can", "b) could", "c) may", "d) might"],
    correctAnswer: "b) could",
    explanation: "Could expresses past ability.",
    level: "beginner",
    category: "can/could"
  },
  {
    id: "modal_qcm_4",
    type: "qcm",
    question: "Select: 'You ___ park here. It's a no-parking zone.'",
    options: ["a) can", "b) could", "c) may not", "d) cannot"],
    correctAnswer: "d) cannot",
    explanation: "Cannot expresses prohibition/permission denied.",
    level: "intermediate",
    category: "can/could"
  },

  // May/Might (8 questions)
  {
    id: "modal_qcm_5",
    type: "qcm",
    question: "Choose: '___ I borrow your pen?' (formal request)",
    options: ["a) Can", "b) Could", "c) May", "d) Might"],
    correctAnswer: "c) May",
    explanation: "May is used for formal permission requests.",
    level: "intermediate",
    category: "may/might"
  },
  {
    id: "modal_qcm_6",
    type: "qcm",
    question: "Select: 'It ___ rain tomorrow.'",
    options: ["a) can", "b) could", "c) may", "d) must"],
    correctAnswer: "c) may",
    explanation: "May expresses possibility.",
    level: "beginner",
    category: "may/might"
  },
  {
    id: "modal_qcm_7",
    type: "qcm",
    question: "Choose: 'She ___ be at home, I'm not sure.'",
    options: ["a) can", "b) could", "c) may", "d) might"],
    correctAnswer: "d) might",
    explanation: "Might expresses less certain possibility than may.",
    level: "intermediate",
    category: "may/might"
  },

  // Must/Have to/Should (12 questions)
  {
    id: "modal_qcm_8",
    type: "qcm",
    question: "Choose: 'You ___ study harder for the exam.' (advice)",
    options: ["a) can", "b) must", "c) should", "d) may"],
    correctAnswer: "c) should",
    explanation: "Should expresses advice/recommendation.",
    level: "beginner",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_9",
    type: "qcm",
    question: "Select: 'Students ___ wear uniforms at this school.'",
    options: ["a) must", "b) should", "c) have to", "d) can"],
    correctAnswer: "c) have to",
    explanation: "Have to expresses external obligation/rules.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_10",
    type: "qcm",
    question: "Choose: 'The lights are off. She ___ be asleep.'",
    options: ["a) can", "b) could", "c) must", "d) should"],
    correctAnswer: "c) must",
    explanation: "Must expresses logical deduction/certainty.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_11",
    type: "qcm",
    question: "Select: 'You ___ smoke here. It's forbidden.'",
    options: ["a) can", "b) could", "c) must not", "d) don't have to"],
    correctAnswer: "c) must not",
    explanation: "Must not expresses prohibition.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_12",
    type: "qcm",
    question: "Choose: 'I ___ work late yesterday.' (past obligation)",
    options: ["a) must", "b) had to", "c) should", "d) have to"],
    correctAnswer: "b) had to",
    explanation: "Had to expresses past external obligation.",
    level: "intermediate",
    category: "must/have to/should"
  },

  // Will/Would (8 questions)
  {
    id: "modal_qcm_13",
    type: "qcm",
    question: "Select: 'I ___ help you with your homework.' (promise)",
    options: ["a) can", "b) could", "c) will", "d) would"],
    correctAnswer: "c) will",
    explanation: "Will expresses future intention/promise.",
    level: "beginner",
    category: "will/would"
  },
  {
    id: "modal_qcm_14",
    type: "qcm",
    question: "Choose: 'When I was young, I ___ play outside every day.'",
    options: ["a) will", "b) would", "c) can", "d) could"],
    correctAnswer: "b) would",
    explanation: "Would expresses past habitual actions.",
    level: "intermediate",
    category: "will/would"
  },
  {
    id: "modal_qcm_15",
    type: "qcm",
    question: "Select: '___ you like some coffee?' (polite offer)",
    options: ["a) Will", "b) Would", "c) Can", "d) Could"],
    correctAnswer: "b) Would",
    explanation: "Would is used for polite offers/requests.",
    level: "intermediate",
    category: "will/would"
  },

  // Complete the sentence exercises (15 questions)
  {
    id: "modal_complete_1",
    type: "complet",
    question: "Complete: 'She ___ speak Spanish fluently.'",
    correctAnswer: "can",
    explanation: "Can expresses present ability.",
    level: "beginner",
    category: "can/could"
  },
  {
    id: "modal_complete_2",
    type: "complet",
    question: "Complete: '___ I ask you a question?' (polite)",
    correctAnswer: "May",
    explanation: "May is used for formal permission requests.",
    level: "intermediate",
    category: "may/might"
  },
  {
    id: "modal_complete_3",
    type: "complet",
    question: "Complete: 'You ___ study harder for your exam.'",
    correctAnswer: "should",
    explanation: "Should expresses advice/recommendation.",
    level: "beginner",
    category: "must/have to/should"
  },
  {
    id: "modal_complete_4",
    type: "complet",
    question: "Complete: 'Students ___ wear uniforms here.'",
    correctAnswer: "have to",
    explanation: "Have to expresses external obligation/rules.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_complete_5",
    type: "complet",
    question: "Complete: 'I ___ help you tomorrow.' (promise)",
    correctAnswer: "will",
    explanation: "Will expresses future intention/promise.",
    level: "beginner",
    category: "will/would"
  },
  {
    id: "modal_complete_6",
    type: "complet",
    question: "Complete: 'When I was a child, I ___ play in the park.'",
    correctAnswer: "would",
    explanation: "Would expresses past habitual actions.",
    level: "intermediate",
    category: "will/would"
  },
  {
    id: "modal_complete_7",
    type: "complet",
    question: "Complete: 'You ___ be tired after such a long journey.'",
    correctAnswer: "must",
    explanation: "Must expresses logical deduction.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_complete_8",
    type: "complet",
    question: "Complete: 'It ___ rain later, so take an umbrella.'",
    correctAnswer: "might",
    explanation: "Might expresses possibility (less certain than may).",
    level: "intermediate",
    category: "may/might"
  },
  {
    id: "modal_complete_9",
    type: "complet",
    question: "Complete: 'She ___ have been ill yesterday.' (possibility)",
    correctAnswer: "might",
    explanation: "Might expresses past possibility.",
    level: "advanced",
    category: "may/might"
  },
  {
    id: "modal_complete_10",
    type: "complet",
    question: "Complete: 'You ___ call the police immediately.' (strong advice)",
    correctAnswer: "should",
    explanation: "Should expresses strong recommendation.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_complete_11",
    type: "complet",
    question: "Complete: 'I ___ swim when I was 6 years old.'",
    correctAnswer: "could",
    explanation: "Could expresses past ability.",
    level: "beginner",
    category: "can/could"
  },
  {
    id: "modal_complete_12",
    type: "complet",
    question: "Complete: '___ you pass me the salt, please?' (polite)",
    correctAnswer: "Could",
    explanation: "Could is more polite than can for requests.",
    level: "intermediate",
    category: "can/could"
  },
  {
    id: "modal_complete_13",
    type: "complet",
    question: "Complete: 'You ___ work on Sundays if you don't want to.'",
    correctAnswer: "don't have to",
    explanation: "Don't have to expresses lack of obligation.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_complete_14",
    type: "complet",
    question: "Complete: 'The train ___ arrive at 3 PM.' (scheduled)",
    correctAnswer: "will",
    explanation: "Will expresses future certainty for scheduled events.",
    level: "beginner",
    category: "will/would"
  },
  {
    id: "modal_complete_15",
    type: "complet",
    question: "Complete: '___ we go to the cinema tonight?' (suggestion)",
    correctAnswer: "Shall",
    explanation: "Shall is used for suggestions/offers (British English).",
    level: "advanced",
    category: "other modals"
  },

  // Choice exercises (5 questions)
  {
    id: "modal_choice_1",
    type: "choix",
    question: "Choose the correct modal: 'I'm sorry, but you ___ smoke here.'",
    options: ["a) can", "b) may", "c) must not", "d) don't have to"],
    correctAnswer: "c) must not",
    explanation: "Must not expresses prohibition/forbidden actions.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_choice_2",
    type: "choix",
    question: "Choose the correct modal: '___ I make a suggestion?'",
    options: ["a) May", "b) Might", "c) Could", "d) Should"],
    correctAnswer: "b) Might",
    explanation: "Might is used for very polite suggestions.",
    level: "advanced",
    category: "may/might"
  },
  {
    id: "modal_choice_3",
    type: "choix",
    question: "Choose the correct modal: 'She ___ be at the office, she left early.'",
    options: ["a) can", "b) could", "c) must", "d) should"],
    correctAnswer: "b) could",
    explanation: "Could expresses possibility in the past.",
    level: "intermediate",
    category: "can/could"
  },
  {
    id: "modal_choice_4",
    type: "choix",
    question: "Choose the correct modal: 'You ___ take an umbrella, it might rain.'",
    options: ["a) can", "b) should", "c) must", "d) have to"],
    correctAnswer: "b) should",
    explanation: "Should expresses advice/precaution.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_choice_5",
    type: "choix",
    question: "Choose the correct modal: 'I promise I ___ be on time.'",
    options: ["a) can", "b) could", "c) will", "d) would"],
    correctAnswer: "c) will",
    explanation: "Will expresses future promises/intentions.",
    level: "beginner",
    category: "will/would"
  },

  // Advanced exercises
  {
    id: "modal_qcm_16",
    type: "qcm",
    question: "Choose the correct modal: 'You ___ have told me earlier!' (past advice)",
    options: ["a) should", "b) should have", "c) should to", "d) should had"],
    correctAnswer: "b) should have",
    explanation: "Should have expresses past advice/regret.",
    level: "advanced",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_17",
    type: "qcm",
    question: "Select: 'This ___ be the right address.' (deduction)",
    options: ["a) can", "b) could", "c) must", "d) should"],
    correctAnswer: "c) must",
    explanation: "Must expresses strong logical deduction.",
    level: "intermediate",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_18",
    type: "qcm",
    question: "Choose: 'You ___ not worry so much.' (advice)",
    options: ["a) must", "b) should", "c) can", "d) may"],
    correctAnswer: "b) should",
    explanation: "Should expresses advice.",
    level: "beginner",
    category: "must/have to/should"
  },
  {
    id: "modal_qcm_19",
    type: "qcm",
    question: "Select: '___ you hold this for me?' (polite request)",
    options: ["a) Can", "b) Could", "c) May", "d) Might"],
    correctAnswer: "b) Could",
    explanation: "Could is the most polite form for requests.",
    level: "intermediate",
    category: "can/could"
  },
  {
    id: "modal_qcm_20",
    type: "qcm",
    question: "Choose: 'It ___ snow tonight.' (possibility)",
    options: ["a) can", "b) could", "c) may", "d) might"],
    correctAnswer: "d) might",
    explanation: "Might expresses possibility, especially uncertain weather.",
    level: "intermediate",
    category: "may/might"
  }
];

export const getModalVerbsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return modalVerbsExercises.filter(exercise => exercise.type === type);
};

export const modalVerbsExerciseCategories = [
  'toutes',
  'can/could',
  'may/might',
  'must/have to/should',
  'will/would',
  'other modals'
];
