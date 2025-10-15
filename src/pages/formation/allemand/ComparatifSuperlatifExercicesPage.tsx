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

// Données d'exercices pour le comparatif et superlatif
const comparatifSuperlatifExercises = [
  {
    id: 'comp-qcm-1',
    type: 'qcm',
    category: 'Formation régulière',
    level: 'intermédiaire',
    question: 'Quelle est la terminaison du comparatif pour les adjectifs réguliers ?',
    options: [
      'a) -er',
      'b) -est',
      'c) -sten',
      'd) -ter'
    ],
    correctAnswer: 'a) -er',
    explanation: 'Le comparatif des adjectifs réguliers prend la terminaison -er.'
  },
  // Nouveaux QCM (18 supplémentaires pour atteindre 20)
  {
    id: 'comp-qcm-3',
    type: 'qcm',
    category: 'Formation régulière',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "schnell" ?',
    options: [
      'a) schneller',
      'b) schnellen',
      'c) schnellest',
      'd) schnellem'
    ],
    correctAnswer: 'a) schneller',
    explanation: 'Le comparatif régulier ajoute -er à l\'adjectif.'
  },
  {
    id: 'comp-qcm-4',
    type: 'qcm',
    category: 'Formation irrégulière',
    level: 'avancé',
    question: 'Quel est le comparatif de "gut" ?',
    options: [
      'a) guter',
      'b) besser',
      'c) guten',
      'd) gutest'
    ],
    correctAnswer: 'b) besser',
    explanation: '"Gut" a un comparatif irrégulier : "besser".'
  },
  {
    id: 'comp-qcm-5',
    type: 'qcm',
    category: 'Superlatif régulier',
    level: 'intermédiaire',
    question: 'Quel est le superlatif de "groß" ?',
    options: [
      'a) größter',
      'b) größer',
      'c) größten',
      'd) großest'
    ],
    correctAnswer: 'c) größten',
    explanation: 'Le superlatif prend -(e)st + terminaison du cas.'
  },
  {
    id: 'comp-qcm-6',
    type: 'qcm',
    category: 'Comparatif d\'égalité',
    level: 'intermédiaire',
    question: 'Comment exprimer "aussi grand que" ?',
    options: [
      'a) so groß wie',
      'b) genauso groß wie',
      'c) gleich groß wie',
      'd) alle réponses sont correctes'
    ],
    correctAnswer: 'd) alle réponses sont correctes',
    explanation: 'Toutes ces formes expriment l\'égalité comparative.'
  },
  {
    id: 'comp-qcm-7',
    type: 'qcm',
    category: 'Comparatif d\'infériorité',
    level: 'avancé',
    question: 'Quel est le comparatif d\'infériorité de "viel" ?',
    options: [
      'a) weniger',
      'b) wenigerer',
      'c) wenigst',
      'd) mindestens'
    ],
    correctAnswer: 'a) weniger',
    explanation: '"Weniger" exprime l\'infériorité quantitative.'
  },
  {
    id: 'comp-qcm-8',
    type: 'qcm',
    category: 'Superlatif irrégulier',
    level: 'avancé',
    question: 'Quel est le superlatif de "hoch" ?',
    options: [
      'a) höchster',
      'b) höher',
      'c) höchsten',
      'd) hochst'
    ],
    correctAnswer: 'a) höchster',
    explanation: '"Hoch" suit la règle régulière au superlatif.'
  },
  {
    id: 'comp-qcm-9',
    type: 'qcm',
    category: 'Comparatif avec adjectifs courts',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "alt" ?',
    options: [
      'a) alter',
      'b) älter',
      'c) alten',
      'd) altst'
    ],
    correctAnswer: 'b) älter',
    explanation: 'Les adjectifs courts en "a" prennent un Umlaut au comparatif.'
  },
  {
    id: 'comp-qcm-10',
    type: 'qcm',
    category: 'Superlatif avec "am...sten"',
    level: 'avancé',
    question: 'Comment forme-t-on le superlatif adverbial ?',
    options: [
      'a) am schnellsten',
      'b) der schnellste',
      'c) die schnellste',
      'd) das schnellste'
    ],
    correctAnswer: 'a) am schnellsten',
    explanation: 'Le superlatif adverbial utilise "am...sten".'
  },
  {
    id: 'comp-qcm-11',
    type: 'qcm',
    category: 'Comparatif avec particules',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "teuer" ?',
    options: [
      'a) teurer',
      'b) teuren',
      'c) teuerst',
      'd) teuern'
    ],
    correctAnswer: 'a) teurer',
    explanation: '"Teuer" suit la règle régulière (ajout de -er).'
  },
  {
    id: 'comp-qcm-12',
    type: 'qcm',
    category: 'Superlatif avec "der/die/das...ste"',
    level: 'avancé',
    question: 'Comment forme-t-on le superlatif avec article ?',
    options: [
      'a) der schönste',
      'b) am schönsten',
      'c) schönster',
      'd) schönsten'
    ],
    correctAnswer: 'a) der schönste',
    explanation: 'Le superlatif avec article utilise "der/die/das...ste".'
  },
  {
    id: 'comp-qcm-13',
    type: 'qcm',
    category: 'Comparatif de "viel/wenig"',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "viel" ?',
    options: [
      'a) vieler',
      'b) mehr',
      'c) vielst',
      'd) meisten'
    ],
    correctAnswer: 'b) mehr',
    explanation: '"Viel" a un comparatif irrégulier : "mehr".'
  },
  {
    id: 'comp-qcm-14',
    type: 'qcm',
    category: 'Superlatif de "gut/schlecht"',
    level: 'avancé',
    question: 'Quel est le superlatif de "schlecht" ?',
    options: [
      'a) schlechtester',
      'b) schlechter',
      'c) schlimmster',
      'd) schlechtest'
    ],
    correctAnswer: 'c) schlimmster',
    explanation: '"Schlecht" a un superlatif irrégulier : "schlimmst-".'
  },
  {
    id: 'comp-qcm-15',
    type: 'qcm',
    category: 'Comparatif avec "immer"',
    level: 'intermédiaire',
    question: 'Comment dire "de plus en plus cher" ?',
    options: [
      'a) immer teurer',
      'b) immer teureren',
      'c) immer teuern',
      'd) immer teuerst'
    ],
    correctAnswer: 'a) immer teurer',
    explanation: '"Immer" + comparatif exprime une progression.'
  },
  {
    id: 'comp-qcm-16',
    type: 'qcm',
    category: 'Superlatif absolu',
    level: 'avancé',
    question: 'Comment exprimer "le plus beau du monde" ?',
    options: [
      'a) der schönste der Welt',
      'b) am schönsten der Welt',
      'c) schönster der Welt',
      'd) schönsten der Welt'
    ],
    correctAnswer: 'a) der schönste der Welt',
    explanation: 'Le superlatif relatif utilise l\'article défini.'
  },
  {
    id: 'comp-qcm-17',
    type: 'qcm',
    category: 'Comparatif avec prépositions',
    level: 'intermédiaire',
    question: 'Comment dire "plus grand que moi" ?',
    options: [
      'a) größer als ich',
      'b) größer wie ich',
      'c) größer denn ich',
      'd) größer von ich'
    ],
    correctAnswer: 'a) größer als ich',
    explanation: '"Als" introduit le second terme de comparaison.'
  },
  {
    id: 'comp-qcm-18',
    type: 'qcm',
    category: 'Superlatif avec "aller-"/"allerlei"',
    level: 'avancé',
    question: 'Comment dire "de toutes les manières" ?',
    options: [
      'a) auf aller Art',
      'b) auf alle Art',
      'c) auf allerlei Art',
      'd) auf allelei Art'
    ],
    correctAnswer: 'c) auf allerlei Art',
    explanation: '"Allerlei" signifie "toutes sortes de".'
  },
  {
    id: 'comp-qcm-19',
    type: 'qcm',
    category: 'Comparatif avec adjectifs longs',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "interessant" ?',
    options: [
      'a) interessanter',
      'b) interessanten',
      'c) interessantest',
      'd) interessanteren'
    ],
    correctAnswer: 'a) interessanter',
    explanation: 'Les adjectifs longs suivent la règle régulière.'
  },
  {
    id: 'comp-qcm-20',
    type: 'qcm',
    category: 'Superlatif avec "zu"',
    level: 'avancé',
    question: 'Comment dire "trop le plus beau" ?',
    options: [
      'a) zu der schönste',
      'b) zu der schönsten',
      'c) zu schönster',
      'd) zu am schönsten'
    ],
    correctAnswer: 'b) zu der schönsten',
    explanation: '"Zu" + superlatif exprime un excès.'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'comp-complet-3',
    type: 'complet',
    category: 'Formation régulière',
    level: 'intermédiaire',
    question: 'Complétez : Dieser Film ist ___ (interessant) als der andere.',
    correctAnswer: 'interessanter',
    explanation: 'Comparatif régulier : ajout de -er.'
  },
  {
    id: 'comp-complet-4',
    type: 'complet',
    category: 'Formation irrégulière',
    level: 'avancé',
    question: 'Complétez : Meine Note ist ___ (gut) als deine.',
    correctAnswer: 'besser',
    explanation: '"Gut" → "besser" au comparatif.'
  },
  {
    id: 'comp-complet-5',
    type: 'complet',
    category: 'Superlatif régulier',
    level: 'intermédiaire',
    question: 'Complétez : Das ist der ___ (groß) Baum im Park.',
    correctAnswer: 'größte',
    explanation: 'Superlatif régulier avec terminaison du cas.'
  },
  {
    id: 'comp-complet-6',
    type: 'complet',
    category: 'Comparatif d\'égalité',
    level: 'intermédiaire',
    question: 'Complétez : Sie ist ___ (alt) ___ ich.',
    correctAnswer: 'so alt wie',
    explanation: '"So...wie" exprime l\'égalité comparative.'
  },
  {
    id: 'comp-complet-7',
    type: 'complet',
    category: 'Comparatif d\'infériorité',
    level: 'avancé',
    question: 'Complétez : Er hat ___ (wenig) Geld als ich.',
    correctAnswer: 'weniger',
    explanation: '"Weniger" exprime l\'infériorité.'
  },
  {
    id: 'comp-complet-8',
    type: 'complet',
    category: 'Superlatif irrégulier',
    level: 'avancé',
    question: 'Complétez : Das ist die ___ (hoch) Berg in Europa.',
    correctAnswer: 'höchste',
    explanation: '"Hoch" suit la règle régulière au superlatif.'
  },
  {
    id: 'comp-complet-9',
    type: 'complet',
    category: 'Comparatif avec adjectifs courts',
    level: 'intermédiaire',
    question: 'Complétez : Mein Bruder ist ___ (alt) als ich.',
    correctAnswer: 'älter',
    explanation: 'Umlaut au comparatif pour les adjectifs courts en "a".'
  },
  {
    id: 'comp-complet-10',
    type: 'complet',
    category: 'Superlatif avec "am...sten"',
    level: 'avancé',
    question: 'Complétez : Sie läuft ___ (schnell) von allen.',
    correctAnswer: 'am schnellsten',
    explanation: 'Superlatif adverbial : "am...sten".'
  },
  {
    id: 'comp-complet-11',
    type: 'complet',
    category: 'Comparatif avec particules',
    level: 'intermédiaire',
    question: 'Complétez : Dieses Auto ist ___ (teuer) als jenes.',
    correctAnswer: 'teurer',
    explanation: 'Règle régulière pour "teuer".'
  },
  {
    id: 'comp-complet-12',
    type: 'complet',
    category: 'Superlatif avec "der/die/das...ste"',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (schön) Bild in der Galerie.',
    correctAnswer: 'das schönste',
    explanation: 'Superlatif avec article défini neutre.'
  },
  {
    id: 'comp-complet-13',
    type: 'complet',
    category: 'Comparatif de "viel/wenig"',
    level: 'intermédiaire',
    question: 'Complétez : Ich habe ___ (viel) Bücher als du.',
    correctAnswer: 'mehr',
    explanation: '"Viel" → "mehr" au comparatif.'
  },
  {
    id: 'comp-complet-14',
    type: 'complet',
    category: 'Superlatif de "gut/schlecht"',
    level: 'avancé',
    question: 'Complétez : Das ist die ___ (schlecht) Entscheidung.',
    correctAnswer: 'schlimmste',
    explanation: '"Schlecht" → "schlimmst-" au superlatif.'
  },
  {
    id: 'comp-complet-15',
    type: 'complet',
    category: 'Comparatif avec "immer"',
    level: 'intermédiaire',
    question: 'Complétez : Die Preise werden ___ (hoch).',
    correctAnswer: 'immer höher',
    explanation: '"Immer" + comparatif exprime une progression.'
  },
  {
    id: 'comp-complet-16',
    type: 'complet',
    category: 'Superlatif absolu',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (schön) Stadt Deutschlands.',
    correctAnswer: 'die schönste',
    explanation: 'Superlatif relatif avec article défini.'
  },
  {
    id: 'comp-complet-17',
    type: 'complet',
    category: 'Comparatif avec prépositions',
    level: 'intermédiaire',
    question: 'Complétez : Sie ist größer ___ (als) ich.',
    correctAnswer: 'als',
    explanation: '"Als" introduit le second terme de comparaison.'
  },
  {
    id: 'comp-complet-18',
    type: 'complet',
    category: 'Superlatif avec "aller-"/"allerlei"',
    level: 'avancé',
    question: 'Complétez : Er kocht ___ (gut).',
    correctAnswer: 'am besten',
    explanation: '"Gut" → "am besten" au superlatif adverbial.'
  },
  {
    id: 'comp-complet-19',
    type: 'complet',
    category: 'Comparatif avec adjectifs longs',
    level: 'intermédiaire',
    question: 'Complétez : Dieser Roman ist ___ (spannend) als jener.',
    correctAnswer: 'spannender',
    explanation: 'Règle régulière pour les adjectifs longs.'
  },
  {
    id: 'comp-complet-20',
    type: 'complet',
    category: 'Superlatif avec "zu"',
    level: 'avancé',
    question: 'Complétez : Das Haus ist ___ (groß) für uns.',
    correctAnswer: 'zu groß',
    explanation: '"Zu" + positif peut exprimer un excès.'
  }
];

const ComparatifSuperlatifExercicesPage = () => {
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

  const filteredExercises = filterExercises(comparatifSuperlatifExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = comparatifSuperlatifExercises.find(ex => ex.id === exerciseId);
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
    comparatifSuperlatifExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-comparatif-superlatif" className="hover:text-gray-900 transition-colors">
              Comparatif et Superlatif
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-comparatif-superlatif">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour au comparatif et superlatif
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices du Comparatif et Superlatif
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur la comparaison des adjectifs et adverbes en allemand
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{comparatifSuperlatifExercises.length} exercices</Badge>
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
                <select value={selectedExerciseType} onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'complet' | 'toutes')}
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
                  <option value="Formation régulière">Formation régulière</option>
                  <option value="Formation irrégulière">Formation irrégulière</option>
                  <option value="Comparatif d'adjectifs">Comparatif d'adjectifs</option>
                  <option value="Superlatif d'adjectifs">Superlatif d'adjectifs</option>
                  <option value="Comparatif d'adverbes">Comparatif d'adverbes</option>
                  <option value="Superlatif d'adverbes">Superlatif d'adverbes</option>
                  <option value="Comparatif avec adjectifs longs">Comparatif avec adjectifs longs</option>
                  <option value="Superlatif avec adjectifs longs">Superlatif avec adjectifs longs</option>
                  <option value="Comparatif avec umlaut">Comparatif avec umlaut</option>
                  <option value="Superlatif avec umlaut">Superlatif avec umlaut</option>
                  <option value="Comparatif avec zu">Comparatif avec zu</option>
                  <option value="Superlatif avec zu">Superlatif avec zu</option>
                  <option value="Comparatif avec als">Comparatif avec als</option>
                  <option value="Superlatif avec am">Superlatif avec am</option>
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
                            Bonne réponse : <strong>{comparatifSuperlatifExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien le comparatif et superlatif allemands.'}
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

export default ComparatifSuperlatifExercicesPage;
