import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre4QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre4SuitesNumeriquesQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={4}
      chapterTitle="Suites numériques"
      description="Quiz interactif pour tester vos connaissances sur les suites numériques"
      slug="suites-numeriques"
      activeSection="quiz"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & binôme"
      }}
      nextChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
    >
      <div className="space-y-6">
        <MathQuiz
          title="Quiz - Suites Numériques"
          questions={chapitre4QuizQuestions}
          chapterNumber={4}
          chapterTitle="Suites Numériques"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4SuitesNumeriquesQuizPage;