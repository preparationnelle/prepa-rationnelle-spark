export interface TemporalSection {
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

export interface TemporalExercise {
  id: string;
  title: string;
  instruction: string;
  level: string;
  type: 'dates' | 'heures' | 'dialogue' | 'calcul';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const temporalSections: TemporalSection[] = [
  {
    id: "mois-jours-saisons",
    title: "Jours, Mois et Saisons",
    description: "Le vocabulaire de base pour le temps calendaire sans majuscules",
    level: "Tous niveaux",
    content: {
      rules: [
        "Pas de majuscules en espagnol (contrairement au français)",
        "Mois : enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre",
        "Jours : lunes, martes, miércoles, jueves, viernes, sábado, domingo",
        "Saisons : primavera, verano, otoño, invierno"
      ],
      examples: [
        {
          spanish: "Enero es en invierno",
          french: "Janvier est en hiver",
          explanation: "Mois sans majuscule + saison"
        },
        {
          spanish: "Navidad en diciembre",
          french: "Noël en décembre",
          explanation: "Événement + mois pour mémoriser"
        },
        {
          spanish: "Trabajo de lunes a viernes",
          french: "Je travaille du lundi au vendredi",
          explanation: "Jours sans majuscule ni article"
        },
        {
          spanish: "En verano hace calor",
          french: "En été il fait chaud",
          explanation: "Saison avec en"
        },
        {
          spanish: "La primavera en marzo",
          french: "Le printemps en mars",
          explanation: "Saison + mois correspondant"
        },
        {
          spanish: "Agosto es el mes más caluroso",
          french: "Août est le mois le plus chaud",
          explanation: "Mois sans majuscule"
        }
      ],
      tips: [
        "Associez aux événements : Navidad en diciembre",
        "Piège francophone : Pas de 'le' avant les jours (lunes, pas el lunes)",
        "Mémorisez par saisons : enero-febrero-marzo = invierno",
        "Pratiquez avec des dates personnelles"
      ]
    }
  },
  {
    id: "jours-semaine",
    title: "Les Jours de la Semaine",
    description: "Utilisation des jours pour planifier et décrire des routines",
    level: "Tous niveaux",
    content: {
      rules: [
        "Invariables en genre/nombre",
        "Commencez par lundi",
        "Souvent avec el pour spécifique, sans pour général",
        "Ordre : lunes, martes, miércoles, jueves, viernes, sábado, domingo"
      ],
      examples: [
        {
          spanish: "Trabajo de lunes a viernes",
          french: "Je travaille du lundi au vendredi",
          explanation: "De...a pour l'intervalle"
        },
        {
          spanish: "El lunes tengo una reunión",
          french: "Lundi j'ai une réunion",
          explanation: "El pour un lundi spécifique"
        },
        {
          spanish: "Los fines de semana descanso",
          french: "Les week-ends je me repose",
          explanation: "Pluriel pour général"
        },
        {
          spanish: "Miércoles es el día del medio",
          french: "Mercredi est le jour du milieu",
          explanation: "Miércoles avec accent et é prononcé"
        },
        {
          spanish: "Viernes por la noche",
          french: "Vendredi soir",
          explanation: "Viernes + por la noche"
        },
        {
          spanish: "Sábado y domingo son libres",
          french: "Samedi et dimanche sont libres",
          explanation: "Jours de week-end"
        }
      ],
      tips: [
        "Mémorisez l'ordre : lunes, martes, miércoles, jueves, viernes, sábado, domingo",
        "Piège : 'Miércoles' a un accent et un 'é' prononcé",
        "Utilisez de...a pour les intervalles",
        "El pour spécifique, sans article pour général"
      ]
    }
  },
  {
    id: "dire-dates",
    title: "Dire les Dates",
    description: "Format jour-mois-année avec règles spécifiques",
    level: "Tous niveaux",
    content: {
      rules: [
        "Format : 'El [jour] de [mois] de [année]'",
        "Abrégé : dd/mm/aaaa",
        "Nombres cardinaux pour jours (uno, dos...)",
        "Ordinaux rares sauf primero"
      ],
      examples: [
        {
          spanish: "El 25 de agosto de 2025",
          french: "Le 25 août 2025",
          explanation: "Format complet avec de"
        },
        {
          spanish: "¿Cuándo es tu cumpleaños?",
          french: "Quand est ton anniversaire ?",
          explanation: "Question sur la date"
        },
        {
          spanish: "El 1 de enero",
          french: "Le 1er janvier",
          explanation: "Premier jour du mois"
        },
        {
          spanish: "Mil novecientos noventa",
          french: "1990",
          explanation: "Année en mots"
        },
        {
          spanish: "Dos mil veinte",
          french: "2020",
          explanation: "Année 2000+"
        },
        {
          spanish: "El 15 de marzo de 1990",
          french: "Le 15 mars 1990",
          explanation: "Date complète"
        }
      ],
      irregularities: [
        {
          pattern: "Formats régionaux",
          examples: [
            "Espagne : dd/mm/yyyy",
            "Amérique latine : mm/dd/yyyy"
          ],
          notes: "Clarifiez le contexte selon la région"
        }
      ],
      tips: [
        "Prononcez les nombres cardinaux pour jours (uno, dos...)",
        "Ordinaux rares sauf premier (primero)",
        "Piège : Format dd/mm/yyyy en Espagne, mm/dd/yyyy en Amérique latine",
        "Clarifiez le contexte selon la région"
      ]
    }
  },
  {
    id: "dire-heure",
    title: "Dire l'Heure",
    description: "Utiliser es la (singulier) ou son las (pluriel) avec minutes",
    level: "Tous niveaux",
    content: {
      rules: [
        "¿Qué hora es? (Quelle heure est-il ?)",
        "Es la una (1h) vs Son las dos (2h+)",
        "y (et) pour minutes passées, menos (moins) pour restantes",
        "Midi : mediodía, minuit : medianoche"
      ],
      examples: [
        {
          spanish: "Son las dos y media",
          french: "Il est deux heures et demie",
          explanation: "Pluriel + y media"
        },
        {
          spanish: "Son las tres y cuarto",
          french: "Trois heures et quart",
          explanation: "y cuarto pour quart"
        },
        {
          spanish: "Son las cuatro menos diez",
          french: "Quatre heures moins dix",
          explanation: "menos pour minutes restantes"
        },
        {
          spanish: "Son las quince horas",
          french: "15h",
          explanation: "Format 24h formel"
        },
        {
          spanish: "Es la una en punto",
          french: "Il est une heure pile",
          explanation: "Singulier pour 1h"
        },
        {
          spanish: "Son las doce del mediodía",
          french: "Il est midi",
          explanation: "Midi avec del"
        }
      ],
      tips: [
        "Divisez l'horloge : Hasta la media (jusqu'à la demie : y), después (après : menos)",
        "Piège francophone : Pas de 'heures' explicite",
        "'Media' pour demie (pas 'demi')",
        "Pratiquez avec des heures courantes"
      ]
    }
  },
  {
    id: "calcul-mental",
    title: "Calcul Mental",
    description: "Calculs simples pour ajuster heures et dates",
    level: "Intermédiaire",
    content: {
      rules: [
        "Utilisez pour rendez-vous : 'En dos horas'",
        "Calculez de l'heure actuelle",
        "Minutes sur 60, heures sur 12/24 selon contexte",
        "Pratiquez mentalement avec des exemples simples"
      ],
      examples: [
        {
          spanish: "En dos horas",
          french: "Dans deux heures",
          explanation: "Expression temporelle"
        },
        {
          spanish: "Si son las diez, en 45 minutos serán las diez y cuarenta y cinco",
          french: "S'il est 10h, dans 45 minutes il sera 10h45",
          explanation: "Calcul d'addition"
        },
        {
          spanish: "3:20 + 25 min = 3:45",
          french: "3h20 + 25 min = 3h45",
          explanation: "Calcul mental simple"
        },
        {
          spanish: "Faltan 30 minutos para las tres",
          french: "Il manque 30 minutes pour 3h",
          explanation: "Calcul de soustraction"
        },
        {
          spanish: "Dentro de una hora y media",
          french: "Dans une heure et demie",
          explanation: "Expression avec calcul"
        },
        {
          spanish: "Hace dos horas que llegué",
          french: "Il y a deux heures que je suis arrivé",
          explanation: "Expression de durée passée"
        }
      ],
      tips: [
        "Pratiquez mentalement : 3:20 + 25 min = 3:45",
        "Minutes sur 60, heures sur 12/24 selon contexte",
        "Utilisez pour planifier des rendez-vous",
        "Pratiquez avec des durées courantes"
      ]
    }
  },
  {
    id: "expressions-temporelles",
    title: "Expressions Temporelles avec Prépositions",
    description: "Combiner prépositions pour préciser le temps",
    level: "Intermédiaire",
    content: {
      rules: [
        "En pour durée/mois/saisons (en mayo)",
        "A pour heures précises (a las dos)",
        "De pour intervalles (de lunes a viernes)",
        "Por pour périodes approximatives (por la mañana)"
      ],
      examples: [
        {
          spanish: "Trabajo en verano, de junio a agosto",
          french: "Je travaille en été, de juin à août",
          explanation: "En + saison, de...a + intervalle"
        },
        {
          spanish: "Nos vemos a las ocho",
          french: "On se voit à huit heures",
          explanation: "A + heure précise"
        },
        {
          spanish: "Por la mañana estudio",
          french: "Le matin j'étudie",
          explanation: "Por + période de la journée"
        },
        {
          spanish: "En el año 2000",
          french: "En l'an 2000",
          explanation: "En + année"
        },
        {
          spanish: "A partir de las nueve",
          french: "À partir de neuf heures",
          explanation: "A partir de + heure"
        },
        {
          spanish: "Durante el mes de julio",
          french: "Pendant le mois de juillet",
          explanation: "Durante + période"
        }
      ],
      tips: [
        "Catégorisez : Lieu temporel (en el año 2000), début (a partir de)",
        "Piège : 'En' pour saisons vs français 'au'",
        "Pratiquez avec des expressions courantes",
        "Attention aux prépositions spécifiques"
      ]
    }
  },
  {
    id: "contextes-varies",
    title: "Dire l'Heure et les Dates en Contextes Variés",
    description: "Adapter aux situations formelles/informelles et régions",
    level: "Intermédiaire",
    content: {
      rules: [
        "Formel : 'Son las catorce horas' (14h)",
        "Informel : 'Las dos de la tarde' (2h de l'après-midi)",
        "Variez : Matin (mañana), après-midi (tarde), soir (noche)",
        "Contextes historiques avec années en mots"
      ],
      examples: [
        {
          spanish: "Son las catorce horas",
          french: "Il est 14h",
          explanation: "Format 24h formel"
        },
        {
          spanish: "Las dos de la tarde",
          french: "Deux heures de l'après-midi",
          explanation: "Format 12h informel"
        },
        {
          spanish: "El quince de julio",
          french: "Le 15 juillet",
          explanation: "Date sans année"
        },
        {
          spanish: "Nació en mil novecientos ochenta",
          french: "Né en 1980",
          explanation: "Date historique"
        },
        {
          spanish: "A las ocho de la mañana",
          french: "À huit heures du matin",
          explanation: "Heure + période"
        },
        {
          spanish: "Por la noche",
          french: "La nuit",
          explanation: "Période de la journée"
        }
      ],
      irregularities: [
        {
          pattern: "Formats régionaux",
          examples: [
            "Espagne : plus de format 24h",
            "Amérique latine : plus de format 12h"
          ],
          notes: "Adaptez selon la région"
        }
      ],
      tips: [
        "Variez : Matin (mañana), après-midi (tarde), soir (noche)",
        "Piège régional : En Amérique latine, plus de format 12h",
        "Utilisez le format approprié au contexte",
        "Pratiquez avec des situations variées"
      ]
    }
  },
  {
    id: "vocabulaire-saisonnier",
    title: "Vocabulaire Saisonnier et Calculs Simples",
    description: "Vocabulaire étendu pour saisons et calculs pour planifier",
    level: "Intermédiaire",
    content: {
      rules: [
        "Saisonnier : associez saisons à activités",
        "Calculs : soustraire dates pour planifier",
        "Utilisez dedos (doigts) mentalement",
        "Attention aux saisons inversées dans l'hémisphère sud"
      ],
      examples: [
        {
          spanish: "En primavera florecen las flores",
          french: "Au printemps, les fleurs fleurissent",
          explanation: "Saison + activité caractéristique"
        },
        {
          spanish: "Faltan tres días para el fin de semana",
          french: "Il manque trois jours pour le week-end",
          explanation: "Calcul de soustraction"
        },
        {
          spanish: "De hoy (25 agosto) a septiembre faltan seis días",
          french: "D'aujourd'hui (25 août) à septembre il manque six jours",
          explanation: "Calcul avec date actuelle"
        },
        {
          spanish: "Verano = vacaciones",
          french: "Été = vacances",
          explanation: "Association saison-activité"
        },
        {
          spanish: "En invierno hace frío",
          french: "En hiver il fait froid",
          explanation: "Saison + caractéristique"
        },
        {
          spanish: "El otoño es la estación de las hojas",
          french: "L'automne est la saison des feuilles",
          explanation: "Saison + description"
        }
      ],
      tips: [
        "Associez saisons à activités : Verano = vacaciones (vacances)",
        "Pour calculs : Utilisez dedos (doigts) mentalement",
        "Piège : Saisons inversées dans l'hémisphère sud",
        "Pratiquez avec des calculs simples"
      ]
    }
  },
  {
    id: "heures-specifiques",
    title: "Heures Spécifiques et Expressions",
    description: "Maîtriser les expressions courantes pour des moments précis",
    level: "Avancé",
    content: {
      rules: [
        "Expressions pour moments précis : 'en punto', 'y media', 'y cuarto'",
        "Format 24h vs 12h selon le contexte",
        "Expressions idiomatiques temporelles",
        "Attention aux nuances régionales"
      ],
      examples: [
        {
          spanish: "Es la una en punto",
          french: "Il est une heure pile",
          explanation: "En punto pour l'heure exacte"
        },
        {
          spanish: "Son las tres y media",
          french: "Il est trois heures et demie",
          explanation: "Y media pour la demie"
        },
        {
          spanish: "Son las dos y cuarto",
          french: "Il est deux heures et quart",
          explanation: "Y cuarto pour le quart"
        },
        {
          spanish: "Son las cuatro menos cuarto",
          french: "Il est quatre heures moins le quart",
          explanation: "Menos cuarto pour moins le quart"
        },
        {
          spanish: "A las doce del mediodía",
          french: "À midi",
          explanation: "Midi avec del"
        },
        {
          spanish: "A las doce de la medianoche",
          french: "À minuit",
          explanation: "Minuit avec de la"
        }
      ],
      tips: [
        "Mémorisez : en punto, y media, y cuarto, menos cuarto",
        "Pratiquez avec des heures courantes",
        "Attention aux expressions idiomatiques",
        "Utilisez selon le contexte formel/informel"
      ]
    }
  },
  {
    id: "dates-historiques",
    title: "Dates Historiques et Événements",
    description: "Exprimer les dates importantes et événements historiques",
    level: "Avancé",
    content: {
      rules: [
        "Dates historiques avec années en mots",
        "Événements importants avec dates",
        "Format formel pour documents historiques",
        "Attention aux siècles et millénaires"
      ],
      examples: [
        {
          spanish: "Nació en mil novecientos ochenta",
          french: "Né en 1980",
          explanation: "Année en mots"
        },
        {
          spanish: "En el año dos mil veinte",
          french: "En l'an 2020",
          explanation: "Année 2000+"
        },
        {
          spanish: "El siglo veinte",
          french: "Le vingtième siècle",
          explanation: "Siècle en espagnol"
        },
        {
          spanish: "En el tercer milenio",
          french: "Au troisième millénaire",
          explanation: "Millénaire"
        },
        {
          spanish: "La guerra civil española (1936-1939)",
          french: "La guerre civile espagnole (1936-1939)",
          explanation: "Événement historique avec dates"
        },
        {
          spanish: "La independencia de México en mil ochocientos veintiuno",
          french: "L'indépendance du Mexique en 1821",
          explanation: "Date historique importante"
        }
      ],
      tips: [
        "Pratiquez avec des dates historiques importantes",
        "Attention aux siècles et millénaires",
        "Utilisez le format approprié au contexte",
        "Mémorisez les événements clés"
      ]
    }
  },
  {
    id: "planification-temporelle",
    title: "Planification Temporelle et Rendez-vous",
    description: "Organiser et planifier avec vocabulaire temporel",
    level: "Avancé",
    content: {
      rules: [
        "Fixer des rendez-vous avec heures et dates",
        "Planifier des activités avec expressions temporelles",
        "Utiliser des calculs pour la planification",
        "Adapter selon le contexte professionnel/personnel"
      ],
      examples: [
        {
          spanish: "¿Podemos quedar a las tres de la tarde?",
          french: "On peut se voir à trois heures de l'après-midi ?",
          explanation: "Proposition de rendez-vous"
        },
        {
          spanish: "Te llamo en media hora",
          french: "Je t'appelle dans une demi-heure",
          explanation: "Planification temporelle"
        },
        {
          spanish: "La reunión es el lunes a las diez",
          french: "La réunion est lundi à dix heures",
          explanation: "Rendez-vous professionnel"
        },
        {
          spanish: "Nos vemos el próximo viernes",
          french: "On se voit vendredi prochain",
          explanation: "Rendez-vous futur"
        },
        {
          spanish: "El vuelo sale a las ocho de la mañana",
          french: "Le vol part à huit heures du matin",
          explanation: "Transport avec heure"
        },
        {
          spanish: "La cita médica es a las dos y media",
          french: "Le rendez-vous médical est à deux heures et demie",
          explanation: "Rendez-vous médical"
        }
      ],
      tips: [
        "Pratiquez avec des situations réelles",
        "Utilisez des expressions variées",
        "Attention aux contextes formels/informels",
        "Planifiez avec des calculs temporels"
      ]
    }
  }
];

export const temporalExercises: TemporalExercise[] = [
  {
    id: "ex1",
    title: "Écrire des dates",
    instruction: "Écrivez 5 dates en espagnol en utilisant le format correct",
    level: "Tous niveaux",
    type: "dates",
    content: {
      question: "Écrivez votre anniversaire en espagnol",
      hints: [
        "Utilisez le format : El [jour] de [mois] de [année]",
        "Nombres cardinaux pour les jours (uno, dos...)",
        "Mois sans majuscule",
        "Année en mots ou chiffres"
      ],
      correction: "El 15 de marzo de 1990",
      explanation: "Format : El + jour + de + mois + de + année, sans majuscules"
    }
  },
  {
    id: "ex2",
    title: "Dire l'heure",
    instruction: "Dites l'heure pour 5 moments en utilisant le format espagnol",
    level: "Tous niveaux",
    type: "heures",
    content: {
      question: "Comment dites-vous 14:45 en espagnol ?",
      hints: [
        "14:45 = 2:45 de l'après-midi",
        "Utilisez 'son las' pour 2h+",
        "Pensez à 'menos cuarto' pour moins le quart",
        "Format : Son las [heure] menos [minutes]"
      ],
      correction: "Son las tres menos cuarto",
      explanation: "14:45 = 2:45 de l'après-midi = Son las tres menos cuarto"
    }
  },
  {
    id: "ex3",
    title: "Créer un dialogue avec expressions temporelles",
    instruction: "Créez un dialogue pour fixer un rendez-vous en utilisant le vocabulaire temporel",
    level: "Intermédiaire",
    type: "dialogue",
    content: {
      question: "Créez un dialogue pour fixer un rendez-vous à 15h le vendredi prochain",
      hints: [
        "Utilisez '¿Podemos quedar...?' pour proposer",
        "Vendredi = viernes",
        "15h = las tres de la tarde",
        "Prochain = próximo",
        "Incluez confirmation et remerciements"
      ],
      correction: "A: ¿Podemos quedar el próximo viernes a las tres de la tarde? B: Perfecto, nos vemos el viernes a las tres. A: ¡Genial! Hasta el viernes. B: ¡Hasta luego!",
      explanation: "Dialogue complet avec proposition, confirmation et remerciements"
    }
  },
  {
    id: "ex4",
    title: "Calcul mental temporel",
    instruction: "Calculez mentalement en utilisant le vocabulaire espagnol",
    level: "Intermédiaire",
    type: "calcul",
    content: {
      question: "Si son las 9:30, ¿qué hora será en 2 horas y 15 minutes?",
      hints: [
        "9:30 + 2h = 11:30",
        "11:30 + 15 min = 11:45",
        "11:45 = las once y cuarenta y cinco",
        "Utilisez 'serán' pour le futur"
      ],
      correction: "Serán las once y cuarenta y cinco",
      explanation: "9:30 + 2h15 = 11:45 = las once y cuarenta y cinco"
    }
  }
];

export const temporalTables = {
  mois: {
    title: "Les Mois de l'Année",
    headers: ["Mois", "Prononciation", "Saison", "Caractéristique"],
    rows: [
      ["Enero", "é-né-ro", "Invierno", "Año nuevo"],
      ["Febrero", "fé-bré-ro", "Invierno", "Carnaval"],
      ["Marzo", "már-zo", "Primavera", "Equinoccio"],
      ["Abril", "a-bríl", "Primavera", "Semana Santa"],
      ["Mayo", "má-yo", "Primavera", "Flores"],
      ["Junio", "jú-nio", "Verano", "Vacaciones"],
      ["Julio", "jú-lio", "Verano", "Calor"],
      ["Agosto", "a-gós-to", "Verano", "Vacaciones"],
      ["Septiembre", "sep-tiém-bre", "Otoño", "Vuelta al cole"],
      ["Octubre", "oc-tú-bre", "Otoño", "Hojas"],
      ["Noviembre", "no-viém-bre", "Otoño", "Día de muertos"],
      ["Diciembre", "di-ciém-bre", "Invierno", "Navidad"]
    ]
  },
  jours: {
    title: "Les Jours de la Semaine",
    headers: ["Jour", "Prononciation", "Origine", "Usage"],
    rows: [
      ["Lunes", "lú-nes", "Luna (lune)", "Début de semaine"],
      ["Martes", "már-tes", "Marte (mars)", "Deuxième jour"],
      ["Miércoles", "mi-ér-co-les", "Mercurio (mercure)", "Milieu"],
      ["Jueves", "jué-ves", "Júpiter (jupiter)", "Avant week-end"],
      ["Viernes", "vi-ér-nes", "Venus (vénus)", "Fin de semaine"],
      ["Sábado", "sá-ba-do", "Sabbath", "Week-end"],
      ["Domingo", "do-mín-go", "Dominus (seigneur)", "Repos"]
    ]
  },
  heures: {
    title: "Expressions pour Dire l'Heure",
    headers: ["Expression", "Heure", "Usage", "Exemple"],
    rows: [
      ["En punto", "Exacte", "Formel", "Es la una en punto"],
      ["Y media", "Et demie", "Courant", "Son las dos y media"],
      ["Y cuarto", "Et quart", "Courant", "Son las tres y cuarto"],
      ["Menos cuarto", "Moins le quart", "Courant", "Son las cuatro menos cuarto"],
      ["Y diez", "Et dix", "Précis", "Son las cinco y diez"],
      ["Menos cinco", "Moins cinq", "Précis", "Son las seis menos cinq"]
    ]
  }
}; 