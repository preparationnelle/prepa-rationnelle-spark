
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, BookOpen, Brain, Play } from 'lucide-react';
import { FlashcardInput } from './FlashcardInput';
import { GeneratedFlashcardsList } from './GeneratedFlashcardsList';
import { SavedFlashcardsList } from './SavedFlashcardsList';
import { FlashcardReviewSystem } from '@/components/flashcards/FlashcardReviewSystem';
import { AutoPhraseGenerator } from './AutoPhraseGenerator';
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

  const handlePhraseGenerated = (phrase: string, reference: string) => {
    // Optionellement, on peut pré-remplir le champ de saisie avec la phrase générée
    // setInputWord(phrase.split(' ')[0]); // Premier mot de la phrase par exemple
  };

  const handleGenerate = async () => {
    await generateFlashcard(inputWord, inputLanguage);
  };

  return (
    <div className="space-y-8">
      {/* Zone de génération automatique de phrases */}
      <AutoPhraseGenerator 
        language={language} 
        onPhraseGenerated={handlePhraseGenerated}
      />

      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {language === 'fr' ? 'Générateur de Flashcards Intelligentes' : 'Smart Flashcard Generator'}
              </div>
              <div className="text-purple-100 text-sm font-normal mt-1">
                {language === 'fr' ? 'Créez des flashcards optimisées pour vos révisions' : 'Create optimized flashcards for your reviews'}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <FlashcardInput
            language={language}
            inputWord={inputWord}
            setInputWord={setInputWord}
            inputLanguage={inputLanguage}
            setInputLanguage={setInputLanguage}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 h-12">
          <TabsTrigger value="generated" className="text-base py-3">
            <Brain className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Flashcards Générées' : 'Generated Flashcards'}
          </TabsTrigger>
          <TabsTrigger value="saved" className="text-base py-3">
            <BookOpen className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Flashcards Sauvées' : 'Saved Flashcards'}
          </TabsTrigger>
          <TabsTrigger value="review" className="text-base py-3">
            <Play className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Révision' : 'Review'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="generated">
          <GeneratedFlashcardsList
            language={language}
            generatedFlashcards={generatedFlashcards}
            onClearHistory={clearGeneratedHistory}
          />
        </TabsContent>
        
        <TabsContent value="saved">
          <SavedFlashcardsList
            language={language}
            savedFlashcards={savedFlashcards}
            onDelete={deleteFlashcard}
          />
        </TabsContent>
        
        <TabsContent value="review">
          <FlashcardReviewSystem
            language={language}
            refreshTrigger={savedFlashcards.length}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
