
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shuffle, RotateCcw, CheckCircle, X, ArrowRight, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { pythonCommands } from '@/data/pythonCommands';

interface FlashcardData {
  command: string;
  description: string;
  category: string;
}

const PythonFlashcardGenerator = () => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);

  // Gestion du clavier
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (isFinished) return;
    
    switch(event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!showAnswer) {
          handleShowAnswer();
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
    }
  }, [showAnswer, isFinished]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    // Créer toutes les flashcards à partir des données
    const allCards: FlashcardData[] = [];
    
    Object.entries(pythonCommands).forEach(([key, section]) => {
      section.commands.forEach(cmd => {
        allCards.push({
          command: cmd.command,
          description: cmd.description,
          category: section.title
        });
      });
    });
    
    // Mélanger les cartes
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
  }, []);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const goToNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  if (flashcards.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Chargement des flashcards...</p>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score.correct / score.total) * 100);
    
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Quiz terminé !
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-6xl font-bold text-primary">
              {percentage}%
            </div>
            <p className="text-xl">
              Vous avez réussi <strong>{score.correct}</strong> sur <strong>{score.total}</strong> questions
            </p>
            
            <div className="space-y-2">
              {percentage >= 80 && (
                <p className="text-green-600 font-semibold">🎉 Excellent ! Vous maîtrisez très bien Python !</p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-orange-600 font-semibold">👍 Bon travail ! Quelques révisions et ce sera parfait !</p>
              )}
              {percentage < 60 && (
                <p className="text-red-600 font-semibold">💪 Il faut encore travailler, mais c'est un bon début !</p>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </Button>
              <Button variant="outline" onClick={handleShuffle}>
                <Shuffle className="h-4 w-4 mr-2" />
                Nouveau mélange
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <TooltipProvider>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentIndex + 1} sur {flashcards.length}</span>
            <span>Score: {score.correct}/{score.total}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Flashcard */}
        <Card className="min-h-[400px]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline">{currentCard.category}</Badge>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <div className="space-y-1 text-sm">
                      <p><strong>Comment ça marche ?</strong></p>
                      <p>1. Une commande Python s'affiche</p>
                      <p>2. Essayez de deviner ce qu'elle fait</p>
                      <p>3. Appuyez sur Entrée ou cliquez pour révéler la réponse</p>
                      <p>4. Indiquez si vous avez trouvé ou non</p>
                      <p>5. Obtenez votre score final sur 54 commandes</p>
                      <p><strong>Raccourcis :</strong> ← → pour naviguer, Entrée pour révéler</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShuffle}
                  className="flex items-center gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Mélanger
                </Button>
              </div>
            </div>
          </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-4">
            <h3 className="text-sm text-muted-foreground">Que fait cette commande Python ?</h3>
            <div className="bg-slate-100 p-6 rounded-lg">
              <code className="text-2xl font-mono font-bold text-blue-600">
                {currentCard.command}
              </code>
            </div>
          </div>

          {showAnswer ? (
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800 font-semibold">
                  {currentCard.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">Avez-vous trouvé la bonne réponse ?</p>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => handleAnswer(true)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Oui, j'ai trouvé !
                  </Button>
                  <Button
                    onClick={() => handleAnswer(false)}
                    variant="outline"
                    className="flex items-center gap-2 border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                    Non, je me suis trompé
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Button
                onClick={handleShowAnswer}
                size="lg"
                className="flex items-center gap-2"
              >
                Révéler la réponse
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      </div>
    </TooltipProvider>
  );
};

export default PythonFlashcardGenerator;
