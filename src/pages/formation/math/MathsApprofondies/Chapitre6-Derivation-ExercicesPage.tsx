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

const Chapitre6DerivationExercicesPage = () => {
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
      <div className="mb-6 border border-stone-200 rounded-xl bg-white shadow-sm p-6">
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
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Exercices sur la dérivabilité, les théorèmes fondamentaux et les études de fonctions."
      slug="derivation"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
      nextChapter={{
        slug: "integration-sur-un-segment",
        title: "Intégration sur un segment"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Calculs de dérivées et fonctions constantes" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f : \\mathbb{R}^* \\to \\mathbb{R}"} /> définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"f(x) = \\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)"} />
                </div>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> Calculer <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x)"} /> et <LatexRenderer latex={"\\lim_{x \\to -\\infty} f(x)"} />.</p>
                  <p><strong>2.</strong> Montrer que <LatexRenderer latex={"f"} /> est constante sur <LatexRenderer latex={"]0, +\\infty["} /> et sur <LatexRenderer latex={"]-\\infty, 0["} />.</p>
                  <p><strong>3.</strong> En déduire les valeurs de la constante.</p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une fonction est constante sur un intervalle, on calcule sa dérivée et on vérifie qu'elle est nulle. On en déduit la valeur en évaluant la fonction en un point particulier facile à calculer.
                </PointMethodo>
                <p className="mb-2"><strong>1. Limites :</strong></p>
                <p className="mb-1">Quand <LatexRenderer latex={"x \\to +\\infty"} /> : <LatexRenderer latex={"\\arctan(x) \\to \\pi/2"} /> et <LatexRenderer latex={"\\arctan(1/x) \\to \\arctan(0^+) = 0"} />. Donc <LatexRenderer latex={"f(x) \\to \\pi/2"} />.</p>
                <p className="mb-3">Quand <LatexRenderer latex={"x \\to -\\infty"} /> : <LatexRenderer latex={"\\arctan(x) \\to -\\pi/2"} /> et <LatexRenderer latex={"\\arctan(1/x) \\to 0"} />. Donc <LatexRenderer latex={"f(x) \\to -\\pi/2"} />.</p>
                <p className="mb-2"><strong>2. Dérivée nulle :</strong> Soit <LatexRenderer latex={"x \\in \\mathbb{R}^*"} />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"f'(x) = \\frac{1}{1+x^2} + \\frac{-1/x^2}{1+1/x^2} = \\frac{1}{1+x^2} - \\frac{1}{x^2 \\cdot \\frac{x^2+1}{x^2}} = \\frac{1}{1+x^2} - \\frac{1}{1+x^2} = 0"} />
                </div>
                <p>Ainsi <LatexRenderer latex={"f'(x) = 0"} /> sur chaque intervalle de connexité de <LatexRenderer latex={"\\mathbb{R}^*"} />, donc <LatexRenderer latex={"f"} /> est constante sur <LatexRenderer latex={"]0,+\\infty["} /> et sur <LatexRenderer latex={"]-\\infty,0["} />.</p>
                <p className="mb-2"><strong>3. Valeurs :</strong></p>
                <p className="mb-1">Sur <LatexRenderer latex={"]0,+\\infty["} /> : <LatexRenderer latex={"f(1) = \\pi/4 + \\pi/4 = \\pi/2"} />.</p>
                <p>Sur <LatexRenderer latex={"]-\\infty,0["} /> : <LatexRenderer latex={"f(-1) = -\\pi/4 + (-\\pi/4) = -\\pi/2"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"f(x) = \\pi/2"} /> sur <LatexRenderer latex={"]0,+\\infty["} /> et <LatexRenderer latex={"f(x) = -\\pi/2"} /> sur <LatexRenderer latex={"]-\\infty,0["} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Établir les inégalités suivantes par le théorème des accroissements finis :</p>
                <div className="space-y-3 mt-4 ml-4">
                  <p><strong>1.</strong> Pour tout <LatexRenderer latex={"x > -1"} /> : <LatexRenderer latex={"\\frac{x}{1 + x} \\leq \\ln(1 + x) \\leq x"} /></p>
                  <p><strong>2.</strong> Pour tout <LatexRenderer latex={"x > 0"} /> : <LatexRenderer latex={"\\frac{x}{1 + x^2} \\leq \\arctan(x) \\leq x"} /></p>
                  <p><strong>3.</strong> Pour tout <LatexRenderer latex={"x \\geq 0"} /> : <LatexRenderer latex={"e^x \\geq 1 + x + \\frac{x^2}{2}"} /></p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le théorème des accroissements finis (ou l'inégalité des accroissements finis) affirme que si <LatexRenderer latex={"f"} /> est dérivable sur <LatexRenderer latex={"[a,b]"} /> avec <LatexRenderer latex={"m \\leq f' \\leq M"} />, alors <LatexRenderer latex={"m(b-a) \\leq f(b)-f(a) \\leq M(b-a)"} />. On peut aussi procéder par étude de fonctions auxiliaires.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Posons <LatexRenderer latex={"\\phi(x) = \\ln(1+x) - x"} /> et <LatexRenderer latex={"\\psi(x) = x/(1+x) - \\ln(1+x)"} /> sur <LatexRenderer latex={"]-1,+\\infty["} />.</p>
                <p className="mb-1 ml-4"><LatexRenderer latex={"\\phi'(x) = \\frac{1}{1+x} - 1 = \\frac{-x}{1+x}"} />. Pour <LatexRenderer latex={"x > 0"} />, <LatexRenderer latex={"\\phi' < 0"} /> donc <LatexRenderer latex={"\\phi"} /> est décroissante. Or <LatexRenderer latex={"\\phi(0) = 0"} />, donc <LatexRenderer latex={"\\phi(x) \\leq 0"} /> : ainsi <LatexRenderer latex={"\\ln(1+x) \\leq x"} />.</p>
                <p className="mb-3 ml-4">De même, <LatexRenderer latex={"\\psi'(x) = \\frac{x}{(1+x)^2} \\geq 0"} /> pour <LatexRenderer latex={"x > 0"} /> et <LatexRenderer latex={"\\psi(0) = 0"} />, donc <LatexRenderer latex={"\\psi(x) \\geq 0"} /> : ainsi <LatexRenderer latex={"x/(1+x) \\leq \\ln(1+x)"} />.</p>
                <p className="mb-2"><strong>2.</strong> Posons <LatexRenderer latex={"g(x) = \\arctan(x) - x"} />. Alors <LatexRenderer latex={"g'(x) = \\frac{1}{1+x^2} - 1 = \\frac{-x^2}{1+x^2} \\leq 0"} />. Ainsi <LatexRenderer latex={"g"} /> est décroissante et <LatexRenderer latex={"g(0)=0"} />, d'où <LatexRenderer latex={"\\arctan(x) \\leq x"} />.</p>
                <p className="mb-3 ml-4">Posons <LatexRenderer latex={"h(x) = \\arctan(x) - x/(1+x^2)"} />. Alors <LatexRenderer latex={"h'(x) = \\frac{1}{1+x^2} - \\frac{1-x^2}{(1+x^2)^2} = \\frac{2x^2}{(1+x^2)^2} \\geq 0"} />. Or <LatexRenderer latex={"h(0) = 0"} />, donc <LatexRenderer latex={"h(x) \\geq 0"} /> : <LatexRenderer latex={"x/(1+x^2) \\leq \\arctan(x)"} />.</p>
                <p className="mb-2"><strong>3.</strong> Posons <LatexRenderer latex={"F(x) = e^x - 1 - x - x^2/2"} />. Alors <LatexRenderer latex={"F'(x) = e^x - 1 - x"} /> et <LatexRenderer latex={"F''(x) = e^x - 1 \\geq 0"} /> pour <LatexRenderer latex={"x \\geq 0"} />. Donc <LatexRenderer latex={"F'"} /> est croissante avec <LatexRenderer latex={"F'(0) = 0"} />, d'où <LatexRenderer latex={"F' \\geq 0"} />, puis <LatexRenderer latex={"F"} /> est croissante avec <LatexRenderer latex={"F(0) = 0"} />, d'où <LatexRenderer latex={"F(x) \\geq 0"} />.</p>
                <ConclusionBox>
                  Les trois inégalités sont établies par étude de fonctions auxiliaires dérivées.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Suites récurrentes et convergence par dérivation" />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f(x) = \\frac{3}{2} \\ln(x + 1)"} /> sur <LatexRenderer latex={"]-1, +\\infty["} />.</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p>1. Étudier les variations de <LatexRenderer latex={"f"} />.</p>
                  <p>2. Montrer qu'il existe un unique point fixe <LatexRenderer latex={"\\alpha \\in [1, 2]"} />.</p>
                  <p>3. Montrer que la suite <LatexRenderer latex={"(u_n)"} /> définie par <LatexRenderer latex={"u_0 \\in [1, 2]"} /> et <LatexRenderer latex={"u_{n+1} = f(u_n)"} /> converge vers <LatexRenderer latex={"\\alpha"} />.</p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer la convergence d'une suite récurrente <LatexRenderer latex={"u_{n+1} = f(u_n)"} /> vers un point fixe, on établit que <LatexRenderer latex={"f"} /> est une contraction sur un segment stable, puis on applique l'inégalité des accroissements finis.
                </PointMethodo>
                <Astuce>
                  Une fonction <LatexRenderer latex={"f"} /> est une contraction sur <LatexRenderer latex={"[a,b]"} /> si <LatexRenderer latex={"|f'(x)| \\leq k < 1"} /> pour tout <LatexRenderer latex={"x \\in [a,b]"} />. L'inégalité des accroissements finis donne alors <LatexRenderer latex={"|u_{n+1} - \\alpha| \\leq k |u_n - \\alpha|"} />.
                </Astuce>
                <p className="mb-2"><strong>1. Variations :</strong> <LatexRenderer latex={"f'(x) = \\frac{3}{2(x+1)} > 0"} /> sur <LatexRenderer latex={"]−1,+\\infty["} />. Donc <LatexRenderer latex={"f"} /> est strictement croissante.</p>
                <p className="mb-3">De plus <LatexRenderer latex={"f(1) = \\frac{3}{2}\\ln 2 \\approx 1{,}04 \\in [1,2]"} /> et <LatexRenderer latex={"f(2) = \\frac{3}{2}\\ln 3 \\approx 1{,}65 \\in [1,2]"} />. Donc <LatexRenderer latex={"f"} /> stabilise <LatexRenderer latex={"[1,2]"} />.</p>
                <p className="mb-2"><strong>2. Point fixe :</strong> Posons <LatexRenderer latex={"g(x) = f(x) - x = \\frac{3}{2}\\ln(x+1) - x"} />. Alors <LatexRenderer latex={"g(1) = \\frac{3}{2}\\ln 2 - 1 \\approx 0{,}04 > 0"} /> et <LatexRenderer latex={"g(2) = \\frac{3}{2}\\ln 3 - 2 \\approx -0{,}35 < 0"} />. Par le théorème des valeurs intermédiaires, <LatexRenderer latex={"g"} /> s'annule en un point <LatexRenderer latex={"\\alpha \\in ]1,2["} />. Comme <LatexRenderer latex={"g' = f' - 1 = \\frac{3}{2(x+1)} - 1 < 0"} /> pour <LatexRenderer latex={"x > 1/2"} />, <LatexRenderer latex={"g"} /> est décroissante sur <LatexRenderer latex={"[1,2]"} />, donc <LatexRenderer latex={"\\alpha"} /> est unique.</p>
                <p className="mb-2"><strong>3. Convergence :</strong> Sur <LatexRenderer latex={"[1,2]"} />, <LatexRenderer latex={"|f'(x)| = \\frac{3}{2(x+1)} \\leq \\frac{3}{4} < 1"} />. Par l'inégalité des accroissements finis appliquée entre <LatexRenderer latex={"u_n"} /> et <LatexRenderer latex={"\\alpha"} /> (tous deux dans <LatexRenderer latex={"[1,2]"} /> par stabilité) :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"|u_{n+1} - \\alpha| = |f(u_n) - f(\\alpha)| \\leq \\frac{3}{4}|u_n - \\alpha|"} />
                </div>
                <p>Par récurrence, <LatexRenderer latex={"|u_n - \\alpha| \\leq (3/4)^n |u_0 - \\alpha| \\to 0"} />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(u_n)"} /> converge vers <LatexRenderer latex={"\\alpha"} /> avec vitesse géométrique de raison <LatexRenderer latex={"3/4"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Montrer que la série <LatexRenderer latex={"\\sum_{k=2}^{+\\infty} \\frac{1}{k^2}"} /> converge en encadrant <LatexRenderer latex={"\\frac{1}{k^2}"} /> par <LatexRenderer latex={"f(k-1)-f(k)"} /> avec <LatexRenderer latex={"f(x) = -1/x"} />, et en en déduisant une somme majorante télescopique.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La comparaison série-intégrale via l'inégalité des accroissements finis permet de majorer le terme général <LatexRenderer latex={"1/k^2"} /> par un accroissement de fonction, dont la somme télescopique est bornée.
                </PointMethodo>
                <Astuce>
                  Appliquer l'inégalité des accroissements finis à <LatexRenderer latex={"f(x) = -1/x"} /> sur <LatexRenderer latex={"[k-1, k]"} /> : <LatexRenderer latex={"|f(k)-f(k-1)| \\leq \\sup_{t \\in [k-1,k]} |f'(t)| \\cdot 1"} />, et <LatexRenderer latex={"f'(t) = 1/t^2 \\leq 1/(k-1)^2"} />.
                </Astuce>
                <p className="mb-2">Soit <LatexRenderer latex={"k \\geq 2"} />. La fonction <LatexRenderer latex={"f(x) = -1/x"} /> est de dérivée <LatexRenderer latex={"f'(x) = 1/x^2"} /> croissante. Par l'inégalité des accroissements finis sur <LatexRenderer latex={"[k-1, k]"} /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"f(k) - f(k-1) = \\int_{k-1}^k \\frac{1}{t^2} dt"} />
                </div>
                <p>Or sur <LatexRenderer latex={"[k-1, k]"} />, <LatexRenderer latex={"\\frac{1}{t^2} \\geq \\frac{1}{k^2}"} /> (car <LatexRenderer latex={"t \\leq k"} />). Donc :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\frac{1}{k^2} \\leq \\int_{k-1}^k \\frac{1}{t^2} dt = \\frac{1}{k-1} - \\frac{1}{k}"} />
                </div>
                <p>Ainsi :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=2}^{N} \\frac{1}{k^2} \\leq \\sum_{k=2}^{N}\\left(\\frac{1}{k-1}-\\frac{1}{k}\\right) = 1 - \\frac{1}{N} \\leq 1"} />
                </div>
                <ConclusionBox>
                  La série <LatexRenderer latex={"\\sum_{k=2}^{+\\infty} \\frac{1}{k^2}"} /> est majorée par une suite télescopique convergente, donc elle converge. La série de Riemann <LatexRenderer latex={"\\sum 1/k^2"} /> converge (cas <LatexRenderer latex={"\\alpha = 2 > 1"} />).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Théorème de Rolle et applications" />

          <ExerciseCard
            id="ex5"
            title="Application du théorème de Rolle"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"P \\in \\mathbb{R}[X]"} /> un polynôme non constant ayant <LatexRenderer latex={"k"} /> racines distinctes dans <LatexRenderer latex={"\\mathbb{R}"} />.</p>
                <p>Démontrer que <LatexRenderer latex={"P'"} /> a au moins <LatexRenderer latex={"k - 1"} /> racines distinctes dans <LatexRenderer latex={"\\mathbb{R}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le théorème de Rolle affirme que si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"[a, b]"} />, dérivable sur <LatexRenderer latex={"]a, b["} />, et que <LatexRenderer latex={"f(a) = f(b)"} />, alors il existe <LatexRenderer latex={"c \\in ]a, b["} /> tel que <LatexRenderer latex={"f'(c) = 0"} />. L'application au comptage de racines d'un polynôme repose sur le fait qu'entre deux racines de <LatexRenderer latex={"P"} />, il existe au moins une racine de <LatexRenderer latex={"P'"} />.
                </PointMethodo>
                <p>Soient <LatexRenderer latex={"\\alpha_1 < \\alpha_2 < \\cdots < \\alpha_k"} /> les <LatexRenderer latex={"k"} /> racines réelles distinctes de <LatexRenderer latex={"P"} />. Pour <LatexRenderer latex={"i \\in \\{1, \\ldots, k - 1\\}"} />, considérons <LatexRenderer latex={"P"} /> sur <LatexRenderer latex={"[\\alpha_i, \\alpha_{i+1}]"} />.</p>
                <p className="mt-2">Or <LatexRenderer latex={"P"} /> est polynomial, donc continu sur <LatexRenderer latex={"[\\alpha_i, \\alpha_{i+1}]"} /> et dérivable sur <LatexRenderer latex={"]\\alpha_i, \\alpha_{i+1}["} />. De plus <LatexRenderer latex={"P(\\alpha_i) = P(\\alpha_{i+1}) = 0"} />. D'après le théorème de Rolle, il existe <LatexRenderer latex={"\\beta_i \\in ]\\alpha_i, \\alpha_{i+1}["} /> tel que <LatexRenderer latex={"P'(\\beta_i) = 0"} />.</p>
                <Astuce>
                  Les <LatexRenderer latex={"\\beta_i"} /> ainsi construits sont deux à deux distincts car ils appartiennent à des intervalles ouverts disjoints <LatexRenderer latex={"]\\alpha_i, \\alpha_{i+1}["} />.
                </Astuce>
                <p className="mt-2">D'où on obtient <LatexRenderer latex={"k - 1"} /> racines distinctes <LatexRenderer latex={"\\beta_1, \\ldots, \\beta_{k-1}"} /> de <LatexRenderer latex={"P'"} />.</p>
                <ConclusionBox>
                  Si <LatexRenderer latex={"P \\in \\mathbb{R}[X]"} /> a <LatexRenderer latex={"k"} /> racines réelles distinctes, alors <LatexRenderer latex={"P'"} /> a au moins <LatexRenderer latex={"k - 1"} /> racines réelles distinctes (théorème de Rolle).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 4 — Formule de Leibniz" />

          <ExerciseCard
            id="ex6"
            title="Calcul d'une dérivée n-ième par Leibniz"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f : \\mathbb{R} \\to \\mathbb{R}"} /> définie par <LatexRenderer latex={"f(x) = x^2 e^x"} />.</p>
                <p>Calculer <LatexRenderer latex={"f^{(n)}(x)"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La formule de Leibniz pour la dérivée n-ième d'un produit est <LatexRenderer latex={"(uv)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(k)} v^{(n-k)}"} />. Elle est efficace quand un des deux facteurs a un nombre fini de dérivées non nulles (ici <LatexRenderer latex={"u(x) = x^2"} /> dont la dérivée 3-ième est nulle).
                </PointMethodo>
                <p>Posons <LatexRenderer latex={"u(x) = x^2"} /> et <LatexRenderer latex={"v(x) = e^x"} />. Or <LatexRenderer latex={"v^{(j)}(x) = e^x"} /> pour tout <LatexRenderer latex={"j \\ge 0"} />, et <LatexRenderer latex={"u'(x) = 2x"} />, <LatexRenderer latex={"u''(x) = 2"} />, <LatexRenderer latex={"u^{(k)}(x) = 0"} /> pour <LatexRenderer latex={"k \\ge 3"} />.</p>
                <Astuce>
                  Quand un facteur est polynomial de degré <LatexRenderer latex={"d"} />, ses dérivées d'ordre <LatexRenderer latex={"\\ge d+1"} /> sont nulles, donc la somme de Leibniz se réduit à au plus <LatexRenderer latex={"d+1"} /> termes.
                </Astuce>
                <p className="mt-2">D'où, par la formule de Leibniz :</p>
                <LatexRenderer latex={"f^{(n)}(x) = \\sum_{k=0}^{2} \\binom{n}{k} u^{(k)}(x) v^{(n-k)}(x) = \\binom{n}{0} x^2 e^x + \\binom{n}{1} (2x) e^x + \\binom{n}{2} \\cdot 2 e^x."} />
                <p className="mt-2">Soit, pour <LatexRenderer latex={"n \\ge 2"} /> :</p>
                <LatexRenderer latex={"f^{(n)}(x) = e^x \\bigl(x^2 + 2nx + n(n-1)\\bigr)."} />
                <p className="mt-2">Pour <LatexRenderer latex={"n = 0"} /> : <LatexRenderer latex={"f^{(0)}(x) = x^2 e^x"} />. Pour <LatexRenderer latex={"n = 1"} /> : <LatexRenderer latex={"f'(x) = (x^2 + 2x) e^x"} /> (cohérent avec la formule).</p>
                <ConclusionBox>
                  <LatexRenderer latex={"f^{(n)}(x) = e^x \\bigl(x^2 + 2nx + n(n-1)\\bigr)"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Inégalité des accroissements finis — application"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f : [0, 1] \\to \\mathbb{R}"} /> de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> avec <LatexRenderer latex={"f(0) = 0"} /> et <LatexRenderer latex={"|f'(x)| \\le M"} /> pour tout <LatexRenderer latex={"x \\in [0, 1]"} />.</p>
                <p>Démontrer que <LatexRenderer latex={"\\left|\\int_0^1 f(t)\\,dt\\right| \\le M/2"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité des accroissements finis donne <LatexRenderer latex={"|f(b) - f(a)| \\le M(b - a)"} /> dès que <LatexRenderer latex={"|f'| \\le M"} /> sur <LatexRenderer latex={"[a, b]"} />. Combinée à une intégration, elle donne des bornes précises sur des intégrales.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"t \\in [0, 1]"} />. Or <LatexRenderer latex={"f(0) = 0"} /> et <LatexRenderer latex={"|f'| \\le M"} /> sur <LatexRenderer latex={"[0, t]"} />. Par l'inégalité des accroissements finis :</p>
                <LatexRenderer latex={"|f(t)| = |f(t) - f(0)| \\le M \\cdot t."} />
                <p className="mt-2">D'où, par croissance de l'intégrale :</p>
                <LatexRenderer latex={"\\left|\\int_0^1 f(t)\\,dt\\right| \\le \\int_0^1 |f(t)|\\,dt \\le \\int_0^1 M t\\,dt = M \\cdot \\frac{1}{2} = \\frac{M}{2}."} />
                <Astuce>
                  Cette estimation utilise deux outils : l'inégalité des accroissements finis (point ⇒ borne ponctuelle) et la croissance de l'intégrale (borne ponctuelle ⇒ borne intégrale).
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex={"\\left|\\int_0^1 f(t)\\,dt\\right| \\le M/2"} />, avec égalité ssi <LatexRenderer latex={"|f'(t)| = M"} /> p.p. sur <LatexRenderer latex={"[0, 1]"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Étude approfondie de fonctions" />

          <ExerciseCard
            id="ex8"
            title="Théorème de la bijection et fonction réciproque"
            difficulty="Niveau: Concours"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f : \\mathbb{R} \\to \\mathbb{R}"} /> définie par <LatexRenderer latex={"f(x) = x + e^x"} />.</p>
                <p>1. Démontrer que <LatexRenderer latex={"f"} /> est une bijection de <LatexRenderer latex={"\\mathbb{R}"} /> sur <LatexRenderer latex={"\\mathbb{R}"} />.</p>
                <p>2. Soit <LatexRenderer latex={"g = f^{-1}"} />. Calculer <LatexRenderer latex={"g'(1)"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le théorème de la bijection s'applique à une fonction continue strictement monotone sur un intervalle : elle réalise une bijection sur son image. La dérivée de la réciproque est donnée par <LatexRenderer latex={"g'(y) = 1/f'(g(y))"} />, valable là où <LatexRenderer latex={"f'(g(y)) \\ne 0"} />.
                </PointMethodo>
                <p><strong>1. Bijectivité.</strong> Soit <LatexRenderer latex={"f \\in \\mathcal{C}^\\infty(\\mathbb{R})"} />. Or <LatexRenderer latex={"f'(x) = 1 + e^x > 0"} /> pour tout <LatexRenderer latex={"x \\in \\mathbb{R}"} />, donc <LatexRenderer latex={"f"} /> est strictement croissante.</p>
                <p className="mt-2">De plus, <LatexRenderer latex={"\\lim_{x \\to -\\infty} f(x) = -\\infty + 0 = -\\infty"} /> et <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x) = +\\infty"} />. Comme <LatexRenderer latex={"f"} /> est continue, par le théorème de la bijection, <LatexRenderer latex={"f"} /> réalise une bijection de <LatexRenderer latex={"\\mathbb{R}"} /> sur <LatexRenderer latex={"f(\\mathbb{R}) = \\mathbb{R}"} />.</p>
                <p className="mt-2"><strong>2. Calcul de g'(1).</strong> On cherche <LatexRenderer latex={"x_0"} /> tel que <LatexRenderer latex={"f(x_0) = 1"} />, soit <LatexRenderer latex={"x_0 + e^{x_0} = 1"} />.</p>
                <Astuce>
                  Test rapide : <LatexRenderer latex={"f(0) = 0 + 1 = 1"} />. Donc <LatexRenderer latex={"x_0 = 0"} />.
                </Astuce>
                <p className="mt-2">D'où <LatexRenderer latex={"g(1) = 0"} />. Or <LatexRenderer latex={"f'(0) = 1 + e^0 = 2 \\ne 0"} />. Par le théorème de dérivation de la réciproque :</p>
                <LatexRenderer latex={"g'(1) = \\frac{1}{f'(g(1))} = \\frac{1}{f'(0)} = \\frac{1}{2}."} />
                <ConclusionBox>
                  <LatexRenderer latex={"f"} /> est une bijection <LatexRenderer latex={"\\mathbb{R} \\to \\mathbb{R}"} /> ; <LatexRenderer latex={"g'(1) = 1/2"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Inégalité et convexité" />

          <ExerciseCard
            id="ex9"
            title="Inégalité de Young par convexité"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soient <LatexRenderer latex={"p, q > 1"} /> avec <LatexRenderer latex={"1/p + 1/q = 1"} /> (exposants conjugués).</p>
                <p>Démontrer l'inégalité de Young : pour tous <LatexRenderer latex={"a, b \\ge 0"} />, <LatexRenderer latex={"ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité de Young se démontre par concavité de la fonction <LatexRenderer latex={"\\ln"} />. Plus généralement : si <LatexRenderer latex={"\\varphi"} /> est concave et <LatexRenderer latex={"\\lambda \\in [0, 1]"} />, alors <LatexRenderer latex={"\\varphi(\\lambda x + (1-\\lambda) y) \\ge \\lambda \\varphi(x) + (1-\\lambda) \\varphi(y)"} />.
                </PointMethodo>
                <p><strong>Cas trivial.</strong> Si <LatexRenderer latex={"a = 0"} /> ou <LatexRenderer latex={"b = 0"} />, l'inégalité est triviale (membre de gauche nul, membre de droite positif).</p>
                <p className="mt-2"><strong>Cas <LatexRenderer latex={"a, b > 0"} />.</strong> Soit <LatexRenderer latex={"\\varphi : x \\mapsto \\ln(x)"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} />. Or <LatexRenderer latex={"\\varphi''(x) = -1/x^2 < 0"} />, donc <LatexRenderer latex={"\\varphi"} /> est strictement concave.</p>
                <p className="mt-2">Posons <LatexRenderer latex={"\\lambda = 1/p"} />, donc <LatexRenderer latex={"1 - \\lambda = 1/q"} /> (par hypothèse <LatexRenderer latex={"1/p + 1/q = 1"} />). Soient <LatexRenderer latex={"x = a^p"} /> et <LatexRenderer latex={"y = b^q"} />.</p>
                <p className="mt-2">Par concavité de <LatexRenderer latex={"\\ln"} /> :</p>
                <LatexRenderer latex={"\\ln\\!\\left(\\frac{a^p}{p} + \\frac{b^q}{q}\\right) = \\ln\\!\\left(\\frac{1}{p} a^p + \\frac{1}{q} b^q\\right) \\ge \\frac{1}{p} \\ln(a^p) + \\frac{1}{q} \\ln(b^q)."} />
                <Astuce>
                  La convexité (ou concavité) appliquée à <LatexRenderer latex={"\\ln"} /> fournit des inégalités multiplicatives à partir de moyennes pondérées — c'est le principe-clé.
                </Astuce>
                <p className="mt-2">D'où, en simplifiant :</p>
                <LatexRenderer latex={"\\ln\\!\\left(\\frac{a^p}{p} + \\frac{b^q}{q}\\right) \\ge \\ln(a) + \\ln(b) = \\ln(ab)."} />
                <p className="mt-2">Or <LatexRenderer latex={"\\ln"} /> est strictement croissante, donc :</p>
                <LatexRenderer latex={"\\frac{a^p}{p} + \\frac{b^q}{q} \\ge ab."} />
                <ConclusionBox>
                  Inégalité de Young : <LatexRenderer latex={"ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}"} /> pour <LatexRenderer latex={"a, b \\ge 0"} /> et <LatexRenderer latex={"1/p + 1/q = 1"} /> avec <LatexRenderer latex={"p, q > 1"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre6DerivationExercicesPage;
