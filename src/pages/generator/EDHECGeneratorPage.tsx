
import React from 'react';
import { EDHECAutomation } from '@/components/generator/EDHECAutomation';

const EDHECGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Générateur de Mots EDHEC
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générateur de mots aléatoires pour votre présentation EDHEC
        </p>
      </div>

      <EDHECAutomation />
    </div>
  );
};

export default EDHECGeneratorPage;
