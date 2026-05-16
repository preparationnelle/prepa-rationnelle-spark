import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
        <div className="bg-carnet-paper border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
                {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
                <div className="text-center">
                        {children}
                </div>
        </div>
);

const MathsInegalitesPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={18}
                        chapterTitle="Convergences & théorèmes limites"
                        description="Inégalités (Markov, Bienaymé-Tchebychev) ; convergence en probabilité (LFGN) ; convergence en loi (TCL) ; approximations usuelles."
                        slug="convergences-et-theoremes-limites"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "variables-aleatoires-discretes-lois",
                                title: "Variables Aléatoires"
                        }}
                        nextChapter={{
                                slug: "statistiques-estimation", // Guessing next based on task.md
                                title: "Statistiques"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Inégalités fondamentales */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
                                        <CardHeader className="bg-carnet-paper border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Inégalités fondamentales</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-4">
                                                        <FormulaBox title="Inégalité de Markov">
                                                                Pour <LatexRenderer latex="Z \ge 0" /> et <LatexRenderer latex="a > 0" /> :
                                                                <div className="my-2" />
                                                                <LatexRenderer latex="\mathbb{P}(Z \ge a) \le \frac{\mathbb{E}(Z)}{a}" />
                                                        </FormulaBox>

                                                        <FormulaBox title="Inégalité de Bienaymé-Tchebychev">
                                                                Pour tout <LatexRenderer latex="\varepsilon > 0" /> :
                                                                <div className="my-2" />
                                                                <LatexRenderer latex="\mathbb{P}(|Z - \mathbb{E}(Z)| \ge \varepsilon) \le \frac{\mathbb{V}(Z)}{\varepsilon^2}" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Convergences */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
                                        <CardHeader className="bg-carnet-paper border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Types de convergence</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <ComparisonGrid>
                                                        <ComparisonCard label={<>Convergence en probabilité&nbsp;(<LatexRenderer latex="\xrightarrow{\mathbb{P}}" />)</>}>
                                                                <p className="mb-2">
                                                                        <LatexRenderer latex="\forall \varepsilon > 0, \lim_{n \to \infty} \mathbb{P}(|Z_n - Z| \ge \varepsilon) = 0" />
                                                                </p>
                                                                <div className="mt-3 pt-3 border-t border-dashed border-carnet-red/30">
                                                                        <p className="text-xs uppercase tracking-wider font-semibold mb-1">Loi faible des grands nombres</p>
                                                                        <p className="text-sm">Si <LatexRenderer latex="(Y_k)" /> i.i.d intégrables :</p>
                                                                        <div className="text-center mt-1">
                                                                                <LatexRenderer latex="\overline{Y}_n = \frac{1}{n}\sum Y_k \xrightarrow{\mathbb{P}} \mathbb{E}(Y_1)" />
                                                                        </div>
                                                                </div>
                                                        </ComparisonCard>
                                                        <ComparisonCard label={<>Convergence en loi&nbsp;(<LatexRenderer latex="\xrightarrow{\mathcal{L}}" />)</>}>
                                                                <p className="mb-2">
                                                                        Convergence des fonctions de répartition en tout point de continuité de la limite.
                                                                </p>
                                                                <div className="mt-3 pt-3 border-t border-dashed border-carnet-red/30">
                                                                        <p className="text-xs uppercase tracking-wider font-semibold mb-1">Théorème central limite</p>
                                                                        <p className="text-sm">Si <LatexRenderer latex="(Y_k)" /> i.i.d (<LatexRenderer latex="\mu, \sigma^2" />) :</p>
                                                                        <div className="text-center mt-1">
                                                                                <LatexRenderer latex="\frac{\sqrt{n}(\overline{Y}_n - \mu)}{\sigma} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)" />
                                                                        </div>
                                                                </div>
                                                        </ComparisonCard>
                                                </ComparisonGrid>
                                        </CardContent>
                                </Card>
                        </div>
                </MathChapterTemplate>
        );
};

export default MathsInegalitesPage;
