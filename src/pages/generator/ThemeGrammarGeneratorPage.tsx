
import React from 'react';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Thème Grammatical
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générateur et correcteur de thèmes de traduction : notation détaillée instantanée
        </p>
      </div>

      <ThemeGrammaticalGenerator />
    </div>
  );
};

export default ThemeGrammarGeneratorPage;
