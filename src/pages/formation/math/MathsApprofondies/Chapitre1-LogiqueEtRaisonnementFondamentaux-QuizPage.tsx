import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre1QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre1LogiqueEtRaisonnementFondamentauxQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Logique & raisonnement fondamentaux"
      description="Quiz interactif pour tester vos connaissances sur la logique et le raisonnement mathématique"
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              🧠
            </span>
            Quiz - Logique & Raisonnement
          </h2>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur les éléments de logique, les connecteurs logiques, 
            les quantificateurs et les différents types de raisonnement mathématique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-purple-100">
              <span className="font-semibold text-purple-700">Questions :</span> 5
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <span className="font-semibold text-purple-700">Temps estimé :</span> 10-15 min
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <span className="font-semibold text-purple-700">Niveau :</span> Intermédiaire
            </div>
          </div>
        </div>

        <MathQuiz
          title="Quiz - Logique & Raisonnement Fondamentaux"
          questions={chapitre1QuizQuestions}
          chapterNumber={1}
          chapterTitle="Logique & Raisonnement Fondamentaux"
        />
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxQuizPage; 