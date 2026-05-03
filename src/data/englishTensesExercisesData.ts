export interface TensesExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const tensesExercises: TensesExercise[] = [
  // QCM - Present Tenses (10 questions)
  {
    id: "tenses_qcm_1",
    type: "qcm",
    question: "Choose the correct form: She ___ to work every day.",
    options: ["a) goes", "b) is going", "c) has gone", "d) was going"],
    correctAnswer: "a) goes",
    explanation: "Present Simple is used for regular habits and routines.",
    level: "débutant",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_2",
    type: "qcm",
    question: "Complete: I ___ English right now.",
    options: ["a) study", "b) am studying", "c) have studied", "d) will study"],
    correctAnswer: "b) am studying",
    explanation: "Present Continuous is used for actions happening at the moment of speaking.",
    level: "débutant",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_3",
    type: "qcm",
    question: "Select the correct option: I ___ my homework already.",
    options: ["a) do", "b) am doing", "c) have done", "d) did"],
    correctAnswer: "c) have done",
    explanation: "Present Perfect is used for completed actions with present relevance, often with 'already'.",
    level: "intermédiaire",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_4",
    type: "qcm",
    question: "Choose the right form: She ___ here for three years.",
    options: ["a) lives", "b) is living", "c) has lived", "d) has been living"],
    correctAnswer: "d) has been living",
    explanation: "Present Perfect Continuous emphasizes the duration of an action that started in the past and continues to the present.",
    level: "avancé",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_5",
    type: "qcm",
    question: "Complete: Water ___ at 100°C.",
    options: ["a) is boiling", "b) boils", "c) has boiled", "d) will boil"],
    correctAnswer: "b) boils",
    explanation: "Present Simple is used for scientific facts and general truths.",
    level: "débutant",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_6",
    type: "qcm",
    question: "Choose the correct form: I ___ my friend tomorrow.",
    options: ["a) meet", "b) am meeting", "c) have met", "d) will meet"],
    correctAnswer: "b) am meeting",
    explanation: "Present Continuous can be used for planned future arrangements.",
    level: "intermédiaire",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_7",
    type: "qcm",
    question: "Select the right option: He ___ three cups of coffee today.",
    options: ["a) drinks", "b) is drinking", "c) has drunk", "d) drank"],
    correctAnswer: "c) has drunk",
    explanation: "Present Perfect is used for actions in an unfinished time period (today).",
    level: "intermédiaire",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_8",
    type: "qcm",
    question: "Complete: I ___ about this problem all morning.",
    options: ["a) think", "b) am thinking", "c) have thought", "d) have been thinking"],
    correctAnswer: "d) have been thinking",
    explanation: "Present Perfect Continuous is used to emphasize the duration and continuity of an action.",
    level: "avancé",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_9",
    type: "qcm",
    question: "Choose the correct form: The train ___ at 6 PM.",
    options: ["a) leaves", "b) is leaving", "c) has left", "d) will leave"],
    correctAnswer: "a) leaves",
    explanation: "Present Simple is used for scheduled events and timetables.",
    level: "débutant",
    category: "present tenses"
  },
  {
    id: "tenses_qcm_10",
    type: "qcm",
    question: "Select the right option: I ___ never ___ to Paris.",
    options: ["a) do / go", "b) am / going", "c) have / been", "d) will / go"],
    correctAnswer: "c) have / been",
    explanation: "Present Perfect is used for life experiences with 'never' and 'ever'.",
    level: "intermédiaire",
    category: "present tenses"
  },

  // QCM - Past Tenses (10 questions)
  {
    id: "tenses_qcm_11",
    type: "qcm",
    question: "Choose the correct form: I ___ to London last year.",
    options: ["a) go", "b) went", "c) have gone", "d) was going"],
    correctAnswer: "b) went",
    explanation: "Past Simple is used for completed actions at a specific time in the past.",
    level: "débutant",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_12",
    type: "qcm",
    question: "Complete: While I ___ TV, my phone rang.",
    options: ["a) watched", "b) was watching", "c) have watched", "d) had watched"],
    correctAnswer: "b) was watching",
    explanation: "Past Continuous is used for ongoing actions interrupted by another event.",
    level: "intermédiaire",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_13",
    type: "qcm",
    question: "Select the correct option: When I arrived, she ___ already ___.",
    options: ["a) has / left", "b) was / leaving", "c) had / left", "d) is / leaving"],
    correctAnswer: "c) had / left",
    explanation: "Past Perfect is used for actions completed before another past event.",
    level: "avancé",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_14",
    type: "qcm",
    question: "Choose the right form: I ___ for two hours when she finally arrived.",
    options: ["a) waited", "b) was waiting", "c) have waited", "d) had been waiting"],
    correctAnswer: "d) had been waiting",
    explanation: "Past Perfect Continuous emphasizes the duration of an action up to a point in the past.",
    level: "avancé",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_15",
    type: "qcm",
    question: "Complete: She ___ medicine at university.",
    options: ["a) studies", "b) studied", "c) has studied", "d) was studying"],
    correctAnswer: "b) studied",
    explanation: "Past Simple is used for completed actions or states in the past.",
    level: "débutant",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_16",
    type: "qcm",
    question: "Select the correct form: They ___ football when it started raining.",
    options: ["a) played", "b) were playing", "c) have played", "d) had played"],
    correctAnswer: "b) were playing",
    explanation: "Past Continuous describes an ongoing action interrupted by another event.",
    level: "intermédiaire",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_17",
    type: "qcm",
    question: "Choose the right option: After he ___ his work, he went home.",
    options: ["a) finished", "b) was finishing", "c) has finished", "d) had finished"],
    correctAnswer: "d) had finished",
    explanation: "Past Perfect shows which action happened first in a sequence of past events.",
    level: "avancé",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_18",
    type: "qcm",
    question: "Complete: I ___ my keys yesterday.",
    options: ["a) lose", "b) lost", "c) have lost", "d) was losing"],
    correctAnswer: "b) lost",
    explanation: "Past Simple is used with specific past time expressions like 'yesterday'.",
    level: "débutant",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_19",
    type: "qcm",
    question: "Select the correct form: She was tired because she ___ all night.",
    options: ["a) worked", "b) was working", "c) has worked", "d) had been working"],
    correctAnswer: "d) had been working",
    explanation: "Past Perfect Continuous shows the cause of a past situation through a prolonged action.",
    level: "avancé",
    category: "past tenses"
  },
  {
    id: "tenses_qcm_20",
    type: "qcm",
    question: "Choose the right form: When I was young, I ___ to visit my grandmother.",
    options: ["a) used", "b) was used", "c) have used", "d) had used"],
    correctAnswer: "a) used",
    explanation: "'Used to' expresses past habits or states that are no longer true.",
    level: "intermédiaire",
    category: "past tenses"
  },

  // QCM - Future Tenses (10 questions)
  {
    id: "tenses_qcm_21",
    type: "qcm",
    question: "Choose the correct form: I ___ you tomorrow.",
    options: ["a) call", "b) am calling", "c) will call", "d) have called"],
    correctAnswer: "c) will call",
    explanation: "Future Simple (will) is used for spontaneous decisions and promises.",
    level: "débutant",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_22",
    type: "qcm",
    question: "Complete: This time tomorrow, I ___ to Paris.",
    options: ["a) travel", "b) will travel", "c) will be traveling", "d) will have traveled"],
    correctAnswer: "c) will be traveling",
    explanation: "Future Continuous describes actions in progress at a specific future time.",
    level: "intermédiaire",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_23",
    type: "qcm",
    question: "Select the correct option: By next year, I ___ my degree.",
    options: ["a) finish", "b) will finish", "c) will be finishing", "d) will have finished"],
    correctAnswer: "d) will have finished",
    explanation: "Future Perfect shows completion before a specific future time.",
    level: "avancé",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_24",
    type: "qcm",
    question: "Choose the right form: I ___ my boss at 3 PM today.",
    options: ["a) meet", "b) am meeting", "c) will meet", "d) will be meeting"],
    correctAnswer: "b) am meeting",
    explanation: "Present Continuous is used for planned future arrangements.",
    level: "intermédiaire",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_25",
    type: "qcm",
    question: "Complete: The train ___ at 8:30 AM.",
    options: ["a) leaves", "b) is leaving", "c) will leave", "d) will be leaving"],
    correctAnswer: "a) leaves",
    explanation: "Present Simple is used for scheduled events and timetables.",
    level: "débutant",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_26",
    type: "qcm",
    question: "Select the correct form: By the time you arrive, I ___ for two hours.",
    options: ["a) wait", "b) will wait", "c) will be waiting", "d) will have been waiting"],
    correctAnswer: "d) will have been waiting",
    explanation: "Future Perfect Continuous emphasizes duration up to a future point.",
    level: "avancé",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_27",
    type: "qcm",
    question: "Choose the right option: It looks like it ___ rain.",
    options: ["a) will", "b) is going to", "c) is", "d) would"],
    correctAnswer: "b) is going to",
    explanation: "'Going to' is used for predictions based on present evidence.",
    level: "intermédiaire",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_28",
    type: "qcm",
    question: "Complete: I think she ___ the job.",
    options: ["a) gets", "b) is getting", "c) will get", "d) is going to get"],
    correctAnswer: "c) will get",
    explanation: "'Will' is used for predictions based on opinion or belief.",
    level: "intermédiaire",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_29",
    type: "qcm",
    question: "Select the correct form: When I graduate, I ___ here for four years.",
    options: ["a) study", "b) will study", "c) will be studying", "d) will have been studying"],
    correctAnswer: "d) will have been studying",
    explanation: "Future Perfect Continuous shows duration of an action up to a future point.",
    level: "avancé",
    category: "future tenses"
  },
  {
    id: "tenses_qcm_30",
    type: "qcm",
    question: "Choose the right form: We ___ to Spain next summer.",
    options: ["a) go", "b) are going", "c) will go", "d) will be going"],
    correctAnswer: "b) are going",
    explanation: "Present Continuous (or 'going to') is used for planned future events.",
    level: "débutant",
    category: "future tenses"
  },

  // Choix multiples - Mixed Tenses (10 questions)
  {
    id: "tenses_choix_1",
    type: "choix",
    question: "Which sentence is correct?",
    options: [
      "a) I am knowing the answer.",
      "b) I know the answer.",
      "c) I have been knowing the answer.",
      "d) I was knowing the answer."
    ],
    correctAnswer: "b) I know the answer.",
    explanation: "State verbs like 'know' are not normally used in continuous forms.",
    level: "intermédiaire",
    category: "state vs action verbs"
  },
  {
    id: "tenses_choix_2",
    type: "choix",
    question: "Select the grammatically correct sentence:",
    options: [
      "a) I have seen him yesterday.",
      "b) I saw him yesterday.",
      "c) I had seen him yesterday.",
      "d) I was seeing him yesterday."
    ],
    correctAnswer: "b) I saw him yesterday.",
    explanation: "Past Simple is used with specific past time expressions like 'yesterday'.",
    level: "intermédiaire",
    category: "present perfect vs past simple"
  },
  {
    id: "tenses_choix_3",
    type: "choix",
    question: "Which sentence expresses a future arrangement?",
    options: [
      "a) I will meet him tomorrow.",
      "b) I am meeting him tomorrow.",
      "c) I meet him tomorrow.",
      "d) I would meet him tomorrow."
    ],
    correctAnswer: "b) I am meeting him tomorrow.",
    explanation: "Present Continuous is used for planned future arrangements.",
    level: "intermédiaire",
    category: "future expressions"
  },
  {
    id: "tenses_choix_4",
    type: "choix",
    question: "Choose the sentence that shows sequence of past events:",
    options: [
      "a) When I arrived, she left.",
      "b) When I arrived, she was leaving.",
      "c) When I arrived, she had left.",
      "d) When I had arrived, she left."
    ],
    correctAnswer: "c) When I arrived, she had left.",
    explanation: "Past Perfect shows which action happened first in a sequence.",
    level: "avancé",
    category: "past perfect usage"
  },
  {
    id: "tenses_choix_5",
    type: "choix",
    question: "Which sentence is about a temporary situation?",
    options: [
      "a) She lives in London.",
      "b) She is living in London.",
      "c) She has lived in London.",
      "d) She lived in London."
    ],
    correctAnswer: "b) She is living in London.",
    explanation: "Present Continuous can indicate temporary situations.",
    level: "intermédiaire",
    category: "present simple vs continuous"
  },
  {
    id: "tenses_choix_6",
    type: "choix",
    question: "Select the sentence expressing a habit in the past:",
    options: [
      "a) I was going to school every day.",
      "b) I went to school every day.",
      "c) I used to go to school every day.",
      "d) I had gone to school every day."
    ],
    correctAnswer: "c) I used to go to school every day.",
    explanation: "'Used to' expresses past habits that are no longer true.",
    level: "intermédiaire",
    category: "past habits"
  },
  {
    id: "tenses_choix_7",
    type: "choix",
    question: "Which sentence shows completion before a future time?",
    options: [
      "a) I will finish by 5 PM.",
      "b) I will be finishing by 5 PM.",
      "c) I will have finished by 5 PM.",
      "d) I will have been finishing by 5 PM."
    ],
    correctAnswer: "c) I will have finished by 5 PM.",
    explanation: "Future Perfect shows completion before a specific future time.",
    level: "avancé",
    category: "future perfect"
  },
  {
    id: "tenses_choix_8",
    type: "choix",
    question: "Choose the sentence expressing duration up to now:",
    options: [
      "a) I worked here for 5 years.",
      "b) I was working here for 5 years.",
      "c) I have worked here for 5 years.",
      "d) I had worked here for 5 years."
    ],
    correctAnswer: "c) I have worked here for 5 years.",
    explanation: "Present Perfect is used for actions starting in the past and continuing to now.",
    level: "intermédiaire",
    category: "present perfect duration"
  },
  {
    id: "tenses_choix_9",
    type: "choix",
    question: "Which sentence expresses a scientific fact?",
    options: [
      "a) Water is boiling at 100°C.",
      "b) Water boils at 100°C.",
      "c) Water has boiled at 100°C.",
      "d) Water will boil at 100°C."
    ],
    correctAnswer: "b) Water boils at 100°C.",
    explanation: "Present Simple is used for scientific facts and general truths.",
    level: "débutant",
    category: "general truths"
  },
  {
    id: "tenses_choix_10",
    type: "choix",
    question: "Select the sentence showing an interrupted action:",
    options: [
      "a) I studied when she called.",
      "b) I was studying when she called.",
      "c) I had studied when she called.",
      "d) I have studied when she called."
    ],
    correctAnswer: "b) I was studying when she called.",
    explanation: "Past Continuous shows an ongoing action interrupted by another event.",
    level: "intermédiaire",
    category: "interrupted actions"
  },

  // Mots à compléter - All Tenses (30 questions)
  {
    id: "tenses_complet_1",
    type: "complet",
    question: "I ___ to work every day. (habitude)",
    correctAnswer: "go",
    explanation: "Present Simple is used for habits and routines.",
    level: "débutant",
    category: "present simple"
  },
  {
    id: "tenses_complet_2",
    type: "complet",
    question: "She ___ studying right now. (action en cours)",
    correctAnswer: "is",
    explanation: "Present Continuous: am/is/are + verb-ing for ongoing actions.",
    level: "débutant",
    category: "present continuous"
  },
  {
    id: "tenses_complet_3",
    type: "complet",
    question: "They ___ finished their homework. (récemment accompli)",
    correctAnswer: "have",
    explanation: "Present Perfect: have/has + past participle for recently completed actions.",
    level: "intermédiaire",
    category: "present perfect"
  },
  {
    id: "tenses_complet_4",
    type: "complet",
    question: "I ___ been waiting for an hour. (durée jusqu'à maintenant)",
    correctAnswer: "have",
    explanation: "Present Perfect Continuous: have/has been + verb-ing for duration.",
    level: "avancé",
    category: "present perfect continuous"
  },
  {
    id: "tenses_complet_5",
    type: "complet",
    question: "We ___ to Paris last year. (passé spécifique)",
    correctAnswer: "went",
    explanation: "Past Simple is used for completed actions at specific past times.",
    level: "débutant",
    category: "past simple"
  },
  {
    id: "tenses_complet_6",
    type: "complet",
    question: "While I ___ watching TV, the phone rang. (action interrompue)",
    correctAnswer: "was",
    explanation: "Past Continuous: was/were + verb-ing for interrupted actions.",
    level: "intermédiaire",
    category: "past continuous"
  },
  {
    id: "tenses_complet_7",
    type: "complet",
    question: "She ___ already left when I arrived. (antériorité)",
    correctAnswer: "had",
    explanation: "Past Perfect: had + past participle for actions before another past event.",
    level: "avancé",
    category: "past perfect"
  },
  {
    id: "tenses_complet_8",
    type: "complet",
    question: "I ___ been working for hours when she called. (durée dans le passé)",
    correctAnswer: "had",
    explanation: "Past Perfect Continuous: had been + verb-ing for duration before a past event.",
    level: "avancé",
    category: "past perfect continuous"
  },
  {
    id: "tenses_complet_9",
    type: "complet",
    question: "I ___ call you tomorrow. (promesse)",
    correctAnswer: "will",
    explanation: "Future Simple: will + verb for promises and spontaneous decisions.",
    level: "débutant",
    category: "future simple"
  },
  {
    id: "tenses_complet_10",
    type: "complet",
    question: "This time tomorrow, I ___ be flying to New York. (futur en cours)",
    correctAnswer: "will",
    explanation: "Future Continuous: will be + verb-ing for actions in progress at a future time.",
    level: "intermédiaire",
    category: "future continuous"
  },
  {
    id: "tenses_complet_11",
    type: "complet",
    question: "By next month, I ___ have graduated. (accomplissement futur)",
    correctAnswer: "will",
    explanation: "Future Perfect: will have + past participle for completion before a future time.",
    level: "avancé",
    category: "future perfect"
  },
  {
    id: "tenses_complet_12",
    type: "complet",
    question: "Water ___ at 100°C. (fait scientifique)",
    correctAnswer: "boils",
    explanation: "Present Simple is used for scientific facts and general truths.",
    level: "débutant",
    category: "general truths"
  },
  {
    id: "tenses_complet_13",
    type: "complet",
    question: "I ___ never been to Japan. (expérience de vie)",
    correctAnswer: "have",
    explanation: "Present Perfect is used for life experiences with 'never', 'ever'.",
    level: "intermédiaire",
    category: "life experiences"
  },
  {
    id: "tenses_complet_14",
    type: "complet",
    question: "She ___ to go shopping every Saturday. (habitude passée)",
    correctAnswer: "used",
    explanation: "'Used to' expresses past habits that are no longer true.",
    level: "intermédiaire",
    category: "past habits"
  },
  {
    id: "tenses_complet_15",
    type: "complet",
    question: "The train ___ at 6 PM. (horaire)",
    correctAnswer: "leaves",
    explanation: "Present Simple is used for schedules and timetables.",
    level: "débutant",
    category: "schedules"
  },
  {
    id: "tenses_complet_16",
    type: "complet",
    question: "I ___ meeting my boss tomorrow. (arrangement planifié)",
    correctAnswer: "am",
    explanation: "Present Continuous is used for planned future arrangements.",
    level: "intermédiaire",
    category: "future arrangements"
  },
  {
    id: "tenses_complet_17",
    type: "complet",
    question: "It looks like it ___ going to rain. (prédiction basée sur des preuves)",
    correctAnswer: "is",
    explanation: "'Be going to' is used for predictions based on present evidence.",
    level: "intermédiaire",
    category: "predictions"
  },
  {
    id: "tenses_complet_18",
    type: "complet",
    question: "I think she ___ get the job. (opinion/prédiction)",
    correctAnswer: "will",
    explanation: "'Will' is used for predictions based on opinion or belief.",
    level: "intermédiaire",
    category: "predictions"
  },
  {
    id: "tenses_complet_19",
    type: "complet",
    question: "I ___ my keys yesterday. (perte spécifique)",
    correctAnswer: "lost",
    explanation: "Past Simple is used with specific past time expressions like 'yesterday'.",
    level: "débutant",
    category: "specific past time"
  },
  {
    id: "tenses_complet_20",
    type: "complet",
    question: "He ___ three books this month. (période non terminée)",
    correctAnswer: "has",
    explanation: "Present Perfect is used for actions in an unfinished time period.",
    level: "intermédiaire",
    category: "unfinished time period"
  },
  {
    id: "tenses_complet_21",
    type: "complet",
    question: "While she ___ cooking, I was reading. (actions simultanées)",
    correctAnswer: "was",
    explanation: "Past Continuous is used for simultaneous past actions.",
    level: "intermédiaire",
    category: "simultaneous actions"
  },
  {
    id: "tenses_complet_22",
    type: "complet",
    question: "By the time you arrive, I ___ have been waiting for an hour. (durée future)",
    correctAnswer: "will",
    explanation: "Future Perfect Continuous shows duration up to a future point.",
    level: "avancé",
    category: "future duration"
  },
  {
    id: "tenses_complet_23",
    type: "complet",
    question: "I ___ living in this city since 2020. (depuis un moment spécifique)",
    correctAnswer: "have",
    explanation: "Present Perfect is used with 'since' for actions starting at a specific past time.",
    level: "intermédiaire",
    category: "since"
  },
  {
    id: "tenses_complet_24",
    type: "complet",
    question: "She was tired because she ___ been working all night. (cause passée)",
    correctAnswer: "had",
    explanation: "Past Perfect Continuous shows the cause of a past situation.",
    level: "avancé",
    category: "cause and effect"
  },
  {
    id: "tenses_complet_25",
    type: "complet",
    question: "I ___ know the answer. (état mental)",
    correctAnswer: "don't",
    explanation: "State verbs like 'know' are not normally used in continuous forms.",
    level: "intermédiaire",
    category: "state verbs"
  },
  {
    id: "tenses_complet_26",
    type: "complet",
    question: "After he ___ finished his work, he went home. (séquence d'événements)",
    correctAnswer: "had",
    explanation: "Past Perfect shows which action happened first in a sequence.",
    level: "avancé",
    category: "sequence of events"
  },
  {
    id: "tenses_complet_27",
    type: "complet",
    question: "I ___ been studying English for five years. (durée continue)",
    correctAnswer: "have",
    explanation: "Present Perfect Continuous emphasizes the duration of an ongoing action.",
    level: "avancé",
    category: "continuous duration"
  },
  {
    id: "tenses_complet_28",
    type: "complet",
    question: "When I was young, I ___ play football every day. (habitude passée)",
    correctAnswer: "would",
    explanation: "'Would' can be used to express past habits (alternative to 'used to').",
    level: "intermédiaire",
    category: "past habits alternative"
  },
  {
    id: "tenses_complet_29",
    type: "complet",
    question: "The weather ___ been terrible lately. (période récente)",
    correctAnswer: "has",
    explanation: "Present Perfect is used with 'lately', 'recently' for recent past actions.",
    level: "intermédiaire",
    category: "recent past"
  },
  {
    id: "tenses_complet_30",
    type: "complet",
    question: "Next year at this time, I ___ be studying in university. (futur à un moment précis)",
    correctAnswer: "will",
    explanation: "Future Continuous describes actions in progress at a specific future time.",
    level: "intermédiaire",
    category: "specific future time"
  }
];

export const tensesExerciseCategories = [
  "present tenses",
  "past tenses",
  "future tenses",
  "present simple",
  "present continuous",
  "present perfect",
  "present perfect continuous",
  "past simple",
  "past continuous",
  "past perfect",
  "past perfect continuous",
  "future simple",
  "future continuous",
  "future perfect",
  "state vs action verbs",
  "present perfect vs past simple",
  "future expressions",
  "past perfect usage",
  "present simple vs continuous",
  "past habits",
  "future perfect",
  "present perfect duration",
  "general truths",
  "interrupted actions",
  "life experiences",
  "schedules",
  "future arrangements",
  "predictions",
  "specific past time",
  "unfinished time period",
  "simultaneous actions",
  "future duration",
  "since",
  "cause and effect",
  "state verbs",
  "sequence of events",
  "continuous duration",
  "past habits alternative",
  "recent past",
  "specific future time"
];

export const getTensesExercisesByType = (type: TensesExercise['type']) => {
  return tensesExercises.filter(exercise => exercise.type === type);
};

export const getTensesExercisesByCategory = (category: string) => {
  return tensesExercises.filter(exercise => exercise.category === category);
};

export const getTensesExercisesByLevel = (level: TensesExercise['level']) => {
  return tensesExercises.filter(exercise => exercise.level === level);
};
