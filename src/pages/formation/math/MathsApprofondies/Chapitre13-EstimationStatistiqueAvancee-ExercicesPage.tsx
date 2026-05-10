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

const Chapitre13EstimationStatistiqueAvanceeExercicesPage = () => {
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
      chapterNumber={28}
      chapterTitle="Estimation Statistique"
      description="Exercices sur les estimateurs, le biais, le risque et les intervalles de confiance."
      slug="estimation-statistique-avancee"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "convergences-approximations",
        title: "Convergences (Ch 27)"
      }}
      nextChapter={{
        slug: "theorie-estimation-statistique",
        title: "Théorie de l'Estimation (Ch 31)"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Estimation ponctuelle et biais" />

          <ExerciseCard
            id="28.1"
            title="Estimateur du maximum — loi uniforme"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1,\ldots,X_n" /> un échantillon iid de loi <LatexRenderer latex="\mathcal{U}([0,\theta])" />, <LatexRenderer latex="\theta>0" /> inconnu. On pose <LatexRenderer latex="M_n=\max(X_1,\ldots,X_n)" />.</p>
                <p>1. Calculer le biais de <LatexRenderer latex="M_n" /> comme estimateur de <LatexRenderer latex="\theta" />.</p>
                <p>2. Construire un estimateur sans biais à partir de <LatexRenderer latex="M_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le biais d'un estimateur <LatexRenderer latex="\hat{\theta}" /> est <LatexRenderer latex="b(\hat{\theta})=E(\hat{\theta})-\theta" />. Pour calculer <LatexRenderer latex="E(M_n)" />, on détermine d'abord la loi de <LatexRenderer latex="M_n" /> via sa fonction de répartition : <LatexRenderer latex="F_{M_n}(t)=P(\max X_i\leq t)=P(X_1\leq t)^n" /> par indépendance.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="M_n(\Omega)=[0,\theta]" />. Par indépendance des <LatexRenderer latex="X_i" /> :</p>
                <p><LatexRenderer latex="F_{M_n}(t)=P(M_n\leq t)=\prod_{i=1}^n P(X_i\leq t)=\left(\frac{t}{\theta}\right)^n\mathbf{1}_{[0,\theta]}(t)" />.</p>
                <p>D'où la densité de <LatexRenderer latex="M_n" /> : <LatexRenderer latex="f_{M_n}(t)=\frac{n}{\theta^n}t^{n-1}\mathbf{1}_{[0,\theta]}(t)" />.</p>
                <p>On calcule l'espérance par le théorème de transfert :</p>
                <p><LatexRenderer latex="E(M_n)=\int_0^\theta t\cdot\frac{n}{\theta^n}t^{n-1}\,dt=\frac{n}{\theta^n}\cdot\frac{\theta^{n+1}}{n+1}=\frac{n}{n+1}\theta" />.</p>
                <p>Ainsi le biais de <LatexRenderer latex="M_n" /> est :</p>
                <p><LatexRenderer latex="b(M_n)=E(M_n)-\theta=\frac{n}{n+1}\theta-\theta=-\frac{\theta}{n+1}<0" />.</p>
                <p><LatexRenderer latex="M_n" /> est biaisé par défaut (il sous-estime systématiquement <LatexRenderer latex="\theta" />).</p>
                <p>Pour corriger le biais, on pose <LatexRenderer latex="\hat{\theta}_n=\frac{n+1}{n}M_n" />. Alors :</p>
                <p><LatexRenderer latex="E\!\left(\hat{\theta}_n\right)=\frac{n+1}{n}\cdot\frac{n}{n+1}\theta=\theta" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="b(M_n)=-\theta/(n+1)" />. L'estimateur sans biais associé est <LatexRenderer latex="\hat{\theta}_n=\dfrac{n+1}{n}\,M_n" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Intervalles de confiance asymptotiques" />

          <ExerciseCard
            id="28.2"
            title="IC asymptotique pour une proportion (loi de Bernoulli)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1,\ldots,X_n" /> iid de loi <LatexRenderer latex="\mathcal{B}(1,p)" />, <LatexRenderer latex="p\in(0,1)" /> inconnu. Construire un intervalle de confiance asymptotique de niveau <LatexRenderer latex="1-\alpha=0{,}95" /> pour <LatexRenderer latex="p" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On applique le TCL aux variables iid <LatexRenderer latex="X_i\sim\mathcal{B}(1,p)" /> pour obtenir la normalité asymptotique de la moyenne empirique, puis on construit l'IC en inversant le quantile de la loi normale.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\overline{X}_n=\frac{1}{n}\sum_{i=1}^n X_i" /> la fréquence empirique. Les variables sont iid avec <LatexRenderer latex="E(X_i)=p" /> et <LatexRenderer latex="V(X_i)=p(1-p)" />.</p>
                <p>Par le TCL appliqué aux <LatexRenderer latex="X_i" /> iid : <LatexRenderer latex="\frac{\overline{X}_n-p}{\sqrt{p(1-p)/n}}\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)" />.</p>
                <p>Or <LatexRenderer latex="p(1-p)" /> est inconnu ; on le remplace par <LatexRenderer latex="\overline{X}_n(1-\overline{X}_n)" /> (consistant par LFGN).</p>
                <Astuce>Pour <LatexRenderer latex="\alpha=0{,}05" />, le quantile d'ordre <LatexRenderer latex="1-\alpha/2=0{,}975" /> de <LatexRenderer latex="\mathcal{N}(0,1)" /> est <LatexRenderer latex="z_{0{,}975}=1{,}96" />.</Astuce>
                <p>D'où l'IC asymptotique de niveau 95 % pour <LatexRenderer latex="p" /> :</p>
                <p><LatexRenderer latex="\left[\overline{X}_n-1{,}96\sqrt{\frac{\overline{X}_n(1-\overline{X}_n)}{n}}\;;\;\overline{X}_n+1{,}96\sqrt{\frac{\overline{X}_n(1-\overline{X}_n)}{n}}\right]" />.</p>
                <ConclusionBox>
                  IC asymptotique de niveau 95 % pour <LatexRenderer latex="p" /> : <LatexRenderer latex="\overline{X}_n\pm 1{,}96\sqrt{\overline{X}_n(1-\overline{X}_n)/n}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Borne de Cramér-Rao et efficacité" />

          <ExerciseCard
            id="28.3"
            title="Information de Fisher et borne de Cramér-Rao — loi normale"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1,\ldots,X_n" /> iid de loi <LatexRenderer latex="\mathcal{N}(\mu,\sigma^2)" />, <LatexRenderer latex="\sigma^2" /> connu, <LatexRenderer latex="\mu\in\mathbb{R}" /> inconnu.</p>
                <p>1. Calculer l'information de Fisher <LatexRenderer latex="I(\mu)" />.</p>
                <p>2. En déduire la borne de Cramér-Rao pour tout estimateur sans biais de <LatexRenderer latex="\mu" />.</p>
                <p>3. La moyenne empirique <LatexRenderer latex="\overline{X}_n" /> atteint-elle cette borne ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  L'information de Fisher d'un échantillon de taille 1 est <LatexRenderer latex="I_1(\theta)=E\!\left[\left(\frac{\partial}{\partial\theta}\ln f_\theta(X)\right)^2\right]" />. Pour un échantillon de taille <LatexRenderer latex="n" />, <LatexRenderer latex="I_n(\theta)=n\,I_1(\theta)" />. La borne de Cramér-Rao stipule que pour tout estimateur sans biais <LatexRenderer latex="\hat{\theta}" /> : <LatexRenderer latex="V(\hat{\theta})\geq 1/I_n(\theta)" />.
                </PointMethodo>
                <p><strong>Information de Fisher.</strong> La densité d'une observation est <LatexRenderer latex="f_\mu(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/(2\sigma^2)}" />.</p>
                <p>Le score est <LatexRenderer latex="\frac{\partial}{\partial\mu}\ln f_\mu(x)=\frac{x-\mu}{\sigma^2}" />.</p>
                <p>Or <LatexRenderer latex="I_1(\mu)=E\!\left[\left(\frac{X-\mu}{\sigma^2}\right)^2\right]=\frac{V(X)}{\sigma^4}=\frac{\sigma^2}{\sigma^4}=\frac{1}{\sigma^2}" />.</p>
                <p>D'où <LatexRenderer latex="I_n(\mu)=\frac{n}{\sigma^2}" />.</p>
                <p><strong>Borne de Cramér-Rao.</strong> Pour tout estimateur sans biais <LatexRenderer latex="\hat{\mu}" /> de <LatexRenderer latex="\mu" /> :</p>
                <p><LatexRenderer latex="V(\hat{\mu})\geq\frac{1}{I_n(\mu)}=\frac{\sigma^2}{n}" />.</p>
                <p><strong>Efficacité de <LatexRenderer latex="\overline{X}_n" />.</strong> Les variables sont iid avec <LatexRenderer latex="E(\overline{X}_n)=\mu" /> (sans biais) et <LatexRenderer latex="V(\overline{X}_n)=\sigma^2/n" />.</p>
                <p>Ainsi <LatexRenderer latex="V(\overline{X}_n)=\sigma^2/n=1/I_n(\mu)" /> : la borne de Cramér-Rao est atteinte.</p>
                <ConclusionBox>
                  <LatexRenderer latex="I_n(\mu)=n/\sigma^2" />. La borne de Cramér-Rao est <LatexRenderer latex="\sigma^2/n" />. La moyenne empirique <LatexRenderer latex="\overline{X}_n" /> est un estimateur <strong>efficace</strong> de <LatexRenderer latex="\mu" /> : elle atteint la borne.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre13EstimationStatistiqueAvanceeExercicesPage;
