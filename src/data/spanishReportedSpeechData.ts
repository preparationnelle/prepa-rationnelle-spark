import type { ConjugationSection } from '@/data/spanishConjugationData';

export const reportedSpeechSections: ConjugationSection[] = [
  {
    id: 'rs-principe',
    title: 'Style direct vs style indirect',
    description: 'Le mécanisme de base du discours rapporté',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Le style indirect (estilo indirecto) rapporte les paroles via une subordonnée introduite par « que » (ou « si » pour une question fermée).',
        'Trois transformations simultanées : les temps verbaux, les personnes (pronoms/possessifs), les déictiques (temps et lieu).',
        'Si le verbe introducteur est au présent → aucun changement de temps (Dice que viene).',
        'Si le verbe introducteur est au passé → application de la concordance des temps.',
        'Verbes introducteurs fréquents : decir, afirmar, comentar, explicar, preguntar, pedir, ordenar, responder.',
      ],
      examples: [
        { spanish: '«Tengo hambre» → Dice que tiene hambre.', french: 'Il dit qu\'il a faim.', explanation: 'Introducteur au présent : temps conservé, personne adaptée.' },
        { spanish: '«Tengo hambre» → Dijo que tenía hambre.', french: 'Il a dit qu\'il avait faim.', explanation: 'Introducteur au passé : présent → imparfait.' },
        { spanish: '«Mi coche es nuevo» → Dijo que su coche era nuevo.', french: 'Il a dit que sa voiture était neuve.', explanation: 'Possessif mi → su, présent → imparfait.' },
      ],
      tips: [
        'Identifiez TOUJOURS d\'abord le temps du verbe introducteur : il commande tout le reste.',
        'En thème, on attend le triple ajustement : temps + personne + déictique. Oublier l\'un d\'eux est pénalisé.',
      ],
    },
  },
  {
    id: 'rs-temps',
    title: 'La transposition des temps',
    description: 'Tableau de concordance quand l\'introducteur est au passé',
    level: 'Avancé',
    content: {
      rules: [
        'Présent → imparfait de l\'indicatif (tengo → tenía).',
        'Passé composé / passé simple → plus-que-parfait (he comido / comí → había comido).',
        'Futur → conditionnel présent (vendré → vendría).',
        'Futur antérieur → conditionnel passé (habré terminado → habría terminado).',
        'Impératif → que + imparfait du subjonctif (¡Ven! → que viniera).',
        'Imparfait, conditionnel, plus-que-parfait et subjonctif imparfait ne changent pas.',
      ],
      examples: [
        { spanish: '«Trabajaré mañana» → Dijo que trabajaría al día siguiente.', french: 'Il a dit qu\'il travaillerait le lendemain.', explanation: 'Futur → conditionnel + déictique.' },
        { spanish: '«He aprobado» → Dijo que había aprobado.', french: 'Il a dit qu\'il avait réussi.', explanation: 'Passé composé → plus-que-parfait.' },
        { spanish: '«Hazlo ahora» → Me pidió que lo hiciera entonces.', french: 'Il m\'a demandé de le faire à ce moment-là.', explanation: 'Impératif → imparfait du subjonctif.' },
        { spanish: '«Estaba cansado» → Dijo que estaba cansado.', french: 'Il a dit qu\'il était fatigué.', explanation: 'Imparfait : inchangé.' },
      ],
      tips: [
        'Le couple à automatiser pour les concours : futuro → condicional (vendrá → vendría).',
        'Astuce : un imparfait reste un imparfait — pas de « sur-transposition ».',
      ],
    },
  },
  {
    id: 'rs-deictiques',
    title: 'Déictiques : temps, lieu, démonstratifs',
    description: 'Les marqueurs qui changent avec le changement d\'énonciation',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Temps : hoy → aquel día ; ayer → el día anterior ; mañana → al día siguiente ; ahora → entonces.',
        'Proximité temporelle : esta semana → aquella semana ; el año que viene → el año siguiente.',
        'Lieu : aquí → allí ; este → aquel ; venir → ir ; traer → llevar.',
        'Démonstratifs et possessifs s\'ajustent au point de vue du rapporteur.',
        'Ces changements ne s\'appliquent que si l\'énonciation est décalée dans le temps/l\'espace.',
      ],
      examples: [
        { spanish: '«Vendré aquí mañana» → Dijo que iría allí al día siguiente.', french: 'Il a dit qu\'il irait là le lendemain.', explanation: 'venir→ir, aquí→allí, mañana→al día siguiente.' },
        { spanish: '«Te traigo esto hoy» → Dijo que me llevaba eso aquel día.', french: 'Il a dit qu\'il m\'apportait cela ce jour-là.', explanation: 'traer→llevar, esto→eso, hoy→aquel día.' },
        { spanish: '«Lo hice ayer» → Dijo que lo había hecho el día anterior.', french: 'Il a dit qu\'il l\'avait fait la veille.', explanation: 'Passé simple → plus-que-parfait, ayer → el día anterior.' },
      ],
      tips: [
        'Le binôme venir/ir et traer/llevar est un piège classique du thème : on s\'éloigne donc « ir » et « llevar ».',
        'Si la situation est rapportée le jour même, certains déictiques peuvent rester (contexte) : justifiez par le sens.',
      ],
    },
  },
  {
    id: 'rs-questions-ordres',
    title: 'Questions et ordres au style indirect',
    description: 'Interrogatives indirectes et injonctions rapportées',
    level: 'Avancé',
    content: {
      rules: [
        'Question fermée (oui/non) : preguntar si + indicatif transposé (¿Vienes? → Preguntó si venía).',
        'Question ouverte : on garde le mot interrogatif, accent conservé (¿Dónde vives? → Preguntó dónde vivía).',
        'Ordre / conseil : verbe de demande + que + subjonctif (¡Cállate! → Me pidió que me callara).',
        'Disparition des marques d\'oralité : pas de point d\'interrogation ni d\'exclamation, pas de tirets.',
        'Le mot interrogatif indirect garde son accent écrit (qué, quién, dónde, cuándo, cómo, cuánto).',
      ],
      examples: [
        { spanish: '«¿Tienes hambre?» → Me preguntó si tenía hambre.', french: 'Il m\'a demandé si j\'avais faim.', explanation: 'Question fermée → preguntar si.' },
        { spanish: '«¿Qué quieres?» → Me preguntó qué quería.', french: 'Il m\'a demandé ce que je voulais.', explanation: 'Question ouverte : « qué » garde l\'accent.' },
        { spanish: '«¡No salgas!» → Me ordenó que no saliera.', french: 'Il m\'a ordonné de ne pas sortir.', explanation: 'Ordre → que + imparfait du subjonctif.' },
        { spanish: '«Ayúdame, por favor» → Me rogó que la ayudara.', french: 'Elle m\'a supplié de l\'aider.', explanation: 'Demande polie → subjonctif.' },
      ],
      tips: [
        'Réflexe injonction : tout ordre rapporté devient « que + subjonctif » (jamais d\'infinitif après « decir que »).',
        'Ne supprimez pas l\'accent du mot interrogatif indirect : « no sé qué decir » (et non « que »).',
      ],
    },
  },
];

export default reportedSpeechSections;
