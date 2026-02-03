import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, Eye, EyeOff, Star, Trophy, CheckCircle, XCircle, Zap } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { type MathFlashcard } from '@/data/mathFlashcardsData';

interface MathFlashcardsProps {
  flashcards: MathFlashcard[];
  title: string;
  chapterNumber: number;
  hideHeader?: boolean;
}

export const MathFlashcards: React.FC<MathFlashcardsProps> = ({
  flashcards,
  title,
  chapterNumber,
  hideHeader = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userResponses, setUserResponses] = useState<Record<number, 'correct' | 'incorrect' | 'skip'>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const totalCards = flashcards.length;
  const progressPercentage = ((currentIndex + 1) / totalCards) * 100;

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserResponses({});
    setMarkedForReview(new Set());
    setIsFlipped(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setIsFlipped(!isFlipped);
  };

  const markResponse = (response: 'correct' | 'incorrect' | 'skip') => {
    setUserResponses(prev => ({
      ...prev,
      [currentIndex]: response
    }));

    // Auto-advance after marking response
    setTimeout(() => {
      if (currentIndex < totalCards - 1) {
        nextCard();
      }
    }, 800);
  };

  const toggleReview = () => {
    setMarkedForReview(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentCard.id)) {
        newSet.delete(currentCard.id);
      } else {
        newSet.add(currentCard.id);
      }
      return newSet;
    });
  };

  // Calculate statistics
  const correctCount = Object.values(userResponses).filter(r => r === 'correct').length;
  const incorrectCount = Object.values(userResponses).filter(r => r === 'incorrect').length;
  const skipCount = Object.values(userResponses).filter(r => r === 'skip').length;

  // Navigation clavier améliorée
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ': // Espace
        e.preventDefault();
        if (showAnswer) {
          markResponse('correct');
        } else {
          toggleAnswer();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (showAnswer) {
          markResponse('incorrect');
        } else {
          prevCard();
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (showAnswer) {
          markResponse('skip');
        }
        break;
      case 'r':
      case 'R':
        e.preventDefault();
        if (showAnswer) {
          toggleReview();
        }
        break;
    }
  }, [showAnswer, toggleAnswer, markResponse, toggleReview, prevCard]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Fonction helper pour rendre du texte avec LaTeX
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

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card className="text-center p-8">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Aucune flashcard trouvée</h3>
            <p className="text-slate-600">Les flashcards de ce chapitre ne sont pas encore disponibles.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Page de fin avec statistiques
  const isCompleted = currentIndex === totalCards - 1 && showAnswer;
  if (isCompleted) {
    const accuracy = totalCards > 0 ? Math.round((correctCount / totalCards) * 100) : 0;
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card className="mt-8 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="text-center p-8">
            <div className="mb-6">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Session terminée !</h2>
              <p className="text-lg text-slate-600">Vous avez terminé toutes les flashcards.</p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">{correctCount}</div>
                <div className="text-sm text-slate-600">Correct</div>
                <CheckCircle className="h-5 w-5 text-green-600 mx-auto mt-2" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-1">{incorrectCount}</div>
                <div className="text-sm text-slate-600">Incorrect</div>
                <XCircle className="h-5 w-5 text-red-600 mx-auto mt-2" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">{accuracy}%</div>
                <div className="text-sm text-slate-600">Précision</div>
                <Zap className="h-5 w-5 text-blue-600 mx-auto mt-2" />
              </div>
            </div>


            <div className="flex gap-4 justify-center">
              <Button onClick={resetProgress} className="bg-blue-600 hover:bg-blue-700 text-white">
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* En-tête avec statistiques */}
      {!hideHeader && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-medium">Chapitre {chapterNumber}</span>
            </div>
          </div>

          {/* Barre de progression interactive */}
          <div className="relative mb-6">
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Carte {currentIndex + 1} sur {totalCards}</span>
              <span>{Math.round(progressPercentage)}% terminé</span>
            </div>
          </div>

          {/* Statistiques rapides */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{correctCount}</span>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <XCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{incorrectCount}</span>
            </div>
            <div className="flex items-center gap-2 text-orange-600">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">{markedForReview.size}</span>
            </div>
          </div>
        </div>
      )}

      {hideHeader && (
        <div className="mb-6">
          {/* Barre de progression simplifiée pour mode compact */}
          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span className="font-medium">Progression</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-6 border border-slate-200">
            <div
              className="bg-slate-800 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.max(5, progressPercentage)}%` }}
            />
          </div>
        </div>
      )}

      {/* Flashcard principale avec effet 3D */}
      <div className="relative mb-6">
        <Card
          className={`min-h-[350px] bg-white border border-slate-200 shadow-md transition-all duration-500 hover:shadow-lg ${isFlipped ? '' : ''
            }`}
        >
          <CardContent className="p-6 flex flex-col justify-center h-full relative">

            {/* Contenu principal */}
            <div className="text-center flex-1 flex flex-col justify-center">
              {!showAnswer ? (
                /* Recto - Question */
                <div className="animate-in fade-in duration-300">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
                      {renderTextWithLatex(currentCard.front)}
                    </h3>
                    {currentCard.frontLatex && (
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-inner overflow-x-auto max-w-full">
                        <LatexRenderer latex={currentCard.frontLatex} />
                      </div>
                    )}
                  </div>

                  {/* Bouton révéler avec effet */}
                  <Button
                    onClick={toggleAnswer}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg shadow-md transform transition-all duration-200 hover:scale-105"
                  >
                    <Eye className="h-5 w-5 mr-3" />
                    Révéler la réponse
                  </Button>
                </div>
              ) : (
                /* Verso - Réponse */
                <div className="animate-in slide-in-from-bottom duration-500">
                  <div className="mb-6">
                    <div className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
                      {renderTextWithLatex(currentCard.back)}
                    </div>
                    {currentCard.backLatex && (
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-inner overflow-x-auto max-w-full">
                        <LatexRenderer latex={currentCard.backLatex} />
                      </div>
                    )}
                  </div>

                  {/* Boutons d'évaluation interactive */}
                  <div className="space-y-3">
                    <p className="text-slate-600 mb-3 text-sm">Ai-je bien assimilé cette notion d'algèbre linéaire ?</p>
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={() => markResponse('correct')}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transform transition-all duration-200 hover:scale-105 flex-1 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Correct
                      </Button>
                      <Button
                        onClick={() => markResponse('incorrect')}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transform transition-all duration-200 hover:scale-105 flex-1 text-sm"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Incorrect
                      </Button>
                      <Button
                        onClick={() => markResponse('skip')}
                        variant="outline"
                        className="px-4 py-2 rounded-md border-2 transform transition-all duration-200 hover:scale-105 flex-1 text-sm"
                      >
                        Passer
                      </Button>
                    </div>

                    {/* Bouton à revoir */}
                    <Button
                      onClick={toggleReview}
                      variant="ghost"
                      className={`w-full mt-4 ${markedForReview.has(currentCard.id) ? 'text-orange-600 bg-orange-50 border-orange-200' : 'text-slate-600'}`}
                    >
                      <Star className={`h-4 w-4 mr-2 ${markedForReview.has(currentCard.id) ? 'text-orange-500' : ''}`} />
                      {markedForReview.has(currentCard.id) ? 'Retiré des révisions' : 'À revoir plus tard'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation en bas */}
      <div className="flex justify-between items-center">
        <Button
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>

        <Button
          onClick={resetProgress}
          variant="ghost"
          className="text-slate-600"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Recommencer
        </Button>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="flex items-center gap-2"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Raccourcis clavier améliorés */}
      <div className="mt-8 bg-slate-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Raccourcis clavier</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div>
            <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono">→</kbd>
            <div className="text-xs text-slate-600 mt-1">Suivant/Correct</div>
          </div>
          <div>
            <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono">←</kbd>
            <div className="text-xs text-slate-600 mt-1">Précédent/Incorrect</div>
          </div>
          <div>
            <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono">↵</kbd>
            <div className="text-xs text-slate-600 mt-1">Passer</div>
          </div>
          <div>
            <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono">R</kbd>
            <div className="text-xs text-slate-600 mt-1">À revoir</div>
          </div>
        </div>
      </div>
    </div>
  );
};
