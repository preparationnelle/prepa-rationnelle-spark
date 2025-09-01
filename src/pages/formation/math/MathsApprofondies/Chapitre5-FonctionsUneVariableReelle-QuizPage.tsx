import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre5QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre5FonctionsUneVariableReelleQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Quiz interactif pour tester vos connaissances sur les fonctions d'une variable réelle"
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              f(x)
            </span>
            Quiz - Fonctions d'une Variable Réelle
          </h2>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur les propriétés des fonctions, la parité, 
            la périodicité, la continuité et la bijectivité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-cyan-100">
              <span className="font-semibold text-cyan-700">Questions :</span> 5
            </div>
            <div className="bg-white p-3 rounded border border-cyan-100">
              <span className="font-semibold text-cyan-700">Temps estimé :</span> 10-15 min
            </div>
            <div className="bg-white p-3 rounded border border-cyan-100">
              <span className="font-semibold text-cyan-700">Niveau :</span> Intermédiaire
            </div>
          </div>
        </div>

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