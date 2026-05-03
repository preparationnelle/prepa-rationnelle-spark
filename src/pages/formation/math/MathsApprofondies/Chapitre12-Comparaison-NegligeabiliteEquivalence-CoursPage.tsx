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

const MathsComparaisonsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Comparaison — négligeabilité & équivalence"
      description="Définitions et notations : f=o(g), u_n=o(v_n), équivalences, croissances comparées et limites."
      slug="comparaison-negligeabilite-equivalence"
      activeSection="course"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation-multivariee-avancee",
        title: "Optimisation Multivariée"
      }}
      nextChapter={{
        slug: "convergences-approximations",
        title: "Convergences & Approximations"
      }}
    >
      <div className="space-y-8">
        {/* Section 1: Négligeabilité */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Négligeabilité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Une fonction <LatexRenderer latex="f" /> est négligeable devant <LatexRenderer latex="g" /> au voisinage de <LatexRenderer latex="a" /> si <LatexRenderer latex="f" /> est "beaucoup plus petite" que <LatexRenderer latex="g" />.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Pour les fonctions</h4>
                  <FormulaBox>
                    <LatexRenderer latex="f(x) = o(g(x)) \iff f(x) = g(x)\varepsilon(x) \quad \text{avec } \lim_{x \to a} \varepsilon(x) = 0" />
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <LatexRenderer latex="\iff \lim_{x \to a} \frac{f(x)}{g(x)} = 0 \quad (g \neq 0)" />
                    </div>
                  </FormulaBox>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Pour les suites</h4>
                  <FormulaBox>
                    <LatexRenderer latex="u_n = o(v_n) \iff u_n = v_n\varepsilon_n \quad \text{avec } \lim_{n \to \infty} \varepsilon_n = 0" />
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <LatexRenderer latex="\iff \lim_{n \to \infty} \frac{u_n}{v_n} = 0 \quad (v_n \neq 0)" />
                    </div>
                  </FormulaBox>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Opérations sur les petits o</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                <li><LatexRenderer latex="o(f) + o(f) = o(f)" /></li>
                <li><LatexRenderer latex="o(f) \times o(g) = o(fg)" /></li>
                <li><LatexRenderer latex="f \times o(g) = o(fg)" /></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Équivalence */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Équivalence</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Deux fonctions (ou suites) sont équivalentes si elles ont le même comportement asymptotique.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Définition</h4>
                  <FormulaBox>
                    <LatexRenderer latex="f \sim_a g \iff f(x) = g(x)(1 + \varepsilon(x))" />
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <LatexRenderer latex="\iff \lim_{x \to a} \frac{f(x)}{g(x)} = 1" />
                    </div>
                  </FormulaBox>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Lien avec les petits o</h4>
                  <FormulaBox>
                    <LatexRenderer latex="f \sim_a g \iff f = g + o(g)" />
                  </FormulaBox>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Propriétés fondamentales</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                <li>Compatibilité avec le produit, le quotient, et les puissances fixes.</li>
                <li><strong className="text-red-600">ATTENTION :</strong> Pas de compatibilité avec l'addition (somme) ni la composition (ex: exponentielle) en général.</li>
                <li>Si <LatexRenderer latex="f \sim g" /> et <LatexRenderer latex="\lim g = \ell" />, alors <LatexRenderer latex="\lim f = \ell" />.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Équivalents usuels */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Équivalents usuels (en 0)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <FormulaBox>
                <LatexRenderer latex="e^x - 1 \sim_0 x" />
              </FormulaBox>
              <FormulaBox>
                <LatexRenderer latex="\ln(1+x) \sim_0 x" />
              </FormulaBox>
              <FormulaBox>
                <LatexRenderer latex="\sin(x) \sim_0 x" />
              </FormulaBox>
              <FormulaBox>
                <LatexRenderer latex="\tan(x) \sim_0 x" />
              </FormulaBox>
              <FormulaBox>
                <LatexRenderer latex="1 - \cos(x) \sim_0 \frac{x^2}{2}" />
              </FormulaBox>
              <FormulaBox>
                <LatexRenderer latex="(1+x)^\alpha - 1 \sim_0 \alpha x" />
              </FormulaBox>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-800 mb-2">Croissances comparées (en <LatexRenderer latex="+\infty" />)</h4>
              <FormulaBox>
                <LatexRenderer latex="\ln(x) \ll x^\alpha \ll e^{\beta x} \quad (\alpha > 0, \beta > 0)" />
                <br />
                <span className="text-sm text-slate-600">Le logarithme est négligeable devant la puissance, qui est négligeable devant l'exponentielle.</span>
              </FormulaBox>
            </div>
          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default MathsComparaisonsPage;
