import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Target, Crown, Lightbulb } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre3AlgebreBilineaireExercicesPage = () => {
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
      chapterNumber={24}
      chapterTitle="Algèbre Bilinéaire"
      description="Exercices sur le produit scalaire, Cauchy-Schwarz, et l'orthogonalisation de Gram-Schmidt."
      slug="algebre-bilineaire"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation",
        title: "Optimisation"
      }}
      nextChapter={{
        slug: "endomorphismes-symetriques",
        title: "Endomorphismes Symétriques"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Inégalités et Identités"
            icon={Target}
            stars={1}
          />

          <ExerciseCard
            id="24.1"
            title="Inégalités classiques"
            difficulty="Fondamental"
            content={
              <div className="space-y-4">
                <p>1. Démontrer l'identité du parallélogramme : <LatexRenderer latex="\|x+y\|^2 + \|x-y\|^2 = 2(\|x\|^2 + \|y\|^2)" />.</p>
                <p>2. Montrer que si la norme vérifie cette identité, elle provient d'un produit scalaire (Indication : utiliser l'identité de polarisation).</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. On développe <LatexRenderer latex="\|x+y\|^2 = \|x\|^2 + \|y\|^2 + 2\langle x,y \rangle" /> et <LatexRenderer latex="\|x-y\|^2 = \|x\|^2 + \|y\|^2 - 2\langle x,y \rangle" />. La somme donne <LatexRenderer latex="2(\|x\|^2 + \|y\|^2)" />.</p>
                <p>2. On pose <LatexRenderer latex="\langle x,y \rangle = \frac{1}{4}(\|x+y\|^2 - \|x-y\|^2)" /> et on vérifie les propriétés de bilinéarité (admis ici).</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Gram-Schmidt"
            icon={Lightbulb}
            stars={2}
          />
          <ExerciseCard
            id="24.2"
            title="Orthonormalisation"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Orthonormaliser la famille <LatexRenderer latex="u_1=(1,1,0), u_2=(1,0,1), u_3=(0,1,1)" /> dans <LatexRenderer latex="\mathbb{R}^3" /> canonique.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="e_1 = \frac{u_1}{\|u_1\|} = \frac{1}{\sqrt{2}}(1,1,0)" />.</p>
                <p>2. <LatexRenderer latex="e'_2 = u_2 - \langle u_2, e_1 \rangle e_1 = (1,0,1) - \frac{1}{2}(1,1,0) = (1/2, -1/2, 1)" />. On normalise : <LatexRenderer latex="e_2 = \frac{1}{\sqrt{6}}(1,-1,2)" />.</p>
                <p>3. Idem pour <LatexRenderer latex="e_3" />. On trouve <LatexRenderer latex="e_3 = \frac{1}{\sqrt{3}}(1,1,1)" /> (ou similaire selon l'ordre, correction simplifiée).</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Applications"
            icon={Crown}
            stars={3}
          />
          <ExerciseCard
            id="24.3"
            title="Minimisation"
            difficulty="Difficile"
            content={
              <div className="space-y-4">
                <p>Trouver <LatexRenderer latex="a, b" /> minimisant <LatexRenderer latex="\int_0^1 (t^2 - at - b)^2 dt" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>C'est la projection orthogonale de <LatexRenderer latex="X^2" /> sur <LatexRenderer latex="\mathbb{R}_1[X]" /> pour le produit scalaire <LatexRenderer latex="\langle P,Q \rangle = \int_0^1 P(t)Q(t)dt" />.</p>
                <p>On orthonormalise la base <LatexRenderer latex="(1, X)" /> pour obtenir <LatexRenderer latex="(e_0, e_1)" />.</p>
                <p>Puis on projette <LatexRenderer latex="X^2" />. Résultat : <LatexRenderer latex="a=1, b=-1/6" /> (valeurs indicatives).</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3AlgebreBilineaireExercicesPage;
