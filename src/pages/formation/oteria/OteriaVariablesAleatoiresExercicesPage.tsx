import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock, CodeBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaVariablesAleatoiresExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Loi de Bernoulli",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Un système de sécurité détecte une intrusion avec une probabilité p = 0.8. On modélise la détection par une variable de Bernoulli X.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Donner la loi de X</li>
            <li>Calculer E(X) et Var(X)</li>
            <li>Si on fait 5 tests indépendants, quelle est la probabilité de détecter au moins une fois ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Loi de X</p>
            <p className="mb-2">X suit une loi de Bernoulli de paramètre p = 0.8</p>
            <LatexRenderer latex="P(X = 1) = 0.8 \quad \text{et} \quad P(X = 0) = 0.2" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Espérance et variance</p>
            <p className="mb-2">Pour une loi de Bernoulli B(p) :</p>
            <LatexRenderer latex="E(X) = p = 0.8" block={true} />
            <LatexRenderer latex="\text{Var}(X) = p(1-p) = 0.8 \times 0.2 = 0.16" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité d'au moins une détection sur 5 tests</p>
            <p className="mb-2">P(aucune détection) = (1-0.8)⁵ = 0.2⁵</p>
            <LatexRenderer latex="P(\text{au moins 1}) = 1 - 0.2^5 = 1 - 0.00032 = 0.99968" block={true} />
            <p className="mt-2 text-sm text-slate-600">Quasiment certain de détecter au moins une fois !</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Loi Binomiale",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Un administrateur réseau teste 20 pare-feu indépendants. Chaque pare-feu bloque une attaque avec une probabilité de 0.95.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Soit X le nombre de pare-feu qui bloquent l'attaque. Quelle est la loi de X ?</li>
            <li>Calculer E(X) et Var(X)</li>
            <li>Quelle est la probabilité que tous les pare-feu bloquent l'attaque ?</li>
            <li>Quelle est la probabilité qu'au moins 18 pare-feu bloquent l'attaque ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Loi de X</p>
            <p className="mb-2">X suit une loi binomiale B(n=20, p=0.95)</p>
            <LatexRenderer latex="X \sim \mathcal{B}(20, 0.95)" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Espérance et variance</p>
            <LatexRenderer latex="E(X) = np = 20 \times 0.95 = 19" block={true} />
            <LatexRenderer latex="\text{Var}(X) = np(1-p) = 20 \times 0.95 \times 0.05 = 0.95" block={true} />
            <p className="mt-2 text-sm text-slate-600">En moyenne, 19 pare-feu bloquent l'attaque.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité que tous bloquent</p>
            <LatexRenderer latex="P(X = 20) = \binom{20}{20} \times 0.95^{20} \times 0.05^0 = 0.95^{20} \approx 0.358" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 36% de chances que tous bloquent.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité qu'au moins 18 bloquent</p>
            <p className="mb-2">P(X ≥ 18) = P(X=18) + P(X=19) + P(X=20)</p>
            <LatexRenderer latex="P(X=18) = \binom{20}{18} \times 0.95^{18} \times 0.05^2 \approx 0.189" block={true} />
            <LatexRenderer latex="P(X=19) = \binom{20}{19} \times 0.95^{19} \times 0.05^1 \approx 0.377" block={true} />
            <LatexRenderer latex="P(X=20) \approx 0.358" block={true} />
            <LatexRenderer latex="P(X \geq 18) \approx 0.189 + 0.377 + 0.358 = 0.924" block={true} />
            <p className="mt-2 text-sm text-slate-600">92.4% de chances qu'au moins 18 pare-feu bloquent.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Loi Géométrique",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Un attaquant tente de deviner un mot de passe. Chaque tentative réussit avec probabilité p = 0.01, indépendamment des autres.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Soit X le nombre d'essais nécessaires pour réussir. Quelle est la loi de X ?</li>
            <li>Calculer E(X)</li>
            <li>Quelle est la probabilité de réussir au bout du 10ème essai exactement ?</li>
            <li>Quelle est la probabilité de réussir en moins de 50 essais ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Loi de X</p>
            <p className="mb-2">X suit une loi géométrique de paramètre p = 0.01</p>
            <LatexRenderer latex="P(X = k) = (1-p)^{k-1} \times p = 0.99^{k-1} \times 0.01" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Espérance</p>
            <p className="mb-2">Pour une loi géométrique :</p>
            <LatexRenderer latex="E(X) = \frac{1}{p} = \frac{1}{0.01} = 100 \text{ essais}" block={true} />
            <p className="mt-2 text-sm text-slate-600">En moyenne, il faut 100 essais pour réussir.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité de réussir au 10ème essai</p>
            <LatexRenderer latex="P(X = 10) = 0.99^9 \times 0.01 \approx 0.0091" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 0.91% de chances.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité de réussir en moins de 50 essais</p>
            <p className="mb-2">P(X {'<'} 50) = 1 - P(X ≥ 50) = 1 - (1-p)⁴⁹</p>
            <LatexRenderer latex="P(X < 50) = 1 - 0.99^{49} \approx 1 - 0.612 = 0.388" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 39% de chances de réussir avant 50 essais.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Loi de Poisson",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Un serveur reçoit en moyenne λ = 5 tentatives d'intrusion par heure. On modélise le nombre X de tentatives sur une heure par une loi de Poisson.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Donner la loi de X</li>
            <li>Quelle est la probabilité de recevoir exactement 3 tentatives ?</li>
            <li>Quelle est la probabilité de ne recevoir aucune tentative ?</li>
            <li>Quelle est la probabilité de recevoir plus de 7 tentatives ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Loi de X</p>
            <p className="mb-2">X suit une loi de Poisson de paramètre λ = 5</p>
            <LatexRenderer latex="P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!} = \frac{5^k e^{-5}}{k!}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité de 3 tentatives</p>
            <LatexRenderer latex="P(X = 3) = \frac{5^3 e^{-5}}{3!} = \frac{125 \times e^{-5}}{6} \approx 0.1404" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 14% de chances.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité de 0 tentative</p>
            <LatexRenderer latex="P(X = 0) = \frac{5^0 e^{-5}}{0!} = e^{-5} \approx 0.0067" block={true} />
            <p className="mt-2 text-sm text-slate-600">Seulement 0.67% de chances (très rare).</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité de plus de 7 tentatives</p>
            <p className="mb-2">P(X {'>'} 7) = 1 - P(X ≤ 7) = 1 - ∑[k=0 à 7] P(X=k)</p>
            <p className="mb-2">En calculant (ou avec une table) :</p>
            <LatexRenderer latex="P(X > 7) \approx 1 - 0.867 = 0.133" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 13% de chances de dépasser 7 tentatives.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Loi Uniforme Continue",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Un générateur de nombres aléatoires produit des valeurs uniformément sur [0, 10]. Soit X cette variable.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Donner la densité de probabilité de X</li>
            <li>Calculer E(X) et Var(X)</li>
            <li>Calculer P(3 ≤ X ≤ 7)</li>
            <li>Sachant que X {'>'} 6, quelle est la probabilité que X {'>'} 8 ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Densité de probabilité</p>
            <p className="mb-2">X suit une loi uniforme sur [0, 10]</p>
            <LatexRenderer latex="f(x) = \begin{cases} \frac{1}{10} & \text{si } x \in [0,10] \\ 0 & \text{sinon} \end{cases}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Espérance et variance</p>
            <p className="mb-2">Pour une loi uniforme sur [a, b] :</p>
            <LatexRenderer latex="E(X) = \frac{a+b}{2} = \frac{0+10}{2} = 5" block={true} />
            <LatexRenderer latex="\text{Var}(X) = \frac{(b-a)^2}{12} = \frac{100}{12} \approx 8.33" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. P(3 ≤ X ≤ 7)</p>
            <LatexRenderer latex="P(3 \leq X \leq 7) = \int_3^7 \frac{1}{10} dx = \frac{7-3}{10} = \frac{4}{10} = 0.4" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. P(X {'>'} 8 | X {'>'} 6)</p>
            <p className="mb-2">Probabilité conditionnelle :</p>
            <LatexRenderer latex="P(X > 8 \mid X > 6) = \frac{P(X > 8 \cap X > 6)}{P(X > 6)} = \frac{P(X > 8)}{P(X > 6)}" block={true} />
            <LatexRenderer latex="= \frac{(10-8)/10}{(10-6)/10} = \frac{2/10}{4/10} = \frac{2}{4} = 0.5" block={true} />
            <p className="mt-2 text-sm text-slate-600">50% de chances, car la loi uniforme est "sans mémoire" sur les intervalles.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Loi Exponentielle",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Le temps T (en heures) entre deux pannes d'un serveur suit une loi exponentielle de paramètre λ = 0.5.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Donner la densité et la fonction de répartition de T</li>
            <li>Calculer E(T) et interpréter</li>
            <li>Quelle est la probabilité qu'une panne survienne dans les 3 premières heures ?</li>
            <li>Sachant qu'aucune panne n'est survenue pendant 2h, quelle est la probabilité qu'il n'y en ait pas pendant encore 3h ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Densité et fonction de répartition</p>
            <p className="mb-2">Densité :</p>
            <LatexRenderer latex="f(t) = \lambda e^{-\lambda t} = 0.5 e^{-0.5t} \quad (t \geq 0)" block={true} />
            <p className="mb-2 mt-3">Fonction de répartition :</p>
            <LatexRenderer latex="F(t) = 1 - e^{-\lambda t} = 1 - e^{-0.5t} \quad (t \geq 0)" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Espérance</p>
            <p className="mb-2">Pour une loi exponentielle :</p>
            <LatexRenderer latex="E(T) = \frac{1}{\lambda} = \frac{1}{0.5} = 2 \text{ heures}" block={true} />
            <p className="mt-2 text-sm text-slate-600">En moyenne, une panne survient toutes les 2 heures.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité de panne avant 3h</p>
            <LatexRenderer latex="P(T \leq 3) = F(3) = 1 - e^{-0.5 \times 3} = 1 - e^{-1.5} \approx 0.777" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 78% de chances qu'une panne survienne dans les 3 premières heures.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Propriété d'absence de mémoire</p>
            <p className="mb-2">La loi exponentielle a la propriété d'absence de mémoire :</p>
            <LatexRenderer latex="P(T > 2+3 \mid T > 2) = P(T > 3)" block={true} />
            <LatexRenderer latex="= e^{-0.5 \times 3} = e^{-1.5} \approx 0.223" block={true} />
            <p className="mt-3 text-sm bg-blue-50 p-2 rounded border border-blue-200">
              <strong>Interprétation :</strong> Le fait d'avoir déjà attendu 2h sans panne ne change pas la probabilité d'attendre encore 3h sans panne. C'est comme si on recommençait à zéro !
            </p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Simulation Python - Loi Binomiale",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Simuler une loi binomiale B(n=50, p=0.6) et comparer avec la théorie.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Écrire un programme Python pour simuler 10 000 valeurs de cette loi</li>
            <li>Calculer la moyenne et la variance empiriques</li>
            <li>Créer un histogramme et comparer avec la distribution théorique</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="font-semibold mb-3">Programme Python :</p>
          <CodeBlock
            language="python"
            title="Simulation Loi Binomiale"
            code={`import numpy as np
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
plt.show()`}
          />
          <div className="bg-blue-50 p-4 rounded mt-4 text-sm text-slate-700">
            <p className="font-semibold mb-3">Résultats attendus :</p>
            <ul className="space-y-2 list-disc ml-4">
              <li><strong>Moyenne empirique :</strong> ≈ 30 (théorique: 30)</li>
              <li><strong>Variance empirique :</strong> ≈ 12 (théorique: 12)</li>
              <li><strong>Forme :</strong> Distribution en cloche centrée sur 30</li>
            </ul>
            <p className="mt-3">
              L'histogramme montre une excellente concordance entre simulation et théorie, validant la loi des grands nombres.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Application - Temps de réponse d'un serveur",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Le temps de réponse T d'un serveur web (en ms) suit une loi exponentielle de paramètre λ = 0.01. On considère qu'une réponse est "lente" si T {'>'} 150 ms.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Quelle est la probabilité qu'une requête soit lente ?</li>
            <li>Sur 100 requêtes indépendantes, combien peut-on s'attendre à avoir de requêtes lentes ?</li>
            <li>Quelle est la probabilité qu'au moins 30 requêtes sur 100 soient lentes ?</li>
            <li>Écrire un programme Python pour simuler cette situation</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Probabilité d'une requête lente</p>
            <LatexRenderer latex="P(T > 150) = e^{-\lambda \times 150} = e^{-0.01 \times 150} = e^{-1.5} \approx 0.223" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 22.3% des requêtes sont lentes.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Nombre attendu de requêtes lentes sur 100</p>
            <p className="mb-2">Soit X le nombre de requêtes lentes. X suit B(n=100, p=0.223)</p>
            <LatexRenderer latex="E(X) = np = 100 \times 0.223 = 22.3 \approx 22 \text{ requêtes}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité d'au moins 30 requêtes lentes</p>
            <p className="mb-2">Utilisons l'approximation normale (n grand, np {'>'} 5) :</p>
            <LatexRenderer latex="\mu = np = 22.3, \quad \sigma = \sqrt{np(1-p)} = \sqrt{17.33} \approx 4.16" block={true} />
            <p className="mb-2">Avec correction de continuité :</p>
            <LatexRenderer latex="P(X \geq 30) \approx P\left(Z \geq \frac{29.5 - 22.3}{4.16}\right) = P(Z \geq 1.73) \approx 0.042" block={true} />
            <p className="mt-2 text-sm text-slate-600">Seulement 4.2% de chances (situation rare).</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Simulation Python</p>
            <CodeBlock
              language="python"
              title="Simulation temps de réponse"
              code={`import numpy as np
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
plt.show()`}
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={9}
      sessionTitle="Variables aléatoires"
      description="Lois usuelles (Bernoulli, Binomiale, Exponentielle), Simulation et applications"
      slug="variables-aleatoires"
      duration="4h"
      level="Avancé"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/probabilites-exercices"
      nextChapterLink="/formation/oteria/integrales-monte-carlo-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Reconnaître et manipuler les lois discrètes usuelles (Bernoulli, Binomiale, Géométrique, Poisson)</li>
            <li>Travailler avec des lois continues (Uniforme, Exponentielle)</li>
            <li>Calculer et interpréter l'espérance et la variance</li>
            <li>Simuler des lois de probabilité avec Python</li>
            <li>Résoudre des problèmes concrets (temps d'attente, fiabilité, sécurité)</li>
          </ul>
        </div>

        {/* ─── EXERCICES ────────────────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={exercise.solution}
          >
            <div className="mb-4">
              <Badge
                className={`${exercise.difficulty === 'Facile' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                  exercise.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                    'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  } mb-2`}
                variant="secondary"
              >
                {exercise.difficulty}
              </Badge>
              <div className="text-slate-700 leading-relaxed">
                {exercise.statement}
              </div>
            </div>
          </ExerciseBlock>
        ))}

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaVariablesAleatoiresExercicesPage;
