import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre3AlgebreBilineaireExercicesPage = () => {
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
            <Link to="/formation/maths-algebre-bilineaire" className="hover:text-orange-700 transition-colors">
              Chapitre 3 - Algèbre bilinéaire
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
              Exercices - Chapitre 3 : Algèbre bilinéaire
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les concepts d'algèbre bilinéaire et de produit scalaire
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-algebre-bilineaire">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-algebre-bilineaire-quiz">
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
          {/* Exercice 1 - Identités de polarisation */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 1"
                title="Identités de polarisation (espace préhilbertien réel)"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\textbf{Exercice 1 — Identités de polarisation.}"} />
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace vectoriel réel muni d'un produit scalaire } \\langle \\cdot,\\cdot\\rangle \\text{ et de la norme associée } \\|x\\|^2=\\langle x,x\\rangle\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que, pour tous } x,y\\in E\\text{,}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\boxed{\\;\\langle x,y\\rangle=\\tfrac12\\bigl(\\|x+y\\|^2-\\|x\\|^2-\\|y\\|^2\\bigr) =\\tfrac14\\bigl(\\|x+y\\|^2-\\|x-y\\|^2\\bigr)\\;}"} />
                    </div>
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
                      <LatexRenderer latex={"\\text{Par bilinéarité et symétrie du produit scalaire,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\|x+y\\|^2=\\langle x+y,x+y\\rangle =\\langle x,x\\rangle+\\langle x,y\\rangle+\\langle y,x\\rangle+\\langle y,y\\rangle =\\|x\\|^2+2\\langle x,y\\rangle+\\|y\\|^2."} />
                      </div>
                      <LatexRenderer latex={"\\text{On en déduit}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\langle x,y\\rangle=\\tfrac12\\bigl(\\|x+y\\|^2-\\|x\\|^2-\\|y\\|^2\\bigr)."} />
                      </div>
                      <LatexRenderer latex={"\\text{De même,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\|x-y\\|^2=\\langle x-y,x-y\\rangle =\\|x\\|^2-2\\langle x,y\\rangle+\\|y\\|^2."} />
                      </div>
                      <LatexRenderer latex={"\\text{En soustrayant les deux égalités, on obtient}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\|x+y\\|^2-\\|x-y\\|^2=4\\langle x,y\\rangle, \\quad\\text{d'où}\\quad \\langle x,y\\rangle=\\tfrac14\\bigl(\\|x+y\\|^2-\\|x-y\\|^2\\bigr). \\qed"} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 2 - Procédé d'orthogonalisation de Gram-Schmidt */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 2"
                title="Procédé d'orthogonalisation de Gram-Schmidt"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace préhilbertien et } (x_1, \\ldots, x_n) \\text{ une famille libre de vecteurs de } E\\text{.}"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Décrire l'algorithme de Gram-Schmidt qui permet de construire une famille orthogonale } (e_1, \\ldots, e_n) \\text{ telle que } \\text{Vect}(e_1, \\ldots, e_k) = \\text{Vect}(x_1, \\ldots, x_k) \\text{ pour tout } k \\in \\{1, \\ldots, n\\}\\text{.}"} /></li>
                      <li><LatexRenderer latex={"\\text{Appliquer cet algorithme à la famille } (x_1, x_2, x_3) \\text{ où } x_1 = (1,1,1)\\text{, } x_2 = (1,1,0) \\text{ et } x_3 = (1,0,0) \\text{ dans } \\mathbb{R}^3 \\text{ muni du produit scalaire canonique.}"} /></li>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\textbf{Algorithme de Gram-Schmidt :}"} />
                        <br />
                        <LatexRenderer latex={"\\text{On pose } e_1 = x_1\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Pour } k \\geq 2\\text{, on pose}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"e_k = x_k - \\sum_{i=1}^{k-1} \\frac{\\langle x_k, e_i \\rangle}{\\langle e_i, e_i \\rangle} e_i"} />
                        </div>
                        <LatexRenderer latex={"\\text{Cette construction garantit que } (e_1, \\ldots, e_n) \\text{ est une famille orthogonale et que } \\text{Vect}(e_1, \\ldots, e_k) = \\text{Vect}(x_1, \\ldots, x_k) \\text{ pour tout } k\\text{.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\textbf{Application :}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Étape 1 : } e_1 = x_1 = (1,1,1)\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Étape 2 : } e_2 = x_2 - \\frac{\\langle x_2, e_1 \\rangle}{\\langle e_1, e_1 \\rangle} e_1"} />
                        <br />
                        <LatexRenderer latex={"\\langle x_2, e_1 \\rangle = (1,1,0) \\cdot (1,1,1) = 2"} />
                        <br />
                        <LatexRenderer latex={"\\langle e_1, e_1 \\rangle = (1,1,1) \\cdot (1,1,1) = 3"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } e_2 = (1,1,0) - \\frac{2}{3}(1,1,1) = (1,1,0) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) = (\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3})"} />
                        <br />
                        <LatexRenderer latex={"\\text{Étape 3 : } e_3 = x_3 - \\frac{\\langle x_3, e_1 \\rangle}{\\langle e_1, e_1 \\rangle} e_1 - \\frac{\\langle x_3, e_2 \\rangle}{\\langle e_2, e_2 \\rangle} e_2"} />
                        <br />
                        <LatexRenderer latex={"\\langle x_3, e_1 \\rangle = (1,0,0) \\cdot (1,1,1) = 1"} />
                        <br />
                        <LatexRenderer latex={"\\langle x_3, e_2 \\rangle = (1,0,0) \\cdot (\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3}) = \\frac{1}{3}"} />
                        <br />
                        <LatexRenderer latex={"\\langle e_2, e_2 \\rangle = (\\frac{1}{3})^2 + (\\frac{1}{3})^2 + (-\\frac{2}{3})^2 = \\frac{6}{9} = \\frac{2}{3}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } e_3 = (1,0,0) - \\frac{1}{3}(1,1,1) - \\frac{1/3}{2/3}(\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3}) = (1,0,0) - (\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3}) - \\frac{1}{2}(\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3})"} />
                        <br />
                        <LatexRenderer latex={"e_3 = (1,0,0) - (\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3}) - (\\frac{1}{6}, \\frac{1}{6}, -\\frac{1}{3}) = (\\frac{1}{2}, -\\frac{1}{2}, 0)"} />
                        <br />
                        <LatexRenderer latex={"\\text{La famille orthogonale obtenue est } \\left\\{(1,1,1), (\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3}), (\\frac{1}{2}, -\\frac{1}{2}, 0)\\right\\}\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 3 - Inégalité de Cauchy-Schwarz */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 3"
                title="Inégalité de Cauchy-Schwarz"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace préhilbertien réel muni d'un produit scalaire } \\langle \\cdot, \\cdot \\rangle\\text{.}"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Démontrer l'inégalité de Cauchy-Schwarz : pour tous } x, y \\in E\\text{, } |\\langle x, y \\rangle| \\leq \\|x\\| \\|y\\|\\text{.}"} /></li>
                      <li><LatexRenderer latex={"\\text{À quelle condition a-t-on égalité ?}"} /></li>
                      <li><LatexRenderer latex={"\\text{En déduire l'inégalité triangulaire : } \\|x + y\\| \\leq \\|x\\| + \\|y\\|\\text{.}"} /></li>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{Si } y = 0\\text{, l'inégalité est évidente. Supposons } y \\neq 0\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Pour tout } t \\in \\mathbb{R}\\text{, on a } \\|x - ty\\|^2 \\geq 0\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{En développant :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\|x - ty\\|^2 = \\langle x - ty, x - ty \\rangle = \\|x\\|^2 - 2t\\langle x, y \\rangle + t^2\\|y\\|^2"} />
                        </div>
                        <LatexRenderer latex={"\\text{Cette expression quadratique en } t \\text{ est toujours positive, donc son discriminant est négatif :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\Delta = 4\\langle x, y \\rangle^2 - 4\\|x\\|^2\\|y\\|^2 \\leq 0"} />
                        </div>
                        <LatexRenderer latex={"\\text{D'où } \\langle x, y \\rangle^2 \\leq \\|x\\|^2\\|y\\|^2\\text{, soit } |\\langle x, y \\rangle| \\leq \\|x\\|\\|y\\|\\text{.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Il y a égalité si et seulement si le discriminant est nul, c'est-à-dire si et seulement si il existe } t \\in \\mathbb{R} \\text{ tel que } \\|x - ty\\|^2 = 0\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Cela équivaut à } x = ty\\text{, c'est-à-dire } x \\text{ et } y \\text{ sont colinéaires.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{En utilisant l'identité de polarisation et l'inégalité de Cauchy-Schwarz :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\|x + y\\|^2 = \\|x\\|^2 + 2\\langle x, y \\rangle + \\|y\\|^2 \\leq \\|x\\|^2 + 2|\\langle x, y \\rangle| + \\|y\\|^2"} />
                        </div>
                        <LatexRenderer latex={"\\text{Par Cauchy-Schwarz :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\|x + y\\|^2 \\leq \\|x\\|^2 + 2\\|x\\|\\|y\\| + \\|y\\|^2 = (\\|x\\| + \\|y\\|)^2"} />
                        </div>
                        <LatexRenderer latex={"\\text{En prenant la racine carrée : } \\|x + y\\| \\leq \\|x\\| + \\|y\\|\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 4 - Application : Équation différentielle */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 4"
                title="Application : Équation différentielle avec produit scalaire"
                icon={Crown}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E = C^0([0,1], \\mathbb{R}) \\text{ l'espace des fonctions continues sur } [0,1]\\text{, muni du produit scalaire}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\langle f, g \\rangle = \\int_0^1 f(t)g(t) \\, dt"} />
                    </div>
                    <LatexRenderer latex={"\\text{Soit } F \\text{ le sous-espace des fonctions } f \\in E \\text{ telles que } \\int_0^1 f(t) \\, dt = 0\\text{.}"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Déterminer } F^\\perp\\text{, l'orthogonal de } F \\text{ dans } E\\text{.}"} /></li>
                      <li><LatexRenderer latex={"\\text{Soit } g \\in E\\text{. Déterminer la projection orthogonale de } g \\text{ sur } F\\text{.}"} /></li>
                      <li><LatexRenderer latex={"\\text{Application : trouver la fonction } f \\in F \\text{ qui minimise } \\int_0^1 (f(t) - t)^2 \\, dt\\text{.}"} /></li>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{On a } h \\in F^\\perp \\text{ si et seulement si } \\langle f, h \\rangle = 0 \\text{ pour tout } f \\in F\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Cela équivaut à } \\int_0^1 f(t)h(t) \\, dt = 0 \\text{ pour tout } f \\in F\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Par un théorème de théorie de la mesure, cela équivaut à } h \\text{ constante.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } F^\\perp = \\{c \\cdot \\mathbf{1} : c \\in \\mathbb{R}\\} \\text{ où } \\mathbf{1} \\text{ est la fonction constante égale à 1.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{La projection orthogonale de } g \\text{ sur } F \\text{ est } p_F(g) = g - p_{F^\\perp}(g)\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{La projection sur } F^\\perp \\text{ est donnée par}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"p_{F^\\perp}(g) = \\frac{\\langle g, \\mathbf{1} \\rangle}{\\langle \\mathbf{1}, \\mathbf{1} \\rangle} \\mathbf{1} = \\frac{\\int_0^1 g(t) \\, dt}{1} \\cdot \\mathbf{1} = \\left(\\int_0^1 g(t) \\, dt\\right) \\mathbf{1}"} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } p_F(g)(t) = g(t) - \\int_0^1 g(s) \\, ds\\text{.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{On cherche } f \\in F \\text{ qui minimise } \\|f - t\\|^2 = \\int_0^1 (f(s) - s)^2 \\, ds\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{La solution est la projection orthogonale de la fonction } t \\mapsto t \\text{ sur } F\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{On a } \\int_0^1 t \\, dt = \\frac{1}{2}\\text{, donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f(t) = t - \\frac{1}{2}"} />
                        </div>
                        <LatexRenderer latex={"\\text{Vérification : } \\int_0^1 f(t) \\, dt = \\int_0^1 \\left(t - \\frac{1}{2}\\right) dt = \\frac{1}{2} - \\frac{1}{2} = 0\\text{. Donc } f \\in F\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 5 - Produit scalaire sur R2[X] */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 5"
                title="Produit scalaire sur R₂[X] (EML 2007)"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Montrer qu'on définit bien un produit scalaire sur } \\mathbb{R}_2[X] \\text{ en posant}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\langle P,Q\\rangle = \\int_{-1}^1 P(t)Q(t)(1-t^2)\\,dt."} />
                    </div>
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
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{On doit vérifier les trois propriétés d'un produit scalaire.}"} />
                      
                      <div className="space-y-4">
                        <div>
                          <LatexRenderer latex={"\\textbf{1. Symétrie :}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\langle P,Q\\rangle = \\int_{-1}^1 P(t)Q(t)(1-t^2)\\,dt = \\int_{-1}^1 Q(t)P(t)(1-t^2)\\,dt = \\langle Q,P\\rangle."} />
                          </div>
                        </div>

                        <div>
                          <LatexRenderer latex={"\\textbf{2. Bilinéarité :} \\text{ pour } a,b\\in\\mathbb{R} \\text{ et } P_1,P_2,Q\\in\\mathbb{R}_2[X]\\text{,}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\langle aP_1+bP_2,Q\\rangle = \\int_{-1}^1 (aP_1(t)+bP_2(t))Q(t)(1-t^2)\\,dt = a\\langle P_1,Q\\rangle+b\\langle P_2,Q\\rangle."} />
                          </div>
                          <LatexRenderer latex={"\\text{On a donc la linéarité en la première variable (et donc aussi en la seconde par symétrie).}"} />
                        </div>

                        <div>
                          <LatexRenderer latex={"\\textbf{3. Définie positive :}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\langle P,P\\rangle=\\int_{-1}^1 P(t)^2(1-t^2)\\,dt."} />
                          </div>
                          <LatexRenderer latex={"\\text{L'intégrande est } \\geq 0\\text{, donc l'intégrale est } \\geq 0\\text{.}"} />
                          <br />
                          <LatexRenderer latex={"\\text{De plus, si } \\langle P,P\\rangle=0\\text{, alors } P(t)^2(1-t^2)=0 \\text{ presque partout sur } [-1,1]\\text{, donc } P(t)=0 \\text{ pour tout } t\\in[-1,1]\\setminus\\{-1,1\\}\\text{. Comme } P \\text{ est un polynôme, il s'annule sur une infinité de points, donc } P=0 \\text{ identiquement.}"} />
                        </div>
                      </div>

                      <LatexRenderer latex={"\\text{Ainsi } \\langle \\cdot,\\cdot\\rangle \\text{ définit bien un produit scalaire sur } \\mathbb{R}_2[X]. \\qed"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 6 - Produit scalaire sur les matrices */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 6"
                title="Produit scalaire sur les matrices"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } \\varphi(A,B) = \\operatorname{tr}(A^TB) \\text{ définie sur } \\mathcal{M}_n(\\mathbb{R})\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que } \\varphi \\text{ est un produit scalaire sur } \\mathcal{M}_n(\\mathbb{R})\\text{.}"} />
                    <LatexRenderer latex={"\\text{(On rappelle que } \\operatorname{tr}(M) \\text{ désigne la trace de la matrice } M\\text{.)}"} />
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
                      <LatexRenderer latex={"\\text{Soient } A=(a_{i,k}) \\text{ et } B=(b_{k,j})\\text{. Alors les coefficients de } A^TB \\text{ sont}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"(A^TB)_{i,j}=\\sum_{k=1}^n a_{k,i}b_{k,j}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Il vient alors}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\operatorname{tr}(A^TB)=\\sum_{i=1}^n (A^TB)_{i,i} =\\sum_{i=1}^n \\sum_{k=1}^n a_{k,i}b_{k,i}."} />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <LatexRenderer latex={"\\textbf{Symétrie : } \\text{Si } A,B\\in \\mathcal{M}_n(\\mathbb{R})\\text{,}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\varphi(A,B)=\\operatorname{tr}(A^TB)=\\operatorname{tr}(B^TA)=\\varphi(B,A)."} />
                          </div>
                          <LatexRenderer latex={"\\text{Ainsi } \\varphi \\text{ est symétrique.}"} />
                        </div>

                        <div>
                          <LatexRenderer latex={"\\textbf{Bilinéarité : } \\text{Soient } A,B,C \\in \\mathcal{M}_n(\\mathbb{R}) \\text{ et } \\lambda\\in\\mathbb{R}\\text{. Alors}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\varphi(A+\\lambda B,C) = \\operatorname{tr}\\big((A+\\lambda B)^TC\\big) = \\operatorname{tr}(A^TC) + \\lambda \\operatorname{tr}(B^TC) = \\varphi(A,C)+\\lambda\\varphi(B,C)."} />
                          </div>
                          <LatexRenderer latex={"\\text{Donc } \\varphi \\text{ est bilinéaire.}"} />
                        </div>

                        <div>
                          <LatexRenderer latex={"\\textbf{Définie positive : } \\text{Si } A=(a_{i,k})\\text{, on a}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\varphi(A,A)=\\operatorname{tr}(A^TA)=\\sum_{i=1}^n \\sum_{k=1}^n a_{i,k}^2 \\ge 0."} />
                          </div>
                          <LatexRenderer latex={"\\text{Si } \\varphi(A,A)=0\\text{, alors } \\sum_{i,k} a_{i,k}^2=0\\text{, donc } a_{i,k}=0 \\text{ pour tout } (i,k)\\text{, ce qui implique } A=0\\text{.}"} />
                        </div>
                      </div>

                      <LatexRenderer latex={"\\text{Ainsi } \\varphi \\text{ est un produit scalaire sur } \\mathcal{M}_n(\\mathbb{R})\\text{.}"} />
                      
                      <div className="mt-6 pt-4 border-t border-orange-300">
                        <LatexRenderer latex={"\\textbf{Complément : orthogonalité.}"} />
                        <LatexRenderer latex={"\\text{Montrons que } \\mathfrak{S}_n(\\mathbb{R}) \\text{ (matrices symétriques) et } \\mathfrak{A}_n(\\mathbb{R}) \\text{ (matrices antisymétriques) sont orthogonaux pour } \\varphi\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Soit } A\\in \\mathfrak{S}_n(\\mathbb{R}) \\text{ et } B\\in \\mathfrak{A}_n(\\mathbb{R})\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\varphi(A,B)=\\operatorname{tr}(A^TB)=\\operatorname{tr}(AB)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Mais comme } A^T=A \\text{ et } B^T=-B\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\varphi(A,B)=\\operatorname{tr}(AB)=\\operatorname{tr}(B^TA)=\\operatorname{tr}((-B)A)=-\\operatorname{tr}(AB)=-\\varphi(A,B)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\varphi(A,B)=0\\text{. Ainsi } \\mathfrak{S}_n(\\mathbb{R}) \\perp \\mathfrak{A}_n(\\mathbb{R}). \\qed"} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 7 - Vers les projecteurs orthogonaux */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 7"
                title="Vers les projecteurs orthogonaux"
                icon={Lightbulb}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien, et soit } F \\text{ un sous-espace vectoriel de } E\\text{.}"} />
                    <LatexRenderer latex={"\\text{Soit } (e_1,\\dots,e_p) \\text{ une base orthonormée de } F\\text{.}"} />
                    <LatexRenderer latex={"\\text{On pose alors, pour tout } x \\in E\\text{,}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"q(x) = x - \\sum_{i=1}^p \\langle x,e_i\\rangle e_i."} />
                    </div>
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que q est un endomorphisme de E, puis que q est un projecteur.</li>
                      <li><LatexRenderer latex={"\\text{Montrer que } F \\subset \\text{Ker}(q)\\text{.}"} /></li>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{Il est clair que } q \\text{ est à valeurs dans } E\\text{, montrons qu'il s'agit bien d'une application linéaire.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Soient } x,y \\in E \\text{ et } \\lambda \\in \\mathbb{R}\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"q(\\lambda x+y)=\\lambda x+y - \\sum_{i=1}^p \\langle \\lambda x+y,e_i\\rangle e_i"} />
                        </div>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"=\\lambda x+y - \\sum_{i=1}^p \\big(\\lambda \\langle x,e_i\\rangle + \\langle y,e_i\\rangle\\big)e_i =\\lambda\\Big(x-\\sum_{i=1}^p \\langle x,e_i\\rangle e_i\\Big) + \\Big(y-\\sum_{i=1}^p \\langle y,e_i\\rangle e_i\\Big)"} />
                        </div>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"=\\lambda q(x)+q(y)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } q \\text{ est bien un endomorphisme de } E\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{On a alors, pour tout } x \\in E \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"q(q(x)) = q\\Big(x-\\sum_{i=1}^p \\langle x,e_i\\rangle e_i\\Big) = q(x) - \\sum_{i=1}^p \\langle x,e_i\\rangle q(e_i)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Or, pour } i \\in \\{1,\\dots,p\\}\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"q(e_i)=e_i-\\sum_{k=1}^p \\langle e_i,e_k\\rangle e_k = e_i - \\langle e_i,e_i\\rangle e_i = e_i-\\|e_i\\|^2 e_i = 0_E."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } q(q(x))=q(x) \\text{ : } q \\text{ est un projecteur.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Nous voulons prouver que } q(e_i)=0_E\\text{. Or c'est déjà établi ci-dessus.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } \\text{Ker}(q) \\text{ est un sous-espace vectoriel de } E \\text{ qui contient } e_1,\\dots,e_p\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Il contient donc } \\text{Vect}(e_1,\\dots,e_p)=F\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Notons qu'on peut faire mieux : prouvons que } F=\\text{Ker}(q)\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{En effet, si } x\\in \\text{Ker }q\\text{, alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"x-\\sum_{i=1}^p \\langle x,e_i\\rangle e_i=0_E \\iff x=\\sum_{i=1}^p \\langle x,e_i\\rangle e_i."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } x\\in \\text{Vect}(e_1,\\dots,e_p)=F\\text{.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Ainsi } \\text{Ker}(q)\\subset F\\text{, et par double inclusion } F=\\text{Ker}(q)\\text{.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 8 - Somme directe */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 8"
                title="Somme directe"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien. Soient } F_1,\\dots,F_n \\text{ des sous-espaces vectoriels deux à deux orthogonaux de } E\\text{.}"} />
                    <LatexRenderer latex={"\\text{Montrer que la somme } F_1+\\cdots+F_n \\text{ est directe.}"} />
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
                    <div className="space-y-4">
                      <LatexRenderer latex={"\\textbf{Solution.}"} />
                      <LatexRenderer latex={"\\text{Soient } x_1 \\in F_1,\\, x_2 \\in F_2,\\,\\dots,\\,x_n \\in F_n \\text{ tels que}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"x_1+x_2+\\cdots+x_n=0_E."} />
                      </div>
                      <LatexRenderer latex={"\\text{Alors, pour } i\\in \\llbracket 1,n\\rrbracket\\text{, on a}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\langle x_i,\\, x_1+x_2+\\cdots+x_n\\rangle=\\langle x_i,0_E\\rangle=0."} />
                      </div>
                      <LatexRenderer latex={"\\text{Or, par linéarité à droite du produit scalaire, on a également}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\langle x_i,x_1\\rangle+\\cdots+\\langle x_i,x_n\\rangle=0."} />
                      </div>
                      <LatexRenderer latex={"\\text{Mais les } F_i \\text{ étant deux à deux orthogonaux par hypothèse, on a } \\langle x_i,x_j\\rangle=0 \\text{ si } i\\neq j\\text{.}"} />
                      <br />
                      <LatexRenderer latex={"\\text{On en déduit que}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\|x_i\\|^2=\\langle x_i,x_i\\rangle=0,"} />
                      </div>
                      <LatexRenderer latex={"\\text{et donc nécessairement } x_i=0_E\\text{.}"} />
                      <br />
                      <LatexRenderer latex={"\\text{Ceci étant vrai pour tout } i\\text{, on a } x_1=x_2=\\cdots=x_n=0\\text{.}"} />
                      <br />
                      <LatexRenderer latex={"\\text{Les } F_i \\text{ sont donc en somme directe.}"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 9 - Produit scalaire intégral */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 9"
                title="Produit scalaire intégral (EDHEC 2011)"
                icon={Crown}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } n \\text{ un entier naturel supérieur ou égal à } 2\\text{.}"} />
                    <LatexRenderer latex={"\\text{On note } \\mathbb{R}_n[X] \\text{ l'espace vectoriel des polynômes à coefficients réels, de degré inférieur ou égal à } n\\text{.}"} />
                    
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer que, pour tout couple } (P,Q) \\text{ d'éléments de } \\mathbb{R}_n[X]\\text{, l'intégrale } \\int_0^{+\\infty} P(t)Q(t)e^{-t}\\,dt \\text{ est convergente.}"} /></li>
                      <li>
                        <LatexRenderer latex={"\\text{Montrer que l'application}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\mathbb{R}_n[X]\\times\\mathbb{R}_n[X]\\to\\mathbb{R}, \\quad (P,Q)\\mapsto \\langle P,Q\\rangle=\\int_0^{+\\infty} P(t)Q(t)e^{-t}\\,dt"} />
                        </div>
                        <LatexRenderer latex={"\\text{est un produit scalaire sur } \\mathbb{R}_n[X]\\text{. On note alors } \\|P\\|=\\sqrt{\\langle P,P\\rangle} \\text{ la norme associée.}"} />
                      </li>
                      <li>
                        <div className="space-y-2">
                          <LatexRenderer latex={"\\textbf{a)} \\text{ Soient } P,Q\\in \\mathbb{R}_n[X]\\text{, et } P',Q' \\text{ leurs polynômes dérivés respectifs. Établir la relation :}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"\\langle P',Q\\rangle+\\langle P,Q'\\rangle=\\langle P,Q\\rangle - P(0)Q(0)."} />
                          </div>
                          <LatexRenderer latex={"\\textbf{b)} \\text{ En déduire que si } P \\text{ est un polynôme non constant de } \\mathbb{R}_n[X]\\text{, orthogonal à tout polynôme de degré strictement inférieur, alors } P \\text{ est proportionnel à}"} />
                          <div className="text-center my-4">
                            <LatexRenderer latex={"X^n-\\binom{n}{1}X^{n-1}+\\binom{n}{2}X^{n-2}-\\cdots+(-1)^n."} />
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{On sait que pour tout } k\\in\\mathbb{N}\\text{, l'intégrale}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_0^{+\\infty} t^k e^{-t}\\,dt"} />
                        </div>
                        <LatexRenderer latex={"\\text{converge (elle vaut } k!\\text{).}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Or } PQ \\text{ est un polynôme de } \\mathbb{R}_{2n}[X]\\text{, donc de la forme } PQ=\\sum_{k=0}^{2n} a_k X^k\\text{, de sorte que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\int_0^{+\\infty} P(t)Q(t)e^{-t}\\,dt = \\sum_{k=0}^{2n} a_k \\int_0^{+\\infty} t^k e^{-t}\\,dt"} />
                        </div>
                        <LatexRenderer latex={"\\text{converge par combinaison linéaire d'intégrales convergentes.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Soient } P,Q\\in \\mathbb{R}_n[X]\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle P,Q\\rangle = \\int_0^{+\\infty} P(t)Q(t)e^{-t}\\,dt = \\int_0^{+\\infty} Q(t)P(t)e^{-t}\\,dt=\\langle Q,P\\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\langle \\cdot,\\cdot\\rangle \\text{ est symétrique.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Soient } P,Q,R\\in\\mathbb{R}_n[X] \\text{ et } \\lambda\\in\\mathbb{R} \\text{ :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle \\lambda P+Q,R\\rangle = \\int_0^{+\\infty} \\big(\\lambda P(t)+Q(t)\\big)R(t)e^{-t}\\,dt = \\lambda\\langle P,R\\rangle+\\langle Q,R\\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\langle \\cdot,\\cdot\\rangle \\text{ est bilinéaire.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Enfin, si } P\\in\\mathbb{R}_n[X]\\text{, alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle P,P\\rangle=\\int_0^{+\\infty} P(t)^2 e^{-t}\\,dt \\geq 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Si } \\langle P,P\\rangle=0\\text{, alors la fonction } t\\mapsto P(t)^2 e^{-t} \\text{ est nulle sur } \\mathbb{R}_+\\text{. En particulier, pour tout } t>0\\text{, on a } P(t)=0\\text{, donc } P \\text{ a une infinité de racines et est nécessairement nul.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Ainsi, } \\langle \\cdot,\\cdot\\rangle \\text{ est bien un produit scalaire sur } \\mathbb{R}_n[X]\\text{.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\textbf{Note :} \\text{ Cette question nécessite une intégration par parties et des calculs avancés sur les polynômes orthogonaux. La démonstration complète dépasse le cadre de cet exercice introductif.}"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 10 - Inégalité avec sommes */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 10"
                title="Inégalité avec sommes"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Montrer que, } \\forall n \\in \\mathbb{N}^*\\text{,}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"n^2 \\;\\leq\\; \\left(\\sum_{i=1}^n \\sqrt{i}\\right)^2 \\;\\leq\\; \\frac{n^2(n+1)}{2}."} />
                    </div>
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
                      <LatexRenderer latex={"\\text{Appliquons l'inégalité de Cauchy–Schwarz dans } \\mathbb{R}^n \\text{ à}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"x=(\\sqrt{1},\\dots,\\sqrt{n}), \\quad y=(1,\\dots,1)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Il vient alors :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\left(\\sum_{i=1}^n \\sqrt{i}\\right)^2 \\leq \\left(\\sum_{i=1}^n (\\sqrt{i})^2\\right)\\left(\\sum_{i=1}^n 1\\right) =\\left(\\sum_{i=1}^n i\\right)\\cdot n =\\frac{n(n+1)}{2}\\cdot n =\\frac{n^2(n+1)}{2}."} />
                      </div>
                      <LatexRenderer latex={"\\text{De plus, pour tout } i \\in \\llbracket 1,n \\rrbracket\\text{, on a } \\sqrt{i} \\geq 1\\text{, de sorte que}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\sum_{i=1}^n \\sqrt{i} \\geq n \\quad\\Rightarrow\\quad \\left(\\sum_{i=1}^n \\sqrt{i}\\right)^2 \\geq n^2."} />
                      </div>
                      <LatexRenderer latex={"\\text{Ainsi,}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"n^2 \\leq \\left(\\sum_{i=1}^n \\sqrt{i}\\right)^2 \\leq \\frac{n^2(n+1)}{2}. \\qed"} />
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
            <Link to="/formation/maths-algebre-bilineaire">
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

export default Chapitre3AlgebreBilineaireExercicesPage;
