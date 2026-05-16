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

const Chapitre5FonctionsUneVariableReelleExercicesPage = () => {
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
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Exercices sur les domaines de définition, la parité, les variations, les limites et la continuité."
      slug="fonctions-d-une-variable-reelle"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
      nextChapter={{
        slug: "continuite-derivabilite",
        title: "Continuité & Dérivabilité"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Domaines et compositions" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1 - Compositions"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Déterminer le domaine et l'expression de <LatexRenderer latex={"f \\circ g"} /> et <LatexRenderer latex={"g \\circ f"} /> :</p>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> <LatexRenderer latex={"f(x) = 2x^2 - x,\\ g(x) = 3x + 2"} /></p>
                  <p><strong>2.</strong> <LatexRenderer latex={"f(x) = 1 - x^3,\\ g(x) = 1/x"} /></p>
                  <p><strong>3.</strong> <LatexRenderer latex={"f(x) = \\sqrt{2x + 3},\\ g(x) = x^2 + 2"} /></p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer <LatexRenderer latex={"(f \\circ g)(x) = f(g(x))"} />, on substitue l'expression de <LatexRenderer latex={"g(x)"} /> dans <LatexRenderer latex={"f"} />. Le domaine de <LatexRenderer latex={"f \\circ g"} /> est l'ensemble des <LatexRenderer latex={"x"} /> tels que <LatexRenderer latex={"g(x)"} /> soit défini et appartienne au domaine de <LatexRenderer latex={"f"} />.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Les deux fonctions sont des polynômes définis sur <LatexRenderer latex={"\\mathbb{R}"} />.</p>
                <p className="mb-1 ml-4"><LatexRenderer latex={"(f \\circ g)(x) = f(3x+2) = 2(3x+2)^2 - (3x+2) = 18x^2 + 21x + 6"} /></p>
                <p className="mb-3 ml-4"><LatexRenderer latex={"(g \\circ f)(x) = g(2x^2-x) = 3(2x^2-x)+2 = 6x^2 - 3x + 2"} /></p>
                <p className="mb-2"><strong>2.</strong> <LatexRenderer latex={"g"} /> est définie sur <LatexRenderer latex={"\\mathbb{R}^*"} />.</p>
                <p className="mb-1 ml-4"><LatexRenderer latex={"(f \\circ g)(x) = 1 - (1/x)^3 = 1 - 1/x^3"} /> sur <LatexRenderer latex={"\\mathbb{R}^*"} />.</p>
                <p className="mb-3 ml-4"><LatexRenderer latex={"(g \\circ f)(x) = \\frac{1}{1-x^3}"} /> sur <LatexRenderer latex={"\\mathbb{R} \\setminus \\{1\\}"} />.</p>
                <p className="mb-2"><strong>3.</strong> <LatexRenderer latex={"f"} /> est définie sur <LatexRenderer latex={"[-3/2,+\\infty["} />.</p>
                <p className="mb-1 ml-4"><LatexRenderer latex={"(f \\circ g)(x) = \\sqrt{2(x^2+2)+3} = \\sqrt{2x^2+7}"} /> sur <LatexRenderer latex={"\\mathbb{R}"} /> (car <LatexRenderer latex={"2x^2+7 \\geq 7 > 0"} />).</p>
                <p className="ml-4"><LatexRenderer latex={"(g \\circ f)(x) = (\\sqrt{2x+3})^2 + 2 = 2x+5"} /> sur <LatexRenderer latex={"[-3/2,+\\infty["} />.</p>
                <ConclusionBox>
                  Les trois compositions sont calculées avec leur domaine respectif.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2 - Parité"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Déterminer le domaine et la parité de :</p>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> <LatexRenderer latex={"f(x) = x + \\ln|x - 1| - \\ln|x + 1|"} /></p>
                  <p><strong>2.</strong> <LatexRenderer latex={"g(x) = x \\frac{e^x - 1}{e^x + 1}"} /></p>
                  <p><strong>3.</strong> <LatexRenderer latex={"h(x) = x^2 + x + 1"} /></p>
                  <p><strong>4.</strong> <LatexRenderer latex={"i(x) = \\cos(5x) - \\ln(1 - x^2)"} /></p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Une fonction est paire si son domaine est symétrique par rapport à 0 et si <LatexRenderer latex={"f(-x) = f(x)"} /> pour tout <LatexRenderer latex={"x"} /> du domaine. Elle est impaire si <LatexRenderer latex={"f(-x) = -f(x)"} />.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Domaine : <LatexRenderer latex={"\\mathbb{R} \\setminus \\{\\pm 1\\}"} /> (symétrique). On calcule <LatexRenderer latex={"f(-x) = -x + \\ln|-x-1| - \\ln|-x+1| = -x + \\ln|x+1| - \\ln|x-1| = -f(x)"} />. Ainsi <LatexRenderer latex={"f"} /> est impaire.</p>
                <p className="mb-2"><strong>2.</strong> Domaine : <LatexRenderer latex={"\\mathbb{R}"} /> (symétrique). On vérifie <LatexRenderer latex={"g(-x) = (-x)\\frac{e^{-x}-1}{e^{-x}+1}"} />. Multiplier numérateur et dénominateur par <LatexRenderer latex={"e^x"} /> donne <LatexRenderer latex={"g(-x) = (-x)\\frac{1-e^x}{1+e^x} = x\\frac{e^x-1}{e^x+1} = g(x)"} />. Ainsi <LatexRenderer latex={"g"} /> est paire.</p>
                <p className="mb-2"><strong>3.</strong> Domaine : <LatexRenderer latex={"\\mathbb{R}"} />. <LatexRenderer latex={"h(-x) = x^2 - x + 1 \\neq h(x)"} /> et <LatexRenderer latex={"h(-x) \\neq -h(x)"} /> en général (par exemple <LatexRenderer latex={"h(1) = 3 \\neq h(-1) = 1"} />). Ni paire ni impaire.</p>
                <p className="mb-2"><strong>4.</strong> Domaine : <LatexRenderer latex={"]-1,1["} /> (symétrique). <LatexRenderer latex={"i(-x) = \\cos(-5x) - \\ln(1-x^2) = \\cos(5x) - \\ln(1-x^2) = i(x)"} />. Ainsi <LatexRenderer latex={"i"} /> est paire.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"f"} /> impaire ; <LatexRenderer latex={"g"} /> et <LatexRenderer latex={"i"} /> paires ; <LatexRenderer latex={"h"} /> ni paire ni impaire.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Équations et inéquations" />

          <ExerciseCard
            id="ex3"
            title="Exercice 3 - Équation paramétrique"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(E_m) : (m - 1)x^2 + 2mx + m + 2 = 0"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Résoudre <LatexRenderer latex={"(E_0)"} /> et <LatexRenderer latex={"(E_1)"} />.</li>
                  <li>Pour quel <LatexRenderer latex={"m"} />, <LatexRenderer latex={"x=0"} /> est-il solution ?</li>
                  <li>Discuter du nombre de solutions selon <LatexRenderer latex={"m"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Face à une équation paramétrique, on traite séparément les cas où le coefficient directeur s'annule (l'équation devient linéaire), puis on calcule le discriminant dans le cas quadratique.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Pour <LatexRenderer latex={"m = 0"} /> : l'équation devient <LatexRenderer latex={"-x^2 + 2 = 0"} />, d'où <LatexRenderer latex={"x = \\pm\\sqrt{2}"} />.</p>
                <p className="mb-3">Pour <LatexRenderer latex={"m = 1"} /> : l'équation devient <LatexRenderer latex={"2x + 3 = 0"} />, d'où <LatexRenderer latex={"x = -3/2"} />.</p>
                <p className="mb-2"><strong>2.</strong> <LatexRenderer latex={"x = 0"} /> est solution si et seulement si <LatexRenderer latex={"(m-1) \\cdot 0 + 2m \\cdot 0 + m + 2 = 0"} />, soit <LatexRenderer latex={"m + 2 = 0"} />, donc <LatexRenderer latex={"m = -2"} />.</p>
                <p className="mb-2"><strong>3.</strong> Pour <LatexRenderer latex={"m \\neq 1"} />, c'est une équation du second degré. Son discriminant vaut :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\Delta = (2m)^2 - 4(m-1)(m+2) = 4m^2 - 4(m^2+m-2) = -4m + 8 = 4(2-m)"} />
                </div>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Si <LatexRenderer latex={"m < 2"} /> et <LatexRenderer latex={"m \\neq 1"} /> : <LatexRenderer latex={"\\Delta > 0"} />, deux solutions distinctes.</li>
                  <li>Si <LatexRenderer latex={"m = 2"} /> : <LatexRenderer latex={"\\Delta = 0"} />, une solution double.</li>
                  <li>Si <LatexRenderer latex={"m > 2"} /> : <LatexRenderer latex={"\\Delta < 0"} />, aucune solution réelle.</li>
                  <li>Si <LatexRenderer latex={"m = 1"} /> : équation linéaire, une solution.</li>
                </ul>
                <ConclusionBox>
                  La discussion complète du nombre de solutions est menée selon le signe de <LatexRenderer latex={"\\Delta = 4(2-m)"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4 - Équations Exp/Ln"
            difficulty="Niveau: Concours"
            content={
              <div>
                <p>Résoudre :</p>
                <div className="ml-4 mt-2 grid grid-cols-1 gap-2">
                  <p>1. <LatexRenderer latex={"e^{x^2 + x - 1} = 1"} /></p>
                  <p>2. <LatexRenderer latex={"2e^{2x} - e^x - 1 = 0"} /></p>
                  <p>3. <LatexRenderer latex={"\\ln(e^{x+1}) = e^{x+1} + x"} /></p>
                  <p>4. <LatexRenderer latex={"e^{\\ln(x^2 + 1)} - \\ln(e^{1 - x^2}) = 1/2"} /></p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour les équations faisant intervenir <LatexRenderer latex={"e^x"} /> et <LatexRenderer latex={"\\ln"} />, on utilise les simplifications <LatexRenderer latex={"e^{\\ln u} = u"} /> (pour <LatexRenderer latex={"u > 0"} />) et <LatexRenderer latex={"\\ln(e^u) = u"} />, puis on ramène à une équation polynomiale par le changement <LatexRenderer latex={"X = e^x"} />.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> <LatexRenderer latex={"e^{x^2+x-1} = e^0"} />, d'où <LatexRenderer latex={"x^2+x-1 = 0"} />. Discriminant <LatexRenderer latex={"\\Delta = 5"} />. Solutions : <LatexRenderer latex={"x = \\frac{-1 \\pm \\sqrt{5}}{2}"} />.</p>
                <p className="mb-2"><strong>2.</strong> Soit <LatexRenderer latex={"X = e^x > 0"} />. L'équation devient <LatexRenderer latex={"2X^2 - X - 1 = 0"} />, soit <LatexRenderer latex={"(2X+1)(X-1) = 0"} />. D'où <LatexRenderer latex={"X = 1"} /> (car <LatexRenderer latex={"X = -1/2 < 0"} /> est impossible). Ainsi <LatexRenderer latex={"e^x = 1"} />, donc <LatexRenderer latex={"x = 0"} />.</p>
                <p className="mb-2"><strong>3.</strong> <LatexRenderer latex={"\\ln(e^{x+1}) = x+1"} />. Donc l'équation est <LatexRenderer latex={"x+1 = e^{x+1}+x"} />, soit <LatexRenderer latex={"e^{x+1} = 1"} />, donc <LatexRenderer latex={"x = -1"} />.</p>
                <p className="mb-2"><strong>4.</strong> <LatexRenderer latex={"e^{\\ln(x^2+1)} = x^2+1"} /> et <LatexRenderer latex={"\\ln(e^{1-x^2}) = 1-x^2"} />. L'équation devient <LatexRenderer latex={"(x^2+1) - (1-x^2) = 1/2"} />, soit <LatexRenderer latex={"2x^2 = 1/2"} />, d'où <LatexRenderer latex={"x = \\pm 1/2"} />.</p>
                <ConclusionBox>
                  (1) <LatexRenderer latex={"x = \\frac{-1\\pm\\sqrt{5}}{2}"} /> ; (2) <LatexRenderer latex={"x = 0"} /> ; (3) <LatexRenderer latex={"x = -1"} /> ; (4) <LatexRenderer latex={"x = \\pm 1/2"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 - Inéquations"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Résoudre :</p>
                <p className="mt-2 ml-4">1. <LatexRenderer latex={"e^{1/x} \\geq e"} /> ; 2. <LatexRenderer latex={"e^{2x} \\leq e^x"} /> ; 3. <LatexRenderer latex={"e^{2x}e^{x^2} < 1"} /></p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La fonction exponentielle est strictement croissante : <LatexRenderer latex={"e^a \\leq e^b \\iff a \\leq b"} />. On se ramène donc à une inéquation sur les exposants, en précisant le signe du dénominateur en cas de fraction.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> <LatexRenderer latex={"e^{1/x} \\geq e^1 \\iff 1/x \\geq 1 \\iff \\frac{1-x}{x} \\geq 0"} />. Tableau de signes : la solution est <LatexRenderer latex={"]0, 1]"} />.</p>
                <p className="mb-2"><strong>2.</strong> <LatexRenderer latex={"e^{2x} \\leq e^x \\iff 2x \\leq x \\iff x \\leq 0"} />. Solution : <LatexRenderer latex={"]-\\infty, 0]"} />.</p>
                <p className="mb-2"><strong>3.</strong> <LatexRenderer latex={"e^{2x+x^2} < e^0 \\iff 2x+x^2 < 0 \\iff x(x+2) < 0"} />. Solution : <LatexRenderer latex={"]-2, 0["} />.</p>
                <ConclusionBox>
                  (1) <LatexRenderer latex={"]0,1]"} /> ; (2) <LatexRenderer latex={"]-\\infty,0]"} /> ; (3) <LatexRenderer latex={"]-2,0["} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Étude de fonctions et théorèmes" />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 - Partie entière"
            difficulty="Niveau: Difficile"
            content={
              <p>Montrer que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> et tout <LatexRenderer latex={"x \\in \\mathbb{R}"} />, <LatexRenderer latex={"\\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = \\lfloor x \\rfloor"} />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer une égalité de la forme <LatexRenderer latex={"\\lfloor T \\rfloor = k"} />, on utilise la caractérisation <LatexRenderer latex={"k \\leq T < k+1"} />. On pose <LatexRenderer latex={"k = \\lfloor x \\rfloor"} /> et on établit l'encadrement de <LatexRenderer latex={"\\frac{\\lfloor nx \\rfloor}{n}"} />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> et <LatexRenderer latex={"x \\in \\mathbb{R}"} />. Posons <LatexRenderer latex={"k = \\lfloor x \\rfloor"} />, de sorte que <LatexRenderer latex={"k \\leq x < k+1"} />.</p>
                <p>En multipliant par <LatexRenderer latex={"n > 0"} /> : <LatexRenderer latex={"nk \\leq nx < n(k+1)"} />. D'où <LatexRenderer latex={"nk \\leq \\lfloor nx \\rfloor < n(k+1)"} /> (car <LatexRenderer latex={"nk \\in \\mathbb{Z}"} />).</p>
                <p>En divisant par <LatexRenderer latex={"n"} /> : <LatexRenderer latex={"k \\leq \\frac{\\lfloor nx \\rfloor}{n} < k+1"} />.</p>
                <p>Or <LatexRenderer latex={"k \\in \\mathbb{Z}"} />, donc par définition de la partie entière : <LatexRenderer latex={"\\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = k = \\lfloor x \\rfloor"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"\\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = \\lfloor x \\rfloor"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> et tout <LatexRenderer latex={"x \\in \\mathbb{R}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7 - Étude complète"
            difficulty="Niveau: Difficile"
            content={
              <p>Étudier <LatexRenderer latex={"g(x) = \\frac{\\sqrt{x}}{\\ln x}"} /> sur <LatexRenderer latex={"]1, +\\infty["} />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une étude complète de fonction, on calcule la dérivée, on détermine son signe (tableau de variations), on cherche les extrema et les comportements aux bornes.
                </PointMethodo>
                <p className="mb-2">Soit <LatexRenderer latex={"x \\in ]1,+\\infty["} />. La fonction est bien définie car <LatexRenderer latex={"x > 0"} /> et <LatexRenderer latex={"\\ln x > 0"} />. On calcule la dérivée par la règle du quotient :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"g'(x) = \\frac{\\frac{1}{2\\sqrt{x}} \\ln x - \\sqrt{x} \\cdot \\frac{1}{x}}{(\\ln x)^2} = \\frac{\\ln x - 2}{2\\sqrt{x}(\\ln x)^2}"} />
                </div>
                <p>Or le dénominateur est positif sur <LatexRenderer latex={"]1,+\\infty["} />. Ainsi <LatexRenderer latex={"g'(x) < 0"} /> si <LatexRenderer latex={"\\ln x < 2"} /> (c'est-à-dire <LatexRenderer latex={"x < e^2"} />) et <LatexRenderer latex={"g'(x) > 0"} /> si <LatexRenderer latex={"x > e^2"} />.</p>
                <p>Donc <LatexRenderer latex={"g"} /> est décroissante sur <LatexRenderer latex={"]1, e^2["} /> et croissante sur <LatexRenderer latex={"]e^2, +\\infty["} />, avec un minimum en <LatexRenderer latex={"x = e^2"} /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"g(e^2) = \\frac{\\sqrt{e^2}}{\\ln(e^2)} = \\frac{e}{2}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"g"} /> admet un minimum global en <LatexRenderer latex={"e^2"} /> de valeur <LatexRenderer latex={"e/2"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9 - Fonction constante"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Montrer que <LatexRenderer latex={"h(x) = \\arctan(x) + \\arctan(1/x)"} /> est constante sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> et sur <LatexRenderer latex={"\\mathbb{R}_-^*"} />. Calculer les valeurs.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une fonction est constante sur un intervalle, on montre que sa dérivée est nulle sur cet intervalle, puis on calcule la valeur en un point particulier.
                </PointMethodo>
                <p className="mb-2">Soit <LatexRenderer latex={"x \\in \\mathbb{R}^*"} />. On calcule la dérivée :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"h'(x) = \\frac{1}{1+x^2} + \\frac{-1/x^2}{1+(1/x)^2} = \\frac{1}{1+x^2} - \\frac{1}{x^2+1} = 0"} />
                </div>
                <p>Ainsi <LatexRenderer latex={"h"} /> est constante sur chaque intervalle connexe de son domaine.</p>
                <p className="mb-1">Sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> : <LatexRenderer latex={"h(1) = \\arctan(1) + \\arctan(1) = \\pi/4 + \\pi/4 = \\pi/2"} />.</p>
                <p>Sur <LatexRenderer latex={"\\mathbb{R}_-^*"} /> : <LatexRenderer latex={"h(-1) = \\arctan(-1) + \\arctan(-1) = -\\pi/4 - \\pi/4 = -\\pi/2"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"\\arctan(x) + \\arctan(1/x) = \\pi/2"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> et <LatexRenderer latex={"= -\\pi/2"} /> sur <LatexRenderer latex={"\\mathbb{R}_-^*"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex11"
            title="Exercice 11 - Décomposition unique"
            difficulty="Niveau: Difficile"
            content={
              <p>Montrer que toute fonction <LatexRenderer latex={"f : \\mathbb{R} \\to \\mathbb{R}"} /> se décompose de manière unique en somme d'une fonction paire et d'une fonction impaire.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  On exhibe explicitement la décomposition en posant <LatexRenderer latex={"f_p = \\frac{f+f(-\\cdot)}{2}"} /> et <LatexRenderer latex={"f_i = \\frac{f-f(-\\cdot)}{2}"} />, puis on montre l'unicité par un argument d'algèbre linéaire.
                </PointMethodo>
                <Astuce>
                  La somme d'une fonction paire et d'une fonction impaire évaluée en <LatexRenderer latex={"-x"} /> permet de former un système de deux équations en deux inconnues pour retrouver chaque composante.
                </Astuce>
                <p className="mb-2"><strong>Existence :</strong> Posons <LatexRenderer latex={"f_p(x) = \\frac{f(x)+f(-x)}{2}"} /> et <LatexRenderer latex={"f_i(x) = \\frac{f(x)-f(-x)}{2}"} />.</p>
                <p className="mb-1">On vérifie que <LatexRenderer latex={"f_p(-x) = f_p(x)"} /> (paire) et <LatexRenderer latex={"f_i(-x) = -f_i(x)"} /> (impaire). De plus <LatexRenderer latex={"f_p + f_i = f"} />.</p>
                <p className="mb-2"><strong>Unicité :</strong> Supposons <LatexRenderer latex={"f = g + h"} /> avec <LatexRenderer latex={"g"} /> paire et <LatexRenderer latex={"h"} /> impaire. Alors <LatexRenderer latex={"f(-x) = g(x) - h(x)"} />. D'où <LatexRenderer latex={"g(x) = \\frac{f(x)+f(-x)}{2} = f_p(x)"} /> et <LatexRenderer latex={"h(x) = f_i(x)"} />. La décomposition est unique.</p>
                <ConclusionBox>
                  La décomposition <LatexRenderer latex={"f = f_p + f_i"} /> existe et est unique.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12 - Inégalité logarithmique"
            difficulty="Niveau: Difficile"
            content={
              <p>Montrer que pour <LatexRenderer latex={"x, y > 0"} /> : <LatexRenderer latex={"\\ln\\left(\\frac{x+y}{2}\\right) \\geq \\frac{\\ln x + \\ln y}{2}"} />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité exprime la concavité de la fonction logarithme (inégalité de Jensen). On peut aussi l'établir en ramenant à une inégalité classique comme l'inégalité arithmético-géométrique.
                </PointMethodo>
                <Astuce>
                  L'inégalité est équivalente à <LatexRenderer latex={"\\ln\\left(\\frac{x+y}{2}\\right) \\geq \\ln(\\sqrt{xy})"} />, c'est-à-dire <LatexRenderer latex={"\\frac{x+y}{2} \\geq \\sqrt{xy}"} />, qui est l'inégalité arithmético-géométrique.
                </Astuce>
                <p className="mb-2">L'inégalité est équivalente (car <LatexRenderer latex={"\\ln"} /> est croissante) à :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\frac{x+y}{2} \\geq \\sqrt{xy}"} />
                </div>
                <p>Or <LatexRenderer latex={"\\frac{x+y}{2} - \\sqrt{xy} = \\frac{(\\sqrt{x}-\\sqrt{y})^2}{2} \\geq 0"} /> pour tous <LatexRenderer latex={"x, y > 0"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"\\ln\\left(\\frac{x+y}{2}\\right) \\geq \\frac{\\ln x + \\ln y}{2}"} /> pour tous <LatexRenderer latex={"x, y > 0"} /> (concavité du logarithme).
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13 - Limites de moyennes de puissances"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soient <LatexRenderer latex={"a, b > 0"} />.</p>
                <p>1. Calculer <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\left(\\frac{a^n+b^n}{2}\\right)^{1/n}"} />.</p>
                <p>2. En déduire <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\left(\\frac{a^{1/n}+b^{1/n}}{2}\\right)^n"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une limite de la forme <LatexRenderer latex={"u_n^{1/n}"} />, on passe au logarithme et on utilise des équivalents ou développements limités.
                </PointMethodo>
                <Astuce>
                  Si <LatexRenderer latex={"a \\neq b"} />, on pose <LatexRenderer latex={"M = \\max(a,b)"} /> et on factorise par <LatexRenderer latex={"M^n"} /> : <LatexRenderer latex={"\\left(\\frac{a^n+b^n}{2}\\right)^{1/n} = M\\left(\\frac{1+(m/M)^n}{2}\\right)^{1/n}"} /> où <LatexRenderer latex={"m = \\min(a,b)"} />.
                </Astuce>
                <p className="mb-2"><strong>1.</strong> Sans perte de généralité, supposons <LatexRenderer latex={"a \\geq b > 0"} />. On factorise par <LatexRenderer latex={"a^n"} /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\left(\\frac{a^n+b^n}{2}\\right)^{1/n} = a\\left(\\frac{1+(b/a)^n}{2}\\right)^{1/n}"} />
                </div>
                <p>Comme <LatexRenderer latex={"b/a \\leq 1"} />, <LatexRenderer latex={"(b/a)^n \\to 0"} />, donc <LatexRenderer latex={"\\left(\\frac{1}{2}\\right)^{1/n} \\to 1"} /> et le quotient tend vers <LatexRenderer latex={"a = \\max(a,b)"} />.</p>
                <p className="mt-3 mb-2"><strong>2.</strong> Soit <LatexRenderer latex={"L_n = \\left(\\frac{a^{1/n}+b^{1/n}}{2}\\right)^n"} />. On pose <LatexRenderer latex={"t = 1/n \\to 0"} />. Alors <LatexRenderer latex={"\\ln L_n = n \\ln\\left(\\frac{a^t+b^t}{2}\\right)"} />. Par développement limité autour de <LatexRenderer latex={"t=0"} />, <LatexRenderer latex={"a^t = e^{t\\ln a} \\approx 1 + t\\ln a + \\frac{t^2(\\ln a)^2}{2}"} />. Ainsi <LatexRenderer latex={"\\frac{a^t+b^t}{2} \\approx 1 + t\\frac{\\ln a+\\ln b}{2}"} />, et <LatexRenderer latex={"n\\ln\\left(\\frac{a^t+b^t}{2}\\right) \\to \\frac{\\ln a + \\ln b}{2} = \\ln\\sqrt{ab}"} />.</p>
                <ConclusionBox>
                  (1) <LatexRenderer latex={"\\left(\\frac{a^n+b^n}{2}\\right)^{1/n} \\to \\max(a,b)"} /> ; (2) <LatexRenderer latex={"\\left(\\frac{a^{1/n}+b^{1/n}}{2}\\right)^n \\to \\sqrt{ab}"} /> (moyenne géométrique).
                </ConclusionBox>
              </div>
            }
          />

        </div>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre5FonctionsUneVariableReelleExercicesPage;
