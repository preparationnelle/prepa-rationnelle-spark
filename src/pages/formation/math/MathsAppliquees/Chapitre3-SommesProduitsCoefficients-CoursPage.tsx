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
      duration="3h"
      level="Intermédiaire"
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
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
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
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
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
                Savoir calculer une somme de la forme <LatexRenderer latex="S = \sum_{k=p}^{q} \text{expression}(k)" block={false} /> en 
                utilisant trois méthodes : boucle, liste, NumPy.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
              <p className="font-semibold mb-2 text-blue-700">Rappel mathématique</p>
              <p className="text-base">
                La notation <LatexRenderer latex="\sum_{k=1}^{n} u_k" block={false} /> signifie : <LatexRenderer latex="u_1 + u_2 + u_3 + \cdots + u_n" block={false} />
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Exemples : <LatexRenderer latex="\sum_{k=1}^{5} k = 1+2+3+4+5 = 15" block={false} /> ou <LatexRenderer latex="\sum_{k=1}^{5} k^2 = 1+4+9+16+25 = 55" block={false} />
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exemple de base détaillé</p>
              <p className="mb-2">Calculons pas à pas la somme <LatexRenderer latex="\sum_{k=1}^{4} k" block={false} /> :</p>
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
              <p className="mt-1 text-blue-600"> Moins intuitif pour débutants. Nécessite l'import de NumPy.</p>
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

print(f"\nListe des termes : {termes}")
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

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exemples guidés — Sommes usuelles</p>
              <p className="mb-3">Calculons ces trois sommes :</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• <LatexRenderer latex="S_1 = \sum_{k=1}^{n} k^2" block={false} /></li>
                <li>• <LatexRenderer latex="S_2 = \sum_{k=1}^{n} (k^3 - 2k)" block={false} /></li>
                <li>• <LatexRenderer latex="S_3 = \sum_{i=1}^{n} \sum_{j=1}^{m} (i^2 + j^3)" block={false} /> (double somme)</li>
              </ul>

              <p className="font-medium mb-2 mt-4">Méthode 1 – Boucles imbriquées</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
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
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
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
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
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

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-semibold mb-3"> Formules mathématiques utiles</p>
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
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
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
    
    print(f"\nRésultat : {n}! = {P}")
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
print("\n╔══════════════════════════════╗")
print("║  Différences clés            ║")
print("╠══════════════════════════════╣")
print("║ Somme  │ Produit             ║")
print("║ S = 0  │ P = 1               ║")
print("║ S += k │ P *= k              ║")
print("╚══════════════════════════════╝")`}</pre>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exemples guidés — Produits usuels</p>
              <p className="mb-3">Calculons ces trois produits :</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• <LatexRenderer latex="P_1 = \prod_{k=1}^{n} k \quad \text{(factorielle)}" block={false} /></li>
                <li>• <LatexRenderer latex="P_2 = \prod_{k=1}^{n} (2k)" block={false} /></li>
                <li>• <LatexRenderer latex="P_3 = \prod_{k=1}^{n} \left(1 + \frac{1}{k}\right)" block={false} /></li>
              </ul>

              <p className="font-medium mb-2">Méthode 1 – Boucles</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
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
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
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

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-semibold mb-3"> Points d'attention</p>
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
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
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
print(f"\nLes {len(groupes)} groupes possibles :")
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
              <p className="font-semibold mb-3">Calcul détaillé étape par étape</p>
              <p className="mb-2">Détaillons le calcul de <LatexRenderer latex="\binom{5}{2}" block={false} /> :</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import factorial

n, k = 5, 2

# Étape 1 : Calculer les factorielles
fact_n = factorial(n)      # 5! = 120
fact_k = factorial(k)      # 2! = 2
fact_n_k = factorial(n-k)  # 3! = 6

print(f"n! = {n}! = {fact_n}")
print(f"k! = {k}! = {fact_k}")
print(f"(n-k)! = ({n}-{k})! = {n-k}! = {fact_n_k}")

# Étape 2 : Appliquer la formule
numerateur = fact_n
denominateur = fact_k * fact_n_k
resultat = numerateur // denominateur

print(f"\nFormule : C({n},{k}) = {numerateur} / ({fact_k} × {fact_n_k})")
print(f"        = {numerateur} / {denominateur}")
print(f"        = {resultat}")

# Affichage :
# n! = 5! = 120
# k! = 2! = 2
# (n-k)! = (5-2)! = 3! = 6
#
# Formule : C(5,2) = 120 / (2 × 6)
#         = 120 / 12
#         = 10`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Astuce :</strong> Utiliser <span className="font-mono">//</span> (division entière) pour éviter les flottants.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Méthode 1 – Calcul avec factorielles (math.factorial)</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
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
              <p className="mt-2 text-green-700"> Méthode simple utilisant les factorielles.</p>
              <p className="mt-1 text-blue-600"> Utiliser <span className="font-mono">//</span> (division entière) pour obtenir un résultat entier.</p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Méthode 2 – Avec math.comb (Python 3.8+)</p>
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
              <p className="font-semibold mb-3">Méthode 3 – Avec SciPy (pour calculs scientifiques)</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from scipy.special import comb

# Avec exact=True pour obtenir un entier
print(comb(5, 2, exact=True))   # 10
print(comb(7, 3, exact=True))   # 35

# Avec exact=False pour obtenir un flottant (plus rapide)
print(comb(100, 50, exact=False))  # 1.0089134e+29`}</pre>
              </div>
              <p className="mt-2 text-green-700"> Très efficace pour de très grandes valeurs de n.</p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
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

              <p className="font-medium mb-2">Méthode 2 – Avec la relation de Pascal (récursive)</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
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
              <p className="mt-2 text-green-700"> Plus efficace : évite de recalculer les factorielles à chaque fois.</p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Application : Formule du binôme de Newton</p>
              <p className="mb-2">
                La formule <LatexRenderer latex="(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" block={false} /> permet 
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

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exemple détaillé : développer (x+2)³ pas à pas</p>
              <p className="mb-2">
                Développons <LatexRenderer latex="(x+2)^3" block={false} /> avec la formule du binôme :
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

a, b, n = "x", 2, 3

print(f"Développement de ({a}+{b})^{n} :\n")
print(f"Formule : (a+b)^n = Σ C(n,k) × a^(n-k) × b^k")
print(f"         pour k de 0 à {n}\n")

termes = []
somme_termes = []

for k in range(n+1):
    coef = comb(n, k)
    puissance_a = n - k
    puissance_b = k
    
    # Afficher le détail de chaque terme
    print(f"k={k} : C({n},{k}) × {a}^{puissance_a} × {b}^{puissance_b}")
    print(f"     = {coef} × {a}^{puissance_a} × {b**puissance_b}")
    
    # Construire l'expression
    if puissance_a == 0:
        terme_str = f"{coef * (b**puissance_b)}"
    elif puissance_a == 1:
        if coef * (b**puissance_b) == 1:
            terme_str = f"{a}"
        else:
            terme_str = f"{coef * (b**puissance_b)}{a}"
    else:
        if coef * (b**puissance_b) == 1:
            terme_str = f"{a}^{puissance_a}"
        else:
            terme_str = f"{coef * (b**puissance_b)}{a}^{puissance_a}"
    
    print(f"     = {terme_str}\n")
    termes.append(terme_str)

print(f"Résultat final : ({a}+{b})^{n} = {' + '.join(termes)}")
print(f"               = x³ + 6x² + 12x + 8")

# Affichage :
# Développement de (x+2)^3 :
#
# Formule : (a+b)^n = Σ C(n,k) × a^(n-k) × b^k
#          pour k de 0 à 3
#
# k=0 : C(3,0) × x^3 × 2^0
#      = 1 × x^3 × 1
#      = x^3
#
# k=1 : C(3,1) × x^2 × 2^1
#      = 3 × x^2 × 2
#      = 6x^2
#
# k=2 : C(3,2) × x^1 × 2^2
#      = 3 × x^1 × 4
#      = 12x
#
# k=3 : C(3,3) × x^0 × 2^3
#      = 1 × x^0 × 8
#      = 8
#
# Résultat final : (x+2)^3 = x^3 + 6x^2 + 12x + 8`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Observation :</strong> Les coefficients [1, 3, 3, 1] correspondent à la ligne 3 du triangle de Pascal ! 
                On les multiplie ensuite par les puissances de b.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exemple pratique : vérifier le développement</p>
              <p className="mb-2">Vérifions que notre développement est correct :</p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

def binome_newton_detaille(a, b, n):
    """Calcule (a+b)^n et affiche tous les termes"""
    print(f"Calcul de ({a}+{b})^{n} :\n")
    
    resultat = 0
    termes_details = []
    
    for k in range(n+1):
        coef = comb(n, k)
        terme = coef * (a ** (n-k)) * (b ** k)
        resultat += terme
        termes_details.append(f"C({n},{k})×{a}^{n-k}×{b}^{k} = {coef}×{a**(n-k)}×{b**k} = {terme}")
    
    for detail in termes_details:
        print(f"  {detail}")
    
    print(f"\nSomme des termes : {resultat}")
    print(f"Vérification : ({a}+{b})^{n} = {(a+b)**n}")
    print(f"Résultats égaux ? {resultat == (a+b)**n} ")
    
    return resultat

# Test
binome_newton_detaille(2, 3, 4)

# Affichage :
# Calcul de (2+3)^4 :
#
#   C(4,0)×2^4×3^0 = 1×16×1 = 16
#   C(4,1)×2^3×3^1 = 4×8×3 = 96
#   C(4,2)×2^2×3^2 = 6×4×9 = 216
#   C(4,3)×2^1×3^3 = 4×2×27 = 216
#   C(4,4)×2^0×3^4 = 1×1×81 = 81
#
# Somme des termes : 625
# Vérification : (2+3)^4 = 625
# Résultats égaux ? True `}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-semibold mb-3"> Propriétés importantes</p>
              <ul className="space-y-2 ml-4 text-base">
                <li>• <strong>Symétrie :</strong> <LatexRenderer latex="\binom{n}{k} = \binom{n}{n-k}" block={false} /></li>
                <li>• <strong>Valeurs limites :</strong> <LatexRenderer latex="\binom{n}{0} = \binom{n}{n} = 1" block={false} /></li>
                <li>• <strong>Relation de Pascal :</strong> <LatexRenderer latex="\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}" block={false} /></li>
                <li>• <strong>Somme d'une ligne :</strong> <LatexRenderer latex="\sum_{k=0}^{n} \binom{n}{k} = 2^n" block={false} /></li>
              </ul>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre>{`from math import comb

# Vérification : somme de la ligne n = 2^n
n = 5
somme = sum([comb(n, k) for k in range(n+1)])
print(f"Somme ligne {n} : {somme} = 2^{n} = {2**n}")  # 32 = 32`}</pre>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-semibold mb-3"> Points d'attention</p>
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
