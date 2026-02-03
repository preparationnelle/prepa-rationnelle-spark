import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Brain, PenTool } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage = () => {
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
      chapterTitle="Applications linéaires & structures vectorielles"
      description="Exercices sur les applications linéaires, le noyau, l'image, et les projecteurs."
      slug="applications-lineaires-structures-vectorielles"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "probabilites-conditionnement",
        title: "Probabilités et Conditionnement"
      }}
      nextChapter={{
        slug: "optimisation-multivariee-avancee",
        title: "Optimisation Multivariée Avancée"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Noyau et Image - Théorie"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex20"
            title="Inclusion Im(f) et Ker(f)"
            difficulty="Intermédiaire"
            content={
              <div>
                <p>Démontrer que :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex="f^2 = 0_{\mathcal{L}(E)} \iff \operatorname{Im}(f) \subset \operatorname{Ker}(f)" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Sens direct</span> : Si <LatexRenderer latex="f^2 = 0" />, alors pour tout <LatexRenderer latex="x" />, <LatexRenderer latex="f(f(x)) = 0" />.
                  Soit <LatexRenderer latex="y \in \operatorname{Im}(f)" />, <LatexRenderer latex="y = f(x)" />.
                  Alors <LatexRenderer latex="f(y) = f(f(x)) = 0" />, donc <LatexRenderer latex="y \in \operatorname{Ker}(f)" />.
                </p>
                <p>
                  <span className="font-semibold">Sens réciproque</span> : Si <LatexRenderer latex="\operatorname{Im}(f) \subset \operatorname{Ker}(f)" />, alors pour tout <LatexRenderer latex="x" />, <LatexRenderer latex="f(x) \in \operatorname{Im}(f)" /> donc <LatexRenderer latex="f(x) \in \operatorname{Ker}(f)" />, soit <LatexRenderer latex="f(f(x)) = 0" />.
                </p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Projecteurs et Sommes Directes"
            icon={Brain}
            stars={3}
          />

          <ExerciseCard
            id="ex6"
            title="Décomposition par polynôme annulateur"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="f \in \mathcal{L}(E)" /> et <LatexRenderer latex="a \neq b" /> tels que <LatexRenderer latex="(f-a\operatorname{Id})(f-b\operatorname{Id}) = 0" />.</p>
                <p>1. Montrer que <LatexRenderer latex="E = E_a \oplus E_b" /> (sous-espaces propres).</p>
                <p>2. Exprimer la projection sur <LatexRenderer latex="E_a" /> parallèlement à <LatexRenderer latex="E_b" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Analyse-synthèse ou décomposition : <LatexRenderer latex="x = \frac{1}{a-b}(f-b\operatorname{Id})(x) + \frac{1}{b-a}(f-a\operatorname{Id})(x)" />. Le premier terme est dans <LatexRenderer latex="E_a" />, le second dans <LatexRenderer latex="E_b" />.</p>
                <p>2. <LatexRenderer latex="p = \frac{1}{a-b}(f-b\operatorname{Id})" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Projections dans R^3"
            difficulty="Intermédiaire"
            content={
              <div>
                <p><LatexRenderer latex="u=(1,2,-1)" />, <LatexRenderer latex="F=\operatorname{Vect}(u)" />, <LatexRenderer latex="G=\{(x,y,z) \mid 2x+y+z=0\}" />.</p>
                <p>Expression de la projection sur F.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Décomposition : <LatexRenderer latex="a = \lambda u + c" /> avec <LatexRenderer latex="c \in G" />.</p>
                <p><LatexRenderer latex="\lambda = \frac{2x+y+z}{3}" />.</p>
                <p>Donc <LatexRenderer latex="p(x,y,z) = \frac{2x+y+z}{3}(1,2,-1)" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Matrices et Endomorphismes"
            icon={PenTool}
            stars={4}
          />
          <ExerciseCard
            id="ex13"
            title="Endomorphisme cyclique"
            difficulty="Intermédiaire"
            content={
              <div>
                <p><LatexRenderer latex="f(e_1)=e_2, f(e_2)=e_3, f(e_3)=e_1" />.</p>
                <p>Polynôme annulateur et inverse.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="f^3 = \operatorname{Id}" /> donc <LatexRenderer latex="X^3-1" /> annule <LatexRenderer latex="f" />.</p>
                <p><LatexRenderer latex="f \circ f^2 = \operatorname{Id}" /> donc <LatexRenderer latex="f^{-1} = f^2" />. Et <LatexRenderer latex="f^2(e_1)=e_3, f^2(e_2)=e_1, f^2(e_3)=e_2" />.</p>
              </div>
            }
          />
          <ExerciseCard
            id="ex7"
            title="Multiplication à gauche"
            difficulty="Intermédiaire"
            content={
              <div>
                <p><LatexRenderer latex="f(M)=AM" /> dans <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" />.</p>
                <p>Noyau et Image.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="A" /> non inversible (rang 1). <LatexRenderer latex="\dim \operatorname{Ker}(f) = 2" /> (matrices dont les colonnes sont dans <LatexRenderer latex="\operatorname{Ker}(A)" />).</p>
                <p><LatexRenderer latex="\operatorname{Im}(f)" /> : matrices dont les colonnes sont dans <LatexRenderer latex="\operatorname{Im}(A)" />.</p>
              </div>
            }
          />
          <ExerciseCard
            id="ex22"
            title="Endomorphisme nilpotent"
            difficulty="Difficile"
            content={
              <div>
                <p><LatexRenderer latex="f^{k-1} \neq 0, f^k=0" />.</p>
                <p>Montrer <LatexRenderer latex="k \le n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Il existe <LatexRenderer latex="x" /> tq <LatexRenderer latex="f^{k-1}(x) \neq 0" />. La famille <LatexRenderer latex="(x, f(x), \dots, f^{k-1}(x))" /> est libre (classique). Elle a <LatexRenderer latex="k" /> éléments, donc <LatexRenderer latex="k \le \dim E" />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage;
