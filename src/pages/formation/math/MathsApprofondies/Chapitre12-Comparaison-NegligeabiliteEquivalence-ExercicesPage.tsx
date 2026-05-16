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

const Chapitre12ComparaisonNegligeabiliteEquivalenceExercicesPage = () => {
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
      chapterNumber={12}
      chapterTitle="Comparaison — négligeabilité & équivalence"
      description="Exercices sur les relations de comparaison, équivalents et négligeabilité."
      slug="comparaison-negligeabilite-equivalence"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation-multivariee-avancee",
        title: "Optimisation Multivariée"
      }}
      nextChapter={{
        slug: "series-numeriques",
        title: "Séries Numériques"
      }}
    >
      <div className="space-y-2">

        <DifficultyHeader level="Niveau : Facile" />

        <ExerciseCard
          id="12-1"
          title="Négligeabilité — définitions et exemples"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Montrer les résultats suivants quand <LatexRenderer latex="n \to +\infty" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="\ln n = o(n)" /></li>
                <li><LatexRenderer latex="n^k = o(a^n)" /> pour tout <LatexRenderer latex="a > 1" /> et tout <LatexRenderer latex="k \in \mathbb{N}" /></li>
                <li><LatexRenderer latex="a^n = o(n!)" /> pour tout <LatexRenderer latex="a > 0" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour montrer une négligeabilité <LatexRenderer latex="f = o(g)" />, former le rapport <LatexRenderer latex="f/g" /> et montrer qu'il tend vers 0. On utilise les hiérarchies standard : logarithme ≪ puissance ≪ exponentielle ≪ factorielle.
              </PointMethodo>

              <p><strong>1.</strong> <LatexRenderer latex="\frac{\ln n}{n} \to 0" /> par croissances comparées (résultat de cours). Donc <LatexRenderer latex="\ln n = o(n)" />.</p>

              <p><strong>2.</strong> Soit <LatexRenderer latex="b = 1/a < 1" />. Or <LatexRenderer latex="\frac{n^k}{a^n} = n^k b^n" />. En posant <LatexRenderer latex="u_n = n^k b^n" />, on a <LatexRenderer latex="\frac{u_{n+1}}{u_n} = \left(\frac{n+1}{n}\right)^k b \to b < 1" />. Donc par le critère de d'Alembert, <LatexRenderer latex="u_n \to 0" />. Ainsi <LatexRenderer latex="n^k = o(a^n)" />.</p>

              <Astuce>
                Pour la factorielle, encadrer <LatexRenderer latex="a^n / n!" /> en majorant par un produit télescopique dont le rapport tend vers 0.
              </Astuce>

              <p><strong>3.</strong> Soit <LatexRenderer latex="N = \lceil 2a \rceil + 1" />. Pour <LatexRenderer latex="n > N" /> :</p>
              <p><LatexRenderer latex="\frac{a^n}{n!} = \frac{a^N}{N!} \cdot \prod_{k=N+1}^{n} \frac{a}{k} \le \frac{a^N}{N!} \cdot \left(\frac{a}{N+1}\right)^{n-N}" /></p>
              <p>D'où le majorant tend vers 0 car <LatexRenderer latex="a/(N+1) < 1/2" />. Donc <LatexRenderer latex="a^n = o(n!)" />.</p>

              <ConclusionBox>
                <p>Hiérarchie établie : <LatexRenderer latex="\ln n \ll n^k \ll a^n \ll n!" /> quand <LatexRenderer latex="n \to +\infty" />, pour <LatexRenderer latex="a > 1" />, <LatexRenderer latex="k \ge 1" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="12-2"
          title="Équivalents — calculs directs"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Donner un équivalent simple de chacune des suites suivantes quand <LatexRenderer latex="n \to +\infty" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="u_n = n^2 + 3n - 1" /></li>
                <li><LatexRenderer latex="v_n = \ln(n+1) - \ln(n-1)" /></li>
                <li><LatexRenderer latex="w_n = \sqrt{n^2 + n} - n" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour trouver un équivalent : factoriser par le terme dominant, puis utiliser que <LatexRenderer latex="1 + o(1) \sim 1" />. Pour les expressions de la forme <LatexRenderer latex="\sqrt{A} - \sqrt{B}" />, multiplier par la quantité conjuguée.
              </PointMethodo>

              <p><strong>1.</strong> <LatexRenderer latex="u_n = n^2\left(1 + \frac{3}{n} - \frac{1}{n^2}\right) \sim n^2" /> car le facteur parenthèse tend vers 1.</p>

              <p><strong>2.</strong> <LatexRenderer latex="v_n = \ln\!\left(\frac{n+1}{n-1}\right) = \ln\!\left(1 + \frac{2}{n-1}\right) \sim \frac{2}{n-1} \sim \frac{2}{n}" /> en utilisant <LatexRenderer latex="\ln(1+x) \sim x" /> quand <LatexRenderer latex="x \to 0" />.</p>

              <Astuce>
                Pour <LatexRenderer latex="w_n" />, multiplier par <LatexRenderer latex="\frac{\sqrt{n^2+n}+n}{\sqrt{n^2+n}+n}" /> pour faire apparaître une différence de carrés.
              </Astuce>

              <p><strong>3.</strong> <LatexRenderer latex="w_n = \frac{(n^2+n) - n^2}{\sqrt{n^2+n}+n} = \frac{n}{\sqrt{n^2+n}+n} = \frac{n}{n\!\left(\sqrt{1+1/n}+1\right)} \sim \frac{1}{2}" /></p>

              <ConclusionBox>
                <p><LatexRenderer latex="u_n \sim n^2" />, <LatexRenderer latex="v_n \sim \frac{2}{n}" />, <LatexRenderer latex="w_n \sim \frac{1}{2}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire" />

        <ExerciseCard
          id="12-3"
          title="Équivalents et nature de séries"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Déterminer la nature des séries de terme général suivants (préciser l'équivalent utilisé) :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="u_n = \sin\!\left(\frac{1}{n}\right)" /></li>
                <li><LatexRenderer latex="v_n = \ln\!\left(1 + \frac{1}{n^2}\right)" /></li>
                <li><LatexRenderer latex="w_n = 1 - \cos\!\left(\frac{1}{n}\right)" /></li>
              </ul>
              <p className="text-sm text-stone-500 italic">Rappel : l'équivalence préserve la nature d'une série uniquement si les termes sont à signe constant.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Remplacer le terme général par un équivalent simple en utilisant les développements limités usuels en 0 : <LatexRenderer latex="\sin x \sim x" />, <LatexRenderer latex="\ln(1+x) \sim x" />, <LatexRenderer latex="1 - \cos x \sim x^2/2" /> quand <LatexRenderer latex="x \to 0" />. Attention : l'équivalence ne préserve la nature que pour les séries à termes positifs.
              </PointMethodo>

              <p><strong>1.</strong> <LatexRenderer latex="u_n = \sin(1/n) \sim \frac{1}{n}" /> quand <LatexRenderer latex="n \to +\infty" />. Les termes <LatexRenderer latex="u_n > 0" />. Or la série de Riemann <LatexRenderer latex="\sum 1/n" /> diverge (<LatexRenderer latex="\alpha = 1 \le 1" />). Donc <LatexRenderer latex="\sum u_n" /> <strong>diverge</strong>.</p>

              <p><strong>2.</strong> <LatexRenderer latex="v_n = \ln(1 + 1/n^2) \sim \frac{1}{n^2}" />. Les termes <LatexRenderer latex="v_n > 0" />. Or <LatexRenderer latex="\sum 1/n^2" /> converge (Riemann, <LatexRenderer latex="\alpha = 2 > 1" />). Donc <LatexRenderer latex="\sum v_n" /> <strong>converge</strong>.</p>

              <p><strong>3.</strong> <LatexRenderer latex="w_n = 1 - \cos(1/n) \sim \frac{1}{2n^2}" />. Les termes <LatexRenderer latex="w_n > 0" />. Par comparaison à <LatexRenderer latex="\sum 1/n^2" /> (Riemann convergent), <LatexRenderer latex="\sum w_n" /> <strong>converge</strong>.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\sum u_n" /> diverge ; <LatexRenderer latex="\sum v_n" /> et <LatexRenderer latex="\sum w_n" /> convergent. L'équivalence a été licitement utilisée car les termes sont positifs.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="12-4"
          title="Développement asymptotique d'une somme partielle"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="S_N = \sum_{n=1}^{N} \frac{1}{n(n+1)(n+2)}" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Décomposer <LatexRenderer latex="\frac{1}{n(n+1)(n+2)}" /> en éléments simples.</li>
                <li>En déduire <LatexRenderer latex="S_N" /> explicitement, puis sa limite.</li>
                <li>Donner un équivalent de <LatexRenderer latex="S - S_N" /> quand <LatexRenderer latex="N \to +\infty" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La décomposition en éléments simples transforme une somme télescopique en une expression fermée. Pour le reste, comparer à une intégrale de Riemann ou utiliser un équivalent du terme général.
              </PointMethodo>

              <p><strong>1.</strong> On cherche <LatexRenderer latex="\frac{1}{n(n+1)(n+2)} = \frac{A}{n} + \frac{B}{n+1} + \frac{C}{n+2}" />.</p>
              <p>Par la méthode des résidus : <LatexRenderer latex="A = \frac{1}{1 \cdot 2} = \frac{1}{2}" />, <LatexRenderer latex="B = \frac{1}{(-1)(1)} = -1" />, <LatexRenderer latex="C = \frac{1}{(-2)(-1)} = \frac{1}{2}" />.</p>
              <p>Soit <LatexRenderer latex="\frac{1}{n(n+1)(n+2)} = \frac{1}{2n} - \frac{1}{n+1} + \frac{1}{2(n+2)}" />.</p>

              <Astuce>
                On peut aussi écrire <LatexRenderer latex="\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\!\left(\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right)" /> (télescopage direct).
              </Astuce>

              <p><strong>2.</strong> En utilisant la forme télescopique, <LatexRenderer latex="S_N = \frac{1}{2}\!\left(\frac{1}{1 \cdot 2} - \frac{1}{(N+1)(N+2)}\right) = \frac{1}{4} - \frac{1}{2(N+1)(N+2)}" />.</p>
              <p>D'où <LatexRenderer latex="S = \lim_{N \to +\infty} S_N = \frac{1}{4}" />.</p>

              <p><strong>3.</strong> <LatexRenderer latex="S - S_N = \frac{1}{2(N+1)(N+2)} \sim \frac{1}{2N^2}" /> quand <LatexRenderer latex="N \to +\infty" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="S_N = \frac{1}{4} - \frac{1}{2(N+1)(N+2)}" /> et <LatexRenderer latex="S = \frac{1}{4}" />. Le reste <LatexRenderer latex="S - S_N \sim \frac{1}{2N^2}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile" />

        <ExerciseCard
          id="12-5"
          title="Équivalents — forme indéterminée et composition"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Déterminer un équivalent simple de chacune des expressions quand <LatexRenderer latex="x \to 0^+" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="f(x) = \frac{e^x - 1 - x}{\sin^2 x}" /></li>
                <li><LatexRenderer latex="g(x) = x^x - 1" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour les formes indéterminées du type <LatexRenderer latex="0/0" />, développer numérateur et dénominateur à l'ordre suffisant pour faire apparaître le terme dominant. Pour <LatexRenderer latex="x^x" />, réécrire via l'exponentielle et composer les DL.
              </PointMethodo>

              <p><strong>1.</strong> Soit le numérateur <LatexRenderer latex="e^x - 1 - x = \frac{x^2}{2} + o(x^2)" /> (DL de <LatexRenderer latex="e^x" /> à l'ordre 2).</p>
              <p>Or <LatexRenderer latex="\sin x \sim x" /> donc <LatexRenderer latex="\sin^2 x \sim x^2" /> quand <LatexRenderer latex="x \to 0" />.</p>
              <p>Ainsi <LatexRenderer latex="f(x) \sim \frac{x^2/2}{x^2} = \frac{1}{2}" />.</p>

              <Astuce>
                Pour <LatexRenderer latex="x^x = e^{x \ln x}" />, noter que <LatexRenderer latex="x \ln x \to 0" /> quand <LatexRenderer latex="x \to 0^+" /> (croissances comparées), ce qui permet d'utiliser <LatexRenderer latex="e^u - 1 \sim u" /> pour <LatexRenderer latex="u \to 0" />.
              </Astuce>

              <p><strong>2.</strong> <LatexRenderer latex="g(x) = x^x - 1 = e^{x \ln x} - 1 \sim x \ln x" /> quand <LatexRenderer latex="x \to 0^+" />, car <LatexRenderer latex="x \ln x \to 0" /> et <LatexRenderer latex="e^u - 1 \sim u" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="f(x) \xrightarrow[x \to 0]{} \frac{1}{2}" /> et <LatexRenderer latex="g(x) \sim x \ln x" /> quand <LatexRenderer latex="x \to 0^+" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="12-6"
          title="Comparaison logarithmique et séries de Bertrand"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Étudier la convergence des séries suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="\sum_{n \ge 2} \frac{1}{n (\ln n)^2}" /></li>
                <li><LatexRenderer latex="\sum_{n \ge 2} \frac{1}{n \ln n}" /></li>
                <li><LatexRenderer latex="\sum_{n \ge 2} \frac{(\ln n)^3}{n^{3/2}}" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Les séries de Bertrand de la forme <LatexRenderer latex="\sum 1/(n^\alpha (\ln n)^\beta)" /> convergent si <LatexRenderer latex="\alpha > 1" />, ou si <LatexRenderer latex="\alpha = 1" /> et <LatexRenderer latex="\beta > 1" />, et divergent dans tous les autres cas. Pour les prouver, utiliser la comparaison série-intégrale.
              </PointMethodo>

              <p><strong>1.</strong> Série de Bertrand avec <LatexRenderer latex="\alpha = 1" />, <LatexRenderer latex="\beta = 2 > 1" />. Par la comparaison série-intégrale, <LatexRenderer latex="\int_2^{+\infty} \frac{dt}{t(\ln t)^2} = \left[-\frac{1}{\ln t}\right]_2^{+\infty} = \frac{1}{\ln 2}" /> converge. Donc la série <strong>converge</strong>.</p>

              <p><strong>2.</strong> Série de Bertrand avec <LatexRenderer latex="\alpha = 1" />, <LatexRenderer latex="\beta = 1" />. L'intégrale <LatexRenderer latex="\int_2^{X} \frac{dt}{t \ln t} = \ln(\ln X) - \ln(\ln 2) \to +\infty" /> diverge. Donc la série <strong>diverge</strong>.</p>

              <Astuce>
                Pour la troisième, <LatexRenderer latex="(\ln n)^3 = o(n^\varepsilon)" /> pour tout <LatexRenderer latex="\varepsilon > 0" />. Prendre <LatexRenderer latex="\varepsilon = 1/4" /> pour comparer à une série de Riemann.
              </Astuce>

              <p><strong>3.</strong> <LatexRenderer latex="\frac{(\ln n)^3}{n^{3/2}} = o\!\left(\frac{n^{1/4}}{n^{3/2}}\right) = o\!\left(\frac{1}{n^{5/4}}\right)" />. Or <LatexRenderer latex="\sum 1/n^{5/4}" /> converge (Riemann, <LatexRenderer latex="\alpha = 5/4 > 1" />). Donc <LatexRenderer latex="\sum \frac{(\ln n)^3}{n^{3/2}}" /> <strong>converge</strong>.</p>

              <ConclusionBox>
                <p>Série 1 : converge. Série 2 : diverge. Série 3 : converge.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Facile — Manipulation des notations o, O, ~" />

        <ExerciseCard
          id="12-7"
          title="Croissances comparées classiques"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Démontrer les croissances comparées suivantes en <LatexRenderer latex="+\infty" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="\ln x = o(x^\alpha)" /> pour tout <LatexRenderer latex="\alpha > 0" /></li>
                <li><LatexRenderer latex="x^\alpha = o(e^x)" /> pour tout <LatexRenderer latex="\alpha \in \mathbb{R}" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Les croissances comparées sont les outils-clés pour majorer ou minorer les fonctions à l'infini. On les démontre via la méthode standard : étudier les variations de <LatexRenderer latex="f(x)/g(x)" /> ou utiliser la dérivée de la fonction quotient.
              </PointMethodo>
              <p><strong>1. <LatexRenderer latex="\ln x = o(x^\alpha)" />.</strong> Posons <LatexRenderer latex="f(x) = \ln x / x^\alpha" /> pour <LatexRenderer latex="x > 0" />. Or :</p>
              <LatexRenderer latex="f'(x) = \frac{x^{\alpha - 1} - \alpha x^{\alpha - 1} \ln x}{x^{2\alpha}} = \frac{1 - \alpha \ln x}{x^{\alpha + 1}}." />
              <p className="mt-2">D'où <LatexRenderer latex="f' < 0" /> pour <LatexRenderer latex="x > e^{1/\alpha}" />, donc <LatexRenderer latex="f" /> est décroissante au-delà. Sa limite est nécessairement <LatexRenderer latex="\ge 0" />. Pour montrer qu'elle est nulle :</p>
              <p>Soit <LatexRenderer latex="x = e^t" /> avec <LatexRenderer latex="t \to +\infty" /> : <LatexRenderer latex="f(e^t) = t / e^{\alpha t} \to 0" /> par croissance exponentielle. D'où <LatexRenderer latex="f(x) \to 0" /> et <LatexRenderer latex="\ln x = o(x^\alpha)" />.</p>
              <Astuce>
                Méthode alternative : utiliser <LatexRenderer latex="\ln x \le 2(\sqrt{x} - 1) \le 2\sqrt{x}" /> pour <LatexRenderer latex="x \ge 1" /> (inégalité par <LatexRenderer latex="\ln' \le 1/2 \cdot t^{-1/2}" />), puis <LatexRenderer latex="2\sqrt{x}/x^\alpha = 2/x^{\alpha - 1/2} \to 0" /> pour <LatexRenderer latex="\alpha > 1/2" />.
              </Astuce>
              <p className="mt-2"><strong>2. <LatexRenderer latex="x^\alpha = o(e^x)" />.</strong> Posons <LatexRenderer latex="g(x) = x^\alpha / e^x" />. Par <LatexRenderer latex="e^x \ge \sum_{k=0}^n x^k/k!" />, en prenant <LatexRenderer latex="n = \lceil \alpha \rceil + 1" /> :</p>
              <LatexRenderer latex="e^x \ge x^{n}/n! \quad \Rightarrow \quad x^\alpha/e^x \le x^\alpha \cdot n! / x^n \to 0" />
              <p className="mt-2">car <LatexRenderer latex="\alpha < n" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="\ln x = o(x^\alpha)" /> et <LatexRenderer latex="x^\alpha = o(e^x)" />. Ordre des croissances : <LatexRenderer latex="\ln \ll x^\alpha \ll e^x" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Équivalents et négligeabilité" />

        <ExerciseCard
          id="12-8"
          title="Équivalents en 0 par DL"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Déterminer un équivalent simple en 0 pour chacune des fonctions :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="f(x) = \tan x - \sin x" /></li>
                <li><LatexRenderer latex="g(x) = (1 + x)^{1/x} - e" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour trouver un équivalent en 0, on développe à un ordre suffisant pour faire apparaître le premier terme non nul. La règle : développer à l'ordre minimum où la différence ne s'annule pas.
              </PointMethodo>
              <p><strong>1. f(x) = tan x − sin x.</strong> Soit les DL à l'ordre 3 en 0 :</p>
              <LatexRenderer latex="\tan x = x + x^3/3 + o(x^3), \quad \sin x = x - x^3/6 + o(x^3)." />
              <p className="mt-2">D'où <LatexRenderer latex="f(x) = (x^3/3) - (-x^3/6) + o(x^3) = x^3/3 + x^3/6 + o(x^3) = x^3/2 + o(x^3)" />.</p>
              <p className="mt-2">Ainsi <LatexRenderer latex="\tan x - \sin x \sim x^3/2" /> en 0.</p>
              <Astuce>
                Pour <LatexRenderer latex="(1+x)^{1/x}" /> en 0 : passer par l'exponentielle <LatexRenderer latex="(1+x)^{1/x} = e^{\ln(1+x)/x}" /> et utiliser <LatexRenderer latex="\ln(1+x)/x = 1 - x/2 + x^2/3 + o(x^2)" />.
              </Astuce>
              <p className="mt-2"><strong>2. g(x) = (1+x)^(1/x) - e.</strong> Or <LatexRenderer latex="(1+x)^{1/x} = \exp(\ln(1+x)/x) = \exp(1 - x/2 + x^2/3 + o(x^2))" />.</p>
              <LatexRenderer latex="= e \cdot \exp(-x/2 + x^2/3 + o(x^2)) = e \cdot \left(1 - x/2 + x^2/3 + (x/2)^2/2 + o(x^2)\right) = e\left(1 - x/2 + 11x^2/24 + o(x^2)\right)." />
              <p className="mt-2">D'où <LatexRenderer latex="g(x) = e \cdot (-x/2 + 11x^2/24 + o(x^2)) \sim -e x/2" /> en 0.</p>
              <ConclusionBox>
                <LatexRenderer latex="\tan x - \sin x \sim x^3/2" /> et <LatexRenderer latex="(1+x)^{1/x} - e \sim -ex/2" /> en 0.
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="12-9"
          title="Étude asymptotique d'une suite récurrente"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="(u_n)" /> définie par <LatexRenderer latex="u_0 = 1" /> et <LatexRenderer latex="u_{n+1} = u_n + 1/u_n" />.</p>
              <p>Déterminer un équivalent de <LatexRenderer latex="u_n" /> quand <LatexRenderer latex="n \to +\infty" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour étudier le comportement asymptotique d'une suite récurrente, on cherche d'abord la croissance "qualitative" (ex : polynomiale, exponentielle, log), puis on précise l'équivalent. L'idée est souvent de considérer <LatexRenderer latex="u_n^2" /> qui peut avoir une récurrence plus simple.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="v_n = u_n^2" />. Or <LatexRenderer latex="u_{n+1}^2 = u_n^2 + 2 + 1/u_n^2" />, soit :</p>
              <LatexRenderer latex="v_{n+1} = v_n + 2 + 1/v_n." />
              <p className="mt-2"><strong>Étape 1 : v_n croît au moins comme 2n.</strong> Or <LatexRenderer latex="v_{n+1} \ge v_n + 2" />, donc <LatexRenderer latex="v_n \ge v_0 + 2n = 1 + 2n" />.</p>
              <p className="mt-2"><strong>Étape 2 : Équivalent.</strong> Or <LatexRenderer latex="v_n \ge 1 + 2n \to +\infty" />, donc <LatexRenderer latex="1/v_n \to 0" />. D'où :</p>
              <LatexRenderer latex="v_{n+1} - v_n = 2 + 1/v_n \to 2." />
              <Astuce>
                Si <LatexRenderer latex="a_{n+1} - a_n \to \ell" />, alors par sommation <LatexRenderer latex="a_n / n \to \ell" /> (théorème de Cesàro). Ici <LatexRenderer latex="v_n / n \to 2" />, soit <LatexRenderer latex="v_n \sim 2n" />.
              </Astuce>
              <p className="mt-2">Par Cesàro, <LatexRenderer latex="v_n / n \to 2" />, soit <LatexRenderer latex="v_n \sim 2n" />.</p>
              <p className="mt-2">D'où <LatexRenderer latex="u_n = \sqrt{v_n} \sim \sqrt{2n}" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="u_n \sim \sqrt{2n}" /> quand <LatexRenderer latex="n \to +\infty" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Concours — Précision asymptotique" />

        <ExerciseCard
          id="12-10"
          title="Reste d'une série et équivalent du reste"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="\zeta(s) = \sum_{n=1}^{+\infty} 1/n^s" /> pour <LatexRenderer latex="s > 1" />. On note <LatexRenderer latex="R_N(s) = \sum_{n=N+1}^{+\infty} 1/n^s" />.</p>
              <p>Démontrer que <LatexRenderer latex="R_N(s) \sim 1/((s-1) N^{s-1})" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour un équivalent du reste d'une série de Riemann, on compare aux intégrales encadrantes. La fonction <LatexRenderer latex="t \mapsto 1/t^s" /> étant décroissante, les sommes sont encadrées par des intégrales sur les segments adjacents.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="s > 1" /> et <LatexRenderer latex="f(t) = 1/t^s" /> décroissante. Par comparaison série-intégrale :</p>
              <LatexRenderer latex="\int_{n}^{n+1} \frac{dt}{t^s} \le \frac{1}{n^s} \le \int_{n-1}^{n} \frac{dt}{t^s}." />
              <p className="mt-2">En sommant pour <LatexRenderer latex="n = N+1, N+2, \ldots" /> :</p>
              <LatexRenderer latex="\int_{N+1}^{+\infty} \frac{dt}{t^s} \le R_N(s) \le \int_N^{+\infty} \frac{dt}{t^s}." />
              <Astuce>
                Le calcul des intégrales : <LatexRenderer latex="\int_a^{+\infty} dt/t^s = a^{1-s}/(s-1)" /> pour <LatexRenderer latex="s > 1" />.
              </Astuce>
              <p className="mt-2">D'où :</p>
              <LatexRenderer latex="\frac{1}{(s-1)(N+1)^{s-1}} \le R_N(s) \le \frac{1}{(s-1) N^{s-1}}." />
              <p className="mt-2">Or les deux bornes sont équivalentes à <LatexRenderer latex="1/((s-1) N^{s-1})" /> en <LatexRenderer latex="+\infty" /> (car <LatexRenderer latex="(N+1)^{s-1} \sim N^{s-1}" />).</p>
              <ConclusionBox>
                <LatexRenderer latex="R_N(s) \sim \dfrac{1}{(s-1) N^{s-1}}" /> quand <LatexRenderer latex="N \to +\infty" />. La vitesse de convergence est polynomiale, d'ordre <LatexRenderer latex="N^{-(s-1)}" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Formule de Stirling" />

        <ExerciseCard
          id="12-11"
          title="Formule de Stirling — équivalent de n!"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>1. Démontrer que <LatexRenderer latex="\ln(n!) = n \ln n - n + O(\ln n)" /> quand <LatexRenderer latex="n \to +\infty" />.</p>
              <p>2. En admettant la formule précise de Stirling <LatexRenderer latex="n! \sim \sqrt{2\pi n} (n/e)^n" />, donner un équivalent de <LatexRenderer latex="\binom{2n}{n}" /> en <LatexRenderer latex="+\infty" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La formule de Stirling caractérise la croissance asymptotique de la factorielle. La preuve élémentaire de la version logarithmique passe par la comparaison série-intégrale appliquée à <LatexRenderer latex="\ln" />. Pour les coefficients binomiaux centraux, Stirling donne un équivalent en <LatexRenderer latex="4^n / \sqrt{\pi n}" />.
              </PointMethodo>
              <p><strong>1. Équivalent logarithmique.</strong> Or <LatexRenderer latex="\ln(n!) = \sum_{k=1}^n \ln k" />. La fonction <LatexRenderer latex="t \mapsto \ln t" /> est croissante. Par comparaison série-intégrale :</p>
              <LatexRenderer latex="\int_1^n \ln t\,dt \le \sum_{k=1}^n \ln k \le \ln n + \int_1^n \ln t\,dt." />
              <p className="mt-2">Or <LatexRenderer latex="\int_1^n \ln t\,dt = [t \ln t - t]_1^n = n \ln n - n + 1" />. D'où :</p>
              <LatexRenderer latex="n \ln n - n + 1 \le \ln(n!) \le n \ln n - n + 1 + \ln n." />
              <Astuce>
                La forme précise de Stirling <LatexRenderer latex="n! \sim \sqrt{2\pi n} (n/e)^n" /> nécessite l'intégrale de Wallis, hors programme à l'ECG mais admise.
              </Astuce>
              <p className="mt-2">Ainsi <LatexRenderer latex="\ln(n!) = n \ln n - n + O(\ln n)" />.</p>
              <p className="mt-2"><strong>2. Équivalent de C(2n, n).</strong> Or <LatexRenderer latex="\binom{2n}{n} = (2n)!/(n!)^2" />. Par Stirling :</p>
              <LatexRenderer latex="\binom{2n}{n} \sim \frac{\sqrt{4\pi n}(2n/e)^{2n}}{(\sqrt{2\pi n})^2 (n/e)^{2n}} = \frac{\sqrt{4\pi n} \cdot 4^n \cdot n^{2n} / e^{2n}}{2\pi n \cdot n^{2n}/e^{2n}} = \frac{4^n}{\sqrt{\pi n}}." />
              <ConclusionBox>
                Stirling logarithmique : <LatexRenderer latex="\ln(n!) = n\ln n - n + O(\ln n)" />. Application : <LatexRenderer latex="\binom{2n}{n} \sim 4^n / \sqrt{\pi n}" />.
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre12ComparaisonNegligeabiliteEquivalenceExercicesPage;
