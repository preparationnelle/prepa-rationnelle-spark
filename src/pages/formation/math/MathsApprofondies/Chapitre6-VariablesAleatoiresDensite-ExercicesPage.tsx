import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre6VariablesAleatoiresDensiteExercicesPage = () => {
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
    color = "orange"
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
            <Link to="/formation/maths-variables-aleatoires-densite" className="hover:text-orange-700 transition-colors">
              Chapitre 6 - Variables aléatoires à densité
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
              Exercices - Chapitre 6 : Variables aléatoires à densité
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les densités de probabilité, fonctions de répartition et transformations de variables
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-variables-aleatoires-densite">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-variables-aleatoires-densite-flashcards">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <Brain className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
              <Link to="/formation/maths-variables-aleatoires-densite-quiz">
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
          {/* Exercice 1 - Loi de -ln(U) */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 1"
                title="Loi de -ln(U) (HEC 2010)"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{On considère une variable aléatoire } U \\text{ suivant la loi uniforme sur } ]0,1]\\text{, notée } U \\sim \\mathcal{U}(0,1]\\text{.}"} />
                    <LatexRenderer latex={"\\text{Déterminer la loi de la variable aléatoire } -\\ln(U)\\text{.}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{Notons } F_U \\text{ et } F_{-\\ln(U)} \\text{ les fonctions de répartition de } U \\text{ et de } -\\ln(U)\\text{. On rappelle que } U\\sim\\mathcal{U}(0,1]\\text{, donc pour tout } z\\in[0,1]\\text{, } F_U(z)=z\\text{, et } P(U\\le z)=z\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Pour } x<0\\text{, on a immédiatement } F_{-\\ln(U)}(x)=P(-\\ln U\\le x)=0 \\text{ car } -\\ln(U)\\ge 0 \\text{ p.s.}"} />
                      
                      <LatexRenderer latex={"\\text{Pour } x\\ge 0\\text{,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{-\\ln(U)}(x) = P\\!\\left(-\\ln(U)\\le x\\right) = P\\!\\left(\\ln(U)\\ge -x\\right) = P\\!\\left(U\\ge e^{-x}\\right)"} />
                      </div>
                      <div className="text-center my-4">
                        <LatexRenderer latex={"= 1 - P\\!\\left(U\\le e^{-x}\\right) = 1 - F_U\\!\\left(e^{-x}\\right) = 1 - e^{-x},"} />
                      </div>
                      <LatexRenderer latex={"\\text{puisque } e^{-x}\\in[0,1] \\text{ pour } x\\ge 0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Ainsi,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_{-\\ln(U)}(x)= \\begin{cases} 0, & \\text{si } x<0,\\\\ 1-e^{-x}, & \\text{si } x\\ge 0. \\end{cases}"} />
                      </div>
                      <LatexRenderer latex={"\\text{Cette fonction de répartition est celle d'une loi exponentielle de paramètre } 1\\text{.}"} />
                      
                      <div className="text-center my-4 p-3 bg-orange-100 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :} \\boxed{\\ -\\ln(U)\\ \\sim \\ \\mathrm{Exp}(1)\\ } \\text{ (densité } f(x)=\\mathbf{1}_{x\\ge 0}\\, e^{-x}\\text{).}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\textit{Remarque pédagogique.} \\text{ De façon générale, si } U\\sim\\mathcal{U}(0,1) \\text{ et } \\lambda>0\\text{, alors } -\\tfrac{1}{\\lambda}\\ln(U)\\sim\\mathrm{Exp}(\\lambda)\\text{.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 2 - Densité de probabilité */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 2"
                title="Densité de probabilité (HEC 2015)"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\textbf{1)} \\text{ Déterminer } (c,d)\\in\\mathbb{R}^2 \\text{ tel que :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\forall x \\ge 0,\\quad \\frac{1}{(x+1)(x+2)} \\;=\\; \\frac{c}{x+1} + \\frac{d}{x+2}."} />
                    </div>
                    <LatexRenderer latex={"\\textbf{2)} \\text{ Soit } f:\\mathbb{R}\\to\\mathbb{R} \\text{ définie par :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"f(x)= \\begin{cases} \\dfrac{1}{(x+1)(x+2)\\ln 2}, & x\\ge 0,\\\\ 0, & x<0. \\end{cases}"} />
                    </div>
                    <LatexRenderer latex={"\\text{Montrer que } f \\text{ est une densité de probabilité.}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      
                      <div>
                        <LatexRenderer latex={"\\textbf{1) Décomposition en éléments simples.}"} />
                        <LatexRenderer latex={"\\text{On cherche } c,d\\in\\mathbb{R} \\text{ tels que :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\frac{1}{(x+1)(x+2)} = \\frac{c}{x+1} + \\frac{d}{x+2}."} />
                        </div>
                        <LatexRenderer latex={"\\text{En réduisant au même dénominateur :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\frac{c}{x+1} + \\frac{d}{x+2} = \\frac{c(x+2)+d(x+1)}{(x+1)(x+2)} = \\frac{(c+d)x+(2c+d)}{(x+1)(x+2)}."} />
                        </div>
                        <LatexRenderer latex={"\\text{On doit avoir :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"(c+d)=0, \\qquad 2c+d=1."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi } d=-c \\text{ et } 2c-c=1 \\implies c=1,\\, d=-1\\text{.}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\text{Donc : } \\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}."} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2) Vérification que } f \\text{ est une densité.}"} />
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><LatexRenderer latex={"\\text{Pour } x<0\\text{, } f(x)=0\\text{, donc } f(x)\\ge 0\\text{.}"} /></li>
                          <li><LatexRenderer latex={"\\text{Pour } x\\ge 0\\text{, le dénominateur } (x+1)(x+2)\\ln(2)>0\\text{, donc } f(x)\\ge 0\\text{.}"} /></li>
                          <li><LatexRenderer latex={"\\text{La fonction } f \\text{ est mesurable et positive, il reste à vérifier que } \\int_{\\mathbb{R}} f(x)\\,dx=1\\text{.}"} /></li>
                        </ul>
                        
                        <LatexRenderer latex={"\\text{Soit } A>0\\text{. On calcule :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_0^A f(x)\\,dx = \\frac{1}{\\ln(2)} \\int_0^A \\frac{1}{(x+1)(x+2)}\\,dx"} />
                        </div>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"= \\frac{1}{\\ln(2)} \\int_0^A \\left(\\frac{1}{x+1}-\\frac{1}{x+2}\\right) dx"} />
                        </div>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"= \\frac{1}{\\ln(2)} \\Big[\\ln(x+1)-\\ln(x+2)\\Big]_0^A"} />
                        </div>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"= \\frac{1}{\\ln(2)} \\Big( \\ln\\!\\left(\\tfrac{A+1}{A+2}\\right) - \\ln\\!\\left(\\tfrac{1}{2}\\right) \\Big)."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Quand } A\\to+\\infty\\text{, on a } \\ln\\!\\left(\\tfrac{A+1}{A+2}\\right)\\to 0\\text{. Donc :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_0^{+\\infty} f(x)\\,dx = \\frac{1}{\\ln(2)} \\Big(0 - \\ln\\!\\left(\\tfrac{1}{2}\\right)\\Big) = \\frac{1}{\\ln(2)} \\cdot \\ln(2) = 1."} />
                        </div>
                        
                        <LatexRenderer latex={"\\textbf{Conclusion :} f \\text{ est bien une densité de probabilité.}"} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 3 - Transformation uniforme vers exponentielle */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 3"
                title="Transformation uniforme vers exponentielle"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } U \\text{ une variable aléatoire suivant la loi uniforme sur } [0,1[\\text{, et soit } \\lambda>0\\text{. On pose}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"X = -\\frac{1}{\\lambda}\\ln(1-U)."} />
                    </div>
                    <LatexRenderer latex={"\\text{Déterminer la loi de } X\\text{.}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{Puisque } U \\text{ prend ses valeurs dans } [0,1[\\text{, on a } X\\in\\mathbb{R}_+\\text{. Donc pour } x<0\\text{, la fonction de répartition vaut } F_X(x)=0\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{Pour } x\\ge 0\\text{, on calcule :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_X(x) = P\\!\\left(-\\tfrac{1}{\\lambda}\\ln(1-U)\\le x\\right) = P\\!\\left(\\ln(1-U)\\ge -\\lambda x\\right)"} />
                      </div>
                      <div className="text-center my-4">
                        <LatexRenderer latex={"= P\\!\\left(1-U \\ge e^{-\\lambda x}\\right) = P\\!\\left(U \\le 1-e^{-\\lambda x}\\right)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or la fonction de répartition de } U \\text{ est}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_U(u) = \\begin{cases} 0, & u<0,\\\\ u, & 0\\le u\\le 1,\\\\ 1, & u>1. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ainsi, pour } x\\ge 0 \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_X(x) = F_U(1-e^{-\\lambda x}) = 1-e^{-\\lambda x}."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{On obtient donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_X(x)= \\begin{cases} 0, & x<0,\\\\ 1-e^{-\\lambda x}, & x\\ge 0. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Ceci correspond exactement à la fonction de répartition d'une loi exponentielle de paramètre } \\lambda\\text{.}"} />
                      
                      <div className="text-center my-4 p-3 bg-orange-100 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :} \\boxed{\\,X \\sim \\mathcal{E}(\\lambda)\\,}."} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 4 - Densité avec logarithme */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 4"
                title="Densité avec logarithme (ECRICOME 2015)"
                icon={Lightbulb}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\textbf{1)} \\text{ Déterminer un réel } a \\text{ tel que la fonction } f \\text{ définie par}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"f(x) = \\begin{cases} 0, & x<2, \\\\ \\dfrac{a}{x(\\ln x)^2}, & x\\ge 2, \\end{cases}"} />
                    </div>
                    <LatexRenderer latex={"\\text{soit une densité.}"} />
                    
                    <LatexRenderer latex={"\\textbf{2)} \\text{ Déterminer la fonction de répartition } F \\text{ de } X\\text{.}"} />
                    
                    <LatexRenderer latex={"\\textbf{3)} \\text{ La variable aléatoire } X \\text{ admet-elle une espérance ?}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      
                      <div>
                        <LatexRenderer latex={"\\textbf{1) Recherche de } a\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour que } f \\text{ soit une densité, il faut que } f(x)\\ge 0 \\text{ et que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1."} />
                        </div>
                        <LatexRenderer latex={"\\text{Comme } f(x)=0 \\text{ pour } x<2\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} f(x)\\,dx = \\int_2^{+\\infty} \\frac{a}{x(\\ln x)^2}\\,dx."} />
                        </div>
                        <LatexRenderer latex={"\\text{On pose } t=\\ln x\\text{, donc } dt=\\tfrac{dx}{x}\\text{, et lorsque } x\\ge 2\\text{, } t\\ge \\ln 2\\text{. On obtient :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_2^{+\\infty} \\frac{a}{x(\\ln x)^2}\\,dx = a \\int_{\\ln 2}^{+\\infty} \\frac{1}{t^2}\\,dt = a\\Big[-\\frac{1}{t}\\Big]_{\\ln 2}^{+\\infty} = \\frac{a}{\\ln 2}."} />
                        </div>
                        <LatexRenderer latex={"\\text{On impose que cette intégrale soit égale à } 1\\text{, d'où}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"a = \\ln 2."} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2) Fonction de répartition } F\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour } x<2\\text{, } f(x)=0\\text{, donc } F(x)=0\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour } x\\ge 2\\text{,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F(x) = \\int_2^x f(t)\\,dt = \\int_2^x \\frac{\\ln 2}{t(\\ln t)^2}\\,dt."} />
                        </div>
                        <LatexRenderer latex={"\\text{Par le même changement de variable } t\\mapsto \\ln t\\text{, on obtient :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F(x) = \\ln 2 \\int_{\\ln 2}^{\\ln x} \\frac{1}{u^2}\\,du = \\ln 2 \\left[-\\frac{1}{u}\\right]_{\\ln 2}^{\\ln x}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F(x) = \\ln 2\\left(\\frac{1}{\\ln 2}-\\frac{1}{\\ln x}\\right) = 1-\\frac{\\ln 2}{\\ln x},\\quad x\\ge 2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Finalement :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F(x) = \\begin{cases} 0, & x<2, \\\\ 1-\\dfrac{\\ln 2}{\\ln x}, & x\\ge 2. \\end{cases}"} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{3) Existence de l'espérance.}"} />
                        <LatexRenderer latex={"\\text{L'espérance existe si et seulement si}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_2^{+\\infty} x f(x)\\,dx = \\int_2^{+\\infty} \\frac{\\ln 2}{(\\ln x)^2}\\,dx <+\\infty."} />
                        </div>
                        <LatexRenderer latex={"\\text{On pose } t=\\ln x \\text{ : } dx = e^t dt\\text{, donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_2^{+\\infty} \\frac{\\ln 2}{(\\ln x)^2}\\,dx = \\ln 2 \\int_{\\ln 2}^{+\\infty} \\frac{e^t}{t^2}\\,dt."} />
                        </div>
                        <LatexRenderer latex={"\\text{Or, pour } t\\to+\\infty\\text{, on a } \\tfrac{e^t}{t^2}\\sim \\tfrac{e^t}{t^2}\\to +\\infty\\text{, donc l'intégrale diverge.}"} />
                        <LatexRenderer latex={"\\text{Ainsi, l'espérance n'existe pas.}"} />
                      </div>

                      <div className="bg-orange-100 p-3 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :}"} />
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><LatexRenderer latex={"a=\\ln 2"} /></li>
                          <li><LatexRenderer latex={"F(x)=0 \\text{ si } x<2\\text{, et } F(x)=1-\\tfrac{\\ln 2}{\\ln x} \\text{ si } x\\ge 2"} /></li>
                          <li><LatexRenderer latex={"\\text{la variable } X \\text{ n'admet pas d'espérance.}"} /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 5 - Transformation Y = X² */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 5"
                title="Transformation Y = X²"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } X \\text{ une variable aléatoire suivant la loi uniforme } \\mathcal{U}([-1,1])\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que } Y=X^2 \\text{ est une variable à densité et en déterminer une densité.}"} />
                    <LatexRenderer latex={"\\text{Mêmes questions si } X\\sim \\mathcal{E}(\\lambda)\\text{.}"} />
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
                    <div className="space-y-6">
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      
                      <div>
                        <LatexRenderer latex={"\\textbf{1) Cas } X \\sim \\mathcal{U}([-1,1])\\text{.}"} />
                        <LatexRenderer latex={"\\text{Soit } Y=X^2\\text{. Comme } X\\in[-1,1]\\text{, on a } Y\\in[0,1]\\text{. Pour } y<0\\text{, } F_Y(y)=0\\text{, et pour } y\\ge 1\\text{, } F_Y(y)=1\\text{.}"} />
                        
                        <LatexRenderer latex={"\\text{Pour } 0\\le y \\le 1 \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y) = P(Y \\le y) = P(X^2 \\le y) = P(-\\sqrt{y} \\le X \\le \\sqrt{y})."} />
                        </div>
                        <LatexRenderer latex={"\\text{Comme } X\\sim \\mathcal{U}([-1,1])\\text{, on obtient :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y) = \\frac{2\\sqrt{y}}{2} = \\sqrt{y}."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Ainsi,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y)= \\begin{cases} 0, & y<0,\\\\ \\sqrt{y}, & 0\\le y\\le 1,\\\\ 1, & y>1. \\end{cases}"} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Cette fonction est continue sur } \\mathbb{R}\\text{, strictement croissante sur } [0,1]\\text{, donc } Y \\text{ admet une densité } f_Y\\text{. On calcule la dérivée sur } ]0,1[ \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Y(y)=F_Y'(y)=\\frac{1}{2\\sqrt{y}},\\quad 0<y<1."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Donc une densité de } Y \\text{ est :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Y(y)= \\begin{cases} \\dfrac{1}{2\\sqrt{y}}, & 0<y<1,\\\\ 0, & \\text{sinon}. \\end{cases}"} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2) Cas } X \\sim \\mathcal{E}(\\lambda)\\text{.}"} />
                        <LatexRenderer latex={"\\text{On définit } Y=X^2\\text{. Comme } X\\ge 0\\text{, on a } Y\\ge 0\\text{.}"} />
                        
                        <LatexRenderer latex={"\\text{Pour } y<0\\text{, } F_Y(y)=0\\text{. Pour } y\\ge 0 \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y) = P(Y \\le y) = P(X^2 \\le y) = P(X \\le \\sqrt{y})."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Or, si } X\\sim \\mathcal{E}(\\lambda)\\text{, sa fonction de répartition est}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_X(x) = 1-e^{-\\lambda x},\\quad x\\ge 0."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Donc :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y) = F_X(\\sqrt{y}) = 1-e^{-\\lambda \\sqrt{y}}, \\quad y\\ge 0."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Ainsi :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y)= \\begin{cases} 0, & y<0,\\\\ 1-e^{-\\lambda \\sqrt{y}}, & y\\ge 0. \\end{cases}"} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{La densité de } Y \\text{ s'obtient par dérivation pour } y>0 \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Y(y) = \\frac{d}{dy}F_Y(y) = \\frac{d}{dy}\\Big(1-e^{-\\lambda \\sqrt{y}}\\Big) = \\frac{\\lambda}{2\\sqrt{y}} e^{-\\lambda \\sqrt{y}}."} />
                        </div>
                        
                        <LatexRenderer latex={"\\text{Donc une densité de } Y \\text{ est :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Y(y)= \\begin{cases} \\dfrac{\\lambda}{2\\sqrt{y}} e^{-\\lambda \\sqrt{y}}, & y>0,\\\\ 0, & y\\le 0. \\end{cases}"} />
                        </div>
                      </div>

                      <div className="bg-orange-100 p-3 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :}"} />
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><LatexRenderer latex={"\\text{Si } X\\sim \\mathcal{U}([-1,1])\\text{, alors } Y=X^2 \\text{ suit une loi de densité } f_Y(y)=\\dfrac{1}{2\\sqrt{y}}\\mathbf{1}_{0<y<1}\\text{.}"} /></li>
                          <li><LatexRenderer latex={"\\text{Si } X\\sim \\mathcal{E}(\\lambda)\\text{, alors } Y=X^2 \\text{ suit une loi de densité } f_Y(y)=\\dfrac{\\lambda}{2\\sqrt{y}}e^{-\\lambda \\sqrt{y}}\\mathbf{1}_{y>0}\\text{.}"} /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 6 - Moments de la loi exponentielle */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 6"
                title="Moments de la loi exponentielle"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } X \\text{ une variable aléatoire qui suit la loi exponentielle de paramètre } \\lambda\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que } X \\text{ admet des moments de tout ordre et les calculer.}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{Soit } k \\in \\mathbb{N}^*\\text{. Par définition, } X \\text{ admet un moment d'ordre } k \\text{ si}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X^k) = \\int_0^{+\\infty} x^k \\, \\lambda e^{-\\lambda x}\\, dx"} />
                      </div>
                      <LatexRenderer latex={"\\text{existe et est fini.}"} />
                      
                      <LatexRenderer latex={"\\text{On pose le changement de variable } t=\\lambda x\\text{, donc } x=\\tfrac{t}{\\lambda} \\text{ et } dx=\\tfrac{dt}{\\lambda}\\text{. L'intégrale devient :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X^k) = \\int_0^{+\\infty} \\left(\\frac{t}{\\lambda}\\right)^k \\lambda e^{-t}\\,\\frac{dt}{\\lambda} = \\frac{1}{\\lambda^k} \\int_0^{+\\infty} t^k e^{-t}\\,dt."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or, l'intégrale}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\int_0^{+\\infty} t^k e^{-t}\\,dt"} />
                      </div>
                      <LatexRenderer latex={"\\text{est la définition de la fonction Gamma en } k+1\\text{, soit } \\Gamma(k+1)=k!\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{On obtient donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathbb{E}(X^k) = \\frac{1}{\\lambda^k}\\, \\Gamma(k+1) = \\frac{k!}{\\lambda^k}."} />
                      </div>
                      
                      <div className="text-center my-4 p-3 bg-orange-100 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :} X \\text{ admet des moments de tout ordre, et pour tout } k\\in\\mathbb{N}^* \\text{ :}"} />
                        <div className="mt-2">
                          <LatexRenderer latex={"\\mathbb{E}(X^k) = \\frac{k!}{\\lambda^k}."} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 7 - Loi logistique */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 7"
                title="Loi logistique"
                icon={Lightbulb}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } F \\text{ la fonction définie sur } \\mathbb{R} \\text{ par}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"F(x)=\\frac{1}{1+e^{-x}}."} />
                    </div>
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que F est la fonction de répartition d'une variable à densité X. Déterminer une densité de X.</li>
                      <li>
                        <div className="space-y-2">
                          <span>Soient X et Y deux variables aléatoires indépendantes possédant F comme fonction de répartition. On pose Z=max(X,Y).</span>
                          <ol className="list-[lower-alpha] list-inside space-y-1 pl-4">
                            <li>Montrer que Z est une variable à densité.</li>
                            <li>Déterminer une densité de Z.</li>
                          </ol>
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
                    <div className="space-y-6">
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      
                      <div>
                        <LatexRenderer latex={"\\textbf{1) Vérification que } F \\text{ est une fonction de répartition.}"} />
                        <LatexRenderer latex={"\\text{La fonction } F \\text{ est } \\mathcal{C}^1 \\text{ sur } \\mathbb{R}\\text{, strictement croissante. On a :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\lim_{x\\to -\\infty} F(x)=0, \\qquad \\lim_{x\\to +\\infty} F(x)=1."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } F \\text{ est bien une fonction de répartition.}"} />
                        
                        <LatexRenderer latex={"\\text{Puisque } F \\text{ est de classe } \\mathcal{C}^1\\text{, } X \\text{ admet une densité donnée par } f(x)=F'(x) \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f(x)=F'(x)=\\frac{e^{-x}}{(1+e^{-x})^2},\\qquad x\\in\\mathbb{R}."} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2.a) Fonction de répartition de } Z=\\max(X,Y)\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour tout } x\\in\\mathbb{R} \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\{Z\\le x\\} = \\{X\\le x, Y\\le x\\}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Comme } X \\text{ et } Y \\text{ sont indépendantes :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Z(x)=P(Z\\le x)=P(X\\le x)P(Y\\le x)=F(x)^2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Z(x)=\\left(\\frac{1}{1+e^{-x}}\\right)^2."} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2.b) Densité de } Z\\text{.}"} />
                        <LatexRenderer latex={"\\text{Puisque } F_Z \\text{ est } \\mathcal{C}^1\\text{, la densité de } Z \\text{ est la dérivée de } F_Z \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Z(x)=F_Z'(x)=2F(x)F'(x)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Or :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F(x)=\\frac{1}{1+e^{-x}}, \\quad F'(x)=\\frac{e^{-x}}{(1+e^{-x})^2}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f_Z(x)=\\frac{2e^{-x}}{(1+e^{-x})^3}."} />
                        </div>
                      </div>

                      <div className="bg-orange-100 p-3 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :}"} />
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><LatexRenderer latex={"X \\text{ suit la loi logistique de densité } f(x)=\\dfrac{e^{-x}}{(1+e^{-x})^2}\\text{.}"} /></li>
                          <li><LatexRenderer latex={"Z=\\max(X,Y) \\text{ est une variable à densité, avec densité } f_Z(x)=\\dfrac{2e^{-x}}{(1+e^{-x})^3}\\text{.}"} /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 8 - Loi de Pareto */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 8"
                title="Loi de Pareto"
                icon={Crown}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } a>0 \\text{ et}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"f_a(t)= \\begin{cases} a\\,t^{-a-1}, & t\\in[1,+\\infty[,\\\\ 0, & \\text{sinon}. \\end{cases}"} />
                    </div>
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que f_a est une densité.</li>
                      <li>
                        <div className="space-y-2">
                          <span>Soit X une v.a. admettant f_a pour densité.</span>
                          <ol className="list-[lower-alpha] list-inside space-y-1 pl-4">
                            <li>Déterminer la fonction de répartition F_X.</li>
                            <li>X possède-t-elle une espérance ? Si oui, la calculer. Même question pour la variance.</li>
                            <li>On pose Y=ln X. Déterminer la fonction de répartition de Y, puis reconnaître la loi de Y.</li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('8')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['8'] ? (
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
              {visibleCorrections['8'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-6">
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      
                      <div>
                        <LatexRenderer latex={"\\textbf{1) } f_a \\text{ est une densité.}"} />
                        <LatexRenderer latex={"f_a\\ge 0 \\text{ et, pour } a>0\\text{,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} f_a(t)\\,dt=\\int_1^{+\\infty} a\\,t^{-a-1}dt = a\\Big[\\tfrac{-1}{a}t^{-a}\\Big]_1^{+\\infty}=1."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } f_a \\text{ est une densité.}"} />
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2.a) Fonction de répartition de } X\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour } x<1\\text{, } F_X(x)=0\\text{. Pour } x\\ge 1\\text{,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_X(x)=\\int_1^x a\\,t^{-a-1}dt = 1-x^{-a}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_X(x)= \\begin{cases} 0, & x<1,\\\\ 1-x^{-a}, & x\\ge 1. \\end{cases}"} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2.b) Moments.}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\mathbb{E}[X]=\\int_1^{+\\infty} x\\,a\\,x^{-a-1}dx = a\\int_1^{+\\infty} x^{-a}\\,dx \\begin{cases} =\\dfrac{a}{a-1}, & \\text{si } a>1,\\\\ =+\\infty, & \\text{si } a\\le 1. \\end{cases}"} />
                        </div>
                        <LatexRenderer latex={"\\text{De même,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\mathbb{E}[X^2]=\\int_1^{+\\infty} x^2 a x^{-a-1}dx = a\\int_1^{+\\infty} x^{1-a}dx \\begin{cases} =\\dfrac{a}{a-2}, & \\text{si } a>2,\\\\ =+\\infty, & \\text{si } a\\le 2. \\end{cases}"} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc, pour } a>2\\text{,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\mathrm{Var}(X)=\\mathbb{E}[X^2]-\\mathbb{E}[X]^2 =\\frac{a}{a-2}-\\Big(\\frac{a}{a-1}\\Big)^2 =\\frac{a}{(a-1)^2(a-2)}."} />
                        </div>
                      </div>

                      <div>
                        <LatexRenderer latex={"\\textbf{2.c) Loi de } Y=\\ln X\\text{.}"} />
                        <LatexRenderer latex={"\\text{Pour } y\\in\\mathbb{R}\\text{,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F_Y(y)=P(\\ln X\\le y)=P(X\\le e^{y})=F_X(e^{y}) = \\begin{cases} 0, & y\\le 0,\\\\ 1-e^{-ay}, & y>0. \\end{cases}"} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi } Y \\text{ a pour densité } f_Y(y)=a\\,e^{-ay}\\,\\mathbf{1}_{y>0}\\text{, i.e. } Y\\sim \\mathcal{E}(a)\\text{.}"} />
                      </div>

                      <div className="bg-orange-100 p-3 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion (résultats-clés).}"} />
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><LatexRenderer latex={"f_a \\text{ est une densité sur } [1,\\infty) \\text{ pour tout } a>0\\text{.}"} /></li>
                          <li><LatexRenderer latex={"F_X(x)=0 \\text{ si } x<1\\text{, et } F_X(x)=1-x^{-a} \\text{ si } x\\ge 1\\text{.}"} /></li>
                          <li><LatexRenderer latex={"\\mathbb{E}[X]=\\dfrac{a}{a-1} \\text{ si } a>1 \\text{ (sinon } \\infty\\text{) ; } \\mathrm{Var}(X)=\\dfrac{a}{(a-1)^2(a-2)} \\text{ si } a>2 \\text{ (sinon } \\infty\\text{).}"} /></li>
                          <li><LatexRenderer latex={"Y=\\ln X \\sim \\mathcal{E}(a)\\text{.}"} /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 9 - Partie entière */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 9"
                title="Partie entière d'une variable uniforme"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } n\\in\\mathbb{N}^* \\text{ et soit } X \\text{ une variable aléatoire qui suit la loi uniforme sur } [0,n]\\text{.}"} />
                    <LatexRenderer latex={"\\text{Déterminer la loi de } \\lfloor X \\rfloor \\text{ (partie entière de } X\\text{).}"} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('9')}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 transition-colors"
                >
                  {visibleCorrections['9'] ? (
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
              {visibleCorrections['9'] && (
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Correction :</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{La variable } \\lfloor X \\rfloor \\text{ ne prend que des valeurs entières comprises entre } 0 \\text{ et } n\\text{.}"} />
                      
                      <LatexRenderer latex={"\\text{De plus,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(\\lfloor X \\rfloor = n) = P(n \\le X < n+1) = P(X=n)=0,"} />
                      </div>
                      <LatexRenderer latex={"\\text{car } X \\text{ est continue.}"} />
                      
                      <LatexRenderer latex={"\\text{Pour } k\\in\\{0,1,\\dots,n-1\\} \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(\\lfloor X \\rfloor = k) = P(k \\le X < k+1)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or } X\\sim \\mathcal{U}([0,n])\\text{, donc pour tout intervalle } I\\subset [0,n]\\text{,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(X\\in I)=\\frac{|I|}{n}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(\\lfloor X \\rfloor = k) = \\frac{(k+1)-k}{n}=\\frac{1}{n}."} />
                      </div>
                      
                      <div className="text-center my-4 p-3 bg-orange-100 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :} \\lfloor X \\rfloor \\text{ suit la loi uniforme discrète sur } \\{0,1,\\dots,n-1\\}\\text{, notée}"} />
                        <div className="mt-2">
                          <LatexRenderer latex={"\\lfloor X \\rfloor \\sim \\mathcal{U}(\\{0,\\dots,n-1\\})."} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 10 - Minimum de deux lois exponentielles */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 10"
                title="Minimum de deux lois exponentielles"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } X \\text{ et } Y \\text{ deux variables aléatoires indépendantes telles que}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"X \\sim \\mathcal{E}(\\lambda), \\qquad Y \\sim \\mathcal{E}(\\mu)."} />
                    </div>
                    <LatexRenderer latex={"\\text{Déterminer la loi de } Z=\\min(X,Y)\\text{.}"} />
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{Pour } x\\in\\mathbb{R} \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_Z(x)=P(Z\\le x)=1-P(Z>x)=1-P(X>x \\;\\cap\\; Y>x)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Comme } X \\text{ et } Y \\text{ sont indépendantes :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_Z(x)=1-P(X>x)P(Y>x)."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Or, pour } x\\ge 0 \\text{ :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"P(X>x)=e^{-\\lambda x},\\qquad P(Y>x)=e^{-\\mu x}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_Z(x)=1-e^{-\\lambda x}e^{-\\mu x}=1-e^{-(\\lambda+\\mu)x},\\qquad x\\ge 0."} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Pour } x<0\\text{, } F_Z(x)=0\\text{. Ainsi :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"F_Z(x)= \\begin{cases} 0, & x<0,\\\\ 1-e^{-(\\lambda+\\mu)x}, & x\\ge 0. \\end{cases}"} />
                      </div>
                      
                      <LatexRenderer latex={"\\text{Il s'agit exactement de la fonction de répartition d'une loi exponentielle de paramètre } \\lambda+\\mu\\text{.}"} />
                      
                      <div className="text-center my-4 p-3 bg-orange-100 rounded-lg">
                        <LatexRenderer latex={"\\textbf{Conclusion :}"} />
                        <div className="mt-2">
                          <LatexRenderer latex={"Z=\\min(X,Y)\\;\\sim\\;\\mathcal{E}(\\lambda+\\mu)."} />
                        </div>
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
            <Link to="/formation/maths-variables-aleatoires-densite">
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

export default Chapitre6VariablesAleatoiresDensiteExercicesPage;
