import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre2EnsemblesEtApplicationsCoursPage = () => {
    return (
        <MathChapterTemplate
            chapterNumber={2}
            chapterTitle="Ensembles & applications"
            description="Opérations ensemblistes, relations, injections–surjections–bijections, théorème de la bijection monotone"
            slug="ensembles-et-applications"
            activeSection="course"
            titleClassName="text-slate-800"
            showNavigation={true}
            previousChapter={{
                slug: "elements-de-logique",
                title: "Éléments de logique"
            }}
            nextChapter={{
                slug: "sommes-produits-coefficients-binomiaux",
                title: "Sommes, produits & coefficients binomiaux"
            }}
        >
            <div className="space-y-8">

                {/* Section A - Opérations sur les ensembles */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                            <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                                A
                            </span>
                            <span className="font-semibold">Opérations sur les ensembles</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        {/* A.1 Comparaison et parties */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                A.1. Comparaison entre ensembles
                            </h3>
                            <div className="space-y-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <p className="text-slate-700 leading-relaxed">
                                        On dit qu'un ensemble <LatexRenderer latex="A" /> est <em>contenu</em> dans un ensemble <LatexRenderer latex="B" />, et l'on écrit <LatexRenderer latex="A \subset B" />, lorsque tout élément de <LatexRenderer latex="A" /> appartient également à <LatexRenderer latex="B" />.
                                    </p>
                                </div>
                                <div className="bg-white border-l-4 border-slate-400 pl-4 py-2">
                                    <p className="text-slate-700 leading-relaxed">
                                        Deux ensembles <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont déclarés <em>égaux</em>, noté <LatexRenderer latex="A = B" />, dès que <LatexRenderer latex="A \subset B" /> et <LatexRenderer latex="B \subset A" />.
                                    </p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <p className="text-slate-700 leading-relaxed">
                                        Un ensemble <LatexRenderer latex="A" /> est une <em>partie</em> (ou <em>sous-ensemble</em>) d'un ensemble <LatexRenderer latex="E" /> dès que <LatexRenderer latex="A \subset E" />. L'ensemble de toutes les parties de <LatexRenderer latex="E" /> se note <LatexRenderer latex="\mathcal{P}(E)" />.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* A.2 Opérations de base */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                A.2. Intersection et réunion
                            </h3>
                            <div className="space-y-5">
                                <div className="border border-slate-200 rounded-lg p-5 bg-white">
                                    <p className="font-semibold text-sm text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                        Intersection
                                    </p>
                                    <div className="bg-slate-50 rounded-md p-3 border border-slate-100">
                                        <p className="text-center font-medium text-slate-800">
                                            <LatexRenderer latex="x \in A \cap B \iff x \in A \text{ et } x \in B" />
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-5 bg-white">
                                    <p className="font-semibold text-sm text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                        Réunion
                                    </p>
                                    <div className="bg-slate-50 rounded-md p-3 border border-slate-100">
                                        <p className="text-center font-medium text-slate-800">
                                            <LatexRenderer latex="x \in A \cup B \iff x \in A \text{ ou } x \in B" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* A.3 Propriétés algébriques */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                A.3. Propriétés fondamentales
                            </h3>
                            <div className="space-y-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                                    <p className="font-semibold text-sm text-slate-900 mb-3">
                                        Commutativité
                                    </p>
                                    <div className="text-center space-y-2">
                                        <p><LatexRenderer latex="A \cap B = B \cap A" /></p>
                                        <p><LatexRenderer latex="A \cup B = B \cup A" /></p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                                    <p className="font-semibold text-sm text-slate-900 mb-3">
                                        Associativité
                                    </p>
                                    <div className="text-center space-y-2">
                                        <p><LatexRenderer latex="(A \cap B) \cap C = A \cap (B \cap C)" /></p>
                                        <p><LatexRenderer latex="(A \cup B) \cup C = A \cup (B \cup C)" /></p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                                    <p className="font-semibold text-sm text-slate-900 mb-3">
                                        Distributivité
                                    </p>
                                    <div className="text-center space-y-2">
                                        <p><LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" /></p>
                                        <p><LatexRenderer latex="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" /></p>
                                    </div>
                                </div>

                                <div className="border border-slate-200 rounded-lg p-5 bg-white">
                                    <p className="font-semibold text-sm text-slate-900 mb-3">
                                        Lois de Morgan
                                    </p>
                                    <div className="space-y-3">
                                        <div className="bg-slate-50 rounded-md p-3 text-center border border-slate-100">
                                            <p><LatexRenderer latex="\overline{A \cap B} = \overline{A} \cup \overline{B}" /></p>
                                        </div>
                                        <div className="bg-slate-50 rounded-md p-3 text-center border border-slate-100">
                                            <p><LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </CardContent>
                </Card>

                {/* Section B - Applications et bijections */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                            <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                                B
                            </span>
                            <span className="font-semibold">Applications et bijections</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        {/* B.1 Définitions */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                B.1. Fonctions et applications
                            </h3>
                            <div className="space-y-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <p className="text-slate-700 leading-relaxed">
                                        Une <em>fonction</em> <LatexRenderer latex="f" /> de <LatexRenderer latex="E" /> vers <LatexRenderer latex="F" /> associe à certains éléments de <LatexRenderer latex="E" /> des éléments de <LatexRenderer latex="F" />.
                                    </p>
                                </div>
                                <div className="bg-white border-l-4 border-slate-400 pl-4 py-2">
                                    <p className="text-slate-700 leading-relaxed">
                                        Une <em>application</em> <LatexRenderer latex="f : E \to F" /> est une fonction pour laquelle chaque <LatexRenderer latex="x \in E" /> possède exactement une image <LatexRenderer latex="f(x) \in F" />.
                                    </p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <p className="font-semibold text-sm text-slate-900 mb-2">Identité</p>
                                    <p className="text-center text-slate-800"><LatexRenderer latex="\forall x \in E, Id_E(x) = x" /></p>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* B.2 Types d'applications */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                B.2. Types d'applications
                            </h3>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="border border-slate-200 rounded-lg p-5 bg-white hover:bg-slate-50 transition-colors">
                                    <p className="font-semibold text-sm text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-100 pb-2">
                                        Injection
                                    </p>
                                    <p className="text-center font-medium text-slate-800 py-2">
                                        <LatexRenderer latex="f(x) = f(y) \implies x = y" />
                                    </p>
                                    <p className="text-xs text-slate-500 text-center mt-2">"Tout élément de l'arrivée a au plus un antécédent"</p>
                                </div>

                                <div className="border border-slate-200 rounded-lg p-5 bg-white hover:bg-slate-50 transition-colors">
                                    <p className="font-semibold text-sm text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-100 pb-2">
                                        Surjection
                                    </p>
                                    <p className="text-center font-medium text-slate-800 py-2">
                                        <LatexRenderer latex="\forall y \in F, \exists x \in E, y = f(x)" />
                                    </p>
                                    <p className="text-xs text-slate-500 text-center mt-2">"Tout élément de l'arrivée a au moins un antécédent"</p>
                                </div>

                                <div className="col-span-1 md:col-span-2 border border-slate-300 rounded-lg p-5 bg-slate-50">
                                    <p className="font-bold text-slate-900 mb-3 text-center uppercase tracking-wider">
                                        Bijection
                                    </p>
                                    <p className="text-center font-medium text-slate-800 mb-3">
                                        <LatexRenderer latex="\forall y \in F, \exists! x \in E, y = f(x)" />
                                    </p>
                                    <p className="text-sm text-slate-600 text-center">
                                        C'est à la fois une injection et une surjection. Elle admet une réciproque <LatexRenderer latex="f^{-1}" />.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* B.3 Théorème fondamental */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                B.3. Théorème de la bijection monotone
                            </h3>
                            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md">
                                <p className="leading-relaxed mb-4 text-lg">
                                    Soit <LatexRenderer latex="f" /> une application <strong>continue</strong> et <strong>strictement monotone</strong> sur un intervalle <LatexRenderer latex="I" />.
                                </p>
                                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                                    <p className="font-medium text-center">
                                        Alors <LatexRenderer latex="f" /> réalise une bijection de <LatexRenderer latex="I" /> vers l'intervalle image <LatexRenderer latex="J = f(I)" />.
                                    </p>
                                </div>
                                <p className="text-slate-300 italic mt-4 text-sm border-t border-slate-700 pt-3">
                                    De plus, la réciproque <LatexRenderer latex="f^{-1}" /> est elle aussi continue et strictement monotone (de même sens).
                                </p>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </MathChapterTemplate>
    );
};

export default Chapitre2EnsemblesEtApplicationsCoursPage;
