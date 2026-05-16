import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Separator } from '@/components/ui/separator';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
        <div className="bg-carnet-paper border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
                {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
                <div className="text-center">
                        {children}
                </div>
        </div>
);

const MathsPolynomesPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={8}
                        chapterTitle="Polynômes"
                        description="Définitions, opérations, dérivées, racines & factorisation, relations racines-coefficients et binôme de Newton."
                        slug="polynomes"
                        activeSection="course"
                        titleClassName="text-slate-800"
                        showNavigation={true}
                        previousChapter={{
                                slug: "nuplets-variables-aleatoires",
                                title: "n-uplets de variables aléatoires"
                        }}
                        nextChapter={{
                                slug: "couple-variables-aleatoires",
                                title: "Couple de variables aléatoires"
                        }}
                >
                        <div className="space-y-8">

                                {/* Section 1: Définitions & Opérations */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
                                        <CardHeader className="bg-carnet-paper border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Définitions & Opérations</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">

                                                {/* Définition */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Polynôme réel</h3>
                                                        <p className="mb-4 text-slate-700">Un polynôme <LatexRenderer latex="P" /> est une expression de la forme :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="P(x) = a_0 + a_1 x + \dots + a_n x^n \quad (a_i \in \mathbb{R})" />
                                                        </FormulaBox>
                                                        <p className="mt-2 text-slate-700">
                                                                <span className="font-semibold">Degré :</span> Plus grand indice <LatexRenderer latex="n" /> tel que <LatexRenderer latex="a_n \neq 0" />. On note <LatexRenderer latex="\deg P = n" />.
                                                                <br />
                                                                <span className="font-semibold">Convention :</span> <LatexRenderer latex="\deg 0 = -\infty" />.
                                                                <br />
                                                                <span className="font-semibold">Ensemble :</span> <LatexRenderer latex="\mathbb{R}_n[X]" /> désigne l'ensemble des polynômes de degré <LatexRenderer latex="\leq n" />.
                                                        </p>
                                                </div>

                                                <Separator />

                                                {/* Opérations */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Opérations sur les degrés</h3>
                                                        <ComparisonGrid>
                                                                <ComparisonCard label="Somme : inégalité">
                                                                        <div className="text-center my-2">
                                                                                <LatexRenderer latex="\deg(P + Q) \leq \max(\deg P, \deg Q)" />
                                                                        </div>
                                                                        <p className="text-sm mt-2 italic">Égalité si <LatexRenderer latex="\deg P \neq \deg Q" />.</p>
                                                                </ComparisonCard>
                                                                <ComparisonCard label="Produit : égalité">
                                                                        <div className="text-center my-2">
                                                                                <LatexRenderer latex="\deg(PQ) = \deg P + \deg Q" />
                                                                        </div>
                                                                        <p className="text-sm mt-2 italic">Toujours, sur un corps intègre comme <LatexRenderer latex="\mathbb{R}" />.</p>
                                                                </ComparisonCard>
                                                        </ComparisonGrid>
                                                </div>

                                                <Separator />

                                                {/* Division Euclidienne */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Division Euclidienne</h3>
                                                        <p className="mb-2 text-slate-700">Pour tout <LatexRenderer latex="A, B" /> avec <LatexRenderer latex="B \neq 0" />, il existe un unique couple <LatexRenderer latex="(Q, R)" /> tel que :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="A = B Q + R \quad \text{avec} \quad \deg R < \deg B" />
                                                        </FormulaBox>
                                                </div>

                                        </CardContent>
                                </Card>

                                {/* Section 2: Dérivation & Taylor */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
                                        <CardHeader className="bg-carnet-paper border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Dérivation & Taylor</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Formule de Taylor</h3>
                                                        <p className="mb-4 text-slate-700">Pour tout polynôme <LatexRenderer latex="P" /> de degré <LatexRenderer latex="n" /> et tout réel <LatexRenderer latex="a" /> :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="P(x) = \sum_{k=0}^n \frac{P^{(k)}(a)}{k!} (x - a)^k" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: Racines & Factorisation */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-carnet-paper-2">
                                        <CardHeader className="bg-carnet-paper border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-carnet-paper-2 border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Racines & Factorisation</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">

                                                {/* Racines */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Racines</h3>
                                                        <div className="bg-carnet-paper p-4 rounded border border-slate-100 space-y-3">
                                                                <p className="text-slate-700"><span className="font-semibold">Définition :</span> <LatexRenderer latex="r" /> est racine si <LatexRenderer latex="P(r)=0" />.</p>
                                                                <p className="text-slate-700"><span className="font-semibold">Propriété :</span> <LatexRenderer latex="P(r)=0 \iff (x-r)" /> divise <LatexRenderer latex="P" />.</p>
                                                                <p className="text-slate-700"><span className="font-semibold">Multiplicité :</span> <LatexRenderer latex="r" /> est d'ordre <LatexRenderer latex="m" /> si <LatexRenderer latex="(x-r)^m" /> divise <LatexRenderer latex="P" /> et <LatexRenderer latex="(x-r)^{m+1}" /> ne divise pas <LatexRenderer latex="P" />.</p>
                                                        </div>
                                                </div>

                                                <Separator />

                                                {/* Trinôme */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Second Degré & Relations coefficients-racines</h3>
                                                        <p className="mb-4 text-slate-700">Pour <LatexRenderer latex="P(x) = ax^2 + bx + c" /> avec racines <LatexRenderer latex="x_1, x_2" /> :</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}" />
                                                        </FormulaBox>
                                                </div>

                                                <Separator />

                                                {/* Binôme de Newton */}
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Binôme de Newton</h3>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}" />
                                                        </FormulaBox>
                                                        <p className="text-sm text-slate-500 mt-2 text-center">Rappel : Nombre de parties d'un ensemble à <LatexRenderer latex="n" /> éléments = <LatexRenderer latex="2^n" />.</p>
                                                </div>

                                        </CardContent>
                                </Card>

                        </div>
                </MathChapterTemplate>
        );
};

export default MathsPolynomesPage;
