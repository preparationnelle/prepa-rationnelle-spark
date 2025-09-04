import { Calculator, Shapes, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Cuboid, Grid, BrainCircuit, Dices, Move, Scale, Infinity as InfinityIcon, UnfoldVertical, Variable, LocateFixed, Code } from 'lucide-react';

interface Chapter {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface Semester {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

const semestre1: Semester = {
  id: 'semestre1',
  title: 'Fondements Mathématiques',
  description: 'Acquisition des bases théoriques essentielles',
  chapters: [
    {
      id: 1,
      slug: 'elements-de-logique',
      title: 'Éléments de logique',
      description: 'Concepts fondamentaux et démonstrations rigoureuses',
      icon: BrainCircuit,
      color: 'bg-blue-600'
    },
    {
      id: 2,
      slug: 'ensembles-et-applications',
      title: 'Ensembles et applications',
      description: 'Concepts fondamentaux et démonstrations rigoureuses',
      icon: Shapes,
      color: 'bg-blue-600'
    },
    {
      id: 3,
      slug: 'sommes-produits-coefficients-binomiaux',
      title: 'Sommes, produits & coefficients binomiaux',
      description: 'Techniques de calcul et propriétés combinatoires',
      icon: Sigma,
      color: 'bg-blue-600'
    },
    {
      id: 4,
      slug: 'suites-numeriques',
      title: 'Suites numériques',
      description: 'Convergence, monotonie et théorèmes fondamentaux',
      icon: TrendingUp,
      color: 'bg-blue-600'
    },
    {
      id: 5,
      slug: 'fonctions-d-une-variable-reelle',
      title: 'Fonctions d\'une variable réelle',
      description: 'Continuité, limites et propriétés principales',
      icon: FunctionSquare,
      color: 'bg-blue-600'
    },
    {
      id: 6,
      slug: 'derivation',
      title: 'Dérivation',
      description: 'Dérivées, théorèmes et applications classiques',
      icon: Spline,
      color: 'bg-blue-600'
    },
    {
      id: 7,
      slug: 'integration-sur-un-segment',
      title: 'Intégration sur un segment',
      description: 'Intégrales de Riemann et méthodes calculation',
      icon: AreaChart,
      color: 'bg-blue-600'
    },
    {
      id: 8,
      slug: 'polynomes',
      title: 'Polynômes',
      description: 'Algèbre des polynômes et factorisation',
      icon: Cuboid,
      color: 'bg-blue-600'
    },
    {
      id: 9,
      slug: 'matrices-espaces-vectoriels',
      title: 'Matrices & espaces vectoriels',
      description: 'Opérations matricielles et espaces vectoriels',
      icon: Grid,
      color: 'bg-blue-600'
    },
    {
      id: '9b',
      slug: 'algebre-bilineaire-espaces-euclidiens',
      title: 'Algèbre bilinéaire et espaces euclidiens',
      description: 'Formes bilinéaires et espaces euclidiens',
      icon: BrainCircuit,
      color: 'bg-blue-600'
    },
    {
      id: 10,
      slug: 'probabilites-conditionnement',
      title: 'Probabilités & conditionnement',
      description: 'Espaces probabilisés et probabilités conditionnelles',
      icon: Dices,
      color: 'bg-blue-600'
    }
  ]
};

const semestre2: Semester = {
  id: 'semestre2',
  title: 'Concepts Avancés',
  description: 'Exploration des théories mathématiques complexes',
  chapters: [
    {
      id: 11,
      slug: 'applications-lineaires-structures-vectorielles',
      title: 'Applications linéaires & structures vectorielles',
      description: 'Morphismes et propriétés des applications linéaires',
      icon: Move,
      color: 'bg-blue-600'
    },
    {
      id: 12,
      slug: 'comparaison-negligeabilite-equivalence',
      title: 'Comparaison — négligeabilité & équivalence',
      description: 'Relations asymptotiques et développements',
      icon: Scale,
      color: 'bg-blue-600'
    },
    {
      id: 13,
      slug: 'series-numeriques',
      title: 'Séries numériques',
      description: 'Convergence et critères des séries',
      icon: InfinityIcon,
      color: 'bg-blue-600'
    },
    {
      id: 14,
      slug: 'developpements-limites-formule-de-taylor',
      title: 'Développements limités & formule de Taylor',
      description: 'Approximations polynomiales et applications',
      icon: UnfoldVertical,
      color: 'bg-blue-600'
    },
    {
      id: 15,
      slug: 'integrales-impropres-criteres-de-convergence',
      title: 'Intégrales impropres & critères de convergence',
      description: 'Extension de l\'intégration et convergence',
      icon: AreaChart,
      color: 'bg-blue-600'
    },
    {
      id: 16,
      slug: 'espaces-probabilises-conditionnement',
      title: 'Espaces probabilisés & conditionnement',
      description: 'Modélisation probabiliste et indépendance',
      icon: Dices,
      color: 'bg-blue-600'
    },
    {
      id: 17,
      slug: 'variables-aleatoires-discretes-lois',
      title: 'Variables aléatoires discrètes & lois',
      description: 'Lois de probabilité et espérance mathématique',
      icon: Variable,
      color: 'bg-blue-600'
    },
    {
      id: 18,
      slug: 'convergences-theoremes-limites',
      title: 'Convergences & théorèmes limites',
      description: 'Théorèmes centraux et convergence en loi',
      icon: LocateFixed,
      color: 'bg-blue-600'
    },
    {
      id: 20,
      slug: 'python',
      title: 'Python',
      description: 'Programmation appliquée aux mathématiques',
      icon: Code,
      color: 'bg-blue-600'
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
