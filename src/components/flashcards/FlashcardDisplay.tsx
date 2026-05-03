
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Lightbulb } from 'lucide-react';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  front?: string | null;
  back?: string | null;
  hint?: string | null;
  category?: string | null;
  created_at: string;
}

interface ReviewData {
  id?: string;
  status: 'new' | 'learning' | 'review' | 'mastered';
  difficulty: number;
  review_count: number;
  correct_count: number;
  next_review_date: string;
}

interface FlashcardDisplayProps {
  language: 'fr' | 'en';
  card: FlashcardData;
  reviewData?: ReviewData;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashcardDisplay = ({
  language,
  card,
  reviewData,
  isFlipped,
  onFlip,
}: FlashcardDisplayProps) => {
  // Handle both legacy (word_fr/word_en) and universal (front/back) formats
  const frontContent = card.front || card.word_fr || '';
  const backContent = card.back || card.word_en || '';
  const hintContent = card.hint || (card.sentence_fr && card.sentence_en ? `${card.sentence_fr} / ${card.sentence_en}` : null);
  const isLegacyFormat = !card.front && card.word_fr;

  return (
    <Card
      className="min-h-[400px] cursor-pointer bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:shadow-2xl"
      onClick={onFlip}
    >
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          {/* Card status info */}
          {reviewData && (
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              <Badge
                variant={reviewData.status === 'mastered' ? 'default' : 'secondary'}
                className={reviewData.status === 'mastered' ? 'bg-green-500' : ''}
              >
                {reviewData.status === 'mastered' ? '🏆 Maîtrisé' :
                  reviewData.status === 'learning' ? '📚 Apprentissage' :
                    reviewData.status === 'review' ? '🔄 Révision' : '🆕 Nouveau'}
              </Badge>
              <Badge variant="outline" className="border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-400">
                {language === 'fr' ? 'Difficulté' : 'Difficulty'}: {reviewData.difficulty}/5
              </Badge>
              <Badge variant="outline">
                {language === 'fr' ? 'Révisions' : 'Reviews'}: {reviewData.review_count}
              </Badge>
              <Badge
                variant={reviewData.correct_count / Math.max(1, reviewData.review_count) >= 0.8 ? 'default' : 'secondary'}
                className={reviewData.correct_count / Math.max(1, reviewData.review_count) >= 0.8 ? 'bg-green-500' : ''}
              >
                {language === 'fr' ? 'Réussite' : 'Success'}: {Math.round((reviewData.correct_count / Math.max(1, reviewData.review_count)) * 100)}%
              </Badge>
            </div>
          )}

          {/* Category badge */}
          {card.category && (
            <div className="flex justify-center">
              <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                {card.category}
              </Badge>
            </div>
          )}

          <div className="flex justify-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="flex items-center gap-2 text-gray-500 hover:text-orange-500"
            >
              {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {language === 'fr' ? 'Retourner' : 'Flip'}
            </Button>
          </div>

          {!isFlipped ? (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-xs font-bold">Q</span>
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot Français' : 'French Word')
                  : (language === 'fr' ? 'Question' : 'Question')
                }
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-relaxed">{frontContent}</h2>

              {/* Show sentence hint for legacy cards */}
              {isLegacyFormat && card.sentence_fr && (
                <p className="text-xl text-gray-600 dark:text-gray-400 italic bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  "{card.sentence_fr}"
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xs font-bold">R</span>
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot Anglais' : 'English Word')
                  : (language === 'fr' ? 'Réponse' : 'Answer')
                }
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-relaxed">{backContent}</h2>

              {/* Show sentence hint for legacy cards */}
              {isLegacyFormat && card.sentence_en && (
                <p className="text-xl text-gray-600 dark:text-gray-400 italic bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30">
                  "{card.sentence_en}"
                </p>
              )}

              {/* Show hint for universal cards */}
              {!isLegacyFormat && hintContent && (
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                  <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="italic">{hintContent}</span>
                </div>
              )}
            </div>
          )}

          <div className="pt-4 text-sm text-gray-400">
            {language === 'fr' ? 'Cliquez pour retourner la carte' : 'Click to flip the card'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
