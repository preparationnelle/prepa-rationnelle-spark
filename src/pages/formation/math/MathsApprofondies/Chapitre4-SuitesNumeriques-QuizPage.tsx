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
    
      
    >
      <div className="space-y-6"
      
    >
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6"
      
    >
          <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-3"
      
    >
            <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
      
    >
              📈
            </span
      
    >
            Quiz - Suites Numériques
          </h2
      
    >
          <p className="text-gray-700 mb-4"
      
    >
            Testez vos connaissances sur les suites arithmétiques, géométriques, 
            la convergence, les suites bornées et monotones.
          </p
      
    >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
      
    >
            <div className="bg-white p-3 rounded border border-teal-100"
      
    >
              <span className="font-semibold text-teal-700">Questions :</span> 5
            </div
      
    >
            <div className="bg-white p-3 rounded border border-teal-100"
      
    >
              <span className="font-semibold text-teal-700">Temps estimé :</span> 10-15 min
            </div
      
    >
            <div className="bg-white p-3 rounded border border-teal-100"
      
    >
              <span className="font-semibold text-teal-700">Niveau :</span> Intermédiaire
            </div
      
    >
          </div
      
    >
        </div
      
    >

        <MathQuiz
          title="Quiz - Suites Numériques"
          questions={chapitre4QuizQuestions}
          chapterNumber={4}
          chapterTitle="Suites Numériques"
        /
      
    >
      </div
      
    >
    </MathChapterTemplate
      
    >
  );
};

export default Chapitre4SuitesNumeriquesQuizPage; 