export interface PassiveVoiceExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const passiveVoiceExercises: PassiveVoiceExercise[] = [
  // QCM - Basic transformations (10 questions)
  {
    id: "passive_qcm_1",
    type: "qcm",
    question: "Transform to passive: 'The chef cooks the meal.'",
    options: ["a) The meal cooks the chef.", "b) The meal is cooked by the chef.", "c) The chef is cooked by the meal.", "d) The meal cooks by the chef."],
    correctAnswer: "b) The meal is cooked by the chef.",
    explanation: "In passive voice: object becomes subject, verb 'be' + past participle, agent introduced by 'by'.",
    level: "beginner",
    category: "transformation"
  },
  {
    id: "passive_qcm_2",
    type: "qcm",
    question: "Choose the correct passive: 'They build houses here.'",
    options: ["a) Houses are built here.", "b) Houses build here.", "c) Here are built houses.", "d) Houses are building here."],
    correctAnswer: "a) Houses are built here.",
    explanation: "Passive: subject (houses) + are (conjugated be) + built (past participle).",
    level: "beginner",
    category: "transformation"
  },
  {
    id: "passive_qcm_3",
    type: "qcm",
    question: "Transform to passive: 'Shakespeare wrote Hamlet.'",
    options: ["a) Hamlet wrote Shakespeare.", "b) Hamlet was written by Shakespeare.", "c) Shakespeare was written by Hamlet.", "d) Hamlet writes Shakespeare."],
    correctAnswer: "b) Hamlet was written by Shakespeare.",
    explanation: "Past Simple active becomes Past Simple passive with 'was/were + past participle'.",
    level: "beginner",
    category: "transformation"
  },
  {
    id: "passive_qcm_4",
    type: "qcm",
    question: "Which is the correct passive form: 'They are building a bridge.'",
    options: ["a) A bridge is being built.", "b) A bridge is building.", "c) A bridge are being built.", "d) A bridge was being built."],
    correctAnswer: "a) A bridge is being built.",
    explanation: "Present Continuous passive: 'is/are being + past participle'.",
    level: "intermediate",
    category: "present continuous"
  },
  {
    id: "passive_qcm_5",
    type: "qcm",
    question: "Choose the passive: 'Someone has stolen my bike.'",
    options: ["a) My bike has stolen.", "b) My bike has been stolen.", "c) My bike was stolen.", "d) My bike steals someone."],
    correctAnswer: "b) My bike has been stolen.",
    explanation: "Present Perfect passive: 'has/have been + past participle'.",
    level: "intermediate",
    category: "present perfect"
  },

  // Present Simple Passive (5 questions)
  {
    id: "passive_qcm_6",
    type: "qcm",
    question: "Complete the passive: 'The room ___ (clean) every day.'",
    options: ["a) cleans", "b) is cleaned", "c) cleaned", "d) was cleaned"],
    correctAnswer: "b) is cleaned",
    explanation: "Present Simple passive: 'is/are + past participle' for regular actions.",
    level: "beginner",
    category: "present simple"
  },
  {
    id: "passive_qcm_7",
    type: "qcm",
    question: "Transform: 'They produce cars in this factory.'",
    options: ["a) Cars produce in this factory.", "b) Cars are produced in this factory.", "c) Cars were produced in this factory.", "d) Cars is produced in this factory."],
    correctAnswer: "b) Cars are produced in this factory.",
    explanation: "Passive voice emphasizes the product/location rather than the producer.",
    level: "beginner",
    category: "present simple"
  },

  // Past Simple Passive (5 questions)
  {
    id: "passive_qcm_8",
    type: "qcm",
    question: "Choose the correct passive: 'Columbus discovered America.'",
    options: ["a) America discovered Columbus.", "b) America was discovered by Columbus.", "c) America were discovered by Columbus.", "d) America discovered by Columbus."],
    correctAnswer: "b) America was discovered by Columbus.",
    explanation: "Past Simple passive: 'was/were + past participle' for completed actions in the past.",
    level: "intermediate",
    category: "past simple"
  },
  {
    id: "passive_qcm_9",
    type: "qcm",
    question: "Transform to passive: 'They built this bridge in 1990.'",
    options: ["a) This bridge built in 1990.", "b) This bridge was built in 1990.", "c) This bridge were built in 1990.", "d) This bridge is built in 1990."],
    correctAnswer: "b) This bridge was built in 1990.",
    explanation: "Passive voice is common for construction/architecture to emphasize the result.",
    level: "intermediate",
    category: "past simple"
  },

  // Present Perfect Passive (3 questions)
  {
    id: "passive_qcm_10",
    type: "qcm",
    question: "Complete: 'The report ___ (finish) already.'",
    options: ["a) has finished", "b) has been finished", "c) was finished", "d) is finished"],
    correctAnswer: "b) has been finished",
    explanation: "Present Perfect passive: 'has/have been + past participle' for recently completed actions.",
    level: "intermediate",
    category: "present perfect"
  },

  // Future Passive (3 questions)
  {
    id: "passive_qcm_11",
    type: "qcm",
    question: "Choose the passive: 'They will build a new school.'",
    options: ["a) A new school will build.", "b) A new school will be built.", "c) A new school was built.", "d) A new school is built."],
    correctAnswer: "b) A new school will be built.",
    explanation: "Future passive: 'will be + past participle' for future actions.",
    level: "intermediate",
    category: "future"
  },

  // Modal Passive (3 questions)
  {
    id: "passive_qcm_12",
    type: "qcm",
    question: "Complete: 'The car ___ (must, repair) immediately.'",
    options: ["a) must repair", "b) must be repaired", "c) must repaired", "d) must to repair"],
    correctAnswer: "b) must be repaired",
    explanation: "Modal passive: modal + be + past participle (must be repaired).",
    level: "advanced",
    category: "modal verbs"
  },

  // Complete the sentence exercises (10 questions)
  {
    id: "passive_complete_1",
    type: "complet",
    question: "Complete the passive: 'The cake ___ (eat) by the children.'",
    correctAnswer: "was eaten",
    explanation: "Past Simple passive: 'was/were + past participle'.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "passive_complete_2",
    type: "complet",
    question: "Complete: 'A new bridge ___ (build) next year.'",
    correctAnswer: "will be built",
    explanation: "Future passive: 'will be + past participle'.",
    level: "intermediate",
    category: "future"
  },
  {
    id: "passive_complete_3",
    type: "complet",
    question: "Complete: 'The meeting ___ (cancel) because of the weather.'",
    correctAnswer: "was cancelled",
    explanation: "Past Simple passive: 'was + past participle' (cancelled in British English).",
    level: "intermediate",
    category: "past simple"
  },
  {
    id: "passive_complete_4",
    type: "complet",
    question: "Complete: 'The documents ___ (send) yesterday.'",
    correctAnswer: "were sent",
    explanation: "Past Simple passive plural: 'were + past participle'.",
    level: "intermediate",
    category: "past simple"
  },
  {
    id: "passive_complete_5",
    type: "complet",
    question: "Complete: 'English ___ (speak) in many countries.'",
    correctAnswer: "is spoken",
    explanation: "Present Simple passive: 'is/are + past participle'.",
    level: "beginner",
    category: "present simple"
  },
  {
    id: "passive_complete_6",
    type: "complet",
    question: "Complete: 'The book ___ (write) by my favorite author.'",
    correctAnswer: "was written",
    explanation: "Past Simple passive: 'was + past participle'.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "passive_complete_7",
    type: "complet",
    question: "Complete: 'The house ___ (paint) last month.'",
    correctAnswer: "was painted",
    explanation: "Past Simple passive: 'was + past participle'.",
    level: "intermediate",
    category: "past simple"
  },
  {
    id: "passive_complete_8",
    type: "complet",
    question: "Complete: 'These cars ___ (make) in Germany.'",
    correctAnswer: "are made",
    explanation: "Present Simple passive plural: 'are + past participle'.",
    level: "beginner",
    category: "present simple"
  },
  {
    id: "passive_complete_9",
    type: "complet",
    question: "Complete: 'The letter ___ (post) yesterday.'",
    correctAnswer: "was posted",
    explanation: "Past Simple passive: 'was + past participle'.",
    level: "intermediate",
    category: "past simple"
  },
  {
    id: "passive_complete_10",
    type: "complet",
    question: "Complete: 'The problem ___ (solve) quickly.'",
    correctAnswer: "was solved",
    explanation: "Past Simple passive: 'was + past participle'.",
    level: "intermediate",
    category: "past simple"
  },

  // Choice exercises (5 questions)
  {
    id: "passive_choice_1",
    type: "choix",
    question: "Choose the correct passive structure: 'They will announce the results tomorrow.'",
    options: ["a) The results will announce tomorrow.", "b) The results will be announced tomorrow.", "c) The results were announced tomorrow.", "d) The results are announced tomorrow."],
    correctAnswer: "b) The results will be announced tomorrow.",
    explanation: "Future passive: 'will be + past participle'.",
    level: "intermediate",
    category: "future"
  },
  {
    id: "passive_choice_2",
    type: "choix",
    question: "Choose the correct passive: 'Someone broke the window.'",
    options: ["a) The window broke.", "b) The window was broken.", "c) The window is broken.", "d) The window breaks."],
    correctAnswer: "b) The window was broken.",
    explanation: "Past Simple passive: 'was + past participle'.",
    level: "beginner",
    category: "past simple"
  },
  {
    id: "passive_choice_3",
    type: "choix",
    question: "Choose the correct passive structure: 'They are repairing the road.'",
    options: ["a) The road is repairing.", "b) The road is being repaired.", "c) The road was repaired.", "d) The road repairs."],
    correctAnswer: "b) The road is being repaired.",
    explanation: "Present Continuous passive: 'is/are being + past participle'.",
    level: "intermediate",
    category: "present continuous"
  },
  {
    id: "passive_choice_4",
    type: "choix",
    question: "Choose the correct passive: 'People speak English all over the world.'",
    options: ["a) English speaks all over the world.", "b) English is spoken all over the world.", "c) English was spoken all over the world.", "d) English spoke all over the world."],
    correctAnswer: "b) English is spoken all over the world.",
    explanation: "Present Simple passive: 'is + past participle'.",
    level: "beginner",
    category: "present simple"
  },
  {
    id: "passive_choice_5",
    type: "choix",
    question: "Choose the correct passive structure: 'They have built a new hospital.'",
    options: ["a) A new hospital has built.", "b) A new hospital has been built.", "c) A new hospital was built.", "d) A new hospital is built."],
    correctAnswer: "b) A new hospital has been built.",
    explanation: "Present Perfect passive: 'has/have been + past participle'.",
    level: "intermediate",
    category: "present perfect"
  },

  // Advanced exercises with modals and complex structures
  {
    id: "passive_qcm_13",
    type: "qcm",
    question: "Choose the correct passive: 'You should clean the room.'",
    options: ["a) The room should clean.", "b) The room should be cleaned.", "c) The room should cleaned.", "d) The room should to clean."],
    correctAnswer: "b) The room should be cleaned.",
    explanation: "Modal passive: modal + be + past participle.",
    level: "advanced",
    category: "modal verbs"
  },
  {
    id: "passive_qcm_14",
    type: "qcm",
    question: "Transform: 'They might postpone the meeting.'",
    options: ["a) The meeting might postpone.", "b) The meeting might be postponed.", "c) The meeting might postponed.", "d) The meeting might to postpone."],
    correctAnswer: "b) The meeting might be postponed.",
    explanation: "Modal passive: might + be + past participle.",
    level: "advanced",
    category: "modal verbs"
  },
  {
    id: "passive_qcm_15",
    type: "qcm",
    question: "Choose the passive: 'Someone has to fix the computer.'",
    options: ["a) The computer has to fix.", "b) The computer has to be fixed.", "c) The computer had to fix.", "d) The computer had to be fixed."],
    correctAnswer: "b) The computer has to be fixed.",
    explanation: "Modal passive: has to + be + past participle.",
    level: "advanced",
    category: "modal verbs"
  }
];

export const getPassiveVoiceExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return passiveVoiceExercises.filter(exercise => exercise.type === type);
};

export const passiveVoiceExerciseCategories = [
  'toutes',
  'transformation',
  'present simple',
  'present continuous',
  'present perfect',
  'past simple',
  'future',
  'modal verbs'
];
