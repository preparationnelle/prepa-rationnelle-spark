export interface PrepositionsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const prepositionsExercises: PrepositionsExercise[] = [
  // QCM - Prépositions simples (10 questions)
  {
    id: "prep_qcm_1",
    type: "qcm",
    question: "Complétez : Voy ___ Madrid mañana.",
    options: ["a) a", "b) en", "c) por", "d) para"],
    correctAnswer: "a) a",
    explanation: "La préposition 'a' est utilisée pour indiquer la destination d'un mouvement.",
    level: "débutant",
    category: "prépositions de lieu"
  },
  {
    id: "prep_qcm_2",
    type: "qcm",
    question: "Choisissez la forme correcte : Este regalo es ___ ti.",
    options: ["a) por", "b) para", "c) de", "d) con"],
    correctAnswer: "b) para",
    explanation: "'Para' est utilisé pour indiquer le destinataire d'un objet.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_qcm_3",
    type: "qcm",
    question: "Complétez : Hablo ___ teléfono con mi madre.",
    options: ["a) en", "b) por", "c) para", "d) de"],
    correctAnswer: "b) por",
    explanation: "'Por' est utilisé pour indiquer le moyen de communication.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_qcm_4",
    type: "qcm",
    question: "Identifiez la forme correcte : El libro está ___ la mesa.",
    options: ["a) en", "b) sobre", "c) bajo", "d) entre"],
    correctAnswer: "b) sobre",
    explanation: "'Sobre' indique une position au-dessus d'une surface.",
    level: "débutant",
    category: "prépositions de lieu"
  },
  {
    id: "prep_qcm_5",
    type: "qcm",
    question: "Choisissez l'option correcte : Trabajo ___ las nueve ___ las cinco.",
    options: ["a) de... a", "b) desde... hasta", "c) por... para", "d) entre... y"],
    correctAnswer: "b) desde... hasta",
    explanation: "'Desde... hasta' exprime une durée avec un point de départ et d'arrivée précis.",
    level: "intermédiaire",
    category: "prépositions de temps"
  },
  {
    id: "prep_qcm_6",
    type: "qcm",
    question: "Complétez : Camino ___ el parque todas las mañanas.",
    options: ["a) por", "b) para", "c) en", "d) a"],
    correctAnswer: "a) por",
    explanation: "'Por' indique le lieu de passage ou de circulation.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_qcm_7",
    type: "qcm",
    question: "Quelle est la forme correcte : Estudio ___ ser médico.",
    options: ["a) por", "b) para", "c) de", "d) con"],
    correctAnswer: "b) para",
    explanation: "'Para + infinitif' exprime le but ou l'objectif.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_qcm_8",
    type: "qcm",
    question: "Complétez : La carta fue escrita ___ mi hermana.",
    options: ["a) por", "b) para", "c) de", "d) con"],
    correctAnswer: "a) por",
    explanation: "'Por' est utilisé dans la voix passive pour indiquer l'agent.",
    level: "avancé",
    category: "por vs para"
  },
  {
    id: "prep_qcm_9",
    type: "qcm",
    question: "Choisissez l'option correcte : Viajo ___ avión a Barcelona.",
    options: ["a) por", "b) en", "c) con", "d) para"],
    correctAnswer: "b) en",
    explanation: "'En' est utilisé pour indiquer le moyen de transport.",
    level: "débutant",
    category: "prépositions de moyen"
  },
  {
    id: "prep_qcm_10",
    type: "qcm",
    question: "Identifiez la forme correcte : Vive ___ sus padres.",
    options: ["a) por", "b) para", "c) con", "d) en"],
    correctAnswer: "c) con",
    explanation: "'Con' indique l'accompagnement ou la compagnie.",
    level: "débutant",
    category: "prépositions de manière"
  },
  // QCM - Locutions prépositionnelles (10 questions)
  {
    id: "prep_qcm_11",
    type: "qcm",
    question: "Complétez : ___ de estudiar, salió con sus amigos.",
    options: ["a) Después", "b) Antes", "c) Durante", "d) Mientras"],
    correctAnswer: "a) Después",
    explanation: "'Después de + infinitif' indique une action postérieure.",
    level: "intermédiaire",
    category: "locutions temporelles"
  },
  {
    id: "prep_qcm_12",
    type: "qcm",
    question: "Choisissez la forme correcte : Está sentado ___ de mí.",
    options: ["a) delante", "b) detrás", "c) al lado", "d) enfrente"],
    correctAnswer: "a) delante",
    explanation: "'Delante de' indique une position antérieure dans l'espace.",
    level: "débutant",
    category: "locutions de lieu"
  },
  {
    id: "prep_qcm_13",
    type: "qcm",
    question: "Complétez : ___ la lluvia, fuimos al parque.",
    options: ["a) A pesar de", "b) Debido a", "c) Gracias a", "d) A causa de"],
    correctAnswer: "a) A pesar de",
    explanation: "'A pesar de' exprime l'opposition ou la concession.",
    level: "avancé",
    category: "locutions de cause"
  },
  {
    id: "prep_qcm_14",
    type: "qcm",
    question: "Identifiez l'option correcte : Lo hice ___ ayudarte.",
    options: ["a) a fin de", "b) a causa de", "c) a pesar de", "d) además de"],
    correctAnswer: "a) a fin de",
    explanation: "'A fin de + infinitif' exprime le but ou l'objectif.",
    level: "avancé",
    category: "locutions de but"
  },
  {
    id: "prep_qcm_15",
    type: "qcm",
    question: "Complétez : ___ trabajar, también estudia.",
    options: ["a) Además de", "b) En lugar de", "c) A pesar de", "d) Debido a"],
    correctAnswer: "a) Además de",
    explanation: "'Además de' indique l'addition ou l'accumulation d'actions.",
    level: "intermédiaire",
    category: "locutions d'addition"
  },
  {
    id: "prep_qcm_16",
    type: "qcm",
    question: "Choisissez la forme correcte : ___ lluvia, el partido se canceló.",
    options: ["a) A causa de la", "b) A pesar de la", "c) Además de la", "d) En lugar de la"],
    correctAnswer: "a) A causa de la",
    explanation: "'A causa de' exprime la cause directe d'un événement.",
    level: "intermédiaire",
    category: "locutions de cause"
  },
  {
    id: "prep_qcm_17",
    type: "qcm",
    question: "Complétez : Está ___ la biblioteca y el museo.",
    options: ["a) entre", "b) dentro de", "c) fuera de", "d) encima de"],
    correctAnswer: "a) entre",
    explanation: "'Entre' indique une position intermédiaire entre deux éléments.",
    level: "débutant",
    category: "prépositions de lieu"
  },
  {
    id: "prep_qcm_18",
    type: "qcm",
    question: "Identifiez l'option correcte : ___ ir al cine, prefiero quedarme en casa.",
    options: ["a) En lugar de", "b) A fin de", "c) A causa de", "d) Además de"],
    correctAnswer: "a) En lugar de",
    explanation: "'En lugar de + infinitif' exprime l'alternative ou le remplacement.",
    level: "avancé",
    category: "locutions d'alternative"
  },
  {
    id: "prep_qcm_19",
    type: "qcm",
    question: "Complétez : Llegamos tarde ___ el tráfico.",
    options: ["a) debido a", "b) a pesar de", "c) además de", "d) en lugar de"],
    correctAnswer: "a) debido a",
    explanation: "'Debido a' exprime la cause ou la raison d'un événement.",
    level: "intermédiaire",
    category: "locutions de cause"
  },
  {
    id: "prep_qcm_20",
    type: "qcm",
    question: "Choisissez la forme correcte : El gato está ___ la cama.",
    options: ["a) debajo de", "b) encima de", "c) dentro de", "d) fuera de"],
    correctAnswer: "a) debajo de",
    explanation: "'Debajo de' indique une position inférieure dans l'espace.",
    level: "débutant",
    category: "locutions de lieu"
  },

  // Mots à compléter - Prépositions et locutions (20 questions)
  {
    id: "prep_complet_1",
    type: "complet",
    question: "Voy ___ la escuela todos los días. (direction)",
    correctAnswer: "a",
    explanation: "'A' est utilisé pour indiquer la direction ou destination.",
    level: "débutant",
    category: "prépositions de lieu"
  },
  {
    id: "prep_complet_2",
    type: "complet",
    question: "El regalo es ___ mi hermana. (destinataire)",
    correctAnswer: "para",
    explanation: "'Para' indique le destinataire d'un objet ou action.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_complet_3",
    type: "complet",
    question: "Camino ___ la calle principal. (lieu de passage)",
    correctAnswer: "por",
    explanation: "'Por' indique le lieu de passage ou circulation.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_complet_4",
    type: "complet",
    question: "Vivo ___ Madrid desde hace cinco años. (localisation)",
    correctAnswer: "en",
    explanation: "'En' est utilisé pour indiquer la localisation dans une ville.",
    level: "débutant",
    category: "prépositions de lieu"
  },
  {
    id: "prep_complet_5",
    type: "complet",
    question: "Trabajo ___ ocho ___ cinco. (horaire)",
    correctAnswer: "de",
    explanation: "'De... a' exprime un horaire ou une durée temporelle.",
    level: "débutant",
    category: "prépositions de temps"
  },
  {
    id: "prep_complet_6",
    type: "complet",
    question: "El libro está ___ de la mesa. (position supérieure)",
    correctAnswer: "encima",
    explanation: "'Encima de' indique une position au-dessus d'un objet.",
    level: "débutant",
    category: "locutions de lieu"
  },
  {
    id: "prep_complet_7",
    type: "complet",
    question: "A pesar ___ la lluvia, salimos. (opposition)",
    correctAnswer: "de",
    explanation: "'A pesar de' est une locution de concession qui se construit avec 'de'.",
    level: "avancé",
    category: "locutions de cause"
  },
  {
    id: "prep_complet_8",
    type: "complet",
    question: "Viajo ___ tren a Barcelona. (moyen de transport)",
    correctAnswer: "en",
    explanation: "'En' est utilisé pour indiquer le moyen de transport.",
    level: "débutant",
    category: "prépositions de moyen"
  },
  {
    id: "prep_complet_9",
    type: "complet",
    question: "Estudio ___ ser ingeniero. (but)",
    correctAnswer: "para",
    explanation: "'Para + infinitif' exprime le but ou l'objectif.",
    level: "intermédiaire",
    category: "por vs para"
  },
  {
    id: "prep_complet_10",
    type: "complet",
    question: "La casa fue construida ___ mi abuelo. (agent)",
    correctAnswer: "por",
    explanation: "'Por' indique l'agent dans la voix passive.",
    level: "avancé",
    category: "por vs para"
  },
  {
    id: "prep_complet_11",
    type: "complet",
    question: "Después ___ cenar, vemos televisión. (séquence temporelle)",
    correctAnswer: "de",
    explanation: "'Después de + infinitif' indique une action postérieure.",
    level: "intermédiaire",
    category: "locutions temporelles"
  },
  {
    id: "prep_complet_12",
    type: "complet",
    question: "Está sentado al ___ de su amigo. (position latérale)",
    correctAnswer: "lado",
    explanation: "'Al lado de' indique une position adjacente.",
    level: "débutant",
    category: "locutions de lieu"
  },
  {
    id: "prep_complet_13",
    type: "complet",
    question: "Debido ___ tráfico, llegué tarde. (cause)",
    correctAnswer: "al",
    explanation: "'Debido a' (+ article contracté 'al') exprime la cause.",
    level: "intermédiaire",
    category: "locutions de cause"
  },
  {
    id: "prep_complet_14",
    type: "complet",
    question: "Además ___ estudiar, también trabajo. (addition)",
    correctAnswer: "de",
    explanation: "'Además de' indique l'addition d'actions ou d'éléments.",
    level: "intermédiaire",
    category: "locutions d'addition"
  },
  {
    id: "prep_complet_15",
    type: "complet",
    question: "Vive ___ sus padres en la misma casa. (compagnie)",
    correctAnswer: "con",
    explanation: "'Con' indique l'accompagnement ou la compagnie.",
    level: "débutant",
    category: "prépositions de manière"
  },
  {
    id: "prep_complet_16",
    type: "complet",
    question: "En lugar ___ salir, prefiero quedarme. (alternative)",
    correctAnswer: "de",
    explanation: "'En lugar de + infinitif' exprime l'alternative.",
    level: "avancé",
    category: "locutions d'alternative"
  },
  {
    id: "prep_complet_17",
    type: "complet",
    question: "El perro está ___ de la puerta. (position antérieure)",
    correctAnswer: "delante",
    explanation: "'Delante de' indique une position antérieure dans l'espace.",
    level: "débutant",
    category: "locutions de lieu"
  },
  {
    id: "prep_complet_18",
    type: "complet",
    question: "A fin ___ aprobar, estudio mucho. (but)",
    correctAnswer: "de",
    explanation: "'A fin de + infinitif' exprime le but ou l'objectif.",
    level: "avancé",
    category: "locutions de but"
  },
  {
    id: "prep_complet_19",
    type: "complet",
    question: "Gracias ___ tu ayuda, terminé el proyecto. (cause positive)",
    correctAnswer: "a",
    explanation: "'Gracias a' exprime une cause positive ou favorable.",
    level: "intermédiaire",
    category: "locutions de cause"
  },
  {
    id: "prep_complet_20",
    type: "complet",
    question: "Está ___ la biblioteca y el museo. (position intermédiaire)",
    correctAnswer: "entre",
    explanation: "'Entre' indique une position intermédiaire entre deux éléments.",
    level: "débutant",
    category: "prépositions de lieu"
  }
];

export const prepositionsExerciseCategories = [
  "prépositions de lieu",
  "prépositions de temps",
  "prépositions de moyen",
  "prépositions de manière",
  "por vs para",
  "locutions temporelles",
  "locutions de lieu",
  "locutions de cause",
  "locutions de but",
  "locutions d'addition",
  "locutions d'alternative"
];

export const getPrepositionsExercisesByType = (type: PrepositionsExercise['type']) => {
  return prepositionsExercises.filter(exercise => exercise.type === type);
};

export const getPrepositionsExercisesByCategory = (category: string) => {
  return prepositionsExercises.filter(exercise => exercise.category === category);
};

export const getPrepositionsExercisesByLevel = (level: PrepositionsExercise['level']) => {
  return prepositionsExercises.filter(exercise => exercise.level === level);
};