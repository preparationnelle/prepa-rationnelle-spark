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

const Chapitre4FonctionsMultivarieesCalculDifferentielCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={21}
      chapterTitle="Fonctions multivariées & calcul différentiel"
      description="Topologie de ℝⁿ (ouverts, fermés), limites, continuité, dérivées partielles, gradient, développement limité d'ordre 1."
      slug="fonctions-multivariees-calcul-differentiel"
      activeSection="course"
      showNavigation={true}
      previousChapter={{
        slug: "statistiques-estimation", // Placeholder for Ch 19/20 links which are missing/skipped
        title: "Statistiques (Ch 19)"
      }}
      nextChapter={{
        slug: "optimisation", // Guessing next
        title: "Optimisation"
      }}
    >
      <div className="space-y-8">
        {/* Section 1: Topologie */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Topologie de ℝⁿ</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                L'espace <LatexRenderer latex="\mathbb{R}^n" /> est muni de la norme euclidienne <LatexRenderer latex="\|x\| = \sqrt{\sum x_i^2}" />.
              </p>
              <FormulaBox title="Ouverts et Fermés">
                Un ensemble <LatexRenderer latex="\Omega" /> est <strong>ouvert</strong> si tout point de <LatexRenderer latex="\Omega" /> est le centre d'une boule incluse dans <LatexRenderer latex="\Omega" />.
                <div className="my-2" />
                Un ensemble est <strong>fermé</strong> si son complémentaire est ouvert.
              </FormulaBox>

              <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                <h4 className="font-semibold text-slate-800 mb-2">Exemples</h4>
                <p className="text-slate-700 text-sm">
                  <LatexRenderer latex="\{x \mid \phi(x) < c\}" /> est un ouvert (si <LatexRenderer latex="\phi" /> continue).<br />
                  <LatexRenderer latex="\{x \mid \phi(x) = c\}" /> est un fermé (ligne de niveau).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Calcul Différentiel */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Calcul Différentiel d'Ordre 1</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <FormulaBox title="Gradient">
                <LatexRenderer latex="\nabla f(a) = \left( \frac{\partial f}{\partial x_1}(a), \dots, \frac{\partial f}{\partial x_n}(a) \right)" />
              </FormulaBox>

              <FormulaBox title="Développement Limité à l'ordre 1 (pour f C¹)">
                <LatexRenderer latex="f(a+h) = f(a) + \langle \nabla f(a), h \rangle + o(\|h\|)" />
              </FormulaBox>

              <div className="border border-slate-200 rounded p-4 mt-4">
                <p className="font-semibold text-slate-800 mb-2">Propriété du Gradient</p>
                <p className="text-slate-700 mb-2">
                  Le gradient <LatexRenderer latex="\nabla f(a)" /> indique la direction de plus forte pente.
                  Il est orthogonal aux lignes de niveau.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4FonctionsMultivarieesCalculDifferentielCoursPage;
