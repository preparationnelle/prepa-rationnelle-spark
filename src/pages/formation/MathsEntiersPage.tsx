
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';

const orangeBox = (children: React.ReactNode) => (
  <div style={{ background: '#fff7eb', border: '2px solid #ffa94d', borderRadius: '10px', padding: '18px 20px', marginBottom: '16px' }}>{children}</div>
);

const MathsEntiersPage = () => {
  return (
    <div className="bg-[#EEF3FC] min-h-screen">
      <MathChapterTemplate
        chapterNumber={3}
        chapterTitle="Sommes, produits et coefficients binomiaux"
        description="Formules fermées, techniques de manipulation, produits, coefficients binomiaux et propriétés fondamentales pour la prépa ECG Math Appro."
      >
        <div className="space-y-8 py-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                <span className="font-semibold">Sommes et produits</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              {/* Somme d’une suite constante */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Somme d’une suite constante</h3>
                <p className="mb-2">Pour deux entiers <LatexRenderer latex={'m,n'} /> tels que <LatexRenderer latex={'m\le n'} /> et toute constante réelle <LatexRenderer latex={'c'} />, on a :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=m}^{n} c = (n-m+1)\\,c'} />)}
              </div>
              {/* Sommes des puissances des premiers entiers */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Sommes des puissances des premiers entiers</h3>
                {orangeBox(<>
                  <LatexRenderer latex={'\\displaystyle \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'} />
                  <LatexRenderer latex={'\\displaystyle \\sum_{i=1}^{n} i^{2} = \\frac{n(n+1)(2n+1)}{6}'} />
                  <LatexRenderer latex={'\\displaystyle \\sum_{i=1}^{n} i^{3} = \\Bigl[\\tfrac{n(n+1)}{2}\\Bigr]^{2}'} />
                </>)}
              </div>
              {/* Sommes géométriques */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Sommes géométriques</h3>
                <p className="mb-2">Pour <LatexRenderer latex={'q'} /> réel et <LatexRenderer latex={'n \ge 0'} /> :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=0}^{n} q^{i} = \\begin{cases} n+1 & \\text{si } q = 1,\\ \\displaystyle\\frac{1-q^{\\,n+1}}{1-q} & \\text{si } q\\neq1. \\end{cases}'} />)}
                <p className="mb-2">Plus généralement, pour <LatexRenderer latex={'q\neq1'} /> et <LatexRenderer latex={'n\ge m'} /> :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=m}^{n} q^{i} = q^{m}\\,\\frac{1-q^{\\,n-m+1}}{1-q}'} />)}
              </div>
              {/* Propriétés algébriques de la somme */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Propriétés algébriques de la somme</h3>
                {orangeBox(<>
                  <LatexRenderer latex={'\\displaystyle \\sum_{i=1}^{n} (x_i + y_i) = \\sum_{i=1}^{n} x_i + \\sum_{i=1}^{n} y_i'} />
                  <LatexRenderer latex={'\\displaystyle \\forall \\lambda\\in\\mathbb{R},\\; \\sum_{i=1}^{n} \\lambda x_i = \\lambda\\sum_{i=1}^{n} x_i.'} />
                </>)}
              </div>
              {/* Section 2 - Techniques de manipulation */}
              <Separator className="my-8" />
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">2. Techniques de manipulation</h2>
              {/* Changement d’indice */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Changement d’indice</h3>
                <p className="mb-2">Soit <LatexRenderer latex={'r\in\mathbb{Z}'} />. En posant <LatexRenderer latex={'j = i + r'} /> :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=m}^{n} x_{i+r} = \\sum_{j=m+r}^{n+r} x_{j}'} />)}
                <p className="mb-2">Lorsque <LatexRenderer latex={'r\ge n'} /> et en définissant <LatexRenderer latex={'\ell = r - i'} /> :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=m}^{n} x_{r-i} = \\sum_{\\ell=r-n}^{r-m} x_{\\ell}'} />)}
              </div>
              {/* Sommes télescopiques */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Sommes télescopiques</h3>
                <p className="mb-2">Pour toute suite <LatexRenderer latex={'(u_i)_{i\ge0}'} /> :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=0}^{n} (u_{i+1}-u_i) = u_{n+1} - u_0'} />)}
              </div>
              {/* Section 3 - Sommes doubles */}
              <Separator className="my-8" />
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">3. Sommes doubles</h2>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Indices indépendants</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{i=1}^{n}\\,\\sum_{j=1}^{n} x_{i,j} = \\sum_{j=1}^{n}\\,\\sum_{i=1}^{n} x_{i,j}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Indices dépendants</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{1\\le i \\le j \\le n} x_{i,j} = \\sum_{j=1}^{n} \\sum_{i=1}^{j} x_{i,j}'} />)}
              </div>
              {/* Section 4 - Lien somme simple / double */}
              <Separator className="my-8" />
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">4. Lien entre somme simple et double</h2>
              {orangeBox(<LatexRenderer latex={'\\displaystyle \\Bigl(\\sum_{i=1}^{n} x_i\\Bigr)^{2} = \\sum_{i=1}^{n} x_i^{2} + 2\\sum_{1\\le i<j\\le n} x_i x_j.'} />)}
              {/* Section 5 - Produits */}
              <Separator className="my-8" />
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">5. Produits</h2>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Factorielle</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle n! = \\prod_{i=1}^{n} i'} />)}
                <p className="mb-2">Par convention <LatexRenderer latex={'0! = 1'} />. On a ensuite <LatexRenderer latex={'1!=1,\;2!=2,\;3!=6,\;4!=24,\;5!=120'} />.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Produit d’une suite constante</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\prod_{i=1}^{n} \lambda = \lambda^{n}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Compatibilités algébriques du produit</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\prod_{i=1}^{n} (x_i\\,y_i) = \\Bigl(\\prod_{i=1}^{n} x_i\\Bigr)\\Bigl(\\prod_{i=1}^{n} y_i\\Bigr).'} />)}
                <p className="mb-2">Si aucun <LatexRenderer latex={'y_i'} /> n’est nul :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\prod_{i=1}^{n} \\frac{x_i}{y_i} = \\frac{\\prod_{i=1}^{n} x_i}{\\prod_{i=1}^{n} y_i}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Produit télescopique</h3>
                <p className="mb-2">Pour une suite <LatexRenderer latex={'(z_i)'} /> de réels non nuls :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\prod_{i=0}^{n} \\frac{z_{i+1}}{z_{i}} = \\frac{z_{n+1}}{z_{0}}'} />)}
              </div>
            </CardContent>
          </Card>

          {/* Section 6 - Coefficients binomiaux */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                <span className="font-semibold">Coefficients binomiaux</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Permutations et factorielles</h3>
                <p className="mb-2">Soit <LatexRenderer latex={'E'} /> un ensemble fini contenant <LatexRenderer latex={'n'} /> éléments. Une <b>permutation</b> de <LatexRenderer latex={'E'} /> est une bijection de <LatexRenderer latex={'E'} /> sur lui-même.</p>
                {orangeBox(<LatexRenderer latex={'\\text{Il existe } n!\\text{ permutations d’un ensemble à } n \\text{ éléments}.'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Valeurs utiles (à savoir retrouver)</h3>
                <p className="mb-2">Par convention on fixe <LatexRenderer latex={'0! = 1'} />. On a ensuite <LatexRenderer latex={'1!=1,\;2!=2,\;3!=6,\;4!=24,\;5!=120'} />.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Nombre de parties à <LatexRenderer latex={'p'} /> éléments</h3>
                <p className="mb-2">Le nombre de sous-ensembles comportant <LatexRenderer latex={'p'} /> éléments dans un ensemble de <LatexRenderer latex={'n'} /> éléments vaut <LatexRenderer latex={'\\binom{n}{p}'} />, lu « <i>p parmi n</i> », avec</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\binom{n}{p}=\\begin{cases}\\dfrac{n!}{p!\\,(n-p)!} & \\text{si } 0\\le p\\le n,\\\\ 0 & \\text{si } p>n.\\end{cases}'} />)}
                <p className="mb-2 italic">Remarque : les entiers <LatexRenderer latex={'\\binom{n}{p}'} /> sont nommés <b>coefficients binomiaux</b>.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Calcul pratique</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\binom{n}{p}=\\frac{n(n-1)\\dotsm(n-p+1)}{p!}'} />)}
                <p className="mb-2">Par exemple :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\binom{n}{2}= \\frac{n(n-1)}{2},\\qquad \\binom{n}{3}= \\frac{n(n-1)(n-2)}{6}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Nombre de façons de choisir <LatexRenderer latex={'p'} /> objets</h3>
                <p className="mb-2">
                  Le coefficient <LatexRenderer latex={'\\binom{n}{p}'} /> compte les manières de sélectionner, sans ordre ni hiérarchie, <LatexRenderer latex={'p'} /> objets distincts parmi <LatexRenderer latex={'n'} /> (
                  <span className="inline-block align-middle"><LatexRenderer latex={'p \\leq n'} /></span>
                  ).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Nombre de chemins (loi binomiale)</h3>
                <p className="mb-2">Dans un arbre binaire succès/échec, <LatexRenderer latex={'\\binom{n}{p}'} /> mesure le nombre de trajectoires où l’on observe <LatexRenderer latex={'p'} /> succès au cours de <LatexRenderer latex={'n'} /> essais indépendants (schéma de la loi binomiale).</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Symétrie</h3>
                <p className="mb-2">Les coefficients binomiaux vérifient la relation de symétrie :</p>
                {orangeBox(<LatexRenderer latex={'\\boxed{\\displaystyle \\binom{n}{p} = \\binom{n}{n-p}}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Relations « diagonales »</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle p\\,\\binom{n}{p}=n\\,\\binom{n-1}{p-1}'} />)}
                {orangeBox(<LatexRenderer latex={'\\displaystyle p(p-1)\\,\\binom{n}{p}=n(n-1)\\,\\binom{n-2}{p-2}'} />)}
                <p className="mb-2">La première identité est à connaître par cœur ; il est recommandé de savoir démontrer la seconde.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Triangle de Pascal</h3>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\binom{n}{p}= \\binom{n-1}{p-1} + \\binom{n-1}{p}'} />)}
                <p className="mb-2 italic">Remarque : lorsque <LatexRenderer latex={'p>n'} />, cette égalité reste valide car elle fournit <LatexRenderer latex={'0=0+0'} />.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Formule du binôme de Newton</h3>
                <p className="mb-2">Pour tous réels <LatexRenderer latex={'(a,b)'} /> et tout entier <LatexRenderer latex={'n\ge 0'} /> :</p>
                {orangeBox(<LatexRenderer latex={'(a+b)^n = \\displaystyle\\sum_{k=0}^{n} \\binom{n}{k} a^{k} b^{n-k} = \\displaystyle\\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^{k}'} />)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Nombre de parties d’un ensemble</h3>
                <p className="mb-2">En posant <LatexRenderer latex={'a=b=1'} /> dans l’identité précédente, on obtient :</p>
                {orangeBox(<LatexRenderer latex={'\\displaystyle \\sum_{k=0}^{n} \\binom{n}{k}=2^{n}'} />)}
                <p className="mb-2 italic">Un ensemble de <LatexRenderer latex={'n'} /> éléments possède <LatexRenderer latex={'2^{n}'} /> sous-ensembles.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </MathChapterTemplate>
    </div>
  );
};

export default MathsEntiersPage;
