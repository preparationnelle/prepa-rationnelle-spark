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

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre6DerivationExercicesPage;
