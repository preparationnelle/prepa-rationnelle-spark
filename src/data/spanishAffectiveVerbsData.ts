export interface AffectiveVerbSection {
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

export interface AffectiveVerbExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'preferences' | 'transformation' | 'dialogue' | 'conjugation';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const affectiveVerbSections: AffectiveVerbSection[] = [
  {
    id: "tournures-affectives",
    title: "Tournures Affectives - Gustar, Doler, Encantar",
    description: "Les structures où le verbe exprime un sentiment 'subi' par le sujet",
    level: "Intermédiaire",
    content: {
      rules: [
        "Le verbe s'accorde avec la chose qui provoque le sentiment (sujet)",
        "Pas avec la personne qui le ressent (complément indirect : me/te/le/nos/os/les)",
        "Structure inversée par rapport au français",
        "Pensez à 'ça me plaît' au lieu de 'j'aime ça'"
      ],
      examples: [
        {
          spanish: "Me gusta el libro",
          french: "Le livre me plaît (j'aime le livre)",
          explanation: "Singulier : gusta accordé avec el libro"
        },
        {
          spanish: "Me gustan los libros",
          french: "Les livres me plaisent (j'aime les livres)",
          explanation: "Pluriel : gustan accordé avec los libros"
        },
        {
          spanish: "Te encanta la música",
          french: "La musique t'enchante (tu adores la musique)",
          explanation: "Encantar plus fort que gustar"
        },
        {
          spanish: "Le duele la cabeza",
          french: "La tête lui fait mal (il a mal à la tête)",
          explanation: "Doler pour exprimer la douleur"
        },
        {
          spanish: "Nos gusta viajar",
          french: "Voyager nous plaît (nous aimons voyager)",
          explanation: "Avec infinitif, gusta au singulier"
        },
        {
          spanish: "A los niños les gusta jugar",
          french: "Jouer plaît aux enfants (les enfants aiment jouer)",
          explanation: "Avec groupe de personnes, le pour clarté"
        }
      ],
      tips: [
        "Pensez à 'ça me plaît' au lieu de 'j'aime ça' pour inverser mentalement",
        "Piège francophone : Ne conjuguez pas au sujet personnel (pas 'yo gusto')",
        "Le verbe s'accorde avec le sujet réel (la chose)",
        "Utilisez les pronoms indirects pour indiquer qui ressent"
      ]
    }
  },
  {
    id: "gustar-plaire",
    title: "Gustar = Plaire",
    description: "Utiliser gustar pour exprimer des goûts ou préférences",
    level: "Intermédiaire",
    content: {
      rules: [
        "Complément indirect + gustar + sujet",
        "Au passé : Me gustó la película",
        "Pour intensité : Me gusta mucho",
        "Accord avec le sujet réel (gustar au singulier si sujet singulier)"
      ],
      examples: [
        {
          spanish: "Me gustó la película",
          french: "Le film m'a plu",
          explanation: "Passé simple : gustó accordé avec la película"
        },
        {
          spanish: "Nos gusta viajar",
          french: "Voyager nous plaît (nous aimons voyager)",
          explanation: "Infinitif comme sujet, gusta au singulier"
        },
        {
          spanish: "Me gusta mucho el café",
          french: "J'aime beaucoup le café",
          explanation: "Mucho pour intensifier le sentiment"
        },
        {
          spanish: "Te gustan las películas de acción",
          french: "Tu aimes les films d'action",
          explanation: "Pluriel : gustan accordé avec las películas"
        },
        {
          spanish: "Le gusta leer",
          french: "Il aime lire",
          explanation: "Infinitif comme sujet, gusta au singulier"
        },
        {
          spanish: "A mí me gusta, a ti te encanta",
          french: "À moi ça me plaît, à toi ça t'enchante",
          explanation: "Emphase avec pronom tonique"
        }
      ],
      tips: [
        "Pour intensité : Me gusta mucho",
        "Accord avec le sujet réel (gustar au singulier si sujet singulier)",
        "Utilisez les pronoms indirects pour clarté",
        "Pratiquez avec des sujets singuliers et pluriels"
      ]
    }
  },
  {
    id: "conjugaison-gustar",
    title: "Conjugaison de Gustar",
    description: "Conjugaison régulière en -ar, souvent au 3e personne",
    level: "Intermédiaire",
    content: {
      rules: [
        "Régulier en -ar, mais souvent au 3e personne (gusta/gustan)",
        "Présent : gusta (sing.), gustan (plur.)",
        "Imparfait : gustaba(n)",
        "Futur : gustará(n)",
        "Usage limité des autres personnes"
      ],
      examples: [
        {
          spanish: "Le gusta el café",
          french: "Le café lui plaît",
          explanation: "3e personne singulier : gusta"
        },
        {
          spanish: "Les gustan los libros",
          french: "Les livres leur plaisent",
          explanation: "3e personne pluriel : gustan"
        },
        {
          spanish: "Me gustaba la música",
          french: "La musique me plaisait",
          explanation: "Imparfait : gustaba accordé avec la música"
        },
        {
          spanish: "Te gustarán las películas",
          french: "Les films te plairont",
          explanation: "Futur : gustarán accordé avec las películas"
        },
        {
          spanish: "Nos gustaba viajar",
          french: "Voyager nous plaisait",
          explanation: "Infinitif comme sujet, gustaba au singulier"
        },
        {
          spanish: "Os gustará el viaje",
          french: "Le voyage vous plaira",
          explanation: "Futur : gustará accordé avec el viaje"
        }
      ],
      tips: [
        "Focalisez sur 3e personne",
        "Pratiquez avec compléments indirects",
        "Piège : Pas de formes comme 'gustamos' pour 'nous aimons'",
        "Utilisez 'nos gusta' pour exprimer nos préférences"
      ]
    }
  },
  {
    id: "gustar-doler",
    title: "Gustar et Doler",
    description: "Doler suit la même structure que gustar pour exprimer la douleur",
    level: "Intermédiaire",
    content: {
      rules: [
        "Me duele (ça me fait mal)",
        "Accord : Duele (sing.), duelen (plur.)",
        "Associez à parties du corps",
        "Doler irrégulier (o → ue : duele)"
      ],
      examples: [
        {
          spanish: "Me duele la cabeza",
          french: "La tête me fait mal (j'ai mal à la tête)",
          explanation: "Singulier : duele accordé avec la cabeza"
        },
        {
          spanish: "Le duelen los pies",
          french: "Les pieds lui font mal",
          explanation: "Pluriel : duelen accordé avec los pies"
        },
        {
          spanish: "Te duele el estómago",
          french: "L'estomac te fait mal",
          explanation: "Singulier : duele accordé avec el estómago"
        },
        {
          spanish: "Nos duelen las piernas",
          french: "Les jambes nous font mal",
          explanation: "Pluriel : duelen accordé avec las piernas"
        },
        {
          spanish: "Le duele la espalda",
          french: "Le dos lui fait mal",
          explanation: "Singulier : duele accordé avec la espalda"
        },
        {
          spanish: "Os duelen los brazos",
          french: "Les bras vous font mal",
          explanation: "Pluriel : duelen accordé avec los brazos"
        }
      ],
      tips: [
        "Associez à parties du corps",
        "Piège : Doler irrégulier (o → ue : duele)",
        "Même structure que gustar",
        "Accord avec la partie du corps (singulier/pluriel)"
      ]
    }
  },
  {
    id: "exprimer-gouts",
    title: "Exprimer les Goûts avec les Tournures Affectives",
    description: "Utiliser ces tournures pour parler de préférences",
    level: "Intermédiaire",
    content: {
      rules: [
        "¿Te gusta el chocolate? (Le chocolat te plaît ?)",
        "Réponse : Sí, me encanta (Oui, ça m'enchante)",
        "No me gustan las verduras (Les légumes ne me plaisent pas)",
        "Variez l'intensité : gusta, encanta, fascina"
      ],
      examples: [
        {
          spanish: "¿Te gusta el chocolate?",
          french: "Le chocolat te plaît ? (Aimes-tu le chocolat ?)",
          explanation: "Question avec tournure affective"
        },
        {
          spanish: "Sí, me encanta",
          french: "Oui, ça m'enchante (j'adore)",
          explanation: "Réponse avec encantar (plus fort que gustar)"
        },
        {
          spanish: "No me gustan las verduras",
          french: "Les légumes ne me plaisent pas (je n'aime pas les légumes)",
          explanation: "Négation avec gustan (pluriel)"
        },
        {
          spanish: "Me fascina la música clásica",
          french: "La musique classique me fascine",
          explanation: "Fascinar pour exprimer un intérêt intense"
        },
        {
          spanish: "¿Te gusta más el fútbol o el baloncesto?",
          french: "Tu préfères le football ou le basket ?",
          explanation: "Comparaison avec más"
        },
        {
          spanish: "Me gusta un poco la comida picante",
          french: "J'aime un peu la nourriture épicée",
          explanation: "Un poco pour atténuer l'intensité"
        }
      ],
      tips: [
        "Variez l'intensité : gusta (aime bien), encanta (adore), fascina (fascine)",
        "Piège : Subjonctif après expressions comme 'busco algo que me guste'",
        "Utilisez des adverbes pour nuancer",
        "Pratiquez avec des questions et réponses"
      ]
    }
  },
  {
    id: "structures-inversees",
    title: "Structures Inversées (Me gusta vs. I like)",
    description: "Les structures sont 'inversées' par rapport à l'anglais/français",
    level: "Avancé",
    content: {
      rules: [
        "En anglais/français : Sujet + verbe + objet ('I like it')",
        "En espagnol : Complément indirect + verbe + sujet ('Me gusta it')",
        "Traduisez mentalement 'ça plaît à moi' pour inverser",
        "Oubli d'accord du verbe avec le sujet réel"
      ],
      examples: [
        {
          spanish: "A los niños les gusta jugar",
          french: "Jouer plaît aux enfants (les enfants aiment jouar)",
          explanation: "Structure inversée : les enfants = complément indirect"
        },
        {
          spanish: "Me gusta el cine",
          french: "Le cinéma me plaît (j'aime le cinéma)",
          explanation: "Inversion : moi = complément, cinéma = sujet"
        },
        {
          spanish: "Te encantan las películas",
          french: "Les films t'enchante (tu adores les films)",
          explanation: "Pluriel : encantan accordé avec las películas"
        },
        {
          spanish: "Le fascina la literatura",
          french: "La littérature le fascine",
          explanation: "Fascinar avec structure inversée"
        },
        {
          spanish: "Nos gusta la música",
          french: "La musique nous plaît (nous aimons la musique)",
          explanation: "Nous = complément indirect, musique = sujet"
        },
        {
          spanish: "Os gustan los deportes",
          french: "Les sports vous plaisent (vous aimez les sports)",
          explanation: "Pluriel : gustan accordé avec los deportes"
        }
      ],
      tips: [
        "Traduisez mentalement 'ça plaît à moi' pour inverser",
        "Piège francophone : Oubli d'accord du verbe avec le sujet réel",
        "Gustan si pluriel, gusta si singulier",
        "Pratiquez la traduction mentale"
      ]
    }
  },
  {
    id: "autres-verbes-affectifs",
    title: "Autres Verbes Affectifs (Encantar, Faltar)",
    description: "Verbes similaires : Encantar, faltar, importar, molestar",
    level: "Avancé",
    content: {
      rules: [
        "Encantar plus fort que gustar : enchanter – adorer",
        "Faltar : manquer",
        "Importar : importer",
        "Molestar : déranger",
        "Tous suivent l'inversion, accordez au sujet"
      ],
      examples: [
        {
          spanish: "Me encanta la música",
          french: "La musique m'enchante (j'adore la musique)",
          explanation: "Encantar plus fort que gustar"
        },
        {
          spanish: "Me falta dinero",
          french: "L'argent me manque (je manque d'argent)",
          explanation: "Faltar pour exprimer le manque"
        },
        {
          spanish: "No me importa",
          french: "Ça ne m'importe pas (je m'en fiche)",
          explanation: "Importar pour exprimer l'importance"
        },
        {
          spanish: "Me molesta el ruido",
          french: "Le bruit me dérange",
          explanation: "Molestar pour exprimer l'inconfort"
        },
        {
          spanish: "Te encantan los libros",
          french: "Les livres t'enchante (tu adores les livres)",
          explanation: "Pluriel : encantan accordé avec los libros"
        },
        {
          spanish: "Le faltan dos euros",
          french: "Il lui manque deux euros",
          explanation: "Pluriel : faltan accordé avec dos euros"
        }
      ],
      tips: [
        "Groupe-les par sentiment (goût : gustar/encantar ; manque : faltar/quedar ; inconfort : doler/molestar)",
        "Piège : Tous suivent l'inversion, accordez au sujet",
        "Encantar = adorer, gustar = aimer bien",
        "Faltar = manquer de quelque chose"
      ]
    }
  },
  {
    id: "pronoms-indirects",
    title: "Usage avec Pronoms Indirects",
    description: "Les pronoms indirects sont obligatoires pour indiquer qui 'subit' le sentiment",
    level: "Avancé",
    content: {
      rules: [
        "Placement avant le verbe : Le duele a ella",
        "Avec infinitif : Me gusta comer",
        "Doublage avec a + pronom/nom pour clarté",
        "Le vs. les (singulier/pluriel)"
      ],
      examples: [
        {
          spanish: "Le duele a ella",
          french: "Ça lui fait mal à elle (doublage pour emphase)",
          explanation: "Le + a ella pour clarifier"
        },
        {
          spanish: "Me gusta comer",
          french: "Manger me plaît",
          explanation: "Avec infinitif comme sujet"
        },
        {
          spanish: "A mí me gusta, a ti te encanta",
          french: "À moi ça me plaît, à toi ça t'enchante",
          explanation: "Emphase avec pronom tonique"
        },
        {
          spanish: "Les doy a los niños",
          french: "Je leur donne aux enfants",
          explanation: "Doublage pour clarté"
        },
        {
          spanish: "A María le gusta el café",
          french: "À María le café lui plaît",
          explanation: "Nom + le pour clarté"
        },
        {
          spanish: "A nosotros nos gusta viajar",
          french: "À nous voyager nous plaît",
          explanation: "Pronom tonique + nos"
        }
      ],
      tips: [
        "Doublage avec a + pronom/nom pour clarté",
        "Piège : Le vs. les (singulier/pluriel)",
        "En régions, leísmo (le pour lo)",
        "Utilisez le doublage pour éviter l'ambiguïté"
      ]
    }
  },
  {
    id: "verbes-affectifs-avances",
    title: "Verbes Affectifs Avancés",
    description: "Verbes plus complexes et expressions idiomatiques",
    level: "Expert",
    content: {
      rules: [
        "Verbes avec prépositions : caer bien/mal, parecer",
        "Expressions idiomatiques avec verbes affectifs",
        "Subjonctif après expressions de recherche",
        "Nuances subtiles entre verbes similaires"
      ],
      examples: [
        {
          spanish: "Me cae bien tu amigo",
          french: "Ton ami me plaît (j'ai une bonne impression)",
          explanation: "Caer bien pour impression positive"
        },
        {
          spanish: "Me parece bien la idea",
          french: "L'idée me semble bien",
          explanation: "Parecer pour opinion"
        },
        {
          spanish: "Busco algo que me guste",
          french: "Je cherche quelque chose qui me plaise",
          explanation: "Subjonctif après busco algo que"
        },
        {
          spanish: "Me apetece un café",
          french: "J'ai envie d'un café",
          explanation: "Apetecer pour désir/envie"
        },
        {
          spanish: "Me conviene este horario",
          french: "Cet horaire m'arrange",
          explanation: "Convenir pour convenance"
        },
        {
          spanish: "Me interesa la historia",
          french: "L'histoire m'intéresse",
          explanation: "Interesar pour intérêt"
        }
      ],
      tips: [
        "Caer bien/mal pour impressions",
        "Parecer pour opinions",
        "Subjonctif après expressions de recherche",
        "Nuances entre verbes similaires"
      ]
    }
  },
  {
    id: "tournures-negatives",
    title: "Tournures Négatives et Restrictions",
    description: "Exprimer le dégoût, l'indifférence et les restrictions",
    level: "Expert",
    content: {
      rules: [
        "No me gusta pour dégoût",
        "No me importa pour indifférence",
        "Restrictions avec subjonctif",
        "Expressions de préférence négative"
      ],
      examples: [
        {
          spanish: "No me gusta nada el pescado",
          french: "Je n'aime pas du tout le poisson",
          explanation: "Nada pour renforcer la négation"
        },
        {
          spanish: "No me importa lo que digan",
          french: "Je me fiche de ce qu'ils disent",
          explanation: "Indifférence avec subjonctif"
        },
        {
          spanish: "No me apetece salir",
          french: "Je n'ai pas envie de sortir",
          explanation: "Pas d'envie avec infinitif"
        },
        {
          spanish: "No me conviene este trabajo",
          french: "Ce travail ne m'arrange pas",
          explanation: "Inconvénient"
        },
        {
          spanish: "No me interesa la política",
          french: "La politique ne m'intéresse pas",
          explanation: "Pas d'intérêt"
        },
        {
          spanish: "No me molesta el frío",
          french: "Le froid ne me dérange pas",
          explanation: "Pas de dérangement"
        }
      ],
      tips: [
        "Nada pour renforcer la négation",
        "Subjonctif après expressions négatives",
        "Infinitif après verbes affectifs négatifs",
        "Pratiquez les tournures négatives"
      ]
    }
  },
  {
    id: "contextes-quotidiens",
    title: "Contextes Quotidiens et Situations Réelles",
    description: "Utiliser les verbes affectifs dans des situations courantes",
    level: "Expert",
    content: {
      rules: [
        "Restaurant : préférences alimentaires",
        "Voyage : goûts culturels",
        "Travail : préférences professionnelles",
        "Relations : impressions et sentiments"
      ],
      examples: [
        {
          spanish: "¿Te gusta la comida mexicana?",
          french: "Tu aimes la cuisine mexicaine ?",
          explanation: "Restaurant : préférences culinaires"
        },
        {
          spanish: "Me encanta viajar por España",
          french: "J'adore voyager en Espagne",
          explanation: "Voyage : goûts culturels"
        },
        {
          spanish: "Le gusta trabajar en equipo",
          french: "Il aime travailler en équipe",
          explanation: "Travail : préférences professionnelles"
        },
        {
          spanish: "Me cae bien tu hermana",
          french: "Ta sœur me plaît (bonne impression)",
          explanation: "Relations : impressions personnelles"
        },
        {
          spanish: "Nos gusta la música en vivo",
          french: "Nous aimons la musique live",
          explanation: "Loisirs : préférences culturelles"
        },
        {
          spanish: "Te gusta más el verano o el invierno?",
          french: "Tu préfères l'été ou l'hiver ?",
          explanation: "Préférences saisonnières"
        }
      ],
      tips: [
        "Adaptez le vocabulaire au contexte",
        "Utilisez des expressions courantes",
        "Pratiquez avec des situations réelles",
        "Variez les verbes selon l'intensité"
      ]
    }
  }
];

export const affectiveVerbExercises: AffectiveVerbExercise[] = [
  {
    id: "ex1",
    title: "Exprimer des préférences",
    instruction: "Écrivez 10 phrases sur vos goûts avec gustar/encantar",
    level: "Intermédiaire",
    type: "preferences",
    content: {
      question: "Écrivez une phrase exprimant votre goût pour les films d'action",
      hints: [
        "Utilisez la structure : me + gustar/encantar + sujet",
        "Accordez le verbe avec le sujet (gusta/gustan)",
        "Pensez à 'ça me plaît' au lieu de 'j'aime'",
        "Utilisez gustar pour 'aimer bien' et encantar pour 'adorer'"
      ],
      correction: "Me gustan las películas de acción",
      explanation: "Structure : me (complément indirect) + gustan (accordé avec películas au pluriel) + las películas de acción (sujet)"
    }
  },
  {
    id: "ex2",
    title: "Transformer des phrases directes françaises",
    instruction: "Transformez des phrases directes françaises en tournures affectives",
    level: "Intermédiaire",
    type: "transformation",
    content: {
      question: "Transformez 'J'adore le chocolat' en espagnol avec tournure affective",
      hints: [
        "Pensez à la structure inversée",
        "'J'adore' devient 'me encanta'",
        "Le chocolat devient le sujet",
        "Structure : me + encantar + sujet"
      ],
      correction: "Me encanta el chocolate",
      explanation: "Structure inversée : me (complément indirect) + encanta (accordé avec chocolate au singulier) + el chocolate (sujet)"
    }
  },
  {
    id: "ex3",
    title: "Créer un dialogue exprimant des douleurs/préférences",
    instruction: "Créez un dialogue avec doler/faltar et gustar/encantar",
    level: "Avancé",
    type: "dialogue",
    content: {
      question: "Créez un dialogue entre deux personnes discutant de leurs goûts et d'une douleur",
      hints: [
        "Utilisez gustar/encantar pour les préférences",
        "Utilisez doler pour exprimer une douleur",
        "Incluez des questions et réponses",
        "Variez l'intensité avec gustar vs encantar",
        "Thème : nourriture et santé"
      ],
      correction: "A: ¿Te gusta la comida italiana? B: Sí, me encanta. ¿Y a ti? A: A mí me gusta mucho. ¿Te duele algo? B: Sí, me duele la cabeza.",
      explanation: "Dialogue avec questions sur préférences (gustar/encantar) et expression de douleur (doler), utilisant les structures affectives correctement"
    }
  },
  {
    id: "ex4",
    title: "Conjuguer les verbes affectifs",
    instruction: "Conjuguez gustar et doler dans différents temps et personnes",
    level: "Avancé",
    type: "conjugation",
    content: {
      question: "Conjuguez 'gustar' au présent avec 'me' et 'le gusta(n)'",
      hints: [
        "Rappelez-vous que gustar s'accorde avec le sujet (la chose)",
        "Me gusta pour sujet singulier, me gustan pour sujet pluriel",
        "Le gusta pour sujet singulier, le gustan pour sujet pluriel",
        "Pensez à la structure inversée"
      ],
      correction: "Me gusta el libro, me gustan los libros, le gusta el café, le gustan las películas",
      explanation: "Gusta accordé avec sujet singulier, gustan accordé avec sujet pluriel, avec me et le comme compléments indirects"
    }
  }
];

export const affectiveVerbTables = {
  verbesAffectifs: {
    title: "Verbes Affectifs Principaux",
    headers: ["Verbe", "Signification", "Structure", "Exemple"],
    rows: [
      ["Gustar", "Plaire (aimer bien)", "Me gusta(n) + sujet", "Me gusta el café"],
      ["Encantar", "Enchanter (adorer)", "Me encanta(n) + sujet", "Me encanta la música"],
      ["Doler", "Faire mal", "Me duele(n) + sujet", "Me duele la cabeza"],
      ["Faltar", "Manquer", "Me falta(n) + sujet", "Me falta dinero"],
      ["Importar", "Importer", "Me importa(n) + sujet", "No me importa"],
      ["Molestar", "Déranger", "Me molesta(n) + sujet", "Me molesta el ruido"]
    ]
  },
  conjugaison: {
    title: "Conjugaison des Verbes Affectifs",
    headers: ["Temps", "Singulier", "Pluriel", "Exemple"],
    rows: [
      ["Présent", "Gusta", "Gustan", "Me gusta el libro"],
      ["Imparfait", "Gustaba", "Gustaban", "Me gustaba la música"],
      ["Futur", "Gustará", "Gustarán", "Te gustará la película"],
      ["Passé simple", "Gustó", "Gustaron", "Le gustó el viaje"],
      ["Subjonctif", "Guste", "Gusten", "Busco algo que me guste"],
      ["Conditionnel", "Gustaría", "Gustarían", "Me gustaría viajar"]
    ]
  },
  pronomsIndirects: {
    title: "Pronoms Indirects avec Verbes Affectifs",
    headers: ["Personne", "Pronom", "Exemple", "Traduction"],
    rows: [
      ["1re sing.", "Me", "Me gusta", "Ça me plaît"],
      ["2e sing.", "Te", "Te gusta", "Ça te plaît"],
      ["3e sing.", "Le", "Le gusta", "Ça lui plaît"],
      ["1re plur.", "Nos", "Nos gusta", "Ça nous plaît"],
      ["2e plur.", "Os", "Os gusta", "Ça vous plaît"],
      ["3e plur.", "Les", "Les gusta", "Ça leur plaît"]
    ]
  }
}; 