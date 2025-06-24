
import React from 'react';
import { PythonExerciseGenerator } from '@/components/generator/PythonExerciseGenerator';

const PythonExercisesGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Exercices Python
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Génère des exercices pratiques Python (matrice, algèbre…) et complète tes fonctions !
        </p>
      </div>

      <PythonExerciseGenerator />
    </div>
  );
};

export default PythonExercisesGeneratorPage;
