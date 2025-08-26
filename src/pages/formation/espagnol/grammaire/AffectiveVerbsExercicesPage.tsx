import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  ArrowLeft,
  Target,
  Lightbulb,
  CheckCircle,
  Eye,
  FileText,
  Play,
  RotateCcw,
  BookOpen as BookOpenIcon,
  Award,
  Trophy,
  X
} from 'lucide-react';
import { affectiveVerbsExercises, getAffectiveVerbsExercisesByType, affectiveVerbsExerciseCategories } from '@/data/spanishAffectiveVerbsExercisesData';

const AffectiveVerbsExercicesPage = () => {
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
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [selectedExerciseType, setSelectedExerciseType] = useState<'qcm' | 'choix' | 'complet'>('qcm');

  const filterExercises = (exercises: any[]) => {
    return exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'toutes' || exercise.category === selectedCategory;
      const levelMatch = selectedLevel === 'tous' || exercise.level === selectedLevel;
      return categoryMatch && levelMatch;
    });
  };

  const filteredExercises = filterExercises(getAffectiveVerbsExercisesByType(selectedExerciseType));
  const currentExercise = filteredExercises[currentExerciseIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!examStarted) {
        if (event.key === 'ArrowLeft') {
          setCurrentExerciseIndex(prev => Math.max(0, prev - 1));
        } else if (event.key === 'ArrowRight') {
          setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredExercises.length, examStarted]);

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = affectiveVerbsExercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;
    
    const userAnswer = userAnswers[exerciseId];
    if (!userAnswer) return;
    
    let isCorrect = false;
    if (exercise.type === 'qcm' || exercise.type === 'choix') {
      const userLetter = userAnswer.split(')')[0];
      const correctLetter = exercise.correctAnswer.split(')')[0];
      isCorrect = userLetter === correctLetter;
    } else {
      isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    }
    
    setValidatedAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;

    affectiveVerbsExercises.forEach(exercise => {
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
    setShowCorrections({});
    setExamStarted(false);
    setExamTime(0);
    if (examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
  };

  const startExam = () => {
    setExamStarted(true);
    setExamTime(0);
    const timer = setInterval(() => {
      setExamTime(prev => prev + 1);
    }, 1000);
    setExamTimer(timer);
  };

  const finishExam = () => {
    if (examTimer) {
      clearInterval(examTimer);
      setExamTimer(null);
    }
    calculateScore();
    setExamStarted(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderActionButtons = (exerciseId: string) => {
    if (examMode && examStarted) {
      return null;
    }

    return (
      <>
        <div className="flex gap-3">
          <Button 
            onClick={() => validateAnswer(exerciseId)}
            disabled={!userAnswers[exerciseId]}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
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

        {validatedAnswers[exerciseId] !== undefined && (
          <div className={`rounded-lg p-4 border-2 ${
            validatedAnswers[exerciseId] 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {validatedAnswers[exerciseId] ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
              <span className={`font-semibold ${
                validatedAnswers[exerciseId] ? 'text-green-800' : 'text-red-800'
              }`}>
                {validatedAnswers[exerciseId] ? '✅ Correct !' : '❌ Incorrect'}
              </span>
            </div>
            {!validatedAnswers[exerciseId] && (
              <p className="text-red-700 mt-2">
                La bonne réponse est : <strong>{affectiveVerbsExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
              </p>
            )}
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire/affective-verbs" className="hover:text-gray-900 transition-colors">
              Verbes Affectifs
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire/affective-verbs">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux Verbes Affectifs
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Target className="h-9 w-9" />
            </div>
            Exercices Verbes Affectifs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez gustar, doler, encantar et tous les verbes affectifs avec ces exercices de niveau prépa ECG
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Prépa ECG</Badge>
            <Badge variant="outline">{affectiveVerbsExercises.length} exercices</Badge>
            <Badge className="bg-orange-600">Constructions complexes</Badge>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <Button
            variant={examMode ? "default" : "outline"}
            onClick={() => setExamMode(prev => !prev)}
            className={examMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-blue-600 text-blue-600 hover:bg-blue-50"}
          >
            {examMode ? "Désactiver le Mode Examen" : "Activer le Mode Examen"}
          </Button>
        </div>

        {examMode && (
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={startExam}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Commencer l'examen
                  </Button>
                  <p className="text-sm text-gray-600">⚠️ Le feedback sera désactivé.</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-blue-200 rounded-lg px-4 py-2">
                    <span className="text-blue-900 font-mono text-lg">
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

        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
              <Target className="h-5 w-5" />
              Filtrer les exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-orange-700 mb-2">
                  Catégorie :
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={examStarted}
                >
                  <option value="toutes">Toutes les catégories</option>
                  {affectiveVerbsExerciseCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-700 mb-2">
                  Niveau :
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={examStarted}
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

        {!examStarted && (
          <Card className="mb-8 border-4 border-blue-500 bg-gradient-to-r from-blue-100 to-indigo-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2 text-blue-900">
                <BookOpenIcon className="h-6 w-6" />
                Choisir le type d'exercices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant={selectedExerciseType === 'qcm' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('qcm')}
                  className={selectedExerciseType === 'qcm' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
                >
                  QCM ({getAffectiveVerbsExercisesByType('qcm').length})
                </Button>
                <Button 
                  variant={selectedExerciseType === 'choix' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('choix')}
                  className={selectedExerciseType === 'choix' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
                >
                  Choix multiples ({getAffectiveVerbsExercisesByType('choix').length})
                </Button>
                <Button 
                  variant={selectedExerciseType === 'complet' ? 'default' : 'outline'} 
                  onClick={() => setSelectedExerciseType('complet')}
                  className={selectedExerciseType === 'complet' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
                >
                  Mots à compléter ({getAffectiveVerbsExercisesByType('complet').length})
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {filteredExercises.length > 0 && currentExercise && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-orange-600" />
              Question {currentExerciseIndex + 1} / {filteredExercises.length}
              <Badge variant="outline" className="ml-2">
                {currentExercise.category} - {currentExercise.level}
              </Badge>
            </h2>

            <Card key={currentExercise.id} className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
                  <FileText className="h-5 w-5" />
                  Exercice de {selectedExerciseType === 'qcm' ? 'QCM' : selectedExerciseType === 'choix' ? 'Choix multiples' : 'Mots à compléter'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">🎯 Question :</h4>
                  <p className="text-lg text-gray-800 font-mono">{currentExercise.question}</p>
                </div>

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
                          className="text-orange-600 focus:ring-orange-500"
                          disabled={examMode && examStarted}
                        />
                        <span className="text-gray-800">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-2">✍️ Votre réponse :</h4>
                    <input
                      type="text"
                      value={userAnswers[currentExercise.id] || ''}
                      onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                      className="w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg text-gray-800"
                      placeholder="Tapez votre réponse ici..."
                      disabled={examMode && examStarted}
                    />
                  </div>
                )}

                {renderActionButtons(currentExercise.id)}

                {showCorrections[currentExercise.id] && (
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      ✅ Correction et explication :
                    </h4>
                    <p className="text-lg text-green-800 font-medium mb-2">{currentExercise.correctAnswer}</p>
                    <p className="text-sm text-green-700">{currentExercise.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-6">
              <Button 
                onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
                disabled={currentExerciseIndex === 0 || examStarted}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Question précédente
              </Button>
              <span className="text-sm text-gray-500 hidden md:block">Utilisez les flèches ← → pour naviguer</span>
              <Button 
                onClick={() => setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
                disabled={currentExerciseIndex === filteredExercises.length - 1 || examStarted}
                variant="outline"
                className="flex items-center gap-2"
              >
                Question suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {filteredExercises.length === 0 && (
          <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
            <CardContent className="text-center py-8">
              <p className="text-pink-600 text-lg">
                Aucun exercice trouvé avec les filtres actuels. Modifiez vos critères de recherche.
              </p>
            </CardContent>
          </Card>
        )}

        {!examMode && (
          <div className="flex justify-center gap-4 mt-10">
            <Button 
              onClick={calculateScore} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Terminer et voir le score
            </Button>
            <Button 
              onClick={resetQuiz} 
              variant="outline" 
              className="px-8 py-3 text-lg flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <RotateCcw className="h-5 w-5" />
              Réinitialiser
            </Button>
          </div>
        )}

        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-blue-200 bg-blue-50' : 'border-pink-200 bg-pink-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-blue-800' : 'text-pink-800'}`}>
                <Award className="h-8 w-8" />
                {examMode ? 'Résultats de l\'Examen' : 'Votre Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    ⏱️ Temps total : {formatTime(examTime)}
                  </p>
                </div>
              )}
              <div className={`text-lg ${
                examMode ? 'text-blue-700' : 'text-pink-700'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous maîtrisez parfaitement les verbes affectifs.' : 'Excellent ! Les verbes affectifs n\'ont plus de secrets pour vous.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Vous comprenez bien les constructions affectives.' : 'Bon effort ! Continuez à pratiquer les subtilités.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                    {examMode ? 'Les verbes affectifs demandent plus de travail. Révisez les bases !' : 'Les constructions affectives sont complexes. Révisez et réessayez !'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="text-pink-700 text-sm">
                    💡 En mode normal, vous pouvez voir les explications sur gustar, doler, et toutes les constructions affectives.
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

export default AffectiveVerbsExercicesPage;