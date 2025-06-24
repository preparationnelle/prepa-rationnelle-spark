
import React from 'react';
import { MathTutorGenerator } from '@/components/generator/MathTutorGenerator';

const MathTutorGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Prof de Maths Virtuel
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Demande un indice, une explication ou la solution sur un exercice mathématiques
        </p>
      </div>

      <MathTutorGenerator />
    </div>
  );
};

export default MathTutorGeneratorPage;
