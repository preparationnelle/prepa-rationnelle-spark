import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Chapitre13EstimationStatistiqueAvanceeCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={28}
      chapterTitle="Estimation Statistique"
      description="Estimation ponctuelle, biais, risque quadratique. Intervalles de confiance (exacts et asymptotiques)."
      slug="estimation-statistique-avancee"
      activeSection="course"
      showNavigation={true}
      previousChapter={{
        slug: "convergences-approximations",
        title: "Convergences (Ch 27)"
      }}
      nextChapter={{
        slug: "couples-variables-aleatoires", // Looping back or ending?
        title: "Couples de Variables (Revisite)"
      }}
    >
      <div className="space-y-8">

        {/* Section 1: Estimation Ponctuelle */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
          <CardHeader className="bg-carnet-paper border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Estimation Ponctuelle</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                On cherche à estimer un paramètre <LatexRenderer latex="\theta" /> à partir d'un échantillon <LatexRenderer latex="(X_1, \dots, X_n)" />.
              </p>
              <ComparisonGrid>
                <ComparisonCard label="Biais">
                  <div className="text-center my-2">
                    <LatexRenderer latex="b(\hat{\theta}_n) = \mathbb{E}(\hat{\theta}_n) - \theta" />
                  </div>
                  <p className="text-sm mt-2 italic">Estimateur <strong>sans biais</strong> si <LatexRenderer latex="b(\hat{\theta}_n) = 0" />.</p>
                </ComparisonCard>
                <ComparisonCard label="Risque quadratique (EQM)">
                  <div className="text-center my-2">
                    <LatexRenderer latex="r(\hat{\theta}_n) = \mathbb{E}[(\hat{\theta}_n - \theta)^2] = b^2 + \mathbb{V}(\hat{\theta}_n)" />
                  </div>
                  <p className="text-sm mt-2 italic">Décomposition biais–variance.</p>
                </ComparisonCard>
              </ComparisonGrid>
              <p className="text-slate-700 mt-4">
                Un estimateur est <strong>convergent</strong> si <LatexRenderer latex="\hat{\theta}_n \xrightarrow{\mathbb{P}} \theta" />.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Estimation par Intervalle */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
          <CardHeader className="bg-carnet-paper border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Intervalles de Confiance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Un intervalle <LatexRenderer latex="I_n" /> est un IC de niveau <LatexRenderer latex="1-\alpha" /> si :
              </p>
              <FormulaBox>
                <LatexRenderer latex="\mathbb{P}(\theta \in I_n) \geq 1 - \alpha" />
              </FormulaBox>

              <div className="mt-6 bg-carnet-paper p-4 rounded border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Méthode de la quantité pivotale</h4>
                <p className="text-slate-700 text-sm">
                  Trouver <LatexRenderer latex="Z_n = f(X_1, \dots, X_n, \theta)" /> dont la loi ne dépend pas de <LatexRenderer latex="\theta" />.
                </p>
              </div>

              <div className="mt-6 bg-carnet-paper p-4 rounded border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">IC Asymptotique</h4>
                <p className="text-slate-700 text-sm">
                  Basé sur le TCL : <LatexRenderer latex="\lim_{n \to \infty} \mathbb{P}(\theta \in I_n) = 1 - \alpha" />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre13EstimationStatistiqueAvanceeCoursPage;
