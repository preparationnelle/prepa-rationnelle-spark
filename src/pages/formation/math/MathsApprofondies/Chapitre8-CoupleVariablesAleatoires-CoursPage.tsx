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

const Chapitre8CoupleVariablesAleatoiresCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={8}
      chapterTitle="Couples de variables aléatoires"
      description="Lois conjointes, marginales, conditionnelles, indépendance, covariance et corrélation."
      slug="couple-variables-aleatoires"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
      nextChapter={{
        slug: "matrices-et-espaces-vectoriels",
        title: "Matrices et Espaces Vectoriels"
      }}
    >
      <div className="space-y-8">

        {/* Section 1: Lois conjointes & Marginales */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Lois conjointes & Marginales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Loi conjointe (cas discret)</h3>
              <p className="mb-4 text-slate-700">La loi du couple <LatexRenderer latex="(X,Y)" /> est donnée par les probabilités :</p>
              <FormulaBox>
                <LatexRenderer latex="p_{i,j} = P(X=x_i, Y=y_j), \quad \sum_{i,j} p_{i,j}=1" />
              </FormulaBox>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Lois marginales</h3>
              <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <p className="text-slate-700 font-medium mb-2">On retrouve la loi de <LatexRenderer latex="X" /> (resp. <LatexRenderer latex="Y" />) en sommant sur l'autre variable :</p>
                <div className="text-center py-2 space-y-2">
                  <div><LatexRenderer latex="P(X=x_i) = \sum_j P(X=x_i, Y=y_j)" /></div>
                  <div><LatexRenderer latex="P(Y=y_j) = \sum_i P(X=x_i, Y=y_j)" /></div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Lois conditionnelles</h3>
              <p className="mb-2 text-slate-700">Pour <LatexRenderer latex="P(X=x_i) \neq 0" /> :</p>
              <FormulaBox>
                <LatexRenderer latex="P(Y=y_j \mid X=x_i) = \frac{P(X=x_i, Y=y_j)}{P(X=x_i)}" />
              </FormulaBox>
            </div>

          </CardContent>
        </Card>

        {/* Section 2: Indépendance & Espérance */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Indépendance & Fonctions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Transfert */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Théorème de transfert</h3>
              <FormulaBox>
                <LatexRenderer latex="E(g(X,Y)) = \sum_{i,j} g(x_i,y_j) P(X=x_i,Y=y_j)" />
              </FormulaBox>
              <p className="text-slate-700 mt-2"><strong>Linéarité :</strong> <LatexRenderer latex="E(\lambda X + \mu Y) = \lambda E(X) + \mu E(Y)" />.</p>
            </div>

            <Separator />

            {/* Indépendance */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Variables Indépendantes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Définition</span>
                  <div className="text-center text-sm"><LatexRenderer latex="P(X=x, Y=y) = P(X=x)P(Y=y)" /></div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Produit</span>
                  <div className="text-center text-sm"><LatexRenderer latex="E(XY) = E(X)E(Y)" /></div>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 border border-blue-100 p-4 rounded text-blue-900 text-sm">
                <strong>Stabilité :</strong> Somme de Poissons indép. est Poisson. Somme de Binomiales (même p) indép. est Binomiale.
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3: Covariance & Corrélation */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Covariance & Corrélation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Covariance */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Covariance</h3>
              <FormulaBox title="Formule de Huygens">
                <LatexRenderer latex="\mathrm{Cov}(X,Y) = E(XY) - E(X)E(Y)" />
              </FormulaBox>
              <p className="text-slate-700 mt-2 text-sm italic">Si <LatexRenderer latex="X,Y" /> indépendants, <LatexRenderer latex="\mathrm{Cov}(X,Y) = 0" /> (Réciproque fausse).</p>
            </div>

            <Separator />

            {/* Variance Somme */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Variance d'une somme</h3>
              <FormulaBox>
                <LatexRenderer latex="V(X+Y) = V(X) + V(Y) + 2\mathrm{Cov}(X,Y)" />
              </FormulaBox>
            </div>

            <Separator />

            {/* Corrélation */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Coefficient de corrélation</h3>
              <FormulaBox>
                <LatexRenderer latex="\rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma(X)\sigma(Y)} \in [-1, 1]" />
              </FormulaBox>
              <ul className="list-disc list-inside mt-4 text-slate-700">
                <li><LatexRenderer latex="|\rho|=1 \iff Y = aX+b" /> (relation affine p.s.).</li>
                <li>Inégalité de Cauchy-Schwarz : <LatexRenderer latex="|\mathrm{Cov}(X,Y)| \leq \sigma(X)\sigma(Y)" />.</li>
              </ul>
            </div>

          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre8CoupleVariablesAleatoiresCoursPage;
