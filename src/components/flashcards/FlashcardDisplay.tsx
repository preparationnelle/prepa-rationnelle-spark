import React from 'react';
import { Button } from '@/components/ui/button';
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
  const frontContent = card.front || card.word_fr || '';
  const backContent = card.back || card.word_en || '';
  const hintContent = card.hint || (card.sentence_fr && card.sentence_en ? `${card.sentence_fr} / ${card.sentence_en}` : null);
  const isLegacyFormat = !card.front && card.word_fr;

  return (
    <div
      className="min-h-[400px] cursor-pointer bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(26,26,24,0.08)]"
      onClick={onFlip}
    >
      <div className="h-[3px] w-full bg-pr-orange" />
      <div className="p-8">
        <div className="text-center space-y-6">
          {/* Card status info */}
          {reviewData && (
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              <Badge
                className={
                  reviewData.status === 'mastered'
                    ? 'bg-pr-orange text-white border-0'
                    : 'bg-pr-orange-pale text-pr-orange-dark border border-pr-orange/20'
                }
              >
                {reviewData.status === 'mastered' ? '🏆 Maîtrisé' :
                  reviewData.status === 'learning' ? '📚 Apprentissage' :
                    reviewData.status === 'review' ? '🔄 Révision' : '🆕 Nouveau'}
              </Badge>
              <Badge variant="outline" className="border-pr-gray-light text-pr-gray-dark font-dm-sans">
                {language === 'fr' ? 'Difficulté' : 'Difficulty'} : {reviewData.difficulty}/5
              </Badge>
              <Badge variant="outline" className="border-pr-gray-light text-pr-gray-dark font-dm-sans">
                {language === 'fr' ? 'Révisions' : 'Reviews'} : {reviewData.review_count}
              </Badge>
              <Badge
                className={
                  reviewData.correct_count / Math.max(1, reviewData.review_count) >= 0.8
                    ? 'bg-pr-orange text-white border-0'
                    : 'bg-pr-gray-bg text-pr-gray-dark border border-pr-gray-light'
                }
              >
                {language === 'fr' ? 'Réussite' : 'Success'} : {Math.round((reviewData.correct_count / Math.max(1, reviewData.review_count)) * 100)}%
              </Badge>
            </div>
          )}

          {/* Category badge */}
          {card.category && (
            <div className="flex justify-center">
              <Badge variant="outline" className="text-xs bg-pr-gray-bg border-pr-gray-light text-pr-gray-dark font-dm-sans">
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
              className="flex items-center gap-2 text-pr-gray-mid hover:text-pr-orange-dark hover:bg-pr-orange-pale"
            >
              {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {language === 'fr' ? 'Retourner' : 'Flip'}
            </Button>
          </div>

          {!isFlipped ? (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pr-orange-pale text-pr-orange-dark text-sm font-medium font-dm-sans">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold">Q</span>
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot Français' : 'French Word')
                  : (language === 'fr' ? 'Question' : 'Question')
                }
              </div>
              <h2 className="font-dm-serif text-4xl text-pr-black leading-relaxed">{frontContent}</h2>

              {isLegacyFormat && card.sentence_fr && (
                <p className="text-xl text-pr-gray-dark italic bg-pr-gray-bg p-4 rounded-xl border border-pr-gray-light font-dm-sans">
                  « {card.sentence_fr} »
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pr-orange-pale text-pr-orange-dark text-sm font-medium font-dm-sans">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold">R</span>
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot Anglais' : 'English Word')
                  : (language === 'fr' ? 'Réponse' : 'Answer')
                }
              </div>
              <h2 className="font-dm-serif text-4xl text-pr-black leading-relaxed">{backContent}</h2>

              {isLegacyFormat && card.sentence_en && (
                <p className="text-xl text-pr-gray-dark italic bg-pr-gray-bg p-4 rounded-xl border border-pr-gray-light font-dm-sans">
                  « {card.sentence_en} »
                </p>
              )}

              {!isLegacyFormat && hintContent && (
                <div className="flex items-center justify-center gap-2 text-pr-gray-dark bg-pr-orange-pale/40 p-4 rounded-xl border border-pr-orange/20 font-dm-sans">
                  <Lightbulb className="w-5 h-5 text-pr-orange shrink-0" />
                  <span className="italic">{hintContent}</span>
                </div>
              )}
            </div>
          )}

          <div className="pt-4 text-sm text-pr-gray-mid font-dm-sans">
            {language === 'fr' ? 'Clique pour retourner la carte' : 'Click to flip the card'}
          </div>
        </div>
      </div>
    </div>
  );
};
