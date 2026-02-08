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

const OteriaIntegralesMonteCarloCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={10}
      sessionTitle="Analyse de lois & Monte-Carlo"
      description="Approximation d'intégrales, Histogrammes, Théorèmes limites"
      slug="integrales-monte-carlo"
      duration="3h"
      level="Avancé"
      activeSection="course"
      previousSession={{ slug: 'variables-aleatoires', title: 'Variables Aléatoires' }}
      nextSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Ce chapitre approfondit l'étude des variables aléatoires par la simulation (méthode de Monte-Carlo) et l'analyse asymptotique (théorèmes limites). Ces outils sont essentiels pour estimer des quantités complexes (aires, probabilités) quand le calcul exact est impossible.
          </p>
        </section>

        {/* ─── HISTOGRAMMES ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Histogrammes et Fréquences
          </h2>

          <DefinitionBlock title="Histogramme">
            <p className="mb-2">
              Un histogramme représente la distribution des fréquences d'une série de données.
            </p>
            <p className="mb-2">
              Pour une classe <LatexRenderer latex="C" />, la fréquence est :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="f(C) = \frac{\text{nombre de valeurs dans } C}{n}" />
            </div>
          </DefinitionBlock>

          <RemarkBlock title="Utilité">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Visualiser la répartition des données.</li>
              <li>Comparer une distribution empirique (simulée) à une loi théorique.</li>
              <li>Détecter des anomalies ou des modes.</li>
            </ul>
          </RemarkBlock>
        </section>

        {/* ─── SIMULATION : MÉTHODE D'INVERSION ────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Simulation par Inversion
          </h2>

          <TheoremBlock title="Méthode de la transformée inverse">
            <p className="mb-2">
              Soit <LatexRenderer latex="F" /> une fonction de répartition continue et strictement croissante.
              Si <LatexRenderer latex="U \sim \mathcal{U}([0,1])" />, alors la variable aléatoire :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="X = F^{-1}(U)" />
            </div>
            <p>
              suit la loi définie par <LatexRenderer latex="F" />.
            </p>
          </TheoremBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Loi Exponentielle (<LatexRenderer latex="\lambda" />)</h3>
              <p className="text-sm mb-2"><LatexRenderer latex="F(x) = 1 - e^{-\lambda x} \implies F^{-1}(u) = \frac{-\ln(1-u)}{\lambda}" /></p>
              <CodeBlock language="python" code={`import math, random
def exp_sim(lam):
    u = random.random()
    return -math.log(1-u)/lam`} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Loi Géométrique (<LatexRenderer latex="p" />)</h3>
              <p className="text-sm mb-2">Discrétisation de l'exponentielle ou recherche séquentielle.</p>
              <CodeBlock language="python" code={`def geo_sim(p):
    k = 1
    while random.random() > p:
        k += 1
    return k`} />
            </div>
          </div>
        </section>

        {/* ─── INÉGALITÉS FONDAMENTALES ────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Inégalités Fondamentales
          </h2>

          <TheoremBlock title="Inégalité de Markov">
            <p className="mb-2">
              Si <LatexRenderer latex="Z" /> est une variable positive et <LatexRenderer latex="a > 0" /> :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="P(Z \geq a) \leq \frac{E(Z)}{a}" />
            </div>
          </TheoremBlock>

          <TheoremBlock title="Inégalité de Bienaymé-Tchebychev">
            <p className="mb-2">
              Pour tout <LatexRenderer latex="\varepsilon > 0" /> :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="P(|Z - E(Z)| \geq \varepsilon) \leq \frac{V(Z)}{\varepsilon^2}" />
            </div>
          </TheoremBlock>
        </section>

        {/* ─── THÉORÈMES LIMITES ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Convergence et Théorèmes Limites
          </h2>

          <DefinitionBlock title="Convergence en probabilité">
            <p className="mb-2">
              <LatexRenderer latex="Z_n \xrightarrow{P} Z" /> si <LatexRenderer latex="\forall \varepsilon > 0, P(|Z_n - Z| \geq \varepsilon) \to 0" />.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Loi Faible des Grands Nombres (LGN)">
            <p className="mb-2">
              Si <LatexRenderer latex="(X_i)" /> sont i.i.d. avec <LatexRenderer latex="E(X_i)=\mu" />, alors la moyenne empirique converge vers <LatexRenderer latex="\mu" /> :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i \xrightarrow{P} \mu" />
            </div>
          </TheoremBlock>

          <RemarkBlock title="Application : Estimation">
            <p>
              Pour estimer une probabilité <LatexRenderer latex="p = P(A)" />, on répète l'expérience <LatexRenderer latex="n" /> fois. La fréquence de succès converge vers <LatexRenderer latex="p" />.
            </p>
          </RemarkBlock>

          <TheoremBlock title="Théorème Central Limite (TCL)">
            <p className="mb-2">
              Si <LatexRenderer latex="(X_i)" /> sont i.i.d. avec espérance <LatexRenderer latex="\mu" /> et variance <LatexRenderer latex="\sigma^2" />, alors la variable centrée réduite converge en loi vers une loi Normale standard :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="\frac{\sqrt{n}(\overline{X}_n - \mu)}{\sigma} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />
            </div>
          </TheoremBlock>
        </section>

        {/* ─── MÉTHODE DE MONTE-CARLO ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Méthode de Monte-Carlo
          </h2>

          <p className="mb-4">
            La méthode de Monte-Carlo utilise la LGN pour approximer des intégrales (aires) par des moyennes statistiques.
          </p>

          <ExampleBlock title="Calcul de π">
            <p className="mb-2">
              On tire <LatexRenderer latex="n" /> points uniformément dans le carré <LatexRenderer latex="[0,1] \times [0,1]" />.
            </p>
            <p className="mb-2">
              La probabilité qu'un point tombe dans le quart de cercle unité (<LatexRenderer latex="x^2+y^2 \leq 1" />) est le rapport des aires : <LatexRenderer latex="\frac{\pi/4}{1} = \frac{\pi}{4}" />.
            </p>
            <p className="mb-2">
              En comptant la proportion <LatexRenderer latex="f" /> de points dans le cercle, on a <LatexRenderer latex="f \approx \frac{\pi}{4}" />, donc <LatexRenderer latex="\pi \approx 4f" />.
            </p>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Estimation de π par Monte-Carlo"
            code={`import random

def monte_carlo_pi(n_points=100000):
    inside = 0
    for _ in range(n_points):
        x = random.random()
        y = random.random()
        if x*x + y*y <= 1:
            inside += 1
    
    return 4 * inside / n_points

print(f"Approximation: {monte_carlo_pi()}")
# Convergence en 1/sqrt(n)`}
          />
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaIntegralesMonteCarloCoursPage;
