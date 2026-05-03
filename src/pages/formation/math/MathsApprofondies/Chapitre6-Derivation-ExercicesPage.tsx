import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Lightbulb, Target, Crown, BookOpen } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre6DerivationExercicesPage = () => {
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
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Exercices sur la dérivabilité, les théorèmes fondamentaux et les études de fonctions."
      slug="derivation"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
      nextChapter={{
        slug: "integration-sur-un-segment",
        title: "Intégration sur un segment"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calculs de Dérivées & Limites"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Moyen"
            content={
              <div>
                <p><strong>Énoncé :</strong> On définit l'application <LatexRenderer latex={"f : \\mathbb{R}^* \\to \\mathbb{R}"} /> par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\forall x \\in \\mathbb{R}^*, \\quad f(x) = \\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)"} />
                </div>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> Déterminer <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x)"} /> et <LatexRenderer latex={"\\lim_{x \\to -\\infty} f(x)"} />.</p>
                  <p><strong>2.</strong> Montrer que l'application <LatexRenderer latex={"f"} /> est constante sur <LatexRenderer latex={"]0, +\\infty["} /> et sur <LatexRenderer latex={"]-\\infty, 0["} />.</p>
                  <p><strong>3.</strong> En déduire les valeurs de la constante.</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Limite en <LatexRenderer latex={"+\\infty"} /> : <LatexRenderer latex={"\\pi/2 + 0 = \\pi/2"} />. Limite en <LatexRenderer latex={"-\\infty"} /> : <LatexRenderer latex={"-\\pi/2 + 0 = -\\pi/2"} />.</p>
                <p>2. Dérivons : <LatexRenderer latex={"f'(x) = \\frac{1}{1+x^2} - \\frac{1}{x^2} \\frac{1}{1+1/x^2} = 0"} />. La dérivée est nulle sur chaque intervalle.</p>
                <p>3. Pour <LatexRenderer latex={"x>0"} />, <LatexRenderer latex={"f(x) = \\pi/2"} />. Pour <LatexRenderer latex={"x<0"} />, <LatexRenderer latex={"f(x) = -\\pi/2"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Difficile"
            content={
              <div>
                <p><strong>Énoncé :</strong> Établir les inégalités suivantes (Inégalité des Accroissements Finis) :</p>
                <div className="space-y-3 mt-4 ml-4">
                  <p><strong>1.</strong> <LatexRenderer latex={"\\forall x > -1, \\frac{x}{1 + x} \\leq \\ln(1 + x) \\leq x"} /></p>
                  <p><strong>2.</strong> <LatexRenderer latex={"\\forall x > 0, \\frac{x}{1 + x^2} \\leq \\arctan(x) \\leq x"} /></p>
                  <p><strong>3.</strong> <LatexRenderer latex={"\\forall x \\geq 0, e^x \\geq 1 + x + \\frac{x^2}{2}"} /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>1. Appliquer IAF ou étude de fonction à <LatexRenderer latex={"\\ln(1+t)"} /> entre 0 et x.</p>
                <p>2. Appliquer IAF à <LatexRenderer latex={"\\arctan(t)"} /> entre 0 et x. Dérivée <LatexRenderer latex={"\\frac{1}{1+t^2}"} />.</p>
                <p>3. Étude de fonction <LatexRenderer latex={"f(x) = e^x - (1+x+x^2/2)"} />. <LatexRenderer latex={"f'(x) = e^x - 1 - x"} />, <LatexRenderer latex={"f''(x) = e^x - 1 \\geq 0"} />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Suites récurrentes & Séries"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Avancé"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"f(x) = \\frac{3}{2} \\ln(x + 1)"} /> sur <LatexRenderer latex={"]-1, +\\infty["} />.</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p>1. Variations de <LatexRenderer latex={"f"} />.</p>
                  <p>2. Point fixe <LatexRenderer latex={"\\alpha \\in [1, 2]"} />.</p>
                  <p>3. Convergence de <LatexRenderer latex={"u_{n+1} = f(u_n)"} />.</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>1. <LatexRenderer latex={"f' > 0"} />, croissante.</p>
                <p>2. TVI sur <LatexRenderer latex={"g(x) = f(x)-x"} />. <LatexRenderer latex={"g(1)>0, g(2)<0"} />.</p>
                <p>3. <LatexRenderer latex={"|f'| \\leq 3/4"} /> sur <LatexRenderer latex={"[1, +\\infty["} />. IAF <LatexRenderer latex={"\\implies"} /> convergence géométrique vers <LatexRenderer latex={"\\alpha"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Avancé"
            content={
              <div>
                <p>Comparaison série-intégrale (discrète) via IAF.</p>
                <p>Montrer que la série <LatexRenderer latex={"\\sum \\frac{1}{k^2}"} /> converge en encadrant <LatexRenderer latex={"\\frac{1}{k^2}"} /> par <LatexRenderer latex={"f(k)-f(k-1)"} /> avec <LatexRenderer latex={"f(x)=-1/x"} />.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>On montre <LatexRenderer latex={"\\frac{1}{k^2} \\leq \\frac{1}{k-1} - \\frac{1}{k}"} />. Somme télescopique majorante converge vers 1. Donc la série converge.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre6DerivationExercicesPage;
