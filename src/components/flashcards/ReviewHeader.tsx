import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, RotateCcw, RefreshCw } from 'lucide-react';

interface ReviewHeaderProps {
  language: 'fr' | 'en';
  currentIndex: number;
  totalCards: number;
  dueForReviewCount: number;
  difficultCount: number;
  showingDueForReview: boolean;
  showingDifficult: boolean;
  onToggleDueForReview: () => void;
  onToggleDifficult: () => void;
  onReset: () => void;
  onRefresh: () => void;
}

export const ReviewHeader = ({
  language,
  currentIndex,
  totalCards,
  dueForReviewCount,
  difficultCount,
  showingDueForReview,
  showingDifficult,
  onToggleDueForReview,
  onToggleDifficult,
  onReset,
  onRefresh,
}: ReviewHeaderProps) => {
  return (
    <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-orange" />
      <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="flex items-center gap-2 font-dm-serif text-xl text-pr-black flex-wrap">
              <BookOpen className="h-5 w-5 text-pr-orange" />
              {language === 'fr' ? 'Système de révision intelligent' : 'Intelligent Review System'}
              {showingDueForReview && (
                <Badge className="bg-pr-orange text-white border-0 font-dm-sans">
                  {language === 'fr' ? 'À réviser' : 'Due for Review'}
                </Badge>
              )}
              {showingDifficult && (
                <Badge className="bg-pr-orange-pale text-pr-orange-dark border border-pr-orange/20 font-dm-sans">
                  {language === 'fr' ? 'Mode difficile' : 'Difficult Mode'}
                </Badge>
              )}
            </h3>
            <p className="text-sm text-pr-gray-mid mt-1 font-dm-sans">
              {language === 'fr'
                ? `Carte ${currentIndex + 1} sur ${totalCards}`
                : `Card ${currentIndex + 1} of ${totalCards}`
              }
              {dueForReviewCount > 0 && !showingDueForReview && (
                <span className="ml-2 text-pr-orange-dark font-medium">
                  ({dueForReviewCount} {language === 'fr' ? 'à réviser' : 'due for review'})
                </span>
              )}
              {difficultCount > 0 && !showingDifficult && (
                <span className="ml-2 text-pr-orange font-medium">
                  ({difficultCount} {language === 'fr' ? 'difficiles' : 'difficult'})
                </span>
              )}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {dueForReviewCount > 0 && (
              <Button
                onClick={onToggleDueForReview}
                size="sm"
                className={
                  showingDueForReview
                    ? 'bg-pr-orange hover:bg-pr-orange-dark text-white'
                    : 'bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft'
                }
              >
                {language === 'fr' ? 'À réviser' : 'Due for review'} ({dueForReviewCount})
              </Button>
            )}
            {difficultCount > 0 && (
              <Button
                onClick={onToggleDifficult}
                size="sm"
                className={
                  showingDifficult
                    ? 'bg-pr-orange hover:bg-pr-orange-dark text-white'
                    : 'bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft'
                }
              >
                {language === 'fr' ? 'Difficiles' : 'Difficult'} ({difficultCount})
              </Button>
            )}
            <Button
              variant="outline"
              onClick={onReset}
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              {language === 'fr' ? 'Recommencer' : 'Reset'}
            </Button>
            <Button
              variant="outline"
              onClick={onRefresh}
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              {language === 'fr' ? 'Actualiser' : 'Refresh'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
