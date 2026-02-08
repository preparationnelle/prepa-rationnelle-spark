import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ColleQuestionNavProps {
  totalQuestions: number;
  currentIndex: number;
  answeredQuestions: Set<number>;
  onNavigate: (index: number) => void;
}

export const ColleQuestionNav: React.FC<ColleQuestionNavProps> = ({
  totalQuestions,
  currentIndex,
  answeredQuestions,
  onNavigate,
}) => {
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalQuestions - 1;

  return (
    <div className="flex items-center justify-center gap-3" role="navigation" aria-label="Navigation entre questions">
      {/* Fl\u00e8che gauche */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={!canGoPrev}
        aria-label="Question pr\u00e9c\u00e9dente"
        className="h-8 w-8 shrink-0"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Dots */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isAnswered = answeredQuestions.has(i);
          const isCurrent = i === currentIndex;

          return (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`
                h-3 w-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/50 focus:ring-offset-1
                ${isCurrent
                  ? 'ring-2 ring-[#FF6A00] ring-offset-2 scale-125'
                  : 'hover:scale-110'
                }
                ${isAnswered
                  ? 'bg-[#FF6A00]'
                  : 'bg-transparent border-2 border-gray-300'
                }
              `}
              aria-label={`Question ${i + 1}${isAnswered ? ' (r\u00e9pondue)' : ''}${isCurrent ? ' (actuelle)' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
            />
          );
        })}
      </div>

      {/* Fl\u00e8che droite */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={!canGoNext}
        aria-label="Question suivante"
        className="h-8 w-8 shrink-0"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ColleQuestionNav;
