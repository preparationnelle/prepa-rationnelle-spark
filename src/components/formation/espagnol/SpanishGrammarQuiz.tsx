import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import type { SpanishQuizQuestion } from '@/data/spanishGrammar/types';

interface SpanishGrammarQuizProps {
  questions: SpanishQuizQuestion[];
  title: string;
  /** Identifiant unique pour la sauvegarde — ex. 'espagnol-grammaire-subjonctif' */
  qcmId: string;
}

// Calqué sur OteriaQCM (formation Python) : validation globale, score coloré,
// explications repliables, sauvegarde dans qcm_results. Charte « carnet ».
export const SpanishGrammarQuiz: React.FC<SpanishGrammarQuizProps> = ({ questions, title, qcmId }) => {
  const { currentUser } = useAuth();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAnswerSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question) => {
      const selectedOption = question.options.find((opt) => opt.id === answers[question.id]);
      if (selectedOption?.correct) correct++;
    });
    return { correct, total: questions.length };
  };

  const handleValidation = async () => {
    setShowResults(true);
    setShowExplanations(true);
    const { correct, total } = calculateScore();
    const scorePercentage = Math.round((correct / total) * 100);

    if (currentUser) {
      try {
        const { error } = await supabase.from('qcm_results').insert({
          user_id: currentUser.id,
          qcm_id: qcmId,
          title,
          score: scorePercentage,
          total_questions: total,
          correct_answers: correct,
        });
        if (error) throw error;
        setSaveMessage('✓ Résultat enregistré dans votre dashboard');
      } catch (error) {
        console.error('Erreur sauvegarde:', error);
        setSaveMessage('Erreur lors de la sauvegarde du résultat.');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setShowExplanations(false);
    setSaveMessage('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { correct, total } = calculateScore();
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* En-tête du quiz */}
      <div className="border border-carnet-rule rounded-2xl p-6 bg-carnet-paper-2 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="font-lora text-[22px] text-carnet-ink leading-tight">{title}</h2>
          {showResults && (
            <div
              className={cn(
                'px-4 py-2 rounded-full text-sm font-bold flex-shrink-0',
                scorePercentage >= 80 && 'bg-emerald-100 text-emerald-800',
                scorePercentage >= 60 && scorePercentage < 80 && 'bg-amber-100 text-amber-800',
                scorePercentage < 60 && 'bg-red-100 text-red-800',
              )}
            >
              {correct}/{total} ({scorePercentage}%)
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {!showResults ? (
            <Button
              onClick={handleValidation}
              disabled={answeredCount < questions.length}
              className="bg-carnet-red hover:bg-carnet-red/90 text-carnet-paper font-instrument font-semibold rounded-full"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Valider ({answeredCount}/{questions.length})
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setShowExplanations(!showExplanations)}
                variant="outline"
                className="border-carnet-rule text-carnet-ink hover:bg-carnet-paper rounded-full"
              >
                {showExplanations ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showExplanations ? 'Masquer' : 'Afficher'} les explications
              </Button>
              <Button
                onClick={resetQuiz}
                variant="outline"
                className="border-carnet-rule text-carnet-ink hover:bg-carnet-paper rounded-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
            </>
          )}
        </div>

        {saveMessage && (
          <div
            className={cn(
              'mt-4 font-instrument text-sm font-medium',
              saveMessage.includes('Erreur') ? 'text-red-600' : 'text-emerald-600',
            )}
          >
            {saveMessage}
          </div>
        )}
      </div>

      {/* Questions */}
      {questions.map((question, index) => {
        const userAnswer = answers[question.id];

        return (
          <div
            key={question.id}
            className="border border-carnet-rule rounded-2xl overflow-hidden bg-carnet-paper-2 shadow-sm"
          >
            <div className="bg-carnet-paper border-b border-carnet-rule px-6 py-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-carnet-red text-carnet-paper rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="font-instrument text-carnet-ink font-medium leading-relaxed pt-0.5">
                  {question.question}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {question.options.map((option) => {
                const isSelected = userAnswer === option.id;
                const isCorrect = option.correct;
                const showCorrectAnswer = showResults && isCorrect;
                const showWrongAnswer = showResults && isSelected && !isCorrect;

                return (
                  <div
                    key={option.id}
                    onClick={() => !showResults && handleAnswerSelect(question.id, option.id)}
                    className={cn(
                      'p-4 rounded-xl border-2 transition-all duration-200',
                      !showResults && 'cursor-pointer hover:border-carnet-red/40',
                      showResults && 'cursor-default',
                      showCorrectAnswer && 'border-emerald-500 bg-emerald-50',
                      showWrongAnswer && 'border-red-500 bg-red-50',
                      !showCorrectAnswer && !showWrongAnswer && isSelected && 'border-carnet-ink bg-carnet-paper',
                      !showCorrectAnswer && !showWrongAnswer && !isSelected && 'border-carnet-rule bg-carnet-paper-2',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                          showCorrectAnswer && 'border-emerald-600 bg-emerald-600',
                          showWrongAnswer && 'border-red-600 bg-red-600',
                          !showCorrectAnswer && !showWrongAnswer && isSelected && 'border-carnet-ink bg-carnet-ink',
                          !showCorrectAnswer && !showWrongAnswer && !isSelected && 'border-carnet-rule',
                        )}
                      >
                        {(isSelected || showCorrectAnswer) && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span
                        className={cn(
                          'font-instrument text-sm font-medium flex-1',
                          showCorrectAnswer && 'text-emerald-900',
                          showWrongAnswer && 'text-red-900',
                          !showCorrectAnswer && !showWrongAnswer && 'text-carnet-ink',
                        )}
                      >
                        {option.text}
                      </span>
                      {showCorrectAnswer && <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />}
                      {showWrongAnswer && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {showResults && showExplanations && (
              <div className="px-6 pb-6">
                <div className="bg-carnet-paper border border-carnet-rule rounded-xl p-4">
                  <h4 className="font-instrument text-sm font-bold text-carnet-ink mb-2 uppercase tracking-wide">
                    💡 Explication
                  </h4>
                  <p className="font-instrument text-sm text-carnet-ink leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpanishGrammarQuiz;
