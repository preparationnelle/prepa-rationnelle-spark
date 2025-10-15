import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, Zap, Eye, EyeOff, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaProbabilitesExercicesPage = () => {
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
            <span className="text-blue-600 font-medium">Séance 8 - Exercices</span>
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
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Exercices - Introduction aux probabilités</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Génération d'aléatoire, Règles addition / multiplication, indépendance
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">8</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Nombre d'exercices</span>
                  <span className="text-2xl font-bold text-blue-900">8</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Génération d'aléatoire, Règles addition / multiplication, indépendance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/probabilites-introduction-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <Link to="/formation/oteria/probabilites-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-not-allowed opacity-50 font-medium shadow-md">
                  <Zap className="h-5 w-5 mx-auto mb-2" />
                  QCM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Exercice 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 1 : Lancer de dés</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On lance un dé équilibré à 6 faces.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Quelle est la probabilité d'obtenir un 5 ?</div>
                <div><strong>2.</strong> Quelle est la probabilité d'obtenir un nombre pair ?</div>
                <div><strong>3.</strong> Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 4 ?</div>
                <div><strong>4.</strong> Quelle est la probabilité d'obtenir un nombre impair et supérieur à 3 ?</div>
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
                    <p className="font-semibold mb-2">1. Probabilité d'obtenir un 5</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(\{5\}) = \frac{1}{6}" block={true} />
                      <p className="mt-2 text-sm">Il y a 1 cas favorable sur 6 possibles.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité d'obtenir un nombre pair</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Nombres pairs : {'{2, 4, 6}'}</p>
                      <LatexRenderer latex="P(\text{pair}) = \frac{3}{6} = \frac{1}{2}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité d'obtenir ≥ 4</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Nombres ≥ 4 : {'{4, 5, 6}'}</p>
                      <LatexRenderer latex="P(X \geq 4) = \frac{3}{6} = \frac{1}{2}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité d'obtenir un impair > 3</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Nombres impairs et {'>'}3 : {'{5}'}</p>
                      <LatexRenderer latex="P(\text{impair et} > 3) = \frac{1}{6}" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 2 : Tirage de cartes</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On tire une carte au hasard dans un jeu de 52 cartes (13 cartes par couleur : ♠, ♥, ♦, ♣).
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Quelle est la probabilité de tirer un As ?</div>
                <div><strong>2.</strong> Quelle est la probabilité de tirer un cœur (♥) ?</div>
                <div><strong>3.</strong> Quelle est la probabilité de tirer une figure (Valet, Dame, Roi) ?</div>
                <div><strong>4.</strong> Quelle est la probabilité de tirer un As OU un cœur ?</div>
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
                    <p className="font-semibold mb-2">1. Probabilité de tirer un As</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Il y a 4 As dans le jeu (un par couleur)</p>
                      <LatexRenderer latex="P(\text{As}) = \frac{4}{52} = \frac{1}{13}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité de tirer un cœur</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Il y a 13 cœurs dans le jeu</p>
                      <LatexRenderer latex="P(\heartsuit) = \frac{13}{52} = \frac{1}{4}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité de tirer une figure</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Il y a 3 figures par couleur × 4 couleurs = 12 figures</p>
                      <LatexRenderer latex="P(\text{Figure}) = \frac{12}{52} = \frac{3}{13}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité de tirer un As OU un cœur</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Utilisons la formule : P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
                      <LatexRenderer latex="P(\text{As} \cup \heartsuit) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}" block={true} />
                      <p className="mt-2 text-sm text-gray-600">On soustrait P(As de cœur) car il est compté deux fois.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 3 : Règle du produit</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On lance deux dés équilibrés l'un après l'autre.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien y a-t-il de résultats possibles au total ?</div>
                <div><strong>2.</strong> Quelle est la probabilité d'obtenir un double (même résultat sur les deux dés) ?</div>
                <div><strong>3.</strong> Quelle est la probabilité que la somme soit égale à 7 ?</div>
                <div><strong>4.</strong> Quelle est la probabilité que les deux dés montrent des nombres pairs ?</div>
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
                    <p className="font-semibold mb-2">1. Nombre de résultats possibles</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Règle du produit : 6 choix pour le 1er dé × 6 choix pour le 2ème</p>
                      <LatexRenderer latex="\text{Total} = 6 \times 6 = 36 \text{ résultats possibles}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité d'obtenir un double</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Doubles possibles : (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) → 6 cas</p>
                      <LatexRenderer latex="P(\text{double}) = \frac{6}{36} = \frac{1}{6}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité que la somme soit 7</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Combinaisons donnant 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 cas</p>
                      <LatexRenderer latex="P(\text{somme} = 7) = \frac{6}{36} = \frac{1}{6}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Probabilité que les deux soient pairs</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">1er dé pair : {'{2,4,6}'} → P = 3/6 = 1/2</p>
                      <p className="mb-2">2ème dé pair : {'{2,4,6}'} → P = 3/6 = 1/2</p>
                      <p className="mb-2">Les lancers sont indépendants, donc :</p>
                      <LatexRenderer latex="P(\text{les deux pairs}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 4 : Événements indépendants</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un système de sécurité comporte deux capteurs indépendants. Le capteur A détecte une intrusion avec une probabilité de 0.9, le capteur B avec une probabilité de 0.85.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Quelle est la probabilité que les deux capteurs détectent l'intrusion ?</div>
                <div><strong>2.</strong> Quelle est la probabilité qu'aucun des deux capteurs ne détecte l'intrusion ?</div>
                <div><strong>3.</strong> Quelle est la probabilité qu'au moins un capteur détecte l'intrusion ?</div>
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
                    <p className="font-semibold mb-2">1. Probabilité que les deux détectent</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Les capteurs sont indépendants, donc :</p>
                      <LatexRenderer latex="P(A \cap B) = P(A) \times P(B) = 0.9 \times 0.85 = 0.765" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Il y a 76.5% de chances que les deux détectent.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité qu'aucun ne détecte</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">P(A ne détecte pas) = 1 - 0.9 = 0.1</p>
                      <p className="mb-2">P(B ne détecte pas) = 1 - 0.85 = 0.15</p>
                      <LatexRenderer latex="P(\overline{A} \cap \overline{B}) = 0.1 \times 0.15 = 0.015" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Il n'y a que 1.5% de chances que les deux échouent.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité qu'au moins un détecte</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Méthode 1 (complémentaire) :</p>
                      <LatexRenderer latex="P(\text{au moins un}) = 1 - P(\text{aucun}) = 1 - 0.015 = 0.985" block={true} />
                      <p className="mt-3 mb-2">Méthode 2 (addition) :</p>
                      <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.9 + 0.85 - 0.765 = 0.985" block={true} />
                      <p className="mt-2 text-sm text-gray-600">98.5% de chances qu'au moins un capteur détecte l'intrusion.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 5 : Probabilités conditionnelles</h2>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Dans une entreprise, 60% des employés sont des femmes. Parmi les femmes, 40% occupent un poste de cadre. Parmi les hommes, 50% occupent un poste de cadre.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Quelle est la probabilité qu'un employé choisi au hasard soit une femme cadre ?</div>
                <div><strong>2.</strong> Quelle est la probabilité qu'un employé choisi au hasard soit cadre ?</div>
                <div><strong>3.</strong> Sachant qu'un employé est cadre, quelle est la probabilité que ce soit une femme ?</div>
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
                  <div className="bg-blue-50 p-3 rounded mb-4">
                    <p className="font-semibold mb-2">Notations :</p>
                    <p>• F = "l'employé est une femme" → P(F) = 0.6</p>
                    <p>• H = "l'employé est un homme" → P(H) = 0.4</p>
                    <p>• C = "l'employé est cadre"</p>
                    <p>• P(C|F) = 0.4 et P(C|H) = 0.5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">1. Probabilité d'être une femme cadre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">On cherche P(F ∩ C)</p>
                      <LatexRenderer latex="P(F \cap C) = P(F) \times P(C|F) = 0.6 \times 0.4 = 0.24" block={true} />
                      <p className="mt-2 text-sm text-gray-600">24% des employés sont des femmes cadres.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité d'être cadre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Formule des probabilités totales :</p>
                      <LatexRenderer latex="P(C) = P(F \cap C) + P(H \cap C)" block={true} />
                      <LatexRenderer latex="P(C) = 0.6 \times 0.4 + 0.4 \times 0.5 = 0.24 + 0.2 = 0.44" block={true} />
                      <p className="mt-2 text-sm text-gray-600">44% des employés sont cadres.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Probabilité d'être une femme sachant qu'on est cadre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">On cherche P(F|C) avec la formule de Bayes :</p>
                      <LatexRenderer latex="P(F|C) = \frac{P(F \cap C)}{P(C)} = \frac{0.24}{0.44} \approx 0.545" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Environ 54.5% des cadres sont des femmes.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 6 : Simulation avec Python</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Écrire un programme Python pour simuler 10 000 lancers de deux dés et estimer :
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> La probabilité d'obtenir une somme égale à 7</div>
                <div><strong>2.</strong> La probabilité d'obtenir un double</div>
                <div><strong>3.</strong> Comparer les résultats avec les probabilités théoriques</div>
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
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé - Programme Python</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`import random

# Paramètres de simulation
n_simulations = 10000
compteur_somme_7 = 0
compteur_double = 0

# Simulation
for _ in range(n_simulations):
    de1 = random.randint(1, 6)
    de2 = random.randint(1, 6)
    somme = de1 + de2
    
    if somme == 7:
        compteur_somme_7 += 1
    
    if de1 == de2:
        compteur_double += 1

# Calcul des probabilités estimées
proba_somme_7_estimee = compteur_somme_7 / n_simulations
proba_double_estimee = compteur_double / n_simulations

# Probabilités théoriques
proba_somme_7_theorique = 6/36  # 1/6
proba_double_theorique = 6/36   # 1/6

# Affichage des résultats
print(f"Somme = 7:")
print(f"  Probabilité estimée: {proba_somme_7_estimee:.4f}")
print(f"  Probabilité théorique: {proba_somme_7_theorique:.4f}")
print(f"  Erreur: {abs(proba_somme_7_estimee - proba_somme_7_theorique):.4f}")

print(f"\\nDouble:")
print(f"  Probabilité estimée: {proba_double_estimee:.4f}")
print(f"  Probabilité théorique: {proba_double_theorique:.4f}")
print(f"  Erreur: {abs(proba_double_estimee - proba_double_theorique):.4f}")`}</pre>
                  </div>

                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold mb-2">Résultat attendu (exemple) :</p>
                    <pre className="text-sm">{`Somme = 7:
  Probabilité estimée: 0.1672
  Probabilité théorique: 0.1667
  Erreur: 0.0005

Double:
  Probabilité estimée: 0.1658
  Probabilité théorique: 0.1667
  Erreur: 0.0009`}</pre>
                    <p className="mt-3 text-sm text-gray-700">Plus on augmente le nombre de simulations, plus l'estimation se rapproche de la valeur théorique (loi des grands nombres).</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 7 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 7 : Sécurité informatique - Mot de passe</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un mot de passe est composé de 6 caractères choisis parmi 26 lettres minuscules et 10 chiffres (36 possibilités par caractère). Un attaquant essaie de deviner le mot de passe en testant des combinaisons aléatoires.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien y a-t-il de mots de passe possibles ?</div>
                <div><strong>2.</strong> Quelle est la probabilité de trouver le bon mot de passe en un seul essai ?</div>
                <div><strong>3.</strong> Si l'attaquant peut tester 1 million de mots de passe par seconde, combien de temps faut-il en moyenne pour trouver le mot de passe ?</div>
                <div><strong>4.</strong> Si on ajoute des majuscules (26 lettres supplémentaires), comment change le temps d'attaque ?</div>
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
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Nombre de mots de passe possibles</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">36 choix par position × 6 positions :</p>
                      <LatexRenderer latex="\text{Total} = 36^6 = 2\\,176\\,782\\,336 \approx 2.18 \times 10^9" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Plus de 2 milliards de combinaisons possibles.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité de réussite en un essai</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(\text{succès}) = \frac{1}{36^6} = \frac{1}{2\\,176\\,782\\,336} \approx 4.6 \times 10^{-10}" block={true} />
                      <p className="mt-2 text-sm text-gray-600">Probabilité extrêmement faible !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Temps moyen d'attaque</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">En moyenne, il faut tester la moitié des combinaisons :</p>
                      <LatexRenderer latex="\text{Essais moyens} = \frac{36^6}{2} \approx 1.09 \times 10^9" block={true} />
                      <p className="mb-2">À 10⁶ essais/seconde :</p>
                      <LatexRenderer latex="\text{Temps} = \frac{1.09 \times 10^9}{10^6} = 1090 \text{ secondes} \approx 18 \text{ minutes}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Avec majuscules (62 caractères)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Nouveau nombre de combinaisons :</p>
                      <LatexRenderer latex="62^6 \approx 5.68 \times 10^{10}" block={true} />
                      <p className="mb-2">Temps moyen :</p>
                      <LatexRenderer latex="\text{Temps} = \frac{5.68 \times 10^{10}}{2 \times 10^6} \approx 28\\,400 \text{ secondes} \approx 7.9 \text{ heures}" block={true} />
                      <p className="mt-3 text-sm bg-yellow-50 p-2 rounded border border-yellow-200">
                        <strong>Conclusion :</strong> Ajouter des majuscules multiplie le temps d'attaque par 26 ! C'est pourquoi les mots de passe forts utilisent plusieurs types de caractères.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 8 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 8 : Générateur aléatoire et tests</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On souhaite tester la qualité d'un générateur de nombres pseudo-aléatoires en Python.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Écrire un programme qui génère 10 000 nombres aléatoires entre 0 et 1</div>
                <div><strong>2.</strong> Calculer la proportion de nombres inférieurs à 0.3 et comparer à la théorie</div>
                <div><strong>3.</strong> Calculer la moyenne et l'écart-type des nombres générés</div>
                <div><strong>4.</strong> Créer un histogramme pour visualiser la distribution</div>
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
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé - Programme Python complet</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">{`import random
import matplotlib.pyplot as plt
import numpy as np

# 1. Génération de 10 000 nombres aléatoires
n = 10000
nombres = [random.random() for _ in range(n)]

# 2. Proportion de nombres < 0.3
inferieurs_03 = sum(1 for x in nombres if x < 0.3)
proportion = inferieurs_03 / n
print(f"Proportion < 0.3: {proportion:.4f}")
print(f"Valeur théorique: 0.3000")
print(f"Écart: {abs(proportion - 0.3):.4f}\\n")

# 3. Moyenne et écart-type
moyenne = np.mean(nombres)
ecart_type = np.std(nombres)
print(f"Moyenne: {moyenne:.4f} (théorique: 0.5)")
print(f"Écart-type: {ecart_type:.4f} (théorique: {1/np.sqrt(12):.4f})\\n")

# 4. Histogramme
plt.figure(figsize=(10, 6))
plt.hist(nombres, bins=50, density=True, alpha=0.7, 
         color='blue', edgecolor='black')
plt.axhline(y=1, color='red', linestyle='--', 
           label='Distribution uniforme théorique')
plt.xlabel('Valeur')
plt.ylabel('Densité de probabilité')
plt.title('Distribution de 10 000 nombres pseudo-aléatoires')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`}</pre>
                  </div>

                  <div className="bg-blue-50 p-4 rounded mt-4">
                    <p className="font-semibold mb-3">Valeurs théoriques pour une loi uniforme sur [0,1] :</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Proportion &lt; 0.3 :</strong> Exactement 0.3 (30%)</li>
                      <li>• <strong>Moyenne :</strong> 0.5</li>
                      <li>• <strong>Écart-type :</strong> 1/√12 ≈ 0.2887</li>
                      <li>• <strong>Densité :</strong> Constante égale à 1</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                      Un bon générateur aléatoire doit produire des résultats très proches de ces valeurs théoriques. Les écarts observés diminuent avec le nombre de tirages (loi des grands nombres).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
          <Link to="/formation/oteria/denombrement-paradoxes-cours">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Séance précédente
            </button>
          </Link>
          <Link to="/articles/oteria-cyber-school">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Retour au programme
            </button>
          </Link>
          <Link to="/formation/oteria/variables-aleatoires-cours">
            <div className="text-blue-600 hover:text-blue-700 font-medium">Séance suivante →</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaProbabilitesExercicesPage;

