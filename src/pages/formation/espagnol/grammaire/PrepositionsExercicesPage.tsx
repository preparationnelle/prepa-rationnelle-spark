import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  BookOpen,
  ArrowLeft,
  Clock,
  Target,
  Lightbulb,
  CheckCircle,
  Eye,
  FileText,
  MessageSquare,
  Users,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Table,
  BookOpen as BookOpenIcon,
  Brain,
  Award,
  Trophy,
  Star,
  BarChart3,
  X
} from 'lucide-react';
import { prepositionsExercises, getPrepositionsExercisesByType, prepositionsExerciseCategories } from '@/data/spanishPrepositionsExercisesData';

const PrepositionsExercicesPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [validatedAnswers, setValidatedAnswers] = useState<{ [key: string]: boolean }>({});
  const [score, setScore] = useState<number | null>(null);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('toutes');
  const [selectedLevel, setSelectedLevel] = useState<string>('tous');
  const [examMode, setExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examTime, setExamTime] = useState<number>(0);
  const [examTimer, setExamTimer] = useState<NodeJS.Timeout | null>(null);

  // New state for single question display
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [selectedExerciseType, setSelectedExerciseType] = useState<'qcm' | 'choix' | 'complet'>('qcm');

  // Filtrer les exercices selon les sélections
  const filterExercises = (exercises: any[]) => {
    return exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'toutes' || exercise.category === selectedCategory;
      const levelMatch = selectedLevel === 'tous' || exercise.level === selectedLevel;
      return categoryMatch && levelMatch;
    });
  };

  // Filtered exercises based on type and category/level
  const filteredExercises = filterExercises(getPrepositionsExercisesByType(selectedExerciseType));
  const currentExercise = filteredExercises[currentExerciseIndex];

  // Keyboard navigation for exercises
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!examStarted) { // Only enable keyboard navigation outside exam mode
        if (event.key === 'ArrowLeft') {
          setCurrentExerciseIndex(prev => Math.max(0, prev - 1));
        } else if (event.key === 'ArrowRight') {
          setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredExercises.length, examStarted]); // Re-run if filteredExercises length or examMode changes

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = prepositionsExercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;
    
    const userAnswer = userAnswers[exerciseId];
    if (!userAnswer) return;
    
    let isCorrect = false;
    
    if (exercise.type === 'qcm' || exercise.type === 'choix') {
      // Pour QCM et choix multiples, extraire la lettre de la réponse
      const userLetter = userAnswer.split(')')[0];
      const correctLetter = exercise.correctAnswer.split(')')[0];
      isCorrect = userLetter === correctLetter;
    } else {
      // Pour les mots à compléter, comparer directement
      isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    }
    
    setValidatedAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;

    prepositionsExercises.forEach(exercise => {
      totalQuestions++;
      const userAnswer = userAnswers[exercise.id];
      if (!userAnswer) return;

      let isCorrect = false;
      if (exercise.type === 'qcm' || exercise.type === 'choix') {
        const userLetter = userAnswer.split(')')[0];
        const correctLetter = exercise.correctAnswer.split(')')[0];
        isCorrect = userLetter === correctLetter;
      } else {
        isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
      }

      if (isCorrect) correctAnswers++;
    });

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(percentage);
    setShowScore(true);
    
    // Si c'est le mode examen, arrêter le timer
    if (examMode && examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setValidatedAnswers({});
    setScore(null);
    setShowScore(false);
    setShowHints({});
    setShowCorrections({});
    setExamStarted(false);
    setExamTime(0);
    if (examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
  };

  // Fonction pour démarrer l'examen
  const startExam = () => {
    setExamStarted(true);
    setExamTime(0);
    const timer = setInterval(() => {
      setExamTime(prev => prev + 1);
    }, 1000);
    setExamTimer(timer);
  };

  // Fonction pour terminer l'examen
  const finishExam = () => {
    if (examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
    calculateScore();
    setExamStarted(false);
  };

  // Fonction pour formater le temps
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Fonction helper pour générer les boutons d'action et le feedback
  const renderActionButtons = (exerciseId: string) => {
    if (examMode && examStarted) {
      // Mode examen : pas de boutons de validation ni de feedback
      return null;
    }

    return (
      <>
        {/* Boutons d'action */}
        <div className="flex gap-3">
          <Button 
            onClick={() => validateAnswer(exerciseId)}
            disabled={!userAnswers[exerciseId]}
            className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper flex items-center gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Valider ma réponse
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toggleCorrections(exerciseId)}
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            {showCorrections[exerciseId] ? 'Masquer la correction' : 'Voir la correction'}
          </Button>
        </div>

        {/* Feedback immédiat */}
        {validatedAnswers[exerciseId] !== undefined && (
          <div className={`rounded-lg p-4 border-2 ${
            validatedAnswers[exerciseId] 
              ? 'bg-[rgba(193,68,58,0.05)] border-[rgba(193,68,58,0.25)]' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {validatedAnswers[exerciseId] ? (
                <CheckCircle className="h-5 w-5 text-carnet-red" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
              <span className={`font-semibold ${
                validatedAnswers[exerciseId] ? 'text-carnet-red-deep' : 'text-red-800'
              }`}>
                {validatedAnswers[exerciseId] ? '✅ Correct !' : '❌ Incorrect'}
              </span>
            </div>
            {!validatedAnswers[exerciseId] && (
              <p className="text-red-700 mt-2">
                La bonne réponse est : <strong>{prepositionsExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
              </p>
            )}
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    // Reset index when filters or type change
    setCurrentExerciseIndex(0);
  }, [selectedCategory, selectedLevel, selectedExerciseType]);

  useEffect(() => {
    if (!examMode || !examStarted) {
      if (examTimer) {
        clearInterval(examTimer);
        setExamTimer(null);
      }
    }
  }, [examMode, examStarted]);

  return (
    <div className="carnet-paper min-h-screen font-instrument text-carnet-ink">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-carnet-red transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/grammaire/prepositions" className="hover:text-carnet-red transition-colors">
              Prépositions et Locutions
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <span className="text-carnet-ink font-semibold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire/prepositions">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux Prépositions et Locutions
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-lora text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red text-carnet-paper">
              <Target className="h-9 w-9" />
            </div>
            Exercices Prépositions et Locutions
          </h1>
          <p className="text-xl text-carnet-ink-mute max-w-3xl mx-auto">
            Testez vos connaissances avec ces exercices progressifs sur les prépositions et locutions espagnoles
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Débutant - Avancé</Badge>
            <Badge variant="outline">{prepositionsExercises.length} exercices</Badge>
            <Badge className="bg-carnet-red">Module essentiel</Badge>
          </div>
        </div>

        {/* Exam Mode Toggle Button */}
        <div className="flex justify-end mb-4">
          <Button
            variant={examMode ? "default" : "outline"}
            onClick={() => setExamMode(prev => !prev)}
            className={examMode ? "bg-carnet-ink hover:bg-carnet-red text-carnet-paper" : "border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.05)]"}
          >
            {examMode ? "Désactiver le Mode Examen" : "Activer le Mode Examen"}
          </Button>
        </div>

        {/* Exam Timer and Controls (visible only in exam mode and when started) */}
        {examMode && (
          <Card className="mb-8 border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={startExam}
                    className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper px-6 py-2"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Commencer l'examen
                  </Button>
                  <p className="text-sm text-carnet-ink-mute">⚠️ Le feedback sera désactivé.</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-[rgba(193,68,58,0.15)] rounded-lg px-4 py-2">
                    <span className="text-carnet-red-deep font-mono text-lg">
                      ⏱️ {formatTime(examTime)}
                    </span>
                  </div>
                  <Button
                    onClick={finishExam}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Terminer l'examen
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Filtres */}
        <Card className="mb-8 border-2 border-[rgba(193,68,58,0.25)] bg-gradient-to-r from-[rgba(193,68,58,0.05)] to-amber-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-carnet-red-deep">
              <Target className="h-5 w-5" />
              Filtrer les exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-carnet-red mb-2">
                  Catégorie :
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-[rgba(193,68,58,0.35)] rounded-md focus:outline-none focus:ring-2 focus:ring-carnet-red"
                  disabled={examStarted} // Disable filters in exam mode
                >
                  <option value="toutes">Toutes les catégories</option>
                  {prepositionsExerciseCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-carnet-red mb-2">
                  Niveau :
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-[rgba(193,68,58,0.35)] rounded-md focus:outline-none focus:ring-2 focus:ring-carnet-red"
                  disabled={examStarted} // Disable filters in exam mode
                >
                  <option value="tous">Tous les niveaux</option>
                  <option value="débutant">Débutant</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="avancé">Avancé</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section de sélection du type d'exercice */}
        {!examStarted && ( // Only show type selection outside exam mode
          <Card className="mb-8 border-4 border-carnet-red bg-[rgba(193,68,58,0.08)] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2 text-carnet-red-deep">
                <BookOpenIcon className="h-6 w-6" />
                Choisir le type d'exercices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant={selectedExerciseType === 'qcm' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('qcm')}
                  className={selectedExerciseType === 'qcm' ? 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper' : 'border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.05)]'}
                >
                  QCM ({getPrepositionsExercisesByType('qcm').length})
                </Button>
                <Button 
                  variant={selectedExerciseType === 'choix' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('choix')}
                  className={selectedExerciseType === 'choix' ? 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper' : 'border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.05)]'}
                >
                  Choix multiples ({getPrepositionsExercisesByType('choix').length})
                </Button>
                <Button 
                  variant={selectedExerciseType === 'complet' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('complet')}
                  className={selectedExerciseType === 'complet' ? 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper' : 'border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.05)]'}
                >
                  Mots à compléter ({getPrepositionsExercisesByType('complet').length})
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Affichage d'une seule question à la fois */}
        {filteredExercises.length > 0 && currentExercise && (
          <div className="mb-12">
            <h2 className="text-3xl font-lora text-carnet-ink mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-carnet-red" />
              Question {currentExerciseIndex + 1} / {filteredExercises.length}
              <Badge variant="outline" className="ml-2">
                {currentExercise.category} - {currentExercise.level}
              </Badge>
            </h2>

            <Card key={currentExercise.id} className="border-2 border-[rgba(193,68,58,0.25)] bg-gradient-to-r from-[rgba(193,68,58,0.05)] to-amber-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-carnet-red-deep">
                  <FileText className="h-5 w-5" />
                  Exercice de {selectedExerciseType === 'qcm' ? 'QCM' : selectedExerciseType === 'choix' ? 'Choix multiples' : 'Mots à compléter'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Question */}
                <div className="bg-white/70 rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                  <h4 className="font-semibold text-carnet-red-deep mb-2">Question :</h4>
                  <p className="text-lg text-carnet-ink font-mono">{currentExercise.question}</p>
                </div>

                {/* Options / Input pour la réponse */}
                {currentExercise.type === 'qcm' || currentExercise.type === 'choix' ? (
                  <div className="space-y-2">
                    {currentExercise.options?.map((option, index) => (
                      <label key={index} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name={currentExercise.id}
                          value={option}
                          checked={userAnswers[currentExercise.id] === option}
                          onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                          className="text-carnet-red focus:ring-carnet-red"
                          disabled={examMode && examStarted} // Disable input in exam mode
                        />
                        <span className="text-carnet-ink">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                    <h4 className="font-semibold text-carnet-red-deep mb-2">✍️ Votre réponse :</h4>
                    <input
                      type="text"
                      value={userAnswers[currentExercise.id] || ''}
                      onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                      className="w-full p-2 border border-[rgba(193,68,58,0.35)] rounded-md focus:outline-none focus:ring-2 focus:ring-carnet-red text-lg text-carnet-ink"
                      placeholder="Tapez votre réponse ici..."
                      disabled={examMode && examStarted} // Disable input in exam mode
                    />
                  </div>
                )}

                {renderActionButtons(currentExercise.id)}

                {/* Correction */}
                {showCorrections[currentExercise.id] && (
                  <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                    <h4 className="font-semibold text-carnet-red-deep mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      ✅ Correction et explication :
                    </h4>
                    <p className="text-lg text-carnet-red-deep font-medium mb-2">{currentExercise.correctAnswer}</p>
                    <p className="text-sm text-carnet-ink-soft">{currentExercise.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
                disabled={currentExerciseIndex === 0 || examStarted} // Disable in exam mode
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Question précédente
              </Button>
              <span className="text-sm text-carnet-ink-mute hidden md:block">Utilisez les flèches ← → pour naviguer</span>
              <Button 
                onClick={() => setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
                disabled={currentExerciseIndex === filteredExercises.length - 1 || examStarted} // Disable in exam mode
                variant="outline"
                className="flex items-center gap-2"
              >
                Question suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {filteredExercises.length === 0 && ( // Message si aucun exercice
          <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-gradient-to-r from-[rgba(193,68,58,0.05)] to-amber-50">
            <CardContent className="text-center py-8">
              <p className="text-carnet-red text-lg">
                Aucun exercice trouvé avec les filtres actuels. Modifiez vos critères de recherche.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Boutons de contrôle (globaux si pas en mode examen) */}
        {!examMode && (
          <div className="flex justify-center gap-4 mt-10">
            <Button 
              onClick={calculateScore} 
              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper px-8 py-3 text-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Terminer et voir le score
            </Button>
            <Button 
              onClick={resetQuiz} 
              variant="outline" 
              className="px-8 py-3 text-lg flex items-center gap-2 border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.05)]"
            >
              <RotateCcw className="h-5 w-5" />
              Réinitialiser
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]' : 'border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-carnet-red-deep' : 'text-carnet-red-deep'}`}>
                <Award className="h-8 w-8" />
                {examMode ? 'Résultats de l\'Examen' : 'Votre Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-[rgba(193,68,58,0.08)] rounded-lg border border-[rgba(193,68,58,0.25)]">
                  <p className="text-carnet-red-deep font-medium">
                    ⏱️ Temps total : {formatTime(examTime)}
                  </p>
                </div>
              )}
              <div className={`text-lg ${
                examMode ? 'text-carnet-red' : 'text-carnet-red'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les prépositions et locutions espagnoles.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Vous avez validé l\'examen.' : 'Bon effort ! Continuez à pratiquer pour améliorer votre score.'}
                  </div>
                ) : ( // Less than 50%
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-carnet-red" />
                    {examMode ? 'Examen non validé. Continuez à vous entraîner !' : 'Ne vous découragez pas ! Révisez les règles et réessayez.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-[rgba(193,68,58,0.05)] rounded-lg border border-[rgba(193,68,58,0.25)]">
                  <p className="text-carnet-red text-sm">
                    💡 En mode normal, vous pouvez voir les corrections détaillées de chaque exercice.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PrepositionsExercicesPage;