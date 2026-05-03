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

const Chapitre11OptimisationMultivarieeAvanceeCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Calcul différentiel d'ordre 2, Hessienne, extrema locaux et globaux, convexité et optimisation sous contraintes."
      slug="optimisation-multivariee-avancee"
      activeSection="course"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
      nextChapter={{
        slug: "comparaison-negligeabilite-equivalence",
        title: "Comparaison & Négligeabilité"
      }}
    >
      <div className="space-y-8">

        {/* Section 1: Dérivées d'ordre 2 et Schwarz */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</span>
              <span className="font-semibold">Calcul Différentiel d'Ordre 2</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Soit <LatexRenderer latex="f" /> une fonction de classe <LatexRenderer latex="\mathcal{C}^2" /> sur un ouvert <LatexRenderer latex="\Omega" />.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Théorème de Schwarz</h4>
                  <FormulaBox>
                    <LatexRenderer latex="\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}" />
                  </FormulaBox>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Matrice Hessienne</h4>
                  <FormulaBox>
                    <LatexRenderer latex="\nabla^2 f(a) = \left( \frac{\partial^2 f}{\partial x_i \partial x_j}(a) \right)_{i,j}" />
                  </FormulaBox>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-slate-800 mb-2">Formule de Taylor-Young à l'ordre 2</h4>
                <FormulaBox>
                  <LatexRenderer latex="f(a+h) = f(a) + \langle \nabla f(a), h \rangle + \frac{1}{2} q_a(h) + o(\|h\|^2)" />
                  <br />
                  <span className="text-sm text-slate-600">où <LatexRenderer latex="q_a(h) = \langle \nabla^2 f(a) h, h \rangle" /> est la forme quadratique associée à la Hessienne.</span>
                </FormulaBox>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Extrema Locaux */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</span>
              <span className="font-semibold">Extrema Locaux sans contrainte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Conditions d'ordre 1 et 2</h3>
              <ul className="list-disc list-inside space-y-4 text-slate-700 ml-2">
                <li>
                  <span className="font-semibold">Condition nécessaire (CN) :</span> Si <LatexRenderer latex="a" /> est un extremum local, alors <LatexRenderer latex="\nabla f(a) = 0" /> (point critique).
                </li>
                <li>
                  <span className="font-semibold">Conditions suffisantes (CS) :</span> On étudie les valeurs propres de <LatexRenderer latex="\nabla^2 f(a)" />.
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-slate-600">
                    <li>VP strictement positives <LatexRenderer latex="\implies" /> <strong>Minimum local strict</strong>.</li>
                    <li>VP strictement négatives <LatexRenderer latex="\implies" /> <strong>Maximum local strict</strong>.</li>
                    <li>VP de signes opposés <LatexRenderer latex="\implies" /> <strong>Point selle</strong> (pas d'extremum).</li>
                  </ul>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Convexité */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</span>
              <span className="font-semibold">Convexité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Sur un ouvert convexe <LatexRenderer latex="\Omega" /> :
              </p>
              <FormulaBox>
                <LatexRenderer latex="f \text{ convexe} \iff \forall x \in \Omega, \nabla^2 f(x) \text{ est positive}" />
                <br />
                <LatexRenderer latex="f \text{ s. convexe} \iff \forall x \in \Omega, \nabla^2 f(x) \text{ est définie positive}" />
              </FormulaBox>
              <p className="text-slate-700 mt-4">
                <strong>Propriété fondamentale :</strong> Si <LatexRenderer latex="f" /> est convexe, tout point critique est un <strong>minimum global</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Optimisation sous contraintes */}
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-xl flex items-center gap-3 text-slate-800">
              <span className="bg-white border border-slate-200 text-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">4</span>
              <span className="font-semibold">Optimisation sous contraintes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Multiplicateurs de Lagrange</h3>
              <p className="text-slate-700 mb-4">
                Pour optimiser <LatexRenderer latex="f(x)" /> sous <LatexRenderer latex="g_k(x) = 0" /> :
              </p>
              <FormulaBox>
                <LatexRenderer latex="\nabla f(a) = \sum \lambda_k \nabla g_k(a)" />
              </FormulaBox>
              <p className="text-sm text-slate-600 mt-2">
                (Sous réserve de qualification des contraintes, par exemple l'indépendance linéaire des gradients des contraintes).
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeCoursPage;
