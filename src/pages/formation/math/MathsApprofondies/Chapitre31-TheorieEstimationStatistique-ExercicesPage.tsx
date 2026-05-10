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

const Chapitre31TheorieEstimationStatistiqueExercicesPage = () => {
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
      chapterNumber={31}
      chapterTitle="Théorie de l'Estimation"
      description="Comparaison d'estimateurs, Maximum de Vraisemblance, Information de Fisher."
      slug="theorie-estimation-statistique"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "estimation-statistique-avancee",
        title: "Estimation Statistique (Ch 28)"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Comparaison d'estimateurs" />

          <ExerciseCard
            id="31.1"
            title="Loi exponentielle — comparaison biais et risque quadratique"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1,\ldots,X_n" /> un échantillon iid de loi <LatexRenderer latex="\mathcal{E}(\lambda)" />, <LatexRenderer latex="\lambda>0" />. On cherche à estimer <LatexRenderer latex="\theta=1/\lambda=E(X_1)" />.</p>
                <p>On compare deux estimateurs : <LatexRenderer latex="\overline{X}_n=\frac{1}{n}\sum_{i=1}^n X_i" /> et <LatexRenderer latex="T_n=\frac{1}{n+1}\sum_{i=1}^n X_i" />.</p>
                <p>1. Calculer le biais de chaque estimateur.</p>
                <p>2. Comparer leurs risques quadratiques.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le biais d'un estimateur <LatexRenderer latex="\hat{\theta}" /> est <LatexRenderer latex="b(\hat{\theta})=E(\hat{\theta})-\theta" />. Un estimateur est sans biais si et seulement si son biais est nul. Le risque quadratique (EQM) vaut <LatexRenderer latex="R(\hat{\theta})=V(\hat{\theta})+b(\hat{\theta})^2" />.
                </PointMethodo>
                <p><strong>Biais de <LatexRenderer latex="\overline{X}_n" />.</strong> Par linéarité de l'espérance et puisque <LatexRenderer latex="E(X_i)=1/\lambda=\theta" /> pour tout <LatexRenderer latex="i" /> :</p>
                <p><LatexRenderer latex="E(\overline{X}_n)=\frac{1}{n}\sum_{i=1}^n E(X_i)=\theta" />.</p>
                <p>Donc <LatexRenderer latex="b(\overline{X}_n)=0" /> : <LatexRenderer latex="\overline{X}_n" /> est sans biais.</p>
                <p><strong>Biais de <LatexRenderer latex="T_n" />.</strong> De même <LatexRenderer latex="E(T_n)=\frac{n}{n+1}\theta" />, d'où :</p>
                <p><LatexRenderer latex="b(T_n)=\frac{n}{n+1}\theta-\theta=-\frac{\theta}{n+1}" />.</p>
                <p><LatexRenderer latex="T_n" /> est biaisé (biais négatif, tend vers 0 quand <LatexRenderer latex="n\to\infty" />).</p>
                <Astuce>Pour la loi <LatexRenderer latex="\mathcal{E}(\lambda)" /> : <LatexRenderer latex="V(X_i)=1/\lambda^2=\theta^2" />, donc <LatexRenderer latex="V(\overline{X}_n)=\theta^2/n" />.</Astuce>
                <p><strong>Risque quadratique.</strong> On calcule :</p>
                <p><LatexRenderer latex="R(\overline{X}_n)=V(\overline{X}_n)+0=\frac{\theta^2}{n}" />.</p>
                <p><LatexRenderer latex="R(T_n)=V(T_n)+b(T_n)^2=\frac{n\theta^2}{(n+1)^2}+\frac{\theta^2}{(n+1)^2}=\frac{\theta^2}{n+1}" />.</p>
                <p>Or <LatexRenderer latex="\frac{\theta^2}{n+1}<\frac{\theta^2}{n}" /> pour tout <LatexRenderer latex="n\geq 1" />. Donc <LatexRenderer latex="R(T_n)<R(\overline{X}_n)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\overline{X}_n" /> est sans biais mais <LatexRenderer latex="T_n" />, bien que biaisé, a un risque quadratique strictement plus faible : <LatexRenderer latex="R(T_n)=\theta^2/(n+1)<\theta^2/n=R(\overline{X}_n)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Maximum de vraisemblance" />

          <ExerciseCard
            id="31.2"
            title="Loi de Pareto — EMV"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1,\ldots,X_n" /> iid de densité <LatexRenderer latex="f_a(x)=\frac{a}{x^{a+1}}\mathbf{1}_{x\geq 1}" />, avec <LatexRenderer latex="a>0" /> inconnu.</p>
                <p>Déterminer l'estimateur du maximum de vraisemblance de <LatexRenderer latex="a" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour calculer l'EMV : écrire la vraisemblance <LatexRenderer latex="L_n(a)" />, passer au logarithme, dériver par rapport au paramètre et annuler la dérivée. Vérifier que c'est bien un maximum (dérivée seconde négative ou étude de signe).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="x_1,\ldots,x_n>1" /> une réalisation. La vraisemblance est :</p>
                <p><LatexRenderer latex="L_n(a)=\prod_{i=1}^n f_a(x_i)=a^n\prod_{i=1}^n x_i^{-(a+1)}=a^n\left(\prod_{i=1}^n x_i\right)^{-(a+1)}" />.</p>
                <p>La log-vraisemblance est :</p>
                <p><LatexRenderer latex="\ell_n(a)=n\ln a-(a+1)\sum_{i=1}^n \ln x_i" />.</p>
                <p>Or la dérivée par rapport à <LatexRenderer latex="a" /> est :</p>
                <p><LatexRenderer latex="\ell_n'(a)=\frac{n}{a}-\sum_{i=1}^n \ln x_i" />.</p>
                <p>En annulant : <LatexRenderer latex="\hat{a}_n=\dfrac{n}{\sum_{i=1}^n \ln X_i}" />.</p>
                <p>Puisque <LatexRenderer latex="\ell_n''(a)=-n/a^2<0" />, c'est bien un maximum global.</p>
                <ConclusionBox>
                  L'estimateur du maximum de vraisemblance de <LatexRenderer latex="a" /> est <LatexRenderer latex="\hat{a}_n=\dfrac{n}{\displaystyle\sum_{i=1}^n \ln X_i}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre31TheorieEstimationStatistiqueExercicesPage;
