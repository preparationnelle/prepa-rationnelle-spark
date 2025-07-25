
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';

const Box = ({ color, title, children }: { color: string, title: string, children: React.ReactNode }) => (
  <div style={{
    background: color === 'orange' ? '#fff7eb' : color === 'blue' ? '#e6f0ff' : '#f5f5f5',
    border: `2px solid ${color === 'orange' ? '#ffa94d' : color === 'blue' ? '#90bfff' : '#e0e0e0'}`,
    borderRadius: 16,
    margin: '24px 0',
    padding: 20,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
  }}>
    <div className={`font-bold mb-2 ${color === 'orange' ? 'text-orange-700' : color === 'blue' ? 'text-blue-700' : 'text-gray-700'}`}>{title}</div>
    <div>{children}</div>
  </div>
);

const MathsIntegrationPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={7}
      chapterTitle="Chapitre 7 : Intégration sur un segment"
      description="Primitives, intégrale définie, propriétés (Chasles, positivité, croissance), sommes de Riemann ; techniques d’intégration (par parties, changement de variable)"
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
            {/* Introduction */}
            <div>
              <div className="text-lg font-semibold mb-2">Introduction</div>
              <p>L’intégration sur un segment est une extension naturelle de la notion de primitive, permettant de calculer des aires et de modéliser des variations cumulées. Ce chapitre explore les primitives, les intégrales définies, leurs propriétés, et les techniques associées.</p>
            </div>
            {/* Définition : Primitive */}
            <Box color="blue" title="Définition : Primitive">
              <p>Soit <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />.<br />On appelle <em>primitive</em> de <LatexRenderer latex={"f"} /> sur <LatexRenderer latex={"I"} /> toute fonction <LatexRenderer latex={"F"} /> telle que :</p>
              <div className="my-2"><LatexRenderer latex={"\\forall x \\in I,\ F'(x) = f(x)."} /></div>
            </Box>
            {/* Théorème : Relation entre intégrale et primitive */}
            <Box color="orange" title="Théorème : Relation entre intégrale et primitive">
              <p>Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"F"} /> l'une de ses primitives, alors, pour <LatexRenderer latex={"(a, b) \\in I^2"} /> :</p>
              <div className="my-2"><LatexRenderer latex={"\\int_a^b f(x)\\,dx = F(b) - F(a)"} /></div>
            </Box>
            {/* Définition : Primitive à borne supérieure variable */}
            <Box color="blue" title="Définition : Primitive à borne supérieure variable">
              <p>Fixons <LatexRenderer latex={"a \\in I"} /> et définissons :</p>
              <div className="my-2"><LatexRenderer latex={"G(x) = \\int_a^x f(t)\\,dt \\quad (x \\in I)."} /></div>
              <p>La fonction <LatexRenderer latex={"G"} /> est <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"I"} />, vérifie <LatexRenderer latex={"G(a) = 0"} /> et <LatexRenderer latex={"G'(x) = f(x)"} /> ; c'est donc <em>la</em> primitive de <LatexRenderer latex={"f"} /> qui s'annule en <LatexRenderer latex={"a"} /> (intégrale à borne supérieure variable).</p>
            </Box>
            {/* Méthode : Tableaux de primitives */}
            <Box color="blue" title="Méthode : Tableaux de primitives">
              <div className="overflow-x-auto mb-4">
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
                      <td className="py-3"><LatexRenderer latex={"ax"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{x}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\ln |x|"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"x^{\\alpha} \ (\\alpha \neq -1)"} /></td>
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
                      <td className="py-3"><LatexRenderer latex={"a^x \ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{a^x}{\\ln a}"} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                      <td className="py-3"><LatexRenderer latex={"u^{\\alpha} u' \ (\\alpha \neq -1)"} /></td>
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
                      <td className="py-3"><LatexRenderer latex={"u^a \\ln u \ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u^a}{\\ln a}"} /></td>
                      <td className="py-3"></td>
                      <td className="py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Box>
            {/* Propriétés de l’intégrale */}
            {/* Théorème : Linéarité */}
            <Box color="orange" title="Théorème : Linéarité">
              <p>Pour <LatexRenderer latex={"f, g"} /> continues sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"(\\lambda, \\mu) \\in \\mathbb{R}^2"} /> :</p>
              <LatexRenderer latex={"\\int_a^b (\\lambda f(x) + \\mu g(x))\\,dx = \\lambda \\int_a^b f(x)\\,dx + \\mu \\int_a^b g(x)\\,dx"} />
            </Box>

            {/* Théorème : Relation de Chasles */}
            <Box color="orange" title="Théorème : Relation de Chasles">
              <p>Si <LatexRenderer latex={"f"} /> est continue sur un intervalle <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"(a, b, c) \\in I^3"} /> :</p>
              <LatexRenderer latex={"\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx"} />
            </Box>

            {/* Théorème : Positivité */}
            <Box color="orange" title="Théorème : Positivité">
              <p>Si <LatexRenderer latex={"f"} /> est continue, <em>positive</em> sur <LatexRenderer latex={"[a, b]"} /> avec <LatexRenderer latex={"a \\leq b"} />, alors :</p>
              <LatexRenderer latex={"\\int_a^b f(x)\\,dx \\geq 0"} />
              <p>Si <LatexRenderer latex={"f"} /> est positive, non nulle, et <LatexRenderer latex={"a < b"} />, alors l'intégrale est <LatexRenderer latex={"> 0"} />.<br />Si l'intégrale d'une fonction positive vaut <LatexRenderer latex={"0"} />, cette fonction est identiquement nulle sur <LatexRenderer latex={"[a, b]"} />.</p>
            </Box>

            {/* Théorème : Croissance de l'intégrale */}
            <Box color="orange" title="Théorème : Croissance de l'intégrale">
              <p>Si <LatexRenderer latex={"f \\leq g"} /> sur <LatexRenderer latex={"[a, b]"} /> alors :</p>
              <LatexRenderer latex={"\\int_a^b f(x)\\,dx \\leq \\int_a^b g(x)\\,dx"} />
            </Box>

            {/* Théorème : Inégalité triangulaire */}
            <Box color="orange" title="Théorème : Inégalité triangulaire">
              <LatexRenderer latex={"\\left|\\int_a^b f(t)\\,dt\\right| \\leq \\int_a^b |f(t)|\\,dt"} />
            </Box>

            {/* Définition : Sommes de Riemann */}
            <Box color="blue" title="Définition : Sommes de Riemann">
              <p>Pour <LatexRenderer latex={"f"} /> continue sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />, posons :</p>
              <LatexRenderer latex={"S_n = \\frac{b-a}{n} \\sum_{k=0}^{n-1} f\\left(a + k\\frac{b-a}{n}\\right), \\quad T_n = \\frac{b-a}{n} \\sum_{k=1}^n f\\left(a + k\\frac{b-a}{n}\\right)"} />
              <p>Alors :</p>
              <LatexRenderer latex={"\\lim_{n \\to +\\infty} S_n = \\lim_{n \\to +\\infty} T_n = \\int_a^b f(t)\\,dt"} />
            </Box>

            {/* Théorème : Intégration par parties */}
            <Box color="orange" title="Théorème : Intégration par parties">
              <p>Pour <LatexRenderer latex={"u, v \\in \\mathcal{C}^1[a, b]"} /> :</p>
              <LatexRenderer latex={"\\int_a^b u'(x)v(x)\\,dx = \\left[u(x)v(x)\\right]_a^b - \\int_a^b u(x)v'(x)\\,dx"} />
            </Box>

            {/* Théorème : Changement de variable */}
            <Box color="orange" title="Théorème : Changement de variable">
              <p>Soient <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />, <LatexRenderer latex={"\\varphi"} /> une fonction de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"[a, b]"} /> telle que <LatexRenderer latex={"\\varphi([a, b]) \\subset I"} />. Alors :</p>
              <LatexRenderer latex={"\\int_a^b f(\\varphi(x))\\varphi'(x)\\,dx = \\int_{\\varphi(a)}^{\\varphi(b)} f(u)\\,du"} />
            </Box>

          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default MathsIntegrationPage;
