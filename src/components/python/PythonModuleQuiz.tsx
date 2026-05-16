
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle, RotateCcw, Lightbulb } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  correctAnswers: string[];
  hint?: string;
  explanation?: string;
}

interface PythonModuleQuizProps {
  title: string;
  questions: QuizQuestion[];
  moduleColor?: string;
}

export const PythonModuleQuiz: React.FC<PythonModuleQuizProps> = ({
  title,
  questions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="mt-8 carnet-card p-6 text-carnet-red">
        Erreur : aucune question de quiz trouvée.
      </div>
    );
  }

  const normalizeAnswer = (answer: string) =>
    answer.trim().toLowerCase().replace(/\s+/g, ' ');

  const checkAnswer = () => {
    const isCorrect = questions[currentQuestion].correctAnswers.some(
      correct => normalizeAnswer(correct) === normalizeAnswer(userAnswer)
    );
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setAnswers([]);
    setShowResult(false);
    setIsCompleted(false);
  };

  const score = answers.filter(Boolean).length;
  const pct = Math.round((score / questions.length) * 100);
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  const getMessage = () => {
    if (pct === 100) return 'Parfait — toutes les notions sont maîtrisées.';
    if (pct >= 70) return 'Très bien. Quelques révisions et ce sera parfait.';
    return 'Continue à t\'entraîner, tu y arriveras.';
  };

  /* ── ÉCRAN DE FIN ── */
  if (isCompleted) {
    return (
      <div className="mt-10 carnet-card overflow-hidden font-instrument">
        {/* Trait rouge signature */}
        <div className="h-[3px] bg-carnet-red" />

        <div className="p-8 text-center space-y-6">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="carnet-eyebrow text-[11px] bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-4 py-1.5">
              Quiz terminé
            </span>
          </div>

          {/* Score décoratif */}
          <div>
            <div className="font-lora leading-none text-[72px] text-carnet-red">
              {score}
            </div>
            <div className="text-sm mt-1 text-carnet-ink-mute">
              sur {questions.length} questions
            </div>
          </div>

          {/* Trait rouge */}
          <div className="flex justify-center">
            <div className="w-12 h-0.5 bg-carnet-red" />
          </div>

          {/* Pourcentage */}
          <div>
            <span className="font-lora text-3xl text-carnet-ink">
              {pct}%
            </span>
            <p className="mt-2 text-sm text-carnet-ink-soft">
              {getMessage()}
            </p>
          </div>

          {/* Récap des réponses */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {answers.map((ok, idx) => (
              <div
                key={idx}
                className={
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-instrument border ' +
                  (ok
                    ? 'bg-[rgba(193,68,58,0.06)] border-[rgba(193,68,58,0.3)] text-carnet-red'
                    : 'bg-[rgba(78,55,30,0.04)] border-[rgba(78,55,30,0.12)] text-carnet-ink-mute line-through')
                }
              >
                {idx + 1}
              </div>
            ))}
          </div>

          <Button
            onClick={resetQuiz}
            className="mt-2 font-instrument font-semibold px-6 py-2.5 rounded-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper border-0"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  /* ── ÉCRAN DE QUESTION ── */
  const q = questions[currentQuestion];

  return (
    <div className="mt-10 carnet-card overflow-hidden font-instrument">
      {/* Trait rouge signature */}
      <div className="h-[3px] bg-carnet-red" />

      {/* Header */}
      <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="flex items-center gap-3">
          <span className="carnet-eyebrow text-[11px] bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-3 py-1">
            Quiz · Module 0
          </span>
          <h3 className="font-lora text-lg text-carnet-ink">
            {title}
          </h3>
        </div>
        <span className="text-sm font-medium text-carnet-ink-mute">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Barre de progression */}
      <div className="h-0.5 bg-[rgba(78,55,30,0.10)]">
        <div
          className="h-full bg-carnet-red transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Corps */}
      <div className="p-6 space-y-6">

        {/* Numéro décoratif + question */}
        <div className="flex gap-4 items-start">
          <div className="shrink-0 leading-none font-lora text-[48px] text-carnet-ink-mute/50">
            {currentQuestion + 1}
          </div>
          <div className="pt-1 space-y-1">
            <div className="w-6 h-0.5 bg-carnet-red" />
            <p className="text-base font-medium leading-relaxed text-carnet-ink">
              {q.question}
            </p>
          </div>
        </div>

        {/* Input */}
        <div>
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Tapez votre réponse Python ici…"
            className={
              'font-mono text-sm rounded-lg bg-carnet-paper-2 text-carnet-ink ' +
              (showResult
                ? answers[currentQuestion]
                  ? 'border-carnet-red'
                  : 'border-carnet-ink-mute'
                : 'border-[rgba(78,55,30,0.18)]')
            }
            onKeyPress={(e) => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
            disabled={showResult}
          />
        </div>

        {/* Indice — toujours visible, jamais replié */}
        {q.hint && !showResult && (
          <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg text-sm bg-[rgba(193,68,58,0.04)] border border-[rgba(193,68,58,0.2)]">
            <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-carnet-red" />
            <span className="text-carnet-ink-soft">
              <span className="carnet-eyebrow text-[10px] mr-2">Indice</span>
              {q.hint}
            </span>
          </div>
        )}

        {/* Feedback */}
        {showResult && (
          <div className="space-y-3">
            {answers[currentQuestion] ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.3)]">
                <CheckCircle className="h-4 w-4 shrink-0 text-carnet-red" />
                <span className="text-sm font-semibold text-carnet-red carnet-hl">Correct !</span>
              </div>
            ) : (
              <div className="px-4 py-3 rounded-lg space-y-2 bg-[rgba(78,55,30,0.04)] border-l-[3px] border-carnet-ink-mute">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 shrink-0 text-carnet-ink-mute" />
                  <span className="text-sm font-semibold text-carnet-ink-mute">Incorrect</span>
                </div>
                <p className="text-xs text-carnet-ink-soft">Réponse correcte :</p>
                <code className="block text-sm px-3 py-1.5 rounded font-mono bg-carnet-ink text-carnet-paper/90">
                  {q.correctAnswers[0]}
                </code>
                {q.explanation && (
                  <p className="text-xs mt-1 text-carnet-ink-soft">
                    {q.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Boutons */}
        <div>
          {!showResult ? (
            <Button
              onClick={checkAnswer}
              disabled={!userAnswer.trim()}
              className="w-full rounded-full font-instrument font-semibold py-2.5 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper border-0 disabled:opacity-40"
            >
              Vérifier
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              className="w-full rounded-full font-instrument font-semibold py-2.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper border-0"
            >
              {currentQuestion < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
            </Button>
          )}
        </div>

      </div>

      {/* Footer signature */}
      <div className="px-6 py-3 flex items-center justify-between border-t border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2">
        <span className="carnet-eyebrow text-[11px]">
          Prépa Rationnelle
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={
                'h-1.5 rounded-full transition-all duration-200 ' +
                (idx === currentQuestion ? 'w-4 ' : 'w-1.5 ') +
                (answers[idx] === true
                  ? 'bg-carnet-red'
                  : answers[idx] === false
                  ? 'bg-carnet-ink-mute'
                  : idx === currentQuestion
                  ? 'bg-carnet-red'
                  : 'bg-[rgba(78,55,30,0.18)]')
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
