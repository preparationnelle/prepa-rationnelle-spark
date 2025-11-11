import {
  BrainCircuit, Shapes, Sigma, TrendingUp, FunctionSquare, Spline,
  AreaChart, Cuboid, Grid, Dices, Move, Scale, Infinity as InfinityIcon,
  UnfoldVertical, Variable, LocateFixed, Code, Zap, Network, BarChart3,
  GitBranch, Target, Microscope, Database
} from 'lucide-react';
import { MathsAppliqueesData } from '@/types/maths-appliquees';

export const mathsAppliquees2eAnneeData: MathsAppliqueesData = {
  semestre1: {
    title: 'Semestre 1 - Concepts Avancés Appliqués',
    description: 'Approfondissement des concepts mathématiques avec applications industrielles et recherche',
    chapters: [
      {
        id: 101,
        slug: 'optimisation-lineaire-avancee',
        title: 'Optimisation linéaire avancée',
        icon: Target,
        color: 'bg-blue-600',
        symbol: 'min',
        description: 'Méthodes avancées d\'optimisation et applications industrielles'
      },
      {
        id: 102,
        slug: 'equations-differentielles-partielles',
        title: 'Équations différentielles partielles',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: '∂²',
        description: 'EDP et leurs applications en physique et ingénierie'
      },
      {
        id: 103,
        slug: 'analyse-numerique-avancee',
        title: 'Analyse numérique avancée',
        icon: Zap,
        color: 'bg-blue-600',
        symbol: 'ε',
        description: 'Méthodes numériques pour la résolution d\'équations'
      },
      {
        id: 104,
        slug: 'traitement-signal-images',
        title: 'Traitement du signal et images',
        icon: BarChart3,
        color: 'bg-blue-600',
        symbol: 'ℱ',
        description: 'Analyse de Fourier et traitement numérique'
      },
      {
        id: 105,
        slug: 'modelisation-stochastique',
        title: 'Modélisation stochastique',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: 'S',
        description: 'Processus stochastiques et simulations Monte Carlo'
      },
      {
        id: 106,
        slug: 'algorithmes-optimisation',
        title: 'Algorithmes d\'optimisation',
        icon: Network,
        color: 'bg-blue-600',
        symbol: '∇',
        description: 'Méthodes heuristiques et méta-heuristiques'
      },
      {
        id: 107,
        slug: 'calcul-parallele-distribue',
        title: 'Calcul parallèle et distribué',
        icon: GitBranch,
        color: 'bg-blue-600',
        symbol: '||',
        description: 'Programmation parallèle et calcul haute performance'
      },
      {
        id: 108,
        slug: 'machine-learning-mathematique',
        title: 'Machine Learning : aspects mathématiques',
        icon: BrainCircuit,
        color: 'bg-blue-600',
        symbol: 'ML',
        description: 'Théorie mathématique derrière l\'apprentissage automatique'
      }
    ]
  },
  semestre2: {
    title: 'Semestre 2 - Applications Industrielles Avancées',
    description: 'Applications concrètes et projets industriels utilisant les concepts mathématiques avancés',
    chapters: [
      {
        id: 109,
        slug: 'modelisation-systemes-complexes',
        title: 'Modélisation de systèmes complexes',
        icon: Network,
        color: 'bg-blue-600',
        symbol: '⊗',
        description: 'Systèmes dynamiques complexes et théorie du chaos'
      },
      {
        id: 110,
        slug: 'analyse-donnees-massives',
        title: 'Analyse de données massives',
        icon: Database,
        color: 'bg-blue-600',
        symbol: '∑',
        description: 'Big Data analytics et méthodes statistiques avancées'
      },
      {
        id: 111,
        slug: 'simulation-numerique-industrielle',
        title: 'Simulation numérique industrielle',
        icon: Microscope,
        color: 'bg-blue-600',
        symbol: 'Δt',
        description: 'Méthodes de simulation pour l\'industrie et la recherche'
      },
      {
        id: 112,
        slug: 'controle-optimal-systemes',
        title: 'Contrôle optimal de systèmes',
        icon: Move,
        color: 'bg-blue-600',
        symbol: '∫',
        description: 'Théorie du contrôle et applications industrielles'
      },
      {
        id: 113,
        slug: 'cryptographie-mathematique',
        title: 'Cryptographie et sécurité mathématique',
        icon: Code,
        color: 'bg-blue-600',
        symbol: '🔒',
        description: 'Algorithmes cryptographiques et sécurité informatique'
      },
      {
        id: 114,
        slug: 'intelligence-artificielle-avancee',
        title: 'Intelligence artificielle avancée',
        icon: BrainCircuit,
        color: 'bg-blue-600',
        symbol: 'AI',
        description: 'Réseaux de neurones profonds et apprentissage profond'
      },
      {
        id: 115,
        slug: 'modelisation-financiere',
        title: 'Modélisation financière avancée',
        icon: TrendingUp,
        color: 'bg-blue-600',
        symbol: '€',
        description: 'Mathématiques financières et produits dérivés'
      },
      {
        id: 116,
        slug: 'projet-applique-final',
        title: 'Projet appliqué final',
        icon: Target,
        color: 'bg-blue-600',
        symbol: '✓',
        description: 'Projet de synthèse appliquant l\'ensemble des compétences acquises'
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
