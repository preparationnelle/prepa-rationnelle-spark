
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';

const orangeBox = (children: React.ReactNode) => (
  <div style={{ background: '#fff7eb', border: '2px solid #ffa94d', borderRadius: '10px', padding: '18px 20px', marginBottom: '16px' }}>{children}</div>
);

const MathsIntegrationPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={7}
      chapterTitle="Intégration"
      description="Calcul intégral et primitives"
    >
      <div className="space-y-8 py-8">
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">7</span>
              <span className="font-semibold">Intégration sur un segment</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* Primitive */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Primitive</h3>
              <p>La primitive d’une fonction représente son antidéivée. Soit <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />, une fonction <LatexRenderer latex={"F"} /> est une <span className="font-semibold text-blue-900">primitive</span> de <LatexRenderer latex={"f"} /> sur <LatexRenderer latex={"I"} /> si <LatexRenderer latex={"\\forall x \\in I,\\ F'(x) = f(x)"} />.</p>
            </div>
            {/* Intégrale et primitive */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Intégrale et primitive</h3>
              <p>L’intégrale est liée à la différence des primitives. Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"F"} /> est une primitive de <LatexRenderer latex={"f"} />, alors pour <LatexRenderer latex={"(a, b) \\in I^2"} /> :</p>
              {orangeBox(<LatexRenderer latex={"\\boxed{\\int_{a}^{b} f(x) \, dx = F(b) - F(a)}"} />)}
            </div>
            {/* Primitive s’annulant en un point */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Primitive s’annulant en un point</h3>
              <p>Une primitive spécifique peut être définie à partir d’une borne fixe. Fixons <LatexRenderer latex={"a \\in I"} /> et définissons <LatexRenderer latex={"G(x) = \\int_{a}^{x} f(t) \, dt"} /> pour <LatexRenderer latex={"x \\in I"} />. Alors <LatexRenderer latex={"G"} /> est <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"I"} />, vérifie <LatexRenderer latex={"G(a) = 0"} /> et <LatexRenderer latex={"G'(x) = f(x)"} />, constituant la primitive de <LatexRenderer latex={"f"} /> s’annulant en <LatexRenderer latex={"a"} />.</p>
            </div>
            {/* Tableau de primitives */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Tableau de primitives usuelles</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-2 py-2">f(x)</th>
                      <th className="px-2 py-2">F(x)</th>
                      <th className="px-2 py-2">f(x)</th>
                      <th className="px-2 py-2">F(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"a \\ (a \\in \\mathbb{R})"} /></td>
                      <td className="py-3"><LatexRenderer latex={"a x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{x}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\ln |x|"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"x^{\\alpha} \\ (\\alpha \\neq -1)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{x^{\\alpha + 1}}{\\alpha + 1}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{\\sqrt{x}}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"2 \\sqrt{x}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\cos x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"-\\cos x"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{1 + x^2}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\arctan x"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\ln x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"x \\ln x - x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"a^x \\ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{a^x}{\\ln a}"} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tableau de primitives pour deux fonctions dérivables */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Primitives pour deux fonctions dérivables <LatexRenderer latex={"u, v"} /></h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-2 py-2">f</th>
                      <th className="px-2 py-2">F</th>
                      <th className="px-2 py-2">f</th>
                      <th className="px-2 py-2">F</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"a u' + b v'"} /></td>
                      <td className="py-3"><LatexRenderer latex={"a u + b v"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{u}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\ln |u|"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u^{\\alpha} u' \\ (\\alpha \\neq -1)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u^{\\alpha + 1}}{\\alpha + 1}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{\\sqrt{u}}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"2 \\sqrt{u}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u' \\cos u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"u' \\sin u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"-\\cos u"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u' e^u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"e^u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{1 + u^2}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\arctan u"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u^a \\ln u \\ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u^a}{\\ln a}"} /></td>
                      <td className="py-3"></td>
                      <td className="py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Linéarité */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Linéarité</h3>
              <p>L’intégrale respecte les combinaisons linéaires. Pour <LatexRenderer latex={"f, g"} /> continues sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"(\\lambda, \\mu) \\in \\mathbb{R}^2"} /> :</p>
              {orangeBox(<LatexRenderer latex={"\\int_{a}^{b} (\\lambda f(x) + \\mu g(x)) \, dx = \\lambda \\int_{a}^{b} f(x) \, dx + \\mu \\int_{a}^{b} g(x) \, dx"} />)}
            </div>
            {/* Relation de Chasles */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Relation de Chasles</h3>
              <p>L’intégrale se décompose sur des sous-intervalles. Si <LatexRenderer latex={"f"} /> est continue sur un intervalle <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"(a, b, c) \\in I^3"} /> :</p>
              {orangeBox(<LatexRenderer latex={"\\int_{a}^{b} f(x) \, dx = \\int_{a}^{c} f(x) \, dx + \\int_{c}^{b} f(x) \, dx"} />)}
            </div>
            {/* Positivité */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Positivité</h3>
              <p>La positivité influence la valeur de l’intégrale. Si <LatexRenderer latex={"f"} /> est continue et positive sur <LatexRenderer latex={"[a, b]"} /> avec <LatexRenderer latex={"a \\leq b"} />, alors <LatexRenderer latex={"\\int_{a}^{b} f(x) \, dx \\geq 0"} />. Si <LatexRenderer latex={"f"} /> est positive, non nulle, et <LatexRenderer latex={"a < b"} />, l’intégrale est <LatexRenderer latex={"> 0"} />. Si l’intégrale d’une fonction positive vaut 0, alors <LatexRenderer latex={"f"} /> est identiquement nulle sur <LatexRenderer latex={"[a, b]"} />.</p>
            </div>
            {/* Croissance de l’intégrale */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Croissance de l’intégrale</h3>
              <p>L’ordre des fonctions se reflète dans l’intégrale. Si <LatexRenderer latex={"f \\leq g"} /> sur <LatexRenderer latex={"[a, b]"} />, alors <LatexRenderer latex={"\\int_{a}^{b} f(x) \, dx \\leq \\int_{a}^{b} g(x) \, dx"} />.</p>
              <div className="mt-2 font-semibold">Inégalité triangulaire :</div>
              <p>L’intégrale absolue domine l’intégrale absolue de la fonction. On a :</p>
              {orangeBox(<LatexRenderer latex={"\\left| \\int_{a}^{b} f(t) \, dt \\right| \\leq \\int_{a}^{b} |f(t)| \, dt"} />)}
            </div>
            {/* Sommes de Riemann */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Sommes de Riemann</h3>
              <p>Les sommes approchent l’intégrale. Pour <LatexRenderer latex={"f"} /> continue sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />, définissons :</p>
              <div className="mb-2"><LatexRenderer latex={"S_n = \\frac{b - a}{n} \\displaystyle\\sum_{k=0}^{n-1} f\\left(a + k \\frac{b - a}{n}\\right), \\quad T_n = \\frac{b - a}{n} \\displaystyle\\sum_{k=1}^{n} f\\left(a + k \\frac{b - a}{n}\\right)"} /></div>
              <p>Alors <LatexRenderer latex={"\\lim_{n \\to +\\infty} S_n = \\lim_{n \\to +\\infty} T_n = \\int_{a}^{b} f(t) \, dt"} />.</p>
            </div>
            {/* Intégration par parties */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Intégration par parties</h3>
              <p>L’intégration par parties utilise la dérivée. Pour <LatexRenderer latex={"u, v \\in \\mathcal{C}^1[a, b]"} /> :</p>
              {orangeBox(<LatexRenderer latex={"\\int_{a}^{b} u'(x) v(x) \, dx = [u(x) v(x)]_{a}^{b} - \\int_{a}^{b} u(x) v'(x) \, dx"} />)}
            </div>
            {/* Changement de variable */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Changement de variable</h3>
              <p>Le changement de variable ajuste les bornes. Soient <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />, <LatexRenderer latex={"\\varphi"} /> de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"[a, b]"} /> avec <LatexRenderer latex={"\\varphi([a, b]) \\subset I"} />. Alors :</p>
              {orangeBox(<LatexRenderer latex={"\\int_{a}^{b} f(\\varphi(x)) \\varphi'(x) \, dx = \\int_{\\varphi(a)}^{\\varphi(b)} f(u) \, du"} />)}
            </div>
          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default MathsIntegrationPage;
