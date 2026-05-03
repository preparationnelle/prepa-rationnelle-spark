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

const Chapitre7NupletsVariablesAleatoiresCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={7}
      chapterTitle="n-uplets de variables aléatoires"
      description="Vecteurs aléatoires, lois conjointes, espérance, indépendance et sommes de variables aléatoires."
      slug="nuplets-variables-aleatoires"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "integration-sur-un-segment",
        title: "Intégration sur un segment"
      }}
      nextChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 - Vecteurs aléatoires */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Vecteurs aléatoires & Lois conjointes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définition</h3>
              <p className="mb-4 text-slate-700">Soient <LatexRenderer latex={"X_1, \\dots, X_n"} /> des variables aléatoires réelles sur <LatexRenderer latex={"(\\Omega, \\mathcal{A}, P)"} />. On appelle vecteur aléatoire l'application :</p>
              <FormulaBox>
                <LatexRenderer latex={"X = (X_1, \\dots, X_n) : \\Omega \\to \\mathbb{R}^n"} />
              </FormulaBox>
              <p className="mt-4 text-slate-700">Sa loi est caractérisée par la probabilité conjointe (cas discret) :</p>
              <FormulaBox>
                <LatexRenderer latex={"p(x_1, \\dots, x_n) = P(X_1=x_1, \\dots, X_n=x_n)"} />
              </FormulaBox>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Lois marginales</h3>
              <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <p className="text-slate-700 font-medium mb-2">Pour retrouver la loi de <LatexRenderer latex={"X_k"} /> (loi marginale) à partir de la loi conjointe, on somme sur toutes les autres variables :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex={"P(X_k = x) = \\sum_{(x_1, \\dots, x_{k-1}, x_{k+1}, \\dots, x_n)} P(X_1=x_1, \\dots, X_k=x, \\dots, X_n=x_n)"} />
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 2 - Espérance & Indépendance */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Espérance & Indépendance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Espérance */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Linéarité de l'espérance</h3>
              <p className="mb-2 text-slate-700">Quelles que soient les lois et les dépendances (si les espérances existent) :</p>
              <FormulaBox>
                <LatexRenderer latex={"E\\left(\\sum_{i=1}^n \\lambda_i X_i\\right) = \\sum_{i=1}^n \\lambda_i E(X_i)"} />
              </FormulaBox>
            </div>

            <Separator />

            {/* Indépendance */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Indépendance mutuelle</h3>
              <p className="mb-2 text-slate-700">Les variables <LatexRenderer latex={"X_1, \\dots, X_n"} /> sont mutuellement indépendantes si pour tout <LatexRenderer latex={"(x_1, \\dots, x_n)"} /> :</p>
              <FormulaBox>
                <LatexRenderer latex={"P(X_1=x_1, \\dots, X_n=x_n) = P(X_1=x_1) \\times \\dots \\times P(X_n=x_n)"} />
              </FormulaBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Conséquence sur l'Espérance</span>
                  <p className="text-sm text-slate-600 mb-2">Si indépendantes :</p>
                  <div className="text-center text-sm"><LatexRenderer latex={"E\\left(\\prod X_i\\right) = \\prod E(X_i)"} /></div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-2">Conséquence sur la Variance</span>
                  <p className="text-sm text-slate-600 mb-2">Si indépendantes :</p>
                  <div className="text-center text-sm"><LatexRenderer latex={"V\\left(\\sum X_i\\right) = \\sum V(X_i)"} /></div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Sommes usuelles */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Stabilité des lois usuelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <p className="text-slate-700 mb-4">Si les <LatexRenderer latex={"X_i"} /> sont <strong>indépendantes</strong> :</p>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-4 text-left">Loi des <LatexRenderer latex={"X_i"} /></th>
                    <th className="py-2 px-4 text-left">Loi de la somme <LatexRenderer latex={"S_n = \\sum X_i"} /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{B}(p)"} /> (Bernoulli)</td>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{B}(n, p)"} /> (Binomiale)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{B}(n_i, p)"} /> (Binomiale, même <LatexRenderer latex={"p"} />)</td>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{B}(\\sum n_i, p)"} /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{P}(\\lambda_i)"} /> (Poisson)</td>
                    <td className="py-3 px-4"><LatexRenderer latex={"\\mathcal{P}(\\sum \\lambda_i)"} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded text-blue-900 text-sm mt-6">
              <strong>Théorème Central Limite (TCL) :</strong> Si les <LatexRenderer latex={"X_i"} /> sont i.i.d (espérance <LatexRenderer latex={"\\mu"} />, variance <LatexRenderer latex={"\\sigma^2"} />), alors la somme centrée réduite converge en loi vers la loi normale <LatexRenderer latex={"\\mathcal{N}(0,1)"} />.
            </div>

          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre7NupletsVariablesAleatoiresCoursPage;
