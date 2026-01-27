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
  // QCM - Mandative Subjunctive (suggest, recommend, insist, etc.)
  {
    id: "subjunctif_qcm_1",
    type: "qcm",
    question: "Choose the correct form: 'The doctor suggested that he ___ a break.'",
    options: ["a) takes", "b) took", "c) take", "d) will take"],
    correctAnswer: "c) take",
    explanation: "The subjunctive (base form) is used after 'suggest that'.",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_qcm_2",
    type: "qcm",
    question: "Select: 'It is essential that she ___ on time.'",
    options: ["a) be", "b) is", "c) was", "d) are"],
    correctAnswer: "a) be",
    explanation: "After 'it is essential that', use the subjunctive form 'be'.",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_qcm_3",
    type: "qcm",
    question: "Choose: 'I insist that he ___ apologizing immediately.'",
    options: ["a) stop", "b) stops", "c) stopped", "d) will stop"],
    correctAnswer: "a) stop",
    explanation: "After 'insist that', use the base form (subjunctive).",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_qcm_4",
    type: "qcm",
    question: "Select: 'They recommended that we ___ early.'",
    options: ["a) leave", "b) leaves", "c) left", "d) leaving"],
    correctAnswer: "a) leave",
    explanation: "After 'recommend that', use the base form (subjunctive).",
    level: "intermediate",
    category: "mandative subjunctive"
  },

  // QCM - Hypothetical Subjunctive (Wish / If only)
  {
    id: "subjunctif_qcm_5",
    type: "qcm",
    question: "Choose: 'I wish I ___ taller.'",
    options: ["a) am", "b) was", "c) were", "d) have been"],
    correctAnswer: "c) were",
    explanation: "'Were' is the correct subjunctive form for 'to be' in hypothetical wishes.",
    level: "intermediate",
    category: "hypothetical subjunctive"
  },
  {
    id: "subjunctif_qcm_6",
    type: "qcm",
    question: "Select: 'If only he ___ the truth.'",
    options: ["a) knows", "b) know", "c) knew", "d) has known"],
    correctAnswer: "c) knew",
    explanation: "Use past simple ('knew') for hypothetical wishes about the present.",
    level: "intermediate",
    category: "hypothetical subjunctive"
  },
  {
    id: "subjunctif_qcm_7",
    type: "qcm",
    question: "Choose: 'She acts as if she ___ the boss.'",
    options: ["a) is", "b) were", "c) has been", "d) be"],
    correctAnswer: "b) were",
    explanation: "After 'as if', use 'were' for hypothetical present situations.",
    level: "advanced",
    category: "hypothetical subjunctive"
  },
  {
    id: "subjunctif_qcm_8",
    type: "qcm",
    question: "Select: 'I wish I ___ to the party last night.'",
    options: ["a) went", "b) had gone", "c) go", "d) have gone"],
    correctAnswer: "b) had gone",
    explanation: "For wishes about the past (regrets), use the past perfect.",
    level: "advanced",
    category: "hypothetical subjunctive"
  },

  // Complete the sentence exercises
  {
    id: "subjunctif_complete_1",
    type: "complet",
    question: "Complete: 'The boss demands that everyone ___ (be) punctual.'",
    correctAnswer: "be",
    explanation: "Subjunctive 'be' is used after 'demand that'.",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_complete_2",
    type: "complet",
    question: "Complete: 'It is important that he ___ (know) the truth.'",
    correctAnswer: "know",
    explanation: "Subjunctive 'know' (base form) is used after 'important that'.",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_complete_3",
    type: "complet",
    question: "Complete: 'I suggest that she ___ (study) harder.'",
    correctAnswer: "study",
    explanation: "Subjunctive 'study' is used after 'suggest that'.",
    level: "intermediate",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_complete_4",
    type: "complet",
    question: "Complete: 'I wish it ___ (stop) raining.'",
    correctAnswer: "would stop",
    explanation: "Use 'would' with 'wish' to express annoyance or desire for change.",
    level: "intermediate",
    category: "hypothetical subjunctive"
  },
  {
    id: "subjunctif_complete_5",
    type: "complet",
    question: "Complete: 'If I ___ (be) you, I would accept the offer.'",
    correctAnswer: "were",
    explanation: "Use 'were' in the second conditional 'If I were you'.",
    level: "intermediate",
    category: "hypothetical subjunctive"
  },

  // Choice exercises
  {
    id: "subjunctif_choice_1",
    type: "choix",
    question: "Choose: 'It is vital that the letter ___ (be) sent today.'",
    options: ["a) is", "b) be", "c) was", "d) were"],
    correctAnswer: "b) be",
    explanation: "Adjective 'vital' triggers the subjunctive 'be'.",
    level: "advanced",
    category: "mandative subjunctive"
  },
  {
    id: "subjunctif_choice_2",
    type: "choix",
    question: "Choose: 'I propose that we ___ (start) the meeting now.'",
    options: ["a) start", "b) starts", "c) started", "d) starting"],
    correctAnswer: "a) start",
    explanation: "Verb 'propose' triggers the subjunctive (base form).",
    level: "advanced",
    category: "mandative subjunctive"
  }
];

export const getSubjunctifExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return subjunctifExercises.filter(exercise => exercise.type === type);
};

export const subjunctifExerciseCategories = [
  'toutes',
  'mandative subjunctive',
  'hypothetical subjunctive'
];
