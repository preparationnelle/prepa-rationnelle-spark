
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsEspacesVectorielsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={9}
      chapterTitle="Matrices, systèmes linéaires et espaces vectoriels"
      description="Structures vectorielles et applications linéaires"
    >
      {/* Section 1: Matrices */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Matrices : Définitions et opérations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <p className="text-slate-700 mb-4">
              Une matrice <span className="inline-block align-middle"><LatexRenderer latex="A = (a_{i,j})" /></span> est un tableau à <span className="inline-block align-middle"><LatexRenderer latex="n" /></span> lignes et <span className="inline-block align-middle"><LatexRenderer latex="p" /></span> colonnes :
            </p>
            <div className="my-4 flex justify-center">
              <LatexRenderer latex="A = \begin{pmatrix} a_{1,1} & \dots & a_{1,p} \\ \vdots & \ddots & \vdots \\ a_{n,1} & \dots & a_{n,p} \end{pmatrix}" />
            </div>
            <p className="text-slate-700">
              L'ensemble <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{M}_{n,p}(\mathbb{R})" /></span> regroupe les matrices réelles <span className="inline-block align-middle"><LatexRenderer latex="n \times p" /></span>. Deux matrices sont égales si leurs coefficients correspondants sont identiques.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules essentielles</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Somme</strong> : <span className="inline-block align-middle"><LatexRenderer latex="C = A + B" /></span>, avec <span className="inline-block align-middle"><LatexRenderer latex="c_{i,j} = a_{i,j} + b_{i,j}" /></span>
              </li>
              <li>
                <strong>Multiplication par un réel</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\lambda A = (\lambda a_{i,j})" /></span>
              </li>
              <li>
                <strong>Produit matriciel</strong> : <span className="inline-block align-middle"><LatexRenderer latex="c_{i,j} = \sum_{k=1}^p a_{i,k} b_{k,j}" /></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Propriétés algébriques</strong> : <span className="inline-block align-middle"><LatexRenderer latex="A(BC) = (AB)C" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="A(B + C) = AB + AC" /></span>
              </li>
              <li>
                <strong>Matrice identité</strong> : <span className="inline-block align-middle"><LatexRenderer latex="I_n" /></span> satisfait <span className="inline-block align-middle"><LatexRenderer latex="AI_n = I_nA = A" /></span>
              </li>
              <li>
                <strong>Transposée</strong> : <span className="inline-block align-middle"><LatexRenderer latex="{}^{\mathsf{t}}A" /></span> avec <span className="inline-block align-middle"><LatexRenderer latex="{}^{\mathsf{t}}(AB) = {}^{\mathsf{t}}B {}^{\mathsf{t}}A" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Propriétés avancées */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Propriétés avancées des matrices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Une matrice <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> est inversible s'il existe <span className="inline-block align-middle"><LatexRenderer latex="A^{-1}" /></span> tel que <span className="inline-block align-middle"><LatexRenderer latex="AA^{-1} = I_n" /></span></li>
              <li>Une matrice est triangulaire si <span className="inline-block align-middle"><LatexRenderer latex="a_{i,j} = 0" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="i > j" /></span> (supérieure) ou <span className="inline-block align-middle"><LatexRenderer latex="i < j" /></span> (inférieure)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules clés</h3>
            <p className="text-slate-700 mb-4">
              <strong>Inverse 2×2</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /></span>, si <span className="inline-block align-middle"><LatexRenderer latex="\det(A) = ad - bc \neq 0" /></span> :
            </p>
            <div className="my-4 flex justify-center">
              <LatexRenderer latex="A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Systèmes linéaires */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Systèmes linéaires
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <p className="text-slate-700">
              Un système linéaire <span className="inline-block align-middle"><LatexRenderer latex="AX = B" /></span> a <span className="inline-block align-middle"><LatexRenderer latex="A \in \mathcal{M}_{n,p}(\mathbb{R})" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="X \in \mathcal{M}_{p,1}(\mathbb{R})" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="B \in \mathcal{M}_{n,1}(\mathbb{R})" /></span>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes essentiels</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Pivot de Gauss</strong> : Un système <span className="inline-block align-middle"><LatexRenderer latex="n = p" /></span> est de Cramer si ses pivots sont non nuls après échelonnement</li>
              <li><strong>Gauss-Jordan</strong> : Transformer <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> en <span className="inline-block align-middle"><LatexRenderer latex="I_n" /></span> donne <span className="inline-block align-middle"><LatexRenderer latex="A^{-1}" /></span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Espaces vectoriels */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Espaces vectoriels
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <p className="text-slate-700">
              Un espace vectoriel <span className="inline-block align-middle"><LatexRenderer latex="(E, +, \cdot)" /></span> a <span className="inline-block align-middle"><LatexRenderer latex="(E, +)" /></span> abélien et <span className="inline-block align-middle"><LatexRenderer latex="\lambda(x + y) = \lambda x + \lambda y" /></span>. Le neutre est <span className="inline-block align-middle"><LatexRenderer latex="0_E" /></span>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Concepts fondamentaux</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Combinaison linéaire</strong> : <span className="inline-block align-middle"><LatexRenderer latex="x = \sum_{j=1}^p \lambda_j f_j" /></span></li>
              <li><strong>Base</strong> : Une famille libre et génératrice est une base</li>
              <li><strong>Dimension</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\dim E" /></span> est le cardinal d'une base</li>
              <li><strong>Rang</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\dim \operatorname{Vect}(v_1, \dots, v_k)" /></span> est le rang</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsEspacesVectorielsPage;
