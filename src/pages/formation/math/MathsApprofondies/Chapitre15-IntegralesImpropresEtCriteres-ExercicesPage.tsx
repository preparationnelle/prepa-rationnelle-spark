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

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre15IntegralesImpropresEtCriteresExercicesPage;
