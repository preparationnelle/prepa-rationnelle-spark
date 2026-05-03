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

const OteriaFonctionsVariableReelleCoursPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={5}
      sessionTitle="Fonctions, croissance, polynômes (I)"
      description="Parité, périodicité, continuité (aperçu), Théorème de croissance comparée"
      slug="fonctions-variable-reelle"
      duration="3h"
      level="Débutant"
      activeSection="course"
      previousSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
      nextSession={{ slug: 'polynomes-approximation', title: 'Polynômes & Dichotomie' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Les fonctions d'une variable réelle jouent un rôle central en analyse mathématique.
            Elles permettent d'étudier des phénomènes continus, de modéliser des variations et d'analyser des comportements limites.
          </p>
        </section>

        {/* ─── PARTIE 1 : ENSEMBLES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            1. Opérations sur les ensembles
          </h2>

          <DefinitionBlock title="Inclusion et Égalité">
            <ul className="list-disc list-inside space-y-2">
              <li><LatexRenderer latex="A \subset B" /> : Tout élément de A est dans B.</li>
              <li><LatexRenderer latex="A = B" /> : <LatexRenderer latex="A \subset B" /> et <LatexRenderer latex="B \subset A" />.</li>
            </ul>
          </DefinitionBlock>

          <DefinitionBlock title="Intersection et Réunion">
            <ul className="list-disc list-inside space-y-2">
              <li><LatexRenderer latex="x \in A \cap B \iff x \in A \text{ et } x \in B" /></li>
              <li><LatexRenderer latex="x \in A \cup B \iff x \in A \text{ ou } x \in B" /></li>
            </ul>
          </DefinitionBlock>

          <TheoremBlock title="Lois de Morgan">
            <ul className="list-disc list-inside space-y-2">
              <li><LatexRenderer latex="\overline{A \cap B} = \overline{A} \cup \overline{B}" /></li>
              <li><LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" /></li>
            </ul>
          </TheoremBlock>
        </section>

        {/* ─── PARTIE 2 : APPLICATIONS ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            2. Applications et bijections
          </h2>

          <DefinitionBlock title="Types d'applications">
            Soit <LatexRenderer latex="f: E \to F" />.
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Injective :</strong> <LatexRenderer latex="f(x) = f(y) \implies x = y" />. (Tout élément de F a au plus un antécédent).</li>
              <li><strong>Surjective :</strong> <LatexRenderer latex="\forall y \in F, \exists x \in E, f(x) = y" />. (Tout élément de F a au moins un antécédent).</li>
              <li><strong>Bijective :</strong> Injective et Surjective. (Tout élément de F a exactement un antécédent).</li>
            </ul>
          </DefinitionBlock>

          <TheoremBlock title="Théorème de la bijection monotone" variant="theorem">
            Si <LatexRenderer latex="f" /> est <strong>continue</strong> et <strong>strictement monotone</strong> sur un intervalle <LatexRenderer latex="I" />, alors <LatexRenderer latex="f" /> réalise une bijection de <LatexRenderer latex="I" /> sur <LatexRenderer latex="f(I)" />.
            <br />
            De plus, sa réciproque <LatexRenderer latex="f^{-1}" /> a le même sens de variation que <LatexRenderer latex="f" />.
          </TheoremBlock>
        </section>

        {/* ─── PARTIE 3 : VALEUR ABSOLUE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            3. Valeur absolue
          </h2>

          <DefinitionBlock title="Valeur Absolue">
            <LatexRenderer latex="|x| = x" /> si <LatexRenderer latex="x \ge 0" />, <LatexRenderer latex="-x" /> si <LatexRenderer latex="x < 0" />.
          </DefinitionBlock>

          <TheoremBlock title="Inégalité Triangulaire">
            <LatexRenderer latex="|x + y| \le |x| + |y|" />
          </TheoremBlock>
        </section>

        {/* ─── PARTIE 4 : GÉNÉRALITÉS FONCTIONS ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            4. Généralités sur les fonctions
          </h2>

          <DefinitionBlock title="Parité et Périodicité">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Paire :</strong> <LatexRenderer latex="\forall x, f(-x) = f(x)" /> (Symétrie axe Sy).</li>
              <li><strong>Impaire :</strong> <LatexRenderer latex="\forall x, f(-x) = -f(x)" /> (Symétrie origine O).</li>
              <li><strong>Périodique (T) :</strong> <LatexRenderer latex="\forall x, f(x+T) = f(x)" />.</li>
            </ul>
          </DefinitionBlock>

          <CodeBlock
            title="Visualisation : Parité"
            code={`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-3, 3, 100)

# Fonction paire : f(x) = x²
y_paire = x**2

# Fonction impaire : g(x) = x³
y_impaire = x**3

plt.figure(figsize=(10, 5))
plt.plot(x, y_paire, label='f(x) = x² (paire)', color='blue')
plt.plot(x, y_impaire, label='g(x) = x³ (impaire)', color='red')
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)
plt.legend()
plt.title("Parité des fonctions")
plt.grid(True)
plt.show()`}
          />
        </section>

        {/* ─── PARTIE 5 : CONTINUITÉ ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            5. Continuité
          </h2>

          <DefinitionBlock title="Continuité en un point">
            <LatexRenderer latex="f" /> est continue en <LatexRenderer latex="x_0" /> si <LatexRenderer latex="\lim_{x \to x_0} f(x) = f(x_0)" />.
          </DefinitionBlock>

          <TheoremBlock title="Théorème des Valeurs Intermédiaires (TVI)" variant="theorem">
            Si <LatexRenderer latex="f" /> est continue sur <LatexRenderer latex="[a, b]" />, alors pour tout <LatexRenderer latex="y" /> compris entre <LatexRenderer latex="f(a)" /> et <LatexRenderer latex="f(b)" />, il existe <LatexRenderer latex="c \in [a, b]" /> tel que <LatexRenderer latex="f(c) = y" />.
          </TheoremBlock>

          <RemarkBlock title="Application">
            Le TVI assure l'existence de solutions à l'équation <LatexRenderer latex="f(x) = k" />. Si <LatexRenderer latex="f" /> est strictement monotone, la solution est unique (Corollaire du TVI).
          </RemarkBlock>
        </section>

        {/* ─── PARTIE 6 : LIMITES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            6. Limites
          </h2>

          <DefinitionBlock title="Limite finie en +∞">
            <LatexRenderer latex="\lim_{x \to +\infty} f(x) = \ell \iff \forall \varepsilon > 0, \exists A > 0, x > A \implies |f(x) - \ell| < \varepsilon" />.
          </DefinitionBlock>

          <WarningBlock title="Croissances Comparées (en +∞)">
            <ul className="list-disc list-inside space-y-2">
              <li><LatexRenderer latex="\lim \frac{\ln x}{x} = 0" /></li>
              <li><LatexRenderer latex="\lim \frac{e^x}{x^n} = +\infty" /> (l'exponentielle l'emporte sur les puissances)</li>
              <li><LatexRenderer latex="\lim x \ln x = 0" /> (en <LatexRenderer latex="0^+" />)</li>
            </ul>
          </WarningBlock>

          <TheoremBlock title="Limites usuelles en 0">
            <ul className="list-disc list-inside space-y-2">
              <li><LatexRenderer latex="\lim_{x \to 0} \frac{\sin x}{x} = 1" /></li>
              <li><LatexRenderer latex="\lim_{x \to 0} \frac{e^x - 1}{x} = 1" /></li>
              <li><LatexRenderer latex="\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1" /></li>
            </ul>
          </TheoremBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaFonctionsVariableReelleCoursPage;
