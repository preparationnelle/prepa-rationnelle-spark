
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Trash2 } from 'lucide-react';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

interface SavedFlashcardsListProps {
  language: 'fr' | 'en';
  savedFlashcards: FlashcardData[];
  onDelete: (id: string) => void;
}

export const SavedFlashcardsList = ({ 
  language, 
  savedFlashcards, 
  onDelete 
}: SavedFlashcardsListProps) => {
  if (savedFlashcards.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Save className="h-5 w-5" />
            {language === 'fr' ? 'Flashcards sauvegardées' : 'Saved Flashcards'}
          </span>
          <span className="text-sm text-muted-foreground">
            {savedFlashcards.length} {language === 'fr' ? 'éléments' : 'items'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {savedFlashcards.map((flashcard) => (
            <div key={flashcard.id} className="border rounded-lg p-3 space-y-2">
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div>
                    <span className="text-sm font-medium">{flashcard.word_fr}</span>
                    <p className="text-xs text-muted-foreground">🇫🇷</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">{flashcard.word_en}</span>
                    <p className="text-xs text-muted-foreground">🇬🇧</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(flashcard.id!)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
