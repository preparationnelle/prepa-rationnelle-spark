export interface AffectiveVerbsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

// Exercices QCM pour Verbes Affectifs (niveau prépa ECG)
const affectiveVerbsQCMExercises: AffectiveVerbsExercise[] = [
  {
    id: 'affective_qcm_1',
    type: 'qcm',
    question: 'Quelle différence entre "Me gusta que vengas" et "Me gusta venir" ?',
    options: [
      'a) Le premier exprime un désir, le second une action',
      'b) Le premier demande le subjonctif, le second l\'infinitif',
      'c) Le premier concerne autrui, le second le sujet lui-même',
      'd) b) et c) sont corrects'
    ],
    correctAnswer: 'd) b) et c) sont corrects',
    explanation: 'Avec "gustar" : si changement de sujet → subjonctif ("que vengas"), si même sujet → infinitif ("venir"). Le premier concerne une action d\'autrui, le second une action personnelle.',
    level: 'avancé',
    category: 'Construction avec infinitif vs subjonctif'
  },
  {
    id: 'affective_qcm_2',
    type: 'qcm',
    question: 'Pourquoi dit-on "A él le encanta" et non "A él lo encanta" ?',
    options: [
      'a) "Encantar" demande toujours le COI',
      'b) C\'est une règle d\'euphonie',
      'c) "Él" est le sujet réel',
      'd) C\'est une exception grammaticale'
    ],
    correctAnswer: 'a) "Encantar" demande toujours le COI',
    explanation: '"Encantar" fonctionne comme "gustar" : la personne qui ressent l\'émotion est COI (le), ce qui plaît/enchante est le sujet grammatical.',
    level: 'avancé',
    category: 'Construction des verbes affectifs'
  },
  {
    id: 'affective_qcm_3',
    type: 'qcm',
    question: 'Comment exprime-t-on "Il me manque trois euros" en espagnol ?',
    options: [
      'a) Me falta tres euros',
      'b) Me faltan tres euros',
      'c) Falto tres euros',
      'd) Me falta de tres euros'
    ],
    correctAnswer: 'b) Me faltan tres euros',
    explanation: '"Faltar" s\'accorde avec ce qui manque (tres euros = pluriel). La personne est COI : "me faltan tres euros".',
    level: 'intermédiaire',
    category: 'Accord avec verbes affectifs'
  },
  {
    id: 'affective_qcm_4',
    type: 'qcm',
    question: 'Dans "Me da pena que se vaya", quel mode utilise-t-on après "dar pena" ?',
    options: [
      'a) Indicatif car c\'est un fait',
      'b) Subjonctif car c\'est un sentiment',
      'c) Conditionnel pour l\'hypothèse',
      'd) L\'infinitif est aussi possible'
    ],
    correctAnswer: 'b) Subjonctif car c\'est un sentiment',
    explanation: 'Les verbes exprimant des sentiments ("dar pena", "alegrar", "molestar") demandent le subjonctif dans la proposition subordonnée.',
    level: 'avancé',
    category: 'Subjonctif avec verbes de sentiment'
  },
  {
    id: 'affective_qcm_5',
    type: 'qcm',
    question: 'Quelle est la forme correcte : "Me importa mucho" ou "Me importa de mucho" ?',
    options: [
      'a) Me importa mucho',
      'b) Me importa de mucho',
      'c) Les deux sont acceptées',
      'd) Cela dépend du registre'
    ],
    correctAnswer: 'a) Me importa mucho',
    explanation: '"Importar" ne demande pas de préposition avant l\'adverbe d\'intensité. "Me importa mucho" est la seule forme correcte.',
    level: 'intermédiaire',
    category: 'Prépositions avec verbes affectifs'
  },
  {
    id: 'affective_qcm_6',
    type: 'qcm',
    question: 'Comment traduire "Cela me surprend qu\'il ne soit pas venu" ?',
    options: [
      'a) Me sorprende que no vino',
      'b) Me sorprende que no ha venido',
      'c) Me sorprende que no haya venido',
      'd) Me sorprende que no venga'
    ],
    correctAnswer: 'c) Me sorprende que no haya venido',
    explanation: 'Après "sorprender" + que, on utilise le subjonctif. Pour exprimer l\'antériorité, subjonctif passé : "haya venido".',
    level: 'avancé',
    category: 'Temps du subjonctif avec verbes affectifs'
  },
  {
    id: 'affective_qcm_7',
    type: 'qcm',
    question: 'Quelle différence entre "Me gusta" et "Me apetece" ?',
    options: [
      'a) "Me gusta" est permanent, "me apetece" momentané',
      'b) "Me gusta" est général, "me apetece" spécifique',
      'c) "Me apetece" exprime l\'envie immédiate',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: '"Me gusta" exprime un goût général/permanent. "Me apetece" exprime une envie momentanée, spécifique, immédiate ("j\'ai envie de").',
    level: 'avancé',
    category: 'Nuances sémantiques'
  },
  {
    id: 'affective_qcm_8',
    type: 'qcm',
    question: 'Pourquoi dit-on "Les molesta que hagan ruido" et non "Los molesta" ?',
    options: [
      'a) "Molestar" demande le COI pluriel',
      'b) C\'est du leísmo accepté',
      'c) "Ellos" sont COI, "que hagan ruido" est sujet',
      'd) C\'est une erreur, "los" est correct'
    ],
    correctAnswer: 'c) "Ellos" sont COI, "que hagan ruido" est sujet',
    explanation: 'Avec "molestar", les personnes sont COI (les), ce qui dérange est le sujet ("que hagan ruido"). Construction typique des verbes affectifs.',
    level: 'avancé',
    category: 'Analyse syntaxique des verbes affectifs'
  },
  {
    id: 'affective_qcm_9',
    type: 'qcm',
    question: 'Comment dire "J\'ai horreur qu\'il fume" ?',
    options: [
      'a) Odio que fuma',
      'b) Me da asco que fume',
      'c) Tengo horror que fume',
      'd) No soporto que fume'
    ],
    correctAnswer: 'b) Me da asco que fume',
    explanation: '"Dar asco", "no soportar", "odiar" peuvent tous exprimer l\'horreur. "Me da asco que fume" et "no soporto que fume" sont corrects avec subjonctif.',
    level: 'avancé',
    category: 'Expression de l\'aversion'
  },
  {
    id: 'affective_qcm_10',
    type: 'qcm',
    question: 'Quel verbe utilise une construction différente des autres ?',
    options: [
      'a) Gustar (plaire)',
      'b) Querer (vouloir/aimer)',
      'c) Encantar (enchanter)',
      'd) Molestar (déranger)'
    ],
    correctAnswer: 'b) Querer (vouloir/aimer)',
    explanation: '"Querer" suit la construction normale (sujet + COD), contrairement aux autres qui utilisent la construction affective (COI + sujet inversé).',
    level: 'avancé',
    category: 'Classifications des verbes affectifs'
  },
  {
    id: 'affective_qcm_11',
    type: 'qcm',
    question: 'Dans "No me gusta nada que llegues tarde", quelle est la fonction de "nada" ?',
    options: [
      'a) Négation renforcée',
      'b) Adverbe d\'intensité',
      'c) Complément du verbe',
      'd) a) et b) sont corrects'
    ],
    correctAnswer: 'd) a) et b) sont corrects',
    explanation: '"Nada" après "no me gusta" renforce la négation et intensifie le dégoût. C\'est à la fois une négation renforcée et un intensifieur.',
    level: 'avancé',
    category: 'Négation avec verbes affectifs'
  },
  {
    id: 'affective_qcm_12',
    type: 'qcm',
    question: 'Comment exprimer "Peu importe qu\'il vienne ou non" ?',
    options: [
      'a) No importa que venga o no',
      'b) Poco importa que venga o no',
      'c) Me da igual que venga o no',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: '"No importa", "poco importa", "me da igual" expriment tous l\'indifférence. Toutes ces constructions sont correctes avec le subjonctif.',
    level: 'intermédiaire',
    category: 'Expression de l\'indifférence'
  },
  {
    id: 'affective_qcm_13',
    type: 'qcm',
    question: 'Quel temps après "Me alegré de que" (je me suis réjoui que) ?',
    options: [
      'a) Subjonctif présent',
      'b) Subjonctif imparfait',
      'c) Indicatif passé',
      'd) Dépend du sens'
    ],
    correctAnswer: 'b) Subjonctif imparfait',
    explanation: 'Après un verbe de sentiment au passé, on utilise le subjonctif imparfait par concordance des temps : "me alegré de que viniera".',
    level: 'avancé',
    category: 'Concordance des temps avec subjonctif'
  },
  {
    id: 'affective_qcm_14',
    type: 'qcm',
    question: 'Quelle différence entre "Me parece bien" et "Me parece que está bien" ?',
    options: [
      'a) Le premier exprime une opinion, le second un fait',
      'b) Le premier n\'a pas de subordonnée',
      'c) Le second utilise l\'indicatif car "parecer" exprime l\'opinion',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: '"Me parece bien" = opinion simple. "Me parece que está bien" = opinion sur un fait, d\'où l\'indicatif après "parecer" (verbe d\'opinion).',
    level: 'avancé',
    category: 'Verbes d\'opinion vs sentiment'
  },
  {
    id: 'affective_qcm_15',
    type: 'qcm',
    question: 'Comment traduire "Il m\'arrive de perdre patience" ?',
    options: [
      'a) Me pasa perder paciencia',
      'b) Me sucede perder paciencia',
      'c) Me ocurre perder paciencia',
      'd) Toutes sont possibles'
    ],
    correctAnswer: 'd) Toutes sont possibles',
    explanation: '"Me pasa", "me sucede", "me ocurre" + infinitif traduisent "il m\'arrive de". Tous ces verbes impersonnels sont synonymes.',
    level: 'intermédiaire',
    category: 'Verbes impersonnels affectifs'
  },
  {
    id: 'affective_qcm_16',
    type: 'qcm',
    question: 'Dans "Me cuesta mucho que entiendas", quelle est l\'erreur ?',
    options: [
      'a) "Cuesta" devrait être "cuestan"',
      'b) Il faut "costar" + infinitif ici',
      'c) "Entiendas" devrait être "entiendes"',
      'd) Pas d\'erreur'
    ],
    correctAnswer: 'b) Il faut "costar" + infinitif ici',
    explanation: '"Me cuesta" + infinitif = "j\'ai du mal à". Correct : "Me cuesta entenderte". Pour "il m\'est difficile que tu comprennes" : "me resulta difícil que entiendas".',
    level: 'avancé',
    category: 'Constructions avec "costar"'
  },
  {
    id: 'affective_qcm_17',
    type: 'qcm',
    question: 'Quelle est la différence entre "Me duele" et "Me hace daño" ?',
    options: [
      'a) "Me duele" est physique, "me hace daño" moral',
      'b) "Me duele" peut être physique ou moral',
      'c) "Me hace daño" implique un agent externe',
      'd) b) et c) sont corrects'
    ],
    correctAnswer: 'd) b) et c) sont corrects',
    explanation: '"Me duele" peut être physique (la cabeza) ou moral (que se vaya). "Me hace daño" implique qu\'il y a quelque chose/quelqu\'un qui fait mal.',
    level: 'avancé',
    category: 'Nuances entre verbes similaires'
  },
  {
    id: 'affective_qcm_18',
    type: 'qcm',
    question: 'Comment exprimer "Cela me déplaît énormément" ?',
    options: [
      'a) No me gusta nada',
      'b) Me disgusta mucho',
      'c) Me desagrada enormemente',
      'd) Toutes ces réponses'
    ],
    correctAnswer: 'd) Toutes ces réponses',
    explanation: 'Tous expriment le déplaisir : "no me gusta nada" (familier), "me disgusta" (standard), "me desagrada" (plus soutenu).',
    level: 'intermédiaire',
    category: 'Registres d\'expression'
  },
  {
    id: 'affective_qcm_19',
    type: 'qcm',
    question: 'Après "Siento que" (je regrette que), quel mode utilise-t-on ?',
    options: [
      'a) Indicatif car c\'est un fait',
      'b) Subjonctif car c\'est un sentiment',
      'c) Dépend si c\'est présent ou passé',
      'd) Conditionnel pour la politesse'
    ],
    correctAnswer: 'b) Subjonctif car c\'est un sentiment',
    explanation: '"Sentir" (regretter) exprime un sentiment, donc subjonctif : "siento que no puedas venir". Ne pas confondre avec "sentir" (percevoir) qui prend l\'indicatif.',
    level: 'avancé',
    category: 'Polysémie et modes'
  },
  {
    id: 'affective_qcm_20',
    type: 'qcm',
    question: 'Quelle construction est incorrecte ?',
    options: [
      'a) Me conviene que vengas (il me convient que)',
      'b) Me interesa que sepas (il m\'intéresse que)',
      'c) Me preocupa que no llamó (je m\'inquiète qu\'il n\'a pas appelé)',
      'd) Me extraña que digas eso (cela m\'étonne que)'
    ],
    correctAnswer: 'c) Me preocupa que no llamó (je m\'inquiète qu\'il n\'a pas appelé)',
    explanation: '"Preocupar" (inquiéter) demande le subjonctif. Correct : "me preocupa que no haya llamado" (antériorité) ou "que no llame" (général).',
    level: 'avancé',
    category: 'Erreurs fréquentes avec subjonctif'
  }
];

// Exercices à choix multiples pour Verbes Affectifs
const affectiveVerbsChoixExercises: AffectiveVerbsExercise[] = [
  {
    id: 'affective_choix_1',
    type: 'choix',
    question: 'Quels verbes suivent la même construction que "gustar" ?',
    options: [
      'a) Encantar (enchanter)',
      'b) Molestar (déranger)',
      'c) Faltar (manquer)',
      'd) Doler (faire mal)'
    ],
    correctAnswer: 'a) Encantar (enchanter)',
    explanation: 'Tous ces verbes suivent la construction de "gustar" : COI + verbe + sujet. La personne qui ressent est COI, ce qui cause l\'émotion est sujet.',
    level: 'intermédiaire',
    category: 'Verbes de construction affective'
  },
  {
    id: 'affective_choix_2',
    type: 'choix',
    question: 'Avec quels verbes utilise-t-on obligatoirement le subjonctif ?',
    options: [
      'a) Alegrarse de que (se réjouir que)',
      'b) Sentir que (regretter que)',
      'c) Dar pena que (faire de la peine que)',
      'd) Parecer que (sembler que)'
    ],
    correctAnswer: 'a) Alegrarse de que (se réjouir que)',
    explanation: 'Les verbes de sentiment (alegrarse, sentir, dar pena) demandent le subjonctif. "Parecer" (opinion) prend l\'indicatif.',
    level: 'avancé',
    category: 'Subjonctif obligatoire avec sentiments'
  },
  {
    id: 'affective_choix_3',
    type: 'choix',
    question: 'Quelles expressions traduisent "cela m\'est égal" ?',
    options: [
      'a) Me da igual',
      'b) Me da lo mismo',
      'c) No me importa',
      'd) Me es indiferente'
    ],
    correctAnswer: 'a) Me da igual',
    explanation: 'Toutes ces expressions traduisent l\'indifférence : "me da igual/lo mismo", "no me importa", "me es indiferente" (plus soutenu).',
    level: 'intermédiaire',
    category: 'Expression de l\'indifférence'
  },
  {
    id: 'affective_choix_4',
    type: 'choix',
    question: 'Quels verbes peuvent exprimer la difficulté ?',
    options: [
      'a) Costar (coûter/être difficile)',
      'b) Resultar difícil (s\'avérer difficile)',
      'c) Ser difícil (être difficile)',
      'd) Hacer difícil (rendre difficile)'
    ],
    correctAnswer: 'a) Costar (coûter/être difficile)',
    explanation: 'Tous peuvent exprimer la difficulté avec des nuances : "me cuesta" (j\'ai du mal), "me resulta difícil" (je trouve difficile), etc.',
    level: 'avancé',
    category: 'Expression de la difficulté'
  },
  {
    id: 'affective_choix_5',
    type: 'choix',
    question: 'Avec quels verbes la négation change-t-elle le sens ?',
    options: [
      'a) Importar (importer) → No importar (ne pas importer)',
      'b) Gustar (plaire) → No gustar (déplaire)',
      'c) Parecer (sembler) → No parecer (ne pas sembler)',
      'd) Doler (faire mal) → No doler (ne pas faire mal)'
    ],
    correctAnswer: 'a) Importar (importer) → No importar (ne pas importer)',
    explanation: 'Avec tous ces verbes, la négation change logiquement le sens. "No me gusta" = déplaire, "no me importa" = m\'être égal, etc.',
    level: 'intermédiaire',
    category: 'Négation avec verbes affectifs'
  },
  {
    id: 'affective_choix_6',
    type: 'choix',
    question: 'Quels verbes demandent une préposition avant l\'infinitif ?',
    options: [
      'a) Alegrarse de + infinitif',
      'b) Tener ganas de + infinitif',
      'c) Apetecer + infinitif (sans préposition)',
      'd) Dar vergüenza de + infinitif'
    ],
    correctAnswer: 'a) Alegrarse de + infinitif',
    explanation: '"Alegrarse de", "tener ganas de", "dar vergüenza de" demandent "de". "Apetecer" se construit directement avec l\'infinitif.',
    level: 'avancé',
    category: 'Prépositions avec infinitif'
  },
  {
    id: 'affective_choix_7',
    type: 'choix',
    question: 'Quelles formes expriment l\'intensité avec les verbes affectifs ?',
    options: [
      'a) Me gusta mucho',
      'b) Me encanta (intensifieur de "gustar")',
      'c) No me gusta nada',
      'd) Me gusta un montón'
    ],
    correctAnswer: 'a) Me gusta mucho',
    explanation: 'L\'intensité s\'exprime par les adverbes (mucho, nada), les verbes intensifiés (encantar), les expressions familières (un montón).',
    level: 'intermédiaire',
    category: 'Expression de l\'intensité'
  },
  {
    id: 'affective_choix_8',
    type: 'choix',
    question: 'Avec quels verbes peut-on utiliser la tournure impersonnelle ?',
    options: [
      'a) Convenir (convenir) → Conviene que...',
      'b) Importar (importer) → Importa que...',
      'c) Parecer (sembler) → Parece que...',
      'd) Gustar (plaire) → Gusta que...'
    ],
    correctAnswer: 'a) Convenir (convenir) → Conviene que...',
    explanation: 'Beaucoup de verbes affectifs ont une forme impersonnelle : "conviene que", "importa que", "parece que". "Gusta que" est moins courant.',
    level: 'avancé',
    category: 'Formes impersonnelles'
  },
  {
    id: 'affective_choix_9',
    type: 'choix',
    question: 'Quels verbes expriment la surprise ?',
    options: [
      'a) Sorprender (surprendre)',
      'b) Extrañar (étonner)',
      'c) Llamar la atención (attirer l\'attention)',
      'd) Resultar extraño (sembler étrange)'
    ],
    correctAnswer: 'a) Sorprender (surprendre)',
    explanation: 'Tous expriment la surprise avec des nuances : "sorprender" (surprendre), "extrañar" (étonner), "llamar la atención", "resultar extraño".',
    level: 'intermédiaire',
    category: 'Expression de la surprise'
  },
  {
    id: 'affective_choix_10',
    type: 'choix',
    question: 'Quelles constructions sont possibles avec "dar" + sentiment ?',
    options: [
      'a) Dar pena (faire de la peine)',
      'b) Dar miedo (faire peur)',
      'c) Dar vergüenza (faire honte)',
      'd) Dar asco (dégoûter)'
    ],
    correctAnswer: 'a) Dar pena (faire de la peine)',
    explanation: '"Dar" forme de nombreuses expressions de sentiment : "dar pena/miedo/vergüenza/asco/rabia/alegría", etc. Toutes suivent la même construction.',
    level: 'intermédiaire',
    category: 'Expressions avec "dar"'
  },
  {
    id: 'affective_choix_11',
    type: 'choix',
    question: 'Avec quels verbes la personne n\'est PAS sujet grammatical ?',
    options: [
      'a) Gustar (la personne est COI)',
      'b) Querer (la personne est sujet)',
      'c) Doler (la personne est COI)',
      'd) Parecer (la personne est COI)'
    ],
    correctAnswer: 'a) Gustar (la personne est COI)',
    explanation: 'Avec "gustar", "doler", "parecer", "encantar", etc., la personne est COI. Avec "querer", "amar", "odiar", la personne est sujet.',
    level: 'avancé',
    category: 'Analyse syntaxique'
  },
  {
    id: 'affective_choix_12',
    type: 'choix',
    question: 'Quels temps du subjonctif utilise-t-on après les verbes de sentiment ?',
    options: [
      'a) Présent (que venga)',
      'b) Imparfait (que viniera)',
      'c) Passé (que haya venido)',
      'd) Plus-que-parfait (que hubiera venido)'
    ],
    correctAnswer: 'a) Présent (que venga)',
    explanation: 'Tous les temps du subjonctif sont possibles selon la concordance et l\'aspect : présent, imparfait, passé, plus-que-parfait.',
    level: 'avancé',
    category: 'Temps du subjonctif'
  },
  {
    id: 'affective_choix_13',
    type: 'choix',
    question: 'Quelles expressions marquent l\'envie spontanée ?',
    options: [
      'a) Apetecer (avoir envie)',
      'b) Tener ganas de (avoir envie de)',
      'c) Sentir ganas de (sentir l\'envie de)',
      'd) Dar ganas de (donner envie de)'
    ],
    correctAnswer: 'a) Apetecer (avoir envie)',
    explanation: 'Toutes expriment l\'envie avec des nuances : "apetecer" (spontané), "tener ganas" (plus volontaire), "sentir ganas", "dar ganas".',
    level: 'intermédiaire',
    category: 'Expression de l\'envie'
  },
  {
    id: 'affective_choix_14',
    type: 'choix',
    question: 'Avec quels verbes peut-on omettre le pronom COI ?',
    options: [
      'a) Avec aucun (toujours obligatoire)',
      'b) Avec les verbes impersonnels',
      'c) Quand le contexte est clair',
      'd) Dans le style littéraire'
    ],
    correctAnswer: 'b) Avec les verbes impersonnels',
    explanation: 'Le pronom COI peut s\'omettre dans les constructions impersonnelles : "conviene que vengas" (au lieu de "te conviene").',
    level: 'avancé',
    category: 'Omission du pronom'
  },
  {
    id: 'affective_choix_15',
    type: 'choix',
    question: 'Quels verbes peuvent exprimer la facilité/difficulté ?',
    options: [
      'a) Costar (être difficile)',
      'b) Resultar fácil/difícil',
      'c) Ser fácil/difícil',
      'd) Venir bien/mal (convenir)'
    ],
    correctAnswer: 'a) Costar (être difficile)',
    explanation: 'Plusieurs constructions expriment facilité/difficulté : "me cuesta", "me resulta fácil", "es fácil", "me viene bien".',
    level: 'avancé',
    category: 'Facilité et difficulté'
  },
  {
    id: 'affective_choix_16',
    type: 'choix',
    question: 'Quelles différences entre ces expressions de goût ?',
    options: [
      'a) Me gusta (goût général)',
      'b) Me apetece (envie momentanée)',
      'c) Me encanta (goût intense)',
      'd) Me place (registre soutenu)'
    ],
    correctAnswer: 'a) Me gusta (goût général)',
    explanation: 'Nuances importantes : "gustar" (goût), "apetecer" (envie), "encantar" (adorer), "placer" (plaire, soutenu).',
    level: 'avancé',
    category: 'Gradations du goût'
  },
  {
    id: 'affective_choix_17',
    type: 'choix',
    question: 'Avec quels verbes la construction change-t-elle selon le sens ?',
    options: [
      'a) Sentir (percevoir) vs sentir (regretter)',
      'b) Parecer (sembler) vs parecerse (ressembler)',
      'c) Faltar (manquer) vs faltar (faire défaut)',
      'd) Doler (faire mal) vs dolerse (se plaindre)'
    ],
    correctAnswer: 'a) Sentir (percevoir) vs sentir (regretter)',
    explanation: '"Sentir" perception → indicatif, "sentir" regret → subjonctif. "Parecer" → construction affective, "parecerse" → construction normale.',
    level: 'avancé',
    category: 'Polysémie et construction'
  },
  {
    id: 'affective_choix_18',
    type: 'choix',
    question: 'Quels verbes demandent l\'accord au pluriel ?',
    options: [
      'a) Faltar (les choses qui manquent)',
      'b) Gustar (les choses qui plaisent)',
      'c) Doler (les parties qui font mal)',
      'd) Quedar (les choses qui restent)'
    ],
    correctAnswer: 'a) Faltar (les choses qui manquent)',
    explanation: 'Ces verbes s\'accordent avec leur sujet grammatical (ce qui manque, plaît, fait mal, reste) : "me faltan tres euros", "me gustan los libros".',
    level: 'intermédiaire',
    category: 'Accord des verbes affectifs'
  },
  {
    id: 'affective_choix_19',
    type: 'choix',
    question: 'Quelles expressions équivalent à "avoir l\'air" ?',
    options: [
      'a) Parecer (sembler)',
      'b) Tener aspecto de',
      'c) Dar la impresión de',
      'd) Verse + adjectif'
    ],
    correctAnswer: 'a) Parecer (sembler)',
    explanation: 'Plusieurs façons d\'exprimer l\'apparence : "parecer" (le plus courant), "tener aspecto de", "dar la impresión de", "verse + adj".',
    level: 'intermédiaire',
    category: 'Expression de l\'apparence'
  },
  {
    id: 'affective_choix_20',
    type: 'choix',
    question: 'Avec quels verbes utilise-t-on "que" + subjonctif vs infinitif ?',
    options: [
      'a) Changement de sujet → subjonctif',
      'b) Même sujet → infinitif',
      'c) Verbes de sentiment → toujours subjonctif',
      'd) Dépend du registre'
    ],
    correctAnswer: 'a) Changement de sujet → subjonctif',
    explanation: 'Règle générale : même sujet → infinitif ("me gusta venir"), changement de sujet → subjonctif ("me gusta que vengas").',
    level: 'avancé',
    category: 'Choix infinitif vs subjonctif'
  }
];

// Exercices à mots à compléter pour Verbes Affectifs
const affectiveVerbsCompletExercises: AffectiveVerbsExercise[] = [
  {
    id: 'affective_complet_1',
    type: 'complet',
    question: 'Complétez : "______ gusta que ______ tan temprano." (J\'aime que tu viennes si tôt)',
    correctAnswer: 'Me, vengas',
    explanation: '"Me gusta que vengas" : COI (me) + verbe + que + subjonctif (changement de sujet).',
    level: 'intermédiaire',
    category: 'Construction de base avec subjonctif'
  },
  {
    id: 'affective_complet_2',
    type: 'complet',
    question: 'Complétez : "______ ______ tres libros para completar la colección." (Il me manque trois livres)',
    correctAnswer: 'Me faltan',
    explanation: '"Me faltan tres libros" : le verbe s\'accorde avec le sujet (tres libros, pluriel).',
    level: 'intermédiaire',
    category: 'Accord avec verbes affectifs'
  },
  {
    id: 'affective_complet_3',
    type: 'complet',
    question: 'Complétez : "______ alegro de que ______ venido." (Je me réjouis qu\'il soit venu)',
    correctAnswer: 'Me, haya',
    explanation: '"Me alegro de que haya venido" : verbe de sentiment + subjonctif passé pour l\'antériorité.',
    level: 'avancé',
    category: 'Subjonctif passé avec sentiments'
  },
  {
    id: 'affective_complet_4',
    type: 'complet',
    question: 'Complétez : "______ ______ pena que no ______ venir." (Cela me fait de la peine qu\'il ne puisse pas venir)',
    correctAnswer: 'Me da, pueda',
    explanation: '"Me da pena que no pueda venir" : expression de sentiment + subjonctif.',
    level: 'avancé',
    category: 'Expressions avec "dar"'
  },
  {
    id: 'affective_complet_5',
    type: 'complet',
    question: 'Complétez : "______ ______ mucho llegar tarde." (J\'ai horreur d\'arriver en retard)',
    correctAnswer: 'Me molesta',
    explanation: '"Me molesta mucho llegar tarde" : même sujet → infinitif (pas de "que").',
    level: 'intermédiaire',
    category: 'Infinitif avec même sujet'
  },
  {
    id: 'affective_complet_6',
    type: 'complet',
    question: 'Complétez : "No ______ ______ nada lo que pienses." (Peu importe ce que tu penses)',
    correctAnswer: 'me importa',
    explanation: '"No me importa nada" : négation renforcée avec "nada" pour exprimer l\'indifférence totale.',
    level: 'intermédiaire',
    category: 'Négation renforcée'
  },
  {
    id: 'affective_complet_7',
    type: 'complet',
    question: 'Complétez : "______ ______ difícil que ______ a tiempo." (Il me semble difficile qu\'il arrive à temps)',
    correctAnswer: 'Me parece, llegue',
    explanation: '"Me parece difícil que llegue" : opinion + adjectif + subjonctif.',
    level: 'avancé',
    category: 'Verbes d\'opinion avec adjectif'
  },
  {
    id: 'affective_complet_8',
    type: 'complet',
    question: 'Complétez : "______ ______ ganas de salir esta noche." (J\'ai envie de sortir ce soir)',
    correctAnswer: 'Tengo muchas',
    explanation: '"Tengo ganas de salir" : expression d\'envie avec infinitif. "Muchas" s\'accorde avec "ganas" (féminin pluriel).',
    level: 'intermédiaire',
    category: 'Expression de l\'envie'
  },
  {
    id: 'affective_complet_9',
    type: 'complet',
    question: 'Complétez : "______ extraña que no ______ llamado." (Cela m\'étonne qu\'il n\'ait pas appelé)',
    correctAnswer: 'Me, haya',
    explanation: '"Me extraña que no haya llamado" : verbe de surprise + subjonctif passé pour l\'antériorité.',
    level: 'avancé',
    category: 'Subjonctif avec antériorité'
  },
  {
    id: 'affective_complet_10',
    type: 'complet',
    question: 'Complétez : "______ duele la cabeza desde esta mañana." (J\'ai mal à la tête depuis ce matin)',
    correctAnswer: 'Me',
    explanation: '"Me duele la cabeza" : construction affective où la personne est COI.',
    level: 'débutant',
    category: 'Construction de base'
  },
  {
    id: 'affective_complet_11',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ que te vayas." (Cela me fait de la peine que tu t\'en ailles)',
    correctAnswer: 'Me da pena',
    explanation: '"Me da pena que te vayas" : expression figée de sentiment + subjonctif.',
    level: 'avancé',
    category: 'Expressions figées'
  },
  {
    id: 'affective_complet_12',
    type: 'complet',
    question: 'Complétez : "______ cuesta mucho levantarme temprano." (J\'ai du mal à me lever tôt)',
    correctAnswer: 'Me',
    explanation: '"Me cuesta + infinitif" : expression de la difficulté personnelle.',
    level: 'intermédiaire',
    category: 'Expression de la difficulté'
  },
  {
    id: 'affective_complet_13',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ que hagas eso." (Il vaut mieux que tu ne fasses pas ça)',
    correctAnswer: 'Más vale que no',
    explanation: '"Más vale que no hagas eso" : expression de conseil/préférence + subjonctif.',
    level: 'avancé',
    category: 'Expressions de conseil'
  },
  {
    id: 'affective_complet_14',
    type: 'complet',
    question: 'Complétez : "______ ______ igual si vienes o no." (Cela m\'est égal si tu viens ou non)',
    correctAnswer: 'Me da',
    explanation: '"Me da igual" : expression d\'indifférence. Alternative : "me da lo mismo".',
    level: 'intermédiaire',
    category: 'Expression de l\'indifférence'
  },
  {
    id: 'affective_complet_15',
    type: 'complet',
    question: 'Complétez : "______ sorprende que ______ tan bien español." (Cela me surprend qu\'il parle si bien espagnol)',
    correctAnswer: 'Me, hable',
    explanation: '"Me sorprende que hable" : verbe de surprise + subjonctif présent.',
    level: 'avancé',
    category: 'Verbes de surprise'
  },
  {
    id: 'affective_complet_16',
    type: 'complet',
    question: 'Complétez : "______ apetece tomar algo." (J\'ai envie de prendre quelque chose)',
    correctAnswer: 'Me',
    explanation: '"Me apetece + infinitif" : expression d\'envie momentanée.',
    level: 'intermédiaire',
    category: 'Envie spontanée'
  },
  {
    id: 'affective_complet_17',
    type: 'complet',
    question: 'Complétez : "______ conviene que ______ más temprano." (Il te convient de partir plus tôt)',
    correctAnswer: 'Te, salgas',
    explanation: '"Te conviene que salgas" : verbe de convenance + subjonctif.',
    level: 'avancé',
    category: 'Verbes de convenance'
  },
  {
    id: 'affective_complet_18',
    type: 'complet',
    question: 'Complétez : "______ encanta que ______ tan generoso." (J\'adore qu\'il soit si généreux)',
    correctAnswer: 'Me, sea',
    explanation: '"Me encanta que sea" : verbe d\'intensité affective + subjonctif.',
    level: 'intermédiaire',
    category: 'Intensité affective'
  },
  {
    id: 'affective_complet_19',
    type: 'complet',
    question: 'Complétez : "______ ______ vergüenza hablar en público." (J\'ai honte de parler en public)',
    correctAnswer: 'Me da',
    explanation: '"Me da vergüenza + infinitif" : expression de sentiment + infinitif (même sujet).',
    level: 'intermédiaire',
    category: 'Sentiments avec infinitif'
  },
  {
    id: 'affective_complet_20',
    type: 'complet',
    question: 'Complétez : "______ ______ ______ de que vengas." (Je me réjouis que tu viennes)',
    correctAnswer: 'Me alegro mucho',
    explanation: '"Me alegro de que vengas" : verbe pronominal de sentiment + préposition + subjonctif.',
    level: 'avancé',
    category: 'Verbes pronominaux de sentiment'
  }
];

// Fonctions utilitaires
export const getAffectiveVerbsExercisesByType = (type: 'qcm' | 'choix' | 'complet') => {
  switch (type) {
    case 'qcm':
      return affectiveVerbsQCMExercises;
    case 'choix':
      return affectiveVerbsChoixExercises;
    case 'complet':
      return affectiveVerbsCompletExercises;
    default:
      return [];
  }
};

export const affectiveVerbsExerciseCategories = [
  'Construction avec infinitif vs subjonctif',
  'Construction des verbes affectifs',
  'Accord avec verbes affectifs',
  'Subjonctif avec verbes de sentiment',
  'Prépositions avec verbes affectifs',
  'Temps du subjonctif avec verbes affectifs',
  'Nuances sémantiques',
  'Analyse syntaxique des verbes affectifs',
  'Expression de l\'aversion',
  'Classifications des verbes affectifs',
  'Négation avec verbes affectifs',
  'Expression de l\'indifférence',
  'Concordance des temps avec subjonctif',
  'Verbes d\'opinion vs sentiment',
  'Verbes impersonnels affectifs',
  'Constructions avec "costar"',
  'Nuances entre verbes similaires',
  'Registres d\'expression',
  'Polysémie et modes',
  'Erreurs fréquentes avec subjonctif'
];

// Export de tous les exercices
export const affectiveVerbsExercises: AffectiveVerbsExercise[] = [
  ...affectiveVerbsQCMExercises,
  ...affectiveVerbsChoixExercises,
  ...affectiveVerbsCompletExercises
];