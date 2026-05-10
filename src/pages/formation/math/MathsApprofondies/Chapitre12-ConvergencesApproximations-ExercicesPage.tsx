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

const Chapitre12ConvergencesApproximationsExercicesPage = () => {
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
    const num = id.replace(/[^0-9.]/g, '').padStart(2, '0');
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
      chapterNumber={27}
      chapterTitle="Convergences & Loi Normale"
      description="Exercices sur les convergences, la loi des grands nombres et le TCL."
      slug="convergences-approximations"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Endomorphismes Symétriques (Ch 26)"
      }}
      nextChapter={{
        slug: "estimation-statistique-avancee",
        title: "Estimation (Ch 28)"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Inégalités et convergence en probabilité" />

          <ExerciseCard
            id="27.1"
            title="Inégalité de Bienaymé-Tchebychev — loi de Poisson"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X\sim\mathcal{P}(\lambda)" />, <LatexRenderer latex="\lambda>0" />.</p>
                <p>Majorer <LatexRenderer latex="P(|X-\lambda|\geq\lambda/2)" /> à l'aide de l'inégalité de Bienaymé-Tchebychev.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  L'inégalité de Bienaymé-Tchebychev s'applique à toute variable aléatoire <LatexRenderer latex="X" /> admettant une variance finie : pour tout <LatexRenderer latex="\varepsilon>0" />, <LatexRenderer latex="P(|X-E(X)|\geq\varepsilon)\leq V(X)/\varepsilon^2" />. On commence toujours par préciser <LatexRenderer latex="E(X)" /> et <LatexRenderer latex="V(X)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X\sim\mathcal{P}(\lambda)" />. Rappelons que <LatexRenderer latex="E(X)=\lambda" /> et <LatexRenderer latex="V(X)=\lambda" /> (la loi de Poisson a espérance et variance égales au paramètre).</p>
                <p>La variable <LatexRenderer latex="X" /> admet une variance finie. On applique l'inégalité de Bienaymé-Tchebychev avec <LatexRenderer latex="\varepsilon=\lambda/2" /> :</p>
                <p><LatexRenderer latex="P\!\left(|X-\lambda|\geq\frac{\lambda}{2}\right)\leq\frac{V(X)}{(\lambda/2)^2}=\frac{\lambda}{\lambda^2/4}=\frac{4}{\lambda}" />.</p>
                <Astuce>Cette majoration est d'autant meilleure que <LatexRenderer latex="\lambda" /> est grand, ce qui est cohérent : plus le paramètre est grand, plus la loi se concentre autour de <LatexRenderer latex="\lambda" />.</Astuce>
                <ConclusionBox>
                  Par l'inégalité de Bienaymé-Tchebychev : <LatexRenderer latex="P\!\left(|X-\lambda|\geq\dfrac{\lambda}{2}\right)\leq\dfrac{4}{\lambda}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Théorème Central Limite (approximation)" />

          <ExerciseCard
            id="27.2"
            title="Approximation normale — pile ou face"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Une pièce équilibrée est lancée 1000 fois. Estimer la probabilité d'obtenir entre 480 et 520 piles.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le Théorème Central Limite (TCL) permet d'approcher la loi d'une somme de variables iid par une loi normale : si <LatexRenderer latex="X_1,\ldots,X_n" /> sont iid avec <LatexRenderer latex="E(X_1)=\mu" /> et <LatexRenderer latex="V(X_1)=\sigma^2<+\infty" />, alors <LatexRenderer latex="\frac{S_n-n\mu}{\sigma\sqrt{n}}\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)" />. C'est une approximation (convergence en loi, pas une égalité).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X_i\sim\mathcal{B}(1,1/2)" /> pour <LatexRenderer latex="i=1,\ldots,1000" />, iid. On a <LatexRenderer latex="E(X_i)=1/2" /> et <LatexRenderer latex="V(X_i)=1/4" />.</p>
                <p>Soit <LatexRenderer latex="S_{1000}=\sum_{i=1}^{1000}X_i\sim\mathcal{B}(1000,1/2)" />. Alors <LatexRenderer latex="E(S_{1000})=500" /> et <LatexRenderer latex="V(S_{1000})=250" />, soit <LatexRenderer latex="\sigma=\sqrt{250}\approx 15{,}8" />.</p>
                <p>Par le TCL appliqué aux variables iid <LatexRenderer latex="X_i" /> :</p>
                <p><LatexRenderer latex="P(480\leq S_{1000}\leq 520)\approx P\!\left(\frac{480-500}{15{,}8}\leq Z\leq\frac{520-500}{15{,}8}\right)=P(-1{,}26\leq Z\leq 1{,}26)" /></p>
                <p>où <LatexRenderer latex="Z\sim\mathcal{N}(0,1)" />. D'où (par symétrie) :</p>
                <p><LatexRenderer latex="P(480\leq S_{1000}\leq 520)\approx 2\Phi(1{,}26)-1\approx 2\times 0{,}8962-1\approx 0{,}79" />.</p>
                <ConclusionBox>
                  Par approximation du TCL : <LatexRenderer latex="P(480\leq S_{1000}\leq 520)\approx 79\%" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Convergence en loi et théorème de Slutsky" />

          <ExerciseCard
            id="27.3"
            title="Théorème de Slutsky — quotient de suites"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)" /> une suite de variables aléatoires convergeant en loi vers <LatexRenderer latex="\mathcal{N}(0,1)" />, et <LatexRenderer latex="(Y_n)" /> une suite convergeant en probabilité vers la constante <LatexRenderer latex="1" />.</p>
                <p>Déterminer la limite en loi de <LatexRenderer latex="X_n/Y_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le théorème de Slutsky stipule que si <LatexRenderer latex="X_n\xrightarrow{\mathcal{L}}X" /> et <LatexRenderer latex="Y_n\xrightarrow{P}c" /> (constante), alors <LatexRenderer latex="X_n/Y_n\xrightarrow{\mathcal{L}}X/c" /> (sous réserve <LatexRenderer latex="c\neq 0" />). C'est le seul contexte où l'on peut combiner convergence en loi et convergence en probabilité.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X_n\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)" /> et <LatexRenderer latex="Y_n\xrightarrow{P}1" />.</p>
                <p>Or la constante <LatexRenderer latex="c=1\neq 0" />, donc le théorème de Slutsky s'applique.</p>
                <p>D'où <LatexRenderer latex="X_n/Y_n\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)/1=\mathcal{N}(0,1)" />.</p>
                <Astuce>Le théorème de Slutsky ne s'applique qu'avec une constante au dénominateur (convergence en probabilité vers une constante, pas seulement en loi).</Astuce>
                <ConclusionBox>
                  Par le théorème de Slutsky : <LatexRenderer latex="X_n/Y_n\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre12ConvergencesApproximationsExercicesPage;
