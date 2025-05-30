
import React from 'react';
import { FlashcardInput } from './FlashcardInput';
import { GeneratedFlashcardsList } from './GeneratedFlashcardsList';
import { SavedFlashcardsList } from './SavedFlashcardsList';
import { useFlashcardGenerator } from '@/hooks/useFlashcardGenerator';

interface FlashcardGeneratorProps {
  language: 'fr' | 'en';
  onFlashcardCreated?: () => void;
}

export const FlashcardGenerator = ({ language, onFlashcardCreated }: FlashcardGeneratorProps) => {
  const {
    inputWord,
    setInputWord,
    inputLanguage,
    setInputLanguage,
    isGenerating,
    generatedFlashcards,
    savedFlashcards,
    generateFlashcard,
    deleteFlashcard,
    clearGeneratedHistory,
  } = useFlashcardGenerator(language, onFlashcardCreated);

  return (
    <div className="space-y-6">
      <FlashcardInput
        language={language}
        inputWord={inputWord}
        setInputWord={setInputWord}
        inputLanguage={inputLanguage}
        setInputLanguage={setInputLanguage}
        isGenerating={isGenerating}
        onGenerate={generateFlashcard}
      />

      <GeneratedFlashcardsList
        language={language}
        generatedFlashcards={generatedFlashcards}
        onClearHistory={clearGeneratedHistory}
      />

      <SavedFlashcardsList
        language={language}
        savedFlashcards={savedFlashcards}
        onDelete={deleteFlashcard}
      />
    </div>
  );
};
