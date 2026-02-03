import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Separator } from '@/components/ui/separator';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
    {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
    <div className="text-center">
      {children}
    </div>
  </div>
);

const MathsEspacesVectorielsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={9}
      chapterTitle="Matrices, systèmes linéaires & espaces vectoriels"
      description="Structures vectorielles, opérations matricielles, inverse, déterminant et résolution de systèmes linéaires."
      slug="matrices-et-espaces-vectoriels"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "couple-variables-aleatoires",
        title: "Couples de variables aléatoires"
      }}
      nextChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Algèbre bilinéaire et espaces euclidiens"
      }}
    >
      <div className="space-y-8">

        {/* Section 1: Matrices */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Matrices : Définitions et Opérations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définitions</h3>
              <p className="mb-4 text-slate-700">Une matrice <LatexRenderer latex="A \in \mathcal{M}_{n,p}(\mathbb{R})" /> est un tableau à <LatexRenderer latex="n" /> lignes et <LatexRenderer latex="p" /> colonnes.</p>
              <FormulaBox>
                <LatexRenderer latex="A = (a_{i,j}) = \begin{pmatrix} a_{1,1} & \dots & a_{1,p} \\ \vdots & \ddots & \vdots \\ a_{n,1} & \dots & a_{n,p} \end{pmatrix}" />
              </FormulaBox>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Opérations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Produit Matriciel</span>
                  <div className="text-center text-sm"><LatexRenderer latex="c_{i,j} = \sum_{k=1}^p a_{i,k} b_{k,j}" /></div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Transposée</span>
                  <div className="text-center text-sm"><LatexRenderer latex="{}^{\mathsf{t}}(AB) = {}^{\mathsf{t}}B {}^{\mathsf{t}}A" /></div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 2: Inverse & Systèmes */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Inverse & Systèmes Linéaires</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Inverse */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Matrice Inversible</h3>
              <FormulaBox>
                <LatexRenderer latex="A \in \text{GL}_n(\mathbb{R}) \iff \exists B, AB = BA = I_n" />
              </FormulaBox>
              <div className="mt-4">
                <p className="text-slate-700 font-medium mb-2">Cas 2x2 :</p>
                <FormulaBox>
                  <LatexRenderer latex="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}, \quad \det(A) = ad-bc \neq 0" />
                </FormulaBox>
              </div>
            </div>

            <Separator />

            {/* Systèmes */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Systèmes Linéaires</h3>
              <p className="mb-2 text-slate-700">Écriture matricielle <LatexRenderer latex="AX=B" />.</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                <li><strong>Système de Cramer :</strong> <LatexRenderer latex="A" /> inversible, solution unique <LatexRenderer latex="X = A^{-1}B" />.</li>
                <li><strong>Pivot de Gauss :</strong> Méthode algorithmique pour échelonner le système et le résoudre.</li>
              </ul>
            </div>

          </CardContent>
        </Card>

        {/* Section 3: Espaces Vectoriels */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Espaces Vectoriels</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Définitions */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définitions Fondamentales</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800">Combinaison linéaire :</span>
                  <span className="ml-2 text-slate-700"><LatexRenderer latex="x = \sum \lambda_i u_i" />.</span>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800">Famille libre :</span>
                  <span className="ml-2 text-slate-700"><LatexRenderer latex="\sum \lambda_i u_i = 0 \implies \forall i, \lambda_i = 0" />.</span>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800">Famille génératrice :</span>
                  <span className="ml-2 text-slate-700">Tout vecteur est combinaison linéaire de la famille.</span>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800">Base :</span>
                  <span className="ml-2 text-slate-700">Famille libre et génératrice.</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Dimension */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Dimension finie</h3>
              <FormulaBox>
                <LatexRenderer latex="\dim E = \text{cardinal d'une base}" />
              </FormulaBox>
              <p className="text-slate-700 mt-2"><strong>Théorème de la base incomplète :</strong> Toute famille libre peut être complétée en une base.</p>
              <p className="text-slate-700 mt-1"><strong>Rang :</strong> <LatexRenderer latex="\text{rg}(u_1, \dots, u_p) = \dim \text{Vect}(u_1, \dots, u_p)" />.</p>
            </div>

          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default MathsEspacesVectorielsPage;
