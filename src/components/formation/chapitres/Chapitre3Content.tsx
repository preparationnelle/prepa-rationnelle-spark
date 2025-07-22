
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LatexRenderer } from "@/components/LatexRenderer";

export const Chapitre3Content = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 py-8">
      {/* Introduction */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Formation : Entiers
          </CardTitle>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Arithmétique et structures algébriques — Semestre 1, Prépa ECG Maths Approfondies
          </p>
        </CardHeader>
      </Card>

      {/* Section A - Divisibilité dans Z */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              A
            </span>
            <span className="font-semibold">Divisibilité dans Z</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Division euclidienne */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              A.1. Division euclidienne
            </h3>
            <div className="space-y-5">
              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Théorème de la division euclidienne
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a\in\mathbb Z" /> et <LatexRenderer latex="b\in\mathbb Z^*" />. Il existe un unique couple <LatexRenderer latex="(q,r)\in\mathbb Z^2" /> tel que :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="a = bq + r \quad \text{et} \quad 0 \le r < |b|" />
                </div>
                <p className="text-slate-700 mt-3">
                  <LatexRenderer latex="q" /> est appelé le <em>quotient</em> et <LatexRenderer latex="r" /> le <em>reste</em> de la division euclidienne de <LatexRenderer latex="a" /> par <LatexRenderer latex="b" />.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Divisibilité */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              A.2. Divisibilité
            </h3>
            <div className="space-y-5">
              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Définition
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a,b\in\mathbb Z" />. On dit que <LatexRenderer latex="b" /> divise <LatexRenderer latex="a" /> (noté <LatexRenderer latex="b\mid a" />) s'il existe <LatexRenderer latex="k\in\mathbb Z" /> tel que :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="a = kb" />
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Propriétés de la divisibilité
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Transitivité :</p>
                    <LatexRenderer latex="a\mid b \text{ et } b\mid c \Rightarrow a\mid c" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Linéarité :</p>
                    <LatexRenderer latex="d\mid a \text{ et } d\mid b \Rightarrow d\mid (ua+vb)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - PGCD et PPCM */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              B
            </span>
            <span className="font-semibold">PGCD et PPCM</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 PGCD */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              B.1. Plus Grand Commun Diviseur (PGCD)
            </h3>
            <div className="space-y-5">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Définition et existence
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a,b\in\mathbb Z" /> non tous deux nuls. Le PGCD de <LatexRenderer latex="a" /> et <LatexRenderer latex="b" />, noté <LatexRenderer latex="\gcd(a,b)" />, est le plus grand entier positif qui divise à la fois <LatexRenderer latex="a" /> et <LatexRenderer latex="b" />.
                </p>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Algorithme d'Euclide
                </p>
                <p className="text-slate-700 mb-3">
                  Pour calculer <LatexRenderer latex="\gcd(a,b)" /> avec <LatexRenderer latex="a\ge b > 0" /> :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\gcd(a,b) = \gcd(b, a \bmod b)" />
                </div>
                <p className="text-slate-700 mt-3">
                  On itère jusqu'à obtenir un reste nul.
                </p>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Théorème de Bézout
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a,b\in\mathbb Z" /> non tous deux nuls. Il existe <LatexRenderer latex="u,v\in\mathbb Z" /> tels que :
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-emerald-200">
                  <LatexRenderer latex="au + bv = \gcd(a,b)" />
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Nombres premiers entre eux */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-teal-500 rounded-full"></span>
              B.2. Nombres premiers entre eux
            </h3>
            <div className="space-y-5">
              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Définition
                </p>
                <p className="text-slate-700 mb-3">
                  Deux entiers <LatexRenderer latex="a" /> et <LatexRenderer latex="b" /> sont <em>premiers entre eux</em> si :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\gcd(a,b) = 1" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Lemme de Gauss
                </p>
                <p className="text-slate-700 mb-3">
                  Si <LatexRenderer latex="a\mid bc" /> et <LatexRenderer latex="\gcd(a,b) = 1" />, alors :
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-emerald-200">
                  <LatexRenderer latex="a\mid c" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-50 via-white to-emerald-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-slate-600 italic font-medium">
              Fin de la fiche — Arithmétique des entiers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
