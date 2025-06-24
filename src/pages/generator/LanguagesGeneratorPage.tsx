
import React, { useState } from 'react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';

const LanguagesGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur de Paragraphes de Langues
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé
        </p>
      </div>

      <LanguageParagraphGenerator language={language} />
    </div>
  );
};

export default LanguagesGeneratorPage;
