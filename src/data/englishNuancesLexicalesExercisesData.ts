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
  {
    id: "nuanceslexicales_qcm_1",
    type: "qcm",
    question: "Sample question for NuancesLexicales",
    options: ["a) option 1", "b) option 2", "c) option 3", "d) option 4"],
    correctAnswer: "a) option 1",
    explanation: "Sample explanation",
    level: "beginner",
    category: "general"
  }
];

export const getNuancesLexicalesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return inversionsEmphaseExercises.filter(exercise => exercise.type === type);
};

export const inversionsEmphaseExerciseCategories = [
  'toutes',
  'general'
];