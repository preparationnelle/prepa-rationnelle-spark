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

const Chapitre14DeveloppementsLimitesEtTaylorExercicesPage = () => {
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
      chapterNumber={14}
      chapterTitle="Développements Limités & Taylor"
      description="Exercices sur les calculs de DL, la formule de Taylor et les études asymptotiques."
      slug="developpements-limites-formule-de-taylor"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "series-numeriques",
        title: "Séries Numériques (Ch 13)"
      }}
      nextChapter={{
        slug: "integrales-impropres-et-criteres",
        title: "Intégrales impropres (Ch 15)"
      }}
    >
      <div className="space-y-2">

        <DifficultyHeader level="Niveau : Facile — DL des fonctions usuelles" />

        <ExerciseCard
          id="14-1"
          title="Fonctions usuelles en 0 à l'ordre 3"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Calculer les DL en <LatexRenderer latex="0" /> à l'ordre <LatexRenderer latex="3" /> de :</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><LatexRenderer latex="f(x) = \sqrt{1+x}" /></li>
                <li><LatexRenderer latex="g(x) = \frac{1}{1+e^x}" /></li>
              </ul>
            </div>
          }
          correction={
            <div className="space-y-4">
              <PointMethodo>
                Pour tout DL, préciser l'ordre et le point de développement. Utiliser les DL usuels en 0 : <LatexRenderer latex="e^x = 1 + x + x^2/2! + x^3/3! + o(x^3)" />, <LatexRenderer latex="(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{6}x^3 + o(x^3)" />, <LatexRenderer latex="\frac{1}{1+u} = 1 - u + u^2 - u^3 + o(u^3)" />. Ne jamais garder des termes d'ordre supérieur à celui demandé.
              </PointMethodo>

              <p><strong>1. DL de <LatexRenderer latex="f(x) = \sqrt{1+x}" /> en 0 à l'ordre 3.</strong></p>
              <p>On applique le DL usuel de <LatexRenderer latex="(1+x)^\alpha" /> avec <LatexRenderer latex="\alpha = 1/2" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Coefficient d'ordre 1 : <LatexRenderer latex="\alpha = \frac{1}{2}" /></li>
                <li>Coefficient d'ordre 2 : <LatexRenderer latex="\frac{\alpha(\alpha-1)}{2} = \frac{(1/2)(-1/2)}{2} = -\frac{1}{8}" /></li>
                <li>Coefficient d'ordre 3 : <LatexRenderer latex="\frac{\alpha(\alpha-1)(\alpha-2)}{6} = \frac{(1/2)(-1/2)(-3/2)}{6} = \frac{1}{16}" /></li>
              </ul>
              <p>Ainsi : <LatexRenderer latex="\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + o(x^3)" /></p>

              <p><strong>2. DL de <LatexRenderer latex="g(x) = \frac{1}{1+e^x}" /> en 0 à l'ordre 3.</strong></p>
              <p>Soit le DL usuel de <LatexRenderer latex="e^x" /> en 0 à l'ordre 3 : <LatexRenderer latex="e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)" />.</p>
              <p>D'où <LatexRenderer latex="1 + e^x = 2 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3) = 2\!\left(1 + u\right)" /> où <LatexRenderer latex="u = \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12} + o(x^3)" />.</p>
              <p>Or <LatexRenderer latex="\frac{1}{1+u} = 1 - u + u^2 - u^3 + o(u^3)" />. En ne conservant que les termes d'ordre <LatexRenderer latex="\le 3" /> :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><LatexRenderer latex="u = \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12}" /></li>
                <li><LatexRenderer latex="u^2 = \frac{x^2}{4} + \frac{x^3}{4} + o(x^3)" /></li>
                <li><LatexRenderer latex="u^3 = \frac{x^3}{8} + o(x^3)" /></li>
              </ul>
              <p>Ainsi <LatexRenderer latex="1 - u + u^2 - u^3 = 1 - \frac{x}{2} + \left(-\frac{1}{4}+\frac{1}{4}\right)x^2 + \left(-\frac{1}{12}+\frac{1}{4}-\frac{1}{8}\right)x^3 + o(x^3)" /></p>
              <p>Le coefficient en <LatexRenderer latex="x^3" /> vaut <LatexRenderer latex="-\frac{2}{24} + \frac{6}{24} - \frac{3}{24} = \frac{1}{24}" />.</p>
              <p>D'où <LatexRenderer latex="g(x) = \frac{1}{2}\!\left(1 - \frac{x}{2} + \frac{x^3}{24} + o(x^3)\right) = \frac{1}{2} - \frac{x}{4} + \frac{x^3}{48} + o(x^3)" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + o(x^3)" /></p>
                <p><LatexRenderer latex="\frac{1}{1+e^x} = \frac{1}{2} - \frac{x}{4} + \frac{x^3}{48} + o(x^3)" /></p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Limites par DL" />

        <ExerciseCard
          id="14-2"
          title="Calcul de limite — forme indéterminée"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Déterminer <LatexRenderer latex="\displaystyle\lim_{x \to 0} \frac{\ln(1+x) - \sin x}{x^2}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <PointMethodo>
                Pour lever une forme indéterminée <LatexRenderer latex="0/0" /> avec un dénominateur en <LatexRenderer latex="x^2" />, développer le numérateur à l'ordre 2 en 0 pour faire apparaître le terme dominant. On utilise les DL usuels : <LatexRenderer latex="\ln(1+x) = x - x^2/2 + o(x^2)" /> et <LatexRenderer latex="\sin x = x - x^3/6 + o(x^3)" />.
              </PointMethodo>

              <p>Soit les DL en 0 à l'ordre 2 :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><LatexRenderer latex="\ln(1+x) = x - \frac{x^2}{2} + o(x^2)" /></li>
                <li><LatexRenderer latex="\sin x = x + o(x^2)" /> (le terme suivant est en <LatexRenderer latex="x^3" />, donc négligeable à l'ordre 2)</li>
              </ul>

              <p>D'où, en calculant le numérateur :</p>
              <p><LatexRenderer latex="\ln(1+x) - \sin x = \left(x - \frac{x^2}{2} + o(x^2)\right) - \left(x + o(x^2)\right) = -\frac{x^2}{2} + o(x^2)" /></p>

              <p>Ainsi :</p>
              <p><LatexRenderer latex="\frac{\ln(1+x) - \sin x}{x^2} = \frac{-\frac{x^2}{2} + o(x^2)}{x^2} = -\frac{1}{2} + o(1) \xrightarrow[x \to 0]{} -\frac{1}{2}" /></p>

              <ConclusionBox>
                <p><LatexRenderer latex="\displaystyle\lim_{x \to 0} \frac{\ln(1+x) - \sin x}{x^2} = -\frac{1}{2}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="14-3"
          title="DL en un point quelconque — développement en π/2"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Donner le DL de <LatexRenderer latex="f(x) = \cos x" /> en <LatexRenderer latex="\pi/2" /> à l'ordre 3.</p>
              <p>En déduire la tangente et la concavité de la courbe en ce point.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <PointMethodo>
                Pour développer une fonction en un point <LatexRenderer latex="a \ne 0" />, poser <LatexRenderer latex="h = x - a" /> et réécrire <LatexRenderer latex="f(x) = f(a+h)" />. On se ramène ainsi à un DL en <LatexRenderer latex="h = 0" />, exploitable avec les formules usuelles.
              </PointMethodo>

              <p>Soit <LatexRenderer latex="h = x - \pi/2" />. Or <LatexRenderer latex="\cos\!\left(\frac{\pi}{2} + h\right) = -\sin h" />.</p>
              <p>D'où, en utilisant le DL usuel de <LatexRenderer latex="\sin h" /> en 0 à l'ordre 3 : <LatexRenderer latex="\sin h = h - \frac{h^3}{6} + o(h^3)" />.</p>
              <p>Ainsi : <LatexRenderer latex="\cos x = -\left(x - \frac{\pi}{2}\right) + \frac{1}{6}\left(x - \frac{\pi}{2}\right)^3 + o\!\left(\left(x-\frac{\pi}{2}\right)^3\right)" /></p>

              <Astuce>
                Le coefficient d'ordre 1 donne la pente de la tangente, le coefficient d'ordre 2 renseigne sur la concavité (positif = convexe, négatif = concave).
              </Astuce>

              <p>Le coefficient d'ordre 1 est <LatexRenderer latex="-1" />, donc la tangente en <LatexRenderer latex="x = \pi/2" /> a pour équation <LatexRenderer latex="y = -(x - \pi/2)" />.</p>
              <p>Le coefficient d'ordre 2 est nul, donc la concavité est déterminée par le terme d'ordre 3 : <LatexRenderer latex="1/6 > 0" />, ce qui indique un point d'inflexion.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\cos x = -(x - \tfrac{\pi}{2}) + \frac{1}{6}(x - \tfrac{\pi}{2})^3 + o\bigl((x-\tfrac{\pi}{2})^3\bigr)" />. La tangente en <LatexRenderer latex="\pi/2" /> est <LatexRenderer latex="y = -(x - \pi/2)" /> et ce point est un point d'inflexion.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — Inégalité de Taylor-Lagrange" />

        <ExerciseCard
          id="14-4"
          title="Encadrement de sin x par Taylor-Lagrange"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Montrer que pour tout <LatexRenderer latex="x \ge 0" /> :</p>
              <p className="text-center"><LatexRenderer latex="x - \frac{x^3}{6} \le \sin x \le x" /></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <PointMethodo>
                Pour obtenir un encadrement de <LatexRenderer latex="f(b)" /> autour de son développement de Taylor en <LatexRenderer latex="a" />, utiliser la formule de Taylor avec reste intégral : <LatexRenderer latex="f(b) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(b-a)^k + \int_a^b \frac{(b-t)^n}{n!} f^{(n+1)}(t)\,dt" />. L'encadrement découle du signe du reste intégral.
              </PointMethodo>

              <p><strong>1. Majoration <LatexRenderer latex="\sin x \le x" />.</strong></p>
              <p>On applique la formule de Taylor avec reste intégral à <LatexRenderer latex="f(t) = \sin t" /> entre 0 et <LatexRenderer latex="x \ge 0" /> à l'ordre 1 :</p>
              <p><LatexRenderer latex="\sin x = x + \int_0^x (x-t)(-\sin t)\,dt = x - \int_0^x (x-t)\sin t\,dt" /></p>
              <p>Pour <LatexRenderer latex="t \in [0, x]" /> avec <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="x - t \ge 0" /> et <LatexRenderer latex="\sin t \ge 0" />. D'où le reste intégral est positif.</p>
              <p>Ainsi <LatexRenderer latex="\sin x \le x" />.</p>

              <p><strong>2. Minoration <LatexRenderer latex="x - x^3/6 \le \sin x" />.</strong></p>
              <p>On pousse le développement à l'ordre 3 :</p>
              <p><LatexRenderer latex="\sin x = x - \frac{x^3}{6} + \int_0^x \frac{(x-t)^3}{6} \sin t\,dt" /></p>
              <p>(car <LatexRenderer latex="f^{(4)}(t) = \sin t" />). Pour <LatexRenderer latex="t \in [0, x]" /> avec <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="(x-t)^3 \ge 0" /> et <LatexRenderer latex="\sin t \ge 0" />. D'où le reste est positif.</p>
              <p>Donc <LatexRenderer latex="\sin x \ge x - x^3/6" />.</p>

              <ConclusionBox>
                <p>Pour tout <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="x - \dfrac{x^3}{6} \le \sin x \le x" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="14-5"
          title="DL et étude de fonction — point critique"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="f(x) = x - \ln(1+x)" /> définie sur <LatexRenderer latex="-1 < x < +\infty" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Écrire le DL de <LatexRenderer latex="f" /> en 0 à l'ordre 3.</li>
                <li>En déduire le signe de <LatexRenderer latex="f" /> au voisinage de 0.</li>
                <li>Montrer que <LatexRenderer latex="f(x) \ge 0" /> pour tout <LatexRenderer latex="x > -1" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <PointMethodo>
                Pour déterminer le signe d'une fonction au voisinage d'un zéro d'ordre <LatexRenderer latex="k" />, écrire le DL et identifier le premier terme non nul : son signe détermine celui de la fonction. Pour le signe global, utiliser une étude de la dérivée.
              </PointMethodo>

              <p><strong>1. DL de <LatexRenderer latex="f" /> en 0 à l'ordre 3.</strong></p>
              <p>Soit <LatexRenderer latex="\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)" /> (DL usuel).</p>
              <p>Ainsi <LatexRenderer latex="f(x) = x - \left(x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)\right) = \frac{x^2}{2} - \frac{x^3}{3} + o(x^3)" />.</p>

              <p><strong>2. Signe au voisinage de 0.</strong></p>
              <p><LatexRenderer latex="f(x) = \frac{x^2}{2}\!\left(1 - \frac{2x}{3} + o(x)\right)" />. Pour <LatexRenderer latex="x" /> assez petit, le facteur parenthèse est positif. Or <LatexRenderer latex="x^2/2 \ge 0" />. Donc <LatexRenderer latex="f(x) \ge 0" /> au voisinage de 0.</p>

              <Astuce>
                Pour étendre le résultat à tout <LatexRenderer latex="x > -1" />, montrer que <LatexRenderer latex="f" /> admet un minimum global en <LatexRenderer latex="x = 0" /> en étudiant le signe de <LatexRenderer latex="f'(x)" />.
              </Astuce>

              <p><strong>3. Signe global.</strong></p>
              <p><LatexRenderer latex="f'(x) = 1 - \frac{1}{1+x} = \frac{x}{1+x}" />. D'où <LatexRenderer latex="f'(x) < 0" /> si <LatexRenderer latex="-1 < x < 0" /> et <LatexRenderer latex="f'(x) > 0" /> si <LatexRenderer latex="x > 0" />. Donc <LatexRenderer latex="f" /> est minimale en <LatexRenderer latex="x = 0" /> avec <LatexRenderer latex="f(0) = 0" />.</p>
              <p>Ainsi <LatexRenderer latex="f(x) \ge f(0) = 0" /> pour tout <LatexRenderer latex="x > -1" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="f(x) = \frac{x^2}{2} - \frac{x^3}{3} + o(x^3)" /> en 0. Pour tout <LatexRenderer latex="x > -1" /> : <LatexRenderer latex="x - \ln(1+x) \ge 0" />, c'est-à-dire <LatexRenderer latex="\ln(1+x) \le x" />.</p>
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre14DeveloppementsLimitesEtTaylorExercicesPage;
