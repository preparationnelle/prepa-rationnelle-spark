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

const MathsSeriesPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={29}
                        chapterTitle="Séries Numériques"
                        description="Convergence, sommes partielles, critères de comparaison, règles de d'Alembert et Cauchy, séries alternées."
                        slug="series-numeriques"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "estimation-statistique-avancee",
                                title: "Estimation (Ch 28)"
                        }}
                        nextChapter={{
                                slug: "developpements-limites-et-taylor",
                                title: "DL et Taylor (Ch 14)"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Généralités */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Généralités</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Soit <LatexRenderer latex="(u_n)" /> une suite réelle. On appelle <strong>série</strong> de terme général <LatexRenderer latex="u_n" /> la suite des sommes partielles <LatexRenderer latex="S_n = \sum_{k=0}^n u_k" />.
                                                        </p>
                                                        <FormulaBox title="Convergence">
                                                                <LatexRenderer latex="\displaystyle \sum u_n \text{ converge } \iff (S_n) \text{ converge.}" />
                                                                <br />
                                                                <LatexRenderer latex="\text{Somme : } S = \displaystyle \sum\limits_{n=0}^{+\infty} u_n = \lim\limits_{n \to +\infty} S_n" />
                                                        </FormulaBox>
                                                        <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                                                <h4 className="font-semibold text-slate-800 mb-2">Condition Nécessaire</h4>
                                                                <p className="text-slate-700 text-sm">
                                                                        Si <LatexRenderer latex="\sum u_n" /> converge, alors <LatexRenderer latex="\lim_{n \to \infty} u_n = 0" />. (La réciproque est fausse !).
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Séries à termes positifs */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Séries à termes positifs</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Pour <LatexRenderer latex="u_n \geq 0" />, la série converge ssi la suite <LatexRenderer latex="(S_n)" /> est majorée.
                                                        </p>

                                                        <div className="grid md:grid-cols-2 gap-6">
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Comparaison</h4>
                                                                        <p className="text-slate-700 text-sm">Si <LatexRenderer latex="0 \le u_n \le v_n" /> :</p>
                                                                        <ul className="list-disc list-inside text-sm text-slate-700 mt-1">
                                                                                <li><LatexRenderer latex="\sum v_n" /> CV <LatexRenderer latex="\implies \sum u_n" /> CV</li>
                                                                                <li><LatexRenderer latex="\sum u_n" /> DV <LatexRenderer latex="\implies \sum v_n" /> DV</li>
                                                                        </ul>
                                                                </div>
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Équivalence</h4>
                                                                        <p className="text-slate-700 text-sm">Si <LatexRenderer latex="u_n \sim v_n" /> et <LatexRenderer latex="v_n \geq 0" /> :</p>
                                                                        <p className="text-slate-700 text-sm mt-1">
                                                                                Alors <LatexRenderer latex="\sum u_n" /> et <LatexRenderer latex="\sum v_n" /> sont de même nature.
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: Séries de référence */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Séries de référence</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-4">
                                                        <FormulaBox title="Série Géométrique">
                                                                <LatexRenderer latex="\displaystyle \sum q^n \text{ converge } \iff |q| < 1" />
                                                                <br />
                                                                <LatexRenderer latex="\displaystyle \sum\limits_{n=0}^{+\infty} q^n = \frac{1}{1-q}" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Série de Riemann">
                                                                <LatexRenderer latex="\displaystyle \sum \frac{1}{n^{\alpha}} \text{ converge } \iff \alpha > 1" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Série Exponentielle">
                                                                <LatexRenderer latex="\displaystyle \sum\limits_{n=0}^{+\infty} \frac{x^n}{n!} = e^x \quad (\forall x \in \mathbb{R})" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>
                        </div>
                </MathChapterTemplate>
        );
};

export default MathsSeriesPage;
