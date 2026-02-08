import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import {
  ExerciseBlock,
  CodeBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const exercises = [
  {
    id: 1,
    title: "Tracer une courbe simple",
    difficulty: "Facile",
    objective: "Tracer la courbe de la fonction $f(x) = 7x^3 + 1$ sur l'intervalle $[-5, 5]$.",
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-5, 6)
y = 7 * x**3 + 1

plt.plot(x, y)
plt.title("Courbe de f(x) = 7x³ + 1")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.grid(True)
plt.show()`,
    tips: [
      "Utiliser `np.arange()` pour créer les valeurs de $x$",
      "La fonction `plt.plot(x, y)` trace la courbe",
      "Ajouter des titres et labels avec `plt.title`, `plt.xlabel`, `plt.ylabel`",
      "`plt.grid(True)` améliore la lisibilité"
    ]
  },
  {
    id: 2,
    title: "Représenter une suite numérique",
    difficulty: "Facile",
    objective: "Représenter les 10 premiers termes de la suite définie par $u_n = 3n - 4$.",
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np

# Définition de la suite
x = np.arange(10)
y = 3 * x - 4

# Tracé avec des points uniquement
plt.plot(x, y, linestyle='', marker='o')
plt.title("Suite u_n = 3n - 4")
plt.xlabel("n")
plt.ylabel("u_n")
plt.grid(True)
plt.show()

# Version raccourcie avec style 'g^' (triangles verts)
# plt.plot(x, y, 'g^')`,
    tips: [
      "Pour une suite, on utilise des points (markers) et non des lignes reliées",
      "Utiliser `linestyle=''` et `marker='o'`",
      "Les suites sont des fonctions discrètes (valeurs entières de $n$)"
    ]
  },
  {
    id: 3,
    title: "Tracer plusieurs courbes",
    difficulty: "Moyen",
    objective: "Montrer graphiquement que $\\forall x \\in [-5,5], e^x \\ge x + 1$ (inégalité de convexité).",
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np

# Définition de l'intervalle et des fonctions
x = np.arange(-5, 5.01, 0.01)
y = np.exp(x)
z = x + 1

# Tracé des deux courbes
plt.plot(x, y, label='e^x')
plt.plot(x, z, label='x + 1')
plt.title("Inégalité de convexité : e^x >= x + 1")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.show()`,
    tips: [
      "Faire plusieurs appels à `plt.plot()` superpose les courbes",
      "Un pas plus fin (0.01) donne une courbe plus lisse",
      "Utiliser `np.exp()` pour l'exponentielle",
      "`plt.legend()` affiche la légende définie par les labels"
    ]
  }
];

const OteriaFonctionsExercicesPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={5}
      sessionTitle="Fonctions de la variable réelle"
      description="Exercices pratiques : tracés de courbes, suites et comparaisons avec Matplotlib."
      slug="fonctions-variable-reelle"
      duration="2h"
      level="Débutant"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/suites-numeriques-exercices"
      nextChapterLink="/formation/oteria/polynomes-approximation-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Manipuler les fonctions avec Python (définition, appel, arguments)</li>
            <li>Tracer des courbes avec Matplotlib (<code>plot</code>, <code>show</code>, <code>grid</code>)</li>
            <li>Gérer les listes de valeurs (<code>numpy.arange</code>, <code>linspace</code>)</li>
            <li>Comprendre l'approximation numérique (visualisation)</li>
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
                code={exercise.pythonCode}
                title={`Solution Python : ${exercise.title}`}
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
                <LatexRenderer latex={exercise.objective} />
              </div>

              {exercise.tips && exercise.tips.length > 0 && (
                <div className="mt-4 bg-blue-50 p-4 rounded-md border border-blue-100">
                  <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2 text-sm">
                    💡 Points clés
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                    {exercise.tips.map((tip, idx) => (
                      <li key={idx}><LatexRenderer latex={tip} inline /></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ExerciseBlock>
        ))}

        {/* ─── CONSEILS ─────────────────────────────────────────────── */}
        <WarningBlock title="Conseils pratiques Matplotlib" variant="info">
          <ul className="space-y-2 text-blue-800 list-disc list-inside text-sm">
            <li>Idéal pour l'analyse scientifique et les mathématiques</li>
            <li>Utiliser <code>np.linspace(start, stop, num)</code> pour un nombre précis de points</li>
            <li>Toujours ajouter des labels aux axes pour la clarté</li>
            <li>La visualisation aide à comprendre le comportement des fonctions (croissance, limites)</li>
          </ul>
        </WarningBlock>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaFonctionsExercicesPage;
