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

// Données d'exercices pour le génitif
const genetifExercises = [
  {
    id: 'gen-qcm-1',
    type: 'qcm',
    category: 'Formation du génitif',
    level: 'intermédiaire',
    question: 'Quelle est la terminaison du génitif pour les noms masculins et neutres ?',
    options: [
      'a) -s',
      'b) -es',
      'c) -en',
      'd) -e'
    ],
    correctAnswer: 'b) -es',
    explanation: 'Les noms masculins et neutres prennent -(e)s au génitif.'
  },
  // Nouveaux QCM (18 supplémentaires pour atteindre 20)
  {
    id: 'gen-qcm-3',
    type: 'qcm',
    category: 'Formation du génitif',
    level: 'intermédiaire',
    question: 'Quelle est la terminaison du génitif pour les noms féminins ?',
    options: [
      'a) -s',
      'b) -es',
      'c) -er',
      'd) aucune'
    ],
    correctAnswer: 'd) aucune',
    explanation: 'Les noms féminins ne prennent pas de terminaison au génitif.'
  },
  {
    id: 'gen-qcm-4',
    type: 'qcm',
    category: 'Génitif avec noms propres',
    level: 'avancé',
    question: 'Comment forme-t-on le génitif de "Max Müller" ?',
    options: [
      'a) Max Müllers',
      'b) Maxes Müller',
      'c) Max Mülleres',
      'd) Max Müller'
    ],
    correctAnswer: 'a) Max Müllers',
    explanation: 'Pour les noms composés, on ajoute -s au dernier élément.'
  },
  {
    id: 'gen-qcm-5',
    type: 'qcm',
    category: 'Génitif possessif',
    level: 'intermédiaire',
    question: 'Comment dit-on "le livre de mon père" ?',
    options: [
      'a) das Buch meines Vaters',
      'b) das Buch von meinem Vater',
      'c) das Buch meines Vater',
      'd) das Buch von meinem Vaters'
    ],
    correctAnswer: 'a) das Buch meines Vaters',
    explanation: 'Le génitif possessif utilise "meines Vaters".'
  },
  {
    id: 'gen-qcm-6',
    type: 'qcm',
    category: 'Génitif avec articles',
    level: 'avancé',
    question: 'Quelle est la forme génitive de "der Mann" ?',
    options: [
      'a) des Mannes',
      'b) der Mannes',
      'c) des Mann',
      'd) der Mann'
    ],
    correctAnswer: 'a) des Mannes',
    explanation: '"Der" devient "des" et le nom prend -(e)s.'
  },
  {
    id: 'gen-qcm-7',
    type: 'qcm',
    category: 'Génitif pluriel',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le génitif de "die Bücher" ?',
    options: [
      'a) der Bücher',
      'b) der Büchern',
      'c) der Büchs',
      'd) die Bücher'
    ],
    correctAnswer: 'a) der Bücher',
    explanation: 'Au pluriel, l\'article défini devient "der" au génitif.'
  },
  {
    id: 'gen-qcm-8',
    type: 'qcm',
    category: 'Génitif avec prépositions',
    level: 'avancé',
    question: 'Quelle préposition nécessite le génitif dans "wegen des Regens" ?',
    options: [
      'a) wegen',
      'b) wegen (datif)',
      'c) wegen (accusatif)',
      'd) wegen (nominatif)'
    ],
    correctAnswer: 'a) wegen',
    explanation: '"Wegen" est l\'une des prépositions qui régit le génitif.'
  },
  {
    id: 'gen-qcm-9',
    type: 'qcm',
    category: 'Génitif de matière',
    level: 'intermédiaire',
    question: 'Comment dit-on "une tasse de café" ?',
    options: [
      'a) eine Tasse Kaffee',
      'b) eine Tasse von Kaffee',
      'c) eine Tasse des Kaffee',
      'd) eine Tasse Kaffees'
    ],
    correctAnswer: 'd) eine Tasse Kaffees',
    explanation: 'Pour les matières, on utilise le génitif sans article.'
  },
  {
    id: 'gen-qcm-10',
    type: 'qcm',
    category: 'Génitif avec adjectifs',
    level: 'avancé',
    question: 'Comment dit-on "le livre du bon professeur" ?',
    options: [
      'a) das Buch des guten Professors',
      'b) das Buch des guten Professor',
      'c) das Buch des gutes Professors',
      'd) das Buch des guten Professors'
    ],
    correctAnswer: 'a) das Buch des guten Professors',
    explanation: 'L\'adjectif garde sa forme normale au génitif.'
  },
  {
    id: 'gen-qcm-11',
    type: 'qcm',
    category: 'Génitif avec "statt"',
    level: 'intermédiaire',
    question: 'Comment dit-on "au lieu du travail" ?',
    options: [
      'a) statt des Arbeit',
      'b) statt der Arbeit',
      'c) statt des Arbeits',
      'd) statt dem Arbeit'
    ],
    correctAnswer: 'b) statt der Arbeit',
    explanation: '"Statt" régit le génitif et "Arbeit" est féminin.'
  },
  {
    id: 'gen-qcm-12',
    type: 'qcm',
    category: 'Génitif avec noms composés',
    level: 'avancé',
    question: 'Comment forme-t-on le génitif de "das Haustür" ?',
    options: [
      'a) der Haustür',
      'b) der Haustüren',
      'c) der Haustürs',
      'd) der Haustüre'
    ],
    correctAnswer: 'a) der Haustür',
    explanation: 'Les noms composés neutres suivent la règle générale.'
  },
  {
    id: 'gen-qcm-13',
    type: 'qcm',
    category: 'Génitif dans les expressions',
    level: 'intermédiaire',
    question: 'Comment dit-on "au début de l\'année" ?',
    options: [
      'a) am Anfang des Jahres',
      'b) am Anfang der Jahr',
      'c) am Anfang des Jahr',
      'd) am Anfang der Jahres'
    ],
    correctAnswer: 'a) am Anfang des Jahres',
    explanation: '"Jahr" est neutre : "des Jahres".'
  },
  {
    id: 'gen-qcm-14',
    type: 'qcm',
    category: 'Génitif avec "trotz"',
    level: 'avancé',
    question: 'Comment dit-on "malgré la pluie" ?',
    options: [
      'a) trotz des Regen',
      'b) trotz der Regen',
      'c) trotz des Regens',
      'd) trotz dem Regen'
    ],
    correctAnswer: 'c) trotz des Regens',
    explanation: '"Trotz" régit le génitif et "Regen" est masculin.'
  },
  {
    id: 'gen-qcm-15',
    type: 'qcm',
    category: 'Génitif avec pronoms',
    level: 'intermédiaire',
    question: 'Comment dit-on "à cause de cela" ?',
    options: [
      'a) wegen dem',
      'b) wegen dessen',
      'c) wegen das',
      'd) wegen den'
    ],
    correctAnswer: 'b) wegen dessen',
    explanation: '"Dessen" est le pronom démonstratif au génitif neutre.'
  },
  {
    id: 'gen-qcm-16',
    type: 'qcm',
    category: 'Génitif avec "während"',
    level: 'avancé',
    question: 'Comment dit-on "pendant les vacances" ?',
    options: [
      'a) während die Ferien',
      'b) während der Ferien',
      'c) während die Ferie',
      'd) während der Ferie'
    ],
    correctAnswer: 'b) während der Ferien',
    explanation: '"Während" peut régir le génitif avec "der Ferien".'
  },
  {
    id: 'gen-qcm-17',
    type: 'qcm',
    category: 'Génitif avec mesures',
    level: 'intermédiaire',
    question: 'Comment dit-on "un kilo de pommes" ?',
    options: [
      'a) ein Kilo Äpfel',
      'b) ein Kilo von Äpfeln',
      'c) ein Kilo der Äpfel',
      'd) ein Kilo Äpfels'
    ],
    correctAnswer: 'a) ein Kilo Äpfel',
    explanation: 'Pour les mesures, on utilise souvent le nominatif pluriel.'
  },
  {
    id: 'gen-qcm-18',
    type: 'qcm',
    category: 'Génitif avec "innerhalb"',
    level: 'avancé',
    question: 'Comment dit-on "dans un délai d\'une semaine" ?',
    options: [
      'a) innerhalb einer Woche',
      'b) innerhalb einer Wochen',
      'c) innerhalb einer Woches',
      'd) innerhalb ein Woche'
    ],
    correctAnswer: 'a) innerhalb einer Woche',
    explanation: '"Innerhalb" régit le génitif : "einer Woche".'
  },
  {
    id: 'gen-qcm-19',
    type: 'qcm',
    category: 'Génitif avec "außerhalb"',
    level: 'intermédiaire',
    question: 'Comment dit-on "en dehors de la ville" ?',
    options: [
      'a) außerhalb der Stadt',
      'b) außerhalb die Stadt',
      'c) außerhalb der Städte',
      'd) außerhalb der Stadt'
    ],
    correctAnswer: 'a) außerhalb der Stadt',
    explanation: '"Außerhalb" régit le génitif : "der Stadt".'
  },
  {
    id: 'gen-qcm-20',
    type: 'qcm',
    category: 'Génitif avec "diesseits"',
    level: 'avancé',
    question: 'Comment dit-on "de ce côté du Rhin" ?',
    options: [
      'a) diesseits des Rhein',
      'b) diesseits der Rhein',
      'c) diesseits des Rheins',
      'd) diesseits dem Rhein'
    ],
    correctAnswer: 'c) diesseits des Rheins',
    explanation: '"Diesseits" régit le génitif et "Rhein" prend -s.'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'gen-complet-3',
    type: 'complet',
    category: 'Formation du génitif',
    level: 'intermédiaire',
    question: 'Complétez : Das Auto ___ (der) Nachbar.',
    correctAnswer: 'des Nachbarn',
    explanation: 'Génitif masculin : "der" devient "des" et le nom prend -n.'
  },
  {
    id: 'gen-complet-4',
    type: 'complet',
    category: 'Génitif avec noms propres',
    level: 'avancé',
    question: 'Complétez : Das Haus ___ (Herr Müller).',
    correctAnswer: 'Herrn Müllers',
    explanation: 'Pour les noms de personnes, on ajoute -s au dernier élément.'
  },
  {
    id: 'gen-complet-5',
    type: 'complet',
    category: 'Génitif possessif',
    level: 'intermédiaire',
    question: 'Complétez : Die Tasche ___ (meine) Mutter.',
    correctAnswer: 'meiner Mutter',
    explanation: 'Génitif féminin : l\'adjectif possessif prend -er.'
  },
  {
    id: 'gen-complet-6',
    type: 'complet',
    category: 'Génitif avec articles',
    level: 'avancé',
    question: 'Complétez : Die Farbe ___ (das) Auto.',
    correctAnswer: 'des Autos',
    explanation: 'Génitif neutre : "das" devient "des" et le nom prend -s.'
  },
  {
    id: 'gen-complet-7',
    type: 'complet',
    category: 'Génitif pluriel',
    level: 'intermédiaire',
    question: 'Complétez : Die Namen ___ (die) Studenten.',
    correctAnswer: 'der Studenten',
    explanation: 'Génitif pluriel : l\'article devient "der".'
  },
  {
    id: 'gen-complet-8',
    type: 'complet',
    category: 'Génitif avec prépositions',
    level: 'avancé',
    question: 'Complétez : ___ (wegen) ___ (der) Sturm.',
    correctAnswer: 'Wegen des Sturms',
    explanation: '"Wegen" régit le génitif masculin.'
  },
  {
    id: 'gen-complet-9',
    type: 'complet',
    category: 'Génitif de matière',
    level: 'intermédiaire',
    question: 'Complétez : Ein Glas ___ (Wasser).',
    correctAnswer: 'Wassers',
    explanation: 'Pour les matières non comptables, on utilise le génitif.'
  },
  {
    id: 'gen-complet-10',
    type: 'complet',
    category: 'Génitif avec adjectifs',
    level: 'avancé',
    question: 'Complétez : Das Werk ___ (der berühmte) Komponist.',
    correctAnswer: 'des berühmten Komponisten',
    explanation: 'L\'adjectif prend la terminaison -(e)n au génitif.'
  },
  {
    id: 'gen-complet-11',
    type: 'complet',
    category: 'Génitif avec "statt"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (statt) ___ (der) Urlaub.',
    correctAnswer: 'Statt des Urlaubs',
    explanation: '"Statt" régit le génitif masculin.'
  },
  {
    id: 'gen-complet-12',
    type: 'complet',
    category: 'Génitif avec noms composés',
    level: 'avancé',
    question: 'Complétez : Die Tür ___ (das Schlafzimmer).',
    correctAnswer: 'des Schlafzimmers',
    explanation: 'Les noms composés suivent les règles générales du génitif.'
  },
  {
    id: 'gen-complet-13',
    type: 'complet',
    category: 'Génitif dans les expressions',
    level: 'intermédiaire',
    question: 'Complétez : ___ (am Ende) ___ (der) Monat.',
    correctAnswer: 'Am Ende des Monats',
    explanation: 'Génitif masculin : "des Monats".'
  },
  {
    id: 'gen-complet-14',
    type: 'complet',
    category: 'Génitif avec "trotz"',
    level: 'avancé',
    question: 'Complétez : ___ (trotz) ___ (die) Kälte.',
    correctAnswer: 'Trotz der Kälte',
    explanation: '"Trotz" régit le génitif et "Kälte" est féminin.'
  },
  {
    id: 'gen-complet-15',
    type: 'complet',
    category: 'Génitif avec pronoms',
    level: 'intermédiaire',
    question: 'Complétez : ___ (wegen) ___ (dies).',
    correctAnswer: 'Wegen dessen',
    explanation: '"Dessen" est le pronom démonstratif au génitif neutre.'
  },
  {
    id: 'gen-complet-16',
    type: 'complet',
    category: 'Génitif avec "während"',
    level: 'avancé',
    question: 'Complétez : ___ (während) ___ (die) Reise.',
    correctAnswer: 'Während der Reise',
    explanation: '"Während" peut régir le génitif avec les noms féminins.'
  },
  {
    id: 'gen-complet-17',
    type: 'complet',
    category: 'Génitif avec mesures',
    level: 'intermédiaire',
    question: 'Complétez : Ein Liter ___ (Milch).',
    correctAnswer: 'Milch',
    explanation: 'Pour les mesures, on utilise souvent le nominatif.'
  },
  {
    id: 'gen-complet-18',
    type: 'complet',
    category: 'Génitif avec "innerhalb"',
    level: 'avancé',
    question: 'Complétez : ___ (innerhalb) ___ (eine) Woche.',
    correctAnswer: 'Innerhalb einer Woche',
    explanation: '"Innerhalb" régit le génitif.'
  },
  {
    id: 'gen-complet-19',
    type: 'complet',
    category: 'Génitif avec "außerhalb"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (außerhalb) ___ (die) Stadt.',
    correctAnswer: 'Außerhalb der Stadt',
    explanation: '"Außerhalb" régit le génitif.'
  },
  {
    id: 'gen-complet-20',
    type: 'complet',
    category: 'Génitif avec "diesseits"',
    level: 'avancé',
    question: 'Complétez : ___ (diesseits) ___ (die) Alpen.',
    correctAnswer: 'Diesseits der Alpen',
    explanation: '"Diesseits" régit le génitif pluriel.'
  }
];

const GenetifExercicesPage = () => {
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
      const typeMatch = selectedExerciseType === 'toutes' || selectedExerciseType === exercise.type;
      return categoryMatch && levelMatch && typeMatch;
    });
  };

  const filteredExercises = filterExercises(genetifExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
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
    genetifExercises.forEach(exercise => {
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

  const validateAnswer = (exerciseId: string) => {
    const exercise = genetifExercises.find(ex => ex.id === exerciseId);
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
            <Link to="/formation/allemand-genitif" className="hover:text-gray-900 transition-colors">
              Formation du Génitif
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-genitif">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour au génitif
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices du Génitif
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur l'usage du génitif en allemand
            </p>
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
                <select value={selectedExerciseType} onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'complet')}
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
                  <option value="Formation du génitif">Formation du génitif</option>
                  <option value="Génitif avec noms propres">Génitif avec noms propres</option>
                  <option value="Génitif possessif">Génitif possessif</option>
                  <option value="Génitif avec articles">Génitif avec articles</option>
                  <option value="Génitif pluriel">Génitif pluriel</option>
                  <option value="Génitif avec prépositions">Génitif avec prépositions</option>
                  <option value="Génitif de matière">Génitif de matière</option>
                  <option value="Génitif avec adjectifs">Génitif avec adjectifs</option>
                  <option value="Génitif avec statt">Génitif avec statt</option>
                  <option value="Génitif avec noms composés">Génitif avec noms composés</option>
                  <option value="Génitif dans les expressions">Génitif dans les expressions</option>
                  <option value="Génitif avec trotz">Génitif avec trotz</option>
                  <option value="Génitif avec pronoms">Génitif avec pronoms</option>
                  <option value="Génitif avec während">Génitif avec während</option>
                  <option value="Génitif avec mesures">Génitif avec mesures</option>
                  <option value="Génitif avec innerhalb">Génitif avec innerhalb</option>
                  <option value="Génitif avec außerhalb">Génitif avec außerhalb</option>
                  <option value="Génitif avec diesseits">Génitif avec diesseits</option>
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

        {filteredExercises.length > 0 && currentExercise && (
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
                            Bonne réponse : <strong>{genetifExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
              <Button onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))} disabled={currentExerciseIndex === 0 || examStarted}
                variant="outline" className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />Question précédente
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
                    <button key={index} onClick={() => !examStarted && setCurrentExerciseIndex(index)} disabled={examStarted}
                      className={`w-2 h-2 rounded-full transition-colors ${index === currentExerciseIndex ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'}`} />
                  ))}
                </div>
              </div>
              <Button onClick={() => setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))} disabled={currentExerciseIndex === filteredExercises.length - 1 || examStarted}
                variant="outline" className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50">
                Question suivante<ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {filteredExercises.length === 0 && (
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="text-center py-8">
              <p className="text-orange-600 text-lg">Aucun exercice trouvé avec les filtres actuels. Modifiez vos critères de recherche.</p>
            </CardContent>
          </Card>
        )}

        {/* Boutons de contrôle (globaux si pas en mode examen) */}
        {!examMode && (
          <div className="flex justify-center gap-4 mt-10">
            <Button onClick={calculateScore} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />Terminer et voir le score
            </Button>
            <Button onClick={resetQuiz} variant="outline" className="px-8 py-3 text-lg flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              <X className="h-5 w-5" />Réinitialiser
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-blue-200 bg-blue-50' : 'border-orange-200 bg-orange-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-blue-800' : 'text-orange-800'}`}>
                <Award className="h-8 w-8" />{examMode ? 'Résultats de l\'Examen' : 'Votre Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">⏱️ Temps total : {formatTime(examTime)}</p>
                </div>
              )}
              <div className={`text-lg ${examMode ? 'text-blue-700' : 'text-orange-700'}`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien le génitif allemand.'}
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
                  <p className="text-blue-700 text-sm">💡 En mode normal, vous pouvez voir les corrections détaillées de chaque exercice.</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GenetifExercicesPage;
