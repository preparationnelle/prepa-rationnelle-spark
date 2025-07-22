import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LatexRenderer } from "@/components/LatexRenderer";

export const Chapitre2Content = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 py-8">
      {/* Introduction */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Formation : Sommes, produits et coefficients binomiaux
          </CardTitle>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Propositions essentielles uniquement — Semestre 1, Prépa ECG Maths Approfondies
          </p>
        </CardHeader>
      </Card>

      {/* Section A - Sommes et produits */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              A
            </span>
            <span className="font-semibold">Sommes et produits</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Formules pour les sommes */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              A.1. Formules pour les sommes
            </h3>
            <div className="space-y-5">
              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Somme d'une suite constante
                </p>
                <p className="text-slate-700 mb-3">
                  Pour tout <LatexRenderer latex="c\in\mathbb R" /> et pour tous entiers <LatexRenderer latex="P\le Q" /> :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \sum_{p=P}^{Q} c = (Q-P+1)\,c" />
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Sommes des puissances successives
                </p>
                <p className="text-slate-700 mb-3">
                  Soit <LatexRenderer latex="N\in\mathbb N^{\ast}" />. On dispose des identités classiques :
                </p>
                <div className="bg-white/70 rounded-md p-3 space-y-2">
                  <LatexRenderer latex="\displaystyle \sum_{p=1}^{N} p = \frac{N(N+1)}{2}" />
                  <LatexRenderer latex="\displaystyle \sum_{p=1}^{N} p^{2} = \frac{N(N+1)(2N+1)}{6}" />
                  <LatexRenderer latex="\displaystyle \sum_{p=1}^{N} p^{3} = \frac{N^{2}(N+1)^{2}}{4}" />
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Sommes géométriques
                </p>
                <p className="text-slate-700 mb-3">
                  Pour <LatexRenderer latex="q\in\mathbb R" /> et <LatexRenderer latex="M\in\mathbb N" /> :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \sum_{p=0}^{M} q^{p} = \begin{cases} M+1 & \text{si } q=1, \\ \dfrac{1-q^{M+1}}{1-q} & \text{si } q\neq 1. \end{cases}" />
                </div>
                <p className="text-slate-700 mt-3 mb-2">
                  Plus généralement, si <LatexRenderer latex="P\le Q" /> :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \sum_{p=P}^{Q} q^{p} = q^{P}\,\frac{1-q^{Q-P+1}}{1-q}" />
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Propriétés algébriques de <LatexRenderer latex="\sum" />
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-purple-800 mb-1">Homogénéité :</p>
                    <LatexRenderer latex="\displaystyle \sum_{p=1}^{N} \lambda u_p = \lambda \sum_{p=1}^{N} u_p" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-purple-800 mb-1">Additivité :</p>
                    <LatexRenderer latex="\displaystyle \sum_{p=1}^{N} (u_p+v_p) = \sum_{p=1}^{N} u_p + \sum_{p=1}^{N} v_p" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Réindexation et télescopage */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              A.2. Réindexation et télescopage
            </h3>
            <div className="space-y-5">
              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Changement d'indice linéaire
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle \sum_{p=P}^{Q} u_{p+m} = \sum_{i=P+m}^{Q+m} u_{i},\quad \text{où } i=p+m" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle \sum_{p=P}^{Q} u_{p} = \sum_{i=m-Q}^{m-P} u_{\,m-i}" />
                  </div>
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Sommes télescopiques
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \sum_{p=0}^{N} (w_{p+1}-w_{p}) = w_{N+1}-w_{0}" />
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Interversion de deux sommes
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-2">Indices indépendants :</p>
                    <LatexRenderer latex="\displaystyle \sum_{r=1}^{M}\sum_{s=1}^{N} x_{r,s} = \sum_{s=1}^{N}\sum_{r=1}^{M} x_{r,s}" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-2">Indices liés (r ≤ s) :</p>
                    <LatexRenderer latex="\displaystyle \sum_{1\le r\le s\le N} x_{r,s} = \sum_{r=1}^{N}\sum_{s=r}^{N} x_{r,s} = \sum_{s=1}^{N}\sum_{r=1}^{s} x_{r,s}" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.3 Produits et applications */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              A.3. Produits et applications
            </h3>
            <div className="space-y-5">
              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Factorielles
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle N! = \prod_{p=1}^{N} p,\quad 0!:=1,\quad N! = N\,(N-1)! \;\;(N\ge 1)" />
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Propriétés algébriques de <LatexRenderer latex="\prod" />
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Multiplicativité :</p>
                    <LatexRenderer latex="\displaystyle \prod_{p=1}^{N} (u_p v_p) = \Bigl(\prod_{p=1}^{N} u_p\Bigr) \Bigl(\prod_{p=1}^{N} v_p\Bigr)" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p className="font-medium text-indigo-800 mb-1">Division :</p>
                    <LatexRenderer latex="\displaystyle \prod_{p=1}^{N} \frac{u_p}{v_p} = \frac{\prod_{p=1}^{N} u_p}{\prod_{p=1}^{N} v_p}" />
                  </div>
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 hover:bg-purple-50/70 transition-colors">
                <p className="font-semibold text-sm text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Produits télescopiques
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \prod_{p=0}^{N} \frac{z_{p+1}}{z_{p}} = \frac{z_{N+1}}{z_{0}}" />
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50/70 transition-colors">
                <p className="font-semibold text-sm text-indigo-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Carré d'une somme
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \Bigl(\sum_{p=1}^{N} u_p\Bigr)^{2} = \sum_{p=1}^{N} u_p^{2} + 2\sum_{1\le r<s\le N} u_r u_s" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - Coefficients binomiaux */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              B
            </span>
            <span className="font-semibold">Coefficients binomiaux</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 Définitions et propriétés */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              B.1. Définitions et propriétés
            </h3>
            <div className="space-y-5">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Permutations et factorielles
                </p>
                <p className="text-slate-700 mb-3">
                  Soit <LatexRenderer latex="E" /> un ensemble fini contenant <LatexRenderer latex="n" /> éléments. Une <em>permutation</em> de <LatexRenderer latex="E" /> est une bijection de <LatexRenderer latex="E" /> sur lui-même.
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\text{Il existe } n!\text{ permutations d'un ensemble à } n \text{ éléments}" />
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Coefficients binomiaux
                </p>
                <p className="text-slate-700 mb-3">
                  Le nombre de sous-ensembles à <LatexRenderer latex="p" /> éléments dans un ensemble de <LatexRenderer latex="n" /> éléments :
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \binom{n}{p}= \begin{cases}\dfrac{n!}{p!\,(n-p)!} & \text{si } 0\le p\le n,\\[6pt] 0 & \text{si } p>n.\end{cases}" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Calcul pratique
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \binom{n}{p}=\frac{n(n-1)\dotsm(n-p+1)}{p!}" />
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle \binom{n}{2}= \frac{n(n-1)}{2}" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle \binom{n}{3}= \frac{n(n-1)(n-2)}{6}" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Relations et formules */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-teal-500 rounded-full"></span>
              B.2. Relations et formules
            </h3>
            <div className="space-y-5">
              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Symétrie
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-teal-200">
                  <LatexRenderer latex="\displaystyle \binom{n}{p} = \binom{n}{\,n-p}" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Relations diagonales
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle p\,\binom{n}{p}=n\,\binom{\,n-1\,}{\,p-1}" />
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <LatexRenderer latex="\displaystyle p(p-1)\,\binom{n}{p}=n(n-1)\,\binom{\,n-2\,}{\,p-2}" />
                  </div>
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Triangle de Pascal
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle \binom{n}{p}= \binom{\,n-1\,}{\,p-1} + \binom{\,n-1\,}{p}" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Formule du binôme de Newton
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\displaystyle (a+b)^n =\sum_{k=0}^{n} \binom{n}{k} a^{\,k} b^{\,n-k} =\sum_{k=0}^{n} \binom{n}{k} a^{\,n-k} b^{\,k}" />
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Nombre de parties d'un ensemble
                </p>
                <div className="bg-white/70 rounded-md p-3 border-2 border-teal-200">
                  <LatexRenderer latex="\displaystyle \sum_{k=0}^{n} \binom{n}{k}=2^{n}" />
                  <p className="text-slate-700 mt-2 italic">
                    Un ensemble de <LatexRenderer latex="n" /> éléments possède <LatexRenderer latex="2^{n}" /> sous-ensembles.
                  </p>
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
              Fin de la fiche — à mémoriser sans exemples.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};