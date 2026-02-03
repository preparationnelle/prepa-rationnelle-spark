import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Chapitre9AlgebreBilineaireEspacesEuclidiensCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={25}
      chapterTitle="Espaces Euclidiens & Projection Orthogonale"
      description="Structure euclidienne, bases orthonormées, matrices orthogonales et projecteurs orthogonaux."
      slug="algebre-bilineaire-espaces-euclidiens"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "algebre-bilineaire",
        title: "Algèbre Bilinéaire (Ch 24)"
      }}
      nextChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Endomorphismes Symétriques (Ch 26)"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 — Espaces euclidiens */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Espaces Euclidiens</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définition</h3>
              <p className="mb-4 text-slate-700">Un <strong>espace euclidien</strong> est un espace vectoriel réel <LatexRenderer latex="E" /> de dimension finie muni d'un produit scalaire.</p>
              <FormulaBox title="Propriétés">
                <div className="space-y-2">
                  <LatexRenderer latex="\dim(E) < +\infty" />
                  <br />
                  <LatexRenderer latex="\langle x,y \rangle \text{ est défini positif.}" />
                </div>
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 — Bases Orthonormées */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Bases Orthonormées</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="mb-2 text-slate-700">Existence garantie par Gram-Schmidt.</p>
              <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <p className="font-semibold text-slate-800">Coordonnées :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex="x = \sum_{i=1}^n \langle x,e_i \rangle e_i" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 — Projection Orthogonale */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Projection Orthogonale</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Sur tout sous-espace <LatexRenderer latex="F" />, il existe un unique projecteur orthogonal <LatexRenderer latex="p_F" />.
              </p>
              <FormulaBox title="Expression dans une BON de F">
                <LatexRenderer latex="p_F(x) = \sum_{i=1}^k \langle x,e_i \rangle e_i" />
              </FormulaBox>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                <h4 className="font-semibold text-slate-800 mb-2">Distance</h4>
                <p className="text-slate-700 text-sm">
                  <LatexRenderer latex="d(x,F) = \|x - p_F(x)\|" />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre9AlgebreBilineaireEspacesEuclidiensCoursPage;
