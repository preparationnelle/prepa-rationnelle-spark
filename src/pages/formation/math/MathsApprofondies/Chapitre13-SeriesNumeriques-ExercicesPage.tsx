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

const Chapitre13SeriesNumeriquesExercicesPage = () => {
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
      chapterNumber={29}
      chapterTitle="Séries Numériques"
      description="Exercices de calcul de sommes, étude de convergence et séries usuelles."
      slug="series-numeriques"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "estimation-statistique-avancee",
        title: "Estimation (Ch 28)"
      }}
      nextChapter={{
        slug: "developpements-limites-et-taylor",
        title: "DL et Taylor (Ch 14)"
      }}
    >
      <div className="space-y-2">

        <DifficultyHeader level="Niveau : Facile — Calculs de sommes" />

        <ExerciseCard
          id="13-1"
          title="Séries géométriques et télescopiques"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Calculer les sommes suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="\sum_{n=0}^{+\infty} \frac{1}{3^n}" /></li>
                <li><LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{1}{n(n+1)}" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une série géométrique de raison <LatexRenderer latex="q" />, la condition de convergence est <LatexRenderer latex="|q| < 1" /> et la somme vaut <LatexRenderer latex="\frac{1}{1-q}" />. Pour une série télescopique, les sommes partielles <LatexRenderer latex="S_N" /> se simplifient en faisant apparaître seulement le premier et le dernier terme.
              </PointMethodo>

              <p><strong>1. Série géométrique.</strong> Soit <LatexRenderer latex="q = 1/3" />. Or <LatexRenderer latex="|q| = 1/3 < 1" />, donc la série converge. D'où :</p>
              <p><LatexRenderer latex="\sum_{n=0}^{+\infty} \frac{1}{3^n} = \frac{1}{1 - 1/3} = \frac{3}{2}" /></p>

              <p><strong>2. Série télescopique.</strong> Soit la décomposition en éléments simples :</p>
              <p><LatexRenderer latex="\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}" /></p>
              <p>Ainsi, la somme partielle <LatexRenderer latex="S_N = \sum_{n=1}^{N} u_n" /> vaut, par télescopage (théorème des séries télescopiques) :</p>
              <p><LatexRenderer latex="S_N = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{N} - \frac{1}{N+1}\right) = 1 - \frac{1}{N+1}" /></p>
              <p>Donc <LatexRenderer latex="S_N \to 1" /> quand <LatexRenderer latex="N \to +\infty" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\sum_{n=0}^{+\infty} \frac{1}{3^n} = \frac{3}{2}" /> et <LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{1}{n(n+1)} = 1" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Nature des séries" />

        <ExerciseCard
          id="13-2"
          title="Comparaison et équivalents — séries à termes positifs"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Déterminer la nature des séries de terme général :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="u_n = \ln\!\left(1 + \frac{1}{n^2}\right)" /></li>
                <li><LatexRenderer latex="v_n = \frac{1}{\sqrt{n}}" /></li>
              </ul>
              <p className="text-sm text-stone-500 italic">Rappel : l'équivalence préserve la nature d'une série uniquement pour les séries à termes positifs.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Remplacer le terme général par un équivalent simple, puis appliquer le critère de Riemann : <LatexRenderer latex="\sum 1/n^\alpha" /> converge si et seulement si <LatexRenderer latex="\alpha > 1" />. L'équivalence ne préserve la nature que pour les séries à termes positifs — ce qui est ici le cas.
              </PointMethodo>

              <p><strong>1.</strong> En utilisant <LatexRenderer latex="\ln(1+x) \sim x" /> quand <LatexRenderer latex="x \to 0" /> :</p>
              <p><LatexRenderer latex="u_n = \ln\!\left(1 + \frac{1}{n^2}\right) \sim \frac{1}{n^2}" /></p>
              <p>Or <LatexRenderer latex="\sum 1/n^2" /> est une série de Riemann avec <LatexRenderer latex="\alpha = 2 > 1" />, donc elle converge. Ainsi <LatexRenderer latex="\sum u_n" /> <strong>converge</strong>.</p>

              <p><strong>2.</strong> <LatexRenderer latex="v_n = \frac{1}{\sqrt{n}} = \frac{1}{n^{1/2}}" /> est une série de Riemann avec <LatexRenderer latex="\alpha = 1/2 \le 1" />, donc elle <strong>diverge</strong>.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\sum u_n" /> converge ; <LatexRenderer latex="\sum v_n" /> diverge.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="13-3"
          title="Règle de d'Alembert"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Étudier la convergence des séries de terme général :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="u_n = \frac{n^2}{2^n}" /></li>
                <li><LatexRenderer latex="v_n = \frac{n!}{n^n}" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La règle de d'Alembert consiste à former le rapport <LatexRenderer latex="u_{n+1}/u_n" /> et à étudier sa limite <LatexRenderer latex="\ell" />. Si <LatexRenderer latex="\ell < 1" />, la série converge ; si <LatexRenderer latex="\ell > 1" />, elle diverge. Cette règle est particulièrement efficace quand <LatexRenderer latex="u_n" /> fait intervenir des puissances ou des factorielles.
              </PointMethodo>

              <p><strong>1.</strong> Soit le rapport :</p>
              <p><LatexRenderer latex="\frac{u_{n+1}}{u_n} = \frac{(n+1)^2}{2^{n+1}} \cdot \frac{2^n}{n^2} = \frac{1}{2} \cdot \left(\frac{n+1}{n}\right)^2 \to \frac{1}{2} < 1" /></p>
              <p>Donc <LatexRenderer latex="\sum u_n" /> <strong>converge</strong> par la règle de d'Alembert.</p>

              <Astuce>
                Pour <LatexRenderer latex="v_n = n!/n^n" />, utiliser l'inégalité <LatexRenderer latex="n^n \ge n!" /> n'est pas suffisant ici. Appliquer directement d'Alembert et simplifier <LatexRenderer latex="(n+1)!/(n+1)^{n+1}" /> divisé par <LatexRenderer latex="n!/n^n" />.
              </Astuce>

              <p><strong>2.</strong> Soit le rapport :</p>
              <p><LatexRenderer latex="\frac{v_{n+1}}{v_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \frac{1}{\left(1 + \frac{1}{n}\right)^n} \to \frac{1}{e} < 1" /></p>
              <p>Donc <LatexRenderer latex="\sum v_n" /> <strong>converge</strong>.</p>

              <ConclusionBox>
                <p>Les deux séries convergent, établies par la règle de d'Alembert avec <LatexRenderer latex="\ell = 1/2 < 1" /> et <LatexRenderer latex="\ell = 1/e < 1" /> respectivement.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Séries à termes quelconques" />

        <ExerciseCard
          id="13-4"
          title="Critère spécial des séries alternées"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Étudier la convergence (simple et absolue) de la série <LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{(-1)^n}{\sqrt{n}}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une série alternée <LatexRenderer latex="\sum (-1)^n a_n" /> avec <LatexRenderer latex="a_n \ge 0" />, le critère spécial des séries alternées (CSSA) garantit la convergence si : (i) la suite <LatexRenderer latex="(a_n)" /> est décroissante, et (ii) <LatexRenderer latex="a_n \to 0" />. On teste ensuite la convergence absolue séparément.
              </PointMethodo>

              <p><strong>Convergence simple.</strong> Soit <LatexRenderer latex="a_n = 1/\sqrt{n}" />. Or :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><LatexRenderer latex="a_n = 1/\sqrt{n}" /> est décroissante (fonction <LatexRenderer latex="t \mapsto 1/\sqrt{t}" /> décroissante).</li>
                <li><LatexRenderer latex="a_n \to 0" /> quand <LatexRenderer latex="n \to +\infty" />.</li>
              </ul>
              <p>D'où, par le CSSA, la série <LatexRenderer latex="\sum (-1)^n/\sqrt{n}" /> <strong>converge</strong>.</p>

              <p><strong>Convergence absolue.</strong> La série des valeurs absolues est <LatexRenderer latex="\sum 1/n^{1/2}" />, qui est une série de Riemann avec <LatexRenderer latex="\alpha = 1/2 \le 1" />. Donc elle <strong>diverge</strong>.</p>

              <ConclusionBox>
                <p>La série <LatexRenderer latex="\sum (-1)^n/\sqrt{n}" /> converge (par le CSSA) mais ne converge pas absolument : elle est dite <em>semi-convergente</em>.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="13-5"
          title="Somme d'une série — série géométrique généralisée"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Calculer la somme de la série <LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{n}{2^n}" />.</p>
              <p className="text-sm text-stone-500 italic">On pourra dériver terme à terme la série géométrique <LatexRenderer latex="\sum_{n=0}^{+\infty} x^n" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour calculer <LatexRenderer latex="\sum n x^n" />, dériver terme à terme la série géométrique <LatexRenderer latex="\sum x^n = 1/(1-x)" /> valable pour <LatexRenderer latex="|x| < 1" />. La dérivation terme à terme est licite sur tout intervalle compact inclus dans <LatexRenderer latex="(-1,1)" />.
              </PointMethodo>

              <Astuce>
                On sait que pour <LatexRenderer latex="|x| < 1" /> : <LatexRenderer latex="\sum_{n=0}^{+\infty} x^n = \frac{1}{1-x}" />. En dérivant membre à membre : <LatexRenderer latex="\sum_{n=1}^{+\infty} n x^{n-1} = \frac{1}{(1-x)^2}" />. Multiplier par <LatexRenderer latex="x" /> pour obtenir <LatexRenderer latex="\sum_{n=1}^{+\infty} n x^n = \frac{x}{(1-x)^2}" />.
              </Astuce>

              <p>Soit <LatexRenderer latex="f(x) = \sum_{n=0}^{+\infty} x^n = \frac{1}{1-x}" /> pour <LatexRenderer latex="|x| < 1" />.</p>
              <p>D'où <LatexRenderer latex="f'(x) = \sum_{n=1}^{+\infty} n x^{n-1} = \frac{1}{(1-x)^2}" />.</p>
              <p>Ainsi <LatexRenderer latex="x \cdot f'(x) = \sum_{n=1}^{+\infty} n x^n = \frac{x}{(1-x)^2}" />.</p>
              <p>Or en évaluant en <LatexRenderer latex="x = 1/2" /> (qui vérifie <LatexRenderer latex="|x| < 1" />) :</p>
              <p><LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{n}{2^n} = \frac{1/2}{(1 - 1/2)^2} = \frac{1/2}{1/4} = 2" /></p>

              <ConclusionBox>
                <p><LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{n}{2^n} = 2" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Facile — Convergence et reste d'une série" />

        <ExerciseCard
          id="13-6"
          title="Reste d'une série géométrique"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Soit la série géométrique <LatexRenderer latex="\sum_{n=0}^{+\infty} q^n" /> avec <LatexRenderer latex="|q| < 1" />.</p>
              <p>Donner l'expression explicite du reste <LatexRenderer latex="R_N = \sum_{n=N+1}^{+\infty} q^n" /> et estimer son comportement quand <LatexRenderer latex="N \to +\infty" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Le reste d'une série convergente est <LatexRenderer latex="R_N = S - S_N" /> où <LatexRenderer latex="S = \sum_{n \ge 0} u_n" /> et <LatexRenderer latex="S_N = \sum_{n=0}^N u_n" />. Pour une série géométrique, on peut sommer directement le reste.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="N \in \mathbb{N}" />. Or, par sommation géométrique :</p>
              <LatexRenderer latex="R_N = \sum_{n=N+1}^{+\infty} q^n = q^{N+1} \sum_{k=0}^{+\infty} q^k = \frac{q^{N+1}}{1 - q}." />
              <p className="mt-2"><strong>Comportement asymptotique.</strong> Or <LatexRenderer latex="|q| < 1" />, donc <LatexRenderer latex="q^{N+1} \to 0" /> géométriquement. D'où :</p>
              <LatexRenderer latex="R_N \sim \frac{q^{N+1}}{1 - q} \xrightarrow[N\to+\infty]{} 0." />
              <Astuce>
                La vitesse de décroissance du reste est <em>géométrique</em> (en <LatexRenderer latex="|q|^N" />), beaucoup plus rapide que pour une série de Riemann <LatexRenderer latex="\sum 1/n^\alpha" /> dont le reste décroît seulement comme <LatexRenderer latex="1/N^{\alpha - 1}" />.
              </Astuce>
              <ConclusionBox>
                <LatexRenderer latex="R_N = \dfrac{q^{N+1}}{1 - q}" />, avec décroissance géométrique <LatexRenderer latex="O(|q|^N)" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Critères de comparaison fins" />

        <ExerciseCard
          id="13-7"
          title="Règle de Cauchy"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Étudier la convergence de <LatexRenderer latex="\sum_{n=1}^{+\infty} \left(\dfrac{n}{n+1}\right)^{n^2}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La règle de Cauchy : si <LatexRenderer latex="\sqrt[n]{u_n} \to \ell" />, alors <LatexRenderer latex="\sum u_n" /> converge si <LatexRenderer latex="\ell < 1" /> et diverge si <LatexRenderer latex="\ell > 1" />. Elle est particulièrement adaptée aux séries dont le terme général comporte une puissance n-ième.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="u_n = \left(\dfrac{n}{n+1}\right)^{n^2}" />. Or :</p>
              <LatexRenderer latex="\sqrt[n]{u_n} = \left(\frac{n}{n+1}\right)^n = \left(1 - \frac{1}{n+1}\right)^n." />
              <Astuce>
                Le passage en exponentielle : <LatexRenderer latex="\left(1 - \frac{1}{n+1}\right)^n = e^{n \ln(1 - 1/(n+1))}" />. Pour <LatexRenderer latex="n" /> grand, <LatexRenderer latex="\ln(1 - 1/(n+1)) \sim -1/(n+1) \sim -1/n" />, donc l'exposant tend vers <LatexRenderer latex="-1" />.
              </Astuce>
              <p className="mt-2">D'où <LatexRenderer latex="\sqrt[n]{u_n} \to e^{-1} = 1/e < 1" />.</p>
              <p>Par la règle de Cauchy, la série <LatexRenderer latex="\sum u_n" /> <strong>converge</strong>.</p>
              <ConclusionBox>
                <LatexRenderer latex="\sum_{n=1}^{+\infty} \left(\frac{n}{n+1}\right)^{n^2}" /> converge par la règle de Cauchy avec <LatexRenderer latex="\ell = 1/e < 1" />.
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="13-8"
          title="Critère intégral de Cauchy"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="f : [1, +\infty[ \to \mathbb{R}_+" /> continue, positive et décroissante.</p>
              <p>Démontrer que <LatexRenderer latex="\sum f(n)" /> et <LatexRenderer latex="\int_1^{+\infty} f(t)\,dt" /> sont de même nature.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Le critère intégral repose sur l'encadrement <LatexRenderer latex="f(n+1) \le \int_n^{n+1} f(t)\,dt \le f(n)" /> (vrai car <LatexRenderer latex="f" /> décroissante). En sommant et en intégrant, on obtient un encadrement entre la somme partielle de la série et l'intégrale, qui transmet la nature.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. Or, par décroissance de <LatexRenderer latex="f" /> sur <LatexRenderer latex="[n, n+1]" /> :</p>
              <LatexRenderer latex="f(n+1) \le \int_n^{n+1} f(t)\,dt \le f(n)." />
              <p className="mt-2"><strong>Sommation.</strong> En sommant pour <LatexRenderer latex="n = 1, \ldots, N" /> :</p>
              <LatexRenderer latex="\sum_{n=1}^N f(n+1) \le \int_1^{N+1} f(t)\,dt \le \sum_{n=1}^N f(n)." />
              <p className="mt-2">Soit, en posant <LatexRenderer latex="S_N = \sum_{n=1}^N f(n)" /> et <LatexRenderer latex="I_N = \int_1^{N+1} f(t)\,dt" /> :</p>
              <LatexRenderer latex="S_{N+1} - f(1) \le I_N \le S_N." />
              <Astuce>
                Cet encadrement montre que <LatexRenderer latex="(S_N)" /> et <LatexRenderer latex="(I_N)" /> sont bornées (ou non) simultanément. Comme <LatexRenderer latex="(S_N)" /> et <LatexRenderer latex="(I_N)" /> sont croissantes (termes positifs), elles convergent ssi elles sont bornées.
              </Astuce>
              <p className="mt-2">Ainsi <LatexRenderer latex="(S_N)" /> est bornée <LatexRenderer latex="\iff (I_N)" /> est bornée. D'où la série et l'intégrale sont de même nature.</p>
              <ConclusionBox>
                Critère intégral : <LatexRenderer latex="\sum f(n)" /> converge <LatexRenderer latex="\iff \int_1^{+\infty} f(t)\,dt" /> converge (pour <LatexRenderer latex="f \ge 0" /> décroissante continue).
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Concours — Sommation par paquets et regroupement" />

        <ExerciseCard
          id="13-9"
          title="Somme exacte d'une série télescopique logarithmique"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Calculer <LatexRenderer latex="\sum_{n=2}^{+\infty} \ln\!\left(1 - \dfrac{1}{n^2}\right)" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour sommer une série de logarithmes, exploiter la factorisation puis transformer en somme télescopique en utilisant <LatexRenderer latex="\ln(ab) = \ln a + \ln b" />. Les termes intermédiaires se compensent dans la somme partielle.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="u_n = \ln(1 - 1/n^2)" /> pour <LatexRenderer latex="n \ge 2" />. Or :</p>
              <LatexRenderer latex="1 - \frac{1}{n^2} = \frac{n^2 - 1}{n^2} = \frac{(n-1)(n+1)}{n^2}." />
              <Astuce>
                La factorisation <LatexRenderer latex="n^2 - 1 = (n-1)(n+1)" /> est la clé pour faire apparaître un télescopage à deux pas.
              </Astuce>
              <p className="mt-2">D'où <LatexRenderer latex="u_n = \ln(n-1) + \ln(n+1) - 2\ln n" />. La somme partielle :</p>
              <LatexRenderer latex="S_N = \sum_{n=2}^N u_n = \sum_{n=2}^N \bigl(\ln(n-1) + \ln(n+1) - 2 \ln n\bigr)." />
              <p className="mt-2">Réécrivons en regroupant :</p>
              <LatexRenderer latex="S_N = \sum_{n=2}^N \ln(n-1) + \sum_{n=2}^N \ln(n+1) - 2 \sum_{n=2}^N \ln n." />
              <p className="mt-2">Par changement d'indice (<LatexRenderer latex="k = n - 1" /> dans la première, <LatexRenderer latex="k = n + 1" /> dans la deuxième) :</p>
              <LatexRenderer latex="S_N = \sum_{k=1}^{N-1} \ln k + \sum_{k=3}^{N+1} \ln k - 2 \sum_{k=2}^N \ln k." />
              <p className="mt-2">Calcul direct (les termes intermédiaires se compensent) :</p>
              <LatexRenderer latex="S_N = -\ln 2 + \ln(N+1) - \ln N = \ln\!\left(\frac{N+1}{2N}\right)." />
              <p className="mt-2">Or <LatexRenderer latex="(N+1)/(2N) \to 1/2" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="\sum_{n=2}^{+\infty} \ln(1 - 1/n^2) = \ln(1/2) = -\ln 2" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Constante d'Euler-Mascheroni" />

        <ExerciseCard
          id="13-10"
          title="Constante d'Euler-Mascheroni"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="u_n = \sum_{k=1}^n \frac{1}{k} - \ln n" /> pour <LatexRenderer latex="n \ge 1" />.</p>
              <p>1. Démontrer que <LatexRenderer latex="(u_n)" /> est décroissante et minorée.</p>
              <p>2. En déduire l'existence d'une constante <LatexRenderer latex="\gamma" /> (constante d'Euler-Mascheroni) telle que <LatexRenderer latex="\sum_{k=1}^n 1/k = \ln n + \gamma + o(1)" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour démontrer la convergence d'une suite, le théorème de la limite monotone est l'outil idéal : une suite décroissante et minorée converge. La démonstration repose sur des comparaisons série-intégrale fines pour la monotonie et la minoration.
              </PointMethodo>
              <p><strong>1. Monotonie.</strong> Soit <LatexRenderer latex="u_{n+1} - u_n = \frac{1}{n+1} - \ln(n+1) + \ln n = \frac{1}{n+1} - \ln\!\left(1 + \frac{1}{n}\right)" />.</p>
              <p className="mt-2">Or pour <LatexRenderer latex="x > 0" />, <LatexRenderer latex="\ln(1 + x) > x/(1 + x)" /> (inégalité classique, par étude de la fonction <LatexRenderer latex="x \mapsto \ln(1+x) - x/(1+x)" />, qui est positive et nulle en 0).</p>
              <p className="mt-2">Avec <LatexRenderer latex="x = 1/n" /> : <LatexRenderer latex="\ln(1 + 1/n) > (1/n)/(1 + 1/n) = 1/(n+1)" />.</p>
              <p className="mt-2">D'où <LatexRenderer latex="u_{n+1} - u_n < 0" />, donc <LatexRenderer latex="(u_n)" /> est strictement décroissante.</p>
              <Astuce>
                Pour la minoration, comparer la somme à l'intégrale <LatexRenderer latex="\int_1^{n+1} dt/t" /> : la décroissance de <LatexRenderer latex="t \mapsto 1/t" /> donne <LatexRenderer latex="\sum_{k=1}^n 1/k \ge \int_1^{n+1} dt/t = \ln(n+1) > \ln n" />.
              </Astuce>
              <p className="mt-2"><strong>Minoration.</strong> Or par comparaison série-intégrale (avec <LatexRenderer latex="f(t) = 1/t" /> décroissante sur <LatexRenderer latex="[k, k+1]" />) :</p>
              <LatexRenderer latex="\frac{1}{k} \ge \int_k^{k+1} \frac{dt}{t} \quad\Rightarrow\quad \sum_{k=1}^n \frac{1}{k} \ge \int_1^{n+1} \frac{dt}{t} = \ln(n + 1)." />
              <p className="mt-2">D'où <LatexRenderer latex="u_n = \sum_{k=1}^n 1/k - \ln n \ge \ln(n+1) - \ln n = \ln(1 + 1/n) > 0" />.</p>
              <p className="mt-2"><strong>2. Conclusion.</strong> <LatexRenderer latex="(u_n)" /> est décroissante et minorée par 0. Par le théorème de la limite monotone, <LatexRenderer latex="u_n \to \gamma \in \mathbb{R}_+" />.</p>
              <p className="mt-2">D'où <LatexRenderer latex="\sum_{k=1}^n 1/k = \ln n + \gamma + o(1)" /> quand <LatexRenderer latex="n \to +\infty" />.</p>
              <ConclusionBox>
                La constante d'Euler-Mascheroni <LatexRenderer latex="\gamma = \lim_{n \to +\infty} \left(\sum_{k=1}^n 1/k - \ln n\right) \approx 0{,}577" /> existe. Elle apparaît dans de nombreuses formules d'analyse, mais on ne sait toujours pas si elle est rationnelle ou irrationnelle.
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre13SeriesNumeriquesExercicesPage;
