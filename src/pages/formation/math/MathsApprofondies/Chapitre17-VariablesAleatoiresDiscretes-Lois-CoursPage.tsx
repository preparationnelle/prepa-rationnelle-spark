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

const MathsVariablesAleatoiresPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={17}
                        chapterTitle="Variables aléatoires discrètes"
                        description="Variables aléatoires réelles, fonction de répartition, moments (espérance, variance) et lois usuelles discrètes (Bernoulli, Binomiale, Poissons, etc.)."
                        slug="variables-aleatoires-discretes-lois"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "espaces-probabilises-et-conditionnement",
                                title: "Espaces Probabilisés"
                        }}
                        nextChapter={{
                                slug: "convergences-theoremes-limites", // Guessing next based on task.md list
                                title: "Convergences & Théorèmes Limites"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Généralités */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Variables Aléatoires Discrètes</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Une <strong>variable aléatoire réelle</strong> <LatexRenderer latex="X" /> est une application mesurable <LatexRenderer latex="X: \Omega \to \mathbb{R}" />.
                                                                Elle est dite <strong>discrète</strong> si son support <LatexRenderer latex="X(\Omega)" /> est fini ou dénombrable.
                                                        </p>
                                                        <FormulaBox title="Fonction de répartition">
                                                                <LatexRenderer latex="F_X(x) = \mathbb{P}(X \le x)" />
                                                                <div className="h-4" />
                                                                <LatexRenderer latex="\mathbb{P}(a < X \le b) = F_X(b) - F_X(a)" />
                                                        </FormulaBox>

                                                        <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                                                <h4 className="font-semibold text-slate-800 mb-2">Loi de probabilité</h4>
                                                                <p className="text-slate-700 text-sm">
                                                                        La loi est entièrement déterminée par les probabilités <LatexRenderer latex="\mathbb{P}(X = x_k)" /> pour tout <LatexRenderer latex="x_k \in X(\Omega)" />.
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Espérance et Variance */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Moments</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-4">
                                                        <FormulaBox title="Espérance (si convergence absolue)">
                                                                <LatexRenderer latex="\mathbb{E}(X) = \sum_{x \in X(\Omega)} x \mathbb{P}(X = x)" />
                                                        </FormulaBox>

                                                        <FormulaBox title="Variance & Koenig-Huygens">
                                                                <LatexRenderer latex="\mathbb{V}(X) = \mathbb{E}\left( (X - \mathbb{E}(X))^2 \right) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2" />
                                                        </FormulaBox>

                                                        <div className="border border-slate-200 rounded p-4 mt-4">
                                                                <p className="font-semibold text-slate-800 mb-2">Propriétés</p>
                                                                <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                                                                        <li>Lineiarité de l'espérance : <LatexRenderer latex="\mathbb{E}(aX+b) = a\mathbb{E}(X) + b" /></li>
                                                                        <li>Quadraticité de la variance : <LatexRenderer latex="\mathbb{V}(aX+b) = a^2\mathbb{V}(X)" /></li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: Lois usuelles */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Lois Usuelles</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="border border-slate-200 rounded p-4">
                                                                <p className="font-bold text-slate-800 mb-2">Bernoulli <LatexRenderer latex="\mathcal{B}(p)" /></p>
                                                                <p className="text-sm text-slate-600 mb-2">Succès/Echec. Support <LatexRenderer latex="\{0,1\}" />.</p>
                                                                <p className="text-sm text-slate-600"><LatexRenderer latex="\mathbb{E}=p, \mathbb{V}=p(1-p)" /></p>
                                                        </div>
                                                        <div className="border border-slate-200 rounded p-4">
                                                                <p className="font-bold text-slate-800 mb-2">Binomiale <LatexRenderer latex="\mathcal{B}(n,p)" /></p>
                                                                <p className="text-sm text-slate-600 mb-2">Somme de <LatexRenderer latex="n" /> Bernoulli indép.</p>
                                                                <p className="text-sm text-slate-600"><LatexRenderer latex="\mathbb{E}=np, \mathbb{V}=np(1-p)" /></p>
                                                        </div>
                                                        <div className="border border-slate-200 rounded p-4">
                                                                <p className="font-bold text-slate-800 mb-2">Géométrique <LatexRenderer latex="\mathcal{G}(p)" /></p>
                                                                <p className="text-sm text-slate-600 mb-2">Rang du 1er succès. Support <LatexRenderer latex="\mathbb{N}^*" />.</p>
                                                                <p className="text-sm text-slate-600"><LatexRenderer latex="\mathbb{E}=1/p, \mathbb{V}=(1-p)/p^2" /></p>
                                                        </div>
                                                        <div className="border border-slate-200 rounded p-4">
                                                                <p className="font-bold text-slate-800 mb-2">Poisson <LatexRenderer latex="\mathcal{P}(\lambda)" /></p>
                                                                <p className="text-sm text-slate-600 mb-2">Evénements rares. Support <LatexRenderer latex="\mathbb{N}" />.</p>
                                                                <p className="text-sm text-slate-600"><LatexRenderer latex="\mathbb{E}=\lambda, \mathbb{V}=\lambda" /></p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>
                        </div>
                </MathChapterTemplate>
        );
};

export default MathsVariablesAleatoiresPage;
