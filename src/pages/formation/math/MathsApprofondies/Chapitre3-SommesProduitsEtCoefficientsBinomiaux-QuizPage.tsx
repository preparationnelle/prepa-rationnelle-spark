import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre3QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre3SommesProduitsEtCoefficientsBinomiauxQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Sommes, produits & coefficients binomiaux"
      description="Quiz interactif pour tester vos connaissances sur les sommes, produits et coefficients binomiaux"
      slug="sommes-produits-coefficients-binomiaux"
      activeSection="quiz"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "ensembles-et-applications",
        title: "Ensembles et applications"
      }}
      nextChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
    >
      <div className="space-y-6">
        <MathQuiz
          title="Quiz - Sommes, Produits & Coefficients Binomiaux"
          questions={chapitre3QuizQuestions}
          chapterNumber={3}
          chapterTitle="Sommes, Produits & Coefficients Binomiaux"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxQuizPage;