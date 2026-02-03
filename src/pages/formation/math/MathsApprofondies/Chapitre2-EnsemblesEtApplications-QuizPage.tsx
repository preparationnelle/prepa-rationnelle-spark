import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre2QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre2EnsemblesEtApplicationsQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Ensembles et applications"
      description="Quiz interactif pour tester vos connaissances sur la théorie des ensembles et les applications"
      slug="ensembles-et-applications"
      activeSection="quiz"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "elements-de-logique",
        title: "Éléments de logique"
      }}
      nextChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & coefficients binomiaux"
      }}
    >
      <div className="space-y-6">
        <MathQuiz
          title="Quiz - Ensembles & Applications"
          questions={chapitre2QuizQuestions}
          chapterNumber={2}
          chapterTitle="Ensembles et Applications"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre2EnsemblesEtApplicationsQuizPage;