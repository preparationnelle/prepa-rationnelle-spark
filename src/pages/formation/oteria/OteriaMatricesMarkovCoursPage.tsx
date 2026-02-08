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

const OteriaMatricesMarkovCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={11}
      sessionTitle="Matrices & Chaînes de Markov"
      description="Opérations matricielles, Inversion, Diagonalisation, Chaînes de Markov"
      slug="matrices-markov"
      duration="4h"
      level="Avancé"
      activeSection="course"
      previousSession={{ slug: 'integrales-monte-carlo', title: 'Analyse de lois & Monte-Carlo' }}
      nextSession={{ slug: 'matrices-stochastiques', title: 'Arithmétique & Cryptographie' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            L'algèbre linéaire est le pilier du calcul scientifique et de l'IA. Nous étudierons ici les matrices, leur manipulation, et une application majeure : les chaînes de Markov, utilisées pour modéliser des systèmes évoluant dans le temps (météo, navigation web, files d'attente).
          </p>
        </section>

        {/* ─── MATRICES : DÉFINITIONS ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Matrices : Définitions et Opérations
          </h2>

          <DefinitionBlock title="Matrice">
            <p className="mb-2">
              Une matrice <LatexRenderer latex="A \in \mathcal{M}_{n,p}(\mathbb{R})" /> est un tableau de nombres à <LatexRenderer latex="n" /> lignes et <LatexRenderer latex="p" /> colonnes.
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="A = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}" />
            </div>
          </DefinitionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <DefinitionBlock title="Produit Matriciel">
              <p className="mb-2">
                Si <LatexRenderer latex="A \in \mathcal{M}_{n,p}" /> et <LatexRenderer latex="B \in \mathcal{M}_{p,q}" />, alors <LatexRenderer latex="C = AB \in \mathcal{M}_{n,q}" /> avec :
              </p>
              <div className="text-center">
                <LatexRenderer latex="c_{i,j} = \sum_{k=1}^p a_{i,k} b_{k,j}" />
              </div>
            </DefinitionBlock>

            <DefinitionBlock title="Transposée">
              <p className="mb-2">
                La transposée <LatexRenderer latex="A^T" /> s'obtient en échangeant lignes et colonnes : <LatexRenderer latex="(A^T)_{i,j} = A_{j,i}" />.
              </p>
            </DefinitionBlock>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <DefinitionBlock title="Matrices particulières">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Diagonale :</strong> <LatexRenderer latex="a_{i,j} = 0" /> si <LatexRenderer latex="i \neq j" />.</li>
                <li><strong>Triangulaire Sup :</strong> <LatexRenderer latex="a_{i,j} = 0" /> si <LatexRenderer latex="i > j" />.</li>
                <li><strong>Symétrique :</strong> <LatexRenderer latex="A^T = A" />.</li>
                <li><strong>Orthogonale :</strong> <LatexRenderer latex="A^T A = I_n" />.</li>
              </ul>
            </DefinitionBlock>

            <DefinitionBlock title="Trace et Déterminant">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Trace :</strong> Somme des éléments diagonaux. <LatexRenderer latex="\text{Tr}(AB) = \text{Tr}(BA)" />.</li>
                <li><strong>Déterminant :</strong> <LatexRenderer latex="\det(AB) = \det(A)\det(B)" />. <LatexRenderer latex="A" /> inversible ssi <LatexRenderer latex="\det(A) \neq 0" />.</li>
              </ul>
            </DefinitionBlock>
          </div>
        </section>

        {/* ─── INVERSION ───────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Inversion de Matrices
          </h2>

          <TheoremBlock title="Inverse d'une matrice 2x2">
            <p className="mb-2">
              Si <LatexRenderer latex="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> et <LatexRenderer latex="ad-bc \neq 0" /> :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
            </div>
          </TheoremBlock>

          <CodeBlock
            language="python"
            title="Inverse avec NumPy"
            code={`import numpy as np

A = np.array([[1, 2], [3, 4]])
try:
    A_inv = np.linalg.inv(A)
    print("Inverse :\\n", A_inv)
except np.linalg.LinAlgError:
    print("Matrice non inversible")`}
          />
        </section>

        {/* ─── CHAÎNES DE MARKOV ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Chaînes de Markov
          </h2>

          <DefinitionBlock title="Chaîne de Markov">
            <p className="mb-2">
              Un processus <LatexRenderer latex="(X_n)" /> sur un espace d'états fini <LatexRenderer latex="E" /> est une chaîne de Markov si l'avenir ne dépend que du présent (pas du passé).
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="P(X_{n+1}=j \mid X_n=i, X_{n-1}, \dots) = P(X_{n+1}=j \mid X_n=i)" />
            </div>
          </DefinitionBlock>

          <DefinitionBlock title="Matrice de Transition & Stochastique">
            <p className="mb-2">
              La matrice <LatexRenderer latex="P = (p_{ij})" /> contient les probabilités de transition <LatexRenderer latex="p_{ij} = P(X_{n+1}=j \mid X_n=i)" />.
            </p>
            <p className="mb-2">
              Elle est <strong>stochastique</strong> : coefficients positifs, somme de chaque ligne vaut 1.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Évolution">
            <p className="mb-2">
              Si <LatexRenderer latex="\pi_n" /> est la distribution (vecteur ligne) à l'instant <LatexRenderer latex="n" /> :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="\pi_{n+1} = \pi_n P \implies \pi_n = \pi_0 P^n" />
            </div>
            <p className="text-sm">
              <strong>État stationnaire :</strong> <LatexRenderer latex="\pi" /> tel que <LatexRenderer latex="\pi P = \pi" />.
            </p>
          </TheoremBlock>
        </section>

        {/* ─── CAS PRATIQUE : MÉTÉO ────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Cas pratique : Modèle Météo
          </h2>

          <ExampleBlock title="Soleil vs Pluie">
            <p className="mb-2">
              États : S (Soleil), P (Pluie).
              Matrice de transition :
            </p>
            <div className="text-center mb-2">
              <LatexRenderer latex="P = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}" />
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>S'il fait beau, 80% de chance qu'il fasse beau demain.</li>
              <li>S'il pleut, 40% de chance qu'il fasse beau demain.</li>
            </ul>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Simulation Météo"
            code={`import numpy as np

P = np.array([[0.8, 0.2],
              [0.4, 0.6]])

# État initial : Soleil (100% proba d'être en S, 0% en P)
pi_0 = np.array([1, 0])

# État après 7 jours
pi_7 = pi_0 @ np.linalg.matrix_power(P, 7)
print(f"Proba Soleil J+7 : {pi_7[0]:.3f}")

# État stationnaire (convergence)
# On peut résoudre pi * P = pi ou itérer longtemps
pi_inf = pi_0 @ np.linalg.matrix_power(P, 100)
print(f"Stationnaire : {pi_inf}")`}
          />
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaMatricesMarkovCoursPage;
