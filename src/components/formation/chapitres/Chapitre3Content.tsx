
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

      {/* Section A - Division euclidienne */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              A
            </span>
            <span className="font-semibold">Division euclidienne</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Théorème de division euclidienne */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.1. Théorème de division euclidienne
            </h3>
            <div className="space-y-5">
              <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50/70 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Division euclidienne dans ℤ
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a\in\mathbb Z" /> et <LatexRenderer latex="b\in\mathbb Z^{\ast}" />. Il existe un unique couple <LatexRenderer latex="(q,r)\in\mathbb Z^{2}" /> tel que :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="a = bq + r \quad \text{et} \quad 0 \le r < |b|" />
                </div>
                <p className="text-slate-700 mt-3">
                  <LatexRenderer latex="q" /> est appelé le <em>quotient</em> et <LatexRenderer latex="r" /> le <em>reste</em> de la division euclidienne de <LatexRenderer latex="a" /> par <LatexRenderer latex="b" />.
                </p>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Cas particuliers
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Si <LatexRenderer latex="b > 0" /> :</p>
                    <LatexRenderer latex="0 \le r < b" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Si <LatexRenderer latex="b < 0" /> :</p>
                    <LatexRenderer latex="0 \le r < -b" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Applications */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              A.2. Applications et propriétés
            </h3>
            <div className="space-y-5">
              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Divisibilité
                </p>
                <p className="text-slate-700 mb-3">
                  On dit que <LatexRenderer latex="b" /> divise <LatexRenderer latex="a" /> (noté <LatexRenderer latex="b \mid a" />) si le reste de la division euclidienne de <LatexRenderer latex="a" /> par <LatexRenderer latex="b" /> est nul.
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="b \mid a \Leftrightarrow \exists q \in \mathbb Z, \; a = bq" />
                </div>
              </div>

              <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50/70 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Congruences modulo n
                </p>
                <p className="text-slate-700 mb-3">
                  Soit <LatexRenderer latex="n \in \mathbb N^{\ast}" />. Deux entiers <LatexRenderer latex="a" /> et <LatexRenderer latex="b" /> sont congrus modulo <LatexRenderer latex="n" /> si :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="a \equiv b \pmod{n} \Leftrightarrow n \mid (a-b)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - PGCD et algorithme d'Euclide */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              B
            </span>
            <span className="font-semibold">PGCD et algorithme d'Euclide</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 Définition du PGCD */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              B.1. Plus grand commun diviseur
            </h3>
            <div className="space-y-5">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Définition
                </p>
                <p className="text-slate-700 mb-3">
                  Soient <LatexRenderer latex="a, b \in \mathbb Z" /> non tous deux nuls. Le PGCD de <LatexRenderer latex="a" /> et <LatexRenderer latex="b" /> est :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\gcd(a,b) = \max\{d \in \mathbb N^{\ast} : d \mid a \text{ et } d \mid b\}" />
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Propriétés du PGCD
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\gcd(a,b) = \gcd(b,a) = \gcd(|a|,|b|)" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\gcd(a,0) = |a| \quad (a \neq 0)" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\gcd(a,b) = \gcd(a, b-ka) \quad (k \in \mathbb Z)" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Algorithme d'Euclide */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-teal-500 rounded-full"></span>
              B.2. Algorithme d'Euclide
            </h3>
            <div className="space-y-5">
              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Principe
                </p>
                <p className="text-slate-700 mb-3">
                  Pour calculer <LatexRenderer latex="\gcd(a,b)" /> avec <LatexRenderer latex="a \ge b > 0" /> :
                </p>
                <div className="bg-white/70 rounded-md p-3 space-y-2">
                  <LatexRenderer latex="a = bq_1 + r_1 \quad (0 \le r_1 < b)" />
                  <LatexRenderer latex="b = r_1 q_2 + r_2 \quad (0 \le r_2 < r_1)" />
                  <LatexRenderer latex="r_1 = r_2 q_3 + r_3 \quad (0 \le r_3 < r_2)" />
                  <LatexRenderer latex="\vdots" />
                  <LatexRenderer latex="r_{n-1} = r_n q_{n+1} + 0" />
                </div>
                <p className="text-slate-700 mt-3">
                  Alors <LatexRenderer latex="\gcd(a,b) = r_n" /> (dernier reste non nul).
                </p>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Identité de Bézout
                </p>
                <p className="text-slate-700 mb-3">
                  Pour tous entiers <LatexRenderer latex="a, b" /> non tous deux nuls, il existe <LatexRenderer latex="u, v \in \mathbb Z" /> tels que :
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-emerald-200">
                  <LatexRenderer latex="au + bv = \gcd(a,b)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section C - Nombres premiers */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              C
            </span>
            <span className="font-semibold">Nombres premiers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* C.1 Définition et propriétés */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              C.1. Définition et propriétés fondamentales
            </h3>
            <div className="space-y-5">
              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Nombre premier
                </p>
                <p className="text-slate-700 mb-3">
                  Un entier <LatexRenderer latex="p \ge 2" /> est premier s'il n'admet que deux diviseurs positifs : <LatexRenderer latex="1" /> et <LatexRenderer latex="p" />.
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="p \text{ premier} \Leftrightarrow \forall a \in \mathbb Z, \; (p \mid a \Rightarrow p \mid 1 \text{ ou } p \mid a)" />
                </div>
              </div>

              <div className="bg-pink-50/50 border border-pink-200 rounded-lg p-4 hover:bg-pink-50/70 transition-colors">
                <p className="font-semibold text-sm text-pink-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Lemme d'Euclide
                </p>
                <p className="text-slate-700 mb-3">
                  Si <LatexRenderer latex="p" /> est premier et <LatexRenderer latex="p \mid ab" />, alors <LatexRenderer latex="p \mid a" /> ou <LatexRenderer latex="p \mid b" />.
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="p \text{ premier}, \; p \mid ab \Rightarrow p \mid a \text{ ou } p \mid b" />
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Théorème fondamental de l'arithmétique
                </p>
                <p className="text-slate-700 mb-3">
                  Tout entier <LatexRenderer latex="n \ge 2" /> se décompose de manière unique (à l'ordre près) en produit de nombres premiers :
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-purple-200">
                  <LatexRenderer latex="n = p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k}" />
                  <p className="text-slate-700 mt-2 text-sm">
                    où <LatexRenderer latex="p_1 < p_2 < \cdots < p_k" /> sont premiers et <LatexRenderer latex="\alpha_i \ge 1" />.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-slate-600 italic font-medium">
              Fin du chapitre — Arithmétique des entiers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
