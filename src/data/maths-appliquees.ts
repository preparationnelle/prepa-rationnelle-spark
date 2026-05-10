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
        description: 'Propositions, quantificateurs, contraposée et raisonnement par l\'absurde'
      },
      {
        id: 2,
        slug: 'ensembles-et-applications',
        title: 'Ensembles et applications',
        icon: Shapes,
        color: 'bg-blue-600',
        symbol: '∈',
        description: 'Injection, surjection, bijection et image directe et réciproque'
      },
      {
        id: 3,
        slug: 'sommes-produits-coefficients-binomiaux',
        title: 'Sommes, produits & coefficients binomiaux',
        icon: Sigma,
        color: 'bg-blue-600',
        symbol: '∑',
        description: 'Sommes télescopiques, formule du binôme et relations de Pascal'
      },
      {
        id: 4,
        slug: 'suites-numeriques',
        title: 'Suites numériques',
        icon: TrendingUp,
        color: 'bg-blue-600',
        symbol: '→',
        description: 'Convergence, monotonie, suites adjacentes et théorèmes de comparaison'
      },
      {
        id: 5,
        slug: 'fonctions-d-une-variable-reelle',
        title: 'Fonctions d\'une variable réelle',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: 'f',
        description: 'Continuité, limites et théorème des valeurs intermédiaires'
      },
      {
        id: 6,
        slug: 'derivation',
        title: 'Dérivation',
        icon: Spline,
        color: 'bg-blue-600',
        symbol: '∂',
        description: 'Dérivées usuelles, théorème de Rolle et accroissements finis'
      },
      {
        id: 7,
        slug: 'integration-sur-un-segment',
        title: 'Intégration sur un segment',
        icon: AreaChart,
        color: 'bg-blue-600',
        symbol: '∫',
        description: 'Intégrales de Riemann, intégration par parties et changement de variable'
      },
      {
        id: 8,
        slug: 'polynomes',
        title: 'Polynômes',
        icon: Cuboid,
        color: 'bg-blue-600',
        symbol: 'P',
        description: 'Degré, racines, factorisation et division euclidienne'
      },
      {
        id: 9,
        slug: 'matrices-espaces-vectoriels',
        title: 'Matrices & espaces vectoriels',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'M',
        description: 'Opérations matricielles, pivot de Gauss et bases'
      },
      {
        id: 10,
        slug: 'probabilites-conditionnement',
        title: 'Probabilités & conditionnement',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: 'P',
        description: 'Probabilités conditionnelles, formule de Bayes et indépendance'
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
        description: 'Noyau, image, théorème du rang et isomorphismes'
      },
      {
        id: 12,
        slug: 'comparaison-negligeabilite-equivalence',
        title: 'Comparaison — négligeabilité & équivalence',
        icon: Scale,
        color: 'bg-blue-600',
        symbol: '≈',
        description: 'Relations asymptotiques et comparaison de suites et de fonctions'
      },
      {
        id: 13,
        slug: 'series-numeriques',
        title: 'Séries numériques',
        icon: InfinityIcon,
        color: 'bg-blue-600',
        symbol: '∞',
        description: 'Séries géométriques, de Riemann, séries télescopiques et convergence absolue'
      },
      {
        id: 14,
        slug: 'developpements-limites-formule-de-taylor',
        title: 'Développements limités & formule de Taylor',
        icon: UnfoldVertical,
        color: 'bg-blue-600',
        symbol: 'T',
        description: 'DL usuels, Taylor-Young et applications aux limites et équivalents'
      },
      {
        id: 15,
        slug: 'integrales-impropres-criteres-de-convergence',
        title: 'Intégrales impropres & critères de convergence',
        icon: AreaChart,
        color: 'bg-blue-600',
        symbol: '∫∞',
        description: 'Convergence par comparaison, équivalents et intégrales de référence'
      },
      {
        id: 16,
        slug: 'espaces-probabilises-conditionnement',
        title: 'Espaces probabilisés & conditionnement',
        icon: Dices,
        color: 'bg-blue-600',
        symbol: 'Ω',
        description: 'Tribu, probabilité, formule des probabilités totales et Bayes'
      },
      {
        id: 17,
        slug: 'variables-aleatoires-discretes-lois',
        title: 'Variables aléatoires discrètes & lois',
        icon: Variable,
        color: 'bg-blue-600',
        symbol: 'X',
        description: 'Lois usuelles (binomiale, Poisson, géométrique), espérance et variance'
      },
      {
        id: 18,
        slug: 'convergences-theoremes-limites',
        title: 'Convergences & théorèmes limites',
        icon: LocateFixed,
        color: 'bg-blue-600',
        symbol: '⇒',
        description: 'Loi faible des grands nombres et théorème central limite'
      },
      {
        id: 19,
        slug: 'equations-differentielles-applications-concretes',
        title: 'Équations différentielles avec applications concrètes',
        icon: FunctionSquare,
        color: 'bg-blue-600',
        symbol: 'dx',
        description: 'Équations linéaires d\'ordre 1 et 2 et variation de la constante'
      },
      {
        id: 21,
        slug: 'chaines-de-markov',
        title: 'Les chaînes de Markov',
        icon: Move,
        color: 'bg-blue-600',
        symbol: '→',
        description: 'Matrices de transition, états récurrents et distribution stationnaire'
      },
      {
        id: 22,
        slug: 'theorie-des-graphes-approfondie',
        title: 'La théorie des graphes approfondie',
        icon: Grid,
        color: 'bg-blue-600',
        symbol: 'G',
        description: 'Graphes orientés, connexité, chemins et algorithmes classiques'
      },
      {
        id: 23,
        slug: 'statistiques-descriptives',
        title: 'Les statistiques descriptives',
        icon: Cuboid,
        color: 'bg-blue-600',
        symbol: 'μ',
        description: 'Moyenne, variance, médiane, covariance et régression linéaire'
      },
      {
        id: 20,
        slug: 'python',
        title: 'Python',
        icon: Code,
        color: 'bg-blue-600',
        symbol: 'Py',
        description: 'Programmation scientifique avec numpy, scipy et matplotlib'
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
