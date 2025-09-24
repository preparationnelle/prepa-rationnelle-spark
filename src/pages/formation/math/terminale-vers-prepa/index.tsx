import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Dices, Grid, Play, Target, ArrowRight, Infinity, Repeat, TrendingDown } from 'lucide-react';

const CHAPITRES = [
  { id: 1, slug: 'calculs', title: 'Calculs', icon: BookOpen },
  { id: 2, slug: 'sommes-suites-produits', title: 'Sommes, suites et produits', icon: Sigma },
  { id: 3, slug: 'suites', title: 'Suites', icon: TrendingDown },
  { id: 4, slug: 'fonctions', title: 'Fonctions', icon: FunctionSquare },
  { id: 5, slug: 'derivées', title: 'Dérivées', icon: Spline },
  { id: 6, slug: 'integrale', title: 'Intégrale', icon: AreaChart },
  { id: 7, slug: 'limites', title: 'Limites', icon: Infinity },
  { id: 8, slug: 'probabilites', title: 'Probabilités', icon: Dices },
  { id: 9, slug: 'recurrence', title: 'Récurrence', icon: Repeat },
  { id: 10, slug: 'matrice', title: 'Matrice', icon: Grid },
];

const TerminaleVersPrepaPage = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <span className="flex items-center gap-1">
              <a href="/" className="hover:text-[#1e3a8a] transition-colors">Accueil</a>
            </span>
            <span className="mx-1 text-[#2D5BFF]/50">›</span>
            <a href="/formations" className="hover:text-[#1e3a8a] transition-colors">Toutes les formations</a>
            <span className="mx-1 text-[#2D5BFF]/50">›</span>
            <a href="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">Choix option Maths</a>
            <span className="mx-1 text-[#2D5BFF]/50">›</span>
            <span className="text-[#2D5BFF] font-bold">Terminale vers la prépa</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Terminale → Prépa
            </h1>
            <p className="text-slate-600 text-lg">
              Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG : méthodes de travail, organisation, et points clés à anticiper en mathématiques.
            </p>
          </div>
        </Card>


        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent text-center">Chapitres à maîtriser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPITRES.map((chap, idx) => (
              <Card key={chap.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    {chap.icon && <chap.icon className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <Badge className="mb-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-sm">Chapitre {idx + 1}</Badge>
                    <CardTitle className="text-md font-bold text-gray-800 leading-tight">{chap.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Link
                      to={
                        chap.slug === 'calculs' ? "/formation/math/terminale-vers-prepa/calculs-cours" :
                        chap.slug === 'sommes-suites-produits' ? "/formation/math/terminale-vers-prepa/sommes-suites-cours" :
                        chap.slug === 'suites' ? "/formation/math/terminale-vers-prepa/suites-cours" :
                        chap.slug === 'fonctions' ? "/formation/math/terminale-vers-prepa/fonctions-cours" :
                        chap.slug === 'derivées' ? "/formation/math/terminale-vers-prepa/derivees-cours" :
                        chap.slug === 'integrale' ? "/formation/math/terminale-vers-prepa/integrales-cours" :
                        chap.slug === 'limites' ? "/formation/math/terminale-vers-prepa/limites-cours" :
                        chap.slug === 'probabilites' ? "/formation/math/terminale-vers-prepa/probabilites-cours" :
                        chap.slug === 'recurrence' ? "/formation/math/terminale-vers-prepa/recurrence-cours" :
                        chap.slug === 'matrice' ? "/formation/math/terminale-vers-prepa/matrices-cours" : "#"
                      }
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg shadow transition-colors"
                    >
                      <BookOpen className="w-5 h-5" />
                      Cours
                    </Link>
                    <Link
                      to={
                        chap.slug === 'calculs' ? "/formation/math/terminale-vers-prepa/calculs-exercices" :
                        chap.slug === 'sommes-suites-produits' ? "/formation/math/terminale-vers-prepa/sommes-suites-exercices" :
                        chap.slug === 'suites' ? "/formation/math/terminale-vers-prepa/suites-exercices" :
                        chap.slug === 'fonctions' ? "/formation/math/terminale-vers-prepa/fonctions-exercices" :
                        chap.slug === 'derivées' ? "/formation/math/terminale-vers-prepa/derivees-exercices" :
                        chap.slug === 'integrale' ? "/formation/math/terminale-vers-prepa/integrale-exercices" :
                        chap.slug === 'limites' ? "/formation/math/terminale-vers-prepa/limites-exercices" :
                        chap.slug === 'probabilites' ? "/formation/math/terminale-vers-prepa/probabilites-exercices" :
                        chap.slug === 'recurrence' ? "/formation/math/terminale-vers-prepa/recurrence-exercices" :
                        chap.slug === 'matrice' ? "/formation/math/terminale-vers-prepa/matrice-exercices" : "#"
                      }
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg shadow transition-colors"
                    >
                      <Play className="w-5 h-5" />
                      Exercices
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

export default TerminaleVersPrepaPage;