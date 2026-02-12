import { MathFlashcard } from "./mathFlashcardsData";

export const englishGrammarFlashcards: Record<string, MathFlashcard[]> = {
    'temps-verbaux': [
        {
            id: 1,
            front: "Quand utilise-t-on le Present Perfect ?",
            back: "Pour une action passée qui a une conséquence dans le présent, ou une action commencée dans le passé et qui continue.",
            category: "Usage",
            chapter: 1,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Quelle est la différence entre Present Perfect et Past Simple ?",
            back: "Past Simple = action terminée, datée. Present Perfect = lien avec le présent, date indéfinie ou période non terminée.",
            category: "Confusion",
            chapter: 1,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Quand utilise-t-on le Past Perfect ?",
            back: "Pour parler d'une action antérieure à une autre action passée ('le passé du passé').",
            category: "Usage",
            chapter: 1,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Comment forme-t-on le Present Continuous ?",
            back: "Auxilliaire BE (au présent) + Verbe en -ING.",
            category: "Formation",
            chapter: 1,
            difficulty: "facile"
        },
        {
            id: 5,
            front: "Citez 3 mots-clés souvent utilisés avec le Present Perfect.",
            back: "Since, For, Just, Already, Yet, Ever, Never.",
            category: "Mots-clés",
            chapter: 1,
            difficulty: "facile"
        }
    ],
    'conditionnels': [
        {
            id: 1,
            front: "Structure du 'Zero Conditional'",
            back: "If + Present Simple, Present Simple. (Vérités générales)",
            category: "Structure",
            chapter: 2,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Structure du 'First Conditional'",
            back: "If + Present Simple, Will + Base Verbale. (Futur probable)",
            category: "Structure",
            chapter: 2,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Structure du 'Second Conditional'",
            back: "If + Past Simple, Would + Base Verbale. (Hypothèse irréelle au présent)",
            category: "Structure",
            chapter: 2,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Structure du 'Third Conditional'",
            back: "If + Past Perfect, Would have + Participe Passé. (Regret/Hypothèse au passé)",
            category: "Structure",
            chapter: 2,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "Traduction de 'Si j'étais toi' en anglais",
            back: "If I were you (Subjonctif passé, 'were' pour toutes les personnes).",
            category: "Exception",
            chapter: 2,
            difficulty: "moyen"
        }
    ],
    'voix-passives': [
        {
            id: 1,
            front: "Structure générale de la voix passive",
            back: "BE (au temps voulu) + Participe Passé.",
            category: "Formation",
            chapter: 3,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Transformez à la voix passive : 'Someone stole my car.'",
            back: "My car was stolen.",
            category: "Application",
            chapter: 3,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Quelle préposition introduit l'agent (celui qui fait l'action) ?",
            back: "BY (ex: The book was written by Orwell).",
            category: "Grammaire",
            chapter: 3,
            difficulty: "facile"
        },
        {
            id: 4,
            front: "Peut-on mettre à la voix passive un verbe intransitif (sans COD) ?",
            back: "Non, car il n'y a pas d'objet à transformer en sujet.",
            category: "Règle",
            chapter: 3,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "La voix passive avec 'People say that...'",
            back: "It is said that... OU [Sujet] is said to...",
            category: "Avancé",
            chapter: 3,
            difficulty: "difficile"
        }
    ],
    'discours-indirect': [
        {
            id: 1,
            front: "Règle de concordance : Present Simple devient...",
            back: "Past Simple.",
            category: "Concordance",
            chapter: 4,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Règle de concordance : Will devient...",
            back: "Would.",
            category: "Concordance",
            chapter: 4,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Règle de concordance : 'Tomorrow' devient...",
            back: "The next day / The following day.",
            category: "Temps",
            chapter: 4,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Règle de concordance : 'Here' devient...",
            back: "There.",
            category: "Lieu",
            chapter: 4,
            difficulty: "facile"
        },
        {
            id: 5,
            front: "Structure pour les questions : 'Where is he?' -> He asked me...",
            back: "... where he was. (Pas d'inversion sujet-verbe au discours indirect)",
            category: "Structure",
            chapter: 4,
            difficulty: "difficile"
        }
    ],
    'modaux': [
        {
            id: 1,
            front: "Quel modal exprime la capacité ?",
            back: "CAN (présent) / COULD (passé) / BE ABLE TO (tous temps).",
            category: "Sens",
            chapter: 5,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Différence entre MUST et HAVE TO ?",
            back: "MUST = obligation venant de soi-même (subjectif). HAVE TO = obligation externe (loi, règle).",
            category: "Nuance",
            chapter: 5,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Quel modal pour le conseil ?",
            back: "SHOULD / OUGHT TO.",
            category: "Sens",
            chapter: 5,
            difficulty: "facile"
        },
        {
            id: 4,
            front: "Comment exprimer une probabilité forte au passé (ex: Il a dû rater son train) ?",
            back: "MUST HAVE + Participe Passé (He must have missed his train).",
            category: "Probabilité",
            chapter: 5,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "Quel modal pour l'interdiction ?",
            back: "MUSTN'T (attention: don't have to = absence d'obligation).",
            category: "Sens",
            chapter: 5,
            difficulty: "moyen"
        }
    ],
    'prepositions': [
        {
            id: 1,
            front: "Préposition pour les jours de la semaine (ex: ___ Monday)",
            back: "ON.",
            category: "Temps",
            chapter: 6,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Préposition pour les mois et années (ex: ___ 2024)",
            back: "IN.",
            category: "Temps",
            chapter: 6,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Différence entre 'Good at' et 'Good in' ?",
            back: "Good AT = compétence (Good at maths). In est rarement utilisé dans ce sens.",
            category: "Expression",
            chapter: 6,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Verbe + Préposition : Depend ___",
            back: "ON.",
            category: "Collocation",
            chapter: 6,
            difficulty: "facile"
        },
        {
            id: 5,
            front: "Phrasal verb : 'To give up' signifie...",
            back: "Abandonner / Arrêter (une habitude).",
            category: "Vocabulaire",
            chapter: 6,
            difficulty: "moyen"
        }
    ],
    'articles': [
        {
            id: 1,
            front: "Quand utilise-t-on 'THE' ?",
            back: "Pour parler de quelque chose de spécifique ou déjà mentionné.",
            category: "Usage",
            chapter: 7,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Article devant les noms de pays pluriels (ex: USA, Netherlands)",
            back: "THE (The USA, The Netherlands).",
            category: "Géographie",
            chapter: 7,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Article devant les généralités (ex: ___ cats are cute)",
            back: "Ø (Pas d'article : Cats are cute).",
            category: "Généralité",
            chapter: 7,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Article devant les noms de métiers (ex: He is ___ engineer)",
            back: "A ou AN (He is an engineer).",
            category: "Métiers",
            chapter: 7,
            difficulty: "facile"
        },
        {
            id: 5,
            front: "A ou AN devant 'university' ?",
            back: "A university (car le son est /ju:/, une consonne phonétique).",
            category: "Prononciation",
            chapter: 7,
            difficulty: "moyen"
        }
    ],
    'relatives': [
        {
            id: 1,
            front: "Pronom relatif pour les personnes",
            back: "WHO (ou THAT).",
            category: "Pronom",
            chapter: 8,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Pronom relatif pour les objets/animaux",
            back: "WHICH (ou THAT).",
            category: "Pronom",
            chapter: 8,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Pronom relatif pour la possession",
            back: "WHOSE.",
            category: "Pronom",
            chapter: 8,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Différence entre 'Defining' et 'Non-defining' relative clause",
            back: "Defining = essentielle au sens (pas de virgules). Non-defining = info extra (entre virgules).",
            category: "Grammaire",
            chapter: 8,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "Peut-on omettre le pronom relatif ?",
            back: "Oui, si c'est une 'defining clause' et que le pronom est COD (ex: The man I saw).",
            category: "Omission",
            chapter: 8,
            difficulty: "difficile"
        }
    ],
    'gerondif-infinitif': [
        {
            id: 1,
            front: "Après une préposition, le verbe est...",
            back: "Au gérondif (-ING). Ex: Interested in learning.",
            category: "Règle",
            chapter: 9,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Verbe 'Enjoy' + ...",
            back: "-ING (I enjoy reading).",
            category: "Verbe",
            chapter: 9,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Verbe 'Want' + ...",
            back: "TO + Infinitif (I want to go).",
            category: "Verbe",
            chapter: 9,
            difficulty: "facile"
        },
        {
            id: 4,
            front: "Différence : Stop doing vs Stop to do",
            back: "Stop doing = arrêter l'action. Stop to do = s'arrêter pour faire autre chose.",
            category: "Nuance",
            chapter: 9,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "Expression 'Look forward to' + ...",
            back: "-ING (I look forward to meeting you).",
            category: "Exception",
            chapter: 9,
            difficulty: "difficile"
        }
    ],
    'comparatifs': [
        {
            id: 1,
            front: "Comparatif de supériorité (adjectif court)",
            back: "Adj + -ER + THAN (ex: Faster than).",
            category: "Formation",
            chapter: 10,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Comparatif de supériorité (adjectif long)",
            back: "MORE + Adj + THAN (ex: More expensive than).",
            category: "Formation",
            chapter: 10,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Comparatif irrégulier de 'Good'",
            back: "Better.",
            category: "Irrégulier",
            chapter: 10,
            difficulty: "facile"
        },
        {
            id: 4,
            front: "Comparatif irrégulier de 'Bad'",
            back: "Worse.",
            category: "Irrégulier",
            chapter: 10,
            difficulty: "facile"
        },
        {
            id: 5,
            front: "Structure 'De plus en plus...'",
            back: "Comparative and Comparative (ex: Faster and faster / More and more tired).",
            category: "Structure",
            chapter: 10,
            difficulty: "moyen"
        }
    ],
    'questions': [
        {
            id: 1,
            front: "Structure d'une question fermée (Yes/No)",
            back: "Auxiliaire + Sujet + Verbe ? (ex: Do you like it?)",
            category: "Structure",
            chapter: 11,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Question sur le sujet (ex: Qui a appelé ?)",
            back: "Mot interrogatif + Verbe ? (Pas d'auxiliaire DO/DID). Ex: Who called?",
            category: "Exception",
            chapter: 11,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Question tag : 'You are tired, ...?'",
            back: "... aren't you?",
            category: "Tags",
            chapter: 11,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Question tag : 'She didn't come, ...?'",
            back: "... did she?",
            category: "Tags",
            chapter: 11,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Mot interrogatif pour la durée",
            back: "How long.",
            category: "Vocabulaire",
            chapter: 11,
            difficulty: "facile"
        }
    ],
    'expressions-temps': [
        {
            id: 1,
            front: "Différence entre 'For' et 'Since'",
            back: "For + Durée (2 years). Since + Point de départ (2010).",
            category: "Usage",
            chapter: 12,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Où place-t-on 'Ago' ?",
            back: "En fin de phrase (ex: 2 years ago).",
            category: "Place",
            chapter: 12,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "'During' vs 'While'",
            back: "During + Nom (During the film). While + Sujet + Verbe (While I was sleeping).",
            category: "Usage",
            chapter: 12,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Signification de 'Eventually'",
            back: "Finalement / À la fin (Faux-ami, ne veut PAS dire éventuellement).",
            category: "Faux-ami",
            chapter: 12,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Usage de 'Used to'",
            back: "Pour une habitude passée révolue (I used to smoke = Je fumais avant).",
            category: "Habitude",
            chapter: 12,
            difficulty: "moyen"
        }
    ],
    'concordance': [
        {
            id: 1,
            front: "Après 'It's high time', on utilise...",
            back: "Le Prétérit Modal (It's high time we left).",
            category: "Expression",
            chapter: 13,
            difficulty: "difficile"
        },
        {
            id: 2,
            front: "Après 'I wish' + regret présent",
            back: "Past Simple (I wish I knew).",
            category: "Souhait",
            chapter: 13,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Après 'I wish' + regret passé",
            back: "Past Perfect (I wish I had known).",
            category: "Souhait",
            chapter: 13,
            difficulty: "difficile"
        },
        {
            id: 4,
            front: "Dans une subordonnée de temps au futur (When...)",
            back: "On utilise le Présent (When he arrives, we will leave).",
            category: "Règle",
            chapter: 13,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "'I'd rather' + nouveau sujet + ...",
            back: "Prétérit Modal (I'd rather you stayed).",
            category: "Expression",
            chapter: 13,
            difficulty: "difficile"
        }
    ],
    'quantifieurs': [
        {
            id: 1,
            front: "Much ou Many ?",
            back: "Many + Dénombrables (Many books). Much + Indénombrables (Much water).",
            category: "Usage",
            chapter: 14,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Little ou Few ?",
            back: "Few + Dénombrables (Few friends). Little + Indénombrables (Little time).",
            category: "Usage",
            chapter: 14,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Différence 'A few' vs 'Few'",
            back: "A few = quelques (positif). Few = peu de (négatif).",
            category: "Nuance",
            chapter: 14,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Utilisation de 'All' vs 'Whole'",
            back: "All the day / The whole day. (Ordre des mots change).",
            category: "Structure",
            chapter: 14,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Singulier ou pluriel après 'Every' ?",
            back: "Singulier (Every student is...).",
            category: "Règle",
            chapter: 14,
            difficulty: "facile"
        }
    ],
    'subjunctif': [
        {
            id: 1,
            front: "Construction 'I suggest that he...'",
            back: "... do it. (Subjonctif présent = Base Verbale).",
            category: "Formation",
            chapter: 15,
            difficulty: "difficile"
        },
        {
            id: 2,
            front: "Construction 'It is important that she...'",
            back: "... be there. (Subjonctif présent).",
            category: "Formation",
            chapter: 15,
            difficulty: "difficile"
        },
        {
            id: 3,
            front: "Différence Subjonctif vs Indicatif après 'suggest'",
            back: "En anglais britannique formel, on garde often le subjonctif ou 'should'.",
            category: "Variante",
            chapter: 15,
            difficulty: "difficile"
        },
        {
            id: 4,
            front: "Verbes suivis du subjonctif",
            back: "Suggest, Recommend, Insist, Demand, Request.",
            category: "Liste",
            chapter: 15,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Alternative au subjonctif avec 'should'",
            back: "I suggest that he should do it.",
            category: "Alternative",
            chapter: 15,
            difficulty: "moyen"
        }
    ],
    'inversions': [
        {
            id: 1,
            front: "Inversion avec adverbe négatif (ex: Never)",
            back: "Never have I seen such a thing. (Aux + Sujet + Verbe).",
            category: "Structure",
            chapter: 16,
            difficulty: "difficile"
        },
        {
            id: 2,
            front: "Adverbes déclenchant l'inversion",
            back: "Never, Rarely, Seldom, Hardly, Scarcely, No sooner.",
            category: "Liste",
            chapter: 16,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Structure 'Hardly... when...'",
            back: "Hardly had I arrived when the phone rang.",
            category: "Structure",
            chapter: 16,
            difficulty: "difficile"
        },
        {
            id: 4,
            front: "Structure 'So... that...' avec inversion",
            back: "So beautiful was she that... (Au lieu de She was so beautiful).",
            category: "Emphase",
            chapter: 16,
            difficulty: "difficile"
        },
        {
            id: 5,
            front: "Inversion locative (ex: Here comes...)",
            back: "Here comes the bus. (Verbe + Sujet nominal).",
            category: "Locatif",
            chapter: 16,
            difficulty: "moyen"
        }
    ],
    'connecteurs': [
        {
            id: 1,
            front: "Exprimez le contraste (Cependant)",
            back: "However, Nevertheless, Yet.",
            category: "Contraste",
            chapter: 17,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Exprimez la cause (Car/Puisque)",
            back: "Because, Since, As, For (formel).",
            category: "Cause",
            chapter: 17,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "Exprimez la conséquence (Donc)",
            back: "Therefore, Thus, Consequently, So.",
            category: "Conséquence",
            chapter: 17,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Exprimez l'addition (De plus)",
            back: "Moreover, Furthermore, In addition, Besides.",
            category: "Addition",
            chapter: 17,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Différence 'Despite' vs 'Although'",
            back: "Despite + Nom/ING. Although + Sujet + Verbe.",
            category: "Structure",
            chapter: 17,
            difficulty: "moyen"
        }
    ],
    'verbes-irreguliers': [
        {
            id: 1,
            front: "To Be (Prétérit / Participe Passé)",
            back: "Was/Were - Been",
            category: "Verbe",
            chapter: 18,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "To Go (Prétérit / Participe Passé)",
            back: "Went - Gone",
            category: "Verbe",
            chapter: 18,
            difficulty: "facile"
        },
        {
            id: 3,
            front: "To Buy (Prétérit / Participe Passé)",
            back: "Bought - Bought",
            category: "Verbe",
            chapter: 18,
            difficulty: "facile"
        },
        {
            id: 4,
            front: "To Choose (Prétérit / Participe Passé)",
            back: "Chose - Chosen",
            category: "Verbe",
            chapter: 18,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "To Lie (mentir) vs To Lie (être couché)",
            back: "Mentir: Lied - Lied. Être couché: Lay - Lain.",
            category: "Confusion",
            chapter: 18,
            difficulty: "difficile"
        }
    ],
    'causatives': [
        {
            id: 1,
            front: "Structure 'Faire faire qqch à qqn' (HAVE)",
            back: "Have someone DO something (Base Verbale).",
            category: "Structure",
            chapter: 19,
            difficulty: "difficile"
        },
        {
            id: 2,
            front: "Structure 'Faire faire qqch à qqn' (GET)",
            back: "Get someone TO DO something.",
            category: "Structure",
            chapter: 19,
            difficulty: "difficile"
        },
        {
            id: 3,
            front: "Structure 'Se faire faire qqch' (passif)",
            back: "Have something DONE (ex: Have my hair cut).",
            category: "Structure",
            chapter: 19,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Différence Make vs Have",
            back: "Make someone do = forcer/obliger. Have someone do = demander/responsabiliser.",
            category: "Nuance",
            chapter: 19,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Verbe 'Let' (Laisser faire)",
            back: "Let someone DO something (Base Verbale).",
            category: "Verbe",
            chapter: 19,
            difficulty: "facile"
        }
    ],
    'nuances-lexicales': [
        {
            id: 1,
            front: "Say vs Tell",
            back: "Say something (to someone). Tell someone something.",
            category: "Verbe",
            chapter: 20,
            difficulty: "facile"
        },
        {
            id: 2,
            front: "Make vs Do",
            back: "Make = créer/produire. Do = action/tâche. (ex: Make a mistake, Do homework).",
            category: "Verbe",
            chapter: 20,
            difficulty: "moyen"
        },
        {
            id: 3,
            front: "Rise vs Raise",
            back: "Rise = augmenter (seul). Raise = augmenter (qqch).",
            category: "Verbe",
            chapter: 20,
            difficulty: "moyen"
        },
        {
            id: 4,
            front: "Economic vs Economical",
            back: "Economic = relatif à l'économie. Economical = pas cher / économe.",
            category: "Adjectif",
            chapter: 20,
            difficulty: "moyen"
        },
        {
            id: 5,
            front: "Remember to do vs Remember doing",
            back: "Remember to do = ne pas oublier de faire. Remember doing = se souvenir avoir fait.",
            category: "Verbe",
            chapter: 20,
            difficulty: "difficile"
        }
    ]
};
