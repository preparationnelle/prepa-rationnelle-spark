import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { algebreBilineaireEspacesEuclidiensFlashcards } from '@/data/mathFlashcardsData';

const Chapitre8AlgebreBilineaireEspacesEuclidiensFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={8}
      chapterTitle="Algèbre bilinéaire et espaces euclidiens"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="algebre-bilineaire-espaces-euclidiens"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={algebreBilineaireEspacesEuclidiensFlashcards}
        title="Algèbre bilinéaire et espaces euclidiens"
        chapterNumber={8}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre8AlgebreBilineaireEspacesEuclidiensFlashcardsPage;
