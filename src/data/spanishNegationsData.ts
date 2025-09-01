export interface NegationSection {
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

export interface NegationExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'transformation' | 'completion' | 'comparison' | 'creation';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const negationSections: NegationSection[] = [
  {
    id: "formes-negatives",
    title: "Formes Négatives",
    description: "Transformer des affirmations en négations avec la particule no",
    level: "Débutant",
    content: {
      rules: [
        "Placez no juste avant le verbe principal pour nier l'action",
        "Si le verbe est conjugué, no le précède directement",
        "Pour les phrases impératives ou infinitives, no reste avant",
        "Pensez à no comme un 'interrupteur' qui inverse le sens du verbe"
      ],
      examples: [
        {
          spanish: "Habla español",
          french: "Il parle espagnol",
          explanation: "Affirmation simple"
        },
        {
          spanish: "No habla español",
          french: "Il ne parle pas espagnol",
          explanation: "Négation avec no avant le verbe"
        },
        {
          spanish: "Quiero comer",
          french: "Je veux manger",
          explanation: "Affirmation avec infinitif"
        },
        {
          spanish: "No quiero comer",
          french: "Je ne veux pas manger",
          explanation: "Négation avec no avant le verbe principal"
        },
        {
          spanish: "Vamos al parque",
          french: "Nous allons au parc",
          explanation: "Affirmation au présent"
        },
        {
          spanish: "No vamos al parque",
          french: "Nous n'allons pas au parc",
          explanation: "Négation simple et directe"
        }
      ],
      tips: [
        "Pratiquez en transformant des phrases positives simples",
        "Piège : Ne placez pas no après le verbe, comme en français parfois",
        "Pour les débutants, concentrez-vous sur la négation simple",
        "La forme négative étendue inclut des adverbes ou pronoms"
      ]
    }
  },
  {
    id: "negations-simples-doubles",
    title: "Négations Simples et Doubles",
    description: "Distinguer les négations simples et les doubles négations renforcées",
    level: "Intermédiaire",
    content: {
      rules: [
        "Négations simples : utilisent seulement no pour nier le verbe",
        "Négations doubles : renforcent la négation avec des mots négatifs",
        "Si un mot négatif suit le verbe, no reste obligatoire avant le verbe",
        "La double négation est la norme en espagnol pour l'emphase"
      ],
      examples: [
        {
          spanish: "No voy",
          french: "Je ne vais pas",
          explanation: "Négation simple et directe"
        },
        {
          spanish: "No tengo tiempo",
          french: "Je n'ai pas le temps",
          explanation: "Négation simple avec complément"
        },
        {
          spanish: "No tengo nada",
          french: "Je n'ai rien",
          explanation: "Double négation : no + nada"
        },
        {
          spanish: "No veo nada a nadie",
          french: "Je ne vois rien à personne",
          explanation: "Négation multiple avec nada et nadie"
        },
        {
          spanish: "No hay problema",
          french: "Il n'y a pas de problème",
          explanation: "Négation simple avec hay"
        },
        {
          spanish: "No hay nada",
          french: "Il n'y a rien",
          explanation: "Double négation avec hay + nada"
        }
      ],
      irregularities: [
        {
          pattern: "Double négation",
          examples: [
            "No + nada (rien)",
            "No + nadie (personne)",
            "No + nunca (jamais)",
            "No + ninguno (aucun)"
          ],
          notes: "La double négation n'annule pas la négation comme en maths"
        }
      ],
      tips: [
        "La double négation est la norme en espagnol pour l'emphase",
        "Piège francophone : Évitez de 'corriger' en enlevant no",
        "Pratiquez en ajoutant des négatifs pour renforcer",
        "Incorrect : 'Tengo nada' sans no est grammaticalement faux"
      ]
    }
  },
  {
    id: "usage-mots-negatifs",
    title: "Usage de No, Nada, Nadie, Nunca",
    description: "Maîtriser les mots négatifs principaux et leurs usages",
    level: "Intermédiaire",
    content: {
      rules: [
        "No : particule générale avant le verbe",
        "Nada : rien (pronom) ou rien du tout (adverbe)",
        "Nadie : personne, avec préposition a pour personnes",
        "Nunca : jamais, placement flexible mais souvent après le verbe"
      ],
      examples: [
        {
          spanish: "No entiendo",
          french: "Je ne comprends pas",
          explanation: "No comme particule de base"
        },
        {
          spanish: "No como nada",
          french: "Je ne mange rien",
          explanation: "No + nada pour nier complètement"
        },
        {
          spanish: "No es nada",
          french: "Ce n'est rien",
          explanation: "Expression idiomatique pour 'de rien'"
        },
        {
          spanish: "No veo a nadie",
          french: "Je ne vois personne",
          explanation: "Nadie avec préposition a pour personnes"
        },
        {
          spanish: "No voy nunca al cine",
          french: "Je ne vais jamais au cinéma",
          explanation: "Nunca placé après le verbe"
        },
        {
          spanish: "Nunca he estado en París",
          french: "Je n'ai jamais été à Paris",
          explanation: "Nunca peut être placé au début pour emphase"
        }
      ],
      tips: [
        "Mémorisez comme une famille : No (base), Nada (choses), Nadie (personnes), Nunca (temps)",
        "Utilisez-les pour des négations totales",
        "Piège : Accord en genre/nombre si nécessaire",
        "Nadie est invariable, mais nada peut être adverbe"
      ]
    }
  },
  {
    id: "negations-temps-verbaux",
    title: "Négations dans les Temps Verbaux",
    description: "Appliquer la négation à tous les temps verbaux sans changer la conjugaison",
    level: "Intermédiaire",
    content: {
      rules: [
        "Pour temps simples : no avant le verbe conjugué",
        "Pour temps composés : no avant l'auxiliaire",
        "Subjonctif/impératif : no hables (impératif négatif utilise subjonctif)",
        "La position de no est fixe ; pour emphase, ajoutez des négatifs après"
      ],
      examples: [
        {
          spanish: "No estudio",
          french: "Je n'étudie pas",
          explanation: "Présent : no avant le verbe"
        },
        {
          spanish: "No estudiaba",
          french: "Je n'étudiais pas",
          explanation: "Imparfait : no avant le verbe"
        },
        {
          spanish: "No estudiaré",
          french: "Je n'étudierai pas",
          explanation: "Futur : no avant le verbe"
        },
        {
          spanish: "No he hablado",
          french: "Je n'ai pas parlé",
          explanation: "Passé composé : no avant l'auxiliaire he"
        },
        {
          spanish: "No hables",
          french: "Ne parle pas",
          explanation: "Impératif négatif : utilise subjonctif"
        },
        {
          spanish: "No he visto nunca eso",
          french: "Je n'ai jamais vu ça",
          explanation: "Avec double négation : no + nunca"
        }
      ],
      tips: [
        "La position de no est fixe dans tous les temps",
        "Pour emphase, ajoutez des négatifs après le verbe",
        "Piège : À l'impératif négatif, changez la forme (habla → no hables)",
        "L'impératif négatif est différent de l'affirmatif"
      ]
    }
  },
  {
    id: "differences-francais",
    title: "Différences avec le Français",
    description: "Comprendre les différences structurelles entre espagnol et français",
    level: "Intermédiaire",
    content: {
      rules: [
        "Français : double négation archaïque ou emphatique",
        "Espagnol : double négation standard et requise",
        "Français utilise 'ne' explétif parfois ; espagnol non",
        "Placement : français post-verbal, espagnol pré-verbal"
      ],
      examples: [
        {
          spanish: "No tengo nada",
          french: "Je n'ai rien",
          explanation: "Espagnol : no + nada obligatoire"
        },
        {
          spanish: "No sé",
          french: "Je ne sais pas",
          explanation: "Comparaison simple : no vs ne... pas"
        },
        {
          spanish: "Nadie ha venido",
          french: "Personne n'est venu",
          explanation: "Sans no si nadie avant le verbe"
        },
        {
          spanish: "No ha venido nadie",
          french: "Personne n'est venu",
          explanation: "Avec no si nadie après le verbe"
        },
        {
          spanish: "No habla",
          french: "Il ne parle pas",
          explanation: "Espagnol : no avant le verbe"
        },
        {
          spanish: "No hay problema",
          french: "Il n'y a pas de problème",
          explanation: "Hay avec no pour négation"
        }
      ],
      irregularities: [
        {
          pattern: "Différences clés",
          examples: [
            "Français : 'ne... pas' (double négation)",
            "Espagnol : 'no... nada' (double négation standard)",
            "Français : 'parle pas' (post-verbal)",
            "Espagnol : 'no habla' (pré-verbal)"
          ],
          notes: "L'espagnol autorise et encourage la double négation"
        }
      ],
      tips: [
        "Comparez des paires : Français 'Je ne sais pas' → Espagnol 'No sé'",
        "Pour doubles : Français 'Personne n'est venu' → Espagnol 'Nadie ha venido'",
        "Piège francophone : Évitez d'omettre no en pensant que nada suffit seul",
        "L'espagnol et le français diffèrent dans la structure et l'intensité"
      ]
    }
  },
  {
    id: "negations-avec-verbes",
    title: "Négations avec Verbes Spéciaux",
    description: "Maîtriser les négations avec des verbes auxiliaires et modaux",
    level: "Avancé",
    content: {
      rules: [
        "Avec ser/estar : no es/está pour nier l'état",
        "Avec haber : no hay pour nier l'existence",
        "Avec verbes modaux : no puedo, no debo, no quiero",
        "Avec verbes réfléchis : no me levanto, no se acuesta"
      ],
      examples: [
        {
          spanish: "No es fácil",
          french: "Ce n'est pas facile",
          explanation: "Négation avec ser"
        },
        {
          spanish: "No está aquí",
          french: "Il n'est pas ici",
          explanation: "Négation avec estar"
        },
        {
          spanish: "No hay tiempo",
          french: "Il n'y a pas de temps",
          explanation: "Négation avec haber (hay)"
        },
        {
          spanish: "No puedo ir",
          french: "Je ne peux pas y aller",
          explanation: "Négation avec pouvoir"
        },
        {
          spanish: "No me levanto temprano",
          french: "Je ne me lève pas tôt",
          explanation: "Négation avec verbe réfléchi"
        },
        {
          spanish: "No se acuesta tarde",
          french: "Il ne se couche pas tard",
          explanation: "Négation avec verbe réfléchi"
        }
      ],
      tips: [
        "Attention aux verbes réfléchis : no + pronom + verbe",
        "Avec haber, no hay est très fréquent",
        "Les verbes modaux gardent leur sens en négation",
        "Pratiquez avec des verbes courants"
      ]
    }
  },
  {
    id: "negations-expressions",
    title: "Négations dans les Expressions",
    description: "Utiliser les négations dans des expressions idiomatiques et courantes",
    level: "Avancé",
    content: {
      rules: [
        "Expressions avec no : no importa, no pasa nada",
        "Négations emphatiques : de ninguna manera, en absoluto",
        "Expressions de politesse : no te preocupes, no hay de qué",
        "Négations dans les proverbes et expressions"
      ],
      examples: [
        {
          spanish: "No importa",
          french: "Ça ne fait rien",
          explanation: "Expression courante pour minimiser"
        },
        {
          spanish: "No pasa nada",
          french: "Il ne se passe rien",
          explanation: "Expression rassurante"
        },
        {
          spanish: "De ninguna manera",
          french: "En aucune façon",
          explanation: "Négation emphatique"
        },
        {
          spanish: "No te preocupes",
          french: "Ne t'inquiète pas",
          explanation: "Expression de politesse"
        },
        {
          spanish: "No hay de qué",
          french: "Il n'y a pas de quoi",
          explanation: "Réponse à 'gracias'"
        },
        {
          spanish: "No es para tanto",
          french: "Ce n'est pas si grave",
          explanation: "Expression pour relativiser"
        }
      ],
      tips: [
        "Mémorisez les expressions courantes avec no",
        "Utilisez les négations emphatiques pour insister",
        "Les expressions de politesse sont très utiles",
        "Pratiquez dans des contextes quotidiens"
      ]
    }
  },
  {
    id: "negations-complexes",
    title: "Négations Complexes et Nuances",
    description: "Maîtriser les négations avec des structures complexes et des nuances",
    level: "Avancé",
    content: {
      rules: [
        "Négations avec subjonctif : no creo que venga",
        "Négations avec conditionnel : no vendría",
        "Négations avec infinitif : no poder hacer algo",
        "Négations avec gérondif : no estando aquí"
      ],
      examples: [
        {
          spanish: "No creo que venga",
          french: "Je ne crois pas qu'il vienne",
          explanation: "Négation avec subjonctif"
        },
        {
          spanish: "No vendría",
          french: "Il ne viendrait pas",
          explanation: "Négation avec conditionnel"
        },
        {
          spanish: "No poder hacer algo",
          french: "Ne pas pouvoir faire quelque chose",
          explanation: "Négation avec infinitif"
        },
        {
          spanish: "No estando aquí",
          french: "N'étant pas ici",
          explanation: "Négation avec gérondif"
        },
        {
          spanish: "No habiendo terminado",
          french: "N'ayant pas terminé",
          explanation: "Négation avec gérondif composé"
        },
        {
          spanish: "No siendo así",
          french: "N'étant pas ainsi",
          explanation: "Négation avec ser + gérondif"
        }
      ],
      tips: [
        "Attention à la concordance des temps avec le subjonctif",
        "Le conditionnel garde sa valeur hypothétique en négation",
        "Les infinitifs négatifs sont courants",
        "Le gérondif négatif est plus rare mais possible"
      ]
    }
  },
  {
    id: "negations-questions",
    title: "Négations dans les Questions",
    description: "Utiliser les négations dans des questions et des interrogations",
    level: "Avancé",
    content: {
      rules: [
        "Questions négatives : ¿No vienes?",
        "Questions rhétoriques : ¿No es obvio?",
        "Questions avec double négation : ¿No hay nada?",
        "Questions de confirmation : ¿No es verdad?"
      ],
      examples: [
        {
          spanish: "¿No vienes?",
          french: "Tu ne viens pas ?",
          explanation: "Question négative simple"
        },
        {
          spanish: "¿No es obvio?",
          french: "N'est-ce pas évident ?",
          explanation: "Question rhétorique"
        },
        {
          spanish: "¿No hay nada?",
          french: "Il n'y a rien ?",
          explanation: "Question avec double négation"
        },
        {
          spanish: "¿No es verdad?",
          french: "N'est-ce pas vrai ?",
          explanation: "Question de confirmation"
        },
        {
          spanish: "¿No tienes tiempo?",
          french: "Tu n'as pas le temps ?",
          explanation: "Question négative courante"
        },
        {
          spanish: "¿No sabes nada?",
          french: "Tu ne sais rien ?",
          explanation: "Question avec nada"
        }
      ],
      tips: [
        "Les questions négatives expriment souvent la surprise",
        "Les questions rhétoriques n'attendent pas de réponse",
        "Attention à l'intonation dans les questions négatives",
        "Pratiquez avec des questions courantes"
      ]
    }
  },
  {
    id: "negations-temps-composes",
    title: "Négations dans les Temps Composés",
    description: "Maîtriser les négations avec les temps composés et les auxiliaires",
    level: "Avancé",
    content: {
      rules: [
        "Passé composé : no he/has/ha/han + participe",
        "Plus-que-parfait : no había/habías/había/habían + participe",
        "Futur antérieur : no habré/habrás/habrá/habrán + participe",
        "Conditionnel passé : no habría/habrías/habría/habrían + participe"
      ],
      examples: [
        {
          spanish: "No he comido",
          french: "Je n'ai pas mangé",
          explanation: "Passé composé négatif"
        },
        {
          spanish: "No había llegado",
          french: "Il n'était pas arrivé",
          explanation: "Plus-que-parfait négatif"
        },
        {
          spanish: "No habré terminado",
          french: "Je n'aurai pas terminé",
          explanation: "Futur antérieur négatif"
        },
        {
          spanish: "No habría venido",
          french: "Il ne serait pas venu",
          explanation: "Conditionnel passé négatif"
        },
        {
          spanish: "No han visto nada",
          french: "Ils n'ont rien vu",
          explanation: "Passé composé avec double négation"
        },
        {
          spanish: "No había estado nunca",
          french: "Je n'avais jamais été",
          explanation: "Plus-que-parfait avec nunca"
        }
      ],
      tips: [
        "La négation se place toujours avant l'auxiliaire",
        "Les temps composés gardent leur valeur temporelle",
        "Attention à l'accord du participe passé",
        "Pratiquez avec des verbes réguliers et irréguliers"
      ]
    }
  },
  {
    id: "negations-subjonctif",
    title: "Négations avec le Subjonctif",
    description: "Maîtriser les négations dans les phrases avec subjonctif",
    level: "Avancé",
    content: {
      rules: [
        "Subjonctif présent : no venga, no vengas, no venga",
        "Subjonctif imparfait : no viniera/viniese",
        "Subjonctif futur : no viniere (rare)",
        "Subjonctif parfait : no haya venido"
      ],
      examples: [
        {
          spanish: "No venga",
          french: "Qu'il ne vienne pas",
          explanation: "Subjonctif présent négatif"
        },
        {
          spanish: "No vengas",
          french: "Ne viens pas",
          explanation: "Impératif négatif (subjonctif)"
        },
        {
          spanish: "No viniera",
          french: "Qu'il ne vînt pas",
          explanation: "Subjonctif imparfait négatif"
        },
        {
          spanish: "No haya venido",
          french: "Qu'il ne soit pas venu",
          explanation: "Subjonctif parfait négatif"
        },
        {
          spanish: "No creo que venga",
          french: "Je ne crois pas qu'il vienne",
          explanation: "Négation avec subjonctif dans subordonnée"
        },
        {
          spanish: "No es posible que venga",
          french: "Il n'est pas possible qu'il vienne",
          explanation: "Négation avec subjonctif d'opinion"
        }
      ],
      tips: [
        "L'impératif négatif utilise le subjonctif",
        "Attention à la concordance des temps",
        "Le subjonctif garde sa valeur modale en négation",
        "Pratiquez avec des verbes irréguliers"
      ]
    }
  }
];

export const negationExercises: NegationExercise[] = [
  {
    id: "ex1",
    title: "Transformer affirmatif en négatif",
    instruction: "Transformez les phrases affirmatives en négatives, en ajoutant des doubles où possible",
    level: "Intermédiaire",
    type: "transformation",
    content: {
      question: "Transformez 'Veo la película' en négation",
      hints: [
        "Identifiez le verbe principal (veo)",
        "Placez no avant le verbe",
        "Ajoutez nada pour renforcer la négation",
        "Pensez à la double négation espagnole"
      ],
      correction: "No veo nada de la película",
      explanation: "No avant le verbe veo + nada pour renforcer la négation"
    }
  },
  {
    id: "ex2",
    title: "Compléter avec no/nada/nadie/nunca",
    instruction: "Complétez les phrases avec les mots négatifs appropriés",
    level: "Intermédiaire",
    type: "completion",
    content: {
      question: "Complétez : '___ voy al parque los lunes'",
      hints: [
        "Pensez à un mot négatif pour le temps",
        "Nunca signifie 'jamais'",
        "Placez-le avant ou après le verbe",
        "C'est une négation de fréquence"
      ],
      correction: "Nunca voy al parque los lunes",
      explanation: "Nunca pour exprimer 'jamais' dans une phrase négative"
    }
  },
  {
    id: "ex3",
    title: "Créer des phrases négatives à différents temps",
    instruction: "Créez 5 phrases négatives à différents temps verbaux et comparez-les au français",
    level: "Avancé",
    type: "creation",
    content: {
      question: "Créez une phrase négative au passé composé avec double négation",
      hints: [
        "Utilisez no + auxiliaire haber + participe",
        "Ajoutez nada ou nadie pour la double négation",
        "Pensez à un verbe d'action",
        "Comparez avec la structure française"
      ],
      correction: "No he visto nada en el museo",
      explanation: "Passé composé : no + he + participe + nada pour double négation"
    }
  },
  {
    id: "ex4",
    title: "Identifier les erreurs de négation",
    instruction: "Identifiez et corrigez les erreurs dans les phrases négatives données",
    level: "Avancé",
    type: "comparison",
    content: {
      question: "Corrigez 'Tengo nada' et 'No veo a nadie nunca'",
      hints: [
        "Vérifiez la présence de no avant le verbe",
        "Attention à la double négation espagnole",
        "Pensez aux prépositions avec nadie",
        "Vérifiez le placement de nunca"
      ],
      correction: "No tengo nada et No veo nunca a nadie",
      explanation: "Ajout de no avant tengo, et placement correct de nunca et nadie"
    }
  }
];

export const negationTables = {
  motsNegatifs: {
    title: "Mots Négatifs - Usages Principaux",
    headers: ["Mot Négatif", "Sens", "Exemple", "Traduction"],
    rows: [
      ["No", "Ne... pas", "No hablo", "Je ne parle pas"],
      ["Nada", "Rien", "No tengo nada", "Je n'ai rien"],
      ["Nadie", "Personne", "No veo a nadie", "Je ne vois personne"],
      ["Nunca", "Jamais", "No voy nunca", "Je ne vais jamais"],
      ["Ninguno", "Aucun", "No tengo ninguno", "Je n'en ai aucun"],
      ["Tampoco", "Non plus", "Yo tampoco", "Moi non plus"]
    ]
  },
  tempsVerbaux: {
    title: "Négations dans les Temps Verbaux",
    headers: ["Temps", "Affirmatif", "Négatif", "Traduction"],
    rows: [
      ["Présent", "Hablo", "No hablo", "Je ne parle pas"],
      ["Imparfait", "Hablaba", "No hablaba", "Je ne parlais pas"],
      ["Passé simple", "Hablé", "No hablé", "Je ne parlai pas"],
      ["Futur", "Hablaré", "No hablaré", "Je ne parlerai pas"],
      ["Passé composé", "He hablado", "No he hablado", "Je n'ai pas parlé"],
      ["Impératif", "Habla", "No hables", "Ne parle pas"]
    ]
  },
  differencesFrancais: {
    title: "Différences avec le Français",
    headers: ["Aspect", "Français", "Espagnol", "Explication"],
    rows: [
      ["Structure", "Ne... pas", "No", "Placement différent"],
      ["Double négation", "Évitée", "Encouragée", "No + nada standard"],
      ["Placement", "Post-verbal", "Pré-verbal", "No avant le verbe"],
      ["Emphase", "Rare", "Courante", "Double négation normale"],
      ["Expression", "Ne parle pas", "No habla", "Structure différente"],
      ["Intensité", "Simple", "Renforcée", "Plus d'emphase en espagnol"]
    ]
  }
}; 