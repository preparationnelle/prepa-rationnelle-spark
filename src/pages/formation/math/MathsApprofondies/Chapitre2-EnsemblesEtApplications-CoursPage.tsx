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
      subject="maths"
    >
      {/* Section A - Opérations sur les ensembles */}
      <div className="space-y-8"
    >
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
          <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white"
    >
            <CardTitle className="text-xl flex items-center gap-3"
    >
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
    >
                A
              </span
    >
              <span className="font-semibold">Opérations sur les ensembles</span
    >
            </CardTitle
    >
          </CardHeader
    >
          <CardContent className="space-y-8 pt-6"
    >
            {/* A.1 Comparaison et parties */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-amber-500 rounded-full"></span
    >
                A.1. Comparaison entre ensembles
              </h3
    >
              <div className="space-y-5"
    >
                <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 hover:bg-amber-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed"
    >
                    On dit qu'un ensemble <LatexRenderer latex="A" /> est <em>contenu</em> dans un ensemble <LatexRenderer latex="B" />, et l'on écrit <LatexRenderer latex="A \subset B" />, lorsque tout élément de <LatexRenderer latex="A" /> appartient également à <LatexRenderer latex="B" />.
                  </p
    >
                </div
    >
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4 hover:bg-orange-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed"
    >
                    Deux ensembles <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont déclarés <em>égaux</em>, noté <LatexRenderer latex="A = B" />, dès que <LatexRenderer latex="A \subset B" /> et <LatexRenderer latex="B \subset A" />.
                  </p
    >
                </div
    >
                <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 hover:bg-amber-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed"
    >
                    Un ensemble <LatexRenderer latex="A" /> est une <em>partie</em> (ou <em>sous-ensemble</em>) d'un ensemble <LatexRenderer latex="E" /> dès que <LatexRenderer latex="A \subset E" />. L'ensemble de toutes les parties de <LatexRenderer latex="E" /> se note <LatexRenderer latex="\mathcal{P}(E)" />.
                  </p
    >
                </div
    >
              </div
    >
            </div
    >
            <Separator className="my-8" /
    >
            {/* A.2 Opérations de base */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span
    >
                A.2. Intersection et réunion
              </h3
    >
              <div className="space-y-5"
    >
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4 hover:bg-orange-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-orange-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span
    >
                    Intersection
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3"
    >
                    <p className="text-center"
    >
                      <LatexRenderer latex="x \in A \cap B" /> <LatexRenderer latex="\Longleftrightarrow" /> <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B" /
    >
                    </p
    >
                  </div
    >
                </div
    >
                <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 hover:bg-amber-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-amber-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span
    >
                    Réunion
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3"
    >
                    <p className="text-center"
    >
                      <LatexRenderer latex="x \in A \cup B" /> <LatexRenderer latex="\Longleftrightarrow" /> <LatexRenderer latex="x \in A" /> ou <LatexRenderer latex="x \in B" /
    >
                    </p
    >
                  </div
    >
                </div
    >
              </div
    >
            </div
    >
            <Separator className="my-8" /
    >
            {/* A.3 Propriétés algébriques */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-amber-500 rounded-full"></span
    >
                A.3. Propriétés fondamentales
              </h3
    >
              <div className="space-y-5"
    >
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4 hover:bg-orange-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-orange-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span
    >
                    Commutativité
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 space-y-2 text-center"
    >
                    <p><LatexRenderer latex="A \cap B = B \cap A" /></p
    >
                    <p><LatexRenderer latex="A \cup B = B \cup A" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 hover:bg-amber-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-amber-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span
    >
                    Associativité
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 space-y-2 text-center"
    >
                    <p><LatexRenderer latex="(A \cap B) \cap C = A \cap (B \cap C)" /></p
    >
                    <p><LatexRenderer latex="(A \cup B) \cup C = A \cup (B \cup C)" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4 hover:bg-orange-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-orange-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span
    >
                    Distributivité
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 space-y-2 text-center"
    >
                    <p><LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" /></p
    >
                    <p><LatexRenderer latex="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 hover:bg-amber-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-amber-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span
    >
                    Complémentaire
                  </p
    >
                  <div className="space-y-3"
    >
                    <div className="bg-white/70 rounded-md p-3 text-center"
    >
                      <p><LatexRenderer latex="x \in \overline{A}" /> <LatexRenderer latex="\Longleftrightarrow" /> <LatexRenderer latex="x \notin A" /></p
    >
                    </div
    >
                    <div className="bg-white/70 rounded-md p-3 text-center"
    >
                      <p><LatexRenderer latex="\overline{\overline{A}} = A" />, <LatexRenderer latex="\overline{\varnothing} = \Omega" />, <LatexRenderer latex="\overline{\Omega} = \varnothing" /></p
    >
                    </div
    >
                  </div
    >
                </div
    >
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4 hover:bg-orange-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-orange-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span
    >
                    Lois de Morgan
                  </p
    >
                  <div className="space-y-3"
    >
                    <div className="bg-white/70 rounded-md p-3 text-center"
    >
                      <p><LatexRenderer latex="\overline{A \cap B} = \overline{A} \cup \overline{B}" /></p
    >
                    </div
    >
                    <div className="bg-white/70 rounded-md p-3 text-center"
    >
                      <p><LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" /></p
    >
                    </div
    >
                  </div
    >
                </div
    >
              </div
    >
            </div
    >
          </CardContent
    >
        </Card
    >
        {/* Section B - Applications et bijections */}
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
          <CardHeader className="bg-gradient-to-r from-rose-500 to-pink-600 text-white"
    >
            <CardTitle className="text-xl flex items-center gap-3"
    >
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
    >
                B
              </span
    >
              <span className="font-semibold">Applications et bijections</span
    >
            </CardTitle
    >
          </CardHeader
    >
          <CardContent className="space-y-8 pt-6"
    >
            {/* B.1 Définitions */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-rose-500 rounded-full"></span
    >
                B.1. Fonctions et applications
              </h3
    >
              <div className="space-y-5"
    >
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4 hover:bg-rose-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed"
    >
                    Une <em>fonction</em> <LatexRenderer latex="f" /> de <LatexRenderer latex="E" /> vers <LatexRenderer latex="F" /> associe à certains éléments de <LatexRenderer latex="E" /> des éléments de <LatexRenderer latex="F" />.
                  </p
    >
                </div
    >
                <div className="bg-pink-50/50 border border-pink-200 rounded-lg p-4 hover:bg-pink-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed"
    >
                    Une <em>application</em> <LatexRenderer latex="f : E \to F" /> est une fonction pour laquelle chaque <LatexRenderer latex="x \in E" /> possède exactement une image <LatexRenderer latex="f(x) \in F" />.
                  </p
    >
                </div
    >
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4 hover:bg-rose-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-rose-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span
    >
                    Identité
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 text-center"
    >
                    <p>Pour tout <LatexRenderer latex="x \in E" />, <LatexRenderer latex="Id_E(x) = x" /></p
    >
                  </div
    >
                </div
    >
              </div
    >
            </div
    >
            <Separator className="my-8" /
    >
            {/* B.2 Types d'applications */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-pink-500 rounded-full"></span
    >
                B.2. Types d'applications
              </h3
    >
              <div className="space-y-5"
    >
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4 hover:bg-rose-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-rose-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span
    >
                    Injection
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 text-center"
    >
                    <p>Pour tout <LatexRenderer latex="(x_1, x_2) \in E^2" />, <LatexRenderer latex="f(x_1) = f(x_2)" /> <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="x_1 = x_2" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-pink-50/50 border border-pink-200 rounded-lg p-4 hover:bg-pink-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-pink-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span
    >
                    Surjection
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 text-center"
    >
                    <p>Pour tout <LatexRenderer latex="y \in F" />, il existe <LatexRenderer latex="x \in E" /> tel que <LatexRenderer latex="y = f(x)" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4 hover:bg-rose-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-rose-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span
    >
                    Bijection
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 text-center"
    >
                    <p>Pour tout <LatexRenderer latex="y \in F" />, il existe un unique <LatexRenderer latex="x \in E" /> tel que <LatexRenderer latex="y = f(x)" /></p
    >
                  </div
    >
                </div
    >
                <div className="bg-pink-50/50 border border-pink-200 rounded-lg p-4 hover:bg-pink-50/70 transition-colors"
    >
                  <p className="font-semibold text-sm text-pink-900 mb-3 flex items-center gap-2"
    >
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span
    >
                    Bijection réciproque
                  </p
    >
                  <div className="bg-white/70 rounded-md p-3 text-center"
    >
                    <p><LatexRenderer latex="y = f(x)" /> <LatexRenderer latex="\Longleftrightarrow" /> <LatexRenderer latex="x = f^{-1}(y)" /></p
    >
                  </div
    >
                </div
    >
              </div
    >
            </div
    >
            <Separator className="my-8" /
    >
            {/* B.3 Théorème fondamental */}
            <div
    >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2"
    >
                <span className="w-1 h-6 bg-rose-500 rounded-full"></span
    >
                B.3. Théorème de la bijection monotone
              </h3
    >
              <div className="space-y-4"
    >
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4 hover:bg-rose-50/70 transition-colors"
    >
                  <p className="text-slate-700 leading-relaxed mb-3"
    >
                    Soit <LatexRenderer latex="f" /> une application continue et strictement monotone sur un intervalle <LatexRenderer latex="I \subset \mathbb{R}" />. Alors <LatexRenderer latex="f" /> est une bijection de <LatexRenderer latex="I" /> sur <LatexRenderer latex="J = f(I)" />.
                  </p
    >
                  <p className="text-slate-600 italic"
    >
                    Lorsque <LatexRenderer latex="f" /> est continue et strictement monotone sur <LatexRenderer latex="I" />, les fonctions <LatexRenderer latex="f" /> et <LatexRenderer latex="f^{-1}" /> ont les mêmes variations.
                  </p
    >
                </div
    >
              </div
    >
            </div
    >
          </CardContent
    >
        </Card
    >
      </div
    >
    </MathChapterTemplate
    >
  );
};
export default Chapitre2EnsemblesEtApplicationsCoursPage;
