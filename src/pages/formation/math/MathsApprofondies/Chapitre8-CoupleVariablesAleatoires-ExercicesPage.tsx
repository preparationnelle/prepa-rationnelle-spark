import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre8CoupleVariablesAleatoiresExercicesPage = () => {
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
      chapterNumber={8}
      chapterTitle="Couples de variables aléatoires"
      description="Exercices sur les lois conjointes, marginales, indépendance et covariance."
      slug="couple-variables-aleatoires"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
      nextChapter={{
        slug: "matrices-et-espaces-vectoriels",
        title: "Matrices et Espaces Vectoriels"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Lois conjointes & Marginales"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1-1"
            title="Exercice 1.1"
            difficulty="Fondamental"
            content={
              <div className="space-y-4">
                <p>On donne la loi conjointe de <LatexRenderer latex="(X,Y)" /> dans le tableau :</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-center border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-2 border border-slate-200">X \ Y</th>
                        <th className="p-2 border border-slate-200">-1</th>
                        <th className="p-2 border border-slate-200">0</th>
                        <th className="p-2 border border-slate-200">1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-bold border border-slate-200 bg-slate-50">0</td>
                        <td className="p-2 border border-slate-200">0,12</td>
                        <td className="p-2 border border-slate-200">0,18</td>
                        <td className="p-2 border border-slate-200">0,30</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-slate-200 bg-slate-50">1</td>
                        <td className="p-2 border border-slate-200">0,08</td>
                        <td className="p-2 border border-slate-200">0,12</td>
                        <td className="p-2 border border-slate-200">0,20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>1. Lois marginales ?</p>
                <p>2. Indépendance ?</p>
                <p>3. <LatexRenderer latex="E(X+Y)" /> et <LatexRenderer latex="V(X+Y)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="P(X=0)=0,6, P(X=1)=0,4" />. <LatexRenderer latex="P(Y=-1)=0,2, P(Y=0)=0,3, P(Y=1)=0,5" />.</p>
                <p>2. <LatexRenderer latex="P(X=0)P(Y=-1) = 0,6 \times 0,2 = 0,12 = P(X=0, Y=-1)" />. Ça marche pour tous les cas. <strong>Indépendance</strong>.</p>
                <p>3. <LatexRenderer latex="E(X+Y) = E(X)+E(Y)" />. <LatexRenderer latex="V(X+Y) = V(X)+V(Y)" /> (car indép).</p>
                <p><LatexRenderer latex="E(X)=0,4" />. <LatexRenderer latex="E(Y)=0,3" />. Somme espérance = 0,7.</p>
                <p><LatexRenderer latex="V(X)=0,24" />. <LatexRenderer latex="V(Y)=0,61" />. Somme variance = 0,85.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex1-2"
            title="Exercice 1.2"
            difficulty="Fondamental"
            content={
              <div className="space-y-4">
                <p><LatexRenderer latex="X \sim \mathcal{U}(\{1,2,3,4\}), Y \sim \mathcal{U}(\{1,2\})" /> indépendantes.</p>
                <p>Loi de <LatexRenderer latex="S=X+Y" /> et <LatexRenderer latex="P(S \geq 4)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Somme des probas : <LatexRenderer latex="P(S=k) = \sum P(X=x)P(Y=k-x)" />.</p>
                <p>Support de S : <LatexRenderer latex="\{2, \dots, 6\}" />.</p>
                <p><LatexRenderer latex="P(S=2)=1/8, P(S=3)=2/8, P(S=4)=2/8, P(S=5)=2/8, P(S=6)=1/8" />.</p>
                <p><LatexRenderer latex="P(S \geq 4) = 5/8" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Sommes et Différences"
            icon={Lightbulb}
            stars={2}
          />

          <ExerciseCard
            id="ex2-1"
            title="Exercice 2.1"
            difficulty="Moyen"
            content={
              <div>
                <p>Deux dés <LatexRenderer latex="X,Y" />. <LatexRenderer latex="S=X+Y, D=|X-Y|" />.</p>
                <p>S et D sont-elles indépendantes ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Non. Si <LatexRenderer latex="S=12" /> (donc 6+6), alors <LatexRenderer latex="D=0" />.</p>
                <p><LatexRenderer latex="P(S=12, D=1) = 0" /> mais <LatexRenderer latex="P(S=12)P(D=1) \neq 0" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Synthèse"
            icon={Crown}
            stars={3}
          />

          <ExerciseCard
            id="ex3-1"
            title="Exercice 3.1"
            difficulty="Avancé"
            content={
              <div>
                <p>Contrôle qualité. <LatexRenderer latex="S" /> = défauts dans lot de 20 (<LatexRenderer latex="p=0.05" />).</p>
                <p>Approximation de <LatexRenderer latex="S" /> ? <LatexRenderer latex="T" /> sur 100 lots ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="S \sim \mathcal{B}(20, 0.05)" />. Approx Poisson <LatexRenderer latex="\mathcal{P}(1)" />.</p>
                <p>2. <LatexRenderer latex="T \sim \mathcal{B}(2000, 0.05)" /> ou somme de 100 Poissons. <LatexRenderer latex="T \approx \mathcal{P}(100)" />.</p>
                <p>Approx Normale sur T : <LatexRenderer latex="\mathcal{N}(100, 100)" />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre8CoupleVariablesAleatoiresExercicesPage;
