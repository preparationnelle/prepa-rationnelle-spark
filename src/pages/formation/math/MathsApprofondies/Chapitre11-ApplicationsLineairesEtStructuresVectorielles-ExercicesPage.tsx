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

