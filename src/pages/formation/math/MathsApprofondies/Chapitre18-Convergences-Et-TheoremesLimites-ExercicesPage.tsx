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

const Chapitre18ConvergencesEtTheoremesLimitesExercicesPage = () => {
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
      chapterNumber={18}
      chapterTitle="Convergences & théorèmes limites"
      description="Exercices sur les types de convergence, la LFGN et le TCL."
      slug="convergences-et-theoremes-limites"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "variables-aleatoires-discretes-lois",
        title: "Variables Aléatoires"
      }}
      nextChapter={{
        slug: "statistiques-estimation",
        title: "Statistiques"
      }}
    >
      <div className="space-y-8">

        <section id="facile">
          <DifficultyHeader level="Facile" />
          <ExerciseCard
            id="ex-01"
            title="Inégalité de Markov"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable aléatoire positive telle que <LatexRenderer latex="E(X) = 2" />.</p>
                <p>1. Majorer <LatexRenderer latex="P(X \ge 10)" />.</p>
                <p>2. Peut-on affirmer que <LatexRenderer latex="P(X \ge 10) \le 0{,}1" /> ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité de Markov s'applique à toute variable aléatoire positive admettant une espérance : pour tout <LatexRenderer latex="a > 0" />, <LatexRenderer latex="P(X \ge a) \le E(X)/a" />. Elle donne une borne supérieure, pas une valeur exacte.
                </PointMethodo>
                <p><strong>1.</strong> Soit <LatexRenderer latex="X \ge 0" /> et <LatexRenderer latex="E(X) = 2" />. D'après l'inégalité de Markov avec <LatexRenderer latex="a = 10" /> :</p>
                <LatexRenderer latex="\displaystyle P(X \ge 10) \le \frac{E(X)}{10} = \frac{2}{10} = 0{,}2." />
                <p className="mt-2"><strong>2.</strong> Non. L'inégalité de Markov ne donne qu'une borne supérieure de <LatexRenderer latex="0{,}2" />. Sans information supplémentaire sur la loi de <LatexRenderer latex="X" />, on ne peut pas affirmer que <LatexRenderer latex="P(X \ge 10) \le 0{,}1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P(X \ge 10) \le 0{,}2" />. L'affirmation <LatexRenderer latex="P(X \ge 10) \le 0{,}1" /> ne peut pas être établie avec les seules données de l'énoncé.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-02"
            title="Inégalité de Bienaymé-Tchebychev"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable aléatoire d'espérance <LatexRenderer latex="E(X) = 10" /> et de variance <LatexRenderer latex="V(X) = 4" />.</p>
                <p>Majorer <LatexRenderer latex="P(|X - 10| \ge 6)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité de Bienaymé-Tchebychev s'applique à toute variable admettant une variance : <LatexRenderer latex="P(|X - E(X)| \ge \varepsilon) \le V(X)/\varepsilon^2" />. Elle est plus précise que Markov lorsqu'on contrôle l'écart à la moyenne.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\varepsilon = 6" />. D'après l'inégalité de Bienaymé-Tchebychev :</p>
                <LatexRenderer latex="\displaystyle P(|X - 10| \ge 6) \le \frac{V(X)}{\varepsilon^2} = \frac{4}{36} = \frac{1}{9}." />
                <ConclusionBox>
                  <LatexRenderer latex="P(|X - 10| \ge 6) \le \dfrac{1}{9} \approx 0{,}111" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="intermediaire">
          <DifficultyHeader level="Intermédiaire" />
          <ExerciseCard
            id="ex-03"
            title="Loi faible des grands nombres (LFGN)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)_{n \ge 1}" /> une suite de variables i.i.d. d'espérance <LatexRenderer latex="\mu" /> et de variance <LatexRenderer latex="\sigma^2" />.</p>
                <p>On pose <LatexRenderer latex="\displaystyle \bar{X}_n = \frac{1}{n} \sum_{k=1}^n X_k" />.</p>
                <p>Démontrer que <LatexRenderer latex="\bar{X}_n \xrightarrow{P} \mu" /> en utilisant l'inégalité de Bienaymé-Tchebychev.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La convergence en probabilité se démontre en majorant <LatexRenderer latex="P(|\bar{X}_n - \mu| \ge \varepsilon)" /> pour tout <LatexRenderer latex="\varepsilon > 0" /> fixé. On calcule d'abord les moments de <LatexRenderer latex="\bar{X}_n" />, puis on applique Bienaymé-Tchebychev, et on passe à la limite.
                </PointMethodo>
                <p>Les variables <LatexRenderer latex="X_k" /> sont i.i.d. (donné), donc par linéarité de l'espérance :</p>
                <LatexRenderer latex="\displaystyle E(\bar{X}_n) = \frac{1}{n}\sum_{k=1}^n E(X_k) = \mu." />
                <p className="mt-2">Par indépendance et additivité de la variance :</p>
                <LatexRenderer latex="\displaystyle V(\bar{X}_n) = \frac{1}{n^2}\sum_{k=1}^n V(X_k) = \frac{\sigma^2}{n}." />
                <p className="mt-2">Soit <LatexRenderer latex="\varepsilon > 0" />. D'après Bienaymé-Tchebychev :</p>
                <LatexRenderer latex="\displaystyle 0 \le P(|\bar{X}_n - \mu| \ge \varepsilon) \le \frac{V(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \xrightarrow[n \to \infty]{} 0." />
                <p className="mt-2">D'où, par le théorème des gendarmes, <LatexRenderer latex="P(|\bar{X}_n - \mu| \ge \varepsilon) \to 0" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\bar{X}_n \xrightarrow{P} \mu" /> quand <LatexRenderer latex="n \to +\infty" /> : c'est la loi faible des grands nombres.
                </ConclusionBox>
              </div>
            }
          />
          <ExerciseCard
            id="ex-04"
            title="Convergence en loi — Suite uniforme discrète"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_n" /> une variable suivant la loi uniforme discrète sur <LatexRenderer latex="\{1, \dots, n\}" />.</p>
                <p>Pour <LatexRenderer latex="k \in \mathbb{N}^*" /> fixé, calculer <LatexRenderer latex="\displaystyle \lim_{n \to \infty} P(X_n = k)" />.</p>
                <p>Que peut-on en déduire sur la convergence en loi de <LatexRenderer latex="(X_n)" /> ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour étudier la convergence en loi d'une suite discrète, on examine si les probabilités ponctuelles convergent vers celles d'une loi limite. Si la masse totale « s'échappe à l'infini », il n'y a pas de convergence en loi vers une variable finie.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="k \in \mathbb{N}^*" /> fixé. Pour <LatexRenderer latex="n \ge k" /> :</p>
                <LatexRenderer latex="\displaystyle P(X_n = k) = \frac{1}{n} \xrightarrow[n \to \infty]{} 0." />
                <p className="mt-2">Ainsi toutes les probabilités ponctuelles tendent vers 0. Or si <LatexRenderer latex="(X_n)" /> convergeait en loi vers une variable <LatexRenderer latex="X" />, la masse de <LatexRenderer latex="X" /> devrait satisfaire <LatexRenderer latex="\sum_k P(X=k) = 1" />, ce qui est incompatible avec des limites nulles partout.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex="(X_n)" /> ne converge pas en loi vers une variable aléatoire : la masse de probabilité « s'échappe » vers <LatexRenderer latex="+\infty" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="difficile">
          <DifficultyHeader level="Difficile" />
          <ExerciseCard
            id="ex-05"
            title="Convergence en loi : Binomiale vers Poisson"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X_n \sim \mathcal{B}(n,\, p_n)" /> avec <LatexRenderer latex="p_n = \lambda/n" /> et <LatexRenderer latex="\lambda > 0" /> fixé.</p>
                <p>Montrer que pour tout <LatexRenderer latex="k \in \mathbb{N}" /> fixé, <LatexRenderer latex="\displaystyle P(X_n = k) \to e^{-\lambda} \frac{\lambda^k}{k!}" /> quand <LatexRenderer latex="n \to +\infty" />.</p>
                <p>Interpréter ce résultat.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  On développe <LatexRenderer latex="P(X_n = k) = \binom{n}{k} p_n^k (1-p_n)^{n-k}" /> en substituant <LatexRenderer latex="p_n = \lambda/n" />, puis on passe à la limite terme à terme en utilisant <LatexRenderer latex="(1 - \lambda/n)^n \to e^{-\lambda}" />.
                </PointMethodo>
                <Astuce>
                  Factoriser le produit <LatexRenderer latex="n(n-1)\cdots(n-k+1)" /> par <LatexRenderer latex="n^k" /> pour obtenir un facteur qui tend vers 1.
                </Astuce>
                <p>Soit <LatexRenderer latex="k \in \mathbb{N}" /> fixé. Pour <LatexRenderer latex="n > k" /> :</p>
                <LatexRenderer latex="\displaystyle P(X_n = k) = \frac{n(n-1)\cdots(n-k+1)}{k!\,n^k}\,\lambda^k \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-k}." />
                <p className="mt-2">Or :</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li><LatexRenderer latex="\dfrac{n(n-1)\cdots(n-k+1)}{n^k} \to 1" /> (quotient de deux polynômes de même degré <LatexRenderer latex="k" />),</li>
                  <li><LatexRenderer latex="\left(1 - \dfrac{\lambda}{n}\right)^n \to e^{-\lambda}" /> (limite classique),</li>
                  <li><LatexRenderer latex="\left(1 - \dfrac{\lambda}{n}\right)^{-k} \to 1" />.</li>
                </ul>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="\displaystyle P(X_n = k) \to \frac{\lambda^k}{k!}\,e^{-\lambda}." />
                <ConclusionBox>
                  <LatexRenderer latex="X_n \xrightarrow{\mathcal{L}} \mathcal{P}(\lambda)" /> : la binomiale d'événements rares converge en loi vers la loi de Poisson. C'est la justification théorique de l'approximation de Poisson.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="concours">
          <DifficultyHeader level="Concours" />
          <ExerciseCard
            id="ex-06"
            title="Application du TCL — Taille d'échantillon pour un sondage"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>On souhaite estimer la proportion <LatexRenderer latex="p" /> d'une population favorable à une réforme via un sondage sur <LatexRenderer latex="n" /> personnes. Soit <LatexRenderer latex="F_n = S_n/n" /> la fréquence observée.</p>
                <p>En utilisant le TCL, déterminer la taille d'échantillon <LatexRenderer latex="n" /> nécessaire pour que <LatexRenderer latex="P(|F_n - p| \le 0{,}01) \ge 0{,}95" />.</p>
                <p><em>Indication : Cas le plus défavorable <LatexRenderer latex="p(1-p) \le 1/4" /> ; si <LatexRenderer latex="Z \sim \mathcal{N}(0,1)" />, alors <LatexRenderer latex="P(|Z| \le 1{,}96) \approx 0{,}95" />.</em></p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le TCL s'applique à des variables i.i.d. : ici les indicatrices de réponse favorable. Il s'agit d'une approximation — on le précise toujours. On standardise <LatexRenderer latex="F_n" />, on lit le quantile dans la table de la loi normale, puis on résout l'inégalité en <LatexRenderer latex="n" />.
                </PointMethodo>
                <p>Les indicatrices <LatexRenderer latex="X_i \sim \mathcal{B}(p)" /> sont i.i.d., donc par le <strong>théorème central limite (approximation)</strong> :</p>
                <LatexRenderer latex="\displaystyle \sqrt{n}\,\frac{F_n - p}{\sqrt{p(1-p)}} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)." />
                <p className="mt-2">Pour <LatexRenderer latex="n" /> suffisamment grand, l'événement <LatexRenderer latex="\{|F_n - p| \le 0{,}01\}" /> a pour probabilité approchée :</p>
                <LatexRenderer latex="\displaystyle P(|F_n - p| \le 0{,}01) \approx P\!\left(|Z| \le \frac{0{,}01\sqrt{n}}{\sqrt{p(1-p)}}\right)." />
                <p className="mt-2">On veut cette probabilité supérieure à <LatexRenderer latex="0{,}95" />, ce qui nécessite :</p>
                <LatexRenderer latex="\displaystyle \frac{0{,}01\sqrt{n}}{\sqrt{p(1-p)}} \ge 1{,}96." />
                <p className="mt-2">Dans le cas le plus défavorable <LatexRenderer latex="p(1-p) = 1/4" />, soit <LatexRenderer latex="\sqrt{p(1-p)} = 1/2" /> :</p>
                <LatexRenderer latex="\displaystyle \sqrt{n} \ge \frac{1{,}96 \times 0{,}5}{0{,}01} = 98 \implies n \ge 9604." />
                <ConclusionBox>
                  Il faut interroger au moins <strong>9 604 personnes</strong> pour garantir une précision de 1 % au niveau 95 %. En pratique, on prend <LatexRenderer latex="n \ge 10\,000" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="approfondissements">
          <DifficultyHeader level="Niveau : Facile — Convergence en probabilité et loi des grands nombres" />

          <ExerciseCard
            id="ex-07"
            title="Convergence en probabilité d'une suite déterministe"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(Y_n)" /> une suite de VA telle que <LatexRenderer latex="Y_n = 1/n" /> presque sûrement.</p>
                <p>Démontrer que <LatexRenderer latex="Y_n \xrightarrow{P} 0" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour démontrer une convergence en probabilité <LatexRenderer latex="Y_n \xrightarrow{P} c" />, vérifier que pour tout <LatexRenderer latex="\varepsilon > 0" />, <LatexRenderer latex="P(|Y_n - c| \ge \varepsilon) \to 0" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\varepsilon > 0" />. Or <LatexRenderer latex="Y_n = 1/n" /> p.s., donc :</p>
                <LatexRenderer latex="P(|Y_n - 0| \ge \varepsilon) = P(1/n \ge \varepsilon) = \begin{cases} 1 & \text{si } 1/n \ge \varepsilon \\ 0 & \text{sinon} \end{cases}." />
                <p className="mt-2">Or pour <LatexRenderer latex="n > 1/\varepsilon" />, on a <LatexRenderer latex="1/n < \varepsilon" />, donc <LatexRenderer latex="P(|Y_n - 0| \ge \varepsilon) = 0" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="P(|Y_n - 0| \ge \varepsilon) \to 0" /> quand <LatexRenderer latex="n \to +\infty" />.</p>
                <Astuce>
                  Une suite déterministe qui converge converge aussi en probabilité (au sens trivial). C'est un cas particulier utile pour comprendre le concept.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="Y_n = 1/n \xrightarrow{P} 0" />. La convergence en probabilité généralise la convergence usuelle aux suites de VA.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Intermédiaire — TCL et application" />

          <ExerciseCard
            id="ex-08"
            title="Approximation normale d'une somme de Bernoulli"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_{1000}" /> iid <LatexRenderer latex="\mathcal{B}(0,5)" /> (pile/face équilibré).</p>
                <p>Estimer <LatexRenderer latex="P(490 \le S_n \le 510)" /> où <LatexRenderer latex="S_n = X_1 + \ldots + X_{1000}" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour estimer une probabilité d'écart par rapport à la moyenne dans le cadre du TCL, standardiser, lire les quantiles de la <LatexRenderer latex="\mathcal{N}(0, 1)" />, et appliquer la symétrie.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="S_n \sim \mathcal{B}(1000, 0{,}5)" />, donc <LatexRenderer latex="E(S_n) = 500" /> et <LatexRenderer latex="V(S_n) = 250" />, soit <LatexRenderer latex="\sigma = \sqrt{250} \approx 15{,}81" />.</p>
                <p className="mt-2">Par le TCL, <LatexRenderer latex="(S_n - 500)/\sigma \approx \mathcal{N}(0, 1)" />.</p>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="P(490 \le S_n \le 510) \approx P\!\left(\frac{490 - 500}{15{,}81} \le Z \le \frac{510 - 500}{15{,}81}\right) = P(-0{,}632 \le Z \le 0{,}632)." />
                <Astuce>
                  Par symétrie de la loi normale : <LatexRenderer latex="P(|Z| \le t) = 2\Phi(t) - 1" /> où <LatexRenderer latex="\Phi" /> est la FdR de <LatexRenderer latex="\mathcal{N}(0, 1)" />. Pour <LatexRenderer latex="t = 0{,}632" />, <LatexRenderer latex="\Phi(0{,}632) \approx 0{,}737" />.
                </Astuce>
                <p className="mt-2">Donc <LatexRenderer latex="P(490 \le S_n \le 510) \approx 2 \cdot 0{,}737 - 1 = 0{,}474" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P(490 \le S_n \le 510) \approx 47\%" />. Pour des écarts plus larges (<LatexRenderer latex="\pm 30" />), la probabilité tend vers 1 par le TCL.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-09"
            title="Théorème central limite — vitesse de convergence"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)" /> iid de moyenne <LatexRenderer latex="\mu" /> et variance <LatexRenderer latex="\sigma^2" /> finies. Soit <LatexRenderer latex="Z_n = (S_n - n\mu)/(\sigma \sqrt{n})" /> où <LatexRenderer latex="S_n = X_1 + \ldots + X_n" />.</p>
                <p>1. Quelle est la loi limite de <LatexRenderer latex="Z_n" /> ?</p>
                <p>2. Démontrer que <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le TCL "standardisé" donne <LatexRenderer latex="Z_n \to \mathcal{N}(0, 1)" />. La version "non standardisée" <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) \to \mathcal{N}(0, \sigma^2)" /> s'en déduit immédiatement par multiplication par <LatexRenderer latex="\sigma" />.
                </PointMethodo>
                <p><strong>1.</strong> Par le théorème central limite : <LatexRenderer latex="Z_n = \dfrac{S_n - n\mu}{\sigma \sqrt{n}} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />.</p>
                <p className="mt-2"><strong>2.</strong> Or <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) = \sqrt{n}\left(\dfrac{S_n}{n} - \mu\right) = \dfrac{S_n - n\mu}{\sqrt{n}} = \sigma\,Z_n" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) = \sigma\,Z_n \xrightarrow{\mathcal{L}} \sigma\,\mathcal{N}(0, 1) = \mathcal{N}(0, \sigma^2)" />.</p>
                <Astuce>
                  Multiplier une <LatexRenderer latex="\mathcal{N}(0, 1)" /> par une constante <LatexRenderer latex="c > 0" /> donne une <LatexRenderer latex="\mathcal{N}(0, c^2)" /> (par changement d'échelle).
                </Astuce>
                <ConclusionBox>
                  Le TCL "non standardisé" : <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2)" />. Vitesse de convergence en <LatexRenderer latex="1/\sqrt{n}" />.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Difficile — Théorème de Slutsky" />

          <ExerciseCard
            id="ex-10"
            title="Théorème de Slutsky"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="(X_n)" /> et <LatexRenderer latex="(Y_n)" /> deux suites de VA telles que <LatexRenderer latex="X_n \xrightarrow{\mathcal{L}} X" /> et <LatexRenderer latex="Y_n \xrightarrow{P} c \in \mathbb{R}" /> (constante).</p>
                <p>(On admet) Démontrer le théorème de Slutsky : <LatexRenderer latex="X_n + Y_n \xrightarrow{\mathcal{L}} X + c" /> et <LatexRenderer latex="X_n Y_n \xrightarrow{\mathcal{L}} c X" />.</p>
                <p>Application : si <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2)" /> et <LatexRenderer latex="S_n^2 \xrightarrow{P} \sigma^2" />, en déduire la loi limite de <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu)/S_n" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Le théorème de Slutsky combine convergence en loi (qui se transmet aux fonctions continues) et convergence en probabilité vers une constante (qui se transmet à toutes les opérations algébriques). C'est l'outil fondamental pour "substituer" des estimateurs consistants à des paramètres inconnus dans une loi limite.
                </PointMethodo>
                <p><strong>Application directe.</strong> Soit <LatexRenderer latex="\sqrt{n}(\overline{X}_n - \mu) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2)" /> par TCL, et <LatexRenderer latex="S_n^2 \xrightarrow{P} \sigma^2" /> par LFGN appliquée à la variance.</p>
                <p className="mt-2">Or <LatexRenderer latex="S_n \xrightarrow{P} \sigma" /> par continuité de la racine carrée. D'où <LatexRenderer latex="1/S_n \xrightarrow{P} 1/\sigma" />.</p>
                <p className="mt-2">Par le théorème de Slutsky (cas du produit) :</p>
                <LatexRenderer latex="\sqrt{n}\,\frac{\overline{X}_n - \mu}{S_n} = \sqrt{n}(\overline{X}_n - \mu) \cdot \frac{1}{S_n} \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2) \cdot \frac{1}{\sigma} = \mathcal{N}(0, 1)." />
                <Astuce>
                  C'est l'application centrale : la statistique de Student <LatexRenderer latex="T_n = \sqrt{n}(\overline{X}_n - \mu)/S_n" /> a la même loi limite asymptotique que la statistique <LatexRenderer latex="Z_n = \sqrt{n}(\overline{X}_n - \mu)/\sigma" /> — ce qui justifie d'utiliser <LatexRenderer latex="S_n" /> à la place de <LatexRenderer latex="\sigma" /> inconnu dans la construction d'IC.
                </Astuce>
                <p className="mt-2"><strong>Précautions.</strong> Le théorème de Slutsky requiert que <LatexRenderer latex="Y_n \xrightarrow{P} c" /> (une <em>constante</em>, pas une VA quelconque). Si <LatexRenderer latex="Y_n \xrightarrow{\mathcal{L}} Y" /> (VA aléatoire), on ne peut pas conclure <LatexRenderer latex="X_n + Y_n \xrightarrow{\mathcal{L}} X + Y" /> sans hypothèses d'indépendance.</p>
                <ConclusionBox>
                  Théorème de Slutsky : convergence en loi + convergence en proba vers une constante = convergence en loi du produit/somme. Outil-clé pour la statistique inférentielle.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-11"
            title="Méthode delta"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X_n)" /> une suite de VA telles que <LatexRenderer latex="\sqrt{n}(X_n - \theta) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2)" />.</p>
                <p>Soit <LatexRenderer latex="g : \mathbb{R} \to \mathbb{R}" /> dérivable en <LatexRenderer latex="\theta" /> avec <LatexRenderer latex="g'(\theta) \ne 0" />.</p>
                <p>Démontrer (méthode delta) que <LatexRenderer latex="\sqrt{n}(g(X_n) - g(\theta)) \xrightarrow{\mathcal{L}} \mathcal{N}(0, g'(\theta)^2 \sigma^2)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La méthode delta transfère la loi limite normale d'un estimateur <LatexRenderer latex="X_n" /> à toute fonction dérivable <LatexRenderer latex="g(X_n)" />, avec une variance multipliée par <LatexRenderer latex="g'(\theta)^2" />. Elle s'obtient par développement de Taylor à l'ordre 1 et application du théorème de Slutsky.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X_n \to \theta" /> en probabilité (conséquence du TCL : si <LatexRenderer latex="\sqrt{n}(X_n - \theta)" /> converge en loi, alors <LatexRenderer latex="X_n - \theta \to 0" /> en probabilité).</p>
                <p className="mt-2"><strong>Développement de Taylor.</strong> Or <LatexRenderer latex="g" /> est dérivable en <LatexRenderer latex="\theta" />, donc :</p>
                <LatexRenderer latex="g(X_n) - g(\theta) = g'(\theta)(X_n - \theta) + (X_n - \theta) \cdot \varepsilon(X_n - \theta)" />
                <p className="mt-2">avec <LatexRenderer latex="\varepsilon(h) \to 0" /> quand <LatexRenderer latex="h \to 0" />.</p>
                <Astuce>
                  L'écriture <LatexRenderer latex="g(x_0 + h) = g(x_0) + h g'(x_0) + h \varepsilon(h)" /> avec <LatexRenderer latex="\varepsilon \to 0" /> est la définition même de la dérivabilité (formule de Taylor d'ordre 1 en <LatexRenderer latex="x_0" />).
                </Astuce>
                <p className="mt-2">Multipliant par <LatexRenderer latex="\sqrt{n}" /> :</p>
                <LatexRenderer latex="\sqrt{n}(g(X_n) - g(\theta)) = g'(\theta)\,\sqrt{n}(X_n - \theta) + \sqrt{n}(X_n - \theta) \cdot \varepsilon(X_n - \theta)." />
                <p className="mt-2"><strong>Limite du premier terme.</strong> <LatexRenderer latex="g'(\theta) \cdot \sqrt{n}(X_n - \theta) \xrightarrow{\mathcal{L}} g'(\theta) \cdot \mathcal{N}(0, \sigma^2) = \mathcal{N}(0, g'(\theta)^2 \sigma^2)" />.</p>
                <p className="mt-2"><strong>Limite du second terme.</strong> Or <LatexRenderer latex="X_n - \theta \xrightarrow{P} 0" />, donc <LatexRenderer latex="\varepsilon(X_n - \theta) \xrightarrow{P} 0" />. Par Slutsky, <LatexRenderer latex="\sqrt{n}(X_n - \theta) \cdot \varepsilon(X_n - \theta) \xrightarrow{P} 0" />.</p>
                <p className="mt-2">Par addition (Slutsky), la somme converge vers <LatexRenderer latex="\mathcal{N}(0, g'(\theta)^2 \sigma^2)" />.</p>
                <ConclusionBox>
                  Méthode delta : <LatexRenderer latex="\sqrt{n}(g(X_n) - g(\theta)) \xrightarrow{\mathcal{L}} \mathcal{N}(0, g'(\theta)^2 \sigma^2)" />. Outil-clé pour propager la normalité asymptotique aux transformations d'estimateurs.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre18ConvergencesEtTheoremesLimitesExercicesPage;
