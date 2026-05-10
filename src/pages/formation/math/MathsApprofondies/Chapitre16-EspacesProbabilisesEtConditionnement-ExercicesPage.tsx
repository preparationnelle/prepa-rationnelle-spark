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

const Chapitre16EspacesProbabilisesEtConditionnementExercicesPage = () => {
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
    const num = id.split('-')[1]?.padStart(2, '0') ?? id.replace(/[^0-9]/g, '').padStart(2, '0');
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
      chapterNumber={16}
      chapterTitle="Espaces probabilisés & conditionnement"
      description="Exercices sur les calculs de probabilités, conditionnement et indépendance."
      slug="espaces-probabilises-conditionnement"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "integrales-impropres-et-criteres",
        title: "Intégrales Impropres"
      }}
      nextChapter={{
        slug: "variables-aleatoires-discretes",
        title: "Variables Aléatoires"
      }}
    >
      <div className="space-y-8">

        <section id="facile">
          <DifficultyHeader level="Facile" />
          <ExerciseCard
            id="ex-01"
            title="Union et Complémentaire"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> deux événements tels que <LatexRenderer latex="P(A) = 0{,}6" />, <LatexRenderer latex="P(B) = 0{,}5" /> et <LatexRenderer latex="P(A \cap B) = 0{,}3" />.</p>
                <p>1. Calculer <LatexRenderer latex="P(A \cup B)" />.</p>
                <p>2. Calculer <LatexRenderer latex="P(\bar{A})" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour toute paire d'événements, appliquer la formule du crible : <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />. Le complémentaire s'obtient par <LatexRenderer latex="P(\bar{A}) = 1 - P(A)" />.
                </PointMethodo>
                <p><strong>1.</strong> Soit <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> les événements donnés. D'après la formule du crible :</p>
                <LatexRenderer latex="\displaystyle P(A \cup B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8." />
                <p className="mt-2"><strong>2.</strong> Or <LatexRenderer latex="A" /> et son complémentaire forment une partition de <LatexRenderer latex="\Omega" />, d'où :</p>
                <LatexRenderer latex="\displaystyle P(\bar{A}) = 1 - 0{,}6 = 0{,}4." />
                <ConclusionBox>
                  <LatexRenderer latex="P(A \cup B) = 0{,}8" /> et <LatexRenderer latex="P(\bar{A}) = 0{,}4" />.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-02"
            title="Conditionnement simple"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>On reprend les événements de l'exercice précédent : <LatexRenderer latex="P(A) = 0{,}6" />, <LatexRenderer latex="P(B) = 0{,}5" />, <LatexRenderer latex="P(A \cap B) = 0{,}3" />.</p>
                <p>Calculer <LatexRenderer latex="P_B(A)" /> (probabilité de <LatexRenderer latex="A" /> sachant <LatexRenderer latex="B" />). En déduire si <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont indépendants.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La probabilité conditionnelle se définit par <LatexRenderer latex="P_B(A) = P(A \cap B) / P(B)" /> dès que <LatexRenderer latex="P(B) > 0" />. Deux événements sont indépendants si et seulement si <LatexRenderer latex="P(A \cap B) = P(A) P(B)" />, ce qui équivaut à <LatexRenderer latex="P_B(A) = P(A)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="P(B) = 0{,}5 > 0" />. Par définition de la probabilité conditionnelle :</p>
                <LatexRenderer latex="\displaystyle P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{0{,}3}{0{,}5} = 0{,}6." />
                <p className="mt-2">Or <LatexRenderer latex="P_B(A) = 0{,}6 = P(A)" />, donc l'indépendance est établie : <LatexRenderer latex="P(A \cap B) = P(A) P(B) = 0{,}3" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P_B(A) = 0{,}6" />. Les événements <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont indépendants.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="intermediaire">
          <DifficultyHeader level="Intermédiaire" />
          <ExerciseCard
            id="ex-03"
            title="Formule des probabilités totales"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>On dispose de 3 urnes :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="U_1" /> : 2 boules noires, 3 blanches.</li>
                  <li><LatexRenderer latex="U_2" /> : 3 boules noires, 2 blanches.</li>
                  <li><LatexRenderer latex="U_3" /> : 5 boules noires.</li>
                </ul>
                <p>On choisit une urne au hasard (équiprobable), puis on tire une boule. Quelle est la probabilité de tirer une boule noire ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsqu'on décompose une expérience en deux étapes et que la première étape produit un système complet d'événements, on applique la formule des probabilités totales : <LatexRenderer latex="P(B) = \sum_i P(A_i) P_{A_i}(B)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="N" /> l'événement « tirer une boule noire ». Les événements <LatexRenderer latex="(U_1, U_2, U_3)" /> forment un système complet d'événements équiprobables de probabilité <LatexRenderer latex="1/3" /> chacun.</p>
                <p className="mt-2">D'après la <strong>formule des probabilités totales</strong> :</p>
                <LatexRenderer latex="\displaystyle P(N) = \sum_{i=1}^3 P(U_i)\, P_{U_i}(N)." />
                <p className="mt-2">Or <LatexRenderer latex="P_{U_1}(N) = \tfrac{2}{5}" />, <LatexRenderer latex="P_{U_2}(N) = \tfrac{3}{5}" />, <LatexRenderer latex="P_{U_3}(N) = 1" />. Ainsi :</p>
                <LatexRenderer latex="\displaystyle P(N) = \frac{1}{3}\!\left(\frac{2}{5} + \frac{3}{5} + 1\right) = \frac{1}{3} \times 2 = \frac{2}{3}." />
                <ConclusionBox>
                  <LatexRenderer latex="P(N) = \dfrac{2}{3}" />.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-04"
            title="Indépendance et union"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="A, B, C" /> trois événements mutuellement indépendants.</p>
                <p>Montrer que <LatexRenderer latex="A" /> et <LatexRenderer latex="B \cup C" /> sont indépendants.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer que deux événements sont indépendants, il faut vérifier que la probabilité de leur intersection vaut le produit de leurs probabilités. On utilise la distributivité de l'intersection sur l'union, puis la formule du crible, et enfin l'indépendance mutuelle.
                </PointMethodo>
                <Astuce>
                  L'indépendance mutuelle de <LatexRenderer latex="A, B, C" /> donne à la fois <LatexRenderer latex="P(A \cap B) = P(A)P(B)" />, <LatexRenderer latex="P(A \cap C) = P(A)P(C)" /> et <LatexRenderer latex="P(A \cap B \cap C) = P(A)P(B)P(C)" />.
                </Astuce>
                <p>Soit <LatexRenderer latex="P(A \cap (B \cup C))" />. Par distributivité :</p>
                <LatexRenderer latex="\displaystyle A \cap (B \cup C) = (A \cap B) \cup (A \cap C)." />
                <p className="mt-2">D'où, par la formule du crible :</p>
                <LatexRenderer latex="\displaystyle P(A \cap (B \cup C)) = P(A \cap B) + P(A \cap C) - P(A \cap B \cap C)." />
                <p className="mt-2">Or, par indépendance mutuelle (donnée par l'énoncé) :</p>
                <LatexRenderer latex="\displaystyle = P(A)P(B) + P(A)P(C) - P(A)P(B)P(C) = P(A)\bigl[P(B) + P(C) - P(B)P(C)\bigr]." />
                <p className="mt-2">Ainsi <LatexRenderer latex="P(A \cap (B \cup C)) = P(A)\,P(B \cup C)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="A" /> et <LatexRenderer latex="B \cup C" /> sont indépendants.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="difficile">
          <DifficultyHeader level="Difficile" />
          <ExerciseCard
            id="ex-05"
            title="Formule de Bayes — Test médical"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Une maladie touche 1 % de la population : <LatexRenderer latex="P(M) = 0{,}01" />.</p>
                <p>Un test a une sensibilité de 95 % (<LatexRenderer latex="P_M(T) = 0{,}95" />) et une spécificité de 90 % (<LatexRenderer latex="P_{\bar{M}}(\bar{T}) = 0{,}90" />).</p>
                <p>Un patient est testé positif. Quelle est la probabilité qu'il soit effectivement malade ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsqu'on cherche la probabilité d'une cause sachant un résultat observé, on applique la <strong>formule de Bayes</strong> : <LatexRenderer latex="P_T(M) = P(M)P_M(T)/P(T)" />, en calculant <LatexRenderer latex="P(T)" /> via la formule des probabilités totales avec le système complet <LatexRenderer latex="(M, \bar{M})" />.
                </PointMethodo>
                <p>On cherche <LatexRenderer latex="P_T(M)" />. D'abord, <LatexRenderer latex="P_{\bar{M}}(T) = 1 - P_{\bar{M}}(\bar{T}) = 0{,}10" />.</p>
                <p className="mt-2">D'après la <strong>formule des probabilités totales</strong> :</p>
                <LatexRenderer latex="\displaystyle P(T) = P(M)\,P_M(T) + P(\bar{M})\,P_{\bar{M}}(T) = 0{,}01 \times 0{,}95 + 0{,}99 \times 0{,}10 = 0{,}1085." />
                <p className="mt-2">D'après la <strong>formule de Bayes</strong> :</p>
                <LatexRenderer latex="\displaystyle P_T(M) = \frac{P(M)\,P_M(T)}{P(T)} = \frac{0{,}0095}{0{,}1085} \approx 0{,}0876." />
                <ConclusionBox>
                  Un patient testé positif n'a qu'environ <strong>8,8 %</strong> de chances d'être réellement malade. La faible prévalence de la maladie explique ce résultat (effet de base).
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="concours">
          <DifficultyHeader level="Concours" />
          <ExerciseCard
            id="ex-06"
            title="Continuité décroissante — Maximum de variables exponentielles"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)" /> une suite de variables aléatoires i.i.d. suivant une loi exponentielle <LatexRenderer latex="\mathcal{E}(1)" />.</p>
                <p>Soit <LatexRenderer latex="M_n = \max(X_1, \dots, X_n)" />.</p>
                <p>1. Exprimer <LatexRenderer latex="\{ M_n \le x \}" /> en fonction des <LatexRenderer latex="X_i" />.</p>
                <p>2. Calculer <LatexRenderer latex="F_n(x) = P(M_n \le x)" /> pour <LatexRenderer latex="x \ge 0" />.</p>
                <p>3. Déterminer la limite quand <LatexRenderer latex="n \to +\infty" /> et interpréter via la continuité décroissante.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La loi du maximum se traite via la fonction de répartition : <LatexRenderer latex="\{M_n \le x\} = \bigcap_i \{X_i \le x\}" />. L'indépendance permet de factoriser. La suite d'événements <LatexRenderer latex="A_n = \{M_n \le x\}" /> est décroissante, ce qui justifie l'usage de la continuité décroissante.
                </PointMethodo>
                <p><strong>1.</strong> Soit <LatexRenderer latex="x \ge 0" />. Par définition du maximum :</p>
                <LatexRenderer latex="\{ M_n \le x \} = \{ X_1 \le x \} \cap \cdots \cap \{ X_n \le x \}." />
                <p className="mt-2"><strong>2.</strong> Les <LatexRenderer latex="X_i" /> sont indépendantes (donné par l'énoncé), donc :</p>
                <LatexRenderer latex="\displaystyle F_n(x) = \prod_{i=1}^n P(X_i \le x) = \bigl(1 - e^{-x}\bigr)^n." />
                <p className="mt-2"><strong>3.</strong> Pour <LatexRenderer latex="x > 0" />, on a <LatexRenderer latex="1 - e^{-x} \in (0, 1)" />, d'où <LatexRenderer latex="(1-e^{-x})^n \to 0" />.</p>
                <p className="mt-2">La suite <LatexRenderer latex="(A_n)" /> est décroissante car <LatexRenderer latex="M_{n+1} \ge M_n" /> implique <LatexRenderer latex="A_{n+1} \subset A_n" />. Par <strong>continuité décroissante</strong> :</p>
                <LatexRenderer latex="\displaystyle P\!\Bigl(\bigcap_{n \ge 1} A_n\Bigr) = \lim_{n \to \infty} P(A_n) = 0." />
                <ConclusionBox>
                  Pour tout <LatexRenderer latex="x > 0" />, <LatexRenderer latex="P(M_n \le x) \to 0" /> : le maximum tend vers <LatexRenderer latex="+\infty" /> presque sûrement.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre16EspacesProbabilisesEtConditionnementExercicesPage;
