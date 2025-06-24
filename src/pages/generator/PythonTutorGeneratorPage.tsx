
import React from 'react';
import { PythonTutorGenerator } from '@/components/generator/PythonTutorGenerator';

const PythonTutorGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Assistant Python IA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analyse ton code Python, détecte les erreurs et génère une version optimisée avec conseils adaptés à ton niveau
        </p>
      </div>

      <PythonTutorGenerator />
    </div>
  );
};

export default PythonTutorGeneratorPage;
