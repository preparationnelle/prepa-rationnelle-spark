export interface PrepositionSection {
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

export interface PrepositionExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'completion' | 'identification' | 'transformation' | 'construction';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const prepositionSections: PrepositionSection[] = [
  {
    id: "emploi-precis",
    title: "Emploi Précis des Prépositions et Locutions",
    description: "Les prépositions et locutions indiquent des relations spatiales, temporelles ou logiques",
    level: "Tous niveaux",
    content: {
      rules: [
        "Chaque préposition a des sens multiples, dépendant du contexte",
        "Les locutions sont des groupes fixes agissant comme une préposition unique",
        "Leur emploi précis évite les ambiguïtés et rend le discours fluide",
        "Ne traduisez pas littéralement du français"
      ],
      examples: [
        {
          spanish: "Voy a la casa",
          french: "Je vais à la maison",
          explanation: "Direction avec a"
        },
        {
          spanish: "A pesar de la lluvia",
          french: "Malgré la pluie",
          explanation: "Locution pour concession"
        },
        {
          spanish: "En tren",
          french: "En train",
          explanation: "Moyen de transport avec en"
        }
      ],
      tips: [
        "Mémorisez par catégories (lieu, temps, cause)",
        "Comparez au français pour identifier les différences",
        "Piège courant : Ne traduisez pas littéralement",
        "'En train' se dit 'en tren', pas 'en tren'"
      ]
    }
  },
  {
    id: "prepositions-base",
    title: "Prépositions A, DE, EN, CON",
    description: "Ces quatre prépositions de base couvrent la majorité des usages quotidiens",
    level: "Débutant",
    content: {
      rules: [
        "A : Direction, temps précis, destinataire",
        "DE : Origine, possession, matière",
        "EN : Lieu général, temps étendu, moyen",
        "CON : Accompagnement, manière, instrument"
      ],
      examples: [
        {
          spanish: "Voy a Madrid",
          french: "Je vais à Madrid",
          explanation: "Direction avec a"
        },
        {
          spanish: "A las dos",
          french: "À deux heures",
          explanation: "Temps précis avec a"
        },
        {
          spanish: "Vengo de Francia",
          french: "Je viens de France",
          explanation: "Origine avec de"
        },
        {
          spanish: "La casa de Juan",
          french: "La maison de Juan",
          explanation: "Possession avec de"
        },
        {
          spanish: "Vivo en España",
          french: "Je vis en Espagne",
          explanation: "Lieu général avec en"
        },
        {
          spanish: "En verano",
          french: "En été",
          explanation: "Temps étendu avec en"
        },
        {
          spanish: "Voy con amigos",
          french: "Je vais avec des amis",
          explanation: "Accompagnement avec con"
        },
        {
          spanish: "Con cuidado",
          french: "Avec soin",
          explanation: "Manière avec con"
        }
      ],
      tips: [
        "Utilisez un tableau mental : A (vers), DE (depuis), EN (dans/sur), CON (avec)",
        "Pratiquez avec des phrases personnelles",
        "A pour direction et temps précis",
        "DE pour origine et possession"
      ]
    }
  },
  {
    id: "locutions-prepositionnelles",
    title: "Locutions Prépositionnelles",
    description: "Groupes de mots fonctionnant comme une préposition unique, pour exprimer des idées complexes",
    level: "Intermédiaire",
    content: {
      rules: [
        "Fixes et idiomatiques",
        "Agissent comme une préposition unique",
        "Pour exprimer des idées complexes",
        "Ne se décomposent pas"
      ],
      examples: [
        {
          spanish: "Debido a la huelga, no hay tren",
          french: "À cause de la grève, il n'y a pas de train",
          explanation: "Locution de cause"
        },
        {
          spanish: "Frente a la casa",
          french: "En face de la maison",
          explanation: "Locution de position"
        },
        {
          spanish: "A pesar de todo",
          french: "Malgré tout",
          explanation: "Locution de concession"
        },
        {
          spanish: "En cuanto a ti",
          french: "En ce qui te concerne",
          explanation: "Locution de référence"
        }
      ],
      irregularities: [
        {
          pattern: "Locutions par thème",
          examples: [
            "Cause : debido a, a causa de",
            "Opposition : a pesar de, pese a",
            "Position : frente a, cerca de",
            "Référence : en cuanto a, respecto a"
          ],
          notes: "Listez-les par thème pour faciliter la mémorisation"
        }
      ],
      tips: [
        "Listez-les par thème (cause : debido a, a causa de ; opposition : a pesar de, pese a)",
        "Piège : Elles ne se décomposent pas – apprenez-les entières",
        "Pratiquez dans des contextes variés",
        "Intégrez dans des dialogues pour la naturalité"
      ]
    }
  },
  {
    id: "regimes-verbaux",
    title: "Régimes Verbaux",
    description: "Certains verbes exigent une préposition spécifique avant leur complément (régime)",
    level: "Intermédiaire",
    content: {
      rules: [
        "Apprenez par verbe",
        "La préposition est fixe et obligatoire",
        "Différent du français dans de nombreux cas",
        "Essentiel pour la fluidité du discours"
      ],
      examples: [
        {
          spanish: "Pienso en ti",
          french: "Je pense à toi",
          explanation: "Pensar en + complément"
        },
        {
          spanish: "Habla de política",
          french: "Il parle de politique",
          explanation: "Hablar de + complément"
        },
        {
          spanish: "Soñar con el futuro",
          french: "Rêver de l'avenir",
          explanation: "Soñar con + complément"
        },
        {
          spanish: "Esperar a alguien",
          french: "Attendre quelqu'un",
          explanation: "Esperar a + complément (différent du français)"
        }
      ],
      irregularities: [
        {
          pattern: "Verbes courants et leur régime",
          examples: [
            "pensar en (penser à)",
            "soñar con (rêver de)",
            "hablar de (parler de)",
            "esperar a (attendre)",
            "depender de (dépendre de)"
          ],
          notes: "Créez une liste de verbes courants et leur régime"
        }
      ],
      tips: [
        "Créez une liste de verbes courants et leur régime",
        "Différence avec français : 'Attendre' est 'esperar a'",
        "Pratiquez avec des phrases complètes",
        "Mémorisez les exceptions"
      ]
    }
  },
  {
    id: "expressions-figees",
    title: "Expressions Figées",
    description: "Phrases ou idioms où la préposition est fixe et non modifiable",
    level: "Intermédiaire",
    content: {
      rules: [
        "Idiomatiques et non modifiables",
        "La préposition est fixe",
        "Apprennent en contexte",
        "Essentielles pour la naturalité"
      ],
      examples: [
        {
          spanish: "Lo sé de memoria",
          french: "Je le sais par cœur",
          explanation: "Expression figée avec de"
        },
        {
          spanish: "Voy en coche",
          french: "Je vais en voiture",
          explanation: "Moyen de transport avec en"
        },
        {
          spanish: "A pie",
          french: "À pied",
          explanation: "Expression figée avec a"
        },
        {
          spanish: "En serio",
          french: "Sérieusement",
          explanation: "Expression figée avec en"
        }
      ],
      irregularities: [
        {
          pattern: "Expressions par thème",
          examples: [
            "Transport : en avión, a pie, en coche",
            "Mémoire : de memoria, de corazón",
            "Manière : en serio, con cuidado",
            "Temps : a tiempo, de vez en cuando"
          ],
          notes: "Mémorisez en contexte pour faciliter l'apprentissage"
        }
      ],
      tips: [
        "Mémorisez en contexte (transport : en avión, a pie)",
        "Piège francophone : 'Par' pour moyen est souvent 'en' ou 'con'",
        "Intégrez dans des dialogues pour la naturalité",
        "Pratiquez avec des situations quotidiennes"
      ]
    }
  },
  {
    id: "cours-revision",
    title: "Cours de Révision des Prépositions",
    description: "Révision des usages spécifiques et des différences subtiles",
    level: "Tous niveaux",
    content: {
      rules: [
        "Prépositions de base : a, de, en, con, por, para",
        "Prépositions et articles : contractions obligatoires",
        "A ou EN devant un complément de lieu",
        "Les prépositions pour l'instrument et le moyen",
        "A, en et por : faire la différence",
        "Prépositions Por et Para : Pour / Par"
      ],
      examples: [
        {
          spanish: "Voy al cine",
          french: "Je vais au cinéma",
          explanation: "Contraction a + el = al"
        },
        {
          spanish: "Voy a la escuela",
          french: "Je vais à l'école",
          explanation: "A pour direction/mouvement"
        },
        {
          spanish: "Estoy en la escuela",
          french: "Je suis à l'école",
          explanation: "En pour position statique"
        },
        {
          spanish: "Escribo con un lápiz",
          french: "J'écris avec un crayon",
          explanation: "Con pour instrument"
        },
        {
          spanish: "Enviado por correo",
          french: "Envoyé par courrier",
          explanation: "Por pour moyen passif"
        }
      ],
      tips: [
        "Révision : Utilisez des exemples contrastés pour différencier por/para",
        "A (destination), en (lieu), por (cause/parcours)",
        "Con pour instrument, por pour moyen passif",
        "Contractions obligatoires : a + el = al, de + el = del"
      ]
    }
  },
  {
    id: "a-personnel-infinitif",
    title: "A Personnel, A + Infinitif",
    description: "Usages spécifiques de la préposition A avec personnes et infinitifs",
    level: "Intermédiaire",
    content: {
      rules: [
        "A personnel : Obligatoire avant un complément direct humain/animé",
        "A + infinitif : Pour but ou après verbes de mouvement",
        "Évite la confusion et clarifie le sens",
        "Pas pour animaux non personnalisés"
      ],
      examples: [
        {
          spanish: "Veo a mi amigo",
          french: "Je vois mon ami",
          explanation: "A personnel obligatoire pour personne"
        },
        {
          spanish: "Veo el libro",
          french: "Je vois le livre",
          explanation: "Pas d'a pour chose"
        },
        {
          spanish: "Voy a comprar",
          french: "Je vais acheter",
          explanation: "A + infinitif pour but"
        },
        {
          spanish: "Amo a mi hermana",
          french: "J'aime ma sœur",
          explanation: "A personnel évite confusion (pas cannibale !)"
        }
      ],
      tips: [
        "A personnel évite confusion (Amo a mi hermana – J'aime ma sœur, pas cannibale !)",
        "Piège : Pas pour animaux non personnalisés",
        "A + infinitif pour but ou après verbes de mouvement",
        "Pratiquez avec des verbes de perception"
      ]
    }
  },
  {
    id: "de-partitif-infinitif",
    title: "DE Partitif, DE + Infinitif",
    description: "Usages de DE pour les quantités et les séquences temporelles",
    level: "Intermédiaire",
    content: {
      rules: [
        "DE partitif : Pour quantité indéfinie",
        "DE + infinitif : Après verbes comme acabar de, tratar de",
        "Partitif comme 'du/de la' en français",
        "Avec infinitif pour séquences temporelles"
      ],
      examples: [
        {
          spanish: "Un poco de agua",
          french: "Un peu d'eau",
          explanation: "DE partitif pour quantité indéfinie"
        },
        {
          spanish: "Acabo de llegar",
          french: "Je viens d'arriver",
          explanation: "DE + infinitif après acabar de"
        },
        {
          spanish: "Trato de ayudarte",
          french: "J'essaie de t'aider",
          explanation: "DE + infinitif après tratar de"
        },
        {
          spanish: "Mucho de trabajo",
          french: "Beaucoup de travail",
          explanation: "DE partitif pour quantité"
        }
      ],
      tips: [
        "Partitif comme 'du/de la' en français",
        "Avec infinitif pour séquences temporelles",
        "Verbes courants : acabar de, tratar de, dejar de",
        "Pratiquez avec des quantités variées"
      ]
    }
  },
  {
    id: "contractions-al-del",
    title: "Contractions AL, DEL",
    description: "Contractions obligatoires avec les articles définis",
    level: "Débutant",
    content: {
      rules: [
        "A + el = al",
        "DE + el = del",
        "Pas avec elle/elles",
        "Automatique en oral"
      ],
      examples: [
        {
          spanish: "Voy al supermercado",
          french: "Je vais au supermarché",
          explanation: "A + el = al"
        },
        {
          spanish: "El libro del profesor",
          french: "Le livre du professeur",
          explanation: "DE + el = del"
        },
        {
          spanish: "Voy a la escuela",
          french: "Je vais à l'école",
          explanation: "Pas de contraction avec la"
        },
        {
          spanish: "Voy a los museos",
          french: "Je vais aux musées",
          explanation: "Pas de contraction avec los"
        }
      ],
      irregularities: [
        {
          pattern: "Exceptions",
          examples: [
            "Pas de contraction avec por el",
            "Pas avec elle/elles (a la, de la, a las, de las)",
            "Pas avec les (a los, de los)"
          ],
          notes: "Exception : Pas de contraction avec por el"
        }
      ],
      tips: [
        "Automatique en oral ; oubliez pas en écrit",
        "Exception : Pas de contraction avec por el",
        "Pratiquez avec des noms masculins singuliers",
        "Mémorisez les cas sans contraction"
      ]
    }
  },
  {
    id: "verbes-double-regime",
    title: "Verbes à Double Régime",
    description: "Verbes changeant de sens selon la préposition utilisée",
    level: "Avancé",
    content: {
      rules: [
        "Le sens change selon la préposition",
        "Nuances subtiles pour avancés",
        "Essentiel pour la précision",
        "Pratiquez avec des contextes variés"
      ],
      examples: [
        {
          spanish: "Pienso en el problema",
          french: "Je pense au problème",
          explanation: "Pensar en (penser à – réfléchir)"
        },
        {
          spanish: "¿Qué piensas de él?",
          french: "Que penses-tu de lui ?",
          explanation: "Pensar de (penser de – opinion)"
        },
        {
          spanish: "Soñar con el futuro",
          french: "Rêver de l'avenir",
          explanation: "Soñar con (rêver de)"
        },
        {
          spanish: "Soñar de la paz",
          french: "Rêver de la paix",
          explanation: "Soñar de (rêver de – aspiration)"
        }
      ],
      irregularities: [
        {
          pattern: "Verbes courants à double régime",
          examples: [
            "pensar en/de",
            "soñar con/de",
            "depender de",
            "cuidar de/a"
          ],
          notes: "Listez-les pour maîtriser les nuances subtiles"
        }
      ],
      tips: [
        "Listez-les (soñar con/de, depender de, etc.)",
        "Nuances subtiles pour avancés",
        "Pratiquez avec des contextes variés",
        "Mémorisez les différences de sens"
      ]
    }
  },
  {
    id: "expressions-idiomatiques",
    title: "Expressions Idiomatiques Fréquentes",
    description: "Expressions fixes utilisées quotidiennement",
    level: "Intermédiaire",
    content: {
      rules: [
        "Expressions fixes et non modifiables",
        "Utilisées quotidiennement",
        "Pour la naturalité du discours",
        "Intégrez dans des dialogues"
      ],
      examples: [
        {
          spanish: "A mano",
          french: "À la main",
          explanation: "Expression fixe avec a"
        },
        {
          spanish: "En serio",
          french: "Sérieusement",
          explanation: "Expression fixe avec en"
        },
        {
          spanish: "Por supuesto",
          french: "Bien sûr",
          explanation: "Expression fixe avec por"
        },
        {
          spanish: "En casa",
          french: "À la maison",
          explanation: "Expression fixe avec en"
        }
      ],
      irregularities: [
        {
          pattern: "Expressions par fréquence",
          examples: [
            "Quotidien : en casa, a tiempo",
            "Formel : por favor, de acuerdo",
            "Familier : en serio, por supuesto",
            "Temps : de vez en cuando, a menudo"
          ],
          notes: "Apprenez par fréquence d'utilisation"
        }
      ],
      tips: [
        "Apprenez par fréquence (quotidien : en casa, a tiempo)",
        "Intégrez dans dialogues pour naturalité",
        "Pratiquez dans des situations réelles",
        "Mémorisez les plus courantes d'abord"
      ]
    }
  },
  {
    id: "moi-toi-apres-preposition",
    title: "Moi et Toi après une Préposition",
    description: "Formes spéciales des pronoms après les prépositions",
    level: "Intermédiaire",
    content: {
      rules: [
        "Prépositions + pronom tonique",
        "Formes spéciales pour 1re/2e personne",
        "Exceptions pour certaines prépositions",
        "Essentiel pour la correction"
      ],
      examples: [
        {
          spanish: "Conmigo",
          french: "Avec moi",
          explanation: "Con + mí = conmigo"
        },
        {
          spanish: "Contigo",
          french: "Avec toi",
          explanation: "Con + ti = contigo"
        },
        {
          spanish: "Entre tú y yo",
          french: "Entre toi et moi",
          explanation: "Exception : pas de forme spéciale"
        },
        {
          spanish: "Sin ti",
          french: "Sans toi",
          explanation: "Sin + ti = sin ti"
        }
      ],
      irregularities: [
        {
          pattern: "Formes spéciales",
          examples: [
            "conmigo (con + mí)",
            "contigo (con + ti)",
            "sin ti (sin + ti)",
            "para mí/ti (para + mí/ti)"
          ],
          notes: "Formes spéciales pour 1re/2e personne"
        }
      ],
      tips: [
        "Formes spéciales pour 1re/2e personne (conmigo, sin ti)",
        "Piège : Pas con yo",
        "Exception : entre tú y yo",
        "Pratiquez avec des prépositions courantes"
      ]
    }
  }
];

export const prepositionExercises: PrepositionExercise[] = [
  {
    id: "ex1",
    title: "Compléter avec prépositions",
    instruction: "Remplissez les phrases vides avec les prépositions appropriées",
    level: "Intermédiaire",
    type: "completion",
    content: {
      question: "Voy ___ Madrid ___ tren ___ ver a mi familia",
      hints: [
        "Madrid = destination (direction)",
        "Tren = moyen de transport",
        "Ver a mi familia = but/objectif",
        "Pensez aux usages de base : a, en, para/por"
      ],
      correction: "Voy A Madrid EN tren PARA ver a mi familia",
      explanation: "A pour direction, EN pour moyen de transport, PARA pour but"
    }
  },
  {
    id: "ex2",
    title: "Identifier régimes verbaux",
    instruction: "Listez le régime de verbes et créez des phrases",
    level: "Intermédiaire",
    type: "identification",
    content: {
      question: "Pour le verbe 'soñar', utilisez les prépositions 'con' et 'de' dans des phrases différentes",
      hints: [
        "Soñar con = rêver de (rêve nocturne)",
        "Soñar de = rêver de (aspiration)",
        "Créez des contextes différents",
        "Pensez à des situations concrètes"
      ],
      correction: "Soño con el futuro (rêve nocturne) / Sueño de la paz mundial (aspiration)",
      explanation: "Con pour rêve nocturne, de pour aspiration ou désir"
    }
  },
  {
    id: "ex3",
    title: "Transformer des phrases françaises",
    instruction: "Transformez des phrases françaises en espagnol, en corrigeant por/para",
    level: "Avancé",
    type: "transformation",
    content: {
      question: "Transformez 'Je vais en Espagne en avion pour affaires' en espagnol",
      hints: [
        "En Espagne = destination",
        "En avion = moyen de transport",
        "Pour affaires = cause/motif",
        "Distinguer por (cause) et para (but)"
      ],
      correction: "Voy a España en avión por negocios",
      explanation: "A pour destination, EN pour moyen, POR pour cause/motif"
    }
  },
  {
    id: "ex4",
    title: "Écrire un paragraphe descriptif",
    instruction: "Écrivez un paragraphe utilisant 5 locutions et contractions",
    level: "Avancé",
    type: "construction",
    content: {
      question: "Décrivez votre ville en utilisant : al, del, a pesar de, debido a, en cuanto a",
      hints: [
        "Al = contraction a + el",
        "Del = contraction de + el",
        "A pesar de = malgré",
        "Debido a = à cause de",
        "En cuanto a = en ce qui concerne"
      ],
      correction: "Vivo al norte de la ciudad. Del centro al barrio hay 20 minutos. A pesar de la distancia, me gusta. Debido al transporte público, es fácil moverse. En cuanto a la vida nocturna, es animada.",
      explanation: "Utilisation correcte des contractions et locutions dans un contexte descriptif"
    }
  }
];

export const prepositionTables = {
  prepositionsBase: {
    title: "Prépositions de Base - Usages Principaux",
    headers: ["Préposition", "Usage Principal", "Exemple", "Traduction"],
    rows: [
      ["A", "Direction, temps précis", "Voy a Madrid", "Je vais à Madrid"],
      ["DE", "Origine, possession", "Vengo de Francia", "Je viens de France"],
      ["EN", "Lieu général, moyen", "Vivo en España", "Je vis en Espagne"],
      ["CON", "Accompagnement, instrument", "Voy con amigos", "Je vais avec des amis"],
      ["POR", "Cause, parcours, échange", "Por amor", "Par amour"],
      ["PARA", "But, destinataire", "Para ti", "Pour toi"]
    ]
  },
  contractions: {
    title: "Contractions Obligatoires",
    headers: ["Contraction", "Formation", "Exemple", "Traduction"],
    rows: [
      ["AL", "A + EL", "Voy al cine", "Je vais au cinéma"],
      ["DEL", "DE + EL", "El libro del profesor", "Le livre du professeur"],
      ["A LA", "A + LA", "Voy a la escuela", "Je vais à l'école"],
      ["DE LA", "DE + LA", "La casa de la familia", "La maison de la famille"]
    ]
  },
  locutionsFrequentes: {
    title: "Locutions Prépositionnelles Fréquentes",
    headers: ["Locution", "Sens", "Exemple", "Traduction"],
    rows: [
      ["A pesar de", "Malgré", "A pesar de todo", "Malgré tout"],
      ["Debido a", "À cause de", "Debido a la lluvia", "À cause de la pluie"],
      ["Frente a", "En face de", "Frente a la casa", "En face de la maison"],
      ["En cuanto a", "En ce qui concerne", "En cuanto a ti", "En ce qui te concerne"],
      ["A causa de", "À cause de", "A causa del viento", "À cause du vent"]
    ]
  }
}; 