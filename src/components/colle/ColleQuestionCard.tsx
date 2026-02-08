import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, Loader2 } from 'lucide-react';
import type { ColleQuestionCardProps, TypeQuestion } from '@/types/colle';

const TYPE_CONFIG: Record<
  TypeQuestion,
  { label: string; className: string }
> = {
  comprehension: {
    label: 'Compr\u00e9hension',
    className: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  analyse: {
    label: 'Analyse',
    className: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  civilisation: {
    label: 'Civilisation',
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  ouverture: {
    label: 'Ouverture',
    className: 'bg-amber-100 text-amber-800 border-amber-200',
  },
};

export const ColleQuestionCard: React.FC<ColleQuestionCardProps> = ({
  question,
  onPlayAudio,
  isPlaying = false,
}) => {
  const typeConfig = question.type_question
    ? TYPE_CONFIG[question.type_question]
    : null;

  return (
    <Card className="border-[#FF6A00]/40 animate-in fade-in duration-500">
      <CardContent className="p-5 sm:p-6 space-y-4">
        {/* En-t\u00eate : badge type */}
        <div className="flex items-center justify-between">
          {typeConfig && (
            <Badge
              variant="outline"
              className={typeConfig.className}
            >
              {typeConfig.label}
            </Badge>
          )}
          <span className="text-xs text-muted-foreground">
            Question {question.ordre}
          </span>
        </div>

        {/* Texte de la question */}
        <p className="text-lg font-medium leading-relaxed">
          {question.question_texte}
        </p>

        {/* Bouton TTS */}
        {onPlayAudio && (
          <Button
            variant="outline"
            size="sm"
            onClick={onPlayAudio}
            disabled={isPlaying}
            className="gap-2 hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
            aria-label={
              isPlaying
                ? 'Lecture en cours'
                : '\u00c9couter la question'
            }
          >
            {isPlaying ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Lecture en cours...</span>
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4" />
                <span>\u00c9couter la question</span>
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ColleQuestionCard;
