import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { chapitre11QuizQuestions } from '@/data/mathQuizQuestions';

const Chapitre11OptimisationMultivarieeAvanceeQuizPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Quiz interactif sur l'optimisation multivariée, les multiplicateurs de Lagrange et la théorie des extrema"
      slug="
      optimisation-multivariee-avancee"
      showNavigation={true}
      
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              🎯
            </span>
            Quiz - Optimisation Multivariée Avancée
          </h2>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur les fonctions de plusieurs variables, la matrice Hessienne,
            les conditions d'ordre 2, les multiplicateurs de Lagrange et l'optimisation sous contraintes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Questions :</span> 10
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Temps estimé :</span> 15-20 min
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">Niveau :</span> Avancé
            </div>
          </div>
        </div>

        {/* Citation inspirante */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
          <div className="text-center italic text-indigo-700">
            <p className="text-lg mb-2">
              "La mathématique ne constitue pas une terre aride dans l'univers scientifique. Elle est à la fois reine, servante et fille des sciences de l'observation."
            </p>
            <p className="text-sm font-semibold">
              — Gustave Choquet
            </p>
          </div>
        </div>

        <MathQuiz
          title="Quiz - Optimisation Multivariée Avancée"
          questions={chapitre11QuizQuestions}
          chapterNumber={11}
          chapterTitle="Optimisation Multivariée Avancée"
        />

        {/* Ressources complémentaires */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ressources complémentaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-600 mb-2">📚 Cours théorique</h4>
              <p className="text-sm text-gray-600">
                Revoyez les concepts fondamentaux : matrice Hessienne, théorème de Schwarz, développement limité d'ordre 2.
              </p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-green-600 mb-2">✏️ Exercices pratiques</h4>
              <p className="text-sm text-gray-600">
                Pratiquez avec des exercices sur les multiplicateurs de Lagrange et l'optimisation sous contraintes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeQuizPage;
