export interface TemporalExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

// Exercices QCM pour Vocabulaire Temporel (niveau prépa ECG)
const temporalQCMExercises: TemporalExercise[] = [
  {
    id: 'temporal_qcm_1',
    type: 'qcm',
    question: 'Dans cette phrase, quelle expression temporelle convient le mieux ? "___ que llegó el director, todos los empleados se pusieron nerviosos."',
    options: [
      'a) En cuanto',
      'b) Mientras tanto',
      'c) De vez en cuando',
      'd) A medida que'
    ],
    correctAnswer: 'a) En cuanto',
    explanation: '"En cuanto" indique l\'immédiateté et la simultanéité de l\'action. C\'est la seule expression qui convient avec le pretérito indefinido pour exprimer une action immédiate.',
    level: 'avancé',
    category: 'Conjonctions temporelles'
  },
  {
    id: 'temporal_qcm_2',
    type: 'qcm',
    question: 'Quelle nuance temporelle exprime cette phrase ? "Ya para entonces había terminado sus estudios."',
    options: [
      'a) Antériorité dans le passé',
      'b) Simultanéité',
      'c) Postériorité immédiate',
      'd) Habitude passée'
    ],
    correctAnswer: 'a) Antériorité dans le passé',
    explanation: '"Ya para entonces" + plus-que-parfait exprime qu\'une action était déjà achevée à un moment donné du passé. C\'est un marqueur d\'antériorité absolue.',
    level: 'avancé',
    category: 'Marqueurs temporels complexes'
  },
  {
    id: 'temporal_qcm_3',
    type: 'qcm',
    question: 'Complétez avec l\'expression temporelle correcte : "El proyecto debe estar listo ___ el viernes."',
    options: [
      'a) para',
      'b) por',
      'c) en',
      'd) durante'
    ],
    correctAnswer: 'a) para',
    explanation: '"Para" indique une échéance, un délai limite. "El viernes" représente la date butoir où le projet doit être terminé.',
    level: 'intermédiaire',
    category: 'Prépositions temporelles'
  },
  {
    id: 'temporal_qcm_4',
    type: 'qcm',
    question: 'Dans quel contexte utilise-t-on "al cabo de" ?',
    options: [
      'a) Pour exprimer la durée d\'une action',
      'b) Pour indiquer qu\'après un certain temps quelque chose arrive',
      'c) Pour marquer la simultanéité',
      'd) Pour exprimer la répétition'
    ],
    correctAnswer: 'b) Pour indiquer qu\'après un certain temps quelque chose arrive',
    explanation: '"Al cabo de" signifie "au bout de" et indique qu\'après une certaine durée, quelque chose se produit. Ex: "Al cabo de dos horas, llegó."',
    level: 'avancé',
    category: 'Locutions temporelles'
  },
  {
    id: 'temporal_qcm_5',
    type: 'qcm',
    question: 'Quelle différence y a-t-il entre "apenas" et "en cuanto" ?',
    options: [
      'a) Aucune différence',
      'b) "Apenas" est plus soutenu',
      'c) "Apenas" insiste sur l\'immédiateté, "en cuanto" sur la condition',
      'd) "En cuanto" est obsolète'
    ],
    correctAnswer: 'c) "Apenas" insiste sur l\'immédiateté, "en cuanto" sur la condition',
    explanation: '"Apenas" (à peine) souligne que l\'action du deuxième verbe suit immédiatement la première. "En cuanto" exprime plutôt une condition temporelle.',
    level: 'avancé',
    category: 'Nuances temporelles'
  },
  {
    id: 'temporal_qcm_6',
    type: 'qcm',
    question: 'Comment traduire "Il y a trois ans que je vis ici" ?',
    options: [
      'a) Hace tres años que vivo aquí',
      'b) Desde hace tres años vivo aquí',
      'c) Hace tres años vivía aquí',
      'd) Tanto a) como b) son correctas'
    ],
    correctAnswer: 'd) Tanto a) como b) son correctas',
    explanation: 'Les deux constructions sont correctes : "Hace + temps + que + présent" et "Desde hace + temps + présent" expriment une durée qui continue jusqu\'au présent.',
    level: 'intermédiaire',
    category: 'Expression de la durée'
  },
  {
    id: 'temporal_qcm_7',
    type: 'qcm',
    question: 'Dans "Cada vez que lo veo, me sonríe", quel temps verbal s\'impose après "cada vez que" pour exprimer une action future ?',
    options: [
      'a) Présent de l\'indicatif',
      'b) Futur simple',
      'c) Présent du subjonctif',
      'd) Imparfait du subjonctif'
    ],
    correctAnswer: 'c) Présent du subjonctif',
    explanation: 'Après "cada vez que" référant au futur, on utilise le subjonctif présent : "Cada vez que lo vea, me sonreirá." La nuance temporelle impose le subjonctif.',
    level: 'avancé',
    category: 'Concordance temporelle'
  },
  {
    id: 'temporal_qcm_8',
    type: 'qcm',
    question: 'Que signifie "de cuando en cuando" ?',
    options: [
      'a) Depuis longtemps',
      'b) De temps en temps',
      'c) D\'un moment à l\'autre',
      'd) Quand même'
    ],
    correctAnswer: 'b) De temps en temps',
    explanation: '"De cuando en cuando" = "de vez en cuando" = "de temps en temps". Expression de la fréquence irrégulière et espacée.',
    level: 'intermédiaire',
    category: 'Expressions de fréquence'
  },
  {
    id: 'temporal_qcm_9',
    type: 'qcm',
    question: 'Comment exprimer "dès que" avec une nuance d\'impatience en espagnol ?',
    options: [
      'a) En cuanto',
      'b) Tan pronto como',
      'c) Nada más',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: 'Toutes ces expressions peuvent traduire "dès que" avec des nuances différentes. "Nada más" + infinitif est particulièrement expressif pour l\'impatience.',
    level: 'avancé',
    category: 'Registres et nuances'
  },
  {
    id: 'temporal_qcm_10',
    type: 'qcm',
    question: 'Dans un texte soutenu, comment dira-t-on "Pendant ce temps-là" ?',
    options: [
      'a) Mientras tanto',
      'b) Entretanto',
      'c) Entre tanto',
      'd) b) et c) sont corrects'
    ],
    correctAnswer: 'd) b) et c) sont corrects',
    explanation: '"Entretanto" et "entre tanto" sont des variantes soutenues de "mientras tanto". Elles appartiennent au registre littéraire et administratif.',
    level: 'avancé',
    category: 'Registre soutenu'
  },
  {
    id: 'temporal_qcm_11',
    type: 'qcm',
    question: 'Quelle préposition utilise-t-on avec les siècles en espagnol ?',
    options: [
      'a) en',
      'b) por',
      'c) durante',
      'd) a'
    ],
    correctAnswer: 'a) en',
    explanation: 'On dit "en el siglo XXI", "en el siglo pasado". La préposition "en" s\'utilise avec les siècles, les années, les mois.',
    level: 'intermédiaire',
    category: 'Prépositions avec dates'
  },
  {
    id: 'temporal_qcm_12',
    type: 'qcm',
    question: 'Comment traduire "Il était une fois" dans un conte en espagnol ?',
    options: [
      'a) Era una vez',
      'b) Había una vez',
      'c) Érase una vez',
      'd) Fue una vez'
    ],
    correctAnswer: 'c) Érase una vez',
    explanation: '"Érase una vez" est la formule traditionnelle des contes. C\'est une forme archaïque du verbe "ser" (subjonctif imparfait utilisé comme indicatif).',
    level: 'avancé',
    category: 'Expressions figées temporelles'
  },
  {
    id: 'temporal_qcm_13',
    type: 'qcm',
    question: 'Que signifie "de buenas a primeras" ?',
    options: [
      'a) De bon matin',
      'b) Soudainement, sans prévenir',
      'c) Petit à petit',
      'd) En premier lieu'
    ],
    correctAnswer: 'b) Soudainement, sans prévenir',
    explanation: '"De buenas a primeras" signifie "soudainement", "tout à coup", "sans crier gare". Expression idiomatique de l\'immédiateté inattendue.',
    level: 'avancé',
    category: 'Locutions idiomatiques'
  },
  {
    id: 'temporal_qcm_14',
    type: 'qcm',
    question: 'Dans "Lo haré tan pronto como pueda", pourquoi utilise-t-on le subjonctif après "tan pronto como" ?',
    options: [
      'a) C\'est une règle absolue',
      'b) L\'action est future et incertaine',
      'c) "Tan pronto como" exige toujours le subjonctif',
      'd) C\'est une erreur'
    ],
    correctAnswer: 'b) L\'action est future et incertaine',
    explanation: 'Après "tan pronto como" référant au futur, on utilise le subjonctif car l\'action n\'est pas encore réalisée. Au passé, on utiliserait l\'indicatif.',
    level: 'avancé',
    category: 'Subjonctif temporel'
  },
  {
    id: 'temporal_qcm_15',
    type: 'qcm',
    question: 'Comment dit-on "à l\'époque où" en espagnol soutenu ?',
    options: [
      'a) En la época en que',
      'b) En la época cuando',
      'c) En la época donde',
      'd) a) et b) sont corrects'
    ],
    correctAnswer: 'a) En la época en que',
    explanation: '"En la época en que" est la forme correcte. "Cuando" ne s\'utilise pas après un nom, il faut "en que" ou "que".',
    level: 'avancé',
    category: 'Structures relatives temporelles'
  },
  {
    id: 'temporal_qcm_16',
    type: 'qcm',
    question: 'Quelle expression temporelle utilise-t-on pour "désormais" en espagnol ?',
    options: [
      'a) Desde ahora',
      'b) A partir de ahora',
      'c) En adelante',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: 'Toutes ces expressions peuvent traduire "désormais" : "desde ahora", "a partir de ahora", "en adelante", "de ahora en adelante".',
    level: 'intermédiaire',
    category: 'Projection temporelle'
  },
  {
    id: 'temporal_qcm_17',
    type: 'qcm',
    question: 'Dans "Hasta que no venga, no empezamos", quelle est la fonction de "no" ?',
    options: [
      'a) C\'est une négation',
      'b) C\'est un "ne" explétif sans valeur négative',
      'c) C\'est une erreur',
      'd) C\'est facultatif'
    ],
    correctAnswer: 'b) C\'est un "ne" explétif sans valeur négative',
    explanation: 'Après "hasta que", on peut avoir un "no" explétif qui n\'est pas négatif. La phrase signifie "Tant qu\'il ne viendra pas" = "Jusqu\'à ce qu\'il vienne".',
    level: 'avancé',
    category: 'Particularités syntaxiques'
  },
  {
    id: 'temporal_qcm_18',
    type: 'qcm',
    question: 'Comment traduire "au fur et à mesure que" ?',
    options: [
      'a) Al mismo tiempo que',
      'b) A medida que',
      'c) Según',
      'd) Conforme'
    ],
    correctAnswer: 'b) A medida que',
    explanation: '"A medida que" est l\'équivalent exact de "au fur et à mesure que". "Conforme" est aussi possible mais moins fréquent.',
    level: 'intermédiaire',
    category: 'Progression temporelle'
  },
  {
    id: 'temporal_qcm_19',
    type: 'qcm',
    question: 'Que signifie "de repente" ?',
    options: [
      'a) En répétant',
      'b) Soudainement',
      'c) Rapidement',
      'd) Récemment'
    ],
    correctAnswer: 'b) Soudainement',
    explanation: '"De repente" signifie "soudainement", "tout à coup". Ne pas confondre avec "repetir" (répéter).',
    level: 'débutant',
    category: 'Adverbes temporels'
  },
  {
    id: 'temporal_qcm_20',
    type: 'qcm',
    question: 'Dans un contexte formel, comment exprime-t-on "autrefois" ?',
    options: [
      'a) Antes',
      'b) Antiguamente',
      'c) En otros tiempos',
      'd) b) et c) sont plus soutenus'
    ],
    correctAnswer: 'd) b) et c) sont plus soutenus',
    explanation: '"Antiguamente" et "en otros tiempos" sont plus soutenus que "antes". Dans les essais et la prose littéraire, ils sont préférables.',
    level: 'avancé',
    category: 'Registre et style'
  }
];

// Exercices à choix multiples pour Vocabulaire Temporel
const temporalChoixExercises: TemporalExercise[] = [
  {
    id: 'temporal_choix_1',
    type: 'choix',
    question: 'Sélectionnez toutes les traductions correctes de "depuis que" :',
    options: [
      'a) Desde que',
      'b) Después que',
      'c) A partir de que',
      'd) Desde cuando'
    ],
    correctAnswer: 'a) Desde que',
    explanation: 'Seul "desde que" traduit correctement "depuis que". "Después que" = "après que", "desde cuando" = "depuis quand" (interrogatif).',
    level: 'intermédiaire',
    category: 'Conjonctions temporelles'
  },
  {
    id: 'temporal_choix_2',
    type: 'choix',
    question: 'Quelles expressions peut-on utiliser pour "tout de suite" en espagnol ?',
    options: [
      'a) Ahora mismo',
      'b) En seguida',
      'c) Inmediatamente',
      'd) Al momento'
    ],
    correctAnswer: 'a) Ahora mismo',
    explanation: 'Toutes ces expressions signifient "tout de suite" : "ahora mismo", "en seguida", "inmediatamente", "al momento", "al instante".',
    level: 'intermédiaire',
    category: 'Immédiateté temporelle'
  },
  {
    id: 'temporal_choix_3',
    type: 'choix',
    question: 'Quelles constructions temporelles demandent le subjonctif au futur ?',
    options: [
      'a) Cuando + futur',
      'b) En cuanto + futur',
      'c) Hasta que + futur',
      'd) Mientras + futur'
    ],
    correctAnswer: 'b) En cuanto + futur',
    explanation: 'Les conjonctions temporelles ("cuando", "en cuanto", "hasta que", "mientras") demandent le subjonctif quand elles se réfèrent au futur.',
    level: 'avancé',
    category: 'Subjonctif avec expressions temporelles'
  },
  {
    id: 'temporal_choix_4',
    type: 'choix',
    question: 'Quelles prépositions peut-on utiliser pour exprimer "pendant" ?',
    options: [
      'a) Durante',
      'b) Por',
      'c) En',
      'd) A lo largo de'
    ],
    correctAnswer: 'a) Durante',
    explanation: '"Durante" et "por" peuvent exprimer "pendant". "A lo largo de" indique "tout au long de". "En" avec durée est incorrect.',
    level: 'intermédiaire',
    category: 'Prépositions temporelles'
  },
  {
    id: 'temporal_choix_5',
    type: 'choix',
    question: 'Quelles expressions indiquent la simultanéité ?',
    options: [
      'a) Mientras',
      'b) Al mismo tiempo que',
      'c) A la vez que',
      'd) Por su parte'
    ],
    correctAnswer: 'a) Mientras',
    explanation: '"Mientras", "al mismo tiempo que", "a la vez que" expriment la simultanéité. "Por su parte" indique plutôt une opposition ou une différence.',
    level: 'intermédiaire',
    category: 'Simultanéité'
  },
  {
    id: 'temporal_choix_6',
    type: 'choix',
    question: 'Comment peut-on exprimer "jadis" en espagnol soutenu ?',
    options: [
      'a) Antaño',
      'b) Otrora',
      'c) En tiempos pasados',
      'd) Ayer'
    ],
    correctAnswer: 'a) Antaño',
    explanation: '"Antaño" et "otrora" sont des termes soutenus pour "jadis". "En tiempos pasados" est plus moderne. "Ayer" = "hier".',
    level: 'avancé',
    category: 'Vocabulaire littéraire'
  },
  {
    id: 'temporal_choix_7',
    type: 'choix',
    question: 'Quelles expressions marquent l\'antériorité immédiate ?',
    options: [
      'a) Justo antes de',
      'b) Poco antes de',
      'c) Instantes antes de',
      'd) Mucho antes de'
    ],
    correctAnswer: 'a) Justo antes de',
    explanation: '"Justo antes de", "poco antes de", "instantes antes de" marquent l\'antériorité immédiate. "Mucho antes de" indique une antériorité lointaine.',
    level: 'avancé',
    category: 'Antériorité'
  },
  {
    id: 'temporal_choix_8',
    type: 'choix',
    question: 'Avec quelles expressions temporelles utilise-t-on le prétérit au lieu de l\'imparfait ?',
    options: [
      'a) De repente',
      'b) De pronto',
      'c) Poco a poco',
      'd) Súbitamente'
    ],
    correctAnswer: 'a) De repente',
    explanation: '"De repente", "de pronto", "súbitamente" (soudaineté) appellent le prétérit. "Poco a poco" (progressivité) appelle l\'imparfait.',
    level: 'avancé',
    category: 'Choix temporels avec aspects'
  },
  {
    id: 'temporal_choix_9',
    type: 'choix',
    question: 'Quelles sont les traductions possibles de "après-demain" ?',
    options: [
      'a) Pasado mañana',
      'b) Después de mañana',
      'c) Al día siguiente',
      'd) El día después'
    ],
    correctAnswer: 'a) Pasado mañana',
    explanation: '"Pasado mañana" est la traduction standard d\'après-demain. "Al día siguiente" = "le lendemain" (contexte passé).',
    level: 'débutant',
    category: 'Vocabulaire calendaire'
  },
  {
    id: 'temporal_choix_10',
    type: 'choix',
    question: 'Dans quels contextes utilise-t-on "en vida de" ?',
    options: [
      'a) Pour parler du vivant de quelqu\'un',
      'b) Pour parler d\'une époque révolue',
      'c) Pour exprimer la durée de vie',
      'd) Dans des contextes formels ou littéraires'
    ],
    correctAnswer: 'a) Pour parler du vivant de quelqu\'un',
    explanation: '"En vida de" s\'utilise pour dire "du vivant de" quelqu\'un : "En vida de Franco". C\'est une expression formelle et littéraire.',
    level: 'avancé',
    category: 'Expressions spécialisées'
  },
  {
    id: 'temporal_choix_11',
    type: 'choix',
    question: 'Quelles expressions traduisent "parfois" ?',
    options: [
      'a) A veces',
      'b) Algunas veces',
      'c) De vez en cuando',
      'd) En ocasiones'
    ],
    correctAnswer: 'a) A veces',
    explanation: 'Toutes ces expressions peuvent traduire "parfois" avec des nuances : "a veces" (parfois), "de vez en cuando" (de temps en temps), "en ocasiones" (soutenu).',
    level: 'intermédiaire',
    category: 'Fréquence'
  },
  {
    id: 'temporal_choix_12',
    type: 'choix',
    question: 'Comment peut-on exprimer "dorénavant" ?',
    options: [
      'a) De ahora en adelante',
      'b) A partir de ahora',
      'c) En lo sucesivo',
      'd) Desde este momento'
    ],
    correctAnswer: 'a) De ahora en adelante',
    explanation: 'Toutes ces expressions peuvent traduire "dorénavant". "En lo sucesivo" est particulièrement soutenu et administratif.',
    level: 'avancé',
    category: 'Projection future'
  },
  {
    id: 'temporal_choix_13',
    type: 'choix',
    question: 'Quand utilise-t-on "en tanto que" vs "mientras que" ?',
    options: [
      'a) "En tanto que" = temporel, "mientras que" = opposition',
      'b) "En tanto que" = causation, "mientras que" = temporel',
      'c) Ils sont interchangeables',
      'd) "En tanto que" est plus soutenu'
    ],
    correctAnswer: 'd) "En tanto que" est plus soutenu',
    explanation: '"En tanto que" est plus soutenu et peut avoir une valeur causale. "Mientras que" est plus courant pour l\'opposition et la simultanéité.',
    level: 'avancé',
    category: 'Nuances stylistiques'
  },
  {
    id: 'temporal_choix_14',
    type: 'choix',
    question: 'Quelles expressions indiquent la répétition dans le temps ?',
    options: [
      'a) Una y otra vez',
      'b) Repetidas veces',
      'c) Cada cierto tiempo',
      'd) De continuo'
    ],
    correctAnswer: 'a) Una y otra vez',
    explanation: 'Toutes ces expressions indiquent la répétition : "una y otra vez" (sans cesse), "repetidas veces" (à plusieurs reprises), "cada cierto tiempo" (de temps à autre), "de continuo" (continuellement).',
    level: 'avancé',
    category: 'Itération temporelle'
  },
  {
    id: 'temporal_choix_15',
    type: 'choix',
    question: 'Comment traduit-on "en même temps" selon le contexte ?',
    options: [
      'a) Al mismo tiempo (simultanéité)',
      'b) A la vez (coïncidence)',
      'c) Paralelamente (parallélisme)',
      'd) Simultáneamente (formalité)'
    ],
    correctAnswer: 'a) Al mismo tiempo (simultanéité)',
    explanation: 'Toutes ces traductions sont possibles selon le contexte : "al mismo tiempo" (général), "a la vez" (coïncidence), "paralelamente" (développement parallèle), "simultáneamente" (formel).',
    level: 'avancé',
    category: 'Nuances de simultanéité'
  },
  {
    id: 'temporal_choix_16',
    type: 'choix',
    question: 'Dans quels registres utilise-t-on "en la actualidad" vs "actualmente" ?',
    options: [
      'a) "En la actualidad" est plus formel',
      'b) "Actualmente" est plus courant',
      'c) Les deux sont interchangeables',
      'd) "En la actualidad" est administratif'
    ],
    correctAnswer: 'a) "En la actualidad" est plus formel',
    explanation: '"En la actualidad" appartient au registre soutenu et administratif. "Actualmente" est plus courant et moderne.',
    level: 'intermédiaire',
    category: 'Registres de langue'
  },
  {
    id: 'temporal_choix_17',
    type: 'choix',
    question: 'Quelles expressions marquent l\'imminence ?',
    options: [
      'a) Estar a punto de',
      'b) Estar al llegar',
      'c) Estar por + infinitif',
      'd) Ir a + infinitif'
    ],
    correctAnswer: 'a) Estar a punto de',
    explanation: 'Toutes ces expressions peuvent marquer l\'imminence : "estar a punto de" (être sur le point de), "estar al llegar" (être en train d\'arriver), "estar por" (être sur le point de), "ir a" (aller + inf).',
    level: 'intermédiaire',
    category: 'Imminence'
  },
  {
    id: 'temporal_choix_18',
    type: 'choix',
    question: 'Comment exprime-t-on "à l\'avenir" en espagnol ?',
    options: [
      'a) En el futuro',
      'b) En lo venidero',
      'c) En adelante',
      'd) Por venir'
    ],
    correctAnswer: 'a) En el futuro',
    explanation: '"En el futuro", "en lo venidero" (soutenu), "en adelante" (désormais) peuvent traduire "à l\'avenir". "Por venir" s\'utilise comme adjectif.',
    level: 'intermédiaire',
    category: 'Projection future'
  },
  {
    id: 'temporal_choix_19',
    type: 'choix',
    question: 'Quelle différence entre "pronto" et "temprano" ?',
    options: [
      'a) "Pronto" = bientôt, "temprano" = tôt',
      'b) "Pronto" = rapidement, "temprano" = de bonne heure',
      'c) "Pronto" = vite, "temprano" = en avance',
      'd) a) et b) sont corrects'
    ],
    correctAnswer: 'd) a) et b) sont corrects',
    explanation: '"Pronto" peut signifier "bientôt" ou "rapidement". "Temprano" signifie "tôt", "de bonne heure". Ce sont des aspects temporels différents.',
    level: 'intermédiaire',
    category: 'Adverbes de temps'
  },
  {
    id: 'temporal_choix_20',
    type: 'choix',
    question: 'Quelles sont les équivalences de "entretemps" ?',
    options: [
      'a) Mientras tanto',
      'b) Entretanto',
      'c) Entre tanto',
      'd) En el ínterin'
    ],
    correctAnswer: 'a) Mientras tanto',
    explanation: 'Toutes ces expressions traduisent "entretemps" : "mientras tanto" (courant), "entretanto"/"entre tanto" (soutenus), "en el ínterin" (très soutenu).',
    level: 'avancé',
    category: 'Intervalle temporel'
  }
];

// Exercices à mots à compléter pour Vocabulaire Temporel
const temporalCompletExercises: TemporalExercise[] = [
  {
    id: 'temporal_complet_1',
    type: 'complet',
    question: 'Complétez : "______ que se jubiló, se dedica a la jardinería." (Depuis qu\'il est à la retraite)',
    correctAnswer: 'Desde',
    explanation: '"Desde que" exprime le point de départ temporel d\'une situation qui perdure.',
    level: 'intermédiaire',
    category: 'Point de départ temporel'
  },
  {
    id: 'temporal_complet_2',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ años que no nos vemos." (Il y a trois ans que nous ne nous voyons pas)',
    correctAnswer: 'Hace tres años',
    explanation: '"Hace + temps + que + négation" exprime une durée écoulée depuis la dernière fois.',
    level: 'intermédiaire',
    category: 'Durée écoulée'
  },
  {
    id: 'temporal_complet_3',
    type: 'complet',
    question: 'Complétez : "______ ______ termine el trabajo, podremos salir." (Dès qu\'il finira le travail)',
    correctAnswer: 'En cuanto',
    explanation: '"En cuanto" + subjonctif exprime l\'immédiateté d\'une action future.',
    level: 'avancé',
    category: 'Immédiateté future'
  },
  {
    id: 'temporal_complet_4',
    type: 'complet',
    question: 'Complétez : "El proyecto debe estar listo ______ el viernes." (Le projet doit être prêt pour vendredi)',
    correctAnswer: 'para',
    explanation: '"Para" indique une échéance, un délai limite à respecter.',
    level: 'intermédiaire',
    category: 'Échéance'
  },
  {
    id: 'temporal_complet_5',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ dos horas llegó la ambulancia." (Au bout de deux heures l\'ambulance arriva)',
    correctAnswer: 'Al cabo de',
    explanation: '"Al cabo de" indique qu\'après une certaine durée, quelque chose se produit.',
    level: 'avancé',
    category: 'Durée écoulée avant un événement'
  },
  {
    id: 'temporal_complet_6',
    type: 'complet',
    question: 'Complétez : "______ salió de casa, empezó a llover." (À peine sorti de chez lui, il commença à pleuvoir)',
    correctAnswer: 'Apenas',
    explanation: '"Apenas" exprime l\'immédiateté entre deux actions successives.',
    level: 'avancé',
    category: 'Succession immédiate'
  },
  {
    id: 'temporal_complet_7',
    type: 'complet',
    question: 'Complétez : "Nos vemos ______ ______ ______ ______." (Nous nous voyons de temps en temps)',
    correctAnswer: 'de vez en cuando',
    explanation: '"De vez en cuando" exprime la fréquence irrégulière et espacée.',
    level: 'intermédiaire',
    category: 'Fréquence'
  },
  {
    id: 'temporal_complet_8',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ que estudia más, mejores son sus notas." (Au fur et à mesure qu\'il étudie plus)',
    correctAnswer: 'A medida que',
    explanation: '"A medida que" exprime la progression simultanée de deux phénomènes.',
    level: 'avancé',
    category: 'Progression parallèle'
  },
  {
    id: 'temporal_complet_9',
    type: 'complet',
    question: 'Complétez : "______ no llegue el director, no podemos empezar." (Tant que le directeur n\'arrive pas)',
    correctAnswer: 'Mientras',
    explanation: '"Mientras" + négation peut exprimer "tant que... ne... pas".',
    level: 'avancé',
    category: 'Condition temporelle négative'
  },
  {
    id: 'temporal_complet_10',
    type: 'complet',
    question: 'Complétez : "______ me lo dijeron, no lo creía." (Jusqu\'à ce qu\'on me le dise)',
    correctAnswer: 'Hasta que',
    explanation: '"Hasta que" exprime la limite temporelle d\'une situation.',
    level: 'intermédiaire',
    category: 'Limite temporelle'
  },
  {
    id: 'temporal_complet_11',
    type: 'complet',
    question: 'Complétez : "Vivió en Francia ______ cinco años." (Il a vécu en France pendant cinq ans)',
    correctAnswer: 'durante',
    explanation: '"Durante" exprime la durée d\'une action accomplie.',
    level: 'débutant',
    category: 'Durée'
  },
  {
    id: 'temporal_complet_12',
    type: 'complet',
    question: 'Complétez : "______ ______, se levantó y se fue." (Soudainement, il se leva et partit)',
    correctAnswer: 'De repente',
    explanation: '"De repente" exprime la soudaineté d\'une action.',
    level: 'intermédiaire',
    category: 'Soudaineté'
  },
  {
    id: 'temporal_complet_13',
    type: 'complet',
    question: 'Complétez : "______, había muchos más árboles aquí." (Autrefois, il y avait beaucoup plus d\'arbres ici)',
    correctAnswer: 'Antiguamente',
    explanation: '"Antiguamente" est une forme soutenue pour exprimer "autrefois".',
    level: 'avancé',
    category: 'Référence au passé lointain'
  },
  {
    id: 'temporal_complet_14',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ trabajar, revisaré mis emails." (Avant de commencer à travailler)',
    correctAnswer: 'Antes de empezar a',
    explanation: '"Antes de + infinitif" exprime l\'antériorité immédiate.',
    level: 'intermédiaire',
    category: 'Antériorité'
  },
  {
    id: 'temporal_complet_15',
    type: 'complet',
    question: 'Complétez : "El accidente ocurrió ______ ______ ______." (L\'accident s\'est produit tout à coup)',
    correctAnswer: 'de buenas a primeras',
    explanation: '"De buenas a primeras" est une expression idiomatique pour "soudainement".',
    level: 'avancé',
    category: 'Expressions idiomatiques'
  },
  {
    id: 'temporal_complet_16',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ ______, no volveremos a vernos." (À partir de maintenant, nous ne nous reverrons plus)',
    correctAnswer: 'A partir de ahora',
    explanation: '"A partir de ahora" marque un nouveau point de départ temporel.',
    level: 'intermédiaire',
    category: 'Nouveau point de départ'
  },
  {
    id: 'temporal_complet_17',
    type: 'complet',
    question: 'Complétez : "______ vivía en Madrid, iba al teatro todas las semanas." (Quand il vivait à Madrid)',
    correctAnswer: 'Cuando',
    explanation: '"Cuando" + imparfait exprime une circonstance habituelle dans le passé.',
    level: 'intermédiaire',
    category: 'Circonstance temporelle passée'
  },
  {
    id: 'temporal_complet_18',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ había terminado cuando llegaste." (Il venait juste de finir quand tu es arrivé)',
    correctAnswer: 'Acababa de haber',
    explanation: '"Acabar de + infinitif" exprime le passé récent. Avec "haber + participio" pour l\'antériorité.',
    level: 'avancé',
    category: 'Passé récent avec antériorité'
  },
  {
    id: 'temporal_complet_19',
    type: 'complet',
    question: 'Complétez : "______ ______ que lo conozco, siempre ha sido así." (Depuis que je le connais)',
    correctAnswer: 'Desde que',
    explanation: '"Desde que" établit le point de départ d\'une observation qui perdure.',
    level: 'intermédiaire',
    category: 'Point de départ d\'une observation'
  },
  {
    id: 'temporal_complet_20',
    type: 'complet',
    question: 'Complétez : "Nos encontramos ______ ______ ______." (Nous nous sommes rencontrés par hasard)',
    correctAnswer: 'por casualidad',
    explanation: '"Por casualidad" exprime la coïncidence temporelle fortuite.',
    level: 'intermédiaire',
    category: 'Coïncidence temporelle'
  }
];

// Fonctions utilitaires
export const getTemporalExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  switch (type) {
    case 'qcm':
      return temporalQCMExercises;
    case 'choix':
      return temporalChoixExercises;
    case 'complet':
      return temporalCompletExercises;
    default:
      return [];
  }
};

export const temporalExerciseCategories = [
  'Conjonctions temporelles',
  'Marqueurs temporels complexes',
  'Prépositions temporelles',
  'Locutions temporelles',
  'Nuances temporelles',
  'Expression de la durée',
  'Concordance temporelle',
  'Expressions de fréquence',
  'Registres et nuances',
  'Registre soutenu',
  'Prépositions avec dates',
  'Expressions figées temporelles',
  'Locutions idiomatiques',
  'Subjonctif temporel',
  'Structures relatives temporelles',
  'Projection temporelle',
  'Particularités syntaxiques',
  'Progression temporelle',
  'Adverbes temporels',
  'Registre et style'
];

// Export de tous les exercices
export const temporalExercises: TemporalExercise[] = [
  ...temporalQCMExercises,
  ...temporalChoixExercises,
  ...temporalCompletExercises
];