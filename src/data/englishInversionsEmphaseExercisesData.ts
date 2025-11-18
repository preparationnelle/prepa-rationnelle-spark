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
  {
    id: "inversionsemphase_qcm_1",
    type: "qcm",
    question: "Sample question for InversionsEmphase",
    options: ["a) option 1", "b) option 2", "c) option 3", "d) option 4"],
    correctAnswer: "a) option 1",
    explanation: "Sample explanation",
    level: "beginner",
    category: "general"
  }
];

export const getInversionsEmphaseExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return inversionsEmphaseExercises.filter(exercise => exercise.type === type);
};

export const inversionsEmphaseExerciseCategories = [
  'toutes',
  'general'
];