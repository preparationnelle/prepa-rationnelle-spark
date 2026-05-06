import React from 'react';
import { ArrowLeft, CheckCircle, X, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      {/* Header de section */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-gray-mid hover:text-pr-orange-dark transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Liste des exercices
        </button>

        <div className="flex items-start justify-between gap-4 pb-6 border-b border-pr-gray-light/60">
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-orange mb-3">
              Évaluation
            </div>
            <h1 className="font-dm-serif text-3xl md:text-4xl text-pr-black leading-tight tracking-tight mb-2">
              {title}
            </h1>
            {intro && (
              <p className="text-base text-pr-gray-dark/80 leading-relaxed">
                {intro}
              </p>
            )}
          </div>
          {!submitted && (
            <span className="inline-flex flex-shrink-0 items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/40 rounded-full px-3 py-1.5">
              {answered}/{total} répondues
            </span>
          )}
        </div>
      </div>

      {!submitted ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {questions.map((question) => (
              <Card
                key={question.id}
                className="bg-white border border-pr-gray-light rounded-2xl shadow-none overflow-hidden relative"
              >
                <div
                  className={cn(
                    'absolute left-0 top-0 bottom-0 w-[3px] transition-colors',
                    answers[question.id] ? 'bg-pr-orange' : 'bg-pr-gray-light'
                  )}
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/40 rounded-full px-2.5 py-1">
                      Q{question.id}
                    </span>
                    {answers[question.id] && (
                      <CheckCircle className="h-3.5 w-3.5 text-pr-orange" />
                    )}
                  </div>
                  <p className="text-pr-black text-[15px] font-medium leading-relaxed mb-4">
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
                              ? 'bg-pr-orange-pale border-pr-orange-soft'
                              : 'bg-white border-pr-gray-light hover:border-pr-orange-soft/50 hover:bg-pr-gray-bg'
                          )}
                        >
                          <span
                            className={cn(
                              'flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all',
                              isSelected
                                ? 'border-pr-orange bg-pr-orange ring-2 ring-pr-orange-pale ring-offset-0'
                                : 'border-pr-gray-light'
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
                              'text-sm leading-relaxed',
                              isSelected
                                ? 'text-pr-orange-dark font-semibold'
                                : 'text-pr-gray-dark'
                            )}
                          >
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onSubmit}
              disabled={answered < total}
              className="bg-pr-orange hover:bg-pr-orange-dark text-white rounded-xl px-8 py-5 h-auto text-sm font-semibold shadow-sm disabled:opacity-40"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Valider le QCM
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* Score */}
          <Card className="bg-white border border-pr-gray-light rounded-2xl shadow-none overflow-hidden relative mb-10">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange" />
            {score !== null && (() => {
              const a = scoreAnnotation(score);
              return (
                <div
                  className="carnet-hand hidden md:block absolute pointer-events-none whitespace-pre-line"
                  style={{
                    right: 24,
                    top: 22,
                    fontSize: 24,
                    transform: `rotate(${a.rot}deg)`,
                    lineHeight: 1.05,
                    textAlign: 'left',
                  }}
                >
                  {a.text}
                </div>
              );
            })()}
            <CardContent className="p-8 text-center">
              <div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-pr-orange-dark mb-2">
                Résultat
              </div>
              <div className="font-dm-serif text-6xl md:text-7xl text-pr-black leading-none mb-2">
                {score?.toFixed(1)}<span className="text-pr-orange">/20</span>
              </div>
              <div className="flex justify-center my-4">
                <div className="h-[2px] w-12 bg-pr-orange" />
              </div>
              <p className="text-base text-pr-gray-dark/80 max-w-lg mx-auto leading-relaxed">
                {score !== null && scoreFeedback(score)}
              </p>
            </CardContent>
          </Card>

          {/* Détail des réponses */}
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark mb-4">
              Détail des réponses
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {questions.map((question) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.answer;

                return (
                  <Card
                    key={question.id}
                    className="bg-white border border-pr-gray-light rounded-2xl shadow-none overflow-hidden relative"
                  >
                    <div
                      className={cn(
                        'absolute left-0 top-0 bottom-0 w-[3px]',
                        isCorrect ? 'bg-pr-orange' : 'bg-pr-gray-light'
                      )}
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/40 rounded-full px-2.5 py-1">
                          Q{question.id}
                        </span>
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
                            <CheckCircle className="h-3.5 w-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                            <X className="h-3.5 w-3.5" /> À revoir
                          </span>
                        )}
                      </div>

                      <p className="text-pr-black text-[15px] font-medium leading-relaxed mb-4">
                        {question.question}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === option;
                          const isCorrectAnswer = question.answer === option;

                          let style = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm border';

                          if (isCorrectAnswer) {
                            style += ' bg-pr-orange-pale border-pr-orange-soft text-pr-orange-dark font-semibold';
                          } else if (isUserAnswer && !isCorrect) {
                            style += ' bg-pr-gray-bg border-pr-gray-light text-pr-gray-dark line-through decoration-pr-gray-mid';
                          } else {
                            style += ' bg-white border-pr-gray-light/60 text-pr-gray-dark/70';
                          }

                          return (
                            <div key={optIndex} className={style}>
                              {isCorrectAnswer && <CheckCircle className="h-3.5 w-3.5 text-pr-orange flex-shrink-0" />}
                              {isUserAnswer && !isCorrect && <X className="h-3.5 w-3.5 text-pr-gray-mid flex-shrink-0" />}
                              {!isCorrectAnswer && !isUserAnswer && <span className="h-3.5 w-3.5 flex-shrink-0" />}
                              <span>{option}</span>
                            </div>
                          );
                        })}
                      </div>

                      {question.explanation && (
                        <div className="mt-4 px-4 py-3 bg-pr-orange-pale/60 border-l-[3px] border-pr-orange rounded-r-lg">
                          <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark mb-1">
                            Explication
                          </div>
                          <p className="text-sm text-pr-gray-dark leading-relaxed">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onRestart}
              variant="outline"
              className="rounded-xl border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
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
