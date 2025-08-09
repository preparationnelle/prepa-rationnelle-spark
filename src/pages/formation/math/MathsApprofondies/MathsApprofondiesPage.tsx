import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Play, Target, ArrowRight, BrainCircuit, Shapes, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Cuboid, Grid, Dices, Move, Scale, Infinity as InfinityIcon, UnfoldVertical, Variable, LocateFixed, Code } from 'lucide-react';
import { FaRuler } from 'react-icons/fa'; // Pour le logo 📐
import { useState } from 'react';

const BG_MAIN = 'bg-[#EEF3FC]';
const COLOR_PRIMARY = 'text-[#2D5BFF]';
const COLOR_ORANGE = 'text-[#FF5C1B]';
const COLOR_LILAC = 'text-[#9370FF]';
const GRADIENT_HEADER = 'bg-gradient-to-r from-[#6B5FFF] to-[#29E3F5]';

const SEMESTRE_1 = [
  { id: 1, slug: 'elements-de-logique', title: 'Éléments de logique', icon: BrainCircuit },
  { id: 2, slug: 'ensembles-et-applications', title: 'Ensembles et applications', icon: Shapes },
  { id: 3, slug: 'sommes-produits-coefficients-binomiaux', title: 'Sommes, produits & coefficients binomiaux', icon: Sigma },
  { id: 4, slug: 'suites-numeriques', title: 'Suites numériques', icon: TrendingUp },
  { id: 5, slug: 'fonctions-d-une-variable-reelle', title: 'Fonctions d\'une variable réelle', icon: FunctionSquare },
  { id: 6, slug: 'derivation', title: 'Dérivation', icon: Spline },
  { id: 7, slug: 'integration-sur-un-segment', title: 'Intégration sur un segment', icon: AreaChart },
  { id: 8, slug: 'polynomes', title: 'Polynômes', icon: Cuboid },
  { id: 9, slug: 'matrices-espaces-vectoriels', title: 'Matrices & espaces vectoriels', icon: Grid },
  { id: 10, slug: 'probabilites-conditionnement', title: 'Probabilités & conditionnement', icon: Dices },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'applications-lineaires-structures-vectorielles', title: 'Applications linéaires & structures vectorielles', icon: Move },
  { id: 12, slug: 'comparaison-negligeabilite-equivalence', title: 'Comparaison — négligeabilité & équivalence', icon: Scale },
  { id: 13, slug: 'series-numeriques', title: 'Séries numériques', icon: InfinityIcon },
  { id: 14, slug: 'developpements-limites-formule-de-taylor', title: 'Développements limités & formule de Taylor', icon: UnfoldVertical },
  { id: 15, slug: 'integrales-impropres-criteres-de-convergence', title: 'Intégrales impropres & critères de convergence', icon: AreaChart },
  { id: 16, slug: 'espaces-probabilises-conditionnement', title: 'Espaces probabilisés & conditionnement', icon: Dices },
  { id: 17, slug: 'variables-aleatoires-discretes-lois', title: 'Variables aléatoires discrètes & lois', icon: Variable },
  { id: 18, slug: 'convergences-theoremes-limites', title: 'Convergences & théorèmes limites', icon: LocateFixed },
  { id: 20, slug: 'python', title: 'Python', icon: Code },
];

const MathsApprofondiesPage = () => {
  const [filter, setFilter] = useState<'appro' | 'appli'>('appro');
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Maths Approfondies</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 mb-8">
                            <div className="p-8">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                      Maths Approfondies
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Formation mathématiques approfondie pour la prépa ECG, avec focus sur les concepts théoriques et les démonstrations
                    </p>
                  </div>
        </Card>

        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          {/* Semestre 1 */}
                                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">Chapitres — Semestre 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_1.map((chap) => (
              <Card key={chap.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    {chap.icon && <chap.icon className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <Badge className="mb-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 shadow-sm">Chapitre {chap.id}</Badge>
                    <CardTitle className="text-md font-bold text-gray-800 leading-tight">{chap.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-full">
                      <Button variant="default" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Cours
                      </Button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-full">
                       <Button variant="secondary" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                        <Play className="w-4 h-4 mr-2" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

                    {/* Semestre 2 */}
          <h2 className="text-2xl font-bold mt-12 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center">Chapitres — Semestre 2</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_2.map((chap) => (
               <Card key={chap.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
               <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50">
                 <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                   {chap.icon && <chap.icon className="h-6 w-6 text-white" />}
                 </div>
                 <div>
                   <Badge className="mb-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-sm">Chapitre {chap.id}</Badge>
                   <CardTitle className="text-md font-bold text-gray-800 leading-tight">{chap.title}</CardTitle>
                 </div>
               </CardHeader>
               <CardContent className="p-4 flex-grow flex flex-col justify-between">
                 <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Link to={chap.slug === 'python' ? '/formation' : `/formation/maths-${chap.slug}`} className="w-full">
                     <Button variant="default" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg">
                       <BookOpen className="w-4 h-4 mr-2" />
                       Cours
                     </Button>
                   </Link>
                    <Link to={chap.slug === 'python' ? '/formation/python-exercices' : `/formation/maths-${chap.slug}-exercices`} className="w-full">
                      <Button variant="secondary" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                       <Play className="w-4 h-4 mr-2" />
                       Exercices
                     </Button>
                   </Link>
                 </div>
               </CardContent>
             </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsApprofondiesPage; 