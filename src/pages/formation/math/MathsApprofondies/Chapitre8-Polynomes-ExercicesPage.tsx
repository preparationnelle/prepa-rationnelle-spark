import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre8PolynomesExercicesPage = () => {
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
      chapterTitle="Polynômes"
      description="Exercices sur les racines, factorisations, et suites de polynômes."
      slug="polynomes"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "nuplets-variables-aleatoires",
        title: "n-uplets de variables aléatoires"
      }}
      nextChapter={{
        slug: "couple-variables-aleatoires",
        title: "Couple de variables aléatoires"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Racines & Factorisation"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Moyen"
            content={
              <div>
                <p>Déterminer les racines réelles et factoriser les polynômes suivants :</p>
                <div className="list-decimal pl-6 mt-4 space-y-2">
                  <p>1. <LatexRenderer latex="P(x) = x^3 - 8" /></p>
                  <p>2. <LatexRenderer latex="P(x) = x^3 - 3x^2 + 3x - 2" /></p>
                  <p>3. <LatexRenderer latex="P(x) = 2x^3 - x^2 - 2x + 1" /></p>
                  <p>4. <LatexRenderer latex="P(x) = x^3 - 2x^2 - 5x + 6" /></p>
                  <p>5. <LatexRenderer latex="P(x) = x^4 - 5x^3 + 7x^2 - 3x" /></p>
                  <p>6. <LatexRenderer latex="P(x) = x^4 - 2x^2 + 1" /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="x^3-8 = (x-2)(x^2+2x+4)" />. Racine : 2. (Discriminant second facteur négatif).</p>
                <p>2. <LatexRenderer latex="x=2" /> racine évidente. <LatexRenderer latex="(x-2)(x^2-x+1)" />. Racine : 2.</p>
                <p>3. Racines évidentes 1, -1. <LatexRenderer latex="(x-1)(x+1)(2x-1)" />. Racines : -1, 1/2, 1.</p>
                <p>4. Racine 1. <LatexRenderer latex="(x-1)(x^2-x-6) = (x-1)(x-3)(x+2)" />. Racines : -2, 1, 3.</p>
                <p>5. <LatexRenderer latex="x(x-1)^2(x-3)" />. Racines : 0, 1 (double), 3.</p>
                <p>6. Identité remarquable (bicarrée) : <LatexRenderer latex="(x^2-1)^2 = (x-1)^2(x+1)^2" />. Racines : 1 (double), -1 (double).</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Suites de Polynômes"
            icon={Lightbulb}
            stars={2}
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P" /> tel que <LatexRenderer latex="P(x+1)=P(x)" /> pour tout <LatexRenderer latex="x" />.</p>
                <p>Montrer que si <LatexRenderer latex="P" /> a une racine réelle, alors <LatexRenderer latex="P=0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Si <LatexRenderer latex="P(\alpha)=0" />, alors <LatexRenderer latex="P(\alpha+1)=P(\alpha)=0" /> etc.</p>
                <p>Donc <LatexRenderer latex="\alpha, \alpha+1, \alpha+2, \dots" /> sont toutes racines.</p>
                <p>Un polynôme non nul ne peut avoir une infinité de racines. Donc <LatexRenderer latex="P=0" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P_0=1" /> et <LatexRenderer latex="P_{n+1}(x) = xP_n(x) + 1" />.</p>
                <p>Déterminer l'expression de <LatexRenderer latex="P_n(x)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Calculons les premiers termes : <LatexRenderer latex="P_1=x+1" />, <LatexRenderer latex="P_2=x^2+x+1" />.</p>
                <p>Conjecture : <LatexRenderer latex="P_n(x) = \sum_{k=0}^n x^k = \frac{x^{n+1}-1}{x-1}" />.</p>
                <p>Récurrence facile.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex="P_0=1" /> et <LatexRenderer latex="P_{n+1}(x) = (2x-1)P_n(x)" />.</p>
                <p>Déterminer l'expression, le degré et le coefficient dominant de <LatexRenderer latex="P_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Suite géométrique de raison <LatexRenderer latex="(2x-1)" />.</p>
                <p><LatexRenderer latex="P_n(x) = (2x-1)^n" />.</p>
                <p>Degré : <LatexRenderer latex="n" />. Coefficient dominant : <LatexRenderer latex="2^n" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Problèmes avancés"
            icon={Crown}
            stars={3}
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5"
            difficulty="Difficile"
            content={
              <div>
                <p>Trouver <LatexRenderer latex="P \in \mathbb{R}_3[X]" /> tel que <LatexRenderer latex="P(x+1)-P(x)=x^2" />. En déduire la somme des carrés.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On pose <LatexRenderer latex="P(x)=ax^3+bx^2+cx+d" />. Identification donne <LatexRenderer latex="a=1/3, b=-1/2, c=1/6" />.</p>
                <p><LatexRenderer latex="\sum k^2 = \sum (P(k+1)-P(k)) = P(n+1)-P(0)" /> (Télescopage).</p>
                <p>Résultat : <LatexRenderer latex="\frac{n(n+1)(2n+1)}{6}" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6"
            difficulty="Difficile"
            content={
              <div>
                <p>Calculer <LatexRenderer latex="\sum_{k=0}^n k \binom{n}{k}" /> en dérivant <LatexRenderer latex="(x+1)^n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Dérivée de <LatexRenderer latex="(x+1)^n" /> est <LatexRenderer latex="n(x+1)^{n-1}" />.</p>
                <p>Dérivée de <LatexRenderer latex="\sum \binom{n}{k} x^k" /> est <LatexRenderer latex="\sum k \binom{n}{k} x^{k-1}" />.</p>
                <p>En <LatexRenderer latex="x=1" /> : <LatexRenderer latex="n 2^{n-1} = \sum k \binom{n}{k}" />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre8PolynomesExercicesPage;
