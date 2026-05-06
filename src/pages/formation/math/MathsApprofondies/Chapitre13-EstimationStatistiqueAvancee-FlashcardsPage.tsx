import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { estimationStatistiqueAvanceeFlashcards } from '@/data/mathFlashcardsData';

const Chapitre13EstimationStatistiqueAvanceeFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={13}
      chapterTitle="Estimation statistique avancée"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="estimation-statistique-avancee"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={estimationStatistiqueAvanceeFlashcards}
        title="Estimation statistique avancée"
        chapterNumber={13}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre13EstimationStatistiqueAvanceeFlashcardsPage;
