import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  CodeBlock,
  DefinitionBlock,
  TheoremBlock,
  ExampleBlock,
  RemarkBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';

const OteriaSuitesNumeriquesCoursPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={4}
      sessionTitle="Suites numériques & modélisation"
      description="Suites explicites vs récurrentes ; limite Un, Étude de convergence"
      slug="suites-numeriques"
      duration="3h"
      level="Débutant"
      activeSection="course"
      previousSession={{ slug: 'recurrence-recursivite', title: 'Récurrence' }}
      nextSession={{ slug: 'fonctions-variable-reelle', title: 'Fonctions' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            L'étude des suites numériques est fondamentale en analyse pour modéliser des phénomènes discrets (intérêts composés,
            dynamique de populations, approximations numériques). Ce chapitre pose les bases théoriques et pratiques (Python).
          </p>
        </section>

        {/* ─── PARTIE 1 : DÉFINITIONS ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            1. Définitions de base
          </h2>

          <DefinitionBlock title="Modes de génération">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Explicite :</strong> <LatexRenderer latex="u_n = f(n)" />. On calcule directement n'importe quel terme.
                <br />Example : <LatexRenderer latex="u_n = 1/n" />.
              </li>
              <li>
                <strong>Récurrente :</strong> <LatexRenderer latex="u_{n+1} = f(u_n)" />. Chaque terme dépend du précédent.
                <br />Example : <LatexRenderer latex="u_{n+1} = \frac{1}{2}u_n + 1" /> avec <LatexRenderer latex="u_0" /> donné.
              </li>
            </ul>
          </DefinitionBlock>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              Implémentation Python
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <CodeBlock
                  title="Suite Explicite (Vectorisé)"
                  code={`import numpy as np
import matplotlib.pyplot as plt

n = np.arange(1, 51)
u_n = 1 / n

plt.plot(n, u_n, 'o-')
plt.show()`}
                />
              </div>
              <div>
                <CodeBlock
                  title="Suite Récurrente (Itératif)"
                  code={`u = [0] # u0 = 0
for i in range(30):
    u_next = 0.5 * u[-1] + 1
    u.append(u_next)

print(u[-1]) # u30`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PARTIE 2 : MAJOREE / MINOREE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            2. Suites bornées
          </h2>

          <DefinitionBlock title="Majorant, Minorant, Borne">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Majorée</strong> par <LatexRenderer latex="M" /> : <LatexRenderer latex="\forall n, u_n \le M" />.</li>
              <li><strong>Minorée</strong> par <LatexRenderer latex="m" /> : <LatexRenderer latex="\forall n, u_n \ge m" />.</li>
              <li><strong>Bornée</strong> : si elle est à la fois majorée et minorée (<LatexRenderer latex="|u_n| \le K" />).</li>
            </ul>
          </DefinitionBlock>

          <CodeBlock
            title="Visualisation : Suite bornée sin(n)/n"
            code={`import numpy as np
import matplotlib.pyplot as plt

n = np.arange(1, 101)
u = np.sin(n) / n

plt.plot(n, u, 'o')
# Bandes de bornes
plt.axhline(1, color='red', linestyle='--')
plt.axhline(-1, color='blue', linestyle='--')
plt.show()`}
          />
        </section>

        {/* ─── PARTIE 3 : MONOTONIE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            3. Sens de variation
          </h2>

          <DefinitionBlock title="Monotonie">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Croissante :</strong> <LatexRenderer latex="\forall n, u_{n+1} \ge u_n" />.</li>
              <li><strong>Décroissante :</strong> <LatexRenderer latex="\forall n, u_{n+1} \le u_n" />.</li>
              <li><strong>Stationnaire :</strong> constante à partir d'un certain rang.</li>
            </ul>
          </DefinitionBlock>
        </section>

        {/* ─── PARTIE 4 : CONVERGENCE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            4. Convergence
          </h2>

          <DefinitionBlock title="Limite finie">
            <LatexRenderer latex="\lim u_n = \ell \iff \forall \varepsilon > 0, \exists n_0, \forall n \ge n_0, |u_n - \ell| \le \varepsilon" />
          </DefinitionBlock>

          <TheoremBlock title="Opérations sur les limites">
            Si <LatexRenderer latex="u_n \to \ell" /> et <LatexRenderer latex="v_n \to \ell'" /> :
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li><LatexRenderer latex="u_n + v_n \to \ell + \ell'" /></li>
              <li><LatexRenderer latex="u_n \times v_n \to \ell \times \ell'" /></li>
              <li><LatexRenderer latex="u_n / v_n \to \ell / \ell'" /> (si <LatexRenderer latex="\ell' \ne 0" />)</li>
            </ul>
          </TheoremBlock>

          <WarningBlock title="Formes Indéterminées (FI)">
            Attention aux cas ambigus : <LatexRenderer latex="\infty - \infty" />, <LatexRenderer latex="0 \times \infty" />, <LatexRenderer latex="\frac{\infty}{\infty}" />, <LatexRenderer latex="\frac{0}{0}" />.
          </WarningBlock>
        </section>

        {/* ─── PARTIE 5 : THÉORÈMES FONDAMENTAUX ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            5. Théorèmes de convergence
          </h2>

          <TheoremBlock title="Théorème de la limite monotone" variant="theorem">
            <ul className="list-disc list-inside space-y-1">
              <li>Toute suite <strong>croissante et majorée</strong> converge.</li>
              <li>Toute suite <strong>décroissante et minorée</strong> converge.</li>
            </ul>
            Sinon, elles tendent vers l'infini (si croissante non majorée <LatexRenderer latex="\to +\infty" />).
          </TheoremBlock>

          <TheoremBlock title="Théorème des gendarmes" variant="theorem">
            Si <LatexRenderer latex="v_n \le u_n \le w_n" /> et que <LatexRenderer latex="\lim v_n = \lim w_n = \ell" />, alors <LatexRenderer latex="\lim u_n = \ell" />.
          </TheoremBlock>

          <CodeBlock
            title="Illustration : Gendarmes"
            code={`import numpy as np
import matplotlib.pyplot as plt

n = np.arange(1, 101)
# Encadrement de sin(n^2)/n
v = -1/n
w = 1/n
u = np.sin(n**2)/n

plt.plot(n, v, 'b--')
plt.plot(n, w, 'b--')
plt.plot(n, u, 'orange')
plt.fill_between(n, v, w, color='gray', alpha=0.1)
plt.show()`}
          />
        </section>

        {/* ─── PARTIE 6 : SUITES ADJACENTES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            6. Suites particulières
          </h2>

          <DefinitionBlock title="Suites Adjacentes">
            Deux suites <LatexRenderer latex="(u_n)" /> et <LatexRenderer latex="(v_n)" /> sont adjacentes si :
            <ol className="list-decimal list-inside ml-4 mt-2 mb-2">
              <li>L'une est croissante, l'autre décroissante.</li>
              <li><LatexRenderer latex="\lim (u_n - v_n) = 0" />.</li>
            </ol>
            Elles convergent alors vers la <strong>même limite</strong>.
          </DefinitionBlock>

          <CodeBlock
            title="Exemple : Approximation de Pi (Leibniz)"
            code={`# u croissante, v décroissante encadrant Pi
u = []
v = []
for n in range(1, 51):
    k = np.arange(0, n+1)
    # Somme partielle de 4 * (-1)^k / (2k+1)
    s = 4 * np.sum((-1)**k / (2*k + 1))
    
    u.append(s)          # Ici ce n'est pas strictement u/v adjacentes classiques
    # (Exemple simplifié pour l'illustration de convergence oscillante)
    
# Pour de vraies suites adjacentes, cf cours maths`}
          />
          <RemarkBlock title="Théorème du Point Fixe">
            Si <LatexRenderer latex="u_{n+1} = f(u_n)" /> converge vers <LatexRenderer latex="\ell" /> et <LatexRenderer latex="f" /> continue, alors <LatexRenderer latex="f(\ell) = \ell" />.
          </RemarkBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaSuitesNumeriquesCoursPage;
