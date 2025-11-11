import {
  BrainCircuit, Shapes, Sigma, TrendingUp, FunctionSquare, Spline,
  AreaChart, Cuboid, Grid, Dices, Move, Scale, Infinity as InfinityIcon,
  UnfoldVertical, Variable, LocateFixed, Code
} from 'lucide-react';
import { MathsAppliqueesData } from '@/types/maths-appliquees';

export const mathsAppliqueesData: MathsAppliqueesData = {
  semestre1: {
    title: 'Semestre 1 - Fondements Mathématiques',
    description: 'Acquisition des bases théoriques essentielles pour comprendre les concepts avancés',
    chapters: [
      {
        id: 1,
        slug: 'elements-de-logique',
        title: 'Éléments de logique',
        icon: BrainCircuit,
        color: 'bg-blue-600',
        symbol: '∧',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 2,
        slug: 'ensembles-et-applications',
        title: 'Ensembles et applications',
        icon: Shapes,
        color: 'bg-blue-600',
        symbol: '∈',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 3,
        slug: 'sommes-produits-coefficients-binomiaux',
        title: 'Sommes, produits & coefficients binomiaux',
        icon: Sigma,
        color: 'bg-blue-600',
        symbol: '∑',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 4,
        slug: 'suites-numeriques',
        title: 'Suites numériques',
        icon: TrendingUp,
        color: 'bg-blue-600',
        symbol: '→',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 5,
        slug: 'fonctions-d-une-variable-reelle',
        title: 'Fonctions d\'une variable réelle',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: 'f',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 6,
        slug: 'derivation',
        title: 'Dérivation',
        icon: Spline,
        color: 'bg-blue-600',
        symbol: '∂',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 7,
        slug: 'integration-sur-un-segment',
        title: 'Intégration sur un segment',
        icon: AreaChart,
        color: 'bg-blue-600',
        symbol: '∫',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 8,
        slug: 'polynomes',
        title: 'Polynômes',
        icon: Cuboid,
        color: 'bg-blue-600',
        symbol: 'P',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 9,
        slug: 'matrices-espaces-vectoriels',
        title: 'Matrices & espaces vectoriels',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'M',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      },
      {
        id: 10,
        slug: 'probabilites-conditionnement',
        title: 'Probabilités & conditionnement',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: 'P',
        description: 'Concepts fondamentaux et démonstrations rigoureuses'
      }
    ]
  },
  semestre2: {
    title: 'Semestre 2 - Concepts Avancés',
    description: 'Exploration des théories mathématiques complexes et de leurs applications',
    chapters: [
      {
        id: 11,
        slug: 'applications-lineaires-structures-vectorielles',
        title: 'Applications linéaires & structures vectorielles',
        icon: Move,
        color: 'bg-blue-600',
        symbol: 'L',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 12,
        slug: 'comparaison-negligeabilite-equivalence',
        title: 'Comparaison — négligeabilité & équivalence',
        icon: Scale,
        color: 'bg-blue-600',
        symbol: '≈',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 13,
        slug: 'series-numeriques',
        title: 'Séries numériques',
        icon: InfinityIcon,
        color: 'bg-blue-600',
        symbol: '∞',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 14,
        slug: 'developpements-limites-formule-de-taylor',
        title: 'Développements limités & formule de Taylor',
        icon: UnfoldVertical,
        color: 'bg-blue-600',
        symbol: 'T',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 15,
        slug: 'integrales-impropres-criteres-de-convergence',
        title: 'Intégrales impropres & critères de convergence',
        icon: AreaChart,
        color: 'bg-blue-600',
        symbol: '∫∞',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 16,
        slug: 'espaces-probabilises-conditionnement',
        title: 'Espaces probabilisés & conditionnement',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: 'Ω',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 17,
        slug: 'variables-aleatoires-discretes-lois',
        title: 'Variables aléatoires discrètes & lois',
        icon: Variable,
        color: 'bg-blue-600',
        symbol: 'X',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 18,
        slug: 'convergences-theoremes-limites',
        title: 'Convergences & théorèmes limites',
        icon: LocateFixed,
        color: 'bg-blue-600',
        symbol: '⇒',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 19,
        slug: 'equations-differentielles-applications-concretes',
        title: 'Équations différentielles avec applications concrètes',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: 'dx',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 21,
        slug: 'chaines-de-markov',
        title: 'Les chaînes de Markov',
        icon: Move,
        color: 'bg-blue-600',
        symbol: '→',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 22,
        slug: 'theorie-des-graphes-approfondie',
        title: 'La théorie des graphes approfondie',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'G',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 23,
        slug: 'statistiques-descriptives',
        title: 'Les statistiques descriptives',
        icon: Cuboid,
        color: 'bg-blue-600',
        symbol: 'μ',
        description: 'Théorie approfondie et applications pratiques'
      },
      {
        id: 20,
        slug: 'python',
        title: 'Python',
        icon: Code,
        color: 'bg-blue-600',
        symbol: 'Py',
        description: 'Théorie approfondie et applications pratiques'
      }
    ]
  }
};

// Fonctions utilitaires spécifiques à Maths Appliquées
export const getChapterById = (id: number) => {
  const allChapters = [
    ...mathsAppliqueesData.semestre1.chapters,
    ...mathsAppliqueesData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.id === id);
};

export const getChapterBySlug = (slug: string) => {
  const allChapters = [
    ...mathsAppliqueesData.semestre1.chapters,
    ...mathsAppliqueesData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.slug === slug);
};

export const getTotalChaptersCount = () => {
  return mathsAppliqueesData.semestre1.chapters.length +
         mathsAppliqueesData.semestre2.chapters.length;
};
