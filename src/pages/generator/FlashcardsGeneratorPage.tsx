
import React, { useState } from 'react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';

const FlashcardsGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur de Flashcards Intelligentes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée
        </p>
      </div>

      <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
    </div>
  );
};

export default FlashcardsGeneratorPage;
