import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, Brain, Target, Trophy } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

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
  };

  const score = answers.filter(Boolean).length;

  if (isCompleted) {
    return (
      <Card className="mt-8 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-purple-800">🎉 Quiz terminé !</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-purple-700">
              {score} / {questions.length}
            </div>
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              Score: {Math.round((score / questions.length) * 100)}%
            </Badge>
            <p className="text-gray-700 text-lg">
              {score === questions.length 
                ? "Parfait ! Vous maîtrisez parfaitement ce chapitre." 
                : score >= questions.length * 0.7
                ? "Très bien ! Quelques révisions et ce sera parfait."
                : "Continuez à vous entraîner, vous y arriverez !"}
            </p>
            <Button onClick={resetQuiz} className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-8 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-sm opacity-90">Chapitre {chapterNumber} : {chapterTitle}</p>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-800">
              Question {currentQuestion + 1}
            </h3>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <p className="text-gray-700 mb-3">
                {questions[currentQuestion].question}
              </p>
              {questions[currentQuestion].latex && (
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={questions[currentQuestion].latex} />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'
                } ${showResult && index === questions[currentQuestion].correctAnswer ? 'border-green-500 bg-green-50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? showResult
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedAnswer === index && showResult && (
                      index === questions[currentQuestion].correctAnswer ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )
                    )}
                    {selectedAnswer === index && !showResult && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {!showResult ? (
            <Button 
              onClick={checkAnswer} 
              disabled={selectedAnswer === null}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Target className="h-4 w-4 mr-2" />
              Vérifier la réponse
            </Button>
          ) : (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border-l-4 ${
                answers[currentQuestion] 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-red-50 border-red-400'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {answers[currentQuestion] ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-semibold">Correct !</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="text-red-700 font-semibold">Incorrect</span>
                    </>
                  )}
                </div>
                
                {questions[currentQuestion].explanation && (
                  <p className={`text-sm ${answers[currentQuestion] ? 'text-green-600' : 'text-red-600'}`}>
                    {questions[currentQuestion].explanation}
                  </p>
                )}
              </div>

              <Button onClick={nextQuestion} className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 