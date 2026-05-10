import { Calculator, Shapes, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Cuboid, Grid, BrainCircuit, Dices, Move, Scale, Infinity as InfinityIcon, UnfoldVertical, Variable, LocateFixed, Code } from 'lucide-react';

interface Chapter {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  symbol: string;
  customLink?: string;
}

interface Semester {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

const semestre1: Semester = {
  id: 'semestre1',
  title: 'Semestre 1',
  description: 'Acquisition des bases théoriques essentielles',
  chapters: [
    {
      id: 1,
      slug: 'elements-de-logique',
      title: 'Éléments de logique',
      description: 'Propositions, quantificateurs, contraposée et raisonnement par l\'absurde',
      icon: BrainCircuit,
      color: 'bg-blue-600',
      symbol: '∧'
    },
    {
      id: 2,
      slug: 'ensembles-et-applications',
      title: 'Ensembles et applications',
      description: 'Injection, surjection, bijection et image directe et réciproque',
      icon: Shapes,
      color: 'bg-blue-600',
      symbol: '∈'
    },
    {
      id: 3,
      slug: 'sommes-produits-coefficients-binomiaux',
      title: 'Sommes, produits & coefficients binomiaux',
      description: 'Techniques de calcul et propriétés combinatoires',
      icon: Sigma,
      color: 'bg-blue-600',
      symbol: '∑'
    },
    {
      id: 4,
      slug: 'suites-numeriques',
      title: 'Suites numériques',
      description: 'Convergence, monotonie et théorèmes fondamentaux',
      icon: TrendingUp,
      color: 'bg-blue-600',
      symbol: '→'
    },
    {
      id: 5,
      slug: 'fonctions-d-une-variable-reelle',
      title: 'Fonctions d\'une variable réelle',
      description: 'Continuité, limites et propriétés principales',
      icon: FunctionSquare,
      color: 'bg-blue-600',
      symbol: 'f'
    },
    {
      id: 6,
      slug: 'derivation',
      title: 'Dérivation',
      description: 'Dérivées, théorèmes et applications classiques',
      icon: Spline,
      color: 'bg-blue-600',
      symbol: '∂'
    },
    {
      id: 7,
      slug: 'integration-sur-un-segment',
      title: 'Intégration sur un segment',
      description: 'Intégrales de Riemann, intégration par parties et changement de variable',
      icon: AreaChart,
      color: 'bg-blue-600',
      symbol: '∫'
    },
    {
      id: 8,
      slug: 'polynomes',
      title: 'Polynômes',
      description: 'Algèbre des polynômes et factorisation',
      icon: Cuboid,
      color: 'bg-blue-600',
      symbol: 'P'
    },
    {
      id: 9,
      slug: 'matrices-espaces-vectoriels',
      title: 'Matrices & espaces vectoriels',
      description: 'Opérations matricielles et espaces vectoriels',
      icon: Grid,
      color: 'bg-blue-600',
      symbol: 'M'
    },

    {
      id: 10,
      slug: 'probabilites-conditionnement',
      title: 'Probabilités & conditionnement',
      description: 'Espaces probabilisés et probabilités conditionnelles',
      icon: Dices,
      color: 'bg-blue-600',
      symbol: 'P'
    }
  ]
};

const semestre2: Semester = {
  id: 'semestre2',
  title: 'Semestre 2',
  description: 'Exploration des théories mathématiques complexes',
  chapters: [
    {
      id: 11,
      slug: 'applications-lineaires-structures-vectorielles',
      title: 'Applications linéaires & structures vectorielles',
      description: 'Noyau, image, théorème du rang, isomorphismes et changement de base',
      icon: Move,
      color: 'bg-blue-600',
      symbol: 'L'
    },
    {
      id: 12,
      slug: 'comparaison-negligeabilite-equivalence',
      title: 'Comparaison — négligeabilité & équivalence',
      description: 'Négligeabilité, équivalence et comparaison asymptotique de suites et fonctions',
      icon: Scale,
      color: 'bg-blue-600',
      symbol: '≈'
    },
    {
      id: 13,
      slug: 'series-numeriques',
      title: 'Séries numériques',
      description: 'Séries géométriques, de Riemann, séries télescopiques et convergence absolue',
      icon: InfinityIcon,
      color: 'bg-blue-600',
      symbol: '∞'
    },
    {
      id: 14,
      slug: 'developpements-limites-formule-de-taylor',
      title: 'Développements limités & formule de Taylor',
      description: 'Approximations polynomiales et applications',
      icon: UnfoldVertical,
      color: 'bg-blue-600',
      symbol: 'T'
    },
    {
      id: 15,
      slug: 'integrales-impropres-criteres-de-convergence',
      title: 'Intégrales impropres & critères de convergence',
      description: 'Convergence par comparaison, équivalents et intégrales de Riemann impropres',
      icon: AreaChart,
      color: 'bg-blue-600',
      symbol: '∫∞'
    },
    {
      id: 16,
      slug: 'espaces-probabilises-conditionnement',
      title: 'Espaces probabilisés & conditionnement',
      description: 'Tribu, probabilité, formule des probabilités totales et Bayes',
      icon: Dices,
      color: 'bg-blue-600',
      symbol: 'Ω'
    },
    {
      id: 17,
      slug: 'variables-aleatoires-discretes-lois',
      title: 'Variables aléatoires discrètes & lois',
      description: 'Lois usuelles (binomiale, Poisson, géométrique), espérance et variance',
      icon: Variable,
      color: 'bg-blue-600',
      symbol: 'X'
    },
    {
      id: 18,
      slug: 'convergences-theoremes-limites',
      title: 'Convergences & théorèmes limites',
      description: 'Loi faible des grands nombres, théorème central limite et inégalités de Markov',
      icon: LocateFixed,
      color: 'bg-blue-600',
      symbol: '⇒'
    },
    {
      id: 20,
      slug: 'python',
      title: 'Python',
      description: 'Programmation appliquée aux mathématiques',
      icon: Code,
      color: 'bg-blue-600',
      symbol: 'Py',
      customLink: '/formation/maths-python'
    }
  ]
};

export const mathsApprofondies1ereAnneeData = {
  semestre1,
  semestre2
};

export const getTotalChaptersCountApprofondies1ereAnnee = () => {
  return semestre1.chapters.length + semestre2.chapters.length;
};
