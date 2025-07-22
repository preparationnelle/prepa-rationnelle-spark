
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LatexRenderer } from "@/components/LatexRenderer";

export const Chapitre3Content = () => {
  return (
    <div className="space-y-8">
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
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
            <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Coefficients binomiaux
            </p>
            <p className="text-slate-700 mb-3">
              Le nombre de sous-ensembles à <LatexRenderer latex="p" /> éléments dans un ensemble de <LatexRenderer latex="n" /> éléments :
            </p>
            <div className="bg-white/70 rounded-md p-3">
              <LatexRenderer latex="\displaystyle \binom{n}{p}= \begin{cases}\dfrac{n!}{p!\,(n-p)!} & \text{si } 0\le p\le n,\\[6pt] 0 & \text{si } p>n.\end{cases}" />
            </div>
          </div>

          <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
            <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Formule du binôme de Newton
            </p>
            <div className="bg-white/70 rounded-md p-3">
              <LatexRenderer latex="\displaystyle (a+b)^n =\sum_{k=0}^{n} \binom{n}{k} a^{\,k} b^{\,n-k} =\sum_{k=0}^{n} \binom{n}{k} a^{\,n-k} b^{\,k}" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
