import React, { useState } from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Crown, Lightbulb, Target, Award } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre18ConvergencesEtTheoremesLimitesExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
    stars,
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
  }) => (
    <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
      <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
        <div className="flex gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          {[...Array(4 - stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-slate-200" />
          ))}
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => (
    <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
              {id.replace(/[^0-9.]/g, '')}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {difficulty}
          </span>
        </div>

        <div className="mb-6 text-slate-700 leading-relaxed pl-1">
          {content}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => toggleCorrection(id)}
            variant="ghost"
            size="sm"
            className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
          >
            {visibleCorrections[id] ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Masquer la correction
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Afficher la correction
              </>
            )}
          </Button>

          {visibleCorrections[id] && (
            <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {correction}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

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

        {/* Niveau Facile */}
        <section id="facile">
          <DifficultyHeader
            level="Niveau Facile"
            title="Application directe"
            icon={Lightbulb}
            stars={1}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="18.1"
              title="Inégalité de Markov"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="X" /> une variable aléatoire positive telle que <LatexRenderer latex="E(X) = 2" />.</p>
                  <p>1. Majorer <LatexRenderer latex="P(X \ge 10)" />.</p>
                  <p>2. Peut-on dire que <LatexRenderer latex="P(X \ge 10) \le 0.1" /> ?</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Application de Markov :</strong></p>
                  <p>Comme <LatexRenderer latex="X" /> est positive et admet une espérance, pour tout <LatexRenderer latex="a > 0" /> : <LatexRenderer latex="P(X \ge a) \le \frac{E(X)}{a}" />.</p>
                  <p>Ici <LatexRenderer latex="a = 10" />, donc <LatexRenderer latex="P(X \ge 10) \le \frac{2}{10} = 0.2" />.</p>
                  <p><strong>2. Comparaison :</strong></p>
                  <p>Non, Markov nous donne une borne supérieure de 0.2. Nous ne pouvons pas affirmer que la probabilité est inférieure à 0.1 sans plus d'informations.</p>
                </div>
              }
            />
            <ExerciseCard
              id="18.2"
              title="Bienaymé-Tchebychev"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="X" /> une variable aléatoire d'espérance 10 et de variance 4.</p>
                  <p>Majorer la probabilité <LatexRenderer latex="P(|X - 10| \ge 6)" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>L'inégalité de Bienaymé-Tchebychev stipule : <LatexRenderer latex="P(|X - E(X)| \ge \varepsilon) \le \frac{V(X)}{\varepsilon^2}" />.</p>
                  <p>Ici <LatexRenderer latex="E(X) = 10" />, <LatexRenderer latex="V(X) = 4" /> et <LatexRenderer latex="\varepsilon = 6" />.</p>
                  <LatexRenderer latex="\displaystyle P(|X - 10| \ge 6) \le \frac{4}{6^2} = \frac{4}{36} = \frac{1}{9}" />
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Intermédiaire */}
        <section id="intermediaire">
          <DifficultyHeader
            level="Niveau Intermédiaire"
            title="Classiques & Techniques"
            icon={Target}
            stars={2}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="18.3"
              title="Loi Faible des Grands Nombres (LFGN)"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="(X_n)_{n \ge 1}" /> une suite de variables i.i.d. admettant une espérance <LatexRenderer latex="\mu" /> et une variance <LatexRenderer latex="\sigma^2" />.</p>
                  <p>On pose <LatexRenderer latex="\displaystyle \bar{X}_n = \frac{1}{n} \sum_{k=1}^n X_k" />.</p>
                  <p>Démontrer que <LatexRenderer latex="\bar{X}_n \xrightarrow{P} \mu" /> en utilisant l'inégalité de Bienaymé-Tchebychev.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On calcule d'abord l'espérance et la variance de <LatexRenderer latex="\bar{X}_n" /> :</p>
                  <p><LatexRenderer latex="\displaystyle E(\bar{X}_n) = \frac{1}{n} \sum_{k=1}^n E(X_k) = \mu" />.</p>
                  <p><LatexRenderer latex="\displaystyle V(\bar{X}_n) = \frac{1}{n^2} \sum_{k=1}^n V(X_k) = \frac{n \sigma^2}{n^2} = \frac{\sigma^2}{n}" /> (par indépendance).</p>
                  <p>On applique Bienaymé-Tchebychev pour tout <LatexRenderer latex="\varepsilon > 0" /> :</p>
                  <LatexRenderer latex="\displaystyle P(|\bar{X}_n - \mu| \ge \varepsilon) \le \frac{V(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n \varepsilon^2}" />
                  <p>Or <LatexRenderer latex="\displaystyle \lim_{n \to \infty} \frac{\sigma^2}{n \varepsilon^2} = 0" />.</p>
                  <p>Donc <LatexRenderer latex="\bar{X}_n \xrightarrow{P} \mu" />.</p>
                </div>
              }
            />
            <ExerciseCard
              id="18.4"
              title="Convergence simple"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="X_n" /> une variable aléatoire suivant la loi uniforme discrète sur <LatexRenderer latex="\{1, \dots, n\}" />.</p>
                  <p>Pour <LatexRenderer latex="k \in \mathbb{N}^*" /> fixé, calculer <LatexRenderer latex="\displaystyle \lim_{n \to \infty} P(X_n = k)" />.</p>
                  <p>Que peut-on en déduire sur la convergence en loi de <LatexRenderer latex="(X_n)" /> ?</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>Pour tout <LatexRenderer latex="k \in \mathbb{N}^*" />, dès que <LatexRenderer latex="n \ge k" />, on a :</p>
                  <LatexRenderer latex="\displaystyle P(X_n = k) = \frac{1}{n}" />.
                  <p>Donc <LatexRenderer latex="\displaystyle \lim_{n \to \infty} P(X_n = k) = 0" />.</p>
                  <p>La limite des probabilités est nulle pour tout <LatexRenderer latex="k" />. Or une somme de probabilités nulles ne fait pas 1.</p>
                  <p>La suite <LatexRenderer latex="(X_n)" /> ne converge pas en loi vers une variable aléatoire (la masse de probabilité "s'échappe" vers l'infini).</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Dur */}
        <section id="dur">
          <DifficultyHeader
            level="Niveau Dur"
            title="Approfondissement"
            icon={Crown}
            stars={3}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="18.5"
              title="Convergence : Binomiale vers Poisson"
              difficulty="Difficile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="X_n \sim \mathcal{B}(n, p_n)" /> avec <LatexRenderer latex="p_n = \frac{\lambda}{n}" /> (<LatexRenderer latex="\lambda > 0" />).</p>
                  <p>Montrer que pour tout <LatexRenderer latex="k \in \mathbb{N}" /> fixé, <LatexRenderer latex="\displaystyle P(X_n = k) \to e^{-\lambda} \frac{\lambda^k}{k!}" /> quand <LatexRenderer latex="n \to \infty" />.</p>
                  <p>Interpréter ce résultat.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="k \in \mathbb{N}" />. Pour <LatexRenderer latex="n" /> assez grand :</p>
                  <LatexRenderer latex="\displaystyle P(X_n = k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k}" />
                  <LatexRenderer latex="\displaystyle = \frac{n(n-1)\dots(n-k+1)}{k!} \frac{\lambda^k}{n^k} \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-k}" />
                  <p>On a l'équivalent : <LatexRenderer latex="\displaystyle \frac{n(n-1)\dots(n-k+1)}{n^k} \sim \frac{n^k}{n^k} \to 1" />.</p>
                  <p>De plus, <LatexRenderer latex="\displaystyle \left(1 - \frac{\lambda}{n}\right)^n = \exp\left(n \ln\left(1 - \frac{\lambda}{n}\right)\right) \sim \exp\left(n\left(-\frac{\lambda}{n}\right)\right) \to e^{-\lambda}" />.</p>
                  <p>Enfin, <LatexRenderer latex="\displaystyle \left(1 - \frac{\lambda}{n}\right)^{-k} \to 1" />.</p>
                  <p>Donc <LatexRenderer latex="\displaystyle P(X_n = k) \to \frac{\lambda^k}{k!} e^{-\lambda}" />.</p>
                  <p>La suite converge en loi vers une variable de Poisson <LatexRenderer latex="\mathcal{P}(\lambda)" />. C'est l'approximation des événements rares.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Concours */}
        <section id="concours">
          <DifficultyHeader
            level="Niveau Concours"
            title="Type BCE/Ecricome"
            icon={Award}
            stars={4}
          />
          <div className="space-y-6">
            <ExerciseCard
              id="18.6"
              title="Application du TCL - Sondage"
              difficulty="Très Difficile"
              content={
                <div className="space-y-4">
                  <p>On souhaite estimer la proportion <LatexRenderer latex="p" /> d'une population favorable à une réforme.</p>
                  <p>On réalise un sondage sur <LatexRenderer latex="n" /> personnes. Soit <LatexRenderer latex="S_n" /> le nombre de personnes favorables.</p>
                  <p>On utilise l'approximation normale (TCL) pour <LatexRenderer latex="F_n = S_n / n" />.</p>
                  <p>Quelle taille d'échantillon <LatexRenderer latex="n" /> faut-il choisir pour que <LatexRenderer latex="P(|F_n - p| \le 0.01) \ge 0.95" /> ?</p>
                  <p><em>Indication : On prendra le cas le plus défavorable <LatexRenderer latex="p(1-p) \le 1/4" /> et on sait que si <LatexRenderer latex="Z \sim \mathcal{N}(0,1)" />, <LatexRenderer latex="P(|Z| \le 1.96) \approx 0.95" />.</em></p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>D'après le TCL, <LatexRenderer latex="\displaystyle \sqrt{n} \frac{F_n - p}{\sqrt{p(1-p)}} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)" />.</p>
                  <p>Pour <LatexRenderer latex="n" /> grand, on approxime :</p>
                  <LatexRenderer latex="\displaystyle P(|F_n - p| \le 0.01) = P\left( \frac{\sqrt{n}|F_n - p|}{\sqrt{p(1-p)}} \le \frac{0.01 \sqrt{n}}{\sqrt{p(1-p)}} \right) \ge 0.95" />
                  <p>On veut donc que la borne <LatexRenderer latex="\displaystyle a = \frac{0.01 \sqrt{n}}{\sqrt{p(1-p)}} \ge 1.96" /> (quantile à 95%).</p>
                  <p>Soit <LatexRenderer latex="\displaystyle \sqrt{n} \ge 1.96 \frac{\sqrt{p(1-p)}}{0.01}" />.</p>
                  <p>Dans le pire cas, <LatexRenderer latex="p(1-p) = 1/4" />, donc <LatexRenderer latex="\sqrt{p(1-p)} = 0.5" />.</p>
                  <LatexRenderer latex="\displaystyle \sqrt{n} \ge \frac{1.96 \times 0.5}{0.01} = 98" />
                  <p>Soit <LatexRenderer latex="n \ge 98^2 = 9604" />.</p>
                  <p>Il faut interroger environ 10 000 personnes pour avoir une précision de 1%.</p>
                </div>
              }
            />
          </div>
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre18ConvergencesEtTheoremesLimitesExercicesPage;
