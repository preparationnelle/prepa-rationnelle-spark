import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/math/premiere-vers-deuxieme" className="hover:text-[#1e3a8a] transition-colors">
              Première → Deuxième année
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Applications linéaires</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre : Applications linéaires & structures vectorielles
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices du chapitre 11
            </p>
          </div>
        </Card>

        {/* Modèle de carte exercice inspiré du chapitre 3 */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 20
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Intermédiaire
                  </div>
                </div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>Démontrer que :</p>
                  <div className="text-center my-4">
                    <LatexRenderer latex={"f^2 = 0_{\\mathcal{L}(E)} \\Longleftrightarrow \\operatorname{Im}(f) \\subset \\ker(f)"} />
                  </div>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-4">
                    <h4 className="font-semibold text-green-800">Démonstration</h4>
                    <div className="text-green-800 space-y-3">
                      <p>
                        <span className="underline">Sens direct</span> : Supposons que{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^2 = 0_{\\mathcal{L}(E)}"} /></span>. Soit{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"y \\in \\operatorname{Im}(f)"} /></span>. Il existe{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>{' '}tel que{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"y = f(x)"} /></span>. Alors :
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"f(y) = f(f(x)) = (f \\circ f)(x) = 0_E"} />
                      </div>
                      <p>
                        Donc{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"y \\in \\ker(f)"} /></span>, d'où{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\operatorname{Im}(f) \\subset \\ker(f)"} /></span>.
                      </p>

                      <p>
                        <span className="underline">Sens réciproque</span> : Supposons que{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\operatorname{Im}(f) \\subset \\ker(f)"} /></span>. Soit{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>. Alors{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f(x) \\in \\operatorname{Im}(f) \\subset \\ker(f)"} /></span>, donc :
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"f(f(x)) = 0_E"} />
                      </div>
                      <p>
                        Ainsi, pour tout{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>,{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"(f \\circ f)(x) = 0_E"} /></span>, c'est-à-dire{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^2 = 0_{\\mathcal{L}(E)}"} /></span>.
                      </p>

                      <p className="font-semibold">
                        Conclusion :{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^2 = 0_{\\mathcal{L}(E)} \\Longleftrightarrow \\operatorname{Im}(f) \\subset \\ker(f)"} /></span>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 14 — AB donné, montrer BA = I2 */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 14
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Matrices composées
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Si AB = diag(0,1,1), alors BA = I_2</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soient{' '}
                    <LatexRenderer latex={"A \\in \\mathcal{M}_{3,2}(\\mathbb{R}),\\; B \\in \\mathcal{M}_{2,3}(\\mathbb{R})"} /> telles que
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={"AB = \\begin{pmatrix}0&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}"} />
                  </div>
                  <p>Montrer que <LatexRenderer latex={"BA = I_2"} />.</p>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    <div className="text-green-800 space-y-2">
                      <p>
                        Interprétons{' '}
                        <LatexRenderer latex={"f : \\mathbb{R}^2 \\to \\mathbb{R}^3"} /> et{' '}
                        <LatexRenderer latex={"g : \\mathbb{R}^3 \\to \\mathbb{R}^2"} /> de matrices respectives{' '}
                        <LatexRenderer latex={"A"} /> et <LatexRenderer latex={"B"} />. Alors{' '}
                        <LatexRenderer latex={"f \\circ g"} /> a pour matrice <LatexRenderer latex={"AB"} />, donc
                        <span className="inline-block align-middle"><LatexRenderer latex={"(f \\circ g)(e_1)=0,\ (f \\circ g)(e_2)=e_2,\ (f \\circ g)(e_3)=e_3"} /></span>.
                      </p>
                      <p>
                        Soient <LatexRenderer latex={"\\lambda, \\mu \\in \\mathbb{R}"} /> tels que{' '}
                        <LatexRenderer latex={"\\lambda g(e_2) + \\mu g(e_3) = 0_{\\mathbb{R}^2}"} />. En appliquant{' '}
                        <LatexRenderer latex={"f"} /> et par linéarité, on obtient
                      </p>
                      <div className="text-center"><LatexRenderer latex={"0_{\\mathbb{R}^3} = \\lambda (f \\circ g)(e_2) + \\mu (f \\circ g)(e_3) = \\lambda e_2 + \\mu e_3"} /></div>
                      <p>
                        Comme <LatexRenderer latex={"(e_2,e_3)"} /> est libre, <LatexRenderer latex={"\\lambda = \\mu = 0"} />. Ainsi{' '}
                        <LatexRenderer latex={"(g(e_2), g(e_3))"} /> est une famille libre de <LatexRenderer latex={"\\mathbb{R}^2"} />, donc une base.
                      </p>
                      <p>
                        Enfin, <LatexRenderer latex={"(g \\circ f)(g(e_2)) = g((f \\circ g)(e_2)) = g(e_2)"} /> et de même pour{' '}
                        <LatexRenderer latex={"g(e_3)"} />; la matrice de <LatexRenderer latex={"g \\circ f"} /> dans cette base est{' '}
                        <LatexRenderer latex={"I_2"} />, donc <LatexRenderer latex={"g \\circ f = \\mathrm{Id}_{\\mathbb{R}^2}"} /> et{' '}
                        <LatexRenderer latex={"BA = I_2"} />.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 13** — Isomorphisme via fonctionnelles intégrales */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 13**
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Polynômes et intégrales
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Isomorphisme \n(\nR_n[x]\n) \to \n(\nR^{n+1}\n) par moments \n(\na_k(P)\n)</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soit{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"n \\in \\mathbb N"} /></span>. On considère l'application{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\varphi : \\mathbb R_n[x] \\to \\mathbb R^{n+1}"} /></span>{' '}définie par
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\forall P \\in \\mathbb R_n[x], \quad \\varphi(P) = (a_0(P), a_1(P), \\dots, a_n(P))"} />
                  </div>
                  <p>où pour <LatexRenderer latex={"k \\in \\llbracket 0,n \\rrbracket"} />,
                    {' '}<span className="inline-block align-middle"><LatexRenderer latex={"a_k(P) = \\int_0^1 t^k P(t)\\,dt"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Montrer que <LatexRenderer latex={"\\varphi"} /> est linéaire.</li>
                    <li>Montrer que si <LatexRenderer latex={"P \\in \\ker(\\varphi)"} />, alors pour tout{' '}
                      <LatexRenderer latex={"Q \\in \\mathbb R_n[x]"} />,{' '}
                      <LatexRenderer latex={"\\displaystyle \\int_0^1 Q(t)P(t)\\,dt = 0"} />.
                    </li>
                    <li>En déduire que <LatexRenderer latex={"\\varphi"} /> est un isomorphisme.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Linéarité</p>
                      <p>Par linéarité de l'intégrale, pour tout <LatexRenderer latex={"k"} /> :</p>
                      <div className="text-center"><LatexRenderer latex={"a_k(P+\\lambda Q) = a_k(P) + \\lambda a_k(Q)"} /></div>
                      <p>Donc <LatexRenderer latex={"\\varphi(P+\\lambda Q)=\\varphi(P)+\\lambda\\varphi(Q)"} />.</p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Orthogonalité pour tout Q</p>
                      <p>
                        Si <LatexRenderer latex={"P \\in \\ker(\\varphi)"} />, alors{' '}
                        <LatexRenderer latex={"a_k(P)=0"} /> pour tout <LatexRenderer latex={"k"} />. Écrivant{' '}
                        <LatexRenderer latex={"Q(t) = \\sum_{k=0}^n b_k t^k"} />, on obtient
                      </p>
                      <div className="text-center"><LatexRenderer latex={"\\int_0^1 Q(t)P(t)\\,dt = \\sum_{k=0}^n b_k \\int_0^1 t^k P(t)\\,dt = 0"} /></div>
                    </div>

                    {/* 3 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">3) Injectivité puis isomorphisme</p>
                      <p>
                        En prenant <LatexRenderer latex={"Q=P"} />, on a{' '}
                        <LatexRenderer latex={"\\int_0^1 (P(t))^2 \\! dt = 0"} />, d'où{' '}
                        <LatexRenderer latex={"P=0"} /> par positivité. Ainsi{' '}
                        <LatexRenderer latex={"\\ker(\\varphi)=\\{0\\}"} />; comme{' '}
                        <LatexRenderer latex={"\\dim \\mathbb R_n[x] = n+1 = \\dim \\mathbb R^{n+1}"} />, <LatexRenderer latex={"\\varphi"} /> est bijective.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 12 — Noyaux itérés */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 12
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Noyaux et images itérés
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Stabilisation des \(\ker(f^p)\) et \(\operatorname{Im}(f^p)\) en dimension finie</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soit{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f \\in \\mathcal{L}(E)"} /></span>{' '}avec{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>{' '}de dimension finie{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>Montrer que pour tout <LatexRenderer latex={"p \\in \\mathbb N"} />, <LatexRenderer latex={"\\ker(f^p) \\subset \\ker(f^{p+1})"} />.</li>
                        <li>Par un argument de dimension, justifier qu'il existe <LatexRenderer latex={"r \\in \\mathbb N"} /> tel que{' '}
                          <LatexRenderer latex={"\\ker(f^r) = \\ker(f^{r+1})"} />.
                        </li>
                        <li>
                          <ol className="list-[lower-roman] pl-5 space-y-2">
                            <li>Montrer que <LatexRenderer latex={"\\ker(f^{r+1}) = \\ker(f^{r+2})"} />.</li>
                            <li>En déduire, par récurrence, que pour tout <LatexRenderer latex={"p \\ge r"} />,{' '}
                              <LatexRenderer latex={"\\ker(f^p) = \\ker(f^r)"} />.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>Justifier que pour tout <LatexRenderer latex={"p \\in \\mathbb N"} />,{' '}
                          <LatexRenderer latex={"\\operatorname{Im}(f^{p+1}) \\subset \\operatorname{Im}(f^p)"} />.
                        </li>
                        <li>Vérifier que pour tout <LatexRenderer latex={"p \\ge r"} />,{' '}
                          <LatexRenderer latex={"\\operatorname{Im}(f^p) = \\operatorname{Im}(f^r)"} /> où <LatexRenderer latex={"r"} /> provient de 1.(b).
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1.a */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1.a) Inclusion des noyaux</p>
                      <p>
                        Soit <LatexRenderer latex={"u \\in \\ker(f^p)"} />. Alors{' '}
                        <LatexRenderer latex={"f^p(u)=0_E"} /> et donc{' '}
                        <LatexRenderer latex={"f^{p+1}(u)=f(f^p(u))=0_E"} />. Ainsi{' '}
                        <LatexRenderer latex={"\\ker(f^p) \\subset \\ker(f^{p+1})"} />.
                      </p>
                    </div>

                    {/* 1.b */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1.b) Stabilisation des dimensions</p>
                      <p>
                        Posons <LatexRenderer latex={"d_p = \\dim \\ker(f^p)"} />. La suite{' '}
                        <LatexRenderer latex={"(d_p)"} /> est croissante et majorée par{' '}
                        <LatexRenderer latex={"n = \\dim(E)"} />; il existe donc{' '}
                        <LatexRenderer latex={"r \\in \\mathbb N"} /> tel que{' '}
                        <LatexRenderer latex={"d_r = d_{r+1}"} />, i.e.{' '}
                        <LatexRenderer latex={"\\ker(f^r) = \\ker(f^{r+1})"} /> (puisque{' '}
                        <LatexRenderer latex={"\\ker(f^r) \\subset \\ker(f^{r+1})"} />).
                      </p>
                    </div>

                    {/* 1.c */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1.c) Stabilisation forte</p>
                      <p>
                        On a toujours{' '}
                        <LatexRenderer latex={"\\ker(f^{r+1}) \\subset \\ker(f^{r+2})"} />. Réciproquement, si{' '}
                        <LatexRenderer latex={"u \\in \\ker(f^{r+2})"} />, alors{' '}
                        <LatexRenderer latex={"f^{r+2}(u)=0_E \Rightarrow f^{r+1}(f(u))=0_E"} />, donc{' '}
                        <LatexRenderer latex={"f(u) \\in \\ker(f^{r+1}) = \\ker(f^r)"} /> et{' '}
                        <LatexRenderer latex={"f^{r+1}(u)=0_E"} />. Ainsi{' '}
                        <LatexRenderer latex={"\\ker(f^{r+2}) = \\ker(f^{r+1})"} />, et par récurrence{' '}
                        <LatexRenderer latex={"\\ker(f^p)=\\ker(f^r) \ \text{pour tout } p \\ge r"} />.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Stabilisation des images</p>
                      <p>
                        Pour{' '}<LatexRenderer latex={"p \\in \\mathbb N"} />, si{' '}
                        <LatexRenderer latex={"u \\in \\operatorname{Im}(f^{p+1})"} />, alors{' '}
                        <LatexRenderer latex={"u = f^{p+1}(v) = f(f^p(v)) \\in \\operatorname{Im}(f^p)"} />; d'où{' '}
                        <LatexRenderer latex={"\\operatorname{Im}(f^{p+1}) \\subset \\operatorname{Im}(f^p)"} />.
                      </p>
                      <p>
                        Pour <LatexRenderer latex={"p \\ge r"} />, on a{' '}
                        <LatexRenderer latex={"\\ker(f^p) = \\ker(f^r)"} />; par le théorème du rang
                        <div className="text-center"><LatexRenderer latex={"\\dim \\operatorname{Im}(f^p) = \\dim(E) - \\dim \\ker(f^p) = \\dim \\operatorname{Im}(f^r)"} /></div>
                        et comme l'inclusion précédente donne{' '}
                        <LatexRenderer latex={"\\operatorname{Im}(f^p) \\subset \\operatorname{Im}(f^r)"} />, on conclut
                        <div className="text-center"><LatexRenderer latex={"\\operatorname{Im}(f^p) = \\operatorname{Im}(f^r) \quad (p \\ge r)"} /></div>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 6 — Décomposition en deux sous-espaces propres */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 6
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Projecteurs et puissances de f
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Cas (f - aId)(f - bId) = 0 avec a \neq b</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soit{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>{' '}un espace vectoriel réel et{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f \\in \\mathcal L(E)"} /></span>. Soient{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"a,b \\in \\mathbb R"} /></span>{' '}avec{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"a \\neq b"} /></span> tels que
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={"(f-a\\,\\mathrm{Id}_E)(f-b\\,\\mathrm{Id}_E)=0_{\\mathcal L(E)}"} />
                  </div>
                  <p>
                    On pose{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"E_a = \\ker(f-a\\,\\mathrm{Id}_E), \quad E_b = \\ker(f-b\\,\\mathrm{Id}_E)"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Montrer que <LatexRenderer latex={"E_a"} /> et <LatexRenderer latex={"E_b"} /> sont supplémentaires dans <LatexRenderer latex={"E"} />.</li>
                    <li>Donner une expression simple de la projection <LatexRenderer latex={"p"} /> sur <LatexRenderer latex={"E_a"} /> parallèlement à <LatexRenderer latex={"E_b"} />.</li>
                    <li>Vérifier que <LatexRenderer latex={"f = a\\,p + b\\,(\\mathrm{Id}_E - p)"} /> et en déduire <LatexRenderer latex={"f^n"} /> pour <LatexRenderer latex={"n \\in \\mathbb N"} />.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Somme directe E = E_a \oplus E_b</p>
                      <p>
                        Pour{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>, posons
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle x_a = \\frac{1}{a-b}(f-b\\,\\mathrm{Id}_E)(x)"} /></span>
                        {' '}et{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle x_b = \\frac{1}{b-a}(f-a\\,\\mathrm{Id}_E)(x)"} /></span>.
                      </p>
                      <p>
                        Alors{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"(f-a\\,\\mathrm{Id}_E)(x_a) = \\tfrac{1}{a-b}(f-a\\,\\mathrm{Id}_E)(f-b\\,\\mathrm{Id}_E)(x) = 0"} /></span>
                        {' '}donc{' '}<LatexRenderer latex={"x_a \\in E_a"} /> et de même{' '}<LatexRenderer latex={"x_b \\in E_b"} />. Enfin
                        <span className="inline-block align-middle"><LatexRenderer latex={"x_a + x_b = x"} /></span> et l'unicité découle de{' '}
                        <LatexRenderer latex={"E_a \\cap E_b = \\{0\\}"} />. D'où{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"E = E_a \\oplus E_b"} /></span>.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Projection canonique</p>
                      <p>
                        La projection sur{' '}
                        <LatexRenderer latex={"E_a"} /> parallèlement à{' '}
                        <LatexRenderer latex={"E_b"} /> est{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"p(x) = x_a = \\tfrac{1}{a-b}(f-b\\,\\mathrm{Id}_E)(x)"} /></span>, soit au niveau opérateur
                        <div className="text-center"><LatexRenderer latex={"\\boxed{\ p = \\tfrac{1}{a-b}(f-b\\,\\mathrm{Id}_E)\ }"} /></div>
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">3) Expression de f et puissances</p>
                      <p>
                        Pour{' '}<LatexRenderer latex={"x = x_a + x_b"} /> avec{' '}
                        <LatexRenderer latex={"x_a \\in E_a, x_b \\in E_b"} />, on a{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = a x_a + b x_b = a p(x) + b (\\mathrm{Id}_E - p)(x)"} /></span>, d'où
                        <div className="text-center"><LatexRenderer latex={"\\boxed{\ f = a p + b(\\mathrm{Id}_E - p)\ }"} /></div>
                      </p>
                      <p>
                        Comme{' '}<LatexRenderer latex={"p^2 = p"} /> et{' '}<LatexRenderer latex={"p"} /> commute avec{' '}<LatexRenderer latex={"\\mathrm{Id}_E - p"} />, par binôme de Newton
                        <div className="text-center"><LatexRenderer latex={"f^n = a^n p + b^n (\\mathrm{Id}_E - p) \quad (n \\in \\mathbb N)"} /></div>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 5 — Projections sur F et G dans R^3 */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 5
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Projections linéaires
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Décomposition R^3 = F \oplus G et formules explicites</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Dans{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb R^3"} /></span>, on considère le vecteur{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"u=(1,2,-1)"} /></span>{' '}et les sous-espaces
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={"F = \\mathrm{Vect}(u), \\qquad G = \\{(x,y,z) \\in \\mathbb R^3 \mid 2x + y + z = 0\\}"} />
                  </div>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Montrer que <LatexRenderer latex={"F"} /> et <LatexRenderer latex={"G"} /> sont supplémentaires dans <LatexRenderer latex={"\\mathbb R^3"} />.</li>
                    <li>Déterminer l’expression de la projection <LatexRenderer latex={"p"} /> sur <LatexRenderer latex={"F"} /> parallèlement à <LatexRenderer latex={"G"} />, et celle de la projection <LatexRenderer latex={"q"} /> sur <LatexRenderer latex={"G"} /> parallèlement à <LatexRenderer latex={"F"} />.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Somme directe</p>
                      <p>
                        Soit{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"a=(x,y,z)"} /></span>. On cherche{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"a=b+c"} /></span> avec{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"b \\in F,\ c \\in G"} /></span>.
                        Écrivons{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"b=\\lambda u=(\\lambda,2\\lambda,-\\lambda)"} /></span>.
                      </p>
                      <p>
                        Alors{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"c=a-b=(x-\\lambda,\ y-2\\lambda,\ z+\\lambda)"} /></span>{' '}et la condition{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"c \\in G"} /></span> impose
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"2(x-\\lambda) + (y-2\\lambda) + (z+\\lambda) = 0 \\iff 2x + y + z - 3\\lambda = 0"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\boxed{\\; \\lambda = \\tfrac{2}{3}x + \\tfrac{1}{3}y + \\tfrac{1}{3}z \\;}"} />
                      </div>
                      <p>La décomposition est donc unique et <LatexRenderer latex={"\\mathbb R^3 = F \\oplus G"} />.</p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Projections</p>
                      <p>
                        Par définition de la projection sur{' '}
                        <LatexRenderer latex={"F"} /> parallèlement à{' '}
                        <LatexRenderer latex={"G"} />, on a{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"p(a)=b=\\lambda u"} /></span>
                        {' '}avec la valeur précédente de{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\lambda"} /></span>.
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"p(x,y,z) = (\\tfrac{2}{3}x + \\tfrac{1}{3}y + \\tfrac{1}{3}z)\,(1,2,-1)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\boxed{\ p(x,y,z) = (\\tfrac{2}{3}x + \\tfrac{1}{3}y + \\tfrac{1}{3}z,\ \\tfrac{4}{3}x + \\tfrac{2}{3}y + \\tfrac{2}{3}z,\ -\\tfrac{2}{3}x - \\tfrac{1}{3}y - \\tfrac{1}{3}z)\ }"} />
                      </div>
                      <p>La projection sur{' '}<LatexRenderer latex={"G"} /> parallèlement à{' '}<LatexRenderer latex={"F"} /> est{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"q(a)=a-p(a)"} /></span>.
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"\\boxed{\ q(x,y,z) = (\\tfrac{1}{3}x - \\tfrac{1}{3}y - \\tfrac{1}{3}z,\ -\\tfrac{4}{3}x + \\tfrac{1}{3}y - \\tfrac{2}{3}z,\ \\tfrac{2}{3}x + \\tfrac{1}{3}y + \\tfrac{4}{3}z)\ }"} />
                      </div>
                      <p className="text-sm text-gray-700">On vérifie que <LatexRenderer latex={"p+q=\\mathrm{Id}"} />, <LatexRenderer latex={"\\operatorname{Im} p=F"} />, <LatexRenderer latex={"\\ker p=G"} />, <LatexRenderer latex={"\\operatorname{Im} q=G"} /> et <LatexRenderer latex={"\\ker q=F"} />.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 8 — Composition f∘g = Id_E */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 8
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Théorie des applications linéaires
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Relations noyau / image sous f∘g = Id</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soient{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>{' '}un espace vectoriel et{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f,g \\in \\mathcal{L}(E)"} /></span>{' '}tels que{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f \\circ g = \\mathrm{Id}_E"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Préciser <LatexRenderer latex={"\\operatorname{Im} f"} /> et <LatexRenderer latex={"\\ker g"} />.</li>
                    <li>Montrer que <LatexRenderer latex={"\\operatorname{Im}(g \\circ f) = \\operatorname{Im} g"} />.</li>
                    <li>Vérifier que <LatexRenderer latex={"\\ker(g \\circ f) = \\ker f"} />.</li>
                    <li>Montrer que <LatexRenderer latex={"(\\ker f) \\cap (\\operatorname{Im} g) = \\{0_E\\}"} />.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Image de f et noyau de g</p>
                      <p>
                        Comme{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f \\circ g = \\mathrm{Id}_E"} /></span>{' '}est surjective,{' '}
                        <LatexRenderer latex={"f"} /> est surjective :{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\operatorname{Im} f = E"} /></span>.
                        De plus,{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f \\circ g"} /></span>{' '}est injective, donc{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"g"} /></span> est injective :{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\ker g = \\{0_E\\}"} /></span>.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Image de g∘f</p>
                      <p>
                        Si{' '}<LatexRenderer latex={"y \\in \\operatorname{Im}(g \\circ f)"} />, alors{' '}
                        <LatexRenderer latex={"y = g(f(x))"} /> pour un{' '}
                        <LatexRenderer latex={"x \\in E"} />; donc{' '}
                        <LatexRenderer latex={"y \\in \\operatorname{Im} g"} />, d'où{' '}
                        <LatexRenderer latex={"\\operatorname{Im}(g \\circ f) \\subset \\operatorname{Im} g"} />.
                      </p>
                      <p>
                        Réciproquement, si{' '}
                        <LatexRenderer latex={"y \\in \\operatorname{Im} g"} />, il existe{' '}
                        <LatexRenderer latex={"x \\in E"} /> tel que{' '}
                        <LatexRenderer latex={"y = g(x)"} />. Alors
                        <span className="inline-block align-middle"><LatexRenderer latex={"y = g((f \\circ g)(x)) = (g \\circ f)(g(x)) \\in \\operatorname{Im}(g \\circ f)"} /></span>.
                        Ainsi{' '}
                        <LatexRenderer latex={"\\operatorname{Im} g \\subset \\operatorname{Im}(g \\circ f)"} /> et l'égalité suit.
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">3) Noyau de g∘f</p>
                      <p>
                        Si{' '}<LatexRenderer latex={"x \\in \\ker f"} />, alors{' '}
                        <LatexRenderer latex={"f(x)=0_E"} /> et donc{' '}
                        <LatexRenderer latex={"(g \\circ f)(x) = g(0_E) = 0_E"} />, soit{' '}
                        <LatexRenderer latex={"x \\in \\ker(g \\circ f)"} />.
                      </p>
                      <p>
                        Réciproquement, si{' '}
                        <LatexRenderer latex={"x \\in \\ker(g \\circ f)"} />, alors{' '}
                        <LatexRenderer latex={"g(f(x))=0_E"} /> et, comme{' '}
                        <LatexRenderer latex={"g"} /> est injective,{' '}
                        <LatexRenderer latex={"f(x)=0_E"} />, donc{' '}
                        <LatexRenderer latex={"x \\in \\ker f"} />. Ainsi{' '}
                        <LatexRenderer latex={"\\ker(g \\circ f)=\\ker f"} />.
                      </p>
                    </div>

                    {/* 4 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">4) Intersection</p>
                      <p>
                        Soit{' '}
                        <LatexRenderer latex={"x \\in (\\ker f) \\cap (\\operatorname{Im} g)"} />. Il existe{' '}
                        <LatexRenderer latex={"y \\in E"} /> tel que{' '}
                        <LatexRenderer latex={"x = g(y)"} /> et{' '}
                        <LatexRenderer latex={"f(x)=0_E"} />. Mais{' '}
                        <LatexRenderer latex={"f(x) = f(g(y)) = (f \\circ g)(y) = y"} />; donc{' '}
                        <LatexRenderer latex={"y=0_E"} /> et{' '}
                        <LatexRenderer latex={"x = g(0_E) = 0_E"} />. Par conséquent{' '}
                        <LatexRenderer latex={"(\\ker f) \\cap (\\operatorname{Im} g) = \\{0_E\\}"} />.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 13 — Endomorphisme cyclique sur R^3 */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 13
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Endomorphisme sur \(\mathbb R^3\)
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Polynôme annulateur et inverse</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    On considère la base canonique{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\mathcal B=(e_1,e_2,e_3)"} /></span>{' '}de{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb R^3"} /></span>{' '}et l'endomorphisme{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span>{' '}défini par
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={"f(e_1)=e_2,\\quad f(e_2)=e_3,\\quad f(e_3)=e_1."} />
                  </div>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Déterminer un polynôme annulateur de <LatexRenderer latex={"f"} />.</li>
                    <li>En déduire la bijectivité et l'expression de <LatexRenderer latex={"f^{-1}"} />.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-3">
                      <p className="font-medium">1) Polynôme annulateur</p>
                      <p>Dans la base canonique, la matrice de <LatexRenderer latex={"f"} /> est</p>
                      <div className="text-center">
                        <LatexRenderer latex={"A = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"A^2 = \\begin{pmatrix}0&1&0\\\\0&0&1\\\\1&0&0\\end{pmatrix}, \\qquad A^3 = I_3"} />
                      </div>
                      <p>
                        Ainsi{' '}<LatexRenderer latex={"A^3-I_3=0"} /> donc{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^3 = \\mathrm{Id}_{\\mathbb R^3}"} /></span>. Un polynôme annulateur est
                        <span className="inline-block align-middle"><LatexRenderer latex={"P(x)=x^3-1"} /></span>.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-3">
                      <p className="font-medium">2) Bijectivité et inverse</p>
                      <p>
                        De{' '}<LatexRenderer latex={"f^3=\\mathrm{Id}"} /> on déduit que{' '}
                        <LatexRenderer latex={"f"} /> est inversible et{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f\\circ f^2=\\mathrm{Id} \Rightarrow f^{-1}=f^2"} /></span>.
                      </p>
                      <p className="text-sm text-gray-700">Remarque : <LatexRenderer latex={"\\det A = 1 \\neq 0"} /> confirme la bijectivité.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 4 — Matrice de f dans la base canonique */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 4
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Calcul matriciel
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Matrice de f dans la base canonique de \n(\nmathcal M_2(\nmathbb R)\n)</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soit{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"A=\\begin{pmatrix}-1&2\\\\1&0\\end{pmatrix}"} /></span>{' '}
                    et{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f: \\mathcal M_2(\\mathbb R) \\to \\mathcal M_2(\\mathbb R), \\quad f(M)=AM"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Montrer que <LatexRenderer latex={"f"} /> est linéaire.</li>
                    <li>Déterminer la matrice de <LatexRenderer latex={"f"} /> dans la base canonique <LatexRenderer latex={"\\mathcal B=(E_{11},E_{12},E_{21},E_{22})"} /> de <LatexRenderer latex={"\\mathcal M_2(\\mathbb R)"} />.</li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Linéarité</p>
                      <div className="text-center"><LatexRenderer latex={"f(\\lambda M_1 + M_2) = A(\\lambda M_1 + M_2) = \\lambda AM_1 + AM_2 = \\lambda f(M_1) + f(M_2)"} /></div>
                      <p>Donc <LatexRenderer latex={"f"} /> est linéaire.</p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-3">
                      <p className="font-medium">2) Matrice de f dans la base canonique</p>
                      <p>On note <LatexRenderer latex={"(E_{11},E_{12},E_{21},E_{22})"} /> la base canonique de <LatexRenderer latex={"\\mathcal M_2(\\mathbb R)"} />.</p>
                      <div className="space-y-1">
                        <div className="text-center"><LatexRenderer latex={"f(E_{11})=AE_{11}=\\begin{pmatrix}-1&0\\\\1&0\\end{pmatrix} = -E_{11} + E_{21}"} /></div>
                        <div className="text-center"><LatexRenderer latex={"f(E_{12})=AE_{12}=\\begin{pmatrix}0&-1\\\\0&1\\end{pmatrix} = -E_{12} + E_{22}"} /></div>
                        <div className="text-center"><LatexRenderer latex={"f(E_{21})=AE_{21}=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix} = 2E_{11}"} /></div>
                        <div className="text-center"><LatexRenderer latex={"f(E_{22})=AE_{22}=\\begin{pmatrix}0&2\\\\0&0\\end{pmatrix} = 2E_{12}"} /></div>
                      </div>
                      <p>Les colonnes de la matrice de <LatexRenderer latex={"f"} /> dans la base <LatexRenderer latex={"\\mathcal B"} /> sont les coordonnées de ces images :</p>
                      <div className="overflow-auto">
                        <div className="text-center">
                          <LatexRenderer latex={"[f]_{\\mathcal B} = \\begin{pmatrix} -1&0&2&0\\\\ 0&-1&0&2\\\\ 1&0&0&0\\\\ 0&1&0&0 \\end{pmatrix}"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 7 — Endomorphisme par multiplication à gauche */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 7
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Calcul matriciel
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Application linéaire f(M) = AM sur \(\mathcal M_2(\mathbb R)\)</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Considérons{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"A = \\begin{pmatrix}1&2\\\\3&6\\end{pmatrix}"} /></span>
                    {' '}et{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f : \\mathcal M_2(\\mathbb R) \\to \\mathcal M_2(\\mathbb R), \ f(M) = AM"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Montrer que{' '}<span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span>{' '}est un endomorphisme de{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"\\mathcal M_2(\\mathbb R)"} /></span>.
                    </li>
                    <li>
                      Déterminer une base de{' '}<LatexRenderer latex={"\\ker(f)"} /> et conclure sur la bijectivité de{' '}
                      <LatexRenderer latex={"f"} />.
                    </li>
                    <li>
                      Déterminer une base de{' '}<LatexRenderer latex={"\\operatorname{Im}(f)"} />.
                    </li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Linéarité</p>
                      <p>
                        Pour{' '}<LatexRenderer latex={"\\lambda \\in \\mathbb R"} /> et{' '}
                        <LatexRenderer latex={"M,N \\in \\mathcal M_2(\\mathbb R)"} />,
                      </p>
                      <div className="text-center"><LatexRenderer latex={"f(\\lambda M + N) = A(\\lambda M + N) = \\lambda AM + AN = \\lambda f(M) + f(N)"} /></div>
                      <p>Donc <LatexRenderer latex={"f"} /> est linéaire et à valeurs dans <LatexRenderer latex={"\\mathcal M_2(\\mathbb R)"} />.</p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Noyau et bijectivité</p>
                      <p>
                        Soit{' '}<LatexRenderer latex={"M = \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}"} />.
                        Alors{' '}
                        <LatexRenderer latex={"AM = \\begin{pmatrix}a+2c & b+2d \\\\ 3a+6c & 3b+6d\\end{pmatrix}"} />.
                      </p>
                      <p>Le système <LatexRenderer latex={"AM=0"} /> équivaut à{' '}
                        <LatexRenderer latex={"a+2c=0, \quad b+2d=0"} /> d'où{' '}
                        <LatexRenderer latex={"a=-2c, \ b=-2d"} /> (avec{' '}<LatexRenderer latex={"c,d"} /> libres).
                      </p>
                      <p>
                        Ainsi{' '}
                        <LatexRenderer latex={"M = c\\begin{pmatrix}-2&0\\\\1&0\\end{pmatrix} + d\\begin{pmatrix}0&-2\\\\0&1\\end{pmatrix} = c K_1 + d K_2"} />.
                      </p>
                      <p>
                        Les matrices{' '}
                        <LatexRenderer latex={"K_1 = \\begin{pmatrix}-2&0\\\\1&0\\end{pmatrix}, \quad K_2 = \\begin{pmatrix}0&-2\\\\0&1\\end{pmatrix}"} /> sont indépendantes; ainsi
                        <span className="inline-block align-middle"><LatexRenderer latex={"\\ker(f) = \\mathrm{Vect}(K_1, K_2), \ \dim \\ker(f) = 2"} /></span>.
                        Comme <LatexRenderer latex={"\\ker(f) \\neq \\{0\}"} />, <LatexRenderer latex={"f"} /> n'est pas injective, donc pas bijective.
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">3) Image</p>
                      <p>
                        En posant{' '}
                        <LatexRenderer latex={"x = a + 2c, \ y = b + 2d"} />, on obtient
                        <LatexRenderer latex={"AM = \\begin{pmatrix}x & y \\\\ 3x & 3y\\end{pmatrix}"} />.
                      </p>
                      <p>
                        Donc{' '}
                        <LatexRenderer latex={"\\operatorname{Im}(f) = \\left\\{ \\begin{pmatrix}x&y\\\\3x&3y\\end{pmatrix} : x,y \\in \\mathbb R \\right\\} = \\mathrm{Vect}(E_1, E_2)"} />
                        avec{' '}
                        <LatexRenderer latex={"E_1 = \\begin{pmatrix}1&0\\\\3&0\\end{pmatrix}, \ E_2 = \\begin{pmatrix}0&1\\\\0&3\\end{pmatrix}"} />
                        et <LatexRenderer latex={"\\dim \\operatorname{Im}(f) = 2"} />.
                      </p>
                      <p className="text-sm text-gray-700">Vérification: <LatexRenderer latex={"\\dim \\ker(f) + \\dim \\operatorname{Im}(f) = 2 + 2 = 4 = \\dim \\mathcal M_2(\\mathbb R)"} />.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Exercice 22 — Endomorphisme nilpotent */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 22
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Intermédiaire
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Endomorphisme nilpotent</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    On suppose que <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>{' '}est de dimension finie égale à{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span> et qu’il existe{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"k \\in \\{2,3,\\dots\\}"} /></span> tel que
                  </p>
                  <div className="text-center my-2">
                    <LatexRenderer latex={"f^k = 0_{\\mathcal L(E)} \\quad \\text{et} \\quad f^{k-1} \\neq 0_{\\mathcal L(E)}"} />
                  </div>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Montrer qu’il existe</span>{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>{' '}tel que la famille{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"(x, f(x), \\dots, f^{k-1}(x))"} /></span>{' '}est libre.
                    </li>
                    <li>
                      <span className="font-semibold">En déduire que</span>{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"k \\le n"} /></span>.
                    </li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-4">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    <div className="text-green-800 space-y-3">
                      <p>
                        Comme{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^{k-1} \\neq 0_{\\mathcal L(E)}"} /></span>, il existe{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in E"} /></span>{' '}tel que{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^{k-1}(x) \\neq 0"} /></span>.
                      </p>
                      <p>Considérons une relation linéaire</p>
                      <div className="text-center">
                        <LatexRenderer latex={"a_0 x + a_1 f(x) + \\cdots + a_{k-1} f^{k-1}(x) = 0_E \\quad (\\ast)"} />
                      </div>
                      <p>
                        En appliquant{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^{k-1}"} /></span>{' '}et en utilisant{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^k = 0"} /></span>, on obtient{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"a_0 f^{k-1}(x) = 0_E"} /></span>, donc{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"a_0 = 0"} /></span> (car{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^{k-1}(x) \\neq 0"} /></span>).
                      </p>
                      <p>
                        L’égalité{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"(\\ast)"} /></span>{' '}devient alors
                      </p>
                      <div className="text-center">
                        <LatexRenderer latex={"a_1 f(x) + \\cdots + a_{k-1} f^{k-1}(x) = 0_E"} />
            </div>
                      <p>
                        En appliquant successivement{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f^{k-2}, f^{k-3}, \\dots, f, \\operatorname{Id}_E"} /></span>, on obtient
                        <span className="inline-block align-middle"><LatexRenderer latex={"a_1 = a_2 = \\cdots = a_{k-1} = 0"} /></span>.
                        Ainsi la famille{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"(x, f(x), \\dots, f^{k-1}(x))"} /></span>{' '}est libre.
                      </p>
                      <p className="font-semibold">
                        Par conséquent, cette famille contient{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"k"} /></span>{' '}vecteurs libres de{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>. Toute famille libre de{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>{' '}a au plus{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"n = \\dim E"} /></span>{' '}vecteurs ; d’où{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"k \\le n"} /></span>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}

        {/* Bouton retour vers les chapitres */}
        <div className="mt-8">
            <Link 
            to="/formation/math/premiere-vers-deuxieme"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retourner aux chapitres
            </Link>
        </div>

        {/* Exercice 23 — Un peu théorique… */}
        {(() => {
          const [visible, setVisible] = useState(false);
          return (
            <Card className="mt-8 mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-1">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Exercice 23
                  </div>
                  <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    Intermédiaire
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">Un peu théorique…</div>

                {/* Enoncé */}
                <div className="mb-4 space-y-3">
                  <p>
                    Soit{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"f \\in \\mathcal{L}(E)"} /></span>{' '}
                    un endomorphisme d'un espace vectoriel{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={"E"} /></span>.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Montrer que{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"\\ker(f) \\subset \\ker(f^2)"} /></span>.
                    </li>
                    <li>
                      Montrer que{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"\\ker(f) = \\ker(f^2) \\\\\	ext{ } \\Longleftrightarrow \\ \\ker(f) \\cap \\operatorname{Im}(f) = \\{0_E\\}"} /></span>.
                    </li>
                    <li>
                      Montrer que{' '}
                      <span className="inline-block align-middle"><LatexRenderer latex={"\\operatorname{Im}(f^2) \\subset \\operatorname{Im}(f)"} /></span>.
                    </li>
                  </ol>
                </div>

                <Button onClick={() => setVisible(v => !v)} variant={visible ? 'secondary' : 'default'} className="mb-4">
                  {visible ? 'Masquer la correction' : 'Afficher la correction'}
                </Button>

                {visible && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg space-y-5">
                    <h4 className="font-semibold text-green-800">Correction</h4>
                    {/* 1 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">1) Inclusion des noyaux</p>
                      <p>
                        Soit{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"x \\in \\ker(f)"} /></span>. Alors{' '}
                        <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = 0_E"} /></span>. Par linéarité,
                      </p>
                      <div className="text-center"><LatexRenderer latex={"f^2(x) = f(f(x)) = f(0_E) = 0_E"} /></div>
                      <p>Donc{' '}<LatexRenderer latex={"x \\in \\ker(f^2)"} /> et ainsi{' '}<LatexRenderer latex={"\\ker(f) \\subset \\ker(f^2)"} />.</p>
                    </div>

                    {/* 2 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">2) Équivalence</p>
                      <p>
                        (<span className="italic">⇒</span>) Supposons{' '}
                        <LatexRenderer latex={"\\ker(f) = \\ker(f^2)"} />. Soit{' '}
                        <LatexRenderer latex={"y \\in \\ker(f) \\cap \\operatorname{Im}(f)"} />. Il existe{' '}
                        <LatexRenderer latex={"x \\in E"} /> tel que{' '}
                        <LatexRenderer latex={"y = f(x)"} /> et{' '}
                        <LatexRenderer latex={"f(y)=0_E"} />; donc{' '}
                      </p>
                      <div className="text-center"><LatexRenderer latex={"f(f(x)) = 0_E \\Rightarrow x \\in \\ker(f^2) = \\ker(f)"} /></div>
                      <p>et ainsi <LatexRenderer latex={"y=f(x)=0_E"} />. D'où{' '}<LatexRenderer latex={"\\ker(f) \\cap \\operatorname{Im}(f) = \\{0_E\\}"} />.</p>
                      <p>
                        (<span className="italic">⇐</span>) Réciproquement, supposons{' '}
                        <LatexRenderer latex={"\\ker(f) \\cap \\operatorname{Im}(f) = \\{0_E\\}"} />. Si{' '}
                        <LatexRenderer latex={"x \\in \\ker(f^2)"} />, alors{' '}
                        <LatexRenderer latex={"f(f(x)) = 0_E"} /> donc{' '}
                        <LatexRenderer latex={"f(x) \\in \\ker(f)"} /> et simultanément{' '}
                        <LatexRenderer latex={"f(x) \\in \\operatorname{Im}(f)"} />; par hypothèse{' '}
                        <LatexRenderer latex={"f(x) = 0_E"} />. Ainsi{' '}
                        <LatexRenderer latex={"x \\in \\ker(f)"} /> et donc{' '}
                        <LatexRenderer latex={"\\ker(f^2) \\subset \\ker(f)"} />. Avec la question 1, on conclut{' '}
                        <LatexRenderer latex={"\\ker(f) = \\ker(f^2)"} />.
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="text-green-800 space-y-2">
                      <p className="font-medium">3) Inclusion des images</p>
                      <p>
                        Soit{' '}
                        <LatexRenderer latex={"y \\in \\operatorname{Im}(f^2)"} />. Il existe{' '}
                        <LatexRenderer latex={"x \\in E"} /> tel que{' '}
                        <LatexRenderer latex={"y = f^2(x) = f(f(x))"} />. En posant{' '}
                        <LatexRenderer latex={"z=f(x)"} />, on obtient{' '}
                        <LatexRenderer latex={"y=f(z)"} /> avec{' '}
                        <LatexRenderer latex={"z \\in E"} />. Ainsi{' '}
                        <LatexRenderer latex={"y \\in \\operatorname{Im}(f)"} /> et donc{' '}
                        <LatexRenderer latex={"\\operatorname{Im}(f^2) \\subset \\operatorname{Im}(f)"} />.
                      </p>
                    </div>
                  </div>
                )}
          </div>
        </Card>
          );
        })()}
      </div>
    </div>
  );
};

export default Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage;

