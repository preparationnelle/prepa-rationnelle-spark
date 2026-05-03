export interface VerbesIrreguliersExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const verbesIrreguliersExercises: VerbesIrreguliersExercise[] = [
  // QCM - Past Simple
  {
    id: "verbes_qcm_1",
    type: "qcm",
    question: "Select the Past Simple of 'to go': 'Yesterday, I ___ to the cinema.'",
    options: ["a) goed", "b) gone", "c) went", "d) go"],
    correctAnswer: "c) went",
    explanation: "Go -> Went -> Gone.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "verbes_qcm_2",
    type: "qcm",
    question: "Select the Past Simple of 'to buy': 'She ___ a new car last week.'",
    options: ["a) buyed", "b) bought", "c) brought", "d) boughted"],
    correctAnswer: "b) bought",
    explanation: "Buy -> Bought -> Bought.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "verbes_qcm_3",
    type: "qcm",
    question: "Select the Past Simple of 'to teach': 'He ___ English for ten years.'",
    options: ["a) teached", "b) taut", "c) taught", "d) thought"],
    correctAnswer: "c) taught",
    explanation: "Teach -> Taught -> Taught.",
    level: "intermediate",
    category: "past simple"
  },

  // QCM - Past Participle (Present Perfect / Passive)
  {
    id: "verbes_qcm_4",
    type: "qcm",
    question: "Select the Past Participle of 'to write': 'I have ___ three letters.'",
    options: ["a) wrote", "b) writed", "c) written", "d) writing"],
    correctAnswer: "c) written",
    explanation: "Write -> Wrote -> Written.",
    level: "beginner",
    category: "past participle"
  },
  {
    id: "verbes_qcm_5",
    type: "qcm",
    question: "Select the Past Participle of 'to fly': 'She has ___ to Paris twice.'",
    options: ["a) flew", "b) flown", "c) flied", "d) flow"],
    correctAnswer: "b) flown",
    explanation: "Fly -> Flew -> Flown.",
    level: "intermediate",
    category: "past participle"
  },
  {
    id: "verbes_qcm_6",
    type: "qcm",
    question: "Select the Past Participle of 'to sing': 'The song was ___ beautifully.'",
    options: ["a) sang", "b) sung", "c) singed", "d) song"],
    correctAnswer: "b) sung",
    explanation: "Sing -> Sang -> Sung.",
    level: "intermediate",
    category: "past participle"
  },

  // Complete the sentence exercises (3 forms)
  {
    id: "verbes_complete_1",
    type: "complet",
    question: "Complete (Past Simple): 'I ___ (to see) him yesterday.'",
    correctAnswer: "saw",
    explanation: "See -> Saw -> Seen.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "verbes_complete_2",
    type: "complet",
    question: "Complete (Past Participle): 'I have already ___ (to do) my homework.'",
    correctAnswer: "done",
    explanation: "Do -> Did -> Done.",
    level: "beginner",
    category: "past participle"
  },
  {
    id: "verbes_complete_3",
    type: "complet",
    question: "Complete (Past Participle): 'Have you ___ (to eat) yet?'",
    correctAnswer: "eaten",
    explanation: "Eat -> Ate -> Eaten.",
    level: "beginner",
    category: "past participle"
  },
  {
    id: "verbes_complete_4",
    type: "complet",
    question: "Complete (Past Simple): 'The bird ___ (to fly) away.'",
    correctAnswer: "flew",
    explanation: "Fly -> Flew -> Flown.",
    level: "intermediate",
    category: "past simple"
  },

  // Choice exercises (Common confusions)
  {
    id: "verbes_choice_1",
    type: "choix",
    question: "Choose: 'He ___ (lay/laid) the book on the table.' (Past of 'to lay')",
    options: ["a) lay", "b) laid", "c) lied", "d) lain"],
    correctAnswer: "b) laid",
    explanation: "Lay (put something down) -> Laid -> Laid.",
    level: "advanced",
    category: "common confusions"
  },
  {
    id: "verbes_choice_2",
    type: "choix",
    question: "Choose: 'I ___ (lie/lay) on the beach all day.' (Past of 'to lie' - rest)",
    options: ["a) lied", "b) laid", "c) lay", "d) lain"],
    correctAnswer: "c) lay",
    explanation: "Lie (rest) -> Lay -> Lain.",
    level: "advanced",
    category: "common confusions"
  }
];

export const getVerbesIrreguliersExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return verbesIrreguliersExercises.filter(exercise => exercise.type === type);
};

export const verbesIrreguliersExerciseCategories = [
  'toutes',
  'past simple',
  'past participle',
  'common confusions'
];