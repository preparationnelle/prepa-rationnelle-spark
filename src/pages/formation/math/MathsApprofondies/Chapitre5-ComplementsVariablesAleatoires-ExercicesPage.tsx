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

const Chapitre5ComplementsVariablesAleatoiresExercicesPage = () => {
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
      chapterNumber={5}
      chapterTitle="Compléments sur les variables aléatoires"
      description="Séries de variables aléatoires, convergence et calculs d'espérance et variance."
      slug="maths-complements-variables-aleatoires"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "maths-approfondies-2e-annee",
        title: "Maths Approfondies 2e année"
      }}
      nextChapter={{
        slug: "maths-variables-aleatoires-densite",
        title: "Variables aléatoires à densité"
      }}
    >
      <div className="space-y-8">

        <section id="niveau-1">
          <DifficultyHeader level="Intermédiaire" />
          <ExerciseCard
            id="ex-01"
            title="Série convergente et variables aléatoires"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(u_n)_{n \ge 1}" /> définie par <LatexRenderer latex="u_n = \dfrac{1}{n(n+1)}" />.</p>
                <p>1. Montrer que <LatexRenderer latex="\displaystyle\sum_{n \ge 1} u_n" /> converge et que sa somme vaut 1.</p>
                <p>2. Soit <LatexRenderer latex="X" /> une variable aléatoire à valeurs dans <LatexRenderer latex="\mathbb{N}^*" /> telle que <LatexRenderer latex="P(X = n) = u_n" /> pour tout <LatexRenderer latex="n \ge 1" />. <LatexRenderer latex="X" /> admet-elle une espérance ? une variance ?</p>
                <p>3. Mêmes questions pour <LatexRenderer latex="\sqrt{X}" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour vérifier qu'une suite définit bien une loi de probabilité, on vérifie la normalisation (somme = 1), souvent par télescopage. L'existence d'une espérance équivaut à la convergence de la série <LatexRenderer latex="\sum k\,P(X=k)" /> ; de même pour la variance avec <LatexRenderer latex="\sum k^2 P(X=k)" />. Le théorème de transfert permet d'étudier les moments de <LatexRenderer latex="g(X)" />.
                </PointMethodo>
                <Astuce>
                  La décomposition télescopique <LatexRenderer latex="u_n = \tfrac{1}{n} - \tfrac{1}{n+1}" /> transforme la somme partielle en une différence qui se simplifie immédiatement.
                </Astuce>
                <p><strong>1.</strong> Soit <LatexRenderer latex="u_n = \dfrac{1}{n} - \dfrac{1}{n+1}" /> (décomposition télescopique). D'où :</p>
                <LatexRenderer latex="\displaystyle \sum_{k=1}^{N} u_k = 1 - \frac{1}{N+1} \xrightarrow[N \to \infty]{} 1." />
                <p className="mt-2">Ainsi <LatexRenderer latex="\displaystyle\sum_{n \ge 1} u_n = 1" /> et la série converge.</p>
                <p className="mt-2"><strong>2. Étude de <LatexRenderer latex="X" />.</strong> Soit <LatexRenderer latex="X(\Omega) = \mathbb{N}^*" />. <LatexRenderer latex="X" /> admet une espérance si et seulement si la série <LatexRenderer latex="\sum k\,P(X=k)" /> converge :</p>
                <LatexRenderer latex="\displaystyle \sum_{k \ge 1} k\,P(X=k) = \sum_{k \ge 1} \frac{k}{k(k+1)} = \sum_{k \ge 1} \frac{1}{k+1}." />
                <p className="mt-2">Or <LatexRenderer latex="\dfrac{1}{k+1} \sim \dfrac{1}{k}" /> et la série harmonique diverge. Donc <strong><LatexRenderer latex="X" /> n'admet pas d'espérance</strong>.</p>
                <p className="mt-2">Pour la variance, le moment d'ordre 2 :</p>
                <LatexRenderer latex="\displaystyle \sum_{k \ge 1} k^2 P(X=k) = \sum_{k \ge 1} \frac{k}{k+1} \to 1 \ne 0," />
                <p className="mt-1">donc la série diverge. <strong><LatexRenderer latex="X" /> n'admet pas de variance.</strong></p>
                <p className="mt-2"><strong>3. Étude de <LatexRenderer latex="\sqrt{X}" />.</strong> Par le <strong>théorème de transfert</strong>, <LatexRenderer latex="E(\sqrt{X})" /> existe si et seulement si :</p>
                <LatexRenderer latex="\displaystyle \sum_{n \ge 1} \sqrt{n}\,P(X=n) = \sum_{n \ge 1} \frac{\sqrt{n}}{n(n+1)} \sim \sum_{n \ge 1} \frac{1}{n^{3/2}}." />
                <p className="mt-2">La série de Riemann de paramètre <LatexRenderer latex="3/2 > 1" /> converge. Donc <strong><LatexRenderer latex="\sqrt{X}" /> admet une espérance.</strong></p>
                <p className="mt-2">En revanche, <LatexRenderer latex="E((\sqrt{X})^2) = E(X)" /> n'existe pas (question 2). Donc <strong><LatexRenderer latex="\sqrt{X}" /> n'admet pas de variance.</strong></p>
                <ConclusionBox>
                  <LatexRenderer latex="X" /> n'admet ni espérance ni variance. <LatexRenderer latex="\sqrt{X}" /> admet une espérance mais pas de variance.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre5ComplementsVariablesAleatoiresExercicesPage;
