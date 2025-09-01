import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre12ConvergencesApproximationsExercicesPage = () => {
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
            <Link to="/formation/maths-convergences-approximations" className="hover:text-orange-700 transition-colors">
              Chapitre 12 - Convergences et approximations
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
              Exercices - Chapitre 12 : Convergences et approximations
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les différents types de convergence et les théorèmes limites en probabilités
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-convergences-approximations">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-convergences-approximations-quiz">
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
          {/* Exercice 14.1 - Convergence en loi vers une constante */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.1"
                title="Convergence en loi vers une constante"
                icon={Target}
                stars={2}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } X_n \\sim \\mathcal{N}\\!\\left(m,\\tfrac{\\sigma^2}{n}\\right) \\text{ où } m \\in \\mathbb{R} \\text{ et } \\sigma > 0\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que } X_n \\xrightarrow{\\mathcal{L}} X \\text{ où } X \\text{ est la variable constante égale à } m\\text{.}"} />
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
                      <LatexRenderer latex={"\\text{On écrit :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(X_n \\leq x) = P(X_n - m \\leq x - m) = P\\!\\left(\\frac{X_n - m}{\\tfrac{\\sigma}{\\sqrt{n}}} \\leq \\frac{x - m}{\\tfrac{\\sigma}{\\sqrt{n}}}\\right) = \\Phi\\!\\left(\\sqrt{n}\\,\\frac{x - m}{\\sigma}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Cas 1 : } x < m\\text{.}"} />
                      <LatexRenderer latex={"\\text{Alors } \\dfrac{x - m}{\\sigma} < 0\\text{, et donc } \\sqrt{n}\\,\\frac{x - m}{\\sigma} \\xrightarrow[n\\to+\\infty]{} -\\infty\\text{,}"} />
                      <LatexRenderer latex={"\\text{de sorte que } P(X_n \\leq x) \\xrightarrow[n\\to+\\infty]{} 0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{Cas 2 : } x > m\\text{.}"} />
                      <LatexRenderer latex={"\\text{Alors } \\dfrac{x - m}{\\sigma} > 0\\text{, et donc } \\sqrt{n}\\,\\frac{x - m}{\\sigma} \\xrightarrow[n\\to+\\infty]{} +\\infty\\text{,}"} />
                      <LatexRenderer latex={"\\text{d'où } P(X_n \\leq x) \\xrightarrow[n\\to+\\infty]{} 1\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi, pour } x \\neq m\\text{, } F_n(x) \\text{ converge vers } F_X(x)\\text{, où } X \\text{ est la variable constante égale à } m\\text{.}"} />
                      <LatexRenderer latex={"\\text{Comme } F_X \\text{ n'est pas continue en } x=m\\text{, il n'est pas utile de considérer la limite de } F_n(m)\\text{.}"} />
                      
                      <div className="text-center my-4">
                        <LatexRenderer latex={"X_n \\xrightarrow{\\mathcal{L}} X."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.2 - Inégalité de Bienaymé-Tchebychev et intégrale convergente */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.2"
                title="Inégalité de Bienaymé-Tchebychev et intégrale convergente"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{On note } \\Phi \\text{ la fonction de répartition d'une variable aléatoire suivant la loi } \\mathcal{N}(0,1)\\text{.}"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>
                        <LatexRenderer latex={"\\text{Montrer à l'aide de l'inégalité de Bienaymé–Tchebychev que } \\forall x \\in \\mathbb{R}^*, \\; 1 - \\Phi(x) \\leq \\dfrac{1}{2x^2}\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{En déduire que } \\displaystyle \\int_0^{+\\infty} (1 - \\Phi(t)) \\, dt \\text{ converge et calculer sa valeur à l'aide d'une intégration par parties.}"} />
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
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Soit } X \\text{ une variable aléatoire suivant la loi } \\mathcal{N}(0,1)\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Alors } 1 - \\Phi(x) = P(X > x)\\text{. Par symétrie de } \\Phi\\text{, on a } P(X > x) = P(X < -x)\\text{, et donc}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"1 - \\Phi(x) = \\tfrac{1}{2} P(|X| > x)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Par l'inégalité de Bienaymé–Tchebychev :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(|X| > x) \\leq \\frac{V(X)}{x^2} = \\frac{1}{x^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On en déduit :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"1 - \\Phi(x) \\leq \\frac{1}{2x^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ La fonction } t \\mapsto 1 - \\Phi(t) \\text{ est continue et positive sur } \\mathbb{R}_+\\text{. Comme } \\int_0^{+\\infty} \\dfrac{dt}{2t^2} \\text{ est convergente, il en est de même de}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^{+\\infty} (1 - \\Phi(t)) \\, dt."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Soit } A > 0\\text{. Procédons à une intégration par parties sur } [0,A]\\text{.}"} />
                      <LatexRenderer latex={"\\text{Posons } u(t) = 1 - \\Phi(t) \\text{ et } dv = dt\\text{. Alors}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"du = -\\varphi(t)\\, dt = -\\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2} dt, \\quad v = t,"} />
                      </div>
                      <LatexRenderer latex={"\\text{où } \\varphi(t) \\text{ est la densité de la loi normale centrée réduite.}"} />
                      
                      <LatexRenderer latex={"\\text{On obtient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^A (1 - \\Phi(t)) \\, dt = \\Bigl[ t(1 - \\Phi(t)) \\Bigr]_0^A + \\frac{1}{\\sqrt{2\\pi}} \\int_0^A t e^{-t^2/2} \\, dt."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^A t e^{-t^2/2} \\, dt = \\Bigl[-e^{-t^2/2} \\Bigr]_0^A = 1 - e^{-A^2/2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Lorsque } A \\to +\\infty\\text{, on sait que } 0 \\leq A(1 - \\Phi(A)) \\leq \\tfrac{1}{2A} \\to 0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^{+\\infty} (1 - \\Phi(t)) \\, dt = \\frac{1}{\\sqrt{2\\pi}}."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.5 - Convergence en probabilité */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.5"
                title="Convergence en probabilité par inégalité de Markov"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_n) \\text{ une suite de variables aléatoires à valeurs positives, ayant toutes une espérance et une variance.}"} />
                    <LatexRenderer latex={"\\text{On suppose que } \\lim_{n \\to +\\infty} \\mathbb{E}(X_n) = m \\text{ et } \\lim_{n \\to +\\infty} V(X_n) = 0\\text{.}"} />
                    <LatexRenderer latex={"\\text{En appliquant l'inégalité de Markov à } (X_n - m)^2\\text{, montrer que } X_n \\xrightarrow{\\mathbb{P}} m\\text{.}"} />
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
                      <LatexRenderer latex={"\\text{Notons que } (X_n - m)^2 \\text{ est positive et admet une espérance car :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"(X_n - m)^2 = X_n^2 - 2mX_n + m^2,"} />
                      </div>
                      <LatexRenderer latex={"\\text{et que } X_n \\text{ admet un moment d'ordre } 2\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{En particulier :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}\\!\\left[(X_n - m)^2\\right] = \\mathbb{E}(X_n^2) - 2m\\mathbb{E}(X_n) + m^2."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X_n^2) = V(X_n) + \\big(\\mathbb{E}(X_n)\\big)^2."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}\\!\\left[(X_n - m)^2\\right] = V(X_n) + \\mathbb{E}(X_n)^2 - 2m\\mathbb{E}(X_n) + m^2."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{D'après l'inégalité de Markov, pour tout } \\varepsilon > 0 \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(|X_n - m| \\geq \\varepsilon) = \\mathbb{P}\\big((X_n - m)^2 \\geq \\varepsilon^2\\big) \\leq \\frac{\\mathbb{E}\\!\\left[(X_n - m)^2\\right]}{\\varepsilon^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(|X_n - m| \\geq \\varepsilon) \\leq \\frac{V(X_n) + \\mathbb{E}(X_n)^2 - 2m\\mathbb{E}(X_n) + m^2}{\\varepsilon^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Mais lorsque } n \\to +\\infty\\text{, on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X_n)^2 - 2m\\mathbb{E}(X_n) + m^2 = (\\mathbb{E}(X_n) - m)^2 \\to 0,"} />
                      </div>
                      <LatexRenderer latex={"\\text{et } V(X_n) \\to 0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\mathbb{P}(|X_n - m| \\geq \\varepsilon) = 0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On conclut donc que :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"X_n \\xrightarrow{\\mathbb{P}} m."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.6 - Convergence en loi d'un minimum */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.6"
                title="Convergence en loi d'un minimum de lois géométriques"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_n) \\text{ une suite de variables aléatoires indépendantes suivant toutes la loi géométrique de paramètre } p \\in ]0,1[\\text{.}"} />
                    <LatexRenderer latex={"\\text{On pose alors } Y_n = \\min(X_1, \\dots, X_n)\\text{.}"} />
                    <LatexRenderer latex={"\\text{Étudier la convergence en loi de } (Y_n)_{n \\geq 1}\\text{.}"} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('6')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['6'] ? (
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
              {visibleCorrections['6'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\text{On sait que pour } k \\in \\mathbb{N}^* \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(Y_n \\geq k) = P\\!\\left(\\bigcap_{i=1}^n \\{X_i \\geq k\\}\\right)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Par indépendance des } X_i\\text{, il vient}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(Y_n \\geq k) = \\prod_{i=1}^n P(X_i \\geq k) = \\big(P(X_1 \\geq k)\\big)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or, nous savons que :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(X_1 \\geq k) = \\sum_{i=k}^{+\\infty} P(X_1 = i) = \\sum_{i=k}^{+\\infty} p(1-p)^{i-1} = (1-p)^{k-1}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(Y_n \\geq k) = \\big((1-p)^{k-1}\\big)^n = (1-p)^{n(k-1)}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On en déduit alors :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(Y_n = k) = P(Y_n \\geq k) - P(Y_n \\geq k+1) = (1-p)^{n(k-1)} \\big(1 - (1-p)^n\\big)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Puisque les } Y_n \\text{ sont à valeurs dans } \\mathbb{N}^*\\text{, il suffit d'étudier la limite de } P(Y_n = k) \\text{ quand } n \\to +\\infty\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Or, comme } (1-p) \\in ]0,1[\\text{, on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} (1-p)^n = 0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} P(Y_n = k) = \\begin{cases} 1 & \\text{si } k=1, \\\\ 0 & \\text{sinon}. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On conclut donc que :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"Y_n \\xrightarrow{\\mathcal{L}} 1."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.7 - Loi de Gumbel */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.7"
                title="Convergence vers la loi de Gumbel"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } f : x \\mapsto \\dfrac{e^x}{(1+e^x)^2}\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que f est une densité de probabilité.</li>
                      <li>
                        <LatexRenderer latex={"\\text{Soit à présent } (X_n)_{n \\in \\mathbb{N}} \\text{ une suite de variables i.i.d. de densité } f\\text{.}"} />
                        <div className="ml-6 space-y-2">
                          <div>(a) Déterminer la fonction de répartition des Xᵢ.</div>
                          <div>(b) En déduire la fonction de répartition de Mₙ = max(X₁, ..., Xₙ).</div>
                          <div>
                            <LatexRenderer latex={"\\text{(c) Étudier la convergence en loi de la suite } (M_n - \\ln(n))_{n \\in \\mathbb{N}}\\text{.}"} />
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('7')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['7'] ? (
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
              {visibleCorrections['7'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Il est évident que } f \\text{ est positive et continue sur } \\mathbb{R}\\text{.}"} />
                      <LatexRenderer latex={"\\text{De plus, pour } A < B\\text{, on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_A^B f(t)\\, dt = \\int_A^B \\frac{e^t}{(1+e^t)^2} \\, dt = \\left[ -\\frac{1}{1+e^t} \\right]_A^B = \\frac{1}{1+e^A} - \\frac{1}{1+e^B}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} f(t)\\, dt = \\lim_{A \\to -\\infty, B \\to +\\infty} \\left(\\frac{1}{1+e^A} - \\frac{1}{1+e^B}\\right) = 1."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi } f \\text{ est bien une densité de probabilité.}"} />
                      
                      <LatexRenderer latex={"\\textbf{2.a.} \\text{ Pour } x \\in \\mathbb{R}\\text{, la fonction de répartition est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_X(x) = \\int_{-\\infty}^x f(t)\\, dt = \\lim_{A \\to -\\infty} \\int_A^x \\frac{e^t}{(1+e^t)^2}\\, dt = \\lim_{A \\to -\\infty} \\left[ -\\frac{1}{1+e^t} \\right]_A^x."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On en déduit :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_X(x) = 1 - \\frac{1}{1+e^x} = \\frac{e^x}{1+e^x}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.b.} \\text{ Pour } x \\in \\mathbb{R} \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x) = P(M_n \\leq x) = P\\Big(\\max(X_1, \\dots, X_n) \\leq x\\Big)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Comme les } X_i \\text{ sont indépendants :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x) = \\prod_{i=1}^n P(X_i \\leq x) = \\big(F_X(x)\\big)^n = \\left(\\frac{e^x}{1+e^x}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.c.} \\text{ Pour } x \\in \\mathbb{R} \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(M_n - \\ln(n) \\leq x) = P(M_n \\leq x + \\ln(n)) = \\left(\\frac{e^{x+\\ln(n)}}{1+e^{x+\\ln(n)}}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On simplifie :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n - \\ln(n)}(x) = \\left(\\frac{ne^x}{1+ne^x}\\right)^n = \\left(1 - \\frac{1}{1+ne^x}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Quand } n \\to +\\infty\\text{, on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"n\\left(1 - \\frac{1}{1+ne^x}\\right) \\sim ne^x \\cdot \\frac{1}{1+ne^x} \\to e^x."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left(1 - \\frac{1}{1+ne^x}\\right)^n \\xrightarrow[n \\to +\\infty]{} e^{-e^{-x}}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi la loi limite est donnée par la fonction de répartition :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F(x) = e^{-e^{-x}}, \\quad x \\in \\mathbb{R},"} />
                      </div>
                      <LatexRenderer latex={"\\text{qui est la } \\textbf{loi de Gumbel}\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{On conclut :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"M_n - \\ln(n) \\xrightarrow{\\mathcal{L}} \\text{Gumbel}."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.13 - Théorème central limite et intégrales */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.13"
                title="Théorème central limite et intégrales (D'après EDHEC 2007)"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{On considère une suite } (X_n)_{n \\geq 1} \\text{ de variables aléatoires définies sur le même espace probabilisé } (\\Omega, \\mathcal{A}, \\mathbb{P})\\text{, mutuellement indépendantes, et qui suivent toutes la loi exponentielle de paramètre } 1\\text{.}"} />
                    
                    <LatexRenderer latex={"\\text{On pose : } S_n = \\sum_{i=1}^n X_i\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Rappeler quelle est la loi suivie par Sₙ. Donner l'espérance et la variance de Sₙ.</li>
                      <li>
                        <LatexRenderer latex={"\\text{À l'aide du théorème de la limite centrale, établir que } \\lim_{n \\to +\\infty} \\mathbb{P}(S_n \\leq n) = \\frac{1}{2}\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{En déduire un équivalent lorsque } n \\to +\\infty \\text{ de } \\int_0^n \\frac{t^{n-1}}{(n-1)!} e^{-t} \\, dt\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('13')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['13'] ? (
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
              {visibleCorrections['13'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Les } X_i \\text{ suivent la loi exponentielle } \\mathcal{E}(1)\\text{, qui est aussi la loi } \\gamma(1)\\text{.}"} />
                      <LatexRenderer latex={"\\text{Comme les } X_i \\text{ sont indépendantes, on sait que :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"S_n = \\sum_{i=1}^n X_i \\sim \\gamma(n)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{En particulier :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(S_n) = n, \\quad V(S_n) = n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Notons la variable centrée réduite associée à } S_n \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"Z_n = \\frac{S_n - \\mathbb{E}(S_n)}{\\sqrt{V(S_n)}} = \\frac{S_n - n}{\\sqrt{n}}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{D'après le théorème central limite (les } X_i \\text{ sont i.i.d. et admettent une variance), on a :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"Z_n \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,1)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{En particulier :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\mathbb{P}\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\leq 0\\right) = \\mathbb{P}(Z \\leq 0) = \\frac{1}{2},"} />
                      </div>
                      <LatexRenderer latex={"\\text{où } Z \\sim \\mathcal{N}(0,1)\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Mais :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\leq 0\\right) = \\mathbb{P}(S_n - n \\leq 0) = \\mathbb{P}(S_n \\leq n)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\mathbb{P}(S_n \\leq n) = \\frac{1}{2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ La densité de } S_n \\text{ est donnée par :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"f_n(t) = \\begin{cases} 0, & t < 0, \\\\ \\dfrac{t^{n-1}}{(n-1)!} e^{-t}, & t \\geq 0. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(S_n \\leq n) = \\int_0^n f_n(t)\\, dt = \\int_0^n \\frac{t^{n-1}}{(n-1)!} e^{-t}\\, dt."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or, la question 2 a montré que :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\int_0^n \\frac{t^{n-1}}{(n-1)!} e^{-t}\\, dt = \\frac{1}{2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^n \\frac{t^{n-1}}{(n-1)!} e^{-t}\\, dt \\sim \\frac{1}{2} \\quad (n \\to +\\infty)."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.17 - Maximum de lois uniformes */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.17"
                title="Maximum de lois uniformes et loi exponentielle"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (U_n)_{n \\in \\mathbb{N}} \\text{ une suite de variables aléatoires indépendantes suivant toutes la loi uniforme sur } [0,1]\\text{.}"} />
                    
                    <LatexRenderer latex={"\\text{On note } M_n \\text{ et } X_n \\text{ les variables aléatoires définies par :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"M_n = \\max(U_1, \\dots, U_n), \\qquad X_n = n(1 - M_n)."} />
                    </div>
                    
                    <LatexRenderer latex={"\\text{Étudier la convergence en loi de la suite } (X_n)_{n \\in \\mathbb{N}}\\text{.}"} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('17')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['17'] ? (
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
              {visibleCorrections['17'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\text{On sait que la fonction de répartition de } M_n \\text{ est :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}(x) = \\begin{cases} 0 & \\text{si } x < 0, \\\\ x^n & \\text{si } x \\in [0,1], \\\\ 1 & \\text{si } x > 1. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Alors, pour tout } x \\in \\mathbb{R} \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = \\mathbb{P}(X_n \\leq x) = \\mathbb{P}(n(1-M_n) \\leq x) = \\mathbb{P}\\!\\left(M_n \\geq 1 - \\frac{x}{n}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = 1 - F_{M_n}\\!\\left(1 - \\frac{x}{n}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Cas 1 : } x < 0\\text{.}"} />
                      <LatexRenderer latex={"\\text{Alors } 1 - \\tfrac{x}{n} > 1\\text{, donc } F_{M_n}(1 - x/n) = 1\\text{, et ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = 0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Cas 2 : } 0 \\leq x \\leq n\\text{.}"} />
                      <LatexRenderer latex={"\\text{Alors } 0 \\leq 1 - \\tfrac{x}{n} \\leq 1\\text{, et donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{M_n}\\!\\left(1 - \\tfrac{x}{n}\\right) = \\left(1 - \\frac{x}{n}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = 1 - \\left(1 - \\frac{x}{n}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Cas 3 : } x > n\\text{.}"} />
                      <LatexRenderer latex={"\\text{Alors } 1 - \\tfrac{x}{n} < 0\\text{, donc } F_{M_n}(1 - x/n) = 0\\text{, et :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = 1."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Étude de la limite :}"} />
                      <LatexRenderer latex={"\\text{Si } x < 0\\text{, alors } F_{X_n}(x) = 0 \\to 0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Si } x > 0 \\text{ fixé, pour } n \\text{ suffisamment grand } x < n\\text{, et donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{X_n}(x) = 1 - \\left(1 - \\frac{x}{n}\\right)^n."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\left(1 - \\frac{x}{n}\\right)^n = e^{-x}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} F_{X_n}(x) = 1 - e^{-x}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On reconnaît la fonction de répartition d'une loi exponentielle de paramètre } 1\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"X_n \\xrightarrow{\\mathcal{L}} \\mathcal{E}(1)."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 14.22 - Convergence en probabilités implique convergence en loi */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 14.22"
                title="Convergence en probabilités implique convergence en loi (Oral HEC)"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } (X_n)_{n \\geq 1} \\text{ et } X \\text{ des variables aléatoires définies sur un espace probabilisé } (\\Omega, \\mathcal{A}, \\mathbb{P}) \\text{ telles que } X_n \\xrightarrow{\\mathbb{P}} X\\text{.}"} />
                    
                    <LatexRenderer latex={"\\text{On note } F_n \\text{ la fonction de répartition de } X_n\\text{, et } F \\text{ la fonction de répartition de } X\\text{.}"} />
                    
                    <LatexRenderer latex={"\\text{Soit } x \\text{ un point de continuité de } F\\text{, et soit } \\delta > 0 \\text{ fixé.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>
                        <LatexRenderer latex={"\\text{Montrer qu'on peut choisir } \\varepsilon > 0 \\text{ tel que } F(x-\\varepsilon) > F(x) - \\delta \\text{ et } F(x+\\varepsilon) < F(x) + \\delta\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{Montrer que } \\{X_n \\leq x\\} \\subset \\{X \\leq x+\\varepsilon\\} \\cup \\{|X_n - X| > \\varepsilon\\}\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{Montrer de même que } \\{X \\leq x - \\varepsilon\\} \\subset \\{X_n \\leq x\\} \\cup \\{|X_n - X| > \\varepsilon\\}\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{En déduire que } F_n(x) \\leq F(x+\\varepsilon) + \\mathbb{P}(|X_n - X| > \\varepsilon), \\quad F_n(x) \\geq F(x-\\varepsilon) - \\mathbb{P}(|X_n - X| > \\varepsilon)\\text{.}"} />
                      </li>
                      <li>
                        <LatexRenderer latex={"\\text{Conclure que } X_n \\xrightarrow{\\mathcal{L}} X\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('22')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['22'] ? (
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
              {visibleCorrections['22'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Puisque } F \\text{ est continue en } x\\text{, il existe } \\eta > 0 \\text{ tel que pour tout } \\varepsilon \\in ]-\\eta, \\eta[\\text{,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"|F(x+\\varepsilon) - F(x)| < \\delta."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{En particulier, pour un tel } \\varepsilon > 0 \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F(x-\\varepsilon) > F(x) - \\delta, \\quad F(x+\\varepsilon) < F(x) + \\delta."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Si } X_n \\leq x\\text{, alors soit } X \\leq x+\\varepsilon\\text{, soit } |X_n - X| > \\varepsilon\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{En effet, si } |X_n - X| \\leq \\varepsilon\\text{, alors :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"X \\leq X_n + |X_n - X| \\leq x + \\varepsilon."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\{X_n \\leq x\\} \\subset \\{X \\leq x+\\varepsilon\\} \\cup \\{|X_n - X| > \\varepsilon\\}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ De même, si } X \\leq x-\\varepsilon\\text{, alors soit } X_n \\leq x\\text{, soit } |X_n - X| > \\varepsilon\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\{X \\leq x-\\varepsilon\\} \\subset \\{X_n \\leq x\\} \\cup \\{|X_n - X| > \\varepsilon\\}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{4.} \\text{ En passant aux probabilités, on obtient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_n(x) = \\mathbb{P}(X_n \\leq x) \\leq F(x+\\varepsilon) + \\mathbb{P}(|X_n - X| > \\varepsilon),"} />
                      </div>
                      <LatexRenderer latex={"\\text{et}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_n(x) \\geq F(x-\\varepsilon) - \\mathbb{P}(|X_n - X| > \\varepsilon)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F(x) - \\delta - \\mathbb{P}(|X_n - X| > \\varepsilon) \\leq F_n(x) \\leq F(x) + \\delta + \\mathbb{P}(|X_n - X| > \\varepsilon)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{5.} \\text{ Or } X_n \\xrightarrow{\\mathbb{P}} X\\text{, donc pour } n \\text{ assez grand, } \\mathbb{P}(|X_n - X| > \\varepsilon) < \\delta\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"|F_n(x) - F(x)| \\leq 2\\delta."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Comme } \\delta > 0 \\text{ est arbitraire, on obtient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\lim_{n \\to +\\infty} F_n(x) = F(x)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"X_n \\xrightarrow{\\mathcal{L}} X."} />
                      </div>
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
            <Link to="/formation/maths-convergences-approximations">
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

export default Chapitre12ConvergencesApproximationsExercicesPage;
