export interface ExpressionsTempsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const expressionsTempsExercises: ExpressionsTempsExercise[] = [
  // QCM - Since/For/Ago (10 questions)
  {
    id: "expressions_qcm_1",
    type: "qcm",
    question: "Choose the correct time expression: 'I have lived here ___ 2010.'",
    options: ["a) since", "b) for", "c) ago", "d) already"],
    correctAnswer: "a) since",
    explanation: "Since is used with a specific point in time (2010).",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_qcm_2",
    type: "qcm",
    question: "Complete: 'She has been studying ___ two hours.'",
    options: ["a) since", "b) for", "c) ago", "d) yet"],
    correctAnswer: "b) for",
    explanation: "For is used with a period of time (two hours).",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_qcm_3",
    type: "qcm",
    question: "Choose: 'I saw him ___ three days.'",
    options: ["a) since", "b) for", "c) ago", "d) still"],
    correctAnswer: "c) ago",
    explanation: "Ago is used with past simple to indicate time before now.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_qcm_4",
    type: "qcm",
    question: "Select: 'They have ___ finished their homework.'",
    options: ["a) yet", "b) still", "c) already", "d) just"],
    correctAnswer: "c) already",
    explanation: "Already is used in positive sentences to indicate something happened sooner than expected.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_5",
    type: "qcm",
    question: "Choose: 'Have you finished ___?'",
    options: ["a) yet", "b) still", "c) already", "d) just"],
    correctAnswer: "a) yet",
    explanation: "Yet is used in questions and negative sentences to indicate something expected but not happened.",
    level: "intermediate",
    category: "already/yet/still/just"
  },

  // Already/Yet/Still/Just (10 questions)
  {
    id: "expressions_qcm_6",
    type: "qcm",
    question: "Choose: 'She is ___ working on the project.'",
    options: ["a) yet", "b) already", "c) still", "d) just"],
    correctAnswer: "c) still",
    explanation: "Still indicates that something continues to happen or a situation continues.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_7",
    type: "qcm",
    question: "Select: 'I have ___ met him before.'",
    options: ["a) yet", "b) still", "c) already", "d) just"],
    correctAnswer: "d) just",
    explanation: "Just indicates something happened a very short time ago.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_8",
    type: "qcm",
    question: "Choose: 'They haven't arrived ___.'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "b) yet",
    explanation: "Yet is used in negative sentences to indicate something not happened yet.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_9",
    type: "qcm",
    question: "Select: 'She ___ lives in Paris.' (continuing situation)",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "c) still",
    explanation: "Still emphasizes that a situation continues.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_10",
    type: "qcm",
    question: "Choose: 'I've ___ told you that story.'",
    options: ["a) yet", "b) still", "c) already", "d) just"],
    correctAnswer: "c) already",
    explanation: "Already indicates something happened before now.",
    level: "intermediate",
    category: "already/yet/still/just"
  },

  // Complete the sentence exercises (15 questions)
  {
    id: "expressions_complete_1",
    type: "complet",
    question: "Complete: 'I haven't seen him ___ a long time.'",
    correctAnswer: "for",
    explanation: "For is used with periods of time in present perfect negative.",
    level: "intermediate",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_2",
    type: "complet",
    question: "Complete: 'She moved here ___ last year.'",
    correctAnswer: "since",
    explanation: "Since is used with a specific starting point in time.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_3",
    type: "complet",
    question: "Complete: 'I finished my homework ___ .'",
    correctAnswer: "already",
    explanation: "Already indicates something completed before expected.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_4",
    type: "complet",
    question: "Complete: 'Have they arrived ___ ?'",
    correctAnswer: "yet",
    explanation: "Yet is used in questions to ask if something expected has happened.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_5",
    type: "complet",
    question: "Complete: 'He is ___ sleeping.'",
    correctAnswer: "still",
    explanation: "Still indicates a continuing action or state.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_6",
    type: "complet",
    question: "Complete: 'I have ___ eaten lunch.'",
    correctAnswer: "just",
    explanation: "Just indicates something happened very recently.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_7",
    type: "complet",
    question: "Complete: 'They left ___ five minutes.'",
    correctAnswer: "ago",
    explanation: "Ago indicates time before now in past simple.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_8",
    type: "complet",
    question: "Complete: 'She has been waiting ___ an hour.'",
    correctAnswer: "for",
    explanation: "For indicates duration with present perfect continuous.",
    level: "intermediate",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_9",
    type: "complet",
    question: "Complete: 'I haven't finished ___ .'",
    correctAnswer: "yet",
    explanation: "Yet is used in negative sentences for unfinished actions.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_10",
    type: "complet",
    question: "Complete: 'He ___ hasn't come back.'",
    correctAnswer: "still",
    explanation: "Still emphasizes a continuing situation.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_11",
    type: "complet",
    question: "Complete: 'I've ___ seen that movie.'",
    correctAnswer: "already",
    explanation: "Already indicates prior experience.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_12",
    type: "complet",
    question: "Complete: 'She started working here ___ March.'",
    correctAnswer: "since",
    explanation: "Since indicates from a specific point in time.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_13",
    type: "complet",
    question: "Complete: 'They have ___ arrived.'",
    correctAnswer: "just",
    explanation: "Just indicates very recent arrival.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_complete_14",
    type: "complet",
    question: "Complete: 'I met him ___ three years.'",
    correctAnswer: "ago",
    explanation: "Ago indicates past time period.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_complete_15",
    type: "complet",
    question: "Complete: 'She is ___ working on that project.'",
    correctAnswer: "still",
    explanation: "Still indicates continuing action.",
    level: "intermediate",
    category: "already/yet/still/just"
  },

  // Choice exercises (5 questions)
  {
    id: "expressions_choice_1",
    type: "choix",
    question: "Choose the correct time expression: 'I haven't eaten ___ two hours.'",
    options: ["a) since", "b) for", "c) ago", "d) yet"],
    correctAnswer: "b) for",
    explanation: "For is used with periods of time in negative sentences.",
    level: "intermediate",
    category: "since/for/ago"
  },
  {
    id: "expressions_choice_2",
    type: "choix",
    question: "Choose the correct time expression: 'They have ___ left the office.'",
    options: ["a) yet", "b) still", "c) already", "d) just"],
    correctAnswer: "d) just",
    explanation: "Just indicates something happened very recently.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_choice_3",
    type: "choix",
    question: "Choose the correct time expression: 'She moved here ___ 2015.'",
    options: ["a) since", "b) for", "c) ago", "d) already"],
    correctAnswer: "a) since",
    explanation: "Since is used with specific points in time.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_choice_4",
    type: "choix",
    question: "Choose the correct time expression: 'Have you finished ___ ?'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "b) yet",
    explanation: "Yet is used in questions about expected completion.",
    level: "intermediate",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_choice_5",
    type: "choix",
    question: "Choose the correct time expression: 'He ___ lives in London.'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "c) still",
    explanation: "Still emphasizes a continuing situation.",
    level: "intermediate",
    category: "already/yet/still/just"
  },

  // Advanced exercises
  {
    id: "expressions_qcm_16",
    type: "qcm",
    question: "Choose: 'I have ___ been to Paris twice.'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "a) already",
    explanation: "Already can be used to emphasize multiple occurrences.",
    level: "advanced",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_17",
    type: "qcm",
    question: "Select: 'They haven't called ___ . It's worrying.'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "b) yet",
    explanation: "Yet implies expectation of something that should have happened.",
    level: "advanced",
    category: "already/yet/still/just"
  },
  {
    id: "expressions_qcm_18",
    type: "qcm",
    question: "Choose: 'She has been working here ___ five years.'",
    options: ["a) since", "b) for", "c) ago", "d) already"],
    correctAnswer: "b) for",
    explanation: "For is used with periods of time in present perfect.",
    level: "intermediate",
    category: "since/for/ago"
  },
  {
    id: "expressions_qcm_19",
    type: "qcm",
    question: "Select: 'I saw that movie ___ last week.'",
    options: ["a) since", "b) for", "c) ago", "d) already"],
    correctAnswer: "c) ago",
    explanation: "Ago indicates time before now.",
    level: "beginner",
    category: "since/for/ago"
  },
  {
    id: "expressions_qcm_20",
    type: "qcm",
    question: "Choose: 'They ___ haven't decided what to do.'",
    options: ["a) already", "b) yet", "c) still", "d) just"],
    correctAnswer: "c) still",
    explanation: "Still can emphasize continuing indecision.",
    level: "advanced",
    category: "already/yet/still/just"
  }
];

export const getExpressionsTempsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return expressionsTempsExercises.filter(exercise => exercise.type === type);
};

export const expressionsTempsExerciseCategories = [
  'toutes',
  'since/for/ago',
  'already/yet/still/just'
];
