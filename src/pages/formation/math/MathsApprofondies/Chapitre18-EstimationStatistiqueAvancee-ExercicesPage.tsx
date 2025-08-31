import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre18EstimationStatistiqueAvanceeExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
    stars,
    color = "blue"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
  }) => (
    <div className={`bg-gradient-to-r from-${color}-50 to-${color}-25 border-l-4 border-${color}-400 p-4 mb-4 rounded-r-lg shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 bg-${color}-500 text-white rounded-lg`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{level} : {title}</h2>
          <div className="flex gap-1 mt-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 fill-${color}-500 text-${color}-500`} />
            ))}
            {[...Array(4-stars)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-orange-600">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <Link to="/formations" className="hover:text-orange-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-orange-700 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <Link to="/formation/maths-approfondies-2e-annee" className="hover:text-orange-700 transition-colors">
              Maths Approfondies - 2ème année
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <Link to="/formation/maths-intervalles-confiance" className="hover:text-orange-700 transition-colors">
              Chapitre 18 - Intervalles de confiance
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <span className="text-orange-600 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 18 : Intervalles de confiance
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les intervalles de confiance, l'estimation statistique et les techniques d'estimation avancées
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-intervalles-confiance">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-intervalles-confiance-quiz">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <Target className="mr-2 h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Exercices */}
        <div className="space-y-8">
          {/* Exercice 18.1 - Estimation de l'espérance d'une loi normale */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 18.1"
                title="Estimation de l'espérance d'une loi normale de variance connue"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } X_1, \\ldots, X_n \\text{ des variables aléatoires i.i.d. suivant la loi normale d'espérance } \\theta \\text{ inconnue et de variance } 1\\text{.}"} />
                    <LatexRenderer latex={"\\text{On pose } \\overline{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Quelle est la loi de <LatexRenderer latex={"\\overline{X}_n"} /> ?</li>
                      <li>
                        <LatexRenderer latex={"\\text{Soit } \\alpha \\in ]0,1[ \\text{ et soit } t_\\alpha \\text{ l'unique réel tel que } \\Phi(t_\\alpha) = 1 - \\frac{\\alpha}{2}\\text{, où } \\Phi \\text{ est la fonction de répartition de } \\mathcal{N}(0,1)\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Montrer que } \\left[ \\overline{X}_n - \\frac{t_\\alpha}{\\sqrt{n}}, \\; \\overline{X}_n + \\frac{t_\\alpha}{\\sqrt{n}} \\right] \\text{ est un intervalle de confiance de } \\theta \\text{ au niveau de confiance } 1-\\alpha\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{On suppose à présent que les } X_i \\text{ suivent la loi } \\mathcal{N}(\\theta, \\sigma^2)\\text{, où } \\sigma^2 \\text{ est connu.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Sur le même principe, proposer un intervalle de confiance de } \\theta \\text{ au niveau de risque } \\alpha\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('1')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['1'] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['1'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Par stabilité des lois normales et indépendance des } X_i\\text{, on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\sum_{i=1}^n X_i \\sim \\mathcal{N}(n\\theta, n)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc, par transformation affine de lois normales :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\overline{X}_n \\sim \\mathcal{N}\\!\\left(\\theta, \\frac{1}{n}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ On calcule :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\left( \\overline{X}_n - \\frac{t_\\alpha}{\\sqrt{n}} \\leq \\theta \\leq \\overline{X}_n + \\frac{t_\\alpha}{\\sqrt{n}} \\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\left( \\overline{X}_n - \\frac{t_\\alpha}{\\sqrt{n}} \\leq \\theta \\leq \\overline{X}_n + \\frac{t_\\alpha}{\\sqrt{n}} \\right) = P\\!\\left( -\\frac{t_\\alpha}{\\sqrt{n}} \\leq \\theta - \\overline{X}_n \\leq \\frac{t_\\alpha}{\\sqrt{n}} \\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or la variable } \\sqrt{n}(\\overline{X}_n - \\theta) \\text{ suit } \\mathcal{N}(0,1)\\text{, donc}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left(-t_\\alpha \\leq \\sqrt{n}(\\overline{X}_n - \\theta) \\leq t_\\alpha \\right) = \\Phi(t_\\alpha) - \\Phi(-t_\\alpha) = 2\\Phi(t_\\alpha) - 1 = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\left( \\overline{X}_n - \\frac{t_\\alpha}{\\sqrt{n}} \\leq \\theta \\leq \\overline{X}_n + \\frac{t_\\alpha}{\\sqrt{n}} \\right) = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc } \\left[ \\overline{X}_n - \\frac{t_\\alpha}{\\sqrt{n}}, \\; \\overline{X}_n + \\frac{t_\\alpha}{\\sqrt{n}} \\right] \\text{ est bien un intervalle de confiance de } \\theta \\text{ au niveau de confiance } 1-\\alpha\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ Si } X_i \\sim \\mathcal{N}(\\theta, \\sigma^2)\\text{, alors } \\overline{X}_n \\sim \\mathcal{N}\\!\\left(\\theta, \\frac{\\sigma^2}{n}\\right)\\text{. Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\frac{\\sqrt{n}(\\overline{X}_n - \\theta)}{\\sigma} \\sim \\mathcal{N}(0,1)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On a alors :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left(-t_\\alpha \\leq \\frac{\\sqrt{n}(\\overline{X}_n - \\theta)}{\\sigma} \\leq t_\\alpha \\right) = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ce qui équivaut à :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\overline{X}_n - \\frac{\\sigma t_\\alpha}{\\sqrt{n}} \\leq \\theta \\leq \\overline{X}_n + \\frac{\\sigma t_\\alpha}{\\sqrt{n}} \\right) = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc un intervalle de confiance de } \\theta \\text{ est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left[ \\overline{X}_n - \\frac{\\sigma t_\\alpha}{\\sqrt{n}}, \\; \\overline{X}_n + \\frac{\\sigma t_\\alpha}{\\sqrt{n}} \\right]."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 18.2 - Estimation de probabilité avec Bernoulli */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 18.2"
                title="Estimation de probabilité avec loi de Bernoulli"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{On suppose que la probabilité qu'un individu contagieux transmette un virus à un individu sain est } p \\in (0,1)\\text{, inconnu, et que l'on cherche à l'évaluer.}"} />
                    <LatexRenderer latex={"\\text{Soit } (Y_n)_{n \\in \\mathbb{N}} \\text{ une suite de variables indépendantes et identiquement distribuées suivant la loi de Bernoulli de paramètre } p\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>
                        <LatexRenderer latex={"\\text{On pose } \\overline{Y}_n = \\frac{1}{n} \\sum_{i=1}^n Y_i\\text{.}"} />
                        <div className="ml-6 space-y-2">
                          <div>a) Montrer que <LatexRenderer latex={"\\overline{Y}_n"} /> est un estimateur sans biais de <LatexRenderer latex={"p"} />.</div>
                          <div>b) Déterminer le risque quadratique de <LatexRenderer latex={"\\overline{Y}_n"} /> en <LatexRenderer latex={"p"} />.</div>
                        </div>
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{À l'aide de l'inégalité de Bienaymé-Tchebychev, montrer que } \\left[ \\overline{Y}_n - \\sqrt{\\tfrac{5}{n}}, \\; \\overline{Y}_n + \\sqrt{\\tfrac{5}{n}} \\right] \\text{ est un intervalle de confiance de } p \\text{ au niveau de confiance } 0.95\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('2')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['2'] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['2'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.a)} \\text{ On a } \\mathbb{E}(\\overline{Y}_n) = \\frac{1}{n}\\sum_{i=1}^n \\mathbb{E}(Y_i) = p\\text{.}"} />
                      <LatexRenderer latex={"\\text{Donc } \\overline{Y}_n \\text{ est un estimateur sans biais de } p\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{1.b)} \\text{ Puisque } \\overline{Y}_n \\text{ est sans biais, son risque quadratique est } r(\\overline{Y}_n) = \\mathrm{Var}(\\overline{Y}_n)\\text{.}"} />
                      <LatexRenderer latex={"\\text{Par indépendance des } Y_i\\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(\\overline{Y}_n) = \\frac{1}{n^2}\\sum_{i=1}^n \\mathrm{Var}(Y_i) = \\frac{1}{n} p(1-p)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Par l'inégalité de Bienaymé-Tchebychev, pour tout } \\varepsilon > 0 \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(|\\overline{Y}_n - p| \\geq \\varepsilon) \\leq \\frac{p(1-p)}{n\\varepsilon^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Si l'on veut un intervalle de confiance de } \\overline{Y}_n \\text{ au niveau } 0.95\\text{, il faut :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(|\\overline{Y}_n - p| < \\varepsilon) \\geq 0.95 \\quad \\Longleftrightarrow \\quad \\frac{p(1-p)}{n\\varepsilon^2} \\leq 0.05."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Comme } p(1-p) \\leq \\tfrac{1}{4}\\text{, on majore :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\frac{1}{4n\\varepsilon^2} \\leq 0.05."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc } \\varepsilon \\geq \\sqrt{\\frac{1}{4n \\times 0.05}} = \\sqrt{\\frac{5}{n}}\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi, pour } \\varepsilon = \\sqrt{\\tfrac{5}{n}}\\text{, on obtient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\overline{Y}_n - \\sqrt{\\tfrac{5}{n}} \\leq p \\leq \\overline{Y}_n + \\sqrt{\\tfrac{5}{n}} \\right) \\geq 0.95."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc } \\left[ \\overline{Y}_n - \\sqrt{\\tfrac{5}{n}}, \\; \\overline{Y}_n + \\sqrt{\\tfrac{5}{n}} \\right] \\text{ est un intervalle de confiance de } p \\text{ au niveau de confiance } 0.95\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 18.3 - Intervalle de confiance asymptotique */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 18.3"
                title="Intervalle de confiance asymptotique avec TCL"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_i)_{i \\in \\mathbb{N}} \\text{ une suite de variables i.i.d. d'espérance } \\mu \\text{ inconnue et de variance } \\sigma^2 \\text{ connue.}"} />
                    <LatexRenderer latex={"\\text{Déterminer à l'aide du théorème central limite un intervalle de confiance asymptotique de } \\mu \\text{ au niveau de confiance } 1-\\alpha\\text{.}"} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('3')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['3'] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['3'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\text{Puisque les } X_i \\text{ sont i.i.d. et possèdent une variance finie, le théorème central limite s'applique :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\sqrt{n}\\,\\frac{\\overline{X}_n - \\mu}{\\sigma} \\;\\;\\overset{\\mathcal{L}}{\\longrightarrow}\\;\\; \\mathcal{N}(0,1),"} />
                      </div>
                      <LatexRenderer latex={"\\text{où } \\overline{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Soit } t_\\alpha \\text{ le réel tel que } \\Phi(t_\\alpha) = 1 - \\frac{\\alpha}{2}\\text{. Alors :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to \\infty} P\\!\\left( -t_\\alpha \\leq \\sqrt{n}\\,\\frac{\\overline{X}_n - \\mu}{\\sigma} \\leq t_\\alpha \\right) = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Autrement dit :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to \\infty} P\\!\\left( \\overline{X}_n - \\frac{\\sigma}{\\sqrt{n}}t_\\alpha \\leq \\mu \\leq \\overline{X}_n + \\frac{\\sigma}{\\sqrt{n}}t_\\alpha \\right) = 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, un intervalle de confiance } \\textbf{asymptotique} \\text{ de } \\mu \\text{ au niveau de confiance } 1-\\alpha \\text{ est}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left[ \\overline{X}_n - \\frac{\\sigma}{\\sqrt{n}}t_\\alpha,\\; \\overline{X}_n + \\frac{\\sigma}{\\sqrt{n}}t_\\alpha \\right]."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 18.4 - Estimation pour loi exponentielle */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 18.4"
                title="Estimation pour loi exponentielle"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } (X_i)_{i \\geq 1} \\text{ des variables aléatoires i.i.d. suivant la loi exponentielle } \\mathcal{E}(\\lambda) \\text{ où } \\lambda > 0 \\text{ est inconnu.}"} />
                    <LatexRenderer latex={"\\text{On pose } \\overline{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>
                        <LatexRenderer latex={"\\text{Montrer que } \\lambda \\sqrt{n}\\,\\overline{X}_n - \\sqrt{n} \\text{ converge en loi vers une variable suivant la loi normale centrée réduite.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{Soit } \\alpha \\in ]0,1[\\text{, et soit } t_\\alpha \\text{ l'unique réel tel que } \\Phi(t_\\alpha) = 1 - \\tfrac{\\alpha}{2}\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Montrer que } \\left[ \\left( 1 - \\frac{t_\\alpha}{\\sqrt{n}} \\right)\\frac{1}{\\overline{X}_n}, \\; \\left( 1 + \\frac{t_\\alpha}{\\sqrt{n}} \\right)\\frac{1}{\\overline{X}_n} \\right] \\text{ est un intervalle de confiance asymptotique de } \\lambda \\text{ au niveau de risque } \\alpha\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('4')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['4'] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['4'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Par le théorème central limite : les } X_i \\text{ sont i.i.d. avec}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X_i) = \\frac{1}{\\lambda}, \\qquad \\mathrm{Var}(X_i) = \\frac{1}{\\lambda^2}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc } \\mathbb{E}(\\overline{X}_n) = \\frac{1}{\\lambda}, \\qquad \\mathrm{Var}(\\overline{X}_n) = \\frac{1}{n\\lambda^2}\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{La variable centrée réduite associée est}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\overline{X}_n^* = \\sqrt{n}\\,\\lambda\\left(\\overline{X}_n - \\frac{1}{\\lambda}\\right) = \\lambda\\sqrt{n}\\,\\overline{X}_n - \\sqrt{n}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Par le TCL, } \\lambda\\sqrt{n}\\,\\overline{X}_n - \\sqrt{n} \\;\\overset{\\mathcal{L}}{\\longrightarrow}\\; \\mathcal{N}(0,1)\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Par convergence en loi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to \\infty} P\\!\\left(-t_\\alpha \\leq \\lambda \\sqrt{n}\\,\\overline{X}_n - \\sqrt{n} \\leq t_\\alpha \\right) = \\Phi(t_\\alpha) - \\Phi(-t_\\alpha) = 1 - \\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On peut réécrire :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"-t_\\alpha \\leq \\lambda \\sqrt{n}\\,\\overline{X}_n - \\sqrt{n} \\leq t_\\alpha \\quad \\iff \\quad \\left(1 - \\frac{t_\\alpha}{\\sqrt{n}}\\right) \\leq \\lambda \\overline{X}_n \\leq \\left(1 + \\frac{t_\\alpha}{\\sqrt{n}}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{En divisant par } \\overline{X}_n > 0\\text{, il vient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\left(1 - \\frac{t_\\alpha}{\\sqrt{n}}\\right)\\frac{1}{\\overline{X}_n} \\leq \\lambda \\leq \\left(1 + \\frac{t_\\alpha}{\\sqrt{n}}\\right)\\frac{1}{\\overline{X}_n} \\right) \\longrightarrow 1-\\alpha."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc un intervalle de confiance asymptotique de } \\lambda \\text{ au niveau de risque } \\alpha \\text{ est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left[ \\left(1 - \\frac{t_\\alpha}{\\sqrt{n}}\\right)\\frac{1}{\\overline{X}_n},\\; \\left(1 + \\frac{t_\\alpha}{\\sqrt{n}}\\right)\\frac{1}{\\overline{X}_n} \\right]."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 18.5 - Estimation avec loi uniforme */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 18.5"
                title="Estimation avec loi uniforme et maximum"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_i)_{i \\in \\mathbb{N}} \\text{ une suite de variables i.i.d. suivant la loi uniforme sur } [0,\\theta]\\text{, avec } \\theta \\text{ inconnu.}"} />
                    <LatexRenderer latex={"\\text{On pose } M_n = \\max(X_1,\\dots,X_n)\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Déterminer la fonction de répartition de <LatexRenderer latex={"M_n"} />.</li>
                      <li>
                        <LatexRenderer latex={"\\text{Montrer que pour } \\theta > 0\\text{, il existe deux uniques réels } x_1 \\text{ et } x_2\\text{, que l'on exprimera en fonction de } \\theta\\text{, tels que } F_{M_n}(x_1) = 0.025 \\text{ et } F_{M_n}(x_2) = 0.975\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{En déduire un intervalle de confiance de } \\theta \\text{ au niveau de confiance } 0.95\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{Proposer un autre intervalle de confiance de } \\theta \\text{ au niveau de confiance } 0.95\\text{, de la forme } [M_n, U_n]\\text{, où } U_n \\text{ est à déterminer.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Plus difficile : lequel de ces deux intervalles possède l'étendue la plus faible ?}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('5')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['5'] ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['5'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ On a pour tout } x \\in \\mathbb{R}\\text{, la fonction de répartition de } X_i \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X}(x) = \\begin{cases} 0 & \\text{si } x < 0, \\\\ \\tfrac{x}{\\theta} & \\text{si } 0 \\leq x \\leq \\theta, \\\\ 1 & \\text{si } x > \\theta. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Comme les } X_i \\text{ sont indépendants :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x) = P(M_n \\leq x) = P\\!\\left( \\bigcap_{i=1}^n \\{X_i \\leq x\\}\\right) = \\prod_{i=1}^n P(X_i \\leq x) = \\left( \\frac{x}{\\theta}\\right)^n, \\quad 0 \\leq x \\leq \\theta."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x) = \\begin{cases} 0 & \\text{si } x < 0, \\\\ \\left(\\tfrac{x}{\\theta}\\right)^n & \\text{si } 0 \\leq x \\leq \\theta, \\\\ 1 & \\text{si } x > \\theta. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ } F_{M_n} \\text{ est une bijection croissante de } [0,\\theta] \\text{ sur } [0,1]\\text{. Donc il existe } x_1, x_2 \\text{ tels que}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x_1) = 0.025 \\quad \\iff \\quad x_1 = \\theta \\cdot 0.025^{1/n},"} />
                      </div>
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x_2) = 0.975 \\quad \\iff \\quad x_2 = \\theta \\cdot 0.975^{1/n}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ Par définition :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(x_1 < M_n < x_2) = F_{M_n}(x_2) - F_{M_n}(x_1) = 0.975 - 0.025 = 0.95."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\frac{M_n}{0.975^{1/n}} \\leq \\theta \\leq \\frac{M_n}{0.025^{1/n}} \\right) = 0.95."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, un intervalle de confiance de } \\theta \\text{ au niveau } 0.95 \\text{ est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left[ \\frac{M_n}{0.975^{1/n}}, \\; \\frac{M_n}{0.025^{1/n}} \\right]."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{4.} \\text{ On a aussi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\theta \\cdot (0.05)^{1/n} < M_n < \\theta \\right) = 0.95,"} />
                      </div>
                      <LatexRenderer latex={"\\text{donc}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P\\!\\left( \\frac{M_n}{0.05^{1/n}} \\leq \\theta \\leq M_n \\right) = 0.95."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ce qui donne un autre intervalle de confiance :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left[ M_n,\\; \\frac{M_n}{0.05^{1/n}} \\right]."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Comparaison des étendues.} \\text{ L'étendue du premier intervalle est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"L_1 = M_n\\!\\left( \\frac{1}{0.025^{1/n}} - \\frac{1}{0.975^{1/n}} \\right)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Celle du second est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"L_2 = M_n\\!\\left( \\frac{1}{0.05^{1/n}} - 1 \\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{En utilisant la convexité de } f(x) = \\tfrac{1}{x^{1/n}}\\text{, on démontre que } L_2 < L_1\\text{. Donc le second intervalle est plus } \\emph{précis}\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-intervalles-confiance">
              <Button className="bg-slate-700 hover:bg-slate-800 text-white transition-colors">
                Accéder au cours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapitre18EstimationStatistiqueAvanceeExercicesPage;
