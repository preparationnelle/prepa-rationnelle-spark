
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/context/ProgressContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';

const FlashcardsPage = () => {
  const { trackPageVisit } = useProgress();
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  // Track page visit
  useEffect(() => {
    trackPageVisit('flashcards');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {language === 'fr' ? 'Générateur de Flashcards' : 'Flashcard Generator'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Créez des flashcards bilingues pour améliorer votre vocabulaire'
              : 'Create bilingual flashcards to improve your vocabulary'
            }
          </p>
        </div>
        
        <ToggleGroup 
          type="single" 
          value={language} 
          onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
        >
          <ToggleGroupItem value="fr" aria-label="Français">
            🇫🇷
          </ToggleGroupItem>
          <ToggleGroupItem value="en" aria-label="English">
            🇬🇧
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <FlashcardGenerator language={language} />
    </div>
  );
};

export default FlashcardsPage;
