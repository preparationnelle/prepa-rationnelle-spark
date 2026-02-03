import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre6QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre6DerivationQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Quiz interactif pour tester vos connaissances sur la dérivation, les formules de dérivation, les points critiques et l'interprétation géométrique."
      slug="derivation"
      activeSection="quiz"
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
      <div className="space-y-6">
        <MathQuiz
          title="Quiz - Dérivation"
          questions={chapitre6QuizQuestions}
          chapterNumber={6}
          chapterTitle="Dérivation"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre6DerivationQuizPage;