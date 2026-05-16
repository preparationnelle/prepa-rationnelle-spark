import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Separator } from '@/components/ui/separator';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="bg-carnet-paper border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
    {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
    <div className="text-center">
      {children}
    </div>
  </div>
);

const Chapitre10ReductionMatricesSymetriquesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={26}
      chapterTitle="Réduction des endomorphismes et matrices symétriques"
      description="Théorème spectral, diagonalisation par orthogonalité, formes quadratiques et optimisation."
      slug="reduction-matrices-symetriques"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Espaces Euclidiens (Ch 25)"
      }}
      nextChapter={{
        slug: "loi-normale",
        title: "Loi Normale (Ch 27)"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 - Endomorphismes Symétriques */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
          <CardHeader className="bg-carnet-paper border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Endomorphismes Symétriques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définition</h3>
              <p className="mb-4 text-slate-700">Un endomorphisme <LatexRenderer latex="\varphi" /> est symétrique si :</p>
              <FormulaBox>
                <LatexRenderer latex="\forall x,y \in E, \langle \varphi(x), y \rangle = \langle x, \varphi(y) \rangle" />
              </FormulaBox>
              <p className="mt-4 text-slate-700">
                La matrice de <LatexRenderer latex="\varphi" /> dans une <strong>base orthonormée</strong> est symétrique : <LatexRenderer latex="{}^tM = M" />.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Théorème Spectral */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
          <CardHeader className="bg-carnet-paper border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Théorème Spectral</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="mb-4 text-slate-700 text-lg">
                Tout endomorphisme symétrique d'un espace euclidien est <strong>diagonalisable</strong> dans une base orthonormée.
              </p>
              <FormulaBox title="Version Matricielle">
                <LatexRenderer latex="\forall A \in \mathcal{S}_n(\mathbb{R}), \exists P \in O_n(\mathbb{R}), \exists D \text{ diag}, A = PDP^T" />
              </FormulaBox>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2 mt-4">
                <li>Les valeurs propres sont réelles.</li>
                <li>Les sous-espaces propres sont orthogonaux 2 à 2.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Formes Quadratiques */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
          <CardHeader className="bg-carnet-paper border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Formes Quadratiques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="mb-4 text-slate-700">Associée à une matrice symétrique <LatexRenderer latex="A" /> : <LatexRenderer latex="q(x) = x^T A x" />.</p>

              <h3 className="text-xl font-bold mb-3 text-slate-900">Signe de la forme quadratique</h3>
              <ComparisonGrid>
                <ComparisonCard label={<>Positive&nbsp;<LatexRenderer latex="(q(x) \geq 0)" /></>}>
                  <p>SSI toutes les valeurs propres sont <LatexRenderer latex="\geq 0" />.</p>
                </ComparisonCard>
                <ComparisonCard label={<>Définie positive&nbsp;<LatexRenderer latex="(q(x) > 0)" /></>}>
                  <p>SSI toutes les valeurs propres sont <strong>strictement</strong> positives. Vrai pour tout <LatexRenderer latex="x \neq 0" />.</p>
                </ComparisonCard>
              </ComparisonGrid>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Optimisation (Principe de Rayleigh)</h3>
              <FormulaBox>
                <LatexRenderer latex="\min_{\|x\|=1} \langle Ax, x \rangle = \lambda_{\min}, \quad \max_{\|x\|=1} \langle Ax, x \rangle = \lambda_{\max}" />
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesCoursPage;
