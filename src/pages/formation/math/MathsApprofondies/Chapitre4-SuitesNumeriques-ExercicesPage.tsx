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

const Chapitre4SuitesNumeriquesExercicesPage = () => {
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
      chapterNumber={4}
      chapterTitle="Suites numériques"
      description="Exercices progressifs pour maîtriser les suites, la récurrence et la convergence."
      slug="suites-numeriques"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & binôme"
      }}
      nextChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Raisonnement par récurrence" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = 2, \\quad u_{n+1} = 5u_n + 4 \\quad \\text{pour tout } n \\in \\mathbb{N}."} />
                </div>
                <p>Montrer que, pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a <LatexRenderer latex={"u_n > 0"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une propriété est vraie pour tout entier naturel, on utilise le principe de récurrence : initialisation au rang 0, hérédité (supposer vrai au rang <LatexRenderer latex={"n"} />, démontrer au rang <LatexRenderer latex={"n+1"} />), conclusion.
                </PointMethodo>
                <p className="mb-2"><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"u_0 = 2 > 0"} />. La propriété est vraie au rang 0.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"u_n > 0"} />. Alors <LatexRenderer latex={"5u_n > 0"} />, d'où <LatexRenderer latex={"u_{n+1} = 5u_n + 4 > 4 > 0"} />. La propriété est vraie au rang <LatexRenderer latex={"n+1"} />.</p>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"u_n > 0"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <ConclusionBox>
                  Pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"u_n > 0"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = -3, \\quad u_{n+1} = 5 - 4u_n."} />
                </div>
                <p>Montrer que <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour vérifier qu'une formule explicite donne bien la suite, on procède par récurrence : on vérifie l'initialisation, puis on montre que la formule au rang <LatexRenderer latex={"n"} /> entraîne celle au rang <LatexRenderer latex={"n+1"} /> via la relation de récurrence.
                </PointMethodo>
                <p className="mb-2"><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"u_0 = -3"} /> et <LatexRenderer latex={"(-4)^{0+1} + 1 = -4 + 1 = -3"} />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_{n+1} = 5 - 4u_n = 5 - 4((-4)^{n+1}+1) = 1 - 4(-4)^{n+1} = 1 + (-4)^{n+2}"} />
                </div>
                <p>C'est bien la formule au rang <LatexRenderer latex={"n+1"} />.</p>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"u_n = (-4)^{n+1}+1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = \\frac{1}{2}, \\quad u_{n+1} = \\sqrt{\\frac{1 + u_n}{2}}."} />
                </div>
                <p>Montrer que <LatexRenderer latex={"0 \\leq u_n \\leq 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une suite reste dans un intervalle, on utilise la récurrence : on vérifie que le premier terme est dans l'intervalle, puis que si <LatexRenderer latex={"u_n"} /> est dans l'intervalle, alors <LatexRenderer latex={"u_{n+1} = f(u_n)"} /> y est aussi.
                </PointMethodo>
                <p className="mb-2"><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"u_0 = 1/2 \\in [0, 1]"} />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"0 \\leq u_n \\leq 1"} />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"1 \\leq 1 + u_n \\leq 2 \\implies \\frac{1}{2} \\leq \\frac{1+u_n}{2} \\leq 1"} />
                </div>
                <p>En prenant la racine carrée (fonction croissante) :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\frac{1}{\\sqrt{2}} \\leq u_{n+1} \\leq 1"} />
                </div>
                <p>Or <LatexRenderer latex={"\\frac{1}{\\sqrt{2}} > 0"} />, donc <LatexRenderer latex={"0 \\leq u_{n+1} \\leq 1"} />.</p>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"0 \\leq u_n \\leq 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(u_n)"} /> est bornée dans <LatexRenderer latex={"[0, 1]"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
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
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = 1, \\quad u_1 = 1, \\quad u_{n+2} = 2u_{n+1} - u_n - 2"} />
                </div>
                <div className="space-y-2">
                  <p><strong>1.</strong> Calculer <LatexRenderer latex={"u_2"} /> et <LatexRenderer latex={"u_3"} />.</p>
                  <p><strong>2.</strong> Montrer que la suite est décroissante : <LatexRenderer latex={"u_{n+1} \\leq u_n"} /> pour tout <LatexRenderer latex={"n"} />.</p>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour établir la décroissance, on étudie le signe de <LatexRenderer latex={"u_{n+1} - u_n"} /> par récurrence. On exprime <LatexRenderer latex={"u_{n+2} - u_{n+1}"} /> en fonction de <LatexRenderer latex={"u_{n+1} - u_n"} /> via la relation de récurrence.
                </PointMethodo>
                <p className="mb-2"><strong>1. Calculs :</strong></p>
                <p><LatexRenderer latex={"u_2 = 2(1) - 1 - 2 = -1"} /></p>
                <p className="mb-2"><LatexRenderer latex={"u_3 = 2(-1) - 1 - 2 = -5"} /></p>
                <p className="mb-2"><strong>2. Décroissance par récurrence :</strong></p>
                <p className="mb-2"><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"u_1 = 1 \\leq 1 = u_0"} />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"u_{n+1} \\leq u_n"} />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_{n+2} - u_{n+1} = (2u_{n+1} - u_n - 2) - u_{n+1} = u_{n+1} - u_n - 2"} />
                </div>
                <p>Par hypothèse <LatexRenderer latex={"u_{n+1} - u_n \\leq 0"} />, donc <LatexRenderer latex={"u_{n+2} - u_{n+1} \\leq -2 < 0"} />.</p>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"(u_n)"} /> est décroissante.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"u_2 = -1"} />, <LatexRenderer latex={"u_3 = -5"} />, et la suite est strictement décroissante dès le rang 1.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Étude de suites récurrentes" />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 - Suite homographique"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)"} /> définie par <LatexRenderer latex={"u_0 = 3,\\ u_{n+1} = \\frac{5u_n - 4}{u_n + 1}"} />.</p>
                <ol className="list-decimal ml-6 mt-4 space-y-2">
                  <li>Montrer que <LatexRenderer latex={"u_n > 2"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</li>
                  <li>Poser <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2}"} />. Montrer que <LatexRenderer latex={"(v_n)"} /> est arithmétique.</li>
                  <li>Exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Face à une suite homographique <LatexRenderer latex={"u_{n+1} = \\frac{au_n+b}{cu_n+d}"} />, on cherche les points fixes, puis on pose <LatexRenderer latex={"v_n = \\frac{1}{u_n - \\ell}"} /> ou un quotient analogue pour linéariser la suite.
                </PointMethodo>
                <p className="mb-2"><strong>1. Minoration :</strong></p>
                <p className="mb-2"><strong>Initialisation :</strong> <LatexRenderer latex={"u_0 = 3 > 2"} />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"u_n > 2"} />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_{n+1} - 2 = \\frac{5u_n - 4}{u_n + 1} - 2 = \\frac{3(u_n - 2)}{u_n + 1}"} />
                </div>
                <p>Or <LatexRenderer latex={"u_n > 2"} /> implique que numérateur et dénominateur sont positifs, donc <LatexRenderer latex={"u_{n+1} > 2"} />.</p>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"u_n > 2"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <p className="mt-3 mb-2"><strong>2. Suite arithmétique :</strong> Soit <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2}"} /> (bien défini car <LatexRenderer latex={"u_n > 2"} />). Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"v_{n+1} = \\frac{1}{u_{n+1}-2} = \\frac{u_n+1}{3(u_n-2)} = \\frac{1}{3} \\cdot \\frac{u_n - 2 + 3}{u_n - 2} = \\frac{1}{3} + \\frac{1}{u_n - 2} = v_n + \\frac{1}{3}"} />
                </div>
                <p>Ainsi <LatexRenderer latex={"(v_n)"} /> est arithmétique de raison <LatexRenderer latex={"1/3"} /> et de premier terme <LatexRenderer latex={"v_0 = 1/(3-2) = 1"} />.</p>
                <p className="mt-3 mb-2"><strong>3. Expression explicite :</strong> <LatexRenderer latex={"v_n = 1 + \\frac{n}{3} = \\frac{n+3}{3}"} />. D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_n = 2 + \\frac{1}{v_n} = 2 + \\frac{3}{n+3} = \\frac{2n+9}{n+3}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"u_n = \\frac{2n+9}{n+3}"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 - Suite explicite croissante"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"u_n = 2n + 5"} /> pour <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Montrer qu'elle est strictement croissante.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour établir la monotonie d'une suite explicite, on calcule <LatexRenderer latex={"u_{n+1} - u_n"} /> et on en étudie le signe.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_{n+1} - u_n = (2(n+1)+5) - (2n+5) = 2 > 0"} />
                </div>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(u_n)"} /> est strictement croissante.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7 - Suite explicite décroissante"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"v_n = \\frac{1}{n+2}"} /> pour <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Montrer qu'elle est strictement décroissante.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  On calcule <LatexRenderer latex={"v_{n+1} - v_n"} /> et on détermine son signe en réduisant au même dénominateur.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"v_{n+1} - v_n = \\frac{1}{n+3} - \\frac{1}{n+2} = \\frac{(n+2)-(n+3)}{(n+2)(n+3)} = \\frac{-1}{(n+2)(n+3)} < 0"} />
                </div>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(v_n)"} /> est strictement décroissante.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(w_n)"} /> définie par <LatexRenderer latex={"w_0=1,\\ w_{n+1} = \\frac{w_n+4}{2}"} />. Montrer <LatexRenderer latex={"w_n \\leq 4"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une suite est majorée, on utilise la récurrence et on enchaîne les inégalités en exploitant la forme de la relation de récurrence.
                </PointMethodo>
                <p className="mb-2"><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"w_0 = 1 \\leq 4"} />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. Supposons <LatexRenderer latex={"w_n \\leq 4"} />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"w_{n+1} = \\frac{w_n + 4}{2} \\leq \\frac{4 + 4}{2} = 4"} />
                </div>
                <p className="mb-2"><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"w_n \\leq 4"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(w_n)"} /> est majorée par 4.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(a_n)"} /> définie par <LatexRenderer latex={"a_1=2,\\ a_{n+1} = \\sqrt{2a_n}"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Montrer que <LatexRenderer latex={"a_n > 0"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</li>
                  <li>Montrer que <LatexRenderer latex={"a_n \\leq 2"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  On traite les deux propriétés simultanément par récurrence en remarquant que <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n}"} /> est bien définie et positive dès que <LatexRenderer latex={"a_n > 0"} />.
                </PointMethodo>
                <p className="mb-2"><strong>Positivité :</strong></p>
                <p className="mb-1">Initialisation : <LatexRenderer latex={"a_1 = 2 > 0"} />. Vrai.</p>
                <p className="mb-3">Hérédité : Si <LatexRenderer latex={"a_n > 0"} />, alors <LatexRenderer latex={"2a_n > 0"} /> et <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n} > 0"} />. Par le principe de récurrence, <LatexRenderer latex={"a_n > 0"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</p>
                <p className="mb-2"><strong>Majoration :</strong></p>
                <p className="mb-1">Initialisation : <LatexRenderer latex={"a_1 = 2 \\leq 2"} />. Vrai.</p>
                <p>Hérédité : Si <LatexRenderer latex={"a_n \\leq 2"} />, alors <LatexRenderer latex={"2a_n \\leq 4"} />, donc <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n} \\leq \\sqrt{4} = 2"} />. Par le principe de récurrence, <LatexRenderer latex={"a_n \\leq 2"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"0 < a_n \\leq 2"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex10"
            title="Exercice 10 - Suite bornée"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"u_n = \\frac{3n+1}{n+1}"} /> pour <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                <p>Montrer que la suite est majorée par 3 et minorée par 0.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une suite définie par une expression rationnelle, on étudie le signe de <LatexRenderer latex={"u_n - M"} /> pour trouver une borne supérieure, et de <LatexRenderer latex={"u_n - m"} /> pour une borne inférieure.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. D'une part :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"u_n - 3 = \\frac{3n+1}{n+1} - 3 = \\frac{3n+1-3(n+1)}{n+1} = \\frac{-2}{n+1} < 0"} />
                </div>
                <p>Donc <LatexRenderer latex={"u_n < 3"} />. D'autre part, pour <LatexRenderer latex={"n \\geq 0"} />, le numérateur <LatexRenderer latex={"3n+1 \\geq 1 > 0"} /> et le dénominateur <LatexRenderer latex={"n+1 \\geq 1 > 0"} />, d'où <LatexRenderer latex={"u_n \\geq 0"} />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(u_n)"} /> est bornée dans <LatexRenderer latex={"[0, 3["} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Exercices avancés et problèmes" />

          <ExerciseCard
            id="ex11"
            title="Exercice 11 - Suite homographique avancée"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)"} /> définie par <LatexRenderer latex={"u_0=3,\\ u_{n+1}=\\frac{2u_n+1}{u_n+2}"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Montrer que <LatexRenderer latex={"(u_n)"} /> n'est ni arithmétique ni géométrique.</li>
                  <li>Soit <LatexRenderer latex={"v_n = \\frac{1+u_n}{2-2u_n}"} />. Montrer que <LatexRenderer latex={"(v_n)"} /> est géométrique et préciser sa raison.</li>
                  <li>Exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La méthode du point fixe : on cherche les points fixes <LatexRenderer latex={"\\ell"} /> de l'homographie, puis on pose <LatexRenderer latex={"v_n = \\frac{u_n - \\ell_1}{u_n - \\ell_2}"} /> pour linéariser la suite.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> On calcule <LatexRenderer latex={"u_0=3,\\ u_1=7/5,\\ u_2 = (14/5+1)/(7/5+2) = 19/17"} />. Les raisons consécutives ne sont pas constantes, donc non géométrique. Les différences consécutives ne sont pas constantes, donc non arithmétique.</p>
                <p className="mt-3 mb-2"><strong>2.</strong> Soit <LatexRenderer latex={"v_n = \\frac{1+u_n}{2-2u_n}"} />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"v_{n+1} = \\frac{1 + \\frac{2u_n+1}{u_n+2}}{2 - 2\\frac{2u_n+1}{u_n+2}} = \\frac{(u_n+2)+(2u_n+1)}{2(u_n+2)-2(2u_n+1)} = \\frac{3u_n+3}{-2u_n+2} = \\frac{3(u_n+1)}{2(1-u_n)} = 3 \\cdot \\frac{1+u_n}{2-2u_n} = 3v_n"} />
                </div>
                <p>Ainsi <LatexRenderer latex={"v_{n+1} = 3v_n"} /> avec <LatexRenderer latex={"v_0 = \\frac{1+3}{2-6} = \\frac{4}{-4} = -1"} />. Donc <LatexRenderer latex={"(v_n)"} /> est géométrique de raison 3 et de premier terme <LatexRenderer latex={"-1"} />.</p>
                <p className="mt-3 mb-2"><strong>3.</strong> <LatexRenderer latex={"v_n = -3^n"} />. D'après la définition de <LatexRenderer latex={"v_n"} />, en résolvant <LatexRenderer latex={"\\frac{1+u_n}{2-2u_n} = -3^n"} /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"1+u_n = -3^n(2-2u_n) \\implies u_n(1+2 \\cdot 3^n) = 2 \\cdot 3^n - 1 \\implies u_n = \\frac{2 \\cdot 3^n - 1}{2 \\cdot 3^n + 1}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"u_n = \\frac{2 \\cdot 3^n - 1}{2 \\cdot 3^n + 1}"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12 - Récurrences linéaires d'ordre 2"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Trouver l'expression explicite pour :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-2">
                  <li><LatexRenderer latex={"u_{n+2} = -u_{n+1} + 6u_n"} />, <LatexRenderer latex={"u_0=2, u_1=5"} />.</li>
                  <li><LatexRenderer latex={"4u_{n+1} - 4u_n + u_{n-1} = 0"} /> (racine double).</li>
                  <li><LatexRenderer latex={"u_{n+2} - u_{n+1} - u_n = 0"} /> (suite de Fibonacci).</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une récurrence linéaire d'ordre 2 à coefficients constants, on résout l'équation caractéristique : si les racines <LatexRenderer latex={"r_1 \\neq r_2"} />, alors <LatexRenderer latex={"u_n = \\lambda r_1^n + \\mu r_2^n"} /> ; si racine double <LatexRenderer latex={"r"} />, alors <LatexRenderer latex={"u_n = (\\lambda n + \\mu)r^n"} />.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Équation caractéristique : <LatexRenderer latex={"r^2 + r - 6 = 0"} />, de discriminant <LatexRenderer latex={"\\Delta = 1 + 24 = 25"} />. Racines : <LatexRenderer latex={"r_1 = 2,\\ r_2 = -3"} />.</p>
                <p>Soit <LatexRenderer latex={"u_n = \\lambda \\cdot 2^n + \\mu \\cdot (-3)^n"} />. Les conditions initiales donnent le système :</p>
                <p className="ml-4"><LatexRenderer latex={"\\lambda + \\mu = 2,\\ 2\\lambda - 3\\mu = 5"} />, d'où <LatexRenderer latex={"\\lambda = \\frac{11}{5},\\ \\mu = -\\frac{1}{5}"} />.</p>
                <p className="mt-3 mb-2"><strong>2.</strong> Équation caractéristique : <LatexRenderer latex={"4r^2 - 4r + 1 = (2r-1)^2 = 0"} />. Racine double <LatexRenderer latex={"r = 1/2"} />.</p>
                <p>Donc <LatexRenderer latex={"u_n = (\\lambda n + \\mu)(1/2)^n"} />.</p>
                <p className="mt-3 mb-2"><strong>3.</strong> Équation caractéristique : <LatexRenderer latex={"r^2 - r - 1 = 0"} />. Racines : <LatexRenderer latex={"r_{1,2} = \\frac{1 \\pm \\sqrt{5}}{2}"} /> (nombre d'or <LatexRenderer latex={"\\varphi"} /> et son conjugué).</p>
                <p>La solution explicite est la formule de Binet : <LatexRenderer latex={"u_n = \\frac{\\varphi^n - \\hat{\\varphi}^n}{\\sqrt{5}}"} />.</p>
                <ConclusionBox>
                  Pour (1) : <LatexRenderer latex={"u_n = \\frac{11}{5} \\cdot 2^n - \\frac{1}{5}(-3)^n"} />. Les cas (2) et (3) se traitent de manière analogue par l'équation caractéristique.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13 - Suite implicite"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"u_n \\in \\mathbb{R}_+^*"} /> l'unique solution de <LatexRenderer latex={"\\sum_{k=1}^n x^k = 1"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Justifier l'existence et l'unicité de <LatexRenderer latex={"u_n"} />.</li>
                  <li>Montrer que <LatexRenderer latex={"(u_n)"} /> est décroissante et converge.</li>
                  <li>Calculer la limite (qui vaut <LatexRenderer latex={"1/2"} />).</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer l'existence d'une solution à une équation, on applique le théorème des valeurs intermédiaires à une fonction continue. Pour montrer la décroissance de la suite implicite, on compare les fonctions aux deux rangs successifs.
                </PointMethodo>
                <p className="mb-2"><strong>1.</strong> Soit <LatexRenderer latex={"n \\geq 1"} /> et <LatexRenderer latex={"f_n(x) = \\sum_{k=1}^n x^k"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} />. Cette fonction est continue et strictement croissante. De plus <LatexRenderer latex={"f_n(0^+) = 0 < 1"} /> et <LatexRenderer latex={"f_n(x) \\to +\\infty"} /> quand <LatexRenderer latex={"x \\to +\\infty"} />. Par le théorème des valeurs intermédiaires, <LatexRenderer latex={"f_n"} /> admet un unique antécédent de 1 dans <LatexRenderer latex={"\\mathbb{R}_+^*"} />, noté <LatexRenderer latex={"u_n"} />.</p>
                <p className="mt-3 mb-2"><strong>2.</strong> Pour tout <LatexRenderer latex={"n"} />, <LatexRenderer latex={"f_{n+1}(u_n) = f_n(u_n) + u_n^{n+1} = 1 + u_n^{n+1} > 1 = f_{n+1}(u_{n+1})"} />. Or <LatexRenderer latex={"f_{n+1}"} /> est strictement croissante, donc <LatexRenderer latex={"u_n > u_{n+1}"} />. La suite est strictement décroissante. Elle est minorée par 0, donc converge vers une limite <LatexRenderer latex={"\\ell \\geq 0"} />.</p>
                <p className="mt-3 mb-2"><strong>3.</strong> La condition <LatexRenderer latex={"\\sum_{k=1}^n u_n^k = 1"} /> donne <LatexRenderer latex={"u_n \\cdot \\frac{1-u_n^n}{1-u_n} = 1"} /> (si <LatexRenderer latex={"u_n \\neq 1"} />). À la limite, si <LatexRenderer latex={"\\ell < 1"} />, alors <LatexRenderer latex={"u_n^n \\to 0"} /> et <LatexRenderer latex={"\\frac{\\ell}{1-\\ell} = 1"} />, d'où <LatexRenderer latex={"\\ell = 1/2"} />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex={"(u_n)"} /> est décroissante et converge vers <LatexRenderer latex={"\\frac{1}{2}"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4SuitesNumeriquesExercicesPage;
