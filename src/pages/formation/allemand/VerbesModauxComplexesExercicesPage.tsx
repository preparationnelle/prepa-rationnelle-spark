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
  CheckCircle,
  Eye,
  FileText,
  X,
  Award,
  Trophy,
  Lightbulb
} from 'lucide-react';

// Données d'exercices pour les verbes modaux complexes
const verbesModauxComplexesExercises = [
  // QCM existants (19 total)
  {
    id: 'modal-qcm-3',
    type: 'qcm',
    category: 'Verbes modaux de base',
    level: 'intermédiaire',
    question: 'Quel verbe modal exprime la possibilité ?',
    options: [
      'a) Können',
      'b) Müssen',
      'c) Sollen',
      'd) Wollen'
    ],
    correctAnswer: 'a) Können',
    explanation: '"Können" exprime la capacité ou la possibilité.'
  },
  {
    id: 'modal-qcm-4',
    type: 'qcm',
    category: 'Verbes modaux de base',
    level: 'avancé',
    question: 'Quel verbe modal exprime l\'obligation ?',
    options: [
      'a) Dürfen',
      'b) Können',
      'c) Müssen',
      'd) Wollen'
    ],
    correctAnswer: 'c) Müssen',
    explanation: '"Müssen" exprime une obligation forte.'
  },
  {
    id: 'modal-qcm-5',
    type: 'qcm',
    category: 'Conjugaison des modaux',
    level: 'intermédiaire',
    question: 'Comment se conjugue "können" à la 1ère personne du singulier ?',
    options: [
      'a) Kann',
      'b) Kannst',
      'c) Kann',
      'd) Können'
    ],
    correctAnswer: 'a) Kann',
    explanation: '"Können" a une conjugaison irrégulière.'
  },
  {
    id: 'modal-qcm-6',
    type: 'qcm',
    category: 'Conjugaison des modaux',
    level: 'avancé',
    question: 'Quel est le prétérit de "dürfen" ?',
    options: [
      'a) Durfte',
      'b) Dürfte',
      'c) Durft',
      'd) Gedurft'
    ],
    correctAnswer: 'a) Durfte',
    explanation: 'Le prétérit de "dürfen" est "durfte".'
  },
  {
    id: 'modal-qcm-7',
    type: 'qcm',
    category: 'Modaux avec infinitif',
    level: 'intermédiaire',
    question: 'Où se place l\'infinitif avec un verbe modal ?',
    options: [
      'a) Au début de la phrase',
      'b) Avant le verbe modal',
      'c) Après le verbe modal',
      'd) Au milieu de la phrase'
    ],
    correctAnswer: 'c) Après le verbe modal',
    explanation: 'L\'infinitif se place en fin de proposition avec les modaux.'
  },
  {
    id: 'modal-qcm-8',
    type: 'qcm',
    category: 'Modaux au passé',
    level: 'avancé',
    question: 'Comment forme-t-on le passé composé avec "haben" + "wollen" ?',
    options: [
      'a) Hat gewollt',
      'b) Hat wollen',
      'c) Ist gewollt',
      'd) Ist wollen'
    ],
    correctAnswer: 'a) Hat gewollt',
    explanation: 'Les modaux utilisent "haben" + participe passé.'
  },
  {
    id: 'modal-qcm-9',
    type: 'qcm',
    category: 'Modaux au subjonctif',
    level: 'intermédiaire',
    question: 'Quel est le subjonctif II de "sollen" ?',
    options: [
      'a) Sollte',
      'b) Sollte',
      'c) Sollte',
      'd) Sollte'
    ],
    correctAnswer: 'a) Sollte',
    explanation: 'Le subjonctif II de "sollen" est régulier.'
  },
  {
    id: 'modal-qcm-10',
    type: 'qcm',
    category: 'Modaux avec "lassen"',
    level: 'avancé',
    question: 'Comment dit-on "faire réparer quelque chose" ?',
    options: [
      'a) Etwas reparieren lassen',
      'b) Etwas lassen reparieren',
      'c) Lassen reparieren etwas',
      'd) Reparieren lassen etwas'
    ],
    correctAnswer: 'a) Etwas reparieren lassen',
    explanation: '"Lassen" + infinitif exprime "faire faire quelque chose".'
  },
  {
    id: 'modal-qcm-11',
    type: 'qcm',
    category: 'Modaux de politesse',
    level: 'intermédiaire',
    question: 'Quel modal utilise-t-on pour demander poliment ?',
    options: [
      'a) Können',
      'b) Dürfen',
      'c) Sollen',
      'd) Müssen'
    ],
    correctAnswer: 'b) Dürfen',
    explanation: '"Dürfen" exprime la permission et la politesse.'
  },
  {
    id: 'modal-qcm-12',
    type: 'qcm',
    category: 'Modaux avec négation',
    level: 'avancé',
    question: 'Comment nier "Ich kann schwimmen" ?',
    options: [
      'a) Ich kann nicht schwimmen',
      'b) Ich nicht kann schwimmen',
      'c) Ich kann schwimmen nicht',
      'd) Nicht ich kann schwimmen'
    ],
    correctAnswer: 'a) Ich kann nicht schwimmen',
    explanation: '"Nicht" se place avant l\'infinitif avec les modaux.'
  },
  {
    id: 'modal-qcm-13',
    type: 'qcm',
    category: 'Modaux au futur',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le futur avec un modal ?',
    options: [
      'a) Werden + modal + infinitif',
      'b) Modal + werden + infinitif',
      'c) Werden + infinitif + modal',
      'd) Infinitif + werden + modal'
    ],
    correctAnswer: 'a) Werden + modal + infinitif',
    explanation: 'Le futur avec modal utilise "werden" + modal + infinitif.'
  },
  {
    id: 'modal-qcm-14',
    type: 'qcm',
    category: 'Modaux dans les subordonnées',
    level: 'avancé',
    question: 'Où se place le modal dans une subordonnée ?',
    options: [
      'a) Au début',
      'b) Avant le sujet',
      'c) Après l\'infinitif',
      'd) Au milieu'
    ],
    correctAnswer: 'c) Après l\'infinitif',
    explanation: 'Dans les subordonnées, l\'infinitif reste en fin de phrase.'
  },
  {
    id: 'modal-qcm-15',
    type: 'qcm',
    category: 'Modaux avec "zu"',
    level: 'intermédiaire',
    question: 'Comment former l\'infinitif avec "zu" et un modal ?',
    options: [
      'a) Zu modal infinitif',
      'b) Modal zu infinitif',
      'c) Zu infinitif modal',
      'd) Infinitif zu modal'
    ],
    correctAnswer: 'a) Zu modal infinitif',
    explanation: '"Zu" + modal + infinitif pour les constructions infinitives.'
  },
  {
    id: 'modal-qcm-16',
    type: 'qcm',
    category: 'Modaux au passé composé',
    level: 'avancé',
    question: 'Comment conjugue-t-on "hat gekonnt" ?',
    options: [
      'a) Er hat gekonnt',
      'b) Er hat können',
      'c) Er hat gekonnt',
      'd) Er hat gekönnt'
    ],
    correctAnswer: 'c) Er hat gekonnt',
    explanation: '"Können" au passé composé : "hat gekonnt".'
  },
  {
    id: 'modal-qcm-17',
    type: 'qcm',
    category: 'Modaux avec impératif',
    level: 'intermédiaire',
    question: 'Peut-on utiliser les modaux à l\'impératif ?',
    options: [
      'a) Oui, toujours',
      'b) Non, jamais',
      'c) Seulement "sollen"',
      'd) Seulement à la forme infinitive'
    ],
    correctAnswer: 'b) Non, jamais',
    explanation: 'Les verbes modaux ne s\'utilisent pas à l\'impératif.'
  },
  {
    id: 'modal-qcm-18',
    type: 'qcm',
    category: 'Modaux avec "haben/sein"',
    level: 'avancé',
    question: 'Quel auxiliaire utilisent les modaux au passé composé ?',
    options: [
      'a) Sein',
      'b) Haben',
      'c) Werden',
      'd) Selon le verbe principal'
    ],
    correctAnswer: 'b) Haben',
    explanation: 'Tous les modaux utilisent "haben" au passé composé.'
  },
  {
    id: 'modal-qcm-19',
    type: 'qcm',
    category: 'Modaux au conditionnel',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le conditionnel avec "wollen" ?',
    options: [
      'a) Würde wollen',
      'b) Wollte',
      'c) Hätte wollen',
      'd) Würde gewollt haben'
    ],
    correctAnswer: 'a) Würde wollen',
    explanation: 'Le conditionnel utilise "würde" + infinitif.'
  },
  {
    id: 'modal-qcm-20',
    type: 'qcm',
    category: 'Modaux dans les questions',
    level: 'avancé',
    question: 'Comment pose-t-on une question avec un modal ?',
    options: [
      'a) Modal + sujet + infinitif + ?',
      'b) Sujet + modal + infinitif + ?',
      'c) Infinitif + modal + sujet + ?',
      'd) Toutes les formes sont possibles'
    ],
    correctAnswer: 'a) Modal + sujet + infinitif + ?',
    explanation: 'Dans les questions, le modal est en première position.'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'modal-complet-3',
    type: 'complet',
    category: 'Verbes modaux de base',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (können) Deutsch sprechen.',
    correctAnswer: 'kann',
    explanation: '"Können" exprime la capacité de parler allemand.'
  },
  {
    id: 'modal-complet-4',
    type: 'complet',
    category: 'Verbes modaux de base',
    level: 'avancé',
    question: 'Complétez : Du ___ (müssen) deine Hausaufgaben machen.',
    correctAnswer: 'musst',
    explanation: '"Müssen" exprime une obligation de faire les devoirs.'
  },
  {
    id: 'modal-complet-5',
    type: 'complet',
    category: 'Conjugaison des modaux',
    level: 'intermédiaire',
    question: 'Complétez : Sie ___ (dürfen) hier rauchen.',
    correctAnswer: 'darf',
    explanation: 'Conjugaison de "dürfen" à la 3e personne du singulier.'
  },
  {
    id: 'modal-complet-6',
    type: 'complet',
    category: 'Conjugaison des modaux',
    level: 'avancé',
    question: 'Complétez : Wir ___ (sollen) früher kommen.',
    correctAnswer: 'sollen',
    explanation: 'Conjugaison de "sollen" au pluriel.'
  },
  {
    id: 'modal-complet-7',
    type: 'complet',
    category: 'Modaux avec infinitif',
    level: 'intermédiaire',
    question: 'Complétez : Er will ___ (essen).',
    correctAnswer: 'essen',
    explanation: 'L\'infinitif se place après le modal "wollen".'
  },
  {
    id: 'modal-complet-8',
    type: 'complet',
    category: 'Modaux au passé',
    level: 'avancé',
    question: 'Complétez : Sie hat ___ (können) kommen.',
    correctAnswer: 'gekonnt',
    explanation: 'Participe passé de "können" : "gekonnt".'
  },
  {
    id: 'modal-complet-9',
    type: 'complet',
    category: 'Modaux au subjonctif',
    level: 'intermédiaire',
    question: 'Complétez : Wenn ich Zeit hätte, ___ (können) ich kommen.',
    correctAnswer: 'könnte',
    explanation: 'Subjonctif II de "können" : "könnte".'
  },
  {
    id: 'modal-complet-10',
    type: 'complet',
    category: 'Modaux avec "lassen"',
    level: 'avancé',
    question: 'Complétez : Ich lasse mein Auto ___ (reparieren).',
    correctAnswer: 'reparieren',
    explanation: '"Lassen" + infinitif exprime "faire réparer".'
  },
  {
    id: 'modal-complet-11',
    type: 'complet',
    category: 'Modaux de politesse',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Dürfen) ich fragen?',
    correctAnswer: 'Darf',
    explanation: '"Dürfen" pour une demande polie.'
  },
  {
    id: 'modal-complet-12',
    type: 'complet',
    category: 'Modaux avec négation',
    level: 'avancé',
    question: 'Complétez : Ich kann ___ (nicht) kommen.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" se place avant l\'infinitif avec les modaux.'
  },
  {
    id: 'modal-complet-13',
    type: 'complet',
    category: 'Modaux au futur',
    level: 'intermédiaire',
    question: 'Complétez : Du wirst ___ (können) kommen.',
    correctAnswer: 'können',
    explanation: 'Futur avec modal : "werden" + "können" + infinitif.'
  },
  {
    id: 'modal-complet-14',
    type: 'complet',
    category: 'Modaux dans les subordonnées',
    level: 'avancé',
    question: 'Complétez : Ich weiß, dass du ___ (kommen) kannst.',
    correctAnswer: 'kommen',
    explanation: 'Dans les subordonnées, l\'infinitif reste en fin de phrase.'
  },
  {
    id: 'modal-complet-15',
    type: 'complet',
    category: 'Modaux avec "zu"',
    level: 'intermédiaire',
    question: 'Complétez : Er hat vergessen, ___ (kommen).',
    correctAnswer: 'zu kommen',
    explanation: '"Zu" + infinitif après "vergessen".'
  },
  {
    id: 'modal-complet-16',
    type: 'complet',
    category: 'Modaux au passé composé',
    level: 'avancé',
    question: 'Complétez : Sie hat ___ (wollen) kommen.',
    correctAnswer: 'gewollt',
    explanation: 'Participe passé de "wollen" : "gewollt".'
  },
  {
    id: 'modal-complet-17',
    type: 'complet',
    category: 'Modaux avec impératif',
    level: 'intermédiaire',
    question: 'Complétez : Du sollst ___ (kommen)!',
    correctAnswer: 'kommen',
    explanation: 'Avec "sollen", l\'infinitif suit le modal.'
  },
  {
    id: 'modal-complet-18',
    type: 'complet',
    category: 'Modaux avec "haben/sein"',
    level: 'avancé',
    question: 'Complétez : Wir haben ___ (dürfen) gehen.',
    correctAnswer: 'gedurft',
    explanation: 'Participe passé de "dürfen" : "gedurft".'
  },
  {
    id: 'modal-complet-19',
    type: 'complet',
    category: 'Modaux au conditionnel',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (können) kommen.',
    correctAnswer: 'könnte',
    explanation: 'Conditionnel de "können" : "könnte".'
  },
  {
    id: 'modal-complet-20',
    type: 'complet',
    category: 'Modaux dans les questions',
    level: 'avancé',
    question: 'Complétez : ___ (Können) du kommen?',
    correctAnswer: 'Kannst',
    explanation: 'Dans les questions, le modal est conjugué.'
  }
];

const VerbesModauxComplexesExercicesPage = () => {
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
  const [selectedExerciseType, setSelectedExerciseType] = useState<'qcm' | 'complet' | 'toutes'>('qcm');
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});

  // Filtrer les exercices selon les sélections
  const filterExercises = (exercises: any[]) => {
    return exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'toutes' || exercise.category === selectedCategory;
      const levelMatch = selectedLevel === 'tous' || exercise.level === selectedLevel;
      const typeMatch = selectedExerciseType === exercise.type || selectedExerciseType === 'toutes';
      return categoryMatch && levelMatch && typeMatch;
    });
  };

  const filteredExercises = filterExercises(verbesModauxComplexesExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = verbesModauxComplexesExercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    const userAnswer = userAnswers[exerciseId];
    if (!userAnswer) return;

    let isCorrect = false;
    if (exercise.type === 'qcm') {
      const userLetter = userAnswer.split(')')[0];
      const correctLetter = exercise.correctAnswer.split(')')[0];
      isCorrect = userLetter === correctLetter;
    } else {
      isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    }

    setValidatedAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  // Keyboard navigation for exercises
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

  const calculateScore = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;
    verbesModauxComplexesExercises.forEach(exercise => {
      totalQuestions++;
      const userAnswer = userAnswers[exercise.id];
      if (!userAnswer) return;
      let isCorrect = false;
      if (exercise.type === 'qcm') {
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
    if (examTimer) clearInterval(examTimer);
  };

  const startExam = () => {
    setExamStarted(true);
    setExamTime(0);
    const timer = setInterval(() => setExamTime(prev => prev + 1), 1000);
    setExamTimer(timer);
  };

  const finishExam = () => {
    if (examTimer) clearInterval(examTimer);
    calculateScore();
    setExamStarted(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    setCurrentExerciseIndex(0);
  }, [selectedCategory, selectedLevel, selectedExerciseType]);

  useEffect(() => {
    if (!examMode || !examStarted) {
      if (examTimer) clearInterval(examTimer);
    }
  }, [examMode, examStarted]);

  return (
    <div className="relative">
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand" className="hover:text-gray-900 transition-colors">
              Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand-grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-pr-orange-dark hover:bg-orange-50">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pr-orange-dark text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices de Verbes Modaux Complexes
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur les verbes modaux allemands et leurs utilisations complexes
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{verbesModauxComplexesExercises.length} exercices</Badge>
            <Badge className="bg-pr-orange-dark px-3 py-1">Module essentiel</Badge>
          </div>
        </div>

        {/* Exam Mode Toggle Button */}
        <div className="flex justify-end mb-4">
          <Button
            variant={examMode ? "default" : "outline"}
            onClick={() => setExamMode(prev => !prev)}
            className={examMode ? "bg-pr-orange hover:bg-pr-orange-dark text-white" : "border-pr-orange text-pr-orange hover:bg-pr-orange-pale"}
          >
            {examMode ? "Désactiver le Mode Examen" : "Activer le Mode Examen"}
          </Button>
        </div>

        {/* Exam Timer and Controls */}
        {examMode && (
          <Card className="mb-8 border-2 border-carnet-red/30 bg-gradient-to-r from-pr-orange-pale to-indigo-50">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button onClick={startExam} className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />Commencer l'examen
                  </Button>
                  <p className="text-sm text-gray-600">⚠️ Le feedback sera désactivé.</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-carnet-red/20 rounded-lg px-4 py-2">
                    <span className="text-carnet-red-deep font-mono text-lg">⏱️ {formatTime(examTime)}</span>
                  </div>
                  <Button onClick={finishExam} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />Terminer l'examen
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Filtres */}
        <Card className="mb-8 border border-gray-200 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-pr-orange-dark" />
              </div>
              Filtrer les exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select value={selectedExerciseType} onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'complet' | 'toutes')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pr-orange focus:border-pr-orange" disabled={examStarted}>
                  <option value="qcm">QCM</option>
                  <option value="complet">Mots à compléter</option>
                  <option value="toutes">Tous les types</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pr-orange focus:border-pr-orange" disabled={examStarted}>
                  <option value="toutes">Toutes les catégories</option>
                  <option value="Verbes modaux de base">Verbes modaux de base</option>
                  <option value="Conjugaison des modaux">Conjugaison des modaux</option>
                  <option value="Modaux avec infinitif">Modaux avec infinitif</option>
                  <option value="Modaux au passé">Modaux au passé</option>
                  <option value="Modaux au subjonctif">Modaux au subjonctif</option>
                  <option value="Modaux avec lassen">Modaux avec lassen</option>
                  <option value="Modaux au conditionnel">Modaux au conditionnel</option>
                  <option value="Modaux dans les questions">Modaux dans les questions</option>
                  <option value="Modaux avec double infinitif">Modaux avec double infinitif</option>
                  <option value="Modaux dans les subordonnées">Modaux dans les subordonnées</option>
                  <option value="Modaux avec la négation">Modaux avec la négation</option>
                  <option value="Modaux dans les expressions">Modaux dans les expressions</option>
                  <option value="Modaux au futur">Modaux au futur</option>
                  <option value="Modaux avec les participes">Modaux avec les participes</option>
                  <option value="Modaux irréguliers">Modaux irréguliers</option>
                  <option value="Modaux avec les prépositions">Modaux avec les prépositions</option>
                  <option value="Modaux dans les dialogues">Modaux dans les dialogues</option>
                  <option value="Modaux avec les adjectifs">Modaux avec les adjectifs</option>
                  <option value="Modaux au passif">Modaux au passif</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Niveau</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pr-orange focus:border-pr-orange" disabled={examStarted}>
                  <option value="tous">Tous les niveaux</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="avancé">Avancé</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {currentExercise && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-pr-orange-dark" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Question {currentExerciseIndex + 1} / {filteredExercises.length}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {currentExercise.category} • {currentExercise.level}
                  </p>
                </div>
              </div>
            </div>

            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Question
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-base text-gray-800 leading-relaxed">{currentExercise.question}</p>
                  </div>
                </div>

                {currentExercise.type === 'qcm' ? (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Choix de réponse
                    </h3>
                    <div className="space-y-2">
                      {currentExercise.options.map((option, index) => (
                        <label key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name={currentExercise.id}
                            value={option}
                            checked={userAnswers[currentExercise.id] === option}
                            onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                            className="text-pr-orange-dark focus:ring-pr-orange"
                          />
                          <span className="text-gray-800 flex-1">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Votre réponse
                    </h3>
                    <input
                      type="text"
                      value={userAnswers[currentExercise.id] || ''}
                      onChange={(e) => handleAnswerChange(currentExercise.id, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pr-orange focus:border-pr-orange text-gray-800 placeholder-gray-500"
                      placeholder="Tapez votre réponse ici..."
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-6">
                  <Button
                    onClick={() => validateAnswer(currentExercise.id)}
                    disabled={!userAnswers[currentExercise.id]}
                    className="bg-pr-orange-dark hover:bg-pr-orange-dark text-white flex items-center gap-2 px-6 py-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Valider ma réponse
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toggleCorrections(currentExercise.id)}
                    className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50 px-6 py-2"
                  >
                    <Eye className="h-4 w-4" />
                    Voir la correction
                  </Button>
                </div>

                {validatedAnswers[currentExercise.id] !== undefined && (
                  <div className={`rounded-lg p-4 border-l-4 mt-4 ${
                    validatedAnswers[currentExercise.id]
                      ? 'bg-green-50 border-green-400'
                      : 'bg-red-50 border-red-400'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        validatedAnswers[currentExercise.id] ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {validatedAnswers[currentExercise.id] ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <X className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <span className={`font-semibold text-lg ${
                          validatedAnswers[currentExercise.id] ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {validatedAnswers[currentExercise.id] ? 'Correct !' : 'Incorrect'}
                        </span>
                        {!validatedAnswers[currentExercise.id] && (
                          <p className="text-red-700 mt-1 text-sm">
                            Bonne réponse : <strong>{verbesModauxComplexesExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {showCorrections[currentExercise.id] && (
                  <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-green-900">
                        Correction et explication
                      </h4>
                    </div>
                    <div className="bg-white rounded-lg p-3 mb-3 border border-green-200">
                      <p className="text-green-800 font-medium">{currentExercise.correctAnswer}</p>
                    </div>
                    <p className="text-sm text-green-700 leading-relaxed">{currentExercise.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <Button
                onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
                disabled={currentExerciseIndex === 0 || examStarted}
                variant="outline"
                className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Question précédente
              </Button>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                  <span>Navigation clavier :</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd>
                  <span>et</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd>
                </div>

                <div className="flex gap-2">
                  {filteredExercises.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => !examStarted && setCurrentExerciseIndex(index)}
                      disabled={examStarted}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentExerciseIndex
                          ? 'bg-pr-orange-dark'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
                disabled={currentExerciseIndex === filteredExercises.length - 1 || examStarted}
                variant="outline"
                className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50"
              >
                Question suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {filteredExercises.length === 0 && (
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="text-center py-8">
              <p className="text-pr-orange-dark text-lg">
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
              className="bg-pr-orange hover:bg-pr-orange-dark text-white px-8 py-3 text-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Terminer et voir le score
            </Button>
            <Button
              onClick={resetQuiz}
              variant="outline"
              className="px-8 py-3 text-lg flex items-center gap-2 border-pr-orange text-pr-orange hover:bg-pr-orange-pale"
            >
              <X className="h-5 w-5" />
              Réinitialiser
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-carnet-red/30 bg-pr-orange-pale' : 'border-orange-200 bg-orange-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-carnet-red-deep' : 'text-orange-800'}`}>
                <Award className="h-8 w-8" />
                {examMode ? 'Résultats de l\'Examen' : 'Votre Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-carnet-red/10 rounded-lg border border-carnet-red/30">
                  <p className="text-carnet-red-deep font-medium">
                    ⏱️ Temps total : {formatTime(examTime)}
                  </p>
                </div>
              )}
              <div className={`text-lg ${
                examMode ? 'text-carnet-red' : 'text-pr-orange-dark'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les verbes modaux allemands.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Vous avez validé l\'examen.' : 'Bon effort ! Continuez à pratiquer pour améliorer votre score.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-carnet-red" />
                    {examMode ? 'Examen non validé. Continuez à vous entraîner !' : 'Ne vous découragez pas ! Révisez les règles et réessayez.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-pr-orange-pale rounded-lg border border-carnet-red/30">
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

export default VerbesModauxComplexesExercicesPage;
