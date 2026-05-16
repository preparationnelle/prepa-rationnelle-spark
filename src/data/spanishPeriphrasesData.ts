import type { ConjugationSection } from '@/data/spanishConjugationData';

export const periphrasesSections: ConjugationSection[] = [
  {
    id: 'per-definition',
    title: 'Qu\'est-ce qu\'une périphrase verbale ?',
    description: 'Verbe auxiliaire + forme non personnelle (infinitif, gérondif, participe)',
    level: 'Intermédiaire',
    content: {
      rules: [
        'Une périphrase = verbe semi-auxiliaire conjugué + un verbe à l\'infinitif, au gérondif ou au participe.',
        'Le semi-auxiliaire perd (en partie) son sens propre et apporte une nuance d\'aspect ou de modalité.',
        'Trois familles : périphrases d\'infinitif (modalité, phase), de gérondif (aspect duratif), de participe (résultat).',
        'Elles enrichissent considérablement l\'expression : très valorisées aux concours.',
        'Le pronom complément se place avant le semi-auxiliaire OU soudé à la forme non personnelle (lo voy a hacer / voy a hacerlo).',
      ],
      examples: [
        { spanish: 'Voy a estudiar. / Estoy estudiando. / Llevo estudiado el tema.', french: 'Je vais étudier. / Je suis en train d\'étudier. / J\'ai étudié le sujet (résultat).', explanation: 'Les trois familles : infinitif, gérondif, participe.' },
        { spanish: 'Lo tengo que hacer = Tengo que hacerlo.', french: 'Je dois le faire.', explanation: 'Double position possible du pronom.' },
      ],
      tips: [
        'Réflexe d\'expression : remplacer un verbe plat par une périphrase précise enrichit immédiatement la copie.',
        'Ne jamais conjuguer le second verbe : il reste à l\'infinitif, au gérondif ou au participe.',
      ],
    },
  },
  {
    id: 'per-infinitif',
    title: 'Périphrases d\'infinitif',
    description: 'Futur proche, obligation, phase, répétition',
    level: 'Intermédiaire',
    content: {
      rules: [
        'ir a + infinitif : futur proche / intention (voy a salir).',
        'tener que + infinitif : obligation personnelle ; hay que + infinitif : obligation impersonnelle ; deber + infinitif : devoir moral.',
        'deber de + infinitif : probabilité / conjecture (Debe de estar enfermo = il doit être malade).',
        'acabar de + infinitif : passé récent (acabo de llegar = je viens d\'arriver).',
        'volver a + infinitif : répétition (= de nouveau) ; ponerse a + infinitif : début soudain ; estar a punto de + infinitif : être sur le point de.',
      ],
      examples: [
        { spanish: 'Acabo de terminar el ejercicio.', french: 'Je viens de finir l\'exercice.', explanation: 'Passé très récent : acabar de + infinitif.' },
        { spanish: 'Hay que reaccionar ahora.', french: 'Il faut réagir maintenant.', explanation: 'Obligation impersonnelle.' },
        { spanish: 'Volvió a llamar dos veces.', french: 'Il a rappelé deux fois (à nouveau).', explanation: 'volver a = répétition.' },
        { spanish: 'Debe de tener unos cincuenta años.', french: 'Il doit avoir une cinquantaine d\'années.', explanation: 'deber de = conjecture (≠ deber = obligation).' },
      ],
      tips: [
        'Distinction d\'or des concours : deber + inf. (obligation) vs deber de + inf. (probabilité).',
        '« volver a + infinitif » est LA façon idiomatique de dire « refaire / re- » : volver a leer = relire.',
      ],
    },
  },
  {
    id: 'per-gerondif',
    title: 'Périphrases de gérondif',
    description: 'Aspect duratif, progressif, continu',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'estar + gérondif : action en cours (estoy leyendo = je suis en train de lire).',
        'seguir / continuar + gérondif : continuité (sigue lloviendo = il continue de pleuvoir).',
        'llevar + (durée) + gérondif : durée d\'une action qui dure encore (llevo dos años estudiando = ça fait deux ans que j\'étudie).',
        'ir + gérondif : progression graduelle (la situación va mejorando = la situation s\'améliore peu à peu).',
        'andar + gérondif : action répétée/dispersée, souvent péjorative (anda diciendo tonterías).',
      ],
      examples: [
        { spanish: 'Llevo tres horas esperando.', french: 'Ça fait trois heures que j\'attends.', explanation: 'llevar + durée + gérondif : traduction idiomatique de « depuis / ça fait... que ».' },
        { spanish: 'Sigue trabajando aquí.', french: 'Il travaille toujours ici.', explanation: 'seguir + gérondif = continuité.' },
        { spanish: 'El país va recuperándose poco a poco.', french: 'Le pays se rétablit peu à peu.', explanation: 'ir + gérondif = progression graduelle.' },
        { spanish: 'No estaba escuchando.', french: 'Je n\'étais pas en train d\'écouter.', explanation: 'estar + gérondif au passé (imparfait).' },
      ],
      tips: [
        '« llevar + gérondif » remplace avantageusement « desde hace » : llevo viviendo aquí 5 años.',
        'Le gérondif ne s\'emploie jamais comme un nom (≠ anglais) : « lire est utile » = « leer es útil », pas « leyendo ».',
      ],
    },
  },
  {
    id: 'per-participe',
    title: 'Périphrases de participe',
    description: 'Résultat, état acquis, accumulation',
    level: 'Avancé',
    content: {
      rules: [
        'llevar + participe : bilan / accumulation, le participe s\'accorde avec le COD (llevo leídas 200 páginas).',
        'tener + participe : résultat acquis et accumulé, participe accordé (tengo escritas tres cartas).',
        'dejar + participe : action achevée avec conséquence (dejó dicho que volvería).',
        'quedar + participe : état résultant durable (quedó decidido que...).',
        'andar / ir + participe : état diffus ou progressif (va vestido de negro).',
      ],
      examples: [
        { spanish: 'Llevo escritas diez páginas.', french: 'J\'ai écrit dix pages (jusqu\'ici).', explanation: 'Accumulation ; « escritas » s\'accorde avec « páginas ».' },
        { spanish: 'Tengo preparada la cena.', french: 'J\'ai le dîner prêt (préparé).', explanation: 'Résultat acquis ; accord avec « cena ».' },
        { spanish: 'Quedó claro que no vendría.', french: 'Il est devenu clair qu\'il ne viendrait pas.', explanation: 'quedar + participe = état résultant.' },
        { spanish: 'Dejó escrito su testamento.', french: 'Il a laissé son testament écrit.', explanation: 'dejar + participe = achèvement avec trace.' },
      ],
      tips: [
        'Avec « llevar/tener + participe », pensez à ACCORDER le participe avec le complément d\'objet.',
        'Ces périphrases sont rares et soutenues : bien placées, elles signalent un excellent niveau en copie.',
      ],
    },
  },
];

export default periphrasesSections;
