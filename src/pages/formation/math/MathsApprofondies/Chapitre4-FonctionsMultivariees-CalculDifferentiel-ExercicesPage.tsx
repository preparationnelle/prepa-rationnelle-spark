import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, PenTool } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage = () => {
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
      chapterNumber={21}
      chapterTitle="Fonctions multivariées & calcul différentiel"
      description="Exercices sur la continuité, le calcul de gradients et les extrema."
      slug="fonctions-multivariees-calcul-differentiel"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "statistiques-estimation",
        title: "Statistiques"
      }}
      nextChapter={{
        slug: "optimisation",
        title: "Optimisation"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calculs de Gradients"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="21.1"
            title="Exercice 1"
            difficulty="Facile"
            content={
              <div className="space-y-4">
                <p>Calculer le gradient des fonctions suivantes :</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><LatexRenderer latex="f(x,y) = x^2 + y^2 + 2xy" /></li>
                  <li><LatexRenderer latex="g(x,y) = e^{x+y}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="\nabla f(x,y) = (2x+2y, 2y+2x)" />.</p>
                <p>2. <LatexRenderer latex="\nabla g(x,y) = (e^{x+y}, e^{x+y})" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Extrema locaux"
            icon={PenTool}
            stars={2}
          />
          <ExerciseCard
            id="21.2"
            title="Exercice 2"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Trouver les points critiques de <LatexRenderer latex="h(x,y) = x^2 - y^2" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="\nabla h(x,y) = (2x, -2y)" />.</p>
                <p>Le gradient s'annule en <LatexRenderer latex="(0,0)" />.</p>
                <p>C'est un point selle (ni max ni min local).</p>
              </div>
            }
          />
        </div>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage;
