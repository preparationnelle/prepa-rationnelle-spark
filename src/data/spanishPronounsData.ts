export interface PronounSection {
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

export interface PronounExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'placement' | 'transformation' | 'dialogue' | 'correction';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const pronounSections: PronounSection[] = [
  {
    id: "vouvoiement-tutoiement",
    title: "Vouvoiement et Tutoiement Pluriel",
    description: "Distinguer le tutoiement informel et le vouvoiement formel au pluriel",
    level: "Intermédiaire",
    content: {
      rules: [
        "Tutoiement : tú/vosotros (informel)",
        "Vouvoiement : usted/ustedes (formel ou poli)",
        "Vosotros conjugue comme 2e personne pluriel (vosotros habláis)",
        "Ustedes conjugue comme 3e personne pluriel (ustedes hablan)"
      ],
      examples: [
        {
          spanish: "Vosotros sois amigos",
          french: "Vous êtes amis (informel)",
          explanation: "Tutoiement pluriel avec vosotros"
        },
        {
          spanish: "Ustedes son amigos",
          french: "Vous êtes amis (formel)",
          explanation: "Vouvoiement avec ustedes"
        },
        {
          spanish: "Vosotros venís a la fiesta",
          french: "Vous venez à la fête (informel)",
          explanation: "Vosotros avec conjugaison 2e personne"
        },
        {
          spanish: "Ustedes vienen a la fiesta",
          french: "Vous venez à la fête (formel)",
          explanation: "Ustedes avec conjugaison 3e personne"
        },
        {
          spanish: "¿Vosotros queréis café?",
          french: "Voulez-vous du café ? (informel)",
          explanation: "Question avec vosotros"
        },
        {
          spanish: "¿Ustedes quieren café?",
          french: "Voulez-vous du café ? (formel)",
          explanation: "Question avec ustedes"
        }
      ],
      tips: [
        "Utilisez tú avec amis, usted avec aînés/inconnus",
        "Piège francophone : Pas de 'vous' unique comme en français",
        "Distinguez singulier/pluriel",
        "Vosotros plus courant en Espagne, ustedes partout"
      ]
    }
  },
  {
    id: "pronoms-sujets",
    title: "Pronoms Personnels Sujets",
    description: "Associer les verbes conjugués aux pronoms personnels sujets",
    level: "Intermédiaire",
    content: {
      rules: [
        "Pronoms sujets : yo, tú, él/ella/ello, nosotros, vosotros, ellos/ellas, usted/ustedes",
        "Souvent omis car la conjugaison l'implique",
        "Yo emphatique seulement, ne l'utilisez pas systématiquement",
        "Associez chaque pronom à sa conjugaison"
      ],
      examples: [
        {
          spanish: "Yo hablo español",
          french: "Je parle espagnol",
          explanation: "Yo emphatique pour insister"
        },
        {
          spanish: "Hablo español",
          french: "Je parle espagnol",
          explanation: "Sans yo, plus naturel"
        },
        {
          spanish: "Tú hablas francés",
          french: "Tu parles français",
          explanation: "Tú avec conjugaison 2e personne"
        },
        {
          spanish: "Nosotros comemos",
          french: "Nous mangeons",
          explanation: "Nosotros avec conjugaison 1re personne pluriel"
        },
        {
          spanish: "Ellos estudian",
          french: "Ils étudient",
          explanation: "Ellos avec conjugaison 3e personne pluriel"
        },
        {
          spanish: "Usted trabaja",
          french: "Vous travaillez (formel)",
          explanation: "Usted avec conjugaison 3e personne singulier"
        }
      ],
      tips: [
        "Pratiquez en listant conjugaisons et pronoms",
        "Yo emphatique seulement",
        "La conjugaison indique déjà le sujet",
        "Omettre le pronom rend le discours plus fluide"
      ]
    }
  },
  {
    id: "pronoms-complements",
    title: "Pronoms Personnels Compléments et Réfléchis",
    description: "Maîtriser les pronoms COD, COI et réfléchis",
    level: "Intermédiaire",
    content: {
      rules: [
        "COD (Directs) : lo/la/los/las",
        "COI (Indirects) : le/les",
        "Réfléchis : me/te/se/nos/os/se",
        "Ordre : Réfléchi > COI > COD"
      ],
      examples: [
        {
          spanish: "Lo veo",
          french: "Je le vois (masculin)",
          explanation: "COD masculin singulier"
        },
        {
          spanish: "La compro",
          french: "Je l'achète (féminin)",
          explanation: "COD féminin singulier"
        },
        {
          spanish: "Le doy el libro",
          french: "Je lui donne le livre",
          explanation: "COI avec le"
        },
        {
          spanish: "Se lo doy",
          french: "Je le lui donne",
          explanation: "Réfléchi + COI + COD"
        },
        {
          spanish: "Me lavo",
          french: "Je me lave",
          explanation: "Pronom réfléchi"
        },
        {
          spanish: "Te ayudo",
          french: "Je t'aide",
          explanation: "COI avec te"
        }
      ],
      tips: [
        "COD remplace 'le/la/les' direct",
        "COI 'lui/leur' indirect",
        "Réfléchis pour actions sur soi",
        "Piège francophone : Le pour COI, pas lo"
      ]
    }
  },
  {
    id: "tutoiement-pluriel",
    title: "Tutoiement Pluriel - Vosotros",
    description: "Utiliser vosotros pour groupes informels et thèmes actuels",
    level: "Intermédiaire",
    content: {
      rules: [
        "Vosotros pour groupes informels",
        "Conjugaison 2e personne pluriel",
        "Utilisez pour thèmes actuels comme l'environnement",
        "En Amérique latine, remplacez par ustedes"
      ],
      examples: [
        {
          spanish: "Vosotros contamináis el planeta",
          french: "Vous polluez la planète (informel pluriel)",
          explanation: "Thème environnemental avec vosotros"
        },
        {
          spanish: "Vosotros debéis reciclar",
          french: "Vous devez recycler (appel collectif)",
          explanation: "Obligation avec vosotros"
        },
        {
          spanish: "¿Vosotros separáis la basura?",
          french: "Séparez-vous les déchets ? (informel)",
          explanation: "Question environnementale"
        },
        {
          spanish: "Vosotros podéis cambiar el mundo",
          french: "Vous pouvez changer le monde (informel)",
          explanation: "Capacité avec vosotros"
        },
        {
          spanish: "Vosotros sois la esperanza",
          french: "Vous êtes l'espoir (informel)",
          explanation: "Être avec vosotros"
        },
        {
          spanish: "Vosotros tenéis la responsabilidad",
          french: "Vous avez la responsabilité (informel)",
          explanation: "Avoir avec vosotros"
        }
      ],
      tips: [
        "Utilisez pour thèmes actuels comme l'environnement",
        "Piège : En Amérique latine, remplacez par ustedes",
        "Conjugaison spécifique : -áis, -éis, -ís",
        "Plus courant en Espagne"
      ]
    }
  },
  {
    id: "pronoms-possessifs",
    title: "Pronoms Possessifs et 'On' Français",
    description: "Maîtriser les pronoms possessifs et traduire 'on'",
    level: "Intermédiaire",
    content: {
      rules: [
        "Pronoms possessifs : mío/tuyo/suyo/nuestro/vuestro/suyo",
        "Accord en genre/nombre",
        "'On' se traduit par se impersonnel ou uno",
        "Possessifs après ser"
      ],
      examples: [
        {
          spanish: "El libro es mío",
          french: "Le livre est le mien",
          explanation: "Possessif masculin singulier"
        },
        {
          spanish: "La casa es nuestra",
          french: "La maison est la nôtre",
          explanation: "Possessif féminin singulier"
        },
        {
          spanish: "Es nuestro problema",
          french: "C'est notre problème",
          explanation: "Possessif avec ser"
        },
        {
          spanish: "Se dice que...",
          french: "On dit que...",
          explanation: "'On' avec se impersonnel"
        },
        {
          spanish: "Uno puede ver",
          french: "On peut voir",
          explanation: "'On' avec uno"
        },
        {
          spanish: "Los coches son suyos",
          french: "Les voitures sont les leurs",
          explanation: "Possessif masculin pluriel"
        }
      ],
      irregularities: [
        {
          pattern: "Suyo ambigu",
          examples: [
            "Son suyos (son/leur/votre)",
            "La casa es suya (sa/leur/votre maison)"
          ],
          notes: "Suyo peut signifier son, leur ou votre selon le contexte"
        }
      ],
      tips: [
        "Possessifs après ser",
        "'On' évite sujet précis",
        "Piège : Suyo ambigu (son/leur/votre)",
        "Clarifiez le contexte si nécessaire"
      ]
    }
  },
  {
    id: "placement-enclise",
    title: "Placement et Enclise des Pronoms",
    description: "Maîtriser le placement des pronoms et l'enclise",
    level: "Avancé",
    content: {
      rules: [
        "Avant verbe conjugué : Lo veo",
        "Enclise (attaché après) pour infinitif/gérondif/impératif",
        "Ordre : Réfléchi > COI > COD",
        "Enclise pour positifs impératifs, avant pour négatifs"
      ],
      examples: [
        {
          spanish: "Lo veo en la calle",
          french: "Je le vois dans la rue",
          explanation: "Avant verbe conjugué"
        },
        {
          spanish: "Quiero dártelo",
          french: "Je veux te le donner",
          explanation: "Enclise avec infinitif"
        },
        {
          spanish: "Viéndolo",
          french: "En le voyant",
          explanation: "Enclise avec gérondif"
        },
        {
          spanish: "Dímelo",
          french: "Dis-le-moi",
          explanation: "Enclise avec impératif positif"
        },
        {
          spanish: "No me lo des",
          french: "Ne me le donne pas",
          explanation: "Avant verbe avec impératif négatif"
        },
        {
          spanish: "Se lo doy",
          french: "Je le lui donne",
          explanation: "Ordre : Réfléchi + COI + COD"
        }
      ],
      tips: [
        "Enclise pour positifs impératifs",
        "Avant pour négatifs",
        "Piège : Double pronom (Me lo das)",
        "Pratiquez l'ordre des pronoms"
      ]
    }
  },
  {
    id: "verbes-pronominaux",
    title: "Pronoms dans les Verbes Pronominaux",
    description: "Maîtriser les verbes pronominaux et leurs pronoms",
    level: "Avancé",
    content: {
      rules: [
        "Verbes pronominaux intègrent pronom réfléchi",
        "Pronom accorde au sujet",
        "Placement comme compléments",
        "Sens changé sans pronom"
      ],
      examples: [
        {
          spanish: "Me lavo las manos",
          french: "Je me lave les mains",
          explanation: "Verbe pronominal avec me"
        },
        {
          spanish: "Se despierta",
          french: "Il se réveille",
          explanation: "Se avec 3e personne"
        },
        {
          spanish: "Nos levantamos",
          french: "Nous nous levons",
          explanation: "Nos avec 1re personne pluriel"
        },
        {
          spanish: "Te acuestas",
          french: "Tu te couches",
          explanation: "Te avec 2e personne"
        },
        {
          spanish: "Se visten",
          french: "Ils s'habillent",
          explanation: "Se avec 3e personne pluriel"
        },
        {
          spanish: "Os divertís",
          french: "Vous vous amusez",
          explanation: "Os avec 2e personne pluriel"
        }
      ],
      tips: [
        "Pronom accorde au sujet",
        "Placement comme compléments",
        "Piège : Oubli du pronom change le sens",
        "Levantar (lever) vs levantarse (se lever)"
      ]
    }
  },
  {
    id: "differences-regionales",
    title: "Différences Régionales (Vosotros vs Ustedes)",
    description: "Comprendre les variations régionales des pronoms",
    level: "Avancé",
    content: {
      rules: [
        "Espagne : Vosotros informel pluriel (habláis)",
        "Amérique latine : Ustedes pour tout pluriel (hablan)",
        "Voseo en Argentine (vos hablás - singulier informel)",
        "Adaptez au public, ustedes plus neutre"
      ],
      examples: [
        {
          spanish: "Vosotros venís",
          french: "Vous venez (informel - Espagne)",
          explanation: "Vosotros en Espagne"
        },
        {
          spanish: "Ustedes vienen",
          french: "Vous venez (général - Amérique latine)",
          explanation: "Ustedes en Amérique latine"
        },
        {
          spanish: "Vos hablás",
          french: "Tu parles (Argentine)",
          explanation: "Voseo argentin"
        },
        {
          spanish: "Vosotros sois",
          french: "Vous êtes (Espagne)",
          explanation: "Être avec vosotros"
        },
        {
          spanish: "Ustedes son",
          french: "Vous êtes (Amérique latine)",
          explanation: "Être avec ustedes"
        },
        {
          spanish: "Vos tenés",
          french: "Tu as (Argentine)",
          explanation: "Avoir avec voseo"
        }
      ],
      tips: [
        "Adaptez au public",
        "Ustedes plus neutre",
        "Piège : Confusion en voyages",
        "Attention au voseo argentin"
      ]
    }
  },
  {
    id: "erreurs-cod-coi",
    title: "Erreurs Courantes avec COD/COI",
    description: "Identifier et corriger les erreurs courantes",
    level: "Avancé",
    content: {
      rules: [
        "Leísmo : utiliser le pour COD masculin (incorrect)",
        "Laísmo/loísmo : la/lo pour COI (incorrect)",
        "Doublage oubli : ajouter le pronom COI",
        "COD direct (sans a), COI indirect (avec a pour personnes)"
      ],
      examples: [
        {
          spanish: "Lo invito",
          french: "Je l'invite (COD)",
          explanation: "Correct : COD masculin"
        },
        {
          spanish: "Le invito",
          french: "Je l'invite (régional)",
          explanation: "Leísmo : régional mais évitez en standard"
        },
        {
          spanish: "Le doy el libro a Juan",
          french: "Je donne le livre à Juan",
          explanation: "Correct : COI avec a"
        },
        {
          spanish: "Doy el libro a Juan",
          french: "Je donne le livre à Juan",
          explanation: "Oubli du pronom COI"
        },
        {
          spanish: "La veo",
          french: "Je la vois (COD féminin)",
          explanation: "Correct : COD féminin"
        },
        {
          spanish: "Le veo",
          french: "Je le vois (COD masculin)",
          explanation: "Correct : COD masculin"
        }
      ],
      tips: [
        "COD direct (sans a)",
        "COI indirect (avec a pour personnes)",
        "Pratiquez transformations",
        "Évitez leísmo en standard"
      ]
    }
  },
  {
    id: "pronoms-complexes",
    title: "Pronoms dans des Structures Complexes",
    description: "Maîtriser les pronoms dans des phrases complexes",
    level: "Expert",
    content: {
      rules: [
        "Pronoms dans subordonnées",
        "Pronoms avec verbes modaux",
        "Pronoms dans expressions idiomatiques",
        "Attention à l'ordre et au placement"
      ],
      examples: [
        {
          spanish: "Quiero que me lo des",
          french: "Je veux que tu me le donnes",
          explanation: "Pronom dans subordonnée"
        },
        {
          spanish: "Puedo dártelo",
          french: "Je peux te le donner",
          explanation: "Pronom avec verbe modal"
        },
        {
          spanish: "Se me olvidó",
          french: "Je l'ai oublié",
          explanation: "Expression idiomatique avec pronoms"
        },
        {
          spanish: "Te lo agradezco",
          french: "Je vous en remercie",
          explanation: "Remerciement avec pronoms"
        },
        {
          spanish: "Se lo merece",
          french: "Il/elle le mérite",
          explanation: "Mériter avec pronoms"
        },
        {
          spanish: "Me lo imagino",
          french: "Je l'imagine",
          explanation: "Imaginer avec pronoms"
        }
      ],
      tips: [
        "Attention à l'ordre des pronoms",
        "Pratiquez avec des structures complexes",
        "Vérifiez le placement",
        "Utilisez des expressions courantes"
      ]
    }
  },
  {
    id: "pronoms-dialogues",
    title: "Pronoms dans les Dialogues",
    description: "Utiliser les pronoms dans des conversations naturelles",
    level: "Expert",
    content: {
      rules: [
        "Pronoms dans questions et réponses",
        "Pronoms dans demandes et offres",
        "Pronoms dans expressions de politesse",
        "Adaptez selon le registre"
      ],
      examples: [
        {
          spanish: "¿Me puedes ayudar?",
          french: "Peux-tu m'aider ?",
          explanation: "Question avec pronom COI"
        },
        {
          spanish: "Te ayudo con gusto",
          french: "Je t'aide avec plaisir",
          explanation: "Réponse avec pronom COI"
        },
        {
          spanish: "¿Se lo puedo mostrar?",
          french: "Puis-je le lui montrer ?",
          explanation: "Demande avec pronoms"
        },
        {
          spanish: "Por supuesto, muéstramelo",
          french: "Bien sûr, montre-le-moi",
          explanation: "Permission avec pronoms"
        },
        {
          spanish: "Te lo agradezco mucho",
          french: "Je vous en remercie beaucoup",
          explanation: "Remerciement avec pronoms"
        },
        {
          spanish: "No hay de qué",
          french: "Il n'y a pas de quoi",
          explanation: "Réponse à remerciement"
        }
      ],
      tips: [
        "Adaptez selon le registre",
        "Utilisez des expressions courantes",
        "Pratiquez avec des situations réelles",
        "Attention à la politesse"
      ]
    }
  }
];

export const pronounExercises: PronounExercise[] = [
  {
    id: "ex1",
    title: "Placer des pronoms",
    instruction: "Insérez les pronoms appropriés dans les phrases données",
    level: "Intermédiaire",
    type: "placement",
    content: {
      question: "Insérez le pronom COD dans : 'Veo ___ en la calle'",
      hints: [
        "Identifiez le genre du nom remplacé",
        "COD remplace le nom direct",
        "Placez le pronom avant le verbe",
        "Accordez en genre et nombre"
      ],
      correction: "Veo lo en la calle",
      explanation: "Lo remplace un nom masculin singulier, placé avant le verbe veo"
    }
  },
  {
    id: "ex2",
    title: "Transformer des phrases",
    instruction: "Changez les sujets et compléments en utilisant des pronoms",
    level: "Intermédiaire",
    type: "transformation",
    content: {
      question: "Transformez : 'Juan da el regalo a María' en utilisant des pronoms",
      hints: [
        "Identifiez le COD (el regalo)",
        "Identifiez le COI (a María)",
        "Utilisez se pour le COI",
        "Utilisez lo pour le COD",
        "Placez les pronoms dans l'ordre correct"
      ],
      correction: "Se lo da",
      explanation: "Se (COI) + lo (COD) + da (verbe), ordre : réfléchi > COI > COD"
    }
  },
  {
    id: "ex3",
    title: "Créer un dialogue avec vosotros/ustedes",
    instruction: "Créez un dialogue sur le réchauffement climatique en utilisant vosotros et ustedes",
    level: "Avancé",
    type: "dialogue",
    content: {
      question: "Créez un dialogue entre deux personnes discutant de l'environnement",
      hints: [
        "Utilisez vosotros pour l'informel",
        "Utilisez ustedes pour le formel",
        "Incluez des verbes avec vosotros (habláis, sois, tenéis)",
        "Incluez des verbes avec ustedes (hablan, son, tienen)",
        "Thème : réchauffement climatique et solutions"
      ],
      correction: "A: Vosotros contamináis mucho. B: Ustedes también tienen responsabilidad. A: Vosotros debéis reciclar. B: Ustedes pueden ayudarnos.",
      explanation: "Dialogue avec alternance vosotros (informel) et ustedes (formel), thème environnemental"
    }
  },
  {
    id: "ex4",
    title: "Corriger des erreurs COD/COI",
    instruction: "Identifiez et corrigez les erreurs dans les phrases données",
    level: "Avancé",
    type: "correction",
    content: {
      question: "Corrigez : 'Le veo' (pour un objet masculin) et 'Doy el libro a Juan'",
      hints: [
        "Vérifiez l'usage de le vs lo",
        "Le est pour COI, lo pour COD masculin",
        "Ajoutez le pronom COI manquant",
        "Pensez au doublage des pronoms"
      ],
      correction: "Lo veo (COD masculin) et Le doy el libro a Juan (COI)",
      explanation: "Lo pour COD masculin, le pour COI avec doublage obligatoire"
    }
  }
];

export const pronounTables = {
  pronomsSujets: {
    title: "Pronoms Personnels Sujets",
    headers: ["Personne", "Singulier", "Pluriel", "Conjugaison"],
    rows: [
      ["1re", "Yo", "Nosotros", "Hablo/Hablamos"],
      ["2e", "Tú", "Vosotros", "Hablas/Habláis"],
      ["3e", "Él/Ella/Usted", "Ellos/Ellas/Ustedes", "Habla/Hablan"],
      ["Formel", "Usted", "Ustedes", "Habla/Hablan"]
    ]
  },
  pronomsComplements: {
    title: "Pronoms Compléments et Réfléchis",
    headers: ["Type", "1re pers.", "2e pers.", "3e pers."],
    rows: [
      ["COD", "Me", "Te", "Se"],
      ["COI", "Me", "Te", "Le"],
      ["Réfléchi", "Me", "Te", "Se"],
      ["Pluriel", "Nos/Os", "Os", "Se"]
    ]
  },
  placement: {
    title: "Placement des Pronoms",
    headers: ["Structure", "Placement", "Exemple", "Règle"],
    rows: [
      ["Verbe conjugué", "Avant", "Lo veo", "Pronom avant verbe"],
      ["Infinitif", "Enclise", "Verlo", "Pronom attaché après"],
      ["Gérondif", "Enclise", "Viéndolo", "Pronom attaché après"],
      ["Impératif +", "Enclise", "Dímelo", "Pronom attaché après"],
      ["Impératif -", "Avant", "No me lo des", "Pronom avant verbe"]
    ]
  }
}; 