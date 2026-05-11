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

        <DifficultyHeader level="Niveau : Facile — DL à partir des fonctions usuelles" />

        <ExerciseCard
          id="14-6"
          title="DL d'une racine cubique en 0"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Calculer le DL en 0 à l'ordre 2 de <LatexRenderer latex="f(x) = \sqrt[3]{1 + x}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour <LatexRenderer latex="(1+x)^\alpha" /> en 0, on applique le DL usuel avec coefficients <LatexRenderer latex="\binom{\alpha}{k}" />. Ici <LatexRenderer latex="\alpha = 1/3" />.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(x) = (1 + x)^{1/3}" />. Avec <LatexRenderer latex="\alpha = 1/3" /> :</p>
              <p>Coefficient d'ordre 1 : <LatexRenderer latex="\alpha = 1/3" />. Coefficient d'ordre 2 : <LatexRenderer latex="\alpha(\alpha - 1)/2 = (1/3)(-2/3)/2 = -1/9" />.</p>
              <p className="mt-2">D'où :</p>
              <LatexRenderer latex="\sqrt[3]{1 + x} = 1 + \frac{x}{3} - \frac{x^2}{9} + o(x^2)." />
              <ConclusionBox>
                <LatexRenderer latex="\sqrt[3]{1+x} = 1 + x/3 - x^2/9 + o(x^2)" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Intermédiaire — Étude asymptotique de fonctions" />

        <ExerciseCard
          id="14-7"
          title="DL d'un quotient — limite indéterminée"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Calculer <LatexRenderer latex="\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une forme indéterminée <LatexRenderer latex="0/0" /> avec dénominateur en <LatexRenderer latex="x^k" />, développer le numérateur à l'ordre <LatexRenderer latex="k" /> au moins pour identifier le terme dominant.
              </PointMethodo>
              <p>Soit le DL de <LatexRenderer latex="e^x" /> en 0 à l'ordre 2 : <LatexRenderer latex="e^x = 1 + x + x^2/2 + o(x^2)" />.</p>
              <p className="mt-2">D'où <LatexRenderer latex="e^x - 1 - x = x^2/2 + o(x^2)" />. Ainsi :</p>
              <LatexRenderer latex="\frac{e^x - 1 - x}{x^2} = \frac{x^2/2 + o(x^2)}{x^2} = \frac{1}{2} + o(1) \xrightarrow[x\to 0]{} \frac{1}{2}." />
              <ConclusionBox>
                <LatexRenderer latex="\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \frac{1}{2}" />.
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="14-8"
          title="DL généralisé en l'infini"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Donner un développement asymptotique de <LatexRenderer latex="f(x) = \sqrt{x^2 + x} - x" /> quand <LatexRenderer latex="x \to +\infty" />, à l'ordre <LatexRenderer latex="o(1/x)" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour un développement en <LatexRenderer latex="+\infty" />, le changement de variable <LatexRenderer latex="u = 1/x" /> (avec <LatexRenderer latex="u \to 0^+" />) ramène à un DL classique en 0. Sinon, on factorise par la puissance dominante pour faire apparaître un <LatexRenderer latex="(1 + u)^\alpha" /> avec <LatexRenderer latex="u" /> petit.
                </PointMethodo>
              <p>Soit <LatexRenderer latex="x > 0" /> grand. On factorise par <LatexRenderer latex="x" /> :</p>
              <LatexRenderer latex="\sqrt{x^2 + x} = x\sqrt{1 + 1/x}." />
              <p className="mt-2">Posons <LatexRenderer latex="u = 1/x \to 0^+" />. Or, par le DL de <LatexRenderer latex="(1 + u)^{1/2}" /> en 0 :</p>
              <LatexRenderer latex="\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)." />
              <Astuce>
                Pour aller à l'ordre <LatexRenderer latex="o(1/x)" /> dans <LatexRenderer latex="f(x)" />, on a besoin du DL de <LatexRenderer latex="\sqrt{1+u}" /> à l'ordre 2 en <LatexRenderer latex="u" /> (car <LatexRenderer latex="x u^2 = 1/x" />, qui contribue à l'ordre <LatexRenderer latex="1/x" />).
              </Astuce>
              <p className="mt-2">D'où :</p>
              <LatexRenderer latex="\sqrt{x^2 + x} = x \cdot \left(1 + \frac{1}{2x} - \frac{1}{8x^2} + o(1/x^2)\right) = x + \frac{1}{2} - \frac{1}{8x} + o(1/x)." />
              <p className="mt-2">Ainsi <LatexRenderer latex="f(x) = \sqrt{x^2 + x} - x = \frac{1}{2} - \frac{1}{8x} + o(1/x)" />.</p>
              <ConclusionBox>
                <LatexRenderer latex="\sqrt{x^2 + x} - x = \dfrac{1}{2} - \dfrac{1}{8x} + o(1/x)" /> en <LatexRenderer latex="+\infty" />. Asymptote horizontale à <LatexRenderer latex="y = x + 1/2" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Concours — Calcul de limites par DL combinés" />

        <ExerciseCard
          id="14-9"
          title="Limite de (sin x / x)^(1/x²)"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Calculer <LatexRenderer latex="\displaystyle\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une limite de la forme <LatexRenderer latex="f(x)^{g(x)}" /> avec <LatexRenderer latex="f \to 1" /> et <LatexRenderer latex="g \to +\infty" /> (forme <LatexRenderer latex="1^\infty" />), passer par l'exponentielle : <LatexRenderer latex="f^g = e^{g \ln f}" />, puis développer <LatexRenderer latex="\ln f" /> en utilisant <LatexRenderer latex="\ln(1 + u) = u + O(u^2)" />.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(x) = \sin x / x" /> et <LatexRenderer latex="g(x) = 1/x^2" />.</p>
              <p className="mt-2"><strong>DL de f(x).</strong> Or <LatexRenderer latex="\sin x = x - x^3/6 + o(x^3)" />, donc <LatexRenderer latex="\sin x / x = 1 - x^2/6 + o(x^2)" />.</p>
              <p className="mt-2"><strong>DL du logarithme.</strong> Posons <LatexRenderer latex="u = -x^2/6 + o(x^2)" />, qui tend vers 0. Or <LatexRenderer latex="\ln(1 + u) = u + o(u)" />, donc :</p>
              <LatexRenderer latex="\ln\!\left(\frac{\sin x}{x}\right) = -\frac{x^2}{6} + o(x^2)." />
              <Astuce>
                Le terme dominant dans <LatexRenderer latex="\ln f" /> doit être de l'ordre <LatexRenderer latex="x^2" /> pour que <LatexRenderer latex="g(x) \ln f(x) = \ln f / x^2" /> ait une limite finie non nulle.
              </Astuce>
              <p className="mt-2"><strong>Forme exponentielle.</strong> D'où :</p>
              <LatexRenderer latex="\left(\frac{\sin x}{x}\right)^{1/x^2} = \exp\!\left(\frac{1}{x^2} \cdot \ln\!\frac{\sin x}{x}\right) = \exp\!\left(-\frac{1}{6} + o(1)\right) \xrightarrow[x\to 0]{} e^{-1/6}." />
              <ConclusionBox>
                <LatexRenderer latex="\displaystyle\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2} = e^{-1/6}" />.
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Niveau : Difficile — DL et inégalité par Taylor-Lagrange" />

        <ExerciseCard
          id="14-10"
          title="Inégalité par DL de l'exponentielle"
          difficulty="Niveau: Difficile"
          content={
            <div className="space-y-3">
              <p>Démontrer que pour tout <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="e^x \ge 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                L'inégalité de Taylor-Lagrange affirme que pour <LatexRenderer latex="f" /> de classe <LatexRenderer latex="\mathcal{C}^{n+1}" /> sur <LatexRenderer latex="[0, x]" /> avec <LatexRenderer latex="f^{(n+1)} \ge 0" />, on a <LatexRenderer latex="f(x) \ge \sum_{k=0}^n f^{(k)}(0) x^k / k!" />. C'est le procédé standard pour comparer une fonction à son DL de Taylor.
              </PointMethodo>
              <p>Soit <LatexRenderer latex="f(t) = e^t" />. <LatexRenderer latex="f \in \mathcal{C}^\infty(\mathbb{R})" />, avec <LatexRenderer latex="f^{(k)}(t) = e^t" /> pour tout <LatexRenderer latex="k" />.</p>
              <p className="mt-2"><strong>Formule de Taylor avec reste intégral.</strong> Pour <LatexRenderer latex="x \ge 0" />, en appliquant à l'ordre 3 :</p>
              <LatexRenderer latex="e^x = \sum_{k=0}^3 \frac{x^k}{k!} + \int_0^x \frac{(x-t)^3}{3!} e^t\,dt = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + R_3(x)." />
              <p className="mt-2">Or pour <LatexRenderer latex="t \in [0, x]" /> et <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="(x - t)^3 \ge 0" /> et <LatexRenderer latex="e^t > 0" />. D'où <LatexRenderer latex="R_3(x) = \frac{1}{6}\int_0^x (x-t)^3 e^t\,dt \ge 0" />.</p>
              <Astuce>
                On peut généraliser : pour tout <LatexRenderer latex="n \in \mathbb{N}" /> et <LatexRenderer latex="x \ge 0" />, <LatexRenderer latex="e^x \ge \sum_{k=0}^n x^k/k!" />. La démonstration est identique avec le reste de Taylor d'ordre <LatexRenderer latex="n" />.
              </Astuce>
              <p className="mt-2">Ainsi <LatexRenderer latex="e^x \ge 1 + x + x^2/2 + x^3/6" />, avec égalité ssi <LatexRenderer latex="x = 0" />.</p>
              <ConclusionBox>
                Pour tout <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="e^x \ge 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}" />, avec égalité uniquement en <LatexRenderer latex="x = 0" />.
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre14DeveloppementsLimitesEtTaylorExercicesPage;
