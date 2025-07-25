import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre1LogiqueEtRaisonnementFondamentauxCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Logique & raisonnement fondamentaux"
      description="Propositions, connecteurs, quantificateurs ; disjonction de cas, contraposée, raisonnement par l'absurde"
    >
      {/* Section A - Éléments de logique */}
      <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
              A
            </span>
            <span className="font-semibold">Éléments de logique</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Propositions et opérations logiques */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.1. Propositions et opérations logiques
            </h3>
            <div className="space-y-5">
              <div className="bg-white border border-blue-100 rounded-lg p-4 hover:bg-blue-50/30 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Définition 1.1 — Proposition
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Toute affirmation concernant un ensemble d'objets mathématiques dont on peut dire sans ambiguïté si elle est vraie ou fausse.
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-lg p-4 hover:bg-blue-50/30 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Définition 1.2 — Négation
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Pour une proposition <LatexRenderer latex="P" />, on note <LatexRenderer latex="\lnot P" /> sa proposition contraire (ou négation), vraie lorsque <LatexRenderer latex="P" /> est fausse.
                </p>
              </div>

              <div className="bg-white border border-green-100 rounded-lg p-4 hover:bg-green-50/30 transition-colors">
                <p className="font-semibold text-sm text-green-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Opérations « et », « ou »
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <LatexRenderer latex="P \land Q" /> est vraie lorsque <LatexRenderer latex="P" /> et <LatexRenderer latex="Q" /> sont vraies ; 
                  <LatexRenderer latex="P \lor Q" /> est vraie lorsque l'une au moins des deux l'est.
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-lg p-4 hover:bg-blue-50/30 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Définition 1.3 — Implication et équivalence
                </p>
                <div className="text-slate-700 space-y-2 mt-3">
                  <p className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><LatexRenderer latex="P \Rightarrow Q" /> signifie : si <LatexRenderer latex="P" /> est vraie alors <LatexRenderer latex="Q" /> l'est (<em className="text-slate-600">condition suffisante</em>).</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><LatexRenderer latex="P \Leftrightarrow Q" /> signifie : <LatexRenderer latex="P \Rightarrow Q" /> et <LatexRenderer latex="Q \Rightarrow P" /> (<em className="text-slate-600">condition nécessaire et suffisante</em>).</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Quantificateurs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              A.2. Quantificateurs
            </h3>
            <div className="bg-white border border-purple-100 rounded-lg p-5 hover:bg-purple-50/30 transition-colors">
              <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Notation 1.5
              </p>
              <div className="text-slate-700 space-y-2 font-medium">
                <p className="flex items-center gap-3">
                  <span className="text-purple-600 text-lg">∃</span>
                  <span><LatexRenderer latex="\exists\,x" /> : il existe un <LatexRenderer latex="x" /> tel que...</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-600 text-lg">∃!</span>
                  <span><LatexRenderer latex="\exists!\,x" /> : il existe un <em className="text-slate-600">unique</em> <LatexRenderer latex="x" /> tel que...</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-600 text-lg">∀</span>
                  <span><LatexRenderer latex="\forall x" /> : pour tout <LatexRenderer latex="x" />...</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - Méthodes de raisonnement */}
      <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
              B
            </span>
            <span className="font-semibold">Méthodes de raisonnement</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 Disjonction de cas */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.1. Disjonction de cas
            </h3>
            <div className="bg-white border border-green-100 rounded-lg p-4 hover:bg-green-50/30 transition-colors">
              <p className="font-semibold text-sm text-green-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Définition 1.6
              </p>
              <p className="text-slate-700 leading-relaxed">
                Pour démontrer une proposition, on peut distinguer des cas exclusifs couvrant toutes les possibilités : on raisonne alors par disjonction de cas.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Contraposée */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.2. Contraposée
            </h3>
            <div className="space-y-5">
              <div className="bg-white border border-green-100 rounded-lg p-4 hover:bg-green-50/30 transition-colors">
                <p className="font-semibold text-sm text-green-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Définition 1.7
                </p>
                <p className="text-slate-700 leading-relaxed">
                  La contraposée de <LatexRenderer latex="P \Rightarrow Q" /> est <LatexRenderer latex="\lnot Q \Rightarrow \lnot P" />.
                </p>
              </div>

              <div className="bg-white border border-orange-100 rounded-lg p-4 hover:bg-orange-50/30 transition-colors">
                <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Théorème 1.8
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Les implications <LatexRenderer latex="P \Rightarrow Q" /> et sa contraposée sont équivalentes.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-lg p-4 hover:bg-yellow-50/30 transition-colors">
                <p className="font-semibold text-sm text-yellow-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Méthode 1.9
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Pour prouver <LatexRenderer latex="P \Rightarrow Q" />, démontrer la contraposée peut être plus simple.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.3 Raisonnement par l'absurde */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.3. Raisonnement par l'absurde
            </h3>
            <div className="space-y-5">
              <div className="bg-white border border-orange-100 rounded-lg p-4 hover:bg-orange-50/30 transition-colors">
                <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Théorème 1.10
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <LatexRenderer latex="P \Rightarrow Q" /> est équivalente à la fausseté de <LatexRenderer latex="P \land \lnot Q" />.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-lg p-4 hover:bg-yellow-50/30 transition-colors">
                <p className="font-semibold text-sm text-yellow-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Méthode 1.11
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Supposer <LatexRenderer latex="P" /> et <LatexRenderer latex="\lnot Q" /> vraies, mener à une contradiction.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.4 Principes de récurrence */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.4. Principes de récurrence
            </h3>
            <div className="space-y-5">
              <div className="bg-white border border-orange-100 rounded-lg p-4 hover:bg-orange-50/30 transition-colors">
                <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Théorème 1.12 — Récurrence simple
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Si <LatexRenderer latex="P(0)" /> est vraie et <LatexRenderer latex="P(n) \Rightarrow P(n+1)" /> pour tout <LatexRenderer latex="n\in\mathbb{N}" />, 
                  alors <LatexRenderer latex="\forall n\in \mathbb{N},\;P(n)" /> est vraie.
                </p>
              </div>

              <div className="bg-white border border-orange-100 rounded-lg p-4 hover:bg-orange-50/30 transition-colors">
                <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Théorème 1.13 — Récurrence multiple
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Fixé <LatexRenderer latex="k\ge1" />. Si <LatexRenderer latex="P(0),\ldots,P(k-1)" /> vraies et 
                  <LatexRenderer latex="P(n)\land\cdots\land P(n+k-1) \Rightarrow P(n+k)" />, 
                  alors <LatexRenderer latex="\forall n\in\mathbb{N},\,P(n)" /> est vraie.
                </p>
              </div>

              <div className="bg-white border border-orange-100 rounded-lg p-4 hover:bg-orange-50/30 transition-colors">
                <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Théorème 1.14 — Récurrence forte
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Si <LatexRenderer latex="P(0)" /> vraie et <LatexRenderer latex="P(0)\land\cdots\land P(n) \Rightarrow P(n+1)" />, 
                  alors <LatexRenderer latex="\forall n\in\mathbb{N},\,P(n)" /> vraie.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.5 Analyse–synthèse */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.5. Analyse–synthèse
            </h3>
            <div className="bg-white border border-yellow-100 rounded-lg p-4 hover:bg-yellow-50/30 transition-colors">
              <p className="font-semibold text-sm text-yellow-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Méthode 1.15
              </p>
              <p className="text-slate-700 leading-relaxed">
                Pour établir l'existence d'un objet vérifiant des propriétés <LatexRenderer latex="P" />, on : 
                <br/>(i) suppose l'objet existant et détermine les formes possibles (analyse) ; 
                <br/>(ii) vérifie qu'une de ces formes satisfait <LatexRenderer latex="P" /> (synthèse).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxCoursPage; 