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

const Chapitre3AlgebreBilineaireCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={24}
      chapterTitle="Algèbre Bilinéaire"
      description="Produit scalaire, norme euclidienne, inégalités classiques (Cauchy-Schwarz, triangulaire) et orthogonalité."
      slug="algebre-bilineaire"
      activeSection="course"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation", // Ch 22/23
        title: "Optimisation"
      }}
      nextChapter={{
        slug: "endomorphismes-symetriques", // Ch 25
        title: "Endomorphismes Symétriques"
      }}
    >
      <div className="space-y-8">

        {/* Section 1: Produit Scalaire */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Produit Scalaire et Norme</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <p className="text-slate-700 mb-2">
                Un produit scalaire sur <LatexRenderer latex="E" /> est une forme bilinéaire symétrique définie positive.
              </p>

              <FormulaBox title="Bilinearité et Symétrie">
                <LatexRenderer latex="\langle \lambda x + y, z \rangle = \lambda \langle x, z \rangle + \langle y, z \rangle" />
                <br />
                <LatexRenderer latex="\langle x, y \rangle = \langle y, x \rangle" />
              </FormulaBox>

              <FormulaBox title="Norme Euclidienne">
                <LatexRenderer latex="\|x\| = \sqrt{\langle x, x \rangle}" />
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Inégalités */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Inégalités Fondamentales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <FormulaBox title="Inégalité de Cauchy-Schwarz">
                <LatexRenderer latex="|\langle x, y \rangle| \le \|x\| \|y\|" />
                <div className="mt-2 text-sm text-slate-600">
                  Égalité ssi <LatexRenderer latex="x, y" /> sont colinéaires.
                </div>
              </FormulaBox>

              <FormulaBox title="Inégalité Triangulaire">
                <LatexRenderer latex="\|x + y\| \le \|x\| + \|y\|" />
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Orthogonalité */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Orthogonalité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <p className="text-slate-700">
                Deux vecteurs sont orthogonaux si leur produit scalaire est nul.
              </p>
              <FormulaBox title="Théorème de Pythagore">
                <LatexRenderer latex="x \perp y \iff \|x+y\|^2 = \|x\|^2 + \|y\|^2" />
              </FormulaBox>

              <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                <h4 className="font-semibold text-slate-800 mb-2">Orthogonal d'un sous-espace</h4>
                <p className="text-slate-700 text-sm">
                  Pour <LatexRenderer latex="F \subset E" />, <LatexRenderer latex="F^\perp = \{ x \in E \mid \forall y \in F, \langle x, y \rangle = 0 \}" />.
                  <br />
                  Dans un espace euclidien, <LatexRenderer latex="E = F \oplus F^\perp" />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3AlgebreBilineaireCoursPage;
