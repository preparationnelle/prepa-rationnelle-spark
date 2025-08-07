import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Dices, Grid, Play } from 'lucide-react';

const CHAPITRES = [
  { id: 1, slug: 'calculs', title: 'Calculs', icon: BookOpen },
  { id: 2, slug: 'sommes-suites-produits', title: 'Sommes, suites et produits', icon: Sigma },
  { id: 3, slug: 'fonctions', title: 'Fonctions', icon: FunctionSquare },
  { id: 4, slug: 'derivées', title: 'Dérivées', icon: Spline },
  { id: 5, slug: 'integrale', title: 'Intégrale', icon: AreaChart },
  { id: 6, slug: 'probabilites', title: 'Probabilités', icon: Dices },
  { id: 7, slug: 'matrice', title: 'Matrice', icon: Grid },
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
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Terminale vers la prépa
            </h1>
            <p className="text-slate-600 text-lg">
              Formation mathématiques pour bien réussir la transition lycée → prépa ECG, avec les chapitres fondamentaux à maîtriser.
            </p>
          </div>
        </Card>

        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">Chapitres à maîtriser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPITRES.map((chap, idx) => (
              <Card key={chap.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    {chap.icon && <chap.icon className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <Badge className="mb-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 shadow-sm">Chapitre {idx + 1}</Badge>
                    <CardTitle className="text-md font-bold text-gray-800 leading-tight">{chap.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <a
                      href={"#"}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg shadow transition-colors"
                    >
                      <BookOpen className="w-5 h-5" />
                      Cours
                    </a>
                    <a
                      href={"#"}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 rounded-lg shadow transition-colors"
                    >
                      <Play className="w-5 h-5" />
                      Exercices
                    </a>
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