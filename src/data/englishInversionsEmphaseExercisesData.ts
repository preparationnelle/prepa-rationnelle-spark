export interface InversionsEmphaseExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const inversionsEmphaseExercises: InversionsEmphaseExercise[] = [
  // QCM - Negative Inversions
  {
    id: "inversions_qcm_1",
    type: "qcm",
    question: "Choose the correct order: 'Never ___ such a beautiful sunset.'",
    options: ["a) I have seen", "b) have I seen", "c) saw I", "d) I saw"],
    correctAnswer: "b) have I seen",
    explanation: "After negative adverbs like 'Never', the subject and auxiliary verb are inverted.",
    level: "intermediate",
    category: "negative inversion"
  },
  {
    id: "inversions_qcm_2",
    type: "qcm",
    question: "Select: 'Rarely ___ so many people in one place.'",
    options: ["a) there are", "b) are there", "c) there have", "d) have there"],
    correctAnswer: "b) are there",
    explanation: "After 'Rarely', inversion is required: 'Rarely are there...'",
    level: "intermediate",
    category: "negative inversion"
  },
  {
    id: "inversions_qcm_3",
    type: "qcm",
    question: "Choose: 'Hardly ___ when it started to rain.'",
    options: ["a) we had left", "b) had we left", "c) we left", "d) left we"],
    correctAnswer: "b) had we left",
    explanation: "Hardly + had + subject + past participle is a standard inversion structure.",
    level: "advanced",
    category: "negative inversion"
  },
  {
    id: "inversions_qcm_4",
    type: "qcm",
    question: "Select: 'Not only ___ fast, but also efficiently.'",
    options: ["a) she works", "b) works she", "c) does she work", "d) she does work"],
    correctAnswer: "c) does she work",
    explanation: "After 'Not only', use auxiliary 'does' + subject + verb.",
    level: "advanced",
    category: "negative inversion"
  },

  // QCM - Emphatic Structures (Cleft sentences, 'Do' emphasis)
  {
    id: "emphase_qcm_5",
    type: "qcm",
    question: "Choose: 'It was John ___ called me yesterday.'",
    options: ["a) who", "b) which", "c) what", "d) whom"],
    correctAnswer: "a) who",
    explanation: "Cleft sentence structure: It was + person + who...",
    level: "intermediate",
    category: "cleft sentences"
  },
  {
    id: "emphase_qcm_6",
    type: "qcm",
    question: "Select: 'What I need ___ a vacation.'",
    options: ["a) is", "b) are", "c) be", "d) being"],
    correctAnswer: "a) is",
    explanation: "Pseudo-cleft sentence starting with 'What' takes a singular verb 'is'.",
    level: "intermediate",
    category: "cleft sentences"
  },
  {
    id: "emphase_qcm_7",
    type: "qcm",
    question: "Choose: 'I ___ believe he is telling the truth.'",
    options: ["a) do", "b) am", "c) have", "d) was"],
    correctAnswer: "a) do",
    explanation: "Use auxiliary 'do' in affirmative sentences to add emphasis.",
    level: "beginner",
    category: "emphatic do"
  },
  {
    id: "emphase_qcm_8",
    type: "qcm",
    question: "Select: 'No sooner ___ the house than the phone rang.'",
    options: ["a) I entered", "b) had I entered", "c) I had entered", "d) entered I"],
    correctAnswer: "b) had I entered",
    explanation: "No sooner + had + subject + past participle creates an inversion.",
    level: "advanced",
    category: "negative inversion"
  },

  // Complete the sentence exercises
  {
    id: "inversions_complete_1",
    type: "complet",
    question: "Complete: 'Little ___ (do) she know about the surprise.'",
    correctAnswer: "did",
    explanation: "Little + did + subject + verb is used for negative inversion.",
    level: "intermediate",
    category: "negative inversion"
  },
  {
    id: "inversions_complete_2",
    type: "complet",
    question: "Complete: 'Under no circumstances ___ (should/you) open this door.'",
    correctAnswer: "should you",
    explanation: "Under no circumstances triggers subject-auxiliary inversion.",
    level: "advanced",
    category: "negative inversion"
  },
  {
    id: "emphase_complete_3",
    type: "complet",
    question: "Complete: '___ (do) sit down!' (Polite emphasis)",
    correctAnswer: "Do",
    explanation: "Imperative with 'Do' adds polite emphasis.",
    level: "beginner",
    category: "emphatic do"
  },
  {
    id: "emphase_complete_4",
    type: "complet",
    question: "Complete: 'It represents the place ___ we met.'",
    correctAnswer: "where",
    explanation: "Cleft sentence emphasizing place uses 'where'.",
    level: "intermediate",
    category: "cleft sentences"
  },

  // Choice exercises
  {
    id: "inversions_choice_1",
    type: "choix",
    question: "Choose: 'Seldom ___ (we see) such talent.'",
    options: ["a) we see", "b) do we see", "c) we do see", "d) see we"],
    correctAnswer: "b) do we see",
    explanation: "Seldom is a negative adverb requiring inversion.",
    level: "intermediate",
    category: "negative inversion"
  },
  {
    id: "emphase_choice_2",
    type: "choix",
    question: "Choose: 'All I want ___ (be) to help you.'",
    options: ["a) is", "b) are", "c) am", "d) be"],
    correctAnswer: "a) is",
    explanation: "Pseudo-cleft 'All I want' takes singular 'is'.",
    level: "intermediate",
    category: "cleft sentences"
  }
];

export const getInversionsEmphaseExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return inversionsEmphaseExercises.filter(exercise => exercise.type === type);
};

export const inversionsEmphaseExerciseCategories = [
  'toutes',
  'negative inversion',
  'cleft sentences',
  'emphatic do'
];