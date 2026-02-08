import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock, CodeBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaMatricesMarkovExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Opérations de base avec numpy",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Créez deux matrices <LatexRenderer latex="A" inline /> et <LatexRenderer latex="B" inline /> de dimensions 3x3 avec numpy.</p>
          <p>Calculez :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Le produit matriciel <LatexRenderer latex="AB" inline /></li>
            <li>La transposée de <LatexRenderer latex="A" inline />, notée <LatexRenderer latex="A^T" inline /></li>
            <li>Vérifiez la propriété <LatexRenderer latex="(AB)^T = B^T A^T" inline /></li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Opérations matricielles"
            code={`import numpy as np

# Création des matrices (exemple)
A = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]])

B = np.array([[9, 8, 7], 
              [6, 5, 4], 
              [3, 2, 1]])

# 1. Produit matriciel AB
AB = np.dot(A, B) # ou A @ B

# 2. Transposée de A
A_T = A.T

# 3. Vérification (AB)^T = B^T A^T
AB_T = AB.T
BT_AT = np.dot(B.T, A.T)

print("AB:\\n", AB)
print("A_T:\\n", A_T)
print("Égalité vérifiée:", np.allclose(AB_T, BT_AT))`}
          />
        </div>
      )
    },
    {
      id: 2,
      title: "Résolution de système linéaire",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Résolvez le système linéaire suivant en utilisant <code>numpy.linalg.solve()</code> :</p>
          <div className="bg-slate-50 p-4 rounded mb-2">
            <LatexRenderer latex="\begin{cases} 2x + y - z = 1 \\ x - y + 2z = -2 \\ 3x + 2y + z = 3 \end{cases}" block={true} />
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="mb-2">On écrit le système sous la forme <LatexRenderer latex="Ax = b" inline /> :</p>
          <CodeBlock
            language="python"
            title="Résolution système linéaire"
            code={`import numpy as np

# Matrice des coefficients A
A = np.array([[2, 1, -1], 
              [1, -1, 2], 
              [3, 2, 1]])

# Vecteur second membre b
b = np.array([1, -2, 3])

# Résolution
x = np.linalg.solve(A, b)

print("Solution [x, y, z]:", x)

# Vérification
print("Vérification A @ x:", np.dot(A, x))
print("Doit être égal à b:", b)`}
          />
        </div>
      )
    },
    {
      id: 3,
      title: "Chaîne de Markov simple",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Modélisez une chaîne de Markov à 2 états : "Étudiant" (E) et "Dort" (D).</p>
          <p>La matrice de transition <LatexRenderer latex="P" inline /> est donnée par :</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><LatexRenderer latex="P(E \to E) = 0.7" inline /></li>
            <li><LatexRenderer latex="P(E \to D) = 0.3" inline /></li>
            <li><LatexRenderer latex="P(D \to E) = 0.8" inline /></li>
            <li><LatexRenderer latex="P(D \to D) = 0.2" inline /></li>
          </ul>
          <p>Calculez l'état (les probabilités d'être dans chaque état) après 5 itérations en partant d'un étudiant sûr (<LatexRenderer latex="\pi_0 = [1, 0]" inline />).</p>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Chaîne de Markov"
            code={`import numpy as np

# Matrice de transition P
# Ligne 0 : E -> [E, D]
# Ligne 1 : D -> [E, D]
P = np.array([[0.7, 0.3], 
              [0.8, 0.2]])

# État initial (100% Étudiant)
pi_0 = np.array([1, 0])

# Calcul après 5 itérations : pi_5 = pi_0 * P^5
pi_5 = pi_0 @ np.linalg.matrix_power(P, 5)

print("Matrice P:\\n", P)
print("État initial:", pi_0)
print("État après 5 étapes:", pi_5)`}
          />
          <div className="bg-slate-50 p-4 rounded text-sm text-slate-700 mt-2">
            <p className="font-semibold mb-1">Interprétation :</p>
            <p>Le résultat donne la probabilité que l'étudiant travaille ou dorme après 5 transitions.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Distribution stationnaire",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Pour la chaîne de Markov de l'exercice 3, calculez la distribution stationnaire <LatexRenderer latex="\pi" inline />.</p>
          <p>C'est le vecteur de probabilités tel que <LatexRenderer latex="\pi P = \pi" inline />.</p>
          <div className="bg-slate-50 p-4 rounded text-sm mb-4">
            <p className="font-medium text-slate-700 mb-2">Indication :</p>
            <p>Cela revient à trouver le vecteur propre à gauche associé à la valeur propre 1.</p>
            <p>Avec numpy, <code>eig(P.T)</code> donne les vecteurs propres à droite de la transposée, ce qui correspond aux vecteurs propres à gauche de P.</p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Distribution stationnaire"
            code={`import numpy as np

P = np.array([[0.7, 0.3], 
              [0.8, 0.2]])

# Calcul des vecteurs propres de la transposée
valeurs_propres, vecteurs_propres = np.linalg.eig(P.T)

# Trouver l'index de la valeur propre proche de 1
index = np.argmin(np.abs(valeurs_propres - 1))

# Récupérer le vecteur propre correspondant
vecteur_stationnaire = vecteurs_propres[:, index].real

# Normaliser pour que la somme soit 1 (propriété d'une distribution de proba)
vecteur_stationnaire /= np.sum(vecteur_stationnaire)

print("Distribution stationnaire:", vecteur_stationnaire)

# Vérification
print("Vérification pi @ P:", vecteur_stationnaire @ P)`}
          />
          <div className="bg-blue-50 p-4 rounded text-sm text-slate-700">
            <p className="font-semibold mb-2">Résultat théorique :</p>
            <p>On peut résoudre le système à la main :</p>
            <LatexRenderer latex="\begin{cases} 0.7x + 0.8y = x \\ 0.3x + 0.2y = y \\ x + y = 1 \end{cases}" block={true} />
            <p>On trouve <LatexRenderer latex="x = 8/11 \approx 0.727" inline /> et <LatexRenderer latex="y = 3/11 \approx 0.273" inline />.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={11}
      sessionTitle="Matrices et Chaînes de Markov"
      description="Manipulation de matrices avec Numpy, résolution de systèmes linéaires et introduction aux processus stochastiques"
      slug="matrices-markov"
      duration="4h"
      level="Avancé"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/integrales-monte-carlo-exercices"
      nextChapterLink="/formation/oteria/matrices-stochastiques-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">
        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Maîtriser les opérations matricielles avec Numpy (produit, transposée, inversion)</li>
            <li>Résoudre des systèmes linéaires numériquement</li>
            <li>Modéliser des problèmes simples avec des chaînes de Markov</li>
            <li>Calculer des états futurs et des distributions stationnaires</li>
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

export default OteriaMatricesMarkovExercicesPage;
