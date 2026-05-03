import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Brain, PenTool } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre11OptimisationMultivarieeAvanceeExercicesPage = () => {
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
    color = "slate"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
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
              {id.replace(/[^0-9]/g, '')}
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
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Exercices sur l'optimisation, la convexité et les multiplicateurs de Lagrange."
      slug="optimisation-multivariee-avancee"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
      nextChapter={{
        slug: "comparaison-negligeabilite-equivalence",
        title: "Comparaison & Négligeabilité"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Convexité et optimisation sans contrainte"
            icon={Target}
            stars={3}
          />

          <ExerciseCard
            id="ex17-3"
            title="Etude complète de f(x,y) = exp(x^2+y^2)"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="f(x,y) = e^{x^2 + y^2}" />.</p>
                <p>1. Gradient et Hessienne.</p>
                <p>2. Montrer que <LatexRenderer latex="f" /> est strictement convexe.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="\nabla f = 2e^{x^2+y^2}(x, y)" />. <LatexRenderer latex="H_f" /> a une trace et un déterminant strictement positifs.</p>
                <p>2. <LatexRenderer latex="H_f" /> définie positive partout <LatexRenderer latex="\implies f" /> strictement convexe.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex17-6"
            title="Étude de f(x,y) = x^4 + y^4 - 2x^2y^2"
            difficulty="Difficile"
            content={
              <div>
                <p>Points critiques, Hessienne, nature des points et convexité.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Points critiques : <LatexRenderer latex="(0,0)" /> et <LatexRenderer latex="y = \pm x" />. <LatexRenderer latex="(0,0)" /> est un minimum global (valeur 0).</p>
                <p>Fonction non convexe (<LatexRenderer latex="H_f" /> non positive partout, ex en (1,0)).</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Optimisation sous contraintes"
            icon={Brain}
            stars={4}
          />

          <ExerciseCard
            id="ex17-4"
            title="Lagrange : x^2 + 2y^2 sous x+y=1"
            difficulty="Difficile"
            content={
              <div>
                <p>Minimiser <LatexRenderer latex="f(x,y) = x^2 + 2y^2" /> sous <LatexRenderer latex="x + y = 1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Lagrangien <LatexRenderer latex="L = x^2+2y^2 - \lambda(x+y-1)" />.</p>
                <p>Système : <LatexRenderer latex="2x = \lambda, 4y = \lambda, x+y=1" />.</p>
                <p>Solution : <LatexRenderer latex="x=2/3, y=1/3" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex17-8"
            title="Optimisation économique"
            difficulty="Difficile"
            content={
              <div>
                <p>Minimiser <LatexRenderer latex="C(x,y) = x^2 + y^2 + xy" /> sous <LatexRenderer latex="x + 2y = 100" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Point optimal <LatexRenderer latex="(0, 50)" />.</p>
                <p>Multiplicateur <LatexRenderer latex="\lambda = 50" /> (coût marginal de la contrainte).</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeExercicesPage;
