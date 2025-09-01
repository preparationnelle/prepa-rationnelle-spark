import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre14TheorieEstimationStatistiqueExercicesPage = () => {
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
            <Link to="/formation/maths-theorie-estimation-statistique" className="hover:text-orange-700 transition-colors">
              Chapitre 14 - Théorie de l'estimation statistique
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
              Exercices - Chapitre 14 : Théorie de l'estimation statistique
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices fondamentaux sur les estimateurs sans biais, le risque quadratique, le maximum de vraisemblance et la convergence des estimateurs
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-theorie-estimation-statistique">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-theorie-estimation-statistique-quiz">
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
          {/* Exercice 16.1 - Comparaison d'estimateurs pour loi exponentielle */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.1"
                title="Comparaison d'estimateurs pour loi exponentielle"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_n)_{n \\geq 1} \\text{ une suite de variables aléatoires indépendantes suivant la loi exponentielle } \\mathcal{E}(\\lambda)\\text{. On pose }"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\overline{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i \\quad \\text{et} \\quad T_n = \\frac{1}{n+1} \\sum_{i=1}^n X_i."} />
                    </div>
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Calculer le biais de chacun de ces estimateurs de <LatexRenderer latex={"\\frac{1}{\\lambda}"} />.</li>
                      <li>Comparer les risques quadratiques de <LatexRenderer latex={"\\overline{X}_n"} /> et <LatexRenderer latex={"T_n"} />, en tant qu'estimateurs de <LatexRenderer latex={"\\tfrac{1}{\\lambda}"} />.</li>
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
                      <LatexRenderer latex={"\\textbf{1.} \\text{ On sait déjà que } \\overline{X}_n \\text{ est sans biais.}"} />
                      
                      <LatexRenderer latex={"\\text{Comme } T_n = \\frac{n}{n+1}\\,\\overline{X}_n\\text{, on obtient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}[T_n] = \\frac{n}{n+1}\\, \\mathbb{E}[\\overline{X}_n] = \\frac{n}{n+1}\\cdot \\frac{1}{\\lambda}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc le biais de } T_n \\text{ en } \\tfrac{1}{\\lambda} \\text{ est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"b(T_n) = \\frac{n}{n+1}\\cdot \\frac{1}{\\lambda} - \\frac{1}{\\lambda} = -\\frac{1}{\\lambda(n+1)}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Comme les } X_i \\text{ sont indépendants,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(\\overline{X}_n) = \\frac{1}{n^2}\\mathrm{Var}\\!\\left(\\sum_{i=1}^n X_i\\right) = \\frac{1}{n^2} \\cdot n \\mathrm{Var}(X_1) = \\frac{1}{n\\lambda^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, le risque quadratique de } \\overline{X}_n \\text{ est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"r(\\overline{X}_n) = b(\\overline{X}_n)^2 + \\mathrm{Var}(\\overline{X}_n) = 0 + \\frac{1}{n\\lambda^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Pour } T_n\\text{, on a }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(T_n) = \\left(\\frac{n}{n+1}\\right)^2 \\mathrm{Var}(\\overline{X}_n) = \\frac{n}{(n+1)^2 \\lambda^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"r(T_n) = b(T_n)^2 + \\mathrm{Var}(T_n) = \\frac{1}{(n+1)^2\\lambda^2} + \\frac{n}{(n+1)^2 \\lambda^2} = \\frac{1}{(n+1)\\lambda^2}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{Conclusion :} \\text{ bien que } T_n \\text{ soit biaisé, son risque quadratique est plus faible que celui de } \\overline{X}_n\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 16.2 - Estimateur de e^{-λ} pour loi de Poisson */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.2"
                title="Estimateur de e^{-λ} pour loi de Poisson"
                icon={Target}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_k)_{k\\ge1} \\text{ un échantillon i.i.d. de loi de Poisson de paramètre } \\lambda>0\\text{.}"} />
                    <LatexRenderer latex={"\\text{On pose pour } n\\ge2 \\text{ :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"S_n=\\sum_{k=1}^n X_k, \\qquad Y_n = e^{-S_n/n}."} />
                    </div>
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"Y_n"} /> est-il un estimateur sans biais de <LatexRenderer latex={"e^{-\\lambda}"} /> ?</li>
                      <li>Est-il asymptotiquement sans biais ?</li>
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
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Par stabilité des lois de Poisson, } S_n\\sim \\mathrm{Poi}(n\\lambda)\\text{.}"} />
                      <LatexRenderer latex={"\\text{Pour } t\\in\\mathbb{R}\\text{, la f.g. (ou p.g.f.) d'une Poisson}(\\mu) \\text{ est } \\mathbb{E}(t^{N})=\\exp\\!\\big(\\mu(t-1)\\big)\\text{. En prenant } t=e^{-1/n}\\text{,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(Y_n)=\\mathbb{E}\\!\\left(e^{-S_n/n}\\right) =\\mathbb{E}\\!\\left((e^{-1/n})^{S_n}\\right) =\\exp\\!\\big(n\\lambda(e^{-1/n}-1)\\big)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, le biais de } Y_n \\text{ comme estimateur de } e^{-\\lambda} \\text{ vaut }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"b(Y_n)=\\mathbb{E}(Y_n)-e^{-\\lambda} =\\exp\\!\\big(n\\lambda(e^{-1/n}-1)\\big)-e^{-\\lambda}\\neq 0 \\quad (\\text{pour } n<\\infty)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc } Y_n \\text{ n'est pas sans biais.}"} />
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Développement limité en } 0 \\text{ : } e^{-1/n}=1-\\tfrac1n+o\\!\\left(\\tfrac1n\\right)\\text{. Alors }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"n\\lambda\\big(e^{-1/n}-1\\big) =n\\lambda\\!\\left(-\\tfrac1n+o\\!\\left(\\tfrac1n\\right)\\right) \\to -\\lambda,"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{et, par continuité de l'exponentielle,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(Y_n)=\\exp\\!\\big(n\\lambda(e^{-1/n}-1)\\big)\\longrightarrow e^{-\\lambda}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Par conséquent, } b(Y_n)\\to 0 \\text{ et } Y_n \\text{ est } \\emph{asymptotiquement} \\text{ sans biais pour } e^{-\\lambda}\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 16.3 - Estimation avec loi uniforme */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.3"
                title="Estimation avec loi uniforme et minimum"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_i)_{i\\ge1} \\text{ une suite i.i.d. de loi uniforme sur } [a,b]\\text{, avec } b \\text{ connu et } a \\text{ à estimer.}"} />
                    <LatexRenderer latex={"\\text{Pour } n\\ge1\\text{, on pose } Y_n=\\min(X_1,\\dots,X_n)\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que <LatexRenderer latex={"Y_n"} /> est une v.a. à densité et en donner une densité.</li>
                      <li>Calculer <LatexRenderer latex={"\\mathbb{E}(Y_n)"} /> puis le biais de <LatexRenderer latex={"Y_n"} /> comme estimateur de <LatexRenderer latex={"a"} />. Interpréter son signe.</li>
                      <li>En déduire un estimateur sans biais de <LatexRenderer latex={"a"} /> (en fonction de <LatexRenderer latex={"Y_n"} /> et <LatexRenderer latex={"b"} />).</li>
                      <li>Montrer que <LatexRenderer latex={"Y_n"} /> est asymptotiquement sans biais et que <LatexRenderer latex={"Y_n\\to a"} />.</li>
                    </ol>
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
                      <LatexRenderer latex={"\\textbf{1.} \\text{ Pour } x\\in\\mathbb{R}\\text{, par indépendance,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(Y_n>x) =\\prod_{i=1}^n\\mathbb{P}(X_i>x) =\\begin{cases} 1,& x<a,\\\\[1mm] \\left(\\dfrac{b-x}{b-a}\\right)^n,& a\\le x<b,\\\\[2mm] 0,& x\\ge b. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc la f.r. est } F_{Y_n}(x)=1-\\left(\\dfrac{b-x}{b-a}\\right)^n \\text{ pour } x\\in[a,b]\\text{, et une densité est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"f_{Y_n}(x)=F_{Y_n}'(x)= \\frac{n}{(b-a)^n}\\,(b-x)^{\\,n-1}\\,\\mathbf{1}_{[a,b]}(x)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} "} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(Y_n)=\\int_a^b x\\,f_{Y_n}(x)\\,dx =a+\\frac{b-a}{n+1}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Le biais de } Y_n \\text{ pour estimer } a \\text{ vaut }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"b(Y_n)=\\mathbb{E}(Y_n)-a=\\frac{b-a}{n+1}>0,"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{ce qui s'interprète naturellement: le minimum d'un échantillon de variables } \\ge a \\text{ est, en moyenne, } \\emph{au-dessus} \\text{ de } a\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ Un estimateur sans biais obtenu par correction linéaire (en n'utilisant que } Y_n \\text{ et } b \\text{ connu) est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"T_n=\\frac{n+1}{n}\\,Y_n-\\frac{1}{n}\\,b, \\qquad \\text{car}\\quad \\mathbb{E}(T_n)=\\frac{n+1}{n}\\Big(a+\\frac{b-a}{n+1}\\Big)-\\frac{b}{n}=a."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{4.} \\text{ Comme }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"b(Y_n)=\\frac{b-a}{n+1}\\xrightarrow[n\\to\\infty]{}0,"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{donc } Y_n \\text{ est } \\emph{asymptotiquement} \\text{ sans biais. De plus, pour tout } \\varepsilon>0\\text{,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(Y_n>a+\\varepsilon)=\\left(\\frac{b-a-\\varepsilon}{\\,b-a\\,}\\right)^{\\!n}\\xrightarrow[n\\to\\infty]{}0,"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{d'où } Y_n\\to a \\text{ en probabilité (et même presque sûrement, car } Y_n \\text{ est décroissant et minoré par } a\\text{).}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 16.4 - Estimateurs pour loi de Bernoulli */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.4"
                title="Comparaison d'estimateurs pour loi de Bernoulli"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } (X_i)_{n\\ge1} \\text{ une suite i.i.d. de loi } \\mathcal{B}(p)\\text{, où } p \\text{ est inconnu. On pose }"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\overline{X}_n=\\frac{1}{n}\\sum_{i=1}^n X_i, \\qquad T_n=\\frac{2}{n(n+1)}\\sum_{i=1}^n iX_i."} />
                    </div>
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que <LatexRenderer latex={"\\overline{X}_n"} /> et <LatexRenderer latex={"T_n"} /> sont deux estimateurs sans biais de <LatexRenderer latex={"p"} />.</li>
                      <li>Calculer le risque quadratique de <LatexRenderer latex={"\\overline{X}_n"} /> et de <LatexRenderer latex={"T_n"} />. Lequel des deux est le meilleur estimateur de <LatexRenderer latex={"p"} /> ?</li>
                      <li>Montrer que <LatexRenderer latex={"\\overline{X}_n"} /> et <LatexRenderer latex={"T_n"} /> sont deux estimateurs convergents de <LatexRenderer latex={"p"} />.</li>
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
                      <LatexRenderer latex={"\\textbf{1.} \\text{ On sait déjà que } \\overline{X}_n \\text{ est sans biais : }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}[\\overline{X}_n]=\\frac{1}{n}\\sum_{i=1}^n \\mathbb{E}[X_i] =\\frac{1}{n}\\cdot np=p."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{De plus,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}[T_n]=\\frac{2}{n(n+1)}\\sum_{i=1}^n i\\,\\mathbb{E}[X_i] =\\frac{2}{n(n+1)}\\cdot p\\sum_{i=1}^n i =\\frac{2}{n(n+1)}\\cdot p\\cdot\\frac{n(n+1)}{2}=p."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc } T_n \\text{ est également sans biais.}"} />
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Comme } \\overline{X}_n \\text{ est sans biais, son risque quadratique est sa variance :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"r(\\overline{X}_n)=\\mathrm{Var}(\\overline{X}_n) =\\frac{1}{n^2}\\sum_{i=1}^n \\mathrm{Var}(X_i) =\\frac{1}{n^2}\\cdot n\\,p(1-p)=\\frac{p(1-p)}{n}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Pour } T_n\\text{, par indépendance des } X_i \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(T_n)=\\left(\\frac{2}{n(n+1)}\\right)^2\\sum_{i=1}^n i^2\\,\\mathrm{Var}(X_i)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or } \\mathrm{Var}(X_i)=p(1-p)\\text{, donc }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(T_n)=\\frac{4p(1-p)}{n^2(n+1)^2}\\sum_{i=1}^n i^2."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Et on sait } \\sum_{i=1}^n i^2=\\frac{n(n+1)(2n+1)}{6}\\text{, d'où }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(T_n)=\\frac{4p(1-p)}{n^2(n+1)^2}\\cdot \\frac{n(n+1)(2n+1)}{6} =\\frac{2n+1}{3n(n+1)}\\,p(1-p)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi } r(T_n)=\\mathrm{Var}(T_n)=\\frac{2n+1}{3n(n+1)}\\,p(1-p)\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Comparons : } r(\\overline{X}_n)=\\frac{p(1-p)}{n}\\text{, } r(T_n)=\\frac{2n+1}{3n(n+1)}p(1-p)\\text{.}"} />
                      <LatexRenderer latex={"\\text{On vérifie que } r(\\overline{X}_n)<r(T_n) \\text{ pour tout } n\\text{, donc } \\overline{X}_n \\text{ est meilleur.}"} />
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ On a }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"r(\\overline{X}_n)=\\frac{p(1-p)}{n}\\xrightarrow[n\\to\\infty]{}0, \\qquad r(T_n)=\\frac{2n+1}{3n(n+1)}p(1-p)\\xrightarrow[n\\to\\infty]{}0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, } \\overline{X}_n \\text{ et } T_n \\text{ sont tous deux convergents en probabilité vers } p\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 16.5 - Variable multinomiale */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.5"
                title="Estimation avec variable multinomiale"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } X_1,\\dots,X_n \\text{ des v.a. i.i.d. telles que }"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\mathbb{P}(X_1=-1)=(1-p)^2, \\quad \\mathbb{P}(X_1=0)=2p(1-p), \\quad \\mathbb{P}(X_1=1)=p^2,"} />
                    </div>
                    <LatexRenderer latex={"\\text{où } p\\in(0,1) \\text{ est à estimer. On pose }"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"Z_n=\\frac{1}{2n}\\sum_{i=1}^n (X_i+1)."} />
                    </div>
                    <LatexRenderer latex={"\\text{Montrer que } Z_n \\text{ est un estimateur sans biais de } p \\text{ et qu'il converge vers } p\\text{.}"} />
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
                      <LatexRenderer latex={"\\text{On calcule d'abord l'espérance :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X_1)=(-1)(1-p)^2+0\\cdot 2p(1-p)+1\\cdot p^2 =p^2-(1-p)^2=(p-(1-p))(p+(1-p))=2p-1."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X_1+1)=\\mathbb{E}(X_1)+1=(2p-1)+1=2p."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(Z_n)=\\frac{1}{2n}\\sum_{i=1}^n\\mathbb{E}(X_i+1) =\\frac{1}{2n}\\cdot n\\cdot 2p=p."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Le biais est nul : } b(Z_n)=\\mathbb{E}(Z_n)-p=0\\text{. Donc } Z_n \\text{ est un estimateur sans biais de } p\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{Variance :} \\text{ comme les } X_i \\text{ sont indépendants et de variance } \\sigma^2 \\text{ finie,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(Z_n)=\\frac{1}{4n^2}\\sum_{i=1}^n \\mathrm{Var}(X_i) =\\frac{1}{4n^2}\\cdot n\\sigma^2=\\frac{\\sigma^2}{4n}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc le risque quadratique en } p \\text{ est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"r(Z_n)=b(Z_n)^2+\\mathrm{Var}(Z_n)=\\frac{\\sigma^2}{4n}\\xrightarrow[n\\to\\infty]{}0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, } Z_n \\text{ est un estimateur convergent de } p\\text{.}"} />
                      
                      <LatexRenderer latex={"\\textbf{Alternative :} \\text{ on remarque que les variables } \\frac{X_i+1}{2} \\text{ sont i.i.d., d'espérance } p \\text{ et de variance finie. Alors } Z_n \\text{ est exactement leur moyenne empirique. Par la loi forte (ou faible) des grands nombres :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"Z_n \\xrightarrow{\\;p.s.\\;} p, \\quad \\text{donc aussi } Z_n \\xrightarrow{\\;\\mathbb{P}\\;} p."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 16.10 - Maximum de vraisemblance pour loi de Pareto */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 16.10"
                title="Maximum de vraisemblance pour loi de Pareto"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Pour } a>0\\text{, soit }"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"f_a(x)= \\begin{cases} 0, & x<1,\\\\[1mm] \\dfrac{a}{x^{a+1}}, & x\\ge 1, \\end{cases}"} />
                    </div>
                    <LatexRenderer latex={"\\text{une densité de probabilité. On considère une suite } (X_i)_{i\\ge1} \\text{ de v.a. i.i.d. de densité } f_a \\text{ (paramètre } a \\text{ inconnu).}"} />
                    <LatexRenderer latex={"\\text{Pour } n\\ge1\\text{, on définit la fonction de vraisemblance : } L_n(x_1,\\dots,x_n;a)=\\prod_{i=1}^n f_a(x_i)\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que <LatexRenderer latex={"a\\mapsto L_n(x_1,\\dots,x_n;a)"} /> admet un maximum en un unique <LatexRenderer latex={"a"} />, que l'on exprimera en fonction de <LatexRenderer latex={"x_1,\\dots,x_n"} />. On note <LatexRenderer latex={"T_n"} /> l'estimateur du maximum de vraisemblance.</li>
                      <li>Montrer que <LatexRenderer latex={"\\ln(X_i)"} /> suit une loi exponentielle dont on précisera le paramètre. En déduire une densité de <LatexRenderer latex={"S_n=\\sum_{i=1}^n \\ln(X_i)"} />.</li>
                      <li>Exprimer <LatexRenderer latex={"T_n"} /> en fonction de <LatexRenderer latex={"S_n"} />, puis calculer <LatexRenderer latex={"\\mathbb{E}[T_n]"} /> et <LatexRenderer latex={"\\mathrm{Var}(T_n)"} />.</li>
                      <li>Montrer que <LatexRenderer latex={"T_n"} /> est asymptotiquement sans biais et convergent vers <LatexRenderer latex={"a"} />.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('10')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['10'] ? (
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
              {visibleCorrections['10'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{1.} \\text{ On a }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"L_n(x_1,\\dots,x_n;a)=a^n \\prod_{i=1}^n \\frac{1}{x_i^{a+1}},"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{donc }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\ln L_n(x_1,\\dots,x_n;a)=n\\ln a-(a+1)\\sum_{i=1}^n \\ln(x_i)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Cette fonction est dérivable en } a\\text{, et sa dérivée est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\frac{d}{da}\\ln L_n = \\frac{n}{a}-\\sum_{i=1}^n \\ln(x_i)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Elle s'annule pour } a=\\frac{n}{\\sum_{i=1}^n \\ln(x_i)}\\text{. Ainsi, l'estimateur du maximum de vraisemblance est }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"T_n=\\frac{n}{S_n},\\qquad S_n=\\sum_{i=1}^n \\ln(X_i)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{2.} \\text{ Pour } x\\ge1\\text{, posons } Y=\\ln X\\text{. Alors }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{P}(Y\\le y)=\\mathbb{P}(X\\le e^y)=\\int_1^{e^y} \\frac{a}{t^{a+1}}\\,dt =1-e^{-ay},\\quad y\\ge0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Donc } Y\\sim \\text{Exp}(a)\\text{. Alors } S_n=\\sum_{i=1}^n \\ln(X_i)\\sim \\Gamma(n,a) \\text{ (loi Gamma de forme } n\\text{, taux } a\\text{), de densité }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"g_n(s)=\\frac{a^n}{(n-1)!}s^{n-1}e^{-as},\\quad s>0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{3.} \\text{ Comme } T_n=\\tfrac{n}{S_n}\\text{, on cherche } \\mathbb{E}[T_n]\\text{. Par le théorème de transfert : }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}[T_n]=\\frac{n}{n-1}\\,a, \\quad (n\\ge2)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{De même, } \\mathbb{E}[T_n^2]=\\frac{n^2}{(n-1)(n-2)}a^2,\\quad (n\\ge3)\\text{. Donc }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Var}(T_n)=\\mathbb{E}[T_n^2]-\\mathbb{E}[T_n]^2 =\\frac{n^2a^2}{(n-1)^2(n-2)}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\textbf{4.} \\text{ Comme } \\mathbb{E}[T_n]=a\\cdot\\frac{n}{n-1}\\to a\\text{, le biais tend vers } 0\\text{. De plus, } \\mathrm{Var}(T_n)\\to0\\text{. Ainsi, } T_n \\text{ est asymptotiquement sans biais et convergent vers } a\\text{.}"} />
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
            <Link to="/formation/maths-theorie-estimation-statistique">
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

export default Chapitre14TheorieEstimationStatistiqueExercicesPage;
