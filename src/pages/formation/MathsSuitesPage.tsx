
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';

const orangeBox = (children: React.ReactNode) => (
  <div style={{ background: '#fff7eb', border: '2px solid #ffa94d', borderRadius: '10px', padding: '18px 20px', marginBottom: '16px' }}>{children}</div>
);

const MathsSuitesPage = () => {
  return (
    <div className="bg-[#EEF3FC] min-h-screen">
      <MathChapterTemplate
        chapterNumber={4}
        chapterTitle="Suites : bornes, variations, convergence et théorèmes fondamentaux"
        description="Définitions, propriétés, opérations sur les limites, théorèmes de convergence, suites extraites et résultats essentiels pour la prépa ECG Math Appro."
      >
        <div className="space-y-8 py-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                <span className="font-semibold">Suites numériques</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              {/* Majorants, minorants */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Majorants, minorants</h3>
                <p>Une suite réelle peut être limitée par des valeurs maximales ou minimales. Pour une suite <LatexRenderer latex={"(u_n)"} />, on dit qu'elle est<span>&nbsp;:</span></p>
                <ul className="mb-2 list-disc ml-6">
                  <li className="mb-2"><span className="font-semibold text-blue-900">Majorée</span> si <LatexRenderer latex={"\\exists M \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; u_n \\leq M"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Minorée</span> si <LatexRenderer latex={"\\exists m \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; u_n \\geq m"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Bornée</span> si <LatexRenderer latex={"\\exists m, M \\in \\mathbb{R}, \\; \\forall n \\in \\mathbb{N}, \\; m \\leq u_n \\leq M"} /></li>
                </ul>
              </div>
              {/* Sens de variation */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Sens de variation</h3>
                <p>Le comportement d’une suite peut être analysé selon la manière dont ses termes évoluent. Une suite <LatexRenderer latex={"(u_n)"} /> est définie comme suit&nbsp;:</p>
                <ul className="mb-2 ml-6">
                  <li className="mb-2"><span className="font-semibold text-blue-900">Croissante</span> si <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} \\geq u_n"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Décroissante</span> si <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} \\leq u_n"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Strictement croissante</span> si <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} > u_n"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Strictement décroissante</span> si <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} < u_n"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Monotone</span> si elle est soit croissante, soit décroissante.</li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Constante</span> si <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\ u_{n+1} = u_n"} /></li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Stationnaire</span> à partir d’un certain rang si <LatexRenderer latex={"\\exists n_0 \\in \\mathbb{N},\\ \\forall n \\geq n_0,\\ u_{n+1} = u_n"} /></li>
                </ul>
              </div>
              {/* Convergence */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Convergence</h3>
                <p>Une suite converge lorsqu’elle se rapproche indéfiniment d’une valeur fixe. Une suite <LatexRenderer latex={"(u_n)"} /> converge vers une limite <LatexRenderer latex={'\\ell'} /> si :</p>
                {orangeBox(<LatexRenderer latex={'\\lim_{n \\to +\\infty} u_n = \\ell \\quad \\Longleftrightarrow \\quad \\forall \\varepsilon > 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; |u_n - \\ell| \\leq \\varepsilon.'} />)}
                <p>Si elle ne converge pas, on dit qu’elle est <i>divergente</i>.</p>
              </div>
              {/* Limite infinie */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Limite infinie</h3>
                <p>Une suite peut tendre vers l’infini si ses termes deviennent arbitrairement grands. Une suite <LatexRenderer latex={"(u_n)"} /> diverge vers l’infini positif si :</p>
                {orangeBox(<LatexRenderer latex={'\\lim_{n \\to +\\infty} u_n = +\\infty \\quad \\Longleftrightarrow \\quad \\forall A > 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; u_n \\geq A.'} />)}
                <p>De même, elle diverge vers l’infini négatif si :</p>
                {orangeBox(<LatexRenderer latex={'\\lim_{n \\to +\\infty} u_n = -\\infty \\quad \\Longleftrightarrow \\quad \\forall A < 0, \\; \\exists n_0 \\in \\mathbb{N}, \\; \\forall n \\geq n_0, \\; u_n \\leq A.'} />)}
              </div>
              {/* Opérations sur les limites */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Opérations sur les limites</h3>
                <p>Les limites des suites respectent des règles algébriques. Soient deux suites <LatexRenderer latex={"(u_n)"} /> et <LatexRenderer latex={"(v_n)"} /> convergeant vers <LatexRenderer latex={'\\ell'} /> et <LatexRenderer latex={'\\ell\''} /> respectivement&nbsp;:</p>
                <ul className="mb-2 ml-6">
                  <li className="mb-2"><span className="font-semibold text-blue-900">Somme</span> : <LatexRenderer latex={"(u_n + v_n)"} /> converge vers <LatexRenderer latex={"\\ell + \\ell'"} />.</li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Produit</span> : <LatexRenderer latex={"(u_n v_n)"} /> converge vers <LatexRenderer latex={"\\ell \\ell'"} />.</li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Scalaire</span> : pour tout <LatexRenderer latex={"\\lambda"} />, <LatexRenderer latex={"(\\lambda u_n)"} /> converge vers <LatexRenderer latex={"\\lambda \\ell"} />.</li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Quotient</span> : si <LatexRenderer latex={"\\ell' \\neq 0"} />, <LatexRenderer latex={"(\\frac{u_n}{v_n})"} /> converge vers <LatexRenderer latex={"\\frac{\\ell}{\\ell'}"} />.</li>
                  <li className="mb-2"><span className="font-semibold text-blue-900">Inverse</span> : si <LatexRenderer latex={"\\ell \\neq 0"} />, <LatexRenderer latex={"(\\frac{1}{u_n})"} /> converge vers <LatexRenderer latex={"\\frac{1}{\\ell}"} />.</li>
                </ul>
                <p className="mb-2 font-semibold">Remarque :</p>
                <p className="mb-2">Certaines formes comme <LatexRenderer latex={'0 \\cdot \\infty'} /> ou <LatexRenderer latex={'\\frac{\\infty}{\\infty}'} /> sont indéterminées et nécessitent une analyse supplémentaire.</p>
              </div>
              {/* Théorème de la limite monotone */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Théorème de la limite monotone</h3>
                <p>Une suite monotone a un comportement prévisible selon ses bornes. Ainsi&nbsp;:</p>
                <ul className="mb-2 ml-6">
                  <li className="mb-2">Si <LatexRenderer latex={"(u_n)"} /> <span className="font-semibold text-blue-900">est croissante et majorée</span>, alors elle converge.</li>
                  <li className="mb-2">Si <LatexRenderer latex={"(u_n)"} /> <span className="font-semibold text-blue-900">est croissante et non majorée</span>, alors <LatexRenderer latex={'u_n \\to +\\infty'} />.</li>
                  <li className="mb-2">Si <LatexRenderer latex={"(u_n)"} /> <span className="font-semibold text-blue-900">est décroissante et minorée</span>, alors elle converge.</li>
                  <li className="mb-2">Si <LatexRenderer latex={"(u_n)"} /> <span className="font-semibold text-blue-900">est décroissante et non minorée</span>, alors <LatexRenderer latex={'u_n \\to -\\infty'} />.</li>
                </ul>
              </div>
              {/* Prolongement des inégalités */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Prolongement des inégalités</h3>
                <p>
                  Les inégalités entre suites se transmettent à leurs limites. Si, à partir d’un certain rang, <LatexRenderer latex={"u_n \\leq v_n"} /> pour deux suites convergentes <LatexRenderer latex={"(u_n) \\to \\ell"} /> et <LatexRenderer latex={"(v_n) \\to \\ell'"} />, alors <LatexRenderer latex={"\\ell \\leq \\ell'"} />. Cela reste valable avec <LatexRenderer latex={"u_n < v_n"} /> impliquant <LatexRenderer latex={"\\ell < \\ell'"} />.
                </p>
              </div>
              {/* Théorème d’encadrement */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Théorème d’encadrement</h3>
                <p>Une suite encadrée par deux suites ayant la même limite adopte cette limite. Si, à partir d’un certain rang, <LatexRenderer latex={'v_n \\leq u_n \\leq w_n'} /> avec <LatexRenderer latex={'(v_n) \\to \\ell'} /> et <LatexRenderer latex={'(w_n) \\to \\ell'} />, alors <LatexRenderer latex={'(u_n) \\to \\ell'} />.</p>
              </div>
              {/* Théorème de comparaison */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Théorème de comparaison</h3>
                <p>La comparaison des suites permet de déduire leur comportement asymptotique. Si <LatexRenderer latex={'u_n \\leq v_n'} /> à partir d’un certain rang :</p>
                <ul className="mb-2 list-disc ml-6">
                  <li>Si <LatexRenderer latex={'(v_n) \\to +\\infty'} />, alors <LatexRenderer latex={'(u_n) \\to +\\infty'} />.</li>
                  <li>Si <LatexRenderer latex={'(u_n) \\to -\\infty'} />, alors <LatexRenderer latex={'(v_n) \\to -\\infty'} />.</li>
                </ul>
              </div>
              {/* Convergence et composition */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Convergence et composition</h3>
                <p>La continuité d’une fonction préserve la convergence des suites. Si <LatexRenderer latex={'f : \\mathbb{R} \\to \\mathbb{R}'} /> est continue et <LatexRenderer latex={'(u_n) \\to a'} />, alors <LatexRenderer latex={'(f(u_n)) \\to f(a)'} />.</p>
              </div>
              {/* Suites adjacentes */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Suites adjacentes</h3>
                <p>Deux suites de sens opposés peuvent converger vers une même limite si elles se rapprochent. Si :</p>
                <ul className="mb-2 list-disc ml-6">
                  <li><LatexRenderer latex={"(u_n)"} /> est croissante</li>
                  <li><LatexRenderer latex={"(v_n)"} /> est décroissante</li>
                  <li><LatexRenderer latex={"(v_n - u_n) \\to 0"} /></li>
                </ul>
                {orangeBox(
                  <LatexRenderer latex={"(u_n) \\to \\ell,\\ (v_n) \\to \\ell,\\ \\forall n,\\ u_n \\leq \\ell \\leq v_n"} />
                )}
              </div>
              {/* Théorème du point fixe */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Théorème du point fixe</h3>
                <ul className="mb-2 list-disc ml-6">
                  <li><LatexRenderer latex={"u_{n+1} = f(u_n)"} /> (suite définie par récurrence)</li>
                  <li><LatexRenderer latex={"(u_n) \\to \\ell"} /></li>
                  <li><LatexRenderer latex={"f"} /> continue en <LatexRenderer latex={"\\ell"} /></li>
                </ul>
                {orangeBox(
                  <LatexRenderer latex={"f(\\ell) = \\ell"} />
                )}
              </div>
              {/* Suites extraites */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Suites extraites</h3>
                <ul className="mb-2 list-disc ml-6">
                  <li><LatexRenderer latex={"(u_{2n}) \\to \\ell"} /></li>
                  <li><LatexRenderer latex={"(u_{2n+1}) \\to \\ell"} /></li>
                </ul>
                {orangeBox(
                  <LatexRenderer latex={"(u_n) \\to \\ell"} />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </MathChapterTemplate>
    </div>
  );
};

export default MathsSuitesPage;
