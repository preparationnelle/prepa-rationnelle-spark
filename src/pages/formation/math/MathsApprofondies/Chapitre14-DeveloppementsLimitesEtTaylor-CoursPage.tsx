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

const MathsDeveloppementsLimitesPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={14}
                        chapterTitle="Développements Limités & Taylor"
                        description="Formule de Taylor (reste intégral, inégalité de Taylor–Lagrange), DL d'ordre n (Taylor–Young), unicité et développements usuels."
                        slug="developpements-limites-formule-de-taylor"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "series-numeriques",
                                title: "Séries Numériques (Ch 13)"
                        }}
                        nextChapter={{
                                slug: "integrales-impropres-et-criteres",
                                title: "Intégrales impropres (Ch 15)"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Formule de Taylor */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Formule de Taylor</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <FormulaBox title="Formule de Taylor avec reste intégral">
                                                                <LatexRenderer latex="\displaystyle f(b) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (b - a)^k + \int_{a}^{b} \frac{(b-t)^n}{n!} f^{(n+1)}(t) \, dt" />
                                                        </FormulaBox>
                                                        <div className="mt-6">
                                                                <p className="text-slate-700 mb-2 font-semibold">Inégalité de Taylor-Lagrange :</p>
                                                                <FormulaBox>
                                                                        <LatexRenderer latex="\displaystyle \left| f(b) - \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (b - a)^k \right| \le \sup |f^{(n+1)}| \frac{|b - a|^{n+1}}{(n+1)!}" />
                                                                </FormulaBox>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Développements Limités */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Développements Limités (DL)</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                <LatexRenderer latex="f(x) = P_n(x-x_0) + o((x-x_0)^n)" />.
                                                        </p>
                                                        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400 mt-4">
                                                                <h4 className="font-semibold text-slate-800 mb-2">Propriétés</h4>
                                                                <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                                                                        <li>Unicité du DL.</li>
                                                                        <li>Somme, Produit, Composition (tronquer à l'ordre n).</li>
                                                                        <li>Intégration terme à terme permise.</li>
                                                                        <li>Dérivation : REQUIERT <LatexRenderer latex="f'" /> admette un DL.</li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: DL Usuels */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">DL Usuels en 0</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                        <FormulaBox title="Exponentielle">
                                                                <LatexRenderer latex="\displaystyle e^x = \sum_{k=0}^n \frac{x^k}{k!} + o(x^n)" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Logarithme">
                                                                <LatexRenderer latex="\displaystyle \ln(1+x) = \sum_{k=1}^n (-1)^{k-1} \frac{x^k}{k} + o(x^n)" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Sinus">
                                                                <LatexRenderer latex="\displaystyle \sin x = x - \frac{x^3}{6} + \dots + (-1)^p \frac{x^{2p+1}}{(2p+1)!} + o(x^{2p+1})" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Cosinus">
                                                                <LatexRenderer latex="\displaystyle \cos x = 1 - \frac{x^2}{2} + \dots + (-1)^p \frac{x^{2p}}{(2p)!} + o(x^{2p})" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Puissance">
                                                                <LatexRenderer latex="\displaystyle (1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + \dots + \binom{\alpha}{n} x^n + o(x^n)" />
                                                        </FormulaBox>
                                                        <FormulaBox title="Géométrique">
                                                                <LatexRenderer latex="\displaystyle \frac{1}{1-x} = 1 + x + x^2 + \dots + x^n + o(x^n) = \sum_{k=0}^n x^k + o(x^n)" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                        </div>
                </MathChapterTemplate>
        );
};

export default MathsDeveloppementsLimitesPage;
