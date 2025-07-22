import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LatexRenderer } from "@/components/LatexRenderer";

export const Chapitre5Content = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 py-8">
      {/* Introduction */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Formation : Suites
          </CardTitle>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Propositions essentielles uniquement — Semestre 1, Prépa ECG Maths Approfondies
          </p>
        </CardHeader>
      </Card>

      {/* Section A - Propriétés des suites */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              A
            </span>
            <span className="font-semibold">Propriétés des suites</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Majorants, minorants et bornes */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
              A.1. Majorants, minorants et bornes
            </h3>
            <div className="space-y-5">
              <div className="bg-cyan-50/50 border border-cyan-200 rounded-lg p-4 hover:bg-cyan-50/70 transition-colors">
                <p className="font-semibold text-sm text-cyan-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Définitions
                </p>
                <div className="space-y-2 text-slate-700">
                  <p>• <strong>Majorée</strong> : <LatexRenderer latex="\exists M\in\mathbb R,\;\forall n\in\mathbb N,\;u_n\le M" /></p>
                  <p>• <strong>Minorée</strong> : <LatexRenderer latex="\exists m\in\mathbb R,\;\forall n\in\mathbb N,\;u_n\ge m" /></p>
                  <p>• <strong>Bornée</strong> : majorée <em>et</em> minorée</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Sens de variation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.2. Sens de variation
            </h3>
            <div className="space-y-5">
              <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50/70 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Croissante :</strong> <LatexRenderer latex="\forall n,\;u_{n+1}\ge u_n" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Décroissante :</strong> <LatexRenderer latex="\forall n,\;u_{n+1}\le u_n" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Strictement :</strong> remplacer <LatexRenderer latex="\ge" /> par <LatexRenderer latex=">" /> (resp. <LatexRenderer latex="\le" /> par <LatexRenderer latex="<" />)</p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Constante :</strong> <LatexRenderer latex="\forall n,\;u_{n+1}=u_n" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.3 Convergence */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
              A.3. Convergence
            </h3>
            <div className="space-y-5">
              <div className="bg-cyan-50/50 border border-cyan-200 rounded-lg p-4 hover:bg-cyan-50/70 transition-colors">
                <p className="font-semibold text-sm text-cyan-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Définition de la limite
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\lim_{n\to+\infty}u_n=\ell" />
                  <p className="text-slate-700 mt-2">⇔</p>
                  <LatexRenderer latex="\forall\varepsilon>0,\;\exists n_0\in\mathbb N,\;\forall n\ge n_0,\;|u_n-\ell|\le\varepsilon" />
                </div>
              </div>

              <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50/70 transition-colors">
                <p className="font-semibold text-sm text-blue-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Limite infinie
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\lim_{n\to+\infty}u_n=+\infty" />
                  <p className="text-slate-700 mt-2">⇔</p>
                  <LatexRenderer latex="\forall A>0,\;\exists n_0,\;\forall n\ge n_0,\;u_n\ge A" />
                </div>
              </div>

              <div className="bg-cyan-50/50 border border-cyan-200 rounded-lg p-4 hover:bg-cyan-50/70 transition-colors">
                <p className="font-semibold text-sm text-cyan-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Propriété importante
                </p>
                <p className="text-slate-700 bg-white/70 rounded-md p-3 border-2 border-cyan-200">
                  Toute suite convergente est bornée (réciproque fausse).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - Théorèmes de convergence */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              B
            </span>
            <span className="font-semibold">Théorèmes de convergence</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 Opérations sur les limites */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-teal-500 rounded-full"></span>
              B.1. Opérations sur les limites
            </h3>
            <div className="space-y-5">
              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Somme :</strong> <LatexRenderer latex="u_n\to\ell,\; v_n\to\ell'\Rightarrow u_n+v_n\to\ell+\ell'" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Produit :</strong> <LatexRenderer latex="u_nv_n\to\ell\ell'" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Scalaire :</strong> <LatexRenderer latex="\lambda u_n\to\lambda\ell" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p><strong>Quotient :</strong> <LatexRenderer latex="\frac{u_n}{v_n}\to\frac{\ell}{\ell'}" /> si <LatexRenderer latex="\ell'\neq0" /></p>
                  </div>
                </div>
                <p className="text-slate-600 mt-3 text-sm italic">
                  Les cas <LatexRenderer latex="0\cdot\infty" />, <LatexRenderer latex="\infty-\infty" />, <LatexRenderer latex="\frac{\infty}{\infty}" /> constituent des formes indéterminées.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Théorèmes fondamentaux */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              B.2. Théorèmes fondamentaux
            </h3>
            <div className="space-y-5">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Théorème de la limite monotone
                </p>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-md p-3">
                    <p>• Suite croissante <strong>et</strong> majorée ⇒ convergence</p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p>• Suite croissante non majorée ⇒ <LatexRenderer latex="u_n\to+\infty" /></p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p>• Suite décroissante <strong>et</strong> minorée ⇒ convergence</p>
                  </div>
                  <div className="bg-white/70 rounded-md p-3">
                    <p>• Suite décroissante non minorée ⇒ <LatexRenderer latex="u_n\to-\infty" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Théorème d'encadrement
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="v_n\le u_n\le w_n\text{ et }v_n\to\ell=w_n\Rightarrow u_n\to\ell" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Théorème de comparaison
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="u_n\le v_n\Rightarrow\begin{cases}v_n\to+\infty\Rightarrow u_n\to+\infty\\u_n\to-\infty\Rightarrow v_n\to-\infty\end{cases}" />
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Théorème du point fixe
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="u_{n+1}=f(u_n),\;u_n\to\ell,\;f\text{ continue en }\ell\Rightarrow f(\ell)=\ell" />
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 hover:bg-emerald-50/70 transition-colors">
                <p className="font-semibold text-sm text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Suites adjacentes
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\text{Si }(u_n)\text{ croissante, }(v_n)\text{ décroissante et }(v_n-u_n)\to0\Rightarrow u_n\to\ell\text{ et }v_n\to\ell" />
                </div>
              </div>

              <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 hover:bg-teal-50/70 transition-colors">
                <p className="font-semibold text-sm text-teal-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Suites extraites
                </p>
                <div className="bg-white/70 rounded-md p-3">
                  <LatexRenderer latex="\lim u_{2n}=\lim u_{2n+1}=\ell\Rightarrow u_n\to\ell" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-cyan-50 via-white to-teal-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-slate-600 italic font-medium">
              Fin de la fiche — à mémoriser sans exemples.
            </p>
            <p className="text-xs text-slate-500 mt-3 italic">
              « Les mathématiques sont une gymnastique de l'esprit et une préparation à la philosophie. » — Isocrate
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};