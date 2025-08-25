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

// Données d'exercices basiques pour les Adjectifs et Adverbes
const adjectivesAdverbsExercises = [
  {
    id: 'adj_qcm_1',
    type: 'qcm',
    question: 'Quel est l\'accord correct : "Las casas _____" (Les maisons blanches)',
    options: ['a) blanco', 'b) blanca', 'c) blancos', 'd) blancas'],
    correctAnswer: 'd) blancas',
    explanation: 'L\'adjectif s\'accorde en genre et nombre avec le nom : "casas" (féminin pluriel) → "blancas".',
    level: 'débutant',
    category: 'Accord des adjectifs'
  },
  {
    id: 'adj_qcm_2',
    type: 'qcm',
    question: 'Comment forme-t-on l\'adverbe à partir de "rápido" ?',
    options: ['a) rápido', 'b) rápidamente', 'c) rápida', 'd) rápidos'],
    correctAnswer: 'b) rápidamente',
    explanation: 'Pour former un adverbe, on ajoute "-mente" au féminin de l\'adjectif : "rápida" + "mente" = "rápidamente".',
    level: 'intermédiaire',
    category: 'Formation des adverbes'
  },
  // Ajoutons quelques exercices de base
  {
    id: 'adj_complet_1',
    type: 'complet',
    question: 'Complétez : "Ella es muy _____." (Elle est très intelligente)',
    correctAnswer: 'inteligente',
    explanation: '"Inteligente" ne change pas au féminin car il se termine par "-e".',
    level: 'débutant',
    category: 'Adjectifs invariables'
  }
];

const getAdjectivesAdverbsExercisesByType = (type: string) => {
  return adjectivesAdverbsExercises.filter(ex => ex.type === type);
};

const adjectivesAdverbsExerciseCategories = [
  'Accord des adjectifs',
  'Formation des adverbes',
  'Adjectifs invariables',
  'Position des adjectifs',
  'Comparatifs et superlatifs'
];

const AdjectivesAdverbsExercicesPage = () => {
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

  const filteredExercises = filterExercises(getAdjectivesAdverbsExercisesByType(selectedExerciseType));
  const currentExercise = filteredExercises[currentExerciseIndex];

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = adjectivesAdverbsExercises.find(ex => ex.id === exerciseId);
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
                La bonne réponse est : <strong>{adjectivesAdverbsExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
              </p>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
            <Link to="/formation/espagnol/grammaire/adjectives-adverbs" className="hover:text-gray-900 transition-colors">
              Adjectifs et Adverbes
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire/adjectives-adverbs">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux Adjectifs et Adverbes
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-emerald-600 text-white">
              <Target className="h-9 w-9" />
            </div>
            Exercices Adjectifs et Adverbes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez les accords, la formation des adverbes et les subtilités des adjectifs espagnols
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Prépa ECG</Badge>
            <Badge variant="outline">{adjectivesAdverbsExercises.length} exercices</Badge>
            <Badge className="bg-emerald-600">Accord et formation</Badge>
          </div>
        </div>

        <Card className="mb-8 border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-emerald-800">
              <Target className="h-5 w-5" />
              Exercices de base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-emerald-700">
              🚧 Cette section est en cours de développement. Quelques exercices de base sont disponibles pour tester la structure.
            </p>
          </CardContent>
        </Card>

        {filteredExercises.length > 0 && currentExercise && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-emerald-600" />
              Question {currentExerciseIndex + 1} / {filteredExercises.length}
              <Badge variant="outline" className="ml-2">
                {currentExercise.category} - {currentExercise.level}
              </Badge>
            </h2>

            <Card key={currentExercise.id} className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-emerald-800">
                  <FileText className="h-5 w-5" />
                  Exercice de {selectedExerciseType === 'qcm' ? 'QCM' : selectedExerciseType === 'choix' ? 'Choix multiples' : 'Mots à compléter'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">🎯 Question :</h4>
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
                          className="text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-gray-800">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">✍️ Votre réponse :</h4>
                    <input
                      type="text"
                      value={userAnswers[currentExercise.id] || ''}
                      onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                      className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg text-gray-800"
                      placeholder="Tapez votre réponse ici..."
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
          </div>
        )}

        {filteredExercises.length === 0 && (
          <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="text-center py-8">
              <p className="text-emerald-600 text-lg">
                🚧 Exercices en cours de développement pour cette catégorie.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdjectivesAdverbsExercicesPage;