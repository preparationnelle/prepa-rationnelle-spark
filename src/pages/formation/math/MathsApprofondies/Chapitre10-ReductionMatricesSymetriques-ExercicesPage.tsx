import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre10ReductionMatricesSymetriquesExercicesPage = () => {
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
      chapterNumber={26}
      chapterTitle="Réduction des endomorphismes et matrices symétriques"
      description="Exercices sur la diagonalisation de matrices symétriques, le théorème spectral et les formes quadratiques."
      slug="reduction-matrices-symetriques"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Espaces Euclidiens (Ch 25)"
      }}
      nextChapter={{
        slug: "loi-normale",
        title: "Loi Normale (Ch 27)"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Diagonalisation"
            icon={Target}
            stars={1}
          />

          <ExerciseCard
            id="26.1"
            title="Diagonalisation complète"
            difficulty="Classique"
            content={
              <div className="space-y-4">
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 3 & 2 & 4 \\ 2 & 0 & 2 \\ 4 & 2 & 3 \end{pmatrix}" />.</p>
                <p>Montrer qu'elle est diagonalisable et trouver <LatexRenderer latex="P" /> orthogonale telle que <LatexRenderer latex="P^T A P" /> soit diagonale.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="A" /> est symétrique réelle donc diagonalisable. <LatexRenderer latex="\lambda_1 = -1" /> (double), <LatexRenderer latex="\lambda_2 = 8" />.</p>
                <p>Orthonormalisation de Gram-Schmidt sur les sous-espaces propres pour construire <LatexRenderer latex="P" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Propriétés Théoriques"
            icon={BookOpen}
            stars={2}
          />
          <ExerciseCard
            id="26.2"
            title="Produit de matrices symétriques"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Quand <LatexRenderer latex="AB" /> est-elle symétrique si <LatexRenderer latex="A, B" /> le sont ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>SSI elles commutent : <LatexRenderer latex="AB = BA" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Optimisation"
            icon={Crown}
            stars={3}
          />
          <ExerciseCard
            id="26.3"
            title="Maximisation forme quadratique"
            difficulty="Difficile"
            content={
              <div className="space-y-4">
                <p>Maximiser <LatexRenderer latex="q(x) = \langle Ax, x \rangle" /> sous la contrainte <LatexRenderer latex="\|x\|=1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Le maximum est la plus grande valeur propre de <LatexRenderer latex="A" /> (Principe de Rayleigh).</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesExercicesPage;
