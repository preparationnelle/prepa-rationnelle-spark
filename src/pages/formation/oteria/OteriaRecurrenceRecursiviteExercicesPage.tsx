import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import {
  ExerciseBlock,
  CodeBlock,
} from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaRecurrenceRecursiviteExercicesPage: React.FC = () => {
  const exercises = [
    {
      id: 1,
      title: "Sommes des puissances",
      difficulty: "Facile",
      statement: "Écrire une fonction `somme_carres(n)` qui calcule $S_n = \\sum_{k=1}^n k^2$ en utilisant une boucle `for`.",
      hint: "Initialisez une variable `S = 0` et ajoutez `k**2` à chaque itération.",
      correction: `def somme_carres(n):
    S = 0
    for k in range(1, n + 1):
        S += k**2
    return S

# Test
print(somme_carres(5))  # 55`
    },
    {
      id: 2,
      title: "Sommes télescopiques",
      difficulty: "Moyen",
      statement: "Calculer $S_n = \\sum_{k=1}^n \\ln\\left(1 + \\frac{1}{k}\\right)$.\n\n1. Simplifier le terme général.\n2. Écrire une fonction Python pour vérifier le résultat théorique.",
      hint: "Utilisez $\\ln(1 + 1/k) = \\ln((k+1)/k) = \\ln(k+1) - \\ln(k)$.",
      correction: `import math

def somme_telescopique(n):
    # Méthode "naïve" (calcul direct)
    S = 0
    for k in range(1, n + 1):
        S += math.log(1 + 1/k)
    return S

# Vérification avec la formule théorique ln(n+1)
n = 10
print(f"Calculé : {somme_telescopique(n)}")
print(f"Théorique : {math.log(n + 1)}")`
    },
    {
      id: 3,
      title: "Calcul de produits",
      difficulty: "Moyen",
      statement: "Écrire une fonction `produit_pairs(n)` qui calcule le produit des nombres pairs inférieurs ou égaux à $n$ : $P_n = \\prod_{k=1}^{\\lfloor n/2 \\rfloor} (2k)$.",
      hint: "Attention à l'élément neutre du produit qui est 1 (et non 0).",
      correction: `def produit_pairs(n):
    P = 1
    for k in range(1, n // 2 + 1):
        P *= 2 * k
    return P

# Test pour n=10 (2*4*6*8*10 = 3840)
print(produit_pairs(10))`
    },
    {
      id: 4,
      title: "Triangle de Pascal",
      difficulty: "Difficile",
      statement: "Écrire une fonction `pascal(n)` qui retourne la $n$-ième ligne du triangle de Pascal sous forme de liste, en utilisant la relation de Pascal : $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$.",
      hint: "On peut construire la ligne n à partir de la ligne n-1.",
      correction: `def pascal(n):
    if n == 0:
        return [1]
    
    ligne_prec = pascal(n - 1)
    ligne = [1]  # Premier 1
    
    # Termes intermédiaires
    for k in range(1, n):
        ligne.append(ligne_prec[k-1] + ligne_prec[k])
        
    ligne.append(1)  # Dernier 1
    return ligne

# Affichage des 5 premières lignes
for i in range(6):
    print(pascal(i))`
    },
    {
      id: 5,
      title: "Suite de Fibonacci",
      difficulty: "Classique",
      statement: "La suite de Fibonacci est définie par $u_0=0, u_1=1$ et $u_{n+2} = u_{n+1} + u_n$.\n\nÉcrire une fonction itérative (avec une boucle) pour calculer $u_n$.",
      hint: "Gardez en mémoire les deux derniers termes pour calculer le suivant.",
      correction: `def fibonacci(n):
    if n == 0: return 0
    if n == 1: return 1
    
    u_prev = 0  # u_0
    u_curr = 1  # u_1
    
    for _ in range(2, n + 1):
        u_next = u_curr + u_prev
        u_prev, u_curr = u_curr, u_next
        
    return u_curr

print([fibonacci(n) for n in range(10)])`
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={3}
      sessionTitle="Sommes, produits & coefficients binomiaux"
      description="Exercices pratiques sur le calcul de sommes, produits et la récursivité"
      slug="recurrence-recursivite"
      duration="4h"
      level="Intermédiaire"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/python-bases-exercices"
      nextChapterLink="/formation/oteria/suites-numeriques-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Calculer des sommes et des produits (télescopiques, usuels)</li>
            <li>Manipuler le symbole <LatexRenderer latex="\Sigma" inline /> et <LatexRenderer latex="\Pi" inline /></li>
            <li>Comprendre et implémenter la récursivité</li>
            <li>Connaître la formule du binôme et le triangle de Pascal</li>
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
                title={`Solution : ${exercise.title}`}
                language="python"
              />
            }
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

export default OteriaRecurrenceRecursiviteExercicesPage;
