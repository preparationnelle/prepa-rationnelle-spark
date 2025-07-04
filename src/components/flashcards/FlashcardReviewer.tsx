
import React from 'react';
import { SimplifiedFlashcardReview } from './SimplifiedFlashcardReview';

interface FlashcardReviewerProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const FlashcardReviewer = ({ language, refreshTrigger }: FlashcardReviewerProps) => {
  return <SimplifiedFlashcardReview language={language} refreshTrigger={refreshTrigger} />;
};
