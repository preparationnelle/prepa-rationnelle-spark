export interface SyntaxExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const syntaxExercises: SyntaxExercise[] = [
  // QCM - Propositions relatives complexes (10 questions)
  {
    id: "syntax_qcm_1",
    type: "qcm",
    question: "Complétez : El libro ___ me recomendaste es muy interesante.",
    options: ["a) que", "b) quien", "c) cuyo", "d) donde"],
    correctAnswer: "a) que",
    explanation: "'Que' est utilisé pour les objets inanimés.",
    level: "intermédiaire",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_2",
    type: "qcm",
    question: "Choisissez la bonne proposition relative : La mujer a ___ vi es mi profesora.",
    options: ["a) que", "b) quien", "c) cuyo", "d) donde"],
    correctAnswer: "b) quien",
    explanation: "'Quien' est utilisé pour les personnes, précédé d'une préposition.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_3",
    type: "qcm",
    question: "Complétez : La casa ___ jardín es grande está en venta.",
    options: ["a) que", "b) quien", "c) cuyo", "d) donde"],
    correctAnswer: "c) cuyo",
    explanation: "'Cuyo' exprime la possession et s'accorde en genre et en nombre avec le nom qu'il introduit.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_4",
    type: "qcm",
    question: "Identifiez la proposition relative correcte : El restaurante ___ comimos estaba cerrado.",
    options: ["a) que", "b) quien", "c) cuyo", "d) donde"],
    correctAnswer: "d) donde",
    explanation: "'Donde' est utilisé pour le lieu.",
    level: "intermédiaire",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_5",
    type: "qcm",
    question: "Choisissez la meilleure option : Las personas ___ conocí son muy amables.",
    options: ["a) que", "b) quienes", "c) cuyo", "d) donde"],
    correctAnswer: "a) que",
    explanation: "'Que' peut être utilisé pour les personnes sans préposition.",
    level: "intermédiaire",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_6",
    type: "qcm",
    question: "Complétez : No entiendo la razón ___ no vino.",
    options: ["a) que", "b) por qué", "c) la cual", "d) a que"],
    correctAnswer: "b) por qué",
    explanation: "'Por qué' est utilisé pour exprimer la cause.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_7",
    type: "qcm",
    question: "Quelle est la forme correcte : La película, ___ era muy larga, me aburrió.",
    options: ["a) que", "b) la que", "c) el que", "d) lo que"],
    correctAnswer: "b) la que",
    explanation: "'La que' est utilisé après une virgule pour faire référence à un nom féminin singulier.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_8",
    type: "qcm",
    question: "Complétez : Habló con la persona ___ le vendió el coche.",
    options: ["a) que", "b) quien", "c) a quien", "d) donde"],
    correctAnswer: "c) a quien",
    explanation: "'A quien' est utilisé après une préposition pour se référer à une personne.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_9",
    type: "qcm",
    question: "Choisissez l'option correcte : El momento ___ llegó fue crucial.",
    options: ["a) que", "b) cuando", "c) en que", "d) donde"],
    correctAnswer: "c) en que",
    explanation: "'En que' est souvent utilisé pour exprimer le temps.",
    level: "avancé",
    category: "propositions relatives"
  },
  {
    id: "syntax_qcm_10",
    type: "qcm",
    question: "La ciudad ___ nací es muy hermosa.",
    options: ["a) que", "b) en la que", "c) la cual", "d) a que"],
    correctAnswer: "b) en la que",
    explanation: "'En la que' est utilisé pour le lieu après une préposition.",
    level: "avancé",
    category: "propositions relatives"
  },
  // QCM - Style direct/indirect & verbes d'opinion (10 questions)
  {
    id: "syntax_qcm_11",
    type: "qcm",
    question: "Transformez au style indirect : Él dijo: 'Estoy cansado'.",
    options: ["a) Él dijo que está cansado.", "b) Él dijo que estaba cansado.", "c) Él dice que está cansado.", "d) Él dijo que esté cansado."],
    correctAnswer: "b) Él dijo que estaba cansado.",
    explanation: "Le présent de l'indicatif devient imparfait dans le style indirect si le verbe introducteur est au passé.",
    level: "intermédiaire",
    category: "style direct/indirect"
  },
  {
    id: "syntax_qcm_12",
    type: "qcm",
    question: "Complétez avec le bon mode : Pienso que ella ___ razón.",
    options: ["a) tiene", "b) tenga", "c) tuviera", "d) tendrá"],
    correctAnswer: "a) tiene",
    explanation: "Après 'pensar que' à l'affirmative, on utilise l'indicatif.",
    level: "intermédiaire",
    category: "verbes d'opinion"
  },
  {
    id: "syntax_qcm_13",
    type: "qcm",
    question: "Choisissez la forme correcte : No creo que él ___ la verdad.",
    options: ["a) dice", "b) diga", "c) dijo", "d) dirá"],
    correctAnswer: "b) diga",
    explanation: "Après 'no creer que', on utilise le subjonctif.",
    level: "intermédiaire",
    category: "verbes d'opinion"
  },
  {
    id: "syntax_qcm_14",
    type: "qcm",
    question: "Transformez au style indirect : Ella preguntó: '¿Vienes mañana?'.",
    options: ["a) Ella preguntó si viene mañana.", "b) Ella preguntó si venía mañana.", "c) Ella pregunta si viene mañana.", "d) Ella preguntó que si venía mañana."],
    correctAnswer: "b) Ella preguntó si venía mañana.",
    explanation: "Le présent de l'indicatif devient imparfait, et 'mañana' reste tel quel ou peut être remplacé par 'al día siguiente'.",
    level: "avancé",
    category: "style direct/indirect"
  },
  {
    id: "syntax_qcm_15",
    type: "qcm",
    question: "Complétez : Es importante que tú ___ español.",
    options: ["a) aprendes", "b) aprendas", "c) aprender", "d) aprendiste"],
    correctAnswer: "b) aprendas",
    explanation: "Après une expression d'importance (Es importante que), on utilise le subjonctif.",
    level: "intermédiaire",
    category: "subjonctif"
  },
  {
    id: "syntax_qcm_16",
    type: "qcm",
    question: "Choisissez l'option correcte : Me alegro de que ___ aquí.",
    options: ["a) estás", "b) estés", "c) estar", "d) estuviste"],
    correctAnswer: "b) estés",
    explanation: "Après une expression de sentiment (Me alegro de que), on utilise le subjonctif.",
    level: "intermédiaire",
    category: "subjonctif"
  },
  {
    id: "syntax_qcm_17",
    type: "qcm",
    question: "Transformez au style indirect : Dice: 'He terminado el trabajo'.",
    options: ["a) Dice que ha terminado el trabajo.", "b) Dice que había terminado el trabajo.", "c) Dijo que había terminado el trabajo.", "d) Dice que haya terminado el trabajo."],
    correctAnswer: "a) Dice que ha terminado el trabajo.",
    explanation: "Si le verbe introducteur est au présent, le temps de la subordonnée reste le même.",
    level: "intermédiaire",
    category: "style direct/indirect"
  },
  {
    id: "syntax_qcm_18",
    type: "qcm",
    question: "Complétez : Parece mentira que ___ tanto frío.",
    options: ["a) hace", "b) haga", "c) hizo", "d) hiciera"],
    correctAnswer: "b) haga",
    explanation: "Après 'Parece mentira que', on utilise le subjonctif pour exprimer l'incrédulité.",
    level: "avancé",
    category: "subjonctif"
  },
  {
    id: "syntax_qcm_19",
    type: "qcm",
    question: "Choisissez la bonne forme : No es cierto que ellos ___ la verdad.",
    options: ["a) saben", "b) sepan", "c) supieron", "d) sabrán"],
    correctAnswer: "b) sepan",
    explanation: "Après 'No es cierto que', on utilise le subjonctif.",
    level: "intermédiaire",
    category: "verbes d'opinion"
  },
  {
    id: "syntax_qcm_20",
    type: "qcm",
    question: "Complétez : Dudo que él ___ a tiempo.",
    options: ["a) llegue", "b) llega", "c) llegó", "d) llegará"],
    correctAnswer: "a) llegue",
    explanation: "Après 'dudar que', on utilise le subjonctif.",
    level: "intermédiaire",
    category: "verbes d'opinion"
  },

  // Mots à compléter - Structures emphatiques & tournures idiomatiques (20 questions)
  {
    id: "syntax_complet_1",
    type: "complet",
    question: "Es ___ que me gusta el chocolate. (mise en relief)",
    correctAnswer: "lo",
    explanation: "'Lo que' est une structure emphatique pour mettre en relief une phrase.",
    level: "intermédiaire",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_2",
    type: "complet",
    question: "___ a ti a quien busco. (mise en relief)",
    correctAnswer: "Es",
    explanation: "'Es... a quien' est une structure emphatique pour mettre en relief une personne.",
    level: "avancé",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_3",
    type: "complet",
    question: "No es ___ fácil como parece. (comparatif)",
    correctAnswer: "tan",
    explanation: "'Tan... como' est utilisé pour exprimer la comparaison d'égalité.",
    level: "débutant",
    category: "comparatifs"
  },
  {
    id: "syntax_complet_4",
    type: "complet",
    question: "Cuanto ___ , mejor. (plus... plus)",
    correctAnswer: "más",
    explanation: "'Cuanto más... mejor' est une tournure idiomatique signifiant 'plus il y en a, mieux c'est'.",
    level: "intermédiaire",
    category: "tournures idiomatiques"
  },
  {
    id: "syntax_complet_5",
    type: "complet",
    question: "Tiene ___ en cuenta tus opiniones. (tenir compte)",
    correctAnswer: "en",
    explanation: "La tournure 'tener en cuenta' signifie 'tenir compte de'.",
    level: "intermédiaire",
    category: "tournures idiomatiques"
  },
  {
    id: "syntax_complet_6",
    type: "complet",
    question: "Fue ayer ___ vimos la película. (mise en relief)",
    correctAnswer: "cuando",
    explanation: "'Fue... cuando' est une structure emphatique pour mettre en relief le temps.",
    level: "intermédiaire",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_7",
    type: "complet",
    question: "Me da ___ que llueva. (avoir peur que)",
    correctAnswer: "miedo",
    explanation: "'Dar miedo que' est une expression de peur suivie du subjonctif.",
    level: "avancé",
    category: "tournures idiomatiques"
  },
  {
    id: "syntax_complet_8",
    type: "complet",
    question: "Por ___ no sea. (au cas où)",
    correctAnswer: "si",
    explanation: "'Por si' signifie 'au cas où'.",
    level: "avancé",
    category: "tournures idiomatiques"
  },
  {
    id: "syntax_complet_9",
    type: "complet",
    question: "Hace ___ años que no la veo. (il y a... que)",
    correctAnswer: "muchos",
    explanation: "'Hace + quantité de temps + que' est utilisé pour exprimer une durée.",
    level: "débutant",
    category: "expressions de temps"
  },
  {
    id: "syntax_complet_10",
    type: "complet",
    question: "No hay ___ más importante. (rien de plus important)",
    correctAnswer: "nada",
    explanation: "'No hay nada más' est une tournure pour exprimer une supériorité absolue.",
    level: "intermédiaire",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_11",
    type: "complet",
    question: "Lo ___ importante es la salud. (ce qui est important)",
    correctAnswer: "más",
    explanation: "'Lo más' est une structure pour exprimer le superlatif absolu.",
    level: "intermédiaire",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_12",
    type: "complet",
    question: "Fue el viernes ___ te llamé. (mise en relief)",
    correctAnswer: "cuando",
    explanation: "'Fue... cuando' met en relief le moment.",
    level: "intermédiaire",
    category: "structures emphatiques"
  },
  {
    id: "syntax_complet_13",
    type: "complet",
    question: "Me parece ___ es buena idea. (il me semble que)",
    correctAnswer: "que",
    explanation: "'Me parece que' est suivi de l'indicatif pour exprimer une opinion.",
    level: "débutant",
    category: "verbes d'opinion"
  },
  {
    id: "syntax_complet_14",
    type: "complet",
    question: "Ojalá ___ el sol mañana. (pourvu que)",
    correctAnswer: "haga",
    explanation: "'Ojalá' est toujours suivi du subjonctif.",
    level: "intermédiaire",
    category: "subjonctif"
  },
  {
    id: "syntax_complet_15",
    type: "complet",
    question: "___ lo sepas. (pour que tu saches)",
    correctAnswer: "Para",
    explanation: "'Para que' est suivi du subjonctif pour exprimer le but.",
    level: "intermédiaire",
    category: "subjonctif"
  },
  {
    id: "syntax_complet_16",
    type: "complet",
    question: "Siempre ___ que trabajar duro. (il faut)",
    correctAnswer: "hay",
    explanation: "'Hay que' est une expression impersonnelle d'obligation.",
    level: "débutant",
    category: "expressions d'obligation"
  },
  {
    id: "syntax_complet_17",
    type: "complet",
    question: "Es mejor ___ que callar. (il vaut mieux)",
    correctAnswer: "hablar",
    explanation: "'Es mejor + infinitif' signifie 'il vaut mieux faire quelque chose'.",
    level: "débutant",
    category: "expressions d'opinion"
  },
  {
    id: "syntax_complet_18",
    type: "complet",
    question: "Tan pronto ___ llegue, te avisaré. (dès que)",
    correctAnswer: "como",
    explanation: "'Tan pronto como' est suivi du subjonctif pour une action future.",
    level: "avancé",
    category: "expressions de temps"
  },
  {
    id: "syntax_complet_19",
    type: "complet",
    question: "A pesar ___ todo, lo consiguió. (malgré tout)",
    correctAnswer: "de",
    explanation: "'A pesar de' signifie 'malgré'.",
    level: "intermédiaire",
    category: "prépositions"
  },
  {
    id: "syntax_complet_20",
    type: "complet",
    question: "Por ___ difícil que sea, lo intentaré. (aussi difficile que cela puisse être)",
    correctAnswer: "muy",
    explanation: "'Por muy + adjectif + que + subjonctif' signifie 'aussi... que cela puisse être'.",
    level: "avancé",
    category: "structures concessives"
  }
];

export const syntaxExerciseCategories = [
  "propositions relatives",
  "style direct/indirect",
  "verbes d'opinion",
  "subjonctif",
  "structures emphatiques",
  "tournures idiomatiques",
  "comparatifs",
  "expressions de temps",
  "expressions d'obligation",
  "expressions d'opinion",
  "prépositions",
  "structures concessives"
];

export const getSyntaxExercisesByType = (type: SyntaxExercise['type']) => {
  return syntaxExercises.filter(exercise => exercise.type === type);
};

export const getSyntaxExercisesByCategory = (category: string) => {
  return syntaxExercises.filter(exercise => exercise.category === category);
};

export const getSyntaxExercisesByLevel = (level: SyntaxExercise['level']) => {
  return syntaxExercises.filter(exercise => exercise.level === level);
};