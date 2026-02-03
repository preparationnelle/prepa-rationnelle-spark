import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre13SeriesNumeriquesExercicesPage = () => {
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
    stars = 1,
  }: {
    level: string;
    title: string;
    icon: any;
    stars?: number;
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
          {[...Array(3 - stars > 0 ? 3 - stars : 0)].map((_, i) => (
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
      chapterNumber={29}
      chapterTitle="Séries Numériques"
      description="Exercices de calcul de sommes, étude de convergence et séries usuelles."
      slug="series-numeriques"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "estimation-statistique-avancee",
        title: "Estimation (Ch 28)"
      }}
      nextChapter={{
        slug: "developpements-limites-et-taylor",
        title: "DL et Taylor (Ch 14)"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calculs de sommes"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="29.1"
            title="Séries géométriques et télescopiques"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Calculer les sommes suivantes :</p>
                <ul className="list-disc list-inside">
                  <li><LatexRenderer latex="\sum_{n=0}^{+\infty} \frac{1}{3^n}" /></li>
                  <li><LatexRenderer latex="\sum_{n=1}^{+\infty} \frac{1}{n(n+1)}" /></li>
                </ul>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Série géométrique de raison <LatexRenderer latex="1/3" />. Somme = <LatexRenderer latex="\frac{1}{1-1/3} = 3/2" />.</p>
                <p>2. Série télescopique : <LatexRenderer latex="\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}" />. Somme = 1.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Nature des séries"
            icon={BookOpen}
            stars={3}
          />
          <ExerciseCard
            id="29.2"
            title="Comparaison et Équivalents"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Déterminer la nature des séries de terme général :</p>
                <ul className="list-disc list-inside">
                  <li><LatexRenderer latex="u_n = \ln(1 + \frac{1}{n^2})" /></li>
                  <li><LatexRenderer latex="v_n = \frac{1}{\sqrt{n}}" /></li>
                </ul>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="u_n \sim \frac{1}{n^2}" /> (Riemann conv, <LatexRenderer latex="\alpha = 2 > 1" />). Donc converge.</p>
                <p>2. Riemann diverge (<LatexRenderer latex="\alpha = 1/2 \le 1" />).</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Séries à termes quelconques"
            icon={Crown}
            stars={3}
          />
          <ExerciseCard
            id="29.3"
            title="Séries Alternées"
            difficulty="Difficile"
            content={
              <div className="space-y-4">
                <p>Nature de la série <LatexRenderer latex="\sum \frac{(-1)^n}{\sqrt{n}}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Critère Spécial des Séries Alternées (CSSA) : <LatexRenderer latex="|u_n| = \frac{1}{\sqrt{n}}" /> décroît vers 0. Donc converge.</p>
                <p>Mais ne converge pas absolument.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre13SeriesNumeriquesExercicesPage;