export interface SyntaxSection {
  id: string;
  title: string;
  description: string;
  level: string;
  content: {
    rules: string[];
    examples: Array<{
      spanish: string;
      french: string;
      explanation: string;
    }>;
    irregularities?: Array<{
      pattern: string;
      examples: string[];
      notes: string;
    }>;
    tips: string[];
  };
}

export interface SyntaxExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'transformation' | 'construction' | 'choice' | 'translation';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const syntaxSections: SyntaxSection[] = [
  {
    id: "structures-sophistiquees",
    title: "Structures Syntaxiques Sophistiquées",
    description: "Combiner plusieurs éléments pour créer des phrases riches et nuancées",
    level: "Avancé",
    content: {
      rules: [
        "Utilisez des subordonnées (relatives, complétives) pour lier des idées",
        "L'ordre des mots est flexible en espagnol, mais le sujet-verbe reste souvent stable",
        "Intégrez des adverbes ou compléments pour enrichir l'expression",
        "Évitez les traductions littérales du français qui peuvent rendre la phrase lourde"
      ],
      examples: [
        {
          spanish: "Voy al cine para ver una película",
          french: "Je vais au cinéma pour voir un film",
          explanation: "Plus fluide que deux phrases séparées"
        },
        {
          spanish: "Voy al cine, donde proyectan la última película de Almodóvar, para disfrutar de una buena historia",
          french: "J'y vais pour profiter d'une bonne histoire, avec une relative pour plus de détails",
          explanation: "Intégration d'une proposition relative pour enrichir"
        }
      ],
      tips: [
        "Pour enrichir, intégrez des adverbes ou compléments",
        "Pratiquez en transformant deux phrases simples en une phrase complexe",
        "Évitez les traductions littérales du français"
      ]
    }
  },
  {
    id: "propositions-relatives",
    title: "Propositions Relatives Complexes",
    description: "Décrire ou préciser un nom avec des pronoms relatifs",
    level: "Avancé",
    content: {
      rules: [
        "Introduites par que (le plus courant), el cual/la cual, etc.",
        "L'accord en genre/nombre si nécessaire",
        "Distinguer restrictives (sans virgules, changent le sens) et explicatives (avec virgules, ajoutent du détail)",
        "Subjonctif si hypothétique : 'Busco un libro que sea interesante'"
      ],
      examples: [
        {
          spanish: "El libro que leí ayer es interesante",
          french: "Le livre que j'ai lu hier est intéressant",
          explanation: "Relative restrictive, essentielle au sens"
        },
        {
          spanish: "El libro, que leí ayer, es interesante",
          french: "Le livre, que j'ai lu hier, est intéressant",
          explanation: "Relative explicative (entre virgules), info supplémentaire"
        },
        {
          spanish: "Busco un libro que sea interesante",
          french: "Je cherche un livre qui soit intéressant",
          explanation: "Subjonctif car hypothétique (le livre n'existe pas encore)"
        }
      ],
      irregularities: [
        {
          pattern: "Que vs Quien vs Cuyo vs Donde",
          examples: [
            "La persona que vi (général, personnes/choses)",
            "El amigo con quien hablo (personnes, après préposition)",
            "La mujer cuya casa es grande (possession)",
            "La ciudad donde nací (lieu)"
          ],
          notes: "Chaque relatif a un usage spécifique selon le contexte"
        }
      ],
      tips: [
        "Distinguez restrictives (sans virgules, changent le sens) et explicatives (avec virgules, ajoutent du détail)",
        "Pratiquez en transformant deux phrases en une",
        "Subjonctif si hypothétique ou incertain"
      ]
    }
  },
  {
    id: "discours-rapporte",
    title: "Discours Rapporté",
    description: "Rapporter les paroles de quelqu'un sans guillemets, en adaptant les temps verbaux et pronoms",
    level: "Avancé",
    content: {
      rules: [
        "Changez le temps (présent → imparfait ; futur → conditionnel) et les pronoms (yo → él)",
        "Introduit par que ou verbes comme decir, preguntar",
        "Si la principale est au présent, pas de changement de temps",
        "Pour questions : sans inversion, 'Preguntó si vendría'"
      ],
      examples: [
        {
          spanish: "Dijo: 'Voy al mercado'",
          french: "Il a dit : 'Je vais au marché'",
          explanation: "Style direct avec guillemets"
        },
        {
          spanish: "Dijo que iba al mercado",
          french: "Il a dit qu'il allait au marché",
          explanation: "Style indirect : présent → imparfait"
        },
        {
          spanish: "Dice que va al mercado",
          french: "Il dit qu'il va au marché",
          explanation: "Principale au présent : pas de changement de temps"
        },
        {
          spanish: "Preguntó qué hora era",
          french: "Il a demandé quelle heure il était",
          explanation: "Question indirecte sans inversion"
        }
      ],
      irregularities: [
        {
          pattern: "Transformation des temps",
          examples: [
            "Mañana vendré → vendría al día suivant",
            "Estoy feliz → estaba feliz",
            "Voy a estudiar → iba a estudiar"
          ],
          notes: "Ajustez aussi les lieux/temps : aquí → allí, mañana → al día suivant"
        }
      ],
      tips: [
        "Si la principale est au présent, pas de changement de temps",
        "Attention aux questions : sans inversion",
        "Ajustez les adverbes de temps et de lieu"
      ]
    }
  },
  {
    id: "expression-opinion",
    title: "Expression de l'Opinion",
    description: "Exprimer un point de vue subjectif, souvent avec subjonctif pour le doute",
    level: "Avancé",
    content: {
      rules: [
        "Utilisez creer que (croire que – indicatif si certitude), pensar que (penser que)",
        "Pour opinions fortes : estoy convencido de que",
        "Subjonctif obligatoire après négation ou doute",
        "Intégrez des adverbes comme personalmente (personnellement) pour nuancer"
      ],
      examples: [
        {
          spanish: "Creo que es verdad",
          french: "Je crois que c'est vrai",
          explanation: "Certitude : indicatif"
        },
        {
          spanish: "No creo que sea verdad",
          french: "Je ne crois pas que ce soit vrai",
          explanation: "Doute : subjonctif obligatoire"
        },
        {
          spanish: "Personalmente, opino que sea necesario",
          french: "Personnellement, je pense que ce soit nécessaire",
          explanation: "Doute exprimé avec subjonctif"
        },
        {
          spanish: "Sé que es verdad",
          french: "Je sais que c'est vrai",
          explanation: "Fait certain : indicatif"
        }
      ],
      irregularities: [
        {
          pattern: "Verbes d'opinion et subjonctif",
          examples: [
            "Opino que sea necesario (doute)",
            "Supongo que venga (supposition)",
            "Imagino que esté en casa (imagination)"
          ],
          notes: "Subjonctif si doute/négation, indicatif pour faits certains"
        }
      ],
      tips: [
        "Subjonctif obligatoire après négation ou doute",
        "Intégrez des adverbes pour nuancer",
        "Indicatif pour faits certains"
      ]
    }
  },
  {
    id: "structures-emphatiques",
    title: "Structures Emphatiques",
    description: "Mettre en relief un élément pour insister, en changeant l'ordre ou utilisant des formules spécifiques",
    level: "Avancé",
    content: {
      rules: [
        "Inversion sujet-verbe ou es... que pour souligner",
        "Utilisez pour des arguments et mises en relief",
        "Lo que pour souligner un élément spécifique",
        "Es que pour expliquer ou justifier"
      ],
      examples: [
        {
          spanish: "Es el libro que quiero",
          french: "C'est le livre que je veux",
          explanation: "Emphase sur 'libro' avec es... que"
        },
        {
          spanish: "Lo que quiero es el libro",
          french: "Ce que je veux, c'est le livre",
          explanation: "Emphase avec lo que"
        },
        {
          spanish: "No es el precio, sino la calidad lo que importa",
          french: "Ce n'est pas le prix, mais la qualité qui compte",
          explanation: "Emphase argumentative avec lo que"
        },
        {
          spanish: "Es que estoy cansado",
          french: "C'est que je suis fatigué",
          explanation: "Es que pour expliquer"
        }
      ],
      irregularities: [
        {
          pattern: "Mise en relief : es que, lo que",
          examples: [
            "Es que estoy cansado (expliquer)",
            "Lo que me molesta es el ruido (souligner)",
            "Es el ruido lo que me molesta (emphase)"
          ],
          notes: "Pour emphase argumentative et explications"
        }
      ],
      tips: [
        "Utilisez pour des arguments",
        "Es que pour expliquer ou justifier",
        "Lo que pour souligner un élément spécifique"
      ]
    }
  },
  {
    id: "accords-desaccords",
    title: "Accords et Désaccords",
    description: "Exprimer l'accord (acuerdo) ou désaccord (desacuerdo) avec des connecteurs et verbes",
    level: "Intermédiaire",
    content: {
      rules: [
        "Accord : Estoy de acuerdo (Je suis d'accord), Tienes razón (Tu as raison)",
        "Désaccord : No estoy de acuerdo, Te equivocas (Tu te trompes)",
        "Ajoutez des justifications avec porque",
        "Utilisez des connecteurs pour structurer l'argumentation"
      ],
      examples: [
        {
          spanish: "Estoy de acuerdo con tu opinión",
          french: "Je suis d'accord avec ton opinion",
          explanation: "Expression d'accord simple"
        },
        {
          spanish: "No estoy de acuerdo porque...",
          french: "Je ne suis pas d'accord parce que...",
          explanation: "Désaccord avec justification"
        },
        {
          spanish: "Tienes razón en decir eso",
          french: "Tu as raison de dire cela",
          explanation: "Reconnaissance de la justesse"
        },
        {
          spanish: "Te equivocas al pensar así",
          french: "Tu te trompes de penser ainsi",
          explanation: "Désaccord poli mais ferme"
        }
      ],
      tips: [
        "Ajoutez des justifications : No estoy de acuerdo porque...",
        "Utilisez des connecteurs pour structurer",
        "Restez poli même en désaccord"
      ]
    }
  },
  {
    id: "mots-liaison",
    title: "Vocabulaire : Les Mots de Liaison",
    description: "Les mots de liaison (connecteurs) relient les idées pour une cohérence",
    level: "Intermédiaire",
    content: {
      rules: [
        "Addition : y, además (et, de plus)",
        "Opposition : pero, sin embargo (mais, cependant)",
        "Cause : porque, ya que (parce que)",
        "Utilisez pour structurer les paragraphes"
      ],
      examples: [
        {
          spanish: "Estudio mucho, pero no apruebo",
          french: "J'étudie beaucoup, mais je ne réussis pas",
          explanation: "Opposition avec pero"
        },
        {
          spanish: "Por un lado... por otro lado",
          french: "D'un côté... de l'autre",
          explanation: "Structure de paragraphe avec opposition"
        },
        {
          spanish: "Además, quiero viajar",
          french: "De plus, je veux voyager",
          explanation: "Addition d'idée avec además"
        },
        {
          spanish: "Ya que estás aquí, quédate",
          french: "Puisque tu es ici, reste",
          explanation: "Cause avec ya que"
        }
      ],
      irregularities: [
        {
          pattern: "Tournures idiomatiques courantes",
          examples: [
            "Por si acaso (au cas où)",
            "A pesar de (malgré)",
            "En cuanto a (quant à)"
          ],
          notes: "Mémorisez par thèmes (cause, concession) pour usage naturel"
        }
      ],
      tips: [
        "Utilisez pour paragraphes : por un lado... por otro lado",
        "Mémorisez par thèmes (cause, concession) pour usage naturel",
        "Variez les connecteurs pour éviter la répétition"
      ]
    }
  },
  {
    id: "obligation",
    title: "Obligation - Verbes pour la Traduire",
    description: "Exprimer l'obligation avec des verbes modaux ou structures",
    level: "Intermédiaire",
    content: {
      rules: [
        "Tener que (devoir – personnel), hay que (il faut – impersonnel), deber (devoir – moral)",
        "Deberías (conditionnel pour conseil doux)",
        "Nuances entre obligation forte et conseil",
        "Différenciez deber (obligation) et deber de (supposition)"
      ],
      examples: [
        {
          spanish: "Tengo que estudiar",
          french: "Je dois étudier",
          explanation: "Obligation personnelle avec tener que"
        },
        {
          spanish: "Hay que respetar las reglas",
          french: "Il faut respecter les règles",
          explanation: "Obligation impersonnelle avec hay que"
        },
        {
          spanish: "Deberías estudiar más",
          french: "Tu devrais étudier plus",
          explanation: "Conseil doux avec conditionnel"
        },
        {
          spanish: "Debe de estar cansado",
          french: "Il doit être fatigué",
          explanation: "Supposition avec deber de"
        }
      ],
      irregularities: [
        {
          pattern: "L'hypothèse avec deber. Les auxiliaires et semi-auxiliaires",
          examples: [
            "Debe llover (Il doit pleuvoir – probable)",
            "Solía jugar al fútbol (avoir l'habitude)",
            "Me acostumbro a levantarme temprano (s'habituer)"
          ],
          notes: "Deber pour hypothèses probables, solía pour habitudes passées"
        }
      ],
      tips: [
        "Nuances : Deberías (conditionnel pour conseil doux)",
        "Différenciez deber (obligation) et deber de (supposition)",
        "Semi-auxiliaires : solía (avoir l'habitude)"
      ]
    }
  },
  {
    id: "desir-besoin",
    title: "Je Veux, J'aimerais, J'ai Besoin de",
    description: "Exprimer le désir ou besoin avec différentes nuances",
    level: "Intermédiaire",
    content: {
      rules: [
        "Quiero (je veux), me gustaría (j'aimerais – conditionnel poli), necesito (j'ai besoin)",
        "Subjonctif après gustar pour désirs impliquant autrui",
        "Nuances de politesse entre vouloir et aimer",
        "Utilisez le conditionnel pour plus de politesse"
      ],
      examples: [
        {
          spanish: "Quiero viajar",
          french: "Je veux voyager",
          explanation: "Désir direct avec quiero"
        },
        {
          spanish: "Me gustaría que vinieras",
          french: "J'aimerais que tu viennes",
          explanation: "Désir poli avec subjonctif"
        },
        {
          spanish: "Necesito ayuda",
          french: "J'ai besoin d'aide",
          explanation: "Besoin avec necesito"
        },
        {
          spanish: "Te gustaría venir conmigo?",
          french: "Aimerais-tu venir avec moi ?",
          explanation: "Question polie avec conditionnel"
        }
      ],
      tips: [
        "Subjonctif après gustar pour désirs impliquant autrui",
        "Utilisez le conditionnel pour plus de politesse",
        "Variez les expressions selon le niveau de politesse souhaité"
      ]
    }
  },
  {
    id: "impersonnalite",
    title: "Impersonnalité (La gente...)",
    description: "Structures impersonnelles pour généraliser sans sujet spécifique",
    level: "Intermédiaire",
    content: {
      rules: [
        "Se dice que (on dit que), la gente dice (les gens disent)",
        "Évitez uno (on) – préférez se pour fluidité",
        "Utilisez pour généraliser sans attaquer",
        "Structures avec se + verbe à la 3e personne"
      ],
      examples: [
        {
          spanish: "Se vive bien en España",
          french: "On vit bien en Espagne",
          explanation: "Impersonnel avec se + 3e personne"
        },
        {
          spanish: "La gente dice que...",
          french: "Les gens disent que...",
          explanation: "Généralisation avec la gente"
        },
        {
          spanish: "Se dice que es difícil",
          french: "On dit que c'est difficile",
          explanation: "Rumeur ou opinion générale"
        },
        {
          spanish: "Aquí se come bien",
          french: "Ici on mange bien",
          explanation: "Impersonnel pour lieu ou situation"
        }
      ],
      tips: [
        "Évitez uno (on) – préférez se pour fluidité",
        "Utilisez pour généraliser sans attaquer",
        "Structures avec se + verbe à la 3e personne"
      ]
    }
  },
  {
    id: "dont-nom",
    title: "Traduction de 'dont + nom'",
    description: "Dont se traduit par de que, del que, ou relatifs",
    level: "Avancé",
    content: {
      rules: [
        "El libro del que hablo (Le livre dont je parle)",
        "La casa en la que vivo (La maison dans laquelle je vis – pour lieu)",
        "Utilisez cuyo pour possession : El hombre cuyo coche es rojo",
        "Choisissez selon le contexte : lieu, possession, référence"
      ],
      examples: [
        {
          spanish: "El libro del que hablo",
          french: "Le livre dont je parle",
          explanation: "Dont avec de que pour référence"
        },
        {
          spanish: "La casa en la que vivo",
          french: "La maison dans laquelle je vis",
          explanation: "Dont avec en la que pour lieu"
        },
        {
          spanish: "El hombre cuyo coche es rojo",
          french: "L'homme dont la voiture est rouge",
          explanation: "Dont avec cuyo pour possession"
        },
        {
          spanish: "La ciudad de la que vengo",
          french: "La ville d'où je viens",
          explanation: "Dont avec de la que pour origine"
        }
      ],
      tips: [
        "Utilisez cuyo pour possession",
        "Choisissez selon le contexte : lieu, possession, référence",
        "Attention aux prépositions : de, en, con, etc."
      ]
    }
  },
  {
    id: "habitude",
    title: "Avoir l'Habitude de",
    description: "Solía ou acostumbrarse a pour exprimer les habitudes",
    level: "Intermédiaire",
    content: {
      rules: [
        "Suelo ir al gimnasio (J'ai l'habitude d'aller à la gym)",
        "Me acostumbro a levantarme temprano (Je m'habitue à me lever tôt)",
        "Imparfait pour habitudes passées : Solía jugar al fútbol",
        "Présent pour habitudes actuelles : Suelo estudiar por la noche"
      ],
      examples: [
        {
          spanish: "Suelo ir al gimnasio",
          french: "J'ai l'habitude d'aller à la gym",
          explanation: "Habitude actuelle avec soler au présent"
        },
        {
          spanish: "Me acostumbro a levantarme temprano",
          french: "Je m'habitue à me lever tôt",
          explanation: "Processus d'habituation avec acostumbrarse"
        },
        {
          spanish: "Solía jugar al fútbol",
          french: "J'avais l'habitude de jouer au football",
          explanation: "Habitude passée avec soler à l'imparfait"
        },
        {
          spanish: "Suelo estudiar por la noche",
          french: "J'ai l'habitude d'étudier le soir",
          explanation: "Habitude actuelle avec soler"
        }
      ],
      tips: [
        "Imparfait pour habitudes passées : Solía jugar al fútbol",
        "Présent pour habitudes actuelles : Suelo estudiar por la noche",
        "Acostumbrarse pour le processus d'habituation"
      ]
    }
  },
  {
    id: "comparaisons",
    title: "Comparaisons",
    description: "Structures pour comparer avec plus, moins, aussi",
    level: "Intermédiaire",
    content: {
      rules: [
        "Más... que (plus... que), menos... que (moins... que), tan... como (aussi... que)",
        "Irrégularités : mejor (mieux), peor (pire)",
        "Superlatif : el más alto (le plus grand)",
        "Comparaison d'égalité : tan... como"
      ],
      examples: [
        {
          spanish: "Es más alto que yo",
          french: "Il est plus grand que moi",
          explanation: "Comparaison de supériorité avec más... que"
        },
        {
          spanish: "Es tan inteligente como tú",
          french: "Il est aussi intelligent que toi",
          explanation: "Comparaison d'égalité avec tan... como"
        },
        {
          spanish: "Es el más alto de la clase",
          french: "Il est le plus grand de la classe",
          explanation: "Superlatif avec el más"
        },
        {
          spanish: "Es mejor que el otro",
          french: "C'est mieux que l'autre",
          explanation: "Comparaison avec irrégulier mejor"
        }
      ],
      irregularities: [
        {
          pattern: "Adjectifs irréguliers",
          examples: [
            "bueno → mejor (bon → meilleur)",
            "malo → peor (mauvais → pire)",
            "grande → mayor (grand → plus grand)",
            "pequeño → menor (petit → plus petit)"
          ],
          notes: "Certains adjectifs ont des formes comparatives irrégulières"
        }
      ],
      tips: [
        "Superlatif : el más alto (le plus grand)",
        "Comparaison d'égalité : tan... como",
        "Attention aux adjectifs irréguliers"
      ]
    }
  },
  {
    id: "forme-negative",
    title: "Forme Négative",
    description: "Négations pour nier avec no et structures doubles",
    level: "Intermédiaire",
    content: {
      rules: [
        "No avant verbe ; double négation : no... nada (ne... rien)",
        "Sino pour corriger : No es rojo, sino azul",
        "Jamás, nunca pour renforcer la négation",
        "Structure : no + verbe + jamais/rien/personne"
      ],
      examples: [
        {
          spanish: "No tengo nada",
          french: "Je n'ai rien",
          explanation: "Double négation : no + verbe + nada"
        },
        {
          spanish: "No es rojo, sino azul",
          french: "Ce n'est pas rouge, mais bleu",
          explanation: "Correction avec sino"
        },
        {
          spanish: "No voy nunca",
          french: "Je ne vais jamais",
          explanation: "Négation renforcée avec nunca"
        },
        {
          spanish: "No veo a nadie",
          french: "Je ne vois personne",
          explanation: "Négation avec nadie (personne)"
        }
      ],
      tips: [
        "Sino pour corriger : No es rojo, sino azul",
        "Jamás, nunca pour renforcer la négation",
        "Structure : no + verbe + jamais/rien/personne"
      ]
    }
  }
];

export const syntaxExercises: SyntaxExercise[] = [
  {
    id: "ex1",
    title: "Transformation en discours rapporté",
    instruction: "Convertissez ces phrases directes en indirectes",
    level: "Avancé",
    type: "transformation",
    content: {
      question: "Transformez : 'Dijo: \"Estoy feliz\"' en discours rapporté",
      hints: [
        "Supprimez les guillemets",
        "Changez le temps : présent → imparfait",
        "Adaptez les pronoms si nécessaire",
        "Utilisez 'que' pour introduire"
      ],
      correction: "Dijo que estaba feliz",
      explanation: "Présent 'estoy' devient imparfait 'estaba' en discours rapporté"
    }
  },
  {
    id: "ex2",
    title: "Construction de phrases complexes",
    instruction: "Créez une phrase complexe en reliant deux phrases simples",
    level: "Avancé",
    type: "construction",
    content: {
      question: "Reliez 'El hombre es alto' et 'Lo vi ayer' avec une proposition relative",
      hints: [
        "Identifiez l'antécédent (el hombre)",
        "Utilisez 'que' comme pronom relatif",
        "Placez la relative après l'antécédent",
        "Accordez le verbe avec l'antécédent"
      ],
      correction: "El hombre que vi ayer es alto",
      explanation: "La proposition relative 'que vi ayer' qualifie 'el hombre'"
    }
  },
  {
    id: "ex3",
    title: "Expression d'opinions avec subjonctif",
    instruction: "Exprimez une opinion avec doute en utilisant le subjonctif",
    level: "Avancé",
    type: "choice",
    content: {
      question: "Complétez : 'No creo que ___ (ser) verdad'",
      hints: [
        "Après 'no creo que', le subjonctif est obligatoire",
        "Le verbe 'ser' au subjonctif présent",
        "Terminaison -a pour les verbes en -er",
        "Radical : se-"
      ],
      correction: "No creo que sea verdad",
      explanation: "Après négation + doute, le subjonctif 'sea' est obligatoire"
    }
  },
  {
    id: "ex4",
    title: "Mise en relief d'éléments",
    instruction: "Mettez en relief l'élément 'libro' dans la phrase",
    level: "Avancé",
    type: "transformation",
    content: {
      question: "Transformez 'Quiero el libro' en mettant l'emphase sur 'libro'",
      hints: [
        "Utilisez la structure 'es... que'",
        "Placez l'élément à souligner après 'es'",
        "Ajoutez 'que' + le reste de la phrase",
        "Structure : Es + élément + que + reste"
      ],
      correction: "Es el libro que quiero",
      explanation: "La structure 'es... que' met l'emphase sur 'el libro'"
    }
  }
];

export const syntaxTables = {
  connecteurs: {
    title: "Mots de Liaison - Connecteurs Logiques",
    headers: ["Fonction", "Espagnol", "Français", "Exemple"],
    rows: [
      ["Addition", "y, además, también", "et, de plus, aussi", "Además, quiero viajar"],
      ["Opposition", "pero, sin embargo, aunque", "mais, cependant, bien que", "Estudio pero no apruebo"],
      ["Cause", "porque, ya que, puesto que", "parce que, puisque", "Ya que estás aquí, quédate"],
      ["Conséquence", "por tanto, así que", "donc, ainsi", "No estudiaste, por tanto suspendiste"],
      ["Condition", "si, en caso de que", "si, au cas où", "Si llueve, no salgo"]
    ]
  },
  relatifs: {
    title: "Pronoms Relatifs - Usage et Fonctions",
    headers: ["Pronom", "Usage", "Exemple", "Traduction"],
    rows: [
      ["que", "Général (personnes/choses)", "La persona que vi", "La personne que j'ai vue"],
      ["quien", "Personnes, après préposition", "El amigo con quien hablo", "L'ami avec qui je parle"],
      ["cuyo", "Possession", "La mujer cuya casa es grande", "La femme dont la maison est grande"],
      ["donde", "Lieu", "La ciudad donde nací", "La ville où je suis né"],
      ["cual", "Formel, après préposition", "El tema del cual hablamos", "Le sujet dont nous parlons"]
    ]
  },
  verbesModaux: {
    title: "Verbes Modaux - Obligation et Possibilité",
    headers: ["Verbe", "Fonction", "Exemple", "Traduction"],
    rows: [
      ["tener que", "Obligation personnelle", "Tengo que estudiar", "Je dois étudier"],
      ["hay que", "Obligation impersonnelle", "Hay que respetar las reglas", "Il faut respecter les règles"],
      ["deber", "Obligation morale", "Debes ser honesto", "Tu dois être honnête"],
      ["poder", "Possibilité", "Puedo ayudarte", "Je peux t'aider"],
      ["querer", "Volonté", "Quiero viajar", "Je veux voyager"]
    ]
  }
}; 