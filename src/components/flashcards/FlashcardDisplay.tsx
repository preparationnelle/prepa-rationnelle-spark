import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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

const statusLabel = (status: ReviewData['status'], language: 'fr' | 'en') => {
  if (language === 'fr') {
    switch (status) {
      case 'mastered': return 'Maîtrisée';
      case 'learning': return 'Apprentissage';
      case 'review':   return 'Révision';
      default:         return 'Nouveau';
    }
  }
  switch (status) {
    case 'mastered': return 'Mastered';
    case 'learning': return 'Learning';
    case 'review':   return 'Reviewing';
    default:         return 'New';
  }
};

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
    <Card
      onClick={onFlip}
      className="min-h-[400px] bg-white border-slate-200 shadow-sm transition-all duration-300 relative overflow-hidden group cursor-pointer hover:shadow-md"
    >
      <CardContent className="h-full p-8 sm:p-12 flex flex-col items-center justify-center text-center">
        {card.category && (
          <Badge
            variant="outline"
            className="absolute top-6 left-6 px-2.5 py-0.5 text-[10px] uppercase tracking-wider border-slate-200 text-slate-500 font-normal"
          >
            {card.category}
          </Badge>
        )}

        {reviewData && (
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span
              className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                reviewData.status === 'mastered'
                  ? 'bg-emerald-50 text-emerald-700'
                  : reviewData.status === 'learning'
                  ? 'bg-amber-50 text-amber-700'
                  : reviewData.status === 'review'
                  ? 'bg-slate-100 text-slate-600'
                  : 'bg-pr-gray-bg text-pr-black'
              }`}
            >
              {statusLabel(reviewData.status, language)}
            </span>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-2xl pt-6">
          {!isFlipped ? (
            <div className="animate-in fade-in zoom-in-95 duration-300 w-full">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4">
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot français' : 'French word')
                  : (language === 'fr' ? 'Question' : 'Question')}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 leading-relaxed">
                {frontContent}
              </h2>
              {isLegacyFormat && card.sentence_fr && (
                <p className="text-base text-slate-500 italic mt-6 leading-relaxed">
                  « {card.sentence_fr} »
                </p>
              )}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 w-full">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4">
                {isLegacyFormat
                  ? (language === 'fr' ? 'Mot anglais' : 'English word')
                  : (language === 'fr' ? 'Réponse' : 'Answer')}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 leading-relaxed">
                {backContent}
              </h2>

              {isLegacyFormat && card.sentence_en && (
                <p className="text-base text-slate-500 italic mt-6 leading-relaxed">
                  « {card.sentence_en} »
                </p>
              )}

              {!isLegacyFormat && hintContent && (
                <div className="mt-6 flex items-start gap-3 text-left p-4 rounded-lg bg-pr-gray-bg border border-pr-black-soft/40">
                  <Lightbulb className="w-4 h-4 text-pr-black shrink-0 mt-0.5" />
                  <span className="text-sm text-pr-black italic leading-relaxed">{hintContent}</span>
                </div>
              )}
            </div>
          )}

          <div className="mt-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full"
            >
              {isFlipped ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {language === 'fr' ? 'Retourner' : 'Flip'}
            </Button>
          </div>
        </div>

        {reviewData && (
          <div className="mt-8 pt-6 border-t border-slate-100 w-full flex justify-center gap-6 text-[11px] uppercase tracking-wider text-slate-400 font-mono">
            <span>
              {language === 'fr' ? 'Difficulté' : 'Difficulty'} · {reviewData.difficulty}/5
            </span>
            <span>
              {language === 'fr' ? 'Révisions' : 'Reviews'} · {reviewData.review_count}
            </span>
            <span>
              {language === 'fr' ? 'Réussite' : 'Success'} ·{' '}
              {Math.round((reviewData.correct_count / Math.max(1, reviewData.review_count)) * 100)}%
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlashcardDisplay;
