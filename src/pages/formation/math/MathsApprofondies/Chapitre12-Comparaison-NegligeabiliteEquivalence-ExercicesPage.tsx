import React from 'react';
import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre12ComparaisonNegligeabiliteEquivalenceExercicesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Comparaison — négligeabilité & équivalence"
      description="Exercices sur les relations de comparaison, équivalents, et développements limités."
      slug="comparaison-negligeabilite-equivalence"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation-multivariee-avancee",
        title: "Optimisation Multivariée"
      }}
      nextChapter={{
        slug: "convergences-approximations",
        title: "Convergences & Approximations"
      }}
    >
      <Card className="border border-slate-200 shadow-sm bg-slate-50">
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-200 shadow-sm">
            <Construction className="w-10 h-10 text-slate-400" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Contenu en construction
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Les exercices pour ce chapitre seront bientôt disponibles.
          </p>
        </div>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre12ComparaisonNegligeabiliteEquivalenceExercicesPage;
