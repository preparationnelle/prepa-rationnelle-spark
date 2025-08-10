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
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              🔗
            </span>
            Quiz - Ensembles & Applications
          </h2>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur la théorie des ensembles, les opérations ensemblistes, 
            les applications et leurs propriétés (injectivité, surjectivité, bijectivité).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Questions :</span> 5
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Temps estimé :</span> 10-15 min
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Niveau :</span> Intermédiaire
            </div>
          </div>
        </div>

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