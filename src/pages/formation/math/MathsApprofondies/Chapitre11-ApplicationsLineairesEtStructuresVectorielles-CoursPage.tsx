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

const MathsEspacesVectorielsComplementsPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={11}
                        chapterTitle="Applications linéaires & structures vectorielles"
                        description="Applications linéaires, noyau, image, rang, isomorphismes, sous-espaces stabilisés et projecteurs."
                        slug="applications-lineaires-structures-vectorielles"
                        activeSection="course"
                        titleClassName="text-slate-800"
                        showNavigation={true}
                        previousChapter={{
                                slug: "probabilites-conditionnement",
                                title: "Probabilités et Conditionnement"
                        }}
                        nextChapter={{
                                slug: "optimisation-multivariee-avancee",
                                title: "Optimisation Multivariée Avancée"
                        }}
                >
                        <div className="space-y-8">

                                {/* Section 1: Applications linéaires */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Applications linéaires : bases</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">
                                                <div>
                                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Définitions</h3>
                                                        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                                                                <li>Une <span className="font-semibold">application linéaire</span> <LatexRenderer latex="f: E \to F" /> satisfait <LatexRenderer latex="f(\alpha u + v) = \alpha f(u) + f(v)" />.</li>
                                                                <li><LatexRenderer latex="\mathcal{L}(E, F)" /> est l'espace des applications linéaires, <LatexRenderer latex="\mathcal{L}(E)" /> les endomorphismes.</li>
                                                                <li>Un <span className="font-semibold">isomorphisme</span> est une application linéaire bijective.</li>
                                                        </ul>
                                                </div>

                                                <Separator />

                                                <div>
                                                        <h3 className="text-xl font-bold mb-4 text-slate-900">Théorèmes importants</h3>
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Égalité sur une base</h4>
                                                                        <FormulaBox>
                                                                                <LatexRenderer latex="f = g \iff \forall i, f(e_i) = g(e_i)" />
                                                                                <br />
                                                                                <span className="text-sm text-slate-600">(si <LatexRenderer latex="(e_i)" /> est une base de E)</span>
                                                                        </FormulaBox>
                                                                </div>
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Composition</h4>
                                                                        <FormulaBox>
                                                                                <LatexRenderer latex="g \circ f \in \mathcal{L}(E, G)" />
                                                                                <br />
                                                                                <span className="text-sm text-slate-600">(si <LatexRenderer latex="f \in \mathcal{L}(E, F), g \in \mathcal{L}(F, G)" />)</span>
                                                                        </FormulaBox>
                                                                </div>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Propriétés et sous-espaces */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Noyau, Image et Rang</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">
                                                <div>
                                                        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                                                                <li><span className="font-semibold">Image</span> : <LatexRenderer latex="\operatorname{Im}(f) = \{ y \in F \mid \exists x \in E, y = f(x) \}" />.</li>
                                                                <li><span className="font-semibold">Noyau</span> : <LatexRenderer latex="\operatorname{Ker}(f) = \{ x \in E \mid f(x) = 0_F \}" />.</li>
                                                                <li><span className="font-semibold">Injectivité</span> : <LatexRenderer latex="f \text{ injective} \iff \operatorname{Ker}(f) = \{0_E\}" />.</li>
                                                                <li><span className="font-semibold">Surjectivité</span> : <LatexRenderer latex="f \text{ surjective} \iff \operatorname{Im}(f) = F" />.</li>
                                                        </ul>

                                                        <FormulaBox title="Théorème du rang">
                                                                <LatexRenderer latex="\dim E = \operatorname{rg}(f) + \dim \operatorname{Ker}(f)" />
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 3: Projecteurs et Sommes Directes */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                                                        <span className="font-semibold">Projecteurs & Sommes Directes</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">
                                                <div>
                                                        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                                                                <li><span className="font-semibold">Somme directe</span> : <LatexRenderer latex="E = F \oplus G \iff F \cap G = \{0\} \text{ et } E = F + G" />.</li>
                                                                <li><span className="font-semibold">Calcul de dimension</span> (Grassmann) : <LatexRenderer latex="\dim(F+G) = \dim F + \dim G - \dim(F \cap G)" />.</li>
                                                        </ul>

                                                        <h3 className="text-xl font-bold mt-6 mb-2 text-slate-900">Projecteurs</h3>
                                                        <p className="text-slate-700 mb-2">Un endomorphisme <LatexRenderer latex="p" /> est un projecteur ssi <LatexRenderer latex="p^2 = p" />.</p>
                                                        <FormulaBox>
                                                                <LatexRenderer latex="E = \operatorname{Im}(p) \oplus \operatorname{Ker}(p)" />
                                                                <br />
                                                                <span className="text-sm text-slate-600"><LatexRenderer latex="p" /> est la projection sur <LatexRenderer latex="\operatorname{Im}(p)" /> parallèlement à <LatexRenderer latex="\operatorname{Ker}(p)" />.</span>
                                                        </FormulaBox>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 4: Matrices et Changement de Base */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">4</span>
                                                        <span className="font-semibold">Matrices & Changement de Base</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-8 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                La matrice de <LatexRenderer latex="f" /> dans les bases <LatexRenderer latex="\mathcal{B}" /> et <LatexRenderer latex="\mathcal{B}'" /> est notée <LatexRenderer latex="\operatorname{Mat}_{\mathcal{B}, \mathcal{B}'}(f)" />.
                                                        </p>
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Changement de coordonnées</h4>
                                                                        <FormulaBox>
                                                                                <LatexRenderer latex="X = P X'" />
                                                                                <br />
                                                                                <span className="text-sm text-slate-600">(P matrice de passage de <LatexRenderer latex="\mathcal{B}" /> à <LatexRenderer latex="\mathcal{B}'" />)</span>
                                                                        </FormulaBox>
                                                                </div>
                                                                <div>
                                                                        <h4 className="font-semibold text-slate-800 mb-2">Changement de base (Endomorphisme)</h4>
                                                                        <FormulaBox>
                                                                                <LatexRenderer latex="M' = P^{-1} M P" />
                                                                                <br />
                                                                                <span className="text-sm text-slate-600">(Matrices semblables)</span>
                                                                        </FormulaBox>
                                                                </div>
                                                        </div>

                                                        <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                                                                <p className="text-blue-800 font-medium flex items-center gap-2">
                                                                        <span className="font-bold">Invariant de similitude :</span>
                                                                        La trace est invariante par changement de base : <LatexRenderer latex="\operatorname{Tr}(P^{-1}AP) = \operatorname{Tr}(A)" />.
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                        </div>
                </MathChapterTemplate>
        );
};

export default MathsEspacesVectorielsComplementsPage;
