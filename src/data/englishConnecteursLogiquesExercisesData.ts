export interface ConnecteursLogiquesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const connecteursLogiquesExercises: ConnecteursLogiquesExercise[] = [
  // QCM - Addition / Contrast
  {
    id: "connecteurs_qcm_1",
    type: "qcm",
    question: "Choose: '___ it was raining, we went for a walk.'",
    options: ["a) Despite", "b) Although", "c) However", "d) In spite of"],
    correctAnswer: "b) Although",
    explanation: "Although is followed by a subject and a verb (clause).",
    level: "intermediate",
    category: "contrast"
  },
  {
    id: "connecteurs_qcm_2",
    type: "qcm",
    question: "Select: '___ the rain, we went out.'",
    options: ["a) Although", "b) Even though", "c) Despite", "d) However"],
    correctAnswer: "c) Despite",
    explanation: "Despite is followed by a noun phrase or gerund.",
    level: "intermediate",
    category: "contrast"
  },
  {
    id: "connecteurs_qcm_3",
    type: "qcm",
    question: "Choose: 'He is rich. ___, he is unhappy.'",
    options: ["a) Moreover", "b) Therefore", "c) However", "d) Although"],
    correctAnswer: "c) However",
    explanation: "However introduces a contrast with the previous sentence.",
    level: "beginner",
    category: "contrast"
  },
  {
    id: "connecteurs_qcm_4",
    type: "qcm",
    question: "Select: '___ being tired, he finished the work.'",
    options: ["a) In spite of", "b) Although", "c) Nevertheless", "d) Even though"],
    correctAnswer: "a) In spite of",
    explanation: "In spite of is followed by a gerund (-ing form).",
    level: "intermediate",
    category: "contrast"
  },
  {
    id: "connecteurs_qcm_5",
    type: "qcm",
    question: "Choose: 'She speaks French ___ English.'",
    options: ["a) as well as", "b) also", "c) too", "d) in addition"],
    correctAnswer: "a) as well as",
    explanation: "As well as adds information within the sentence.",
    level: "intermediate",
    category: "addition"
  },

  // QCM - Cause / Effect
  {
    id: "connecteurs_qcm_6",
    type: "qcm",
    question: "Select: '___ he was late, he missed the bus.'",
    options: ["a) Because of", "b) Due to", "c) Since", "d) Therefore"],
    correctAnswer: "c) Since",
    explanation: "Since introduces a cause (followed by a clause).",
    level: "intermediate",
    category: "cause/effect"
  },
  {
    id: "connecteurs_qcm_7",
    type: "qcm",
    question: "Choose: 'The flight was cancelled ___ the storm.'",
    options: ["a) because", "b) since", "c) due to", "d) as"],
    correctAnswer: "c) due to",
    explanation: "Due to is followed by a noun phrase.",
    level: "intermediate",
    category: "cause/effect"
  },
  {
    id: "connecteurs_qcm_8",
    type: "qcm",
    question: "Select: 'He didn't study. ___, he failed.'",
    options: ["a) Because", "b) Consequently", "c) Since", "d) As"],
    correctAnswer: "b) Consequently",
    explanation: "Consequently introduces a result/effect.",
    level: "advanced",
    category: "cause/effect"
  },

  // Complete the sentence exercises
  {
    id: "connecteurs_complete_1",
    type: "complet",
    question: "Complete: '___ (However/Although) hard he tried, he couldn't lift it.'",
    correctAnswer: "However",
    explanation: "However + adjective/adverb means 'no matter how'.",
    level: "advanced",
    category: "contrast"
  },
  {
    id: "connecteurs_complete_2",
    type: "complet",
    question: "Complete: 'I like him ___ (even though/despite) he is annoying.'",
    correctAnswer: "even though",
    explanation: "Even though is followed by a clause.",
    level: "intermediate",
    category: "contrast"
  },
  {
    id: "connecteurs_complete_3",
    type: "complet",
    question: "Complete: '___ (Whereas/Unlike) my brother, I am tall.'",
    correctAnswer: "Unlike",
    explanation: "Unlike is a preposition used to contrast nouns/pronouns.",
    level: "intermediate",
    category: "contrast"
  },
  {
    id: "connecteurs_complete_4",
    type: "complet",
    question: "Complete: 'He is smart; ___ (furthermore/but), he is hardworking.'",
    correctAnswer: "furthermore",
    explanation: "Furthermore adds another point supporting the previous one.",
    level: "advanced",
    category: "addition"
  },

  // Choice exercises
  {
    id: "connecteurs_choice_1",
    type: "choix",
    question: "Choose: '___ (Unless/Provided) you study, you will fail.'",
    options: ["a) Unless", "b) Provided", "c) If", "d) As long as"],
    correctAnswer: "a) Unless",
    explanation: "Unless means 'if not'.",
    level: "intermediate",
    category: "condition"
  },
  {
    id: "connecteurs_choice_2",
    type: "choix",
    question: "Choose: 'I will go ___ (as long as/unless) you come with me.'",
    options: ["a) unless", "b) as long as", "c) despite", "d) even if"],
    correctAnswer: "b) as long as",
    explanation: "As long as introduces a necessary condition.",
    level: "intermediate",
    category: "condition"
  }
];

export const getConnecteursLogiquesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return connecteursLogiquesExercises.filter(exercise => exercise.type === type);
};

export const connecteursLogiquesExerciseCategories = [
  'toutes',
  'contrast',
  'addition',
  'cause/effect',
  'condition'
];