import React from 'react';
import { ArrowLeft, CheckCircle, X, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface PythonQCMQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface PythonQCMPanelProps {
  title?: string;
  intro?: string;
  questions: PythonQCMQuestion[];
  answers: { [key: number]: string };
  onAnswer: (questionId: number, answer: string) => void;
  onSubmit: () => void;
  onRestart: () => void;
  onBack: () => void;
  submitted: boolean;
  score: number | null;
}

const scoreFeedback = (score: number) => {
  if (score >= 16)
    return <>Excellent — vous <span className="carnet-hl">maîtrisez ce module</span> en profondeur.</>;
  if (score >= 12)
    return <>Bon niveau — quelques <span className="carnet-hl">révisions ciblées</span> et c'est solide.</>;
  if (score >= 8)
    return <>Niveau correct — continuez à <span className="carnet-hl">vous entraîner</span> sur ce module.</>;
  return <>Niveau à consolider — reprenez les <span className="carnet-hl">fondamentaux du module</span> avant de revenir.</>;
};

const scoreAnnotation = (score: number): { text: string; rot: number } => {
  if (score >= 16) return { text: '↗ TB,\nbravo !', rot: -6 };
  if (score >= 12) return { text: '↗ presque\nlà', rot: -4 };
  if (score >= 8) return { text: '— à\nrevoir', rot: 4 };
  return { text: '↘ on\nrecommence', rot: 6 };
};

const PythonQCMPanel: React.FC<PythonQCMPanelProps> = ({
  title = "QCM d'évaluation",
  intro,
  questions,
  answers,
  onAnswer,
  onSubmit,
  onRestart,
  onBack,
  submitted,
  score,
}) => {
  const answered = Object.keys(answers).length;
  const total = questions.length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute hover:text-carnet-red transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Liste des exercices
        </button>

        <div className="flex items-start justify-between gap-4 pb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
          <div className="flex-1 min-w-0">
            <div className="carnet-eyebrow text-[11px] mb-3">Évaluation</div>
            <h1 className="font-lora text-3xl md:text-4xl text-carnet-ink leading-tight mb-2">
              {title}
            </h1>
            {intro && (
              <p className="font-instrument text-base text-carnet-ink-soft leading-relaxed">
                {intro}
              </p>
            )}
          </div>
          {!submitted && (
            <span className="font-instrument inline-flex flex-shrink-0 items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-3 py-1.5">
              {answered}/{total} répondues
            </span>
          )}
        </div>
      </div>

      {!submitted ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {questions.map((question) => (
              <div
                key={question.id}
                className="carnet-card overflow-hidden relative"
              >
                <div
                  className={cn(
                    'absolute left-0 top-0 bottom-0 w-[3px] transition-colors',
                    answers[question.id] ? 'bg-carnet-red' : 'bg-[rgba(78,55,30,0.12)]'
                  )}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-2.5 py-1">
                      Q{question.id}
                    </span>
                    {answers[question.id] && (
                      <CheckCircle className="h-3.5 w-3.5 text-carnet-red" />
                    )}
                  </div>
                  <p className="font-instrument text-carnet-ink text-[15px] font-medium leading-relaxed mb-4">
                    {question.question}
                  </p>
                  <div className="space-y-2">
                    {question.options.map((option, optIndex) => {
                      const isSelected = answers[question.id] === option;
                      return (
                        <label
                          key={optIndex}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-all',
                            isSelected
                              ? 'bg-[rgba(193,68,58,0.06)] border-[rgba(193,68,58,0.3)]'
                              : 'bg-carnet-paper-2 border-[rgba(78,55,30,0.12)] hover:border-[rgba(193,68,58,0.2)] hover:bg-[rgba(78,55,30,0.03)]'
                          )}
                        >
                          <span
                            className={cn(
                              'flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all',
                              isSelected
                                ? 'border-carnet-red bg-carnet-red'
                                : 'border-[rgba(78,55,30,0.2)]'
                            )}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={isSelected}
                              onChange={(e) => onAnswer(question.id, e.target.value)}
                              className="sr-only"
                            />
                          </span>
                          <span
                            className={cn(
                              'font-instrument text-sm leading-relaxed',
                              isSelected ? 'text-carnet-red font-semibold' : 'text-carnet-ink-soft'
                            )}
                          >
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onSubmit}
              disabled={answered < total}
              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-10 px-8 text-sm border-0 disabled:opacity-40"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Valider le QCM
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* Score */}
          <div className="carnet-card overflow-hidden relative mb-10">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-carnet-red" />
            {score !== null && (() => {
              const a = scoreAnnotation(score);
              return (
                <div
                  className="carnet-hand hidden md:block absolute pointer-events-none whitespace-pre-line text-carnet-red"
                  style={{ right: 24, top: 22, fontSize: 24, transform: `rotate(${a.rot}deg)`, lineHeight: 1.05, textAlign: 'left' }}
                >
                  {a.text}
                </div>
              );
            })()}
            <div className="p-8 text-center">
              <div className="carnet-eyebrow text-[10px] mb-2">Résultat</div>
              <div className="font-lora text-6xl md:text-7xl text-carnet-ink leading-none mb-2">
                {score?.toFixed(1)}<span className="text-carnet-red">/20</span>
              </div>
              <hr className="w-12 h-0.5 bg-carnet-ink border-0 mx-auto my-4" />
              <p className="font-instrument text-base text-carnet-ink-soft max-w-lg mx-auto leading-relaxed">
                {score !== null && scoreFeedback(score)}
              </p>
            </div>
          </div>

          {/* Détail des réponses */}
          <div className="mb-10">
            <div className="carnet-eyebrow text-[10px] mb-4">Détail des réponses</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {questions.map((question) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.answer;

                return (
                  <div
                    key={question.id}
                    className="carnet-card overflow-hidden relative"
                  >
                    <div
                      className={cn(
                        'absolute left-0 top-0 bottom-0 w-[3px]',
                        isCorrect ? 'bg-carnet-red' : 'bg-[rgba(78,55,30,0.12)]'
                      )}
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-2.5 py-1">
                          Q{question.id}
                        </span>
                        {isCorrect ? (
                          <span className="font-instrument inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red">
                            <CheckCircle className="h-3.5 w-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="font-instrument inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-ink-mute">
                            <X className="h-3.5 w-3.5" /> À revoir
                          </span>
                        )}
                      </div>

                      <p className="font-instrument text-carnet-ink text-[15px] font-medium leading-relaxed mb-4">
                        {question.question}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === option;
                          const isCorrectAnswer = question.answer === option;

                          let style = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-instrument';

                          if (isCorrectAnswer) {
                            style += ' bg-[rgba(193,68,58,0.06)] border-[rgba(193,68,58,0.3)] text-carnet-red font-semibold';
                          } else if (isUserAnswer && !isCorrect) {
                            style += ' bg-[rgba(78,55,30,0.04)] border-[rgba(78,55,30,0.12)] text-carnet-ink-soft line-through decoration-carnet-ink-mute';
                          } else {
                            style += ' bg-carnet-paper-2 border-[rgba(78,55,30,0.08)] text-carnet-ink-soft/60';
                          }

                          return (
                            <div key={optIndex} className={style}>
                              {isCorrectAnswer && <CheckCircle className="h-3.5 w-3.5 text-carnet-red flex-shrink-0" />}
                              {isUserAnswer && !isCorrect && <X className="h-3.5 w-3.5 text-carnet-ink-mute flex-shrink-0" />}
                              {!isCorrectAnswer && !isUserAnswer && <span className="h-3.5 w-3.5 flex-shrink-0" />}
                              <span>{option}</span>
                            </div>
                          );
                        })}
                      </div>

                      {question.explanation && (
                        <div className="mt-4 px-4 py-3 bg-[rgba(193,68,58,0.04)] border-l-[3px] border-carnet-red rounded-r-lg">
                          <div className="carnet-eyebrow text-[10px] mb-1">Explication</div>
                          <p className="font-instrument text-sm text-carnet-ink-soft leading-relaxed">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onRestart}
              variant="outline"
              className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument text-xs bg-transparent"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer le QCM
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PythonQCMPanel;
