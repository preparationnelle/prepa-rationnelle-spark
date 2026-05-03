export interface QuestionSection {
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

export interface QuestionExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'formation' | 'reponse' | 'dialogue' | 'correction';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const questionSections: QuestionSection[] = [
  {
    id: "poser-question",
    title: "Poser une Question",
    description: "Transformer une affirmation en interrogation avec signes et intonation",
    level: "Débutant",
    content: {
      rules: [
        "Ajoutez ¿ au début et ? à la fin",
        "Inversion sujet-verbe optionnelle (surtout pour l'emphase)",
        "Pratiquez l'intonation montante à la fin",
        "Pas d'inversion obligatoire comme en français formel"
      ],
      examples: [
        {
          spanish: "Tú comes",
          french: "Tu manges",
          explanation: "Affirmation simple"
        },
        {
          spanish: "¿Comes tú?",
          french: "Manges-tu ?",
          explanation: "Question avec inversion optionnelle"
        },
        {
          spanish: "¿Cómo estás?",
          french: "Comment vas-tu ?",
          explanation: "Question avec mot interrogatif"
        },
        {
          spanish: "¿Qué hora es?",
          french: "Quelle heure est-il ?",
          explanation: "Question courante quotidienne"
        }
      ],
      tips: [
        "Pratiquez l'intonation montante à la fin",
        "Piège francophone : Pas d'inversion obligatoire comme en français formel",
        "Commencez par des questions simples",
        "Les signes ¿? sont obligatoires"
      ]
    }
  },
  {
    id: "mots-questionnement",
    title: "Les Mots de Questionnement",
    description: "Mots interrogatifs qui introduisent les questions et remplacent l'information recherchée",
    level: "Débutant",
    content: {
      rules: [
        "Placés au début de la question",
        "Accents obligatoires sur les interrogatifs",
        "Remplacent l'information recherchée",
        "Peuvent être combinés avec des prépositions"
      ],
      examples: [
        {
          spanish: "¿Qué haces?",
          french: "Que fais-tu ?",
          explanation: "Qué = que (quoi)"
        },
        {
          spanish: "¿Quién es?",
          french: "Qui est-ce ?",
          explanation: "Quién = qui"
        },
        {
          spanish: "¿Cómo estás?",
          french: "Comment vas-tu ?",
          explanation: "Cómo = comment"
        },
        {
          spanish: "¿Dónde vives?",
          french: "Où vis-tu ?",
          explanation: "Dónde = où"
        },
        {
          spanish: "¿Cuándo llegas?",
          french: "Quand arrives-tu ?",
          explanation: "Cuándo = quand"
        },
        {
          spanish: "¿Por qué no vienes?",
          french: "Pourquoi ne viens-tu pas ?",
          explanation: "Por qué = pourquoi"
        },
        {
          spanish: "¿Cuánto cuesta?",
          french: "Combien ça coûte ?",
          explanation: "Cuánto = combien"
        }
      ],
      irregularities: [
        {
          pattern: "Mots interrogatifs avec prépositions",
          examples: [
            "¿De dónde? (D'où ?)",
            "¿Con quién? (Avec qui ?)",
            "¿Para qué? (Pour quoi ?)",
            "¿En qué? (En quoi ?)"
          ],
          notes: "Les prépositions se placent avant le mot interrogatif"
        }
      ],
      tips: [
        "Mémorisez-les comme un ensemble : Qui, quoi, où, quand, comment, pourquoi, combien",
        "Piège : Accent sur l'interrogatif (que sans accent = que conjonction)",
        "Pratiquez avec des questions quotidiennes",
        "Attention aux accents obligatoires"
      ]
    }
  },
  {
    id: "retrouver-question",
    title: "Retrouver la Question",
    description: "Reformuler une réponse en question correspondante",
    level: "Intermédiaire",
    content: {
      rules: [
        "Identifiez l'élément manquant dans la réponse",
        "Utilisez le mot interrogatif approprié",
        "Analysez le type d'information (lieu, temps, personne, etc.)",
        "Construisez la question avec la structure appropriée"
      ],
      examples: [
        {
          spanish: "Voy al cine",
          french: "Je vais au cinéma",
          explanation: "Réponse avec lieu"
        },
        {
          spanish: "¿Dónde vas?",
          french: "Où vas-tu ?",
          explanation: "Question correspondante avec dónde"
        },
        {
          spanish: "Llego a las tres",
          french: "J'arrive à trois heures",
          explanation: "Réponse avec temps"
        },
        {
          spanish: "¿Cuándo llegas?",
          french: "Quand arrives-tu ?",
          explanation: "Question correspondante avec cuándo"
        }
      ],
      tips: [
        "Analysez la réponse pour le type (lieu → dónde ; temps → cuándo)",
        "Identifiez l'élément manquant",
        "Utilisez le bon mot interrogatif",
        "Pratiquez avec des réponses variées"
      ]
    }
  },
  {
    id: "dialogue-renseignements",
    title: "Dialogue: Demander un Renseignement",
    description: "Utiliser les questions dans des dialogues pour obtenir des informations",
    level: "Intermédiaire",
    content: {
      rules: [
        "Questions fermées pour oui/non",
        "Questions ouvertes pour informations détaillées",
        "Adaptez la réponse à la question",
        "Utilisez pour des scénarios réels"
      ],
      examples: [
        {
          spanish: "¿Vas al supermercado?",
          french: "Vas-tu au supermarché ?",
          explanation: "Question fermée (oui/non)"
        },
        {
          spanish: "¿Dónde vas?",
          french: "Où vas-tu ?",
          explanation: "Question ouverte avec mot interrogatif"
        },
        {
          spanish: "¿Cómo llego a la estación?",
          french: "Comment arriver à la gare ?",
          explanation: "Question pour demander des directions"
        },
        {
          spanish: "Ve recto y gira a la izquierda",
          french: "Va tout droit et tourne à gauche",
          explanation: "Réponse avec instructions"
        }
      ],
      tips: [
        "Utilisez pour scénarios réels (demander l'heure, directions)",
        "Piège : Réponses doivent matcher le mot interrogatif",
        "Pratiquez des dialogues complets",
        "Questions fermées pour confirmations, ouvertes pour détails"
      ]
    }
  },
  {
    id: "structures-verbes-prepositions",
    title: "Structures Interrogatives avec Verbes et Prépositions",
    description: "Combiner verbes et prépositions pour des questions précises",
    level: "Intermédiaire",
    content: {
      rules: [
        "Verbes influencent la préposition utilisée",
        "Inversion pour le registre formel",
        "Intégrez les prépositions tôt dans l'apprentissage",
        "Attention aux prépositions obligatoires"
      ],
      examples: [
        {
          spanish: "¿En qué piensas?",
          french: "À quoi penses-tu ?",
          explanation: "Pensar en + complément"
        },
        {
          spanish: "¿Adónde va usted?",
          french: "Où allez-vous ?",
          explanation: "Inversion pour le registre formel"
        },
        {
          spanish: "¿Para qué sirve esto?",
          french: "À quoi ça sert ?",
          explanation: "Para pour exprimer le but"
        },
        {
          spanish: "¿De qué color es?",
          french: "De quelle couleur est-ce ?",
          explanation: "De pour exprimer la caractéristique"
        }
      ],
      tips: [
        "Intégrez prépositions tôt (a, de, en)",
        "Piège : Oubli de préposition (pas '¿Qué piensas?' mais '¿En qué piensas?')",
        "Pratiquez avec des verbes courants",
        "Attention aux prépositions obligatoires selon le verbe"
      ]
    }
  },
  {
    id: "questions-ouvertes-fermees",
    title: "Questions Ouvertes vs. Fermées",
    description: "Distinguer et utiliser les différents types de questions",
    level: "Intermédiaire",
    content: {
      rules: [
        "Ouvertes : commencent par mot interrogatif, réponses détaillées",
        "Fermées : oui/non, sans mot interrogatif ou avec si/no",
        "Ouvertes pour conversations, fermées pour confirmations",
        "Choisissez selon l'objectif de communication"
      ],
      examples: [
        {
          spanish: "¿Quieres café?",
          french: "Veux-tu du café ?",
          explanation: "Question fermée (oui/non)"
        },
        {
          spanish: "¿Qué quieres beber?",
          french: "Que veux-tu boire ?",
          explanation: "Question ouverte pour choix détaillé"
        },
        {
          spanish: "¿Es verdad?",
          french: "Est-ce vrai ?",
          explanation: "Question fermée de confirmation"
        },
        {
          spanish: "¿Qué opinas?",
          french: "Que penses-tu ?",
          explanation: "Question ouverte pour opinion détaillée"
        }
      ],
      tips: [
        "Ouvertes pour conversations ; fermées pour confirmations",
        "Utilisez les questions ouvertes pour engager la conversation",
        "Questions fermées pour vérifier des informations",
        "Pratiquez les deux types dans des contextes variés"
      ]
    }
  },
  {
    id: "interrogatifs-dialogues-quotidiens",
    title: "Interrogatifs dans des Dialogues Quotidiens",
    description: "Intégrer les interrogatifs dans des échanges naturels",
    level: "Intermédiaire",
    content: {
      rules: [
        "Utilisez pour des situations personnelles et d'apprentissage",
        "Adaptez le ton selon le registre (tú vs usted)",
        "Pratiquez des rôle-plays réalistes",
        "Intégrez dans des contextes quotidiens"
      ],
      examples: [
        {
          spanish: "¿Cuántos años tienes?",
          french: "Quel âge as-tu ?",
          explanation: "Question personnelle avec cuántos"
        },
        {
          spanish: "¿Cómo se dice...?",
          french: "Comment dit-on... ?",
          explanation: "Question pour l'apprentissage"
        },
        {
          spanish: "¿Dónde está el baño?",
          french: "Où est la salle de bain ?",
          explanation: "Question pratique quotidienne"
        },
        {
          spanish: "Al final del pasillo",
          french: "Au bout du couloir",
          explanation: "Réponse avec indication de lieu"
        }
      ],
      tips: [
        "Pratiquez des rôle-plays (demander directions, infos)",
        "Piège : Ton poli avec usted pour le registre formel",
        "Intégrez dans des situations réelles",
        "Utilisez pour l'apprentissage de la langue"
      ]
    }
  },
  {
    id: "erreurs-courantes",
    title: "Erreurs Courantes dans la Formulation des Questions",
    description: "Identifier et corriger les erreurs fréquentes",
    level: "Intermédiaire",
    content: {
      rules: [
        "Vérifiez les signes ¿? obligatoires",
        "Attention aux accents sur les mots interrogatifs",
        "Évitez l'inversion forcée inutile",
        "Utilisez les bonnes prépositions"
      ],
      examples: [
        {
          spanish: "Que haces?",
          french: "Que fais-tu ?",
          explanation: "Erreur : oubli des signes ¿?"
        },
        {
          spanish: "¿Qué haces?",
          french: "Que fais-tu ?",
          explanation: "Correct : avec signes et accent"
        },
        {
          spanish: "¿Dónde vienes?",
          french: "D'où viens-tu ?",
          explanation: "Erreur : oubli de la préposition de"
        },
        {
          spanish: "¿De dónde vienes?",
          french: "D'où viens-tu ?",
          explanation: "Correct : avec préposition de"
        }
      ],
      irregularities: [
        {
          pattern: "Erreurs fréquentes",
          examples: [
            "Oubli des signes ¿?",
            "Oubli des accents sur interrogatifs",
            "Inversion forcée inutile",
            "Prépositions erronées ou manquantes"
          ],
          notes: "Vérifiez systématiquement ces points"
        }
      ],
      tips: [
        "Vérifiez signes ¿? ; pratiquez avec audio pour intonation",
        "Piège francophone : Pas de 'est-ce que' – direct en espagnol",
        "Pratiquez la correction d'erreurs",
        "Attention aux prépositions obligatoires"
      ]
    }
  },
  {
    id: "questions-temps",
    title: "Questions sur le Temps et la Fréquence",
    description: "Interroger sur le temps, la durée et la fréquence",
    level: "Intermédiaire",
    content: {
      rules: [
        "Cuándo pour le moment précis",
        "Cuánto tiempo pour la durée",
        "Con qué frecuencia pour la fréquence",
        "Desde cuándo pour le point de départ"
      ],
      examples: [
        {
          spanish: "¿Cuándo empieza la película?",
          french: "Quand commence le film ?",
          explanation: "Cuándo pour le moment précis"
        },
        {
          spanish: "¿Cuánto tiempo dura?",
          french: "Combien de temps ça dure ?",
          explanation: "Cuánto tiempo pour la durée"
        },
        {
          spanish: "¿Con qué frecuencia vas al gimnasio?",
          french: "À quelle fréquence vas-tu à la salle ?",
          explanation: "Con qué frecuencia pour la fréquence"
        },
        {
          spanish: "¿Desde cuándo estudias español?",
          french: "Depuis quand étudies-tu l'espagnol ?",
          explanation: "Desde cuándo pour le point de départ"
        }
      ],
      tips: [
        "Distinguer le moment précis de la durée",
        "Utilisez desde pour indiquer le début",
        "Pratiquez avec des activités quotidiennes",
        "Attention aux prépositions avec cuándo"
      ]
    }
  },
  {
    id: "questions-quantite",
    title: "Questions sur la Quantité et la Mesure",
    description: "Interroger sur les quantités, mesures et nombres",
    level: "Intermédiaire",
    content: {
      rules: [
        "Cuánto pour les quantités indénombrables",
        "Cuántos/Cuántas pour les quantités dénombrables",
        "Cuánto cuesta pour les prix",
        "Cuánto mide pour les dimensions"
      ],
      examples: [
        {
          spanish: "¿Cuánto cuesta este libro?",
          french: "Combien coûte ce livre ?",
          explanation: "Cuánto pour le prix"
        },
        {
          spanish: "¿Cuántos estudiantes hay en la clase?",
          french: "Combien d'étudiants y a-t-il dans la classe ?",
          explanation: "Cuántos pour les personnes (masculin pluriel)"
        },
        {
          spanish: "¿Cuántas páginas tiene?",
          french: "Combien de pages a-t-il ?",
          explanation: "Cuántas pour les objets (féminin pluriel)"
        },
        {
          spanish: "¿Cuánto mide la mesa?",
          french: "Combien mesure la table ?",
          explanation: "Cuánto pour les dimensions"
        }
      ],
      tips: [
        "Accord en genre et nombre avec cuántos/cuántas",
        "Cuánto reste invariable pour les quantités indénombrables",
        "Pratiquez avec des objets du quotidien",
        "Attention aux accords avec les noms"
      ]
    }
  },
  {
    id: "questions-raison",
    title: "Questions sur la Raison et le But",
    description: "Interroger sur les causes, raisons et objectifs",
    level: "Avancé",
    content: {
      rules: [
        "Por qué pour la cause (pourquoi)",
        "Para qué pour le but (pour quoi faire)",
        "Por qué razón pour insister sur la raison",
        "A causa de qué pour la cause formelle"
      ],
      examples: [
        {
          spanish: "¿Por qué no viniste ayer?",
          french: "Pourquoi n'es-tu pas venu hier ?",
          explanation: "Por qué pour demander la cause"
        },
        {
          spanish: "¿Para qué sirve esta herramienta?",
          french: "À quoi sert cet outil ?",
          explanation: "Para qué pour demander l'utilité"
        },
        {
          spanish: "¿Por qué razón te fuiste?",
          french: "Pour quelle raison es-tu parti ?",
          explanation: "Por qué razón pour insister sur la raison"
        },
        {
          spanish: "¿A causa de qué se canceló?",
          french: "À cause de quoi a-t-on annulé ?",
          explanation: "A causa de qué pour le registre formel"
        }
      ],
      tips: [
        "Distinguer por qué (cause) de para qué (but)",
        "Por qué razón pour insister sur la raison",
        "A causa de qué pour le registre soutenu",
        "Pratiquez avec des situations variées"
      ]
    }
  },
  {
    id: "questions-hypothetiques",
    title: "Questions Hypothétiques et Conditionnelles",
    description: "Formuler des questions avec des conditions ou des hypothèses",
    level: "Avancé",
    content: {
      rules: [
        "Utilisez le subjonctif pour les hypothèses",
        "Si + condition pour les questions hypothétiques",
        "Attention à la concordance des temps",
        "Pratiquez avec des situations imaginaires"
      ],
      examples: [
        {
          spanish: "¿Qué harías si ganaras la lotería?",
          french: "Que ferais-tu si tu gagnais au loto ?",
          explanation: "Question hypothétique avec si + conditionnel"
        },
        {
          spanish: "¿Cómo sería el mundo sin internet?",
          french: "Comment serait le monde sans internet ?",
          explanation: "Question hypothétique avec subjonctif"
        },
        {
          spanish: "¿Dónde vivirías si pudieras elegir?",
          french: "Où habiterais-tu si tu pouvais choisir ?",
          explanation: "Question hypothétique avec condition"
        },
        {
          spanish: "¿Qué pasaría si no lloviera?",
          french: "Que se passerait-il s'il ne pleuvait pas ?",
          explanation: "Question hypothétique avec subjonctif"
        }
      ],
      tips: [
        "Utilisez le subjonctif pour les hypothèses",
        "Attention à la concordance des temps",
        "Pratiquez avec des situations imaginaires",
        "Si + conditionnel pour les hypothèses réalistes"
      ]
    }
  }
];

export const questionExercises: QuestionExercise[] = [
  {
    id: "ex1",
    title: "Former des questions",
    instruction: "Transformez les affirmations en questions appropriées",
    level: "Intermédiaire",
    type: "formation",
    content: {
      question: "Transformez 'Tú vives en Madrid' en question",
      hints: [
        "Identifiez l'élément à interroger (Madrid = lieu)",
        "Utilisez le mot interrogatif approprié pour le lieu",
        "Ajoutez les signes ¿?",
        "Pensez à l'intonation montante"
      ],
      correction: "¿Dónde vives?",
      explanation: "Dónde pour interroger sur le lieu, avec signes ¿? et intonation montante"
    }
  },
  {
    id: "ex2",
    title: "Répondre à des interrogatifs",
    instruction: "Fournissez des réponses appropriées aux questions",
    level: "Intermédiaire",
    type: "reponse",
    content: {
      question: "Répondez à '¿Qué hora es?'",
      hints: [
        "C'est une question sur l'heure",
        "Utilisez la structure 'Son las...' ou 'Es la...'",
        "Pensez à une heure concrète",
        "Réponse courte et directe"
      ],
      correction: "Son las tres",
      explanation: "Réponse à une question sur l'heure avec la structure 'Son las...'"
    }
  },
  {
    id: "ex3",
    title: "Créer un dialogue",
    instruction: "Créez un dialogue de 5 échanges demandant des renseignements",
    level: "Avancé",
    type: "dialogue",
    content: {
      question: "Créez un dialogue pour demander des directions vers la gare",
      hints: [
        "Commencez par une salutation",
        "Demandez poliment les directions",
        "Utilisez des questions ouvertes et fermées",
        "Incluez des remerciements",
        "5 échanges au total"
      ],
      correction: "A: ¿Hola! ¿Podrías ayudarme? B: ¡Por supuesto! A: ¿Cómo llego a la estación? B: Ve recto y gira a la derecha. A: ¿Está lejos? B: No, a 5 minutes. A: ¡Muchas gracias! B: De nada.",
      explanation: "Dialogue complet avec salutation, demande d'aide, directions, confirmation de distance et remerciements"
    }
  },
  {
    id: "ex4",
    title: "Identifier et corriger des erreurs",
    instruction: "Identifiez et corrigez les erreurs dans les questions données",
    level: "Avancé",
    type: "correction",
    content: {
      question: "Corrigez 'Que haces?' et 'Dónde vienes?'",
      hints: [
        "Vérifiez les signes d'interrogation ¿?",
        "Vérifiez les accents sur les mots interrogatifs",
        "Vérifiez les prépositions nécessaires",
        "Pensez aux erreurs courantes"
      ],
      correction: "¿Qué haces? et ¿De dónde vienes?",
      explanation: "Ajout des signes ¿? et de l'accent sur qué, ajout de la préposition de avec dónde"
    }
  }
];

export const questionTables = {
  motsInterrogatifs: {
    title: "Mots Interrogatifs - Usages Principaux",
    headers: ["Mot Interrogatif", "Sens", "Exemple", "Traduction"],
    rows: [
      ["¿Qué?", "Quoi/Que", "¿Qué haces?", "Que fais-tu ?"],
      ["¿Quién?", "Qui", "¿Quién es?", "Qui est-ce ?"],
      ["¿Cómo?", "Comment", "¿Cómo estás?", "Comment vas-tu ?"],
      ["¿Dónde?", "Où", "¿Dónde vives?", "Où vis-tu ?"],
      ["¿Cuándo?", "Quand", "¿Cuándo llegas?", "Quand arrives-tu ?"],
      ["¿Por qué?", "Pourquoi", "¿Por qué no vienes?", "Pourquoi ne viens-tu pas ?"],
      ["¿Cuánto?", "Combien", "¿Cuánto cuesta?", "Combien ça coûte ?"]
    ]
  },
  typesQuestions: {
    title: "Types de Questions - Ouvertes vs Fermées",
    headers: ["Type", "Caractéristique", "Exemple", "Réponse"],
    rows: [
      ["Ouverte", "Mot interrogatif", "¿Qué quieres?", "Réponse détaillée"],
      ["Fermée", "Oui/Non", "¿Quieres café?", "Sí/No"],
      ["Alternative", "Choix", "¿Prefieres té o café?", "Té ou café"],
      ["Rhetorique", "Pas de réponse", "¿No es obvio?", "Pas de réponse attendue"]
    ]
  },
  erreursCourantes: {
    title: "Erreurs Courantes à Éviter",
    headers: ["Erreur", "Correct", "Explication", "Conseil"],
    rows: [
      ["Que haces?", "¿Qué haces?", "Oubli des signes ¿?", "Vérifiez toujours les signes"],
      ["¿Dónde vienes?", "¿De dónde vienes?", "Préposition manquante", "Attention aux prépositions"],
      ["¿Que hora es?", "¿Qué hora es?", "Accent manquant", "Qué avec accent obligatoire"],
      ["¿Tu vives aquí?", "¿Vives aquí?", "Inversion inutile", "Pas d'inversion forcée"]
    ]
  }
}; 