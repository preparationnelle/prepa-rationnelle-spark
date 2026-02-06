import {
  Grid, TrendingUp, Dices, Move, Scale, AreaChart,
  Variable, BarChart3, UnfoldVertical, Shapes, FunctionSquare,
  LocateFixed, Spline, Target, Network
} from 'lucide-react';
import { MathsAppliqueesData } from '@/types/maths-appliquees';

export const mathsAppliquees2eAnneeData: MathsAppliqueesData = {
  semestre1: {
    title: 'Semestre 3 - Approfondissements',
    description: 'Approfondissement des concepts mathématiques fondamentaux pour la 2ème année ECG',
    chapters: [
      {
        id: 1,
        slug: 'espaces-vectoriels',
        title: 'Espaces vectoriels',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'V',
        description: 'Structures vectorielles et propriétés fondamentales'
      },
      {
        id: 2,
        slug: 'complements-suites-series',
        title: 'Compléments sur les suites et les séries',
        icon: TrendingUp,
        color: 'bg-blue-600',
        symbol: '∑',
        description: 'Approfondissement des suites et séries numériques'
      },
      {
        id: 3,
        slug: 'couples-variables-aleatoires-discretes',
        title: 'Couples de variables aléatoires discrètes',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: '(X,Y)',
        description: 'Étude des couples de variables aléatoires'
      },
      {
        id: 4,
        slug: 'applications-lineaires',
        title: 'Applications linéaires',
        icon: Move,
        color: 'bg-blue-600',
        symbol: 'L',
        description: 'Théorie des applications linéaires entre espaces vectoriels'
      },
      {
        id: 5,
        slug: 'comparaison-fonctions',
        title: 'Comparaison de fonctions',
        icon: Scale,
        color: 'bg-blue-600',
        symbol: '≈',
        description: 'Négligeabilité, équivalence et comparaison asymptotique'
      },
      {
        id: 6,
        slug: 'integrales-impropres',
        title: 'Intégrales impropres',
        icon: AreaChart,
        color: 'bg-blue-600',
        symbol: '∫∞',
        description: 'Intégrales sur des intervalles non bornés'
      },
      {
        id: 7,
        slug: 'representation-matricielle-applications-lineaires',
        title: 'Représentation matricielle des applications linéaires',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'M',
        description: 'Matrices et représentation des applications linéaires'
      },
      {
        id: 8,
        slug: 'variables-aleatoires-densite',
        title: 'Variables aléatoires à densité',
        icon: Variable,
        color: 'bg-blue-600',
        symbol: 'f',
        description: 'Variables aléatoires continues et lois à densité'
      },
      {
        id: 9,
        slug: 'statistiques-descriptives-univariees-bivariees',
        title: 'Statistiques descriptives univariées et bivariées',
        icon: BarChart3,
        color: 'bg-blue-600',
        symbol: 'μ',
        description: 'Analyse statistique descriptive à une et deux variables'
      }
    ]
  },
  semestre2: {
    title: 'Semestre 4 - Concepts Avancés',
    description: 'Maîtrise des concepts mathématiques avancés pour les concours ECG',
    chapters: [
      {
        id: 10,
        slug: 'developpements-limites',
        title: 'Développements limités',
        icon: UnfoldVertical,
        color: 'bg-blue-600',
        symbol: 'T',
        description: 'Développements limités et formules de Taylor'
      },
      {
        id: 11,
        slug: 'diagonalisation-matrices',
        title: 'Diagonalisation des matrices',
        icon: Shapes,
        color: 'bg-blue-600',
        symbol: 'diag',
        description: 'Diagonalisation et réduction des matrices'
      },
      {
        id: 12,
        slug: 'lois-densite-usuelles',
        title: 'Lois à densité usuelles',
        icon: Variable,
        color: 'bg-blue-600',
        symbol: 'N',
        description: 'Lois continues usuelles : normale, exponentielle, uniforme'
      },
      {
        id: 13,
        slug: 'fonctions-deux-variables',
        title: 'Fonctions de deux variables',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: '∇',
        description: 'Calcul différentiel et fonctions de plusieurs variables'
      },
      {
        id: 14,
        slug: 'convergence-suites-variables-aleatoires',
        title: 'Convergence de suites de variables aléatoires',
        icon: LocateFixed,
        color: 'bg-blue-600',
        symbol: '⇒',
        description: 'Convergences en probabilité et en loi'
      },
      {
        id: 15,
        slug: 'equations-differentielles-systemes',
        title: 'Équations différentielles et systèmes différentiels',
        icon: Spline,
        color: 'bg-blue-600',
        symbol: 'dx',
        description: 'Équations et systèmes différentiels linéaires'
      },
      {
        id: 16,
        slug: 'estimateurs-intervalles-confiance',
        title: 'Estimateurs et intervalles de confiance',
        icon: Target,
        color: 'bg-blue-600',
        symbol: 'θ̂',
        description: 'Estimation statistique et intervalles de confiance'
      },
      {
        id: 17,
        slug: 'chaines-de-markov',
        title: 'Chaînes de Markov',
        icon: Network,
        color: 'bg-blue-600',
        symbol: 'π',
        description: 'Processus stochastiques et chaînes de Markov'
      }
    ]
  }
};

// Fonctions utilitaires spécifiques à Maths Appliquées 2ème année
export const getChapterById2eAnnee = (id: number) => {
  const allChapters = [
    ...mathsAppliquees2eAnneeData.semestre1.chapters,
    ...mathsAppliquees2eAnneeData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.id === id);
};

export const getChapterBySlug2eAnnee = (slug: string) => {
  const allChapters = [
    ...mathsAppliquees2eAnneeData.semestre1.chapters,
    ...mathsAppliquees2eAnneeData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.slug === slug);
};

export const getTotalChaptersCount2eAnnee = () => {
  return mathsAppliquees2eAnneeData.semestre1.chapters.length +
    mathsAppliquees2eAnneeData.semestre2.chapters.length;
};
