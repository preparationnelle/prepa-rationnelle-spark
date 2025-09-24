export interface GerondifInfinitifExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const gerondifInfinitifExercises: GerondifInfinitifExercise[] = [
  // QCM - Verbes suivis uniquement de gérondif (10 questions)
  {
    id: "gerondif_qcm_1",
    type: "qcm",
    question: "Choose the correct form: I enjoy ___ books in my free time.",
    options: ["a) reading", "b) to read", "c) read", "d) reads"],
    correctAnswer: "a) reading",
    explanation: "Enjoy is followed by a gerund (verb + -ing).",
    level: "débutant",
    category: "gerund only verbs"
  },
  {
    id: "gerondif_qcm_2",
    type: "qcm",
    question: "Select the right option: She avoided ___ him about the problem.",
    options: ["a) talking", "b) to talk", "c) talk", "d) talks"],
    correctAnswer: "b) to talk",
    explanation: "Avoid is followed by an infinitive (to + verb).",
    level: "débutant",
    category: "infinitive only verbs"
  },
  {
    id: "gerondif_qcm_3",
    type: "qcm",
    question: "Choose the correct form: They decided ___ to the party.",
    options: ["a) going", "b) to go", "c) go", "d) goes"],
    correctAnswer: "b) to go",
    explanation: "Decide is followed by an infinitive.",
    level: "débutant",
    category: "infinitive only verbs"
  },
  {
    id: "gerondif_qcm_4",
    type: "qcm",
    question: "Select the right option: He finished ___ his homework before dinner.",
    options: ["a) doing", "b) to do", "c) do", "d) does"],
    correctAnswer: "a) doing",
    explanation: "Finish is followed by a gerund.",
    level: "débutant",
    category: "gerund only verbs"
  },
  {
    id: "gerondif_qcm_5",
    type: "qcm",
    question: "Choose the correct form: I hope ___ you soon.",
    options: ["a) seeing", "b) to see", "c) see", "d) sees"],
    correctAnswer: "b) to see",
    explanation: "Hope is followed by an infinitive.",
    level: "débutant",
    category: "infinitive only verbs"
  },
  {
    id: "gerondif_qcm_6",
    type: "qcm",
    question: "Select the right option: She suggested ___ a movie together.",
    options: ["a) watching", "b) to watch", "c) watch", "d) watches"],
    correctAnswer: "a) watching",
    explanation: "Suggest is followed by a gerund.",
    level: "intermédiaire",
    category: "gerund only verbs"
  },
  {
    id: "gerondif_qcm_7",
    type: "qcm",
    question: "Choose the correct form: They agreed ___ the meeting.",
    options: ["a) attending", "b) to attend", "c) attend", "d) attends"],
    correctAnswer: "b) to attend",
    explanation: "Agree is followed by an infinitive.",
    level: "intermédiaire",
    category: "infinitive only verbs"
  },
  {
    id: "gerondif_qcm_8",
    type: "qcm",
    question: "Select the right option: I miss ___ with my friends.",
    options: ["a) hanging out", "b) to hang out", "c) hang out", "d) hangs out"],
    correctAnswer: "a) hanging out",
    explanation: "Miss is followed by a gerund.",
    level: "débutant",
    category: "gerund only verbs"
  },
  {
    id: "gerondif_qcm_9",
    type: "qcm",
    question: "Choose the correct form: She promised ___ on time.",
    options: ["a) arriving", "b) to arrive", "c) arrive", "d) arrives"],
    correctAnswer: "b) to arrive",
    explanation: "Promise is followed by an infinitive.",
    level: "intermédiaire",
    category: "infinitive only verbs"
  },
  {
    id: "gerondif_qcm_10",
    type: "qcm",
    question: "Select the right option: He postponed ___ his dentist appointment.",
    options: ["a) seeing", "b) to see", "c) see", "d) sees"],
    correctAnswer: "a) seeing",
    explanation: "Postpone is followed by a gerund.",
    level: "intermédiaire",
    category: "gerund only verbs"
  },

  // QCM - Verbes avec double forme (10 questions)
  {
    id: "gerondif_qcm_11",
    type: "qcm",
    question: "Choose the correct form: I started ___ English 5 years ago.",
    options: ["a) learning", "b) to learn", "c) both are possible", "d) neither"],
    correctAnswer: "c) both are possible",
    explanation: "Start can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "verbs with both forms"
  },
  {
    id: "gerondif_qcm_12",
    type: "qcm",
    question: "Select the right option: She continued ___ despite the rain.",
    options: ["a) walking", "b) to walk", "c) both are possible", "d) neither"],
    correctAnswer: "c) both are possible",
    explanation: "Continue can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "verbs with both forms"
  },
  {
    id: "gerondif_qcm_13",
    type: "qcm",
    question: "Choose the correct form: I forgot ___ my keys at home.",
    options: ["a) leaving", "b) to leave", "c) leaving = past action, to leave = future action", "d) both mean the same"],
    correctAnswer: "c) leaving = past action, to leave = future action",
    explanation: "With forget, gerund refers to forgetting a past action, infinitive refers to forgetting to do a future action.",
    level: "avancé",
    category: "verbs with different meanings"
  },
  {
    id: "gerondif_qcm_14",
    type: "qcm",
    question: "Select the right option: He stopped ___ because he was tired.",
    options: ["a) working", "b) to work", "c) working = stopped the action, to work = stopped for another purpose", "d) both mean the same"],
    correctAnswer: "c) working = stopped the action, to work = stopped for another purpose",
    explanation: "With stop, gerund means to stop doing something, infinitive means to stop in order to do something else.",
    level: "avancé",
    category: "verbs with different meanings"
  },
  {
    id: "gerondif_qcm_15",
    type: "qcm",
    question: "Choose the correct form: I like ___ in the morning.",
    options: ["a) jogging", "b) to jog", "c) both are possible", "d) neither"],
    correctAnswer: "c) both are possible",
    explanation: "Like can be followed by either gerund or infinitive with no change in meaning.",
    level: "débutant",
    category: "verbs with both forms"
  },
  {
    id: "gerondif_qcm_16",
    type: "qcm",
    question: "Select the right option: She remembered ___ her homework.",
    options: ["a) doing", "b) to do", "c) doing = remembered the action, to do = remembered to do it", "d) both mean the same"],
    correctAnswer: "c) doing = remembered the action, to do = remembered to do it",
    explanation: "With remember, gerund refers to remembering a past action, infinitive refers to remembering to do a future action.",
    level: "avancé",
    category: "verbs with different meanings"
  },
  {
    id: "gerondif_qcm_17",
    type: "qcm",
    question: "Choose the correct form: They began ___ the project last week.",
    options: ["a) developing", "b) to develop", "c) both are possible", "d) neither"],
    correctAnswer: "c) both are possible",
    explanation: "Begin can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "verbs with both forms"
  },
  {
    id: "gerondif_qcm_18",
    type: "qcm",
    question: "Select the right option: I regret ___ so much time on social media.",
    options: ["a) spending", "b) to spend", "c) spending = past action, to spend = future intention", "d) both mean the same"],
    correctAnswer: "c) spending = past action, to spend = future intention",
    explanation: "With regret, gerund refers to regretting a past action, infinitive refers to regretting a future intention.",
    level: "avancé",
    category: "verbs with different meanings"
  },
  {
    id: "gerondif_qcm_19",
    type: "qcm",
    question: "Choose the correct form: He hates ___ early in the morning.",
    options: ["a) waking up", "b) to wake up", "c) both are possible", "d) neither"],
    correctAnswer: "c) both are possible",
    explanation: "Hate can be followed by either gerund or infinitive with no change in meaning.",
    level: "débutant",
    category: "verbs with both forms"
  },
  {
    id: "gerondif_qcm_20",
    type: "qcm",
    question: "Select the right option: The teacher went on ___ about grammar rules.",
    options: ["a) explaining", "b) to explain", "c) explaining = continued the action, to explain = changed to different action", "d) both mean the same"],
    correctAnswer: "c) explaining = continued the action, to explain = changed to different action",
    explanation: "With go on, gerund means to continue doing the same thing, infinitive means to change to a different action.",
    level: "avancé",
    category: "verbs with different meanings"
  },

  // QCM - Autres contextes (10 questions)
  {
    id: "gerondif_qcm_21",
    type: "qcm",
    question: "Choose the correct form: I'm interested in ___ photography.",
    options: ["a) learning", "b) to learn", "c) learn", "d) learns"],
    correctAnswer: "a) learning",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "after prepositions"
  },
  {
    id: "gerondif_qcm_22",
    type: "qcm",
    question: "Select the right option: It's difficult ___ a new language.",
    options: ["a) learning", "b) to learn", "c) learn", "d) learns"],
    correctAnswer: "b) to learn",
    explanation: "After adjectives, we use the infinitive.",
    level: "débutant",
    category: "after adjectives"
  },
  {
    id: "gerondif_qcm_23",
    type: "qcm",
    question: "Choose the correct form: She went to the store ___ some milk.",
    options: ["a) buying", "b) to buy", "c) buy", "d) buys"],
    correctAnswer: "b) to buy",
    explanation: "Infinitive is used to express purpose/goal.",
    level: "débutant",
    category: "expressing purpose"
  },
  {
    id: "gerondif_qcm_24",
    type: "qcm",
    question: "Select the right option: Before ___ to bed, brush your teeth.",
    options: ["a) going", "b) to go", "c) go", "d) goes"],
    correctAnswer: "a) going",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "after prepositions"
  },
  {
    id: "gerondif_qcm_25",
    type: "qcm",
    question: "Choose the correct form: He is afraid ___ spiders.",
    options: ["a) seeing", "b) to see", "c) see", "d) sees"],
    correctAnswer: "a) seeing",
    explanation: "After some adjectives like 'afraid', we use the gerund.",
    level: "intermédiaire",
    category: "after adjectives"
  },
  {
    id: "gerondif_qcm_26",
    type: "qcm",
    question: "Select the right option: I need ___ my homework now.",
    options: ["a) finishing", "b) to finish", "c) finish", "d) finishes"],
    correctAnswer: "b) to finish",
    explanation: "Need expresses necessity and is followed by infinitive.",
    level: "débutant",
    category: "expressing purpose"
  },
  {
    id: "gerondif_qcm_27",
    type: "qcm",
    question: "Choose the correct form: She is good at ___ piano.",
    options: ["a) playing", "b) to play", "c) play", "d) plays"],
    correctAnswer: "a) playing",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "after prepositions"
  },
  {
    id: "gerondif_qcm_28",
    type: "qcm",
    question: "Select the right option: It's nice ___ you.",
    options: ["a) meeting", "b) to meet", "c) meet", "d) meets"],
    correctAnswer: "b) to meet",
    explanation: "After adjectives, we use the infinitive.",
    level: "intermédiaire",
    category: "after adjectives"
  },
  {
    id: "gerondif_qcm_29",
    type: "qcm",
    question: "Choose the correct form: He came here ___ help us.",
    options: ["a) helping", "b) to help", "c) help", "d) helps"],
    correctAnswer: "b) to help",
    explanation: "Infinitive is used to express purpose/goal.",
    level: "débutant",
    category: "expressing purpose"
  },
  {
    id: "gerondif_qcm_30",
    type: "qcm",
    question: "Select the right option: After ___ dinner, we watched a movie.",
    options: ["a) eating", "b) to eat", "c) eat", "d) eats"],
    correctAnswer: "a) eating",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "after prepositions"
  },

  // Choix multiples - Exercices mélangés (15 questions)
  {
    id: "gerondif_choix_31",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) I enjoy to read books.",
      "b) I enjoy reading books.",
      "c) I enjoy read books.",
      "d) I enjoy reads books."
    ],
    correctAnswer: "b) I enjoy reading books.",
    explanation: "Enjoy is followed by a gerund, not an infinitive.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_32",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) She decided swimming in the pool.",
      "b) She decided to swim in the pool.",
      "c) She decided swim in the pool.",
      "d) She decided swims in the pool."
    ],
    correctAnswer: "b) She decided to swim in the pool.",
    explanation: "Decide is followed by an infinitive.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_33",
    type: "choix",
    question: "Choose the grammatically correct option:",
    options: [
      "a) I'm interested in to learn French.",
      "b) I'm interested in learning French.",
      "c) I'm interested in learn French.",
      "d) I'm interested in learns French."
    ],
    correctAnswer: "b) I'm interested in learning French.",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_34",
    type: "choix",
    question: "Which sentence uses the correct form?",
    options: [
      "a) It's difficult to understand.",
      "b) It's difficult understanding.",
      "c) It's difficult understand.",
      "d) It's difficult understands."
    ],
    correctAnswer: "a) It's difficult to understand.",
    explanation: "After adjectives, we use the infinitive.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_35",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) He stopped to smoke a cigarette.",
      "b) He stopped smoking cigarettes.",
      "c) Both are correct but mean different things.",
      "d) Neither is correct."
    ],
    correctAnswer: "c) Both are correct but mean different things.",
    explanation: "'Stopped smoking' means he quit smoking, 'stopped to smoke' means he paused to have a cigarette.",
    level: "avancé",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_36",
    type: "choix",
    question: "Choose the correct option:",
    options: [
      "a) I forgot calling my mother.",
      "b) I forgot to call my mother.",
      "c) Both are correct but mean different things.",
      "d) Neither is correct."
    ],
    correctAnswer: "c) Both are correct but mean different things.",
    explanation: "'Forgot calling' means I forgot that I called, 'forgot to call' means I forgot to make the call.",
    level: "avancé",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_37",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) She suggested to go to the cinema.",
      "b) She suggested going to the cinema.",
      "c) She suggested go to the cinema.",
      "d) She suggested goes to the cinema."
    ],
    correctAnswer: "b) She suggested going to the cinema.",
    explanation: "Suggest is followed by a gerund.",
    level: "intermédiaire",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_38",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) I'm afraid of to fly.",
      "b) I'm afraid of flying.",
      "c) I'm afraid fly.",
      "d) I'm afraid flies."
    ],
    correctAnswer: "b) I'm afraid of flying.",
    explanation: "After prepositions, we use the gerund.",
    level: "intermédiaire",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_39",
    type: "choix",
    question: "Choose the grammatically correct option:",
    options: [
      "a) He hopes finding a job soon.",
      "b) He hopes to find a job soon.",
      "c) He hopes find a job soon.",
      "d) He hopes finds a job soon."
    ],
    correctAnswer: "b) He hopes to find a job soon.",
    explanation: "Hope is followed by an infinitive.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_40",
    type: "choix",
    question: "Which sentence uses the correct form?",
    options: [
      "a) I like to swim in the sea.",
      "b) I like swimming in the sea.",
      "c) Both are correct and mean the same.",
      "d) Neither is correct."
    ],
    correctAnswer: "c) Both are correct and mean the same.",
    explanation: "Like can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_41",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) She went to Paris for visiting her family.",
      "b) She went to Paris to visit her family.",
      "c) She went to Paris visit her family.",
      "d) She went to Paris visits her family."
    ],
    correctAnswer: "b) She went to Paris to visit her family.",
    explanation: "Infinitive is used to express purpose.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_42",
    type: "choix",
    question: "Choose the correct option:",
    options: [
      "a) I'm good at to cook.",
      "b) I'm good at cooking.",
      "c) I'm good at cook.",
      "d) I'm good at cooks."
    ],
    correctAnswer: "b) I'm good at cooking.",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_43",
    type: "choix",
    question: "Which sentence is grammatically correct?",
    options: [
      "a) They agreed meeting at the restaurant.",
      "b) They agreed to meet at the restaurant.",
      "c) They agreed meet at the restaurant.",
      "d) They agreed meets at the restaurant."
    ],
    correctAnswer: "b) They agreed to meet at the restaurant.",
    explanation: "Agree is followed by an infinitive.",
    level: "intermédiaire",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_44",
    type: "choix",
    question: "Select the correct sentence:",
    options: [
      "a) Before to go to bed, I read a book.",
      "b) Before going to bed, I read a book.",
      "c) Before go to bed, I read a book.",
      "d) Before goes to bed, I read a book."
    ],
    correctAnswer: "b) Before going to bed, I read a book.",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "mixed gerund/infinitive"
  },
  {
    id: "gerondif_choix_45",
    type: "choix",
    question: "Choose the grammatically correct option:",
    options: [
      "a) I regret to tell you this bad news.",
      "b) I regret telling you this bad news.",
      "c) Both are correct but mean different things.",
      "d) Neither is correct."
    ],
    correctAnswer: "c) Both are correct but mean different things.",
    explanation: "'Regret telling' means regretting that I told you, 'regret to tell' means I'm sorry to have to tell you.",
    level: "avancé",
    category: "mixed gerund/infinitive"
  },

  // Mots à compléter - All concepts (30 questions)
  {
    id: "gerondif_complet_46",
    type: "complet",
    question: "I enjoy ___ books in my spare time. (gerund)",
    correctAnswer: "reading",
    explanation: "Enjoy is followed by a gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_47",
    type: "complet",
    question: "She decided ___ to the concert. (infinitive)",
    correctAnswer: "to go",
    explanation: "Decide is followed by an infinitive.",
    level: "débutant",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_48",
    type: "complet",
    question: "I'm interested in ___ a new language. (gerund)",
    correctAnswer: "learning",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_49",
    type: "complet",
    question: "It's difficult ___ this concept. (infinitive)",
    correctAnswer: "to understand",
    explanation: "After adjectives, we use the infinitive.",
    level: "débutant",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_50",
    type: "complet",
    question: "He suggested ___ a taxi. (gerund)",
    correctAnswer: "taking",
    explanation: "Suggest is followed by a gerund.",
    level: "intermédiaire",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_51",
    type: "complet",
    question: "They agreed ___ the contract. (infinitive)",
    correctAnswer: "to sign",
    explanation: "Agree is followed by an infinitive.",
    level: "intermédiaire",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_52",
    type: "complet",
    question: "I miss ___ with my old friends. (gerund)",
    correctAnswer: "hanging out",
    explanation: "Miss is followed by a gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_53",
    type: "complet",
    question: "She promised ___ on time. (infinitive)",
    correctAnswer: "to arrive",
    explanation: "Promise is followed by an infinitive.",
    level: "intermédiaire",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_54",
    type: "complet",
    question: "He avoided ___ the meeting. (gerund)",
    correctAnswer: "attending",
    explanation: "Avoid is followed by a gerund.",
    level: "intermédiaire",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_55",
    type: "complet",
    question: "I hope ___ you again soon. (infinitive)",
    correctAnswer: "to see",
    explanation: "Hope is followed by an infinitive.",
    level: "débutant",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_56",
    type: "complet",
    question: "Before ___ to bed, brush your teeth. (gerund)",
    correctAnswer: "going",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_57",
    type: "complet",
    question: "It's nice ___ you here. (infinitive)",
    correctAnswer: "to see",
    explanation: "After adjectives, we use the infinitive.",
    level: "intermédiaire",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_58",
    type: "complet",
    question: "He started ___ English last year. (gerund or infinitive)",
    correctAnswer: "learning/to learn",
    explanation: "Start can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "both forms completion"
  },
  {
    id: "gerondif_complet_59",
    type: "complet",
    question: "I stopped ___ because I was tired. (gerund - stop doing something)",
    correctAnswer: "working",
    explanation: "Gerund means to stop the action.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_60",
    type: "complet",
    question: "I stopped ___ a break. (infinitive - stop to do something)",
    correctAnswer: "to take",
    explanation: "Infinitive means to stop in order to do something else.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_61",
    type: "complet",
    question: "She continued ___ despite the difficulties. (gerund or infinitive)",
    correctAnswer: "working/to work",
    explanation: "Continue can be followed by either gerund or infinitive with no change in meaning.",
    level: "intermédiaire",
    category: "both forms completion"
  },
  {
    id: "gerondif_complet_62",
    type: "complet",
    question: "I forgot ___ my keys at home. (gerund - forgot the past action)",
    correctAnswer: "leaving",
    explanation: "Gerund refers to forgetting that you did something in the past.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_63",
    type: "complet",
    question: "I forgot ___ my homework. (infinitive - forgot to do future action)",
    correctAnswer: "to do",
    explanation: "Infinitive refers to forgetting to do something in the future.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_64",
    type: "complet",
    question: "I'm good at ___ piano. (gerund)",
    correctAnswer: "playing",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_65",
    type: "complet",
    question: "He came here ___ help us. (infinitive - purpose)",
    correctAnswer: "to",
    explanation: "Infinitive is used to express purpose.",
    level: "débutant",
    category: "infinitive completion"
  },
  {
    id: "gerondif_complet_66",
    type: "complet",
    question: "I like ___ in the morning. (gerund or infinitive)",
    correctAnswer: "running/to run",
    explanation: "Like can be followed by either gerund or infinitive with no change in meaning.",
    level: "débutant",
    category: "both forms completion"
  },
  {
    id: "gerondif_complet_67",
    type: "complet",
    question: "She remembered ___ her appointment. (gerund - remembered the past action)",
    correctAnswer: "missing",
    explanation: "Gerund refers to remembering that you did something in the past.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_68",
    type: "complet",
    question: "She remembered ___ milk. (infinitive - remembered to do future action)",
    correctAnswer: "to buy",
    explanation: "Infinitive refers to remembering to do something in the future.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_69",
    type: "complet",
    question: "I regret ___ so much time on games. (gerund - regret past action)",
    correctAnswer: "spending",
    explanation: "Gerund refers to regretting that you did something in the past.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_70",
    type: "complet",
    question: "I regret ___ you that I can't come. (infinitive - regret to do future action)",
    correctAnswer: "to tell",
    explanation: "Infinitive refers to regretting having to do something unpleasant.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_71",
    type: "complet",
    question: "After ___ dinner, we watched TV. (gerund)",
    correctAnswer: "eating",
    explanation: "After prepositions, we use the gerund.",
    level: "débutant",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_72",
    type: "complet",
    question: "The teacher went on ___ about grammar. (gerund - continued same action)",
    correctAnswer: "talking",
    explanation: "Gerund means to continue doing the same thing.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_73",
    type: "complet",
    question: "The teacher went on ___ the next lesson. (infinitive - changed to different action)",
    correctAnswer: "to explain",
    explanation: "Infinitive means to change to a different action.",
    level: "avancé",
    category: "different meanings completion"
  },
  {
    id: "gerondif_complet_74",
    type: "complet",
    question: "I'm afraid of ___ heights. (gerund)",
    correctAnswer: "flying over",
    explanation: "After some adjectives followed by prepositions, we use the gerund.",
    level: "intermédiaire",
    category: "gerund completion"
  },
  {
    id: "gerondif_complet_75",
    type: "complet",
    question: "It's important ___ the instructions carefully. (infinitive)",
    correctAnswer: "to read",
    explanation: "After adjectives, we use the infinitive.",
    level: "intermédiaire",
    category: "infinitive completion"
  }
];

export const gerondifInfinitifCategories = [
  "gerund only verbs",
  "infinitive only verbs",
  "verbs with both forms",
  "verbs with different meanings",
  "after prepositions",
  "after adjectives",
  "expressing purpose",
  "mixed gerund/infinitive",
  "gerund completion",
  "infinitive completion",
  "both forms completion",
  "different meanings completion"
];

export const getGerondifInfinitifExercisesByType = (type: GerondifInfinitifExercise['type']) => {
  return gerondifInfinitifExercises.filter(exercise => exercise.type === type);
};

export const getGerondifInfinitifExercisesByCategory = (category: string) => {
  return gerondifInfinitifExercises.filter(exercise => exercise.category === category);
};

export const getGerondifInfinitifExercisesByLevel = (level: GerondifInfinitifExercise['level']) => {
  return gerondifInfinitifExercises.filter(exercise => exercise.level === level);
};
