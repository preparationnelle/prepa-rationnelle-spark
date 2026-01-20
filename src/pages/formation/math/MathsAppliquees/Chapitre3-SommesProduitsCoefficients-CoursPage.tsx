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

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Application détaillée : vérifier une formule</p>
              <p className="mb-2">
                Vérifions la formule <LatexRenderer latex="\sum_{k=1}^n k = \frac{n(n+1)}{2}" block={false} /> pour n=10 :
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`n = 10

# Méthode 1 : Calcul par boucle
somme_boucle = 0
for k in range(1, n+1):
    somme_boucle += k
print(f"Somme par boucle : {somme_boucle}")  # 55

# Méthode 2 : Formule directe (beaucoup plus rapide !)
somme_formule = n * (n + 1) // 2
print(f"Somme par formule : {somme_formule}")  # 55

# Comparaison des temps d'exécution pour n = 1000000
import time

n_grand = 1000000

# Test boucle
debut = time.time()
somme = sum([k for k in range(1, n_grand+1)])
temps_boucle = time.time() - debut
print(f"\\nAvec boucle (n={n_grand}) : {temps_boucle:.4f} secondes")

# Test formule
debut = time.time()
somme = n_grand * (n_grand + 1) // 2
temps_formule = time.time() - debut
print(f"Avec formule (n={n_grand}) : {temps_formule:.6f} secondes")

print(f"\\nLa formule est environ {temps_boucle/temps_formule:.0f}× plus rapide !")

# Affichage typique :
# Somme par boucle : 55
# Somme par formule : 55
#
# Avec boucle (n=1000000) : 0.0842 secondes
# Avec formule (n=1000000) : 0.000002 secondes
#
# La formule est environ 42000× plus rapide !`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Leçon importante :</strong> Quand une formule mathématique directe existe, elle est <strong>toujours</strong> plus efficace qu'une boucle,
                surtout pour de grandes valeurs de n. C'est pourquoi il est crucial de connaître ces formules !
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exercice guidé : somme arithmétique personnalisée</p>
              <p className="mb-2">
                <strong>Problème :</strong> Une entreprise verse des primes mensuelles croissantes : 100€ le 1er mois, 150€ le 2e mois,
                200€ le 3e mois, etc. Combien aura-t-on reçu au total après 12 mois ?
              </p>
              <p className="mb-2">
                <strong>Analyse mathématique :</strong> C'est une suite arithmétique de premier terme u₁ = 100 et de raison r = 50.
                La somme est : <LatexRenderer latex="S_n = \frac{n(u_1 + u_n)}{2}" block={false} />
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`# Données du problème
premier_mois = 100  # Premier terme u1
raison = 50         # Différence entre deux termes consécutifs
nb_mois = 12

# Méthode 1 : Calcul terme à terme avec visualisation
print("Détail mois par mois :")
print("-" * 50)
total = 0
for mois in range(1, nb_mois + 1):
    prime_mois = premier_mois + (mois - 1) * raison
    total += prime_mois
    print(f"Mois {mois:2d} : {prime_mois:4d}€ | Total cumulé : {total:5d}€")

print("-" * 50)
print(f"Total après {nb_mois} mois : {total}€")

# Méthode 2 : Formule directe (suite arithmétique)
dernier_terme = premier_mois + (nb_mois - 1) * raison
somme_formule = nb_mois * (premier_mois + dernier_terme) // 2
print(f"\\nVérification avec formule : {somme_formule}€")

# Méthode 3 : Compréhension de liste (pythonique)
primes = [premier_mois + k * raison for k in range(nb_mois)]
somme_liste = sum(primes)
print(f"Vérification avec liste : {somme_liste}€")

# Affichage :
# Détail mois par mois :
# --------------------------------------------------
# Mois  1 :  100€ | Total cumulé :   100€
# Mois  2 :  150€ | Total cumulé :   250€
# Mois  3 :  200€ | Total cumulé :   450€
# Mois  4 :  250€ | Total cumulé :   700€
# Mois  5 :  300€ | Total cumulé :  1000€
# Mois  6 :  350€ | Total cumulé :  1350€
# Mois  7 :  400€ | Total cumulé :  1750€
# Mois  8 :  450€ | Total cumulé :  2200€
# Mois  9 :  500€ | Total cumulé :  2700€
# Mois 10 :  550€ | Total cumulé :  3250€
# Mois 11 :  600€ | Total cumulé :  3850€
# Mois 12 :  650€ | Total cumulé :  4500€
# --------------------------------------------------
# Total après 12 mois : 4500€
#
# Vérification avec formule : 4500€
# Vérification avec liste : 4500€`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Application :</strong> Les suites arithmétiques modélisent de nombreuses situations réelles :
                économie (intérêts simples), physique (mouvement uniforme), ou encore les remboursements d'emprunts.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Exercice guidé : somme géométrique</p>
              <p className="mb-2">
                <strong>Problème :</strong> Une bactérie se divise en 2 chaque heure. On part d'une bactérie.
                Combien y a-t-il de bactéries au total générées après 10 heures (en comptant la bactérie initiale) ?
              </p>
              <p className="mb-2">
                <strong>Analyse :</strong> C'est une suite géométrique : 1, 2, 4, 8, 16, ... de raison q=2.
                La somme est : <LatexRenderer latex="S_n = \frac{1-q^{n+1}}{1-q} = \frac{1-2^{n+1}}{1-2} = 2^{n+1} - 1" block={false} />
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`# Paramètres
n_heures = 10
raison = 2

# Méthode 1 : Boucle avec visualisation
print("Évolution heure par heure :")
print("-" * 60)
total_bacteries = 0
for h in range(n_heures + 1):
    nouvelles = raison ** h  # 2^h bactéries générées à l'heure h
    total_bacteries += nouvelles
    print(f"Heure {h:2d} : {nouvelles:5d} nouvelles | Total : {total_bacteries:6d}")

print("-" * 60)
print(f"Total après {n_heures} heures : {total_bacteries}")

# Méthode 2 : Formule géométrique
somme_formule = (raison ** (n_heures + 1) - 1) // (raison - 1)
print(f"\\nVérification avec formule : {somme_formule}")

# Méthode 3 : NumPy
import numpy as np
h = np.arange(n_heures + 1)
bacteries = raison ** h
somme_numpy = np.sum(bacteries)
print(f"Vérification avec NumPy : {somme_numpy}")

# Visualisation graphique simple
print(f"\\nCroissance exponentielle :")
for h in range(n_heures + 1):
    nb = raison ** h
    barre = "█" * min(nb // 20, 50)  # Limiter l'affichage
    print(f"h={h:2d} | {barre} ({nb})")

# Affichage :
# Évolution heure par heure :
# ------------------------------------------------------------
# Heure  0 :     1 nouvelles | Total :      1
# Heure  1 :     2 nouvelles | Total :      3
# Heure  2 :     4 nouvelles | Total :      7
# Heure  3 :     8 nouvelles | Total :     15
# Heure  4 :    16 nouvelles | Total :     31
# Heure  5 :    32 nouvelles | Total :     63
# Heure  6 :    64 nouvelles | Total :    127
# Heure  7 :   128 nouvelles | Total :    255
# Heure  8 :   256 nouvelles | Total :    511
# Heure  9 :   512 nouvelles | Total :   1023
# Heure 10 :  1024 nouvelles | Total :   2047
# ------------------------------------------------------------
# Total après 10 heures : 2047
#
# Vérification avec formule : 2047
# Vérification avec NumPy : 2047`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Application :</strong> Les suites géométriques modélisent la croissance exponentielle :
                populations de bactéries, intérêts composés, propagation virale, radioactivité, etc.
              </p>
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

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Application en probabilités : le problème du loto</p>
              <p className="mb-2">
                <strong>Problème :</strong> Au loto, on choisit 5 numéros parmi 49. Quelle est la probabilité de gagner le gros lot
                (trouver les 5 bons numéros) ?
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

# Données du problème
nb_numeros_choisis = 5
nb_numeros_total = 49

# Nombre total de combinaisons possibles
nb_combinaisons = comb(nb_numeros_total, nb_numeros_choisis)
print(f"Nombre de combinaisons possibles : {nb_combinaisons:,}")

# Probabilité de gagner (1 seule combinaison gagnante)
proba_gagner = 1 / nb_combinaisons
print(f"\\nProbabilité de gagner : 1/{nb_combinaisons:,}")
print(f"Soit environ : {proba_gagner:.10f}")
print(f"Soit environ : {proba_gagner * 100:.8f}%")

# Pour mettre en perspective
print(f"\\nPour avoir 50% de chances de gagner au moins une fois,")
print(f"il faudrait jouer environ {int(nb_combinaisons * 0.693):,} fois !")

# Comparaison avec d'autres événements
print(f"\\nC'est environ la même probabilité que :")
print(f"  - Lancer une pièce et obtenir 21 fois PILE d'affilée")
print(f"  - Gagner : 1 chance sur {nb_combinaisons:,}")
print(f"  - Pour comparaison, probabilité d'être frappé par la foudre :")
print(f"    environ 1 chance sur 500,000 (soit {nb_combinaisons/500000:.1f}x plus probable !) ")

# Affichage :
# Nombre de combinaisons possibles : 1,906,884
#
# Probabilité de gagner : 1/1,906,884
# Soit environ : 0.0000005243
# Soit environ : 0.00005243%
#
# Pour avoir 50% de chances de gagner au moins une fois,
# il faudrait jouer environ 1,321,670 fois !
#
# C'est environ la même probabilité que :
#   - Lancer une pièce et obtenir 21 fois PILE d'affilée
#   - Gagner : 1 chance sur 1,906,884
#   - Pour comparaison, probabilité d'être frappé par la foudre :
#     environ 1 chance sur 500,000 (soit 3.8x plus probable !)`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Leçon :</strong> Les coefficients binomiaux permettent de calculer des probabilités dans les jeux de hasard.
                Ils montrent aussi pourquoi les loteries sont si difficiles à gagner !
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Application en combinatoire : le poker</p>
              <p className="mb-2">
                <strong>Problème :</strong> Au poker, chaque joueur reçoit 5 cartes d'un jeu de 52 cartes.
                Combien y a-t-il de mains différentes possibles ? Quelle est la probabilité d'avoir une paire ?
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

# 1. Nombre total de mains possibles
nb_mains_total = comb(52, 5)
print(f"Nombre total de mains possibles : {nb_mains_total:,}")

# 2. Nombre de mains contenant exactement une paire
# Pour avoir une paire :
# - Choisir la valeur de la paire (13 choix : A, 2, ..., K)
# - Choisir 2 cartes parmi les 4 de cette valeur : C(4,2)
# - Choisir 3 autres valeurs différentes : C(12,3)
# - Pour chaque valeur, choisir 1 couleur parmi 4 : 4³

valeur_paire = 13  # 13 valeurs possibles
cartes_paire = comb(4, 2)  # 2 cartes parmi 4
autres_valeurs = comb(12, 3)  # 3 valeurs différentes parmi les 12 restantes
couleurs_autres = 4 ** 3  # 1 couleur parmi 4 pour chacune des 3 cartes

nb_mains_une_paire = valeur_paire * cartes_paire * autres_valeurs * couleurs_autres
print(f"\\nNombre de mains avec exactement une paire : {nb_mains_une_paire:,}")

# Détail du calcul
print(f"\\nDétail du calcul :")
print(f"  - Choix de la valeur de la paire : {valeur_paire}")
print(f"  - C(4,2) pour les 2 cartes de la paire : {cartes_paire}")
print(f"  - C(12,3) pour les 3 autres valeurs : {autres_valeurs}")
print(f"  - 4³ pour les couleurs des 3 autres : {couleurs_autres}")
print(f"  Total : {valeur_paire} × {cartes_paire} × {autres_valeurs} × {couleurs_autres} = {nb_mains_une_paire:,}")

# 3. Probabilité d'avoir une paire
proba_paire = nb_mains_une_paire / nb_mains_total
print(f"\\nProbabilité d'avoir exactement une paire :")
print(f"  P = {nb_mains_une_paire:,} / {nb_mains_total:,}")
print(f"  P ≈ {proba_paire:.4f}")
print(f"  P ≈ {proba_paire * 100:.2f}%")
print(f"  Soit environ 1 chance sur {1/proba_paire:.1f}")

# 4. Autres mains pour comparaison
print(f"\\n--- Comparaison avec d'autres mains ---")

# Brelan : C(13,1) × C(4,3) × C(12,2) × 4²
brelan = 13 * comb(4, 3) * comb(12, 2) * (4**2)
proba_brelan = brelan / nb_mains_total
print(f"Brelan : {proba_brelan*100:.2f}% (1/{int(1/proba_brelan)})")

# Deux paires : C(13,2) × C(4,2)² × C(11,1) × 4
deux_paires = comb(13, 2) * (comb(4, 2)**2) * 11 * 4
proba_deux_paires = deux_paires / nb_mains_total
print(f"Deux paires : {proba_deux_paires*100:.2f}% (1/{int(1/proba_deux_paires)})")

# Affichage :
# Nombre total de mains possibles : 2,598,960
#
# Nombre de mains avec exactement une paire : 1,098,240
#
# Détail du calcul :
#   - Choix de la valeur de la paire : 13
#   - C(4,2) pour les 2 cartes de la paire : 6
#   - C(12,3) pour les 3 autres valeurs : 220
#   - 4³ pour les couleurs des 3 autres : 64
#   Total : 13 × 6 × 220 × 64 = 1,098,240
#
# Probabilité d'avoir exactement une paire :
#   P = 1,098,240 / 2,598,960
#   P ≈ 0.4226
#   P ≈ 42.26%
#   Soit environ 1 chance sur 2.4
#
# --- Comparaison avec d'autres mains ---
# Brelan : 2.11% (1/47)
# Deux paires : 4.75% (1/21)`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Application :</strong> Les coefficients binomiaux sont essentiels pour calculer les probabilités
                au poker, et comprendre pourquoi certaines mains sont plus rares que d'autres.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Application pratique : problème des anniversaires</p>
              <p className="mb-2">
                <strong>Paradoxe célèbre :</strong> Dans un groupe de 23 personnes, quelle est la probabilité que deux personnes
                au moins aient le même jour d'anniversaire ?
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`from math import comb

def proba_anniversaires_communs(n_personnes):
    """
    Calcule la probabilité qu'au moins 2 personnes parmi n
    aient le même anniversaire
    """
    # On calcule d'abord la probabilité que TOUS aient des anniversaires différents
    # puis on prend le complément

    # Probabilité que tous aient des anniversaires différents
    proba_tous_differents = 1.0
    for i in range(n_personnes):
        proba_tous_differents *= (365 - i) / 365

    # Probabilité qu'au moins 2 aient le même anniversaire
    proba_au_moins_deux = 1 - proba_tous_differents

    return proba_au_moins_deux

# Test avec différentes tailles de groupe
print("Probabilité d'avoir au moins 2 anniversaires identiques :")
print("-" * 60)

for n in [10, 20, 23, 30, 40, 50, 70]:
    p = proba_anniversaires_communs(n)
    print(f"{n:2d} personnes : {p*100:5.2f}% ", end="")

    # Barre de visualisation
    barre_longueur = int(p * 50)
    barre = "█" * barre_longueur
    print(f"| {barre}")

# Explication détaillée pour 23 personnes
print("\\n" + "="*60)
print("Explication détaillée pour 23 personnes :")
print("="*60)

n = 23
print(f"\\nNombre de paires possibles : C({n},2) = {comb(n, 2)}")
print(f"\\nCalcul de la probabilité que TOUS aient des anniversaires différents :")

proba_diff = 1.0
for i in range(n):
    proba_etape = (365 - i) / 365
    proba_diff *= proba_etape
    if i < 5 or i >= n - 2:  # Afficher les premières et dernières étapes
        print(f"  Personne {i+1:2d} : {proba_etape:.6f} | Produit cumulé : {proba_diff:.6f}")
    elif i == 5:
        print(f"  ...")

proba_au_moins_deux = 1 - proba_diff
print(f"\\nProbabilité que tous soient différents : {proba_diff:.6f}")
print(f"Probabilité qu'au moins 2 coïncident : {proba_au_moins_deux:.6f}")
print(f"Soit : {proba_au_moins_deux*100:.2f}%")

print(f"\\n Résultat surprenant : avec seulement 23 personnes,")
print(f"il y a plus de 50% de chances que 2 personnes aient le même anniversaire !")

# Affichage :
# Probabilité d'avoir au moins 2 anniversaires identiques :
# ------------------------------------------------------------
# 10 personnes : 11.69% | █████
# 20 personnes : 41.14% | ████████████████████
# 23 personnes : 50.73% | █████████████████████████
# 30 personnes : 70.63% | ███████████████████████████████████
# 40 personnes : 89.12% | ████████████████████████████████████████████
# 50 personnes : 97.04% | ████████████████████████████████████████████████
# 70 personnes : 99.92% | █████████████████████████████████████████████████
#
# ============================================================
# Explication détaillée pour 23 personnes :
# ============================================================
#
# Nombre de paires possibles : C(23,2) = 253
#
# Calcul de la probabilité que TOUS aient des anniversaires différents :
#   Personne  1 : 1.000000 | Produit cumulé : 1.000000
#   Personne  2 : 0.997260 | Produit cumulé : 0.997260
#   Personne  3 : 0.994521 | Produit cumulé : 0.991796
#   Personne  4 : 0.991781 | Produit cumulé : 0.983644
#   Personne  5 : 0.989041 | Produit cumulé : 0.972864
#   ...
#   Personne 22 : 0.941096 | Produit cumulé : 0.493510
#   Personne 23 : 0.938356 | Produit cumulé : 0.492703
#
# Probabilité que tous soient différents : 0.492703
# Probabilité qu'au moins 2 coïncident : 0.507297
# Soit : 50.73%
#
#  Résultat surprenant : avec seulement 23 personnes,
# il y a plus de 50% de chances que 2 personnes aient le même anniversaire !`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Ce paradoxe</strong> illustre comment notre intuition peut nous tromper en probabilités.
                Les coefficients binomiaux nous aident à comprendre pourquoi ce résultat est correct !
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-3">Optimisation : méthode efficace pour calculer C(n,k)</p>
              <p className="mb-2">
                Calculer les factorielles peut être lent pour de grandes valeurs. Voici une méthode optimisée :
              </p>
              <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`def binomial_optimise(n, k):
    """
    Calcule C(n,k) de manière optimisée sans calculer les factorielles complètes
    Utilise la propriété : C(n,k) = C(n,n-k) pour minimiser les calculs
    """
    # Cas limites
    if k > n or k < 0:
        return 0
    if k == 0 or k == n:
        return 1

    # Optimisation : utiliser C(n,k) = C(n,n-k)
    # Choisir le plus petit pour minimiser les calculs
    k = min(k, n - k)

    # Calcul itératif : C(n,k) = n × (n-1) × ... × (n-k+1) / (k × (k-1) × ... × 1)
    # Mais on alterne multiplication et division pour éviter les débordements
    resultat = 1
    for i in range(k):
        resultat = resultat * (n - i) // (i + 1)

    return resultat

# Comparaison des performances
import time
from math import factorial, comb

n, k = 1000, 500

# Méthode 1 : Factorielles (lente)
debut = time.time()
result1 = factorial(n) // (factorial(k) * factorial(n - k))
temps1 = time.time() - debut
print(f"Méthode factorielles : {temps1:.6f} secondes")

# Méthode 2 : Optimisée
debut = time.time()
result2 = binomial_optimise(n, k)
temps2 = time.time() - debut
print(f"Méthode optimisée : {temps2:.6f} secondes")

# Méthode 3 : math.comb (Python 3.8+)
debut = time.time()
result3 = comb(n, k)
temps3 = time.time() - debut
print(f"Méthode math.comb : {temps3:.6f} secondes")

print(f"\\nTous donnent le même résultat : {result1 == result2 == result3}")
print(f"\\nGain de performance :")
print(f"  Optimisée vs Factorielles : {temps1/temps2:.1f}× plus rapide")
print(f"  math.comb vs Factorielles : {temps1/temps3:.1f}× plus rapide")

# Exemples de calculs
print("\\n--- Exemples de calculs ---")
tests = [(100, 50), (1000, 3), (50, 25), (200, 100)]
for n, k in tests:
    resultat = binomial_optimise(n, k)
    print(f"C({n},{k}) = {resultat:,}")

# Affichage typique :
# Méthode factorielles : 0.000234 secondes
# Méthode optimisée : 0.000089 secondes
# Méthode math.comb : 0.000012 secondes
#
# Tous donnent le même résultat : True
#
# Gain de performance :
#   Optimisée vs Factorielles : 2.6× plus rapide
#   math.comb vs Factorielles : 19.5× plus rapide
#
# --- Exemples de calculs ---
# C(100,50) = 100,891,344,545,564,193,334,812,497,256
# C(1000,3) = 166,167,000
# C(50,25) = 126,410,606,437,752
# C(200,100) = 90,548,514,656,103,281,165,404,177,077,484,163,874,504,589,675,413,336`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                <strong> Leçon :</strong> Pour de grandes valeurs, utilisez toujours <span className="font-mono">math.comb()</span> qui est
                optimisé en C. Pour comprendre l'algorithme, la méthode optimisée montre comment éviter les débordements.
              </p>
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
