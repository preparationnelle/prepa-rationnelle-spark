import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  CodeBlock,
  DefinitionBlock,
  RemarkBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';

const OteriaRecurrenceRecursiviteCoursPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={3}
      sessionTitle="Sommes, produits & coefficients binomiaux"
      description="Calcul de sommes et produits finis, coefficients binomiaux — Implémentation Python et méthodes numériques"
      slug="recurrence-recursivite"
      duration="4h"
      level="Intermédiaire"
      activeSection="course"
      previousSession={{ slug: 'python-bases', title: 'Bases de Python' }}
      nextSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Ce module couvre les méthodes d'analyse numérique essentielles en Python : calcul de sommes et produits finis,
            étude des suites par récurrence, et calcul de coefficients binomiaux. Vous apprendrez à implémenter ces algorithmes
            avec différentes approches (boucles, listes, NumPy) pour optimiser performance et lisibilité.
          </p>

          <DefinitionBlock title="Objectifs">
            <ul className="list-disc list-inside space-y-1">
              <li>Calculer des sommes finies avec 3 méthodes (boucle, sum, numpy).</li>
              <li>Implémenter des produits et factorielles.</li>
              <li>Manipuler les coefficients binomiaux et le triangle de Pascal.</li>
            </ul>
          </DefinitionBlock>
        </section>

        {/* ─── PARTIE 1 : SOMMES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            1. Calcul de sommes en Python
          </h2>

          <DefinitionBlock title="Notation Mathématique">
            <p className="mb-2">
              La notation <LatexRenderer latex="\displaystyle\sum_{k=1}^{n} u_k" /> signifie : <LatexRenderer latex="u_1 + u_2 + \dots + u_n" />.
            </p>
            <p>
              Exemple : <LatexRenderer latex="\displaystyle\sum_{k=1}^{5} k^2 = 1+4+9+16+25 = 55" />
            </p>
          </DefinitionBlock>

          <div className="my-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
                Méthode 1 : Boucle for
              </h3>
              <CodeBlock
                title="Approche impérative classique"
                code={`n = 5
S = 0
for k in range(1, n+1):
    S += k**2  # pour ∑k²
print(S)  # Affiche 55`}
              />
              <RemarkBlock title="Note">
                Fonctionne dans tous les langages. Attention à <code>range(1, n+1)</code> qui va jusqu'à <code>n</code> inclus.
              </RemarkBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
                Méthode 2 : Compréhension de liste
              </h3>
              <CodeBlock
                title="Approche fonctionnelle (Pythonique)"
                code={`n = 5
# On crée la liste des termes, puis on somme
S = sum([k**2 for k in range(1, n+1)])
print(S)  # 55`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
                Méthode 3 : Vectorisation NumPy
              </h3>
              <CodeBlock
                title="Approche haute performance"
                code={`import numpy as np

n = 5
k = np.arange(1, n+1)  # Tableau [1, 2, 3, 4, 5]
S = np.sum(k**2)
print(S)  # 55`}
              />
              <RemarkBlock title="Performance">
                Idéal pour <LatexRenderer latex="n > 1000" />. Évite les boucles lentes de Python.
              </RemarkBlock>
            </div>
          </div>
        </section>

        {/* ─── PARTIE 2 : PRODUITS ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            2. Calcul de produits (Pi)
          </h2>

          <WarningBlock title="Élément neutre">
            Pour une somme, on initialise à <strong>0</strong>.<br />
            Pour un produit <LatexRenderer latex="\prod" />, on initialise à <strong>1</strong> ! (Car <LatexRenderer latex="x \times 1 = x" />).
          </WarningBlock>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              Exemple : Factorielle
            </h3>
            <CodeBlock
              code={`n = 5
P = 1  # IMPORTANT : initialiser à 1
for k in range(1, n+1):
    P *= k
print(P)  # 120 (1*2*3*4*5)`}
            />
          </div>
        </section>

        {/* ─── PARTIE 3 : COEFFICIENTS BINOMIAUX ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            3. Coefficients binomiaux
          </h2>

          <DefinitionBlock title="Formule">
            Le coefficient <LatexRenderer latex="\binom{n}{k}" /> (ou "k parmi n") vaut :
            <div className="text-center my-2">
              <LatexRenderer latex="\binom{n}{k} = \frac{n!}{k!(n-k)!}" displayMode={true} />
            </div>
          </DefinitionBlock>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              Utilisation de math.comb
            </h3>
            <p className="mb-4">
              Depuis Python 3.8, la fonction est native et optimisée.
            </p>
            <CodeBlock
              code={`from math import comb

# C(n, k)
print(comb(5, 2))   # Affiche 10
print(comb(10, 5))  # Affiche 252

# Cas limites gérés automatiquement :
print(comb(5, 0))   # 1
print(comb(5, 6))   # 0`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              Application : Triangle de Pascal
            </h3>
            <CodeBlock
              code={`from math import comb

def triangle_pascal(n):
    """Affiche les n premières lignes"""
    for i in range(n):
        # Liste en compréhension pour la ligne i
        ligne = [comb(i, k) for k in range(i+1)]
        print(ligne)

triangle_pascal(5)
# [1]
# [1, 1]
# [1, 2, 1]
# [1, 3, 3, 1]
# [1, 4, 6, 4, 1]`}
            />
          </div>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaRecurrenceRecursiviteCoursPage;
