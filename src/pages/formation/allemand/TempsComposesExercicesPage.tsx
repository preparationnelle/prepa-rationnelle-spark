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

// Données d'exercices pour les temps composés
const tempsComposesExercises = [
  // QCM existants (19 total)
  {
    id: 'temps-qcm-3',
    type: 'qcm',
    category: 'Perfekt avec haben',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le Perfekt de "spielen" ?',
    options: [
      'a) Ich habe gespielt',
      'b) Ich bin gespielt',
      'c) Ich habe spielen',
      'd) Ich bin spielen'
    ],
    correctAnswer: 'a) Ich habe gespielt',
    explanation: '"Spielen" utilise "haben" + participe passé "gespielt".'
  },
  {
    id: 'temps-qcm-4',
    type: 'qcm',
    category: 'Perfekt avec sein',
    level: 'avancé',
    question: 'Quel auxiliaire utilise "gehen" au Perfekt ?',
    options: [
      'a) Haben',
      'b) Sein',
      'c) Werden',
      'd) Können'
    ],
    correctAnswer: 'b) Sein',
    explanation: 'Les verbes de mouvement utilisent "sein" au Perfekt.'
  },
  {
    id: 'temps-qcm-5',
    type: 'qcm',
    category: 'Plusquamperfekt',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le Plusquamperfekt ?',
    options: [
      'a) Hatte + participe passé',
      'b) War + participe passé',
      'c) Werde + infinitif',
      'd) Habe + infinitif'
    ],
    correctAnswer: 'a) Hatte + participe passé',
    explanation: 'Le Plusquamperfekt utilise "hatte/war" + participe passé.'
  },
  {
    id: 'temps-qcm-6',
    type: 'qcm',
    category: 'Futur I',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le futur simple ?',
    options: [
      'a) Werden + infinitif',
      'b) Haben + infinitif',
      'c) Sein + infinitif',
      'd) Hatte + infinitif'
    ],
    correctAnswer: 'a) Werden + infinitif',
    explanation: 'Le futur utilise "werden" + infinitif du verbe principal.'
  },
  {
    id: 'temps-qcm-7',
    type: 'qcm',
    category: 'Futur II',
    level: 'avancé',
    question: 'Comment forme-t-on le futur antérieur ?',
    options: [
      'a) Werden + haben + participe passé',
      'b) Werde + sein + participe passé',
      'c) Habe + werden + infinitif',
      'd) Sei + werden + infinitif'
    ],
    correctAnswer: 'a) Werden + haben + participe passé',
    explanation: 'Le futur II utilise "werden" + "haben/sein" + participe passé.'
  },
  {
    id: 'temps-qcm-8',
    type: 'qcm',
    category: 'Participe passé régulier',
    level: 'intermédiaire',
    question: 'Quel est le participe passé de "machen" ?',
    options: [
      'a) Gemacht',
      'b) Macht',
      'c) Machen',
      'd) Gemach'
    ],
    correctAnswer: 'a) Gemacht',
    explanation: 'Verbes réguliers : "ge-" + radical + "-t".'
  },
  {
    id: 'temps-qcm-9',
    type: 'qcm',
    category: 'Participe passé irrégulier',
    level: 'avancé',
    question: 'Quel est le participe passé de "gehen" ?',
    options: [
      'a) Gegangen',
      'b) Geging',
      'c) Gehen',
      'd) Ging'
    ],
    correctAnswer: 'a) Gegangen',
    explanation: '"Gehen" a un participe passé irrégulier : "gegangen".'
  },
  {
    id: 'temps-qcm-10',
    type: 'qcm',
    category: 'Verbes à particule séparable',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le participe passé de "aufstehen" ?',
    options: [
      'a) Aufgestanden',
      'b) Gestanden auf',
      'c) Auf gestanden',
      'd) Gestand auf'
    ],
    correctAnswer: 'a) Aufgestanden',
    explanation: 'Particule + "ge-" + radical + "-en" pour les verbes séparables.'
  },
  {
    id: 'temps-qcm-11',
    type: 'qcm',
    category: 'Verbes à particule inséparable',
    level: 'avancé',
    question: 'Comment forme-t-on le participe passé de "verstehen" ?',
    options: [
      'a) Verstanden',
      'b) Gestanden ver',
      'c) Ver gestanden',
      'd) Gestand ver'
    ],
    correctAnswer: 'a) Verstanden',
    explanation: 'Pas de "ge-" pour les verbes avec particule inséparable.'
  },
  {
    id: 'temps-qcm-12',
    type: 'qcm',
    category: 'Perfekt dans les dialogues',
    level: 'intermédiaire',
    question: 'Quand utilise-t-on le Perfekt en allemand parlé ?',
    options: [
      'a) Toujours',
      'b) Jamais',
      'c) Pour les actions passées',
      'd) Seulement à l\'écrit'
    ],
    correctAnswer: 'c) Pour les actions passées',
    explanation: 'Le Perfekt exprime les actions passées dans la langue parlée.'
  },
  {
    id: 'temps-qcm-13',
    type: 'qcm',
    category: 'Prétérit vs Perfekt',
    level: 'avancé',
    question: 'Quelle différence entre Prétérit et Perfekt ?',
    options: [
      'a) Le Prétérit est parlé, le Perfekt est écrit',
      'b) Le Perfekt est parlé, le Prétérit est littéraire',
      'c) Ils sont identiques',
      'd) Le Prétérit n\'existe pas en allemand'
    ],
    correctAnswer: 'b) Le Perfekt est parlé, le Prétérit est littéraire',
    explanation: 'Le Perfekt est utilisé à l\'oral, le Prétérit à l\'écrit.'
  },
  {
    id: 'temps-qcm-14',
    type: 'qcm',
    category: 'Temps dans les subordonnées',
    level: 'intermédiaire',
    question: 'Comment change le temps dans "Ich weiß, dass..." ?',
    options: [
      'a) Il reste identique',
      'b) Il change toujours',
      'c) Il peut changer selon le contexte',
      'd) Il disparaît'
    ],
    correctAnswer: 'c) Il peut changer selon le contexte',
    explanation: 'Dans les subordonnées, le temps peut être adapté.'
  },
  {
    id: 'temps-qcm-15',
    type: 'qcm',
    category: 'Conditionnel passé',
    level: 'avancé',
    question: 'Comment forme-t-on le conditionnel passé ?',
    options: [
      'a) Würde + haben + participe passé',
      'b) Hätte + participe passé',
      'c) Wäre + participe passé',
      'd) Würde + infinitif'
    ],
    correctAnswer: 'a) Würde + haben + participe passé',
    explanation: 'Le conditionnel passé utilise "würde" + auxiliaire + participe.'
  },
  {
    id: 'temps-qcm-16',
    type: 'qcm',
    category: 'Verbes auxiliaires',
    level: 'intermédiaire',
    question: 'Quel auxiliaire utilise "kommen" au Perfekt ?',
    options: [
      'a) Haben',
      'b) Sein',
      'c) Werden',
      'd) Können'
    ],
    correctAnswer: 'b) Sein',
    explanation: '"Kommen" est un verbe de mouvement : auxiliaire "sein".'
  },
  {
    id: 'temps-qcm-17',
    type: 'qcm',
    category: 'Verbes réfléchis',
    level: 'avancé',
    question: 'Comment forme-t-on le Perfekt de "sich waschen" ?',
    options: [
      'a) Ich habe mich gewaschen',
      'b) Ich bin mich gewaschen',
      'c) Ich habe gewaschen',
      'd) Ich bin gewaschen'
    ],
    correctAnswer: 'a) Ich habe mich gewaschen',
    explanation: 'Les verbes réfléchis utilisent généralement "haben".'
  },
  {
    id: 'temps-qcm-18',
    type: 'qcm',
    category: 'Temps composés au passif',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le passé passif ?',
    options: [
      'a) Wurde + participe passé',
      'b) Ist + participe passé',
      'c) Wird + infinitif',
      'd) Hat + participe passé'
    ],
    correctAnswer: 'a) Wurde + participe passé',
    explanation: 'Le passé passif utilise "wurde" + participe passé.'
  },
  {
    id: 'temps-qcm-19',
    type: 'qcm',
    category: 'Futur dans les conditionnelles',
    level: 'avancé',
    question: 'Quel temps utilise-t-on dans "Wenn es regnet, werde ich..." ?',
    options: [
      'a) Présent',
      'b) Prétérit',
      'c) Futur',
      'd) Conditionnel'
    ],
    correctAnswer: 'c) Futur',
    explanation: 'Dans la proposition principale, on utilise le futur.'
  },
  {
    id: 'temps-qcm-20',
    type: 'qcm',
    category: 'Concordance des temps',
    level: 'intermédiaire',
    question: 'Dans "Er sagte, dass er kommt", quel temps utilise-t-on ?',
    options: [
      'a) Présent dans les deux',
      'b) Prétérit dans les deux',
      'c) Présent dans la subordonnée',
      'd) Prétérit dans la principale'
    ],
    correctAnswer: 'c) Présent dans la subordonnée',
    explanation: 'La subordonnée garde le présent après un verbe au passé.'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'temps-complet-3',
    type: 'complet',
    category: 'Perfekt avec haben',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (haben) das Buch gelesen.',
    correctAnswer: 'habe',
    explanation: 'Perfekt avec "haben" pour les verbes transitifs.'
  },
  {
    id: 'temps-complet-4',
    type: 'complet',
    category: 'Perfekt avec sein',
    level: 'avancé',
    question: 'Complétez : Sie ___ (sein) nach Hause gegangen.',
    correctAnswer: 'ist',
    explanation: 'Perfekt avec "sein" pour les verbes de mouvement.'
  },
  {
    id: 'temps-complet-5',
    type: 'complet',
    category: 'Plusquamperfekt',
    level: 'intermédiaire',
    question: 'Complétez : Bevor ich kam, ___ (haben) er gegessen.',
    correctAnswer: 'hatte',
    explanation: 'Plusquamperfekt avec "hatte" + participe passé.'
  },
  {
    id: 'temps-complet-6',
    type: 'complet',
    category: 'Futur I',
    level: 'intermédiaire',
    question: 'Complétez : Morgen ___ (werden) ich kommen.',
    correctAnswer: 'werde',
    explanation: 'Futur I : "werden" + infinitif.'
  },
  {
    id: 'temps-complet-7',
    type: 'complet',
    category: 'Futur II',
    level: 'avancé',
    question: 'Complétez : Bis morgen ___ (werden) ich alles erledigt haben.',
    correctAnswer: 'werde',
    explanation: 'Futur II : "werden" + "haben" + participe passé.'
  },
  {
    id: 'temps-complet-8',
    type: 'complet',
    category: 'Participe passé régulier',
    level: 'intermédiaire',
    question: 'Complétez : Ich habe das Auto ___ (reparieren).',
    correctAnswer: 'repariert',
    explanation: 'Participe passé régulier : "ge-" + radical + "-t".'
  },
  {
    id: 'temps-complet-9',
    type: 'complet',
    category: 'Participe passé irrégulier',
    level: 'avancé',
    question: 'Complétez : Wir sind ___ (gehen) ins Kino.',
    correctAnswer: 'gegangen',
    explanation: 'Participe passé irrégulier de "gehen".'
  },
  {
    id: 'temps-complet-10',
    type: 'complet',
    category: 'Verbes à particule séparable',
    level: 'intermédiaire',
    question: 'Complétez : Sie hat ___ (aufstehen) um 7 Uhr.',
    correctAnswer: 'aufgestanden',
    explanation: 'Participe passé : particule + "ge-" + radical + "-en".'
  },
  {
    id: 'temps-complet-11',
    type: 'complet',
    category: 'Verbes à particule inséparable',
    level: 'avancé',
    question: 'Complétez : Hast du mich ___ (verstehen)?',
    correctAnswer: 'verstanden',
    explanation: 'Pas de "ge-" pour les verbes avec particule inséparable.'
  },
  {
    id: 'temps-complet-12',
    type: 'complet',
    category: 'Perfekt dans les dialogues',
    level: 'intermédiaire',
    question: 'Complétez : Was ___ (machen) du gestern?',
    correctAnswer: 'hast gemacht',
    explanation: 'Perfekt parlé : "haben" + participe passé.'
  },
  {
    id: 'temps-complet-13',
    type: 'complet',
    category: 'Prétérit vs Perfekt',
    level: 'avancé',
    question: 'Complétez : Goethe ___ (schreiben) viele Romane.',
    correctAnswer: 'schrieb',
    explanation: 'Prétérit littéraire pour les écrivains célèbres.'
  },
  {
    id: 'temps-complet-14',
    type: 'complet',
    category: 'Temps dans les subordonnées',
    level: 'intermédiaire',
    question: 'Complétez : Er sagte, dass er ___ (kommen) würde.',
    correctAnswer: 'kommen',
    explanation: 'Présent dans la subordonnée après un verbe au passé.'
  },
  {
    id: 'temps-complet-15',
    type: 'complet',
    category: 'Conditionnel passé',
    level: 'avancé',
    question: 'Complétez : Wenn ich Zeit gehabt hätte, ___ (kommen) ich.',
    correctAnswer: 'wäre gekommen',
    explanation: 'Conditionnel passé avec "sein" + participe passé.'
  },
  {
    id: 'temps-complet-16',
    type: 'complet',
    category: 'Verbes auxiliaires',
    level: 'intermédiaire',
    question: 'Complétez : Die Sonne ___ (scheinen) den ganzen Tag.',
    correctAnswer: 'hat geschienen',
    explanation: '"Scheinen" utilise "haben" au Perfekt.'
  },
  {
    id: 'temps-complet-17',
    type: 'complet',
    category: 'Verbes réfléchis',
    level: 'avancé',
    question: 'Complétez : Sie ___ (sich freuen) über das Geschenk.',
    correctAnswer: 'hat sich gefreut',
    explanation: 'Verbe réfléchi avec "haben" + participe passé.'
  },
  {
    id: 'temps-complet-18',
    type: 'complet',
    category: 'Temps composés au passif',
    level: 'intermédiaire',
    question: 'Complétez : Das Haus ___ (bauen) vor 100 Jahren.',
    correctAnswer: 'wurde gebaut',
    explanation: 'Passé passif : "wurde" + participe passé.'
  },
  {
    id: 'temps-complet-19',
    type: 'complet',
    category: 'Futur dans les conditionnelles',
    level: 'avancé',
    question: 'Complétez : Wenn es regnet, ___ (bleiben) ich zu Hause.',
    correctAnswer: 'werde bleiben',
    explanation: 'Futur dans la proposition principale.'
  },
  {
    id: 'temps-complet-20',
    type: 'complet',
    category: 'Concordance des temps',
    level: 'intermédiaire',
    question: 'Complétez : Sie wusste, dass ich ___ (kommen) würde.',
    correctAnswer: 'kommen',
    explanation: 'Présent dans la subordonnée après "wusste".'
  }
];

const TempsComposesExercicesPage = () => {
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

  const filteredExercises = filterExercises(tempsComposesExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = tempsComposesExercises.find(ex => ex.id === exerciseId);
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
    tempsComposesExercises.forEach(exercise => {
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
    <div className="min-h-screen bg-gray-50">
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
            <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices des Temps Composés
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur les temps composés allemands (Perfekt, Plusquamperfekt, Futur)
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{tempsComposesExercises.length} exercices</Badge>
            <Badge className="bg-orange-600 px-3 py-1">Module essentiel</Badge>
          </div>
        </div>

        {/* Exam Mode Toggle Button */}
        <div className="flex justify-end mb-4">
          <Button
            variant={examMode ? "default" : "outline"}
            onClick={() => setExamMode(prev => !prev)}
            className={examMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-blue-600 text-blue-600 hover:bg-blue-50"}
          >
            {examMode ? "Désactiver le Mode Examen" : "Activer le Mode Examen"}
          </Button>
        </div>

        {/* Exam Timer and Controls */}
        {examMode && (
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button onClick={startExam} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />Commencer l'examen
                  </Button>
                  <p className="text-sm text-gray-600">⚠️ Le feedback sera désactivé.</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-blue-200 rounded-lg px-4 py-2">
                    <span className="text-blue-900 font-mono text-lg">⏱️ {formatTime(examTime)}</span>
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
                <Target className="h-4 w-4 text-orange-600" />
              </div>
              Filtrer les exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select value={selectedExerciseType} onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'complet' | 'toutes')}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" disabled={examStarted}>
                  <option value="qcm">QCM</option>
                  <option value="complet">Mots à compléter</option>
                  <option value="toutes">Tous les types</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" disabled={examStarted}>
                  <option value="toutes">Toutes les catégories</option>
                  <option value="Perfekt avec haben">Perfekt avec haben</option>
                  <option value="Perfekt avec sein">Perfekt avec sein</option>
                  <option value="Plusquamperfekt">Plusquamperfekt</option>
                  <option value="Futur I">Futur I</option>
                  <option value="Futur II">Futur II</option>
                  <option value="Concordance des temps">Concordance des temps</option>
                  <option value="Verbes irréguliers">Verbes irréguliers</option>
                  <option value="Verbes à particule">Verbes à particule</option>
                  <option value="Passif">Passif</option>
                  <option value="Subjonctif">Subjonctif</option>
                  <option value="Verbes modaux">Verbes modaux</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Niveau</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" disabled={examStarted}>
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
                  <FileText className="h-5 w-5 text-orange-600" />
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
                            className="text-orange-600 focus:ring-orange-500"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800 placeholder-gray-500"
                      placeholder="Tapez votre réponse ici..."
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-6">
                  <Button
                    onClick={() => validateAnswer(currentExercise.id)}
                    disabled={!userAnswers[currentExercise.id]}
                    className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2 px-6 py-2"
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
                            Bonne réponse : <strong>{tempsComposesExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                          ? 'bg-orange-600'
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
              <p className="text-orange-600 text-lg">
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
              <X className="h-5 w-5" />
              Réinitialiser
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-blue-200 bg-blue-50' : 'border-orange-200 bg-orange-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-blue-800' : 'text-orange-800'}`}>
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
                examMode ? 'text-blue-700' : 'text-orange-700'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les temps composés allemands.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Vous avez validé l\'examen.' : 'Bon effort ! Continuez à pratiquer pour améliorer votre score.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                    {examMode ? 'Examen non validé. Continuez à vous entraîner !' : 'Ne vous découragez pas ! Révisez les règles et réessayez.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm">
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

export default TempsComposesExercicesPage;
