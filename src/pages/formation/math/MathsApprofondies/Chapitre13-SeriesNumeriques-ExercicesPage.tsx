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

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre13SeriesNumeriquesExercicesPage;
