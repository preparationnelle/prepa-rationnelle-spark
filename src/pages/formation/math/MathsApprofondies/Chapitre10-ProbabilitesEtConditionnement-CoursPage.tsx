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

const MathsProbabilitesFiniesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Probabilités et Conditionnement"
      description="Espaces probabilisés, conditionnement, indépendance, et théorèmes limites."
      slug="probabilites-conditionnement"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Réduction des matrices symétriques"
      }}
      nextChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 - Espaces Probabilisés */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Espaces Probabilisés</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définitions</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                <li><span className="font-semibold">Univers</span> <LatexRenderer latex="\Omega" /> : ensemble des issues possibles.</li>
                <li><span className="font-semibold">Tribu</span> <LatexRenderer latex="\mathcal{A}" /> : ensemble des événements (stable par complémentaire et union dénombrable).</li>
                <li><span className="font-semibold">Probabilité</span> <LatexRenderer latex="\mathbb{P}" /> : mesure normalisée (<LatexRenderer latex="\mathbb{P}(\Omega)=1" />) et <LatexRenderer latex="\sigma" />-additive.</li>
              </ul>

              <FormulaBox title="Propriété de continuité">
                <LatexRenderer latex="A_n \uparrow A \implies \mathbb{P}(A_n) \to \mathbb{P}(A)" />
                <br />
                <LatexRenderer latex="A_n \downarrow A \implies \mathbb{P}(A_n) \to \mathbb{P}(A)" />
              </FormulaBox>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Conditionnement */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Conditionnement & Indépendance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="mb-4 text-slate-700">Pour <LatexRenderer latex="\mathbb{P}(B) > 0" />, la probabilité conditionnelle est :</p>
              <FormulaBox>
                <LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}" />
              </FormulaBox>

              <Separator className="my-6" />

              <h3 className="text-xl font-bold mb-4 text-slate-900">Formules Fondamentales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Formule des Probabilités Totales</h4>
                  <p className="text-sm text-slate-600 mb-2">Si <LatexRenderer latex="(B_n)" /> est un système complet d'événements :</p>
                  <FormulaBox>
                    <LatexRenderer latex="\mathbb{P}(A) = \sum_n \mathbb{P}(A \cap B_n) = \sum_n \mathbb{P}(B_n)\mathbb{P}_{B_n}(A)" />
                  </FormulaBox>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Formule de Bayes</h4>
                  <p className="text-sm text-slate-600 mb-2">Pour inverser le conditionnement :</p>
                  <FormulaBox>
                    <LatexRenderer latex="\mathbb{P}_A(B_k) = \frac{\mathbb{P}(B_k)\mathbb{P}_{B_k}(A)}{\sum_n \mathbb{P}(B_n)\mathbb{P}_{B_n}(A)}" />
                  </FormulaBox>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Indépendance */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Indépendance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <ul className="list-disc list-inside space-y-4 text-slate-700 ml-2">
                <li>
                  <strong>Deux événements :</strong> <LatexRenderer latex="A \text{ et } B" /> indépendants si <LatexRenderer latex="\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)" />.
                </li>
                <li>
                  <strong>Famille d'événements :</strong> Mutuellement indépendants si pour tout sous-ensemble d'indices <LatexRenderer latex="J" />, <LatexRenderer latex="\mathbb{P}(\bigcap_{j \in J} A_j) = \prod_{j \in J} \mathbb{P}(A_j)" />.
                </li>
                <li>
                  <strong>Attention :</strong> L'indépendance deux à deux n'implique pas l'indépendance mutuelle.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default MathsProbabilitesFiniesPage;
