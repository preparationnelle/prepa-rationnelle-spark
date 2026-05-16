import type { ConjugationSection } from '@/data/spanishConjugationData';

export const conditionalsSections: ConjugationSection[] = [
  {
    id: 'cond-formation',
    title: 'Formation du conditionnel',
    description: 'Présent et passé du conditionnel, et leurs valeurs',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Conditionnel présent : infinitif entier + terminaisons -ía, -ías, -ía, -íamos, -íais, -ían (hablar → hablaría).',
        'Les 12 irréguliers du futur le sont aussi au conditionnel (même radical) : tendr-, podr-, har-, dir-, saldr-, vendr-, pondr-, querr-, sabr-, cabr-, habr-, valdr-.',
        'Conditionnel passé : habría + participe passé (habría hablado).',
        'Valeurs : hypothèse, politesse (¿Podría ayudarme?), futur dans le passé (Dijo que vendría), conjecture sur le passé (Serían las diez).',
      ],
      examples: [
        { spanish: 'hablaría, comería, viviría', french: 'je parlerais, je mangerais, je vivrais', explanation: 'Terminaisons identiques pour les trois groupes.' },
        { spanish: 'tener → tendría ; hacer → haría ; decir → diría', french: 'j\'aurais ; je ferais ; je dirais', explanation: 'Radicaux irréguliers communs au futur.' },
        { spanish: '¿Podrías pasarme la sal?', french: 'Pourrais-tu me passer le sel ?', explanation: 'Conditionnel de politesse.' },
        { spanish: 'Serían las once cuando llegó.', french: 'Il devait être onze heures quand il est arrivé.', explanation: 'Conditionnel de conjecture sur le passé.' },
      ],
      irregularities: [
        { verb: 'haber', pattern: 'habr- (sert au conditionnel passé)', examples: ['habría', 'habríamos', 'habrían'] },
        { verb: 'querer', pattern: 'querr-', examples: ['querría', 'querrías'] },
        { verb: 'poner / salir / venir / tener', pattern: 'd intercalé', examples: ['pondría', 'saldría', 'vendría', 'tendría'] },
      ],
      tips: [
        'Le conditionnel n\'apparaît JAMAIS directement après « si ». C\'est la frontière à ne jamais franchir.',
        'Ne confondez pas « querría » (conditionnel, je voudrais) et « quería » (imparfait, je voulais) : un seul r.',
      ],
    },
  },
  {
    id: 'cond-type1',
    title: 'Hypothèse réelle (type 1)',
    description: 'Si + présent de l\'indicatif',
    level: 'Débutant - Intermédiaire',
    content: {
      rules: [
        'Condition jugée possible / probable dans le présent ou le futur.',
        'Structure : Si + présent de l\'indicatif → présent, futur ou impératif dans la principale.',
        'Jamais de futur ni de subjonctif présent dans la proposition introduite par « si ».',
        'Synonymes de « si » à valeur réelle : en caso de que (+ subj.), siempre que (+ subj.).',
      ],
      examples: [
        { spanish: 'Si llueve, no salgo.', french: 'S\'il pleut, je ne sors pas.', explanation: 'Si + présent → présent.' },
        { spanish: 'Si tienes tiempo, ven a vernos.', french: 'Si tu as le temps, viens nous voir.', explanation: 'Si + présent → impératif.' },
        { spanish: 'Si apruebas, te invitaré.', french: 'Si tu réussis, je t\'inviterai.', explanation: 'Si + présent → futur (jamais « si aprobarás »).' },
      ],
      tips: [
        'Faute n°1 du francophone : « si + futur » (si tendrás). En espagnol, après « si » réel → présent.',
        'Pour une condition future incertaine, on utilise « cuando + subjonctif » ou « en caso de que + subjonctif », pas « si + subjonctif présent ».',
      ],
    },
  },
  {
    id: 'cond-type2',
    title: 'Hypothèse irréelle du présent (type 2)',
    description: 'Si + imparfait du subjonctif → conditionnel',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Condition irréelle ou improbable dans le présent.',
        'Structure rigide : Si + imparfait du subjonctif (-ra / -se) → conditionnel présent.',
        'L\'ordre des propositions est libre : la règle des temps ne change pas.',
        '« Como si » suit la même logique : como si + imparfait du subjonctif.',
      ],
      examples: [
        { spanish: 'Si tuviera dinero, viajaría por el mundo.', french: 'Si j\'avais de l\'argent, je voyagerais dans le monde.', explanation: 'Irréel du présent : si + imparfait subj. → conditionnel.' },
        { spanish: 'Viviría en España si pudiera.', french: 'Je vivrais en Espagne si je pouvais.', explanation: 'Ordre inversé, mêmes temps.' },
        { spanish: 'Se comporta como si fuera el jefe.', french: 'Il se comporte comme s\'il était le patron.', explanation: '« como si » + imparfait du subjonctif.' },
      ],
      tips: [
        'Jamais « si tendría » : la condition ne porte JAMAIS le conditionnel.',
        'Forme en -ra ou -se au choix : « si tuviera » = « si tuviese » (préférez -ra à l\'écrit).',
      ],
    },
  },
  {
    id: 'cond-type3',
    title: 'Hypothèse irréelle du passé (type 3)',
    description: 'Si + plus-que-parfait du subjonctif → conditionnel passé',
    level: 'Avancé',
    content: {
      rules: [
        'Condition non réalisée dans le passé (regret, reproche, hypothèse contrefactuelle).',
        'Structure : Si + hubiera/hubiese + participe → habría + participe (ou hubiera + participe dans la principale, accepté).',
        'Variante mixte fréquente : conséquence présente d\'un fait passé non réalisé → conditionnel présent dans la principale.',
        'Registre soutenu, très valorisé en expression écrite aux concours.',
      ],
      examples: [
        { spanish: 'Si hubiera estudiado, habría aprobado.', french: 'Si j\'avais étudié, j\'aurais réussi.', explanation: 'Type 3 pur : plus-que-parfait subj. → conditionnel passé.' },
        { spanish: 'Si hubieras avisado, te habríamos esperado.', french: 'Si tu avais prévenu, nous t\'aurions attendu.', explanation: 'Reproche / hypothèse passée.' },
        { spanish: 'Si me lo hubieras dicho, ahora no estaría preocupado.', french: 'Si tu me l\'avais dit, je ne serais pas inquiet maintenant.', explanation: 'Mixte : cause passée → conséquence présente (conditionnel présent).' },
        { spanish: 'Si hubiera sabido, no hubiera venido.', french: 'Si j\'avais su, je ne serais pas venu.', explanation: 'Variante avec « hubiera » dans la principale (très courante).' },
      ],
      tips: [
        'Pour les regrets, c\'est LE temps à maîtriser : « si hubiera... habría... » impressionne en copie.',
        'Mémorisez la formule lexicalisée : « De haber + participe » = « si j\'avais... » (De haberlo sabido = si je l\'avais su).',
      ],
    },
  },
  {
    id: 'cond-connecteurs',
    title: 'Autres connecteurs conditionnels',
    description: 'Au-delà de « si » : exprimer la condition autrement',
    level: 'Avancé',
    content: {
      rules: [
        'Condition positive : siempre que, con tal de que, a condición de que + SUBJONCTIF.',
        'Condition négative / exception : a no ser que, a menos que, salvo que + SUBJONCTIF.',
        'Sans que la chose arrive : sin que + SUBJONCTIF.',
        'Condition concrète : en caso de que + subjonctif ; de + infinitif (registre soutenu).',
        'Concession à valeur conditionnelle : por (más/mucho) que + subjonctif.',
      ],
      examples: [
        { spanish: 'Te ayudo con tal de que me escuches.', french: 'Je t\'aide à condition que tu m\'écoutes.', explanation: '« con tal de que » + subjonctif.' },
        { spanish: 'No iré a menos que me lo pidas.', french: 'Je n\'irai pas à moins que tu me le demandes.', explanation: '« a menos que » + subjonctif.' },
        { spanish: 'De saberlo, te lo habría dicho.', french: 'Si je l\'avais su, je te l\'aurais dit.', explanation: '« de + infinitif » = condition de registre soutenu.' },
        { spanish: 'Por mucho que insistas, no cambiaré.', french: 'Tu auras beau insister, je ne changerai pas.', explanation: '« por mucho que » + subjonctif.' },
      ],
      tips: [
        'Tous ces connecteurs (sauf « si » et « por si ») imposent le subjonctif : c\'est un automatisme.',
        '« por si (acaso) » + indicatif = au cas où (Llévate el paraguas por si llueve).',
      ],
    },
  },
];

export default conditionalsSections;
