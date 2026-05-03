import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';

const FormulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4 shadow-sm overflow-x-auto">
        {title && <p className="font-semibold text-slate-800 mb-2">{title}</p>}
        <div className="text-center">
            {children}
        </div>
    </div>
);

const MathsSuitesPage = () => {
    return (
        <MathChapterTemplate
            chapterNumber={4}
            chapterTitle="Suites numériques"
            description="Bornes, variations & convergence — définitions des suites réelles, opérations sur les limites ; théorèmes de convergence (monotone, encadrement, comparaison, suites adjacentes, point fixe) ; suites extraites"
            slug="suites-numeriques"
            activeSection="course"
            titleClassName="text-slate-800"
            showNavigation={true}
            previousChapter={{
                slug: "sommes-produits-coefficients-binomiaux",
                title: "Sommes, produits & binôme"
            }}
            nextChapter={{
                slug: "fonctions-une-variable-reelle",
                title: "Fonctions d'une variable réelle" // Assuming this is chapter 5 based on context, or similar
            }}
        >
            <div className="space-y-8">

                {/* Section 1 - Généralités */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                            <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
                            <span className="font-semibold">Définitions et vocabulaire</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        {/* Majorants, minorants */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Majorants, minorants</h3>
                            <p className="mb-2 text-slate-700">Une suite réelle peut être limitée par des valeurs maximales ou minimales. Pour une suite <LatexRenderer latex={"(u_n)"} />, on dit qu'elle est :</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <span className="font-semibold text-slate-900 block mb-2">Majorée</span>
                                    <LatexRenderer latex={"\\exists M \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; u_n \\leq M"} />
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <span className="font-semibold text-slate-900 block mb-2">Minorée</span>
                                    <LatexRenderer latex={"\\exists m \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; u_n \\geq m"} />
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <span className="font-semibold text-slate-900 block mb-2">Bornée</span>
                                    <LatexRenderer latex={"\\exists m, M \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; m \\leq u_n \\leq M"} />
                                </div>
                            </div>
                        </div>

                        {/* Sens de variation */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Sens de variation</h3>
                            <p className="mb-4 text-slate-700">Une suite <LatexRenderer latex={"(u_n)"} /> est dite :</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <span className="font-semibold text-slate-800">Croissante</span> : <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} \\geq u_n"} />
                                </div>
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <span className="font-semibold text-slate-800">Décroissante</span> : <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} \\leq u_n"} />
                                </div>
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <span className="font-semibold text-slate-800">Strictement croissante</span> : <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} > u_n"} />
                                </div>
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <span className="font-semibold text-slate-800">Strictement décroissante</span> : <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} < u_n"} />
                                </div>
                            </div>
                            <p className="mt-4 text-slate-700">
                                Elle est <strong>monotone</strong> sSi elle est croissante ou décroissante.
                                Elle est <strong>stationnaire</strong> à partir d'un certain rang si <LatexRenderer latex={"\\exists n_0, \\forall n \\geq n_0, u_{n+1} = u_n"} />.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Section 2 - Convergence */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                            <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
                            <span className="font-semibold">Convergence et Divergence</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        {/* Convergence */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Convergence vers une limite finie</h3>
                            <FormulaBox>
                                <LatexRenderer latex={'\\lim_{n \\to +\\infty} u_n = \\ell \\iff \\forall \\varepsilon > 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; |u_n - \\ell| \\leq \\varepsilon'} />
                            </FormulaBox>
                            <p className="text-slate-700">Si une suite ne converge pas, elle est dite <strong>divergente</strong>.</p>
                        </div>

                        {/* Limite infinie */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Limites insolites (Divergence vers l'infini)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-2 font-semibold text-slate-800">Vers <LatexRenderer latex={"+ \\infty"} /></p>
                                    <FormulaBox>
                                        <LatexRenderer latex={'\\forall A > 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; u_n \\geq A'} />
                                    </FormulaBox>
                                </div>
                                <div>
                                    <p className="mb-2 font-semibold text-slate-800">Vers <LatexRenderer latex={"- \\infty"} /></p>
                                    <FormulaBox>
                                        <LatexRenderer latex={'\\forall A < 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; u_n \\leq A'} />
                                    </FormulaBox>
                                </div>
                            </div>
                        </div>

                        {/* Opérations */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Opérations sur les limites</h3>
                            <p className="mb-4 text-slate-700">Si <LatexRenderer latex={"u_n \\to \\ell"} /> et <LatexRenderer latex={"v_n \\to \\ell'"} /> :</p>
                            <div className="space-y-2 bg-slate-50 p-4 rounded border border-slate-100">
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="font-semibold">Somme</span>
                                    <LatexRenderer latex={"u_n + v_n \\to \\ell + \\ell'"} />
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2 pt-2">
                                    <span className="font-semibold">Produit</span>
                                    <LatexRenderer latex={"u_n \\times v_n \\to \\ell \\times \\ell'"} />
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-2 pt-2">
                                    <span className="font-semibold">Quotient (si <LatexRenderer latex={"\\ell' \\neq 0"} />)</span>
                                    <LatexRenderer latex={"\\frac{u_n}{v_n} \\to \\frac{\\ell}{\\ell'}"} />
                                </div>
                            </div>
                            <div className="mt-4 bg-amber-50 text-amber-900 prefix-p-4 p-4 rounded border border-amber-200 text-sm">
                                <strong>Attention aux formes indéterminées :</strong> <LatexRenderer latex={"+ \\infty - \\infty, \\; 0 \\times \\infty, \\; \\frac{\\infty}{\\infty}, \\; \\frac{0}{0}, \\; 1^\\infty"} />...
                            </div>
                        </div>

                    </CardContent>
                </Card>

                {/* Section 3 - Théorèmes importants */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
                            <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
                            <span className="font-semibold">Théorèmes de convergence</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        {/* Limite monotone */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Théorème de la limite monotone</h3>
                            <div className="space-y-2">
                                <p className="bg-emerald-50 border border-emerald-100 p-3 rounded text-emerald-900">
                                    Toute suite <strong>croissante et majorée</strong> converge.
                                </p>
                                <p className="bg-emerald-50 border border-emerald-100 p-3 rounded text-emerald-900">
                                    Toute suite <strong>décroissante et minorée</strong> converge.
                                </p>
                            </div>
                            <p className="mt-2 text-slate-600 text-sm">
                                Si une suite est croissante non majorée, elle tend vers <LatexRenderer latex={"+ \\infty"} />.
                            </p>
                        </div>

                        <Separator />

                        {/* Encadrement et comparaison */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-slate-900">Théorème d'encadrement</h3>
                                <p className="text-sm text-slate-700 mb-2">Dit "des gendarmes".</p>
                                <FormulaBox title="Si, à partir d'un certain rang :">
                                    <LatexRenderer latex={'v_n \\leq u_n \\leq w_n \\quad \\text{et} \\quad \\lim v_n = \\lim w_n = \\ell'} />
                                    <div className="mt-2 text-slate-500 text-sm"><LatexRenderer latex={"\\implies \\lim u_n = \\ell"} /></div>
                                </FormulaBox>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-slate-900">Théorème de comparaison</h3>
                                <FormulaBox title="Si on a :">
                                    <div className="space-y-2">
                                        <div>
                                            <LatexRenderer latex={'u_n \\leq v_n \\quad \\text{et} \\quad v_n \\to -\\infty \\implies u_n \\to -\\infty'} />
                                        </div>
                                        <Separator className="my-1" />
                                        <div>
                                            <LatexRenderer latex={'u_n \\leq v_n \\quad \\text{et} \\quad u_n \\to +\\infty \\implies v_n \\to +\\infty'} />
                                        </div>
                                    </div>
                                </FormulaBox>
                            </div>
                        </div>

                        <Separator />

                        {/* Suites adjacentes */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Suites adjacentes</h3>
                            <p className="mb-2 text-slate-700">Deux suites <LatexRenderer latex={"(u_n)"} /> et <LatexRenderer latex={"(v_n)"} /> sont adjacentes si :</p>
                            <ul className="list-disc ml-6 space-y-1 text-slate-700 mb-4">
                                <li><LatexRenderer latex={"(u_n)"} /> est croissante,</li>
                                <li><LatexRenderer latex={"(v_n)"} /> est décroissante,</li>
                                <li><LatexRenderer latex={"\\lim (v_n - u_n) = 0"} />.</li>
                            </ul>
                            <FormulaBox>
                                <LatexRenderer latex={"\\text{Elles convergent vers la même limite } \\ell \\text{ et } \\forall n, u_n \\leq \\ell \\leq v_n."} />
                            </FormulaBox>
                        </div>

                        <Separator />
                        {/* Suites extraites */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Suites extraites</h3>
                            <p className="mb-2 text-slate-700">Si <LatexRenderer latex={"(u_n)"} /> converge vers <LatexRenderer latex={"\\ell"} />, toute suite extraite <LatexRenderer latex={"(u_{\\varphi(n)})"} /> converge vers <LatexRenderer latex={"\\ell"} />.</p>
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                                <p className="font-semibold text-slate-800 mb-2">Exemple classique :</p>
                                <LatexRenderer latex={"(u_{2n}) \\to \\ell \\quad \\text{et} \\quad (u_{2n+1}) \\to \\ell \\implies (u_n) \\to \\ell"} />
                            </div>
                        </div>

                        {/* Point fixe */}
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Théorème du point fixe</h3>
                            <p className="mb-2 text-slate-700">
                                Si <LatexRenderer latex={"u_{n+1} = f(u_n)"} /> converge vers <LatexRenderer latex={"\\ell"} />, et si <LatexRenderer latex={"f"} /> est continue en <LatexRenderer latex={"\\ell"} />, alors :
                            </p>
                            <FormulaBox>
                                <LatexRenderer latex={"f(\\ell) = \\ell"} />
                            </FormulaBox>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </MathChapterTemplate>
    );
};

export default MathsSuitesPage;
