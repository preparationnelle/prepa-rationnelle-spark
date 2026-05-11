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

        <div>
          <DifficultyHeader level="Module 4 — Convergence en probabilité d'un estimateur" />

          <ExerciseCard
            id="28.4"
            title="Consistance de la moyenne empirique"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid d'espérance <LatexRenderer latex="\mu" /> et de variance <LatexRenderer latex="\sigma^2 < +\infty" />.</p>
                <p>Démontrer que la moyenne empirique <LatexRenderer latex="\overline{X}_n" /> est un estimateur consistant de <LatexRenderer latex="\mu" />, c'est-à-dire <LatexRenderer latex="\overline{X}_n \xrightarrow{P} \mu" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La consistance (convergence en probabilité vers le paramètre estimé) s'établit en majorant <LatexRenderer latex="P(|\hat{\theta}_n - \theta| \ge \varepsilon)" /> par une suite tendant vers 0. L'inégalité de Bienaymé-Tchebychev est l'outil naturel quand l'estimateur admet une variance qui tend vers 0.
                </PointMethodo>
                <p>Soient <LatexRenderer latex="X_i" /> iid avec <LatexRenderer latex="E(X_i) = \mu" /> et <LatexRenderer latex="V(X_i) = \sigma^2" />. Or, par linéarité et indépendance :</p>
                <LatexRenderer latex="E(\overline{X}_n) = \mu, \quad V(\overline{X}_n) = \sigma^2 / n." />
                <p className="mt-2">D'où, par Bienaymé-Tchebychev appliquée à <LatexRenderer latex="\overline{X}_n" /> : pour tout <LatexRenderer latex="\varepsilon > 0" />,</p>
                <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \frac{\sigma^2}{n\,\varepsilon^2} \xrightarrow[n\to+\infty]{} 0." />
                <p className="mt-2">Ainsi <LatexRenderer latex="\overline{X}_n \xrightarrow{P} \mu" />, donc <LatexRenderer latex="\overline{X}_n" /> est un estimateur consistant de <LatexRenderer latex="\mu" />.</p>
                <Astuce>
                  La consistance est une propriété asymptotique cruciale : sans elle, augmenter la taille d'échantillon ne fait pas converger l'estimateur vers la vraie valeur. C'est le critère minimum pour qu'un estimateur soit "utile".
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="\overline{X}_n" /> est consistant pour <LatexRenderer latex="\mu" /> : <LatexRenderer latex="\overline{X}_n \xrightarrow{P} \mu" />. Vitesse de convergence : <LatexRenderer latex="O(1/\sqrt{n})" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Estimation par moments" />

          <ExerciseCard
            id="28.5"
            title="Méthode des moments — loi exponentielle"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid de loi <LatexRenderer latex="\mathcal{E}(\lambda)" />, <LatexRenderer latex="\lambda > 0" /> inconnu.</p>
                <p>1. Construire un estimateur de <LatexRenderer latex="\lambda" /> par la méthode des moments.</p>
                <p>2. Étudier sa consistance.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La méthode des moments consiste à égaler les moments théoriques aux moments empiriques. Pour la loi exponentielle, <LatexRenderer latex="E(X) = 1/\lambda" />, donc en remplaçant par la moyenne empirique <LatexRenderer latex="\overline{X}_n" />, on obtient <LatexRenderer latex="\hat{\lambda}_n = 1/\overline{X}_n" />.
                </PointMethodo>
                <p><strong>1. Construction.</strong> Soit <LatexRenderer latex="X_i \sim \mathcal{E}(\lambda)" />, donc <LatexRenderer latex="E(X_i) = 1/\lambda" />. D'où l'estimateur des moments :</p>
                <LatexRenderer latex="\hat{\lambda}_n = \frac{1}{\overline{X}_n}." />
                <p className="mt-2"><strong>2. Consistance.</strong> Or par la loi faible des grands nombres, <LatexRenderer latex="\overline{X}_n \xrightarrow{P} 1/\lambda" />. La fonction <LatexRenderer latex="g : x \mapsto 1/x" /> est continue sur <LatexRenderer latex="\mathbb{R}_+^*" />. Par le théorème de continuité (théorème de continuité pour la convergence en probabilité) :</p>
                <LatexRenderer latex="\hat{\lambda}_n = g(\overline{X}_n) \xrightarrow{P} g(1/\lambda) = \lambda." />
                <Astuce>
                  Le théorème de continuité (continuous mapping theorem) est l'outil-clé : si <LatexRenderer latex="Y_n \xrightarrow{P} c" /> et <LatexRenderer latex="g" /> continue en <LatexRenderer latex="c" />, alors <LatexRenderer latex="g(Y_n) \xrightarrow{P} g(c)" />.
                </Astuce>
                <ConclusionBox>
                  Estimateur des moments : <LatexRenderer latex="\hat{\lambda}_n = 1/\overline{X}_n" />, consistant pour <LatexRenderer latex="\lambda" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="28.6"
            title="Estimation de la variance — biais corrigé"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid d'espérance <LatexRenderer latex="\mu" /> et de variance <LatexRenderer latex="\sigma^2" /> finies. On considère l'estimateur naïf de la variance :</p>
                <LatexRenderer latex="V_n = \frac{1}{n}\sum_{i=1}^n (X_i - \overline{X}_n)^2." />
                <p>Démontrer que <LatexRenderer latex="V_n" /> est biaisé, calculer son biais, et en déduire un estimateur sans biais.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Calculer <LatexRenderer latex="E(V_n)" /> en passant par l'identité <LatexRenderer latex="\sum (X_i - \overline{X}_n)^2 = \sum X_i^2 - n \overline{X}_n^2" /> et en utilisant <LatexRenderer latex="E(X_i^2) = V(X_i) + E(X_i)^2" />. La correction du biais consiste à multiplier par <LatexRenderer latex="n/(n-1)" />.
                </PointMethodo>
                <p><strong>Calcul de <LatexRenderer latex="E(V_n)" />.</strong> On a l'identité :</p>
                <LatexRenderer latex="n V_n = \sum_{i=1}^n (X_i - \overline{X}_n)^2 = \sum_{i=1}^n X_i^2 - n \overline{X}_n^2." />
                <p className="mt-2">Or <LatexRenderer latex="E(X_i^2) = \sigma^2 + \mu^2" /> et <LatexRenderer latex="E(\overline{X}_n^2) = V(\overline{X}_n) + E(\overline{X}_n)^2 = \sigma^2/n + \mu^2" />. D'où :</p>
                <LatexRenderer latex="E(n V_n) = n(\sigma^2 + \mu^2) - n(\sigma^2/n + \mu^2) = (n - 1)\sigma^2." />
                <p className="mt-2">Donc <LatexRenderer latex="E(V_n) = \frac{n-1}{n}\sigma^2" />, et le biais est :</p>
                <LatexRenderer latex="b(V_n) = E(V_n) - \sigma^2 = -\frac{\sigma^2}{n} < 0." />
                <p className="mt-2"><strong>Correction.</strong> Posons <LatexRenderer latex="S_n^2 = \frac{n}{n-1} V_n = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X}_n)^2" />. Alors :</p>
                <LatexRenderer latex="E(S_n^2) = \frac{n}{n-1} \cdot \frac{n-1}{n} \sigma^2 = \sigma^2." />
                <Astuce>
                  Cette correction <strong>(n-1)/n</strong> s'appelle la correction de Bessel. Elle compense la perte d'un "degré de liberté" causée par l'utilisation de <LatexRenderer latex="\overline{X}_n" /> à la place de <LatexRenderer latex="\mu" /> inconnu.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="V_n" /> est biaisé : <LatexRenderer latex="b(V_n) = -\sigma^2/n" />. L'estimateur sans biais est la <strong>variance empirique corrigée</strong> <LatexRenderer latex="S_n^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \overline{X}_n)^2" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — IC avec variance inconnue" />

          <ExerciseCard
            id="28.7"
            title="IC asymptotique pour la moyenne — variance inconnue"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid d'espérance <LatexRenderer latex="\mu" /> inconnue et de variance <LatexRenderer latex="\sigma^2 > 0" /> inconnue. On note <LatexRenderer latex="S_n^2" /> la variance empirique corrigée.</p>
                <p>1. Démontrer que <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu)/S_n \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" /> (en admettant <LatexRenderer latex="S_n^2 \xrightarrow{P} \sigma^2" />).</p>
                <p>2. En déduire un IC asymptotique pour <LatexRenderer latex="\mu" /> au niveau 95%.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Quand la variance est inconnue, on la remplace par son estimateur consistant <LatexRenderer latex="S_n^2" />. Le théorème de Slutsky combine la convergence en loi du TCL avec la convergence en probabilité de <LatexRenderer latex="S_n^2/\sigma^2" /> vers 1, ce qui permet de "substituer" l'écart-type estimé sans changer la loi limite.
                </PointMethodo>
                <p><strong>1. Convergence en loi.</strong> Soit <LatexRenderer latex="Z_n = \sqrt{n}(\overline{X}_n - \mu)/\sigma \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" /> (par le TCL). Or <LatexRenderer latex="S_n^2 \xrightarrow{P} \sigma^2" />, donc par continuité de <LatexRenderer latex="x \mapsto \sqrt{x}" /> sur <LatexRenderer latex="\mathbb{R}_+^*" /> :</p>
                <LatexRenderer latex="\frac{\sigma}{S_n} \xrightarrow{P} 1." />
                <p className="mt-2">D'où, par le théorème de Slutsky :</p>
                <LatexRenderer latex="\sqrt{n}\,\frac{\overline{X}_n - \mu}{S_n} = Z_n \cdot \frac{\sigma}{S_n} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1) \cdot 1 = \mathcal{N}(0, 1)." />
                <Astuce>
                  Le théorème de Slutsky stipule : si <LatexRenderer latex="X_n \xrightarrow{\mathcal{L}} X" /> et <LatexRenderer latex="Y_n \xrightarrow{P} c" /> (constante), alors <LatexRenderer latex="X_n Y_n \xrightarrow{\mathcal{L}} cX" />.
                </Astuce>
                <p className="mt-2"><strong>2. Intervalle de confiance.</strong> Soit <LatexRenderer latex="z_{0{,}975} = 1{,}96" />, quantile d'ordre 0,975 de <LatexRenderer latex="\mathcal{N}(0, 1)" />. Alors asymptotiquement :</p>
                <LatexRenderer latex="P\!\left(|\overline{X}_n - \mu| \le \frac{1{,}96\,S_n}{\sqrt{n}}\right) \to 0{,}95." />
                <p className="mt-2">D'où l'IC asymptotique : <LatexRenderer latex="\mathrm{IC}_{95\%}(\mu) = \left[\overline{X}_n \pm 1{,}96\,S_n/\sqrt{n}\right]" />.</p>
                <ConclusionBox>
                  IC asymptotique de niveau 95% avec variance inconnue : <LatexRenderer latex="\overline{X}_n \pm 1{,}96\,S_n/\sqrt{n}" />. C'est l'IC standard utilisé en pratique.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 7 — Estimateur du maximum de vraisemblance" />

          <ExerciseCard
            id="28.8"
            title="EMV pour la loi normale — biais sur la variance"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid de loi <LatexRenderer latex="\mathcal{N}(\mu, \sigma^2)" /> avec <LatexRenderer latex="(\mu, \sigma^2) \in \mathbb{R} \times \mathbb{R}_+^*" /> inconnus.</p>
                <p>1. Déterminer l'estimateur du maximum de vraisemblance <LatexRenderer latex="(\hat{\mu}_n, \hat{\sigma}_n^2)" />.</p>
                <p>2. Étudier le biais de <LatexRenderer latex="\hat{\sigma}_n^2" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour un paramètre vectoriel <LatexRenderer latex="(\mu, \sigma^2)" />, l'EMV se trouve en annulant les deux dérivées partielles de la log-vraisemblance. On obtient un système qui se résout étape par étape : d'abord <LatexRenderer latex="\hat{\mu}_n" /> (indépendant de <LatexRenderer latex="\sigma^2" />), puis <LatexRenderer latex="\hat{\sigma}_n^2" /> en fonction de <LatexRenderer latex="\hat{\mu}_n" />.
                </PointMethodo>
                <p><strong>1. EMV.</strong> La log-vraisemblance pour <LatexRenderer latex="(x_1, \ldots, x_n)" /> est :</p>
                <LatexRenderer latex="\ell_n(\mu, \sigma^2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^n (x_i - \mu)^2." />
                <p className="mt-2"><strong>Annulation par rapport à <LatexRenderer latex="\mu" />.</strong> <LatexRenderer latex="\partial_\mu \ell_n = \frac{1}{\sigma^2}\sum_{i=1}^n (x_i - \mu) = 0" />, soit <LatexRenderer latex="\hat{\mu}_n = \overline{X}_n" />.</p>
                <p className="mt-2"><strong>Annulation par rapport à <LatexRenderer latex="\sigma^2" />.</strong> Posons <LatexRenderer latex="\tau = \sigma^2" /> pour simplifier. <LatexRenderer latex="\partial_\tau \ell_n = -\frac{n}{2\tau} + \frac{1}{2\tau^2}\sum (x_i - \mu)^2 = 0" />, soit :</p>
                <LatexRenderer latex="\hat{\sigma}_n^2 = \frac{1}{n}\sum_{i=1}^n (X_i - \overline{X}_n)^2." />
                <p className="mt-2"><strong>2. Biais.</strong> D'après l'exercice 28.6, <LatexRenderer latex="E(\hat{\sigma}_n^2) = \frac{n-1}{n}\sigma^2" />, donc :</p>
                <LatexRenderer latex="b(\hat{\sigma}_n^2) = -\frac{\sigma^2}{n}." />
                <Astuce>
                  L'EMV n'est pas toujours sans biais. Ici, l'EMV de la variance sous-estime systématiquement <LatexRenderer latex="\sigma^2" />, contrairement à <LatexRenderer latex="S_n^2" />. Cependant, le biais tend vers 0, donc l'EMV est asymptotiquement sans biais.
                </Astuce>
                <ConclusionBox>
                  EMV : <LatexRenderer latex="(\hat{\mu}_n, \hat{\sigma}_n^2) = (\overline{X}_n,\, V_n)" />. <LatexRenderer latex="\hat{\mu}_n" /> est sans biais, mais <LatexRenderer latex="\hat{\sigma}_n^2" /> a un biais de <LatexRenderer latex="-\sigma^2/n" />. Asymptotiquement sans biais.
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
