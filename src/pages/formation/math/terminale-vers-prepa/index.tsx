import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Sigma, TrendingUp, FunctionSquare, Spline, AreaChart, Dices, Grid, Play, Infinity, Repeat, Target, Brain, Home, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CHAPITRES = [
  { id: 1, slug: 'calculs', title: 'Calculs', icon: BookOpen, description: 'Maîtriser les bases du calcul algébrique et numérique pour la prépa.' },
  { id: 2, slug: 'sommes-suites-produits', title: 'Sommes, suites et produits', icon: Sigma, description: 'Manipuler les sommes (Σ) et les produits (Π) avec aisance.' },
  { id: 3, slug: 'suites', title: 'Suites', icon: TrendingUp, description: 'Étude des suites arithmétiques, géométriques et de leur convergence.' },
  { id: 4, slug: 'fonctions', title: 'Fonctions', icon: FunctionSquare, description: 'Généralités, parité, périodicité et variations des fonctions usuelles.' },
  { id: 5, slug: 'derivées', title: 'Dérivées', icon: Spline, description: 'Calcul de dérivées, tangentes et étude complète de fonctions.' },
  { id: 6, slug: 'integrale', title: 'Intégrale', icon: AreaChart, description: 'Calcul intégral, primitives, IPP et calcul d\'aires.' },
  { id: 7, slug: 'limites', title: 'Limites', icon: Infinity, description: 'Limites de fonctions et de suites, formes indéterminées et asymptotes.' },
  { id: 8, slug: 'probabilites', title: 'Probabilités', icon: Dices, description: 'Probabilités conditionnelles, indépendance et variables aléatoires.' },
  { id: 9, slug: 'recurrence', title: 'Récurrence', icon: Repeat, description: 'Le raisonnement par récurrence : principes, méthodes et rédaction.' },
  { id: 10, slug: 'matrice', title: 'Matrice', icon: Grid, description: 'Calcul matriciel : opérations, inverse et puissances de matrices.' },
];

const getLinks = (slug: string) => {
  const base = "/formation/math/terminale-vers-prepa";

  // Mapping specifics for irregular slugs
  let slugBase = slug;
  if (slug === 'sommes-suites-produits') slugBase = 'sommes-suites';
  if (slug === 'derivées') slugBase = 'derivees';
  if (slug === 'integrale') slugBase = 'integrales'; // plural
  if (slug === 'matrice') slugBase = 'matrices'; // plural
  // 'calculs', 'suites', 'fonctions', 'limites', 'probabilites', 'recurrence' are regular or already match mapping

  // Correction specific overrides based on previous file logic:
  // integrale -> integrales (-cours, -exercices...)
  // matrice -> matrices
  // derivées -> derivees
  // sommes-suites-produits -> sommes-suites

  return {
    cours: `${base}/${slugBase}-cours`,
    exercices: `${base}/${slugBase}-exercices`,
    quiz: `${base}/${slugBase}-quiz`,
    flashcards: `${base}/${slugBase}-flashcards`
  };
};

const TerminaleVersPrepaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Floating elements - Refined & Sober */}
      <div className="absolute -z-10 top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 right-1/4 w-72 h-72 bg-blue-50/80 rounded-full blur-2xl"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Terminale vers Prépa</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 rotate-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
              Terminale <span className="text-blue-600 mx-2">→</span> Prépa
            </h1>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            La transition essentielle pour réussir. Méthodes de travail, organisation
            et consolidation des bases mathématiques avant la rentrée.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span>Objectif : Rentrée réussie</span>
          </div>
        </div>

        {/* Liste des chapitres */}
        <div className="max-w-5xl mx-auto space-y-4">
          {CHAPITRES.map((chap) => {
            const links = getLinks(chap.slug);

            return (
              <div
                key={chap.id}
                onClick={() => navigate(links.cours)}
                className="group block cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="flex items-center gap-5">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0 border border-blue-100/50">
                      <chap.icon className="h-5 w-5 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                          {chap.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium line-clamp-1">
                          {chap.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-wrap md:flex-nowrap flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                        <Link to={links.cours}>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-sm transition-all duration-200 h-9 px-4 text-xs">
                            <BookOpen className="mr-2 h-3.5 w-3.5" />
                            Cours
                          </Button>
                        </Link>

                        <Link to={links.exercices}>
                          <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                            <Play className="mr-2 h-3.5 w-3.5" />
                            Exercices
                          </Button>
                        </Link>

                        <Link to={links.flashcards}>
                          <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                            <Brain className="mr-2 h-3.5 w-3.5" />
                            Flashcards
                          </Button>
                        </Link>

                        <Link to={links.quiz}>
                          <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                            <Target className="mr-2 h-3.5 w-3.5" />
                            Quiz
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TerminaleVersPrepaPage;