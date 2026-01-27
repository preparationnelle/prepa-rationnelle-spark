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
import { causativesExercises, getCausativesExercisesByType, causativesExerciseCategories } from '@/data/englishCausativesExercisesData';

const CausativesExercicesPage = () => {
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
  const filteredExercises = filterExercises(getCausativesExercisesByType(selectedExerciseType));
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
    const exercise = causativesExercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    const userAnswer = userAnswers[exerciseId];
    if (!userAnswer) return;

    const isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    setValidatedAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    const answeredExercises = filteredExercises.filter(ex => userAnswers[ex.id]);
    if (answeredExercises.length === 0) return;

    let correctCount = 0;
    answeredExercises.forEach(exercise => {
      const userAnswer = userAnswers[exercise.id];
      const isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
      if (isCorrect) correctCount++;
    });

    const percentage = Math.round((correctCount / answeredExercises.length) * 100);
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

  // Fonction pour arrêter l'examen
  const stopExam = () => {
    setExamStarted(false);
    if (examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
  };

  const renderExercise = (exercise: any) => {
    const isValidated = validatedAnswers[exercise.id];
    const isCorrect = isValidated && userAnswers[exercise.id]?.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();

    return (
      <Card key={exercise.id} className={`mb-6 ${isValidated ? (isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50') : 'border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{exercise.question}</CardTitle>
              <div className="flex gap-2 mb-4">
                <Badge variant="outline" className="text-xs">
                  {exercise.level}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {exercise.category}
                </Badge>
              </div>
            </div>
            {isValidated && (
              <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {isCorrect ? <CheckCircle className="h-5 w-5" /> : <X className="h-5 w-5" />}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* QCM Options */}
          {exercise.type === 'qcm' && exercise.options && (
            <div className="space-y-2 mb-4">
              {exercise.options.map((option: string, index: number) => {
                const isSelected = userAnswers[exercise.id] === option;
                const isCorrectOption = option === exercise.correctAnswer;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerChange(exercise.id, option)}
                    disabled={examStarted && !examMode}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${isValidated
                        ? isCorrectOption
                          ? 'border-green-300 bg-green-50 text-green-800'
                          : isSelected && !isCorrect
                            ? 'border-red-300 bg-red-50 text-red-800'
                            : 'border-gray-200 bg-white'
                        : isSelected
                          ? 'border-blue-300 bg-blue-50 text-blue-800'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {/* Complete the sentence */}
          {exercise.type === 'complet' && (
            <div className="mb-4">
              <input
                type="text"
                value={userAnswers[exercise.id] || ''}
                onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                disabled={examStarted && !examMode}
                placeholder="Your answer..."
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isValidated
                    ? isCorrect
                      ? 'border-green-300 focus:ring-green-200 bg-green-50'
                      : 'border-red-300 focus:ring-red-200 bg-red-50'
                    : 'border-gray-300 focus:ring-blue-200'
                  }`}
              />
            </div>
          )}

          {/* Choice exercise */}
          {exercise.type === 'choix' && exercise.options && (
            <div className="space-y-2 mb-4">
              {exercise.options.map((option: string, index: number) => {
                const isSelected = userAnswers[exercise.id] === option;
                const isCorrectOption = option === exercise.correctAnswer;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerChange(exercise.id, option)}
                    disabled={examStarted && !examMode}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${isValidated
                        ? isCorrectOption
                          ? 'border-green-300 bg-green-50 text-green-800'
                          : isSelected && !isCorrect
                            ? 'border-red-300 bg-red-50 text-red-800'
                            : 'border-gray-200 bg-white'
                        : isSelected
                          ? 'border-blue-300 bg-blue-50 text-blue-800'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2 flex-wrap">
            {!examMode && (
              <>
                <Button
                  onClick={() => toggleHints(exercise.id)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Lightbulb className="h-4 w-4" />
                  {showHints[exercise.id] ? 'Hide hint' : 'Show hint'}
                </Button>
                <Button
                  onClick={() => validateAnswer(exercise.id)}
                  variant="outline"
                  size="sm"
                  disabled={!userAnswers[exercise.id]}
                  className="flex items-center gap-1"
                >
                  <Eye className="h-4 w-4" />
                  Check
                </Button>
                <Button
                  onClick={() => toggleCorrections(exercise.id)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  {showCorrections[exercise.id] ? 'Hide correction' : 'Show correction'}
                </Button>
              </>
            )}
          </div>

          {/* Hint */}
          {showHints[exercise.id] && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>💡 Hint :</strong> {exercise.explanation.split('.')[0]}.
              </p>
            </div>
          )}

          {/* Correction */}
          {showCorrections[exercise.id] && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                <strong>✅ Correct answer :</strong> {exercise.correctAnswer}
              </p>
              <p className="text-blue-700 text-sm mt-1">
                <strong>📝 Explanation :</strong> {exercise.explanation}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-900 transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire/causatives" className="hover:text-gray-900 transition-colors">
              Causatives structures
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercises</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <Brain className="h-9 w-9" />
            </div>
            Causatives - Exercises
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master English causative structures. Practice with have something done, get someone to do, make and let.
          </p>
        </div>

        {/* Filtres et contrôles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="h-5 w-5" />
              Exercise Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Type d'exercice */}
              <div>
                <label className="block text-sm font-medium mb-2">Exercise Type</label>
                <select
                  value={selectedExerciseType}
                  onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'choix' | 'complet')}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="qcm">Multiple Choice (QCM)</option>
                  <option value="choix">Multiple Choice</option>
                  <option value="complet">Fill in the Blank</option>
                </select>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {causativesExerciseCategories.map(category => (
                    <option key={category} value={category}>
                      {category === 'toutes' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Niveau */}
              <div>
                <label className="block text-sm font-medium mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="tous">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Mode examen */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={examMode}
                    onChange={(e) => setExamMode(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium">Exam Mode</span>
                </label>
                {examMode && (
                  <div className="flex items-center gap-2">
                    {!examStarted ? (
                      <Button onClick={startExam} className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Start Exam
                      </Button>
                    ) : (
                      <Button onClick={stopExam} variant="outline" className="flex items-center gap-2">
                        <Pause className="h-4 w-4" />
                        Stop Exam
                      </Button>
                    )}
                    {examStarted && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 rounded-lg">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{formatTime(examTime)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Compteur d'exercices */}
              <div className="text-sm text-gray-600">
                {filteredExercises.length} exercises found
                {currentExercise && ` (showing ${currentExerciseIndex + 1}/${filteredExercises.length})`}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation entre exercices */}
        {filteredExercises.length > 1 && (
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
              disabled={currentExerciseIndex === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              ← Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Exercise</span>
              <select
                value={currentExerciseIndex}
                onChange={(e) => setCurrentExerciseIndex(Number(e.target.value))}
                className="px-2 py-1 border border-gray-300 rounded"
              >
                {filteredExercises.map((_, index) => (
                  <option key={index} value={index}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">of {filteredExercises.length}</span>
            </div>

            <Button
              onClick={() => setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
              disabled={currentExerciseIndex === filteredExercises.length - 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              Next →
            </Button>
          </div>
        )}

        {/* Affichage de l'exercice actuel */}
        {currentExercise ? renderExercise(currentExercise) : (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500">No exercises found with the current filters.</p>
            </CardContent>
          </Card>
        )}

        {/* Bouton pour calculer le score */}
        {!examMode && filteredExercises.length > 0 && (
          <div className="flex justify-center gap-4 mt-10">
            <Button
              onClick={calculateScore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Finish and See Score
            </Button>
            <Button
              onClick={resetQuiz}
              variant="outline"
              className="px-8 py-3 text-lg flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <RotateCcw className="h-5 w-5" />
              Reset
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-blue-200 bg-blue-50' : 'border-blue-200 bg-blue-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-blue-800' : 'text-blue-800'}`}>
                <Award className="h-8 w-8" />
                {examMode ? 'Exam Results' : 'Your Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    ⏱️ Total time : {formatTime(examTime)}
                  </p>
                </div>
              )}
              <div className={`text-lg ${examMode ? 'text-blue-700' : 'text-blue-700'
                }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Congratulations! You passed the exam successfully.' : 'Excellent! You have a good command of time expressions.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Good result! You passed the exam.' : 'Good effort! Continue practicing to improve your score.'}
                  </div>
                ) : ( // Less than 50%
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="h-6 w-6 text-orange-500" />
                    {examMode ? 'Keep practicing! Review the material and try again.' : 'Keep practicing! Review time expressions and try again.'}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600">
                  {examMode ? 'Exam completed.' : 'Practice more to improve your understanding of time expressions.'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Bouton retour */}
        <div className="flex justify-center mt-12">
          <Link to="/formation/anglais/grammaire/causatives">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Causatives structures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CausativesExercicesPage;
