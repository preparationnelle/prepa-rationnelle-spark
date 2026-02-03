import React, { useState } from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Crown, Lightbulb, Target, Award } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre17VariablesAleatoiresDiscretesLoisExercicesPage = () => {
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
      chapterNumber={17}
      chapterTitle="Variables aléatoires discrètes"
      description="Exercices sur les lois usuelles, calculs d'espérance et de variance."
      slug="variables-aleatoires-discretes-lois"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "espaces-probabilises-et-conditionnement",
        title: "Espaces Probabilisés"
      }}
      nextChapter={{
        slug: "convergences-theoremes-limites",
        title: "Convergences & Théorèmes Limites"
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
              id="17.1"
              title="Loi Binomiale"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="X" /> une variable aléatoire suivant la loi binomiale <LatexRenderer latex="\mathcal{B}(10, 0.3)" />.</p>
                  <p>1. Calculer <LatexRenderer latex="P(X=3)" />.</p>
                  <p>2. Donner l'espérance <LatexRenderer latex="E(X)" /> et la variance <LatexRenderer latex="V(X)" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Calcul de probabilité :</strong></p>
                  <p>On a <LatexRenderer latex="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" />.</p>
                  <LatexRenderer latex="P(X=3) = \binom{10}{3} (0.3)^3 (0.7)^7 = 120 \times 0.027 \times 0.0823... \approx 0.267" />
                  <p><strong>2. Espérance et Variance :</strong></p>
                  <p><LatexRenderer latex="E(X) = np = 10 \times 0.3 = 3" /></p>
                  <p><LatexRenderer latex="V(X) = np(1-p) = 10 \times 0.3 \times 0.7 = 2.1" /></p>
                </div>
              }
            />
            <ExerciseCard
              id="17.2"
              title="Loi Géométrique - Sans mémoire"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="T \sim \mathcal{G}(p)" /> avec <LatexRenderer latex="p \in ]0,1[" />.</p>
                  <p>Rappeler la propriété d'absence de mémoire et la démontrer.</p>
                  <p>Calculer <LatexRenderer latex="P(T > k)" /> pour tout <LatexRenderer latex="k \in \mathbb{N}" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Queue de distribution :</strong></p>
                  <p><LatexRenderer latex="\displaystyle P(T > k) = \sum_{j=k+1}^{+\infty} p(1-p)^{j-1} = p(1-p)^k \frac{1}{1-(1-p)} = (1-p)^k" />.</p>
                  <p><strong>2. Absence de mémoire :</strong></p>
                  <p>On veut montrer <LatexRenderer latex="P(T > n+m | T > n) = P(T > m)" />.</p>
                  <LatexRenderer latex="P(T > n+m | T > n) = \frac{P(T > n+m)}{P(T > n)} = \frac{(1-p)^{n+m}}{(1-p)^n} = (1-p)^m = P(T > m)" />
                  <p>La loi géométrique est la seule loi discrète sans mémoire.</p>
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
              id="17.3"
              title="Approximation Poisson"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>On considère une usine produisant des pièces dont la probabilité de défaut est <LatexRenderer latex="p = 0.02" />.</p>
                  <p>On prélève un lot de <LatexRenderer latex="n = 100" /> pièces. Soit <LatexRenderer latex="X" /> le nombre de pièces défectueuses.</p>
                  <p>1. Quelle est la loi exacte de <LatexRenderer latex="X" /> ?</p>
                  <p>2. Par quelle loi peut-on l'approcher ? (Justifier).</p>
                  <p>3. Estimer <LatexRenderer latex="P(X \le 2)" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Loi exacte :</strong> <LatexRenderer latex="X \sim \mathcal{B}(100, 0.02)" /> car tirages indépendants (si production grande) avec proba constante.</p>
                  <p><strong>2. Approximation :</strong> <LatexRenderer latex="n" /> grand, <LatexRenderer latex="p" /> petit et <LatexRenderer latex="np = 2" /> modéré.</p>
                  <p>On approxime par une loi de Poisson <LatexRenderer latex="\mathcal{P}(\lambda)" /> avec <LatexRenderer latex="\lambda = np = 2" />.</p>
                  <p><strong>3. Calcul :</strong></p>
                  <LatexRenderer latex="P(X \le 2) = P(X=0) + P(X=1) + P(X=2) \approx e^{-2} + 2e^{-2} + \frac{2^2}{2}e^{-2} = 5e^{-2} \approx 0.677" />
                </div>
              }
            />
            <ExerciseCard
              id="17.4"
              title="Minimum de lois géométriques"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>Soient <LatexRenderer latex="X \sim \mathcal{G}(p)" /> et <LatexRenderer latex="Y \sim \mathcal{G}(q)" /> indépendantes.</p>
                  <p>Déterminer la loi de <LatexRenderer latex="Z = \min(X, Y)" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On utilise la fonction de survie : <LatexRenderer latex="P(Z > k)" />.</p>
                  <LatexRenderer latex="P(\min(X,Y) > k) = P(X > k \cap Y > k) = P(X > k)P(Y > k)" />
                  <p>Comme <LatexRenderer latex="X, Y" /> sont géométriques : <LatexRenderer latex="P(X>k) = (1-p)^k" /> et <LatexRenderer latex="P(Y>k) = (1-q)^k" />.</p>
                  <p>Donc <LatexRenderer latex="P(Z>k) = ((1-p)(1-q))^k = (1 - (p+q-pq))^k" />.</p>
                  <p>On reconnait la queue de distribution d'une loi géométrique de paramètre <LatexRenderer latex="1 - (1-p)(1-q) = p+q-pq" />.</p>
                  <p>Donc <LatexRenderer latex="Z \sim \mathcal{G}(p+q-pq)" />.</p>
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
              id="17.5"
              title="Couple et Loi conjointe"
              difficulty="Difficile"
              content={
                <div className="space-y-4">
                  <p>Soit <LatexRenderer latex="(X, Y)" /> un couple de loi jointe <LatexRenderer latex="P(X=i, Y=j) = c \cdot \frac{1}{i! j!}" /> pour <LatexRenderer latex="i,j \ge 1" />.</p>
                  <p>1. Déterminer <LatexRenderer latex="c" />.</p>
                  <p>2. Déterminer les lois marginales. <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont-elles indépendantes ?</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Constante de normalisation :</strong></p>
                  <LatexRenderer latex="\displaystyle \sum_{i,j \ge 1} \frac{1}{i! j!} = \left(\sum_{i \ge 1} \frac{1}{i!}\right) \left(\sum_{j \ge 1} \frac{1}{j!}\right) = (e-1)^2" />
                  <p>Donc <LatexRenderer latex="c = \frac{1}{(e-1)^2}" />.</p>
                  <p><strong>2. Lois marginales :</strong></p>
                  <LatexRenderer latex="\displaystyle P(X=i) = \sum_{j \ge 1} c \frac{1}{i! j!} = \frac{c}{i!} \sum_{j \ge 1} \frac{1}{j!} = \frac{c}{i!} (e-1) = \frac{1}{e-1} \frac{1}{i!}" />
                  <p>On reconnait une loi de Poisson tronquée à 0.</p>
                  <p><LatexRenderer latex="P(X=i, Y=j) = P(X=i)P(Y=j)" />, donc elles sont indépendantes.</p>
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
              id="17.6"
              title="Collectionneur de coupons"
              difficulty="Très Difficile"
              content={
                <div className="space-y-4">
                  <p>On tire des nombres au hasard uniformément dans <LatexRenderer latex="\{1, \dots, N\}" /> avec remise.</p>
                  <p>Soit <LatexRenderer latex="T" /> le nombre de tirages nécessaires pour avoir obtenu tous les nombres de <LatexRenderer latex="1" /> à <LatexRenderer latex="N" />.</p>
                  <p>1. Soit <LatexRenderer latex="T_i" /> le nombre de tirages supplémentaires pour passer de <LatexRenderer latex="i-1" /> valeurs distinctes observées à <LatexRenderer latex="i" /> valeurs.</p>
                  <p>Quelle est la loi de <LatexRenderer latex="T_i" /> ?</p>
                  <p>2. En déduire <LatexRenderer latex="E(T)" />.</p>
                  <p>3. Donner un équivalent de <LatexRenderer latex="E(T)" /> quand <LatexRenderer latex="N \to +\infty" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Loi de <LatexRenderer latex="T_i" /> :</strong></p>
                  <p>Quand on a déjà <LatexRenderer latex="i-1" /> valeurs, la probabilité d'en tirer une nouvelle ("succès") est <LatexRenderer latex="p_i = \frac{N-(i-1)}{N}" />.</p>
                  <p>On répète les tirages jusqu'au succès : <LatexRenderer latex="T_i \sim \mathcal{G}(p_i)" />.</p>

                  <p><strong>2. Espérance totale :</strong></p>
                  <p><LatexRenderer latex="\displaystyle T = T_1 + \dots + T_N" /> (par linéarité).</p>
                  <p><LatexRenderer latex="\displaystyle E(T) = \sum_{i=1}^N E(T_i) = \sum_{i=1}^N \frac{1}{p_i} = \sum_{i=1}^N \frac{N}{N-i+1} = N \sum_{k=1}^N \frac{1}{k}" />.</p>

                  <p><strong>3. Équivalent :</strong></p>
                  <p>On reconnait la série harmonique : <LatexRenderer latex="\displaystyle \sum_{k=1}^N \frac{1}{k} \sim \ln N" />.</p>
                  <p>Donc <LatexRenderer latex="\displaystyle E(T) \sim N \ln N" />.</p>
                </div>
              }
            />
          </div>
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre17VariablesAleatoiresDiscretesLoisExercicesPage;
