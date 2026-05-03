export interface SerEstarExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const serEstarExercises: SerEstarExercise[] = [
  // QCM - Ser vs Estar (10 questions)
  {
    id: "ser_estar_qcm_1",
    type: "qcm",
    question: "Complétez : Mi hermana ___ médica.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser' est utilisé pour exprimer la profession ou l'identité permanente.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_2",
    type: "qcm",
    question: "Choisissez la forme correcte : La comida ___ fría.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar' est utilisé pour décrire un état temporaire comme la température.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_3",
    type: "qcm",
    question: "Complétez : Nosotros ___ de España.",
    options: ["a) somos", "b) estamos", "c) soy", "d) estoy"],
    correctAnswer: "a) somos",
    explanation: "'Ser' est utilisé pour exprimer l'origine géographique.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_4",
    type: "qcm",
    question: "Identifiez la forme correcte : El libro ___ en la mesa.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar' est utilisé pour indiquer la localisation ou position.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_5",
    type: "qcm",
    question: "Choisissez l'option correcte : Tú ___ muy inteligente.",
    options: ["a) eres", "b) estás", "c) es", "d) está"],
    correctAnswer: "a) eres",
    explanation: "'Ser' est utilisé pour décrire une caractéristique permanente de la personnalité.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_6",
    type: "qcm",
    question: "Complétez : Los niños ___ jugando en el parque.",
    options: ["a) son", "b) están", "c) es", "d) está"],
    correctAnswer: "b) están",
    explanation: "'Estar' + gérondif forme le présent progressif pour exprimer une action en cours.",
    level: "intermédiaire",
    category: "estar + gérondif"
  },
  {
    id: "ser_estar_qcm_7",
    type: "qcm",
    question: "Quelle est la forme correcte : La reunión ___ a las tres.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser' est utilisé pour exprimer l'heure des événements.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_8",
    type: "qcm",
    question: "Complétez : El café ___ muy caliente.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar' est utilisé pour décrire un état temporaire comme la température.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_9",
    type: "qcm",
    question: "Choisissez l'option correcte : Esa casa ___ de mi tío.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser' est utilisé pour exprimer la possession ou l'appartenance.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_10",
    type: "qcm",
    question: "Identifiez la forme correcte : Mis padres ___ preocupados.",
    options: ["a) son", "b) están", "c) es", "d) está"],
    correctAnswer: "b) están",
    explanation: "'Estar' est utilisé pour décrire un état émotionnel temporaire.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  // QCM - Constructions avancées (10 questions)
  {
    id: "ser_estar_qcm_11",
    type: "qcm",
    question: "Complétez : ___ posible que llueva mañana.",
    options: ["a) Es", "b) Está", "c) Son", "d) Están"],
    correctAnswer: "a) Es",
    explanation: "'Es posible que' est une expression figée avec 'ser'.",
    level: "avancé",
    category: "expressions figées"
  },
  {
    id: "ser_estar_qcm_12",
    type: "qcm",
    question: "Choisissez la forme correcte : Juan ___ para salir.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar para' exprime l'imminence d'une action.",
    level: "avancé",
    category: "constructions idiomatiques"
  },
  {
    id: "ser_estar_qcm_13",
    type: "qcm",
    question: "Complétez : El problema ___ de resolver.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser de + infinitif' exprime la possibilité ou facilité d'action.",
    level: "avancé",
    category: "constructions idiomatiques"
  },
  {
    id: "ser_estar_qcm_14",
    type: "qcm",
    question: "Identifiez l'option correcte : María ___ por llegar.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar por' exprime l'imminence ou l'intention d'une action.",
    level: "avancé",
    category: "constructions idiomatiques"
  },
  {
    id: "ser_estar_qcm_15",
    type: "qcm",
    question: "Complétez : ___ mejor que te quedes en casa.",
    options: ["a) Es", "b) Está", "c) Son", "d) Están"],
    correctAnswer: "a) Es",
    explanation: "'Es mejor que' est une expression d'opinion avec 'ser'.",
    level: "avancé",
    category: "expressions figées"
  },
  {
    id: "ser_estar_qcm_16",
    type: "qcm",
    question: "Choisissez la forme correcte : El trabajo ___ hecho.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar + participe passé' forme la voix passive de résultat.",
    level: "avancé",
    category: "voix passive"
  },
  {
    id: "ser_estar_qcm_17",
    type: "qcm",
    question: "Complétez : La carta ___ escrita por mi hermana.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser + participe passé + por' forme la voix passive d'action.",
    level: "avancé",
    category: "voix passive"
  },
  {
    id: "ser_estar_qcm_18",
    type: "qcm",
    question: "Identifiez l'option correcte : Todos ___ de acuerdo.",
    options: ["a) son", "b) están", "c) es", "d) está"],
    correctAnswer: "b) están",
    explanation: "'Estar de acuerdo' est une expression figée avec 'estar'.",
    level: "intermédiaire",
    category: "expressions figées"
  },
  {
    id: "ser_estar_qcm_19",
    type: "qcm",
    question: "Complétez : La película ___ muy aburrida.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "a) es",
    explanation: "'Ser' est utilisé pour décrire une caractéristique objective et permanente.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_qcm_20",
    type: "qcm",
    question: "Choisissez la forme correcte : Mi hijo ___ enfermo.",
    options: ["a) es", "b) está", "c) son", "d) están"],
    correctAnswer: "b) está",
    explanation: "'Estar' est utilisé pour décrire un état de santé temporaire.",
    level: "débutant",
    category: "ser vs estar"
  },

  // Mots à compléter - Ser vs Estar (20 questions)
  {
    id: "ser_estar_complet_1",
    type: "complet",
    question: "Mi madre ___ profesora. (profession)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour exprimer la profession.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_2",
    type: "complet",
    question: "Los libros ___ en la biblioteca. (localisation)",
    correctAnswer: "están",
    explanation: "'Estar' est utilisé pour indiquer la localisation.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_3",
    type: "complet",
    question: "Nosotros ___ contentos hoy. (état temporaire)",
    correctAnswer: "estamos",
    explanation: "'Estar' est utilisé pour décrire un état émotionnel temporaire.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_4",
    type: "complet",
    question: "El concierto ___ a las ocho. (heure)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour exprimer l'heure des événements.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_5",
    type: "complet",
    question: "Tú ___ muy amable. (caractéristique)",
    correctAnswer: "eres",
    explanation: "'Ser' est utilisé pour décrire une caractéristique de personnalité.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_6",
    type: "complet",
    question: "La sopa ___ caliente. (température)",
    correctAnswer: "está",
    explanation: "'Estar' est utilisé pour décrire la température d'un aliment.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_7",
    type: "complet",
    question: "Ellos ___ estudiando para el examen. (action en cours)",
    correctAnswer: "están",
    explanation: "'Estar + gérondif' forme le présent progressif.",
    level: "intermédiaire",
    category: "estar + gérondif"
  },
  {
    id: "ser_estar_complet_8",
    type: "complet",
    question: "Esta mesa ___ de madera. (matériau)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour indiquer le matériau de fabrication.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_9",
    type: "complet",
    question: "María ___ enferma desde ayer. (état de santé)",
    correctAnswer: "está",
    explanation: "'Estar' est utilisé pour décrire un état de santé temporaire.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_10",
    type: "complet",
    question: "La reunión ___ en la sala de conferencias. (lieu)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour indiquer le lieu où se déroule un événement.",
    level: "intermédiaire",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_11",
    type: "complet",
    question: "Los ejercicios ya ___ terminados. (résultat)",
    correctAnswer: "están",
    explanation: "'Estar + participe passé' exprime le résultat d'une action.",
    level: "avancé",
    category: "voix passive"
  },
  {
    id: "ser_estar_complet_12",
    type: "complet",
    question: "El coche ___ reparado por el mecánico. (action passive)",
    correctAnswer: "es",
    explanation: "'Ser + participe passé + por' forme la voix passive d'action.",
    level: "avancé",
    category: "voix passive"
  },
  {
    id: "ser_estar_complet_13",
    type: "complet",
    question: "Mi hermano ___ para médico. (destiné à être)",
    correctAnswer: "es",
    explanation: "'Ser para' exprime la vocation ou destination.",
    level: "avancé",
    category: "constructions idiomatiques"
  },
  {
    id: "ser_estar_complet_14",
    type: "complet",
    question: "Todos ___ de acuerdo con la propuesta. (opinion)",
    correctAnswer: "están",
    explanation: "'Estar de acuerdo' est une expression figée.",
    level: "intermédiaire",
    category: "expressions figées"
  },
  {
    id: "ser_estar_complet_15",
    type: "complet",
    question: "La decisión ___ tomada. (résultat accompli)",
    correctAnswer: "está",
    explanation: "'Estar + participe passé' exprime un état résultant d'une action.",
    level: "avancé",
    category: "voix passive"
  },
  {
    id: "ser_estar_complet_16",
    type: "complet",
    question: "Hoy ___ lunes. (date/jour)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour exprimer le jour de la semaine.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_17",
    type: "complet",
    question: "Mi padre ___ de mal humor. (état d'esprit)",
    correctAnswer: "está",
    explanation: "'Estar de + nom' exprime un état d'esprit temporaire.",
    level: "intermédiaire",
    category: "expressions figées"
  },
  {
    id: "ser_estar_complet_18",
    type: "complet",
    question: "Esta casa ___ muy cara. (prix)",
    correctAnswer: "es",
    explanation: "'Ser' est utilisé pour exprimer le prix ou coût.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_19",
    type: "complet",
    question: "Los estudiantes ___ nerviosos antes del examen. (état émotionnel)",
    correctAnswer: "están",
    explanation: "'Estar' est utilisé pour décrire un état émotionnel temporaire.",
    level: "débutant",
    category: "ser vs estar"
  },
  {
    id: "ser_estar_complet_20",
    type: "complet",
    question: "El problema ___ sin resolver. (état actuel)",
    correctAnswer: "está",
    explanation: "'Estar + sin + infinitif' exprime un état actuel.",
    level: "avancé",
    category: "constructions idiomatiques"
  }
];

export const serEstarExerciseCategories = [
  "ser vs estar",
  "estar + gérondif",
  "expressions figées",
  "constructions idiomatiques",
  "voix passive"
];

export const getSerEstarExercisesByType = (type: SerEstarExercise['type']) => {
  return serEstarExercises.filter(exercise => exercise.type === type);
};

export const getSerEstarExercisesByCategory = (category: string) => {
  return serEstarExercises.filter(exercise => exercise.category === category);
};

export const getSerEstarExercisesByLevel = (level: SerEstarExercise['level']) => {
  return serEstarExercises.filter(exercise => exercise.level === level);
};