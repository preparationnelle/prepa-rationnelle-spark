import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, Zap, Eye, EyeOff, Calculator, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaVariablesAleatoiresExercicesPage = () => {
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
            <span className="text-blue-600 font-medium">Séance 9 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Exercices - Variables aléatoires</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Lois usuelles (Bernoulli, Binomiale, Exponentielle), Simulation et applications
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">9</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Nombre d'exercices</span>
                  <span className="text-2xl font-bold text-blue-900">8</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Lois usuelles (Bernoulli, Binomiale, Exponentielle…)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/variables-aleatoires-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <Link to="/formation/oteria/variables-aleatoires-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-qcm" className="group">
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
              <h2 className="text-2xl font-bold text-blue-900">Exercice 1 : Loi de Bernoulli</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un système de sécurité détecte une intrusion avec une probabilité p = 0.8. On modélise la détection par une variable de Bernoulli X.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Donner la loi de X</div>
                <div><strong>2.</strong> Calculer E(X) et Var(X)</div>
                <div><strong>3.</strong> Si on fait 5 tests indépendants, quelle est la probabilité de détecter au moins une fois ?</div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Loi de X</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">X suit une loi de Bernoulli de paramètre p = 0.8</p>
                      <LatexRenderer latex="P(X = 1) = 0.8 \quad \text{et} \quad P(X = 0) = 0.2" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Espérance et variance</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Pour une loi de Bernoulli B(p) :</p>
                      <LatexRenderer latex="E(X) = p = 0.8" block={true} />
                      <LatexRenderer latex="\text{Var}(X) = p(1-p) = 0.8 \times 0.2 = 0.16" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité d'au moins une détection sur 5 tests</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">P(aucune détection) = (1-0.8)⁵ = 0.2⁵</p>
                      <LatexRenderer latex="P(\text{au moins 1}) = 1 - 0.2^5 = 1 - 0.00032 = 0.99968" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Quasiment certain de détecter au moins une fois !</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 2 : Loi Binomiale</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un administrateur réseau teste 20 pare-feu indépendants. Chaque pare-feu bloque une attaque avec une probabilité de 0.95.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Soit X le nombre de pare-feu qui bloquent l'attaque. Quelle est la loi de X ?</div>
                <div><strong>2.</strong> Calculer E(X) et Var(X)</div>
                <div><strong>3.</strong> Quelle est la probabilité que tous les pare-feu bloquent l'attaque ?</div>
                <div><strong>4.</strong> Quelle est la probabilité qu'au moins 18 pare-feu bloquent l'attaque ?</div>
              </div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Loi de X</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">X suit une loi binomiale B(n=20, p=0.95)</p>
                      <LatexRenderer latex="X \sim \mathcal{B}(20, 0.95)" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Espérance et variance</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="E(X) = np = 20 \times 0.95 = 19" block={true} />
                      <LatexRenderer latex="\text{Var}(X) = np(1-p) = 20 \times 0.95 \times 0.05 = 0.95" block={true} />
                      <p className="mt-2 text-sm text-gray-600">En moyenne, 19 pare-feu bloquent l'attaque.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité que tous bloquent</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(X = 20) = \binom{20}{20} \times 0.95^{20} \times 0.05^0 = 0.95^{20} \approx 0.358" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 36% de chances que tous bloquent.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité qu'au moins 18 bloquent</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">P(X ≥ 18) = P(X=18) + P(X=19) + P(X=20)</p>
                      <LatexRenderer latex="P(X=18) = \binom{20}{18} \times 0.95^{18} \times 0.05^2 \approx 0.189" block={true} />
                      <LatexRenderer latex="P(X=19) = \binom{20}{19} \times 0.95^{19} \times 0.05^1 \approx 0.377" block={true} />
                      <LatexRenderer latex="P(X=20) \approx 0.358" block={true} />
                      <LatexRenderer latex="P(X \geq 18) \approx 0.189 + 0.377 + 0.358 = 0.924" block={true} />
                      <p className="mt-2 text-sm text-gray-600">92.4% de chances qu'au moins 18 pare-feu bloquent.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 3 : Loi Géométrique</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un attaquant tente de deviner un mot de passe. Chaque tentative réussit avec probabilité p = 0.01, indépendamment des autres.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Soit X le nombre d'essais nécessaires pour réussir. Quelle est la loi de X ?</div>
                <div><strong>2.</strong> Calculer E(X)</div>
                <div><strong>3.</strong> Quelle est la probabilité de réussir au bout du 10ème essai exactement ?</div>
                <div><strong>4.</strong> Quelle est la probabilité de réussir en moins de 50 essais ?</div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Loi de X</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">X suit une loi géométrique de paramètre p = 0.01</p>
                      <LatexRenderer latex="P(X = k) = (1-p)^{k-1} \times p = 0.99^{k-1} \times 0.01" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Espérance</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Pour une loi géométrique :</p>
                      <LatexRenderer latex="E(X) = \frac{1}{p} = \frac{1}{0.01} = 100 \text{ essais}" block={true} />
                      <p className="mt-2 text-sm text-gray-600">En moyenne, il faut 100 essais pour réussir.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité de réussir au 10ème essai</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(X = 10) = 0.99^9 \times 0.01 \approx 0.0091" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 0.91% de chances.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité de réussir en moins de 50 essais</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">P(X {'<'} 50) = 1 - P(X ≥ 50) = 1 - (1-p)⁴⁹</p>
                      <LatexRenderer latex="P(X < 50) = 1 - 0.99^{49} \approx 1 - 0.612 = 0.388" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 39% de chances de réussir avant 50 essais.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 4 : Loi de Poisson</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un serveur reçoit en moyenne λ = 5 tentatives d'intrusion par heure. On modélise le nombre X de tentatives sur une heure par une loi de Poisson.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Donner la loi de X</div>
                <div><strong>2.</strong> Quelle est la probabilité de recevoir exactement 3 tentatives ?</div>
                <div><strong>3.</strong> Quelle est la probabilité de ne recevoir aucune tentative ?</div>
                <div><strong>4.</strong> Quelle est la probabilité de recevoir plus de 7 tentatives ?</div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Loi de X</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">X suit une loi de Poisson de paramètre λ = 5</p>
                      <LatexRenderer latex="P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!} = \frac{5^k e^{-5}}{k!}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité de 3 tentatives</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(X = 3) = \frac{5^3 e^{-5}}{3!} = \frac{125 \times e^{-5}}{6} \approx 0.1404" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 14% de chances.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité de 0 tentative</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(X = 0) = \frac{5^0 e^{-5}}{0!} = e^{-5} \approx 0.0067" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Seulement 0.67% de chances (très rare).</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité de plus de 7 tentatives</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">P(X {'>'} 7) = 1 - P(X ≤ 7) = 1 - ∑[k=0 à 7] P(X=k)</p>
                      <p className="mb-2">En calculant (ou avec une table) :</p>
                      <LatexRenderer latex="P(X > 7) \approx 1 - 0.867 = 0.133" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 13% de chances de dépasser 7 tentatives.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 5 : Loi Uniforme Continue</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un générateur de nombres aléatoires produit des valeurs uniformément sur [0, 10]. Soit X cette variable.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Donner la densité de probabilité de X</div>
                <div><strong>2.</strong> Calculer E(X) et Var(X)</div>
                <div><strong>3.</strong> Calculer P(3 ≤ X ≤ 7)</div>
                <div><strong>4.</strong> Sachant que X {'>'} 6, quelle est la probabilité que X {'>'} 8 ?</div>
              </div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Densité de probabilité</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">X suit une loi uniforme sur [0, 10]</p>
                      <LatexRenderer latex="f(x) = \begin{cases} \frac{1}{10} & \text{si } x \in [0,10] \\ 0 & \text{sinon} \end{cases}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Espérance et variance</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Pour une loi uniforme sur [a, b] :</p>
                      <LatexRenderer latex="E(X) = \frac{a+b}{2} = \frac{0+10}{2} = 5" block={true} />
                      <LatexRenderer latex="\text{Var}(X) = \frac{(b-a)^2}{12} = \frac{100}{12} \approx 8.33" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. P(3 ≤ X ≤ 7)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(3 \leq X \leq 7) = \int_3^7 \frac{1}{10} dx = \frac{7-3}{10} = \frac{4}{10} = 0.4" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. P(X {'>'} 8 | X {'>'} 6)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Probabilité conditionnelle :</p>
                      <LatexRenderer latex="P(X > 8 \mid X > 6) = \frac{P(X > 8 \cap X > 6)}{P(X > 6)} = \frac{P(X > 8)}{P(X > 6)}" block={true} />
                      <LatexRenderer latex="= \frac{(10-8)/10}{(10-6)/10} = \frac{2/10}{4/10} = \frac{2}{4} = 0.5" block={true} />
                      <p className="mt-2 text-sm text-gray-600">50% de chances, car la loi uniforme est "sans mémoire" sur les intervalles.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 6 : Loi Exponentielle</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Le temps T (en heures) entre deux pannes d'un serveur suit une loi exponentielle de paramètre λ = 0.5.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Donner la densité et la fonction de répartition de T</div>
                <div><strong>2.</strong> Calculer E(T) et interpréter</div>
                <div><strong>3.</strong> Quelle est la probabilité qu'une panne survienne dans les 3 premières heures ?</div>
                <div><strong>4.</strong> Sachant qu'aucune panne n'est survenue pendant 2h, quelle est la probabilité qu'il n'y en ait pas pendant encore 3h ?</div>
              </div>
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
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Densité et fonction de répartition</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Densité :</p>
                      <LatexRenderer latex="f(t) = \lambda e^{-\lambda t} = 0.5 e^{-0.5t} \quad (t \geq 0)" block={true} />
                      <p className="mb-2 mt-3">Fonction de répartition :</p>
                      <LatexRenderer latex="F(t) = 1 - e^{-\lambda t} = 1 - e^{-0.5t} \quad (t \geq 0)" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Espérance</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Pour une loi exponentielle :</p>
                      <LatexRenderer latex="E(T) = \frac{1}{\lambda} = \frac{1}{0.5} = 2 \text{ heures}" block={true} />
                      <p className="mt-2 text-sm text-gray-600">En moyenne, une panne survient toutes les 2 heures.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité de panne avant 3h</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(T \leq 3) = F(3) = 1 - e^{-0.5 \times 3} = 1 - e^{-1.5} \approx 0.777" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 78% de chances qu'une panne survienne dans les 3 premières heures.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Propriété d'absence de mémoire</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">La loi exponentielle a la propriété d'absence de mémoire :</p>
                      <LatexRenderer latex="P(T > 2+3 \mid T > 2) = P(T > 3)" block={true} />
                      <LatexRenderer latex="= e^{-0.5 \times 3} = e^{-1.5} \approx 0.223" block={true} />
                      <p className="mt-3 text-sm bg-blue-50 p-2 rounded border border-blue-200">
                        <strong>Interprétation :</strong> Le fait d'avoir déjà attendu 2h sans panne ne change pas la probabilité d'attendre encore 3h sans panne. C'est comme si on recommençait à zéro !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 7 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 7 : Simulation Python - Loi Binomiale</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Simuler une loi binomiale B(n=50, p=0.6) et comparer avec la théorie.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Écrire un programme Python pour simuler 10 000 valeurs de cette loi</div>
                <div><strong>2.</strong> Calculer la moyenne et la variance empiriques</div>
                <div><strong>3.</strong> Créer un histogramme et comparer avec la distribution théorique</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex7')}
              variant={visibleCorrections['ex7'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex7'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex7'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé - Programme Python</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import binom

# Paramètres
n = 50
p = 0.6
n_simulations = 10000

# 1. Simulation
echantillon = np.random.binomial(n, p, n_simulations)

# 2. Statistiques empiriques
moyenne_empirique = np.mean(echantillon)
variance_empirique = np.var(echantillon)

# Valeurs théoriques
moyenne_theorique = n * p
variance_theorique = n * p * (1-p)

print(f"Moyenne empirique: {moyenne_empirique:.2f}")
print(f"Moyenne théorique: {moyenne_theorique}")
print(f"Variance empirique: {variance_empirique:.2f}")
print(f"Variance théorique: {variance_theorique}")

# 3. Histogramme
plt.figure(figsize=(12, 6))

# Histogramme des simulations
plt.hist(echantillon, bins=range(0, n+2), density=True, 
         alpha=0.7, color='blue', edgecolor='black', 
         label='Simulation')

# Distribution théorique
x = range(0, n+1)
proba_theorique = binom.pmf(x, n, p)
plt.plot(x, proba_theorique, 'ro-', linewidth=2, 
         markersize=4, label='Théorique')

plt.xlabel('Nombre de succès')
plt.ylabel('Probabilité')
plt.title(f'Loi Binomiale B(n={n}, p={p})')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`}</pre>
                  </div>

                  <div className="bg-blue-50 p-4 rounded mt-4">
                    <p className="font-semibold mb-3">Résultats attendus :</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Moyenne empirique :</strong> ≈ 30 (théorique: 30)</li>
                      <li>• <strong>Variance empirique :</strong> ≈ 12 (théorique: 12)</li>
                      <li>• <strong>Forme :</strong> Distribution en cloche centrée sur 30</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                      L'histogramme montre une excellente concordance entre simulation et théorie, validant la loi des grands nombres.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 8 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 8 : Application - Temps de réponse d'un serveur</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Le temps de réponse T d'un serveur web (en ms) suit une loi exponentielle de paramètre λ = 0.01. On considère qu'une réponse est "lente" si T {'>'} 150 ms.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Quelle est la probabilité qu'une requête soit lente ?</div>
                <div><strong>2.</strong> Sur 100 requêtes indépendantes, combien peut-on s'attendre à avoir de requêtes lentes ?</div>
                <div><strong>3.</strong> Quelle est la probabilité qu'au moins 30 requêtes sur 100 soient lentes ?</div>
                <div><strong>4.</strong> Écrire un programme Python pour simuler cette situation</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex8')}
              variant={visibleCorrections['ex8'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex8'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex8'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Probabilité d'une requête lente</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(T > 150) = e^{-\lambda \times 150} = e^{-0.01 \times 150} = e^{-1.5} \approx 0.223" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 22.3% des requêtes sont lentes.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Nombre attendu de requêtes lentes sur 100</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Soit X le nombre de requêtes lentes. X suit B(n=100, p=0.223)</p>
                      <LatexRenderer latex="E(X) = np = 100 \times 0.223 = 22.3 \approx 22 \text{ requêtes}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité d'au moins 30 requêtes lentes</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Utilisons l'approximation normale (n grand, np {'>'} 5) :</p>
                      <LatexRenderer latex="\mu = np = 22.3, \quad \sigma = \sqrt{np(1-p)} = \sqrt{17.33} \approx 4.16" block={true} />
                      <p className="mb-2">Avec correction de continuité :</p>
                      <LatexRenderer latex="P(X \geq 30) \approx P\left(Z \geq \frac{29.5 - 22.3}{4.16}\right) = P(Z \geq 1.73) \approx 0.042" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Seulement 4.2% de chances (situation rare).</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Simulation Python</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">{`import numpy as np
import matplotlib.pyplot as plt

# Paramètres
lmbda = 0.01
seuil_lent = 150
n_requetes = 100
n_simulations = 10000

# Simulation
resultats = []
for _ in range(n_simulations):
    # Générer 100 temps de réponse
    temps = np.random.exponential(1/lmbda, n_requetes)
    # Compter les requêtes lentes
    nb_lentes = np.sum(temps > seuil_lent)
    resultats.append(nb_lentes)

# Analyse
moyenne = np.mean(resultats)
print(f"Nombre moyen de requêtes lentes: {moyenne:.2f}")
print(f"Théorique: {100 * 0.223:.2f}")

prob_30_ou_plus = np.mean(np.array(resultats) >= 30)
print(f"P(X >= 30) empirique: {prob_30_ou_plus:.4f}")

# Histogramme
plt.hist(resultats, bins=range(0, 50), density=True, 
         alpha=0.7, edgecolor='black')
plt.xlabel('Nombre de requêtes lentes')
plt.ylabel('Fréquence')
plt.title('Distribution du nombre de requêtes lentes (sur 100)')
plt.axvline(22.3, color='r', linestyle='--', 
           label='Espérance théorique')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
          <Link to="/formation/oteria/probabilites-introduction-cours">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Séance précédente
            </button>
          </Link>
          <Link to="/articles/oteria-cyber-school">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Retour au programme
            </button>
          </Link>
          <Link to="/formation/oteria/integrales-monte-carlo-cours">
            <div className="text-blue-600 hover:text-blue-700 font-medium">Séance suivante →</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaVariablesAleatoiresExercicesPage;

