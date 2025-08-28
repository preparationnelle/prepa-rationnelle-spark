import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Play, Target, BrainCircuit, Shapes, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Cuboid, Grid, Dices, Move, Scale, Infinity as InfinityIcon, UnfoldVertical, Variable, LocateFixed, Code, Calculator } from 'lucide-react';

const SEMESTRE_1 = [
  { id: 1, slug: 'elements-de-logique', title: 'Éléments de logique', icon: BrainCircuit, color: 'bg-orange-600' },
  { id: 2, slug: 'ensembles-et-applications', title: 'Ensembles et applications', icon: Shapes, color: 'bg-orange-600' },
  { id: 3, slug: 'sommes-produits-coefficients-binomiaux', title: 'Sommes, produits & coefficients binomiaux', icon: Sigma, color: 'bg-orange-600' },
  { id: 4, slug: 'suites-numeriques', title: 'Suites numériques', icon: TrendingUp, color: 'bg-orange-600' },
  { id: 5, slug: 'fonctions-d-une-variable-reelle', title: 'Fonctions d\'une variable réelle', icon: FunctionSquare, color: 'bg-orange-600' },
  { id: 6, slug: 'derivation', title: 'Dérivation', icon: Spline, color: 'bg-orange-600' },
  { id: 7, slug: 'integration-sur-un-segment', title: 'Intégration sur un segment', icon: AreaChart, color: 'bg-orange-600' },
  { id: 8, slug: 'polynomes', title: 'Polynômes', icon: Cuboid, color: 'bg-orange-600' },
  { id: 9, slug: 'matrices-espaces-vectoriels', title: 'Matrices & espaces vectoriels', icon: Grid, color: 'bg-orange-600' },
  { id: 10, slug: 'probabilites-conditionnement', title: 'Probabilités & conditionnement', icon: Dices, color: 'bg-orange-600' },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'applications-lineaires-structures-vectorielles', title: 'Applications linéaires & structures vectorielles', icon: Move, color: 'bg-orange-600' },
  { id: 12, slug: 'comparaison-negligeabilite-equivalence', title: 'Comparaison — négligeabilité & équivalence', icon: Scale, color: 'bg-orange-600' },
  { id: 13, slug: 'series-numeriques', title: 'Séries numériques', icon: InfinityIcon, color: 'bg-orange-600' },
  { id: 14, slug: 'developpements-limites-formule-de-taylor', title: 'Développements limités & formule de Taylor', icon: UnfoldVertical, color: 'bg-orange-600' },
  { id: 15, slug: 'integrales-impropres-criteres-de-convergence', title: 'Intégrales impropres & critères de convergence', icon: AreaChart, color: 'bg-orange-600' },
  { id: 16, slug: 'espaces-probabilises-conditionnement', title: 'Espaces probabilisés & conditionnement', icon: Dices, color: 'bg-orange-600' },
  { id: 17, slug: 'variables-aleatoires-discretes-lois', title: 'Variables aléatoires discrètes & lois', icon: Variable, color: 'bg-orange-600' },
  { id: 18, slug: 'convergences-theoremes-limites', title: 'Convergences & théorèmes limites', icon: LocateFixed, color: 'bg-orange-600' },
  { id: 20, slug: 'python', title: 'Python', icon: Code, color: 'bg-orange-600' },
];

const MathsApprofondiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formations" className="hover:text-blue-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-blue-700 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-orange-600 font-medium">Maths Approfondies</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Maths Approfondies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation mathématiques approfondie pour la prépa ECG, avec focus sur les concepts théoriques et les démonstrations rigoureuses
          </p>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
            Prépa ECG - Voie Approfondie
          </Badge>
        </div>

        {/* Semester 1 */}
        <div className="mb-12">
          <div className="bg-orange-50 rounded-xl p-8 mb-8 text-center border-2 border-orange-200">
            <h2 className="text-2xl font-bold mb-4 text-orange-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-orange-600 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              Semestre 1 - Fondements Mathématiques
            </h2>
            <p className="text-orange-700">
              Acquisition des bases théoriques essentielles pour comprendre les concepts avancés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_1.map((chap) => (
              <Card
                key={chap.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${chap.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <chap.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50/50">
                    Chapitre {chap.id}
                  </Badge>
                  <CardTitle className="text-lg font-semibold text-gray-800 mt-2">{chap.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
                    Concepts fondamentaux et démonstrations rigoureuses
                  </p>
                  <div className="space-y-3">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-full">
                      <Button variant="default" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Cours
                      </Button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-full">
                      <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 hover:scale-105">
                        <Play className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-quiz`} className="w-full">
                      <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 hover:scale-105">
                        <Target className="mr-2 h-4 w-4" />
                        Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-12">
          <div className="bg-orange-50 rounded-xl p-8 mb-8 text-center border-2 border-orange-200">
            <h2 className="text-2xl font-bold mb-4 text-orange-900 flex items-center justify-center gap-3">
              <div className="p-3 rounded-lg bg-orange-600 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              Semestre 2 - Concepts Avancés
            </h2>
            <p className="text-orange-700">
              Exploration des théories mathématiques complexes et de leurs applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_2.map((chap) => (
              <Card
                key={chap.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${chap.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <chap.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50/50">
                    Chapitre {chap.id}
                  </Badge>
                  <CardTitle className="text-lg font-semibold text-gray-800 mt-2">{chap.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
                    Théorie approfondie et applications pratiques
                  </p>
                  <div className="space-y-3">
                    <Link to={chap.slug === 'python' ? '/formation' : `/formation/maths-${chap.slug}`} className="w-full">
                      <Button variant="default" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Cours
                      </Button>
                    </Link>
                    <Link to={chap.slug === 'python' ? '/formation/python-exercices' : `/formation/maths-${chap.slug}-exercices`} className="w-full">
                      <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 hover:scale-105">
                        <Play className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                    <Link to={chap.slug === 'python' ? '/formation/python-quiz' : `/formation/maths-${chap.slug}-quiz`} className="w-full">
                      <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 hover:scale-105">
                        <Target className="mr-2 h-4 w-4" />
                        Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-orange-50 rounded-xl p-8 text-center border-2 border-orange-200">
            <h2 className="text-2xl font-bold mb-4 text-orange-900">Ressources complémentaires</h2>
            <p className="text-orange-700 mb-6">
              Chaque chapitre comprend des exercices, quiz interactifs et corrections détaillées
              pour une préparation optimale aux concours ECG.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border border-orange-200">
                <span className="font-medium text-orange-900">19 chapitres complets</span>
              </div>
              <div className="bg-white p-3 rounded border border-orange-200">
                <span className="font-medium text-orange-900">Quiz interactifs</span>
              </div>
              <div className="bg-white p-3 rounded border border-orange-200">
                <span className="font-medium text-orange-900">Exercices corrigés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <Card className="border border-gray-200 bg-white/60 shadow-sm mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <Calculator className="h-5 w-5 text-blue-600" />
              Méthodologie de préparation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-orange-600" />
                  Approche pédagogique
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Démonstrations rigoureuses étape par étape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Exercices progressifs de difficulté croissante
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Focus sur la compréhension des concepts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Préparation spécifique aux épreuves ECG
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-600" />
                  Objectifs de formation
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Maîtriser les fondements théoriques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Développer l'esprit logique et démonstratif
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Acquérir des méthodes de résolution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Réussir les concours des Grandes Écoles
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MathsApprofondiesPage; 