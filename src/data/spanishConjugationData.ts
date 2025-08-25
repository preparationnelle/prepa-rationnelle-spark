export interface ConjugationSection {
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
      verb: string;
      pattern: string;
      examples: string[];
    }>;
    tips: string[];
  };
}

export interface ConjugationExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'conjugation' | 'sequence' | 'choice' | 'transformation';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const conjugationSections: ConjugationSection[] = [
  {
    id: "subjonctif-present",
    title: "Subjonctif Présent",
    description: "Mode verbal pour exprimer le doute, le désir, l'émotion, l'hypothèse ou l'incertitude",
    level: "Avancé",
    content: {
      rules: [
        "Formé à partir de la 1re personne du présent de l'indicatif (yo)",
        "Enlever le -o et ajouter les terminaisons opposées aux verbes réguliers",
        "-e pour les verbes en -ar, -a pour les verbes en -er/-ir",
        "Suit souvent des déclencheurs comme que, ojalá, ou verbes comme querer que"
      ],
      examples: [
        {
          spanish: "que yo hable, tú hables, él hable",
          french: "que je parle, tu parles, il parle",
          explanation: "Verbe hablar (régulier -ar) : radical habl- + terminaisons -e"
        },
        {
          spanish: "que yo coma, tú comas, él coma",
          french: "que je mange, tu manges, il mange",
          explanation: "Verbe comer (-er) : radical com- + terminaisons -a"
        },
        {
          spanish: "Quiero que vengas",
          french: "Je veux que tu viennes",
          explanation: "Verbe venir (irrégulier) : venga → vengas (doute sur la venue)"
        }
      ],
      irregularities: [
        {
          verb: "tener",
          pattern: "Diphtongue e → ie",
          examples: ["tenga", "tengas", "tenga", "tengamos", "tengáis", "tengan"]
        },
        {
          verb: "pedir",
          pattern: "Affaiblissement e → i",
          examples: ["pida", "pidas", "pida", "pidamos", "pidáis", "pidan"]
        },
        {
          verb: "ser",
          pattern: "Radical irrégulier",
          examples: ["sea", "seas", "sea", "seamos", "seáis", "sean"]
        }
      ],
      tips: [
        "Le subjonctif n'existe pas de manière aussi marquée en français moderne",
        "Pratiquez avec des phrases hypothétiques pour différencier du conditionnel",
        "Listez 10 déclencheurs courants et pratiquez des phrases"
      ]
    }
  },
  {
    id: "subjonctif-imparfait",
    title: "Subjonctif Imparfait",
    description: "Deux formes possibles (-ra ou -se), -ra plus courante en Amérique latine",
    level: "Avancé",
    content: {
      rules: [
        "Formé à partir de la 3e personne pluriel du prétérit",
        "Deux formes : -ra (plus courante) ou -se",
        "Usage : pour des hypothèses passées ou conditionnelles",
        "Irrégularités similaires au prétérit"
      ],
      examples: [
        {
          spanish: "que yo hablara/hablase, tú hablaras/hablases",
          french: "que je parlasse, tu parlasses",
          explanation: "De ellos hablaron → hablara/hablase"
        },
        {
          spanish: "Quería que vinieras",
          french: "Je voulais que tu viennes",
          explanation: "Au passé : principale au passé → subjonctif imparfait"
        }
      ],
      irregularities: [
        {
          verb: "ser",
          pattern: "Radical irrégulier",
          examples: ["fuera/fuese", "fueras/fueses", "fuera/fuese"]
        }
      ],
      tips: [
        "Pratiquez avec des phrases hypothétiques pour différencier du conditionnel",
        "Vérifiez la temporalité : le subjonctif suit le temps de la principale"
      ]
    }
  },
  {
    id: "concordance-temps",
    title: "Concordance des Temps",
    description: "Assure que les temps verbaux s'accordent entre proposition principale et subordonnée",
    level: "Avancé",
    content: {
      rules: [
        "Si la principale est au présent/futur → subordonnée au subjonctif présent",
        "Si la principale est au passé → subordonnée au subjonctif imparfait",
        "Le subjonctif suit le temps de la principale",
        "Évitez de mélanger indicatif et subjonctif sans raison"
      ],
      examples: [
        {
          spanish: "Espero que vengas",
          french: "J'espère que tu viens",
          explanation: "Présent → subjonctif présent"
        },
        {
          spanish: "Esperaba que vinieras",
          french: "J'espérais que tu viennes",
          explanation: "Passé → subjonctif imparfait"
        }
      ],
      irregularities: [
        {
          verb: "haber",
          pattern: "Subjonctif irrégulier",
          examples: ["haya", "hubiera"]
        }
      ],
      tips: [
        "Pensez à la temporalité : le subjonctif suit le temps de la principale",
        "Utilisez un tableau pour visualiser la concordance"
      ]
    }
  },
  {
    id: "conditionnel-hypothese",
    title: "Conditionnel et Hypothèse",
    description: "Exprime l'hypothétique, le poli ou le futur dans le passé",
    level: "Avancé",
    content: {
      rules: [
        "Formé avec l'infinitif + terminaisons -ía",
        "Irrégularités similaires au futur",
        "Souvent avec si + imparfait/subjonctif imparfait pour l'irréel",
        "Distinguer du futur : conditionnel pour ce qui pourrait arriver"
      ],
      examples: [
        {
          spanish: "Yo hablaría si tuviera tiempo",
          french: "Je parlerais si j'avais le temps",
          explanation: "Conditionnel présent + si + subjonctif imparfait"
        },
        {
          spanish: "Si tuviera dinero, viajaría",
          french: "Si j'avais de l'argent, je voyagerais",
          explanation: "Si + subjonctif imparfait → conditionnel"
        },
        {
          spanish: "Si hubiera sabido, lo habría hecho",
          french: "Si j'avais su, je l'aurais fait",
          explanation: "Si + subjonctif plus-que-parfait → conditionnel passé"
        }
      ],
      irregularities: [
        {
          verb: "tener",
          pattern: "Comme au futur",
          examples: ["tendría", "tendrías", "tendría"]
        }
      ],
      tips: [
        "Distinguez du futur : conditionnel pour ce qui pourrait arriver",
        "Pratiquez avec des scénarios personnels pour mémoriser"
      ]
    }
  },
  {
    id: "imperatif-nuances",
    title: "Impératif et Nuances",
    description: "Donne des ordres, conseils ou suggestions selon le tutoiement/vouvoiement",
    level: "Intermédiaire",
    content: {
      rules: [
        "Affirmatif : pour tú : présent sans s (habla, come, vive)",
        "Pour vosotros : infinitif sans r + d (hablad)",
        "Pour usted/ustedes : subjonctif présent (hable, hablen)",
        "Négatif : toujours subjonctif (no hables, no habléis)",
        "Avec pronoms : enclise (dímelo – dis-le-moi)"
      ],
      examples: [
        {
          spanish: "¡Habla más alto!",
          french: "Parle plus fort !",
          explanation: "Impératif affirmatif avec tú"
        },
        {
          spanish: "No lo hagas",
          french: "Ne le fais pas",
          explanation: "Impératif négatif : no + subjonctif"
        },
        {
          spanish: "Dímelo",
          french: "Dis-le-moi",
          explanation: "Impératif + pronoms : di + me + lo"
        }
      ],
      irregularities: [
        {
          verb: "ir",
          pattern: "Impératif irrégulier",
          examples: ["ve", "ida"]
        },
        {
          verb: "ser",
          pattern: "Impératif irrégulier",
          examples: ["sé"]
        }
      ],
      tips: [
        "Attention au placement des pronoms (affirmatif : après ; négatif : avant)",
        "Pour suggestions polies, utilisez usted",
        "Ajoutez por favor pour la politesse"
      ]
    }
  }
];

export const conjugationExercises: ConjugationExercise[] = [
  {
    id: "ex1",
    title: "QCM - Subjonctif et Modes Verbaux",
    instruction: "Choisissez la réponse correcte pour chaque question sur les modes verbaux",
    level: "Intermédiaire",
    type: "qcm",
    content: {
      question: "Quel est le subjonctif présent correct pour 'hablar' (je) ?",
      hints: [
        "Le subjonctif présent se forme avec la 1re personne du présent de l'indicatif",
        "Remplacez la terminaison -o par -e pour les verbes en -ar",
        "Hablo (indicatif) → hable (subjonctif)"
      ],
      correction: "b) Hable",
      explanation: "Hablo (indicatif présent) → hable (subjonctif présent) : remplacement de -o par -e pour les verbes en -ar"
    }
  },
  {
    id: "ex2",
    title: "QCM - Hypothèse et Conditionnel",
    instruction: "Identifiez le mode utilisé dans les phrases hypothétiques",
    level: "Avancé",
    type: "qcm",
    content: {
      question: "Dans 'Si tuviera tiempo, viajaría', quel mode est utilisé pour l'hypothèse ?",
      hints: [
        "Si + subjonctif imparfait + conditionnel = hypothèse irréelle",
        "Tuviera est le subjonctif imparfait de tener",
        "Viajaría est le conditionnel de viajar"
      ],
      correction: "b) Subjonctif imparfait + conditionnel",
      explanation: "Structure hypothétique : Si + subjonctif imparfait (tuviera) + conditionnel (viajaría) pour exprimer une hypothèse irréelle"
    }
  },
  {
    id: "ex3",
    title: "QCM - Impératif Affirmatif",
    instruction: "Formez l'impératif affirmatif pour la 2e personne du singulier",
    level: "Intermédiaire",
    type: "qcm",
    content: {
      question: "La forme impérative affirmative pour 'tú' de 'comer' est :",
      hints: [
        "L'impératif affirmatif pour 'tú' utilise la 3e personne du présent de l'indicatif",
        "Come (3e personne présent) = impératif pour tú",
        "Pas de terminaison spéciale pour l'impératif affirmatif"
      ],
      correction: "a) Come",
      explanation: "L'impératif affirmatif pour 'tú' utilise la 3e personne du présent de l'indicatif : come (de comer)"
    }
  },
  {
    id: "ex4",
    title: "QCM - Gérondif",
    instruction: "Identifiez la forme correcte du gérondif",
    level: "Débutant",
    type: "qcm",
    content: {
      question: "Quel est le gérondif de 'vivir' ?",
      hints: [
        "Le gérondif se forme avec la racine + -iendo pour les verbes en -ir",
        "Vivir → viviendo",
        "Le gérondif exprime une action en cours"
      ],
      correction: "a) Viviendo",
      explanation: "Le gérondif de vivir se forme avec la racine viv- + -iendo = viviendo"
    }
  },
  {
    id: "ex5",
    title: "QCM - Concordance des Temps",
    instruction: "Appliquez la concordance des temps avec le subjonctif",
    level: "Avancé",
    type: "qcm",
    content: {
      question: "Pour la concordance des temps : Si la principale est au passé, la subordonnée au subjonctif est au :",
      hints: [
        "Concordance temporelle : présent → présent, passé → imparfait",
        "Si le verbe principal est au passé, le subjonctif est à l'imparfait",
        "Règle : temps principal = temps subjonctif correspondant"
      ],
      correction: "b) Imparfait",
      explanation: "Concordance des temps : si le verbe principal est au passé, la subordonnée au subjonctif est à l'imparfait"
    }
  },
  {
    id: "ex6",
    title: "Choix Multiple - Subjonctif",
    instruction: "Choisissez la forme verbale correcte pour chaque contexte",
    level: "Intermédiaire",
    type: "choix",
    content: {
      question: "'Quiero que _____ (venir) conmigo.'",
      hints: [
        "Après 'quiero que', utilisez le subjonctif",
        "Vengas est le subjonctif présent de venir",
        "Vienes est l'indicatif présent"
      ],
      correction: "b) vengas",
      explanation: "Après 'quiero que', le verbe passe au subjonctif présent : vengas (de venir)"
    }
  },
  {
    id: "ex7",
    title: "Choix Multiple - Hypothèse",
    instruction: "Complétez les phrases hypothétiques avec le bon mode",
    level: "Avancé",
    type: "choix",
    content: {
      question: "'Si _____ (ser) rico, compraría una casa.'",
      hints: [
        "Structure hypothétique : Si + subjonctif imparfait + conditionnel",
        "Fuera est le subjonctif imparfait de ser",
        "Soy est l'indicatif présent"
      ],
      correction: "b) fuera",
      explanation: "Structure hypothétique : Si + subjonctif imparfait (fuera) + conditionnel (compraría)"
    }
  },
  {
    id: "ex8",
    title: "Choix Multiple - Impératif Négatif",
    instruction: "Formez l'impératif négatif pour la 2e personne",
    level: "Intermédiaire",
    type: "choix",
    content: {
      question: "'No _____ (hablar) ahora.' (impératif négatif pour tú)",
      hints: [
        "L'impératif négatif utilise le subjonctif présent",
        "Hables est le subjonctif présent de hablar",
        "Structure : No + subjonctif présent"
      ],
      correction: "b) hables",
      explanation: "L'impératif négatif utilise le subjonctif présent : No hables (de hablar)"
    }
  },
  {
    id: "ex9",
    title: "Choix Multiple - Gérondif",
    instruction: "Identifiez la forme progressive correcte",
    level: "Débutant",
    type: "choix",
    content: {
      question: "'Estoy _____ (comer) una manzana.' (forme progressive)",
      hints: [
        "La forme progressive utilise estar + gérondif",
        "Comiendo est le gérondif de comer",
        "Comido est le participe passé"
      ],
      correction: "b) comiendo",
      explanation: "Forme progressive : estar + gérondif = estoy comiendo"
    }
  },
  {
    id: "ex10",
    title: "Choix Multiple - Conditionnel",
    instruction: "Utilisez le conditionnel pour exprimer l'hypothèse",
    level: "Intermédiaire",
    type: "choix",
    content: {
      question: "'_____ (gustar) el chocolate.' (conditionnel pour hypothèse)",
      hints: [
        "Le conditionnel exprime une hypothèse ou une politesse",
        "Gustaría est le conditionnel de gustar",
        "Gusta est le présent de l'indicatif"
      ],
      correction: "a) Gustaría",
      explanation: "Le conditionnel gustaría exprime une hypothèse ou une politesse"
    }
  },
  {
    id: "ex11",
    title: "Mots à Compléter - Conditionnel Passé",
    instruction: "Complétez avec le conditionnel passé",
    level: "Avancé",
    type: "completion",
    content: {
      question: "Si hubieras estudiado, _____ (aprobar) el examen. (conditionnel passé)",
      hints: [
        "Le conditionnel passé se forme avec haber au subjonctif imparfait + participe passé",
        "Habrías + aprobado",
        "Structure : Si + plus-que-parfait subjonctif + conditionnel passé"
      ],
      correction: "habrías aprobado",
      explanation: "Conditionnel passé : habrías (haber au conditionnel) + aprobado (participe passé)"
    }
  },
  {
    id: "ex12",
    title: "Mots à Compléter - Impératif Négatif",
    instruction: "Formez l'impératif négatif pour tú",
    level: "Intermédiaire",
    type: "completion",
    content: {
      question: "_____ (no hacer) eso, por favor. (impératif négatif pour tú)",
      hints: [
        "L'impératif négatif utilise No + subjonctif présent",
        "Hagas est le subjonctif présent de hacer",
        "Structure : No hagas"
      ],
      correction: "No hagas",
      explanation: "Impératif négatif : No + subjonctif présent = No hagas (de hacer)"
    }
  },
  {
    id: "ex13",
    title: "Mots à Compléter - Subjonctif Présent",
    instruction: "Complétez avec le subjonctif présent",
    level: "Intermédiaire",
    type: "completion",
    content: {
      question: "Espero que _____ (venir) mañana. (subjonctif présent)",
      hints: [
        "Après 'espero que', utilisez le subjonctif présent",
        "Vengas est le subjonctif présent de venir",
        "Venga est aussi possible selon le contexte"
      ],
      correction: "vengas/venga",
      explanation: "Après 'espero que', le verbe passe au subjonctif présent : vengas (tú) ou venga (él/ella/usted)"
    }
  },
  {
    id: "ex14",
    title: "Mots à Compléter - Gérondif",
    instruction: "Complétez avec le gérondif",
    level: "Débutant",
    type: "completion",
    content: {
      question: "Estaba _____ (llover) cuando salí. (gérondif)",
      hints: [
        "Le gérondif de llover se forme avec la racine + -iendo",
        "Lloviendo exprime une action en cours",
        "Forme progressive : estaba + gérondif"
      ],
      correction: "lloviendo",
      explanation: "Gérondif de llover : lloviendo (racine llov- + -iendo)"
    }
  },
  {
    id: "ex15",
    title: "Mots à Compléter - Subjonctif Présent",
    instruction: "Complétez avec le subjonctif présent",
    level: "Intermédiaire",
    type: "completion",
    content: {
      question: "_____ (ser) posible que llegue tarde. (subjonctif présent)",
      hints: [
        "Après 'es posible que', utilisez le subjonctif présent",
        "Sea est le subjonctif présent de ser",
        "Structure : Sea posible que + subjonctif"
      ],
      correction: "Sea",
      explanation: "Après 'es posible que', le verbe passe au subjonctif présent : sea (de ser)"
    }
  }
];

export const conjugationTables = {
  presentIndicative: {
    title: "Présent de l'Indicatif - Terminaisons Régulières",
    headers: ["Personne", "-AR (hablar)", "-ER (comer)", "-IR (vivir)"],
    rows: [
      ["yo", "hablo", "como", "vivo"],
      ["tú", "hablas", "comes", "vives"],
      ["él/ella/usted", "habla", "come", "vive"],
      ["nosotros", "hablamos", "comemos", "vivimos"],
      ["vosotros", "habláis", "coméis", "vivís"],
      ["ellos/ellas/ustedes", "hablan", "comen", "viven"]
    ]
  },
  subjunctivePresent: {
    title: "Subjonctif Présent - Terminaisons",
    headers: ["Personne", "-AR (hablar)", "-ER (comer)", "-IR (vivir)"],
    rows: [
      ["yo", "hable", "coma", "viva"],
      ["tú", "hables", "comas", "vivas"],
      ["él/ella/usted", "hable", "coma", "viva"],
      ["nosotros", "hablemos", "comamos", "vivamos"],
      ["vosotros", "habléis", "comáis", "viváis"],
      ["ellos/ellas/ustedes", "hablen", "coman", "vivan"]
    ]
  },
  timeSequence: {
    title: "Concordance des Temps - Subjonctif",
    headers: ["Proposition Principale", "Proposition Subordonnée", "Exemple"],
    rows: [
      ["Présent", "Subjonctif présent", "Espero que vengas"],
      ["Passé", "Subjonctif imparfait", "Esperaba que vinieras"],
      ["Futur", "Subjonctif présent", "Diré que vengas"],
      ["Conditionnel", "Subjonctif imparfait", "Diría que vinieras"]
    ]
  }
}; 