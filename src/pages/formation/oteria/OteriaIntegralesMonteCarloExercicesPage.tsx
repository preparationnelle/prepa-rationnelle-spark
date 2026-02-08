import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock, CodeBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaIntegralesMonteCarloExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Approximation d'intégrale simple",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Écrivez un programme Python qui approxime l'intégrale de <LatexRenderer latex="f(x) = x" inline /> sur [0, 2] en utilisant la méthode de Monte-Carlo (valeur moyenne) avec 10 000 points.</p>
          <div className="bg-slate-50 p-4 rounded text-sm mb-4">
            <p className="font-medium text-slate-700 mb-2">Rappel théorique :</p>
            <LatexRenderer latex="\int_0^2 x \, dx = \left[\frac{x^2}{2}\right]_0^2 = \frac{4}{2} - 0 = 2" block={true} />
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="mb-2">Nous utilisons la méthode de la moyenne : <LatexRenderer latex="I \approx (b-a) \times \frac{1}{N} \sum_{i=1}^N f(x_i)" inline /></p>
          <CodeBlock
            language="python"
            title="Approximation intégrale x sur [0,2]"
            code={`import random

def f(x):
    return x

a, b = 0, 2
N = 10000
somme_f = 0

for _ in range(N):
    x = random.uniform(a, b)
    somme_f += f(x)

integrale = (b - a) * (somme_f / N)
print(f"Approximation: {integrale:.6f}")
print(f"Valeur exacte: 2.0")
print(f"Erreur: {abs(integrale - 2.0):.6f}")`}
          />
        </div>
      )
    },
    {
      id: 2,
      title: "Calcul de π par méthode géométrique",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Implémentez l'algorithme de Monte-Carlo pour calculer π en utilisant des points aléatoires dans le carré unité <LatexRenderer latex="[0,1] \times [0,1]" inline />.</p>
          <p>Utilisez 50 000 points et affichez l'approximation obtenue.</p>
          <div className="bg-slate-50 p-4 rounded text-sm mb-4">
            <p className="font-medium text-slate-700 mb-2">Principe :</p>
            <p>La probabilité qu'un point tombe dans le quart de cercle est <LatexRenderer latex="\frac{\pi/4}{1} = \frac{\pi}{4}" inline />.</p>
            <p>Donc <LatexRenderer latex="\pi \approx 4 \times \frac{\text{points dans le cercle}}{\text{total points}}" inline />.</p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Estimation de Pi"
            code={`import random

N = 50000
points_dans_cercle = 0

for _ in range(N):
    x = random.uniform(0, 1)
    y = random.uniform(0, 1)
    
    # Distance à l'origine <= 1
    if x*x + y*y <= 1:
        points_dans_cercle += 1

pi_approx = 4 * (points_dans_cercle / N)

import math
print(f"Pi approx: {pi_approx:.6f}")
print(f"Pi exact : {math.pi:.6f}")
print(f"Erreur   : {abs(pi_approx - math.pi):.6f}")`}
          />
        </div>
      )
    },
    {
      id: 3,
      title: "Étude de convergence",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Créez un programme qui étudie la convergence de l'approximation de π en fonction du nombre de points utilisés.</p>
          <p>Testez avec N = 1 000, 10 000, 100 000, 1 000 000 points.</p>
          <p>Affichez l'erreur pour chaque valeur de N. Comment évolue l'erreur quand N est multiplié par 100 ?</p>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Convergence Monte-Carlo"
            code={`import random
import math

def estimer_pi(n):
    compteur = 0
    for _ in range(n):
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)
        if x*x + y*y <= 1:
            compteur += 1
    return 4 * (compteur / n)

for N in [1000, 10000, 100000, 1000000]:
    pi_est = estimer_pi(N)
    erreur = abs(pi_est - math.pi)
    print(f"N={N:7d} : {pi_est:.6f} (Err: {erreur:.6f})")`}
          />
          <div className="bg-blue-50 p-4 rounded text-sm text-slate-700">
            <p className="font-semibold mb-2">Observation :</p>
            <p>La vitesse de convergence de Monte-Carlo est en <LatexRenderer latex="1/\sqrt{N}" inline />.</p>
            <p>Pour gagner un facteur 10 en précision (diviser l'erreur par 10), il faut multiplier le nombre de points par 100.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Fonction sinus (Challenge)",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Approximez l'intégrale de <LatexRenderer latex="f(x) = \sin(x)" inline /> sur <LatexRenderer latex="[0, \pi]" inline /> en utilisant Monte-Carlo.</p>
          <p>Comparez avec la valeur exacte.</p>
          <div className="bg-slate-50 p-4 rounded text-sm mb-4">
            <p className="font-medium text-slate-700 mb-2">Valeur exacte :</p>
            <LatexRenderer latex="\int_0^\pi \sin(x) \, dx = [-\cos(x)]_0^\pi = -(-1) - (-1) = 2" block={true} />
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Intégrale de sin(x)"
            code={`import random
import math

def f(x):
    return math.sin(x)

a, b = 0, math.pi
N = 10000
somme_f = 0

for _ in range(N):
    x = random.uniform(a, b)
    somme_f += f(x)

integrale = (b - a) * (somme_f / N)

print(f"Approximation: {integrale:.6f}")
print(f"Valeur exacte: 2.000000")
print(f"Erreur: {abs(integrale - 2.0):.6f}")`}
          />
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={10}
      sessionTitle="Intégrales et Méthode de Monte-Carlo"
      description="Calcul intégral approché, estimation de constantes mathématiques et étude de convergence"
      slug="integrales-monte-carlo"
      duration="4h"
      level="Intermédiaire"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/variables-aleatoires-exercices"
      nextChapterLink="/formation/oteria/matrices-markov-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">
        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Comprendre le principe de l'intégration par la méthode de Monte-Carlo</li>
            <li>Approximer des intégrales simples (fonction identité, sinus)</li>
            <li>Estimer la valeur de <LatexRenderer latex="\pi" inline /> par méthode géométrique</li>
            <li>Analyser la vitesse de convergence de l'algorithme</li>
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

export default OteriaIntegralesMonteCarloExercicesPage;
