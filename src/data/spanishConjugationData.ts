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
  type: 'conjugation' | 'sequence' | 'choice' | 'transformation' | 'qcm' | 'choix' | 'completion';
  content: {
    question: string;
    hints: string[];
    correction: string;
    explanation: string;
  };
}

export const conjugationSections: ConjugationSection[] = [
  {
    id: "present-indicatif-detaille",
    title: "Présent de l'Indicatif - Détails et Irrégularités",
    description: "Maîtrisez les terminaisons régulières et les irrégularités du présent de l'indicatif",
    level: "Débutant - Intermédiaire",
    content: {
      rules: [
        "Verbes en -AR : radical + o, as, a, amos, áis, an (hablo, hablas, habla, hablamos, habláis, hablan)",
        "Verbes en -ER : radical + o, es, e, emos, éis, en (como, comes, come, comemos, coméis, comen)",
        "Verbes en -IR : radical + o, es, e, imos, ís, en (vivo, vives, vive, vivimos, vivís, viven)",
        "Schéma type pour verbes en -cer/-cir : nazco, naces, nace, nacemos, nacéis, nacen",
        "Les verbes terminés par -cer et -cir avec c devant voyelle se conjuguent avec -zco/-zo à la 1ère personne"
      ],
      examples: [
        {
          spanish: "hablo, hablas, habla, hablamos, habláis, hablan",
          french: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent",
          explanation: "Hablar (régulier -AR) : terminaisons régulières"
        },
        {
          spanish: "como, comes, come, comemos, coméis, comen",
          french: "je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent",
          explanation: "Comer (régulier -ER) : terminaisons régulières"
        },
        {
          spanish: "nazco, naces, nace, nacemos, nacéis, nacen",
          french: "je nais, tu nais, il naît, nous naissons, vous naissez, ils naissent",
          explanation: "Nacer (irrégulier -cer) : -zco à la 1ère personne"
        }
      ],
      irregularities: [
        {
          verb: "ser",
          pattern: "Irrégulier complet",
          examples: ["soy", "eres", "es", "somos", "sois", "son"]
        },
        {
          verb: "estar",
          pattern: "Irrégulier partiel",
          examples: ["estoy", "estás", "está", "estamos", "estáis", "están"]
        },
        {
          verb: "tener",
          pattern: "Diphtongue e → ie",
          examples: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]
        },
        {
          verb: "venir",
          pattern: "Diphtongue e → ie",
          examples: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"]
        },
        {
          verb: "hacer",
          pattern: "Modification du radical",
          examples: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"]
        },
        {
          verb: "cocinar (cer)",
          pattern: "Terminaison -zco",
          examples: ["cuezo", "cueces", "cuece", "cocemos", "cocéis", "cuecen"]
        }
      ],
      tips: [
        "Apprenez d'abord les terminaisons régulières pour chaque groupe",
        "Les irrégularités à la 1ère personne sont souvent prévisibles",
        "Pratiquez avec des verbes courants avant les irréguliers"
      ]
    }
  },
  {
    id: "subjonctif-present",
    title: "Subjonctif Présent",
    description: "Mode verbal pour exprimer le doute, le désir, l'émotion, l'hypothèse ou l'incertitude",
    level: "Avancé",
    content: {
      rules: [
        "Moyen mnémotechnique : changement de voyelle par rapport au présent",
        "Verbes en –AR : Radical de la 1ère p.sg du présent de l'indicatif + e, es, e, emos, éis, en",
        "Verbes en -ER et –IR : Radical de la 1ère pers.sg du présent de l'indicatif + a, as, a, amos, áis, an",
        "Irrégularités : Une irrégularité à la 1ère pers.sg du présent entraîne la même au subjonctif présent"
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
        },
        {
          spanish: "caigo ➔ caiga, caigas, caiga, caigamos, caigáis, caigan",
          french: "je tombe ➔ que je tombe, tu tombes, il tombe...",
          explanation: "Caer (irrégulier) : même irrégularité que l'indicatif"
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
        "S'utilise beaucoup en espagnol, avec la concordance des temps, dans les subordonnées",
        "Verbes en -AR : radical de la 3ème pers.plur du passé simple + ara, aras, ara, áramos, arais, aran",
        "Verbes en -ER et -IR : radical de la 3ème pers.plur du passé simple + iera, ieras, iera, iéramos, ierais, ieran",
        "Deux formes possibles (-ra ou -se), -ra plus courante en Amérique latine",
        "Irrégularités : Une irrégularité du passé simple se reporte sur l'imparfait du subjonctif"
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
        },
        {
          spanish: "hablara, hablaras, hablara, habláramos, hablarais, hablaran",
          french: "que je parlasse, tu parlasses, il parlât, nous parlassions, vous parlassiez, ils parlassent",
          explanation: "Hablar : ellos hablaron → hablara (forme -ra)"
        },
        {
          spanish: "comiera, comieras, comiera, comiéramos, comierais, comieran",
          french: "que je mangeasse, tu mangeasses, il mangeât, nous mangeassions, vous mangeassiez, ils mangeassent",
          explanation: "Comer : ellos comieron → comiera (forme -ra)"
        },
        {
          spanish: "tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran",
          french: "que j'eusse, tu eusses, il eût, nous eussions, vous eussiez, ils eussent",
          explanation: "Tener : ellos tuvieron → tuviera (irrégulier)"
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
        "Tous les verbes : Infinitif + ía, ías, ía, íamos, íais, ían",
        "Terminaisons identiques à l'auxiliaire HABER à l'imparfait",
        "Irrégularités : Les mêmes que celles du futur",
        "Dans les traductions : Les conditionnels des verbes deber, haber, poder et querer sont souvent remplacés par leur imparfait du subjonctif"
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
        },
        {
          spanish: "hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían",
          french: "je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient",
          explanation: "Hablar (régulier) : infinitif + terminaisons -ía"
        },
        {
          spanish: "tendría, tendrías, tendría, tendríamos, tendríais, tendrían",
          french: "j'aurais, tu aurais, il aurait, nous aurions, vous auriez, ils auraient",
          explanation: "Tener (irrégulier) : même radical que le futur"
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
        "L'espagnol ne dispose que de deux véritables formes à l'impératif",
        "→ Tú : pour tous les groupes : 2ème personne de l'indicatif présent sans le S-final",
        "→ Vosotros/as : pour tous les groupes, on remplace le « R » final de l'infinitif par un « D »",
        "Toutes les formes manquantes sont empruntées au subjonctif présent",
        "L'impératif négatif se traduit par le subjonctif présent à toutes les personnes",
        "Irrégularités à la deuxième personne : pon-ten-ven-haz-di-sal-ve-sé"
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
        },
        {
          spanish: "No cantes, No comas, No escribas",
          french: "Ne chante pas, Ne mange pas, N'écris pas",
          explanation: "Impératif négatif : no + subjonctif présent"
        },
        {
          spanish: "hablad, comed, vivid",
          french: "parlez, mangez, vivez",
          explanation: "Impératif vosotros : infinitif sans -r + -d"
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
  },
  {
    id: "passe-compose",
    title: "Passé Composé",
    description: "Exprime une action passée récente ou achevée, souvent reliée au présent",
    level: "Débutant - Intermédiaire",
    content: {
      rules: [
        "Structure : Auxiliaire HABER au présent + participe passé du verbe",
        "Terminaisons : he, has, ha, hemos, habéis, han",
        "Participe passé : -ado pour -AR, -ido pour -ER/-IR",
        "Il n'y a jamais rien entre l'auxiliaire et le participe passé"
      ],
      examples: [
        {
          spanish: "He hablado mucho hoy",
          french: "J'ai beaucoup parlé aujourd'hui",
          explanation: "Hablar (régulier -AR) : he + hablado"
        },
        {
          spanish: "Has comido demasiado",
          french: "Tu as trop mangé",
          explanation: "Comer (-ER) : has + comido"
        },
        {
          spanish: "Han vivido aquí toda su vida",
          french: "Ils ont vécu ici toute leur vie",
          explanation: "Vivir (-IR) : han + vivido"
        }
      ],
      irregularities: [
        {
          verb: "volver",
          pattern: "Participe irrégulier",
          examples: ["he vuelto", "has vuelto", "ha vuelto", "hemos vuelto", "habéis vuelto", "han vuelto"]
        },
        {
          verb: "hacer",
          pattern: "Participe irrégulier",
          examples: ["he hecho", "has hecho", "ha hecho", "hemos hecho", "habéis hecho", "han hecho"]
        },
        {
          verb: "decir",
          pattern: "Participe irrégulier",
          examples: ["he dicho", "has dicho", "ha dicho", "hemos dicho", "habéis dicho", "han dicho"]
        }
      ],
      tips: [
        "Le passé composé exprime une action récente ou achevée",
        "Différent du prétérit qui exprime une action ponctuelle dans le passé",
        "Utile pour raconter des expériences personnelles"
      ]
    }
  },
  {
    id: "passe-simple",
    title: "Passé Simple (Prétérit)",
    description: "Exprime une action ponctuelle achevée dans le passé, sans lien avec le présent",
    level: "Intermédiaire - Avancé",
    content: {
      rules: [
        "Verbes -AR : radical + é, aste, ó, amos, asteis, aron",
        "Verbes -ER/-IR : radical + í, iste, ió, imos, isteis, ieron",
        "Accent tonique sur la dernière voyelle du radical (1ère et 3ème pers. sg)",
        "Modification du radical pour certains verbes irréguliers"
      ],
      examples: [
        {
          spanish: "hablé, hablaste, habló, hablamos, hablasteis, hablaron",
          french: "je parlai, tu parlas, il parla, nous parlâmes, vous parlâtes, ils parlèrent",
          explanation: "Hablar (régulier -AR) : terminaisons spécifiques"
        },
        {
          spanish: "comí, comiste, comió, comimos, comisteis, comieron",
          french: "je mangeai, tu mangeas, il mangea, nous mangeâmes, vous mangeâtes, ils mangèrent",
          explanation: "Comer (-ER) : terminaisons spécifiques"
        },
        {
          spanish: "tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron",
          french: "j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent",
          explanation: "Tener (irrégulier) : tuve, tuviste, tuvo..."
        }
      ],
      irregularities: [
        {
          verb: "dar",
          pattern: "Radical irrégulier",
          examples: ["di", "diste", "dio", "dimos", "disteis", "dieron"]
        },
        {
          verb: "ir/ser",
          pattern: "Radical irrégulier",
          examples: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"]
        },
        {
          verb: "tener",
          pattern: "Radical irrégulier",
          examples: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"]
        }
      ],
      tips: [
        "Le prétérit exprime une action ponctuelle et achevée",
        "Différent du passé composé qui lie au présent",
        "Souvent utilisé dans les récits historiques ou littéraires"
      ]
    }
  },
  {
    id: "imparfait",
    title: "Imparfait (Coprétérit)",
    description: "Exprime une action habituelle, en cours ou une description dans le passé",
    level: "Débutant - Intermédiaire",
    content: {
      rules: [
        "Verbes -AR : radical + aba, abas, aba, ábamos, abais, aban",
        "Verbes -ER/-IR : radical + ía, ías, ía, íamos, íais, ían",
        "Forme régulière pour la plupart des verbes",
        "Utilisé pour les habitudes, descriptions, actions en cours"
      ],
      examples: [
        {
          spanish: "hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban",
          french: "je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient",
          explanation: "Hablar (-AR) : terminaisons en -aba"
        },
        {
          spanish: "comía, comías, comía, comíamos, comíais, comían",
          french: "je mangeais, tu mangeais, il mangeait, nous mangions, vous mangiez, ils mangeaient",
          explanation: "Comer (-ER) : terminaisons en -ía"
        },
        {
          spanish: "vivía, vivías, vivía, vivíamos, vivíais, vivían",
          french: "je vivais, tu vivais, il vivait, nous vivions, vous viviez, ils vivaient",
          explanation: "Vivir (-IR) : terminaisons en -ía"
        }
      ],
      irregularities: [
        {
          verb: "ser",
          pattern: "Irrégulier",
          examples: ["era", "eras", "era", "éramos", "erais", "eran"]
        },
        {
          verb: "ir",
          pattern: "Irrégulier",
          examples: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"]
        },
        {
          verb: "ver",
          pattern: "Irrégulier",
          examples: ["veía", "veías", "veía", "veíamos", "veíais", "veían"]
        }
      ],
      tips: [
        "L'imparfait décrit des actions habituelles ou des états",
        "Utilisé pour les descriptions et les actions en cours",
        "Souvent combiné avec le prétérit pour les récits"
      ]
    }
  },
  {
    id: "futur",
    title: "Futur Simple",
    description: "Exprime une action qui se déroulera dans l'avenir",
    level: "Débutant - Intermédiaire",
    content: {
      rules: [
        "Infinitif + é, ás, á, emos, éis, án",
        "Terminaisons identiques à l'auxiliaire HABER au présent",
        "Radical irrégulier pour certains verbes, mêmes terminaisons",
        "Utile pour les prédictions, promesses, projets futurs"
      ],
      examples: [
        {
          spanish: "comeré, comerás, comerá, comeremos, comeréis, comerán",
          french: "je mangerai, tu mangeras, il mangera, nous mangerons, vous mangerez, ils mangeront",
          explanation: "Comer (régulier) : infinitif + terminaisons"
        },
        {
          spanish: "hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán",
          french: "je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront",
          explanation: "Hablar (régulier) : infinitif + terminaisons"
        }
      ],
      irregularities: [
        {
          verb: "tener",
          pattern: "Radical futur irrégulier",
          examples: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"]
        },
        {
          verb: "hacer",
          pattern: "Radical futur irrégulier",
          examples: ["haré", "harás", "hará", "haremos", "haréis", "harán"]
        },
        {
          verb: "poder",
          pattern: "Radical futur irrégulier",
          examples: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"]
        }
      ],
      tips: [
        "Le futur simple exprime une action future certaine",
        "Pour les projets moins certains, utiliser ir a + infinitif",
        "Les irrégularités du radical sont les mêmes qu'au conditionnel"
      ]
    }
  },
  {
    id: "gerondif",
    title: "Gérondif",
    description: "Forme verbale exprimant une action en cours ou simultanée",
    level: "Intermédiaire",
    content: {
      rules: [
        "Verbes -AR : radical + ANDO (cantando, andando)",
        "Verbes -ER/-IR : radical + IENDO (comiendo, viviendo)",
        "Utilisé avec ESTAR pour la forme progressive",
        "Action en cours : Estoy cantando = Je suis en train de chanter"
      ],
      examples: [
        {
          spanish: "El perro está corriendo",
          french: "Le chien est en train de courir",
          explanation: "ESTAR + gérondif : action en cours"
        },
        {
          spanish: "La niña va aprendiendo",
          french: "La fille apprend progressivement",
          explanation: "IR + gérondif : action progressive"
        },
        {
          spanish: "Sigo estudiando español",
          french: "Je continue à étudier l'espagnol",
          explanation: "SEGUIR + gérondif : continuation"
        }
      ],
      irregularities: [
        {
          verb: "leer",
          pattern: "Diphtongue i → y pour éviter hiatus",
          examples: ["leyendo", "leyendo", "leyendo", "leyendo", "leyendo", "leyendo"]
        },
        {
          verb: "caer",
          pattern: "Diphtongue i → y pour éviter hiatus",
          examples: ["cayendo", "cayendo", "cayendo", "cayendo", "cayendo", "cayendo"]
        },
        {
          verb: "construir",
          pattern: "Diphtongue i → y pour éviter hiatus",
          examples: ["construyendo", "construyendo", "construyendo", "construyendo", "construyendo", "construyendo"]
        }
      ],
      tips: [
        "Le gérondif exprime une action simultanée ou en cours",
        "Toujours sans préposition 'en' en espagnol",
        "Utile pour décrire des actions progressives ou continues"
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