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
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              Σ
            </span>
            Quiz - Sommes, Produits & Coefficients Binomiaux
          </h2>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur les formules de sommes, les produits, 
            les coefficients binomiaux et la formule du binôme de Newton.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-indigo-100">
              <span className="font-semibold text-indigo-700">Questions :</span> 5
            </div>
            <div className="bg-white p-3 rounded border border-indigo-100">
              <span className="font-semibold text-indigo-700">Temps estimé :</span> 10-15 min
            </div>
            <div className="bg-white p-3 rounded border border-indigo-100">
              <span className="font-semibold text-indigo-700">Niveau :</span> Intermédiaire
            </div>
          </div>
        </div>

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