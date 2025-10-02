import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Code } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaRecurrenceRecursiviteCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Chapitre 3 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 3 : Sommes, produits & coefficients binomiaux</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Calcul de sommes et produits finis, coefficients binomiaux — Implémentation Python et méthodes numériques
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                  <span className="text-2xl font-bold text-blue-900">3</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/recurrence-recursivite-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu du cours */}
        
        {/* Présentation générale */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Présentation générale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold text-lg mb-2">Objectifs du module</p>
                <p>
                  Ce module couvre les méthodes d'analyse numérique essentielles en Python : calcul de sommes et produits finis, 
                  étude des suites par récurrence, et calcul de coefficients binomiaux. Vous apprendrez à implémenter ces algorithmes 
                  avec différentes approches (boucles, listes, NumPy) pour optimiser performance et lisibilité.
                </p>
              </div>
                  <div>
                <p className="font-semibold text-lg mb-2">Prérequis</p>
                <p>
                  Maîtrise des modules 1 et 2 (fondamentaux Python et matrices NumPy). Connaissances de base en analyse mathématique 
                  (notation sigma/pi, factorielles).
                </p>
                  </div>
                  <div>
                <p className="font-semibold text-lg mb-2">Compétences développées</p>
                <ul className="space-y-1 ml-4">
                  <li>• Calculer des sommes finies avec 3 méthodes différentes</li>
                  <li>• Implémenter des produits et factorielles efficacement</li>
                  <li>• Manipuler les coefficients binomiaux et le triangle de Pascal</li>
                  <li>• Optimiser le code avec NumPy pour de grandes valeurs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Calcul de sommes en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              1. Calcul de sommes en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              
              <div>
                <p className="font-semibold text-lg mb-3">Objectif</p>
                <p>
                  Savoir calculer une somme de la forme <LatexRenderer latex="S = \displaystyle\sum_{k=p}^{q} \text{expression}(k)" block={false} /> en 
                  utilisant trois méthodes : boucle, liste, NumPy.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Rappel mathématique</p>
                <p className="text-base">
                  La notation <LatexRenderer latex="\displaystyle\sum_{k=1}^{n} u_k" block={false} /> signifie : <LatexRenderer latex="u_1 + u_2 + u_3 + \cdots + u_n" block={false} />
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Exemples : <LatexRenderer latex="\displaystyle\sum_{k=1}^{5} k = 1+2+3+4+5 = 15" block={false} /> ou <LatexRenderer latex="\displaystyle\sum_{k=1}^{5} k^2 = 1+4+9+16+25 = 55" block={false} />
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple de base détaillé</p>
                <p className="mb-2">Calculons pas à pas la somme <LatexRenderer latex="\displaystyle\sum_{k=1}^{4} k" block={false} /> :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`# Initialisation : on part de zéro
S = 0
print(f"Départ : S = {S}")

# k = 1
S = S + 1
print(f"Après k=1 : S = {S}")  # S = 1

# k = 2
S = S + 2
print(f"Après k=2 : S = {S}")  # S = 3

# k = 3
S = S + 3
print(f"Après k=3 : S = {S}")  # S = 6

# k = 4
S = S + 4
print(f"Après k=4 : S = {S}")  # S = 10

# Résultat final : 1+2+3+4 = 10`}</pre>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  <strong> Explication :</strong> À chaque étape, on <strong>ajoute</strong> la valeur de k à S. 
                  On commence toujours avec <span className="font-mono">S = 0</span> pour une somme.
                </p>
                  </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode 1 – Boucle avec variable initialisée</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`n = 5
S = 0
for k in range(1, n+1):
    S += k**2  # pour ∑k²
print(S)  # Affiche 55`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Méthode simple et lisible. Fonctionne dans tous les cas, même avec des doubles sommes.</p>
                <p className="mt-1 text-sm text-gray-600"> Attention : <span className="font-mono">range(1, n+1)</span> va de 1 à n inclus.</p>
          </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode 2 – Liste & sum()</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`n = 5
L = [k**2 for k in range(1, n+1)]
S = sum(L)
print(S)  # Affiche 55

# Ou en une ligne :
S = sum([k**2 for k in range(1, n+1)])`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Plus concis. Permet de manipuler la liste des termes si besoin (affichage, tracé).</p>
                <p className="mt-1 text-sm text-gray-600"> Utilise la compréhension de liste Python.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode 3 – Vectorisation avec NumPy</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`import numpy as np

n = 5
k = np.arange(1, n+1)  # Tableau [1, 2, 3, 4, 5]
S = np.sum(k**2)
print(S)  # Affiche 55`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Très rapide pour de grandes tailles (n &gt; 1000).</p>
                <p className="mt-1 text-orange-600"> Moins intuitif pour débutants. Nécessite l'import de NumPy.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple pratique : comprendre range()</p>
                <p className="mb-2">Une erreur fréquente est de mal utiliser <span className="font-mono">range()</span>. Voici les cas courants :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`# Cas 1 : Somme de 1 à n (inclus)
n = 5
S1 = sum([k for k in range(1, n+1)])  #  Correct : 1+2+3+4+5 = 15
print(f"Somme 1 à {n} : {S1}")

# Cas 2 : Somme de 0 à n-1 (souvent utilisé pour les indices)
S2 = sum([k for k in range(n)])  #  Correct : 0+1+2+3+4 = 10
print(f"Somme 0 à {n-1} : {S2}")

# Cas 3 : Somme de m à n
m, n = 3, 7
S3 = sum([k for k in range(m, n+1)])  #  Correct : 3+4+5+6+7 = 25
print(f"Somme {m} à {n} : {S3}")

#  ERREUR FREQUENTE
S_faux = sum([k for k in range(1, n)])  # Oublie le +1 : 1+2+3+4 = 10
print(f"Erreur (oubli +1) : {S_faux}")  #  Donne 10 au lieu de 15`}</pre>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  <strong> Règle à retenir :</strong> <span className="font-mono">range(a, b)</span> va de <strong>a inclus</strong> à <strong>b exclu</strong>. 
                  Pour aller jusqu'à n inclus, utilisez <span className="font-mono">range(1, n+1)</span>.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple pratique : visualiser les termes</p>
                <p className="mb-2">Pour bien comprendre ce qui se passe, il est utile d'afficher les termes :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`n = 5
termes = []
S = 0

for k in range(1, n+1):
    terme = k**2
    termes.append(terme)
    S += terme
    print(f"k={k} : terme={terme}, somme partielle={S}")

print(f"\\nListe des termes : {termes}")
print(f"Somme totale : {S}")
print(f"Vérification avec sum() : {sum(termes)}")

# Affichage :
# k=1 : terme=1, somme partielle=1
# k=2 : terme=4, somme partielle=5
# k=3 : terme=9, somme partielle=14
# k=4 : terme=16, somme partielle=30
# k=5 : terme=25, somme partielle=55
#
# Liste des termes : [1, 4, 9, 16, 25]
# Somme totale : 55
# Vérification avec sum() : 55`}</pre>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  <strong> Astuce :</strong> Afficher les termes et sommes partielles aide à <strong>débugger</strong> et comprendre le calcul étape par étape.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold mb-3">Comparatif synthétique</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-blue-300">
                        <th className="p-2 font-semibold">Méthode</th>
                        <th className="p-2 font-semibold">Avantages</th>
                        <th className="p-2 font-semibold">Inconvénients</th>
                        <th className="p-2 font-semibold">Quand l'utiliser ?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="p-2 font-mono text-sm">Boucle for</td>
                        <td className="p-2">Très claire, généralisable</td>
                        <td className="p-2">Un peu plus longue</td>
                        <td className="p-2">Toujours (débutants)</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="p-2 font-mono text-sm">Liste + sum()</td>
                        <td className="p-2">Concis, pythonique</td>
                        <td className="p-2">Consomme plus de mémoire</td>
                        <td className="p-2">Petits n, code propre</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono text-sm">np.sum()</td>
                        <td className="p-2">Très rapide pour grands n</td>
                        <td className="p-2">Moins optimal pour petits n</td>
                        <td className="p-2">Grands n (&gt;1000)</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold mb-3"> Formules mathématiques utiles</p>
                <p className="mb-2">Ces formules permettent de vérifier vos résultats :</p>
                <ul className="space-y-1 ml-4 text-base">
                  <li>• <LatexRenderer latex="\displaystyle\sum_{k=1}^n k = \frac{n(n+1)}{2}" block={false} /></li>
                  <li>• <LatexRenderer latex="\displaystyle\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" block={false} /></li>
                  <li>• <LatexRenderer latex="\displaystyle\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2" block={false} /></li>
                  <li>• <LatexRenderer latex="\displaystyle\sum_{k=0}^n q^k = \frac{1-q^{n+1}}{1-q}" block={false} /> (si <LatexRenderer latex="q \neq 1" block={false} />)</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 2: Calcul de produits en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              2. Calcul de produits en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              
                  <div>
                <p className="font-semibold text-lg mb-3">Objectif</p>
                <p>
                  Savoir calculer un produit de la forme <LatexRenderer latex="P = \prod_{k=1}^{n} \text{expression}(k)" block={false} /> en 
                  utilisant des boucles et NumPy.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Rappel mathématique</p>
                <p className="text-base">
                  La notation <LatexRenderer latex="\prod_{k=1}^{n} u_k" block={false} /> signifie : <LatexRenderer latex="u_1 \times u_2 \times u_3 \times \cdots \times u_n" block={false} />
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Exemple : <LatexRenderer latex="\prod_{k=1}^{5} k = 1 \times 2 \times 3 \times 4 \times 5 = 120" block={false} /> (factorielle de 5)
                </p>
                  </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple de base détaillé</p>
                <p className="mb-2">Calculons pas à pas le produit <LatexRenderer latex="\prod_{k=1}^{4} k" block={false} /> :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`# Initialisation : on part de UN (pas de zéro !)
P = 1
print(f"Départ : P = {P}")

# k = 1
P = P * 1
print(f"Après k=1 : P = {P}")  # P = 1

# k = 2
P = P * 2
print(f"Après k=2 : P = {P}")  # P = 2

# k = 3
P = P * 3
print(f"Après k=3 : P = {P}")  # P = 6

# k = 4
P = P * 4
print(f"Après k=4 : P = {P}")  # P = 24

# Résultat final : 1×2×3×4 = 24`}</pre>
                  </div>
                <p className="mt-3 text-sm text-gray-700">
                  <strong> Explication :</strong> À chaque étape, on <strong>multiplie</strong> P par k. 
                  On commence toujours avec <span className="font-mono">P = 1</span> pour un produit (jamais 0 !).
                </p>
                <div className="bg-red-50 border border-red-200 p-3 rounded mt-3">
                  <p className="text-red-700 text-sm">
                    <strong> ERREUR CLASSIQUE :</strong> Si vous initialisez avec <span className="font-mono">P = 0</span>, 
                    le résultat sera toujours 0 car 0 × n'importe quoi = 0 !
                  </p>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode 1 – Boucle avec variable initialisée</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`n = 5
P = 1  #  IMPORTANT : initialiser à 1 pour un produit (et non 0)
for k in range(1, n+1):
    P *= k  # pour ∏k (factorielle)
print(P)  # Affiche 120`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Méthode simple et claire.</p>
                <p className="mt-1 text-red-600"> <strong>ATTENTION :</strong> Toujours initialiser <span className="font-mono">P = 1</span> (et non 0) pour un produit !</p>
            </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode 2 – Avec NumPy (np.prod)</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`import numpy as np

n = 5
k = np.arange(1, n+1)  # [1, 2, 3, 4, 5]
P = np.prod(k)
print(P)  # Affiche 120 (factorielle de 5)`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Très rapide pour de grandes tailles.</p>
                <p className="mt-1 text-sm text-gray-600"> NumPy gère automatiquement l'initialisation à 1.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple pratique : Factorielle avec visualisation</p>
                <p className="mb-2">Calculons la factorielle de n en affichant chaque étape :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`def factorielle_detaillee(n):
    """Calcule n! en affichant toutes les étapes"""
    print(f"Calcul de {n}! :")
    P = 1
    termes = []
    
    for k in range(1, n+1):
        P *= k
        termes.append(str(k))
        print(f"  k={k} : P = {P} (produit partiel : {' × '.join(termes)})")
    
    print(f"\\nRésultat : {n}! = {P}")
    return P

# Test
factorielle_detaillee(5)

# Affichage :
# Calcul de 5! :
#   k=1 : P = 1 (produit partiel : 1)
#   k=2 : P = 2 (produit partiel : 1 × 2)
#   k=3 : P = 6 (produit partiel : 1 × 2 × 3)
#   k=4 : P = 24 (produit partiel : 1 × 2 × 3 × 4)
#   k=5 : P = 120 (produit partiel : 1 × 2 × 3 × 4 × 5)
#
# Résultat : 5! = 120`}</pre>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  <strong> Utilité :</strong> Cette fonction permet de <strong>visualiser</strong> comment le produit se construit pas à pas, 
                  très utile pour comprendre ou débugger.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Comparaison Somme vs Produit</p>
                <p className="mb-2">Voici les différences clés entre sommes et produits :</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`n = 5

# SOMME : initialiser à 0, additionner avec +
somme = 0
for k in range(1, n+1):
    somme += k  # ou: somme = somme + k
print(f"Somme : {somme}")  # 15

# PRODUIT : initialiser à 1, multiplier avec *
produit = 1
for k in range(1, n+1):
    produit *= k  # ou: produit = produit * k
print(f"Produit : {produit}")  # 120

# Tableau récapitulatif
print("\\n╔══════════════════════════════╗")
print("║  Différences clés            ║")
print("╠══════════════════════════════╣")
print("║ Somme  │ Produit             ║")
print("║ S = 0  │ P = 1               ║")
print("║ S += k │ P *= k              ║")
print("╚══════════════════════════════╝")`}</pre>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 3: Coefficients binomiaux en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              3. Coefficients binomiaux en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              
              <div>
                <p className="font-semibold text-lg mb-3">Objectif</p>
                <p>
                  Savoir calculer les coefficients binomiaux <LatexRenderer latex="\binom{n}{k}" block={false} /> et manipuler 
                  le triangle de Pascal en Python.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Rappel mathématique</p>
                <p className="text-base mb-2">
                  Le coefficient binomial <LatexRenderer latex="\binom{n}{k}" block={false} /> (lu "k parmi n") représente le nombre de façons 
                  de choisir <LatexRenderer latex="k" block={false} /> objets parmi <LatexRenderer latex="n" block={false} /> objets, sans tenir compte de l'ordre.
                </p>
                <p className="text-base">
                  Formule : <LatexRenderer latex="\binom{n}{k} = \frac{n!}{k!(n-k)!}" block={false} />
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Exemple : <LatexRenderer latex="\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{120}{2 \cdot 6} = 10" block={false} />
                </p>
          </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Exemple concret : combinaisons</p>
                <p className="mb-2">
                  <strong>Problème :</strong> Dans une classe de 5 élèves (Alice, Bob, Carol, David, Eve), combien de groupes de 2 élèves peut-on former ?
                </p>
                <p className="mb-2">
                  <strong>Solution mathématique :</strong> <LatexRenderer latex="\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{120}{2 \cdot 6} = 10" block={false} />
                </p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  <pre>{`from math import factorial

def combinaisons(n, k):
    """Calcule C(n,k) : nombre de façons de choisir k objets parmi n"""
    return factorial(n) // (factorial(k) * factorial(n - k))

# Exemple : groupes de 2 parmi 5 élèves
n_eleves = 5
taille_groupe = 2
nombre_groupes = combinaisons(n_eleves, taille_groupe)

print(f"Nombre de groupes de {taille_groupe} parmi {n_eleves} élèves : {nombre_groupes}")
# Affiche : Nombre de groupes de 2 parmi 5 élèves : 10

# Vérification manuelle (liste des 10 groupes possibles) :
eleves = ["Alice", "Bob", "Carol", "David", "Eve"]
from itertools import combinations
groupes = list(combinations(eleves, 2))
print(f"\\nLes {len(groupes)} groupes possibles :")
for i, groupe in enumerate(groupes, 1):
    print(f"  {i}. {groupe[0]} et {groupe[1]}")

# Affiche :
# Les 10 groupes possibles :
#   1. Alice et Bob
#   2. Alice et Carol
#   3. Alice et David
#   4. Alice et Eve
#   5. Bob et Carol
#   6. Bob et David
#   7. Bob et Eve
#   8. Carol et David
#   9. Carol et Eve
#   10. David et Eve`}</pre>
                </div>
                <p className="text-sm text-gray-700">
                  <strong> Application :</strong> Les coefficients binomiaux servent à compter les combinaisons (poker, loto, équipes, etc.).
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Méthode recommandée – math.comb (Python 3.8+)</p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`from math import comb

# C'est la méthode recommandée en Python 3.8+
print(comb(5, 2))   # 10
print(comb(7, 3))   # 35
print(comb(10, 5))  # 252

# Avantage : gère automatiquement les cas limites
print(comb(5, 0))   # 1
print(comb(5, 5))   # 1
print(comb(5, 6))   # 0`}</pre>
                </div>
                <p className="mt-2 text-green-700"> Méthode recommandée : simple, optimisée, gère les cas limites.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Triangle de Pascal</p>
                <p className="mb-2">Le triangle de Pascal contient tous les coefficients binomiaux :</p>
                <div className="bg-gray-50 p-3 rounded text-center font-mono text-sm mb-3">
                  <div>1</div>
                  <div>1   1</div>
                  <div>1   2   1</div>
                  <div>1   3   3   1</div>
                  <div>1   4   6   4   1</div>
                  <div>1   5   10  10  5   1</div>
            </div>

                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                  <pre>{`from math import comb

def triangle_pascal(n):
    """Affiche les n premières lignes du triangle de Pascal"""
    for i in range(n):
        ligne = [comb(i, k) for k in range(i+1)]
        print(' '.join(map(str, ligne)).center(n*3))

triangle_pascal(6)
# Affiche :
#       1
#      1 1
#     1 2 1
#    1 3 3 1
#   1 4 6 4 1
#  1 5 10 10 5 1`}</pre>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-3">Application : Binôme de Newton</p>
                <p className="mb-2">
                  La formule <LatexRenderer latex="(a+b)^n = \displaystyle\sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" block={false} /> permet 
                  de développer une puissance.
                </p>
                <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`from math import comb

def binome_newton(a, b, n):
    """Calcule (a+b)^n avec la formule du binôme"""
    resultat = 0
    for k in range(n+1):
        terme = comb(n, k) * (a**(n-k)) * (b**k)
        resultat += terme
    return resultat

# Exemple : (2+3)^4 = 5^4 = 625
print(binome_newton(2, 3, 4))  # 625`}</pre>
            </div>
          </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold mb-3"> Propriétés importantes</p>
                <ul className="space-y-2 ml-4 text-base">
                  <li>• <strong>Symétrie :</strong> <LatexRenderer latex="\binom{n}{k} = \binom{n}{n-k}" block={false} /></li>
                  <li>• <strong>Valeurs limites :</strong> <LatexRenderer latex="\binom{n}{0} = \binom{n}{n} = 1" block={false} /></li>
                  <li>• <strong>Relation de Pascal :</strong> <LatexRenderer latex="\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}" block={false} /></li>
                  <li>• <strong>Somme d'une ligne :</strong> <LatexRenderer latex="\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n" block={false} /></li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

          {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                ← Chapitre 2
              </button>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/recurrence-recursivite-exercices">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Target className="h-4 w-4" />
                  Exercices
                </button>
              </Link>
              <Link to="/formation/oteria/recurrence-recursivite-flashcards">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <BookOpen className="h-4 w-4" />
                  Flashcards
                </button>
              </Link>
              <Link to="/formation/oteria/recurrence-recursivite-qcm">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Zap className="h-4 w-4" />
                  QCM
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
          <Link to="/formation/oteria/suites-numeriques-cours">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Chapitre 4 →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteCoursPage;
