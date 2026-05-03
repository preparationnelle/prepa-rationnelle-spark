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

const MathsFonctionsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Généralités (parité, périodicité, bornes, variations) ; limites et opérations ; continuité et théorèmes fondamentaux (TVI, Weierstrass, bijection) ; fonctions usuelles et trigonométriques."
      slug="fonctions-d-une-variable-reelle"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
      nextChapter={{
        slug: "continuite-derivabilite",
        title: "Continuité & Dérivabilité"
      }}
    >
      <div className="space-y-8">

        {/* Section 1 - Généralités */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Généralités sur les fonctions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Parité */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Parité et Symétrie</h3>
              <p className="mb-2 text-slate-700">Soit <LatexRenderer latex={"I"} /> un intervalle centré en 0 (symétrique par rapport à 0).</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-2">Fonction Paire</span>
                  <LatexRenderer latex={"\\forall x \\in I, f(-x) = f(x)"} />
                  <p className="text-sm text-slate-600 mt-2">Symétrie par rapport à l'axe des ordonnées <LatexRenderer latex={"(Oy)"} />.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-2">Fonction Impaire</span>
                  <LatexRenderer latex={"\\forall x \\in I, f(-x) = -f(x)"} />
                  <p className="text-sm text-slate-600 mt-2">Symétrie centrale par rapport à l'origine <LatexRenderer latex={"O"} />.</p>
                </div>
              </div>
            </div>

            {/* Périodicité */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Périodicité</h3>
              <p className="text-slate-700">
                <LatexRenderer latex={"f"} /> est <LatexRenderer latex={"T"} />-périodique si <LatexRenderer latex={"\\forall x \\in D_f, f(x+T) = f(x)"} />.
              </p>
            </div>

            <Separator />

            {/* Bornes */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Bornes et Extrema</h3>
              <div className="space-y-4">
                <p className="text-slate-700">
                  <LatexRenderer latex={"f"} /> est <strong>bornée</strong> si elle est à la fois majorée et minorée : <LatexRenderer latex={"\\exists m, M \\in \\mathbb{R}, \\forall x, m \\leq f(x) \\leq M"} />.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="font-semibold text-slate-800">Maximum global en <LatexRenderer latex={"x_0"} /></span>
                    <div className="mt-1"><LatexRenderer latex={"\\forall x \\in D_f, f(x) \\leq f(x_0)"} /></div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="font-semibold text-slate-800">Minimum global en <LatexRenderer latex={"x_0"} /></span>
                    <div className="mt-1"><LatexRenderer latex={"\\forall x \\in D_f, f(x) \\geq f(x_0)"} /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variations */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Sens de variation</h3>
              <FormulaBox>
                <div className="grid grid-cols-2 gap-8 text-left">
                  <div>
                    <p><strong>Croissante :</strong> <LatexRenderer latex={"x \\leq y \\implies f(x) \\leq f(y)"} /></p>
                  </div>
                  <div>
                    <p><strong>Décroissante :</strong> <LatexRenderer latex={"x \\leq y \\implies f(x) \\geq f(y)"} /></p>
                  </div>
                </div>
              </FormulaBox>
              <p className="text-slate-600 text-sm mt-2">
                La composition de deux fonctions de même sens de variation est croissante.
                La composition de deux fonctions de sens contraires est décroissante.
              </p>
            </div>

          </CardContent>
        </Card>

        {/* Section 2 - Continuité */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Continuité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            {/* Définitions */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Définition</h3>
              <FormulaBox>
                <LatexRenderer latex={"f \\text{ continue en } x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)"} />
              </FormulaBox>
              <p className="text-slate-700">
                <LatexRenderer latex={"f"} /> est continue sur un intervalle <LatexRenderer latex={"I"} /> si elle est continue en tout point de <LatexRenderer latex={"I"} />.
                Les fonctions usuelles (polynômes, rationnelles, exp, ln, trigo...) sont continues sur leur domaine de définition.
              </p>
            </div>

            <Separator />

            {/* Théorèmes */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Théorèmes fondamentaux</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Théorème des Valeurs Intermédiaires (TVI)</h4>
                  <p className="text-slate-700 mb-2">
                    Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"[a,b]"} />, alors elle prend toutes les valeurs comprises entre <LatexRenderer latex={"f(a)"} /> et <LatexRenderer latex={"f(b)"} />.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded text-emerald-900 text-sm">
                    <strong>Conséquence :</strong> L'image d'un intervalle par une fonction continue est un intervalle.
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Théorème de la bijection</h4>
                  <p className="text-slate-700 mb-2">
                    Si <LatexRenderer latex={"f"} /> est <strong>continue</strong> et <strong>strictement monotone</strong> sur <LatexRenderer latex={"I"} />, alors :
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-slate-700">
                    <li><LatexRenderer latex={"f"} /> réalise une bijection de <LatexRenderer latex={"I"} /> sur <LatexRenderer latex={"J = f(I)"} />.</li>
                    <li>La réciproque <LatexRenderer latex={"f^{-1}"} /> est continue et de même sens de variation que <LatexRenderer latex={"f"} />.</li>
                    <li>Les courbes <LatexRenderer latex={"C_f"} /> et <LatexRenderer latex={"C_{f^{-1}}"} /> sont symétriques par rapport à la droite <LatexRenderer latex={"y=x"} />.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Théorème des bornes atteintes (Weierstrass)</h4>
                  <p className="text-slate-700">
                    Toute fonction continue sur un segment <LatexRenderer latex={"[a,b]"} /> est bornée et atteint ses bornes.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Fonctions Trigonométriques */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Fonctions Trigonométriques & Réciproques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Tangente</h3>
                <p className="text-slate-700 mb-2"><LatexRenderer latex={"\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}"} /></p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
                  <li>Définie sur <LatexRenderer latex={"\\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi\\}"} /></li>
                  <li><LatexRenderer latex={"\\pi"} />-périodique, impaire</li>
                  <li><LatexRenderer latex={"\\tan'(x) = 1 + \\tan^2(x) = \\frac{1}{\\cos^2(x)}"} /></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Arctangente</h3>
                <p className="text-slate-700 mb-2">Bijection réciproque de la restriction de la tangente à <LatexRenderer latex={"]-\\pi/2, \\pi/2["} />.</p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
                  <li>Définie sur <LatexRenderer latex={"\\mathbb{R}"} /> à valeurs dans <LatexRenderer latex={"]-\\pi/2, \\pi/2["} /></li>
                  <li><LatexRenderer latex={"\\lim_{x \\to +\\infty} \\arctan x = \\frac{\\pi}{2}"} /></li>
                  <li><LatexRenderer latex={"\\arctan'(x) = \\frac{1}{1+x^2}"} /></li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Formules usuelles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <LatexRenderer latex={"\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <LatexRenderer latex={"\\sin(a+b) = \\sin a \\cos b + \\sin b \\cos a"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <LatexRenderer latex={"\\cos(2a) = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a"} />
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <LatexRenderer latex={"\\sin(2a) = 2\\sin a \\cos a"} />
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default MathsFonctionsPage;
