
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProgrammeModule } from '@/components/ProgrammeModule';

const PythonProbabilitesPage = () => {
  const programmeName = "Module 4 : Probabilités";
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Placeholder URL
  
  const corrige = `# Fiche pratique : Simulation et statistiques avec NumPy & Matplotlib

# Imports de base (et graine optionnelle pour la reproductibilité)
import numpy as np
import numpy.random as rd
import matplotlib.pyplot as plt

# 1. Principes généraux
# Simulation : quand le nombre de tirages devient grand, la fréquence observée d'un événement se rapproche de sa probabilité théorique
# Moyenne empirique d'un échantillon : np.mean(X) calcule la somme des valeurs divisée par la taille de l'échantillon
# Fréquence empirique d'un événement (tableau booléen) : np.mean(A)
# Méthode de Monte‑Carlo : pour estimer une espérance, on simule un grand nombre de valeurs et on prend la moyenne

# 2. Génération aléatoire de base
rd.random()                        # Réel uniforme sur [0, 1[
rd.random(n)                       # Vecteur de taille n
rd.random((n, m))                  # Matrice n×m
lancer = np.floor(6 * rd.random()) + 1  # Dé (faces 1 à 6)
U = (b - a) * rd.random() + a      # Uniforme sur [a, b]

# 3. Lois discrètes courantes
rd.binomial(1, p)                  # Bernoulli(p)
rd.binomial(n, p)                  # Binomiale(n, p)
rd.randint(a, b+1)                 # Uniforme discrète [a, b]
rd.geometric(p)                    # Géométrique(p)
rd.poisson(lam)                    # Poisson(lambda)

# Fonction Bernoulli "maison"
def bernoulli(p):
    """Retourne 1 avec une probabilité p, 0 sinon."""
    return 1 if rd.random() <= p else 0

# Fonction Géométrique "maison"
def geometrique(p):
    """Retourne le rang de la première réussite (>= 1)."""
    n = 1
    while rd.random() > p:
        n += 1
    return n

# Fonction Binomiale "maison"
def binomiale(n, p):
    """Retourne le nombre de succès (tirage > p) sur n essais."""
    S = 0
    for _ in range(n):
        if rd.random() > p:
            S += 1
    return S

# 5. Contexte : loi binomiale (n = 30, p = 0,25)
from math import factorial

def proba_binom(k):
    """Probabilité d'obtenir k succès (0 ≤ k ≤ 30)."""
    coeff = factorial(30) // (factorial(k) * factorial(30 - k))
    return coeff * (0.25 ** k) * (0.75 ** (30 - k))

# 6. Statistiques descriptives (NumPy)
np.min(A)                          # Valeur minimale
np.max(A)                          # Valeur maximale
np.mean(A)                         # Moyenne
np.median(A)                       # Médiane
np.var(A)                          # Variance
np.std(A)                          # Écart-type
np.sum(A)                          # Somme totale
np.cumsum(A)                       # Sommes cumulées

# 7. Graphiques de base (Matplotlib)
plt.plot(x, y)                     # Courbe
plt.bar(x, y, width)               # Diagramme en barres
plt.hist(x, bins, density=True)    # Histogramme
plt.boxplot(x)                     # Boîte à moustaches
plt.show()                         # Affichage

# 9. Estimation et Monte‑Carlo
# Estimer une espérance : np.mean(rd.<loi>(…, size=N)) avec un grand N
# Estimer une probabilité : freq = np.mean(condition_bool)

def approx_Jn(n, m=5000):
    x = rd.exponential(1, m)
    y = -x / (1 + np.exp(-n * x))
    return y.mean()

# 10. Exercices types
# 1. Deux faces "Pile" consécutives au pile ou face
def simul_X():
    tirs, pile = 0, 0
    while pile < 2:
        pile = pile + 1 if rd.random() < 0.5 else 0
        tirs += 1
    return tirs

# 2. Jeu de dés : le joueur A gagne s'il obtient 6 avant B
def partie():
    while True:
        if rd.randint(1, 7) == 6:  # A
            return 1
        if rd.randint(1, 7) == 6:  # B
            return 0

proba_A = np.mean([partie() for _ in range(10000)])

# 3. Géométrique(p=0.2) : comparaison simulation / théorie
ech = rd.geometric(0.2, 10000)
c = np.arange(0.5, 21)
plt.hist(ech, c, density=True, label="Simulation")

x = np.arange(1, 21)
y = 0.2 * 0.8**(x - 1)
plt.bar(x, y, label="Théorique")
plt.legend(); plt.show()

# Mémo‑commandes rapides
rd.random()                        # uniforme 0–1
rd.randint(a, b)                   # uniforme discrète a … b‑1
rd.binomial(n, p)                  # binomiale
rd.geometric(p)                    # géométrique
rd.poisson(lam)                    # poisson
rd.exponential(1/l)                # exponentielle
rd.normal(mean, sigma)             # normale`;

  const explication = `# Module 4 : Probabilités - Guide d'utilisation

## Vue d'ensemble
Ce module couvre la simulation et les statistiques avec NumPy et Matplotlib, des outils essentiels pour l'analyse probabiliste en prépa ECG.

## Concepts clés

### 1. Simulation statistique
- La loi des grands nombres : plus on augmente le nombre de tirages, plus la fréquence observée se rapproche de la probabilité théorique
- La simulation permet de vérifier expérimentalement les résultats théoriques

### 2. Génération de nombres aléatoires
- rd.random() génère des nombres uniformes entre 0 et 1
- Les autres lois s'obtiennent par transformation ou fonctions dédiées
- Importance de la reproductibilité avec les graines aléatoires

### 3. Lois de probabilité discrètes
- Bernoulli : succès/échec avec probabilité p
- Binomiale : nombre de succès sur n essais indépendants
- Géométrique : rang du premier succès
- Poisson : événements rares sur un intervalle

### 4. Statistiques descriptives
- Mesures de tendance centrale : moyenne, médiane
- Mesures de dispersion : variance, écart-type
- Extrema : minimum, maximum

### 5. Méthode de Monte-Carlo
- Approximation d'intégrales complexes par simulation
- Estimation d'espérances mathématiques
- Calcul de probabilités d'événements complexes

## Applications pratiques

### Exercices types
1. **Problèmes de première occurrence** : temps d'attente jusqu'à un événement
2. **Jeux et compétitions** : probabilités de victoire dans des jeux simples
3. **Comparaison théorie/simulation** : validation des formules probabilistes

### Visualisations
- Histogrammes pour les distributions empiriques
- Comparaison simulation/théorie avec des graphiques superposés
- Boîtes à moustaches pour analyser la dispersion

## Conseils d'utilisation
- Toujours utiliser density=True dans les histogrammes pour comparer aux densités théoriques
- Préférer des échantillons de taille importante (≥ 10000) pour les estimations
- Bien définir les classes pour les variables discrètes dans les histogrammes

## Liens avec le programme ECG
- Validation expérimentale des résultats théoriques de probabilités
- Introduction aux méthodes numériques utilisées en statistiques
- Préparation aux outils d'analyse de données en école de commerce`;

  const autresVersions = [
    "Fiche PDF téléchargeable avec tous les exemples",
    "Notebook Jupyter interactif avec exercices corrigés",
    "Quiz interactif sur les lois de probabilité",
    "Exercices d'application avec données réelles",
    "Mémento de toutes les commandes NumPy/Matplotlib"
  ];

  const outils = [
    "python -m pip install numpy matplotlib",
    "import numpy as np",
    "import numpy.random as rd",
    "import matplotlib.pyplot as plt",
    "rd.seed(42)  # Pour la reproductibilité"
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <Link to="/formation">
            <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Retour à la formation
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Module 4 : Probabilités
            </h1>
            <p className="text-xl text-muted-foreground">
              Simulation et statistiques avec NumPy & Matplotlib
            </p>
          </div>
        </div>

        <ProgrammeModule
          programmeName={programmeName}
          videoUrl={videoUrl}
          corrige={corrige}
          explication={explication}
          autresVersions={autresVersions}
          outils={outils}
        />
      </div>
    </div>
  );
};

export default PythonProbabilitesPage;
