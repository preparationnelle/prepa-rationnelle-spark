import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Dices, Grid, Play, Infinity, Repeat, TrendingDown, Target, Brain } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-700">
            <span className="flex items-center gap-1">
              <a href="/" className="hover:text-gray-900 transition-colors">Accueil</a>
            </span>
            <span className="mx-1 text-gray-400">›</span>
            <a href="/formations" className="hover:text-gray-900 transition-colors">Toutes les formations</a>
            <span className="mx-1 text-gray-400">›</span>
            <a href="/formation/maths-choix" className="hover:text-gray-900 transition-colors">Choix option Maths</a>
            <span className="mx-1 text-gray-400">›</span>
            <span className="text-orange-600 font-bold">Terminale vers la prépa</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Terminale</span>
            <span className="text-orange-600 mx-3">→</span>
            <span className="text-gray-900">Prépa</span>
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG
          </p>
          <p className="text-gray-600 text-sm">
            Méthodes de travail, organisation, et points clés à anticiper en mathématiques
          </p>
        </div>


        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gray-900">Chapitres à</span>
            <span className="text-orange-600 ml-2">maîtriser</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPITRES.map((chap, idx) => (
              <div key={chap.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                <div className="flex flex-row items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    {chap.icon && <chap.icon className="h-5 w-5 text-gray-600" />}
                  </div>
                  <div>
                    <div className="mb-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded border border-orange-200 inline-block">Chapitre {idx + 1}</div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{chap.title}</h3>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div className="grid grid-cols-1 gap-2 mt-auto">
                    {/* Première ligne : Cours et Exercices */}
                    <div className="flex gap-2">
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
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
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
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Exercices
                      </Link>
                    </div>

                    {/* Deuxième ligne : Quiz et Flashcards */}
                    <div className="flex gap-2">
                      <Link
                        to={
                          chap.slug === 'calculs' ? "/formation/math/terminale-vers-prepa/calculs-quiz" :
                          chap.slug === 'sommes-suites-produits' ? "/formation/math/terminale-vers-prepa/sommes-suites-quiz" :
                          chap.slug === 'suites' ? "/formation/math/terminale-vers-prepa/suites-quiz" :
                          chap.slug === 'fonctions' ? "/formation/math/terminale-vers-prepa/fonctions-quiz" :
                          chap.slug === 'derivées' ? "/formation/math/terminale-vers-prepa/derivees-quiz" :
                          chap.slug === 'integrale' ? "/formation/math/terminale-vers-prepa/integrales-quiz" :
                          chap.slug === 'limites' ? "/formation/math/terminale-vers-prepa/limites-quiz" :
                          chap.slug === 'probabilites' ? "/formation/math/terminale-vers-prepa/probabilites-quiz" :
                          chap.slug === 'recurrence' ? "/formation/math/terminale-vers-prepa/recurrence-quiz" :
                          chap.slug === 'matrice' ? "/formation/math/terminale-vers-prepa/matrices-quiz" : "#"
                        }
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        <Target className="w-4 h-4" />
                        Quiz
                      </Link>
                      <Link
                        to={
                          chap.slug === 'calculs' ? "/formation/math/terminale-vers-prepa/calculs-flashcards" :
                          chap.slug === 'sommes-suites-produits' ? "/formation/math/terminale-vers-prepa/sommes-suites-flashcards" :
                          chap.slug === 'suites' ? "/formation/math/terminale-vers-prepa/suites-flashcards" :
                          chap.slug === 'fonctions' ? "/formation/math/terminale-vers-prepa/fonctions-flashcards" :
                          chap.slug === 'derivées' ? "/formation/math/terminale-vers-prepa/derivees-flashcards" :
                          chap.slug === 'integrale' ? "/formation/math/terminale-vers-prepa/integrales-flashcards" :
                          chap.slug === 'limites' ? "/formation/math/terminale-vers-prepa/limites-flashcards" :
                          chap.slug === 'probabilites' ? "/formation/math/terminale-vers-prepa/probabilites-flashcards" :
                          chap.slug === 'recurrence' ? "/formation/math/terminale-vers-prepa/recurrence-flashcards" :
                          chap.slug === 'matrice' ? "/formation/math/terminale-vers-prepa/matrices-flashcards" : "#"
                        }
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        <Brain className="w-4 h-4" />
                        Flashcards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminaleVersPrepaPage;