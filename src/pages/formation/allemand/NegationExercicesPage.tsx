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

// Données d'exercices pour la négation
const negationExercises = [
  {
    id: 'neg-qcm-1',
    type: 'qcm',
    category: 'Nicht vs Kein',
    level: 'intermédiaire',
    question: 'Quand utilise-t-on "kein" plutôt que "nicht" ?',
    options: [
      'a) Pour nier des noms indéfinis',
      'b) Pour nier des verbes',
      'c) Pour nier des adjectifs',
      'd) Pour nier des adverbes'
    ],
    correctAnswer: 'a) Pour nier des noms indéfinis',
    explanation: '"Kein" s\'utilise pour nier des noms indéfinis sans article.'
  },
  // Nouveaux QCM (18 supplémentaires pour atteindre 20)
  {
    id: 'neg-qcm-2',
    type: 'qcm',
    category: 'Nicht vs Kein',
    level: 'intermédiaire',
    question: 'Comment nier "Ich habe einen Bruder" ?',
    options: [
      'a) Ich habe nicht einen Bruder',
      'b) Ich habe keinen Bruder',
      'c) Ich habe kein Bruder',
      'd) Ich habe nicht Bruder'
    ],
    correctAnswer: 'b) Ich habe keinen Bruder',
    explanation: 'Devant un nom indéfini masculin singulier, on utilise "keinen".'
  },
  {
    id: 'neg-qcm-3',
    type: 'qcm',
    category: 'Position de nicht',
    level: 'avancé',
    question: 'Où se place "nicht" dans "Ich esse das Brot schnell" ?',
    options: [
      'a) Ich esse nicht das Brot schnell',
      'b) Ich esse das Brot nicht schnell',
      'c) Ich esse das Brot schnell nicht',
      'd) Nicht ich esse das Brot schnell'
    ],
    correctAnswer: 'b) Ich esse das Brot nicht schnell',
    explanation: '"Nicht" précède l\'élément qu\'il nie : l\'adverbe "schnell".'
  },
  {
    id: 'neg-qcm-4',
    type: 'qcm',
    category: 'Kein avec pluriel',
    level: 'intermédiaire',
    question: 'Comment nier "Ich habe Äpfel" ?',
    options: [
      'a) Ich habe nicht Äpfel',
      'b) Ich habe keine Äpfel',
      'c) Ich habe kein Äpfel',
      'd) Ich habe nicht keine Äpfel'
    ],
    correctAnswer: 'b) Ich habe keine Äpfel',
    explanation: 'Au pluriel, on utilise "keine" pour nier les noms sans article.'
  },
  {
    id: 'neg-qcm-5',
    type: 'qcm',
    category: 'Négation de verbes',
    level: 'intermédiaire',
    question: 'Comment nier "Er kommt morgen" ?',
    options: [
      'a) Er kommt nicht morgen',
      'b) Er kommt kein morgen',
      'c) Er nicht kommt morgen',
      'd) Er kommt morgen nicht'
    ],
    correctAnswer: 'a) Er kommt nicht morgen',
    explanation: '"Nicht" précède l\'élément qu\'il nie : l\'adverbe "morgen".'
  },
  {
    id: 'neg-qcm-6',
    type: 'qcm',
    category: 'Kein avec adjectifs',
    level: 'avancé',
    question: 'Comment nier "Das ist ein gutes Buch" ?',
    options: [
      'a) Das ist nicht ein gutes Buch',
      'b) Das ist kein gutes Buch',
      'c) Das ist nicht gutes Buch',
      'd) Das ist gutes nicht Buch'
    ],
    correctAnswer: 'b) Das ist kein gutes Buch',
    explanation: '"Kein" s\'utilise devant les noms indéfinis avec adjectif.'
  },
  {
    id: 'neg-qcm-7',
    type: 'qcm',
    category: 'Négation avec "nie"',
    level: 'intermédiaire',
    question: 'Comment exprimer "Je ne vais jamais au cinéma" ?',
    options: [
      'a) Ich gehe nie ins Kino',
      'b) Ich gehe nicht nie ins Kino',
      'c) Ich gehe kein ins Kino',
      'd) Nie ich gehe ins Kino'
    ],
    correctAnswer: 'a) Ich gehe nie ins Kino',
    explanation: '"Nie" signifie "jamais" et se place généralement en fin de phrase.'
  },
  {
    id: 'neg-qcm-8',
    type: 'qcm',
    category: 'Négation de pronoms',
    level: 'avancé',
    question: 'Comment nier "Das gehört mir" ?',
    options: [
      'a) Das gehört nicht mir',
      'b) Das gehört kein mir',
      'c) Das nicht gehört mir',
      'd) Das gehört mir nicht'
    ],
    correctAnswer: 'a) Das gehört nicht mir',
    explanation: '"Nicht" précède le pronom personnel "mir".'
  },
  {
    id: 'neg-qcm-9',
    type: 'qcm',
    category: 'Kein avec noms propres',
    level: 'intermédiaire',
    question: 'Comment nier "Das ist Anna" ?',
    options: [
      'a) Das ist nicht Anna',
      'b) Das ist keine Anna',
      'c) Das ist kein Anna',
      'd) Das Anna ist nicht'
    ],
    correctAnswer: 'a) Das ist nicht Anna',
    explanation: 'Avec les noms propres, on utilise "nicht", pas "kein".'
  },
  {
    id: 'neg-qcm-10',
    type: 'qcm',
    category: 'Double négation',
    level: 'avancé',
    question: 'Comment nier "Niemand hat etwas gesagt" ?',
    options: [
      'a) Niemand hat nichts gesagt',
      'b) Niemand hat etwas nicht gesagt',
      'c) Nicht niemand hat etwas gesagt',
      'd) Niemand nicht hat etwas gesagt'
    ],
    correctAnswer: 'a) Niemand hat nichts gesagt',
    explanation: '"Nichts" (rien) peut renforcer la négation avec "niemand".'
  },
  {
    id: 'neg-qcm-11',
    type: 'qcm',
    category: 'Position de nicht avec verbes séparables',
    level: 'avancé',
    question: 'Où se place "nicht" dans "Er steht früh auf" ?',
    options: [
      'a) Er steht nicht früh auf',
      'b) Er steht früh nicht auf',
      'c) Er nicht steht früh auf',
      'd) Er steht früh auf nicht'
    ],
    correctAnswer: 'b) Er steht früh nicht auf',
    explanation: '"Nicht" se place avant la particule séparable "auf".'
  },
  {
    id: 'neg-qcm-12',
    type: 'qcm',
    category: 'Kein dans les questions',
    level: 'intermédiaire',
    question: 'Comment poser la question négative "Hast du kein Auto ?" ?',
    options: [
      'a) Hast du nicht Auto ?',
      'b) Hast du kein Auto ?',
      'c) Nicht hast du Auto ?',
      'd) Auto hast du nicht ?'
    ],
    correctAnswer: 'b) Hast du kein Auto ?',
    explanation: 'Dans les questions, "kein" suit la même logique qu\'à l\'affirmative.'
  },
  {
    id: 'neg-qcm-13',
    type: 'qcm',
    category: 'Négation avec "weder...noch"',
    level: 'avancé',
    question: 'Comment traduire "Ni toi ni moi" ?',
    options: [
      'a) Nicht du nicht ich',
      'b) Kein du kein ich',
      'c) Weder du noch ich',
      'd) Nicht weder du noch ich'
    ],
    correctAnswer: 'c) Weder du noch ich',
    explanation: '"Weder...noch" signifie "ni...ni" en allemand.'
  },
  {
    id: 'neg-qcm-14',
    type: 'qcm',
    category: 'Négation dans les subordonnées',
    level: 'avancé',
    question: 'Où se place "nicht" dans "Ich glaube, dass er kommt" ?',
    options: [
      'a) Ich glaube, dass nicht er kommt',
      'b) Ich glaube, dass er nicht kommt',
      'c) Ich glaube nicht, dass er kommt',
      'd) Ich nicht glaube, dass er kommt'
    ],
    correctAnswer: 'b) Ich glaube, dass er nicht kommt',
    explanation: 'Dans les subordonnées, "nicht" se place avant le verbe.'
  },
  {
    id: 'neg-qcm-15',
    type: 'qcm',
    category: 'Kein avec quantités',
    level: 'intermédiaire',
    question: 'Comment nier "Ich trinke viel Kaffee" ?',
    options: [
      'a) Ich trinke nicht viel Kaffee',
      'b) Ich trinke kein viel Kaffee',
      'c) Ich trinke viel nicht Kaffee',
      'd) Nicht ich trinke viel Kaffee'
    ],
    correctAnswer: 'a) Ich trinke nicht viel Kaffee',
    explanation: '"Nicht" nie l\'adverbe de quantité "viel".'
  },
  {
    id: 'neg-qcm-16',
    type: 'qcm',
    category: 'Négation avec "gar"',
    level: 'intermédiaire',
    question: 'Comment renforcer la négation de "Das ist nicht wahr" ?',
    options: [
      'a) Das ist gar nicht wahr',
      'b) Das ist nicht gar wahr',
      'c) Das ist wahr nicht gar',
      'd) Gar das ist nicht wahr'
    ],
    correctAnswer: 'a) Das ist gar nicht wahr',
    explanation: '"Gar" renforce la négation et se place avant "nicht".'
  },
  {
    id: 'neg-qcm-17',
    type: 'qcm',
    category: 'Kein avec professions',
    level: 'intermédiaire',
    question: 'Comment nier "Er ist Arzt" ?',
    options: [
      'a) Er ist nicht Arzt',
      'b) Er ist kein Arzt',
      'c) Er ist nicht kein Arzt',
      'd) Nicht er ist Arzt'
    ],
    correctAnswer: 'a) Er ist nicht Arzt',
    explanation: 'Pour les professions sans article, on utilise "nicht".'
  },
  {
    id: 'neg-qcm-18',
    type: 'qcm',
    category: 'Négation de comparaisons',
    level: 'avancé',
    question: 'Comment nier "Das ist größer als das andere" ?',
    options: [
      'a) Das ist nicht größer als das andere',
      'b) Das ist kein größer als das andere',
      'c) Das ist größer nicht als das andere',
      'd) Nicht das ist größer als das andere'
    ],
    correctAnswer: 'a) Das ist nicht größer als das andere',
    explanation: '"Nicht" nie l\'adjectif comparatif.'
  },
  {
    id: 'neg-qcm-19',
    type: 'qcm',
    category: 'Position de nicht avec auxiliaires',
    level: 'avancé',
    question: 'Où se place "nicht" dans "Er hat das Buch gelesen" ?',
    options: [
      'a) Er hat nicht das Buch gelesen',
      'b) Er hat das Buch nicht gelesen',
      'c) Er nicht hat das Buch gelesen',
      'd) Er hat das Buch gelesen nicht'
    ],
    correctAnswer: 'b) Er hat das Buch nicht gelesen',
    explanation: '"Nicht" se place avant le participe passé.'
  },
  {
    id: 'neg-qcm-20',
    type: 'qcm',
    category: 'Kein avec mesures',
    level: 'intermédiaire',
    question: 'Comment nier "Das kostet 10 Euro" ?',
    options: [
      'a) Das kostet nicht 10 Euro',
      'b) Das kostet kein 10 Euro',
      'c) Das kostet 10 nicht Euro',
      'd) Nicht das kostet 10 Euro'
    ],
    correctAnswer: 'a) Das kostet nicht 10 Euro',
    explanation: '"Nicht" nie les expressions de mesure.'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'neg-complet-2',
    type: 'complet',
    category: 'Nicht vs Kein',
    level: 'intermédiaire',
    question: 'Complétez : Ich habe ___ (kein) Auto.',
    correctAnswer: 'kein',
    explanation: 'Devant un nom masculin singulier indéfini, on utilise "kein".'
  },
  {
    id: 'neg-complet-3',
    type: 'complet',
    category: 'Position de nicht',
    level: 'avancé',
    question: 'Complétez : Sie arbeitet ___ (nicht) hier.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" se place avant l\'adverbe "hier".'
  },
  {
    id: 'neg-complet-4',
    type: 'complet',
    category: 'Kein avec pluriel',
    level: 'intermédiaire',
    question: 'Complétez : Wir haben ___ (kein) Kinder.',
    correctAnswer: 'keine',
    explanation: 'Au pluriel, on utilise "keine".'
  },
  {
    id: 'neg-complet-5',
    type: 'complet',
    category: 'Négation de verbes',
    level: 'intermédiaire',
    question: 'Complétez : Er kommt ___ (nicht) heute.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" précède l\'adverbe "heute".'
  },
  {
    id: 'neg-complet-6',
    type: 'complet',
    category: 'Kein avec adjectifs',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (kein) schlechter Film.',
    correctAnswer: 'kein',
    explanation: 'Devant un nom masculin avec adjectif, on utilise "kein".'
  },
  {
    id: 'neg-complet-7',
    type: 'complet',
    category: 'Négation avec "nie"',
    level: 'intermédiaire',
    question: 'Complétez : Ich gehe ___ (nie) schwimmen.',
    correctAnswer: 'nie',
    explanation: '"Nie" signifie "jamais" et se place généralement en fin de phrase.'
  },
  {
    id: 'neg-complet-8',
    type: 'complet',
    category: 'Négation de pronoms',
    level: 'avancé',
    question: 'Complétez : Das gehört ___ (nicht) dir.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" précède le pronom "dir".'
  },
  {
    id: 'neg-complet-9',
    type: 'complet',
    category: 'Kein avec noms propres',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (nicht) Maria.',
    correctAnswer: 'nicht',
    explanation: 'Avec les noms propres, on utilise "nicht".'
  },
  {
    id: 'neg-complet-10',
    type: 'complet',
    category: 'Double négation',
    level: 'avancé',
    question: 'Complétez : Niemand hat ___ (nichts) gesagt.',
    correctAnswer: 'nichts',
    explanation: '"Nichts" peut renforcer la négation avec "niemand".'
  },
  {
    id: 'neg-complet-11',
    type: 'complet',
    category: 'Position avec verbes séparables',
    level: 'avancé',
    question: 'Complétez : Er steht früh ___ (nicht) auf.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" se place avant la particule séparable "auf".'
  },
  {
    id: 'neg-complet-12',
    type: 'complet',
    category: 'Kein dans les questions',
    level: 'intermédiaire',
    question: 'Complétez : Hast du ___ (kein) Problem?',
    correctAnswer: 'kein',
    explanation: 'Dans les questions, "kein" suit la même logique.'
  },
  {
    id: 'neg-complet-13',
    type: 'complet',
    category: 'Négation avec "weder...noch"',
    level: 'avancé',
    question: 'Complétez : ___ (weder) du ___ (noch) ich.',
    correctAnswer: 'Weder...noch',
    explanation: '"Weder...noch" signifie "ni...ni".'
  },
  {
    id: 'neg-complet-14',
    type: 'complet',
    category: 'Négation dans les subordonnées',
    level: 'avancé',
    question: 'Complétez : Ich glaube, dass er ___ (nicht) kommt.',
    correctAnswer: 'nicht',
    explanation: 'Dans les subordonnées, "nicht" se place avant le verbe.'
  },
  {
    id: 'neg-complet-15',
    type: 'complet',
    category: 'Kein avec quantités',
    level: 'intermédiaire',
    question: 'Complétez : Er trinkt ___ (nicht) viel Bier.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" nie l\'adverbe de quantité "viel".'
  },
  {
    id: 'neg-complet-16',
    type: 'complet',
    category: 'Négation avec "gar"',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (gar) ___ (nicht) wahr.',
    correctAnswer: 'gar nicht',
    explanation: '"Gar nicht" renforce la négation.'
  },
  {
    id: 'neg-complet-17',
    type: 'complet',
    category: 'Kein avec professions',
    level: 'intermédiaire',
    question: 'Complétez : Sie ist ___ (nicht) Lehrerin.',
    correctAnswer: 'nicht',
    explanation: 'Pour les professions, on utilise "nicht".'
  },
  {
    id: 'neg-complet-18',
    type: 'complet',
    category: 'Négation de comparaisons',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (nicht) größer.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" nie l\'adjectif comparatif.'
  },
  {
    id: 'neg-complet-19',
    type: 'complet',
    category: 'Position avec auxiliaires',
    level: 'avancé',
    question: 'Complétez : Er hat das Buch ___ (nicht) gelesen.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" se place avant le participe passé.'
  },
  {
    id: 'neg-complet-20',
    type: 'complet',
    category: 'Kein avec mesures',
    level: 'intermédiaire',
    question: 'Complétez : Das kostet ___ (nicht) 20 Euro.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" nie les expressions de mesure.'
  }
];

const NegationExercicesPage = () => {
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

  const filteredExercises = filterExercises(negationExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = negationExercises.find(ex => ex.id === exerciseId);
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
  }, [filteredExercises.length, examStarted]);

  const calculateScore = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;

    negationExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-negation" className="hover:text-gray-900 transition-colors">
              La Négation
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-negation">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour à la négation
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices de la Négation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur la négation allemande
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

        {/* Exam Timer and Controls (visible only in exam mode and when started) */}
        {examMode && (
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={startExam}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
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
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  value={selectedExerciseType}
                  onChange={(e) => setSelectedExerciseType(e.target.value as 'qcm' | 'complet')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  disabled={examStarted}
                >
                  <option value="qcm">QCM</option>
                  <option value="complet">Mots à compléter</option>
                  <option value="toutes">Tous les types</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Catégorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  disabled={examStarted}
                >
                  <option value="toutes">Toutes les catégories</option>
                  <option value="Nicht vs Kein">Nicht vs Kein</option>
                  <option value="Position de nicht">Position de nicht</option>
                  <option value="Kein avec pluriel">Kein avec pluriel</option>
                  <option value="Négation de verbes">Négation de verbes</option>
                  <option value="Kein avec adjectifs">Kein avec adjectifs</option>
                  <option value="Négation avec nie">Négation avec nie</option>
                  <option value="Négation de pronoms">Négation de pronoms</option>
                  <option value="Kein avec noms propres">Kein avec noms propres</option>
                  <option value="Double négation">Double négation</option>
                  <option value="Position avec verbes séparables">Position avec verbes séparables</option>
                  <option value="Kein dans les questions">Kein dans les questions</option>
                  <option value="Négation avec weder...noch">Négation avec weder...noch</option>
                  <option value="Négation dans les subordonnées">Négation dans les subordonnées</option>
                  <option value="Kein avec quantités">Kein avec quantités</option>
                  <option value="Négation avec gar">Négation avec gar</option>
                  <option value="Kein avec professions">Kein avec professions</option>
                  <option value="Négation de comparaisons">Négation de comparaisons</option>
                  <option value="Position avec auxiliaires">Position avec auxiliaires</option>
                  <option value="Kein avec mesures">Kein avec mesures</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Niveau
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  disabled={examStarted}
                >
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
                            Bonne réponse : <strong>{negationExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien la négation allemande.'}
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

export default NegationExercicesPage;
