import type { ConjugationSection } from '@/data/spanishConjugationData';

export const concordanceSections: ConjugationSection[] = [
  {
    id: 'conc-principe',
    title: 'Le principe de la concordance des temps',
    description: 'Comment le temps de la principale commande le temps de la subordonnée',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'La « correlación de tiempos » règle l\'accord du temps de la subordonnée (souvent au subjonctif) sur celui du verbe principal.',
        'Deux grands axes : axe du présent (principal au présent/futur/passé composé) et axe du passé (principal au passé simple/imparfait/conditionnel).',
        'Axe du présent → subjonctif présent ou passé du subjonctif dans la subordonnée.',
        'Axe du passé → imparfait du subjonctif ou plus-que-parfait du subjonctif dans la subordonnée.',
        'La logique est universelle : elle vaut pour les complétives (que), les relatives au subjonctif, les circonstancielles.',
      ],
      examples: [
        { spanish: 'Quiero que vengas.', french: 'Je veux que tu viennes.', explanation: 'Principal présent → subjonctif présent.' },
        { spanish: 'Quería que vinieras.', french: 'Je voulais que tu viennes.', explanation: 'Principal passé → imparfait du subjonctif.' },
        { spanish: 'Me alegro de que hayas venido.', french: 'Je suis content que tu sois venu.', explanation: 'Présent + antériorité → passé du subjonctif (haya + participe).' },
        { spanish: 'Me alegré de que hubieras venido.', french: 'Je fus content que tu sois venu.', explanation: 'Passé + antériorité → plus-que-parfait du subjonctif.' },
      ],
      tips: [
        'Mémorisez deux tableaux : « axe présent » et « axe passé ». 90 % de la concordance s\'y résume.',
        'C\'est la faute la plus pénalisée en thème : un « quería que vengas » casse immédiatement la note.',
        'Le déclencheur n\'est pas le sens mais le TEMPS du verbe principal : repérez-le en premier.',
      ],
    },
  },
  {
    id: 'conc-axe-present',
    title: 'L\'axe du présent',
    description: 'Principal au présent, futur ou passé composé',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Principal au présent / futur / passé composé / impératif → subordonnée au subjonctif présent (simultané ou postérieur).',
        'Si l\'action de la subordonnée est antérieure → passé du subjonctif (haya + participe).',
        'Vaut aussi quand la principale est au futur : Te llamaré cuando llegue.',
        'Le passé composé (he dicho que...) reste sur l\'axe du présent en espagnol.',
      ],
      examples: [
        { spanish: 'Espero que apruebes.', french: 'J\'espère que tu réussiras.', explanation: 'Présent → subjonctif présent (postériorité).' },
        { spanish: 'Te ayudaré para que termines.', french: 'Je t\'aiderai pour que tu finisses.', explanation: 'Futur → subjonctif présent.' },
        { spanish: 'No creo que haya llegado.', french: 'Je ne crois pas qu\'il soit arrivé.', explanation: 'Présent + antériorité → passé du subjonctif.' },
        { spanish: 'Te he pedido que lo hagas.', french: 'Je t\'ai demandé de le faire.', explanation: 'Passé composé = axe du présent → subjonctif présent.' },
      ],
      tips: [
        'Réflexe : présent/futur/passé composé en tête → subjonctif présent (sauf antériorité explicite).',
        'Ne confondez pas le passé composé espagnol (axe présent) avec le passé simple (axe passé).',
      ],
    },
  },
  {
    id: 'conc-axe-passe',
    title: 'L\'axe du passé',
    description: 'Principal au passé simple, imparfait ou conditionnel',
    level: 'Avancé',
    content: {
      rules: [
        'Principal au passé simple / imparfait / conditionnel → subordonnée à l\'imparfait du subjonctif.',
        'Si l\'action de la subordonnée est antérieure à celle du passé → plus-que-parfait du subjonctif (hubiera + participe).',
        'Le conditionnel (présent ou passé) déclenche aussi l\'axe du passé : Me gustaría que vinieras.',
        'Cette concordance est obligatoire : aucune tolérance avec un subjonctif présent après un principal au passé.',
      ],
      examples: [
        { spanish: 'Me pidió que lo ayudara.', french: 'Il m\'a demandé de l\'aider.', explanation: 'Passé simple → imparfait du subjonctif.' },
        { spanish: 'No creía que fuera verdad.', french: 'Je ne croyais pas que ce soit vrai.', explanation: 'Imparfait → imparfait du subjonctif.' },
        { spanish: 'Me gustaría que vinieras.', french: 'J\'aimerais que tu viennes.', explanation: 'Conditionnel → imparfait du subjonctif.' },
        { spanish: 'Lamenté que no hubieras venido.', french: 'J\'ai regretté que tu ne sois pas venu.', explanation: 'Passé + antériorité → plus-que-parfait du subjonctif.' },
      ],
      tips: [
        'Conditionnel = axe du passé : « me gustaría que vengas » est une faute (→ vinieras).',
        'Pour l\'antériorité dans le passé, le réflexe est « hubiera/hubiese + participe ».',
      ],
    },
  },
  {
    id: 'conc-style-indirect',
    title: 'Concordance au style indirect',
    description: 'La transposition des temps quand le verbe introducteur est au passé',
    level: 'Avancé',
    content: {
      rules: [
        'Verbe introducteur au présent : les temps sont conservés (Dice que viene → Dice que viene).',
        'Verbe introducteur au passé : présent → imparfait ; futur → conditionnel ; passé composé/simple → plus-que-parfait.',
        'Impératif rapporté → que + imparfait du subjonctif (Dijo: «ven» → Dijo que viniera).',
        'Les marqueurs déictiques changent aussi : hoy → aquel día, mañana → al día siguiente, aquí → allí.',
      ],
      examples: [
        { spanish: '«Estoy cansado» → Dijo que estaba cansado.', french: 'Il a dit qu\'il était fatigué.', explanation: 'Présent → imparfait.' },
        { spanish: '«Vendré mañana» → Dijo que vendría al día siguiente.', french: 'Il a dit qu\'il viendrait le lendemain.', explanation: 'Futur → conditionnel + déictique transposé.' },
        { spanish: '«He terminado» → Dijo que había terminado.', french: 'Il a dit qu\'il avait fini.', explanation: 'Passé composé → plus-que-parfait.' },
        { spanish: '«¡Sal!» → Me ordenó que saliera.', french: 'Il m\'a ordonné de sortir.', explanation: 'Impératif → imparfait du subjonctif.' },
      ],
      tips: [
        'Le couplage clé du thème : futuro → condicional (vendrá → vendría) ; à automatiser.',
        'Voir aussi la fiche « Style indirect » pour le détail des transformations de personnes et de déictiques.',
      ],
    },
  },
  {
    id: 'conc-hypothese',
    title: 'Concordance dans le système hypothétique',
    description: 'Les trois types de « si » et leur accord rigide',
    level: 'Avancé',
    content: {
      rules: [
        'Hypothèse réelle / probable : Si + présent de l\'indicatif → présent ou futur (Si llueve, no salgo / saldré).',
        'Hypothèse irréelle du présent : Si + imparfait du subjonctif → conditionnel présent (Si tuviera dinero, viajaría).',
        'Hypothèse irréelle du passé : Si + plus-que-parfait du subjonctif → conditionnel passé (Si hubiera sabido, habría venido).',
        'Interdiction absolue : jamais de présent du subjonctif ni de conditionnel directement après « si ».',
      ],
      examples: [
        { spanish: 'Si estudias, aprobarás.', french: 'Si tu étudies, tu réussiras.', explanation: 'Type 1 : si + présent → futur.' },
        { spanish: 'Si estudiaras, aprobarías.', french: 'Si tu étudiais, tu réussirais.', explanation: 'Type 2 : si + imparfait subj. → conditionnel.' },
        { spanish: 'Si hubieras estudiado, habrías aprobado.', french: 'Si tu avais étudié, tu aurais réussi.', explanation: 'Type 3 : si + plus-que-parfait subj. → conditionnel passé.' },
        { spanish: 'Mixte : Si hubieras estudiado, ahora estarías tranquilo.', french: 'Si tu avais étudié, tu serais tranquille maintenant.', explanation: 'Type 3 + conséquence présente (conditionnel présent).' },
      ],
      tips: [
        'La faute classique du francophone : « si tendría » / « si tuviera... tuviera ». Jamais de conditionnel après si.',
        'Détail complet dans la fiche « Conditionnelles & hypothèse » : ici c\'est l\'accord des temps qui prime.',
      ],
    },
  },
];

export default concordanceSections;
