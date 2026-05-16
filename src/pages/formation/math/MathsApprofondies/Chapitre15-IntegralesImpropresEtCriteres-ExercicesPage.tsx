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

const Chapitre15IntegralesImpropresEtCriteresExercicesPage = () => {
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
      chapterNumber={15}
      chapterTitle="Intégrales impropres & critères"
      description="Exercices sur la convergence et le calcul d'intégrales sur un intervalle non compact."
      slug="integrales-impropres-criteres-de-convergence"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "developpements-limites-et-taylor",
        title: "DL et Taylor (Ch 14)"
      }}
      nextChapter={{
        slug: "probabilites-generales-variables-discretes",
        title: "Probabilités Générales"
      }}
    >
      <div className="space-y-2">

        <DifficultyHeader level="Niveau : Facile — Application directe" />

        <ExerciseCard
          id="15-1"
          title="Intégrales de Riemann — règle fondamentale"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Rappeler la règle de convergence des intégrales de Riemann en <LatexRenderer latex="+\infty" /> et en <LatexRenderer latex="0" />.</p>
              <p>Déterminer la nature de <LatexRenderer latex="\int_1^{+\infty} \frac{dt}{t^3}" /> et <LatexRenderer latex="\int_0^1 \frac{dt}{\sqrt{t}}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour toute intégrale impropre, identifier d'abord où elle est impropre (borne infinie ou intégrand non borné). Étudier ensuite chaque borne séparément. Le critère de Riemann est le point de comparaison de référence : <LatexRenderer latex="\int_1^{+\infty} \frac{dt}{t^\alpha}" /> converge si et seulement si <LatexRenderer latex="\alpha > 1" /> ; <LatexRenderer latex="\int_0^1 \frac{dt}{t^\alpha}" /> converge si et seulement si <LatexRenderer latex="\alpha < 1" />.
              </PointMethodo>

              <p><strong>Rappel des critères de Riemann.</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>En <LatexRenderer latex="+\infty" /> : <LatexRenderer latex="\int_1^{+\infty} \frac{dt}{t^\alpha}" /> converge <LatexRenderer latex="\iff \alpha > 1" />.</li>
                <li>En <LatexRenderer latex="0" /> : <LatexRenderer latex="\int_0^1 \frac{dt}{t^\alpha}" /> converge <LatexRenderer latex="\iff \alpha < 1" />.</li>
              </ul>

              <p><strong>Première intégrale.</strong> L'intégrale <LatexRenderer latex="\int_1^{+\infty} dt/t^3" /> est impropre uniquement en <LatexRenderer latex="+\infty" />. Soit <LatexRenderer latex="\alpha = 3 > 1" />. D'où elle <strong>converge</strong>.</p>

              <p><strong>Deuxième intégrale.</strong> L'intégrale <LatexRenderer latex="\int_0^1 dt/\sqrt{t}" /> est impropre en <LatexRenderer latex="0" /> (l'intégrand n'est pas borné). Soit <LatexRenderer latex="\alpha = 1/2 < 1" />. D'où elle <strong>converge</strong>.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\int_1^{+\infty} dt/t^3" /> converge (<LatexRenderer latex="\alpha = 3 > 1" />). <LatexRenderer latex="\int_0^1 dt/\sqrt{t}" /> converge (<LatexRenderer latex="\alpha = 1/2 < 1" />).</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="15-2"
          title="Calcul direct — intégrale exponentielle"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Calculer l'intégrale suivante après avoir justifié sa convergence :</p>
              <p className="text-center"><LatexRenderer latex="\int_0^{+\infty} e^{-2t}\,dt" /></p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une intégrale impropre en <LatexRenderer latex="+\infty" />, poser la borne variable <LatexRenderer latex="X" /> et calculer <LatexRenderer latex="\int_0^X f(t)\,dt" />, puis faire tendre <LatexRenderer latex="X \to +\infty" />. La convergence s'établit en montrant l'existence de cette limite.
              </PointMethodo>

              <p>La fonction <LatexRenderer latex="t \mapsto e^{-2t}" /> est continue sur <LatexRenderer latex="[0, +\infty[" />. L'intégrale est impropre uniquement en <LatexRenderer latex="+\infty" />.</p>
              <p>Soit pour <LatexRenderer latex="X > 0" /> :</p>
              <p><LatexRenderer latex="\int_0^X e^{-2t}\,dt = \left[-\frac{1}{2}e^{-2t}\right]_0^X = -\frac{1}{2}e^{-2X} + \frac{1}{2}" /></p>
              <p>Or <LatexRenderer latex="e^{-2X} \to 0" /> quand <LatexRenderer latex="X \to +\infty" />. D'où la limite existe et vaut <LatexRenderer latex="1/2" />.</p>

              <ConclusionBox>
                <p>L'intégrale converge et <LatexRenderer latex="\int_0^{+\infty} e^{-2t}\,dt = \frac{1}{2}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Comparaison et changement de variable" />

        <ExerciseCard
          id="15-3"
          title="Comparaison à Riemann — deux intégrales"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Déterminer la nature de :</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><LatexRenderer latex="\int_0^{+\infty} \frac{x \ln x}{(1+x^2)^2}\,dx" /></li>
                <li><LatexRenderer latex="\int_2^{+\infty} \frac{1}{t(\ln t)^2}\,dt" /> (intégrale de Bertrand)</li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour toute intégrale sur <LatexRenderer latex="[0, +\infty[" />, identifier séparément les difficultés en chaque borne. En 0, vérifier si l'intégrand est borné ou non. En <LatexRenderer latex="+\infty" />, comparer à une intégrale de Riemann <LatexRenderer latex="\int 1/t^\alpha" /> avec <LatexRenderer latex="\alpha > 1" />.
              </PointMethodo>

              <p><strong>1. Première intégrale.</strong></p>
              <p><em>En <LatexRenderer latex="0^+" /> :</em> <LatexRenderer latex="f(x) = \frac{x \ln x}{(1+x^2)^2} \to 0" /> (car <LatexRenderer latex="x \ln x \to 0" />, croissances comparées). L'intégrale est faussement impropre en 0.</p>
              <p><em>En <LatexRenderer latex="+\infty" /> :</em> <LatexRenderer latex="f(x) \sim \frac{x \ln x}{x^4} = \frac{\ln x}{x^3}" />. Or <LatexRenderer latex="\ln x = o(x^{1/2})" />, donc <LatexRenderer latex="f(x) = o(1/x^{5/2})" />. Ainsi <LatexRenderer latex="f(x) \le C/x^{5/2}" /> pour <LatexRenderer latex="x" /> assez grand, et <LatexRenderer latex="\int 1/t^{5/2}\,dt" /> converge (Riemann, <LatexRenderer latex="\alpha = 5/2 > 1" />). D'où <strong>converge</strong>.</p>

              <Astuce>
                Pour la seconde intégrale, le changement de variable <LatexRenderer latex="u = \ln t" />, <LatexRenderer latex="du = dt/t" /> ramène à une intégrale de Riemann en <LatexRenderer latex="+\infty" />.
              </Astuce>

              <p><strong>2. Deuxième intégrale (intégrale de Bertrand).</strong></p>
              <p>Soit le changement de variable <LatexRenderer latex="u = \ln t" /> (<LatexRenderer latex="du = dt/t" />) :</p>
              <p><LatexRenderer latex="\int_2^{X} \frac{dt}{t(\ln t)^2} = \int_{\ln 2}^{\ln X} \frac{du}{u^2} = \left[-\frac{1}{u}\right]_{\ln 2}^{\ln X} = \frac{1}{\ln 2} - \frac{1}{\ln X} \to \frac{1}{\ln 2}" /></p>
              <p>La limite est finie. Donc l'intégrale <strong>converge</strong> et vaut <LatexRenderer latex="1/\ln 2" />.</p>

              <ConclusionBox>
                <p>Les deux intégrales convergent. <LatexRenderer latex="\int_2^{+\infty} \frac{dt}{t(\ln t)^2} = \frac{1}{\ln 2}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Intégration par parties et Gauss" />

        <ExerciseCard
          id="15-4"
          title="Intégrale de Gauss — intégration par parties"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>On admet que <LatexRenderer latex="\int_{-\infty}^{+\infty} e^{-x^2}\,dx = \sqrt{\pi}" />.</p>
              <p>Calculer <LatexRenderer latex="I = \int_0^{+\infty} t^2 e^{-t^2}\,dt" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour calculer une intégrale faisant intervenir un produit de fonctions, tenter l'intégration par parties. Identifier <LatexRenderer latex="u" /> et <LatexRenderer latex="v'" /> de sorte que le terme crochet tende vers 0 en <LatexRenderer latex="+\infty" /> et que l'intégrale restante soit calculable.
              </PointMethodo>

              <p>On effectue une intégration par parties sur <LatexRenderer latex="[0, X]" />. Soit :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><LatexRenderer latex="u(t) = t" />, <LatexRenderer latex="u'(t) = 1" /></li>
                <li><LatexRenderer latex="v'(t) = t e^{-t^2}" />, <LatexRenderer latex="v(t) = -\frac{1}{2}e^{-t^2}" /></li>
              </ul>
              <p>D'où :</p>
              <p><LatexRenderer latex="\int_0^X t^2 e^{-t^2}\,dt = \left[-\frac{t}{2}e^{-t^2}\right]_0^X + \frac{1}{2}\int_0^X e^{-t^2}\,dt" /></p>

              <Astuce>
                Le terme tout intégré <LatexRenderer latex="-\frac{X}{2}e^{-X^2} \to 0" /> quand <LatexRenderer latex="X \to +\infty" /> par croissances comparées (<LatexRenderer latex="e^{X^2} \gg X" />). Utiliser ensuite la parité de la gaussienne pour relier <LatexRenderer latex="\int_0^{+\infty} e^{-t^2}\,dt" /> à la valeur donnée.
              </Astuce>

              <p>Le terme crochet : <LatexRenderer latex="-\frac{X}{2}e^{-X^2} \to 0" /> et <LatexRenderer latex="0" /> en 0. Donc en faisant tendre <LatexRenderer latex="X \to +\infty" /> :</p>
              <p><LatexRenderer latex="I = \frac{1}{2}\int_0^{+\infty} e^{-t^2}\,dt" /></p>
              <p>Or, par parité de <LatexRenderer latex="t \mapsto e^{-t^2}" /> : <LatexRenderer latex="\int_0^{+\infty} e^{-t^2}\,dt = \frac{1}{2}\int_{-\infty}^{+\infty} e^{-t^2}\,dt = \frac{\sqrt{\pi}}{2}" />.</p>
              <p>Ainsi <LatexRenderer latex="I = \frac{1}{2} \cdot \frac{\sqrt{\pi}}{2} = \frac{\sqrt{\pi}}{4}" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\int_0^{+\infty} t^2 e^{-t^2}\,dt = \dfrac{\sqrt{\pi}}{4}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Concours — Intégrale de Dirichlet" />

        <ExerciseCard
          id="15-5"
          title="Intégrale de Dirichlet — convergence et non-convergence absolue"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>On considère <LatexRenderer latex="I = \int_0^{+\infty} \frac{\sin t}{t}\,dt" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Montrer que l'intégrale est impropre en <LatexRenderer latex="+\infty" /> et faussement impropre en <LatexRenderer latex="0" />.</li>
                <li>À l'aide d'une intégration par parties sur <LatexRenderer latex="[1, X]" />, montrer que l'intégrale converge.</li>
                <li>Montrer que l'intégrale ne converge pas absolument.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une intégrale oscillante en <LatexRenderer latex="+\infty" />, l'intégration par parties permet de faire apparaître un terme crochet tendant vers 0 et une intégrale absolument convergente. Pour la non-convergence absolue, minorer sur des intervalles où le signe est constant, puis comparer à une série divergente.
              </PointMethodo>

              <p><strong>1. Nature des bornes.</strong></p>
              <p><em>En 0 :</em> <LatexRenderer latex="\frac{\sin t}{t} \to 1" /> quand <LatexRenderer latex="t \to 0^+" />. L'intégrand est prolongeable par continuité en 0 : l'intégrale est <em>faussement impropre</em> en 0.</p>
              <p><em>En <LatexRenderer latex="+\infty" /> :</em> <LatexRenderer latex="|\sin t / t| \le 1/t \to 0" /> mais la convergence absolue n'est pas assurée. L'intégrale est <em>impropre</em> en <LatexRenderer latex="+\infty" />.</p>

              <p><strong>2. Convergence par intégration par parties.</strong></p>
              <p>Sur <LatexRenderer latex="[1, X]" />, posons <LatexRenderer latex="u = 1/t" />, <LatexRenderer latex="v' = \sin t" />, donc <LatexRenderer latex="u' = -1/t^2" />, <LatexRenderer latex="v = -\cos t" /> :</p>
              <p><LatexRenderer latex="\int_1^X \frac{\sin t}{t}\,dt = \left[-\frac{\cos t}{t}\right]_1^X - \int_1^X \frac{\cos t}{t^2}\,dt" /></p>
              <p>Or <LatexRenderer latex="\left[-\cos t / t\right]_1^X = -\cos X / X + \cos 1 \to \cos 1" /> quand <LatexRenderer latex="X \to +\infty" />.</p>
              <p>De plus, <LatexRenderer latex="\left|\frac{\cos t}{t^2}\right| \le \frac{1}{t^2}" /> et <LatexRenderer latex="\int_1^{+\infty} dt/t^2" /> converge (Riemann, <LatexRenderer latex="\alpha = 2 > 1" />). Donc <LatexRenderer latex="\int_1^{+\infty} \frac{\cos t}{t^2}\,dt" /> converge absolument.</p>
              <p>Ainsi <LatexRenderer latex="I" /> converge.</p>

              <Astuce>
                Pour minorer <LatexRenderer latex="\int_0^{+\infty} |\sin t|/t\,dt" />, noter que sur chaque intervalle <LatexRenderer latex="[k\pi, (k+1)\pi]" />, on a <LatexRenderer latex="|\sin t| \ge 0" /> et <LatexRenderer latex="1/t \ge 1/((k+1)\pi)" />. Intégrer sur la période et sommer sur <LatexRenderer latex="k" />.
              </Astuce>

              <p><strong>3. Non-convergence absolue.</strong></p>
              <p>Sur <LatexRenderer latex="[k\pi, (k+1)\pi]" />, pour <LatexRenderer latex="k \ge 1" /> :</p>
              <p><LatexRenderer latex="\int_{k\pi}^{(k+1)\pi} \frac{|\sin t|}{t}\,dt \ge \frac{1}{(k+1)\pi} \int_{k\pi}^{(k+1)\pi} |\sin t|\,dt = \frac{1}{(k+1)\pi} \cdot 2 = \frac{2}{(k+1)\pi}" /></p>
              <p>D'où <LatexRenderer latex="\int_\pi^{+\infty} \frac{|\sin t|}{t}\,dt \ge \sum_{k=1}^{+\infty} \frac{2}{(k+1)\pi}" />, et cette série diverge (série harmonique). Donc l'intégrale de Dirichlet <strong>ne converge pas absolument</strong>.</p>

              <ConclusionBox>
                <p>L'intégrale de Dirichlet <LatexRenderer latex="\int_0^{+\infty} \frac{\sin t}{t}\,dt" /> converge mais pas absolument : elle est semi-convergente.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Facile — Intégrale de fonction continue prolongeable" />

        <ExerciseCard
          id="15-6"
          title="Intégrale faussement impropre"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Étudier la nature et calculer si possible <LatexRenderer latex="\int_0^1 \frac{\sin t}{t}\,dt" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Une intégrale est dite <em>faussement impropre</em> en une borne <LatexRenderer latex="a" /> si l'intégrand est prolongeable par continuité en <LatexRenderer latex="a" />. Dans ce cas, l'intégrale est en fait une intégrale de Riemann ordinaire sur un segment, et converge automatiquement.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(t) = \sin t / t" /> définie sur <LatexRenderer latex="]0, 1]" />.</p>
              <p className="mt-2">Or <LatexRenderer latex="\sin t = t - t^3/6 + o(t^3)" /> en 0, donc <LatexRenderer latex="\sin t / t = 1 - t^2/6 + o(t^2) \xrightarrow[t\to 0^+]{} 1" />.</p>
              <p className="mt-2">D'où <LatexRenderer latex="f" /> se prolonge par continuité en posant <LatexRenderer latex="f(0) = 1" />. L'intégrale est <em>faussement impropre</em> en 0 et converge.</p>
              <Astuce>
                Note : on n'a pas d'expression élémentaire pour <LatexRenderer latex="\int_0^1 \sin t / t\,dt" /> ; sa valeur s'exprime à l'aide de la fonction Si (sine integral), <LatexRenderer latex="\mathrm{Si}(1) \approx 0{,}946" />.
              </Astuce>
              <ConclusionBox>
                <LatexRenderer latex="\int_0^1 \sin t / t\,dt" /> converge (intégrale faussement impropre en 0), valeur <LatexRenderer latex="\approx 0{,}946" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Critères de convergence" />

        <ExerciseCard
          id="15-7"
          title="Convergence par équivalents en zéro"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Étudier la nature de <LatexRenderer latex="\int_0^1 \frac{\ln t}{\sqrt{t}}\,dt" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour les intégrales avec <LatexRenderer latex="\ln" /> ou puissances en 0, on compare directement à <LatexRenderer latex="\int 1/t^\alpha" /> via le théorème : pour <LatexRenderer latex="\alpha < 1" />, <LatexRenderer latex="\int_0^1 dt/t^\alpha" /> converge ; sinon diverge. Le logarithme se domine par toute puissance.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(t) = \ln t / \sqrt{t}" /> sur <LatexRenderer latex="]0, 1]" />. L'intégrale est impropre en 0 (<LatexRenderer latex="f \to -\infty" />).</p>
              <p className="mt-2"><strong>Majoration.</strong> Or <LatexRenderer latex="\ln t = o(1/t^{1/4})" /> quand <LatexRenderer latex="t \to 0^+" /> (croissances comparées). D'où :</p>
              <LatexRenderer latex="|f(t)| = \frac{|\ln t|}{\sqrt{t}} \le \frac{C}{t^{1/4} \cdot t^{1/2}} = \frac{C}{t^{3/4}} \quad \text{pour } t \text{ assez petit}." />
              <p className="mt-2">Or <LatexRenderer latex="\int_0^1 dt/t^{3/4}" /> converge (<LatexRenderer latex="\alpha = 3/4 < 1" />). Donc <LatexRenderer latex="\int_0^1 |f(t)|\,dt" /> converge par comparaison, et l'intégrale converge absolument.</p>
              <p className="mt-2"><strong>Calcul.</strong> Par changement de variable <LatexRenderer latex="u = \sqrt{t}" />, <LatexRenderer latex="t = u^2" />, <LatexRenderer latex="dt = 2u\,du" /> :</p>
              <LatexRenderer latex="\int_0^1 \frac{\ln t}{\sqrt{t}}\,dt = \int_0^1 \frac{2 \ln u}{u} \cdot 2u\,du = 4 \int_0^1 \ln u\,du = 4 [u \ln u - u]_0^1 = 4(0 - 1) = -4." />
              <Astuce>
                Limite <LatexRenderer latex="u \ln u \to 0" /> quand <LatexRenderer latex="u \to 0^+" /> par croissances comparées.
              </Astuce>
              <ConclusionBox>
                <LatexRenderer latex="\int_0^1 \ln t / \sqrt{t}\,dt = -4" />.
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="15-8"
          title="Intégrale Gamma — fonction Γ(s) pour s entier"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>On définit <LatexRenderer latex="\Gamma(s) = \int_0^{+\infty} t^{s-1} e^{-t}\,dt" /> pour <LatexRenderer latex="s > 0" />.</p>
              <p>1. Justifier la convergence pour tout <LatexRenderer latex="s > 0" />.</p>
              <p>2. Démontrer la relation fonctionnelle <LatexRenderer latex="\Gamma(s + 1) = s\,\Gamma(s)" />.</p>
              <p>3. En déduire que <LatexRenderer latex="\Gamma(n + 1) = n!" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La fonction Γ étend la factorielle aux réels positifs. Sa relation fonctionnelle <LatexRenderer latex="\Gamma(s+1) = s\,\Gamma(s)" /> s'obtient par intégration par parties. L'identité avec la factorielle se déduit par récurrence à partir de <LatexRenderer latex="\Gamma(1) = 1" />.
              </PointMethodo>
              <p><strong>1. Convergence.</strong> L'intégrand <LatexRenderer latex="t^{s-1} e^{-t}" /> est positif. Impropre en 0 (si <LatexRenderer latex="s < 1" />) et en <LatexRenderer latex="+\infty" />.</p>
              <p>En 0 : <LatexRenderer latex="t^{s-1} e^{-t} \sim t^{s-1}" />, et <LatexRenderer latex="\int_0^1 t^{s-1}\,dt" /> converge ssi <LatexRenderer latex="s - 1 > -1" />, soit <LatexRenderer latex="s > 0" />. ✓</p>
              <p>En <LatexRenderer latex="+\infty" /> : <LatexRenderer latex="t^{s-1} e^{-t} = o(1/t^2)" /> par croissances comparées (<LatexRenderer latex="e^{-t}" /> tue tout polynôme). Donc convergente.</p>
              <p className="mt-2"><strong>2. Relation fonctionnelle.</strong> Soit <LatexRenderer latex="s > 0" />. Par intégration par parties sur <LatexRenderer latex="[\varepsilon, X]" /> avec <LatexRenderer latex="u = t^s" /> et <LatexRenderer latex="v' = e^{-t}" /> :</p>
              <LatexRenderer latex="\int_\varepsilon^X t^s e^{-t}\,dt = \left[-t^s e^{-t}\right]_\varepsilon^X + s \int_\varepsilon^X t^{s-1} e^{-t}\,dt." />
              <p className="mt-2">Le terme crochet : <LatexRenderer latex="-X^s e^{-X} \to 0" /> et <LatexRenderer latex="\varepsilon^s e^{-\varepsilon} \to 0" /> (car <LatexRenderer latex="s > 0" />).</p>
              <Astuce>
                L'IPP marche car les deux termes "limites" tendent vers 0 : à l'infini grâce à la décroissance exponentielle, en 0 grâce à <LatexRenderer latex="t^s" /> avec <LatexRenderer latex="s > 0" />.
              </Astuce>
              <p className="mt-2">D'où <LatexRenderer latex="\Gamma(s + 1) = s \Gamma(s)" />.</p>
              <p className="mt-2"><strong>3. Récurrence.</strong> Or <LatexRenderer latex="\Gamma(1) = \int_0^{+\infty} e^{-t}\,dt = 1 = 0!" />. Par récurrence : si <LatexRenderer latex="\Gamma(n+1) = n!" />, alors <LatexRenderer latex="\Gamma(n+2) = (n+1)\Gamma(n+1) = (n+1) \cdot n! = (n+1)!" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="\Gamma(n + 1) = n!" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />. La fonction Gamma est l'extension naturelle de la factorielle aux réels positifs (et même aux complexes).
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Concours — Critère par équivalent fin" />

        <ExerciseCard
          id="15-9"
          title="Convergence d'intégrales avec exponentielle"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Déterminer la nature de <LatexRenderer latex="\int_1^{+\infty} \frac{e^{-t}}{t^\alpha}\,dt" /> selon les valeurs de <LatexRenderer latex="\alpha \in \mathbb{R}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une intégrale en <LatexRenderer latex="+\infty" /> impliquant une décroissance exponentielle, celle-ci domine toute puissance polynomiale, donc la convergence est garantie quelle que soit la puissance.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(t) = e^{-t} / t^\alpha" /> sur <LatexRenderer latex="[1, +\infty[" />. Positive et continue.</p>
              <p className="mt-2"><strong>Majoration.</strong> Or pour tout <LatexRenderer latex="\alpha \in \mathbb{R}" /> et <LatexRenderer latex="t \ge 1" /> : <LatexRenderer latex="|f(t)| = e^{-t}/t^\alpha \le e^{-t}/1^{\min(\alpha, 0)}" /> (selon le signe de <LatexRenderer latex="\alpha" />).</p>
              <p>Mais plus simplement : par croissances comparées, <LatexRenderer latex="e^{-t} = o(1/t^2)" /> quand <LatexRenderer latex="t \to +\infty" />. D'où pour tout <LatexRenderer latex="\alpha \in \mathbb{R}" /> :</p>
              <LatexRenderer latex="f(t) = \frac{e^{-t}}{t^\alpha} = o\!\left(\frac{1}{t^{\alpha + 2}}\right)." />
              <Astuce>
                L'exponentielle <LatexRenderer latex="e^{-t}" /> écrase toute puissance <LatexRenderer latex="t^\alpha" /> à l'infini, quelle que soit la valeur de <LatexRenderer latex="\alpha" />. C'est pourquoi la convergence ne dépend pas de <LatexRenderer latex="\alpha" />.
              </Astuce>
              <p className="mt-2">Donc <LatexRenderer latex="f(t) = o(1/t^2)" /> en <LatexRenderer latex="+\infty" />, et par comparaison à <LatexRenderer latex="\int 1/t^2 dt" /> (convergente), <LatexRenderer latex="\int_1^{+\infty} f(t)\,dt" /> converge pour tout <LatexRenderer latex="\alpha" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="\int_1^{+\infty} e^{-t}/t^\alpha\,dt" /> converge pour tout <LatexRenderer latex="\alpha \in \mathbb{R}" /> (la décroissance exponentielle domine).
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Intégrales doubles et Fubini" />

        <ExerciseCard
          id="15-10"
          title="Convergence d'une intégrale par symétrisation"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Montrer que <LatexRenderer latex="\int_0^{+\infty} \frac{1 - \cos t}{t^2}\,dt" /> converge et calculer sa valeur (on admet <LatexRenderer latex="\int_0^{+\infty} \sin t / t\,dt = \pi/2" />).</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Une intégrale faisant intervenir un facteur <LatexRenderer latex="1 - \cos t" /> est souvent faussement impropre en 0 (car <LatexRenderer latex="1 - \cos t \sim t^2/2" />) et bénéficie d'une astuce par intégration par parties pour se ramener à une intégrale connue (Dirichlet).
              </PointMethodo>
              <p><strong>Convergence.</strong> Soit <LatexRenderer latex="f(t) = (1 - \cos t)/t^2" />.</p>
              <p>En 0 : <LatexRenderer latex="1 - \cos t = t^2/2 - t^4/24 + o(t^4)" />, donc <LatexRenderer latex="f(t) \to 1/2" />. <em>Faussement impropre en 0.</em></p>
              <p>En <LatexRenderer latex="+\infty" /> : <LatexRenderer latex="|f(t)| \le 2/t^2" />, et <LatexRenderer latex="\int 1/t^2" /> converge (Riemann, <LatexRenderer latex="\alpha = 2 > 1" />). Donc convergence absolue.</p>
              <p className="mt-2"><strong>Calcul par IPP.</strong> Sur <LatexRenderer latex="[\varepsilon, X]" />, posons <LatexRenderer latex="u = 1 - \cos t" />, <LatexRenderer latex="v' = 1/t^2" />, donc <LatexRenderer latex="u' = \sin t" />, <LatexRenderer latex="v = -1/t" /> :</p>
              <LatexRenderer latex="\int_\varepsilon^X \frac{1 - \cos t}{t^2}\,dt = \left[-\frac{1 - \cos t}{t}\right]_\varepsilon^X + \int_\varepsilon^X \frac{\sin t}{t}\,dt." />
              <Astuce>
                Terme crochet en 0 : <LatexRenderer latex="(1 - \cos \varepsilon)/\varepsilon \sim \varepsilon/2 \to 0" />. En <LatexRenderer latex="+\infty" /> : <LatexRenderer latex="|(1 - \cos X)/X| \le 2/X \to 0" />.
              </Astuce>
              <p className="mt-2">D'où, en passant à la limite <LatexRenderer latex="\varepsilon \to 0" />, <LatexRenderer latex="X \to +\infty" /> :</p>
              <LatexRenderer latex="\int_0^{+\infty} \frac{1 - \cos t}{t^2}\,dt = \int_0^{+\infty} \frac{\sin t}{t}\,dt = \frac{\pi}{2}." />
              <ConclusionBox>
                <LatexRenderer latex="\int_0^{+\infty} \frac{1 - \cos t}{t^2}\,dt = \dfrac{\pi}{2}" /> (ramenée à l'intégrale de Dirichlet par IPP).
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre15IntegralesImpropresEtCriteresExercicesPage;
