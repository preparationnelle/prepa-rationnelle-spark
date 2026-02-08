import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Volume2 } from 'lucide-react';
import type { ColleFeedbackPanelProps, ColleQuestionWithReponse } from '@/types/colle';

// ---- Note circulaire ----

const NoteCircle: React.FC<{ note: number }> = ({ note }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(note / 20, 1);
  const strokeDashoffset = circumference * (1 - progress);

  const color =
    note >= 14 ? '#10b981' : note >= 10 ? '#FF6A00' : '#ef4444';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>
            {note.toFixed(1)}
          </span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground font-medium">/ 20</span>
    </div>
  );
};

// ---- Barre de score avec label ----

const ScoreBar: React.FC<{ label: string; score: number; comment: string }> = ({
  label,
  score,
  comment,
}) => {
  const percentage = Math.min(Math.round((score / 20) * 100), 100);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{score.toFixed(1)}/20</span>
      </div>
      <div className="relative">
        <Progress value={percentage} className="h-2 bg-orange-100" />
        <style>{`
          .score-bar-progress > [data-state] {
            background-color: #FF6A00;
          }
        `}</style>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{comment}</p>
    </div>
  );
};

// ---- Mini scores pour le d\u00e9tail ----

const MiniScores: React.FC<{
  fluency?: number | null;
  grammar?: number | null;
  vocabulary?: number | null;
  pronunciation?: number | null;
}> = ({ fluency, grammar, vocabulary, pronunciation }) => {
  const scores = [
    { label: 'Fl.', value: fluency },
    { label: 'Gr.', value: grammar },
    { label: 'Voc.', value: vocabulary },
    { label: 'Pr.', value: pronunciation },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {scores.map(
        (s) =>
          s.value != null && (
            <div
              key={s.label}
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <span className="font-medium">{s.label}</span>
              <Badge variant="secondary" className="text-xs px-1.5 py-0">
                {s.value.toFixed(1)}
              </Badge>
            </div>
          )
      )}
    </div>
  );
};

// ---- D\u00e9tail d'une question ----

const QuestionDetail: React.FC<{
  q: ColleQuestionWithReponse;
  index: number;
}> = ({ q, index }) => {
  const reponse = q.reponse;

  return (
    <AccordionItem value={q.id}>
      <AccordionTrigger className="text-sm hover:no-underline">
        <span className="text-left">
          <span className="font-medium">Q{index + 1}.</span>{' '}
          {q.question_texte.length > 80
            ? q.question_texte.slice(0, 80) + '...'
            : q.question_texte}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 pl-1">
          {/* Question compl\u00e8te */}
          <p className="text-sm font-medium">{q.question_texte}</p>

          {/* Bouton lecture audio */}
          {q.question_audio_url && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 text-xs"
              onClick={() => {
                const audio = new Audio(q.question_audio_url!);
                audio.play();
              }}
              aria-label={`\u00c9couter la question ${index + 1}`}
            >
              <Volume2 className="h-3.5 w-3.5" />
              \u00c9couter
            </Button>
          )}

          {reponse ? (
            <>
              {/* Transcription */}
              {reponse.reponse_transcription && (
                <div className="rounded-lg bg-muted/50 p-3 text-sm italic border border-muted">
                  &laquo;&nbsp;{reponse.reponse_transcription}&nbsp;&raquo;
                </div>
              )}

              {/* Commentaire AI */}
              {reponse.commentaire_ai && (
                <p className="text-sm text-muted-foreground">
                  {reponse.commentaire_ai}
                </p>
              )}

              {/* Mini scores */}
              <MiniScores
                fluency={reponse.score_fluency}
                grammar={reponse.score_grammar}
                vocabulary={reponse.score_vocabulary}
                pronunciation={reponse.score_pronunciation}
              />
            </>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Pas de r\u00e9ponse enregistr\u00e9e.
            </p>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

// ---- Composant principal ----

export const ColleFeedbackPanel: React.FC<ColleFeedbackPanelProps> = ({
  session,
}) => {
  const { note_globale, feedback_langue, feedback_civilisation, questions } =
    session;

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto animate-in fade-in duration-500">
      {/* Note globale */}
      {note_globale != null && (
        <div className="flex justify-center py-4">
          <NoteCircle note={note_globale} />
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="langue" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="langue">Langue</TabsTrigger>
          <TabsTrigger value="civilisation">Civilisation</TabsTrigger>
          <TabsTrigger value="detail">D\u00e9tail</TabsTrigger>
        </TabsList>

        {/* Tab Langue */}
        <TabsContent value="langue" className="space-y-5 pt-4">
          {feedback_langue ? (
            <>
              <ScoreBar
                label="Grammaire"
                score={feedback_langue.note}
                comment={feedback_langue.grammaire}
              />
              <ScoreBar
                label="Vocabulaire"
                score={feedback_langue.note}
                comment={feedback_langue.vocabulaire}
              />
              <ScoreBar
                label="Fluidit\u00e9"
                score={feedback_langue.note}
                comment={feedback_langue.fluidite}
              />
              <ScoreBar
                label="Prononciation"
                score={feedback_langue.note}
                comment={feedback_langue.prononciation}
              />
            </>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-6">
              Pas de feedback langue disponible.
            </p>
          )}
        </TabsContent>

        {/* Tab Civilisation */}
        <TabsContent value="civilisation" className="space-y-5 pt-4">
          {feedback_civilisation ? (
            <>
              <ScoreBar
                label="Pertinence"
                score={feedback_civilisation.note}
                comment={feedback_civilisation.pertinence}
              />
              <ScoreBar
                label="Richesse culturelle"
                score={feedback_civilisation.note}
                comment={feedback_civilisation.richesse_culturelle}
              />
            </>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-6">
              Pas de feedback civilisation disponible.
            </p>
          )}
        </TabsContent>

        {/* Tab D\u00e9tail */}
        <TabsContent value="detail" className="pt-4">
          {questions.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {questions.map((q, i) => (
                <QuestionDetail key={q.id} q={q} index={i} />
              ))}
            </Accordion>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-6">
              Aucune question dans cette session.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ColleFeedbackPanel;
