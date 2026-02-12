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
              <LatexRenderer block latex="A = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}" />
            </div>
          </DefinitionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <DefinitionBlock title="Produit Matriciel">
              <p className="mb-2">
                Si <LatexRenderer latex="A \in \mathcal{M}_{n,p}" /> et <LatexRenderer latex="B \in \mathcal{M}_{p,q}" />, alors <LatexRenderer latex="C = AB \in \mathcal{M}_{n,q}" /> avec :
              </p>
              <div className="text-center">
                <LatexRenderer block latex="c_{i,j} = \sum_{k=1}^p a_{i,k} b_{k,j}" />
              </div>
            </DefinitionBlock>

            <DefinitionBlock title="Transposée">
              <p className="mb-2">
                La transposée <LatexRenderer latex="A^T" /> s'obtient en échangeant lignes et colonnes : <LatexRenderer latex="(A^T)_{i,j} = A_{j,i}" />.
              </p>
            </DefinitionBlock>
          </div>

          {/* ─── TRACE ─────────────────────────────────────────────── */}
          <DefinitionBlock title="Trace d'une matrice">
            <p className="mb-2">
              Soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" /> une matrice <strong>carrée</strong> d'ordre <LatexRenderer latex="n" />.
              La <strong>trace</strong> de <LatexRenderer latex="A" />, notée <LatexRenderer latex="\text{Tr}(A)" />, est la somme de ses éléments diagonaux :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="\text{Tr}(A) = \sum_{i=1}^{n} a_{i,i} = a_{1,1} + a_{2,2} + \cdots + a_{n,n}" />
            </div>
            <p className="text-sm mb-2"><strong>Propriétés :</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><LatexRenderer latex="\text{Tr}(A + B) = \text{Tr}(A) + \text{Tr}(B)" /></li>
              <li><LatexRenderer latex="\text{Tr}(\lambda A) = \lambda \, \text{Tr}(A)" /></li>
              <li><LatexRenderer latex="\text{Tr}(AB) = \text{Tr}(BA)" /> (même si <LatexRenderer latex="AB \neq BA" />)</li>
              <li><LatexRenderer latex="\text{Tr}(I_n) = n" /></li>
            </ul>
          </DefinitionBlock>

          <ExampleBlock title="Exemple — Calcul de trace">
            <p className="mb-2">
              Soit <LatexRenderer latex="A = \begin{pmatrix} 3 & 1 & 4 \\ 1 & 5 & 9 \\ 2 & 6 & 2 \end{pmatrix}" />.
              Alors :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer block latex="\text{Tr}(A) = 3 + 5 + 2 = 10" />
            </div>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Calcul de la trace avec une boucle for"
            code={`def calcul_trace(A):
    n = len(A)
    trace = 0
    # On parcourt les éléments diagonaux (indices i, i)
    for i in range(n):
        trace += A[i][i]
    return trace

# Exemple
M = [[3, 1, 4],
     [1, 5, 9],
     [2, 6, 2]]

print("Trace =", calcul_trace(M))  # 10`}
          />

          {/* ─── MATRICE SYMÉTRIQUE ──────────────────────────────────── */}
          <DefinitionBlock title="Matrice symétrique">
            <p className="mb-2">
              Une matrice carrée <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" /> est <strong>symétrique</strong> si elle est égale à sa transposée :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="A^T = A \quad \Longleftrightarrow \quad \forall\, (i,j), \;\; a_{i,j} = a_{j,i}" />
            </div>
            <p className="text-sm">
              Autrement dit, les coefficients sont « symétriques » par rapport à la diagonale principale.
            </p>
          </DefinitionBlock>

          <ExampleBlock title="Exemple — Matrice symétrique">
            <p className="mb-2">
              <LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 3 & 7 & 4 \end{pmatrix}" /> est symétrique car <LatexRenderer latex="a_{1,2} = a_{2,1} = 2" />, <LatexRenderer latex="a_{1,3} = a_{3,1} = 3" />, <LatexRenderer latex="a_{2,3} = a_{3,2} = 7" />.
            </p>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Vérifier si une matrice est symétrique"
            code={`def est_symetrique(A):
    n = len(A)
    for i in range(n):
        for j in range(n):
            if A[i][j] != A[j][i]:
                return False
    return True

A = [[1, 2, 3],
     [2, 5, 7],
     [3, 7, 4]]

print("Symétrique ?", est_symetrique(A))  # True`}
          />

          {/* ─── MATRICE ANTISYMÉTRIQUE ──────────────────────────────── */}
          <DefinitionBlock title="Matrice antisymétrique">
            <p className="mb-2">
              Une matrice carrée <LatexRenderer latex="A" /> est <strong>antisymétrique</strong> si :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="A^T = -A \quad \Longleftrightarrow \quad \forall\, (i,j), \;\; a_{i,j} = -a_{j,i}" />
            </div>
            <p className="text-sm mb-2">
              En particulier, les éléments diagonaux sont forcément nuls : <LatexRenderer latex="a_{i,i} = -a_{i,i} \implies a_{i,i} = 0" />.
            </p>
            <RemarkBlock title="Décomposition symétrique / antisymétrique">
              <p className="text-sm">
                Toute matrice carrée peut se décomposer de façon unique en somme d'une matrice symétrique et d'une matrice antisymétrique :
              </p>
              <div className="text-center mt-2">
                <LatexRenderer block latex="A = \underbrace{\frac{A + A^T}{2}}_{\text{sym.}} + \underbrace{\frac{A - A^T}{2}}_{\text{antisym.}}" />
              </div>
            </RemarkBlock>
          </DefinitionBlock>

          <ExampleBlock title="Exemple — Matrice antisymétrique">
            <p className="mb-2">
              <LatexRenderer latex="A = \begin{pmatrix} 0 & 2 & -3 \\ -2 & 0 & 5 \\ 3 & -5 & 0 \end{pmatrix}" /> est antisymétrique : chaque <LatexRenderer latex="a_{i,j} = -a_{j,i}" /> et la diagonale est nulle.
            </p>
          </ExampleBlock>

          <CodeBlock
            language="python"
            title="Vérifier si une matrice est antisymétrique"
            code={`def est_antisymetrique(A):
    n = len(A)
    for i in range(n):
        for j in range(n):
            if A[i][j] != -A[j][i]:
                return False
    return True

A = [[ 0,  2, -3],
     [-2,  0,  5],
     [ 3, -5,  0]]

print("Antisymétrique ?", est_antisymetrique(A))  # True`}
          />

          {/* ─── MATRICE DIAGONALE ───────────────────────────────────── */}
          <DefinitionBlock title="Matrice diagonale">
            <p className="mb-2">
              Une matrice carrée <LatexRenderer latex="A" /> est <strong>diagonale</strong> si tous les coefficients en dehors de la diagonale principale sont nuls :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="a_{i,j} = 0 \quad \text{pour tout } i \neq j" />
            </div>
            <p className="text-sm mb-2">On la note souvent :</p>
            <div className="text-center mb-2">
              <LatexRenderer block latex="D = \text{diag}(d_1, d_2, \ldots, d_n) = \begin{pmatrix} d_1 & 0 & \cdots & 0 \\ 0 & d_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_n \end{pmatrix}" />
            </div>
            <p className="text-sm">
              <strong>Propriété clé :</strong> Le produit de deux matrices diagonales est diagonal, et <LatexRenderer latex="D^k = \text{diag}(d_1^k, \ldots, d_n^k)" />.
            </p>
          </DefinitionBlock>

          <CodeBlock
            language="python"
            title="Vérifier si une matrice est diagonale"
            code={`def est_diagonale(A):
    n = len(A)
    for i in range(n):
        for j in range(n):
            if i != j and A[i][j] != 0:
                return False
    return True

A = [[4, 0, 0],
     [0, 7, 0],
     [0, 0, 2]]

print("Diagonale ?", est_diagonale(A))  # True`}
          />

          {/* ─── MATRICE TRIANGULAIRE SUPÉRIEURE ─────────────────────── */}
          <DefinitionBlock title="Matrice triangulaire supérieure">
            <p className="mb-2">
              Une matrice carrée <LatexRenderer latex="A" /> est <strong>triangulaire supérieure</strong> si tous les coefficients <strong>en dessous</strong> de la diagonale sont nuls :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="a_{i,j} = 0 \quad \text{pour tout } i > j" />
            </div>
            <div className="text-center mb-2">
              <LatexRenderer block latex="U = \begin{pmatrix} u_{1,1} & u_{1,2} & \cdots & u_{1,n} \\ 0 & u_{2,2} & \cdots & u_{2,n} \\ \vdots & \ddots & \ddots & \vdots \\ 0 & \cdots & 0 & u_{n,n} \end{pmatrix}" />
            </div>
            <p className="text-sm mb-1">
              <strong>Propriété :</strong> Le déterminant d'une matrice triangulaire est le produit de ses éléments diagonaux :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer block latex="\det(U) = \prod_{i=1}^n u_{i,i}" />
            </div>
          </DefinitionBlock>

          <CodeBlock
            language="python"
            title="Vérifier si une matrice est triangulaire supérieure"
            code={`def est_triangulaire_sup(A):
    n = len(A)
    for i in range(n):
        for j in range(n):
            if i > j and A[i][j] != 0:
                return False
    return True

A = [[1, 3, 5],
     [0, 2, 4],
     [0, 0, 6]]

print("Triangulaire Sup ?", est_triangulaire_sup(A))  # True`}
          />

          {/* ─── MATRICE TRIANGULAIRE INFÉRIEURE ─────────────────────── */}
          <DefinitionBlock title="Matrice triangulaire inférieure">
            <p className="mb-2">
              Une matrice carrée <LatexRenderer latex="A" /> est <strong>triangulaire inférieure</strong> si tous les coefficients <strong>au-dessus</strong> de la diagonale sont nuls :
            </p>
            <div className="text-center font-semibold mb-3">
              <LatexRenderer block latex="a_{i,j} = 0 \quad \text{pour tout } i < j" />
            </div>
            <div className="text-center mb-2">
              <LatexRenderer block latex="L = \begin{pmatrix} l_{1,1} & 0 & \cdots & 0 \\ l_{2,1} & l_{2,2} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{n,1} & l_{n,2} & \cdots & l_{n,n} \end{pmatrix}" />
            </div>
            <p className="text-sm mb-1">
              <strong>Propriété :</strong> Comme pour la triangulaire supérieure, le déterminant est le produit des éléments diagonaux :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer block latex="\det(L) = \prod_{i=1}^n l_{i,i}" />
            </div>
          </DefinitionBlock>

          <CodeBlock
            language="python"
            title="Vérifier si une matrice est triangulaire inférieure"
            code={`def est_triangulaire_inf(A):
    n = len(A)
    for i in range(n):
        for j in range(n):
            if i < j and A[i][j] != 0:
                return False
    return True

A = [[1, 0, 0],
     [3, 2, 0],
     [5, 4, 6]]

print("Triangulaire Inf ?", est_triangulaire_inf(A))  # True`}
          />

          {/* ─── DÉTERMINANT ─────────────────────────────────────────── */}
          <DefinitionBlock title="Déterminant">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><LatexRenderer latex="\det(AB) = \det(A)\det(B)" /></li>
              <li><LatexRenderer latex="A" /> est inversible si et seulement si <LatexRenderer latex="\det(A) \neq 0" />.</li>
            </ul>
          </DefinitionBlock>
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
              <LatexRenderer block latex="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
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
              <LatexRenderer block latex="P(X_{n+1}=j \mid X_n=i, X_{n-1}, \dots) = P(X_{n+1}=j \mid X_n=i)" />
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
              <LatexRenderer block latex="\pi_{n+1} = \pi_n P \implies \pi_n = \pi_0 P^n" />
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
              <LatexRenderer block latex="P = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}" />
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
