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
  {
    id: "causatives_qcm_1",
    type: "qcm",
    question: "Sample question for Causatives",
    options: ["a) option 1", "b) option 2", "c) option 3", "d) option 4"],
    correctAnswer: "a) option 1",
    explanation: "Sample explanation",
    level: "beginner",
    category: "general"
  }
];

export const getCausativesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return causativesExercises.filter(exercise => exercise.type === type);
};

export const causativesExerciseCategories = [
  'toutes',
  'general'
];