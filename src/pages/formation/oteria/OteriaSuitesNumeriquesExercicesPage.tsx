import React, { useState } from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Lightbulb, Play, AlertCircle, CheckCircle2 } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const exercises = [
  {
    id: 1,
    title: "Calcul de termes d'une suite récurrente",
    difficulty: "Facile",
    statement: "Écrire une fonction qui prend en argument un entier $n$ et renvoie les $n$ premiers termes de la suite définie par : $u_0 = 2, u_{n+1} = 3u_n + 1$.",
    hint: "Utilisez une liste pour stocker les termes et une boucle pour calculer chaque terme à partir du précédent.",
    correction: `def suite_u(n):
    """Calcule les n premiers termes de la suite u_0=2, u_{n+1}=3*u_n+1"""
    u = 2
    termes = [u]
    
    for i in range(1, n):
        u = 3 * u + 1
        termes.append(u)
    
    return termes

# Calculer les 10 premiers termes
resultat = suite_u(10)
print("Les 10 premiers termes:")
for i, terme in enumerate(resultat):
    print(f"u_{i} = {terme}")`
  },
  {
    id: 2,
    title: "Suite géométrique : récurrence vs formule explicite",
    difficulty: "Moyen",
    statement: "On définit la suite géométrique : $v_0 = 1, v_{n+1} = 2v_n$. Écrire deux fonctions Python : une utilisant la récurrence et une autre utilisant la formule explicite $v_n = 2^n$. Vérifier que les deux méthodes donnent le même résultat pour $n \\le 10$.",
    hint: "La fonction explicite ne nécessite pas de boucle.",
    correction: `# Méthode par récurrence
def suite_v_rec(n):
    """Calcule v_n par récurrence"""
    v = 1
    for i in range(n):
        v = v * 2
    return v

# Méthode par formule explicite
def suite_v_exp(n):
    """Calcule v_n avec la formule explicite v_n = 2^n"""
    return 2**n

# Vérification pour n <= 10
print("Vérification des deux méthodes:")
print("n  | Récurrence | Explicite")
print("-" * 35)
for k in range(11):
    rec = suite_v_rec(k)
    exp = suite_v_exp(k)
    egal = "✓" if rec == exp else "✗"
    print(f"{k:2d} | {rec:10d} | {exp:10d} {egal}")`
  },
  {
    id: 3,
    title: "Convergence d'une suite",
    difficulty: "Moyen",
    statement: "On définit la suite : $w_0 = 1, w_{n+1} = w_n/2 + 1$. Écrire un programme qui calcule $w_n$ jusqu'à ce que deux termes consécutifs soient égaux à $10^{-6}$ près. Donner une approximation numérique de la limite.",
    hint: "Utilisez une boucle while avec la condition `abs(w_next - w) >= epsilon`.",
    correction: `def suite_w(epsilon=1e-6):
    """Calcule la suite jusqu'à convergence"""
    w = 1
    n = 0
    
    while True:
        w_next = w / 2 + 1
        
        # Vérifier si on a convergé
        if abs(w_next - w) < epsilon:
            return w_next, n
        
        w = w_next
        n += 1

# Calculer la limite
valeur, rang = suite_w()
print(f"Limite approchée : {valeur:.10f}")
print(f"Atteinte au rang : {rang}")
print(f"Vérification : ℓ/2 + 1 = {valeur/2 + 1:.10f}")`
  },
  {
    id: 4,
    title: "Visualisation graphique d'une suite",
    difficulty: "Moyen",
    statement: "Tracer avec matplotlib les 20 premiers termes de la suite définie par : $z_0 = 0, z_{n+1} = z_n^2 + 0.5$.",
    hint: "Utilisez `plt.plot()` pour afficher les termes.",
    correction: `import matplotlib.pyplot as plt

def suite_z(n):
    """Calcule les n premiers termes de z_{n+1} = z_n^2 + 0.5"""
    z = 0
    termes = [z]
    for i in range(1, n):
        z = z**2 + 0.5
        termes.append(z)
    return termes

termes = suite_z(20)
plt.plot(range(20), termes, 'bo-')
plt.xlabel('n')
plt.ylabel('z_n')
plt.title('Suite z_{n+1} = z_n^2 + 0.5')
plt.grid(True)
plt.show()`
  },
  {
    id: 5,
    title: "Suite de Syracuse",
    difficulty: "Moyen",
    statement: "On d\u00e9finit la suite $(u_n)$ par un premier terme $u_0 \\in \\mathbb{N}^*$ et :\\n- Si $u_n$ est pair, $u_{n+1} = u_n / 2$\\n- Si $u_n$ est impair, $u_{n+1} = 3u_n + 1$\\n\\n\u00c9crire une fonction temps_vol(u0) qui renvoie le plus petit $n$ tel que $u_n = 1$.",
    hint: "Utilisez une boucle while tant que u != 1.",
    correction: `def temps_vol(u0):
    u = u0
    n = 0
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3 * u + 1
        n += 1
    return n

# Test
print(f"Temps de vol pour 15 : {temps_vol(15)}")`
  },
  {
    id: 6,
    title: "Suite r\u00e9currente double",
    difficulty: "Difficile",
    statement: "Soit la suite d\u00e9finie par $u_0=1, u_1=1$ et $u_{n+2} = \\sqrt{u_{n+1} + u_n}$.\\n\\n\u00c9crire une fonction qui calcule $u_{100}$. Que constatez-vous sur la convergence ?",
    hint: "La suite semble converger vers le nombre d'or ?",
    correction: `import math

def suite_double(n):
    u_prev = 1
    u_curr = 1
    for _ in range(2, n + 1):
        u_next = math.sqrt(u_curr + u_prev)
        u_prev, u_curr = u_curr, u_next
    return u_curr

u100 = suite_double(100)
print(f"u_100 = {u100}")
# Converge vers une valeur proche de 1.618...`
  }
];

const OteriaSuitesNumeriquesExercicesPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={4}
      sessionTitle="Suites Numériques & Modélisation"
      description="Manipulez les suites (arithmétiques, géométriques, récurrentes) pour modéliser des évolutions temporelles."
      slug="suites-numeriques"
      duration="4h"
      level="Intermédiaire"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/recurrence-recursivite-exercices"
      nextChapterLink="/formation/oteria/fonctions-variable-reelle-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Implémenter des suites explicites et récurrentes</li>
            <li>Étudier les suites arithmétiques et géométriques</li>
            <li>Résoudre des problèmes de seuil avec la boucle <code>while</code></li>
            <li>Modéliser des phénomènes évolutifs (Syracuse, proies-prédateurs...)</li>
          </ul>
        </div>

        {/* ─── EXERCICES ────────────────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={
              <CodeBlock
                code={exercise.correction}
                title={`Solution: ${ exercise.title } `}
                language="python"
              />
            }
          >
            <div className="mb-4">
              <Badge
                  className={`${
  exercise.difficulty === 'Facile' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
  exercise.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
    'bg-rose-100 text-rose-800 hover:bg-rose-200'
} mb - 2`}
                  variant="secondary"
                >
                  {exercise.difficulty}
              </Badge>
              <div className="text-slate-700 leading-relaxed mb-4">
                <LatexRenderer latex={exercise.statement} />
              </div>
              
              {exercise.hint && (
                <details className="mt-2 text-sm text-slate-600">
                  <summary className="cursor-pointer font-medium text-amber-600 hover:text-amber-700 transition-colors">
                    💡 Indice
                  </summary>
                  <div className="mt-2 pl-4 border-l-2 border-amber-200 italic bg-amber-50/50 p-2 rounded-r">
                    <LatexRenderer latex={exercise.hint} />
                  </div>
                </details>
              )}
            </div>
          </ExerciseBlock>
        ))}

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaSuitesNumeriquesExercicesPage;
