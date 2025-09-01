export interface SerEstarSection {
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

export interface SerEstarExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'choice' | 'transformation' | 'construction' | 'translation';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const serEstarSections: SerEstarSection[] = [
  {
    id: "nuances-ser-estar",
    title: "Maîtrisez les Nuances entre Ser et Estar",
    description: "Ser exprime l'essence et la permanence, estar décrit un état temporaire ou une localisation",
    level: "Intermédiaire",
    content: {
      rules: [
        "Utilisez ser pour ce qui est inhérent (profession, nationalité, identité)",
        "Utilisez estar pour ce qui change (émotion, position, état temporaire)",
        "Ser pour l'essence et la permanence",
        "Estar pour les états temporaires et la localisation"
      ],
      examples: [
        {
          spanish: "Soy profesor",
          french: "Je suis professeur",
          explanation: "Identité permanente avec ser"
        },
        {
          spanish: "Estoy cansado",
          french: "Je suis fatigué",
          explanation: "État temporaire avec estar"
        },
        {
          spanish: "Soy francés",
          french: "Je suis français",
          explanation: "Nationalité permanente avec ser"
        },
        {
          spanish: "Estoy en Madrid",
          french: "Je suis à Madrid",
          explanation: "Localisation temporaire avec estar"
        }
      ],
      irregularities: [
        {
          pattern: "Conjugaison irrégulière",
          examples: [
            "ser : soy, eres, es, somos, sois, son",
            "estar : estoy, estás, está, estamos, estáis, están"
          ],
          notes: "Les deux verbes sont irréguliers au présent"
        }
      ],
      tips: [
        "Mémorisez DOCTOR pour ser : Description permanente, Origine, Caractéristique, Temps, Occupation, Relation",
        "Mémorisez PLACE pour estar : Position, Location, Action, Condition, Émotion",
        "Testez avec 'toujours vrai ?' (ser) vs 'maintenant ?' (estar)"
      ]
    }
  },
  {
    id: "regles-avancees",
    title: "Ser vs Estar : Règles Avancées",
    description: "Règles avancées intégrant le contexte et les exceptions",
    level: "Intermédiaire",
    content: {
      rules: [
        "Ser pour définitions ou généralités",
        "Estar pour changements perceptibles",
        "Ser pour localisation permanente d'événements",
        "Estar pour localisation temporaire de personnes"
      ],
      examples: [
        {
          spanish: "La fiesta es en Madrid",
          french: "La fête est à Madrid",
          explanation: "Localisation permanente de l'événement avec ser"
        },
        {
          spanish: "Estoy en Madrid",
          french: "Je suis à Madrid",
          explanation: "Localisation temporaire de la personne avec estar"
        },
        {
          spanish: "El museo es grande",
          french: "Le musée est grand",
          explanation: "Caractéristique permanente avec ser"
        },
        {
          spanish: "El museo está cerrado",
          french: "Le musée est fermé",
          explanation: "État temporaire avec estar"
        }
      ],
      tips: [
        "Testez avec 'toujours vrai ?' (ser) vs 'maintenant ?' (estar)",
        "Piège francophone : 'Être' n'a pas cette distinction",
        "Pratiquez des traductions inverses"
      ]
    }
  },
  {
    id: "constructions-haber",
    title: "Constructions avec Haber",
    description: "Haber est un auxiliaire pour former les temps composés et exprimer l'existence impersonnelle",
    level: "Intermédiaire",
    content: {
      rules: [
        "Temps composés : he + participe (he hablado – j'ai parlé)",
        "Impersonnel : hay (présent), había (imparfait), hubo (passé simple)",
        "Haber reste invariable à l'impersonnel",
        "Différenciez de tener (avoir possession)"
      ],
      examples: [
        {
          spanish: "Hay un libro en la mesa",
          french: "Il y a un livre sur la table",
          explanation: "Existence impersonnelle avec hay"
        },
        {
          spanish: "Había un problema",
          french: "Il y avait un problème",
          explanation: "Existence au passé avec había"
        },
        {
          spanish: "He comido",
          french: "J'ai mangé",
          explanation: "Temps composé avec he + participe"
        },
        {
          spanish: "Tengo un libro",
          french: "J'ai un livre",
          explanation: "Possession avec tener (différent de haber)"
        }
      ],
      irregularities: [
        {
          pattern: "Conjugaison impersonnelle",
          examples: [
            "hay (présent)",
            "había (imparfait)",
            "hubo (passé simple)",
            "habrá (futur)"
          ],
          notes: "Haber reste invariable à l'impersonnel"
        }
      ],
      tips: [
        "Haber reste invariable à l'impersonnel",
        "Différenciez de tener (avoir possession) : 'Tengo un libro' vs 'Hay un libro'",
        "Maîtrisez au présent d'abord"
      ]
    }
  },
  {
    id: "verbes-changement-etat",
    title: "Verbes de Changement d'État",
    description: "Ces verbes décrivent des transformations ou évolutions, souvent avec ser/estar pour nuancer",
    level: "Intermédiaire",
    content: {
      rules: [
        "Ils sont pronominaux (se + verbe)",
        "Indiquent un changement sur soi",
        "Incluent ponerse, volverse, quedarse, hacerse",
        "Choisissez selon le type de changement"
      ],
      examples: [
        {
          spanish: "Se pone nervioso",
          french: "Il devient nerveux",
          explanation: "Changement soudain/émotionnel avec ponerse"
        },
        {
          spanish: "Se vuelve loco",
          french: "Il devient fou",
          explanation: "Changement permanent/graduel avec volverse"
        },
        {
          spanish: "Se queda ciego",
          french: "Il devient aveugle",
          explanation: "Résultat d'un changement avec quedarse"
        },
        {
          spanish: "Se hace rico",
          french: "Il devient riche",
          explanation: "Changement volontaire avec hacerse"
        }
      ],
      irregularities: [
        {
          pattern: "Types de changement",
          examples: [
            "ponerse : changement soudain/émotionnel",
            "volverse : changement permanent/graduel",
            "quedarse : résultat d'un changement",
            "hacerse : changement volontaire"
          ],
          notes: "Tous avec se ; choisissez par type de changement"
        }
      ],
      tips: [
        "Ils sont pronominaux (se + verbe)",
        "Indiquent un changement sur soi",
        "Pratiquez avec adjectifs pour voir les nuances"
      ]
    }
  },
  {
    id: "passif-voix-pronominale",
    title: "Passif et Voix Pronominale",
    description: "La voix passive met l'accent sur l'action subie ; la pronominale (se) pour impersonnel ou réflexif",
    level: "Avancé",
    content: {
      rules: [
        "Passif : ser + participe (La casa es construida)",
        "Pronominale : se + verbe (Se construye la casa)",
        "La pronominale est plus courante en espagnol oral",
        "Distinguer par sujet : clair = passif, vague = impersonnel"
      ],
      examples: [
        {
          spanish: "El libro fue escrito por él",
          french: "Le livre a été écrit par lui",
          explanation: "Passif avec ser + participe + agent"
        },
        {
          spanish: "Se construye la casa",
          french: "On construit la maison",
          explanation: "Voix pronominale impersonnelle"
        },
        {
          spanish: "Se vende la casa",
          french: "La maison est vendue",
          explanation: "Se passif sans agent"
        },
        {
          spanish: "Se vive bien aquí",
          french: "On vit bien ici",
          explanation: "Se impersonnel pour généralisation"
        }
      ],
      tips: [
        "La pronominale est plus courante en espagnol oral",
        "Distinguer par sujet : clair = passif, vague = impersonnel",
        "Courant en publicités ou instructions"
      ]
    }
  },
  {
    id: "cours-basiques",
    title: "Cours Basiques : Ser vs Estar",
    description: "Révision des usages fondamentaux avec ser et estar",
    level: "Intermédiaire",
    content: {
      rules: [
        "Ser pour identité (Soy francés)",
        "Estar pour état (Estoy feliz)",
        "Devant adjectifs : Ser pour caractéristiques innées, Estar pour émotions",
        "Avec participe passé : Ser pour passif, Estar pour résultat, Haber pour composés"
      ],
      examples: [
        {
          spanish: "Es inteligente",
          french: "Il est intelligent",
          explanation: "Caractéristique innée avec ser"
        },
        {
          spanish: "Está enfadado",
          french: "Il est en colère",
          explanation: "Émotion avec estar"
        },
        {
          spanish: "Es hecho",
          french: "C'est fait",
          explanation: "Passif avec ser + participe"
        },
        {
          spanish: "Está hecho",
          french: "C'est fait",
          explanation: "État résultant avec estar + participe"
        }
      ],
      tips: [
        "Créez une liste d'adjectifs qui changent de sens",
        "Testez 'Es aburrido' (trait) vs 'Está aburrido' (état)",
        "Bilanez avec des vidéos pour la révision"
      ]
    }
  },
  {
    id: "traduire-il-y-a",
    title: "Traduire 'Il y a' et 'Avoir'",
    description: "Traduire 'il y a' et 'avoir' avec haber et tener",
    level: "Intermédiaire",
    content: {
      rules: [
        "Il y a : Hay (présent), habrá (futur), había (imparfait)",
        "Avoir : Tener pour possession, haber pour auxiliaire ou existence",
        "Tener est personnel (sujet + tener)",
        "Haber impersonnel (hay sans sujet)"
      ],
      examples: [
        {
          spanish: "Hay problemas",
          french: "Il y a des problèmes",
          explanation: "Existence impersonnelle avec hay"
        },
        {
          spanish: "Tengo hambre",
          french: "J'ai faim",
          explanation: "Possession avec tener"
        },
        {
          spanish: "He comido",
          french: "J'ai mangé",
          explanation: "Auxiliaire avec haber + participe"
        },
        {
          spanish: "Habrá una fiesta",
          french: "Il y aura une fête",
          explanation: "Existence au futur avec habrá"
        }
      ],
      tips: [
        "Tener est personnel (sujet + tener), haber impersonnel (hay sans sujet)",
        "Maîtrisez au présent d'abord",
        "Avec participe : Haber + participe pour perfectif"
      ]
    }
  },
  {
    id: "nuances-adjectifs",
    title: "Nuances Ser/Estar avec Adjectifs",
    description: "Certains adjectifs changent de sens selon le verbe utilisé",
    level: "Avancé",
    content: {
      rules: [
        "Certains adjectifs changent de sens selon ser ou estar",
        "Ser pour traits permanents, estar pour états temporaires",
        "En descriptions physiques : ser pour traits, estar pour apparence momentanée",
        "Contexte culturel important pour comprendre les nuances"
      ],
      examples: [
        {
          spanish: "Es listo",
          french: "Il est malin",
          explanation: "Trait permanent avec ser"
        },
        {
          spanish: "Está listo",
          french: "Il est prêt",
          explanation: "État temporaire avec estar"
        },
        {
          spanish: "Es verde",
          french: "C'est vert",
          explanation: "Couleur inhérente avec ser"
        },
        {
          spanish: "Está verde",
          french: "C'est vert",
          explanation: "Immature (comme un fruit) avec estar"
        }
      ],
      irregularities: [
        {
          pattern: "Adjectifs doubles",
          examples: [
            "bueno : bon (ser) vs en forme (estar)",
            "rico : riche (ser) vs délicieux (estar)",
            "vivo : vivant (ser) vs vif (estar)",
            "fresco : frais (ser) vs impertinent (estar)"
          ],
          notes: "Listez 10 adjectifs doubles pour maîtriser les nuances"
        }
      ],
      tips: [
        "Listez 10 adjectifs doubles (bueno : bon vs en forme ; rico : riche vs délicieux)",
        "Contexte culturel : En descriptions physiques, ser pour traits, estar pour apparence momentanée",
        "Pratiquez avec des contextes variés"
      ]
    }
  },
  {
    id: "hay-vs-estar",
    title: "Hay, Había, Hubo vs Estar",
    description: "Hay (de haber) pour existence ; estar pour localisation précise",
    level: "Avancé",
    content: {
      rules: [
        "Hay pour existence, estar pour localisation précise",
        "Había pour habitude au passé, hubo pour événement ponctuel",
        "Hubo pour actions uniques",
        "Évitez de confondre avec estar pour états"
      ],
      examples: [
        {
          spanish: "Hay un parque aquí",
          french: "Il y a un parc ici",
          explanation: "Existence avec hay"
        },
        {
          spanish: "El parque está aquí",
          french: "Le parc est ici",
          explanation: "Position précise avec estar"
        },
        {
          spanish: "Hubo una explosión",
          french: "Il y a eu une explosion",
          explanation: "Événement ponctuel avec hubo"
        },
        {
          spanish: "Había muchos árboles",
          french: "Il y avait beaucoup d'arbres",
          explanation: "Habitude au passé avec había"
        }
      ],
      tips: [
        "Hubo pour actions uniques : 'Hubo una explosión'",
        "Évitez de confondre avec estar pour états",
        "Hay pour existence générale, estar pour position spécifique"
      ]
    }
  },
  {
    id: "verbes-changement-detailles",
    title: "Volverse, Ponerse, Quedarse, Hacerse",
    description: "Verbes pronominaux pour différents types de changements",
    level: "Avancé",
    content: {
      rules: [
        "Volverse : Changement permanent/graduel",
        "Ponerse : Changement soudain/émotionnel",
        "Quedarse : Résultat d'un changement",
        "Hacerse : Changement volontaire"
      ],
      examples: [
        {
          spanish: "Se hace amigo",
          french: "Il se fait ami",
          explanation: "Changement intentionnel avec hacerse"
        },
        {
          spanish: "Se pone rojo",
          french: "Il rougit",
          explanation: "Changement soudain avec ponerse"
        },
        {
          spanish: "Se vuelve loco",
          french: "Il devient fou",
          explanation: "Changement permanent avec volverse"
        },
        {
          spanish: "Se queda ciego",
          french: "Il devient aveugle",
          explanation: "Résultat d'un changement avec quedarse"
        }
      ],
      tips: [
        "Tous avec se ; choisissez par type de changement",
        "Exemple : 'Se hace amigo' (intentionnel)",
        "Pratiquez avec des contextes variés"
      ]
    }
  },
  {
    id: "ser-vs-estar-participe",
    title: "Ser + Participe vs Estar + Participe",
    description: "Différences entre passif vrai et état résultant",
    level: "Avancé",
    content: {
      rules: [
        "Ser + participe : Passif vrai, focus sur agent",
        "Estar + participe : État résultant, sans agent",
        "Ser implique action, estar décrit résultat",
        "Pas d'accord au féminin/pluriel avec estar"
      ],
      examples: [
        {
          spanish: "Es escrito por el autor",
          french: "C'est écrit par l'auteur",
          explanation: "Passif vrai avec ser + agent"
        },
        {
          spanish: "Está escrito",
          french: "C'est écrit",
          explanation: "État résultant avec estar, sans agent"
        },
        {
          spanish: "Es construida por los obreros",
          french: "Elle est construite par les ouvriers",
          explanation: "Passif avec accord au féminin"
        },
        {
          spanish: "Está roto",
          french: "C'est cassé",
          explanation: "État avec estar, pas d'accord"
        }
      ],
      tips: [
        "Ser implique action ; estar décrit résultat",
        "Piège : Pas d'accord au féminin/pluriel avec estar (Está roto)",
        "Ser + participe = passif, estar + participe = état"
      ]
    }
  },
  {
    id: "se-passif-impersonnel",
    title: "Se Passif, Se Impersonnel",
    description: "Distinctions entre se passif et se impersonnel",
    level: "Avancé",
    content: {
      rules: [
        "Se passif : Équivalent passif sans agent, accord avec sujet",
        "Se impersonnel : Généralisation, pas d'accord",
        "Distinguez par sujet : clair = passif, vague = impersonnel",
        "Courant en publicités ou instructions"
      ],
      examples: [
        {
          spanish: "Se vende la casa",
          french: "La maison est vendue",
          explanation: "Se passif avec accord au féminin"
        },
        {
          spanish: "Se vive bien aquí",
          french: "On vit bien ici",
          explanation: "Se impersonnel pour généralisation"
        },
        {
          spanish: "Se construyen casas",
          french: "Des maisons sont construites",
          explanation: "Se passif avec accord au pluriel"
        },
        {
          spanish: "Se dice que...",
          french: "On dit que...",
          explanation: "Se impersonnel pour rumeur"
        }
      ],
      tips: [
        "Distinguez par sujet : si sujet clair, passif ; si vague, impersonnel",
        "Courant en publicités ou instructions",
        "Se passif = accord, se impersonnel = pas d'accord"
      ]
    }
  }
];

export const serEstarExercises: SerEstarExercise[] = [
  {
    id: "ex1",
    title: "Choisir ser/estar",
    instruction: "Complétez les phrases avec ser ou estar et justifiez votre choix",
    level: "Intermédiaire",
    type: "choice",
    content: {
      question: "Yo ___ (ser/estar) profesor, pero hoy ___ (ser/estar) enfermo",
      hints: [
        "Profesor = profession (permanente)",
        "Hoy enfermo = état temporaire",
        "Utilisez DOCTOR pour ser, PLACE pour estar",
        "Testez : 'toujours vrai ?' vs 'maintenant ?'"
      ],
      correction: "Yo SOY profesor, pero hoy ESTOY enfermo",
      explanation: "SOY pour profession permanente, ESTOY pour état temporaire"
    }
  },
  {
    id: "ex2",
    title: "Former des phrases avec haber",
    instruction: "Créez des phrases avec hay/había/hubo et temps composés",
    level: "Intermédiaire",
    type: "construction",
    content: {
      question: "___ un accidente ayer (complétez avec la forme appropriée de haber)",
      hints: [
        "Ayer = passé",
        "Accidente = événement ponctuel",
        "Pour événement unique au passé",
        "Forme impersonnelle de haber"
      ],
      correction: "HUBO un accidente ayer",
      explanation: "HUBO pour événement ponctuel au passé simple"
    }
  },
  {
    id: "ex3",
    title: "Transformation en passif",
    instruction: "Transformez des phrases actives en passives avec ser/se",
    level: "Avancé",
    type: "transformation",
    content: {
      question: "Transformez 'Los obreros construyen la casa' en passif",
      hints: [
        "Utilisez ser + participe",
        "Participe de construir = construida",
        "Accord au féminin singulier",
        "Ordre : sujet + ser + participe"
      ],
      correction: "La casa es construida por los obreros",
      explanation: "Passif avec ser + participe + agent introduit par por"
    }
  },
  {
    id: "ex4",
    title: "Décrire un changement",
    instruction: "Décrivez un changement avec volverse/ponerse/etc., en incluant des adjectifs",
    level: "Avancé",
    type: "construction",
    content: {
      question: "Décrivez : 'Il devient nerveux quand il parle en public'",
      hints: [
        "Changement soudain/émotionnel",
        "Utilisez ponerse + adjectif",
        "Structure : se pone + adjectif + cuando",
        "Nervioso = adjectif masculin"
      ],
      correction: "Se pone nervioso cuando habla en público",
      explanation: "Ponerse pour changement soudain/émotionnel + adjectif"
    }
  }
];

export const serEstarTables = {
  serVsEstar: {
    title: "Ser vs Estar - Règles Fondamentales",
    headers: ["Catégorie", "Ser", "Estar", "Exemple"],
    rows: [
      ["Identité", "Soy francés", "Estoy feliz", "Nationalité vs Émotion"],
      ["Profession", "Soy profesor", "Estoy cansado", "Métier vs État"],
      ["Caractéristiques", "Es inteligente", "Está enfadado", "Trait vs Émotion"],
      ["Localisation", "La fiesta es en Madrid", "Estoy en Madrid", "Événement vs Personne"],
      ["Temps", "Es lunes", "Estoy de vacaciones", "Jour vs Période"]
    ]
  },
  haber: {
    title: "Haber - Usages et Conjugaison",
    headers: ["Fonction", "Présent", "Imparfait", "Passé Simple", "Futur"],
    rows: [
      ["Existence", "hay", "había", "hubo", "habrá"],
      ["Temps composé", "he", "había", "hube", "habré"],
      ["Exemple", "Hay un libro", "Había un problema", "Hubo un accidente", "Habrá una fiesta"]
    ]
  },
  verbesChangement: {
    title: "Verbes de Changement d'État",
    headers: ["Verbe", "Type de Changement", "Exemple", "Traduction"],
    rows: [
      ["ponerse", "Soudain/Émotionnel", "Se pone rojo", "Il rougit"],
      ["volverse", "Permanent/Graduel", "Se vuelve loco", "Il devient fou"],
      ["quedarse", "Résultat", "Se queda ciego", "Il devient aveugle"],
      ["hacerse", "Volontaire", "Se hace rico", "Il devient riche"]
    ]
  }
}; 