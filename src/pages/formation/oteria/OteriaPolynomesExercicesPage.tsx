import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Calculator, Zap, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaPolynomesExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 6 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 6 : Polynômes & dichotomie - Exercices</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Exercices progressifs pour maîtriser la recherche de racines et la factorisation de polynômes
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">6</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Nombre d'exercices</span>
                  <span className="text-2xl font-bold text-blue-900">6</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/polynomes-approximation-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <Link to="/formation/oteria/polynomes-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/polynomes-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Exercice 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 1</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Dans chaque cas, déterminer toutes les racines réelles du polynôme <LatexRenderer latex="P" /> et donner la forme factorisée de <LatexRenderer latex="P(x)" /> en produit de polynômes de plus petits degrés possibles.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> <LatexRenderer latex="P:x\longmapsto x^{3}-8" /></div>
                <div><strong>2.</strong> <LatexRenderer latex="P:x\longmapsto x^{3}-3x^{2}+3x-2" /></div>
                <div><strong>3.</strong> <LatexRenderer latex="P:x\longmapsto 2x^{3}-x^{2}-2x+1" /></div>
                <div><strong>4.</strong> <LatexRenderer latex="P:x\longmapsto x^{3}-2x^{2}-5x+6" /></div>
                <div><strong>5.</strong> <LatexRenderer latex="P:x\longmapsto x^{4}-5x^{3}+7x^{2}-3x" /></div>
                <div><strong>6.</strong> <LatexRenderer latex="P:x\longmapsto x^{4}-2x^{2}+1" /></div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex1')}
              variant={visibleCorrections['ex1'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex1'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex1'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-6 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">1. P(x) = x³ - 8 :</strong>
                    <div className="mt-2 space-y-2">
                      <div><LatexRenderer latex="x = 2" /> est racine (théorème de la factorisation immédiate).</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = (x-2)(x^{2}+2x+4)" />
                      </div>
                      <div><LatexRenderer latex="x^{2}+2x+4" /> n'a pas de racines réelles (discriminant <LatexRenderer latex="\Delta = 4-16 < 0" />).</div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="2" /><br/>
                        <LatexRenderer latex="P(x) = (x-2)(x^{2}+2x+4)" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">2. P(x) = x³ - 3x² + 3x - 2 :</strong>
                    <div className="mt-2 space-y-2">
                      <div><LatexRenderer latex="x = 2" /> est racine.</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = (x-2)(x^{2}-x+1)" />
                      </div>
                      <div><LatexRenderer latex="x^{2}-x+1" /> est sans racines réelles (<LatexRenderer latex="\Delta = -3 < 0" />).</div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="2" /><br/>
                        <LatexRenderer latex="P(x) = (x-2)(x^{2}-x+1)" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">3. P(x) = 2x³ - x² - 2x + 1 :</strong>
                    <div className="mt-2 space-y-2">
                      <div><LatexRenderer latex="x = 1" /> est racine. Division donne :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = (x-1)(2x^{2}+x-1)" />
                      </div>
                      <div>Résolution de <LatexRenderer latex="2x^{2}+x-1=0" /> : <LatexRenderer latex="\Delta = 1+8 = 9" /> ⇒ <LatexRenderer latex="x = \frac{-1\pm3}{4}" /> soit <LatexRenderer latex="x = \frac{1}{2}" /> et <LatexRenderer latex="x = -1" />.</div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="-1, \frac{1}{2}, 1" /><br/>
                        <LatexRenderer latex="P(x) = (x-1)(2x+1)(x-\frac{1}{2})" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">4. P(x) = x³ - 2x² - 5x + 6 :</strong>
                    <div className="mt-2 space-y-2">
                      <div><LatexRenderer latex="x = 3" /> est racine. Division : <LatexRenderer latex="(x-3)(x^{2}+x-2)" />.</div>
                      <div><LatexRenderer latex="x^{2}+x-2 = (x-1)(x+2)" /> ⇒ racines <LatexRenderer latex="-2" /> et <LatexRenderer latex="1" />.</div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="-2, 1, 3" /><br/>
                        <LatexRenderer latex="P(x) = (x-3)(x-1)(x+2)" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">5. P(x) = x⁴ - 5x³ + 7x² - 3x :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Factorisation par <LatexRenderer latex="x" /> : <LatexRenderer latex="x(x^{3}-5x^{2}+7x-3)" />.</div>
                      <div>Dans le cube, <LatexRenderer latex="x = 1" /> est racine : <LatexRenderer latex="(x-1)(x^{2}-4x+3)" />.</div>
                      <div><LatexRenderer latex="x^{2}-4x+3 = (x-1)(x-3)" />.</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = x(x-1)^{2}(x-3)" />
                      </div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="0, 1" /> (multiplicité 2), <LatexRenderer latex="3" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">6. P(x) = x⁴ - 2x² + 1 :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Écriture en carré : <LatexRenderer latex="x^{4}-2x^{2}+1 = (x^{2}-1)^{2}" />.</div>
                      <div>Puis <LatexRenderer latex="x^{2}-1 = (x-1)(x+1)" />.</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = (x-1)^{2}(x+1)^{2}" />
                      </div>
                      <div className="text-center bg-green-100 p-3 rounded mt-2">
                        <strong>Racines réelles :</strong> <LatexRenderer latex="-1" /> (multiplicité 2), <LatexRenderer latex="1" /> (multiplicité 2)
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Exercice 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 2</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Soit <LatexRenderer latex="P" /> un polynôme réel tel que pour tout <LatexRenderer latex="x \in \mathbb{R}" /> on ait :
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="P(x+1) = P(x)" />
              </div>
              <p className="text-blue-800">
                Montrer que si <LatexRenderer latex="P" /> admet (au moins) une racine réelle, alors <LatexRenderer latex="P" /> est le polynôme nul.
              </p>
            </div>

            <Button
              onClick={() => toggleCorrection('ex2')}
              variant={visibleCorrections['ex2'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex2'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex2'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-4 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">1. Le décalage d'une racine est encore racine :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Soit <LatexRenderer latex="\alpha \in \mathbb{R}" /> tel que <LatexRenderer latex="P(\alpha) = 0" />. Alors, en utilisant la périodicité :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(\alpha+1) = P(\alpha) = 0" />
                      </div>
                      <div>Par récurrence immédiate, on obtient :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\forall n \in \mathbb{N}, \quad P(\alpha+n) = 0" />
                      </div>
                      <div>Ainsi <LatexRenderer latex="P" /> possède une infinité de racines distinctes (la suite <LatexRenderer latex="(\alpha+n)_{n \in \mathbb{N}}" /> est strictement croissante).</div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">2. Un polynôme non nul ne peut avoir qu'un nombre fini de racines :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Un polynôme réel (non nul) de degré <LatexRenderer latex="d" /> ne peut admettre plus de <LatexRenderer latex="d" /> racines réelles distinctes (théorème fondamental de l'algèbre).</div>
                      <div>Comme <LatexRenderer latex="P" /> possède une infinité de racines, la seule possibilité est que son degré soit <LatexRenderer latex="-\infty" />, c'est-à-dire que le polynôme soit identiquement nul.</div>
                    </div>
                  </div>

                  <div className="text-center bg-green-100 p-3 rounded">
                    <strong>Conclusion :</strong><br/>
                    <LatexRenderer latex="P \text{ périodique de période } 1 \wedge \exists \alpha, P(\alpha) = 0 \Longrightarrow P \equiv 0" />
                  </div>

                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-green-800 italic">
                      <strong>Remarque :</strong> Plus généralement, tout polynôme périodique (de période non nulle) est constant ; s'il possède une racine, il est donc nul.
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Exercice 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 3</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On considère la suite <LatexRenderer latex="(P_n)" /> de polynômes de <LatexRenderer latex="\mathbb{R}[x]" /> définie par :
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="\begin{cases} P_0(x) = 1 \\ \forall n \in \mathbb{N}, \forall x \in \mathbb{R}, P_{n+1}(x) = x P_n(x) + 1 \end{cases}" />
              </div>
              <div className="mt-4 space-y-2 ml-4">
                <div><strong>1.</strong> Déterminer les polynômes <LatexRenderer latex="P_1, P_2" /> et <LatexRenderer latex="P_3" />.</div>
                <div><strong>2.</strong> Déterminer, pour tout <LatexRenderer latex="n \in \mathbb{N}" />, l'expression de <LatexRenderer latex="P_n" />.</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex3')}
              variant={visibleCorrections['ex3'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex3'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex3'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-4 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">1. Calcul des premiers termes :</strong>
                    <div className="mt-2 space-y-2">
                      <div className="text-center space-y-1">
                        <div><LatexRenderer latex="P_1(x) = x P_0(x) + 1 = x + 1" /></div>
                        <div><LatexRenderer latex="P_2(x) = x P_1(x) + 1 = x(x+1) + 1 = x^2 + x + 1" /></div>
                        <div><LatexRenderer latex="P_3(x) = x P_2(x) + 1 = x(x^2+x+1) + 1 = x^3 + x^2 + x + 1" /></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">2. Expression générale de P_n :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Les premiers calculs suggèrent :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P_n(x) = \sum_{k=0}^{n} x^k \quad (n \in \mathbb{N})" />
                      </div>
                      
                      <div className="mt-3">
                        <strong>Preuve par récurrence :</strong>
                      </div>
                      <div><strong>Initialisation :</strong> pour <LatexRenderer latex="n = 0" />, on a bien <LatexRenderer latex="P_0(x) = 1 = \sum_{k=0}^{0} x^k" />.</div>
                      <div><strong>Hérédité :</strong> supposons la formule vraie pour un certain <LatexRenderer latex="n" /> ; alors</div>
                      <div className="text-center">
                        <LatexRenderer latex="P_{n+1}(x) = x P_n(x) + 1 = x \sum_{k=0}^{n} x^k + 1 = \sum_{k=0}^{n} x^{k+1} + 1" />
                      </div>
                      <div>En posant <LatexRenderer latex="i = k+1" /> dans la somme :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\sum_{k=0}^{n} x^{k+1} = \sum_{i=1}^{n+1} x^i" />
                      </div>
                      <div>Si bien que :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P_{n+1}(x) = \sum_{i=1}^{n+1} x^i + 1 = \sum_{i=0}^{n+1} x^i" />
                      </div>
                      
                      <div className="text-center bg-green-100 p-3 rounded mt-4">
                        <strong>Conclusion :</strong><br/>
                        <LatexRenderer latex="P_n(x) = \sum_{k=0}^{n} x^k = \frac{x^{n+1}-1}{x-1} \quad (\text{si } x \neq 1) ; \quad P_n(1) = n+1" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Exercice 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 4</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On considère la suite <LatexRenderer latex="(P_n)" /> de polynômes de <LatexRenderer latex="\mathbb{R}[x]" /> définie par :
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="\begin{cases} P_0(x) = 1 \\ \forall n \in \mathbb{N}, \forall x \in \mathbb{R}, P_{n+1}(x) = (2x-1) P_n(x) \end{cases}" />
              </div>
              <div className="mt-4 space-y-2 ml-4">
                <div><strong>1.</strong> Déterminer les polynômes <LatexRenderer latex="P_1, P_2" /> et <LatexRenderer latex="P_3" />.</div>
                <div><strong>2.</strong> Déterminer, pour tout <LatexRenderer latex="n \in \mathbb{N}" />, l'expression de <LatexRenderer latex="P_n" />.</div>
                <div><strong>3.</strong> En déduire que, pour tout <LatexRenderer latex="n \in \mathbb{N}" />, <LatexRenderer latex="P_n" /> est un polynôme ; préciser son degré et son coefficient dominant.</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex4')}
              variant={visibleCorrections['ex4'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex4'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex4'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-4 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">1. Calcul des premiers termes :</strong>
                    <div className="mt-2 space-y-2">
                      <div className="text-center space-y-1">
                        <div><LatexRenderer latex="P_1(x) = (2x-1) P_0(x) = 2x-1" /></div>
                        <div><LatexRenderer latex="P_2(x) = (2x-1) P_1(x) = (2x-1)^2" /></div>
                        <div><LatexRenderer latex="P_3(x) = (2x-1) P_2(x) = (2x-1)^3" /></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">2. Expression générale :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Les premiers termes suggèrent :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P_n(x) = (2x-1)^n \quad (n \in \mathbb{N})" />
                      </div>
                      
                      <div className="mt-3">
                        <strong>Preuve par récurrence :</strong>
                      </div>
                      <div><strong>Initialisation :</strong> pour <LatexRenderer latex="n = 0" />, <LatexRenderer latex="P_0(x) = 1 = (2x-1)^0" /> (vrai).</div>
                      <div><strong>Hérédité :</strong> supposons <LatexRenderer latex="P_n(x) = (2x-1)^n" />. Alors</div>
                      <div className="text-center">
                        <LatexRenderer latex="P_{n+1}(x) = (2x-1) P_n(x) = (2x-1) \cdot (2x-1)^n = (2x-1)^{n+1}" />
                      </div>
                      <div>La propriété est donc vraie pour <LatexRenderer latex="n+1" /> ; par récurrence, la formule est établie pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">3. Degré et coefficient dominant :</strong>
                    <div className="mt-2 space-y-2">
                      <div>D'après <LatexRenderer latex="P_n(x) = (2x-1)^n" /> :</div>
                      <div>• <LatexRenderer latex="\deg P_n = n \cdot \deg(2x-1) = n \times 1 = n" /></div>
                      <div>• Le terme dominant est <LatexRenderer latex="(2x)^n = 2^n x^n" />, donc le coefficient dominant vaut <LatexRenderer latex="2^n" /></div>
                    </div>
                  </div>

                  <div className="text-center bg-green-100 p-3 rounded">
                    <strong>Réponse synthétique :</strong><br/>
                    <LatexRenderer latex="P_n(x) = (2x-1)^n, \quad \deg P_n = n, \quad a_n = 2^n" />
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Exercice 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 5</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Déterminer un polynôme de degré 3 tel que :
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="\forall x \in \mathbb{R}, \quad P(x+1) - P(x) = x^2" />
              </div>
              <p className="text-blue-800 mb-4">
                En déduire une nouvelle méthode pour démontrer la formule :
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="\sum_{k=0}^n k^2 = \frac{n(n+1)(2n+1)}{6}" />
              </div>
              <p className="text-blue-800">
                <strong>Bonus :</strong> En utilisant une méthode similaire mettant en scène un polynôme <LatexRenderer latex="Q" /> de degré 5, déterminer une formule pour <LatexRenderer latex="\sum_{k=0}^n k^4" />.
              </p>
            </div>

            <Button
              onClick={() => toggleCorrection('ex5')}
              variant={visibleCorrections['ex5'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex5'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex5'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-6 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">Recherche du polynôme P :</strong>
                    <div className="mt-2 space-y-2">
                      <div>On cherche un polynôme <LatexRenderer latex="P \in \mathbb{R}_3[X]" />, donc :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = ax^3 + bx^2 + cx + d" />
                      </div>
                      <div>Calculons <LatexRenderer latex="P(x+1) - P(x)" /> :</div>
                      <div className="text-center space-y-1">
                        <div><LatexRenderer latex="P(x+1) = a(x+1)^3 + b(x+1)^2 + c(x+1) + d" /></div>
                        <div><LatexRenderer latex="= a(x^3 + 3x^2 + 3x + 1) + b(x^2 + 2x + 1) + c(x+1) + d" /></div>
                        <div><LatexRenderer latex="= ax^3 + (3a + b)x^2 + (3a + 2b + c)x + (a + b + c + d)" /></div>
                      </div>
                      <div>Donc :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x+1) - P(x) = 3a x^2 + (3a + 2b)x + (a + b + c)" />
                      </div>
                      <div>Par identification avec <LatexRenderer latex="x^2" />, on obtient :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\begin{cases} 3a = 1 \\ 3a + 2b = 0 \\ a + b + c = 0 \end{cases} \Rightarrow a = \frac{1}{3}, \quad b = -\frac{1}{2}, \quad c = \frac{1}{6}" />
                      </div>
                      <div>Donc :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = \frac{1}{3}x^3 - \frac{1}{2}x^2 + \frac{1}{6}x + d" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">Calcul de la somme :</strong>
                    <div className="mt-2 space-y-2">
                      <div>Calculons maintenant <LatexRenderer latex="\sum_{k=0}^n k^2" /> :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\sum_{k=0}^n k^2 = \sum_{k=0}^n (P(k+1) - P(k)) = P(n+1) - P(0)" />
                      </div>
                      <div>Or :</div>
                      <div className="text-center space-y-1">
                        <div><LatexRenderer latex="P(n+1) = \frac{1}{3}(n+1)^3 - \frac{1}{2}(n+1)^2 + \frac{1}{6}(n+1) + d" /></div>
                        <div><LatexRenderer latex="P(0) = d" /></div>
                      </div>
                      <div>Donc :</div>
                      <div className="text-center bg-green-100 p-3 rounded">
                        <LatexRenderer latex="P(n+1) - P(0) = \frac{1}{3}(n+1)^3 - \frac{1}{2}(n+1)^2 + \frac{1}{6}(n+1) = \frac{n(n+1)(2n+1)}{6}" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">Bonus - Formule pour ∑k⁴ :</strong>
                    <div className="mt-2 space-y-2">
                      <div>On cherche un polynôme <LatexRenderer latex="Q \in \mathbb{R}_5[X]" /> tel que <LatexRenderer latex="Q(x+1) - Q(x) = x^4" />.</div>
                      <div>Par identification, on trouve :</div>
                      <div className="text-center">
                        <LatexRenderer latex="Q(x) = \frac{1}{5}x^5 - \frac{1}{2}x^4 + \frac{1}{3}x^3 - \frac{1}{30}x + f" />
                      </div>
                      <div>Alors :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\sum_{k=0}^n k^4 = Q(n+1) - Q(0)" />
                      </div>
                      <div className="text-center bg-green-100 p-3 rounded">
                        <strong>Résultat final :</strong><br/>
                        <LatexRenderer latex="\sum_{k=0}^n k^4 = \frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Exercice 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 6</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. On pose <LatexRenderer latex="P" /> le polynôme défini sur <LatexRenderer latex="\mathbb{R}" /> par <LatexRenderer latex="P : x \mapsto (x + 1)^n" />. Calculer de deux manières différentes la dérivée <LatexRenderer latex="P'" /> de <LatexRenderer latex="P" />. En déduire la somme <LatexRenderer latex="\sum_{k=0}^{n} k \binom{n}{k}" />.
              </p>
            </div>

            <Button
              onClick={() => toggleCorrection('ex6')}
              variant={visibleCorrections['ex6'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex6'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex6'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                <div className="space-y-4 text-green-900">
                  
                  <div>
                    <strong className="text-green-700">Première méthode : Dérivation directe :</strong>
                    <div className="mt-2 space-y-2">
                      <div>La fonction <LatexRenderer latex="P" /> est dérivable car polynomiale. On a d'une part :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\forall x \in \mathbb{R}, \quad P'(x) = n (x + 1)^{n-1}" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">Deuxième méthode : Développement par le binôme de Newton :</strong>
                    <div className="mt-2 space-y-2">
                      <div>D'autre part, on peut développer <LatexRenderer latex="P" /> à l'aide du binôme de Newton et on obtient :</div>
                      <div className="text-center">
                        <LatexRenderer latex="P(x) = \sum_{k=0}^{n} \binom{n}{k} x^k \times (1)^{n-k} = \sum_{k=0}^{n} \binom{n}{k} x^k" />
                      </div>
                      <div>Dérivons <LatexRenderer latex="P" /> sous sa forme développée, on obtient :</div>
                      <div className="text-center">
                        <LatexRenderer latex="\forall x \in \mathbb{R}, \quad P'(x) = \sum_{k=0}^{n} \binom{n}{k} k x^{k-1}" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-green-700">Égalité des deux expressions :</strong>
                    <div className="mt-2 space-y-2">
                      <div>On peut alors affirmer que pour tout réel <LatexRenderer latex="x" /> :</div>
                      <div className="text-center">
                        <LatexRenderer latex="n (x + 1)^{n-1} = \sum_{k=0}^{n} \binom{n}{k} k x^{k-1}" />
                      </div>
                      <div>Évaluons cette égalité pour <LatexRenderer latex="x = 1" />, on obtient :</div>
                      <div className="text-center bg-green-100 p-3 rounded">
                        <LatexRenderer latex="\sum_{k=0}^{n} k \binom{n}{k} = n 2^{n-1}" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/polynomes-approximation-cours">
              <div className="text-blue-600 hover:text-blue-700">← Retour au cours</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/polynomes-approximation-cours">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Cours
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <Link to="/formation/oteria/fonctions-variable-reelle-cours">
              <div className="text-blue-600 hover:text-blue-700">Séance suivante →</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OteriaPolynomesExercicesPage;

