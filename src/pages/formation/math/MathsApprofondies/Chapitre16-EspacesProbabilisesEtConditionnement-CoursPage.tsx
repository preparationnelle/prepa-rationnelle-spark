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

const MathsProbabilitesUniversPage = () => {
        return (
                <MathChapterTemplate
                        chapterNumber={16}
                        chapterTitle="Espaces probabilisés & conditionnement"
                        description="Axiomes, probabilités conditionnelles, formule de Bayes, indépendance et fiabilité."
                        slug="espaces-probabilises-conditionnement"
                        activeSection="course"
                        showNavigation={true}
                        previousChapter={{
                                slug: "integrales-impropres-et-criteres",
                                title: "Intégrales Impropres"
                        }}
                        nextChapter={{
                                slug: "variables-aleatoires-discretes", // Guessing next based on task.md
                                title: "Variables Aléatoires"
                        }}
                >
                        <div className="space-y-8">
                                {/* Section 1: Axiomes */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                                                        <span className="font-semibold">Espaces Probabilisés</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div>
                                                        <p className="text-slate-700 mb-4">
                                                                Un <strong>espace probabilisé</strong> est un triplet <LatexRenderer latex="(\Omega, \mathcal{A}, \mathbb{P})" /> où :
                                                        </p>
                                                        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
                                                                <li><LatexRenderer latex="\Omega" /> est l'univers (ensemble des issues).</li>
                                                                <li><LatexRenderer latex="\mathcal{A}" /> est une tribu (ensemble des événements).</li>
                                                                <li><LatexRenderer latex="\mathbb{P}" /> est une mesure de probabilité (<LatexRenderer latex="\mathbb{P}(\Omega)=1" />, <LatexRenderer latex="\sigma" />-additivité).</li>
                                                        </ul>

                                                        <FormulaBox title="Propriétés élémentaires">
                                                                <LatexRenderer latex="\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)" />
                                                                <div className="h-4" />
                                                                <LatexRenderer latex="\mathbb{P}(A^c) = 1 - \mathbb{P}(A)" />
                                                        </FormulaBox>

                                                        <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                                                                <h4 className="font-semibold text-slate-800 mb-2">Continuité de la mesure</h4>
                                                                <p className="text-slate-700 text-sm">
                                                                        Si <LatexRenderer latex="A_n \uparrow A" /> (croissante), alors <LatexRenderer latex="\mathbb{P}(A_n) \to \mathbb{P}(A)" />.
                                                                        <br />
                                                                        Si <LatexRenderer latex="A_n \downarrow A" /> (décroissante), alors <LatexRenderer latex="\mathbb{P}(A_n) \to \mathbb{P}(A)" />.
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>

                                {/* Section 2: Conditionnement */}
                                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                                                <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                                                        <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                                                        <span className="font-semibold">Conditionnement & Indépendance</span>
                                                </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-4">
                                                        <FormulaBox title="Probabilité conditionnelle">
                                                                <LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} \quad (\text{si } \mathbb{P}(B) > 0)" />
                                                        </FormulaBox>

                                                        <FormulaBox title="Formule des probabilités totales">
                                                                Si <LatexRenderer latex="(B_n)" /> est un système complet d'événements :
                                                                <div className="my-2" />
                                                                <LatexRenderer latex="\mathbb{P}(A) = \sum_{n} \mathbb{P}(A \cap B_n) = \sum_{n} \mathbb{P}(B_n)\mathbb{P}_{B_n}(A)" />
                                                        </FormulaBox>

                                                        <FormulaBox title="Formule de Bayes">
                                                                <LatexRenderer latex="\mathbb{P}_A(B_k) = \frac{\mathbb{P}(B_k)\mathbb{P}_{B_k}(A)}{\sum_{n} \mathbb{P}(B_n)\mathbb{P}_{B_n}(A)}" />
                                                        </FormulaBox>

                                                        <div className="border border-slate-200 rounded p-4 mt-4">
                                                                <p className="font-semibold text-slate-800 mb-2">Indépendance</p>
                                                                <p className="text-slate-700 mb-2">
                                                                        Deux événements sont indépendants si <LatexRenderer latex="\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)" />.
                                                                </p>
                                                                <p className="text-slate-700 text-sm italic">
                                                                        Attention : Indépendance 2 à 2 <LatexRenderer latex="\ne" /> Indépendance mutuelle !
                                                                </p>
                                                        </div>
                                                </div>
                                        </CardContent>
                                </Card>
                        </div>
                </MathChapterTemplate>
        );
};

export default MathsProbabilitesUniversPage;
