import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre10ReductionMatricesSymetriquesExercicesPage = () => {
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
            <Link to="/formation/maths-reduction-matrices-symetriques" className="hover:text-orange-700 transition-colors">
              Chapitre 10 - Réduction des endomorphismes et matrices symétriques
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
              Exercices - Chapitre 10 : Réduction des endomorphismes et matrices symétriques
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les méthodes de diagonalisation et réduction complète des matrices symétriques
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/formation/maths-reduction-matrices-symetriques">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-reduction-matrices-symetriques-quiz">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Target className="mr-2 h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Exercices */}
        <div className="space-y-8">
          {/* Exercice 1 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 1"
                title="Diagonalisation d'une matrice symétrique"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <div className="text-center">
                      <LatexRenderer latex={"\\text{Soit } A = \\begin{pmatrix} 3 & 2 & 4 \\\\ 2 & 0 & 2 \\\\ 4 & 2 & 3 \\end{pmatrix} \\in \\mathcal{M}_3(\\mathbb{R})."} />
                    </div>

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que A est diagonalisable.</li>
                      <li>Déterminer le rang de A + I₃. En déduire que -1 est valeur propre de A et déterminer dim E₋₁(A). En déduire les autres valeurs propres de A.</li>
                      <li>Déterminer une base des sous-espaces propres de A.</li>
                      <li>Déterminer une matrice orthogonale P et une matrice diagonale D telle que A = ᵀPDP.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('1')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"A \\text{ est symétrique à coefficients réels, donc diagonalisable.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Les trois lignes de } A + I_3 \\text{ sont colinéaires, donc } \\operatorname{rg}(A + I_3) = 1."} />
                        <br />
                        <LatexRenderer latex={"\\text{Ainsi, } -1 \\text{ est valeur propre de } A \\text{ et } \\dim E_{-1}(A) = 2."} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{La trace de } A \\text{ est égale à 6, donc si } \\lambda \\text{ est la dernière valeur propre de } A\\text{, alors}"} />
                        <br />
                        <LatexRenderer latex={"\\operatorname{tr}(A) = -1 \\times 2 + \\lambda = 6\\text{, donc } \\lambda = 8."} />
                        <br />
                        <LatexRenderer latex={"\\text{Ainsi, } \\operatorname{Spec}(A) = \\{-1, 8\\}."} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{En remarquant que les colonnes de } A + I_3 \\text{ sont liées par les relations } C_1 - 2C_2 = 0 \\text{ et } -2C_2 + C_3 = 0,"} />
                        <br />
                        <LatexRenderer latex={"\\text{et que celles de } A - 8I_3 \\text{ sont liées par la relation } 2C_1 + C_2 + 2C_3 = 0\\text{, on obtient :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"E_{-1}(A) = \\operatorname{Vect}\\left( \\begin{pmatrix} 1 \\\\ -2 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ -2 \\\\ 1 \\end{pmatrix} \\right) \\quad \\text{et} \\quad E_8(A) = \\operatorname{Vect}\\left( \\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\right)"} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Le procédé d'orthonormalisation de Gram-Schmidt donne comme base orthonormée de } E_{-1}(A) \\text{ la famille :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\frac{1}{\\sqrt{5}} \\begin{pmatrix} 1 \\\\ -2 \\\\ 0 \\end{pmatrix}, \\quad \\frac{1}{3\\sqrt{5}} \\begin{pmatrix} -4 \\\\ -2 \\\\ 5 \\end{pmatrix}"} />
                        </div>
                        <LatexRenderer latex={"\\text{et comme base orthonormée de } E_8(A) \\text{ la famille :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\frac{1}{3} \\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}"} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Alors en posant :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"{}^tP = \\begin{pmatrix} \\frac{1}{\\sqrt{5}} & -\\frac{4}{3\\sqrt{5}} & \\frac{2}{3} \\\\ -\\frac{2}{\\sqrt{5}} & -\\frac{2}{3\\sqrt{5}} & \\frac{1}{3} \\\\ 0 & \\frac{5}{3\\sqrt{5}} & \\frac{2}{3} \\end{pmatrix} \\quad \\text{et} \\quad D = \\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 8 \\end{pmatrix}"} />
                        </div>
                        <LatexRenderer latex={"\\text{on a } A = {}^tPDP."} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 2 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 2"
                title="Diagonalisation de matrices symétriques"
                icon={Target}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <div className="text-center">
                      <LatexRenderer latex={"\\text{Pour chacune des matrices symétriques suivantes, déterminer } D \\text{ diagonale et } P \\text{ orthogonale telles que } A = {}^tPDP."} />
                    </div>

                    <div className="text-center space-y-4">
                      <LatexRenderer latex={"1.\\; A = \\begin{pmatrix} 4 & 3 \\\\ 3 & -4 \\end{pmatrix}, \\quad 2.\\; A = \\begin{pmatrix} 1 & 2 & -1 \\\\ 2 & 4 & -2 \\\\ -1 & -2 & 1 \\end{pmatrix},"} />
                      <LatexRenderer latex={"3.\\; A = \\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 1 & 2 \\\\ 2 & 2 & 0 \\end{pmatrix}, \\quad 4.\\; A = \\begin{pmatrix} 0 & 3 & 2 & 3 \\\\ 3 & 0 & 2 & 3 \\\\ 2 & 2 & 2 & 2 \\\\ 3 & 3 & 2 & 0 \\end{pmatrix}."} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('2')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                        <LatexRenderer latex={"\\operatorname{Spec}(A) = \\{-5, 5\\}, \\text{ et on peut prendre}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P = \\tfrac{1}{\\sqrt{10}} \\begin{pmatrix} 1 & -3 \\\\ -3 & -1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} -5 & 0 \\\\ 0 & 5 \\end{pmatrix}."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\operatorname{Spec}(A) = \\{0, 6\\}, \\text{ avec } \\dim E_0(A) = 2."} />
                        <LatexRenderer latex={"\\text{On peut prendre}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P = \\begin{pmatrix} \\frac{1}{\\sqrt{2}} & 0 & \\frac{1}{\\sqrt{2}} \\\\ -\\tfrac{1}{\\sqrt{3}} & \\tfrac{1}{\\sqrt{3}} & \\tfrac{1}{\\sqrt{3}} \\\\ \\tfrac{1}{\\sqrt{6}} & \\tfrac{2}{\\sqrt{6}} & -\\tfrac{1}{\\sqrt{6}} \\end{pmatrix}, \\quad D = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 6 \\end{pmatrix}."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\operatorname{Spec}(A) = \\{-3, 0, 3\\}. \\text{ On peut prendre}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P = \\tfrac{1}{3} \\begin{pmatrix} 2 & 1 & -2 \\\\ 2 & -2 & 1 \\\\ 1 & 2 & 2 \\end{pmatrix}, \\quad D = \\begin{pmatrix} -3 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\operatorname{Spec}(A) = \\{-3, 0, 8\\} \\text{ avec } \\dim E_{-3}(A) = 2."} />
                        <LatexRenderer latex={"\\text{On peut alors prendre}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P = \\begin{pmatrix} \\frac{1}{2\\sqrt{3}} & \\tfrac{1}{2\\sqrt{3}} & -\\tfrac{\\sqrt{3}}{2} & \\tfrac{1}{2\\sqrt{3}} \\\\ \\tfrac{1}{\\sqrt{6}} & \\tfrac{1}{\\sqrt{6}} & 0 & \\tfrac{2}{\\sqrt{6}} \\\\ \\tfrac{1}{\\sqrt{2}} & -\\tfrac{1}{\\sqrt{2}} & 0 & 0 \\\\ \\tfrac{1}{2} & \\tfrac{1}{2} & \\tfrac{1}{2} & \\tfrac{1}{2} \\end{pmatrix}, \\quad D = \\begin{pmatrix} 0 & 0 & 0 & 0 \\\\ 0 & -3 & 0 & 0 \\\\ 0 & 0 & -3 & 0 \\\\ 0 & 0 & 0 & 8 \\end{pmatrix}."} />
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 3 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 3"
                title="Produit de matrices symétriques"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Soient A, B ∈ Mₙ(ℝ) deux matrices symétriques. Donner une condition nécessaire et suffisante pour que AB soit symétrique.</li>
                      <li>Soient f et g deux endomorphismes symétriques d'un espace euclidien E. Déduire de la question précédente une condition nécessaire et suffisante pour que f ∘ g soit un endomorphisme symétrique.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('3')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                        <LatexRenderer latex={"\\text{Si } A \\text{ et } B \\text{ sont symétriques, alors } {}^t(AB) = {}^tB \\, {}^tA = BA."} />
                        <br />
                        <LatexRenderer latex={"\\text{Et donc } AB \\text{ est symétrique si et seulement si } {}^t(AB) = AB \\iff BA = AB."} />
                        <br />
                        <LatexRenderer latex={"\\text{Autrement dit, le produit } AB \\text{ est symétrique si et seulement si } A \\text{ et } B \\text{ commutent.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Soit } \\mathcal{B} \\text{ une base orthonormée de } E\\text{. Alors } \\operatorname{Mat}_{\\mathcal{B}}(f) \\text{ et } \\operatorname{Mat}_{\\mathcal{B}}(g) \\text{ sont des matrices symétriques.}"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Donc } f \\circ g \\text{ est symétrique si et seulement si } \\operatorname{Mat}_{\\mathcal{B}}(f \\circ g) = \\operatorname{Mat}_{\\mathcal{B}}(f) \\times \\operatorname{Mat}_{\\mathcal{B}}(g) \\text{ est symétrique.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Et d'après la question précédente, c'est le cas si et seulement si ces deux matrices commutent. Donc si et seulement si } f \\text{ et } g \\text{ commutent.}"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Notons que ce résultat peut également se retrouver sans passer par les matrices, mais c'est alors plus fastidieux.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{En effet, pour } (x, y) \\in E\\text{, la symétrie de } f \\text{ et } g \\text{ nous permet d'obtenir}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle (f \\circ g)(x), y \\rangle = \\langle f(g(x)), y \\rangle = \\langle g(x), f(y) \\rangle = \\langle x, g(f(y)) \\rangle = \\langle x, (g \\circ f)(y) \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc il est clair que si } f \\circ g = g \\circ f\\text{, ceci prouve la symétrie de } f \\circ g\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Inversement, si } f \\circ g \\text{ est symétrique, alors le calcul que nous venons de faire prouve que pour tous } x, y \\in E,"} />
                        <br />
                        <LatexRenderer latex={"\\langle x, (f \\circ g)(y) \\rangle = \\langle x, (g \\circ f)(y) \\rangle \\iff \\langle x, (f \\circ g - g \\circ f)(y) \\rangle = 0."} />
                        <br />
                        <LatexRenderer latex={"\\text{En particulier, pour } y \\in E \\text{ et pour } x = (f \\circ g - g \\circ f)(y)\\text{, alors}"} />
                        <br />
                        <LatexRenderer latex={"\\langle (f \\circ g - g \\circ f)(y), (f \\circ g - g \\circ f)(y) \\rangle = 0."} />
                        <br />
                        <LatexRenderer latex={"\\text{Soit encore } \\| (f \\circ g - g \\circ f)(y) \\|^2 = 0 \\iff (f \\circ g - g \\circ f)(y) = 0."} />
                        <br />
                        <LatexRenderer latex={"\\text{Ceci étant vrai pour tout } y \\in E\\text{, on en déduit que } f \\circ g = g \\circ f."} />
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 4 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 4"
                title="Endomorphisme symétrique nul"
                icon={Target}
                stars={2}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } f \\text{ un endomorphisme symétrique d'un espace euclidien } E \\text{ tel que}"} />
                    <div className="text-center">
                      <LatexRenderer latex={"\\forall x \\in E, \\quad \\langle x, f(x) \\rangle = 0."} />
                    </div>
                    <LatexRenderer latex={"\\text{Montrer que } f \\text{ est l'endomorphisme nul.}"} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('4')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                      <LatexRenderer latex={"f \\text{ est diagonalisable car symétrique. Il suffit donc de prouver que la seule valeur propre de } f \\text{ est } 0."} />
                      <br />
                      <LatexRenderer latex={"\\text{Soit donc } \\lambda \\in \\operatorname{Spec}(f) \\text{ et } x \\text{ un vecteur propre associé. On a alors}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"0 = \\langle f(x), x \\rangle = \\langle \\lambda x, x \\rangle = \\lambda \\langle x, x \\rangle = \\lambda \\|x\\|^2."} />
                      </div>
                      <LatexRenderer latex={"\\text{Mais } x \\neq 0 \\text{ par définition (un vecteur propre est toujours non nul), et donc } \\lambda = 0."} />
                      <br />
                      <LatexRenderer latex={"\\text{Ainsi, la seule valeur propre de } f \\text{ est } 0 \\text{ et donc } f = 0."} />
                      <br />
                      <LatexRenderer latex={"\\emph{Détails :} \\text{ En effet, la matrice de } f \\text{ dans une base de vecteurs propres sera alors nulle, et donc } f=0."} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 5 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 5"
                title="Endomorphisme défini par produit scalaire"
                icon={Target}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } E \\text{ un espace euclidien de dimension } n \\geq 3\\text{, et soit } (a, b) \\text{ une famille orthonormée de } E\\text{. }"} />
                    <LatexRenderer latex={"\\text{Soit } f : E \\to E \\text{ l'application définie par}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"f(x) = \\langle x, a \\rangle b + \\langle x, b \\rangle a."} />
                    </div>

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que f est un endomorphisme symétrique de E.</li>
                      <li>
                        <LatexRenderer latex={"\\text{Soit } v \\in \\operatorname{Vect}(a, b)^\\perp\\text{. Calculer } f(v)\\text{. En déduire une valeur propre de } f\\text{. }"} />
                      </li>
                      <li>Calculer f(a+b) et f(a-b). En déduire les valeurs propres et les sous-espaces propres de f.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('5')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                    <ol className="list-decimal list-inside space-y-4 pl-4">
                      <li>
                        <LatexRenderer latex={"\\text{La linéarité de } f \\text{ découle de la linéarité à gauche du produit scalaire et ne présente pas de difficulté particulière.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{De plus, pour } x \\in E\\text{, } \\langle x, a \\rangle \\in \\mathbb{R} \\text{ et } \\langle x, b \\rangle \\in \\mathbb{R} \\text{ et donc on a bien } f(x) \\in E\\text{, de sorte que } f \\text{ est un endomorphisme de } E\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Soient alors } x, y \\in E\\text{. Alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle f(x), y \\rangle = \\langle \\langle x, a \\rangle b + \\langle x, b \\rangle a, y \\rangle = \\langle x, a \\rangle \\langle b, y \\rangle + \\langle x, b \\rangle \\langle a, y \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et de même,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle x, f(y) \\rangle = \\langle y, a \\rangle \\langle x, b \\rangle + \\langle y, b \\rangle \\langle x, a \\rangle = \\langle f(x), y \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et donc } f \\text{ est symétrique.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Si } v \\in \\operatorname{Vect}(a, b)^\\perp\\text{, alors } \\langle v, a \\rangle = \\langle v, b \\rangle = 0\\text{, et donc } f(v) = 0\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Autrement dit, } \\operatorname{Vect}(a, b)^\\perp \\subset \\ker f\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Mais puisque } \\dim E > 3\\text{, alors } \\dim \\operatorname{Vect}(a, b)^\\perp = \\dim E - 2 > 1\\text{, et donc } \\ker f \\neq \\{0\\}\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{On en déduit que } 0 \\text{ est valeur propre de } f\\text{, avec un sous-espace propre de dimension supérieure ou égale à } \\dim E - 2\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{On a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f(a+b) = f(a) + f(b) = \\|a\\|^2 b + \\langle a, b \\rangle a + \\|b\\|^2 a + \\langle a, b \\rangle b = a + b."} />
                        </div>
                        <LatexRenderer latex={"\\text{Puisque } a+b \\neq 0\\text{, on en déduit que } 1 \\text{ est une valeur propre de } f\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{De même, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"f(a-b) = f(a) - f(b) = \\|a\\|^2 b + \\langle a, b \\rangle a - \\|b\\|^2 a - \\langle a, b \\rangle b = -(a-b)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et donc } a-b \\text{ est un vecteur propre de } f \\text{ pour la valeur propre } -1\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{On a donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\dim E_0(f) + \\dim E_1(f) + \\dim E_{-1}(f) > \\dim E."} />
                        </div>
                        <LatexRenderer latex={"\\text{Puisque l'inégalité contraire est toujours vraie, on en déduit que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\dim E_0(f) + \\dim E_1(f) + \\dim E_{-1}(f) = \\dim E."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } f \\text{ ne possède pas d'autres valeurs propres que } 0, 1 \\text{ et } -1\\text{, et}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\dim E_0(f) = \\dim E - 2, \\quad \\dim E_1(f) = \\dim E_{-1}(f) = 1."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et grâce à ce qui a été dit précédemment}^\\text{On a déjà les inclusions : }"} />
                        <LatexRenderer latex={"\\operatorname{Vect}(a,b)^\\perp \\subset E_0(f), \\quad \\operatorname{Vect}(a+b) \\subset E_1(f), \\quad \\operatorname{Vect}(a-b) \\subset E_{-1}(f)."} />
                        <LatexRenderer latex={"\\text{On a donc :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"E_0(f) = \\operatorname{Vect}(a, b)^\\perp, \\quad E_1(f) = \\operatorname{Vect}(a+b), \\quad E_{-1}(f) = \\operatorname{Vect}(a-b)."} />
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 6 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 6"
                title="Matrice B = ᵀAA"
                icon={Target}
                stars={3}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } A \\in \\mathcal{M}_n(\\mathbb{R})\\text{, et soit } B = {}^tAA\\text{. }"} />

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que B est symétrique, et que toutes ses valeurs propres sont positives.</li>
                      <li>Prouver que pour X ∈ Mₙ,₁(ℝ), on a BX = 0 ⇔ AX = 0. En déduire que rg(A) = rg(B).</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('6')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                        <LatexRenderer latex={"B \\text{ est symétrique car}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"{}^tB = {}^t({}^tAA) = {}^tA \\, {}^t({}^tA) = {}^tAA = B."} />
                        </div>
                        <LatexRenderer latex={"\\text{Soit à présent } \\lambda \\text{ une valeur propre de } B \\text{ et soit } X \\in \\mathcal{M}_{n,1}(\\mathbb{R}) \\text{ un vecteur propre associé.}"} />
                        <br />
                        <LatexRenderer latex={"\\text{On a alors } B X = \\lambda X \\text{ et donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"{}^tX B X = {}^tX \\lambda X = \\lambda \\|X\\|^2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Mais d'autre part,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"{}^tX B X = {}^t(AX) (AX) = \\|AX\\|^2 \\geq 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Puisque } X \\text{ est un vecteur propre, il est non nul, et donc } \\|X\\|^2 > 0\\text{, de sorte que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\lambda = \\frac{\\ \|AX\\|^2}{\\|X\\|^2} \\geq 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Nous avons donc bien prouvé que toutes les valeurs propres de } B \\text{ sont positives.}"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Si } AX=0\\text{, alors évidemment } BX = {}^tAAX = 0\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Inversement, si } BX=0\\text{, alors } {}^tAAX=0\\text{, et donc } {}^tX {}^tAAX=0\\text{. }"} />
                        <br />
                        <LatexRenderer latex={"\\text{Mais}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"{}^tX {}^tAAX = {}^t(AX)(AX) = \\|AX\\|^2."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et donc } \\|AX\\|=0 \\iff AX=0\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{En d'autres termes, nous venons de prouver que}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"E_0(A) = \\{ X \\in \\mathcal{M}_{n,1}(\\mathbb{R}) : AX=0 \\} = \\{ X \\in \\mathcal{M}_{n,1}(\\mathbb{R}) : BX=0 \\} = E_0(B)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\operatorname{rg}(A) = n - \\dim E_0(A) = n - \\dim E_0(B) = \\operatorname{rg}(B)."} />
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 7 */}
          <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <DifficultyHeader
                level="Exercice 7"
                title="Projecteur orthogonal (D'après EML 2013)"
                icon={Target}
                stars={4}
                color="orange"
              />

              {/* Énoncé */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Énoncé :</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } X \\in \\mathcal{M}_{n,1}(\\mathbb{R}) \\text{ avec } \\|X\\|=1\\text{, et soit } S = {}^tXX\\text{. }"} />
                    <LatexRenderer latex={"\\text{On munit } \\mathcal{M}_n(\\mathbb{R}) \\text{ du produit scalaire}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\langle M, N \\rangle = \\operatorname{tr}({}^tMN)."} />
                    </div>

                    <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-800">
                      <li>Montrer que S est symétrique et vérifie S² = S.</li>
                      <li>Soit Φ : Mₙ(ℝ) → Mₙ(ℝ) défini par Φ(M) = SM. Vérifier que Φ est un endomorphisme symétrique.</li>
                      <li>Montrer que Φ² = Φ. En déduire les valeurs propres de Φ.</li>
                      <li>Montrer que Ker(Φ) et Ker(Φ - id) sont supplémentaires orthogonaux dans Mₙ(ℝ).</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center">
                <Button
                  onClick={() => toggleCorrection('7')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
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
                        <LatexRenderer latex={"\\text{On a } {}^tS = {}^t({}^tXX) = X{}^tX = S\\text{. Donc } S \\text{ est symétrique.}"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{De plus, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"S^2 = ({}^tXX)({}^tXX) = {}^tX(X{}^tX)X = (X{}^tX)({}^tX)X = \\|X\\|^2 {}^tXX = S,"} />
                        </div>
                        <LatexRenderer latex={"\\text{puisque } \\|X\\|=1\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Il est facile de vérifier que } \\Phi \\text{ est linéaire, et donc est un endomorphisme de } \\mathcal{M}_n(\\mathbb{R})\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{De plus, pour } U, V \\in \\mathcal{M}_n(\\mathbb{R})\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle U, \\Phi(V) \\rangle = \\operatorname{tr}({}^tU(SV)) = \\operatorname{tr}(({}^tUS)V) = \\langle SU, V \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et de même}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\langle \\Phi(U), V \\rangle = \\langle SU, V \\rangle."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\Phi \\text{ est un endomorphisme symétrique de } \\mathcal{M}_n(\\mathbb{R})\\text{. }"} />
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Pour } M \\in \\mathcal{M}_n(\\mathbb{R})\\text{, on a}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\Phi^2(M) = \\Phi(SM) = S(SM) = (S^2)M = SM = \\Phi(M)."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc } \\Phi^2 = \\Phi\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{On en déduit que } \\Phi \\text{ est un projecteur et donc que } \\operatorname{Spec}(\\Phi) \\subset \\{0,1\\}\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{De plus, } \\Phi \\text{ n'est pas nul car } S \\neq 0 \\text{ et } \\Phi(S)=S\\text{, et } \\Phi \\text{ n'est pas l'endomorphisme identité car si } Y \\in \\mathcal{M}_{n,1}(\\mathbb{R}) \\text{ est orthogonal à } X\\text{, alors } \\Phi(Y) = {}^tXY=0\\text{. }"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\operatorname{Spec}(\\Phi) = \\{0,1\\}."} />
                        </div>
                      </li>

                      <li>
                        <LatexRenderer latex={"\\text{Nous venons de prouver que } \\Phi \\text{ est un projecteur, et qu'il est symétrique : c'est donc un projecteur orthogonal.}"} />
                        <br /><br />
                        <LatexRenderer latex={"\\text{Et alors}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\ker(\\Phi) = \\operatorname{Im}(\\Phi)^\\perp."} />
                        </div>
                        <LatexRenderer latex={"\\text{Mais comme pour tout projecteur,}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\operatorname{Im}(\\Phi) = E_1(\\Phi) = \\ker(\\Phi - \\mathrm{id}_{\\mathcal{M}_n(\\mathbb{R})})."} />
                        </div>
                        <LatexRenderer latex={"\\text{Et donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\ker(\\Phi) = \\ker(\\Phi - \\mathrm{id}_{\\mathcal{M}_n(\\mathbb{R})})^\\perp."} />
                        </div>
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
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-reduction-matrices-symetriques">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Accéder au cours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapitre10ReductionMatricesSymetriquesExercicesPage;
