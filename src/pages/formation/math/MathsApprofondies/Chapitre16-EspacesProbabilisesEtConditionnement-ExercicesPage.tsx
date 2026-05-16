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

        <section id="approfondissements">
          <DifficultyHeader level="Niveau : Facile — Propriétés de la probabilité" />

          <ExerciseCard
            id="ex-07"
            title="Formule de Poincaré pour 3 événements"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="A, B, C" /> trois événements d'un espace probabilisé.</p>
                <p>Démontrer la formule de Poincaré (crible) : <LatexRenderer latex="P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A\cap B) - P(A\cap C) - P(B\cap C) + P(A\cap B\cap C)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La formule de Poincaré généralise <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />. On l'obtient en appliquant deux fois cette dernière formule, ou par récurrence sur le nombre d'événements.
                </PointMethodo>
                <p>Or <LatexRenderer latex="A \cup B \cup C = (A \cup B) \cup C" />. Par la formule à 2 événements :</p>
                <LatexRenderer latex="P(A \cup B \cup C) = P(A \cup B) + P(C) - P((A \cup B) \cap C)." />
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="P((A \cup B) \cap C) = P((A \cap C) \cup (B \cap C)) = P(A \cap C) + P(B \cap C) - P(A \cap B \cap C)" />
                <p className="mt-2">(distributivité et formule à 2 événements appliquée à <LatexRenderer latex="A \cap C" /> et <LatexRenderer latex="B \cap C" />).</p>
                <p className="mt-2">De même <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />. En combinant :</p>
                <LatexRenderer latex="P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A\cap B) - P(A\cap C) - P(B\cap C) + P(A\cap B\cap C)." />
                <Astuce>
                  Formule générale (Poincaré pour <LatexRenderer latex="n" /> événements) : <LatexRenderer latex="P(\bigcup_{i=1}^n A_i) = \sum_{k=1}^n (-1)^{k-1} \sum_{|I|=k} P(\bigcap_{i \in I} A_i)" />.
                </Astuce>
                <ConclusionBox>
                  Formule de Poincaré (crible) à 3 événements démontrée. Méthode : récurrence ou applications successives de la formule à 2 événements.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Intermédiaire — Indépendance et conditionnement" />

          <ExerciseCard
            id="ex-08"
            title="Lemme de Borel-Cantelli (sens facile)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(A_n)" /> une suite d'événements tels que <LatexRenderer latex="\sum_{n \ge 1} P(A_n) < +\infty" />.</p>
                <p>Démontrer que <LatexRenderer latex="P(A_n \text{ réalisé une infinité de fois}) = 0" />, soit <LatexRenderer latex="P(\limsup_n A_n) = 0" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le lemme de Borel-Cantelli est l'outil-clé pour démontrer qu'un événement aléatoire ne se produit qu'un nombre fini de fois presque sûrement. La démonstration utilise la sous-additivité de la probabilité et le critère de Cauchy pour la convergence des séries.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="B_N = \bigcup_{n \ge N} A_n" />. Alors <LatexRenderer latex="\limsup_n A_n = \bigcap_{N \ge 1} B_N" />.</p>
                <p className="mt-2"><strong>Sous-additivité.</strong> Or <LatexRenderer latex="P(B_N) = P\bigl(\bigcup_{n \ge N} A_n\bigr) \le \sum_{n \ge N} P(A_n)" /> par sous-additivité.</p>
                <p className="mt-2">Or la série <LatexRenderer latex="\sum P(A_n)" /> converge, donc le reste tend vers 0 : <LatexRenderer latex="\sum_{n \ge N} P(A_n) \to 0" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
                <Astuce>
                  La suite <LatexRenderer latex="(B_N)" /> est décroissante. Par continuité décroissante de la probabilité, <LatexRenderer latex="P(\bigcap_N B_N) = \lim_N P(B_N)" />.
                </Astuce>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="P(\limsup_n A_n) = \lim_{N \to +\infty} P(B_N) \le \lim_{N \to +\infty} \sum_{n \ge N} P(A_n) = 0." />
                <ConclusionBox>
                  Lemme de Borel-Cantelli (sens facile) : <LatexRenderer latex="\sum P(A_n) < +\infty \Rightarrow P(\text{infinité de A_n}) = 0" />. Donc presque sûrement, seuls un nombre fini d'événements se réalisent.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-09"
            title="Évènement de probabilité 1 - 1/n indéfiniment"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="A_n" /> une suite d'événements indépendants avec <LatexRenderer latex="P(A_n) = 1 - 1/n^2" /> pour <LatexRenderer latex="n \ge 1" />.</p>
                <p>Démontrer que <LatexRenderer latex="P(\bigcap_{n \ge 1} A_n) > 0" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une intersection infinie d'événements indépendants, on calcule <LatexRenderer latex="P(\bigcap A_n) = \prod P(A_n)" /> et on étudie la convergence de ce produit infini. Le critère : le produit converge vers une valeur non nulle ssi la série des <LatexRenderer latex="\ln P(A_n)" /> converge.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(A_n)" /> indépendants avec <LatexRenderer latex="P(A_n) = 1 - 1/n^2" />. Par indépendance :</p>
                <LatexRenderer latex="P\Bigl(\bigcap_{n=1}^N A_n\Bigr) = \prod_{n=1}^N P(A_n) = \prod_{n=1}^N \Bigl(1 - \frac{1}{n^2}\Bigr)." />
                <Astuce>
                  Or <LatexRenderer latex="1 - 1/n^2 = (n-1)(n+1)/n^2" />. Le produit télescope : <LatexRenderer latex="\prod_{n=2}^N (n-1)(n+1)/n^2 = (N+1)/(2N) \to 1/2" />.
                </Astuce>
                <p className="mt-2">Pour <LatexRenderer latex="N \to +\infty" /> :</p>
                <LatexRenderer latex="\prod_{n=2}^N \Bigl(1 - \frac{1}{n^2}\Bigr) = \frac{N+1}{2N} \to \frac{1}{2}." />
                <p className="mt-2">D'où, par continuité décroissante de la probabilité :</p>
                <LatexRenderer latex="P\Bigl(\bigcap_{n \ge 2} A_n\Bigr) = \frac{1}{2}." />
                <p className="mt-2">Or <LatexRenderer latex="A_1" /> a probabilité <LatexRenderer latex="1 - 1 = 0" />, donc <LatexRenderer latex="P(\bigcap_{n \ge 1} A_n) = 0" />.</p>
                <p className="mt-2"><strong>Correction.</strong> Soit donc <LatexRenderer latex="P(\bigcap_{n \ge 2} A_n) = 1/2 > 0" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P\bigl(\bigcap_{n \ge 2}(1 - 1/n^2)\bigr) = 1/2" /> par télescopage. Illustration que la probabilité d'une intersection infinie n'est pas nécessairement nulle.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Difficile — Système complet infini" />

          <ExerciseCard
            id="ex-10"
            title="Probabilités totales avec système infini"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>On effectue une suite de lancers indépendants d'une pièce équilibrée. Soit <LatexRenderer latex="A" /> = "obtenir un nombre pair de piles parmi les <LatexRenderer latex="n" /> premiers lancers".</p>
                <p>Démontrer que <LatexRenderer latex="P(A) = (1 + (1 - 2p)^n)/2" /> où <LatexRenderer latex="p = P(\text{pile})" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer la probabilité d'un nombre pair de succès parmi <LatexRenderer latex="n" /> essais indépendants, on utilise une astuce de combinaison : <LatexRenderer latex="P(\text{pair}) = (1 + (1 - 2p)^n)/2" />. La démonstration passe par l'identité binomiale appliquée à <LatexRenderer latex="(p + q)^n" /> et <LatexRenderer latex="(q - p)^n" /> avec <LatexRenderer latex="q = 1 - p" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X" /> le nombre de piles parmi <LatexRenderer latex="n" /> lancers indépendants, <LatexRenderer latex="X \sim \mathcal{B}(n, p)" />.</p>
                <p className="mt-2">Or, par la formule du binôme :</p>
                <LatexRenderer latex="(p + q)^n = \sum_{k=0}^n \binom{n}{k} p^k q^{n-k} = 1," />
                <LatexRenderer latex="(q - p)^n = \sum_{k=0}^n \binom{n}{k} (-p)^k q^{n-k} = \sum_{k=0}^n \binom{n}{k} p^k q^{n-k} (-1)^k = (1 - 2p)^n." />
                <Astuce>
                  En sommant les deux identités, les termes pairs sont multipliés par 2, et les termes impairs s'annulent. Cela isole exactement <LatexRenderer latex="\sum_{k \text{ pair}} \binom{n}{k} p^k q^{n-k}" />.
                </Astuce>
                <p className="mt-2">En sommant : <LatexRenderer latex="1 + (1 - 2p)^n = 2 \sum_{k \text{ pair}} \binom{n}{k} p^k q^{n-k} = 2\,P(X \text{ pair})" />.</p>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="P(A) = P(X \text{ pair}) = \frac{1 + (1 - 2p)^n}{2}." />
                <p className="mt-2"><strong>Limite.</strong> Pour <LatexRenderer latex="p = 1/2" />, <LatexRenderer latex="1 - 2p = 0" />, donc <LatexRenderer latex="P(A) = 1/2" />. Pour <LatexRenderer latex="p \ne 1/2" />, <LatexRenderer latex="(1-2p)^n \to 0" /> et <LatexRenderer latex="P(A) \to 1/2" /> aussi.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P(\text{nombre pair de piles}) = (1 + (1-2p)^n)/2" />, qui tend vers 1/2 pour <LatexRenderer latex="n" /> grand.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-11"
            title="Loi du tout ou rien (Kolmogorov)"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)_{n \ge 1}" /> une suite de VA indépendantes. On admet que pour tout événement <LatexRenderer latex="A" /> de la tribu "asymptotique" (i.e. ne dépendant que des <LatexRenderer latex="X_n" /> pour <LatexRenderer latex="n" /> grand), <LatexRenderer latex="P(A) \in \{0, 1\}" /> (loi du 0-1 de Kolmogorov).</p>
                <p>Soit <LatexRenderer latex="L = \limsup_n X_n" />. Démontrer que <LatexRenderer latex="L" /> est presque sûrement constante (i.e. il existe <LatexRenderer latex="\ell" /> tel que <LatexRenderer latex="P(L = \ell) = 1" />).</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La loi du 0-1 de Kolmogorov stipule que tout événement asymptotique a une probabilité dans <LatexRenderer latex="\{0, 1\}" />. Conséquence : toute variable aléatoire mesurable par rapport à la tribu asymptotique est presque sûrement constante. C'est un résultat de "rigidité" fondamental en théorie des probabilités.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="L = \limsup_n X_n = \inf_N \sup_{n \ge N} X_n" />. Cette limite ne dépend que des valeurs des <LatexRenderer latex="X_n" /> pour <LatexRenderer latex="n" /> arbitrairement grand, donc <LatexRenderer latex="L" /> est mesurable par rapport à la tribu asymptotique.</p>
                <p className="mt-2"><strong>Fonction de répartition.</strong> Soit <LatexRenderer latex="F_L(\ell) = P(L \le \ell)" />. L'événement <LatexRenderer latex="\{L \le \ell\}" /> est asymptotique. D'où, par la loi du 0-1, <LatexRenderer latex="F_L(\ell) \in \{0, 1\}" /> pour tout <LatexRenderer latex="\ell" />.</p>
                <Astuce>
                  Une FdR ne prenant que les valeurs 0 et 1, croissante et continue à droite, est nécessairement de la forme <LatexRenderer latex="F(\ell) = 0" /> si <LatexRenderer latex="\ell < \ell_0" /> et <LatexRenderer latex="F(\ell) = 1" /> si <LatexRenderer latex="\ell \ge \ell_0" /> — c'est la FdR d'une masse de Dirac.
                </Astuce>
                <p className="mt-2"><strong>Caractérisation.</strong> Or <LatexRenderer latex="F_L" /> est croissante, à valeurs dans <LatexRenderer latex="\{0, 1\}" />, et continue à droite. Donc il existe un seuil <LatexRenderer latex="\ell_0 = \sup\{\ell : F_L(\ell) = 0\}" /> tel que <LatexRenderer latex="F_L(\ell) = 0" /> pour <LatexRenderer latex="\ell < \ell_0" /> et <LatexRenderer latex="F_L(\ell) = 1" /> pour <LatexRenderer latex="\ell \ge \ell_0" />.</p>
                <p className="mt-2">Ainsi <LatexRenderer latex="P(L = \ell_0) = F_L(\ell_0) - F_L(\ell_0^-) = 1 - 0 = 1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\limsup_n X_n" /> est presque sûrement constante. Conséquence remarquable de la loi du 0-1 de Kolmogorov.
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
