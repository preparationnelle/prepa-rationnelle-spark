import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage = () => {
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
            <Link to="/formation/maths-appliquees-2e-annee" className="hover:text-orange-700 transition-colors">
              Maths Appliquées - 2ème année
            </Link>
            <ChevronRight className="h-3 w-3 text-orange-400/50 mx-1" />
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens" className="hover:text-orange-700 transition-colors">
              Chapitre 9 - Algèbre bilinéaire et espaces euclidiens
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
              Exercices - Chapitre 9 : Algèbre bilinéaire et espaces euclidiens
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les concepts d'algèbre bilinéaire, de formes quadratiques et d'espaces euclidiens
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens-quiz">
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
          {/* Exercice 1 - Orthogonal d'un sous-espace vectoriel */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 1"
                title="Orthogonal d'un sous-espace vectoriel"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien de dimension finie et } F \\text{ un sous-espace vectoriel de } E\\text{. Montrer que :}"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\dim(F^\\perp) = \\dim(E) - \\dim(F)"} /></li>
                      <li><LatexRenderer latex={"F^{\\perp\\perp} = F"} /></li>
                      <li><LatexRenderer latex={"E = F \\oplus F^\\perp"} /></li>
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
                      <ol className="list-decimal list-inside space-y-4 pl-4">
                        <li>
                          <LatexRenderer latex={"\\text{Soit } (e_1, \\ldots, e_p) \\text{ une base orthonormée de } F\\text{. On peut la compléter en une base orthonormée } (e_1, \\ldots, e_p, e_{p+1}, \\ldots, e_n) \\text{ de } E\\text{. }"} />
                          <br />
                          <LatexRenderer latex={"\\text{Alors } F^\\perp \\text{ est le noyau de la projection orthogonale sur } F\\text{, donc } \\dim(F^\\perp) = n - p = \\dim(E) - \\dim(F)\\text{. }"} />
                        </li>

                        <li>
                          <LatexRenderer latex={"\\text{Puisque } F \\subset F^{\\perp\\perp}\\text{, il suffit de prouver l'égalité des dimensions. }"} />
                          <br />
                          <LatexRenderer latex={"\\text{Or } \\dim(F^{\\perp\\perp}) = \\dim(E) - \\dim(F^\\perp) = \\dim(E) - (\\dim(E) - \\dim(F)) = \\dim(F)\\text{. }"} />
                          <br />
                          <LatexRenderer latex={"\\text{D'où } F = F^{\\perp\\perp}\\text{. }"} />
                        </li>

                        <li>
                          <LatexRenderer latex={"\\text{D'après la question précédente, on a } F \\cap F^\\perp = \\{0\\}\\text{. En effet, si } x \\in F \\cap F^\\perp\\text{, alors } \\langle x, x \\rangle = 0 \\text{ donc } x = 0\\text{. }"} />
                          <br />
                          <LatexRenderer latex={"\\text{De plus, } \\dim(F) + \\dim(F^\\perp) = \\dim(E)\\text{, donc } E = F \\oplus F^\\perp\\text{. }"} />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 2 - Formes bilinéaires symétriques */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 2"
                title="Formes bilinéaires symétriques"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un } \\mathbb{R}\\text{-espace vectoriel de dimension } n \\text{ et } b \\text{ une forme bilinéaire symétrique sur } E\\text{. }"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer qu'il existe une unique matrice symétrique } A \\in \\mathcal{M}_n(\\mathbb{R}) \\text{ telle que } b(x,y) = {}^tX A Y \\text{ pour tous } x,y \\in E\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer que } b \\text{ est définie positive si et seulement si } A \\text{ l'est. }"} /></li>
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
                        <LatexRenderer latex={"\\text{Soit } \\mathcal{B} = (e_1, \\ldots, e_n) \\text{ une base de } E\\text{. On définit la matrice } A \\text{ par } a_{i,j} = b(e_i, e_j)\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Puisque } b \\text{ est symétrique, on a } a_{i,j} = a_{j,i}\\text{, donc } A \\text{ est symétrique. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{De plus, pour } x = \\sum x_i e_i, y = \\sum y_j e_j\\text{, on a } b(x,y) = \\sum_{i,j} x_i y_j a_{i,j} = {}^tX A Y\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{L'unicité vient du fait que la matrice est déterminée par ses coefficients. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Soit } x \\in E, x \\neq 0\\text{. Alors } b(x,x) = {}^tX A X\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } b \\text{ est définie positive si et seulement si } {}^tX A X > 0 \\text{ pour tout } x \\neq 0\\text{, c'est-à-dire si } A \\text{ est définie positive. }"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 3 - Formes quadratiques et matrices */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 3"
                title="Formes quadratiques et matrices"
                icon={Target}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix} \\in \\mathcal{M}_3(\\mathbb{R})\\text{. }"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer que } A \\text{ est symétrique définie positive. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Déterminer une base orthonormée de } \\mathbb{R}^3 \\text{ dans laquelle la matrice de la forme quadratique associée à } A \\text{ est diagonale. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Calculer } \\max_{x \\in \\mathbb{R}^3, \\|x\\|=1} x^\\top A x\\text{. }"} /></li>
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
                        <LatexRenderer latex={"\\text{Les mineurs principaux de } A \\text{ sont : }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\Delta_1 = 2 > 0, \\quad \\Delta_2 = \\det\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix} = 6-1 = 5 > 0, \\quad \\Delta_3 = \\det(A) = 2(6-1)-1(2-0)+0 = 10-2+0 = 8 > 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } A \\text{ est symétrique définie positive. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Les valeurs propres de } A \\text{ sont les racines de } \\det(A - \\lambda I_3) = 0\\text{ : }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\det\\begin{pmatrix} 2-\\lambda & 1 & 0 \\\\ 1 & 3-\\lambda & 1 \\\\ 0 & 1 & 2-\\lambda \\end{pmatrix} = (2-\\lambda)(3-\\lambda)(2-\\lambda) - (2-\\lambda) - (2-\\lambda) + 1 = 0"} />
                        </div>
                        <LatexRenderer latex={"\\text{Les valeurs propres sont } \\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 4\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Une base orthonormée formée de vecteurs propres est donnée par le procédé d'orthonormalisation appliqué aux vecteurs propres : }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"v_1 = \\frac{1}{\\sqrt{2}}(1,-1,0), \\quad v_2 = \\frac{1}{\\sqrt{6}}(1,1,-2), \\quad v_3 = \\frac{1}{\\sqrt{3}}(1,1,1)."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Le maximum de } x^\\top A x \\text{ sous la contrainte } \\|x\\| = 1 \\text{ est atteint pour le vecteur propre associé à la plus grande valeur propre, soit } \\lambda_3 = 4\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc } \\max = 4\\text{. }"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 4 - Orthogonal d'un sous-espace affine */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 4"
                title="Orthogonal d'un sous-espace affine"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien et } H \\text{ un hyperplan affine de } E\\text{. Montrer que } H^\\perp \\text{ est une droite affine. }"} />
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
                      <LatexRenderer latex={"\\text{Soit } H \\text{ un hyperplan affine. Il existe } a \\in E \\text{ et un hyperplan vectoriel } F \\text{ tel que } H = a + F\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{Alors } H^\\perp = \\{ x \\in E : \\forall y \\in H, \\langle x - a, y - a \\rangle = 0 \\}\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{Mais } \\langle x - a, y - a \\rangle = 0 \\iff \\langle x - a, y \\rangle = \\langle x - a, a \\rangle \\iff \\langle x, y \\rangle = \\langle a, y \\rangle + \\langle x, a \\rangle - \\langle a, a \\rangle\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{Puisque } F^\\perp \\text{ est une droite vectorielle, } H^\\perp \\text{ est une droite affine parallèle à } F^\\perp\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{En effet, } \\dim(F^\\perp) = 1\\text{, donc } H^\\perp \\text{ est une droite affine. }"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 5 - Distance à un sous-espace */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 5"
                title="Distance à un sous-espace"
                icon={Target}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien, } F \\text{ un sous-espace vectoriel de } E \\text{ et } x \\in E\\text{. }"} />
                    <LatexRenderer latex={"\\text{Montrer que la distance de } x \\text{ à } F \\text{ est } \\|x - p_F(x)\\|\\text{, où } p_F \\text{ est la projection orthogonale sur } F\\text{. }"} />
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
                      <LatexRenderer latex={"\\text{Soit } y \\in F\\text{. Alors } \\|x - y\\|^2 = \\|x - p_F(x) + p_F(x) - y\\|^2\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{Comme } p_F(x) - y \\in F \\text{ et } x - p_F(x) \\in F^\\perp\\text{, on a : }"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\|x - y\\|^2 = \\|x - p_F(x)\\|^2 + \\|p_F(x) - y\\|^2 \\geq \\|x - p_F(x)\\|^2."} />
                      </div>
                      <LatexRenderer latex={"\\text{L'égalité est atteinte pour } y = p_F(x)\\text{. }"} />
                      <br />
                      <LatexRenderer latex={"\\text{Donc la distance minimale est } \\|x - p_F(x)\\|\\text{. }"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 6 - Base orthonormée et orthogonal d'un sous-espace */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 6"
                title="Base orthonormée et orthogonal d'un sous-espace"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien de dimension } n \\text{ et } F \\text{ un sous-espace vectoriel de dimension } p\\text{. }"} />
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer qu'il existe une base orthonormée de } F\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer qu'il existe une base orthonormée de } F^\\perp\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{En déduire qu'il existe une base orthonormée de } E \\text{ formée de } p \\text{ vecteurs de } F \\text{ et } n-p \\text{ vecteurs de } F^\\perp\\text{. }"} /></li>
                    </ol>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{Soit } (e_1, \\ldots, e_p) \\text{ une base quelconque de } F\\text{. On applique le procédé de Gram-Schmidt : }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"u_1 = \\frac{e_1}{\\|e_1\\|}, \\quad u_k = \\frac{e_k - \\sum_{i=1}^{k-1} \\langle e_k, u_i \\rangle u_i}{\\left\\| e_k - \\sum_{i=1}^{k-1} \\langle e_k, u_i \\rangle u_i \\right\\|} \\text{ pour } k = 2, \\ldots, p."} />
                        </div>
                        <LatexRenderer latex={"\\text{Alors } (u_1, \\ldots, u_p) \\text{ est une base orthonormée de } F\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Même démonstration pour } F^\\perp\\text{ qui est de dimension } n-p\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{On prend la concaténation des bases orthonormées de } F \\text{ et } F^\\perp\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Ces vecteurs sont orthogonaux car } F \\perp F^\\perp\\text{. Donc la famille obtenue est orthonormée. }"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 7 - Base orthonormée dans R4 et orthogonal d'un sous-espace */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 7"
                title="Base orthonormée dans R4 et orthogonal d'un sous-espace"
                icon={Lightbulb}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Dans } \\mathbb{R}^4 \\text{ muni du produit scalaire canonique, déterminer une base de } F^\\perp \\text{ dans les deux cas suivants :}"} />

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"F = \\mathrm{Vect}((1,1,0,-2),(0,1,3,2))"} /></li>
                      <li><LatexRenderer latex={"F = \\{(x,y,z,t) \\in \\mathbb{R}^4 : x+y-z+t=0 \\ \\text{et}\\ x-y-t=0 \\}"} /></li>
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
                        <LatexRenderer latex={"\\text{On sait que } (x,y,z,t) \\in F^\\perp \\text{ ssi}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle (x,y,z,t),(1,1,0,-2)\\rangle = 0, \\quad \\langle (x,y,z,t),(0,1,3,2)\\rangle = 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F^\\perp = \\{(x,y,z,t) \\in \\mathbb{R}^4 : x+y-2t=0 \\ \\text{et}\\ y+3z+2t=0\\}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Résolution :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\begin{cases} x+y-2t=0 \\\\ y+3z+2t=0 \\end{cases} \\iff \\begin{cases} x=2t-y \\\\ y=-3z-2t \\end{cases} \\iff (x,y,z,t) = (3z+4t,-3z-2t,z,t)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F^\\perp = \\mathrm{Vect}((3,-3,1,0),(4,-2,0,1))."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Pour déterminer une base de } E\\text{, on résout}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\begin{cases} x+y-z+t=0 \\\\ x-y-t=0 \\end{cases} \\iff \\begin{cases} z=2x \\\\ t=x-y \\end{cases} \\iff (x,y,z,t) = (x,y,2x,x-y)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F = \\mathrm{Vect}((1,0,2,1),(0,1,0,-1))."} />
                        </div>
                        <LatexRenderer latex={"\\text{Puis, } (x,y,z,t) \\in F^\\perp \\text{ ssi}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle (x,y,z,t),(1,0,2,1)\\rangle = 0, \\quad \\langle (x,y,z,t),(0,1,0,-1)\\rangle = 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\begin{cases} x+2z+t=0 \\\\ y-t=0 \\end{cases} \\iff (x,y,z,t)=(-2z-t,t,z,t)=z(-2,0,1,0)+t(-1,1,0,1)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"F^\\perp = \\mathrm{Vect}((-2,0,1,0),(-1,1,0,1))."} />
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 8 - Produit scalaire sur Mn(R) */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 8"
                title="Produit scalaire sur Mn(R)"
                icon={Crown}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Sur } \\mathcal{M}_n(\\mathbb{R})\\text{, on pose } \\langle A,B\\rangle = \\operatorname{tr}({}^tAB)\\text{. }"} />
                    <LatexRenderer latex={"\\text{Soit } p \\text{ l'application définie sur } \\mathcal{M}_n(\\mathbb{R}) \\text{ par}"} />
                    <div className="text-center">
                      <LatexRenderer latex={"p(M) = \\frac{M+{}^tM}{2}."} />
                    </div>

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer que } \\langle \\cdot , \\cdot \\rangle \\text{ est un produit scalaire sur } \\mathcal{M}_n(\\mathbb{R})\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer que } p \\text{ est un projecteur de } \\mathcal{M}_n(\\mathbb{R})\\text{, et déterminer son image et son noyau. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer que } p \\text{ est le projecteur orthogonal sur } \\mathcal{S}_n(\\mathbb{R})\\text{, l'ensemble des matrices symétriques de } \\mathcal{M}_n(\\mathbb{R})\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Soit } M=(m_{i,j}) \\in \\mathcal{M}_n(\\mathbb{R}) \\text{ définie par } m_{i,j} = \\begin{cases} 1 & \\text{si } i=1 \\\\ 0 & \\text{sinon}\\end{cases}\\text{. }"} />
                      <LatexRenderer latex={"\\text{Calculer } \\min_{A \\in \\mathcal{A}_n(\\mathbb{R})} \\|A-M\\|\\text{. Même question si } M \\text{ est la matrice dont tous les coefficients valent 1. }"} /></li>
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{Pour } A,B,C \\in \\mathcal{M}_n(\\mathbb{R}), \\lambda \\in \\mathbb{R}\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle A+B,C\\rangle = \\operatorname{tr}({}^t(A+B)C) = \\operatorname{tr}({}^tAC+{}^tBC) = \\langle A,C\\rangle + \\langle B,C\\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\langle \\cdot , \\cdot \\rangle \\text{ est linéaire. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{De plus}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle A,B\\rangle = \\operatorname{tr}({}^tAB)=\\operatorname{tr}({}^tBA)=\\langle B,A\\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle A,A\\rangle = \\operatorname{tr}({}^tAA)=\\sum_{i,j} a_{i,j}^2 \\geq 0,"} />
                        </div>
                        <LatexRenderer latex={"\\text{avec égalité ssi } A=0\\text{. Donc c'est bien un produit scalaire.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{On a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"p^2(M)=p\\Big(\\frac{M+{}^tM}{2}\\Big)=\\frac{\\frac{M+{}^tM}{2}+(\\frac{M+{}^tM}{2})^t}{2}= \\frac{M+{}^tM}{2}=p(M)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } p \\text{ est un projecteur. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{De plus, } \\ker(p) = \\mathcal{A}_n(\\mathbb{R}) \\text{ (matrices antisymétriques), et } \\mathrm{Im}(p)=\\mathcal{S}_n(\\mathbb{R})\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Pour } A \\in \\mathcal{A}_n(\\mathbb{R}), S \\in \\mathcal{S}_n(\\mathbb{R})\\text{, }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle A,S\\rangle = \\operatorname{tr}({}^tAS) = \\operatorname{tr}((-A)S)= -\\operatorname{tr}(AS)= -\\langle S,A\\rangle= -\\langle A,S\\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\langle A,S\\rangle=0\\text{. Ainsi } \\mathcal{A}_n(\\mathbb{R}) = (\\mathcal{S}_n(\\mathbb{R}))^\\perp\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Comme les dimensions coïncident, } p \\text{ est la projection orthogonale sur } \\mathcal{S}_n(\\mathbb{R})\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{On cherche } \\min_{A \\in \\mathcal{A}_n(\\mathbb{R})} \\|A-M\\|\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Ce minimum est } \\|q(M)-M\\|\\text{, avec } q=id-p\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"q(M)-M=-p(M)=-\\frac{M+{}^tM}{2}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc le minimum est}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\left\\|\\frac{M+{}^tM}{2}\\right\\| = \\frac{1}{2}\\|M+{}^tM\\|."} />
                        </div>

                        <LatexRenderer latex={"\\text{Cas 1 : } M \\text{ a sa première ligne pleine de 1 et le reste nul. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"M+{}^tM=\\begin{pmatrix} 2 & 1 & \\cdots & 1 \\\\ 1 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & 0 & \\cdots & 0 \\end{pmatrix}."} />
                        </div>
                        <LatexRenderer latex={"\\text{On calcule}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\|M+{}^tM\\|^2=4+2(n-1)=2n+2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc le minimum est}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\sqrt{\\frac{n+1}{2}}."} />
                        </div>

                        <LatexRenderer latex={"\\text{Cas 2 : } M \\text{ est la matrice de tous 1. Alors } M \\in \\mathcal{S}_n(\\mathbb{R})\\text{, donc } q(M)=0\\text{, et}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\min \\|A-M\\| = \\|M\\| = \\sqrt{n^2}=n."} />
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 9 - Endomorphisme anti-symétrique */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 9"
                title="Endomorphisme anti-symétrique"
                icon={Lightbulb}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien et soit } f \\text{ un endomorphisme de } E \\text{ tel que }"} />
                    <div className="text-center">
                      <LatexRenderer latex={"\\forall x \\in E, \\ \\langle f(x), x \\rangle = 0."} />
                    </div>
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li><LatexRenderer latex={"\\text{Montrer que } \\forall (x,y) \\in E^2, \\langle f(x), y \\rangle = - \\langle x, f(y) \\rangle\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer que } \\ker(f) = (\\operatorname{Im}(f))^\\perp\\text{. }"} /></li>
                      <li><LatexRenderer latex={"\\text{Montrer que si } \\lambda \\text{ est valeur propre de } f\\text{, alors } \\lambda = 0\\text{. L'endomorphisme } f \\text{ est-il diagonalisable ? }"} /></li>
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
                    <ol className="list-decimal list-inside space-y-6 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{Soient } (x,y) \\in E^2\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle f(x+y), x+y \\rangle = 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Mais}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle f(x+y), x+y \\rangle = \\langle f(x), x \\rangle + \\langle f(y), x \\rangle + \\langle f(x), y \\rangle + \\langle f(y), y \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{On en déduit donc que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle f(x), y \\rangle + \\langle f(y), x \\rangle = 0 \\iff \\langle f(x), y \\rangle = - \\langle x, f(y) \\rangle."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Soit } x \\in \\ker(f) \\text{ et } y \\in \\operatorname{Im}(f)\\text{. Alors il existe } z \\in E \\text{ tel que } y = f(z)\\text{. Et alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle x, y \\rangle = \\langle x, f(z) \\rangle = - \\langle f(x), z \\rangle = - \\langle 0, z \\rangle = 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi, } \\ker f \\subset (\\operatorname{Im} f)^\\perp\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Mais par le théorème du rang, on a } \\dim \\ker f = n - \\dim \\operatorname{Im} f\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{D'autre part, on a } \\dim(\\operatorname{Im} f)^\\perp = \\dim E - \\dim \\operatorname{Im} f = \\dim \\ker f\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Or, deux espaces de même dimension tels que l'un soit inclus dans l'autre sont nécessairement égaux. Donc }"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\ker f = (\\operatorname{Im} f)^\\perp."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Soit } \\lambda \\text{ une valeur propre de } f\\text{, et soit } x \\text{ un vecteur propre associé à la valeur propre } \\lambda\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle x, f(x) \\rangle = \\langle x, \\lambda x \\rangle = \\lambda \\|x\\|^2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Mais par hypothèse, ce produit scalaire est nul, et } \\|x\\|^2 \\text{ étant non nul, c'est que nécessairement } \\lambda = 0\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Ainsi, la seule valeur propre possible de } f \\text{ est } 0\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{On en déduit que } f \\text{ est diagonalisable si et seulement si } E_0(f) = E\\text{, c'est-à-dire si et seulement si } f \\text{ est l'endomorphisme nul. }"} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Link to="/formation/maths-appliquees-2e-annee">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-espaces-euclidiens">
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

export default Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage;
