import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { Target, PenTool, Code } from 'lucide-react';

const Chapitre3SommesProduitsCoefficientsCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Sommes, produits & coefficients binomiaux"
      description="Calcul de sommes et produits finis, coefficients binomiaux — Implémentation Python et méthodes numériques"
      slug="sommes-produits-coefficients-binomiaux"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Présentation générale */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
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
      <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
            <Code className="h-6 w-6" />
            1. Calcul de sommes en Python
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6 text-lg">
            
            <div>
              <p className="font-semibold text-lg mb-3">Objectif</p>
              <p>
                Savoir calculer une somme de la forme <LatexRenderer latex="S = \sum_{k=p}^{q} \text{expression}(k)" block={false} /> en 
                utilisant trois méthodes : boucle, liste, NumPy.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
              <p className="font-semibold mb-2 text-orange-700">Rappel mathématique</p>
              <p className="text-base">
                La notation <LatexRenderer latex="\sum_{k=1}^{n} u_k" block={false} /> signifie : <LatexRenderer latex="u_1 + u_2 + u_3 + \cdots + u_n" block={false} />
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Exemples : <LatexRenderer latex="\sum_{k=1}^{5} k = 1+2+3+4+5 = 15" block={false} /> ou <LatexRenderer latex="\sum_{k=1}^{5} k^2 = 1+4+9+16+25 = 55" block={false} />
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 1 – Boucle avec variable initialisée</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`n = 5
S = 0
for k in range(1, n+1):
    S += k**2  # pour ∑k²
print(S)  # Affiche 55`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Méthode simple et lisible. Fonctionne dans tous les cas, même avec des doubles sommes.</p>
              <p className="mt-1 text-sm text-gray-600">💡 Attention : <span className="font-mono">range(1, n+1)</span> va de 1 à n inclus.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 2 – Liste & sum()</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`n = 5
L = [k**2 for k in range(1, n+1)]
S = sum(L)
print(S)  # Affiche 55

# Ou en une ligne :
S = sum([k**2 for k in range(1, n+1)])`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Plus concis. Permet de manipuler la liste des termes si besoin (affichage, tracé).</p>
              <p className="mt-1 text-sm text-gray-600">💡 Utilise la compréhension de liste Python.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 3 – Vectorisation avec NumPy</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`import numpy as np

n = 5
k = np.arange(1, n+1)  # Tableau [1, 2, 3, 4, 5]
S = np.sum(k**2)
print(S)  # Affiche 55`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Très rapide pour de grandes tailles (n &gt; 1000).</p>
              <p className="mt-1 text-orange-600">⚠️ Moins intuitif pour débutants. Nécessite l'import de NumPy.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-semibold mb-3">Comparatif synthétique</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-orange-300">
                      <th className="p-2 font-semibold">Méthode</th>
                      <th className="p-2 font-semibold">Avantages</th>
                      <th className="p-2 font-semibold">Inconvénients</th>
                      <th className="p-2 font-semibold">Quand l'utiliser ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-orange-100">
                      <td className="p-2 font-mono text-sm">Boucle for</td>
                      <td className="p-2">Très claire, généralisable</td>
                      <td className="p-2">Un peu plus longue</td>
                      <td className="p-2">Toujours (débutants)</td>
                    </tr>
                    <tr className="border-b border-orange-100">
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

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Exemples guidés — Sommes usuelles</p>
              <p className="mb-3">Calculons ces trois sommes :</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• <LatexRenderer latex="S_1 = \sum_{k=1}^{n} k^2" block={false} /></li>
                <li>• <LatexRenderer latex="S_2 = \sum_{k=1}^{n} (k^3 - 2k)" block={false} /></li>
                <li>• <LatexRenderer latex="S_3 = \sum_{i=1}^{n} \sum_{j=1}^{m} (i^2 + j^3)" block={false} /> (double somme)</li>
              </ul>

              <p className="font-medium mb-2 mt-4">Méthode 1 – Boucles imbriquées</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                <pre>{`n = 5
m = 4

# S1 : somme des carrés
S1 = 0
for k in range(1, n+1):
    S1 += k**2
print(f"S1 = {S1}")  # 55

# S2 : somme d'une expression
S2 = 0
for k in range(1, n+1):
    S2 += k**3 - 2*k
print(f"S2 = {S2}")  # 215

# S3 : double somme
S3 = 0
for i in range(1, n+1):
    for j in range(1, m+1):
        S3 += i**2 + j**3
print(f"S3 = {S3}")  # 555`}</pre>
              </div>

              <p className="font-medium mb-2">Méthode 2 – Listes + compréhension</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                <pre>{`n = 5
m = 4

S1 = sum([k**2 for k in range(1, n+1)])
print(f"S1 = {S1}")  # 55

S2 = sum([k**3 - 2*k for k in range(1, n+1)])
print(f"S2 = {S2}")  # 215

# Double somme avec double boucle de compréhension
S3 = sum([i**2 + j**3 for i in range(1, n+1) for j in range(1, m+1)])
print(f"S3 = {S3}")  # 555`}</pre>
              </div>

              <p className="font-medium mb-2">Méthode 3 – NumPy (vectorisation)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`import numpy as np

n = 5
m = 4
k = np.arange(1, n+1)

S1 = np.sum(k**2)
print(f"S1 = {S1}")  # 55

S2 = np.sum(k**3 - 2*k)
print(f"S2 = {S2}")  # 215

# Pour S3, on peut combiner avec une boucle ou utiliser des grilles
S3 = sum([i**2 + j**3 for i in range(1, n+1) for j in range(1, m+1)])
print(f"S3 = {S3}")  # 555`}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-semibold mb-3">📌 Formules mathématiques utiles</p>
              <p className="mb-2">Ces formules permettent de vérifier vos résultats :</p>
              <ul className="space-y-1 ml-4 text-base">
                <li>• <LatexRenderer latex="\sum_{k=1}^n k = \frac{n(n+1)}{2}" block={false} /></li>
                <li>• <LatexRenderer latex="\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" block={false} /></li>
                <li>• <LatexRenderer latex="\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2" block={false} /></li>
                <li>• <LatexRenderer latex="\sum_{k=0}^n q^k = \frac{1-q^{n+1}}{1-q}" block={false} /> (si <LatexRenderer latex="q \neq 1" block={false} />)</li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2: Calcul de produits en Python */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
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

            <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
              <p className="font-semibold mb-2 text-orange-700">Rappel mathématique</p>
              <p className="text-base">
                La notation <LatexRenderer latex="\prod_{k=1}^{n} u_k" block={false} /> signifie : <LatexRenderer latex="u_1 \times u_2 \times u_3 \times \cdots \times u_n" block={false} />
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Exemple : <LatexRenderer latex="\prod_{k=1}^{5} k = 1 \times 2 \times 3 \times 4 \times 5 = 120" block={false} /> (factorielle de 5)
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 1 – Boucle avec variable initialisée</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`n = 5
P = 1  # ⚠️ IMPORTANT : initialiser à 1 pour un produit (et non 0)
for k in range(1, n+1):
    P *= k  # pour ∏k (factorielle)
print(P)  # Affiche 120`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Méthode simple et claire.</p>
              <p className="mt-1 text-red-600">⚠️ <strong>ATTENTION :</strong> Toujours initialiser <span className="font-mono">P = 1</span> (et non 0) pour un produit !</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 2 – Avec NumPy (np.prod)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`import numpy as np

n = 5
k = np.arange(1, n+1)  # [1, 2, 3, 4, 5]
P = np.prod(k)
print(P)  # Affiche 120 (factorielle de 5)`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Très rapide pour de grandes tailles.</p>
              <p className="mt-1 text-sm text-gray-600">💡 NumPy gère automatiquement l'initialisation à 1.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Exemples guidés — Produits usuels</p>
              <p className="mb-3">Calculons ces trois produits :</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• <LatexRenderer latex="P_1 = \prod_{k=1}^{n} k \quad \text{(factorielle)}" block={false} /></li>
                <li>• <LatexRenderer latex="P_2 = \prod_{k=1}^{n} (2k)" block={false} /></li>
                <li>• <LatexRenderer latex="P_3 = \prod_{k=1}^{n} \left(1 + \frac{1}{k}\right)" block={false} /></li>
              </ul>

              <p className="font-medium mb-2">Méthode 1 – Boucles</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                <pre>{`n = 5

# P1 : Factorielle de n
P1 = 1
for k in range(1, n+1):
    P1 *= k
print(f"P1 = {P1}")  # 120

# P2 : Produit des nombres pairs doubles
P2 = 1
for k in range(1, n+1):
    P2 *= 2*k
print(f"P2 = {P2}")  # 3840

# P3 : Produit avec fraction
P3 = 1
for k in range(1, n+1):
    P3 *= (1 + 1/k)
print(f"P3 = {P3}")  # 6.0`}</pre>
              </div>

              <p className="font-medium mb-2">Méthode 2 – NumPy</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`import numpy as np

n = 5
k = np.arange(1, n+1)

P1 = np.prod(k)
print(f"P1 = {P1}")  # 120

P2 = np.prod(2*k)
print(f"P2 = {P2}")  # 3840

P3 = np.prod(1 + 1/k)
print(f"P3 = {P3}")  # 6.0`}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-semibold mb-3">⚠️ Points d'attention</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Initialisation :</strong> Toujours initialiser un produit à <span className="font-mono">P = 1</span> (et non 0, sinon le résultat sera toujours 0 !)</li>
                <li>• <strong>Débordement :</strong> Les factorielles croissent très vite. Pour <LatexRenderer latex="n > 20" block={false} />, préférer <span className="font-mono">math.factorial()</span> qui gère les grands entiers</li>
                <li>• <strong>Type de données :</strong> Python gère automatiquement les grands entiers, contrairement à d'autres langages</li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3: Coefficients binomiaux en Python */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
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

            <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
              <p className="font-semibold mb-2 text-orange-700">Rappel mathématique</p>
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

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 1 – Calcul avec factorielles (math.factorial)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import factorial

def binomial(n, k):
    """Calcule le coefficient binomial C(n,k)"""
    if k > n or k < 0:
        return 0
    return factorial(n) // (factorial(k) * factorial(n - k))

# Exemples
print(binomial(5, 2))   # 10
print(binomial(7, 3))   # 35
print(binomial(10, 5))  # 252`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Méthode simple utilisant les factorielles.</p>
              <p className="mt-1 text-orange-600">⚠️ Utiliser <span className="font-mono">//</span> (division entière) pour obtenir un résultat entier.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 2 – Avec math.comb (Python 3.8+)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
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
              <p className="mt-2 text-green-700">✔️ Méthode recommandée : simple, optimisée, gère les cas limites.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Méthode 3 – Avec SciPy (pour calculs scientifiques)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from scipy.special import comb

# Avec exact=True pour obtenir un entier
print(comb(5, 2, exact=True))   # 10
print(comb(7, 3, exact=True))   # 35

# Avec exact=False pour obtenir un flottant (plus rapide)
print(comb(100, 50, exact=False))  # 1.0089134e+29`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Très efficace pour de très grandes valeurs de n.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Application : Génération du triangle de Pascal</p>
              <p className="mb-2">Le triangle de Pascal contient tous les coefficients binomiaux :</p>
              <div className="bg-gray-50 p-3 rounded text-center font-mono text-sm mb-3">
                <div>1</div>
                <div>1   1</div>
                <div>1   2   1</div>
                <div>1   3   3   1</div>
                <div>1   4   6   4   1</div>
                <div>1   5   10  10  5   1</div>
              </div>
              
              <p className="font-medium mb-2">Méthode 1 – Avec math.comb</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
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

              <p className="font-medium mb-2">Méthode 2 – Avec la relation de Pascal (récursive)</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`def triangle_pascal_recursif(n):
    """Génère le triangle de Pascal par récurrence"""
    triangle = [[1]]
    
    for i in range(1, n):
        ligne = [1]  # Commence toujours par 1
        for k in range(1, i):
            # Relation : C(n,k) = C(n-1,k-1) + C(n-1,k)
            ligne.append(triangle[i-1][k-1] + triangle[i-1][k])
        ligne.append(1)  # Termine toujours par 1
        triangle.append(ligne)
    
    return triangle

# Afficher le triangle
triangle = triangle_pascal_recursif(6)
for ligne in triangle:
    print(' '.join(map(str, ligne)).center(20))`}</pre>
              </div>
              <p className="mt-2 text-green-700">✔️ Plus efficace : évite de recalculer les factorielles à chaque fois.</p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <p className="font-semibold mb-3">Application : Formule du binôme de Newton</p>
              <p className="mb-2">
                La formule <LatexRenderer latex="(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" block={false} /> permet 
                de développer une puissance.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

def binome_newton(a, b, n):
    """Calcule (a+b)^n avec la formule du binôme"""
    resultat = 0
    for k in range(n+1):
        terme = comb(n, k) * (a**(n-k)) * (b**k)
        resultat += terme
    return resultat

# Exemple : (2+3)^4 = 5^4 = 625
print(binome_newton(2, 3, 4))  # 625

# Développement de (x+1)^5
def developper_binome(n):
    """Affiche le développement de (x+1)^n"""
    termes = []
    for k in range(n+1):
        coef = comb(n, k)
        if k == 0:
            termes.append(f"x^{n}")
        elif k == n:
            termes.append("1")
        else:
            termes.append(f"{coef}x^{n-k}")
    print(f"(x+1)^{n} = " + " + ".join(termes))

developper_binome(5)
# Affiche : (x+1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1`}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-semibold mb-3">📌 Propriétés importantes</p>
              <ul className="space-y-2 ml-4 text-base">
                <li>• <strong>Symétrie :</strong> <LatexRenderer latex="\binom{n}{k} = \binom{n}{n-k}" block={false} /></li>
                <li>• <strong>Valeurs limites :</strong> <LatexRenderer latex="\binom{n}{0} = \binom{n}{n} = 1" block={false} /></li>
                <li>• <strong>Relation de Pascal :</strong> <LatexRenderer latex="\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}" block={false} /></li>
                <li>• <strong>Somme d'une ligne :</strong> <LatexRenderer latex="\sum_{k=0}^{n} \binom{n}{k} = 2^n" block={false} /></li>
              </ul>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre>{`from math import comb

# Vérification : somme de la ligne n = 2^n
n = 5
somme = sum([comb(n, k) for k in range(n+1)])
print(f"Somme ligne {n} : {somme} = 2^{n} = {2**n}")  # 32 = 32`}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-semibold mb-3">⚠️ Points d'attention</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Division entière :</strong> Utiliser <span className="font-mono">//</span> et non <span className="font-mono">/</span> pour obtenir un résultat entier</li>
                <li>• <strong>Cas limites :</strong> Toujours gérer les cas <LatexRenderer latex="k > n" block={false} /> ou <LatexRenderer latex="k < 0" block={false} /> (renvoyer 0)</li>
                <li>• <strong>Optimisation :</strong> Pour calculer plusieurs coefficients, utiliser le triangle de Pascal plutôt que de recalculer les factorielles</li>
                <li>• <strong>Grandes valeurs :</strong> Pour <LatexRenderer latex="n > 100" block={false} />, préférer <span className="font-mono">scipy.special.comb</span> avec <span className="font-mono">exact=False</span></li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-appliquees">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre3SommesProduitsCoefficientsCoursPage;
