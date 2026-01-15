import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, BarChart3, TrendingUp } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaIntegralesMonteCarloCoursPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Séance 10 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 10 : Analyse de lois</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Approximation d'intégrales (aire sous courbe), Monte-Carlo — Histogrammes, théorèmes limites et convergence
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Informations de cours */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Informations du cours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">
                Professeur : Dimitar Dimitrov
              </p>
              <p className="text-blue-800">
                Oteria Cyber School, Bachelor 2 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Algorithmes sur les listes */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              1. Algorithmes sur les listes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <p>
                En pratique, on manipule souvent des <strong>listes de données simulées</strong> pour analyser des lois de probabilité.
              </p>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Opérations usuelles</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">min(L)</code>
                    <p className="text-base mt-1">Valeur minimale.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">max(L)</code>
                    <p className="text-base mt-1">Valeur maximale.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">sorted(L)</code>
                    <p className="text-base mt-1">Tri croissant.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">filter</code>
                    <p className="text-base mt-1">Sélection d'éléments selon un critère.</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Applications</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>Estimer la loi d'une variable aléatoire en simulant <LatexRenderer latex="n" block={false} /> tirages.</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>Calculer les fréquences empiriques et les comparer aux probabilités théoriques.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Histogrammes et fonctions de répartition */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              2. Histogrammes et fonctions de répartition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-4 text-blue-900">Histogramme</p>

                <div className="bg-blue-50 border border-blue-300 rounded p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Qu'est-ce qu'un histogramme ?</h4>
                  <p className="text-gray-700">
                    Un histogramme est un graphique en barres qui représente la <strong>distribution des fréquences</strong>
                    d'un ensemble de données. Plus une barre est haute, plus il y a de valeurs dans cette plage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-blue-200 rounded p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Fréquence d'une classe</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Si on observe n valeurs, la fréquence d'une classe C est :
                    </p>
                    <div className="bg-gray-50 p-3 rounded">
                      <LatexRenderer latex="f(C) = \frac{\text{nombre de valeurs dans } C}{n}" block={true} />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Ou en notation mathématique :
                    </p>
                    <div className="bg-gray-50 p-3 rounded">
                      <LatexRenderer latex="f(C) = \frac{\#\{i : x_i \in C\}}{n}" block={true} />
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Exemple concret</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Supposons 20 lancers de dé :
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm">Classe [1-2] :</span>
                        <span className="font-mono text-sm">8 valeurs</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm">Classe [3-4] :</span>
                        <span className="font-mono text-sm">7 valeurs</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm">Classe [5-6] :</span>
                        <span className="font-mono text-sm">5 valeurs</span>
                      </div>
                    </div>
                    <p className="text-sm text-blue-600 mt-2 font-medium">
                      Fréquences : 8/20 = 0.4, 7/20 = 0.35, 5/20 = 0.25
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Pourquoi utiliser des histogrammes ?</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Visualiser</strong> la répartition des données</li>
                    <li>• <strong>Identifier</strong> les valeurs fréquentes</li>
                    <li>• <strong>Comparer</strong> différentes distributions</li>
                    <li>• <strong>Détecter</strong> des anomalies ou des tendances</li>
                  </ul>

                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h5 className="font-semibold text-blue-700 mb-3">Exemple d'histogramme : Notes d'un examen</h5>
                    <div className="bg-white border border-blue-200 rounded p-4">
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600 mb-2">
                          Distribution des notes de 100 étudiants (sur 20) :
                        </div>

                        <div className="grid grid-cols-5 gap-2 text-xs">
                          <div className="text-center">
                            <div className="bg-blue-500 text-white p-1 rounded-t text-center font-medium">0-4</div>
                            <div className="bg-blue-100 border border-blue-300 p-2 text-center h-8 flex items-end justify-center">
                              <span className="text-blue-700 font-medium">3</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-blue-500 text-white p-1 rounded-t text-center font-medium">4-8</div>
                            <div className="bg-blue-100 border border-blue-300 p-2 text-center h-12 flex items-end justify-center">
                              <span className="text-blue-700 font-medium">7</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-blue-500 text-white p-1 rounded-t text-center font-medium">8-12</div>
                            <div className="bg-blue-100 border border-blue-300 p-2 text-center h-16 flex items-end justify-center">
                              <span className="text-blue-700 font-medium">15</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-blue-500 text-white p-1 rounded-t text-center font-medium">12-16</div>
                            <div className="bg-blue-100 border border-blue-300 p-2 text-center h-20 flex items-end justify-center">
                              <span className="text-blue-700 font-medium">28</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-blue-500 text-white p-1 rounded-t text-center font-medium">16-20</div>
                            <div className="bg-blue-100 border border-blue-300 p-2 text-center h-24 flex items-end justify-center">
                              <span className="text-blue-700 font-medium">47</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 mt-3 space-y-1">
                          <div>• La classe la plus fréquente : 16-20 (47 étudiants)</div>
                          <div>• Répartition normale centrée autour de 14-15</div>
                          <div>• Peu d'étudiants dans les extrêmes (0-4 et 16-20)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 3: Simulation d'une loi */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              3. Simulation d'une loi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Méthode d'inversion</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="U \sim \mathcal{U}[0,1]" block={false} /> et <LatexRenderer latex="F" block={false} /> est la fonction de répartition d'une variable <LatexRenderer latex="X" block={false} />, alors :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="X = F^{-1}(U)" block={true} />
                </div>
                <p className="mb-4">a pour loi <LatexRenderer latex="F" block={false} />.</p>

                <div className="bg-blue-50 border border-blue-300 rounded p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Principe :</h4>
                  <p className="mb-3">
                    La méthode d'inversion permet de simuler n'importe quelle loi à partir d'une loi uniforme.
                    L'idée est d'utiliser l'inverse de la fonction de répartition.
                  </p>
                  <div className="bg-white p-3 rounded border mb-3">
                    <strong>Étape 1 :</strong> Générer U ~ U[0,1]<br />
                    <strong>Étape 2 :</strong> Calculer X = F⁻¹(U)<br />
                    <strong>Résultat :</strong> X suit la loi de fonction de répartition F
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples détaillés</p>

                <div className="space-y-4">
                  <div className="bg-white border border-blue-200 rounded p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">1. Loi exponentielle</h4>
                    <p className="mb-2">Pour une loi exponentielle de paramètre λ :</p>
                    <LatexRenderer latex="F(x) = 1 - e^{-\lambda x} \quad \Rightarrow \quad F^{-1}(u) = -\frac{1}{\lambda} \ln(1-u)" block={true} />
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-3">
                      <pre>{`import random
import math

def generate_exponential(lambda_param):
    u = random.random()
    return -math.log(1-u) / lambda_param

# Exemple
x = generate_exponential(0.5)
print(f"Valeur générée: {x}")`}</pre>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">2. Loi géométrique</h4>
                    <p className="mb-2">Pour une loi géométrique G(p) :</p>
                    <LatexRenderer latex="F(k) = 1 - (1-p)^k \quad \Rightarrow \quad k = \min\{n : U \leq 1-(1-p)^n\}" block={true} />
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-3">
                      <pre>{`import random
import math

def generate_geometric(p):
    u = random.random()
    k = 1
    while u > 1 - math.pow(1-p, k):
        k += 1
    return k

# Exemple
x = generate_geometric(0.3)
print(f"Valeur générée: {x}")`}</pre>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">3. Loi normale (approximation)</h4>
                    <p className="mb-2">Utilisation de la méthode de Box-Muller :</p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-3">
                      <pre>{`import random
import math

def generate_normal(mu=0, sigma=1):
    u1 = random.random()
    u2 = random.random()
    z0 = math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2)
    return mu + sigma * z0

# Exemple
x = generate_normal(0, 1)
print(f"Valeur générée: {x}")`}</pre>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded p-4 mt-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Avantages de la méthode d'inversion :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Applicable à toutes les lois continues</li>
                    <li>• Théoriquement exacte</li>
                    <li>• Facile à implémenter pour certaines lois</li>
                    <li>• Base de nombreuses méthodes de simulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Inégalités fondamentales */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              4. Inégalités fondamentales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Inégalité de Markov</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="Z \geq 0" block={false} /> et <LatexRenderer latex="a>0" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(Z \geq a) \leq \frac{E(Z)}{a}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Inégalité de Bienaymé-Tchebychev</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="\mathrm{Var}(Z)" block={false} /> existe, alors pour <LatexRenderer latex="\varepsilon >0" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(|Z - E(Z)| \geq \varepsilon) \leq \frac{\mathrm{Var}(Z)}{\varepsilon^2}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Convergence en probabilité */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              5. Convergence en probabilité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  <LatexRenderer latex="Z_n \xrightarrow{P} Z" block={false} /> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\forall \varepsilon>0, \quad \lim_{n\to\infty} P(|Z_n - Z| \geq \varepsilon) = 0" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Loi faible des grands nombres</p>
                <p className="mb-3">
                  Pour <LatexRenderer latex="(Y_k)" block={false} /> indépendantes, identiquement distribuées d'espérance <LatexRenderer latex="m" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\overline{Y}_n = \frac{1}{n} \sum_{k=1}^n Y_k \xrightarrow{P} m" block={true} />
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded p-4 mt-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Exemple d'application : Estimation de probabilités</h4>
                  <p className="mb-3">
                    La moyenne empirique tend vers la moyenne réelle quand on répète beaucoup d'expériences.
                    C'est la base de la statistique expérimentale :
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="bg-white p-3 rounded border">
                      <strong>Probabilité d'un double avec deux dés</strong> = fréquence observée des doubles
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>Probabilité de panne d'un composant</strong> = nombre de pannes / total d'essais
                    </div>
                  </div>

                  <p className="mb-3">
                    Plus on répète les expériences, plus la fréquence observée se rapproche de la probabilité vraie.
                  </p>

                  <div className="bg-white border border-blue-200 rounded p-3">
                    <LatexRenderer latex="P(A) \approx \frac{\text{nombre de succès}}{n}" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Convergence en loi */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              6. Convergence en loi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  <LatexRenderer latex="Z_n \xrightarrow{\mathcal{L}} Z" block={false} /> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\forall x \; \text{où } F_Z \text{ est continue}, \quad \lim_{n\to\infty} F_{Z_n}(x) = F_Z(x)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Théorème central limite (TCL)</p>
                <p className="mb-3">
                  Soit <LatexRenderer latex="(Y_k)" block={false} /> une suite de variables i.i.d. d'espérance <LatexRenderer latex="m" block={false} /> et variance <LatexRenderer latex="\sigma^2" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="Z_n^* = \frac{\overline{Y}_n - m}{\sigma/\sqrt{n}} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Approximations classiques</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Binomiale</p>
                    <LatexRenderer latex="B(n,p) \approx \mathcal{N}(np, np(1-p)) \text{ si } n\geq 20" block={true} />

                    <div className="mt-4">
                      <h6 className="font-semibold text-blue-800 mb-2">Exemple concret : B(50, 0.3)</h6>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                        <pre>{`import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import binom, norm

# Paramètres
n, p = 50, 0.3
mu = n * p          # Espérance = 15
sigma = np.sqrt(n * p * (1-p))  # Écart-type ≈ 3.24

# Simulation
np.random.seed(42)
binom_samples = binom.rvs(n, p, size=10000)

# Approximation normale
x = np.linspace(0, 25, 100)
binom_pmf = binom.pmf(np.arange(0, 26), n, p)
normal_pdf = norm.pdf(x, mu, sigma)

print(f"Espérance binomiale: {mu}")
print(f"Variance binomiale: {sigma**2:.2f}")
print(f"Écart-type: {sigma:.2f}")

# Tracé du graphique
plt.figure(figsize=(10, 6))

# Histogramme des échantillons binomiaux
plt.hist(binom_samples, bins=np.arange(0, 27)-0.5, density=True,
         alpha=0.7, color='skyblue', label='Échantillons binomiaux')

# Probabilités théoriques binomiale (barres)
x_bins = np.arange(0, 26)
plt.bar(x_bins, binom_pmf, alpha=0.5, color='blue',
        width=0.8, label='Loi binomiale B(50,0.3)')

# Approximation normale
plt.plot(x, normal_pdf, 'r-', linewidth=2,
         label='Approximation normale N(15, 10.5)')

plt.xlabel('Nombre de succès')
plt.ylabel('Probabilité')
plt.title('Convergence en loi : Binomiale B(50,0.3) ≈ Normale N(15,10.5)')
plt.legend()
plt.grid(True, alpha=0.3)
plt.xlim(0, 25)
plt.show()`}</pre>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <h6 className="font-semibold text-blue-800 mb-2">Résultat :</h6>
                        <div className="text-sm text-gray-700 space-y-1">
                          <div>• <strong>Espérance</strong> : μ = np = 50 × 0.3 = 15</div>
                          <div>• <strong>Variance</strong> : σ² = np(1-p) = 50 × 0.3 × 0.7 = 10.5</div>
                          <div>• <strong>Écart-type</strong> : σ ≈ 3.24</div>
                          <div>• <strong>Approximation</strong> : B(50,0.3) ≈ N(15, 10.5)</div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Visualisation :</strong> Le graphique montre trois éléments superposés :
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• <span className="text-blue-600 font-medium">Barres bleues</span> : Probabilités théoriques de la loi binomiale B(50,0.3)</div>
                          <div>• <span className="text-sky-600 font-medium">Histogramme bleu clair</span> : Distribution des échantillons simulés</div>
                          <div>• <span className="text-red-600 font-medium">Courbe rouge</span> : Approximation par la loi normale N(15, 10.5)</div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Plus n est grand, plus la courbe rouge se superpose parfaitement aux barres bleues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Poisson</p>
                    <LatexRenderer latex="P(\lambda) \approx \mathcal{N}(\lambda, \lambda) \text{ si } \lambda \geq 10" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Approximation de Poisson</p>
                    <LatexRenderer latex="B(n,\tfrac{\lambda}{n}) \xrightarrow{\mathcal{L}} P(\lambda) \text{ quand } n \to \infty" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Cas pratique - Monte Carlo */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              7. Cas pratique : Approximation d'intégrales et calcul de π
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              {/* Idée de base */}
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Idée de base</h3>

                <p className="mb-4">
                  On utilise la méthode de Monte Carlo pour calculer π en estimant le rapport des aires d'un quart de cercle et d'un carré.
                </p>

                <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Aire du cercle :</h4>
                  <LatexRenderer latex="A_c = \pi r^2" block={true} />
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Aire du carré :</h4>
                  <LatexRenderer latex="A_s = (2r)^2 = 4r^2" block={true} />
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Rapport des aires :</h4>
                  <LatexRenderer latex="\frac{A_c}{A_s} = \frac{\pi r^2}{4r^2} = \frac{\pi}{4}" block={true} />
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold mb-2">D'où :</h4>
                  <LatexRenderer latex="\pi = 4 \times \frac{A_c}{A_s}" block={true} />
                </div>
              </div>

              {/* Méthode de Monte Carlo */}
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Méthode de Monte Carlo</h3>

                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-medium mb-2">1. Tirage aléatoire :</p>
                    <p>On tire <LatexRenderer latex="n" block={false} /> points au hasard dans le carré [0,1] × [0,1].</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-medium mb-2">2. Comptage :</p>
                    <p>On compte combien de points vérifient <LatexRenderer latex="x^2 + y^2 \leq 1" block={false} /> (intérieur du quart de cercle).</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-medium mb-2">3. Approximation :</p>
                    <p className="mb-2">La proportion ≈ rapport des aires :</p>
                    <LatexRenderer latex="\frac{\text{points dans le cercle}}{n} \approx \frac{A_c}{A_s} = \frac{\pi}{4}" block={true} />
                    <p className="mt-2">Donc :</p>
                    <LatexRenderer latex="\pi \approx 4 \times \frac{\text{points dans le cercle}}{n}" block={true} />
                  </div>
                </div>
              </div>

              {/* Exemple visuel */}
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Exemple visuel</h3>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><strong>Points rouges</strong> : dans le quart de cercle (x² + y² ≤ 1)</li>
                    <li><strong>Points bleus</strong> : dans le carré mais hors du cercle</li>
                    <li><strong>Plus n est grand</strong> → meilleure approximation</li>
                  </ul>
                </div>
              </div>

              {/* Code Python simple */}
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Code Python simple</h3>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`import random

def monte_carlo_pi(n=10000):
    inside = 0
    for _ in range(n):
        x, y = random.random(), random.random()
        if x*x + y*y <= 1:
            inside += 1
    return 4 * inside / n

print(monte_carlo_pi(10000))`}</pre>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">À propos de la convergence :</p>
                  <p>
                    Plus <LatexRenderer latex="n" block={false} /> est grand, plus l'approximation est précise.
                    L'erreur suit la loi des grands nombres : erreur ≈ 1/√n.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retour */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg">
              <ArrowLeft className="h-5 w-5" />
              Retour au programme OTERIA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaIntegralesMonteCarloCoursPage;
