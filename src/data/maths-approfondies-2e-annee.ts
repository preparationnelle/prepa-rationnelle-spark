import {
  BrainCircuit, Shapes, Sigma, TrendingUp, FunctionSquare, Spline,
  AreaChart, Cuboid, Grid, Dices, Move, Scale, Infinity as InfinityIcon,
  UnfoldVertical, Variable, LocateFixed, Code, Zap, Network, BarChart3,
  GitBranch, Target, Microscope, Database, Award, Star, BookMarked,
  Layers, Atom, Lightbulb, GraduationCap
} from 'lucide-react';
import { MathsAppliqueesData } from '@/types/maths-appliquees';

export const mathsApprofondies2eAnneeData: MathsAppliqueesData = {
  semestre1: {
    title: 'Troisième semestre - Algèbre Linéaire Avancée & Analyse Multivariée',
    description: 'Algèbre bilinéaire, fonctions de plusieurs variables et probabilités multivariées',
    chapters: [
      {
        id: 1,
        slug: 'complements-algebre-lineaire',
        title: 'Compléments d\'algèbre linéaire',
        icon: Grid,
        color: 'bg-orange-600',
        description: 'Somme directe de sous-espaces vectoriels, changement de base, trace'
      },
      {
        id: 2,
        slug: 'endomorphismes-matrices-avancees',
        title: 'Éléments propres et réduction des endomorphismes et matrices carrées',
        icon: Network,
        color: 'bg-orange-600',
        description: 'Vecteurs propres, espaces propres, recherche d\'éléments propres, propriétés générales et méthodes de réduction'
      },
      {
        id: 3,
        slug: 'algebre-bilineaire',
        title: 'Algèbre bilinéaire',
        icon: FunctionSquare,
        color: 'bg-orange-600',
        description: 'Produit scalaire et espaces euclidiens'
      },
      {
        id: 4,
        slug: 'fonctions-multivariees-calcul-differentiel',
        title: 'Fonctions multivariées et calcul différentiel',
        icon: TrendingUp,
        color: 'bg-orange-600',
        description: 'Fonctions réelles définies sur R^n, dérivées partielles, gradient, recherche d\'extremum'
      },
      {
        id: 5,
        slug: 'complements-variables-aleatoires',
        title: 'Compléments sur les variables aléatoires',
        icon: Variable,
        color: 'bg-orange-600',
        description: 'Séries de variables aléatoires, convergence et calculs d\'espérance et variance'
      },
      {
        id: 6,
        slug: 'variables-aleatoires-densite',
        title: 'Variables aléatoires à densité',
        icon: BarChart3,
        color: 'bg-orange-600',
        description: 'Densité, fonction de répartition, espérance et variance'
      },
      {
        id: 7,
        slug: 'n-uplets-variables-aleatoires',
        title: 'n-uplets de variables aléatoires réelles',
        icon: Variable,
        color: 'bg-orange-600',
        description: 'Propriétés de l\'espérance, variance et indépendance'
      },
      {
        id: 8,
        slug: 'couple-variables-aleatoires',
        title: 'Cas particulier du couple',
        icon: Move,
        color: 'bg-orange-600',
        description: 'Sommes de variables indépendantes et applications'
      }
    ]
  },
  semestre2: {
    title: 'Quatrième semestre - Algèbre Bilinéaire Avancée & Optimisation',
    description: 'Endomorphismes symétriques, fonctions multivariées et estimation statistique',
    chapters: [
      {
        id: 9,
        slug: 'algebre-bilineaire-espaces-euclidiens',
        title: 'Algèbre bilinéaire et espaces euclidiens',
        icon: Grid,
        color: 'bg-orange-600',
        description: 'Endomorphismes symétriques d\'un espace euclidien, matrices symétriques et propriétés de la projection orthogonale'
      },
      {
        id: 10,
        slug: 'reduction-matrices-symetriques',
        title: 'Réduction des endomorphismes et des matrices symétriques',
        icon: Shapes,
        color: 'bg-orange-600',
        description: 'Méthodes de diagonalisation et réduction complète'
      },
      {
        id: 11,
        slug: 'optimisation-multivariee-avancee',
        title: 'Optimisation multivariée avancée',
        icon: FunctionSquare,
        color: 'bg-orange-600',
        description: 'Fonctions de plusieurs variables, propriétés différentielles, recherche d\'extrema, conditions d\'ordre 1 et 2, contraintes linéaires et multiplicateurs de Lagrange'
      },
      {
        id: 12,
        slug: 'convergences-approximations',
        title: 'Convergences et approximations',
        icon: TrendingUp,
        color: 'bg-orange-600',
        description: 'Convergence en probabilité et convergence en loi'
      },
      {
        id: 13,
        slug: 'estimation-statistique-avancee',
        title: 'Estimation statistique avancée',
        icon: BarChart3,
        color: 'bg-orange-600',
        description: 'Estimation ponctuelle, intervalles de confiance asymptotiques, critères d\'efficacité et comparaison des estimateurs'
      }
    ]
  }
};

// Fonctions utilitaires spécifiques à Maths Approfondies 2ème année
export const getChapterByIdApprofondies2eAnnee = (id: number) => {
  const allChapters = [
    ...mathsApprofondies2eAnneeData.semestre1.chapters,
    ...mathsApprofondies2eAnneeData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.id === id);
};

export const getChapterBySlugApprofondies2eAnnee = (slug: string) => {
  const allChapters = [
    ...mathsApprofondies2eAnneeData.semestre1.chapters,
    ...mathsApprofondies2eAnneeData.semestre2.chapters
  ];
  return allChapters.find(chapter => chapter.slug === slug);
};

export const getTotalChaptersCountApprofondies2eAnnee = () => {
  return mathsApprofondies2eAnneeData.semestre1.chapters.length +
         mathsApprofondies2eAnneeData.semestre2.chapters.length;
}; // Total: 13 chapitres (8 + 5)
