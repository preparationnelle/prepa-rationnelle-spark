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

const Chapitre8PolynomesExercicesPage = () => {
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
      chapterNumber={8}
      chapterTitle="Polynômes"
      description="Exercices sur les racines, factorisations, et suites de polynômes."
      slug="polynomes"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "nuplets-variables-aleatoires",
        title: "n-uplets de variables aléatoires"
      }}
      nextChapter={{
        slug: "couple-variables-aleatoires",
        title: "Couple de variables aléatoires"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader level="Module 1 — Racines & Factorisation" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1 — Racines réelles et factorisation"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Déterminer les racines réelles et factoriser les polynômes suivants :</p>
                <div className="pl-6 mt-4 space-y-2">
                  <p>1. <LatexRenderer latex="P(x) = x^3 - 8" /></p>
                  <p>2. <LatexRenderer latex="P(x) = x^3 - 3x^2 + 3x - 2" /></p>
                  <p>3. <LatexRenderer latex="P(x) = 2x^3 - x^2 - 2x + 1" /></p>
                  <p>4. <LatexRenderer latex="P(x) = x^3 - 2x^2 - 5x + 6" /></p>
                  <p>5. <LatexRenderer latex="P(x) = x^4 - 5x^3 + 7x^2 - 3x" /></p>
                  <p>6. <LatexRenderer latex="P(x) = x^4 - 2x^2 + 1" /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour factoriser un polynôme, chercher d'abord une racine entière évidente parmi les diviseurs du terme constant, puis effectuer la division euclidienne. Pour un polynôme bicarré, poser <LatexRenderer latex="u = x^2" /> pour se ramener au degré 2.
                </PointMethodo>
                <Astuce>
                  L'identité remarquable <LatexRenderer latex="a^3 - b^3 = (a-b)(a^2+ab+b^2)" /> s'applique directement à <LatexRenderer latex="x^3 - 8 = x^3 - 2^3" />.
                </Astuce>
                <p><strong>1.</strong> <LatexRenderer latex="x^3-8 = (x-2)(x^2+2x+4)" />. Or le discriminant de <LatexRenderer latex="x^2+2x+4" /> vaut <LatexRenderer latex="\Delta = 4-16 = -12 < 0" />. Donc la seule racine réelle est <LatexRenderer latex="x = 2" />.</p>
                <p><strong>2.</strong> Soit <LatexRenderer latex="\alpha = 2" />. On vérifie : <LatexRenderer latex="8 - 12 + 6 - 2 = 0" />. D'où <LatexRenderer latex="P(x) = (x-2)(x^2-x+1)" />. Le discriminant de <LatexRenderer latex="x^2-x+1" /> vaut <LatexRenderer latex="\Delta = 1-4 = -3 < 0" />. Donc la seule racine réelle est <LatexRenderer latex="x = 2" />.</p>
                <p><strong>3.</strong> Les entiers <LatexRenderer latex="\pm 1" /> sont candidats. On vérifie <LatexRenderer latex="P(1) = 2-1-2+1 = 0" /> et <LatexRenderer latex="P(-1) = -2-1+2+1 = 0" />. D'où <LatexRenderer latex="P(x) = (x-1)(x+1)(2x-1)" />. Les racines réelles sont <LatexRenderer latex="x \in \{-1,\, \tfrac{1}{2},\, 1\}" />.</p>
                <p><strong>4.</strong> On vérifie <LatexRenderer latex="P(1) = 1-2-5+6 = 0" />. Après division : <LatexRenderer latex="P(x) = (x-1)(x^2-x-6) = (x-1)(x-3)(x+2)" />. Les racines sont <LatexRenderer latex="x \in \{-2,\, 1,\, 3\}" />.</p>
                <p><strong>5.</strong> On factorise <LatexRenderer latex="x" /> : <LatexRenderer latex="P(x) = x(x^3 - 5x^2 + 7x - 3)" />. On vérifie <LatexRenderer latex="Q(1) = 1-5+7-3 = 0" />, d'où <LatexRenderer latex="Q(x) = (x-1)(x^2-4x+3) = (x-1)^2(x-3)" />. Ainsi <LatexRenderer latex="P(x) = x(x-1)^2(x-3)" />. Les racines sont <LatexRenderer latex="0" /> (simple), <LatexRenderer latex="1" /> (double), <LatexRenderer latex="3" /> (simple).</p>
                <p><strong>6.</strong> <LatexRenderer latex="P(x) = x^4 - 2x^2 + 1 = (x^2-1)^2 = (x-1)^2(x+1)^2" />. Les racines sont <LatexRenderer latex="-1" /> et <LatexRenderer latex="1" />, toutes deux doubles.</p>
                <ConclusionBox>
                  Les factorisations sont : <LatexRenderer latex="(x-2)(x^2+2x+4)" /> ; <LatexRenderer latex="(x-2)(x^2-x+1)" /> ; <LatexRenderer latex="(x-1)(x+1)(2x-1)" /> ; <LatexRenderer latex="(x+2)(x-1)(x-3)" /> ; <LatexRenderer latex="x(x-1)^2(x-3)" /> ; <LatexRenderer latex="(x-1)^2(x+1)^2" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader level="Module 2 — Suites de Polynômes" />

          <ExerciseCard
            id="ex2"
            title="Exercice 2 — Polynôme à racines en progression arithmétique"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P \in \mathbb{R}[X]" /> tel que <LatexRenderer latex="P(x+1)=P(x)" /> pour tout <LatexRenderer latex="x \in \mathbb{R}" />.</p>
                <p>Montrer que si <LatexRenderer latex="P" /> possède une racine réelle, alors <LatexRenderer latex="P=0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Lorsqu'une relation fonctionnelle génère une suite de racines, on utilise le fait qu'un polynôme non nul ne peut avoir qu'un nombre fini de racines (au plus son degré).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\alpha \in \mathbb{R}" /> une racine de <LatexRenderer latex="P" />, c'est-à-dire <LatexRenderer latex="P(\alpha) = 0" />.</p>
                <p>Or la relation <LatexRenderer latex="P(x+1) = P(x)" /> donne, par récurrence : pour tout <LatexRenderer latex="n \in \mathbb{N}" />, <LatexRenderer latex="P(\alpha + n) = P(\alpha) = 0" />.</p>
                <p>Ainsi la famille <LatexRenderer latex="(\alpha + n)_{n \in \mathbb{N}}" /> est une suite infinie de racines distinctes de <LatexRenderer latex="P" />.</p>
                <p>Or un polynôme non nul de degré <LatexRenderer latex="d" /> possède au plus <LatexRenderer latex="d" /> racines réelles (comptées avec multiplicité). Donc <LatexRenderer latex="P" /> ne peut être non nul.</p>
                <ConclusionBox>
                  Donc <LatexRenderer latex="P = 0" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3 — Suite de polynômes par récurrence"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P_0 = 1" /> et <LatexRenderer latex="P_{n+1}(x) = xP_n(x) + 1" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
                <p>Déterminer l'expression explicite de <LatexRenderer latex="P_n(x)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Face à une suite de polynômes définie par récurrence, calculer les premiers termes pour dégager une conjecture, puis la démontrer par récurrence.
                </PointMethodo>
                <Astuce>
                  La somme <LatexRenderer latex="\sum_{k=0}^{n} x^k" /> est une série géométrique, qui se simplifie en <LatexRenderer latex="\frac{x^{n+1}-1}{x-1}" /> pour <LatexRenderer latex="x \neq 1" />.
                </Astuce>
                <p><strong>Calcul des premiers termes :</strong> <LatexRenderer latex="P_1(x) = x + 1" />, <LatexRenderer latex="P_2(x) = x^2 + x + 1" />, <LatexRenderer latex="P_3(x) = x^3 + x^2 + x + 1" />.</p>
                <p><strong>Conjecture :</strong> <LatexRenderer latex="P_n(x) = \sum_{k=0}^{n} x^k" />.</p>
                <p><strong>Démonstration par récurrence :</strong> Au rang <LatexRenderer latex="0" />, <LatexRenderer latex="P_0 = 1 = x^0" />. Si la formule est vraie au rang <LatexRenderer latex="n" />, alors</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="P_{n+1}(x) = x P_n(x) + 1 = x \sum_{k=0}^{n} x^k + 1 = \sum_{k=1}^{n+1} x^k + x^0 = \sum_{k=0}^{n+1} x^k." />
                </div>
                <p>D'où la formule est vraie au rang <LatexRenderer latex="n+1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P_n(x) = \displaystyle\sum_{k=0}^{n} x^k = \frac{x^{n+1}-1}{x-1}" /> pour <LatexRenderer latex="x \neq 1" />, et <LatexRenderer latex="P_n(1) = n+1" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4 — Suite géométrique de polynômes"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P_0 = 1" /> et <LatexRenderer latex="P_{n+1}(x) = (2x-1)P_n(x)" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
                <p>Déterminer l'expression explicite, le degré et le coefficient dominant de <LatexRenderer latex="P_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Lorsqu'une suite de polynômes est définie par une récurrence multiplicative, reconnaître une suite géométrique de terme général obtenu par produit itéré.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />. La relation <LatexRenderer latex="P_{n+1}(x) = (2x-1) P_n(x)" /> donne, par produit itéré :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="P_n(x) = (2x-1)^n P_0(x) = (2x-1)^n." />
                </div>
                <p>Ainsi <LatexRenderer latex="P_n" /> est un polynôme de degré <LatexRenderer latex="n" />.</p>
                <p>D'où le coefficient dominant de <LatexRenderer latex="P_n" /> est <LatexRenderer latex="2^n" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P_n(x) = (2x-1)^n" />, de degré <LatexRenderer latex="n" /> et de coefficient dominant <LatexRenderer latex="2^n" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader level="Module 3 — Problèmes avancés" />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 — Télescopage et somme des carrés"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Trouver <LatexRenderer latex="P \in \mathbb{R}_3[X]" /> tel que <LatexRenderer latex="P(x+1) - P(x) = x^2" />. En déduire la valeur de <LatexRenderer latex="\displaystyle\sum_{k=0}^{n} k^2" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour trouver un polynôme vérifiant une équation aux différences finies, poser la forme générale avec coefficients indéterminés et identifier. La somme s'obtient ensuite par télescopage.
                </PointMethodo>
                <Astuce>
                  Si <LatexRenderer latex="P(x+1) - P(x) = x^2" />, le terme de plus haut degré de gauche est de degré <LatexRenderer latex="\deg P - 1" />. Donc <LatexRenderer latex="\deg P = 3" />.
                </Astuce>
                <p><strong>Recherche de P :</strong> Soit <LatexRenderer latex="P(x) = ax^3 + bx^2 + cx + d" />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="P(x+1) - P(x) = 3ax^2 + (3a+2b)x + (a+b+c)." />
                </div>
                <p>Par identification avec <LatexRenderer latex="x^2" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="3a = 1,\quad 3a + 2b = 0,\quad a + b + c = 0." />
                </div>
                <p>D'où <LatexRenderer latex="a = \tfrac{1}{3}" />, <LatexRenderer latex="b = -\tfrac{1}{2}" />, <LatexRenderer latex="c = \tfrac{1}{6}" />, et <LatexRenderer latex="d" /> libre (on pose <LatexRenderer latex="d = 0" />).</p>
                <p><strong>Calcul de la somme par télescopage :</strong></p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\sum_{k=0}^{n} k^2 = \sum_{k=0}^{n} \bigl(P(k+1) - P(k)\bigr) = P(n+1) - P(0) = \frac{(n+1)^3}{3} - \frac{(n+1)^2}{2} + \frac{n+1}{6}." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\displaystyle\sum_{k=0}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 — Dérivation du binôme et identité combinatoire"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Calculer <LatexRenderer latex="\displaystyle\sum_{k=0}^{n} k \binom{n}{k}" /> en dérivant <LatexRenderer latex="(1+x)^n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour calculer une somme faisant intervenir un facteur <LatexRenderer latex="k" /> devant un coefficient binomial, dériver la formule du binôme de Newton par rapport à <LatexRenderer latex="x" />, puis évaluer en un point judicieux.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. La formule du binôme donne :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="(1+x)^n = \sum_{k=0}^{n} \binom{n}{k} x^k." />
                </div>
                <p>Or on dérive terme à terme (la série est un polynôme, la dérivation est licite) :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="n(1+x)^{n-1} = \sum_{k=0}^{n} k \binom{n}{k} x^{k-1}." />
                </div>
                <p>Ainsi, en évaluant en <LatexRenderer latex="x = 1" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="n \cdot 2^{n-1} = \sum_{k=0}^{n} k \binom{n}{k}." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\displaystyle\sum_{k=0}^{n} k \binom{n}{k} = n \cdot 2^{n-1}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 4 — Racines et factorisation" />

          <ExerciseCard
            id="ex7"
            title="Multiplicité d'une racine par les dérivées"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P(X) = X^3 - 3X + 2" />.</p>
                <p>Déterminer la multiplicité de la racine <LatexRenderer latex="1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Une racine <LatexRenderer latex="\alpha" /> est de multiplicité <LatexRenderer latex="m" /> ssi <LatexRenderer latex="P(\alpha) = P'(\alpha) = \ldots = P^{(m-1)}(\alpha) = 0" /> et <LatexRenderer latex="P^{(m)}(\alpha) \ne 0" />. On dérive successivement et on évalue jusqu'à trouver une dérivée non nulle.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="P(X) = X^3 - 3X + 2" />. Or <LatexRenderer latex="P(1) = 1 - 3 + 2 = 0" />. Donc 1 est racine.</p>
                <p className="mt-2">Calcul de <LatexRenderer latex="P'(X) = 3X^2 - 3" />. <LatexRenderer latex="P'(1) = 0" />. La racine 1 est donc d'ordre au moins 2.</p>
                <p className="mt-2">Calcul de <LatexRenderer latex="P''(X) = 6X" />. <LatexRenderer latex="P''(1) = 6 \ne 0" />. La racine 1 est donc d'ordre exactement 2.</p>
                <p className="mt-2"><strong>Vérification par factorisation.</strong> <LatexRenderer latex="P(X) = (X - 1)^2 (X + 2)" /> (division euclidienne).</p>
                <Astuce>
                  Vérification : <LatexRenderer latex="(X-1)^2(X+2) = (X^2 - 2X + 1)(X + 2) = X^3 + 2X^2 - 2X^2 - 4X + X + 2 = X^3 - 3X + 2" />. ✓
                </Astuce>
                <ConclusionBox>
                  La racine 1 est de multiplicité 2 dans <LatexRenderer latex="P" />. Factorisation : <LatexRenderer latex="P(X) = (X-1)^2 (X+2)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Formule de Taylor pour les polynômes" />

          <ExerciseCard
            id="ex8"
            title="Développement par Taylor d'un polynôme en a"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P(X) = X^4 - 3X^3 + 2X^2 + X - 1" />.</p>
                <p>Déterminer l'écriture de <LatexRenderer latex="P" /> selon les puissances de <LatexRenderer latex="(X - 1)" /> (formule de Taylor en 1).</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La formule de Taylor pour un polynôme <LatexRenderer latex="P" /> de degré <LatexRenderer latex="n" /> est exacte : <LatexRenderer latex="P(X) = \sum_{k=0}^n \frac{P^{(k)}(a)}{k!} (X - a)^k" />. Cette formule donne le développement de <LatexRenderer latex="P" /> en puissances de <LatexRenderer latex="(X - a)" /> à partir des dérivées successives en <LatexRenderer latex="a" />.
                </PointMethodo>
                <p>Calcul des dérivées en <LatexRenderer latex="a = 1" /> :</p>
                <LatexRenderer latex="P(X) = X^4 - 3X^3 + 2X^2 + X - 1, \quad P(1) = 1 - 3 + 2 + 1 - 1 = 0." />
                <LatexRenderer latex="P'(X) = 4X^3 - 9X^2 + 4X + 1, \quad P'(1) = 4 - 9 + 4 + 1 = 0." />
                <LatexRenderer latex="P''(X) = 12X^2 - 18X + 4, \quad P''(1) = 12 - 18 + 4 = -2." />
                <LatexRenderer latex="P^{(3)}(X) = 24X - 18, \quad P^{(3)}(1) = 6." />
                <LatexRenderer latex="P^{(4)}(X) = 24, \quad P^{(4)}(1) = 24." />
                <Astuce>
                  Comme <LatexRenderer latex="P(1) = P'(1) = 0" />, 1 est racine double de <LatexRenderer latex="P" />, donc <LatexRenderer latex="P" /> est divisible par <LatexRenderer latex="(X-1)^2" />.
                </Astuce>
                <p className="mt-2">Par la formule de Taylor :</p>
                <LatexRenderer latex="P(X) = 0 + 0 + \frac{-2}{2}(X-1)^2 + \frac{6}{6}(X-1)^3 + \frac{24}{24}(X-1)^4." />
                <LatexRenderer latex="P(X) = -(X-1)^2 + (X-1)^3 + (X-1)^4." />
                <ConclusionBox>
                  <LatexRenderer latex="P(X) = -(X-1)^2 + (X-1)^3 + (X-1)^4" />, montrant que 1 est racine double.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Polynômes scindés à racines simples"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P \in \mathbb{R}[X]" /> de degré <LatexRenderer latex="n" />.</p>
                <p>Démontrer que <LatexRenderer latex="P" /> est scindé à racines simples sur <LatexRenderer latex="\mathbb{R}" /> si et seulement si <LatexRenderer latex="\mathrm{pgcd}(P, P') = 1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Une racine est multiple ssi elle est racine commune à <LatexRenderer latex="P" /> et <LatexRenderer latex="P'" />. La caractérisation par PGCD utilise le fait que les racines communes correspondent au PGCD.
                </PointMethodo>
                <p><strong>Sens 1 : scindé à racines simples ⇒ pgcd = 1.</strong> Soit <LatexRenderer latex="P = c \prod_{i=1}^n (X - \alpha_i)" /> avec les <LatexRenderer latex="\alpha_i" /> deux à deux distincts.</p>
                <p>Or pour chaque <LatexRenderer latex="\alpha_i" />, <LatexRenderer latex="P(\alpha_i) = 0" /> mais <LatexRenderer latex="P'(\alpha_i) = c \prod_{j \ne i} (\alpha_i - \alpha_j) \ne 0" /> (car les <LatexRenderer latex="\alpha_j" /> sont distincts). Donc <LatexRenderer latex="P" /> et <LatexRenderer latex="P'" /> n'ont aucune racine commune.</p>
                <p className="mt-2">D'où <LatexRenderer latex="\mathrm{pgcd}(P, P') = 1" />.</p>
                <Astuce>
                  Le PGCD de deux polynômes capture leurs racines communes (avec multiplicités). PGCD = 1 signifie "aucune racine commune".
                </Astuce>
                <p className="mt-2"><strong>Sens 2 : pgcd = 1 ⇒ racines simples.</strong> Par contraposée : supposons que <LatexRenderer latex="P" /> ait une racine multiple <LatexRenderer latex="\alpha" /> de multiplicité <LatexRenderer latex="m \ge 2" />. Alors <LatexRenderer latex="(X - \alpha)" /> divise <LatexRenderer latex="P" /> et <LatexRenderer latex="P'" /> (car <LatexRenderer latex="P'(\alpha) = 0" />).</p>
                <p>D'où <LatexRenderer latex="(X - \alpha)" /> divise <LatexRenderer latex="\mathrm{pgcd}(P, P')" />, donc <LatexRenderer latex="\mathrm{pgcd}(P, P') \ne 1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P" /> à racines simples <LatexRenderer latex="\iff \mathrm{pgcd}(P, P') = 1" />. Critère algorithmique fondamental.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Division euclidienne" />

          <ExerciseCard
            id="ex10"
            title="Reste de la division par (X-a)(X-b)"
            difficulty="Niveau: Concours"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P \in \mathbb{R}[X]" /> et <LatexRenderer latex="a \ne b \in \mathbb{R}" />.</p>
                <p>Déterminer le reste de la division euclidienne de <LatexRenderer latex="P" /> par <LatexRenderer latex="(X - a)(X - b)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le reste de la division par un polynôme de degré 2 est de degré <LatexRenderer latex="\le 1" />, soit de la forme <LatexRenderer latex="R(X) = \alpha X + \beta" />. On détermine <LatexRenderer latex="\alpha" /> et <LatexRenderer latex="\beta" /> en évaluant l'identité <LatexRenderer latex="P = Q \cdot D + R" /> aux racines de <LatexRenderer latex="D" />.
                </PointMethodo>
                <p>Soit la division euclidienne : <LatexRenderer latex="P(X) = Q(X)(X-a)(X-b) + R(X)" /> avec <LatexRenderer latex="\deg R \le 1" />, soit <LatexRenderer latex="R(X) = \alpha X + \beta" />.</p>
                <p className="mt-2"><strong>Évaluation en <LatexRenderer latex="X = a" /> et <LatexRenderer latex="X = b" />.</strong> Or <LatexRenderer latex="(a-a)(a-b) = 0" /> et <LatexRenderer latex="(b-a)(b-b) = 0" />, donc :</p>
                <LatexRenderer latex="P(a) = \alpha a + \beta, \quad P(b) = \alpha b + \beta." />
                <p className="mt-2"><strong>Résolution.</strong> En soustrayant : <LatexRenderer latex="P(a) - P(b) = \alpha(a - b)" />, soit <LatexRenderer latex="\alpha = (P(a) - P(b))/(a - b)" />.</p>
                <p>Et <LatexRenderer latex="\beta = P(a) - \alpha a = (a P(b) - b P(a))/(a - b)" />.</p>
                <Astuce>
                  Cette formule est l'analogue de l'interpolation de Lagrange pour 2 points : <LatexRenderer latex="R(X) = P(a) \cdot \frac{X - b}{a - b} + P(b) \cdot \frac{X - a}{b - a}" />.
                </Astuce>
                <ConclusionBox>
                  Reste : <LatexRenderer latex="R(X) = \dfrac{P(a) - P(b)}{a - b} X + \dfrac{a P(b) - b P(a)}{a - b}" />. C'est aussi le polynôme d'interpolation de Lagrange en <LatexRenderer latex="(a, P(a))" /> et <LatexRenderer latex="(b, P(b))" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 7 — Polynôme caractéristique" />

          <ExerciseCard
            id="ex11"
            title="Identité de Newton — somme des puissances de racines"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P(X) = X^2 - 3X + 1" /> de racines <LatexRenderer latex="\alpha, \beta" />.</p>
                <p>1. Calculer <LatexRenderer latex="S_n = \alpha^n + \beta^n" /> pour <LatexRenderer latex="n = 1, 2, 3, 4" />.</p>
                <p>2. Établir une relation de récurrence pour <LatexRenderer latex="(S_n)_{n \ge 0}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Les sommes <LatexRenderer latex="S_n = \alpha^n + \beta^n" /> où <LatexRenderer latex="\alpha, \beta" /> sont racines de <LatexRenderer latex="P(X) = X^2 - sX + p" /> vérifient la récurrence <LatexRenderer latex="S_{n+2} = s\,S_{n+1} - p\,S_n" /> (identité de Newton). C'est l'analogue pour les sommes des puissances de racines.
                </PointMethodo>
                <p><strong>1. Calculs.</strong> Soit <LatexRenderer latex="P(X) = X^2 - 3X + 1" />. Par les relations entre coefficients et racines : <LatexRenderer latex="\alpha + \beta = 3" />, <LatexRenderer latex="\alpha\beta = 1" />.</p>
                <p className="mt-2"><LatexRenderer latex="S_0 = 2" />, <LatexRenderer latex="S_1 = \alpha + \beta = 3" />.</p>
                <p className="mt-2"><LatexRenderer latex="S_2 = \alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 9 - 2 = 7" />.</p>
                <Astuce>
                  Identité utile : <LatexRenderer latex="(\alpha + \beta)^n = \sum_k \binom{n}{k} \alpha^k \beta^{n-k}" />, mais c'est plus direct de passer par la récurrence.
                </Astuce>
                <p className="mt-2"><strong>2. Récurrence.</strong> Or <LatexRenderer latex="\alpha^2 = 3\alpha - 1" /> et <LatexRenderer latex="\beta^2 = 3\beta - 1" /> (par <LatexRenderer latex="P(\alpha) = P(\beta) = 0" />). En multipliant par <LatexRenderer latex="\alpha^n" /> et <LatexRenderer latex="\beta^n" /> et sommant :</p>
                <LatexRenderer latex="\alpha^{n+2} + \beta^{n+2} = 3(\alpha^{n+1} + \beta^{n+1}) - (\alpha^n + \beta^n)," />
                <p>soit <LatexRenderer latex="S_{n+2} = 3 S_{n+1} - S_n" />.</p>
                <p className="mt-2"><strong>Application.</strong> <LatexRenderer latex="S_3 = 3 \cdot 7 - 3 = 18" /> et <LatexRenderer latex="S_4 = 3 \cdot 18 - 7 = 47" />.</p>
                <ConclusionBox>
                  Récurrence : <LatexRenderer latex="S_{n+2} = 3 S_{n+1} - S_n" />. Valeurs : <LatexRenderer latex="S_1 = 3, S_2 = 7, S_3 = 18, S_4 = 47" />. Cette technique est utilisée en algèbre linéaire pour calculer la trace des puissances d'une matrice diagonalisable.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre8PolynomesExercicesPage;
