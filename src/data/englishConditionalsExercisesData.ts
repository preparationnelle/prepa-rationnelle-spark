export interface ConditionalsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const conditionalsExercises: ConditionalsExercise[] = [
  // QCM - Zero Conditional (10 questions)
  {
    id: "conditionals_qcm_1",
    type: "qcm",
    question: "Choose the correct form: If you heat water to 100°C, it ___.",
    options: ["a) boils", "b) will boil", "c) would boil", "d) boiled"],
    correctAnswer: "a) boils",
    explanation: "Zero Conditional uses Present Simple in both clauses for scientific facts and general truths.",
    level: "beginner",
    category: "zero conditional"
  },
  {
    id: "conditionals_qcm_2",
    type: "qcm",
    question: "Complete: If I eat too much chocolate, I ___ sick.",
    options: ["a) feel", "b) will feel", "c) would feel", "d) felt"],
    correctAnswer: "a) feel",
    explanation: "Zero Conditional expresses general truths and habits.",
    level: "beginner",
    category: "zero conditional"
  },
  {
    id: "conditionals_qcm_3",
    type: "qcm",
    question: "Select the correct option: When the sun ___, it gets dark.",
    options: ["a) sets", "b) will set", "c) would set", "d) set"],
    correctAnswer: "a) sets",
    explanation: "Zero Conditional can use 'when' instead of 'if' for general truths.",
    level: "beginner",
    category: "zero conditional"
  },
  {
    id: "conditionals_qcm_4",
    type: "qcm",
    question: "Choose the right form: If you mix blue and yellow, you ___ green.",
    options: ["a) get", "b) will get", "c) would get", "d) got"],
    correctAnswer: "a) get",
    explanation: "Zero Conditional for scientific facts and unchanging truths.",
    level: "beginner",
    category: "zero conditional"
  },
  {
    id: "conditionals_qcm_5",
    type: "qcm",
    question: "Complete: If she ___ late, she always apologizes.",
    options: ["a) is", "b) will be", "c) would be", "d) was"],
    correctAnswer: "a) is",
    explanation: "Zero Conditional for habits and repeated actions.",
    level: "intermediate",
    category: "zero conditional"
  },

  // First Conditional (10 questions)
  {
    id: "conditionals_qcm_6",
    type: "qcm",
    question: "Choose the correct form: If it rains tomorrow, we ___ the picnic.",
    options: ["a) cancel", "b) will cancel", "c) would cancel", "d) cancelled"],
    correctAnswer: "b) will cancel",
    explanation: "First Conditional: If + Present Simple, will + infinitive for future possibilities.",
    level: "beginner",
    category: "first conditional"
  },
  {
    id: "conditionals_qcm_7",
    type: "qcm",
    question: "Complete: If you study hard, you ___ the exam.",
    options: ["a) pass", "b) will pass", "c) would pass", "d) passed"],
    correctAnswer: "b) will pass",
    explanation: "First Conditional for real future situations.",
    level: "beginner",
    category: "first conditional"
  },
  {
    id: "conditionals_qcm_8",
    type: "qcm",
    question: "Select the correct option: If she ___ early, she'll get a good seat.",
    options: ["a) arrives", "b) will arrive", "c) would arrive", "d) arrived"],
    correctAnswer: "a) arrives",
    explanation: "First Conditional: Present Simple in if-clause, will in main clause.",
    level: "intermediate",
    category: "first conditional"
  },
  {
    id: "conditionals_qcm_9",
    type: "qcm",
    question: "Choose the right form: If I ___ time, I'll help you.",
    options: ["a) have", "b) will have", "c) would have", "d) had"],
    correctAnswer: "a) have",
    explanation: "First Conditional for future possibilities.",
    level: "intermediate",
    category: "first conditional"
  },
  {
    id: "conditionals_qcm_10",
    type: "qcm",
    question: "Complete: If we don't hurry, we ___ the train.",
    options: ["a) miss", "b) will miss", "c) would miss", "d) missed"],
    correctAnswer: "b) will miss",
    explanation: "First Conditional with negative if-clause.",
    level: "intermediate",
    category: "first conditional"
  },

  // Second Conditional (10 questions)
  {
    id: "conditionals_qcm_11",
    type: "qcm",
    question: "Choose the correct form: If I ___ the lottery, I would buy a house.",
    options: ["a) win", "b) won", "c) will win", "d) would win"],
    correctAnswer: "b) won",
    explanation: "Second Conditional: If + Past Simple, would + infinitive for hypothetical present/future.",
    level: "beginner",
    category: "second conditional"
  },
  {
    id: "conditionals_qcm_12",
    type: "qcm",
    question: "Complete: If I ___ you, I would apologize.",
    options: ["a) am", "b) was", "c) were", "d) be"],
    correctAnswer: "c) were",
    explanation: "Second Conditional uses 'were' for all persons with 'be'.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_qcm_13",
    type: "qcm",
    question: "Select the correct option: If she ___ more time, she would learn Spanish.",
    options: ["a) has", "b) had", "c) will have", "d) would have"],
    correctAnswer: "b) had",
    explanation: "Second Conditional for hypothetical situations in the present/future.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_qcm_14",
    type: "qcm",
    question: "Choose the right form: If we ___ wings, we could fly.",
    options: ["a) have", "b) had", "c) will have", "d) would have"],
    correctAnswer: "b) had",
    explanation: "Second Conditional for impossible or imaginary situations.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_qcm_15",
    type: "qcm",
    question: "Complete: If I ___ president, I would change the world.",
    options: ["a) am", "b) was", "c) were", "d) be"],
    correctAnswer: "c) were",
    explanation: "Second Conditional uses 'were' instead of 'was' for hypothetical situations.",
    level: "intermediate",
    category: "second conditional"
  },

  // Third Conditional (10 questions)
  {
    id: "conditionals_qcm_16",
    type: "qcm",
    question: "Choose the correct form: If I had studied harder, I ___ the exam.",
    options: ["a) pass", "b) passed", "c) would pass", "d) would have passed"],
    correctAnswer: "d) would have passed",
    explanation: "Third Conditional: If + Past Perfect, would have + past participle for past regrets.",
    level: "intermediate",
    category: "third conditional"
  },
  {
    id: "conditionals_qcm_17",
    type: "qcm",
    question: "Complete: If we had left earlier, we ___ the train.",
    options: ["a) don't miss", "b) didn't miss", "c) wouldn't miss", "d) wouldn't have missed"],
    correctAnswer: "d) wouldn't have missed",
    explanation: "Third Conditional for hypothetical past situations.",
    level: "intermediate",
    category: "third conditional"
  },
  {
    id: "conditionals_qcm_18",
    type: "qcm",
    question: "Select the correct option: If she had known, she ___ to the party.",
    options: ["a) comes", "b) came", "c) would come", "d) would have come"],
    correctAnswer: "d) would have come",
    explanation: "Third Conditional expresses regrets about past events.",
    level: "advanced",
    category: "third conditional"
  },
  {
    id: "conditionals_qcm_19",
    type: "qcm",
    question: "Choose the right form: If they had listened to me, they ___ in trouble now.",
    options: ["a) aren't", "b) weren't", "c) wouldn't be", "d) wouldn't have been"],
    correctAnswer: "c) wouldn't be",
    explanation: "Third Conditional with present result of past hypothetical situation.",
    level: "advanced",
    category: "third conditional"
  },
  {
    id: "conditionals_qcm_20",
    type: "qcm",
    question: "Complete: If I ___ the job, I would have been happier.",
    options: ["a) accept", "b) accepted", "c) had accepted", "d) would accept"],
    correctAnswer: "c) had accepted",
    explanation: "Third Conditional requires Past Perfect in the if-clause.",
    level: "advanced",
    category: "third conditional"
  },

  // Mixed Conditionals (5 questions)
  {
    id: "conditionals_qcm_21",
    type: "qcm",
    question: "Choose the correct form: If I had studied medicine, I ___ a doctor now.",
    options: ["a) am", "b) was", "c) would be", "d) would have been"],
    correctAnswer: "c) would be",
    explanation: "Mixed Conditional: Past Perfect in if-clause (past), would + infinitive (present result).",
    level: "advanced",
    category: "mixed conditional"
  },
  {
    id: "conditionals_qcm_22",
    type: "qcm",
    question: "Complete: If she weren't so afraid, she ___ that job last year.",
    options: ["a) takes", "b) took", "c) would take", "d) would have taken"],
    correctAnswer: "d) would have taken",
    explanation: "Mixed Conditional: Past Simple in if-clause (present), would have + past participle (past result).",
    level: "advanced",
    category: "mixed conditional"
  },

  // Alternatives to "if" (5 questions)
  {
    id: "conditionals_qcm_23",
    type: "qcm",
    question: "Choose the correct form: ___ you hurry, you'll be late.",
    options: ["a) If", "b) Unless", "c) Provided that", "d) As long as"],
    correctAnswer: "b) Unless",
    explanation: "'Unless' means 'if not' and is used instead of 'if' with a negative condition.",
    level: "intermediate",
    category: "alternatives to if"
  },
  {
    id: "conditionals_qcm_24",
    type: "qcm",
    question: "Complete: You can stay here ___ you keep quiet.",
    options: ["a) if", "b) unless", "c) as long as", "d) provided that"],
    correctAnswer: "c) as long as",
    explanation: "'As long as' means 'provided that' and emphasizes the condition must be met.",
    level: "intermediate",
    category: "alternatives to if"
  },
  {
    id: "conditionals_qcm_25",
    type: "qcm",
    question: "Select the correct option: ___ it rains, we'll stay inside.",
    options: ["a) Even if", "b) Unless", "c) Suppose", "d) In case"],
    correctAnswer: "d) In case",
    explanation: "'In case' is used to express precaution or preparation for a possible event.",
    level: "advanced",
    category: "alternatives to if"
  },

  // Inversion (5 questions)
  {
    id: "conditionals_qcm_26",
    type: "qcm",
    question: "Choose the correct form: ___ you need help, call me.",
    options: ["a) If", "b) Should", "c) Were", "d) Had"],
    correctAnswer: "b) Should",
    explanation: "Inversion with 'should' in First Conditional: Should + subject + verb.",
    level: "advanced",
    category: "inversion"
  },
  {
    id: "conditionals_qcm_27",
    type: "qcm",
    question: "Complete: ___ I in your position, I would refuse.",
    options: ["a) If was", "b) Were", "c) Should", "d) Had"],
    correctAnswer: "b) Were",
    explanation: "Inversion with 'were' in Second Conditional: Were + subject + complement.",
    level: "advanced",
    category: "inversion"
  },
  {
    id: "conditionals_qcm_28",
    type: "qcm",
    question: "Select the correct option: ___ we known earlier, we would have come.",
    options: ["a) If had", "b) Should", "c) Were", "d) Had"],
    correctAnswer: "d) Had",
    explanation: "Inversion with 'had' in Third Conditional: Had + subject + past participle.",
    level: "advanced",
    category: "inversion"
  },

  // Complete the sentence exercises (10 questions)
  {
    id: "conditionals_complete_1",
    type: "complet",
    question: "Complete the conditional sentence: If I ___ (be) you, I would study harder.",
    correctAnswer: "were",
    explanation: "Second Conditional uses 'were' for all persons with the verb 'be'.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_complete_2",
    type: "complet",
    question: "Complete: If it ___ (rain) tomorrow, we will cancel the picnic.",
    correctAnswer: "rains",
    explanation: "First Conditional: Present Simple in the if-clause.",
    level: "beginner",
    category: "first conditional"
  },
  {
    id: "conditionals_complete_3",
    type: "complet",
    question: "Complete: If I had known about the party, I ___ (come).",
    correctAnswer: "would have come",
    explanation: "Third Conditional: would have + past participle in the main clause.",
    level: "intermediate",
    category: "third conditional"
  },
  {
    id: "conditionals_complete_4",
    type: "complet",
    question: "Complete: If you heat water to 100°C, it ___ (boil).",
    correctAnswer: "boils",
    explanation: "Zero Conditional: Present Simple in both clauses for general truths.",
    level: "beginner",
    category: "zero conditional"
  },
  {
    id: "conditionals_complete_5",
    type: "complet",
    question: "Complete: Unless you ___ (leave) now, you'll miss the train.",
    correctAnswer: "leave",
    explanation: "'Unless' = 'if not', so the verb stays in present form.",
    level: "intermediate",
    category: "alternatives to if"
  },
  {
    id: "conditionals_complete_6",
    type: "complet",
    question: "Complete: If I ___ (win) the lottery, I would travel the world.",
    correctAnswer: "won",
    explanation: "Second Conditional: Past Simple in the if-clause.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_complete_7",
    type: "complet",
    question: "Complete: If she had studied medicine, she ___ (be) a doctor now.",
    correctAnswer: "would be",
    explanation: "Mixed Conditional: Past Perfect if-clause, would + infinitive main clause.",
    level: "advanced",
    category: "mixed conditional"
  },
  {
    id: "conditionals_complete_8",
    type: "complet",
    question: "Complete: ___ (Should) you need any help, please contact me.",
    correctAnswer: "Should",
    explanation: "Inversion in First Conditional: Should + subject + need.",
    level: "advanced",
    category: "inversion"
  },
  {
    id: "conditionals_complete_9",
    type: "complet",
    question: "Complete: If I had taken that job, I ___ (earn) more money now.",
    correctAnswer: "would be earning",
    explanation: "Mixed Conditional: Past Perfect if-clause, would + continuous main clause.",
    level: "advanced",
    category: "mixed conditional"
  },
  {
    id: "conditionals_complete_10",
    type: "complet",
    question: "Complete: If you ___ (not hurry), you'll be late.",
    correctAnswer: "don't hurry",
    explanation: "First Conditional with negative contraction in if-clause.",
    level: "beginner",
    category: "first conditional"
  },

  // Choice exercises (5 questions)
  {
    id: "conditionals_choice_1",
    type: "choix",
    question: "Choose the correct conditional structure: 'If I ___ rich, I ___ a big house.'",
    options: ["a) were / would buy", "b) was / would buy", "c) am / will buy", "d) was / bought"],
    correctAnswer: "a) were / would buy",
    explanation: "Second Conditional for hypothetical present situation.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_choice_2",
    type: "choix",
    question: "Choose the correct conditional structure: 'If it ___ tomorrow, we ___ at home.'",
    options: ["a) rains / stay", "b) will rain / stayed", "c) rained / would stay", "d) rains / will stay"],
    correctAnswer: "d) rains / will stay",
    explanation: "First Conditional for real future possibility.",
    level: "beginner",
    category: "first conditional"
  },
  {
    id: "conditionals_choice_3",
    type: "choix",
    question: "Choose the correct conditional structure: 'If I ___ you, I ___ that job.'",
    options: ["a) am / take", "b) were / would take", "c) was / would take", "d) were / take"],
    correctAnswer: "b) were / would take",
    explanation: "Second Conditional with 'If I were you' structure.",
    level: "intermediate",
    category: "second conditional"
  },
  {
    id: "conditionals_choice_4",
    type: "choix",
    question: "Choose the correct conditional structure: 'If I ___ harder, I ___ the exam.'",
    options: ["a) studied / passed", "b) had studied / would pass", "c) had studied / would have passed", "d) study / will pass"],
    correctAnswer: "c) had studied / would have passed",
    explanation: "Third Conditional for past regret.",
    level: "intermediate",
    category: "third conditional"
  },
  {
    id: "conditionals_choice_5",
    type: "choix",
    question: "Choose the correct conditional structure: '___ I ___ you, I would apologize.'",
    options: ["a) If / were", "b) Were / -", "c) If / was", "d) Was / -"],
    correctAnswer: "b) Were / -",
    explanation: "Inversion in Second Conditional: 'Were I you' or 'Were I in your position'.",
    level: "advanced",
    category: "inversion"
  }
];

export const getConditionalsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return conditionalsExercises.filter(exercise => exercise.type === type);
};

export const conditionalsExerciseCategories = [
  'toutes',
  'zero conditional',
  'first conditional',
  'second conditional',
  'third conditional',
  'mixed conditional',
  'alternatives to if',
  'inversion'
];
