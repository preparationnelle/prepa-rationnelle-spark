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

const Chapitre2EnsemblesEtApplicationsExercicesPage = () => {
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
    const num = id.split('-')[1].padStart(2, '0');
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
      chapterNumber={2}
      chapterTitle="Ensembles et applications"
      description="Opérations ensemblistes, relations, injections–surjections–bijections"
      slug="ensembles-et-applications"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "elements-de-logique",
        title: "Éléments de logique"
      }}
      nextChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & coefficients binomiaux"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Niveau Facile — Application directe" />

          <ExerciseCard
            id="facile-1"
            title="Exercice 1 - Inclusion et parties"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="A = \{2, 4, 6\}" /> et <LatexRenderer latex="B = \{2, 3, 4, 5\}" />.</p>
                <p className="mb-1">a) Vérifier si <LatexRenderer latex="A" /> est inclus dans <LatexRenderer latex="B" /> et si <LatexRenderer latex="B" /> est inclus dans <LatexRenderer latex="A" />.</p>
                <p>b) Donner l'ensemble des parties de <LatexRenderer latex="A" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'un ensemble est inclus dans un autre, on vérifie que chaque élément du premier appartient au second. Pour lister les parties d'un ensemble à n éléments, on dénombre les <LatexRenderer latex="2^n" /> sous-ensembles possibles.
                </PointMethodo>
                <p className="mb-2"><strong>a)</strong> Soit un élément quelconque de <LatexRenderer latex="A = \{2, 4, 6\}" />. On teste son appartenance à <LatexRenderer latex="B = \{2, 3, 4, 5\}" /> :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li>2 appartient à <LatexRenderer latex="B" />.</li>
                  <li>4 appartient à <LatexRenderer latex="B" />.</li>
                  <li>6 n'appartient pas à <LatexRenderer latex="B" />.</li>
                </ul>
                <p className="mb-3">Donc <LatexRenderer latex="A \not\subset B" />.</p>
                <p className="mb-3">De même, 3 appartient à <LatexRenderer latex="B" /> mais pas à <LatexRenderer latex="A" />, donc <LatexRenderer latex="B \not\subset A" />.</p>
                <p className="mb-2"><strong>b)</strong> Soit <LatexRenderer latex="A = \{2, 4, 6\}" /> qui a 3 éléments. D'où <LatexRenderer latex="|\mathcal{P}(A)| = 2^3 = 8" /> parties :</p>
                <div className="bg-stone-50 p-3 rounded border border-stone-100">
                  <p><LatexRenderer latex="\varnothing" /></p>
                  <p><LatexRenderer latex="\{2\}, \{4\}, \{6\}" /></p>
                  <p><LatexRenderer latex="\{2,4\}, \{2,6\}, \{4,6\}" /></p>
                  <p><LatexRenderer latex="\{2,4,6\}" /></p>
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="A \not\subset B" /> et <LatexRenderer latex="B \not\subset A" />. L'ensemble <LatexRenderer latex="\mathcal{P}(A)" /> contient 8 éléments listés ci-dessus.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-2"
            title="Exercice 2 - Égalité d'ensembles"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="C = \{x \in \mathbb{N} : x^2 \leq 9\}" /> et <LatexRenderer latex="D = \{0, 1, 2, 3\}" />.</p>
                <p className="mb-1">a) Écrire explicitement <LatexRenderer latex="C" /> et comparer avec <LatexRenderer latex="D" />.</p>
                <p>b) Ces ensembles sont-ils égaux ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour déterminer les éléments d'un ensemble défini par une condition, on teste les entiers naturels successifs jusqu'à ce que la condition soit violée. Deux ensembles sont égaux si et seulement si ils contiennent exactement les mêmes éléments.
                </PointMethodo>
                <p className="mb-2"><strong>a)</strong> Soit <LatexRenderer latex="x \in \mathbb{N}" />. On résout <LatexRenderer latex="x^2 \leq 9" /> :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li><LatexRenderer latex="x = 0 : 0 \leq 9" /> — vrai.</li>
                  <li><LatexRenderer latex="x = 1 : 1 \leq 9" /> — vrai.</li>
                  <li><LatexRenderer latex="x = 2 : 4 \leq 9" /> — vrai.</li>
                  <li><LatexRenderer latex="x = 3 : 9 \leq 9" /> — vrai.</li>
                  <li><LatexRenderer latex="x = 4 : 16 > 9" /> — faux.</li>
                </ul>
                <p className="mb-3">Ainsi <LatexRenderer latex="C = \{0, 1, 2, 3\}" />.</p>
                <p><strong>b)</strong> Or <LatexRenderer latex="D = \{0, 1, 2, 3\}" />. Les deux ensembles ont exactement les mêmes éléments.</p>
                <ConclusionBox>
                  <LatexRenderer latex="C = D = \{0, 1, 2, 3\}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-3"
            title="Exercice 3 - Opérations ensemblistes"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="A = \{1, 3, 5\}" /> et <LatexRenderer latex="B = \{3, 4, 5, 6\}" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="A \cap B" />, <LatexRenderer latex="A \cup B" />, et <LatexRenderer latex="A \setminus B" />.</p>
                <p>b) Calculer le complémentaire de <LatexRenderer latex="A" /> dans <LatexRenderer latex="E = \{1,2,3,4,5,6\}" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'intersection regroupe les éléments communs, l'union tous les éléments, la différence les éléments du premier ensemble absents du second, et le complémentaire les éléments de l'univers absents de l'ensemble.
                </PointMethodo>
                <p className="mb-2"><strong>a)</strong></p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li><LatexRenderer latex="A \cap B = \{3, 5\}" /> (éléments appartenant à la fois à <LatexRenderer latex="A" /> et à <LatexRenderer latex="B" />).</li>
                  <li><LatexRenderer latex="A \cup B = \{1, 3, 4, 5, 6\}" /> (éléments appartenant à <LatexRenderer latex="A" /> ou à <LatexRenderer latex="B" />).</li>
                  <li><LatexRenderer latex="A \setminus B = \{1\}" /> (éléments de <LatexRenderer latex="A" /> n'appartenant pas à <LatexRenderer latex="B" />).</li>
                </ul>
                <p className="mb-2"><strong>b)</strong> Le complémentaire de <LatexRenderer latex="A" /> dans <LatexRenderer latex="E" /> est l'ensemble des éléments de <LatexRenderer latex="E" /> n'appartenant pas à <LatexRenderer latex="A" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4, 6\}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-4"
            title="Exercice 4 - Produit cartésien"
            difficulty="Niveau: Facile"
            content={
              <p>Soient <LatexRenderer latex="X = \{a, b\}" /> et <LatexRenderer latex="Y = \{1, 2, 3\}" />. Lister les éléments de <LatexRenderer latex="X \times Y" /> et donner son cardinal.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Le produit cartésien <LatexRenderer latex="X \times Y" /> est l'ensemble de tous les couples ordonnés <LatexRenderer latex="(x, y)" /> où <LatexRenderer latex="x \in X" /> et <LatexRenderer latex="y \in Y" />. Son cardinal vaut <LatexRenderer latex="|X| \times |Y|" />.
                </PointMethodo>
                <p className="mb-2">Soit <LatexRenderer latex="X = \{a, b\}" /> et <LatexRenderer latex="Y = \{1, 2, 3\}" />. On liste tous les couples :</p>
                <div className="bg-stone-50 p-3 rounded border border-stone-100 mb-2">
                  <p><LatexRenderer latex="(a, 1), (a, 2), (a, 3)" /></p>
                  <p><LatexRenderer latex="(b, 1), (b, 2), (b, 3)" /></p>
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="|X \times Y| = |X| \times |Y| = 2 \times 3 = 6" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
            title="Exercice 5 - Complémentaire"
            difficulty="Niveau: Facile"
            content={
              <p>Dans l'ensemble <LatexRenderer latex="E = \{1, 2, 3, 4\}" />, avec <LatexRenderer latex="A = \{1, 3\}" />. Calculer le complémentaire de <LatexRenderer latex="A" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Le complémentaire d'un ensemble <LatexRenderer latex="A" /> dans <LatexRenderer latex="E" /> regroupe tous les éléments de <LatexRenderer latex="E" /> qui n'appartiennent pas à <LatexRenderer latex="A" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="E = \{1, 2, 3, 4\}" /> et <LatexRenderer latex="A = \{1, 3\}" />. Les éléments de <LatexRenderer latex="E" /> absents de <LatexRenderer latex="A" /> sont 2 et 4.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4\}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Niveau Intermédiaire — Techniques combinées" />

          <ExerciseCard
            id="inter-1"
            title="Exercice 6 - Distributivité"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Montrer que <LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer une égalité ensembliste, on procède par double inclusion : montrer que chaque ensemble est inclus dans l'autre. Dans chaque inclusion, on fixe un élément générique et on fait des disjonctions de cas.
                </PointMethodo>
                <p className="mb-3"><strong>Première inclusion :</strong> montrons que <LatexRenderer latex="A \cap (B \cup C) \subset (A \cap B) \cup (A \cap C)" />.</p>
                <p className="mb-2">Soit <LatexRenderer latex="x \in A \cap (B \cup C)" />. Alors <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B \cup C" />, c'est-à-dire <LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />.</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li>Si <LatexRenderer latex="x \in B" />, alors <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B" />, d'où <LatexRenderer latex="x \in A \cap B \subset (A \cap B) \cup (A \cap C)" />.</li>
                  <li>Si <LatexRenderer latex="x \in C" />, alors <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in C" />, d'où <LatexRenderer latex="x \in A \cap C \subset (A \cap B) \cup (A \cap C)" />.</li>
                </ul>
                <p className="mb-3"><strong>Deuxième inclusion :</strong> montrons que <LatexRenderer latex="(A \cap B) \cup (A \cap C) \subset A \cap (B \cup C)" />.</p>
                <p className="mb-2">Soit <LatexRenderer latex="x \in (A \cap B) \cup (A \cap C)" />. Alors <LatexRenderer latex="x \in A \cap B" /> ou <LatexRenderer latex="x \in A \cap C" />.</p>
                <p className="mb-1">Dans les deux cas, <LatexRenderer latex="x \in A" />. D'une part <LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />, donc <LatexRenderer latex="x \in B \cup C" />.</p>
                <p>Ainsi <LatexRenderer latex="x \in A \cap (B \cup C)" />.</p>
                <ConclusionBox>
                  Les deux inclusions étant démontrées, on conclut : <LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-2"
            title="Exercice 7 - Bijection affine"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Soit la fonction <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = 3x + 2" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="f(-1)" />, <LatexRenderer latex="f(0)" /> et <LatexRenderer latex="f(2)" />.</p>
                <p>b) Montrer que <LatexRenderer latex="f" /> est injective et surjective.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour établir l'injectivité, on suppose <LatexRenderer latex="f(x) = f(y)" /> et on en déduit <LatexRenderer latex="x = y" />. Pour la surjectivité, on fixe un élément du codomaine et on exhibe un antécédent.
                </PointMethodo>
                <p className="mb-2"><strong>a)</strong> Calculs :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li><LatexRenderer latex="f(-1) = 3(-1) + 2 = -1" />.</li>
                  <li><LatexRenderer latex="f(0) = 2" />.</li>
                  <li><LatexRenderer latex="f(2) = 8" />.</li>
                </ul>
                <p className="mb-2"><strong>b) Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" />. Alors <LatexRenderer latex="3x + 2 = 3y + 2" />, d'où <LatexRenderer latex="3x = 3y" />, donc <LatexRenderer latex="x = y" />. Ainsi <LatexRenderer latex="f" /> est injective.</p>
                <p className="mb-2"><strong>Surjectivité :</strong> Soit <LatexRenderer latex="y \in \mathbb{R}" />. Posons <LatexRenderer latex="x = \frac{y-2}{3}" />. Alors <LatexRenderer latex="x \in \mathbb{R}" /> et <LatexRenderer latex="f(x) = 3 \cdot \frac{y-2}{3} + 2 = y" />. Donc tout réel admet un antécédent.</p>
                <ConclusionBox>
                  <LatexRenderer latex="f" /> est bijective de <LatexRenderer latex="\mathbb{R}" /> dans <LatexRenderer latex="\mathbb{R}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-3"
            title="Exercice 8 - Composition"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = x + 2" />, et <LatexRenderer latex="g : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="g(x) = 2x - 1" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="f \circ g" /> et <LatexRenderer latex="g \circ f" />.</p>
                <p>b) Ces compositions sont-elles égales ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer <LatexRenderer latex="f \circ g" />, on substitue l'expression de <LatexRenderer latex="g(x)" /> dans <LatexRenderer latex="f" />. La composition n'est en général pas commutative.
                </PointMethodo>
                <p className="mb-2"><strong>a)</strong></p>
                <p className="mb-1">Soit <LatexRenderer latex="x \in \mathbb{R}" />. D'une part :</p>
                <p className="mb-2 ml-4"><LatexRenderer latex="(f \circ g)(x) = f(g(x)) = f(2x-1) = (2x-1) + 2 = 2x + 1" />.</p>
                <p className="mb-1">D'autre part :</p>
                <p className="mb-2 ml-4"><LatexRenderer latex="(g \circ f)(x) = g(f(x)) = g(x+2) = 2(x+2) - 1 = 2x + 3" />.</p>
                <p><strong>b)</strong> Or <LatexRenderer latex="2x + 1 \neq 2x + 3" /> pour tout <LatexRenderer latex="x" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="f \circ g \neq g \circ f" /> : la composition de fonctions n'est pas commutative en général.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-4"
            title="Exercice 9 - Loi de De Morgan"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Montrer que <LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  On procède par double inclusion. La clé est que « n'appartenir ni à <LatexRenderer latex="A" /> ni à <LatexRenderer latex="B" /> » équivaut à « ne pas appartenir à leur union ».
                </PointMethodo>
                <p className="mb-3">Soit un univers <LatexRenderer latex="E" /> fixé. On montre l'égalité par double inclusion.</p>
                <p className="mb-2"><strong>Première inclusion :</strong> montrons que <LatexRenderer latex="\overline{A \cup B} \subset \overline{A} \cap \overline{B}" />.</p>
                <p className="mb-3">Soit <LatexRenderer latex="x \in \overline{A \cup B}" />. Alors <LatexRenderer latex="x \notin A \cup B" />, c'est-à-dire <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />. D'où <LatexRenderer latex="x \in \overline{A}" /> et <LatexRenderer latex="x \in \overline{B}" />, soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />.</p>
                <p className="mb-2"><strong>Deuxième inclusion :</strong> montrons que <LatexRenderer latex="\overline{A} \cap \overline{B} \subset \overline{A \cup B}" />.</p>
                <p className="mb-3">Soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />. Alors <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />, donc <LatexRenderer latex="x \notin A \cup B" />, soit <LatexRenderer latex="x \in \overline{A \cup B}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" /> (première loi de De Morgan).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Niveau Concours — Type BCE/Ecricome" />

          <ExerciseCard
            id="concours-1"
            title="Exercice 10 - Cardinal d'applications"
            difficulty="Niveau: Concours"
            content={
              <p>Soient <LatexRenderer latex="E = \{1,2\}" /> et <LatexRenderer latex="F = \{a,b,c\}" />. Quel est le nombre d'applications de <LatexRenderer latex="E" /> dans <LatexRenderer latex="F" /> ? Quel est le nombre d'injections ?</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Le nombre d'applications de <LatexRenderer latex="E" /> dans <LatexRenderer latex="F" /> est <LatexRenderer latex="|F|^{|E|}" /> : chaque élément de <LatexRenderer latex="E" /> choisit librement son image dans <LatexRenderer latex="F" />. Le nombre d'injections est <LatexRenderer latex="|F| \times (|F|-1) \times \cdots" /> (les images doivent être distinctes).
                </PointMethodo>
                <p className="mb-3"><strong>Applications :</strong> Soit <LatexRenderer latex="f : E \to F" /> une application. Chacun des 2 éléments de <LatexRenderer latex="E" /> possède 3 images possibles dans <LatexRenderer latex="F" />, de manière indépendante. Ainsi le nombre d'applications est <LatexRenderer latex="3^2 = 9" />.</p>
                <p className="mb-3"><strong>Injections :</strong> Les images doivent être deux à deux distinctes. L'image de 1 admet 3 choix, puis celle de 2 doit être différente : 2 choix restants.</p>
                <ConclusionBox>
                  Il y a <LatexRenderer latex="9" /> applications et <LatexRenderer latex="3 \times 2 = 6" /> injections de <LatexRenderer latex="E" /> dans <LatexRenderer latex="F" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="concours-2"
            title="Exercice 11 - Bijection et dénombrabilité"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer qu'il existe une bijection entre <LatexRenderer latex="\mathbb{N}" /> et l'ensemble des multiples de 4 dans <LatexRenderer latex="\mathbb{N}" />. Donner un exemple explicite.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour exhiber une bijection entre deux ensembles infinis, on construit explicitement une application et on en vérifie l'injectivité et la surjectivité par les définitions.
                </PointMethodo>
                <p className="mb-2">Soit <LatexRenderer latex="f : \mathbb{N} \to 4\mathbb{N}" /> définie par <LatexRenderer latex="f(n) = 4n" />.</p>
                <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="f(n) = f(m)" />, c'est-à-dire <LatexRenderer latex="4n = 4m" />. En divisant par 4, on obtient <LatexRenderer latex="n = m" />.</p>
                <p className="mb-2"><strong>Surjectivité :</strong> Soit <LatexRenderer latex="y \in 4\mathbb{N}" />. Il existe <LatexRenderer latex="k \in \mathbb{N}" /> tel que <LatexRenderer latex="y = 4k" />. Ainsi <LatexRenderer latex="f(k) = y" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="f : n \mapsto 4n" /> est une bijection de <LatexRenderer latex="\mathbb{N}" /> sur <LatexRenderer latex="4\mathbb{N}" />. En particulier <LatexRenderer latex="0 \mapsto 0,\ 1 \mapsto 4,\ 2 \mapsto 8,\ \ldots" />
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="concours-3"
            title="Exercice 12 - Bijection et monotonie"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer que si <LatexRenderer latex="f" /> est continue et strictement monotone sur un intervalle <LatexRenderer latex="I" />, alors <LatexRenderer latex="f" /> est une bijection sur son image <LatexRenderer latex="f(I)" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  La stricte monotonie implique directement l'injectivité par contraposée. La surjectivité sur l'image est immédiate par définition. On cite le théorème des valeurs intermédiaires pour préciser la nature de <LatexRenderer latex="f(I)" />.
                </PointMethodo>
                <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" /> avec <LatexRenderer latex="x, y \in I" />. Si <LatexRenderer latex="x < y" />, la stricte monotonie impose <LatexRenderer latex="f(x) < f(y)" /> (ou l'inégalité inverse), ce qui contredit <LatexRenderer latex="f(x) = f(y)" />. Donc <LatexRenderer latex="x = y" />.</p>
                <p className="mb-2"><strong>Surjectivité sur <LatexRenderer latex="f(I)" /> :</strong> Par définition de l'image, tout élément de <LatexRenderer latex="f(I)" /> admet un antécédent dans <LatexRenderer latex="I" />.</p>
                <Astuce>
                  Le théorème des valeurs intermédiaires assure que <LatexRenderer latex="f(I)" /> est lui-même un intervalle, ce qui renforce le résultat.
                </Astuce>
                <ConclusionBox>
                  Toute fonction continue et strictement monotone sur <LatexRenderer latex="I" /> réalise une bijection de <LatexRenderer latex="I" /> sur <LatexRenderer latex="f(I)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="concours-4"
            title="Exercice 13 - Dénombrabilité de Q"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer que l'ensemble des rationnels <LatexRenderer latex="\mathbb{Q}" /> est dénombrable, c'est-à-dire qu'il existe une bijection avec <LatexRenderer latex="\mathbb{N}" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'un ensemble est dénombrable, on construit une énumération exhaustive de ses éléments. La méthode diagonale de Cantor permet de parcourir tous les rationnels positifs irréductibles en ordonnant par somme des termes.
                </PointMethodo>
                <p className="mb-2">On construit une énumération des rationnels positifs par la méthode diagonale de Cantor : on liste les fractions irréductibles <LatexRenderer latex="p/q" /> par ordre croissant de <LatexRenderer latex="p + q" /> :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li>Somme 2 : <LatexRenderer latex="1/1" /></li>
                  <li>Somme 3 : <LatexRenderer latex="1/2,\ 2/1" /></li>
                  <li>Somme 4 : <LatexRenderer latex="1/3,\ 3/1" /> (on saute <LatexRenderer latex="2/2" /> non irréductible)</li>
                </ul>
                <p>En ajoutant les rationnels négatifs et 0, on obtient une numérotation exhaustive de <LatexRenderer latex="\mathbb{Q}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\mathbb{Q}" /> est dénombrable : il existe une bijection de <LatexRenderer latex="\mathbb{N}" /> sur <LatexRenderer latex="\mathbb{Q}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Niveau HEC — Démonstrations avancées" />

          <ExerciseCard
            id="dur-1"
            title="Exercice 14 - Non-dénombrabilité de R"
            difficulty="Niveau: Difficile"
            content={
              <p>Montrer qu'il n'existe pas de bijection entre <LatexRenderer latex="\mathbb{N}" /> et <LatexRenderer latex="\mathbb{R}" />, en utilisant l'argument de la diagonale de Cantor.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  On procède par l'absurde : on suppose une énumération de tous les réels de <LatexRenderer latex="[0,1]" />, puis on construit explicitement un réel absent de cette liste, ce qui contredit la surjectivité supposée.
                </PointMethodo>
                <Astuce>
                  La construction diagonale consiste à choisir le <LatexRenderer latex="n" />-ième chiffre décimal du nombre construit différent du <LatexRenderer latex="n" />-ième chiffre de <LatexRenderer latex="x_n" />, assurant que le nombre diffère de chaque <LatexRenderer latex="x_n" /> en au moins un chiffre.
                </Astuce>
                <p className="mb-2">Supposons par l'absurde qu'il existe une bijection énumérant tous les réels de <LatexRenderer latex="[0,1]" /> : <LatexRenderer latex="x_1, x_2, x_3, \ldots" />.</p>
                <p className="mb-2">Chaque <LatexRenderer latex="x_n" /> admet un développement décimal <LatexRenderer latex="0{,}d_{n,1}d_{n,2}d_{n,3}\ldots" />. Construisons <LatexRenderer latex="y = 0{,}y_1 y_2 y_3 \ldots" /> par la règle :</p>
                <div className="bg-stone-50 p-2 rounded border border-stone-100 mb-2">
                  <p><LatexRenderer latex="y_n = 1" /> si <LatexRenderer latex="d_{n,n} \neq 1" />, et <LatexRenderer latex="y_n = 2" /> si <LatexRenderer latex="d_{n,n} = 1" />.</p>
                </div>
                <p>Alors <LatexRenderer latex="y" /> diffère de <LatexRenderer latex="x_n" /> à la <LatexRenderer latex="n" />-ième décimale pour tout <LatexRenderer latex="n" />, donc <LatexRenderer latex="y" /> n'est dans la liste. Contradiction.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\mathbb{R}" /> n'est pas dénombrable : son cardinal est strictement supérieur à celui de <LatexRenderer latex="\mathbb{N}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="dur-2"
            title="Exercice 15 - Cardinal de P(N)"
            difficulty="Niveau: Difficile"
            content={
              <p>Montrer que le cardinal de l'ensemble des parties de <LatexRenderer latex="\mathbb{N}" /> est strictement supérieur au cardinal de <LatexRenderer latex="\mathbb{N}" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  On procède par l'absurde en supposant une bijection de <LatexRenderer latex="\mathbb{N}" /> vers <LatexRenderer latex="\mathcal{P}(\mathbb{N})" />, puis on construit l'ensemble « menteur » de Cantor qui ne peut être l'image d'aucun entier, donnant la contradiction.
                </PointMethodo>
                <p className="mb-2">Supposons par l'absurde qu'il existe une bijection <LatexRenderer latex="f : \mathbb{N} \to \mathcal{P}(\mathbb{N})" />.</p>
                <p className="mb-2">Posons <LatexRenderer latex="S = \{n \in \mathbb{N} : n \notin f(n)\}" />. Soit <LatexRenderer latex="S \in \mathcal{P}(\mathbb{N})" />, donc <LatexRenderer latex="S" /> admet un antécédent <LatexRenderer latex="m" /> avec <LatexRenderer latex="f(m) = S" />.</p>
                <div className="border-l-2 border-red-200 pl-3 my-2">
                  <p>Si <LatexRenderer latex="m \in S" /> : par définition de <LatexRenderer latex="S" />, <LatexRenderer latex="m \notin f(m) = S" />. Contradiction.</p>
                  <p>Si <LatexRenderer latex="m \notin S" /> : par définition de <LatexRenderer latex="S" />, <LatexRenderer latex="m \in S" />. Contradiction.</p>
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\mathcal{P}(\mathbb{N})" /> n'est pas en bijection avec <LatexRenderer latex="\mathbb{N}" /> : son cardinal est strictement supérieur.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre2EnsemblesEtApplicationsExercicesPage;
