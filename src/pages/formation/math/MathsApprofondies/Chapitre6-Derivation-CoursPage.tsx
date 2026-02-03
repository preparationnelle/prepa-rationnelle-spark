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

const MathsDerivationPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Dérivabilité, calcul différentiel, règles de dérivation, théorèmes de Rolle et des accroissements finis, extremums et convexité."
      slug="derivation"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
      nextChapter={{
        slug: "integration-sur-un-segment",
        title: "Intégration sur un segment"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 - Dérivabilité */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Définition & Tangente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Nombre dérivé</h3>
              <p className="mb-4 text-slate-700">Soit <LatexRenderer latex={"f"} /> définie au voisinage de <LatexRenderer latex={"x_0"} />. Elle est dérivable en <LatexRenderer latex={"x_0"} /> si la limite suivante existe et est finie :</p>
              <FormulaBox>
                <LatexRenderer latex={"f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}"} />
              </FormulaBox>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 mb-1 block">Dérivabilité à gauche/droite</span>
                  <p className="text-sm text-slate-600">
                    <LatexRenderer latex={"f"} /> dérivable en <LatexRenderer latex={"x_0"} /> ssi elle est dérivable à gauche et à droite, et :
                    <br />
                    <LatexRenderer latex={"f'_g(x_0) = f'_d(x_0)"} />
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-slate-800 mb-1 block">Tangente</span>
                  <p className="text-sm text-slate-600">
                    Équation de la tangente en <LatexRenderer latex={"x_0"} /> :
                    <br />
                    <LatexRenderer latex={"y = f'(x_0)(x - x_0) + f(x_0)"} />
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Classe <LatexRenderer latex={"\\mathcal{C}^k"} /></h3>
              <p className="text-slate-700">
                <LatexRenderer latex={"f"} /> est de classe <LatexRenderer latex={"\\mathcal{C}^k"} /> sur <LatexRenderer latex={"I"} /> si elle est <LatexRenderer latex={"k"} /> fois dérivable sur <LatexRenderer latex={"I"} /> et si sa dérivée <LatexRenderer latex={"k"} />-ième est continue sur <LatexRenderer latex={"I"} />.
              </p>
            </div>

          </CardContent>
        </Card>

        {/* Section 2 - Formules */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Calcul Différentiel</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Opérations */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Opérations Algébriques</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-100 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Produit</span>
                  <LatexRenderer latex={"(uv)' = u'v + uv'"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Quotient</span>
                  <LatexRenderer latex={"(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Composition</span>
                  <LatexRenderer latex={"(v \\circ u)' = u' \\cdot (v' \\circ u)"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Réciproque</span>
                  <LatexRenderer latex={"(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}"} />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-slate-800 mb-2">Formule de Leibniz (dérivée n-ième d'un produit)</p>
                <FormulaBox>
                  <LatexRenderer latex={"(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}"} />
                </FormulaBox>
              </div>
            </div>

            <Separator />

            {/* Dérivées usuelles */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Dérivées usuelles</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="py-2 px-4 text-left">Fonction</th>
                      <th className="py-2 px-4 text-left">Dérivée</th>
                      <th className="py-2 px-4 text-left">Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"x^\\alpha"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\alpha x^{\\alpha-1}"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"x > 0"} /> si <LatexRenderer latex={"\\alpha \\notin \\mathbb{N}"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\ln|x|"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"1/x"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}^*"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\cos x"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"-\\sin x"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\cos x"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\tan x"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"1+\\tan^2 x = \\frac{1}{\\cos^2 x}"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"x \\neq \\frac{\\pi}{2} + k\\pi"} /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\arctan x"} /></td>
                      <td className="py-2 px-4"><LatexRenderer latex={"\\frac{1}{1+x^2}"} /></td>
                      <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Théorèmes Fondamentaux */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Théorèmes Fondamentaux</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Rolle et EAF */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Rolle et Accroissements Finis</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <p className="font-semibold text-slate-800 mb-2">Théorème de Rolle</p>
                  <p className="text-slate-700 mb-2">
                    Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"[a,b]"} />, dérivable sur <LatexRenderer latex={"]a,b["} /> et <LatexRenderer latex={"f(a)=f(b)"} />, alors :
                  </p>
                  <div className="text-center"><LatexRenderer latex={"\\exists c \\in ]a,b[, \\quad f'(c) = 0"} /></div>
                </div>

                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <p className="font-semibold text-slate-800 mb-2">Égalité des Accroissements Finis (EAF)</p>
                  <p className="text-slate-700 mb-2">
                    Sous les mêmes hypothèses de régularité (sans <LatexRenderer latex={"f(a)=f(b)"} />) :
                  </p>
                  <div className="text-center"><LatexRenderer latex={"\\exists c \\in ]a,b[, \\quad f(b) - f(a) = f'(c)(b-a)"} /></div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded">
                  <p className="font-semibold text-emerald-900 mb-2">Inégalité des Accroissements Finis (IAF)</p>
                  <p className="text-emerald-800 mb-2">
                    Si <LatexRenderer latex={"\\forall x \\in ]a,b[, |f'(x)| \\leq M"} />, alors :
                  </p>
                  <div className="text-center text-emerald-900 font-medium"><LatexRenderer latex={"|f(b) - f(a)| \\leq M|b-a|"} /></div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Variations, Extrema, Convexité */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Variations & Extrema</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• <LatexRenderer latex={"f' \\geq 0 \\iff f"} /> croissante.</li>
                  <li>• <LatexRenderer latex={"f' = 0 \\iff f"} /> constante.</li>
                  <li>• Extremum local en <LatexRenderer latex={"x_0 \\implies f'(x_0) = 0"} /> (si ouvert).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Convexité</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• <LatexRenderer latex={"f"} /> convexe <LatexRenderer latex={"\\iff f'"} /> croissante <LatexRenderer latex={"\\iff f'' \\geq 0"} />.</li>
                  <li>• Courbe au-dessus des tangentes.</li>
                  <li>• Inégalité de Jensen : <LatexRenderer latex={"f(\\sum \\lambda_i x_i) \\leq \\sum \\lambda_i f(x_i)"} />.</li>
                </ul>
              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default MathsDerivationPage;
