import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { algebreBilineaireFlashcards } from '@/data/mathFlashcardsData';

const Chapitre3AlgebreBilineaireFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Algèbre bilinéaire"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="algebre-bilineaire"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={algebreBilineaireFlashcards}
        title="Algèbre bilinéaire"
        chapterNumber={3}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre3AlgebreBilineaireFlashcardsPage;
