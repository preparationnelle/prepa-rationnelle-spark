import type { ConjugationSection } from '@/data/spanishConjugationData';

export const relativesSections: ConjugationSection[] = [
  {
    id: 'rel-que',
    title: '« Que », le relatif universel',
    description: 'Le pronom relatif de base et ses emplois',
    level: 'Débutant - Intermédiaire',
    content: {
      rules: [
        '« que » est invariable et s\'emploie pour les personnes comme pour les choses, sujet ou COD.',
        'Sans préposition, « que » couvre la grande majorité des relatives déterminatives.',
        'Avec préposition courte (a, de, en, con), pour les choses : preposición + que (le día en que...).',
        'Pour les personnes après préposition, on préfère « a quien / con quien » plutôt que « con que ».',
        'On ne supprime jamais le relatif en espagnol (contrairement à l\'anglais).',
      ],
      examples: [
        { spanish: 'El libro que leo es interesante.', french: 'Le livre que je lis est intéressant.', explanation: '« que » COD, chose.' },
        { spanish: 'La mujer que habla es mi profesora.', french: 'La femme qui parle est ma professeure.', explanation: '« que » sujet, personne.' },
        { spanish: 'El día en que nací llovía.', french: 'Le jour où je suis né, il pleuvait.', explanation: 'Préposition + que pour une chose.' },
      ],
      tips: [
        'Ne calquez pas le français « dont » : voir la fiche « cuyo » plus bas.',
        'Le relatif n\'est jamais omis : « the book I read » = « el libro QUE leo ».',
      ],
    },
  },
  {
    id: 'rel-quien-elcual',
    title: 'Quien / el que / el cual',
    description: 'Les relatifs après préposition et les relatives explicatives',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        '« quien / quienes » : uniquement pour des personnes, surtout après préposition ou en relative explicative.',
        '« el que / la que / los que / las que » : variable en genre et nombre, après préposition ou pour reprendre un antécédent (= celui qui).',
        '« el cual / la cual / los cuales / las cuales » : registre soutenu, après préposition longue (a través del cual, gracias a lo cual).',
        '« lo que / lo cual » : reprend une idée, une proposition entière (neutre).',
        'En relative explicative (entre virgules), « quien » et « el cual » sont privilégiés.',
      ],
      examples: [
        { spanish: 'El profesor con quien hablé es español.', french: 'Le professeur avec qui j\'ai parlé est espagnol.', explanation: 'Personne + préposition → « con quien ».' },
        { spanish: 'La razón por la que vine es clara.', french: 'La raison pour laquelle je suis venu est claire.', explanation: '« por la que » accordé avec « razón ».' },
        { spanish: 'El puente a través del cual pasamos es histórico.', french: 'Le pont à travers lequel nous sommes passés est historique.', explanation: 'Préposition longue → « el cual ».' },
        { spanish: 'No vino, lo cual me sorprendió.', french: 'Il n\'est pas venu, ce qui m\'a surpris.', explanation: '« lo cual » reprend toute la proposition.' },
      ],
      tips: [
        'Règle pratique : préposition + personne → « quien » ; préposition longue ou explicative soutenue → « el cual ».',
        '« lo que » = ce qui/ce que (Lo que dices es falso) ; ne pas confondre avec « el que ».',
      ],
    },
  },
  {
    id: 'rel-cuyo',
    title: '« Cuyo » : le relatif de possession',
    description: 'Traduire « dont » quand il exprime la possession',
    level: 'Avancé',
    content: {
      rules: [
        '« cuyo / cuya / cuyos / cuyas » exprime la possession (= dont le/la/les) et s\'accorde avec la chose possédée, pas avec le possesseur.',
        'Il se place directement devant le nom possédé, sans article.',
        'On ne dit jamais « que su » pour traduire « dont son » : c\'est « cuyo ».',
        'Quand « dont » n\'exprime pas la possession (parler de, avoir besoin de), on utilise « del que / de la que / de quien ».',
      ],
      examples: [
        { spanish: 'El escritor cuya novela leí ganó el premio.', french: 'L\'écrivain dont j\'ai lu le roman a gagné le prix.', explanation: '« cuya » s\'accorde avec « novela » (chose possédée).' },
        { spanish: 'Una ciudad cuyos monumentos son famosos.', french: 'Une ville dont les monuments sont célèbres.', explanation: '« cuyos » accordé avec « monumentos ».' },
        { spanish: 'El tema del que hablamos es difícil.', french: 'Le sujet dont nous parlons est difficile.', explanation: '« dont » = « de quoi » (non possessif) → « del que ».' },
        { spanish: 'La persona de quien te hablé llegó.', french: 'La personne dont je t\'ai parlé est arrivée.', explanation: 'Personne + « hablar de » → « de quien ».' },
      ],
      tips: [
        'Test du « dont » : si on peut dire « le/la/les ... de X », c\'est « cuyo ». Sinon → del que / de quien.',
        '« cuyo » est très valorisé en thème : son emploi correct est un marqueur de niveau.',
      ],
    },
  },
  {
    id: 'rel-mode',
    title: 'Indicatif ou subjonctif dans la relative',
    description: 'L\'antécédent réel vs l\'antécédent virtuel',
    level: 'Avancé',
    content: {
      rules: [
        'Antécédent identifié / existant → indicatif (Tengo un amigo que habla ruso).',
        'Antécédent indéfini, recherché ou hypothétique → subjonctif (Busco a alguien que hable ruso).',
        'Antécédent nié ou inexistant → subjonctif (No hay nadie que lo sepa).',
        'Avec « el que / quien » à valeur générale (= celui qui), futur incertain → subjonctif (Quien quiera, que venga).',
      ],
      examples: [
        { spanish: 'Conozco a una persona que trabaja allí.', french: 'Je connais une personne qui travaille là-bas.', explanation: 'Antécédent réel → indicatif.' },
        { spanish: 'Necesito una persona que trabaje allí.', french: 'J\'ai besoin d\'une personne qui travaille là-bas.', explanation: 'Antécédent recherché → subjonctif.' },
        { spanish: 'No hay ningún libro que explique esto.', french: 'Il n\'y a aucun livre qui explique cela.', explanation: 'Antécédent inexistant → subjonctif.' },
        { spanish: 'El que llegue primero ganará.', french: 'Celui qui arrivera le premier gagnera.', explanation: 'Valeur générale future → subjonctif.' },
      ],
      tips: [
        'Question réflexe : l\'antécédent existe-t-il concrètement pour le locuteur ? Oui → indicatif ; non/incertain → subjonctif.',
        'Renvoi utile : voir la fiche « Subjonctif » pour le test mode complet.',
      ],
    },
  },
];

export default relativesSections;
