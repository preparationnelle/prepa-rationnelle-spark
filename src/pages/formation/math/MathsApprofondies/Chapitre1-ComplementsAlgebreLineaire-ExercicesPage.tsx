import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';


const Chapitre1ComplementsAlgebreLineaireExercicesPage = () => {
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
    icon: React.ComponentType<any>;
    stars: number;
    color: string;
  }) => (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-${color}-100 border border-${color}-200 flex items-center justify-center shadow-sm`}>
          <Icon className={`h-6 w-6 text-${color}-700`} />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{level}</div>
          <div className="font-bold text-slate-900 text-lg">{title}</div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < stars ? 'text-amber-500 fill-current' : 'text-slate-300'}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link to="/formation" className="hover:text-slate-900 transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link to="/formation/maths-approfondies-2e-annee" className="hover:text-slate-900 transition-colors">
              Maths Approfondies 2e année
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="text-slate-900 font-medium">Chapitre 1 : Compléments d'algèbre linéaire - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Chapitre 1 : Compléments d'algèbre linéaire
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Endomorphismes, matrices de passage et propriétés de la trace
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <Link to="/formation/maths-complements-algebre-lineaire">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-6 py-3">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-complements-algebre-lineaire-quiz">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-6 py-3">
                  <Target className="mr-2 h-5 w-5" />
                  Quiz
                </Button>
              </Link>
            </div>
          </div>

          {/* Exercice 1 - Polynômes de Lagrange et matrice de passage */}
          <Card className="mb-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <DifficultyHeader
                level="Exercice 1"
                title="Polynômes de Lagrange et matrice de passage (HEC 2017)"
                icon={Crown}
                stars={4}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-2">Énoncé :</h3>
                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-200/50 shadow-sm">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soient } n \\geq 1 \\text{ et } x_0, x_1, \\ldots, x_n \\text{ des réels deux à deux distincts.}"} />
                    <LatexRenderer latex={"\\text{On note } \\mathcal{C} \\text{ la base canonique de } \\mathbb{R}_n[X]."} />
                    <br />
                                            <LatexRenderer latex={"\\text{Pour } i \\in \\llbracket 0,n \\rrbracket, \\text{ on note}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"L_i = \\prod_{k=0, k \\neq i}^{n} \\frac{X - x_k}{x_i - x_k}."} />
                    </div>
                    <LatexRenderer latex={"\\text{On admet que } \\mathcal{B} = (L_0, L_1, \\ldots, L_n) \\text{ est une base de } \\mathbb{R}_n[X]."} />

                    <ol className="list-decimal list-inside space-y-3 pl-4 text-slate-800 font-medium">
                      <li>Déterminer L_i(x_j) pour (i,j) ∈ ⟦0,n⟧².</li>
                      <li>Expliciter la matrice de passage de ℬ à 𝒞.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center mt-6">
                <Button
                  onClick={() => toggleCorrection('1')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  {visibleCorrections['1'] ? (
                    <>
                      <EyeOff className="mr-2 h-5 w-5" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-5 w-5" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['1'] && (
                <div className="mt-8 pt-8 border-t border-orange-200">
                  <h3 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-orange-700" />
                    </div>
                    Correction :
                  </h3>
                  <div className="bg-orange-50/80 p-8 rounded-2xl border border-orange-200/50 shadow-sm">
                    <div className="space-y-6">
                      <div>
                        <strong className="text-lg font-bold text-orange-800">1) Calcul de L_i(x_j)</strong>
                        <br />
                        <LatexRenderer latex={"\\text{Soit } (i,j) \\in (\\llbracket 0,n \\rrbracket)^2."} />
                        <br />
                        <strong className="text-orange-700">Cas 1 : i = j.</strong>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"L_i(x_i) = \\prod_{k=0, k \\neq i}^{n} \\frac{x_i - x_k}{x_i - x_k} = \\prod_{k=0, k \\neq i}^{n} 1 = 1."} />
                        </div>
                        <strong className="text-orange-700">Cas 2 : i ≠ j.</strong>
                        <div className="text-center my-4">
                          <LatexRenderer latex={"L_i(x_j) = \\prod_{k=0, k \\neq i}^{n} \\frac{x_j - x_k}{x_i - x_k} = \\frac{x_j - x_j}{x_i - x_j} \\prod_{\\substack{k=0 \\\\ k \\neq i, k \\neq j}}^{n} \\frac{x_j - x_k}{x_i - x_k} = 0."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc : } \\forall (i,j) \\in (\\llbracket 0,n \\rrbracket)^2, \\quad L_i(x_j) = \\begin{cases} 1 & \\text{si } i = j, \\\\ 0 & \\text{si } i \\neq j. \\end{cases}"} />
                      </div>

                      <div>
                        <strong className="text-lg font-bold text-orange-800">2) Matrice de passage</strong>
                        <br />
                        <LatexRenderer latex={"\\text{Soit } P \\in \\mathbb{R}_n[X]. \\text{ Comme } (L_0, \\ldots, L_n) \\text{ est une base de } \\mathbb{R}_n[X],"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\exists (a_0, \\ldots, a_n) \\in \\mathbb{R}^{n+1}, \\quad P = \\sum_{i=0}^n a_i L_i."} />
                        </div>
                        <LatexRenderer latex={"\\text{Pour } j \\in \\llbracket 0,n \\rrbracket,"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P(x_j) = \\sum_{i=0}^n a_i L_i(x_j) = a_j."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi, } \\forall j \\in \\llbracket 0,n \\rrbracket, \\quad a_j = P(x_j)."} />
                        <br />
                        <LatexRenderer latex={"\\text{Posons } P = X^k \\text{ avec } k \\in \\llbracket 0,n \\rrbracket. \\text{ Alors :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"X^k = \\sum_{i=0}^n x_i^k L_i."} />
                        </div>
                        <LatexRenderer latex={"\\text{Ainsi, la matrice de passage de } \\mathcal{B} \\text{ à } \\mathcal{C} \\text{ est :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"P_{\\mathcal{B},\\mathcal{C}} = \\begin{pmatrix} 1 & x_0 & x_0^2 & \\cdots & x_0^n \\\\ 1 & x_1 & x_1^2 & \\cdots & x_1^n \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & x_n & x_n^2 & \\cdots & x_n^n \\end{pmatrix}."} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 2 - Endomorphisme et matrice représentative */}
          <Card className="mb-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <DifficultyHeader
                level="Exercice 2"
                title="Endomorphisme et matrice représentative (EM Lyon 2018)"
                icon={Lightbulb}
                stars={3}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-2">Énoncé :</h3>
                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-200/50 shadow-sm">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Soit } n \\geq 2. \\text{ Soit } \\varphi \\in \\mathcal{L}(\\mathbb{R}_n[X]) \\text{ définie par :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\forall P \\in \\mathbb{R}_n[X], \\quad \\varphi(P) = \\frac{1}{n} X(1 - X) P' + X P."} />
                    </div>
                    <LatexRenderer latex={"\\text{Déterminer sa matrice représentative } A \\text{ dans la base canonique } \\mathcal{C} \\text{ de } \\mathbb{R}_n[X]."} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center mt-6">
                <Button
                  onClick={() => toggleCorrection('2')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  {visibleCorrections['2'] ? (
                    <>
                      <EyeOff className="mr-2 h-5 w-5" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-5 w-5" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['2'] && (
                <div className="mt-8 pt-8 border-t border-orange-200">
                  <h3 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-orange-700" />
                    </div>
                    Correction :
                  </h3>
                  <div className="bg-orange-50/80 p-8 rounded-2xl border border-orange-200/50 shadow-sm">
                    <div className="space-y-6">
                      <div>
                        <LatexRenderer latex={"\\text{Calculons } \\varphi \\text{ sur la base canonique :}"} />
                        <br />
                        <LatexRenderer latex={"\\text{Si } P = 1, P' = 0, \\text{ donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\varphi(1) = \\tfrac{1}{n} X(1 - X) \\cdot 0 + X \\cdot 1 = X."} />
                        </div>
                        <LatexRenderer latex={"\\text{Si } P = X^n, P' = n X^{n-1}, \\text{ donc}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\varphi(X^n) = \\tfrac{1}{n} X(1 - X) n X^{n-1} + X \\cdot X^n = X^n."} />
                        </div>
                        <LatexRenderer latex={"\\text{Si } P = X^k \\text{ avec } k \\in [\\![1,n-1]\\!],"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"\\varphi(X^k) = \\tfrac{k}{n} X^k - \\tfrac{k}{n} X^{k+1} + X^{k+1} = \\tfrac{k}{n} X^k + \\tfrac{n-k}{n} X^{k+1}."} />
                        </div>
                        <LatexRenderer latex={"\\text{Donc la matrice de } \\varphi \\text{ dans } \\mathcal{C} \\text{ est :}"} />
                        <div className="text-center my-4">
                          <LatexRenderer latex={"A = \\begin{pmatrix} 0 & 0 & 0 & \\cdots & 0 \\\\ 1 & \\tfrac{1}{n} & 0 & \\cdots & 0 \\\\ 0 & \\tfrac{n-1}{n} & \\tfrac{2}{n} & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & \\cdots & & \\tfrac{1}{n} & 1 \\end{pmatrix}."} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Exercice 3 - Propriété de la trace */}
          <Card className="mb-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <DifficultyHeader
                level="Exercice 3"
                title="Propriété de la trace (EM Lyon 2013)"
                icon={Target}
                stars={2}
                color="blue"
              />

              {/* Énoncé */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-2">Énoncé :</h3>
                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-200/50 shadow-sm">
                  <div className="space-y-4">
                    <LatexRenderer latex={"\\text{Montrer que } \\forall (A,B) \\in \\mathcal{M}_n(\\mathbb{R})^2, \\ \\mathrm{Tr}(AB) = \\mathrm{Tr}(BA)."} />
                  </div>
                </div>
              </div>

              {/* Bouton Correction */}
              <div className="flex justify-center mt-6">
                <Button
                  onClick={() => toggleCorrection('3')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  {visibleCorrections['3'] ? (
                    <>
                      <EyeOff className="mr-2 h-5 w-5" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-5 w-5" />
                      Voir la correction
                    </>
                  )}
                </Button>
              </div>

              {/* Correction */}
              {visibleCorrections['3'] && (
                <div className="mt-8 pt-8 border-t border-orange-200">
                  <h3 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-orange-700" />
                    </div>
                    Correction :
                  </h3>
                  <div className="bg-orange-50/80 p-8 rounded-2xl border border-orange-200/50 shadow-sm">
                    <div className="space-y-6">
                      <LatexRenderer latex={"\\text{Soient } A \\text{ et } B \\text{ deux matrices de } \\mathcal{M}_n(\\mathbb{R})."} />
                      <LatexRenderer latex={"\\text{On pose } C = AB \\text{ et } D = BA."} />
                      <br />
                      <LatexRenderer latex={"\\text{On note :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"A = (a_{i,j})_{1 \\leq i,j \\leq n}, \\quad B = (b_{i,j})_{1 \\leq i,j \\leq n}, \\quad C = (c_{i,j})_{1 \\leq i,j \\leq n}, \\quad D = (d_{i,j})_{1 \\leq i,j \\leq n}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Par la formule du produit de matrices :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"c_{i,j} = \\sum_{k=1}^n a_{i,k} b_{k,j}, \\quad d_{i,j} = \\sum_{k=1}^n b_{i,k} a_{k,j}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Tr}(AB) = \\sum_{i=1}^n c_{i,i} = \\sum_{i=1}^n \\sum_{k=1}^n a_{i,k} b_{k,i}."} />
                      </div>
                      <LatexRenderer latex={"\\text{Or par symétrie :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Tr}(BA) = \\sum_{i=1}^n d_{i,i} = \\sum_{i=1}^n \\sum_{k=1}^n b_{i,k} a_{k,i}."} />
                      </div>
                      <LatexRenderer latex={"\\text{En réindexant la dernière somme (en échangeant } i \\text{ et } k\\text{) :}"} />
                      <div className="text-center my-4">
                        <LatexRenderer latex={"\\mathrm{Tr}(BA) = \\sum_{k=1}^n \\sum_{i=1}^n b_{k,i} a_{i,k} = \\sum_{i=1}^n \\sum_{k=1}^n a_{i,k} b_{k,i} = \\mathrm{Tr}(AB)."} />
                      </div>
                      <LatexRenderer latex={"\\text{Donc } \\mathrm{Tr}(AB) = \\mathrm{Tr}(BA)."} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-16 text-center">
          <div className="flex justify-center gap-6">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-8 py-3 rounded-xl font-semibold">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-complements-algebre-lineaire">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Accéder au cours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapitre1ComplementsAlgebreLineaireExercicesPage;
