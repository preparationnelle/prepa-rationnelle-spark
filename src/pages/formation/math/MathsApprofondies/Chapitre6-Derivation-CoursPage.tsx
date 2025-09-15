
import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const orangeBox = (children: React.ReactNode) => (
  <div style={{ background: '#fff7eb', border: '2px solid #ffa94d', borderRadius: '10px', padding: '18px 20px', marginBottom: '16px' }}>{children}</div>
);

const MathsDerivationPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Chapitre 6 : Dérivation"
      description="Dérivabilité, calcul différentiel, règles de dérivation, théorèmes de Rolle et des accroissements finis, extremums et convexité"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50 mb-8">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Cours
            </Button>
            <Link to="/formation/maths-derivation-exercices">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-derivation-flashcards">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-derivation-quiz">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8 py-8">
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">6</span>
              <span className="font-semibold">Dérivabilité et calcul différentiel</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* Définition */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Définition</h3>
              <p>Soit une fonction réelle <LatexRenderer latex={"f"} /> définie en un réel <LatexRenderer latex={"x_0"} />.</p>
              <ul className="mb-2 ml-6">
                <li className="mb-2"> <span className="font-semibold text-blue-900">Dérivable en <LatexRenderer latex={"x_0"} /></span> si la limite
                  {orangeBox(<LatexRenderer latex={"f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}"} />)}
                  existe et est finie.
                </li>
                <li className="mb-2"> <span className="font-semibold text-blue-900">Dérivable à droite/gauche</span> en <LatexRenderer latex={"x_0"} /> si la limite précédente, prise pour <LatexRenderer latex={"x \\to x_0^+"} /> (resp. <LatexRenderer latex={"x \\to x_0^-"} />), existe ; on la note <LatexRenderer latex={"f'_d(x_0)"} /> (resp. <LatexRenderer latex={"f'_g(x_0)"} />).</li>
              </ul>
              <div className="mb-2"><span className="font-semibold text-blue-900">Lien gauche–droite</span> : <LatexRenderer latex={"f"} /> est dérivable en <LatexRenderer latex={"x_0"} /> <i>ssi</i> elle est dérivable à gauche <b>et</b> à droite en <LatexRenderer latex={"x_0"} /> et <LatexRenderer latex={"f'_g(x_0) = f'_d(x_0)"} />.</div>
            </div>
            {/* Tangentes */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Tangentes</h3>
              <ul className="mb-2 ml-6">
                <li className="mb-2">Si <LatexRenderer latex={"f"} /> est dérivable en <LatexRenderer latex={"x_0"} />, la tangente en <LatexRenderer latex={"(x_0, f(x_0))"} /> a pour équation
                  {orangeBox(<LatexRenderer latex={"y = f'(x_0)(x - x_0) + f(x_0)"} />)}
                </li>
                <li className="mb-2">Si <LatexRenderer latex={"f"} /> n’est pas dérivable mais possède une dérivée unilatérale en <LatexRenderer latex={"x_0"} />, on parle de <span className="font-semibold text-blue-900">demi-tangente</span>.</li>
                <li className="mb-2">Si <LatexRenderer latex={"\\frac{f(x) - f(x_0)}{x - x_0} \\to \\pm\\infty"} />, la tangente est <span className="font-semibold text-blue-900">verticale</span>.</li>
              </ul>
            </div>
            {/* Classe C^k */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Classe <LatexRenderer latex={"\\mathcal{C}^k"} /></h3>
              <p>Si <LatexRenderer latex={"f"} /> est dérivable <LatexRenderer latex={"k"} /> fois sur un intervalle <LatexRenderer latex={"I"} /> et si <LatexRenderer latex={"f^{(k)}"} /> est continue sur <LatexRenderer latex={"I"} />, alors <LatexRenderer latex={"f"} /> est dite de <span className="font-semibold text-blue-900">classe <LatexRenderer latex={"\\mathcal{C}^k"} /></span> sur <LatexRenderer latex={"I"} />. On note <LatexRenderer latex={"\\mathcal{C}^k(I)"} /> l’ensemble de ces fonctions.</p>
            </div>
            {/* Dérivabilité et fonctions usuelles */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Dérivabilité et fonctions usuelles</h3>
              <ul className="mb-2 ml-6">
                <li className="mb-2">Sont dérivables (même <LatexRenderer latex={"\\mathcal{C}^1"} />) sur leur domaine : polynômes, fonctions rationnelles, trigonométriques, exponentielle, logarithme.</li>
                <li className="mb-2">La valeur absolue <LatexRenderer latex={"x \\mapsto |x|"} /> et la racine <LatexRenderer latex={"x \\mapsto \\sqrt[k]{x}"} /> (<LatexRenderer latex={"k \\in \\mathbb{N}^*"} />) ne sont pas dérivables en <LatexRenderer latex={"0"} />.</li>
              </ul>
            </div>
            {/* Tableau des dérivées usuelles */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Tableau des dérivées usuelles</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-2 py-2">f(x)</th>
                      <th className="px-2 py-2">f'(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"x^{\\alpha} \\ (\\alpha \\in \\mathbb{R}^*)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\alpha x^{\\alpha-1}"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\sqrt{x}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{2\\sqrt{x}}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"e^{x}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"e^{x}"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\ln|x|"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{x}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\cos x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"-\\sin x"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\tan x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"1+\\tan^{2}x=\\frac{1}{\\cos^{2}x}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\cos x"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb]">
                      <td className="py-3"><LatexRenderer latex={"\\arctan x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{1+x^{2}}"} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Formules de dérivation pour deux fonctions dérivables sous forme de tableau (immédiatement après) */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2 text-slate-800">Pour deux fonctions dérivables <LatexRenderer latex={"u, v"} /> :</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border border-slate-300 bg-white rounded-lg">
                  <tbody>
                    <tr className="bg-white border-b-2">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(u + \\lambda v)' = u' + \\lambda v'\\quad (\\lambda \\in \\mathbb{R})"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(u^{\\alpha})' = \\alpha u^{\\alpha-1}u'"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(e^{u})' = u'e^{u}"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={"(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(\\arctan u)' = \\frac{u'}{1+u^2}"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={"(\\ln|u|)' = \\frac{u'}{u}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(\\sin u)' = u'\\cos u"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={"(\\cos u)' = -u'\\sin u"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb]">
                      <td className="py-3 px-6 border-r-2 border-slate-200"><LatexRenderer latex={"(\\tan u)' = \\frac{u'}{\\cos^2 u}"} /></td>
                      <td className="py-3 px-6"><LatexRenderer latex={""} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Dérivée d’une bijection réciproque */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Dérivée d’une bijection réciproque</h3>
              <p>Si <LatexRenderer latex={"f"} /> est une bijection dérivable de <LatexRenderer latex={"I"} /> sur <LatexRenderer latex={"J = f(I)"} /> et que <LatexRenderer latex={"f'(x) \\neq 0"} /> pour <LatexRenderer latex={"x = f^{-1}(y)"} />, alors :</p>
              {orangeBox(<LatexRenderer latex={"(f^{-1})'(y) = \\frac{1}{f'\\!\\bigl(f^{-1}(y)\\bigr)}"} />)}
            </div>
            {/* Dérivée et sens de variation */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Dérivée et sens de variation</h3>
              <div className="flex flex-col space-y-2 mt-2">
                <LatexRenderer latex={"f'(x) \\geq 0\\ \\text{ sur }\\ I\\ \\Longrightarrow\\ f\\ \\text{ croissante sur }\\ I."} />
                <LatexRenderer latex={"f'(x) \\leq 0\\ \\text{ sur }\\ I\\ \\Longrightarrow\\ f\\ \\text{ décroissante sur }\\ I."} />
                <LatexRenderer latex={"f'(x) = 0\\ \\text{ sur }\\ I\\ \\Longrightarrow\\ f\\ \\text{ constante sur }\\ I."} />
              </div>
            </div>
            {/* Théorème de Rolle et EAF */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Théorème de Rolle et EAF</h3>
              <ul className="mb-2 ml-6">
                <li className="mb-2">(Rolle) : si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"[a, b]"} />, dérivable sur <LatexRenderer latex={"]a, b["} /> et <LatexRenderer latex={"f(a) = f(b)"} />, alors <LatexRenderer latex={"\\exists c \\in ]a, b["} /> tel que <LatexRenderer latex={"f'(c) = 0"} />.</li>
                <li className="mb-2">(Égalité des accroissements finis) : sous les mêmes hypothèses sans <LatexRenderer latex={"f(a) = f(b)"} />, <LatexRenderer latex={"\\exists c \\in ]a, b["} /> tel que
                  {orangeBox(<LatexRenderer latex={"f(b) - f(a) = (b - a) f'(c)"} />)}
                </li>
              </ul>
              <div className="mb-2">Si <LatexRenderer latex={"|f'(x)| \\leq M"} /> sur <LatexRenderer latex={"I"} />, alors <LatexRenderer latex={"\\forall a, b \\in I,\\ |f(b) - f(a)| \\leq M|b - a|"} />.</div>
            </div>
            {/* Prolongement de la dérivée */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Prolongement de la dérivée</h3>
              <p>Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"I"} /> et dérivable sur <LatexRenderer latex={"I \\setminus \{a\}"} /> avec <LatexRenderer latex={"\\lim_{x \\to a} f'(x) = \\ell"} />, alors <LatexRenderer latex={"f \\in \\mathcal{C}^1(I)"} /> et <LatexRenderer latex={"f'(a) = \\ell"} />.</p>
            </div>
            {/* Formule de Leibniz */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Formule de Leibniz</h3>
              <p>Pour <LatexRenderer latex={"f, g \\in \\mathcal{C}^n(I)"} /> :</p>
              {orangeBox(<LatexRenderer latex={"(fg)^{(n)}(x) = \\displaystyle\\sum_{k=0}^n \\binom{n}{k} f^{(k)}(x) g^{(n-k)}(x)"} />)}
            </div>
            {/* Points critiques et extrema */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Points critiques et extrema</h3>
              <ul className="mb-2 ml-6">
                <li className="mb-2"><LatexRenderer latex={"x_0"} /> est <span className="font-semibold text-blue-900">point critique</span> si <LatexRenderer latex={"f'(x_0) = 0"} />.</li>
                <li className="mb-2">(Condition nécessaire) : un extremum local pour <LatexRenderer latex={"f"} /> dérivable se situe en un point critique.</li>
                <li className="mb-2">(Condition suffisante, <LatexRenderer latex={"f \\in \\mathcal{C}^2"} />) : <LatexRenderer latex={"f''(x_0) > 0 \\Rightarrow"} /> minimum local, <LatexRenderer latex={"f''(x_0) < 0 \\Rightarrow"} /> maximum local.</li>
              </ul>
              <div className="mb-2">Sur <LatexRenderer latex={"]a, b["} />, <LatexRenderer latex={"x_0"} /> est extremum local <i>ssi</i> <LatexRenderer latex={"f'(x_0) = 0"} /> et <LatexRenderer latex={"f'"} /> change de signe en <LatexRenderer latex={"x_0"} />.</div>
            </div>
            {/* Convexité et concavité */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Convexité et concavité</h3>
              <p><LatexRenderer latex={"f"} /> est <span className="font-semibold text-blue-900">convexe</span> sur <LatexRenderer latex={"I"} /> si</p>
              {orangeBox(<LatexRenderer latex={"f(ta + (1-t)b) \\leq t f(a) + (1-t) f(b) \\qquad (a, b \\in I, t \\in [0, 1])"} />)}
              <p>Elle est <span className="font-semibold text-blue-900">concave</span> si l’inégalité est inversée.</p>
              <div className="mt-2 font-semibold">Critères :</div>
              <ul className="mb-2 ml-6">
                <li className="mb-2"><LatexRenderer latex={"f \\in \\mathcal{C}^1"} /> : <LatexRenderer latex={"f"} /> convexe <LatexRenderer latex={"\\Longleftrightarrow f'"} /> croissante.</li>
                <li className="mb-2"><LatexRenderer latex={"f \\in \\mathcal{C}^2"} /> : <LatexRenderer latex={"f"} /> convexe <LatexRenderer latex={"\\Longleftrightarrow f'' \\geq 0"} />.</li>
              </ul>
              <div className="mt-2 font-semibold">Inégalité de convexité (générale) :</div>
              <p>Pour <LatexRenderer latex={"f"} /> convexe et <LatexRenderer latex={"\\lambda_1, \dots, \\lambda_n \\in [0, 1]"} />, <LatexRenderer latex={"\\sum_{k=1}^n \\lambda_k = 1"} /> :</p>
              {orangeBox(<LatexRenderer latex={"f\\!\\Bigl(\\displaystyle\\sum_{k=1}^n \\lambda_k x_k\\Bigr) \\leq \\displaystyle\\sum_{k=1}^n \\lambda_k f(x_k)"} />)}
              <div className="mt-2 font-semibold">Point d’inflexion :</div>
              <p><LatexRenderer latex={"(x_0, f(x_0))"} /> est <span className="font-semibold text-blue-900">point d’inflexion</span> si la concavité change de part et d’autre de <LatexRenderer latex={"x_0"} />. Pour <LatexRenderer latex={"f \\in \\mathcal{C}^2"} /> cela équivaut à : <LatexRenderer latex={"f''(x_0) = 0"} /> avec changement de signe.</p>
              <div className="mt-2 font-semibold">Inégalités classiques :</div>
              <ul className="mb-2 ml-6">
                <li className="mb-2"><LatexRenderer latex={"\\forall x \\in \\mathbb{R},\\ e^{x} \\geq 1 + x"} /></li>
                <li className="mb-2"><LatexRenderer latex={"\\forall x > -1,\\ \\ln(1 + x) \\leq x"} /></li>
                <li className="mb-2"><LatexRenderer latex={"\\forall x \\in \\mathbb{R},\\ \\sin x \\leq x"} /></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default MathsDerivationPage;
