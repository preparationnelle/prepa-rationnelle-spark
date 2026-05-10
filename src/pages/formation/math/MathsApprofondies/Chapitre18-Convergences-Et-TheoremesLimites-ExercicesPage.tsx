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

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre18ConvergencesEtTheoremesLimitesExercicesPage;
