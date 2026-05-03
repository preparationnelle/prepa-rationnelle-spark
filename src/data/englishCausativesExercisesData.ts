export interface CausativesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const causativesExercises: CausativesExercise[] = [
  // QCM - Have something done
  {
    id: "causatives_qcm_1",
    type: "qcm",
    question: "Select: 'I ___ my car repaired yesterday.'",
    options: ["a) had", "b) have", "c) got", "d) make"],
    correctAnswer: "a) had",
    explanation: "Have + object + past participle (passive causative).",
    level: "intermediate",
    category: "have something done"
  },
  {
    id: "causatives_qcm_2",
    type: "qcm",
    question: "Choose: 'She is going to ___ her hair cut.'",
    options: ["a) make", "b) let", "c) have", "d) do"],
    correctAnswer: "c) have",
    explanation: "Have + object + past participle.",
    level: "intermediate",
    category: "have something done"
  },
  {
    id: "causatives_qcm_3",
    type: "qcm",
    question: "Select: 'We need to ___ the house painted.'",
    options: ["a) get", "b) make", "c) let", "d) do"],
    correctAnswer: "a) get",
    explanation: "Get + object + past participle is also possible (often stronger, implying effort).",
    level: "intermediate",
    category: "have something done"
  },

  // QCM - Make / Let / Get someone to do
  {
    id: "causatives_qcm_4",
    type: "qcm",
    question: "Choose: 'He ___ me laugh.'",
    options: ["a) made", "b) got", "c) let", "d) had"],
    correctAnswer: "a) made",
    explanation: "Make + person + base verb (cause someone to do something).",
    level: "beginner",
    category: "active causative"
  },
  {
    id: "causatives_qcm_5",
    type: "qcm",
    question: "Select: 'My parents ___ me go to the party.'",
    options: ["a) made", "b) let", "c) got", "d) had"],
    correctAnswer: "b) let",
    explanation: "Let + person + base verb (allow someone to do something).",
    level: "beginner",
    category: "active causative"
  },
  {
    id: "causatives_qcm_6",
    type: "qcm",
    question: "Choose: 'I ___ him to help me.'",
    options: ["a) made", "b) had", "c) got", "d) let"],
    correctAnswer: "c) got",
    explanation: "Get + person + TO + verb (persuade someone to do something).",
    level: "intermediate",
    category: "active causative"
  },

  // Complete the sentence exercises
  {
    id: "causatives_complete_1",
    type: "complet",
    question: "Complete: 'I finally got him ___ (sign) the contract.'",
    correctAnswer: "to sign",
    explanation: "Get + person + TO + verb.",
    level: "intermediate",
    category: "active causative"
  },
  {
    id: "causatives_complete_2",
    type: "complet",
    question: "Complete: 'The teacher made the students ___ (rewrite) the essay.'",
    correctAnswer: "rewrite",
    explanation: "Make + person + base verb (no 'to').",
    level: "intermediate",
    category: "active causative"
  },
  {
    id: "causatives_complete_3",
    type: "complet",
    question: "Complete: 'I will have the package ___ (deliver) tomorrow.'",
    correctAnswer: "delivered",
    explanation: "Have + object + past participle (passive meaning).",
    level: "intermediate",
    category: "have something done"
  },
  {
    id: "causatives_complete_4",
    type: "complet",
    question: "Complete: 'Why don't you let him ___ (explain)?'",
    correctAnswer: "explain",
    explanation: "Let + person + base verb (no 'to').",
    level: "beginner",
    category: "active causative"
  },

  // Choice exercises
  {
    id: "causatives_choice_1",
    type: "choix",
    question: "Choose: 'Can you has/have/get this report finished by noon?'",
    options: ["a) has", "b) have", "c) get", "d) make"],
    correctAnswer: "c) get",
    explanation: "Get something done (or have something done). 'Ge't is very common in questions/imperatives.",
    level: "intermediate",
    category: "have something done"
  },
  {
    id: "causatives_choice_2",
    type: "choix",
    question: "Choose: 'She had her assistant ___ (call/to call) the client.'",
    options: ["a) call", "b) to call", "c) called", "d) calling"],
    correctAnswer: "a) call",
    explanation: "Have + person + base verb (give instructions).",
    level: "advanced",
    category: "active causative"
  }
];

export const getCausativesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return causativesExercises.filter(exercise => exercise.type === type);
};

export const causativesExerciseCategories = [
  'toutes',
  'have something done',
  'active causative'
];