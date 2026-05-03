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

const MathsIntegrationPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={7}
                        chapterTitle="Intégration sur un segment"
                        description="Primitives, intégrale définie, propriétés (Chasles, positivité, croissance), sommes de Riemann et techniques d’intégration."
                        slug="integration-sur-un-segment"
                        activeSection="course"
                        titleClassName="text-slate-800"
                        showNavigation={true}
                        previousChapter={{
                                slug: "derivation",
                                title: "Dérivation"
                        }}
                        nextChapter={{
                                slug: "polynomes",
                                title: "Polynômes"
                        }}
                >
                        <div className="space-y-8">

                                {/* Section 1 - Définitions et Primitives */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Primitives & Intégrale définie</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">

                                                {/* Primitive */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Définition</h3>
                                                        <p className="mb-4 text-slate-700">Soit <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />. Une <em>primitive</em> de <LatexRenderer latex={"f"} /> est une fonction <LatexRenderer latex={"F"} /> dérivable telle que :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex={"\\forall x \\in I, \\quad F'(x) = f(x)"} />
                                                        </FormulaBox>
                                                </div>

                                                <Separator />

                                                {/* Lien Intégrale - Primitive */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Lien Intégrale - Primitive</h3>
                                                        <FormulaBox>
                                                                <LatexRenderer latex={"\\int_a^b f(x)\\,dx = F(b) - F(a)"} />
                                                        </FormulaBox>
                                                        <div className="bg-slate-50 p-4 rounded border border-slate-100 mt-4">
                                                                <span className="font-semibold text-slate-800 mb-2 block">Fonction définie par une intégrale</span>
                                                                <p className="text-sm text-slate-600 mb-2">
                                                                        La fonction <LatexRenderer latex={"x \\mapsto \\int_a^x f(t)\\,dt"} /> est l'unique primitive de <LatexRenderer latex={"f"} /> qui s'annule en <LatexRenderer latex={"a"} />.
                                                                </p>
                                                        </div>
                                                </div>

                                                <Separator />

                                                {/* Primitives usuelles */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-4 text-slate-900">Primitives usuelles</h3>
                                                        <div className="overflow-x-auto border border-slate-200 rounded-lg">
                                                                <table className="w-full text-sm">
                                                                        <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                                                                                <tr>
                                                                                        <th className="py-2 px-4 text-left">Fonction <LatexRenderer latex={"f(x)"} /></th>
                                                                                        <th className="py-2 px-4 text-left">Primitive <LatexRenderer latex={"F(x)"} /></th>
                                                                                        <th className="py-2 px-4 text-left">Intervalle</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody className="divide-y divide-slate-100">
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"x^\\alpha \\ (\\alpha \\neq -1)"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\frac{x^{\\alpha+1}}{\\alpha+1}"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /> ou <LatexRenderer latex={"\\mathbb{R}^*_+"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"1/x"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\ln|x|"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}^*"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"e^x"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"e^x"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\cos x"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\sin x"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\sin x"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"-\\cos x"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\frac{1}{1+x^2}"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\arctan x"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"\\mathbb{R}"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\frac{u'}{u}"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"\\ln|u|"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"I"} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"u'e^u"} /></td>
                                                                                        <td className="py-2 px-4"><LatexRenderer latex={"e^u"} /></td>
                                                                                        <td className="py-2 px-4 text-slate-500"><LatexRenderer latex={"I"} /></td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>
                                                        </div>
                                                </div>

                                        </CardContent>
                                </Card>

                                {/* Section 2 - Propriétés */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Propriétés fondamentales</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">

                                                <div className="grid md:grid-cols-2 gap-8">
                                                        <div>
                                                                <h3 className="text-lg font-bold mb-2 text-slate-900">Linéarité & Chasles</h3>
                                                                <div className="space-y-4">
                                                                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                                                                <LatexRenderer latex={"\\int_a^b (\\lambda f + \\mu g) = \\lambda \\int f + \\mu \\int g"} />
                                                                        </div>
                                                                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                                                                <LatexRenderer latex={"\\int_a^b f = \\int_a^c f + \\int_c^b f"} />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <h3 className="text-lg font-bold mb-2 text-slate-900">Ordre & Inégalités</h3>
                                                                <div className="space-y-4">
                                                                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                                                                <span className="text-sm font-semibold text-slate-700 block mb-1">Croissance</span>
                                                                                <LatexRenderer latex={"f \\leq g \\implies \\int_a^b f \\leq \\int_a^b g \\quad (a \\leq b)"} />
                                                                        </div>
                                                                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                                                                <span className="text-sm font-semibold text-slate-700 block mb-1">Inégalité triangulaire</span>
                                                                                <LatexRenderer latex={"|\\int_a^b f| \\leq \\int_a^b |f| \\quad (a \\leq b)"} />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>

                                                <Separator />

                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Sommes de Riemann</h3>
                                                        <p className="text-slate-700 mb-4">Approximation de l'intégrale par des rectangles :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\frac{b-a}{n} \\sum_{k=0}^{n-1} f\\left(a + k\\frac{b-a}{n}\\right) = \\int_a^b f(t)\\,dt"} />
                                                        </FormulaBox>
                                                </div>

                                        </CardContent>
                                </Card>

                                {/* Section 3 - Techniques de calcul */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Techniques d'intégration</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">

                                                {/* IPP */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Intégration par parties (IPP)</h3>
                                                        <p className="text-slate-700 mb-2">Pour <LatexRenderer latex={"u, v"} /> de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex={"\\int_a^b u'(x)v(x)\\,dx = [u(x)v(x)]_a^b - \\int_a^b u(x)v'(x)\\,dx"} />
                                                        </FormulaBox>
                                                </div>

                                                <Separator />

                                                {/* Changement de variable */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Changement de variable</h3>
                                                        <p className="text-slate-700 mb-2">Soit <LatexRenderer latex={"\\varphi"} /> de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex={"\\int_{\\varphi(a)}^{\\varphi(b)} f(t)\\,dt = \\int_a^b f(\\varphi(x))\\varphi'(x)\\,dx"} />
                                                        </FormulaBox>
                                                        <div className="bg-blue-50 border border-blue-100 p-4 rounded text-blue-900 text-sm mt-4">
                                                                <strong>Conseil pour la rédaction :</strong> Toujours préciser l'intervalle de définition, la bijectivité (si nécessaire pour les bornes inverses) et la régularité <LatexRenderer latex={"\\mathcal{C}^1"} /> du changement de variable.
                                                        </div>
                                                </div>

                                        </CardContent>
                                </Card>

                        </div>
                </MathChapterTemplate>
        );
};

export default MathsIntegrationPage;
