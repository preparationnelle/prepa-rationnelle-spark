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

const OteriaVariablesAleatoiresCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={9}
      sessionTitle="Introduction aux Variables Aléatoires"
      description="Lois usuelles (Bernoulli, Binomiale...), Simulation et applications"
      slug="variables-aleatoires"
      duration="4h"
      level="Avancé"
      activeSection="course"
      previousSession={{ slug: 'probabilites-introduction', title: 'Introduction aux Probabilités' }}
      nextSession={{ slug: 'integrales-monte-carlo', title: 'Intégrales & Monte-Carlo' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Ce chapitre introduit la notion de variable aléatoire, un outil fondamental pour quantifier l'aléatoire. Nous étudierons les lois discrètes usuelles, leurs paramètres (espérance, variance) et comment les simuler en Python pour des applications comme la sécurité informatique.
          </p>
        </section>

        {/* ─── GÉNÉRALITÉS ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Généralités sur les variables aléatoires
          </h2>

          <DefinitionBlock title="Variable Aléatoire Réelle (V.A.R.)">
            <p className="mb-2">
              Une variable aléatoire <LatexRenderer latex="X" /> est une fonction de l'univers <LatexRenderer latex="\Omega" /> dans <LatexRenderer latex="\mathbb{R}" />.
            </p>
            <p className="mb-2">
              Son <strong>support</strong>, noté <LatexRenderer latex="\text{Supp}(X)" />, est l'ensemble des valeurs qu'elle peut prendre.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Discrète :</strong> Le support est fini ou dénombrable (ex: nombre de piles en <LatexRenderer latex="n" /> lancers).</li>
              <li><strong>Continue :</strong> Le support est un intervalle de <LatexRenderer latex="\mathbb{R}" /> (ex: temps d'attente).</li>
            </ul>
          </DefinitionBlock>

          <DefinitionBlock title="Fonction de répartition">
            <p className="mb-2">
              La fonction de répartition <LatexRenderer latex="F_X" /> caractérise la loi de <LatexRenderer latex="X" /> :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="F_X(x) = P(X \leq x)" />
            </div>
            <p className="text-sm text-slate-600">
              Elle est croissante, continue à droite, et <LatexRenderer latex="\lim_{-\infty} F = 0, \lim_{+\infty} F = 1" />.
            </p>
            <p className="text-sm text-slate-600 mt-1">
              <LatexRenderer latex="P(a < X \leq b) = F(b) - F(a)" />.
            </p>
          </DefinitionBlock>
        </section>

        {/* ─── LOIS DE PROBABILITÉ & MOMENTS ───────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Loi, Espérance, Variance
          </h2>

          <DefinitionBlock title="Loi de probabilité (Cas discret)">
            <p className="mb-2">
              La loi est donnée par les probabilités élémentaires <LatexRenderer latex="P(X=x_k)" /> pour tout <LatexRenderer latex="x_k \in \text{Supp}(X)" />.
            </p>
            <div className="text-center">
              <LatexRenderer latex="\sum_{x \in \text{Supp}(X)} P(X=x) = 1" />
            </div>
          </DefinitionBlock>

          <DefinitionBlock title="Espérance et Variance">
            <p className="mb-2"><strong>Espérance</strong> (moyenne pondérée) :</p>
            <div className="text-center mb-2">
              <LatexRenderer latex="E(X) = \sum_{x} x P(X=x)" />
            </div>
            <p className="mb-2"><strong>Variance</strong> (dispersion autour de la moyenne) :</p>
            <div className="text-center mb-2">
              <LatexRenderer latex="V(X) = E\big((X - E(X))^2\big) = E(X^2) - (E(X))^2" />
            </div>
            <p className="text-sm text-center">
              (La seconde égalité est la formule de <strong>König-Huygens</strong>)
            </p>
            <p className="mt-2"><strong>Écart-type :</strong> <LatexRenderer latex="\sigma(X) = \sqrt{V(X)}" /></p>
          </DefinitionBlock>
        </section>

        {/* ─── LOIS USUELLES DISCRÈTES ─────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Lois usuelles discrètes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DefinitionBlock title="Loi de Bernoulli B(p)">
              <p className="text-sm mb-2">Expérience binaire (Succès/Échec).</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><LatexRenderer latex="P(X=1) = p" /></li>
                <li><LatexRenderer latex="P(X=0) = 1-p" /></li>
                <li><LatexRenderer latex="E(X) = p" /></li>
                <li><LatexRenderer latex="V(X) = p(1-p)" /></li>
              </ul>
            </DefinitionBlock>

            <DefinitionBlock title="Loi Binomiale B(n, p)">
              <p className="text-sm mb-2">Nombre de succès en <LatexRenderer latex="n" /> essais indépendants.</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><LatexRenderer latex="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" /></li>
                <li><LatexRenderer latex="E(X) = np" /></li>
                <li><LatexRenderer latex="V(X) = np(1-p)" /></li>
              </ul>
            </DefinitionBlock>

            <DefinitionBlock title="Loi Géométrique G(p)">
              <p className="text-sm mb-2">Rang du premier succès.</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><LatexRenderer latex="P(X=k) = p(1-p)^{k-1}" /> (pour <LatexRenderer latex="k \geq 1" />)</li>
                <li><LatexRenderer latex="E(X) = 1/p" /></li>
                <li><LatexRenderer latex="V(X) = (1-p)/p^2" /></li>
              </ul>
            </DefinitionBlock>

            <DefinitionBlock title="Loi de Poisson P(λ)">
              <p className="text-sm mb-2">Événements rares.</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><LatexRenderer latex="P(X=k) = e^{-\lambda} \frac{\lambda^k}{k!}" /></li>
                <li><LatexRenderer latex="E(X) = \lambda" /></li>
                <li><LatexRenderer latex="V(X) = \lambda" /></li>
              </ul>
            </DefinitionBlock>
          </div>
        </section>

        {/* ─── SIMULATION PYTHON ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Simulation en Python
          </h2>

          <CodeBlock
            language="python"
            title="Génération de nombres aléatoires"
            code={`import random
import numpy.random as rd

# Bernoulli (p=0.5)
b = 1 if random.random() < 0.5 else 0

# Binomiale (n=10, p=0.3) - bibliothèque numpy recommandée
nb_succes = rd.binomial(10, 0.3)

# Géométrique (p=0.1)
rang = rd.geometric(0.1)

# Poisson (lambda=5)
evt = rd.poisson(5)`}
          />
        </section>

        {/* ─── CAS PRATIQUE : MOTS DE PASSE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Cas pratique : Sécurité des mots de passe
          </h2>

          <ExampleBlock title="Force brute">
            <p className="mb-2">
              Soit un mot de passe de longueur <LatexRenderer latex="L" /> utilisant un alphabet de taille <LatexRenderer latex="N" />.
            </p>
            <p className="mb-2">
              Nombre total de combinaisons : <LatexRenderer latex="N^L" />.
            </p>
            <p className="mb-4">
              Probabilité de deviner en un essai : <LatexRenderer latex="1/N^L" />.
            </p>

            <p className="font-semibold mb-2">Exemple concret :</p>
            <p className="mb-2">
              Alphabet complet (majuscules + minuscules + chiffres) : <LatexRenderer latex="N = 26+26+10 = 62" />.
              Longueur <LatexRenderer latex="L = 8" />.
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="62^8 \approx 2.18 \times 10^{14}" />
            </div>
            <p>
              Il faudrait des milliers d'années à un ordinateur standard pour tout tester, mais des fermes de calcul (GPU) peuvent aller beaucoup plus vite.
            </p>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Générateur de mot de passe robuste"
            code={`import random, string

def generate_password(length=12):
    # Alphabet : lettres + chiffres + ponctuation
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

print(generate_password())
# Ex: '8x!aP9_m2$kL'`}
          />
        </section>

        {/* ─── DOCUMENTATION PYTHON ────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Fiche Mémo Python & Statistiques
          </h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Lois de probabilité (NumPy)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 rounded-lg text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border p-2 text-left">Loi</th>
                    <th className="border p-2 text-left">Commande NumPy</th>
                    <th className="border p-2 text-left">Paramètres</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Binomiale</td>
                    <td className="border p-2"><code>rd.binomial(n, p)</code></td>
                    <td className="border p-2">n essais, proba p</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Géométrique</td>
                    <td className="border p-2"><code>rd.geometric(p)</code></td>
                    <td className="border p-2">proba succès p</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Poisson</td>
                    <td className="border p-2"><code>rd.poisson(lam)</code></td>
                    <td className="border p-2">lambda (<LatexRenderer latex="\lambda" />)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Uniforme [a, b[</td>
                    <td className="border p-2"><code>rd.uniform(a, b)</code></td>
                    <td className="border p-2">bornes a, b</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Normale</td>
                    <td className="border p-2"><code>rd.normal(mu, sigma)</code></td>
                    <td className="border p-2">moyenne, écart-type</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Statistiques descriptives</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 rounded-lg text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border p-2 text-left">Mesure</th>
                    <th className="border p-2 text-left">Commande NumPy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Moyenne</td>
                    <td className="border p-2"><code>np.mean(data)</code></td>
                  </tr>
                  <tr>
                    <td className="border p-2">Médiane</td>
                    <td className="border p-2"><code>np.median(data)</code></td>
                  </tr>
                  <tr>
                    <td className="border p-2">Variance</td>
                    <td className="border p-2"><code>np.var(data)</code></td>
                  </tr>
                  <tr>
                    <td className="border p-2">Écart-type</td>
                    <td className="border p-2"><code>np.std(data)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Visualisation (Matplotlib)</h3>
            <CodeBlock
              language="python"
              title="Exemple : Histogramme d'une loi Binomiale"
              code={`import matplotlib.pyplot as plt
import numpy.random as rd

# Génération des données
n, p = 20, 0.5
data = rd.binomial(n, p, size=1000)

# Tracé
plt.hist(data, bins=range(n+2), density=True, align='left', rwidth=0.8, color='skyblue', edgecolor='black')
plt.title(f"Loi Binomiale B({n}, {p})")
plt.xlabel("Nombre de succès")
plt.ylabel("Fréquence")
plt.show()`}
            />
          </div>

        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaVariablesAleatoiresCoursPage;
