import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre5QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre5FonctionsUneVariableReelleQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Quiz interactif pour tester vos connaissances sur les fonctions d'une variable réelle, la parité, la périodicité et la continuité."
      slug="fonctions-une-variable-reelle"
      activeSection="quiz"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
      nextChapter={{
        slug: "continuite-derivabilite",
        title: "Continuité & Dérivabilité"
      }}
    >
      <div className="space-y-6">
        <MathQuiz
          title="Quiz - Fonctions d'une Variable Réelle"
          questions={chapitre5QuizQuestions}
          chapterNumber={5}
          chapterTitle="Fonctions d'une Variable Réelle"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre5FonctionsUneVariableReelleQuizPage;