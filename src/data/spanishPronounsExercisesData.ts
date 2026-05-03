export interface PronounsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

// Exercices QCM pour Pronoms (niveau prépa ECG)
const pronounsQCMExercises: PronounsExercise[] = [
  {
    id: 'pronouns_qcm_1',
    type: 'qcm',
    question: 'Dans "Se lo dije ayer", que remplace "se" ?',
    options: [
      'a) Pronom réfléchi de 3e personne',
      'b) Variante de "le" (COI) devant "lo"',
      'c) Pronom de politesse',
      'd) Passif pronominal'
    ],
    correctAnswer: 'b) Variante de "le" (COI) devant "lo"',
    explanation: 'Quand deux pronoms de 3e personne se succèdent (le/les + lo/la/los/las), le premier devient "se". Ici "se" = "le" (à lui/elle).',
    level: 'avancé',
    category: 'Transformation pronominale'
  },
  {
    id: 'pronouns_qcm_2',
    type: 'qcm',
    question: 'Quelle est la règle d\'ordre des pronoms dans "Se me olvidó decírselo" ?',
    options: [
      'a) Réfléchi + COI + COD',
      'b) COI + Réfléchi + COD',
      'c) Réfléchi + COD + COI',
      'd) L\'ordre est libre'
    ],
    correctAnswer: 'a) Réfléchi + COI + COD',
    explanation: 'L\'ordre est : réfléchi (se) + COI (me/te/nos/os) + COD (lo/la/los/las). "Se me olvidó" suit cette règle.',
    level: 'avancé',
    category: 'Ordre des pronoms'
  },
  {
    id: 'pronouns_qcm_3',
    type: 'qcm',
    question: 'Dans "A mí me gusta", pourquoi répète-t-on le pronom ?',
    options: [
      'a) C\'est une erreur',
      'b) Pour insister sur la personne',
      'c) C\'est obligatoire en espagnol',
      'd) Seulement en Amérique latine'
    ],
    correctAnswer: 'b) Pour insister sur la personne',
    explanation: 'La redondance pronominale "a mí me" permet d\'insister sur la personne concernée. C\'est une emphase stylistique courante.',
    level: 'intermédiaire',
    category: 'Redondance pronominale'
  },
  {
    id: 'pronouns_qcm_4',
    type: 'qcm',
    question: 'Que signifie "leísmo" en espagnol ?',
    options: [
      'a) Utiliser "le" au lieu de "lo" pour le COD masculin',
      'b) Utiliser "lo" au lieu de "le" pour le COI',
      'c) Confusion entre "la" et "le"',
      'd) Usage exclusif de "les" au pluriel'
    ],
    correctAnswer: 'a) Utiliser "le" au lieu de "lo" pour le COD masculin',
    explanation: 'Le leísmo consiste à utiliser "le" (COI) à la place de "lo" (COD) pour les personnes masculines. Ex: "Le vi" au lieu de "Lo vi".',
    level: 'avancé',
    category: 'Phénomènes dialectaux'
  },
  {
    id: 'pronouns_qcm_5',
    type: 'qcm',
    question: 'Dans "Dáselo", pourquoi y a-t-il un accent ?',
    options: [
      'a) Pour distinguer le verbe de l\'article',
      'b) Pour maintenir l\'accent tonique original',
      'c) C\'est une règle orthographique moderne',
      'd) Pour éviter la confusion avec "da selo"'
    ],
    correctAnswer: 'b) Pour maintenir l\'accent tonique original',
    explanation: 'Quand on ajoute des pronoms enclitiques, l\'accent écrit préserve l\'accentuation originale du verbe. "Da" devient "dáselo".',
    level: 'avancé',
    category: 'Enclise et accentuation'
  },
  {
    id: 'pronouns_qcm_6',
    type: 'qcm',
    question: 'Comment dit-on "Nous nous voyons" en espagnol ?',
    options: [
      'a) Nos vemos',
      'b) Nos miramos',
      'c) Se ven',
      'd) Nos veamos'
    ],
    correctAnswer: 'a) Nos vemos',
    explanation: '"Nos vemos" exprime la réciprocité. "Nos miramos" = "nous nous regardons", "se ven" = "ils se voient".',
    level: 'intermédiaire',
    category: 'Pronoms réciproques'
  },
  {
    id: 'pronouns_qcm_7',
    type: 'qcm',
    question: 'Dans "Se vende casa", que signifie "se" ?',
    options: [
      'a) Pronom réfléchi',
      'b) Marque du passif pronominal',
      'c) Pronom impersonnel',
      'd) Erreur grammaticale'
    ],
    correctAnswer: 'b) Marque du passif pronominal',
    explanation: '"Se vende casa" = "Une maison est vendue". Le "se" marque la voix passive pronominale, équivalent du passif français.',
    level: 'avancé',
    category: 'Passif pronominal'
  },
  {
    id: 'pronouns_qcm_8',
    type: 'qcm',
    question: 'Quelle différence entre "Lo hizo él" et "Él lo hizo" ?',
    options: [
      'a) Aucune différence',
      'b) Le premier insiste sur l\'action, le second sur l\'agent',
      'c) Le premier insiste sur l\'agent, le second sur l\'action',
      'd) Le premier est incorrect'
    ],
    correctAnswer: 'c) Le premier insiste sur l\'agent, le second sur l\'action',
    explanation: 'L\'ordre des mots change l\'emphase : "Lo hizo él" met l\'accent sur qui l\'a fait, "Él lo hizo" sur ce qu\'il a fait.',
    level: 'avancé',
    category: 'Emphase et ordre des mots'
  },
  {
    id: 'pronouns_qcm_9',
    type: 'qcm',
    question: 'Comment traduit-on "J\'en veux trois" ?',
    options: [
      'a) Quiero tres',
      'b) Los quiero tres',
      'c) Quiero tres de ellos',
      'd) a) et c) sont corrects'
    ],
    correctAnswer: 'd) a) et c) sont corrects',
    explanation: 'L\'espagnol n\'a pas d\'équivalent direct au pronom "en" français. On dit "Quiero tres" ou "Quiero tres de ellos/ellas".',
    level: 'avancé',
    category: 'Absence de pronom équivalent'
  },
  {
    id: 'pronouns_qcm_10',
    type: 'qcm',
    question: 'Dans "Se comieron todo", que signifie "se" ?',
    options: [
      'a) Pronom réfléchi',
      'b) Marque d\'intensité/complétude',
      'c) Erreur de français',
      'd) Pronom réciproque'
    ],
    correctAnswer: 'b) Marque d\'intensité/complétude',
    explanation: 'Le "se" aspectuel indique que l\'action est complète, totale. "Se comieron todo" = "ils ont tout mangé (complètement)".',
    level: 'avancé',
    category: 'Se aspectuel'
  },
  {
    id: 'pronouns_qcm_11',
    type: 'qcm',
    question: 'Pourquoi dit-on "Le duele la cabeza" et non "Lo duele" ?',
    options: [
      'a) "Doler" demande toujours le COI',
      'b) "Cabeza" est féminin',
      'c) C\'est un cas de leísmo accepté',
      'd) "Duele" ne prend jamais de COD'
    ],
    correctAnswer: 'a) "Doler" demande toujours le COI',
    explanation: '"Doler" fonctionne comme "gustar" : le pronom est COI. "La cabeza" est le sujet, "le" (à lui/elle) est COI.',
    level: 'avancé',
    category: 'Verbes à construction particulière'
  },
  {
    id: 'pronouns_qcm_12',
    type: 'qcm',
    question: 'Quelle est la forme correcte : "Dímelo" ou "Me lo dí" ?',
    options: [
      'a) Dímelo (impératif affirmatif)',
      'b) Me lo dí (impératif négatif)',
      'c) Les deux selon le contexte',
      'd) Aucune des deux'
    ],
    correctAnswer: 'a) Dímelo (impératif affirmatif)',
    explanation: 'À l\'impératif affirmatif, les pronoms sont enclitiques : "dímelo". À l\'impératif négatif : "no me lo digas".',
    level: 'avancé',
    category: 'Impératif et pronoms'
  },
  {
    id: 'pronouns_qcm_13',
    type: 'qcm',
    question: 'Dans "Hablar con ella", pourquoi ne peut-on pas dire "hablarla" ?',
    options: [
      'a) "Hablar" ne prend jamais de COD',
      'b) Avec préposition, on ne peut pas pronominaliser',
      'c) "Ella" ne se pronominalise jamais',
      'd) C\'est un archaïsme'
    ],
    correctAnswer: 'b) Avec préposition, on ne peut pas pronominaliser',
    explanation: 'Quand le complément suit une préposition ("con ella"), on ne peut pas le remplacer par un pronom clitique. Il faut dire "hablar con ella".',
    level: 'avancé',
    category: 'Limites de la pronominalisation'
  },
  {
    id: 'pronouns_qcm_14',
    type: 'qcm',
    question: 'Que signifie "voseo" ?',
    options: [
      'a) Usage de "vosotros" en Amérique',
      'b) Usage de "vos" au lieu de "tú"',
      'c) Politesse excessive avec "usted"',
      'd) Confusion entre "vos" et "nos"'
    ],
    correctAnswer: 'b) Usage de "vos" au lieu de "tú"',
    explanation: 'Le voseo est l\'usage de "vos" (+ conjugaison spéciale) au lieu de "tú" dans certains pays d\'Amérique latine (Argentine, Uruguay, etc.).',
    level: 'avancé',
    category: 'Variations géographiques'
  },
  {
    id: 'pronouns_qcm_15',
    type: 'qcm',
    question: 'Dans "Se necesita camarero", quel type de "se" trouve-t-on ?',
    options: [
      'a) Se réfléchi',
      'b) Se impersonnel',
      'c) Se passif',
      'd) Se aspectuel'
    ],
    correctAnswer: 'b) Se impersonnel',
    explanation: '"Se necesita camarero" = "On a besoin d\'un serveur". Le "se" impersonnel efface l\'agent et rend la phrase générale.',
    level: 'avancé',
    category: 'Se impersonnel'
  },
  {
    id: 'pronouns_qcm_16',
    type: 'qcm',
    question: 'Comment éviter l\'ambiguïté de "Le dije que viniera" ?',
    options: [
      'a) Le dije a él que viniera',
      'b) A él le dije que viniera',
      'c) Dije a él que viniera',
      'd) a) et b) sont corrects'
    ],
    correctAnswer: 'd) a) et b) sont corrects',
    explanation: 'Pour préciser le référent de "le", on peut ajouter "a él/ella" ou utiliser la redondance "a él le dije". Les deux clarifications sont valides.',
    level: 'avancé',
    category: 'Désambiguïsation'
  },
  {
    id: 'pronouns_qcm_17',
    type: 'qcm',
    question: 'Dans "Quiero que se lo digas", que remplace "se" ?',
    options: [
      'a) Tú (réfléchi)',
      'b) Él/ella (COI)',
      'c) Subjonctif obligatoire',
      'd) Impersonnel'
    ],
    correctAnswer: 'b) Él/ella (COI)',
    explanation: '"Se lo digas" = "que tu le dises (à lui/elle)". Le "se" remplace "le" (COI) devant "lo" (COD).',
    level: 'avancé',
    category: 'Pronoms en proposition subordonnée'
  },
  {
    id: 'pronouns_qcm_18',
    type: 'qcm',
    question: 'Pourquoi dit-on "Nos escribimos" pour "nous nous écrivons" ?',
    options: [
      'a) "Nos" exprime la réciprocité',
      'b) "Escribir" demande le COI',
      'c) C\'est une convention',
      'd) Pour éviter l\'ambiguïté'
    ],
    correctAnswer: 'a) "Nos" exprime la réciprocité',
    explanation: '"Nos escribimos" = "nous nous écrivons mutuellement". Le pronom "nos" indique l\'action réciproque entre plusieurs personnes.',
    level: 'intermédiaire',
    category: 'Réciprocité'
  },
  {
    id: 'pronouns_qcm_19',
    type: 'qcm',
    question: 'Quelle est l\'erreur dans "La dijeron que viniera" ?',
    options: [
      'a) "La" devrait être "le" (laísmo)',
      'b) "Dijeron" devrait être "dijo"',
      'c) "Viniera" devrait être "venga"',
      'd) Pas d\'erreur'
    ],
    correctAnswer: 'a) "La" devrait être "le" (laísmo)',
    explanation: 'Le laísmo consiste à utiliser "la" (COD féminin) au lieu de "le" (COI). Correct : "Le dijeron" (à elle).',
    level: 'avancé',
    category: 'Erreurs dialectales'
  },
  {
    id: 'pronouns_qcm_20',
    type: 'qcm',
    question: 'Dans "Se lo agradezco mucho", que fait "se" ?',
    options: [
      'a) Remplace "le" devant "lo"',
      'b) Exprime la politesse',
      'c) Marque l\'intensité',
      'd) Erreur grammaticale'
    ],
    correctAnswer: 'a) Remplace "le" devant "lo"',
    explanation: '"Se lo agradezco" = "Je le (cela) remercie à lui/elle". Quand "le/les" + "lo/la/los/las" se rencontrent, le premier devient "se".',
    level: 'avancé',
    category: 'Transformation automatique'
  }
];

// Exercices à choix multiples pour Pronoms
const pronounsChoixExercises: PronounsExercise[] = [
  {
    id: 'pronouns_choix_1',
    type: 'choix',
    question: 'Quelles sont les formes correctes pour "nous vous le donnons" ?',
    options: [
      'a) Os lo damos',
      'b) Se lo damos a vosotros',
      'c) Les damos a ustedes',
      'd) Se lo damos a ustedes'
    ],
    correctAnswer: 'a) Os lo damos',
    explanation: 'Avec "vosotros" : "os lo damos". Avec "ustedes" : "se lo damos" (car "les" → "se" devant "lo").',
    level: 'avancé',
    category: 'Systèmes de politesse'
  },
  {
    id: 'pronouns_choix_2',
    type: 'choix',
    question: 'Quels pronoms sujets peut-on omettre sans ambiguïté ?',
    options: [
      'a) Yo (je)',
      'b) Tú (tu)',
      'c) Él/ella (il/elle)',
      'd) Nosotros (nous)'
    ],
    correctAnswer: 'a) Yo (je)',
    explanation: 'On peut omettre tous les pronoms sujets grâce à la conjugaison, mais "él/ella" et "usted" créent parfois des ambiguïtés.',
    level: 'intermédiaire',
    category: 'Omission du pronom sujet'
  },
  {
    id: 'pronouns_choix_3',
    type: 'choix',
    question: 'Quelles phrases contiennent un "se" aspectuel ?',
    options: [
      'a) Se comió toda la pizza',
      'b) Se durmió en el sofá',
      'c) Se compró un coche',
      'd) Se marchó sin avisar'
    ],
    correctAnswer: 'a) Se comió toda la pizza',
    explanation: 'Le "se" aspectuel indique une action complète : "se comió" (manger entièrement), "se durmió" (s\'endormir), "se marchó" (partir définitivement).',
    level: 'avancé',
    category: 'Se aspectuel'
  },
  {
    id: 'pronouns_choix_4',
    type: 'choix',
    question: 'Avec quels verbes utilise-t-on obligatoirement le COI ?',
    options: [
      'a) Gustar (plaire)',
      'b) Doler (faire mal)',
      'c) Parecer (sembler)',
      'd) Importar (importer)'
    ],
    correctAnswer: 'a) Gustar (plaire)',
    explanation: 'Ces verbes ont une construction particulière où la personne est COI : "me gusta", "le duele", "nos parece", "te importa".',
    level: 'avancé',
    category: 'Verbes à COI obligatoire'
  },
  {
    id: 'pronouns_choix_5',
    type: 'choix',
    question: 'Quelles expressions montrent la redondance pronominale ?',
    options: [
      'a) A mí me encanta',
      'b) A ti te parece',
      'c) A ella le gusta',
      'd) A nosotros nos importa'
    ],
    correctAnswer: 'a) A mí me encanta',
    explanation: 'Toutes montrent la redondance : le pronom tonique ("a mí") et le clitique ("me") réfèrent à la même personne pour l\'emphase.',
    level: 'intermédiaire',
    category: 'Redondance emphatique'
  },
  {
    id: 'pronouns_choix_6',
    type: 'choix',
    question: 'Quand utilise-t-on les pronoms enclitiques ?',
    options: [
      'a) Avec l\'infinitif (decirlo)',
      'b) Avec le gérondif (diciéndolo)',
      'c) Avec l\'impératif affirmatif (dilo)',
      'd) Avec l\'indicatif présent'
    ],
    correctAnswer: 'a) Avec l\'infinitif (decirlo)',
    explanation: 'Les pronoms sont enclitiques (soudés après) avec l\'infinitif, le gérondif et l\'impératif affirmatif. Pas avec l\'indicatif.',
    level: 'avancé',
    category: 'Enclise'
  },
  {
    id: 'pronouns_choix_7',
    type: 'choix',
    question: 'Quels sont les équivalents de "vous" en espagnol ?',
    options: [
      'a) Vosotros (familier, Espagne)',
      'b) Ustedes (formel ou général)',
      'c) Vos (régional, Argentine)',
      'd) Tú (singulier familier)'
    ],
    correctAnswer: 'a) Vosotros (familier, Espagne)',
    explanation: '"Vous" se traduit par "vosotros" (familier, Espagne), "ustedes" (formel ou Amérique), "vos" (certaines régions). "Tú" = "tu".',
    level: 'intermédiaire',
    category: 'Systèmes de politesse'
  },
  {
    id: 'pronouns_choix_8',
    type: 'choix',
    question: 'Quelles formes évitent le leísmo ?',
    options: [
      'a) Lo vi (je l\'ai vu - homme)',
      'b) Le vi (je l\'ai vu - homme)',
      'c) La vi (je l\'ai vue - femme)',
      'd) Les vi (je les ai vus)'
    ],
    correctAnswer: 'a) Lo vi (je l\'ai vu - homme)',
    explanation: 'Le leísmo consiste à dire "le vi" au lieu de "lo vi" pour un COD masculin. La forme correcte est "lo vi".',
    level: 'avancé',
    category: 'Éviter le leísmo'
  },
  {
    id: 'pronouns_choix_9',
    type: 'choix',
    question: 'Quels "se" marquent l\'impersonnalité ?',
    options: [
      'a) Se vende (on vend)',
      'b) Se habla español (on parle espagnol)',
      'c) Se dice que... (on dit que...)',
      'd) Se necesita (on a besoin)'
    ],
    correctAnswer: 'a) Se vende (on vend)',
    explanation: 'Toutes ces phrases utilisent le "se" impersonnel qui efface l\'agent et généralise l\'action (équivalent du "on" français).',
    level: 'avancé',
    category: 'Se impersonnel'
  },
  {
    id: 'pronouns_choix_10',
    type: 'choix',
    question: 'Quelles phrases utilisent correctement les pronoms d\'objet ?',
    options: [
      'a) Se lo di (je le lui ai donné)',
      'b) Me lo dijo (il me l\'a dit)',
      'c) Te la envío (je te l\'envoie)',
      'd) Nos las trajeron (ils nous les ont apportées)'
    ],
    correctAnswer: 'a) Se lo di (je le lui ai donné)',
    explanation: 'Toutes sont correctes. L\'ordre est : réfléchi + COI + COD. "Se" remplace "le/les" devant "lo/la/los/las".',
    level: 'avancé',
    category: 'Ordre des pronoms objets'
  },
  {
    id: 'pronouns_choix_11',
    type: 'choix',
    question: 'Comment exprimer "l\'un l\'autre" en espagnol ?',
    options: [
      'a) Se miran (ils se regardent)',
      'b) Uno al otro (l\'un l\'autre)',
      'c) El uno al otro (l\'un à l\'autre)',
      'd) Mutuamente (mutuellement)'
    ],
    correctAnswer: 'a) Se miran (ils se regardent)',
    explanation: 'La réciprocité s\'exprime par les pronoms réfléchis ("se miran") ou les expressions "uno al otro", "mutuamente".',
    level: 'intermédiaire',
    category: 'Expression de la réciprocité'
  },
  {
    id: 'pronouns_choix_12',
    type: 'choix',
    question: 'Quand faut-il répéter le pronom pour clarifier ?',
    options: [
      'a) Avec ambiguïté de genre (le → a él/ella)',
      'b) Pour l\'emphase (a mí me gusta)',
      'c) Avec plusieurs référents possibles',
      'd) Dans le style soutenu'
    ],
    correctAnswer: 'a) Avec ambiguïté de genre (le → a él/ella)',
    explanation: 'On répète le pronom pour clarifier le référent ("a él le dije"), pour l\'emphase ("a mí me gusta"), ou lever une ambiguïté.',
    level: 'avancé',
    category: 'Clarification pronominale'
  },
  {
    id: 'pronouns_choix_13',
    type: 'choix',
    question: 'Quelles constructions montrent le passif pronominal ?',
    options: [
      'a) Se venden coches (on vend des voitures)',
      'b) Se rompió el vaso (le verre s\'est cassé)',
      'c) Se construyeron casas (on a construit des maisons)',
      'd) Se habla español (on parle espagnol)'
    ],
    correctAnswer: 'a) Se venden coches (on vend des voitures)',
    explanation: 'Le passif pronominal avec "se" remplace la voix passive : "se venden coches" = "des voitures sont vendues".',
    level: 'avancé',
    category: 'Passif pronominal'
  },
  {
    id: 'pronouns_choix_14',
    type: 'choix',
    question: 'Avec quels temps utilise-t-on les pronoms enclitiques ?',
    options: [
      'a) Infinitif (hacerlo)',
      'b) Gérondif (haciéndolo)',
      'c) Impératif affirmatif (hazlo)',
      'd) Participe passé'
    ],
    correctAnswer: 'a) Infinitif (hacerlo)',
    explanation: 'L\'enclise (pronoms soudés) s\'utilise avec l\'infinitif, le gérondif et l\'impératif affirmatif. Pas avec le participe passé.',
    level: 'avancé',
    category: 'Enclise selon les modes'
  },
  {
    id: 'pronouns_choix_15',
    type: 'choix',
    question: 'Quelles différences entre "loísmo", "leísmo" et "laísmo" ?',
    options: [
      'a) Loísmo : "lo" pour COI au lieu de "le"',
      'b) Leísmo : "le" pour COD au lieu de "lo"',
      'c) Laísmo : "la" pour COI au lieu de "le"',
      'd) Ce sont des variations régionales'
    ],
    correctAnswer: 'a) Loísmo : "lo" pour COI au lieu de "le"',
    explanation: 'Loísmo = "lo" au lieu de "le" (COI). Leísmo = "le" au lieu de "lo" (COD). Laísmo = "la" au lieu de "le" (COI). Phénomènes dialectaux.',
    level: 'avancé',
    category: 'Phénomènes dialectaux'
  },
  {
    id: 'pronouns_choix_16',
    type: 'choix',
    question: 'Comment traduire "Il me l\'a dit" selon le contexte ?',
    options: [
      'a) Me lo dijo (une chose)',
      'b) Me la dijo (une information féminine)',
      'c) Me los dijo (plusieurs choses)',
      'd) Me las dijo (plusieurs informations féminines)'
    ],
    correctAnswer: 'a) Me lo dijo (une chose)',
    explanation: 'Le genre du pronom COD dépend de ce qui est dit : "me lo dijo" (le secret), "me la dijo" (la noticia), etc.',
    level: 'avancé',
    category: 'Accord en genre des pronoms'
  },
  {
    id: 'pronouns_choix_17',
    type: 'choix',
    question: 'Quelles formes de l\'impératif demandent l\'enclise ?',
    options: [
      'a) Dime (dis-moi)',
      'b) No me digas (ne me dis pas)',
      'c) Háblale (parle-lui)',
      'd) No le hables (ne lui parle pas)'
    ],
    correctAnswer: 'a) Dime (dis-moi)',
    explanation: 'L\'enclise s\'utilise seulement avec l\'impératif affirmatif ("dime", "háblale"). L\'impératif négatif place les pronoms avant ("no me digas").',
    level: 'avancé',
    category: 'Impératif et position des pronoms'
  },
  {
    id: 'pronouns_choix_18',
    type: 'choix',
    question: 'Quand "se" peut-il être ambigu ?',
    options: [
      'a) Entre réfléchi et réciproque',
      'b) Entre passif et impersonnel',
      'c) Entre "le" et pronom réfléchi',
      'd) Entre aspectuel et réfléchi'
    ],
    correctAnswer: 'a) Entre réfléchi et réciproque',
    explanation: '"Se ven" peut signifier "ils se voient" (réfléchi) ou "ils se voient mutuellement" (réciproque). Le contexte lève l\'ambiguïté.',
    level: 'avancé',
    category: 'Ambiguïtés pronominales'
  },
  {
    id: 'pronouns_choix_19',
    type: 'choix',
    question: 'Avec quels verbes le pronom change-t-il le sens ?',
    options: [
      'a) Ir (aller) vs irse (partir)',
      'b) Dormir (dormir) vs dormirse (s\'endormir)',
      'c) Comer (manger) vs comerse (manger entièrement)',
      'd) Morir (mourir) vs morirse (mourir naturellement)'
    ],
    correctAnswer: 'a) Ir (aller) vs irse (partir)',
    explanation: 'Le pronom réfléchi peut modifier le sens : "ir" (aller) ≠ "irse" (partir), "dormir" ≠ "dormirse", "comer" ≠ "comerse".',
    level: 'avancé',
    category: 'Verbes pronominaux vs non-pronominaux'
  },
  {
    id: 'pronouns_choix_20',
    type: 'choix',
    question: 'Comment éviter la répétition pronominale excessive ?',
    options: [
      'a) Utiliser des noms au lieu de pronoms',
      'b) Varier les structures de phrase',
      'c) Omettre les pronoms évidents',
      'd) Utiliser la voix passive'
    ],
    correctAnswer: 'a) Utiliser des noms au lieu de pronoms',
    explanation: 'Pour éviter l\'accumulation de pronoms, on peut utiliser des noms, varier les structures, omettre les pronoms évidents ou changer de voix.',
    level: 'avancé',
    category: 'Style et variation'
  }
];

// Exercices à mots à compléter pour Pronoms
const pronounsCompletExercises: PronounsExercise[] = [
  {
    id: 'pronouns_complet_1',
    type: 'complet',
    question: 'Complétez : "Quiero que ______ ______ digas la verdad." (Je veux que tu lui dises la vérité)',
    correctAnswer: 'se la',
    explanation: '"Se la digas" : "se" remplace "le" (à lui/elle) devant "la" (la verdad, COD féminin).',
    level: 'avancé',
    category: 'Transformation le → se'
  },
  {
    id: 'pronouns_complet_2',
    type: 'complet',
    question: 'Complétez : "A mí ______ gusta el chocolate." (Moi, j\'aime le chocolat)',
    correctAnswer: 'me',
    explanation: 'Redondance pronominale : "A mí me gusta" pour insister sur la personne qui aime.',
    level: 'intermédiaire',
    category: 'Redondance emphatique'
  },
  {
    id: 'pronouns_complet_3',
    type: 'complet',
    question: 'Complétez : "______ venden casas aquí." (On vend des maisons ici)',
    correctAnswer: 'Se',
    explanation: '"Se venden casas" : passif pronominal équivalent à "des maisons sont vendues".',
    level: 'avancé',
    category: 'Passif pronominal'
  },
  {
    id: 'pronouns_complet_4',
    type: 'complet',
    question: 'Complétez : "No ______ ______ digas." (Ne le lui dis pas)',
    correctAnswer: 'se lo',
    explanation: 'À l\'impératif négatif, les pronoms précèdent : "no se lo digas".',
    level: 'avancé',
    category: 'Impératif négatif'
  },
  {
    id: 'pronouns_complet_5',
    type: 'complet',
    question: 'Complétez : "Está pensando en ______." (Il pense à elles)',
    correctAnswer: 'ellas',
    explanation: 'Après préposition, on utilise les pronoms toniques : "en ellas" (pas de pronominalisation possible).',
    level: 'avancé',
    category: 'Pronoms après préposition'
  },
  {
    id: 'pronouns_complet_6',
    type: 'complet',
    question: 'Complétez : "Quiero ______." (Je veux le lui donner)',
    correctAnswer: 'dárselo',
    explanation: 'Avec l\'infinitif, enclise obligatoire : "dárselo" (avec accent pour conserver l\'accentuation).',
    level: 'avancé',
    category: 'Enclise avec infinitif'
  },
  {
    id: 'pronouns_complet_7',
    type: 'complet',
    question: 'Complétez : "______ ______ comió toda la tarta." (Il a mangé tout le gâteau)',
    correctAnswer: 'Se la',
    explanation: '"Se la comió" : "se" aspectuel indique la complétude, "la" reprend "la tarta".',
    level: 'avancé',
    category: 'Se aspectuel'
  },
  {
    id: 'pronouns_complet_8',
    type: 'complet',
    question: 'Complétez : "______ duele la cabeza." (Il/elle a mal à la tête)',
    correctAnswer: 'Le',
    explanation: '"Le duele" : le pronom est COI avec le verbe "doler" (comme "gustar").',
    level: 'intermédiaire',
    category: 'Verbes à COI'
  },
  {
    id: 'pronouns_complet_9',
    type: 'complet',
    question: 'Complétez : "______ escribimos todas las semanas." (Nous nous écrivons toutes les semaines)',
    correctAnswer: 'Nos',
    explanation: '"Nos escribimos" : réciprocité exprimée par le pronom réfléchi.',
    level: 'intermédiaire',
    category: 'Réciprocité'
  },
  {
    id: 'pronouns_complet_10',
    type: 'complet',
    question: 'Complétez : "______ necesita experiencia." (On a besoin d\'expérience)',
    correctAnswer: 'Se',
    explanation: '"Se necesita" : "se" impersonnel pour exprimer "on" (agent effacé).',
    level: 'avancé',
    category: 'Se impersonnel'
  },
  {
    id: 'pronouns_complet_11',
    type: 'complet',
    question: 'Complétez : "¿______ importa si llego tarde?" (Ça vous dérange si j\'arrive en retard ?)',
    correctAnswer: 'Les',
    explanation: '"Les importa" : COI pluriel formel (ustedes). Avec "vosotros" : "os importa".',
    level: 'intermédiaire',
    category: 'Politesse formelle'
  },
  {
    id: 'pronouns_complet_12',
    type: 'complet',
    question: 'Complétez : "Está ____________." (Il est en train de le lui dire)',
    correctAnswer: 'diciéndoselo',
    explanation: 'Avec le gérondif, enclise obligatoire : "diciéndoselo" (avec accent).',
    level: 'avancé',
    category: 'Enclise avec gérondif'
  },
  {
    id: 'pronouns_complet_13',
    type: 'complet',
    question: 'Complétez : "______ ______ rompió el jarrón." (Le vase s\'est cassé)',
    correctAnswer: 'Se le',
    explanation: '"Se le rompió" : "se" impersonnel + "le" (à lui/elle) indique un événement accidentel.',
    level: 'avancé',
    category: 'Se accidentel'
  },
  {
    id: 'pronouns_complet_14',
    type: 'complet',
    question: 'Complétez : "No quiero ______ nada." (Je ne veux rien lui dire)',
    correctAnswer: 'decirle',
    explanation: '"Decirle nada" : infinitif avec pronom enclitique. Forme négative complète : "No quiero decirle nada".',
    level: 'intermédiaire',
    category: 'Infinitif avec négation'
  },
  {
    id: 'pronouns_complet_15',
    type: 'complet',
    question: 'Complétez : "Conmigo y con ______." (Avec moi et avec toi)',
    correctAnswer: 'ti',
    explanation: 'Après préposition : "conmigo" (avec moi), "contigo" (avec toi), "con él/ella" (avec lui/elle).',
    level: 'intermédiaire',
    category: 'Pronoms prépositionnels'
  },
  {
    id: 'pronouns_complet_16',
    type: 'complet',
    question: 'Complétez : "______ habla español aquí." (On parle espagnol ici)',
    correctAnswer: 'Se',
    explanation: '"Se habla español" : construction impersonnelle équivalente au "on" français.',
    level: 'avancé',
    category: 'Impersonnel avec langues'
  },
  {
    id: 'pronouns_complet_17',
    type: 'complet',
    question: 'Complétez : "¿______ parece bien?" (Ça vous semble bien ?)',
    correctAnswer: 'Les',
    explanation: '"Les parece" : COI pluriel avec "parecer". La chose qui semble est le sujet.',
    level: 'intermédiaire',
    category: 'Verbes d\'opinion'
  },
  {
    id: 'pronouns_complet_18',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ olvidaron las llaves." (Ils ont oublié les clés)',
    correctAnswer: 'Se les han',
    explanation: '"Se les han olvidado" : construction avec "se" accidentel + COI + haber + participe.',
    level: 'avancé',
    category: 'Se accidentel avec temps composés'
  },
  {
    id: 'pronouns_complet_19',
    type: 'complet',
    question: 'Complétez : "Entre ______ y ______." (Entre toi et moi)',
    correctAnswer: 'tú, mí',
    explanation: 'Après "entre", on utilise les pronoms sujets sauf "mí" : "entre tú y mí".',
    level: 'intermédiaire',
    category: 'Pronoms avec "entre"'
  },
  {
    id: 'pronouns_complet_20',
    type: 'complet',
    question: 'Complétez : "______ ______ va de la cabeza." (Il devient fou)',
    correctAnswer: 'Se le',
    explanation: '"Se le va de la cabeza" : expression idiomatique avec "se" + COI pour "devenir fou".',
    level: 'avancé',
    category: 'Expressions idiomatiques'
  }
];

// Fonctions utilitaires
export const getPronounsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  switch (type) {
    case 'qcm':
      return pronounsQCMExercises;
    case 'choix':
      return pronounsChoixExercises;
    case 'complet':
      return pronounsCompletExercises;
    default:
      return [];
  }
};

export const pronounsExerciseCategories = [
  'Transformation pronominale',
  'Ordre des pronoms',
  'Redondance pronominale',
  'Phénomènes dialectaux',
  'Enclise et accentuation',
  'Pronoms réciproques',
  'Passif pronominal',
  'Emphase et ordre des mots',
  'Absence de pronom équivalent',
  'Se aspectuel',
  'Verbes à construction particulière',
  'Impératif et pronoms',
  'Limites de la pronominalisation',
  'Variations géographiques',
  'Se impersonnel',
  'Désambiguïsation',
  'Erreurs dialectales',
  'Transformation automatique',
  'Systèmes de politesse',
  'Omission du pronom sujet'
];

// Export de tous les exercices
export const pronounsExercises: PronounsExercise[] = [
  ...pronounsQCMExercises,
  ...pronounsChoixExercises,
  ...pronounsCompletExercises
];