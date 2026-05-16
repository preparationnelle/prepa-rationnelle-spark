import type { ConjugationSection } from '@/data/spanishConjugationData';

export const porParaSections: ConjugationSection[] = [
  {
    id: 'pp-para',
    title: 'Les valeurs de PARA',
    description: 'But, destination, échéance, opinion',
    level: 'Intermédiaire',
    content: {
      rules: [
        'But / finalité : « pour, afin de » (Estudio para aprobar).',
        'Destinataire : « pour quelqu\'un » (Este regalo es para ti).',
        'Direction / destination : « vers, à destination de » (Salgo para Madrid).',
        'Échéance / date limite : « pour, d\'ici » (Lo necesito para el lunes).',
        'Opinion / point de vue : « pour, selon » (Para mí, es un error).',
        'Comparaison inattendue : « pour (un...) » (Para ser extranjero, habla muy bien).',
      ],
      examples: [
        { spanish: 'Trabajo para vivir, no vivo para trabajar.', french: 'Je travaille pour vivre, je ne vis pas pour travailler.', explanation: 'But / finalité (para + infinitif).' },
        { spanish: 'Este informe es para el director.', french: 'Ce rapport est pour le directeur.', explanation: 'Destinataire.' },
        { spanish: 'Para mí, la cultura es esencial.', french: 'Pour moi, la culture est essentielle.', explanation: 'Point de vue / opinion.' },
        { spanish: 'Para ser principiante, lo hace muy bien.', french: 'Pour un débutant, il s\'en sort très bien.', explanation: 'Comparaison / concession inattendue.' },
      ],
      tips: [
        'Moyen mnémotechnique : PARA = PuRpose, Adressee, Recipient, deAdline (but, destinataire, échéance).',
        'Devant un infinitif, « para » exprime presque toujours le but : para + infinitif = pour + infinitif.',
      ],
    },
  },
  {
    id: 'pp-por',
    title: 'Les valeurs de POR',
    description: 'Cause, moyen, échange, durée, lieu de passage',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Cause / motif : « à cause de, par, pour » (Lo hizo por amor).',
        'Moyen / manière : « par » (Te llamo por teléfono ; lo envié por correo).',
        'Échange / prix : « pour, contre » (Lo compré por 20 euros ; gracias por todo).',
        'Durée / période : « pendant, durant » (Estudié por dos horas).',
        'Lieu de passage : « par, à travers » (Paseamos por el parque).',
        'Agent du passif : « par » (La novela fue escrita por Cervantes).',
        'Le « por » de remplacement : « à la place de » (Firma por mí).',
      ],
      examples: [
        { spanish: 'Cerraron la tienda por la crisis.', french: 'Ils ont fermé le magasin à cause de la crise.', explanation: 'Cause / motif.' },
        { spanish: 'Viajamos por Andalucía.', french: 'Nous avons voyagé à travers l\'Andalousie.', explanation: 'Lieu de passage.' },
        { spanish: 'Gracias por tu ayuda.', french: 'Merci pour ton aide.', explanation: 'Échange / motif de gratitude (toujours « por »).' },
        { spanish: 'Fue descubierto por los científicos.', french: 'Il a été découvert par les scientifiques.', explanation: 'Agent du passif.' },
      ],
      tips: [
        'Moyen mnémotechnique : POR = cause, moyen, échange, durée, passage (« par » au sens large).',
        'Cause = por ; but = para. « Lucho por la libertad » (motif) vs « lucho para ganar » (objectif).',
      ],
    },
  },
  {
    id: 'pp-contrastes',
    title: 'Paires contrastives décisives',
    description: 'Les oppositions qui changent le sens de la phrase',
    level: 'Avancé',
    content: {
      rules: [
        'Cause vs but : por (pourquoi/à cause de) ≠ para (pour quoi faire / objectif).',
        'Lieu de passage vs destination : por (à travers) ≠ para (vers, direction finale).',
        'Durée vs échéance : por (pendant) ≠ para (pour telle date).',
        'Mouvement « aller chercher » : ir a por algo (Espagne) / ir por algo (Amérique).',
        'Estar por + infinitif = être sur le point de / pencher pour ; estar para + infinitif = être prêt à / sur le point de (selon contexte).',
      ],
      examples: [
        { spanish: 'Lo hice por ti. / Lo hice para ti.', french: 'Je l\'ai fait à cause de toi (motif). / Je l\'ai fait pour toi (destinataire).', explanation: 'Cause vs destinataire : sens radicalement différent.' },
        { spanish: 'Voy por el parque. / Voy para el parque.', french: 'Je passe par le parc. / Je me dirige vers le parc.', explanation: 'Passage vs destination.' },
        { spanish: 'Estudié por dos meses. / Lo terminaré para junio.', french: 'J\'ai étudié pendant deux mois. / Je le finirai pour juin.', explanation: 'Durée vs échéance.' },
        { spanish: 'Estoy por salir. / No estoy para bromas.', french: 'Je suis sur le point de sortir. / Je ne suis pas d\'humeur à plaisanter.', explanation: 'estar por vs estar para.' },
      ],
      tips: [
        'Test rapide : remplacez par « en échange de / à cause de / à travers / pendant » → c\'est POR ; par « dans le but de / à destination de / pour telle date » → c\'est PARA.',
        'Expressions figées à mémoriser bloc : por cierto, por supuesto, por lo tanto, por fin, para siempre, para colmo.',
      ],
    },
  },
  {
    id: 'pp-locutions',
    title: 'Locutions figées avec por / para',
    description: 'Expressions à connaître par cœur pour l\'expression écrite',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Avec POR : por lo tanto (donc), por lo visto (apparemment), por si acaso (au cas où), por más que (avoir beau), por cierto (au fait), por supuesto (bien sûr), por fin (enfin).',
        'Avec PARA : para colmo (pour couronner le tout), para que (pour que + subj.), para siempre (à jamais), no estar para (ne pas être d\'humeur à).',
        'Connecteurs argumentatifs : por (un/otro) lado, por una/otra parte (d\'une/d\'autre part).',
        'Ces locutions sont des « briques » d\'expression valorisées en dissertation et synthèse.',
      ],
      examples: [
        { spanish: 'No estudió; por lo tanto, suspendió.', french: 'Il n\'a pas étudié ; donc il a échoué.', explanation: 'Connecteur de conséquence.' },
        { spanish: 'Por más que lo intente, no lo consigue.', french: 'Il a beau essayer, il n\'y arrive pas.', explanation: '« por más que » + subjonctif (concession).' },
        { spanish: 'Para colmo, empezó a llover.', french: 'Pour couronner le tout, il s\'est mis à pleuvoir.', explanation: 'Locution expressive.' },
        { spanish: 'Por un lado... por otro lado...', french: 'D\'une part... d\'autre part...', explanation: 'Structuration argumentative.' },
      ],
      tips: [
        'Apprenez ces locutions en bloc : elles font gagner des points en expression écrite et orale.',
        'Renvoi : voir la fiche « Connecteurs logiques » pour les articuler dans une argumentation.',
      ],
    },
  },
];

export default porParaSections;
