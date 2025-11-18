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
  {
    id: "connecteurslogiques_qcm_1",
    type: "qcm",
    question: "Sample question for ConnecteursLogiques",
    options: ["a) option 1", "b) option 2", "c) option 3", "d) option 4"],
    correctAnswer: "a) option 1",
    explanation: "Sample explanation",
    level: "beginner",
    category: "general"
  }
];

export const getConnecteursLogiquesExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return connecteursLogiquesExercises.filter(exercise => exercise.type === type);
};

export const connecteursLogiquesExerciseCategories = [
  'toutes',
  'general'
];