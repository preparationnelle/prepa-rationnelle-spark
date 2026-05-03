import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Module1ApplicationsLineairesExercicesPage: React.FC = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show8, setShow8] = useState(false);

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
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/math/premiere-vers-deuxieme" className="hover:text-[#1e3a8a] transition-colors">Première → Deuxième année</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Module 1 Exercices - Applications linéaires</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Module 1 - exercice (Applications linéaires)
            </h1>
            <p className="text-slate-600">Exercices ciblés sur les applications linéaires et la structure des noyaux/images.</p>
          </div>
        </Card>


       

        {/* Exercice 1 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 1</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Moyen</div>
            </div>
            <div className="space-y-3 mb-4">
              <p>
                <span className="inline-block align-middle"><LatexRenderer latex={'f^2 = 0_{\\mathcal{L}(E)} \\iff \\operatorname{Im}(f) \\subset \\ker(f)'} /></span>.
              </p>
              <p>Raisonnons par double-implication...</p>
            </div>
            <Button onClick={() => setShow(v => !v)} variant={show ? 'secondary' : 'default'} className="mb-2">
              {show ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>
            {show && (
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <div className="text-sm font-semibold text-gray-700">⇨</div>
                  <p>Supposons que <span className="inline-block align-middle"><LatexRenderer latex={'f^2 = 0_{\\mathcal{L}(E)}'} /></span>. Montrons que <span className="inline-block align-middle"><LatexRenderer latex={'\\operatorname{Im}(f) \\subset \\ker(f)'} /></span>.</p>
                  <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={'y \\in \\operatorname{Im}(f)'} /></span>. Montrons que <span className="inline-block align-middle"><LatexRenderer latex={'y \\in \\ker(f)'} /></span> ; autrement dit, montrons que <span className="inline-block align-middle"><LatexRenderer latex={'f(y) = 0_E'} /></span>.</p>
                  <p>Puisque <span className="inline-block align-middle"><LatexRenderer latex={'y \\in \\operatorname{Im}(f)'} /></span>, il existe <span className="inline-block align-middle"><LatexRenderer latex={'x \\in E'} /></span> tel que <span className="inline-block align-middle"><LatexRenderer latex={'y = f(x)'} /></span>. Ainsi :</p>
                  <div className="text-center"><LatexRenderer block latex={'f(y) = f(f(x)) = f \\circ f(x) = 0_E \\quad (\\text{car } f \\circ f = 0_{\\mathcal{L}(E)})'} /></div>
                  <p>Par conséquent : <span className="inline-block align-middle"><LatexRenderer latex={'y \\in \\ker(f)'} /></span>.</p>
                  <div className="text-center"><LatexRenderer block latex={'\\text{Conclusion : } f^2 = 0_{\\mathcal{L}(E)} \\implies \\operatorname{Im}(f) \\subset \\ker(f).'} /></div>
                </div>

                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <div className="text-sm font-semibold text-gray-700">⇦</div>
                  <p>Supposons <span className="inline-block align-middle"><LatexRenderer latex={'\\operatorname{Im}(f) \\subset \\ker(f)'} /></span>. Montrons que <span className="inline-block align-middle"><LatexRenderer latex={'f \\circ f = 0_{\\mathcal{L}(E)}'} /></span> ; autrement dit, montrons :</p>
                  <div className="text-center"><LatexRenderer block latex={'\\forall x \\in E, \\quad f \\circ f(x) = 0_E.'} /></div>
                  <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={'x \\in E'} /></span>. Par définition :</p>
                  <div className="text-center"><LatexRenderer block latex={'f(x) \\in \\operatorname{Im}(f)'} /></div>
                  <p>Mais <span className="inline-block align-middle"><LatexRenderer latex={'\\operatorname{Im}(f) \\subset \\ker(f)'} /></span>, donc :</p>
                  <div className="text-center"><LatexRenderer block latex={'f(x) \\in \\ker(f)'} /></div>
                  <p>Par conséquent :</p>
                  <div className="text-center"><LatexRenderer block latex={'f(f(x)) = 0_E'} /></div>
                  <p>On a donc démontré :</p>
                  <div className="text-center"><LatexRenderer block latex={'\\forall x \\in E, \\quad f \\circ f(x) = 0_E'} /></div>
                  <div className="text-center"><LatexRenderer block latex={'\\text{Conclusion : } \\operatorname{Im}(f) \\subset \\ker(f) \\implies f^2 = 0_{\\mathcal{L}(E)}.'} /></div>
                </div>

                <div className="p-4 bg-white rounded-lg border">
                  <div className="text-center">
                    <LatexRenderer block latex={'\\boxed{\\text{Conclusion : } f^2 = 0_{\\mathcal{L}(E)} \\iff \\operatorname{Im}(f) \\subset \\ker(f).}'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 2 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 2</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Difficile</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Exercice 2 - Endomorphisme nilpotent</h3>
              <div className="space-y-1">
                <p>
                  <LatexRenderer latex={'\\text{On suppose que } E \\text{ est de dimension finie égale à } n \\text{ et qu’il existe } k \\in [2; +\\infty[ \\text{ tel que : } f^k = 0_{\\mathcal{L}(E)} \\text{ et } f^{k-1} \\neq 0_{\\mathcal{L}(E)}.'} />
                </p>
              </div>
              <div className="text-center my-4">
                <LatexRenderer latex={'f^k = 0_{\\mathcal{L}(E)} \\quad \\text{et} \\quad f^{k-1} \\neq 0_{\\mathcal{L}(E)}'} />
              </div>
              <h4 className="text-base font-semibold text-gray-800">
                1. Justifier qu’il existe un vecteur{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'x \\in E'} /></span>{' '}
                tel que la famille{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'(x, f(x), \\dots, f^{k-1}(x))'} /></span>{' '}
                soit libre.
              </h4>
            </div>

            <Button onClick={() => setShow2(v => !v)} variant={show2 ? 'secondary' : 'default'} className="mb-2">
              {show2 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show2 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg border bg-green-50 text-green-800 border-green-200">
                  <strong>Rappel</strong> — Un endomorphisme <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> est nilpotent s’il existe
                  <span className="inline-block align-middle"> <LatexRenderer latex={'k \\ge 1'} /></span> tel que
                  <span className="inline-block align-middle"> <LatexRenderer latex={'f^k = 0'} /></span>.
                </div>

                {/* Question 1 */}
                <div className="p-4 bg-white rounded-lg border">
                  <div className="space-y-3">
                    <p><LatexRenderer latex={'\\text{Puisque } f^{k-1} \\text{ n’est pas l’endomorphisme nul, il existe un vecteur } x \\in E \\text{ tel que } f^{k-1}(x) \\neq 0_E.'} /></p>
                    <p><LatexRenderer latex={'\\text{Considérons donc un tel } x \\text{ et montrons que la famille } (x, f(x), \\dots, f^{k-1}(x)) \\text{ est libre.}'} /></p>
                    <p>Soient <LatexRenderer latex={'a_0, a_1, \\dots, a_{k-1} \\in \\mathbb{R}'} /> et supposons</p>
                    <div className="text-center my-2">
                      <LatexRenderer latex={'a_0 x + a_1 f(x) + \\dots + a_{k-1} f^{k-1}(x) = 0_E \\quad (\\star)'} />
                    </div>
                    <p>
                      En appliquant <span className="inline-block align-middle"><LatexRenderer latex={'f^{k-1}'} /></span> et en utilisant la linéarité :
                    </p>
                    <div className="text-center my-2">
                      <LatexRenderer latex={'a_0 f^{k-1}(x) + a_1 f^k(x) + \\dots + a_{k-1} f^{2k-2}(x) = 0_E'} />
                    </div>
                    <p>
                      Or <span className="inline-block align-middle"><LatexRenderer latex={'f^k = 0_{\\mathcal{L}(E)}'} /></span> donc
                      <span className="inline-block align-middle"> <LatexRenderer latex={'f^i = 0_{\\mathcal{L}(E)} \\ (i \\ge k)'} /></span>, d’où
                      <span className="inline-block align-middle"> <LatexRenderer latex={'a_0 f^{k-1}(x) = 0_E'} /></span> et finalement
                      <span className="inline-block align-middle"> <LatexRenderer latex={'a_0 = 0'} /></span> puisque
                      <span className="inline-block align-middle"> <LatexRenderer latex={'f^{k-1}(x) \\neq 0_E'} /></span>.
                    </p>
                    <p>On obtient alors</p>
                    <div className="text-center my-2">
                      <LatexRenderer latex={'a_1 f(x) + \\dots + a_{k-1} f^{k-1}(x) = 0_E'} />
                    </div>

                    <div className="p-3 rounded-lg border bg-orange-50 text-orange-800 border-orange-200">
                      <strong>Astuce</strong> — Réappliquer successivement
                      <span className="inline-block align-middle"> <LatexRenderer latex={'f^{k-2}, f^{k-3}, \\dots'} /></span> pour obtenir
                      <span className="inline-block align-middle"> <LatexRenderer latex={'a_1 = a_2 = \\dots = a_{k-2} = 0'} /></span>.
                    </div>

                    <p>Il reste alors</p>
                    <div className="text-center my-2">
                      <LatexRenderer latex={'a_{k-1} f^{k-1}(x) = 0_E \\Rightarrow a_{k-1} = 0'} />
                    </div>
                    <div className="text-center"><LatexRenderer block latex={'\\forall i \\in [0; k-1], \\quad a_i = 0'} /></div>
                    <div className="text-center"><LatexRenderer block latex={'\\boxed{\\text{Conclusion : il existe un vecteur } x \\in E \\text{ tel que la famille } (x, f(x), \\dots, f^{k-1}(x)) \\text{ est libre.}}'} /></div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-base font-semibold text-gray-800">
                    2. En déduire que <span className="inline-block align-middle"><LatexRenderer latex={'k \\leq n'} /></span>.
                  </h4>
                  <p><LatexRenderer latex={'\\text{D’après la question précédente, il existe donc un vecteur } x \\in E \\text{ tel que la famille } (x, f(x), \\dots, f^{k-1}(x)) \\text{ est libre.}'} /></p>
                  <p><LatexRenderer latex={'\\text{Par conséquent, son cardinal est inférieur ou égal à la dimension de } E.'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'\\boxed{\\text{Conclusion : } k \\leq n.}'} /></div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 3 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 3</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Intermédiaire</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Exercice 3 — Un peu théorique…</h3>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-700">Exercice 3 — Un peu théorique…</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'\\text{Montrer que } \\ker(f) \\subset \\ker(f^{2}).'} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'\\text{Montrer que } \\ker(f)=\\ker(f^{2}) \\iff \\ker(f) \\cap \\operatorname{Im}(f)=\\{0_{E}\\}.'} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'\\text{Montrer que } \\operatorname{Im}(f^{2}) \\subset \\operatorname{Im}(f).'} /></span></li>
                </ol>
              </div>
            </div>

            <Button onClick={() => setShow3(v => !v)} variant={show3 ? 'secondary' : 'default'} className="mb-2">
              {show3 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show3 && (
              <div className="space-y-4">
                {/* Rappel */}
                <div className="p-3 rounded-lg border bg-green-50 text-green-800 border-green-200">
                  <strong>Rappel</strong> —
                  <span className="inline-block align-middle"> <LatexRenderer latex={'\\ker(f) = \\{x \\in E : f(x)=0_E\\}'} /></span>,
                  <span className="inline-block align-middle"> <LatexRenderer latex={'\\operatorname{Im}(f) = \\{f(x) : x \\in E\\}'} /></span>.
                </div>

                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <p><LatexRenderer latex={'\\textbf{1. Montrer que } \\ker(f) \\subset \\ker(f^{2}).'} /></p>
                  <p><LatexRenderer latex={`\\text{Soit } x\\in \\ker(f). \\text{ Ainsi } f(x)=0_{E}. \\text{ Comme } f \\text{ est lin\\'eaire,}`} /></p>
                  <div className="text-center"><LatexRenderer block latex={'f\\bigl(f(x)\\bigr)=f(0_{E})=0_{E}.'} /></div>
                  <p><LatexRenderer latex={'\\text{Autrement dit,}'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'x\\in \\ker(f^{2}).'} /></div>
                  <div className="text-center"><LatexRenderer block latex={'\\Rightarrow\\ \\mathbf{Conclusion : } \\ker(f) \\subset \\ker(f^{2}).'} /></div>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <p><LatexRenderer latex={'\\textbf{2. Montrer que } \\ker(f)=\\ker(f^{2}) \\iff \\ker(f) \\cap \\operatorname{Im}(f)=\\{0_{E}\\}.'} /></p>
                  <p><LatexRenderer latex={'\\emph{Sens direct.} \\text{ Supposons } \\ker(f)=\\ker(f^{2}) \\text{ et montrons } \\operatorname{Im}(f)\\cap \\ker(f)=\\{0_{E}\\}.'} /></p>
                  <p><LatexRenderer latex={'\\text{Soit } y\\in \\operatorname{Im}(f)\\cap \\ker(f). \\text{ Alors } y\\in \\operatorname{Im}(f) \\text{ et } y\\in \\ker(f). \\text{ Puisque } y\\in \\operatorname{Im}(f), \\text{ il existe } x\\in E \\text{ tel que } y=f(x). \\text{ Mais } y\\in \\ker(f), \\text{ donc } f(y)=0_{E}.'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'f\\bigl(f(x)\\bigr)=0_{E}\\quad\\Longleftrightarrow\\quad x\\in \\ker(f^{2}).'} /></div>
                  <p><LatexRenderer latex={'\\text{Comme } \\ker(f^{2})=\\ker(f), \\text{ on a } x\\in \\ker(f), \\text{ donc } f(x)=0_{E}, \\text{ c’est-à-dire } y=0_{E}. \\Rightarrow\\ \\operatorname{Im}(f)\\cap \\ker(f)=\\{0_{E}\\}.'} /></p>
                  <p><LatexRenderer latex={`\\emph{Sens r\\'eciproque.} \\text{ Supposons } \\operatorname{Im}(f)\\cap \\ker(f)=\\{0_{E}\\} \\text{ et montrons } \\ker(f)=\\ker(f^{2}).`} /></p>
                  <p><LatexRenderer latex={'\\text{Par la question 1, } \\ker(f)\\subset \\ker(f^{2}). \\text{ Soit alors } x\\in \\ker(f^{2}). \\text{ Alors } f\\bigl(f(x)\\bigr)=0_{E}, \\text{ i.e. }'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'f(x)\\in \\ker(f).'} /></div>
                  <p><LatexRenderer latex={`\\text{Mais } f(x)\\in \\operatorname{Im}(f) \\text{ par d\\'efinition; or } \\operatorname{Im}(f)\\cap \\ker(f)=\\{0_{E}\\}, \\text{ donc } f(x)=0_{E}, \\text{ i.e. } x\\in \\ker(f). \\	ext{ Ainsi } \\ker(f^{2})\\subset \\ker(f).`} /></p>
                  <div className="text-center"><LatexRenderer block latex={'\\Rightarrow\\ \\mathbf{Conclusion : } \\ker(f)=\\ker(f^{2}) \\iff \\operatorname{Im}(f)\\cap \\ker(f)=\\{0_{E}\\}.'} /></div>
                </div>

                {/* Q3 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <p><LatexRenderer latex={'\\textbf{3. Montrer que } \\operatorname{Im}(f^{2}) \\subset \\operatorname{Im}(f).'} /></p>
                  <p><LatexRenderer latex={'\\text{Soit } y\\in \\operatorname{Im}(f^{2}). \\text{ Il existe alors } x\\in E \\text{ tel que }'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'y=f^{2}(x)=f\\bigl(f(x)\\bigr).'} /></div>
                  <p><LatexRenderer latex={'\\text{En posant } z=f(x), \\text{ on a } y=f(z), \\text{ donc } y\\in \\operatorname{Im}(f).'} /></p>
                  <div className="text-center"><LatexRenderer block latex={'\\Rightarrow\\ \\mathbf{Conclusion : } \\operatorname{Im}(f^{2}) \\subset \\operatorname{Im}(f).'} /></div>
                </div>
              </div>
            )}
          </div>
        </Card>
        
         {/* Exercice 4 */}
         <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 4</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Moyen</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Exercice 4</h3>
              <p>
                Soit <span className="inline-block align-middle"><LatexRenderer latex={'A = \\begin{pmatrix}1&2\\\\3&6\\\end{pmatrix}'} /></span> et
                <span className="inline-block align-middle"> <LatexRenderer latex={'f: M_2(\\mathbb{R}) \\to M_2(\\mathbb{R}),\\ M \\mapsto AM'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Montrer que <LatexRenderer latex={'f'} /> est un endomorphisme de <LatexRenderer latex={'M_2(\\mathbb{R})'} />.</li>
                <li>Déterminer une base de <LatexRenderer latex={'\\ker(f)'} />. L'application est‑elle bijective ?</li>
                <li>Déterminer une base de <LatexRenderer latex={'\\operatorname{Im}(f)'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow4(v => !v)} variant={show4 ? 'secondary' : 'default'} className="mb-2">
              {show4 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show4 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg border bg-green-50 text-green-800 border-green-200">
                  <strong>Rappel</strong> — La multiplication matricielle est bilinéaire; pour <span className="inline-block align-middle"><LatexRenderer latex={'f(M)=AM'} /></span>, la linéarité en découle immédiatement.
                </div>

                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">1) Linéarité</h4>
                  <p>Pour <LatexRenderer latex={'\\lambda,\\mu \\in \\mathbb{R}'} /> et <LatexRenderer latex={'M,N \\in M_2(\\mathbb{R})'} /> :</p>
                  <div className="text-center my-2">
                    <LatexRenderer latex={'f(\\lambda M + \\mu N) = A(\\lambda M + \\mu N) = \\lambda AM + \\mu AN = \\lambda f(M) + \\mu f(N)'} />
                  </div>
                  <p>Ainsi <LatexRenderer latex={'f'} /> est un endomorphisme de <LatexRenderer latex={'M_2(\\mathbb{R})'} />.</p>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">2) Noyau et bijectivité</h4>
                  <p>
                    Soit <LatexRenderer latex={'M=\\begin{pmatrix}a&b\\\\c&d\\\end{pmatrix}'} />. La condition <LatexRenderer latex={'AM=0'} /> équivaut à
                  </p>
                  <div className="text-center my-2">
                    <LatexRenderer latex={'\\begin{cases} a+2c=0 \\ b+2d=0 \\ \end{cases}'} />
                  </div>
                  <p>D’où <LatexRenderer latex={'a=-2c,\\ b=-2d'} /> et</p>
                  <div className="text-center my-2">
                    <LatexRenderer latex={'M = c \\begin{pmatrix}-2&0\\\\1&0\\\end{pmatrix} + d \\begin{pmatrix}0&-2\\\\0&1\\\end{pmatrix}'} />
                  </div>
                  <p>
                    Ainsi <span className="inline-block align-middle"><LatexRenderer latex={'\\ker(f)=\\mathrm{Vect}\\left(\\begin{pmatrix}-2&0\\\\1&0\\\end{pmatrix},\\begin{pmatrix}0&-2\\\\0&1\\\end{pmatrix}\\right)'} /></span>, de dimension 2. Donc <LatexRenderer latex={'f'} /> n’est pas injective, et n’est pas bijective.
                  </p>
                </div>

                {/* Q3 */}
                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">3) Image</h4>
                  <div className="p-3 rounded-lg border bg-orange-50 text-orange-800 border-orange-200">
                    <strong>Astuce</strong> — utiliser la base <LatexRenderer latex={'(E_{11},E_{12},E_{21},E_{22})'} /> de <LatexRenderer latex={'M_2(\\mathbb{R})'} /> et calculer <LatexRenderer latex={'AE_{ij}'} />.
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{11})=\\begin{pmatrix}1&0\\\\3&0\\\end{pmatrix},\\ \ f(E_{12})=\\begin{pmatrix}0&1\\\\0&3\\\end{pmatrix}'} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{21})=\\begin{pmatrix}2&0\\\\6&0\\\end{pmatrix}=2f(E_{11}),\\ \ f(E_{22})=\\begin{pmatrix}0&2\\\\0&6\\\end{pmatrix}=2f(E_{12})'} />
                  </div>
                  <p>
                    Donc <span className="inline-block align-middle"><LatexRenderer latex={'\\operatorname{Im}(f)=\\mathrm{Vect}\\left(\\begin{pmatrix}1&0\\\\3&0\\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&3\\\end{pmatrix}\\right)'} /></span>, de dimension 2.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 5 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 5</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Difficile (♥)</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Matrice de l’endomorphisme dans la base canonique</h3>
              <p>
                Soient <span className="inline-block align-middle"><LatexRenderer latex={'A = \\begin{pmatrix}-1&2\\\\1&0\\\end{pmatrix}'} /></span> et
                <span className="inline-block align-middle"> <LatexRenderer latex={'f : M_2(\\mathbb{R}) \\to M_2(\\mathbb{R}),\\ M \\mapsto AM'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Montrer que <LatexRenderer latex={'f'} /> est linéaire.</li>
                <li>Déterminer la matrice de <LatexRenderer latex={'f'} /> dans la base canonique <LatexRenderer latex={'(E_{11},E_{12},E_{21},E_{22})'} /> de <LatexRenderer latex={'M_2(\\mathbb{R})'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow5(v => !v)} variant={show5 ? 'secondary' : 'default'} className="mb-2">
              {show5 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show5 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg border bg-green-50 text-green-800 border-green-200">
                  <strong>Rappel</strong> — La multiplication matricielle est bilinéaire; la linéarité de <LatexRenderer latex={'f(M)=AM'} /> s’en déduit.
                </div>

                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">1) Linéarité</h4>
                  <div className="text-center my-2">
                    <LatexRenderer latex={'f(\\lambda M_1 + M_2) = A(\\lambda M_1 + M_2) = \\lambda AM_1 + AM_2 = \\lambda f(M_1) + f(M_2)'} />
                  </div>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">2) Matrice dans la base canonique</h4>
                  <p>Calcul des images des vecteurs de base:</p>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{11})=\\begin{pmatrix}-1&0\\\\1&0\\\end{pmatrix}=-E_{11}+E_{21}'} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{12})=\\begin{pmatrix}0&-1\\\\0&1\\\end{pmatrix}=-E_{12}+E_{22}'} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{21})=\\begin{pmatrix}2&0\\\\0&0\\\end{pmatrix}=2E_{11}'} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={'f(E_{22})=\\begin{pmatrix}0&2\\\\0&0\\\end{pmatrix}=2E_{12}'} />
                  </div>
                  <p>La matrice de <LatexRenderer latex={'f'} /> dans la base canonique (colonnes = coord. de <LatexRenderer latex={'f(E_{ij})'} />) est donc:</p>
                  <div className="text-center">
                    <LatexRenderer latex={'\\begin{pmatrix}-1&0&2&0\\\\0&-1&0&2\\\\1&0&0&0\\\\0&1&0&0\\\end{pmatrix}'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 6 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 6</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Difficile (♥)</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Permutation cyclique sur R^3</h3>
              <p>
                Dans la base canonique <LatexRenderer latex={'\\mathcal B=(e_1,e_2,e_3)'} />, on définit
                <span className="inline-block align-middle"> <LatexRenderer latex={'f(e_1)=e_2,\\ f(e_2)=e_3,\\ f(e_3)=e_1'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Déterminer un polynôme annulateur de <LatexRenderer latex={'f'} />.</li>
                <li><LatexRenderer latex={'f'} /> est‑elle bijective ? Si oui, déterminer <LatexRenderer latex={'f^{-1}'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow5(v => !v)} variant={show5 ? 'secondary' : 'default'} className="mb-2">
              {show5 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show5 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg border bg-green-50 text-green-800 border-green-200">
                  <strong>Rappel</strong> — la matrice de <LatexRenderer latex={'f'} /> dans la base canonique est la matrice de permutation cyclique
                  <LatexRenderer latex={'A=\\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\\end{pmatrix}'} />.
                </div>

                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">Correction</h4>
                  <p>On calcule:</p>
                  <div className="text-center"><LatexRenderer latex={'A^2=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\1&0&0\\\end{pmatrix}'} /></div>
                  <div className="text-center"><LatexRenderer latex={'A^3=I_3'} /></div>
                  <p>
                    Ainsi <LatexRenderer latex={'P(x)=x^3-1'} /> annule <LatexRenderer latex={'A'} />, donc annule <LatexRenderer latex={'f'} />:
                    <LatexRenderer latex={'P(f)=f^3-\\mathrm{Id}_{\\mathbb R^3}=0'} />.
                  </p>
                  <div className="p-3 rounded-lg border bg-orange-50 text-orange-800 border-orange-200">
                    <strong>Conclusion</strong> — polynôme annulateur possible: <LatexRenderer latex={'x^3-1'} />.
                  </div>
                  <p>
                    Comme <LatexRenderer latex={'f^3=\\mathrm{Id}_{\\mathbb R^3}'} />, <LatexRenderer latex={'f'} /> est inversible et
                    <LatexRenderer latex={'f^{-1}=f^2'} />.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
         {/* Exercice 7 */}
         <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 7</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Intermédiaire</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Exercice 7</h3>
              <p>
                Soit <LatexRenderer latex={'n \\in \\mathbb{N}^*'} />. Pour <LatexRenderer latex={'P \\in \\mathbb{R}_n[x]'} />, on définit le polynôme
                <span className="inline-block align-middle"> <LatexRenderer latex={'u(P)'} /></span> par
                <span className="inline-block align-middle"> <LatexRenderer latex={'u(P)(x)=xP^{\\prime}(x)'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Montrer que <LatexRenderer latex={'u'} /> induit un endomorphisme de <LatexRenderer latex={'\\mathbb{R}_n[x]'} />.</li>
                <li>
                  On considère aussi <LatexRenderer latex={'v, w \\in \\mathcal{L}(\\mathbb{R}_n[x])'} /> définis par :
                  <span className="inline-block align-middle"> <LatexRenderer latex={'\\forall P \\in \\mathbb{R}_n[x],\\quad v(P)=P(2)+P^{\\prime\\prime},\\quad w(P)=P^{\\prime}-P'} /></span>.
                  Vérifier que la famille <LatexRenderer latex={'(u,v,w)'} /> est libre.
                </li>
              </ol>
            </div>

            <Button onClick={() => setShow7(v => !v)} variant={show7 ? 'secondary' : 'default'} className="mb-2">
              {show7 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show7 && (
              <div className="space-y-4">
                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Exercice 7 — Solution</h4>
                  <p className="font-semibold">1.</p>
                  <div className="text-center">
                    <LatexRenderer block latex={'\\deg(u(P)) = \\deg(xP^{\\prime}(x)) = \\deg(x) + \\deg(P^{\\prime}) = 1 + \\deg(P^{\\prime}) \\le 1 + \\deg(P) - 1 \\le n,'} />
                  </div>
                  <p>donc <LatexRenderer latex={'u(P) \\in \\mathbb{R}_n[x]'} />.</p>
                  <p>
                    Soient <LatexRenderer latex={'P,Q \\in \\mathbb{R}_n[x]'} /> et <LatexRenderer latex={'\\lambda \\in \\mathbb{R}'} />. Par linéarité de la dérivation :
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'u(P+\\lambda Q)(x)=x(P+\\lambda Q)^{\\prime}(x)=x(P^{\\prime}(x)+\\lambda Q^{\\prime}(x))=xP^{\\prime}(x)+\\lambda x Q^{\\prime}(x)=u(P)(x)+\\lambda u(Q)(x).'} />
                  </div>
                  <p>Ainsi <LatexRenderer latex={'u'} /> est linéaire, donc <LatexRenderer latex={'u \\in \\mathcal{L}(\\mathbb{R}_n[x])'} />.</p>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <p className="font-semibold">2.</p>
                  <p>
                    Soit <LatexRenderer latex={'(\\lambda_1, \\lambda_2, \\lambda_3) \\in \\mathbb{R}^3'} />. Supposons que
                    <LatexRenderer latex={'\\lambda_1 u + \\lambda_2 v + \\lambda_3 w = 0_{\\mathcal{L}(\\mathbb{R}_n[x])}'} />.
                  </p>
                  <p>
                    Cela signifie que, pour tout <LatexRenderer latex={'P \\in \\mathbb{R}_n[x]'} />,
                    <LatexRenderer latex={'\\lambda_1 u(P) + \\lambda_2 v(P) + \\lambda_3 w(P) = 0_{\\mathbb{R}_n[x]}'} />, c’est-à-dire
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'\\lambda_1 \\; xP^{\\prime}(x) + \\lambda_2 \\big( P(2) + P^{\\prime\\prime}(x) \\big) + \\lambda_3 \\big( P^{\\prime}(x) - P(x) \\big) = 0_{\\mathbb{R}_n[x]}.'} />
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      En particulier, pour <LatexRenderer latex={'P=1'} />, on a <LatexRenderer latex={'P^{\\prime}=P^{\\prime\\prime}=0'} /> et
                      <LatexRenderer latex={'P(2)=1'} />, donc il reste :
                      <LatexRenderer block latex={'\\lambda_2 - \\lambda_3 = 0 \\Rightarrow \\lambda_2 = \\lambda_3'} />
                    </li>
                    <li>
                      En prenant maintenant <LatexRenderer latex={'P(x)=x-2'} /> (possible car <LatexRenderer latex={'n \\ge 1'} />), on a
                      <LatexRenderer latex={'P^{\\prime}=1, \\ P^{\\prime\\prime}=0, \\ P(2)=0'} />, et l’égalité devient :
                      <LatexRenderer block latex={'\\lambda_1 x + \\lambda_3 (1 - x + 2) = 0 \\Leftrightarrow (\\lambda_1 - \\lambda_3) x + 3\\lambda_3 = 0'} />
                    </li>
                  </ul>
                  <p>
                    Un polynôme est nul si et seulement si tous ses coefficients sont nuls :
                    <LatexRenderer latex={'\\lambda_1 - \\lambda_3 = 0, \\quad 3\\lambda_3 = 0.'} />
                  </p>
                  <p>
                    On en déduit : <LatexRenderer latex={'\\lambda_3 = 0, \\quad \\lambda_1 = 0, \\quad \\lambda_2 = 0.'} />
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'\\boxed{\\text{La famille } (u,v,w) \\text{ est libre.}}'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 8 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 8</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Intermédiaire</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Composition f ∘ g = Id</h3>
              <p>
                Soient <LatexRenderer latex={'E'} /> un espace vectoriel et
                <span className="inline-block align-middle"> <LatexRenderer latex={'f,g \\in \\mathcal L(E)'} /></span> tels que
                <span className="inline-block align-middle"> <LatexRenderer latex={'f\\circ g = \\mathrm{Id}_E'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Préciser <LatexRenderer latex={'\\operatorname{Im} f'} /> et <LatexRenderer latex={'\\ker g'} />.</li>
                <li>Montrer que <LatexRenderer latex={'\\operatorname{Im}(g\\circ f) = \\operatorname{Im} g'} />.</li>
                <li>Vérifier que <LatexRenderer latex={'\\ker(g\\circ f) = \\ker f'} />.</li>
                <li>En déduire que <LatexRenderer latex={'(\\ker f) \\cap (\\operatorname{Im} g) = \\{0_E\\}'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow6(v => !v)} variant={show6 ? 'secondary' : 'default'} className="mb-2">
              {show6 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show6 && (
              <div className="space-y-4">
                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">1) Image de f et noyau de g</h4>
                  <p>Comme <LatexRenderer latex={'f\\circ g=\\mathrm{Id}_E'} /> est surjective,</p>
                  <div className="text-center"><LatexRenderer latex={'f \\text{ est surjective } \\Rightarrow \\operatorname{Im} f = E'} /></div>
                  <p>Et <LatexRenderer latex={'f\\circ g'} /> est injective, donc</p>
                  <div className="text-center"><LatexRenderer latex={'g \\text{ est injective } \\Rightarrow \\ker g = \\{0_E\\}'} /></div>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">2) Image de g ∘ f</h4>
                  <p>Si <LatexRenderer latex={'y \\in \\operatorname{Im}(g\\circ f)'} />, alors</p>
                  <div className="text-center"><LatexRenderer latex={'y=g(f(x)) \\Rightarrow y \\in \\operatorname{Im} g'} /></div>
                  <p>Réciproquement, si <LatexRenderer latex={'y \\in \\operatorname{Im} g'} />, il existe <LatexRenderer latex={'x \\in E'} /> tel que <LatexRenderer latex={'y=g(x)'} />.</p>
                  <p>Comme <LatexRenderer latex={'x=f(g(x))'} />, on a</p>
                  <div className="text-center"><LatexRenderer latex={'y=g(f(g(x))) \\in \\operatorname{Im}(g\\circ f)'} /></div>
                  <p>D’où l’égalité annoncée.</p>
                </div>

                {/* Q3 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">3) Noyau de g ∘ f</h4>
                  <p>L’inclusion <LatexRenderer latex={'\\ker f \\subset \\ker(g\\circ f)'} /> est immédiate.</p>
                  <p>Réciproquement, si <LatexRenderer latex={'g(f(x))=0_E'} />, alors <LatexRenderer latex={'f(x) \\in \\ker g = \\{0_E\\}'} />.</p>
                  <div className="text-center"><LatexRenderer latex={'\\Rightarrow \\ f(x)=0_E \\Rightarrow x \\in \\ker f'} /></div>
                  <p>Ainsi <LatexRenderer latex={'\\ker(g\\circ f) = \\ker f'} />.</p>
                </div>

                {/* Q4 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">4) Intersection triviale</h4>
                  <p>Si <LatexRenderer latex={'x \\in (\\ker f) \\cap (\\operatorname{Im} g)'} />, écrire <LatexRenderer latex={'x=g(y)'} />.</p>
                  <p>Utiliser <LatexRenderer latex={'f(g(y))=y'} /> pour conclure que <LatexRenderer latex={'x=0_E'} />.</p>
                  <div className="text-center"><LatexRenderer latex={'(\\ker f) \\cap (\\operatorname{Im} g) = \\{0_E\\}'} /></div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 9 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 9</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Intermédiaire</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Supplémentarité et projections dans{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{R}^3'} /></span>
              </h3>
              <p>
                Dans <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{R}^3'} /></span>, on considère
                <span className="inline-block align-middle"> <LatexRenderer latex={'u=(1,2,-1)'} /></span> et les espaces
                <span className="inline-block align-middle"> <LatexRenderer latex={'F=\\mathrm{Vect}(u)'} /></span> et
                <span className="inline-block align-middle"> <LatexRenderer latex={'G=\\{(x,y,z) \\in \\mathbb{R}^3 \\mid 2x+y+z=0\\}'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Montrer que <LatexRenderer latex={'F'} /> et <LatexRenderer latex={'G'} /> sont supplémentaires dans <LatexRenderer latex={'\\mathbb R^3'} />.</li>
                <li>Déterminer l’expression de la projection <LatexRenderer latex={'p'} /> sur <LatexRenderer latex={'F'} /> parallèlement à <LatexRenderer latex={'G'} />, et celle de la projection <LatexRenderer latex={'q'} /> sur <LatexRenderer latex={'G'} /> parallèlement à <LatexRenderer latex={'F'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow8(v => !v)} variant={show8 ? 'secondary' : 'default'} className="mb-2">
              {show8 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show8 && (
              <div className="space-y-4">
                {/* Q1 */}
                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">1)</h4>
                  <p>
                    On sait que <LatexRenderer latex={'\\mathbb{R}^3 = F \\oplus G \\iff (\\forall a \\in \\mathbb{R}^3, \\exists!\\,(b,c) \\in F \\times G, \\ a=b+c)'} />.
                    Raisonnons par analyse-synthèse.
                  </p>
                  <p className="font-semibold">Analyse.</p>
                  <p>
                    Soit <LatexRenderer latex={'a=(x,y,z) \\in \\mathbb{R}^3'} />. Supposons <LatexRenderer latex={'a=b+c'} /> avec <LatexRenderer latex={'(b,c) \\in F \\times G'} />.
                    Comme <LatexRenderer latex={'b \\in F'} />, il existe <LatexRenderer latex={'\\lambda \\in \\mathbb{R}'} /> tel que <LatexRenderer latex={'b=\\lambda u'} />.
                    On a les équivalences suivantes :
                  </p>
                  <div className="space-y-1">
                    <div><LatexRenderer latex={'c \\in G \\iff a-\\lambda u \\in G \\iff (x,y,z)-\\lambda(1,2,-1) \\in G'} /></div>
                    <div><LatexRenderer latex={'\\iff (x-\\lambda, y-2\\lambda, z+\\lambda) \\in G'} /></div>
                    <div><LatexRenderer latex={'\\iff 2(x-\\lambda)+(y-2\\lambda)+z+\\lambda=0 \\iff \\lambda=\\tfrac{2}{3}x+\\tfrac{1}{3}y+\\tfrac{1}{3}z'} /></div>
                  </div>
                  <p>
                    Donc, nécessairement, <LatexRenderer latex={'b=\\lambda u'} /> et <LatexRenderer latex={'c=a-\\lambda u'} /> où <LatexRenderer latex={'\\lambda'} /> est la solution précédente. Ceci clôt la partie « unicité ».
                  </p>
                  <p className="font-semibold">Synthèse.</p>
                  <p>
                    Soient <LatexRenderer latex={'b'} /> et <LatexRenderer latex={'c'} /> les vecteurs donnés par l’analyse. Alors :
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><LatexRenderer latex={'b+c=\\lambda u+(a-\\lambda u)=a'} /></li>
                    <li><LatexRenderer latex={'b=\\lambda u \\in F'} /></li>
                    <li>Comme <LatexRenderer latex={'c \\in G'} /> a été résolu par équivalence, on a <LatexRenderer latex={'c=a-\\lambda u \\in G'} />.</li>
                  </ul>
                  <p>Conclusion : <LatexRenderer latex={'F \\oplus G=\\mathbb{R}^3'} />.</p>
                </div>

                {/* Q2 */}
                <div className="p-4 bg-white rounded-lg border space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">2)</h4>
                  <p>
                    De plus, avec les calculs précédents, pour tout <LatexRenderer latex={'a=(x,y,z) \\in \\mathbb{R}^3'} />, en reprenant les notations ci-dessus,
                    l’écriture <LatexRenderer latex={'a=b+c'} /> est l’unique décomposition de <LatexRenderer latex={'a'} /> comme somme d’un vecteur de <LatexRenderer latex={'F'} /> et d’un vecteur de <LatexRenderer latex={'G'} />.
                    On en déduit, par définition des projections, que
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'p(a)=b=\\lambda u=\\left( \\tfrac{2}{3}x+\\tfrac{1}{3}y+\\tfrac{1}{3}z,\\; \\tfrac{4}{3}x+\\tfrac{2}{3}y+\\tfrac{2}{3}z,\\; -\\tfrac{2}{3}x-\\tfrac{1}{3}y-\\tfrac{1}{3}z \\right)'} />
                  </div>
                  <p>
                    et <LatexRenderer latex={'q(a)=c=a-p(a)'} />, soit après simplification :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'q(a)=\\left( \\tfrac{1}{3}x-\\tfrac{1}{3}y-\\tfrac{1}{3}z,\\; -\\tfrac{4}{3}x+\\tfrac{1}{3}y-\\tfrac{2}{3}z,\\; \\tfrac{2}{3}x+\\tfrac{1}{3}y+\\tfrac{4}{3}z \\right)'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 10 */}
        <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Exercice 10</div>
              <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Avancé</div>
            </div>
            <div className="space-y-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Décomposition spectrale simple et puissances de f</h3>
              <p>
                Soit <LatexRenderer latex={'E'} /> un espace vectoriel. Soient <LatexRenderer latex={'a,b \\in \\mathbb R'} /> tels que <LatexRenderer latex={'a \\ne b'} /> et
                <span className="inline-block align-middle"> <LatexRenderer latex={'f \\in \\mathcal L(E)'} /></span>.
                On suppose que <span className="inline-block align-middle"> <LatexRenderer latex={'(f-a\\,\\mathrm{id}_E) \\circ (f-b\\,\\mathrm{id}_E)=0'} /></span>.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Montrer que <LatexRenderer latex={'\\mathrm{Ker}(f-a\\,\\mathrm{id}_E)'} /> et <LatexRenderer latex={'\\mathrm{Ker}(f-b\\,\\mathrm{id}_E)'} /> sont supplémentaires dans <LatexRenderer latex={'E'} />.</li>
                <li>Déterminer une expression simple de la projection <LatexRenderer latex={'p'} /> sur <LatexRenderer latex={'\\mathrm{Ker}(f-a\\,\\mathrm{id}_E)'} /> parallèlement à <LatexRenderer latex={'\\mathrm{Ker}(f-b\\,\\mathrm{id}_E)'} />.</li>
                <li>Vérifier que <LatexRenderer latex={'f = a p + b(\\mathrm{id}_E - p)'} />. En déduire l’expression de <LatexRenderer latex={'f^n'} /> pour <LatexRenderer latex={'n \\in \\mathbb N'} />.</li>
              </ol>
            </div>

            <Button onClick={() => setShow9(v => !v)} variant={show9 ? 'secondary' : 'default'} className="mb-2">
              {show9 ? 'Masquer la correction' : 'Afficher la correction'}
            </Button>

            {show9 && (
              <div className="space-y-4">
                <p className="font-semibold">Exercice 6.</p>

                <p>
                  Notons <span className="inline-block align-middle"><LatexRenderer latex={'E_a = \\mathrm{Ker}(f - a\\,\\mathrm{id}_E)'} /></span> et
                  <span className="inline-block align-middle"> <LatexRenderer latex={'E_b = \\mathrm{Ker}(f - b\\,\\mathrm{id}_E)'} /></span>.
                </p>

                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">1)</h4>
                  <p>
                    On veut montrer que pour tout <LatexRenderer latex={'x \\in E'} />, il existe un unique
                    <LatexRenderer latex={'(x_a, x_b) \\in E_a \\times E_b'} /> tel que <LatexRenderer latex={'x = x_a + x_b'} />.
                    On raisonne par analyse-synthèse.
                  </p>
                  <p>• Analyse.</p>
                  <p>
                    Soit <LatexRenderer latex={'x \\in E'} />. Supposons que <LatexRenderer latex={'(x_a, x_b) \\in E_a \\times E_b'} /> vérifie <LatexRenderer latex={'x = x_a + x_b'} />.
                    Comme <LatexRenderer latex={'x_a \\in E_a'} />, on a <LatexRenderer latex={'(f - a\\,\\mathrm{id}_E)(x_a) = 0_E'} />, i.e. <LatexRenderer latex={'f(x_a) - a x_a = 0_E'} />, et ainsi
                    <LatexRenderer latex={'f(x_a) = a x_a'} />. De même, puisque <LatexRenderer latex={'x_b \\in E_b'} />, <LatexRenderer latex={'f(x_b) = b x_b'} />. Alors
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'\\begin{aligned} x = x_a + x_b \\quad &(1) \\\\ f(x) = f(x_a) + f(x_b) = a x_a + b x_b \\quad &(2). \\end{aligned}'} />
                  </div>
                  <p>
                    En faisant <LatexRenderer latex={'(2) - b(1)'} />, on obtient : <LatexRenderer latex={'f(x) - b x = a x_a - b x_a'} />, que l’on reformule ainsi (puisque
                    <LatexRenderer latex={'a \\ne b'} />) :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'x_a = \\frac{1}{a - b} (f(x) - b x) = \\frac{1}{a - b} (f - b\\,\\mathrm{id}_E)(x).'} />
                  </div>
                  <p>Ainsi il n’y a qu’une seule valeur possible pour <LatexRenderer latex={'x_a'} />.</p>
                  <p>
                    Enfin <LatexRenderer latex={'x_b = x - x_a = \\frac{1}{b-a} (f - a\\,\\mathrm{id}_E)(x)'} /> : il n’y a qu’une seule valeur possible pour <LatexRenderer latex={'x_b'} />.
                    Ceci clôt la partie « unicité ».
                  </p>
                  <p>• Synthèse.</p>
                  <p>Soit <LatexRenderer latex={'x \\in E'} />. Posons</p>
                  <div className="text-center">
                    <LatexRenderer block latex={'x_a = \\frac{1}{a - b}(f - b\\,\\mathrm{id}_E)(x) \\quad\\text{et}\\quad x_b = \\frac{1}{b - a}(f - a\\,\\mathrm{id}_E)(x).'} />
                  </div>
                  <p>Alors, par linéarité de <LatexRenderer latex={'f - a\\,\\mathrm{id}_E'} /> :</p>
                  <div className="text-center">
                    <LatexRenderer block latex={'(f - a\\,\\mathrm{id}_E)(x_a) = \\frac{1}{a - b}(f - a\\,\\mathrm{id}_E) \\circ (f - b\\,\\mathrm{id}_E)(x) = 0_E,'} />
                  </div>
                  <p>
                    car <LatexRenderer latex={'(f - a\\,\\mathrm{id}_E) \\circ (f - b\\,\\mathrm{id}_E) = 0'} /> par hypothèse. Ainsi <LatexRenderer latex={'x_a \\in E_a'} />.
                    Comme <LatexRenderer latex={'f - a\\,\\mathrm{id}_E'} /> et <LatexRenderer latex={'f - b\\,\\mathrm{id}_E'} /> commutent, on a de même : <LatexRenderer latex={'x_b \\in E_b'} />.
                    Enfin
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'x_a + x_b = \\frac{1}{a - b}(f - b\\,\\mathrm{id}_E - f + a\\,\\mathrm{id}_E)(x) = \\frac{1}{a - b}(a - b)\\,\\mathrm{id}_E(x) = x.'} />
                  </div>
                  <p>• Finalement :</p>
                  <p><LatexRenderer latex={'E = E_a \\oplus E_b.'} /></p>
                </div>

                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">2)</h4>
                  <p>
                    De plus, on vient de voir que pour tout <LatexRenderer latex={'x \\in E'} />, l’écriture
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'x = \\frac{1}{a - b}(f - b\\,\\mathrm{id}_E)(x) + \\frac{1}{b - a}(f - a\\,\\mathrm{id}_E)(x)'} />
                  </div>
                  <p>
                    est l’unique décomposition de <LatexRenderer latex={'x'} /> comme somme d’un vecteur de <LatexRenderer latex={'E_a'} /> et d’un vecteur de <LatexRenderer latex={'E_b'} />.
                    Par définition de <LatexRenderer latex={'p'} />, on a :
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'p(x) = \\frac{1}{a - b}(f - b\\,\\mathrm{id}_E)(x), \\quad\\text{et donc}\\quad p = \\frac{1}{a - b}(f - b\\,\\mathrm{id}_E).'} />
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">3)</h4>
                  <p>
                    Pour <LatexRenderer latex={'x \\in E'} />, en reprenant la notation <LatexRenderer latex={'x = x_a + x_b'} /> de la question précédente, on a
                    <LatexRenderer latex={'f(x) = a x_a + b x_b'} /> (car <LatexRenderer latex={'x_a \\in E_a'} /> et <LatexRenderer latex={'x_b \\in E_b'} />).
                  </p>
                  <p>
                    Or <LatexRenderer latex={'x_a = p(x)'} /> et <LatexRenderer latex={'x_b = x - x_a = x - p(x) = (\\mathrm{id}_E - p)(x)'} />, donc
                    <LatexRenderer latex={'f(x) = a p(x) + b (\\mathrm{id}_E - p)(x).'} />
                  </p>
                  <p>
                    Ceci étant valable pour tout <LatexRenderer latex={'x \\in E'} />, on a l’égalité au niveau des endomorphismes :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'f = a p + b(\\mathrm{id}_E - p).'} />
                  </div>
                  <p>
                    On a <LatexRenderer latex={'f^0 = \\mathrm{id}_E'} />. Soit <LatexRenderer latex={'n \\in \\mathbb{N}^*'} />. Comme <LatexRenderer latex={'a p'} /> et
                    <LatexRenderer latex={'b(\\mathrm{id}_E - p)'} /> sont deux endomorphismes qui commutent, on peut appliquer la formule du binôme de Newton :
                  </p>
                  <div className="text-center">
                    <LatexRenderer block latex={'f^n = \\sum_{k=0}^n \\binom{n}{k}(a p)^k \\circ (b(\\mathrm{id}_E - p))^{n-k} = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k} p^k \\circ (\\mathrm{id}_E - p)^{n-k}.'} />
                  </div>
                  <p>
                    On remarque que <LatexRenderer latex={'p \\circ (\\mathrm{id}_E - p) = p - p^2 = 0'} />. Alors, pour tout <LatexRenderer latex={'k \\in [1, n-1]'} />, on a
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'p^k \\circ (\\mathrm{id}_E - p)^{n-k} = p^{k-1} \\circ (p \\circ (\\mathrm{id}_E - p)) \\circ (\\mathrm{id}_E - p)^{n-k-1} = 0.'} />
                  </div>
                  <p>
                    Ainsi, uniquement les termes pour <LatexRenderer latex={'k = 0'} /> et <LatexRenderer latex={'k = n'} /> sont non nuls. D’où :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex={'f^n = \\binom{n}{0} b^n (\\mathrm{id}_E - p) + \\binom{n}{n} a^n p = a^n p + b^n (\\mathrm{id}_E - p).'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-8">
          <Link to="/formation/math/premiere-vers-deuxieme" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Retourner aux chapitres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module1ApplicationsLineairesExercicesPage;


