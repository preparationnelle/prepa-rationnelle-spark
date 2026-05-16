import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold text-red-800 uppercase tracking-widest mb-2 mt-4 first:mt-0">
    {children}
  </p>
);

const PointMethodo = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Méthode</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const Astuce = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Astuce</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const ConclusionBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">
    <SectionLabel>Conclusion</SectionLabel>
    <div className="text-stone-800 leading-relaxed">{children}</div>
  </div>
);

const difficultyLabel: Record<string, string> = {
  'Niveau: Facile': 'FACILE',
  'Niveau: Intermédiaire': 'MOYEN',
  'Niveau: Concours': 'DIFFICILE',
  'Niveau: Concours (Classique)': 'DIFFICILE',
  'Niveau: Difficile': 'HEC',
};

const Chapitre11OptimisationMultivarieeAvanceeExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ level }: { level: string }) => (
    <div className="flex items-center gap-3 mb-4 mt-10">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
        {level}
      </span>
      <div className="flex-1 border-t border-stone-200" />
    </div>
  );

  const ExerciseCard = ({
    id, title, content, correction, difficulty,
  }: {
    id: string; title: string; content: React.ReactNode;
    correction: React.ReactNode; difficulty: string;
  }) => {
    const num = id.replace(/[^0-9]/g, '').padStart(2, '0');
    const badge = difficultyLabel[difficulty] ?? difficulty.replace('Niveau: ', '').toUpperCase();
    const isOpen = visibleCorrections[id];
    return (
      <div className="mb-6 border border-stone-200 rounded-xl bg-carnet-paper-2 shadow-sm p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold italic text-red-800 leading-none">{num}</span>
            <span className="text-stone-300 font-light text-xl leading-none">—</span>
            <h3 className="font-medium text-stone-900 text-base leading-snug">
              {title.replace(/^Exercice \d+ - /, '')}
            </h3>
          </div>
          <span className="shrink-0 text-[11px] font-semibold text-red-800 border border-red-200 rounded-full px-3 py-0.5 tracking-wider">
            {badge}
          </span>
        </div>
        <div className="text-stone-700 leading-relaxed mb-6">{content}</div>
        <button
          onClick={() => toggleCorrection(id)}
          className="flex items-center gap-2 text-sm text-stone-600 border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-50 transition-colors"
        >
          {isOpen ? (<><EyeOff className="w-4 h-4" /> Masquer la correction</>) : (<><Eye className="w-4 h-4" /> Afficher la correction</>)}
        </button>
        {isOpen && (
          <div className="mt-5 border border-dashed border-stone-300 border-l-[3px] border-l-red-800 rounded-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-red-800" />
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Corrigé détaillé</span>
            </div>
            <div className="text-stone-700 leading-relaxed space-y-2">{correction}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Exercices sur l'optimisation, la convexité et les multiplicateurs de Lagrange."
      slug="optimisation-multivariee-avancee"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
      nextChapter={{
        slug: "comparaison-negligeabilite-equivalence",
        title: "Comparaison & Négligeabilité"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Convexité et optimisation sans contrainte" />

          <ExerciseCard
            id="ex17-3"
            title="Étude complète de f(x,y) = exp(x² + y²)"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="f(x,y)=e^{x^2+y^2}" /> définie sur <LatexRenderer latex="\mathbb{R}^2" />.</p>
                <p>1. Calculer le gradient et la matrice hessienne de <LatexRenderer latex="f" />.</p>
                <p>2. Montrer que <LatexRenderer latex="f" /> est strictement convexe.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour étudier la nature d'un extremum ou la convexité d'une fonction de deux variables : annuler le gradient pour trouver les points critiques, calculer la Hessienne, puis utiliser le critère <LatexRenderer latex="rt-s^2" /> et le signe des valeurs propres. Une fonction est strictement convexe si et seulement si sa Hessienne est définie positive en tout point.
                </PointMethodo>
                <p><strong>Gradient.</strong> Par le théorème de Schwarz, les dérivées partielles secondes commutent (ici <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^\infty" />). On calcule :</p>
                <p><LatexRenderer latex="\frac{\partial f}{\partial x}=2x\,e^{x^2+y^2},\quad \frac{\partial f}{\partial y}=2y\,e^{x^2+y^2}" />.</p>
                <p>D'où <LatexRenderer latex="\nabla f(x,y)=2e^{x^2+y^2}(x,y)" />. Le seul point critique est <LatexRenderer latex="(0,0)" />.</p>
                <p><strong>Hessienne.</strong> On calcule les dérivées partielles secondes :</p>
                <p><LatexRenderer latex="r=\frac{\partial^2 f}{\partial x^2}=(2+4x^2)e^{x^2+y^2},\quad t=\frac{\partial^2 f}{\partial y^2}=(2+4y^2)e^{x^2+y^2},\quad s=\frac{\partial^2 f}{\partial x\partial y}=4xy\,e^{x^2+y^2}" />.</p>
                <p>La matrice hessienne est <LatexRenderer latex="H_f(x,y)=e^{x^2+y^2}\begin{pmatrix}2+4x^2&4xy\\4xy&2+4y^2\end{pmatrix}" />.</p>
                <p><strong>Convexité.</strong> Pour montrer que <LatexRenderer latex="H_f" /> est définie positive en tout point :</p>
                <p>Le sous-mineur principal d'ordre 1 : <LatexRenderer latex="r=(2+4x^2)e^{x^2+y^2}>0" />.</p>
                <p>Le déterminant : <LatexRenderer latex="\det(H_f)=e^{2(x^2+y^2)}[(2+4x^2)(2+4y^2)-16x^2y^2]=e^{2(x^2+y^2)}[4+8x^2+8y^2+16x^2y^2-16x^2y^2]" />.</p>
                <p>Ainsi <LatexRenderer latex="\det(H_f)=e^{2(x^2+y^2)}\cdot 4(1+2x^2+2y^2)>0" /> pour tout <LatexRenderer latex="(x,y)" />.</p>
                <p>Or <LatexRenderer latex="H_f" /> a les deux sous-mineurs principaux strictement positifs, donc <LatexRenderer latex="H_f" /> est définie positive en tout point.</p>
                <ConclusionBox>
                  <LatexRenderer latex="f(x,y)=e^{x^2+y^2}" /> est strictement convexe sur <LatexRenderer latex="\mathbb{R}^2" /> ; son unique minimum global est atteint en <LatexRenderer latex="(0,0)" /> et vaut <LatexRenderer latex="f(0,0)=1" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex17-6"
            title="Étude de f(x,y) = x⁴ + y⁴ − 2x²y²"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="f(x,y)=x^4+y^4-2x^2y^2=(x^2-y^2)^2" />.</p>
                <p>1. Trouver tous les points critiques et analyser leur nature à l'aide de la Hessienne.</p>
                <p>2. La fonction <LatexRenderer latex="f" /> est-elle convexe ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Chercher les points critiques en annulant le gradient, puis analyser la Hessienne en chaque point critique. Pour la convexité globale, vérifier si la Hessienne est semi-définie positive en tout point (critère : tous les sous-mineurs principaux positifs ou nuls).
                </PointMethodo>
                <p><strong>Points critiques.</strong> On note que <LatexRenderer latex="f(x,y)=(x^2-y^2)^2\geq 0" /> avec égalité sur les droites <LatexRenderer latex="y=\pm x" />. On calcule le gradient :</p>
                <p><LatexRenderer latex="\frac{\partial f}{\partial x}=4x^3-4xy^2=4x(x^2-y^2)=0" /> et <LatexRenderer latex="\frac{\partial f}{\partial y}=4y^3-4x^2y=4y(y^2-x^2)=0" />.</p>
                <p>Soit <LatexRenderer latex="4x(x^2-y^2)=0" /> et <LatexRenderer latex="4y(y^2-x^2)=0" />.</p>
                <p>Les solutions sont : <LatexRenderer latex="(0,0)" /> et tous les points <LatexRenderer latex="(t,t)" />, <LatexRenderer latex="(t,-t)" /> pour <LatexRenderer latex="t\in\mathbb{R}" />. Donc l'ensemble des points critiques est <LatexRenderer latex="\{(0,0)\}\cup\{y=x\}\cup\{y=-x\}" />.</p>
                <p><strong>Nature de (0,0).</strong> La Hessienne en <LatexRenderer latex="(0,0)" /> : <LatexRenderer latex="r=0, s=0, t=0" />, donc <LatexRenderer latex="H_f(0,0)=0" /> (critère non concluant). Mais <LatexRenderer latex="f(x,y)\geq 0=f(0,0)" /> pour tout <LatexRenderer latex="(x,y)" />, donc <LatexRenderer latex="(0,0)" /> est un minimum global.</p>
                <Astuce>Sur les droites <LatexRenderer latex="y=\pm x" />, <LatexRenderer latex="f\equiv 0" />, donc <LatexRenderer latex="f" /> ne peut pas être strictement convexe.</Astuce>
                <p><strong>Convexité.</strong> La Hessienne en <LatexRenderer latex="(1,0)" /> : <LatexRenderer latex="r=8, s=0, t=-4" />, det <LatexRenderer latex="=-32<0" />. Donc <LatexRenderer latex="H_f(1,0)" /> n'est pas semi-définie positive, et <LatexRenderer latex="f" /> n'est pas convexe.</p>
                <ConclusionBox>
                  <LatexRenderer latex="(0,0)" /> est le minimum global de <LatexRenderer latex="f" /> (valeur 0). Les droites <LatexRenderer latex="y=\pm x" /> sont aussi des minima globaux. La fonction <LatexRenderer latex="f" /> n'est <strong>pas convexe</strong>.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Optimisation sous contraintes (Lagrange)" />

          <ExerciseCard
            id="ex17-4"
            title="Minimisation de x² + 2y² sous x + y = 1"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Minimiser <LatexRenderer latex="f(x,y)=x^2+2y^2" /> sous la contrainte <LatexRenderer latex="g(x,y)=x+y-1=0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La méthode de Lagrange : à un extremum sous contrainte <LatexRenderer latex="g=0" />, il existe <LatexRenderer latex="\lambda\in\mathbb{R}" /> tel que <LatexRenderer latex="\nabla f=\lambda\nabla g" /> et <LatexRenderer latex="g=0" />. On résout le système, puis on vérifie qu'il s'agit bien d'un minimum (ici par convexité de <LatexRenderer latex="f" /> et compacité de la contrainte dans une direction bornée).
                </PointMethodo>
                <p>On écrit les conditions de Lagrange <LatexRenderer latex="\nabla f=\lambda\nabla g" /> :</p>
                <p><LatexRenderer latex="\frac{\partial f}{\partial x}=\lambda\frac{\partial g}{\partial x}\implies 2x=\lambda" /></p>
                <p><LatexRenderer latex="\frac{\partial f}{\partial y}=\lambda\frac{\partial g}{\partial y}\implies 4y=\lambda" /></p>
                <p>D'où <LatexRenderer latex="2x=4y" />, soit <LatexRenderer latex="x=2y" />. Or la contrainte donne <LatexRenderer latex="x+y=1" />, d'où <LatexRenderer latex="2y+y=1" />, soit <LatexRenderer latex="y=1/3" /> et <LatexRenderer latex="x=2/3" />.</p>
                <p>Ainsi <LatexRenderer latex="\lambda=2x=4/3" />.</p>
                <p>La valeur minimale est <LatexRenderer latex="f(2/3,1/3)=(2/3)^2+2(1/3)^2=4/9+2/9=6/9=2/3" />.</p>
                <ConclusionBox>
                  Le minimum de <LatexRenderer latex="f" /> sur la contrainte est atteint en <LatexRenderer latex="(x,y)=(2/3,\,1/3)" /> et vaut <LatexRenderer latex="f(2/3,1/3)=2/3" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex17-8"
            title="Optimisation économique — C(x,y) sous x + 2y = 100"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Minimiser <LatexRenderer latex="C(x,y)=x^2+y^2+xy" /> sous la contrainte <LatexRenderer latex="x+2y=100" />, avec <LatexRenderer latex="x,y\geq 0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On applique les conditions de Lagrange, puis on vérifie que le point trouvé satisfait bien les contraintes d'inégalité <LatexRenderer latex="x,y\geq 0" />. Si un point est sur le bord, on étudie les cas limites.
                </PointMethodo>
                <p>Conditions de Lagrange pour <LatexRenderer latex="g(x,y)=x+2y-100=0" /> :</p>
                <p><LatexRenderer latex="\frac{\partial C}{\partial x}=2x+y=\lambda" /> et <LatexRenderer latex="\frac{\partial C}{\partial y}=2y+x=2\lambda" />.</p>
                <p>D'où <LatexRenderer latex="2(2x+y)=2y+x" />, soit <LatexRenderer latex="4x+2y=2y+x" />, donc <LatexRenderer latex="3x=0" /> et <LatexRenderer latex="x=0" />.</p>
                <p>Ainsi la contrainte donne <LatexRenderer latex="0+2y=100" />, soit <LatexRenderer latex="y=50" />.</p>
                <p>Le multiplicateur est <LatexRenderer latex="\lambda=2x+y=50" />. La valeur minimale est <LatexRenderer latex="C(0,50)=0+2500+0=2500" />.</p>
                <Astuce>Le multiplicateur <LatexRenderer latex="\lambda=50" /> représente le coût marginal de la contrainte : une augmentation d'une unité du budget entraîne une réduction du coût de 50.</Astuce>
                <ConclusionBox>
                  Le minimum de <LatexRenderer latex="C" /> sous contrainte est atteint en <LatexRenderer latex="(x,y)=(0,50)" /> et vaut <LatexRenderer latex="C(0,50)=2500" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Convexité et minimum global" />

          <ExerciseCard
            id="ex17-9"
            title="Convexité d'une fonction quadratique de deux variables"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="f(x, y) = x^2 + 2xy + 3y^2 - 4x + 6y" /> définie sur <LatexRenderer latex="\mathbb{R}^2" />.</p>
                <p>Démontrer que <LatexRenderer latex="f" /> admet un unique minimum global et le déterminer.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Une fonction <LatexRenderer latex="\mathcal{C}^2" /> dont la hessienne est définie positive en tout point est strictement convexe. Tout point critique d'une fonction strictement convexe est l'unique minimum global. On combine donc l'analyse de la hessienne et l'annulation du gradient.
                </PointMethodo>
                <p><strong>Hessienne.</strong> Soit <LatexRenderer latex="(x, y) \in \mathbb{R}^2" />. Calculer :</p>
                <LatexRenderer latex="\partial_x^2 f = 2, \quad \partial_y^2 f = 6, \quad \partial_{xy}^2 f = 2 \quad\Rightarrow\quad H = \begin{pmatrix} 2 & 2 \\ 2 & 6 \end{pmatrix}." />
                <p className="mt-2">Or <LatexRenderer latex="\det(H) = 12 - 4 = 8 > 0" /> et <LatexRenderer latex="\mathrm{tr}(H) = 8 > 0" />, donc les deux valeurs propres sont strictement positives. <LatexRenderer latex="H" /> est définie positive en tout point.</p>
                <p className="mt-2">D'où <LatexRenderer latex="f" /> est strictement convexe sur <LatexRenderer latex="\mathbb{R}^2" />.</p>
                <p className="mt-2"><strong>Point critique.</strong> Soit <LatexRenderer latex="\nabla f = (2x + 2y - 4,\; 2x + 6y + 6) = 0" />. Le système :</p>
                <LatexRenderer latex="\begin{cases} x + y = 2 \\ x + 3y = -3 \end{cases} \Rightarrow 2y = -5 \Rightarrow y = -5/2,\ x = 9/2." />
                <p className="mt-2">D'où l'unique point critique est <LatexRenderer latex="(9/2, -5/2)" />.</p>
                <Astuce>
                  Quand la fonction est strictement convexe sur un ouvert convexe, l'existence d'un point critique est équivalente à celle d'un minimum global unique.
                </Astuce>
                <p className="mt-2">Ainsi <LatexRenderer latex="(9/2, -5/2)" /> est l'unique minimum global. La valeur minimale est <LatexRenderer latex="f(9/2, -5/2) = 81/4 - 45/2 + 75/4 - 18 - 15 = -33/4" /> (calcul direct).</p>
                <ConclusionBox>
                  <LatexRenderer latex="f" /> est strictement convexe (hessienne définie positive en tout point). Unique minimum global en <LatexRenderer latex="(9/2, -5/2)" /> de valeur <LatexRenderer latex="-33/4" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 4 — Optimisation par paramétrage" />

          <ExerciseCard
            id="ex17-10"
            title="Maximum d'une fonction sur le triangle plein"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="T = \{(x, y) \in \mathbb{R}^2 : x \ge 0, y \ge 0, x + y \le 1\}" /> (triangle fermé).</p>
                <p>Déterminer le maximum de <LatexRenderer latex="f(x, y) = xy(1 - x - y)" /> sur <LatexRenderer latex="T" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour optimiser sur un compact, on combine deux études : (1) recherche des points critiques à l'intérieur (gradient nul, classification par hessienne), (2) étude des bords (paramétrer chaque arête, ramener à 1 variable). Le théorème des bornes atteintes garantit l'existence du maximum.
                </PointMethodo>
                <p><strong>Existence.</strong> Soit <LatexRenderer latex="T" /> un fermé borné de <LatexRenderer latex="\mathbb{R}^2" />, donc compact. Or <LatexRenderer latex="f" /> est continue. Donc <LatexRenderer latex="f" /> atteint son maximum sur <LatexRenderer latex="T" /> par le théorème des bornes atteintes.</p>
                <p className="mt-2"><strong>Étude intérieure.</strong> Soit <LatexRenderer latex="\nabla f = (y(1 - 2x - y),\; x(1 - x - 2y))" />. À l'intérieur (<LatexRenderer latex="x, y > 0" /> et <LatexRenderer latex="x + y < 1" />), <LatexRenderer latex="\nabla f = 0" /> donne :</p>
                <LatexRenderer latex="\begin{cases} 1 - 2x - y = 0 \\ 1 - x - 2y = 0 \end{cases} \Rightarrow x = y = 1/3." />
                <p className="mt-2">D'où le point critique <LatexRenderer latex="(1/3, 1/3)" /> est dans l'intérieur. Or <LatexRenderer latex="f(1/3, 1/3) = (1/3)(1/3)(1 - 2/3) = 1/27" />.</p>
                <p className="mt-2"><strong>Étude des bords.</strong> Sur les arêtes <LatexRenderer latex="x = 0" />, <LatexRenderer latex="y = 0" /> ou <LatexRenderer latex="x + y = 1" />, le facteur correspondant s'annule, donc <LatexRenderer latex="f \equiv 0" /> sur les bords.</p>
                <Astuce>
                  L'astuce ici : la fonction <LatexRenderer latex="f = xy(1-x-y)" /> est nulle sur le bord du triangle, donc le maximum se trouve nécessairement à l'intérieur.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="\max_T f = 1/27" />, atteint en <LatexRenderer latex="(1/3, 1/3)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex17-11"
            title="Minimisation d'une distance au plan"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Trouver le point de la surface <LatexRenderer latex="z = xy" /> le plus proche de l'origine.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour minimiser la distance d'un point variable à l'origine, on minimise le carré de la distance (qui est <LatexRenderer latex="\mathcal{C}^\infty" /> et atteint son minimum aux mêmes points). Cela évite la racine carrée et simplifie les calculs.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="P = (x, y, xy)" /> un point sur la surface. Le carré de la distance à l'origine est :</p>
                <LatexRenderer latex="g(x, y) = x^2 + y^2 + x^2 y^2." />
                <p className="mt-2"><strong>Points critiques.</strong> Or :</p>
                <LatexRenderer latex="\partial_x g = 2x + 2x y^2 = 2x(1 + y^2), \quad \partial_y g = 2y + 2x^2 y = 2y(1 + x^2)." />
                <p className="mt-2">D'où <LatexRenderer latex="\nabla g = 0 \iff x = 0 \text{ et } y = 0" /> (car <LatexRenderer latex="1 + y^2 > 0" /> et <LatexRenderer latex="1 + x^2 > 0" />).</p>
                <p className="mt-2"><strong>Vérification.</strong> En <LatexRenderer latex="(0, 0)" /> : <LatexRenderer latex="g(0, 0) = 0" />. Or <LatexRenderer latex="g(x, y) = x^2 + y^2 + x^2 y^2 \ge 0" />, avec égalité ssi <LatexRenderer latex="x = y = 0" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="(0, 0)" /> est le minimum global de <LatexRenderer latex="g" />. Le point de la surface est <LatexRenderer latex="P = (0, 0, 0)" />, l'origine elle-même.</p>
                <Astuce>
                  Vérification cohérente : la surface <LatexRenderer latex="z = xy" /> contient l'origine, donc la distance minimale est trivialement 0.
                </Astuce>
                <ConclusionBox>
                  Le point de la surface <LatexRenderer latex="z = xy" /> le plus proche de l'origine est <LatexRenderer latex="(0, 0, 0)" /> lui-même, à distance nulle.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Optimisation à 3 variables" />

          <ExerciseCard
            id="ex17-12"
            title="Boîte de volume maximum à surface fixée"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Une boîte rectangulaire fermée a une surface totale de <LatexRenderer latex="S = 600" /> cm². Quelles dimensions <LatexRenderer latex="(x, y, z)" /> maximisent le volume <LatexRenderer latex="V = xyz" /> ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour optimiser à 3 variables sous contrainte linéaire, on peut procéder par symétrie ou par substitution. Si la fonction est symétrique en les variables et la contrainte aussi, la solution optimale est généralement obtenue avec <LatexRenderer latex="x = y = z" /> (cube). On vérifie ensuite par la hessienne.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(x, y, z) > 0" /> avec <LatexRenderer latex="2(xy + yz + zx) = 600" />, soit <LatexRenderer latex="xy + yz + zx = 300" />.</p>
                <p className="mt-2"><strong>Argument de symétrie.</strong> Le problème est symétrique en <LatexRenderer latex="(x, y, z)" /> (les rôles sont interchangeables). Si l'optimum est unique, il est nécessairement symétrique : <LatexRenderer latex="x = y = z" />.</p>
                <p className="mt-2">Sous cette hypothèse, la contrainte donne <LatexRenderer latex="3x^2 = 300" />, soit <LatexRenderer latex="x = 10" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="V = 10^3 = 1000" /> cm³.</p>
                <Astuce>
                  Pour démontrer rigoureusement : utiliser la moyenne arithmétique-géométrique <LatexRenderer latex="(xy + yz + zx)/3 \ge \sqrt[3]{(xyz)^2}" />, soit <LatexRenderer latex="100 \ge V^{2/3}" />, donc <LatexRenderer latex="V \le 1000" />, avec égalité ssi <LatexRenderer latex="xy = yz = zx" />, c'est-à-dire <LatexRenderer latex="x = y = z" />.
                </Astuce>
                <ConclusionBox>
                  Volume maximal <LatexRenderer latex="V_{\max} = 1000" /> cm³, atteint pour le cube de côté <LatexRenderer latex="x = y = z = 10" /> cm.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Optimisation et fonction implicite" />

          <ExerciseCard
            id="ex17-13"
            title="Optimisation d'une forme quadratique sur la sphère"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="A \in \mathcal{S}_n(\mathbb{R})" /> une matrice symétrique réelle.</p>
                <p>Démontrer que <LatexRenderer latex="\max_{\|x\|^2 = 1} \langle Ax, x\rangle = \lambda_{\max}(A)" />, atteint en tout vecteur propre unitaire associé à <LatexRenderer latex="\lambda_{\max}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le quotient de Rayleigh sur la sphère unité est l'outil-clé pour caractériser variationnellement les valeurs propres extrémales d'une matrice symétrique. La démonstration utilise la diagonalisation orthogonale (théorème spectral) qui transforme la forme quadratique en somme pondérée par les valeurs propres.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="A = P D P^T" /> avec <LatexRenderer latex="P \in \mathcal{O}_n(\mathbb{R})" /> et <LatexRenderer latex="D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)" /> avec <LatexRenderer latex="\lambda_1 \le \cdots \le \lambda_n" /> (par théorème spectral).</p>
                <p className="mt-2">Soit <LatexRenderer latex="x \in \mathbb{R}^n" /> avec <LatexRenderer latex="\|x\| = 1" />, et <LatexRenderer latex="y = P^T x = (y_1, \ldots, y_n)^T" />. Comme <LatexRenderer latex="P" /> orthogonale, <LatexRenderer latex="\|y\| = \|x\| = 1" />, soit <LatexRenderer latex="\sum_{i=1}^n y_i^2 = 1" />.</p>
                <p className="mt-2">Or :</p>
                <LatexRenderer latex="\langle Ax, x\rangle = x^T A x = x^T P D P^T x = y^T D y = \sum_{i=1}^n \lambda_i y_i^2." />
                <p className="mt-2"><strong>Majoration.</strong> Comme <LatexRenderer latex="\lambda_i \le \lambda_n" /> pour tout <LatexRenderer latex="i" /> :</p>
                <LatexRenderer latex="\langle Ax, x\rangle = \sum_{i=1}^n \lambda_i y_i^2 \le \lambda_n \sum_{i=1}^n y_i^2 = \lambda_n." />
                <p className="mt-2"><strong>Atteinte.</strong> En prenant <LatexRenderer latex="x = P\,e_n" /> (la <LatexRenderer latex="n" />-ième colonne de <LatexRenderer latex="P" />, vecteur propre unitaire pour <LatexRenderer latex="\lambda_n" />), on a <LatexRenderer latex="y = e_n" /> et <LatexRenderer latex="\langle Ax, x\rangle = \lambda_n" />.</p>
                <Astuce>
                  Ce résultat est le <strong>principe de Rayleigh-Ritz</strong>. Analoguement, <LatexRenderer latex="\min_{\|x\| = 1} \langle Ax, x\rangle = \lambda_{\min}(A)" />.
                </Astuce>
                <ConclusionBox>
                  Pour <LatexRenderer latex="A \in \mathcal{S}_n(\mathbb{R})" /> : <LatexRenderer latex="\max_{\|x\| = 1} \langle Ax, x\rangle = \lambda_{\max}(A)" />, atteint sur le sous-espace propre associé à <LatexRenderer latex="\lambda_{\max}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeExercicesPage;
