export interface ConcordanceTempsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const concordanceTempsExercises: ConcordanceTempsExercise[] = [
  // QCM - Present tenses (10 questions)
  {
    id: "concordance_qcm_1",
    type: "qcm",
    question: "Choose the correct tense: 'When I ___ (arrive) home, she ___ (cook) dinner.'",
    options: ["a) arrive/cooks", "b) arrived/cooked", "c) arrive/cooked", "d) arrived/cooks"],
    correctAnswer: "a) arrive/cooks",
    explanation: "When two actions happen at the same time in present, both use simple present.",
    level: "beginner",
    category: "present tenses"
  },
  {
    id: "concordance_qcm_2",
    type: "qcm",
    question: "Select: 'While I ___ (study), my brother ___ (play) video games.'",
    options: ["a) study/plays", "b) studied/played", "c) study/played", "d) studied/plays"],
    correctAnswer: "a) study/plays",
    explanation: "While + continuous action, main clause uses simple present for simultaneous actions.",
    level: "intermediate",
    category: "present tenses"
  },
  {
    id: "concordance_qcm_3",
    type: "qcm",
    question: "Choose: 'She ___ (live) in Paris since she ___ (be) born.'",
    options: ["a) lives/was", "b) lived/was", "c) lives/has been", "d) lived/is"],
    correctAnswer: "a) lives/was",
    explanation: "Present perfect continuous with since + point in time uses simple present.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_qcm_4",
    type: "qcm",
    question: "Select: 'I ___ (know) him for five years.'",
    options: ["a) know", "b) knew", "c) have known", "d) had known"],
    correctAnswer: "c) have known",
    explanation: "For + period uses present perfect for continuing states.",
    level: "intermediate",
    category: "present perfect"
  },

  // Past tenses (10 questions)
  {
    id: "concordance_qcm_5",
    type: "qcm",
    question: "Choose: 'When I ___ (arrive), they ___ (leave) already.'",
    options: ["a) arrived/left", "b) arrive/left", "c) arrived/had left", "d) had arrived/left"],
    correctAnswer: "c) arrived/had left",
    explanation: "Past perfect for earlier action, simple past for later action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_qcm_6",
    type: "qcm",
    question: "Select: 'I ___ (finish) my homework before dinner.'",
    options: ["a) finish", "b) finished", "c) had finished", "d) have finished"],
    correctAnswer: "c) had finished",
    explanation: "Before + past action uses past perfect for earlier completion.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_qcm_7",
    type: "qcm",
    question: "Choose: 'While I ___ (sleep), someone ___ (break) into the house.'",
    options: ["a) slept/broke", "b) sleep/broke", "c) was sleeping/broke", "d) slept/was breaking"],
    correctAnswer: "c) was sleeping/broke",
    explanation: "Past continuous for ongoing action, simple past for completed action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_qcm_8",
    type: "qcm",
    question: "Select: 'She ___ (work) there since 2010.'",
    options: ["a) works", "b) worked", "c) has worked", "d) had worked"],
    correctAnswer: "c) has worked",
    explanation: "Since + past time uses present perfect for continuing action.",
    level: "intermediate",
    category: "past tenses"
  },

  // Future tenses (8 questions)
  {
    id: "concordance_qcm_9",
    type: "qcm",
    question: "Choose: 'When I ___ (arrive) tomorrow, I ___ (call) you.'",
    options: ["a) arrive/call", "b) will arrive/will call", "c) arrive/will call", "d) will arrive/call"],
    correctAnswer: "c) arrive/will call",
    explanation: "When + future time expression uses simple present in subordinate clause.",
    level: "intermediate",
    category: "future tenses"
  },
  {
    id: "concordance_qcm_10",
    type: "qcm",
    question: "Select: 'I ___ (wait) here until you ___ (come) back.'",
    options: ["a) wait/come", "b) will wait/will come", "c) wait/will come", "d) will wait/come"],
    correctAnswer: "d) will wait/come",
    explanation: "Until + future uses simple present in subordinate clause.",
    level: "intermediate",
    category: "future tenses"
  },

  // Complete the sentence exercises (15 questions)
  {
    id: "concordance_complete_1",
    type: "complet",
    question: "Complete: 'When I ___ (get) home, I ___ (have) dinner.'",
    correctAnswer: "get/will have",
    explanation: "When + future uses simple present in subordinate clause, will in main clause.",
    level: "intermediate",
    category: "future tenses"
  },
  {
    id: "concordance_complete_2",
    type: "complet",
    question: "Complete: 'She ___ (study) when her friend ___ (call).'",
    correctAnswer: "was studying/called",
    explanation: "Past continuous for ongoing action, simple past for interrupting action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_3",
    type: "complet",
    question: "Complete: 'I ___ (finish) my work before I ___ (go) out.'",
    correctAnswer: "had finished/went",
    explanation: "Past perfect for earlier action, simple past for later action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_4",
    type: "complet",
    question: "Complete: 'While we ___ (play), it ___ (start) to rain.'",
    correctAnswer: "were playing/started",
    explanation: "Past continuous for ongoing action, simple past for new action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_5",
    type: "complet",
    question: "Complete: 'By the time she ___ (arrive), we ___ (leave).'",
    correctAnswer: "arrived/had left",
    explanation: "By the time uses simple past in subordinate, past perfect in main clause.",
    level: "advanced",
    category: "past tenses"
  },
  {
    id: "concordance_complete_6",
    type: "complet",
    question: "Complete: 'I ___ (live) here since I ___ (be) a child.'",
    correctAnswer: "have lived/was",
    explanation: "Since + past point uses present perfect for continuing action.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_complete_7",
    type: "complet",
    question: "Complete: 'They ___ (wait) for an hour when the bus ___ (arrive).'",
    correctAnswer: "had been waiting/arrived",
    explanation: "Past perfect continuous for duration before another past action.",
    level: "advanced",
    category: "past tenses"
  },
  {
    id: "concordance_complete_8",
    type: "complet",
    question: "Complete: 'As soon as I ___ (see) him, I ___ (know) who he was.'",
    correctAnswer: "saw/knew",
    explanation: "As soon as uses simple past for both actions happening in sequence.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_9",
    type: "complet",
    question: "Complete: 'I ___ (work) here for three years.'",
    correctAnswer: "have worked",
    explanation: "For + period uses present perfect for continuing state.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_complete_10",
    type: "complet",
    question: "Complete: 'Before she ___ (move), she ___ (live) in London.'",
    correctAnswer: "moved/had lived",
    explanation: "Before uses simple past for later action, past perfect for earlier action.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_11",
    type: "complet",
    question: "Complete: 'When I ___ (arrive) at the station, the train ___ (leave).'",
    correctAnswer: "arrived/had left",
    explanation: "Past perfect for earlier action (train leaving), simple past for later action (arriving).",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_complete_12",
    type: "complet",
    question: "Complete: 'She ___ (study) English since she ___ (be) 10 years old.'",
    correctAnswer: "has studied/was",
    explanation: "Since + past age uses present perfect for continuing action.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_complete_13",
    type: "complet",
    question: "Complete: 'I ___ (not finish) yet when you ___ (call).'",
    correctAnswer: "hadn't finished/called",
    explanation: "Past perfect for unfinished action before another past action.",
    level: "advanced",
    category: "past tenses"
  },
  {
    id: "concordance_complete_14",
    type: "complet",
    question: "Complete: 'They ___ (live) in Paris since 2005.'",
    correctAnswer: "have lived",
    explanation: "Since + specific year uses present perfect for continuing action.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_complete_15",
    type: "complet",
    question: "Complete: 'While I ___ (read), my sister ___ (watch) TV.'",
    correctAnswer: "was reading/was watching",
    explanation: "While + two simultaneous ongoing actions use past continuous.",
    level: "intermediate",
    category: "past tenses"
  },

  // Choice exercises (5 questions)
  {
    id: "concordance_choice_1",
    type: "choix",
    question: "Choose the correct sequence: 'After I ___ (eat) dinner, I ___ (do) my homework.'",
    options: ["a) ate/did", "b) had eaten/did", "c) ate/had done", "d) had eaten/had done"],
    correctAnswer: "b) had eaten/did",
    explanation: "After uses past perfect for earlier action, simple past for later action.",
    level: "advanced",
    category: "past tenses"
  },
  {
    id: "concordance_choice_2",
    type: "choix",
    question: "Choose the correct sequence: 'When I ___ (see) him, he ___ (run) away.'",
    options: ["a) saw/ran", "b) saw/had run", "c) had seen/ran", "d) had seen/had run"],
    correctAnswer: "a) saw/ran",
    explanation: "When + simultaneous actions use simple past for both.",
    level: "intermediate",
    category: "past tenses"
  },
  {
    id: "concordance_choice_3",
    type: "choix",
    question: "Choose the correct sequence: 'I ___ (wait) for two hours when she finally ___ (arrive).'",
    options: ["a) waited/arrived", "b) had waited/arrived", "c) had been waiting/arrived", "d) waited/had arrived"],
    correctAnswer: "c) had been waiting/arrived",
    explanation: "Past perfect continuous for duration, simple past for completion.",
    level: "advanced",
    category: "past tenses"
  },
  {
    id: "concordance_choice_4",
    type: "choix",
    question: "Choose the correct sequence: 'She ___ (work) here since she ___ (graduate).'",
    options: ["a) works/graduated", "b) has worked/graduated", "c) worked/had graduated", "d) has worked/has graduated"],
    correctAnswer: "b) has worked/graduated",
    explanation: "Since + past action uses present perfect for continuing action.",
    level: "intermediate",
    category: "present perfect"
  },
  {
    id: "concordance_choice_5",
    type: "choix",
    question: "Choose the correct sequence: 'By next year, I ___ (study) English for 5 years.'",
    options: ["a) will study", "b) will have studied", "c) study", "d) have studied"],
    correctAnswer: "b) will have studied",
    explanation: "By + future time uses future perfect for completed action.",
    level: "advanced",
    category: "future tenses"
  },

  // Advanced exercises
  {
    id: "concordance_qcm_16",
    type: "qcm",
    question: "Choose: 'If I ___ (know) about the party, I ___ (come).'",
    options: ["a) knew/would come", "b) had known/would have come", "c) knew/would have come", "d) had known/would come"],
    correctAnswer: "b) had known/would have come",
    explanation: "Third conditional: past perfect + would have + past participle.",
    level: "advanced",
    category: "conditionals"
  },
  {
    id: "concordance_qcm_17",
    type: "qcm",
    question: "Select: 'She said that she ___ (live) there for five years.'",
    options: ["a) lives", "b) lived", "c) has lived", "d) had lived"],
    correctAnswer: "d) had lived",
    explanation: "Reported speech: past perfect for past perfect in direct speech.",
    level: "advanced",
    category: "reported speech"
  },
  {
    id: "concordance_qcm_18",
    type: "qcm",
    question: "Choose: 'I wish I ___ (be) taller.'",
    options: ["a) am", "b) was", "c) were", "d) have been"],
    correctAnswer: "c) were",
    explanation: "Wish + past simple for hypothetical present situations (subjunctive).",
    level: "advanced",
    category: "subjunctive"
  },
  {
    id: "concordance_qcm_19",
    type: "qcm",
    question: "Select: 'If he ___ (study) harder, he ___ (pass) the exam.'",
    options: ["a) studies/will pass", "b) studied/would pass", "c) had studied/would have passed", "d) studies/would pass"],
    correctAnswer: "b) studied/would pass",
    explanation: "Second conditional: simple past + would for hypothetical present/future.",
    level: "advanced",
    category: "conditionals"
  },
  {
    id: "concordance_qcm_20",
    type: "qcm",
    question: "Choose: 'She acts as if she ___ (be) the boss.'",
    options: ["a) is", "b) was", "c) were", "d) has been"],
    correctAnswer: "c) were",
    explanation: "As if/as though uses subjunctive were for hypothetical situations.",
    level: "advanced",
    category: "subjunctive"
  }
];

export const getConcordanceTempsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return concordanceTempsExercises.filter(exercise => exercise.type === type);
};

export const concordanceTempsExerciseCategories = [
  'toutes',
  'present tenses',
  'past tenses',
  'future tenses',
  'present perfect',
  'conditionals',
  'reported speech',
  'subjunctive'
];
