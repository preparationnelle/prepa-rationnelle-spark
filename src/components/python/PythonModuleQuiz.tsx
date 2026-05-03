
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
  const [showHint, setShowHint] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="mt-8 p-6 rounded-2xl border border-red-200 bg-red-50 text-red-600">
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
      setShowHint(false);
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
    setShowHint(false);
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
      <div
        className="mt-10 rounded-2xl overflow-hidden font-dm-sans"
        style={{ border: '0.5px solid #D8D6CE', background: '#FFFFFF' }}
      >
        {/* Trait orange signature */}
        <div style={{ height: 3, background: '#F4845F' }} />

        <div className="p-8 text-center space-y-6">
          {/* Badge */}
          <div className="flex justify-center">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: '#FDF0EC', color: '#C45A35', letterSpacing: '0.08em' }}
            >
              Quiz terminé
            </span>
          </div>

          {/* Score décoratif */}
          <div>
            <div
              className="font-dm-serif leading-none"
              style={{ fontSize: 72, color: '#F4845F' }}
            >
              {score}
            </div>
            <div className="text-sm mt-1" style={{ color: '#888880' }}>
              sur {questions.length} questions
            </div>
          </div>

          {/* Trait orange */}
          <div className="flex justify-center">
            <div style={{ width: 48, height: 2, background: '#F4845F' }} />
          </div>

          {/* Pourcentage */}
          <div>
            <span
              className="text-3xl font-semibold"
              style={{ color: '#1A1A18' }}
            >
              {pct}%
            </span>
            <p className="mt-2 text-sm" style={{ color: '#3A3A38' }}>
              {getMessage()}
            </p>
          </div>

          {/* Récap des réponses */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {answers.map((ok, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{
                  background: ok ? '#F0FDF4' : '#FEF2F2',
                  color: ok ? '#166534' : '#991B1B',
                  border: `1px solid ${ok ? '#BBF7D0' : '#FECACA'}`,
                }}
              >
                {idx + 1}
              </div>
            ))}
          </div>

          <Button
            onClick={resetQuiz}
            className="mt-2 font-dm-sans font-medium px-6 py-2.5 rounded-xl"
            style={{ background: '#F4845F', color: '#FFFFFF', border: 'none' }}
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
    <div
      className="mt-10 rounded-2xl overflow-hidden font-dm-sans"
      style={{ border: '0.5px solid #D8D6CE', background: '#FFFFFF' }}
    >
      {/* Trait orange signature */}
      <div style={{ height: 3, background: '#F4845F' }} />

      {/* Header */}
      <div
        className="px-6 pt-5 pb-4 flex items-center justify-between"
        style={{ borderBottom: '0.5px solid #D8D6CE' }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: '#FDF0EC', color: '#C45A35', letterSpacing: '0.08em' }}
          >
            Quiz · Module 0
          </span>
          <h3
            className="font-dm-serif text-lg"
            style={{ color: '#1A1A18' }}
          >
            {title}
          </h3>
        </div>
        <span className="text-sm font-medium" style={{ color: '#888880' }}>
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Barre de progression */}
      <div style={{ height: 2, background: '#F7F6F3' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: '#F4845F',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Corps */}
      <div className="p-6 space-y-6">

        {/* Numéro décoratif + question */}
        <div className="flex gap-4 items-start">
          <div className="shrink-0 leading-none font-dm-serif" style={{ fontSize: 48, color: '#F9C4B0', lineHeight: 1 }}>
            {currentQuestion + 1}
          </div>
          <div className="pt-1 space-y-1">
            <div style={{ width: 24, height: 2, background: '#F4845F' }} />
            <p className="text-base font-medium leading-relaxed" style={{ color: '#1A1A18' }}>
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
            className="font-mono text-sm rounded-xl"
            style={{
              border: showResult
                ? answers[currentQuestion]
                  ? '1.5px solid #86EFAC'
                  : '1.5px solid #F4845F'
                : '1.5px solid #D8D6CE',
              background: '#F7F6F3',
              color: '#1A1A18',
            }}
            onKeyPress={(e) => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
            disabled={showResult}
          />
        </div>

        {/* Feedback */}
        {showResult && (
          <div className="space-y-3">
            {answers[currentQuestion] ? (
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
              >
                <CheckCircle className="h-4 w-4 shrink-0" style={{ color: '#16A34A' }} />
                <span className="text-sm font-semibold" style={{ color: '#166534' }}>Correct !</span>
              </div>
            ) : (
              <div
                className="px-4 py-3 rounded-xl space-y-2"
                style={{ background: '#FDF0EC', borderLeft: '3px solid #F4845F' }}
              >
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 shrink-0" style={{ color: '#C45A35' }} />
                  <span className="text-sm font-semibold" style={{ color: '#C45A35' }}>Incorrect</span>
                </div>
                <p className="text-xs" style={{ color: '#3A3A38' }}>Réponse correcte :</p>
                <code
                  className="block text-sm px-3 py-1.5 rounded-lg font-mono"
                  style={{ background: '#1A1A18', color: '#F9C4B0' }}
                >
                  {q.correctAnswers[0]}
                </code>
                {q.explanation && (
                  <p className="text-xs mt-1" style={{ color: '#888880' }}>
                    {q.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Indice */}
        {q.hint && !showResult && (
          <div>
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="flex items-center gap-1.5 text-xs font-medium"
                style={{ color: '#F4845F' }}
              >
                <Lightbulb className="h-3.5 w-3.5" />
                Afficher l'indice
              </button>
            ) : (
              <div
                className="flex items-start gap-2 px-3 py-2.5 rounded-lg text-sm"
                style={{ background: '#FDF0EC', border: '0.5px solid #F9C4B0' }}
              >
                <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#C45A35' }} />
                <span style={{ color: '#3A3A38' }}>{q.hint}</span>
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
              className="w-full rounded-xl font-medium py-2.5"
              style={{ background: '#F4845F', color: '#FFFFFF', border: 'none' }}
            >
              Vérifier
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              className="w-full rounded-xl font-medium py-2.5"
              style={{ background: '#1A1A18', color: '#FFFFFF', border: 'none' }}
            >
              {currentQuestion < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
            </Button>
          )}
        </div>

      </div>

      {/* Footer signature */}
      <div
        className="px-6 py-3 flex items-center justify-between"
        style={{ borderTop: '0.5px solid #D8D6CE', background: '#F7F6F3' }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#F4845F', letterSpacing: '0.08em' }}>
          Prépa Rationnelle
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: idx === currentQuestion ? 16 : 6,
                height: 6,
                borderRadius: 3,
                background: answers[idx] === true
                  ? '#86EFAC'
                  : answers[idx] === false
                  ? '#F4845F'
                  : idx === currentQuestion
                  ? '#F4845F'
                  : '#D8D6CE',
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
