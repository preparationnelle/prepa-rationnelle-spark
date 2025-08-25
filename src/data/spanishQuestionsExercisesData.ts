export interface QuestionsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const questionsExercises: QuestionsExercise[] = [
  // QCM - Mots interrogatifs (10 questions)
  {
    id: "questions_qcm_1",
    type: "qcm",
    question: "Complétez : ¿___ te llamas?",
    options: ["a) Cómo", "b) Cuándo", "c) Dónde", "d) Qué"],
    correctAnswer: "a) Cómo",
    explanation: "'Cómo' est utilisé pour demander le nom ou la manière.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_2",
    type: "qcm",
    question: "Choisissez la forme correcte : ¿___ años tienes?",
    options: ["a) Cuántos", "b) Cuántas", "c) Cuándo", "d) Cuál"],
    correctAnswer: "a) Cuántos",
    explanation: "'Cuántos' s'accorde avec le nom masculin pluriel 'años'.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_3",
    type: "qcm",
    question: "Complétez : ¿___ vives?",
    options: ["a) Dónde", "b) Cuándo", "c) Cómo", "d) Por qué"],
    correctAnswer: "a) Dónde",
    explanation: "'Dónde' est utilisé pour demander le lieu.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_4",
    type: "qcm",
    question: "Identifiez la forme correcte : ¿___ vas al cine?",
    options: ["a) Cuándo", "b) Dónde", "c) Cómo", "d) Qué"],
    correctAnswer: "a) Cuándo",
    explanation: "'Cuándo' est utilisé pour demander le moment ou le temps.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_5",
    type: "qcm",
    question: "Choisissez l'option correcte : ¿___ no vienes con nosotros?",
    options: ["a) Por qué", "b) Para qué", "c) Qué", "d) Cuál"],
    correctAnswer: "a) Por qué",
    explanation: "'Por qué' demande la cause ou la raison.",
    level: "intermédiaire",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_6",
    type: "qcm",
    question: "Complétez : ¿___ prefieres, té o café?",
    options: ["a) Qué", "b) Cuál", "c) Cómo", "d) Dónde"],
    correctAnswer: "a) Qué",
    explanation: "'Qué' est utilisé pour choisir entre des options générales.",
    level: "intermédiaire",
    category: "qué vs cuál"
  },
  {
    id: "questions_qcm_7",
    type: "qcm",
    question: "Quelle est la forme correcte : ¿___ de estos libros quieres?",
    options: ["a) Cuál", "b) Qué", "c) Cómo", "d) Cuánto"],
    correctAnswer: "a) Cuál",
    explanation: "'Cuál' est utilisé pour choisir parmi des options spécifiques.",
    level: "intermédiaire",
    category: "qué vs cuál"
  },
  {
    id: "questions_qcm_8",
    type: "qcm",
    question: "Complétez : ¿___ cuesta este libro?",
    options: ["a) Cuánto", "b) Cuántos", "c) Cuántas", "d) Qué"],
    correctAnswer: "a) Cuánto",
    explanation: "'Cuánto' demande le prix ou la quantité (singulier).",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_9",
    type: "qcm",
    question: "Choisissez l'option correcte : ¿___ estudias español?",
    options: ["a) Para qué", "b) Por qué", "c) Qué", "d) Cuál"],
    correctAnswer: "a) Para qué",
    explanation: "'Para qué' demande le but ou l'objectif.",
    level: "intermédiaire",
    category: "por qué vs para qué"
  },
  {
    id: "questions_qcm_10",
    type: "qcm",
    question: "Identifiez la forme correcte : ¿___ es tu profesor?",
    options: ["a) Quién", "b) Qué", "c) Cuál", "d) Cómo"],
    correctAnswer: "a) Quién",
    explanation: "'Quién' est utilisé pour demander l'identité d'une personne.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  // QCM - Questions indirectes et intonation (10 questions)
  {
    id: "questions_qcm_11",
    type: "qcm",
    question: "Transformez en question indirecte : ¿Dónde vives? → Me pregunta ___",
    options: ["a) dónde vives", "b) dónde vivo", "c) donde vives", "d) donde vivo"],
    correctAnswer: "a) dónde vives",
    explanation: "Dans les questions indirectes, on garde l'accent sur le mot interrogatif et la personne originale.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_qcm_12",
    type: "qcm",
    question: "Choisissez la forme correcte pour une question fermée : ___ estudias español?",
    options: ["a) ¿", "b) ¿Por qué", "c) ¿Cómo", "d) ¿Cuándo"],
    correctAnswer: "a) ¿",
    explanation: "Les questions fermées (oui/non) se forment simplement avec l'intonation.",
    level: "débutant",
    category: "types de questions"
  },
  {
    id: "questions_qcm_13",
    type: "qcm",
    question: "Complétez : No sé ___ hora es.",
    options: ["a) qué", "b) que", "c) cuál", "d) cual"],
    correctAnswer: "a) qué",
    explanation: "Dans les questions indirectes, on garde l'accent sur les mots interrogatifs.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_qcm_14",
    type: "qcm",
    question: "Identifiez l'option correcte : ¿Verdad ___ vienes mañana?",
    options: ["a) que", "b) qué", "c) si", "d) de que"],
    correctAnswer: "a) que",
    explanation: "'¿Verdad que...?' est une tournure pour demander confirmation.",
    level: "intermédiaire",
    category: "questions de confirmation"
  },
  {
    id: "questions_qcm_15",
    type: "qcm",
    question: "Complétez : ___ vienes, ¿no?",
    options: ["a) Sí", "b) Si", "c) ¿Si", "d) ¿Sí"],
    correctAnswer: "a) Sí",
    explanation: "'Sí vienes, ¿no?' est une question avec confirmation attendue.",
    level: "intermédiaire",
    category: "questions de confirmation"
  },
  {
    id: "questions_qcm_16",
    type: "qcm",
    question: "Choisissez la forme correcte : Me pregunto ___ estará en casa.",
    options: ["a) si", "b) sí", "c) que", "d) qué"],
    correctAnswer: "a) si",
    explanation: "'Si' (sans accent) introduit une question indirecte fermée.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_qcm_17",
    type: "qcm",
    question: "Complétez : ¿A ___ le diste el libro?",
    options: ["a) quién", "b) quien", "c) qué", "d) que"],
    correctAnswer: "a) quién",
    explanation: "'A quién' (avec accent) demande le destinataire d'une action.",
    level: "intermédiaire",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_18",
    type: "qcm",
    question: "Identifiez l'option correcte : ¿___ cuántos años tienes?",
    options: ["a) Desde", "b) Hasta", "c) Con", "d) De"],
    correctAnswer: "a) Desde",
    explanation: "'Desde cuántos años' demande l'âge depuis lequel quelque chose se passe.",
    level: "avancé",
    category: "questions complexes"
  },
  {
    id: "questions_qcm_19",
    type: "qcm",
    question: "Complétez : ¿En ___ trabajas?",
    options: ["a) qué", "b) que", "c) cuál", "d) cual"],
    correctAnswer: "a) qué",
    explanation: "'¿En qué trabajas?' demande la profession ou le domaine de travail.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_qcm_20",
    type: "qcm",
    question: "Choisissez la forme correcte : ¿___ tal estás?",
    options: ["a) Qué", "b) Que", "c) Cómo", "d) Como"],
    correctAnswer: "a) Qué",
    explanation: "'¿Qué tal?' est une expression figée pour demander des nouvelles.",
    level: "débutant",
    category: "expressions interrogatives"
  },

  // Mots à compléter - Questions et interrogatifs (20 questions)
  {
    id: "questions_complet_1",
    type: "complet",
    question: "¿___ te llamas? (nom)",
    correctAnswer: "Cómo",
    explanation: "'¿Cómo te llamas?' demande le nom d'une personne.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_2",
    type: "complet",
    question: "¿___ años tienes? (âge)",
    correctAnswer: "Cuántos",
    explanation: "'¿Cuántos años?' demande l'âge (masculin pluriel).",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_3",
    type: "complet",
    question: "¿___ vives? (lieu)",
    correctAnswer: "Dónde",
    explanation: "'¿Dónde?' demande le lieu de résidence.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_4",
    type: "complet",
    question: "¿___ vas al trabajo? (moment)",
    correctAnswer: "Cuándo",
    explanation: "'¿Cuándo?' demande le moment d'une action.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_5",
    type: "complet",
    question: "¿___ qué no vienes? (cause)",
    correctAnswer: "Por",
    explanation: "'¿Por qué?' demande la cause ou la raison.",
    level: "intermédiaire",
    category: "por qué vs para qué"
  },
  {
    id: "questions_complet_6",
    type: "complet",
    question: "¿___ qué estudias español? (but)",
    correctAnswer: "Para",
    explanation: "'¿Para qué?' demande le but ou l'objectif.",
    level: "intermédiaire",
    category: "por qué vs para qué"
  },
  {
    id: "questions_complet_7",
    type: "complet",
    question: "¿___ prefieres, el rojo o el azul? (choix général)",
    correctAnswer: "Qué",
    explanation: "'¿Qué?' pour choisir entre options générales.",
    level: "intermédiaire",
    category: "qué vs cuál"
  },
  {
    id: "questions_complet_8",
    type: "complet",
    question: "¿___ de estos prefieres? (choix spécifique)",
    correctAnswer: "Cuál",
    explanation: "'¿Cuál?' pour choisir parmi des options spécifiques.",
    level: "intermédiaire",
    category: "qué vs cuál"
  },
  {
    id: "questions_complet_9",
    type: "complet",
    question: "¿___ es tu hermana? (identité)",
    correctAnswer: "Quién",
    explanation: "'¿Quién?' demande l'identité d'une personne.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_10",
    type: "complet",
    question: "¿___ cuesta esta camisa? (prix)",
    correctAnswer: "Cuánto",
    explanation: "'¿Cuánto?' demande le prix ou la quantité.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_11",
    type: "complet",
    question: "No sé ___ vive María. (question indirecte lieu)",
    correctAnswer: "dónde",
    explanation: "Dans les questions indirectes, on garde l'accent sur les mots interrogatifs.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_complet_12",
    type: "complet",
    question: "Me pregunta ___ me llamo. (question indirecte nom)",
    correctAnswer: "cómo",
    explanation: "Questions indirectes : on garde l'accent et adapte la personne.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_complet_13",
    type: "complet",
    question: "¿Verdad ___ vienes mañana? (confirmation)",
    correctAnswer: "que",
    explanation: "'¿Verdad que...?' demande une confirmation.",
    level: "intermédiaire",
    category: "questions de confirmation"
  },
  {
    id: "questions_complet_14",
    type: "complet",
    question: "¿A ___ le diste el regalo? (destinataire)",
    correctAnswer: "quién",
    explanation: "'¿A quién?' demande le destinataire d'une action.",
    level: "intermédiaire",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_15",
    type: "complet",
    question: "Me pregunto ___ vendrá a la fiesta. (question indirecte fermée)",
    correctAnswer: "si",
    explanation: "'Si' (sans accent) introduit une question indirecte fermée.",
    level: "avancé",
    category: "questions indirectes"
  },
  {
    id: "questions_complet_16",
    type: "complet",
    question: "¿___ tal estás? (expression figée)",
    correctAnswer: "Qué",
    explanation: "'¿Qué tal?' est une expression figée pour prendre des nouvelles.",
    level: "débutant",
    category: "expressions interrogatives"
  },
  {
    id: "questions_complet_17",
    type: "complet",
    question: "¿En ___ trabajas? (profession)",
    correctAnswer: "qué",
    explanation: "'¿En qué trabajas?' demande la profession.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_18",
    type: "complet",
    question: "¿De ___ es este libro? (possession)",
    correctAnswer: "quién",
    explanation: "'¿De quién?' demande la possession.",
    level: "intermédiaire",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_19",
    type: "complet",
    question: "¿Con ___ vas al cine? (compagnie)",
    correctAnswer: "quién",
    explanation: "'¿Con quién?' demande la compagnie.",
    level: "débutant",
    category: "mots interrogatifs"
  },
  {
    id: "questions_complet_20",
    type: "complet",
    question: "¿___ hermanos tienes? (quantité)",
    correctAnswer: "Cuántos",
    explanation: "'¿Cuántos?' demande la quantité (masculin pluriel).",
    level: "débutant",
    category: "mots interrogatifs"
  }
];

export const questionsExerciseCategories = [
  "mots interrogatifs",
  "qué vs cuál",
  "por qué vs para qué",
  "questions indirectes",
  "questions de confirmation",
  "types de questions",
  "questions complexes",
  "expressions interrogatives"
];

export const getQuestionsExercisesByType = (type: QuestionsExercise['type']) => {
  return questionsExercises.filter(exercise => exercise.type === type);
};

export const getQuestionsExercisesByCategory = (category: string) => {
  return questionsExercises.filter(exercise => exercise.category === category);
};

export const getQuestionsExercisesByLevel = (level: QuestionsExercise['level']) => {
  return questionsExercises.filter(exercise => exercise.level === level);
};