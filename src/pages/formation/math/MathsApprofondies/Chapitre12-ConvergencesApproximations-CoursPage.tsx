import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
    {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
    <div className="text-center">
      {children}
    </div>
  </div>
);

const Chapitre12ConvergencesApproximationsCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={27}
      chapterTitle="Convergences et Loi Normale"
      description="Inégalités de concentration, Loi Faible des Grands Nombres, Théorème Central Limite et approximation normale."
      slug="convergences-approximations"
      activeSection="course"
      showNavigation={true}
      previousChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Endomorphismes Symétriques (Ch 26)"
      }}
      nextChapter={{
        slug: "estimation-statistique-avancee",
        title: "Estimation (Ch 28)"
      }}
    >
      <div className="space-y-8">
        {/* Section 1: Inégalités */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Inégalités de concentration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Inégalité de Markov</h4>
                <p className="text-slate-600 text-sm mb-2">Pour <LatexRenderer latex="Z \geq 0" /> et <LatexRenderer latex="a > 0" /> :</p>
                <FormulaBox>
                  <LatexRenderer latex="\mathbb{P}(Z \geq a) \leq \frac{\mathbb{E}(Z)}{a}" />
                </FormulaBox>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Inégalité de Bienaymé-Tchebychev</h4>
                <p className="text-slate-600 text-sm mb-2">Pour <LatexRenderer latex="\varepsilon > 0" /> :</p>
                <FormulaBox>
                  <LatexRenderer latex="\mathbb{P}(|Z - \mathbb{E}(Z)| \geq \varepsilon) \leq \frac{\mathbb{V}(Z)}{\varepsilon^2}" />
                </FormulaBox>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Convergences */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Modes de convergence</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Convergence en Probabilité (<LatexRenderer latex="\xrightarrow{\mathbb{P}}" />)</h4>
              <FormulaBox>
                <LatexRenderer latex="\forall \varepsilon > 0, \lim_{n \to \infty} \mathbb{P}(|X_n - X| \geq \varepsilon) = 0" />
              </FormulaBox>
              <div className="bg-slate-50 p-4 rounded border border-slate-100 mt-4">
                <p className="font-semibold text-slate-800">Loi Faible des Grands Nombres (LFGN)</p>
                <p className="text-slate-700 mt-1">
                  Si <LatexRenderer latex="(X_n)" /> i.i.d avec espérance <LatexRenderer latex="m" /> et variance finie :
                </p>
                <div className="text-center mt-2">
                  <LatexRenderer latex="\overline{X}_n \xrightarrow{\mathbb{P}} m" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-slate-800 mb-2">Convergence en Loi (<LatexRenderer latex="\xrightarrow{\mathcal{L}}" />)</h4>
              <p className="text-slate-700 mb-2">Convergence des fonctions de répartition en tout point de continuité.</p>
              <FormulaBox>
                <LatexRenderer latex="\lim_{n \to \infty} F_{X_n}(x) = F_X(x)" />
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: TCL */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Théorème Central Limite (TCL)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Si <LatexRenderer latex="(X_n)" /> i.i.d, <LatexRenderer latex="\mathbb{E}(X)=m" />, <LatexRenderer latex="\mathbb{V}(X)=\sigma^2" /> :
              </p>
              <FormulaBox>
                <LatexRenderer latex="Z_n = \frac{S_n - nm}{\sigma\sqrt{n}} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />
              </FormulaBox>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                <h4 className="font-semibold text-slate-800 mb-2">Approximation Normale</h4>
                <p className="text-slate-700 text-sm">
                  Pour <LatexRenderer latex="n" /> grand, <LatexRenderer latex="S_n \approx \mathcal{N}(nm, n\sigma^2)" />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre12ConvergencesApproximationsCoursPage;
