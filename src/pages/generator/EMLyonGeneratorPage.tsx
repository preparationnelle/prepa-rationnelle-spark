
import React from 'react';
import { EMLyonAutomation } from '@/components/generator/EMLyonAutomation';

const EMLyonGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
          Questions d'Entretien EM Lyon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
        </p>
      </div>

      <EMLyonAutomation />
    </div>
  );
};

export default EMLyonGeneratorPage;
