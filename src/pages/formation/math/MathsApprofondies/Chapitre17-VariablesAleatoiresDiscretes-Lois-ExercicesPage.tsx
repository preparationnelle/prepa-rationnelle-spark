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

const Chapitre17VariablesAleatoiresDiscretesLoisExercicesPage = () => {
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
      chapterNumber={17}
      chapterTitle="Variables aléatoires discrètes"
      description="Exercices sur les lois usuelles, calculs d'espérance et de variance."
      slug="variables-aleatoires-discretes-lois"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "espaces-probabilises-et-conditionnement",
        title: "Espaces Probabilisés"
      }}
      nextChapter={{
        slug: "convergences-theoremes-limites",
        title: "Convergences & Théorèmes Limites"
      }}
    >
      <div className="space-y-8">

        <section id="facile">
          <DifficultyHeader level="Facile" />
          <ExerciseCard
            id="ex-01"
            title="Loi binomiale B(10, 0,3)"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable aléatoire suivant la loi binomiale <LatexRenderer latex="\mathcal{B}(10,\, 0{,}3)" />.</p>
                <p>1. Calculer <LatexRenderer latex="P(X = 3)" />.</p>
                <p>2. Donner l'espérance <LatexRenderer latex="E(X)" /> et la variance <LatexRenderer latex="V(X)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une loi binomiale <LatexRenderer latex="\mathcal{B}(n, p)" />, identifier d'abord <LatexRenderer latex="X(\Omega) = \{0, 1, \dots, n\}" />. La formule générale est <LatexRenderer latex="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" />. L'espérance et la variance se lisent directement : <LatexRenderer latex="E(X) = np" /> et <LatexRenderer latex="V(X) = np(1-p)" /> (formule de König-Huygens non nécessaire ici).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X \sim \mathcal{B}(10,\, 0{,}3)" />, donc <LatexRenderer latex="X(\Omega) = \{0, 1, \dots, 10\}" />.</p>
                <p className="mt-2"><strong>1.</strong> Par la formule de la loi binomiale :</p>
                <LatexRenderer latex="\displaystyle P(X = 3) = \binom{10}{3}(0{,}3)^3(0{,}7)^7 = 120 \times 0{,}027 \times 0{,}0824 \approx 0{,}267." />
                <p className="mt-2"><strong>2.</strong> D'où, par les formules de la loi <LatexRenderer latex="\mathcal{B}(n,p)" /> :</p>
                <LatexRenderer latex="E(X) = np = 10 \times 0{,}3 = 3." />
                <LatexRenderer latex="V(X) = np(1-p) = 10 \times 0{,}3 \times 0{,}7 = 2{,}1." />
                <ConclusionBox>
                  <LatexRenderer latex="P(X=3) \approx 0{,}267" />, <LatexRenderer latex="E(X) = 3" />, <LatexRenderer latex="V(X) = 2{,}1" />.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-02"
            title="Loi géométrique — Absence de mémoire"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="T \sim \mathcal{G}(p)" /> avec <LatexRenderer latex="p \in \,]0, 1[" />.</p>
                <p>1. Calculer <LatexRenderer latex="P(T > k)" /> pour tout <LatexRenderer latex="k \in \mathbb{N}" />.</p>
                <p>2. Démontrer la propriété d'absence de mémoire : <LatexRenderer latex="P(T > n+m \mid T > n) = P(T > m)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une loi géométrique <LatexRenderer latex="\mathcal{G}(p)" />, <LatexRenderer latex="T(\Omega) = \mathbb{N}^*" /> et <LatexRenderer latex="P(T=k) = p(1-p)^{k-1}" />. La queue de distribution <LatexRenderer latex="P(T>k)" /> se calcule en sommant une série géométrique. L'absence de mémoire se prouve en exprimant la probabilité conditionnelle via les queues.
                </PointMethodo>
                <p><strong>1.</strong> Soit <LatexRenderer latex="T \sim \mathcal{G}(p)" />, donc <LatexRenderer latex="T(\Omega) = \mathbb{N}^*" />. Pour <LatexRenderer latex="k \in \mathbb{N}" /> :</p>
                <LatexRenderer latex="\displaystyle P(T > k) = \sum_{j=k+1}^{+\infty} p(1-p)^{j-1} = p(1-p)^k \cdot \frac{1}{1-(1-p)} = (1-p)^k." />
                <p className="mt-2"><strong>2.</strong> Ainsi, pour <LatexRenderer latex="n, m \in \mathbb{N}" /> :</p>
                <LatexRenderer latex="\displaystyle P(T > n+m \mid T > n) = \frac{P(T > n+m)}{P(T > n)} = \frac{(1-p)^{n+m}}{(1-p)^n} = (1-p)^m = P(T > m)." />
                <ConclusionBox>
                  <LatexRenderer latex="P(T > k) = (1-p)^k" />. La loi géométrique est la seule loi discrète sans mémoire.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="intermediaire">
          <DifficultyHeader level="Intermédiaire" />
          <ExerciseCard
            id="ex-03"
            title="Approximation de Poisson"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Une usine produit des pièces avec une probabilité de défaut <LatexRenderer latex="p = 0{,}02" />. On prélève un lot de <LatexRenderer latex="n = 100" /> pièces. Soit <LatexRenderer latex="X" /> le nombre de pièces défectueuses.</p>
                <p>1. Quelle est la loi exacte de <LatexRenderer latex="X" /> ?</p>
                <p>2. Par quelle loi peut-on l'approcher ? Justifier.</p>
                <p>3. Estimer <LatexRenderer latex="P(X \le 2)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La somme de <LatexRenderer latex="n" /> épreuves de Bernoulli indépendantes de même paramètre suit une loi binomiale. Lorsque <LatexRenderer latex="n" /> est grand, <LatexRenderer latex="p" /> petit et <LatexRenderer latex="np" /> modéré (de l'ordre de 1 à 10), on approche par une loi de Poisson <LatexRenderer latex="\mathcal{P}(\lambda)" /> avec <LatexRenderer latex="\lambda = np" />.
                </PointMethodo>
                <p><strong>1.</strong> Soit <LatexRenderer latex="X(\Omega) = \{0, 1, \dots, 100\}" />. Les tirages sont indépendants avec probabilité de succès constante <LatexRenderer latex="p = 0{,}02" />, donc <LatexRenderer latex="X \sim \mathcal{B}(100,\, 0{,}02)" />.</p>
                <p className="mt-2"><strong>2.</strong> Or <LatexRenderer latex="n = 100" /> est grand, <LatexRenderer latex="p = 0{,}02" /> est petit, et <LatexRenderer latex="\lambda = np = 2" /> est modéré. On approche par <LatexRenderer latex="X \approx Y \sim \mathcal{P}(2)" />.</p>
                <p className="mt-2"><strong>3.</strong> Par le <strong>théorème de transfert</strong> appliqué à la loi de Poisson :</p>
                <LatexRenderer latex="\displaystyle P(X \le 2) \approx e^{-2}\!\left(1 + 2 + \frac{4}{2}\right) = 5e^{-2} \approx 0{,}677." />
                <ConclusionBox>
                  <LatexRenderer latex="X \sim \mathcal{B}(100,\, 0{,}02) \approx \mathcal{P}(2)" /> et <LatexRenderer latex="P(X \le 2) \approx 0{,}677" />.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-04"
            title="Minimum de lois géométriques"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X \sim \mathcal{G}(p)" /> et <LatexRenderer latex="Y \sim \mathcal{G}(q)" /> indépendantes.</p>
                <p>Déterminer la loi de <LatexRenderer latex="Z = \min(X, Y)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La loi du minimum se traite via la fonction de survie : <LatexRenderer latex="P(\min(X,Y) > k) = P(X > k) \cap P(Y > k)" />. L'indépendance permet de factoriser. On reconnaît alors la queue d'une loi géométrique.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="Z = \min(X, Y)" />, <LatexRenderer latex="Z(\Omega) \subset \mathbb{N}^*" />. Pour <LatexRenderer latex="k \in \mathbb{N}" /> :</p>
                <LatexRenderer latex="\displaystyle P(Z > k) = P(X > k,\, Y > k)." />
                <p className="mt-2">Or <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont indépendantes (donné par l'énoncé), donc :</p>
                <LatexRenderer latex="\displaystyle P(Z > k) = P(X > k)\,P(Y > k) = (1-p)^k(1-q)^k = \bigl((1-p)(1-q)\bigr)^k." />
                <p className="mt-2">Ainsi <LatexRenderer latex="P(Z > k) = (1 - r)^k" /> avec <LatexRenderer latex="r = 1 - (1-p)(1-q) = p + q - pq" />. On reconnaît la queue de distribution d'une loi <LatexRenderer latex="\mathcal{G}(r)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="Z = \min(X, Y) \sim \mathcal{G}(p + q - pq)" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="difficile">
          <DifficultyHeader level="Difficile" />
          <ExerciseCard
            id="ex-05"
            title="Couple et loi conjointe"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X, Y)" /> un couple de loi conjointe <LatexRenderer latex="P(X=i,\, Y=j) = c \cdot \dfrac{1}{i!\, j!}" /> pour <LatexRenderer latex="i, j \ge 1" />.</p>
                <p>1. Déterminer la constante <LatexRenderer latex="c" />.</p>
                <p>2. Déterminer les lois marginales. <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont-elles indépendantes ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La constante de normalisation s'obtient en imposant que la somme de toutes les probabilités vaut 1. La somme double se factorise en produit de deux sommes simples. L'indépendance se vérifie en comparant <LatexRenderer latex="P(X=i, Y=j)" /> et <LatexRenderer latex="P(X=i)P(Y=j)" />.
                </PointMethodo>
                <Astuce>
                  Rappel : <LatexRenderer latex="\sum_{k \ge 1} \frac{1}{k!} = e - 1" />.
                </Astuce>
                <p><strong>1.</strong> La somme totale des probabilités doit valoir 1 :</p>
                <LatexRenderer latex="\displaystyle \sum_{i,j \ge 1} \frac{c}{i!\,j!} = c \left(\sum_{i \ge 1} \frac{1}{i!}\right)\!\left(\sum_{j \ge 1} \frac{1}{j!}\right) = c\,(e-1)^2 = 1." />
                <p className="mt-2">D'où <LatexRenderer latex="c = \dfrac{1}{(e-1)^2}" />.</p>
                <p className="mt-2"><strong>2.</strong> Par le <strong>théorème de transfert</strong> (somme sur <LatexRenderer latex="j" />) :</p>
                <LatexRenderer latex="\displaystyle P(X=i) = \sum_{j \ge 1} \frac{c}{i!\,j!} = \frac{c}{i!}(e-1) = \frac{1}{(e-1)\,i!}." />
                <p className="mt-2">De même <LatexRenderer latex="P(Y=j) = \dfrac{1}{(e-1)\,j!}" />. Or :</p>
                <LatexRenderer latex="\displaystyle P(X=i)\,P(Y=j) = \frac{1}{(e-1)^2\,i!\,j!} = P(X=i,\, Y=j)." />
                <p className="mt-2">L'indépendance est ainsi démontrée.</p>
                <ConclusionBox>
                  <LatexRenderer latex="c = \dfrac{1}{(e-1)^2}" />. Les lois marginales sont des lois de Poisson tronquées en 0. <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont indépendantes.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="concours">
          <DifficultyHeader level="Concours" />
          <ExerciseCard
            id="ex-06"
            title="Problème du collectionneur de coupons"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>On tire des nombres uniformément dans <LatexRenderer latex="\{1, \dots, N\}" /> avec remise. Soit <LatexRenderer latex="T" /> le nombre de tirages nécessaires pour avoir obtenu tous les nombres.</p>
                <p>1. Soit <LatexRenderer latex="T_i" /> le nombre de tirages supplémentaires pour passer de <LatexRenderer latex="i-1" /> valeurs distinctes à <LatexRenderer latex="i" />. Quelle est la loi de <LatexRenderer latex="T_i" /> ?</p>
                <p>2. En déduire <LatexRenderer latex="E(T)" />.</p>
                <p>3. Donner un équivalent de <LatexRenderer latex="E(T)" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Décomposer <LatexRenderer latex="T" /> en somme de variables indépendantes <LatexRenderer latex="T_i" /> correspondant à chaque « phase ». Chaque phase est une suite de Bernoulli jusqu'au premier succès, donc suit une loi géométrique. La linéarité de l'espérance donne <LatexRenderer latex="E(T) = \sum E(T_i)" />.
                </PointMethodo>
                <p><strong>1.</strong> Quand on possède déjà <LatexRenderer latex="i-1" /> valeurs distinctes, la probabilité de tirer une valeur nouvelle est <LatexRenderer latex="p_i = \dfrac{N - (i-1)}{N}" />. Les tirages sont indépendants jusqu'au succès, donc <LatexRenderer latex="T_i \sim \mathcal{G}(p_i)" />.</p>
                <p className="mt-2"><strong>2.</strong> Soit <LatexRenderer latex="T = T_1 + \cdots + T_N" /> (décomposition exacte). Par linéarité de l'espérance et formule de l'espérance d'une loi géométrique :</p>
                <LatexRenderer latex="\displaystyle E(T) = \sum_{i=1}^N \frac{1}{p_i} = \sum_{i=1}^N \frac{N}{N-i+1} = N \sum_{k=1}^N \frac{1}{k}." />
                <p className="mt-2"><strong>3.</strong> Or la série harmonique vérifie <LatexRenderer latex="\displaystyle \sum_{k=1}^N \frac{1}{k} \sim \ln N" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="E(T) = N \displaystyle\sum_{k=1}^N \frac{1}{k} \sim N \ln N" /> quand <LatexRenderer latex="N \to +\infty" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre17VariablesAleatoiresDiscretesLoisExercicesPage;
