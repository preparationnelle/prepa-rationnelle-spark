import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre6QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre6DerivationQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Quiz interactif pour tester vos connaissances sur la dérivation"
    
      
    >
      <div className="space-y-6"
      
    >
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6"
      
    >
          <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-3"
      
    >
            <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
      
    >
              d/dx
            </span
      
    >
            Quiz - Dérivation
          </h2
      
    >
          <p className="text-gray-700 mb-4"
      
    >
            Testez vos connaissances sur la dérivation, les formules de dérivation, 
            les points critiques et l'interprétation géométrique.
          </p
      
    >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
      
    >
            <div className="bg-white p-3 rounded border border-emerald-100"
      
    >
              <span className="font-semibold text-emerald-700">Questions :</span> 5
            </div
      
    >
            <div className="bg-white p-3 rounded border border-emerald-100"
      
    >
              <span className="font-semibold text-emerald-700">Temps estimé :</span> 10-15 min
            </div
      
    >
            <div className="bg-white p-3 rounded border border-emerald-100"
      
    >
              <span className="font-semibold text-emerald-700">Niveau :</span> Intermédiaire
            </div
      
    >
          </div
      
    >
        </div
      
    >

        <MathQuiz
          title="Quiz - Dérivation"
          questions={chapitre6QuizQuestions}
          chapterNumber={6}
          chapterTitle="Dérivation"
        /
      
    >
      </div
      
    >
    </MathChapterTemplate
      
    >
  );
};

export default Chapitre6DerivationQuizPage; 