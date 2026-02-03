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

const MathsIntegrationIntervallePage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={15}
                        chapterTitle="Intégrales impropres & critères"
                        description="Nature des intégrales impropres (bornes infinies ou singularités), prolongement par continuité, convergence absolue, critères de comparaison (équivalence, négligeabilité). Intégrales de Riemann et fonction Gamma."
                        slug="integrales-impropres-criteres-de-convergence"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "developpements-limites-et-taylor",
                                title: "DL et Taylor (Ch 14)"
                        }}
                        nextChapter={{
                                slug: "probabilites-generales-variables-discretes", // Guessing next based on task.md
                                title: "Probabilités Générales"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Nature et convergence */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Nature et convergence</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Si <LatexRenderer latex="f" /> est continue sur <LatexRenderer latex="[a, b[" /> (avec <LatexRenderer latex="b \in \mathbb{R} \cup \{+\infty\}" />), l'intégrale impropre converge si la limite suivante existe et est finie :
                                                        </p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="\displaystyle \lim\limits_{x \to b^{-}} \int\limits_{a}^{x} f(t) \, dt" />
                                                        </FormulaBox>

                                                        <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                                                <h4 className="font-semibold text-slate-800 mb-2">Théorème du Reste</h4>
                                                                <p className="text-slate-700 text-sm">
                                                                        Si <LatexRenderer latex="\int_{a}^{b} f" /> converge, alors <LatexRenderer latex="\lim\limits_{x \to b} \int_{x}^{b} f(t) \, dt = 0" />.
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Critères de convergence */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Critères de comparaison</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Pour des fonctions <strong>positives</strong> au voisinage de la borne critique <LatexRenderer latex="b" /> :
                                                        </p>
                                                        <div className="space-y-4">
                                                                <div className="border border-slate-200 rounded p-4">
                                                                        <p className="font-semibold text-slate-800 mb-1">Comparaison</p>
                                                                        <p className="text-slate-700 text-sm">Si <LatexRenderer latex="0 \le f \le g" /> et <LatexRenderer latex="\int g" /> CV, alors <LatexRenderer latex="\int f" /> CV.</p>
                                                                </div>
                                                                <div className="border border-slate-200 rounded p-4">
                                                                        <p className="font-semibold text-slate-800 mb-1">Équivalence</p>
                                                                        <p className="text-slate-700 text-sm">Si <LatexRenderer latex="f \sim g" /> (<LatexRenderer latex="g \ge 0" />), alors les intégrales sont de même nature.</p>
                                                                </div>
                                                                <div className="border border-slate-200 rounded p-4">
                                                                        <p className="font-semibold text-slate-800 mb-1">Négligeabilité</p>
                                                                        <p className="text-slate-700 text-sm">Si <LatexRenderer latex="f = o(g)" /> (<LatexRenderer latex="g \ge 0" />) et <LatexRenderer latex="\int g" /> CV, alors <LatexRenderer latex="\int f" /> CV.</p>
                                                                </div>
                                                        </div>

                                                        <p className="text-slate-700 mt-6 mb-2">
                                                                <strong>Convergence Absolue :</strong>
                                                        </p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="\displaystyle \int |f| \text{ converge } \implies \int f \text{ converge}" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: Intégrales de référence */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Intégrales de référence</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-4">
                                                        <FormulaBox title="Intégrale de Riemann en +∞">
                                                                <LatexRenderer latex="\displaystyle \int\limits_{a}^{+\infty} \frac{dt}{t^{\alpha}} \quad (a>0)" />
                                                                <span className="ml-4 text-emerald-600 font-semibold">Converge ssi <LatexRenderer latex="\alpha > 1" /></span>
                                                        </FormulaBox>

                                                        <FormulaBox title="Intégrale de Riemann en 0 (ou borne finie)">
                                                                <LatexRenderer latex="\displaystyle \int\limits_{0}^{a} \frac{dt}{t^{\alpha}} \quad (a>0)" />
                                                                <span className="ml-4 text-emerald-600 font-semibold">Converge ssi <LatexRenderer latex="\alpha < 1" /></span>
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>
                        </div>
                </MathChapterTemplate>
        );
};

export default MathsIntegrationIntervallePage;
