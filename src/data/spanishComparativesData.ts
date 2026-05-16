import type { ConjugationSection } from '@/data/spanishConjugationData';

export const comparativesSections: ConjugationSection[] = [
  {
    id: 'comp-base',
    title: 'Le comparatif : supériorité, infériorité, égalité',
    description: 'Les trois structures fondamentales',
    level: 'Débutant - Intermédiaire',
    content: {
      rules: [
        'Supériorité : más + adjectif/adverbe/nom + que (más rápido que).',
        'Infériorité : menos + adjectif/adverbe/nom + que (menos caro que).',
        'Égalité avec adjectif/adverbe : tan + adjectif/adverbe + como (tan alto como).',
        'Égalité avec nom : tanto/tanta/tantos/tantas + nom + como (accord en genre et nombre).',
        'Égalité avec verbe : verbe + tanto como (Trabaja tanto como tú).',
      ],
      examples: [
        { spanish: 'Madrid es más grande que Sevilla.', french: 'Madrid est plus grand que Séville.', explanation: 'Supériorité : más... que.' },
        { spanish: 'Es tan inteligente como su hermana.', french: 'Il est aussi intelligent que sa sœur.', explanation: 'Égalité adjectif : tan... como.' },
        { spanish: 'Tengo tantos libros como tú.', french: 'J\'ai autant de livres que toi.', explanation: 'Égalité nom : tantos... como (accord).' },
        { spanish: 'Estudia tanto como antes.', french: 'Il étudie autant qu\'avant.', explanation: 'Égalité avec verbe : tanto como.' },
      ],
      tips: [
        'Ne confondez pas « tan » (devant adjectif/adverbe) et « tanto/-a/-os/-as » (devant un nom, accordé).',
        'Devant un nombre, « plus de / moins de » = más de / menos de (más de cien), pas « más que ».',
      ],
    },
  },
  {
    id: 'comp-irreguliers',
    title: 'Comparatifs et superlatifs irréguliers',
    description: 'mejor, peor, mayor, menor et leurs emplois',
    level: 'Intermédiaire',
    content: {
      rules: [
        'bueno → mejor (meilleur) ; malo → peor (pire) : pas de « más bueno/malo » en règle générale.',
        'grande → mayor (plus grand / plus âgé) ; pequeño → menor (plus petit / plus jeune).',
        '« más grande/pequeño » = taille physique ; « mayor/menor » = âge ou importance abstraite.',
        'Superlatif relatif : el/la/los/las + más/menos + adjectif (+ de) ; avec mejor/peor on ne remet pas « más ».',
        'bien → mejor ; mal → peor (comparatifs d\'adverbes).',
      ],
      examples: [
        { spanish: 'Esta solución es mejor que la otra.', french: 'Cette solution est meilleure que l\'autre.', explanation: 'mejor (jamais « más buena » ici).' },
        { spanish: 'Mi hermano mayor vive en Lima.', french: 'Mon frère aîné vit à Lima.', explanation: 'mayor = plus âgé.' },
        { spanish: 'Es el mejor alumno de la clase.', french: 'C\'est le meilleur élève de la classe.', explanation: 'Superlatif relatif avec irrégulier (« de » = de la classe).' },
        { spanish: 'Canta peor que yo.', french: 'Il chante plus mal que moi.', explanation: 'peor = comparatif de « mal ».' },
      ],
      tips: [
        'Le superlatif relatif se construit avec « de » (le plus... de), jamais « en » : el más alto DE la clase.',
        'Avec mejor/peor/mayor/menor, on n\'ajoute jamais « más » : « el más mejor » est une faute.',
      ],
    },
  },
  {
    id: 'comp-superlatif-absolu',
    title: 'Le superlatif absolu en -ísimo',
    description: 'Exprimer le très haut degré sans comparaison',
    level: 'Intermédiaire - Avancé',
    content: {
      rules: [
        'Adjectif + -ísimo/-ísima/-ísimos/-ísimas (= très, extrêmement) : on enlève la voyelle finale (grande → grandísimo).',
        'Modifications orthographiques : -co → -quísimo (rico → riquísimo), -go → -guísimo (largo → larguísimo), -z → -císimo (feliz → felicísimo).',
        'Quelques formes savantes : bueno → bonísimo/buenísimo, fuerte → fortísimo, antiguo → antiquísimo.',
        'Alternative analytique : muy + adjectif (équivalent plus neutre).',
        'L\'adverbe « muy » ne se combine jamais avec « -ísimo » (pas de « muy grandísimo »).',
      ],
      examples: [
        { spanish: 'La película fue interesantísima.', french: 'Le film a été extrêmement intéressant.', explanation: 'Superlatif absolu en -ísima.' },
        { spanish: 'Este café está riquísimo.', french: 'Ce café est délicieux.', explanation: 'Modification rico → riquísimo.' },
        { spanish: 'Es una decisión importantísima.', french: 'C\'est une décision capitale.', explanation: 'Très haut degré, sans comparaison.' },
        { spanish: 'Llegó tardísimo.', french: 'Il est arrivé très tard.', explanation: 'Le -ísimo s\'applique aussi à certains adverbes.' },
      ],
      tips: [
        'Le -ísimo est très valorisé en expression écrite : il évite l\'accumulation de « muy ».',
        'Attention aux changements orthographiques (co→quísimo, z→císimo) : ce sont des pièges classiques.',
      ],
    },
  },
  {
    id: 'comp-structures',
    title: 'Structures comparatives complexes',
    description: 'cuanto más..., de lo que, cada vez más',
    level: 'Avancé',
    content: {
      rules: [
        'Proportion : cuanto más/menos... (más/menos)... (Cuanto más estudio, más aprendo).',
        'Comparaison avec une proposition : más/menos + adjectif + de lo que + verbe (Es más difícil de lo que parece).',
        'Comparaison avec un nom quantifié : más/menos + nom + del que / de la que / de los que / de las que.',
        'Progression : cada vez más / cada vez menos (= de plus en plus / de moins en moins).',
        'Idem / différent : igual que, lo mismo que, distinto de / a.',
      ],
      examples: [
        { spanish: 'Cuanto más lees, mejor escribes.', french: 'Plus tu lis, mieux tu écris.', explanation: 'Structure de proportion (cuanto más... mejor...).' },
        { spanish: 'Es más caro de lo que pensaba.', french: 'C\'est plus cher que je ne pensais.', explanation: 'Comparaison avec proposition → « de lo que ».' },
        { spanish: 'Hay más problemas de los que crees.', french: 'Il y a plus de problèmes que tu ne crois.', explanation: 'Nom comparé → « de los que » (accord).' },
        { spanish: 'El paro aumenta cada vez más.', french: 'Le chômage augmente de plus en plus.', explanation: 'Progression : cada vez más.' },
      ],
      tips: [
        'Piège majeur : « plus que je ne pense » = « más de lo que pienso » (jamais « más que pienso »).',
        '« cuanto más... más... » est un connecteur d\'argumentation très utile en dissertation.',
      ],
    },
  },
];

export default comparativesSections;
