export interface ReportedSpeechExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export const reportedSpeechExercises: ReportedSpeechExercise[] = [
  // QCM - Basic statements transformation (10 questions)
  {
    id: "reported_qcm_1",
    type: "qcm",
    question: "Transform to reported speech: She said, \"I love chocolate.\"",
    options: ["a) She said that she loved chocolate.", "b) She said that I love chocolate.", "c) She said that she loves chocolate.", "d) She said that she loved chocolates."],
    correctAnswer: "a) She said that she loved chocolate.",
    explanation: "In reported speech: change pronouns (I → she), remove quotes, add 'that', change present to past simple.",
    level: "beginner",
    category: "statements"
  },
  {
    id: "reported_qcm_2",
    type: "qcm",
    question: "Choose the correct reported speech: He told me, \"I'm going to the cinema.\"",
    options: ["a) He told me that he was going to the cinema.", "b) He told me that I was going to the cinema.", "c) He told me that he is going to the cinema.", "d) He told me that he goes to the cinema."],
    correctAnswer: "a) He told me that he was going to the cinema.",
    explanation: "Present continuous becomes past continuous, pronouns change: I → he.",
    level: "beginner",
    category: "statements"
  },
  {
    id: "reported_qcm_3",
    type: "qcm",
    question: "Transform: \"We will help you,\" they said.",
    options: ["a) They said that they would help me.", "b) They said that we will help you.", "c) They said that they will help me.", "d) They said that we would help you."],
    correctAnswer: "a) They said that they would help me.",
    explanation: "Will → would, pronouns: We → they, you → me.",
    level: "intermediate",
    category: "statements"
  },
  {
    id: "reported_qcm_4",
    type: "qcm",
    question: "Choose the correct transformation: She asked, \"Do you like coffee?\"",
    options: ["a) She asked if I liked coffee.", "b) She asked if you like coffee.", "c) She asked if she liked coffee.", "d) She asked if I like coffee."],
    correctAnswer: "a) She asked if I liked coffee.",
    explanation: "Questions: change to if/whether, do/does → liked (past), you → I.",
    level: "beginner",
    category: "questions"
  },
  {
    id: "reported_qcm_5",
    type: "qcm",
    question: "Transform to reported speech: \"Don't touch that!\" he shouted.",
    options: ["a) He shouted not to touch that.", "b) He shouted don't touch that.", "c) He shouted to not touch that.", "d) He shouted that don't touch that."],
    correctAnswer: "a) He shouted not to touch that.",
    explanation: "Imperative: use infinitive (not + to + infinitive), remove exclamation.",
    level: "intermediate",
    category: "imperatives"
  },

  // Time changes (5 questions)
  {
    id: "reported_qcm_6",
    type: "qcm",
    question: "Change: He said, \"I saw her yesterday.\"",
    options: ["a) He said that he had seen her the day before.", "b) He said that he saw her yesterday.", "c) He said that I had seen her yesterday.", "d) He said that he had seen her yesterday."],
    correctAnswer: "d) He said that he had seen her yesterday.",
    explanation: "Past simple remains past simple when reporting past actions. Yesterday stays the same.",
    level: "intermediate",
    category: "time expressions"
  },
  {
    id: "reported_qcm_7",
    type: "qcm",
    question: "Transform: \"I'll call you tomorrow,\" she promised.",
    options: ["a) She promised that she would call me the next day.", "b) She promised that she will call me tomorrow.", "c) She promised that I would call her tomorrow.", "d) She promised that she would call you tomorrow."],
    correctAnswer: "a) She promised that she would call me the next day.",
    explanation: "Will → would, tomorrow → the next day, you → me.",
    level: "intermediate",
    category: "time expressions"
  },
  {
    id: "reported_qcm_8",
    type: "qcm",
    question: "Choose the correct reported speech: They said, \"We have lived here for 5 years.\"",
    options: ["a) They said that they had lived there for 5 years.", "b) They said that we have lived here for 5 years.", "c) They said that they have lived there for 5 years.", "d) They said that they lived there for 5 years."],
    correctAnswer: "a) They said that they had lived there for 5 years.",
    explanation: "Present perfect becomes past perfect: have lived → had lived.",
    level: "advanced",
    category: "perfect tenses"
  },

  // Questions transformation (5 questions)
  {
    id: "reported_qcm_9",
    type: "qcm",
    question: "Transform: \"Where do you live?\" she asked me.",
    options: ["a) She asked me where I lived.", "b) She asked me where do I live.", "c) She asked me where I live.", "d) She asked me where did I live."],
    correctAnswer: "a) She asked me where I lived.",
    explanation: "Wh-questions: keep question word, change word order, do → lived, you → I.",
    level: "intermediate",
    category: "questions"
  },
  {
    id: "reported_qcm_10",
    type: "qcm",
    question: "Choose the correct transformation: \"Are you coming?\" he wanted to know.",
    options: ["a) He wanted to know if I was coming.", "b) He wanted to know if you are coming.", "c) He wanted to know if I am coming.", "d) He wanted to know if was I coming."],
    correctAnswer: "a) He wanted to know if I was coming.",
    explanation: "Yes/no questions: change to if/whether, are → was, you → I.",
    level: "intermediate",
    category: "questions"
  },

  // Complete the sentence exercises (15 questions)
  {
    id: "reported_complete_1",
    type: "complet",
    question: "Complete: He said that he ___ (be) tired.",
    correctAnswer: "was",
    explanation: "Present simple in direct speech becomes past simple in reported speech.",
    level: "beginner",
    category: "statements"
  },
  {
    id: "reported_complete_2",
    type: "complet",
    question: "Complete: She told me that she ___ (live) in London.",
    correctAnswer: "lived",
    explanation: "Present simple → past simple.",
    level: "beginner",
    category: "statements"
  },
  {
    id: "reported_complete_3",
    type: "complet",
    question: "Complete: They said that they ___ (go) to the party.",
    correctAnswer: "were going",
    explanation: "Present continuous → past continuous.",
    level: "intermediate",
    category: "statements"
  },
  {
    id: "reported_complete_4",
    type: "complet",
    question: "Complete: He asked me where I ___ (live).",
    correctAnswer: "lived",
    explanation: "Present simple in questions becomes past simple.",
    level: "intermediate",
    category: "questions"
  },
  {
    id: "reported_complete_5",
    type: "complet",
    question: "Complete: She said that she ___ (see) the movie the day before.",
    correctAnswer: "had seen",
    explanation: "Past perfect remains past perfect (already in past).",
    level: "advanced",
    category: "perfect tenses"
  },
  {
    id: "reported_complete_6",
    type: "complet",
    question: "Complete: \"Don't be late!\" he ___ (tell) me.",
    correctAnswer: "told",
    explanation: "Imperative: use reporting verb + object + not + to + infinitive.",
    level: "intermediate",
    category: "imperatives"
  },
  {
    id: "reported_complete_7",
    type: "complet",
    question: "Complete: They promised that they ___ (help) us.",
    correctAnswer: "would help",
    explanation: "Will → would for future actions.",
    level: "intermediate",
    category: "statements"
  },
  {
    id: "reported_complete_8",
    type: "complet",
    question: "Complete: She asked if I ___ (like) chocolate.",
    correctAnswer: "liked",
    explanation: "Present simple in questions → past simple.",
    level: "beginner",
    category: "questions"
  },
  {
    id: "reported_complete_9",
    type: "complet",
    question: "Complete: He said that he ___ (work) there for 3 years.",
    correctAnswer: "had worked",
    explanation: "Present perfect → past perfect.",
    level: "intermediate",
    category: "perfect tenses"
  },
  {
    id: "reported_complete_10",
    type: "complet",
    question: "Complete: \"Come here!\" she ___ (say) to me.",
    correctAnswer: "said",
    explanation: "Imperative: use to + infinitive.",
    level: "intermediate",
    category: "imperatives"
  },
  {
    id: "reported_complete_11",
    type: "complet",
    question: "Complete: They told us that they ___ (arrive) the next day.",
    correctAnswer: "would arrive",
    explanation: "Would + infinitive for future plans.",
    level: "intermediate",
    category: "statements"
  },
  {
    id: "reported_complete_12",
    type: "complet",
    question: "Complete: She asked me what I ___ (do) at the weekend.",
    correctAnswer: "would do",
    explanation: "Future plans: will → would.",
    level: "advanced",
    category: "questions"
  },
  {
    id: "reported_complete_13",
    type: "complet",
    question: "Complete: He explained that he ___ (not understand) the problem.",
    correctAnswer: "didn't understand",
    explanation: "Past simple negative remains the same.",
    level: "intermediate",
    category: "statements"
  },
  {
    id: "reported_complete_14",
    type: "complet",
    question: "Complete: \"Don't worry,\" he ___ (tell) me.",
    correctAnswer: "told",
    explanation: "Negative imperative: not + to + infinitive.",
    level: "intermediate",
    category: "imperatives"
  },
  {
    id: "reported_complete_15",
    type: "complet",
    question: "Complete: She asked whether I ___ (can) help her.",
    correctAnswer: "could",
    explanation: "Can → could for ability in the past.",
    level: "intermediate",
    category: "modals"
  },

  // Choice exercises (5 questions)
  {
    id: "reported_choice_1",
    type: "choix",
    question: "Choose the correct reported speech: \"I'm happy,\" she said.",
    options: ["a) She said that she was happy.", "b) She said that I am happy.", "c) She said that she is happy.", "d) She said that I was happy."],
    correctAnswer: "a) She said that she was happy.",
    explanation: "Present simple → past simple, I → she.",
    level: "beginner",
    category: "statements"
  },
  {
    id: "reported_choice_2",
    type: "choix",
    question: "Choose the correct transformation: \"Where were you?\" he asked.",
    options: ["a) He asked where I was.", "b) He asked where I were.", "c) He asked where was I.", "d) He asked where I am."],
    correctAnswer: "a) He asked where I was.",
    explanation: "Wh-question: keep word order, were → was, you → I.",
    level: "intermediate",
    category: "questions"
  },
  {
    id: "reported_choice_3",
    type: "choix",
    question: "Choose the correct reported speech: \"Don't go!\" she shouted.",
    options: ["a) She shouted not to go.", "b) She shouted don't go.", "c) She shouted to not go.", "d) She shouted that don't go."],
    correctAnswer: "a) She shouted not to go.",
    explanation: "Imperative: not + to + infinitive.",
    level: "intermediate",
    category: "imperatives"
  },
  {
    id: "reported_choice_4",
    type: "choix",
    question: "Choose the correct transformation: \"I have finished,\" he told me.",
    options: ["a) He told me that he had finished.", "b) He told me that I have finished.", "c) He told me that he has finished.", "d) He told me that he finished."],
    correctAnswer: "a) He told me that he had finished.",
    explanation: "Present perfect → past perfect.",
    level: "intermediate",
    category: "perfect tenses"
  },
  {
    id: "reported_choice_5",
    type: "choix",
    question: "Choose the correct reported speech: \"Will you help me?\" she asked.",
    options: ["a) She asked if I would help her.", "b) She asked if I will help her.", "c) She asked if you would help me.", "d) She asked if you will help me."],
    correctAnswer: "a) She asked if I would help her.",
    explanation: "Will → would, you → I, me → her.",
    level: "intermediate",
    category: "questions"
  },

  // Advanced exercises with complex structures
  {
    id: "reported_qcm_11",
    type: "qcm",
    question: "Transform: \"I won't do it,\" he refused.",
    options: ["a) He refused that he wouldn't do it.", "b) He refused to do it.", "c) He refused that he won't do it.", "d) He refused doing it."],
    correctAnswer: "b) He refused to do it.",
    explanation: "With verbs like refuse, promise, agree: use to + infinitive.",
    level: "advanced",
    category: "verbs of intention"
  },
  {
    id: "reported_qcm_12",
    type: "qcm",
    question: "Choose the correct transformation: \"You should study harder,\" the teacher advised.",
    options: ["a) The teacher advised that I should study harder.", "b) The teacher advised me to study harder.", "c) The teacher advised me studying harder.", "d) The teacher advised that you should study harder."],
    correctAnswer: "b) The teacher advised me to study harder.",
    explanation: "Advice: use to + infinitive instead of should.",
    level: "advanced",
    category: "advice and suggestions"
  },
  {
    id: "reported_qcm_13",
    type: "qcm",
    question: "Transform: \"Let's go to the cinema,\" he suggested.",
    options: ["a) He suggested to go to the cinema.", "b) He suggested going to the cinema.", "c) He suggested that we go to the cinema.", "d) He suggested that we went to the cinema."],
    correctAnswer: "b) He suggested going to the cinema.",
    explanation: "Suggestions: use gerund (-ing form) after suggest.",
    level: "advanced",
    category: "suggestions"
  },
  {
    id: "reported_qcm_14",
    type: "qcm",
    question: "Choose the correct reported speech: \"I'm sorry I broke it,\" he apologized.",
    options: ["a) He apologized for breaking it.", "b) He apologized that he broke it.", "c) He apologized breaking it.", "d) He apologized to break it."],
    correctAnswer: "a) He apologized for breaking it.",
    explanation: "Apologies: use for + gerund.",
    level: "advanced",
    category: "apologies"
  },
  {
    id: "reported_qcm_15",
    type: "qcm",
    question: "Transform: \"What time is it?\" she wondered.",
    options: ["a) She wondered what time it was.", "b) She wondered what time it is.", "c) She wondered what time is it.", "d) She wondered what the time was."],
    correctAnswer: "a) She wondered what time it was.",
    explanation: "Present simple question → past simple in reported speech.",
    level: "intermediate",
    category: "questions"
  }
];

export const getReportedSpeechExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  return reportedSpeechExercises.filter(exercise => exercise.type === type);
};

export const reportedSpeechExerciseCategories = [
  'toutes',
  'statements',
  'questions',
  'imperatives',
  'time expressions',
  'perfect tenses',
  'modals',
  'verbs of intention',
  'advice and suggestions',
  'suggestions',
  'apologies'
];
