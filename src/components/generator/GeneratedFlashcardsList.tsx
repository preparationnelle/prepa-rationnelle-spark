
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { History, Sparkles, Lightbulb, Tag } from 'lucide-react';
import { UniversalFlashcard } from '@/hooks/useFlashcardGenerator';

interface GeneratedFlashcardsListProps {
  language: 'fr' | 'en';
  generatedFlashcards: UniversalFlashcard[];
  onClearHistory: () => void;
}

export const GeneratedFlashcardsList = ({
  language,
  generatedFlashcards,
  onClearHistory
}: GeneratedFlashcardsListProps) => {
  if (generatedFlashcards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {language === 'fr' ? 'Aucune flashcard générée' : 'No flashcards generated'}
        </h3>
        <p className="text-gray-500 max-w-sm mt-2">
          {language === 'fr'
            ? 'Créez votre première carte ci-dessus.'
            : 'Create your first card above.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
            <History className="h-4 w-4 text-orange-500" />
            {language === 'fr' ? 'Flashcards générées' : 'Generated Flashcards'}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {generatedFlashcards.length} {language === 'fr' ? 'carte(s) dans cette session' : 'card(s) in this session'}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearHistory}
          className="text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          {language === 'fr' ? 'Effacer tout' : 'Clear all'}
        </Button>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {generatedFlashcards.map((flashcard, index) => (
          <div
            key={flashcard.id || index}
            className={`relative border border-gray-100 dark:border-gray-800 rounded-2xl p-6 transition-all hover:shadow-md ${index === 0
                ? 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-200/50 dark:border-orange-800/30'
                : 'bg-white dark:bg-gray-900'
              }`}
          >
            {index === 0 && (
              <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                ✨ {language === 'fr' ? 'Nouveau' : 'New'}
              </span>
            )}

            {/* Category Badge */}
            {flashcard.category && (
              <Badge
                variant="outline"
                className="mb-3 text-xs bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                {flashcard.category}
              </Badge>
            )}

            {/* Front / Back */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-[10px]">Q</span>
                  {language === 'fr' ? 'Question / Recto' : 'Question / Front'}
                </div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{flashcard.front}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-[10px]">R</span>
                  {language === 'fr' ? 'Réponse / Verso' : 'Answer / Back'}
                </div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{flashcard.back}</p>
              </div>
            </div>

            {/* Hint */}
            {flashcard.hint && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span className="italic">{flashcard.hint}</span>
                </div>
              </div>
            )}

            {/* Tags */}
            {flashcard.tags && flashcard.tags.length > 0 && (
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <Tag className="w-3 h-3 text-gray-400" />
                {flashcard.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Source indicator */}
            <div className="mt-3 text-xs text-gray-400 flex items-center gap-1">
              {flashcard.source === 'ai_generated' ? (
                <>
                  <Sparkles className="w-3 h-3" />
                  {language === 'fr' ? 'Générée par IA' : 'AI Generated'}
                </>
              ) : (
                <>
                  {language === 'fr' ? 'Créée manuellement' : 'Manually created'}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
