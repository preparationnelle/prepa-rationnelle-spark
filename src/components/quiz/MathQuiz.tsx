import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronDown, ArrowRight, Pencil } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { cn } from '@/lib/utils';

const renderTextWithLatex = (text: string) => {
  if (!text) return null;
  return text.split(/(\$[^$]+\$)/).map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <LatexRenderer key={idx} latex={part.slice(1, -1)} />;
    } else if (part.trim()) {
      return <span key={idx}>{part}</span>;
    }
    return null;
  });
};

export interface MathQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  latex?: string;
}

interface MathQuizProps {
  title: string;
  questions: MathQuizQuestion[];
  chapterNumber: number;
  chapterTitle: string;
}

export const MathQuiz: React.FC<MathQuizProps> = ({
  title,
  questions,
  chapterNumber,
  chapterTitle
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showQuestionMenu, setShowQuestionMenu] = useState(false);

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setIsCompleted(false);
    setShowQuestionMenu(false);
  };

  const goToQuestion = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowQuestionMenu(false);
  };

  const score = answers.filter(Boolean).length;
  const percent = Math.round((score / questions.length) * 100);

  // ─── Écran de fin ────────────────────────────────────────────
  if (isCompleted) {
    const message =
      score === questions.length
        ? "Parfait — tu maîtrises ce chapitre."
        : score >= questions.length * 0.7
          ? "Très bien. Quelques relectures et c'est solide."
          : "Continue à t'entraîner — la régularité paie.";
    const annotation =
      score === questions.length
        ? "↗ sans-faute"
        : score >= questions.length * 0.7
          ? "↗ bonne base"
          : "↘ on retourne au cours";

    return (
      <div className="mt-8 carnet-card p-10 carnet-tilt-l relative">
        <div
          className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold"
          style={{ transform: 'rotate(-3deg)' }}
        >
          {percent} / 100
        </div>

        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[rgba(193,68,58,0.10)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center mb-5">
            <Trophy className="h-7 w-7 text-carnet-red" />
          </div>

          <div className="carnet-eyebrow mb-3">Quiz terminé</div>
          <h3 className="font-lora text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-2">
            <em className="font-lora italic text-carnet-red">{score}</em>
            <span className="text-carnet-ink-mute"> / </span>
            {questions.length}
          </h3>

          <div
            className="carnet-hand text-[22px] mt-1 mb-6 inline-block"
            style={{ transform: 'rotate(-2deg)' }}
          >
            {annotation}
          </div>

          <hr className="carnet-divider my-6" />

          <p className="font-lora italic text-[18px] text-carnet-ink-soft leading-[1.5] max-w-[440px] mx-auto mb-7">
            « {message} »
          </p>

          <Button
            onClick={resetQuiz}
            className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] py-[18px] px-7 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  // ─── Écran question ──────────────────────────────────────────
  const q = questions[currentQuestion];
  const isCorrectAnswer = (idx: number) => idx === q.correctAnswer;

  return (
    <div className="mt-8 carnet-card p-0 overflow-hidden">
      {/* Header — bandeau encre */}
      <div className="bg-carnet-ink text-carnet-paper px-7 pt-6 pb-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div
              className="font-instrument text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
              style={{ color: '#FBF6EA' }}
            >
              <span style={{ color: '#C1443A' }}>Quiz</span> · Chapitre {chapterNumber}
            </div>
            <h3 className="font-lora text-[24px] leading-[1.15] tracking-[-0.01em] text-carnet-paper">
              {title}
            </h3>
            <p className="font-instrument text-[13px] text-[rgba(251,246,234,0.65)] mt-1.5">
              {chapterTitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="font-mono-jb text-[12px] px-3 py-1.5 rounded-full bg-[rgba(251,246,234,0.10)] border border-[rgba(251,246,234,0.18)] text-carnet-paper">
              {currentQuestion + 1} / {questions.length}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowQuestionMenu(!showQuestionMenu)}
                className="p-1.5 rounded-full bg-[rgba(251,246,234,0.10)] hover:bg-carnet-red transition-colors text-carnet-paper"
                aria-label="Naviguer entre les questions"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
              {showQuestionMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 carnet-card p-1 z-50 shadow-[0_8px_24px_rgba(78,55,30,0.15)]">
                  <div className="max-h-60 overflow-y-auto">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={cn(
                          'w-full px-3 py-2 text-left rounded-sm flex items-center justify-between font-instrument text-[13px] transition-colors',
                          index === currentQuestion
                            ? 'bg-[rgba(193,68,58,0.10)] text-carnet-red font-semibold'
                            : 'text-carnet-ink-soft hover:bg-carnet-paper'
                        )}
                      >
                        <span>Question {index + 1}</span>
                        {answers[index] !== undefined && (
                          answers[index]
                            ? <CheckCircle className="h-4 w-4 text-carnet-red" />
                            : <XCircle className="h-4 w-4 text-carnet-ink-mute" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-5 flex items-center gap-1.5">
          {questions.map((_, idx) => (
            <span
              key={idx}
              className={cn(
                'h-1.5 rounded-full transition-all',
                idx === currentQuestion
                  ? 'flex-1 bg-carnet-red'
                  : answers[idx] === true
                    ? 'flex-1 bg-[rgba(251,246,234,0.7)]'
                    : answers[idx] === false
                      ? 'flex-1 bg-[rgba(193,68,58,0.5)]'
                      : 'flex-1 bg-[rgba(251,246,234,0.18)]'
              )}
            />
          ))}
        </div>
      </div>

      {/* Corps */}
      <div className="bg-carnet-paper-2 px-7 py-8">
        {/* Énoncé */}
        <div className="mb-7 relative">
          <div className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
            <Pencil className="h-3 w-3" /> Question {currentQuestion + 1}
          </div>
          <p className="font-lora text-[20px] leading-[1.45] text-carnet-ink">
            {renderTextWithLatex(q.question)}
          </p>
          {q.latex && (
            <div className="mt-4 bg-carnet-paper rounded-md border border-dashed border-[rgba(78,55,30,0.20)] border-l-[3px] border-l-carnet-red px-5 py-4">
              <LatexRenderer latex={q.latex} />
            </div>
          )}
        </div>

        <hr className="carnet-divider mb-6" />

        {/* Options */}
        <div className="space-y-3 mb-7">
          {q.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C…
            const isSelected = selectedAnswer === index;
            const showAsCorrect = showResult && isCorrectAnswer(index);
            const showAsWrong = showResult && isSelected && !isCorrectAnswer(index);

            return (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(index)}
                disabled={showResult}
                className={cn(
                  'w-full p-4 text-left rounded-md border transition-all duration-200 group',
                  // État de base
                  !showResult && !isSelected && 'bg-carnet-paper-2 border-[rgba(78,55,30,0.18)] hover:border-carnet-red hover:bg-carnet-paper',
                  // Sélectionné (avant validation)
                  !showResult && isSelected && 'bg-carnet-paper border-carnet-red shadow-[0_2px_0_rgba(193,68,58,0.15)]',
                  // Bonne réponse (après validation)
                  showAsCorrect && 'bg-[rgba(255,225,120,0.30)] border-[rgba(193,68,58,0.45)]',
                  // Mauvaise réponse choisie
                  showAsWrong && 'bg-carnet-paper-2 border-carnet-ink',
                  // Autres options désactivées
                  showResult && !isSelected && !isCorrectAnswer(index) && 'bg-carnet-paper-2 border-[rgba(78,55,30,0.10)] opacity-60'
                )}
              >
                <div className="flex items-start gap-4">
                  {/* Pastille lettre */}
                  <div
                    className={cn(
                      'shrink-0 w-9 h-9 rounded-full border flex items-center justify-center font-instrument font-semibold text-[14px] transition-colors',
                      !showResult && !isSelected && 'bg-carnet-paper border-[rgba(78,55,30,0.22)] text-carnet-ink-soft group-hover:border-carnet-red group-hover:text-carnet-red',
                      !showResult && isSelected && 'bg-carnet-red border-carnet-red text-carnet-paper',
                      showAsCorrect && 'bg-carnet-red border-carnet-red text-carnet-paper',
                      showAsWrong && 'bg-carnet-ink border-carnet-ink text-carnet-paper'
                    )}
                  >
                    {showAsCorrect ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : showAsWrong ? (
                      <XCircle className="h-4 w-4" />
                    ) : (
                      letter
                    )}
                  </div>

                  <span className="font-instrument text-[15px] text-carnet-ink leading-[1.5] pt-1.5">
                    {renderTextWithLatex(option)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action / feedback */}
        {!showResult ? (
          <Button
            onClick={checkAnswer}
            disabled={selectedAnswer === null}
            className="w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] py-[18px] px-7 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-carnet-ink"
          >
            Vérifier la réponse
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <div className="space-y-5">
            <div
              className={cn(
                'rounded-md px-5 py-4 border-l-[3px] relative',
                answers[currentQuestion]
                  ? 'bg-[rgba(255,225,120,0.22)] border-l-carnet-red border border-[rgba(193,68,58,0.25)]'
                  : 'bg-carnet-paper border-l-carnet-ink border border-[rgba(78,55,30,0.18)]'
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                {answers[currentQuestion] ? (
                  <>
                    <span className="carnet-hand text-[24px] font-semibold" style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}>
                      ✓ juste !
                    </span>
                  </>
                ) : (
                  <>
                    <span className="carnet-hand text-[24px] font-semibold text-carnet-ink" style={{ transform: 'rotate(-2deg)', display: 'inline-block' }}>
                      ✗ à revoir
                    </span>
                  </>
                )}
              </div>

              {q.explanation && (
                <p className="font-lora italic text-[15px] text-carnet-ink-soft leading-[1.55] mt-2">
                  {renderTextWithLatex(q.explanation)}
                </p>
              )}
            </div>

            <Button
              onClick={nextQuestion}
              className="w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] py-[18px] px-7 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto"
            >
              {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
