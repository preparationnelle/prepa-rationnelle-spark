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

const OteriaPolynomesApproximationCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={6}
      sessionTitle="Polynômes & Dichotomie (II)"
      description="Degré, racines, division euclidienne, Algorithme de la dichotomie"
      slug="polynomes-approximation"
      duration="3h"
      level="Débutant"
      activeSection="course"
      previousSession={{ slug: 'fonctions-variable-reelle', title: 'Fonctions & Croissance' }}
      nextSession={{ slug: 'denombrement-paradoxes', title: 'Dénombrement & Paradoxes' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-6">
            Les polynômes sont des outils fondamentaux en algèbre, utilisés pour représenter des fonctions polynomiales et analyser leurs propriétés. Ce chapitre couvre les définitions, les opérations, la dérivation, les racines, la factorisation, et les relations entre racines et coefficients.
          </p>
        </section>

        {/* ─── POLYNÔMES ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Généralités sur les polynômes
          </h2>

          <DefinitionBlock title="Polynôme réel">
            <p className="mb-2">Un polynôme réel est une expression de la forme :</p>
            <div className="mb-2 text-center">
              <LatexRenderer latex="P(x) = a_0 + a_1 x + \dots + a_n x^n \quad (n \in \mathbb{N})" />
            </div>
            <p className="mb-2">où <LatexRenderer latex="a_i \in \mathbb{R}" />.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>S'il est non nul, son <strong>degré</strong> est le plus grand indice <LatexRenderer latex="n" /> tel que <LatexRenderer latex="a_n \neq 0" />.</li>
              <li><LatexRenderer latex="a_n" /> est appelé le <strong>coefficient dominant</strong>.</li>
              <li>Si <LatexRenderer latex="a_n = 1" />, on dit que <LatexRenderer latex="P" /> est <strong>unitaire</strong>.</li>
              <li>Par convention, le polynôme nul a pour degré <LatexRenderer latex="-\infty" />.</li>
            </ul>
            <p className="mt-2">
              On note <LatexRenderer latex="\mathbb{R}[X]" /> l'ensemble de tous les polynômes réels, et <LatexRenderer latex="\mathbb{R}_n[X]" /> l'ensemble des polynômes de degré <LatexRenderer latex="\leq n" />.
            </p>
          </DefinitionBlock>

          <DefinitionBlock title="Égalité de deux polynômes">
            <p>Deux polynômes non nuls sont identiques s'ils ont le même degré et si tous leurs coefficients correspondants sont égaux.</p>
          </DefinitionBlock>

          <RemarkBlock title="Opérations : Somme et Produit">
            <p className="mb-2">Pour <LatexRenderer latex="P, Q \in \mathbb{R}[X]" /> :</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><LatexRenderer latex="\deg(P + Q) \leq \max(\deg P, \deg Q)" /></li>
              <li><LatexRenderer latex="\deg(PQ) = \deg P + \deg Q" /></li>
            </ul>
          </RemarkBlock>

          <TheoremBlock title="Division Euclidienne">
            <p className="mb-2">
              Pour <LatexRenderer latex="A, B \in \mathbb{R}[X]" /> avec <LatexRenderer latex="B \neq 0" />, il existe un unique couple de polynômes <LatexRenderer latex="(Q, R)" /> tel que :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="A = B Q + R \quad \text{et} \quad \deg R < \deg B" />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              <LatexRenderer latex="Q" /> est le quotient, <LatexRenderer latex="R" /> est le reste.
            </p>
          </TheoremBlock>
        </section>

        {/* ─── DÉRIVATION ───────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Dérivation et Formule de Taylor
          </h2>

          <DefinitionBlock title="Polynôme dérivé">
            <p className="mb-2">Si <LatexRenderer latex="P(x) = \sum_{i=0}^n a_i x^i" />, alors son polynôme dérivé est :</p>
            <div className="text-center mb-2">
              <LatexRenderer latex="P'(x) = \sum_{i=1}^n i a_i x^{i-1}" />
            </div>
            <p>Le polynôme dérivé <LatexRenderer latex="P'" /> est nul si et seulement si <LatexRenderer latex="P" /> est constant.</p>
          </DefinitionBlock>

          <TheoremBlock title="Dérivées successives">
            <p className="mb-2">
              On définit par récurrence <LatexRenderer latex="P^{(0)} = P" /> et <LatexRenderer latex="P^{(k)} = (P^{(k-1)})'" />.
            </p>
            <p className="mb-2">Pour un polynôme de degré <LatexRenderer latex="n" />, si <LatexRenderer latex="k \leq n" /> :</p>
            <div className="text-center mb-2">
              <LatexRenderer latex="P^{(k)}(x) = \sum_{i=k}^n \frac{i!}{(i-k)!} a_i x^{i-k}, \quad \deg P^{(k)} = n - k" />
            </div>
            <p>Pour <LatexRenderer latex="k \geq n + 1" />, <LatexRenderer latex="P^{(k)} = 0" />.</p>
          </TheoremBlock>

          <TheoremBlock title="Formule de Taylor">
            <p className="mb-2">
              Pour tout <LatexRenderer latex="a \in \mathbb{R}" /> et tout polynôme <LatexRenderer latex="P" /> de degré <LatexRenderer latex="n" /> :
            </p>
            <div className="text-center font-semibold text-lg py-2">
              <LatexRenderer latex="P(x) = \sum_{k=0}^n \frac{P^{(k)}(a)}{k!} (x - a)^k" />
            </div>
          </TheoremBlock>
        </section>

        {/* ─── RACINES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Racines d'un polynôme
          </h2>

          <DefinitionBlock title="Racine">
            <p className="mb-2">
              Un réel <LatexRenderer latex="r" /> est une <strong>racine</strong> de <LatexRenderer latex="P" /> si <LatexRenderer latex="P(r) = 0" />.
            </p>
            <p>
              Ceci est équivalent à dire que <LatexRenderer latex="(x - r)" /> divise <LatexRenderer latex="P" />.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Nombre de racines">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Un polynôme non nul de degré <LatexRenderer latex="n" /> possède au plus <LatexRenderer latex="n" /> racines réelles.</li>
              <li>S'il possède <LatexRenderer latex="n" /> racines distinctes <LatexRenderer latex="r_1, \dots, r_n" />, alors <LatexRenderer latex="\prod_{i=1}^n (x - r_i)" /> divise <LatexRenderer latex="P" />.</li>
            </ul>
          </TheoremBlock>

          <DefinitionBlock title="Racine multiple">
            <p>
              On dit que <LatexRenderer latex="r" /> est une racine d'ordre <LatexRenderer latex="m \geq 1" /> (ou de multiplicité <LatexRenderer latex="m" />) si <LatexRenderer latex="(x - r)^m" /> divise <LatexRenderer latex="P" /> mais <LatexRenderer latex="(x - r)^{m+1}" /> ne le divise pas.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Factorisation dans R[X]">
            <p>
              Tout polynôme réel se factorise de manière unique (à l'ordre près des facteurs) en produit de :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Polynômes de degré 1 (racines réelles) ;</li>
              <li>Polynômes de degré 2 à discriminant strictement négatif (racines complexes conjuguées).</li>
            </ul>
          </TheoremBlock>
        </section>

        {/* ─── TRINÔMES ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Étude du Trinôme du Second Degré
          </h2>

          <DefinitionBlock title="Discriminant">
            <p className="mb-2">Soit <LatexRenderer latex="P(x) = a x^2 + b x + c" /> avec <LatexRenderer latex="a \neq 0" />.</p>
            <p className="mb-2">On appelle discriminant le réel <LatexRenderer latex="\Delta = b^2 - 4ac" />.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si <LatexRenderer latex="\Delta < 0" /> : aucune racine réelle.</li>
              <li>Si <LatexRenderer latex="\Delta = 0" /> : une racine double <LatexRenderer latex="x_0 = -\frac{b}{2a}" />. On a <LatexRenderer latex="P(x) = a(x - x_0)^2" />.</li>
              <li>Si <LatexRenderer latex="\Delta > 0" /> : deux racines réelles distinctes <LatexRenderer latex="x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}" />. On a <LatexRenderer latex="P(x) = a(x - x_1)(x - x_2)" />.</li>
            </ul>
          </DefinitionBlock>

          <TheoremBlock title="Signe du trinôme">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si <LatexRenderer latex="\Delta \leq 0" />, <LatexRenderer latex="P(x)" /> est toujours du signe de <LatexRenderer latex="a" /> (sauf en <LatexRenderer latex="x_0" /> où il s'annule si <LatexRenderer latex="\Delta=0" />).</li>
              <li>Si <LatexRenderer latex="\Delta > 0" />, <LatexRenderer latex="P(x)" /> est du signe de <LatexRenderer latex="a" /> à l'extérieur des racines (« à l'extérieur » de l'intervalle <LatexRenderer latex="[x_1, x_2]" />) et du signe de <LatexRenderer latex="-a" /> entre les racines.</li>
            </ul>
          </TheoremBlock>

          <TheoremBlock title="Relations coefficients-racines">
            <p className="mb-2">Si <LatexRenderer latex="\Delta \geq 0" /> et <LatexRenderer latex="x_1, x_2" /> sont les racines (éventuellement confondues) :</p>
            <div className="text-center font-semibold py-2">
              <LatexRenderer latex="x_1 + x_2 = -\frac{b}{a} \quad \text{et} \quad x_1 x_2 = \frac{c}{a}" />
            </div>
          </TheoremBlock>
        </section>

        {/* ─── BINÔME DE NEWTON ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Formule du Binôme de Newton
          </h2>

          <TheoremBlock title="Formule du Binôme">
            <p className="mb-2">Pour tous réels <LatexRenderer latex="a, b" /> et tout entier <LatexRenderer latex="n \geq 0" /> :</p>
            <div className="text-center font-semibold text-lg py-2">
              <LatexRenderer latex="(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k} = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k" />
            </div>
          </TheoremBlock>

          <ExampleBlock title="Nombre de parties d'un ensemble">
            <p>En prenant <LatexRenderer latex="a = 1" /> et <LatexRenderer latex="b = 1" />, on retrouve le nombre total de parties d'un ensemble à <LatexRenderer latex="n" /> éléments :</p>
            <div className="text-center mt-2">
              <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k} = 2^n" />
            </div>
          </ExampleBlock>
        </section>

        {/* ─── DICHOTOMIE ───────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Méthode de Dichotomie
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Objectif</h3>
            <p>
              Savoir implémenter en Python une méthode numérique pour approximer une solution de l'équation <LatexRenderer latex="f(x) = 0" /> sur un intervalle <LatexRenderer latex="[a, b]" />.
            </p>
          </div>

          <RemarkBlock title="Principe mathématique">
            <p className="mb-2">La méthode repose sur le <strong>Théorème des Valeurs Intermédiaires (TVI)</strong>.</p>
            <p className="mb-2">Si <LatexRenderer latex="f" /> est continue sur <LatexRenderer latex="[a,b]" /> et que <LatexRenderer latex="f(a) \cdot f(b) < 0" /> (changement de signe), alors il existe au moins une racine dans <LatexRenderer latex="]a,b[" />.</p>
            <p>L'algorithme consiste à couper l'intervalle en deux à chaque étape et à ne garder que la moitié où le changement de signe se produit, réduisant ainsi la largeur de l'intervalle de moitié à chaque itération.</p>
          </RemarkBlock>

          <CodeBlock
            language="python"
            title="Algorithme de Dichotomie"
            code={`def dichotomie(f, a, b, precision=1e-6):
    """
    Approximation d'une racine de f sur [a, b] par dichotomie.
    Hypothèse : f(a) et f(b) sont de signes opposés.
    """
    assert f(a) * f(b) <= 0, "Erreur : f(a) et f(b) doivent être de signes opposés"

    while (b - a) > precision:
        c = (a + b) / 2      # Calcul du milieu
        if f(a) * f(c) <= 0: # La racine est dans [a, c]
            b = c
        else:                # La racine est dans [c, b]
            a = c
            
    return (a + b) / 2       # On retourne le centre de l'intervalle final`}
          />

          <ExampleBlock title="Exemple d'utilisation">
            <p className="mb-4">
              Résoudre <LatexRenderer latex="x^3 - 2x - 1 = 0" /> sur <LatexRenderer latex="[1, 2]" />.
            </p>
            <CodeBlock
              language="python"
              code={`def f(x):
    return x**3 - 2*x - 1

sol = dichotomie(f, 1, 2, 1e-6)
print(f"Solution approchée : {sol}")
# Résultat attendu : environ 1.618034 (qui est le nombre d'or)`}
            />
          </ExampleBlock>

          <ExampleBlock title="Exercice : Méthode de Babylone (Héron)">
            <p className="mb-2">
              Une autre méthode d'approximation célèbre est celle de Babylone pour calculer <LatexRenderer latex="\sqrt{a}" />.
            </p>
            <p className="mb-2">
              Elle utilise la suite récurrente définie par <LatexRenderer latex="u_0 = 1" /> et <LatexRenderer latex="u_{n+1} = \frac{1}{2}(u_n + \frac{a}{u_n})" />.
            </p>
            <CodeBlock
              language="python"
              title="Implémentation Python"
              isCollapsible
              code={`import numpy as np

def racine_carree(a, epsilon=1e-6):
    assert a > 0, "a doit être positif"
    
    u = 1.0  # u_0
    x = 0.5 * (u + a/u) # u_1
    
    # On itère tant que la différence entre deux termes successifs est grande
    while abs(x - u) > epsilon:
        u = x
        x = 0.5 * (u + a/u)
        
    return x

# Test
val = 2
approx = racine_carree(val)
print(f"Racine de {val} approx : {approx}")
print(f"Valeur numpy : {np.sqrt(val)}")`}
            />
          </ExampleBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaPolynomesApproximationCoursPage;
