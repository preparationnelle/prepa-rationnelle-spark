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

        <div>
          <DifficultyHeader level="Module 4 — Inégalité de Markov et applications" />

          <ExerciseCard
            id="27.4"
            title="Inégalité de Markov"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable aléatoire à valeurs positives admettant une espérance.</p>
                <p>Démontrer l'inégalité de Markov : pour tout <LatexRenderer latex="a > 0" />, <LatexRenderer latex="P(X \ge a) \le E(X)/a" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  L'inégalité de Markov est la majoration probabiliste fondamentale pour les VA positives. Elle se démontre par minoration de l'espérance via un événement <LatexRenderer latex="\{X \ge a\}" /> et le fait que sur cet événement, <LatexRenderer latex="X \ge a" />. Elle est la base de l'inégalité de Bienaymé-Tchebychev (qui s'obtient en l'appliquant à <LatexRenderer latex="(X - E(X))^2" />).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="a > 0" />. On utilise l'indicatrice <LatexRenderer latex="\mathbf{1}_{X \ge a}" /> :</p>
                <LatexRenderer latex="X = X \mathbf{1}_{X \ge a} + X \mathbf{1}_{X < a} \ge X \mathbf{1}_{X \ge a} \ge a \mathbf{1}_{X \ge a}" />
                <p className="mt-2">(la première minoration vient de <LatexRenderer latex="X \ge 0" /> et la seconde de la définition de l'événement).</p>
                <p className="mt-2">Or <LatexRenderer latex="X" /> et <LatexRenderer latex="a \mathbf{1}_{X \ge a}" /> admettent une espérance. Par croissance et linéarité :</p>
                <LatexRenderer latex="E(X) \ge E(a \mathbf{1}_{X \ge a}) = a\,P(X \ge a)." />
                <p className="mt-2">D'où, en divisant par <LatexRenderer latex="a > 0" /> : <LatexRenderer latex="P(X \ge a) \le E(X)/a" />.</p>
                <Astuce>
                  L'inégalité de Markov ne nécessite que l'existence de <LatexRenderer latex="E(X)" /> ; elle est particulièrement utile quand on ne connaît pas la loi explicite mais juste l'espérance.
                </Astuce>
                <ConclusionBox>
                  L'inégalité de Markov : pour <LatexRenderer latex="X \ge 0" /> intégrable et <LatexRenderer latex="a > 0" />, <LatexRenderer latex="P(X \ge a) \le E(X)/a" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Loi faible des grands nombres" />

          <ExerciseCard
            id="27.5"
            title="Loi faible des grands nombres pour la binomiale"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)_{n \ge 1}" /> une suite iid de variables de Bernoulli <LatexRenderer latex="\mathcal{B}(p)" />, <LatexRenderer latex="p \in (0, 1)" />.</p>
                <p>Montrer que <LatexRenderer latex="\overline{X}_n = \tfrac{1}{n}\sum_{i=1}^n X_i" /> converge en probabilité vers <LatexRenderer latex="p" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour démontrer une convergence en probabilité, on majore <LatexRenderer latex="P(|Y_n - \ell| \ge \varepsilon)" /> par une suite tendant vers 0. L'inégalité de Bienaymé-Tchebychev est l'outil de prédilection quand <LatexRenderer latex="Y_n" /> admet une variance qui tend vers 0.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X_i \sim \mathcal{B}(p)" />, donc <LatexRenderer latex="E(X_i) = p" /> et <LatexRenderer latex="V(X_i) = p(1-p)" />.</p>
                <p>Or, par linéarité et indépendance :</p>
                <LatexRenderer latex="E(\overline{X}_n) = p, \quad V(\overline{X}_n) = \frac{p(1-p)}{n}." />
                <p className="mt-2">D'où, par l'inégalité de Bienaymé-Tchebychev appliquée à <LatexRenderer latex="\overline{X}_n" /> : pour tout <LatexRenderer latex="\varepsilon > 0" />,</p>
                <LatexRenderer latex="P(|\overline{X}_n - p| \ge \varepsilon) \le \frac{p(1-p)}{n\,\varepsilon^2}." />
                <p className="mt-2">Or <LatexRenderer latex="p(1-p)/(n\varepsilon^2) \to 0" /> quand <LatexRenderer latex="n \to +\infty" />. Donc <LatexRenderer latex="\overline{X}_n \xrightarrow{P} p" />.</p>
                <Astuce>
                  Ce résultat justifie l'estimation fréquentiste : si l'on observe <LatexRenderer latex="n" /> répétitions d'une expérience à deux issues, la fréquence empirique de "succès" tend en probabilité vers la probabilité théorique <LatexRenderer latex="p" />.
                </Astuce>
                <ConclusionBox>
                  C'est la <strong>loi faible des grands nombres</strong> appliquée à la loi de Bernoulli : <LatexRenderer latex="\overline{X}_n \xrightarrow{P} p" />, vitesse en <LatexRenderer latex="O(1/\sqrt{n})" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="27.6"
            title="Inégalité de Bienaymé-Tchebychev — étude d'erreur"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)_{n \ge 1}" /> une suite iid de variables admettant une espérance <LatexRenderer latex="\mu" /> et une variance <LatexRenderer latex="\sigma^2 = 4" />.</p>
                <p>Combien faut-il d'observations pour garantir <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge 0{,}1) \le 0{,}05" /> par l'inégalité de Bienaymé-Tchebychev ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  L'inégalité de Bienaymé-Tchebychev fournit un nombre minimum d'observations <LatexRenderer latex="n" /> garantissant une précision donnée avec une probabilité fixée. C'est l'outil de base pour dimensionner un échantillon en l'absence d'hypothèse de normalité.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\varepsilon = 0{,}1" /> et <LatexRenderer latex="\delta = 0{,}05" />. On cherche <LatexRenderer latex="n" /> tel que <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \delta" />.</p>
                <p className="mt-2">Or par Bienaymé-Tchebychev :</p>
                <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \frac{V(\overline{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\,\varepsilon^2} = \frac{4}{n \cdot 0{,}01} = \frac{400}{n}." />
                <p className="mt-2">D'où il suffit que <LatexRenderer latex="400/n \le 0{,}05" />, soit <LatexRenderer latex="n \ge 8000" />.</p>
                <Astuce>
                  Ce nombre est très conservateur : par le TCL, on obtient en réalité une majoration bien plus fine (de l'ordre de <LatexRenderer latex="n \approx 1500" /> pour la même précision et fiabilité, en utilisant les quantiles de la loi normale).
                </Astuce>
                <ConclusionBox>
                  Il faut au moins <LatexRenderer latex="n = 8000" /> observations pour garantir <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge 0{,}1) \le 0{,}05" /> via Bienaymé-Tchebychev.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Théorème central limite avancé" />

          <ExerciseCard
            id="27.7"
            title="Approximation normale d'une somme de Poisson"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid de loi <LatexRenderer latex="\mathcal{P}(\lambda)" />, <LatexRenderer latex="\lambda = 4" />, <LatexRenderer latex="n = 100" />.</p>
                <p>Estimer <LatexRenderer latex="P(\sum_{i=1}^n X_i \le 380)" /> par approximation normale.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le TCL s'applique à toute somme de variables iid admettant un moment d'ordre 2, indépendamment de la loi commune. Pour la loi de Poisson, on peut aussi exploiter la stabilité par addition : <LatexRenderer latex="\sum X_i \sim \mathcal{P}(n\lambda)" />, mais l'approximation normale reste plus pratique pour les calculs de probabilité.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X_i \sim \mathcal{P}(4)" />, donc <LatexRenderer latex="E(X_i) = V(X_i) = 4" />.</p>
                <p>Soit <LatexRenderer latex="S_n = \sum_{i=1}^n X_i" />. Or <LatexRenderer latex="E(S_n) = 100 \cdot 4 = 400" /> et <LatexRenderer latex="V(S_n) = 100 \cdot 4 = 400" />, soit <LatexRenderer latex="\sigma_{S_n} = 20" />.</p>
                <p className="mt-2">D'où, par le TCL, <LatexRenderer latex="(S_n - 400)/20 \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />. Donc :</p>
                <LatexRenderer latex="P(S_n \le 380) \approx P\!\left(Z \le \frac{380 - 400}{20}\right) = P(Z \le -1) = 1 - \Phi(1) \approx 1 - 0{,}8413 = 0{,}1587." />
                <Astuce>
                  Pour la loi de Poisson, l'approximation normale est valide dès que <LatexRenderer latex="\lambda \ge 5" />. Pour <LatexRenderer latex="\lambda = 4" />, on peut aussi appliquer une correction de continuité <LatexRenderer latex="P(S \le k) \approx \Phi((k + 0{,}5 - \mu)/\sigma)" /> pour améliorer la précision.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="P(S_n \le 380) \approx 16\%" /> par approximation normale (TCL).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 7 — Application du TCL aux estimateurs" />

          <ExerciseCard
            id="27.8"
            title="Intervalle de confiance asymptotique pour la moyenne"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_1, \ldots, X_n" /> iid de moyenne <LatexRenderer latex="\mu" /> inconnue et de variance <LatexRenderer latex="\sigma^2" /> connue.</p>
                <p>1. Démontrer que <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu)/\sigma \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />.</p>
                <p>2. Construire un intervalle de confiance asymptotique de niveau 95% pour <LatexRenderer latex="\mu" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le TCL fournit la loi limite <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu)/\sigma \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)" />. On en déduit un intervalle pivotal autour de <LatexRenderer latex="\mu" /> en isolant <LatexRenderer latex="\mu" /> dans une inégalité <LatexRenderer latex="P(|Z| \le q) = 1 - \alpha" />, où <LatexRenderer latex="q" /> est le quantile de la <LatexRenderer latex="\mathcal{N}(0,1)" />.
                </PointMethodo>
                <p><strong>1. Convergence en loi.</strong> Soit <LatexRenderer latex="X_i" /> iid, <LatexRenderer latex="E(X_i) = \mu" />, <LatexRenderer latex="V(X_i) = \sigma^2" /> finie. Par le TCL :</p>
                <LatexRenderer latex="\frac{S_n - n\mu}{\sigma \sqrt{n}} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1) \quad \text{où } S_n = \sum_{i=1}^n X_i." />
                <p className="mt-2">Or <LatexRenderer latex="(S_n - n\mu)/(\sigma\sqrt{n}) = \sqrt{n}(\overline{X}_n - \mu)/\sigma" />. D'où le résultat.</p>
                <p className="mt-2"><strong>2. Intervalle de confiance.</strong> Soit <LatexRenderer latex="z_{\alpha/2}" /> tel que <LatexRenderer latex="P(|Z| \le z_{\alpha/2}) = 1 - \alpha" />, avec <LatexRenderer latex="Z \sim \mathcal{N}(0, 1)" />. Pour <LatexRenderer latex="\alpha = 0{,}05" />, on a <LatexRenderer latex="z_{0{,}025} \approx 1{,}96" />.</p>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="P\!\left(|\overline{X}_n - \mu| \le \frac{1{,}96\,\sigma}{\sqrt{n}}\right) \xrightarrow[n\to+\infty]{} 0{,}95." />
                <p className="mt-2">Ainsi, en isolant <LatexRenderer latex="\mu" /> :</p>
                <LatexRenderer latex="\mathrm{IC}_{95\%}(\mu) = \left[\overline{X}_n - \frac{1{,}96\,\sigma}{\sqrt{n}},\; \overline{X}_n + \frac{1{,}96\,\sigma}{\sqrt{n}}\right]." />
                <Astuce>
                  Cet intervalle est asymptotique : il garantit un taux de couverture proche de 95% pour <LatexRenderer latex="n" /> grand. Quand <LatexRenderer latex="\sigma" /> est inconnue, on la remplace par l'écart-type empirique corrigé <LatexRenderer latex="S_n" /> ; la loi limite reste <LatexRenderer latex="\mathcal{N}(0, 1)" /> par Slutsky.
                </Astuce>
                <ConclusionBox>
                  Intervalle de confiance asymptotique de niveau 95% : <LatexRenderer latex="\overline{X}_n \pm 1{,}96\,\sigma/\sqrt{n}" />. La largeur décroît en <LatexRenderer latex="1/\sqrt{n}" />.
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
