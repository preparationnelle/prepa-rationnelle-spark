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

// Données d'exercices pour les phrases interrogatives
const phrasesInterrogativesExercises = [
  {
    id: 'interro-qcm-1',
    type: 'qcm',
    category: 'Questions fermées',
    level: 'intermédiaire',
    question: 'Dans les questions fermées, où se place le verbe conjugué ?',
    options: [
      'a) En première position',
      'b) En deuxième position',
      'c) En dernière position',
      'd) Au milieu de la phrase'
    ],
    correctAnswer: 'a) En première position',
    explanation: 'Dans les questions fermées (Ja/Nein-Fragen), le verbe conjugué se place en première position.'
  },
  // Nouveaux QCM (18 supplémentaires pour atteindre 20)
  {
    id: 'interro-qcm-3',
    type: 'qcm',
    category: 'Questions fermées',
    level: 'intermédiaire',
    question: 'Comment forme-t-on une question fermée en allemand ?',
    options: [
      'a) Sujet + verbe + complément',
      'b) Verbe + sujet + complément',
      'c) Complément + sujet + verbe',
      'd) Sujet + complément + verbe'
    ],
    correctAnswer: 'b) Verbe + sujet + complément',
    explanation: 'Les questions fermées utilisent l\'inversion verbe-sujet.'
  },
  {
    id: 'interro-qcm-4',
    type: 'qcm',
    category: 'Questions ouvertes',
    level: 'avancé',
    question: 'Dans les questions avec mot interrogatif, où se place le verbe ?',
    options: [
      'a) En première position',
      'b) En deuxième position',
      'c) En dernière position',
      'd) Au milieu'
    ],
    correctAnswer: 'b) En deuxième position',
    explanation: 'Le mot interrogatif est en première position, le verbe en deuxième.'
  },
  {
    id: 'interro-qcm-5',
    type: 'qcm',
    category: 'Mots interrogatifs',
    level: 'intermédiaire',
    question: 'Quel mot interrogatif utilise-t-on pour demander l\'heure ?',
    options: [
      'a) Wann',
      'b) Was',
      'c) Wie',
      'd) Wo'
    ],
    correctAnswer: 'a) Wann',
    explanation: '"Wann" demande quand quelque chose se passe.'
  },
  {
    id: 'interro-qcm-6',
    type: 'qcm',
    category: 'Questions avec "warum"',
    level: 'intermédiaire',
    question: 'Comment dit-on "Pourquoi viens-tu si tard ?" ?',
    options: [
      'a) Warum kommst du so spät?',
      'b) Was kommst du so spät?',
      'c) Wann kommst du so spät?',
      'd) Wie kommst du so spät?'
    ],
    correctAnswer: 'a) Warum kommst du so spät?',
    explanation: '"Warum" demande la raison ou la cause.'
  },
  {
    id: 'interro-qcm-7',
    type: 'qcm',
    category: 'Questions avec "wer"',
    level: 'avancé',
    question: 'Comment dit-on "Qui a téléphoné ?" ?',
    options: [
      'a) Was hat angerufen?',
      'b) Wer hat angerufen?',
      'c) Wann hat angerufen?',
      'd) Wie hat angerufen?'
    ],
    correctAnswer: 'b) Wer hat angerufen?',
    explanation: '"Wer" demande la personne qui fait l\'action.'
  },
  {
    id: 'interro-qcm-8',
    type: 'qcm',
    category: 'Questions avec "wie viel"',
    level: 'intermédiaire',
    question: 'Comment demander "Combien coûte ce livre ?" ?',
    options: [
      'a) Was kostet dieses Buch?',
      'b) Wie kostet dieses Buch?',
      'c) Wie viel kostet dieses Buch?',
      'd) Wann kostet dieses Buch?'
    ],
    correctAnswer: 'c) Wie viel kostet dieses Buch?',
    explanation: '"Wie viel" demande la quantité ou le prix.'
  },
  {
    id: 'interro-qcm-9',
    type: 'qcm',
    category: 'Questions alternatives',
    level: 'avancé',
    question: 'Comment dire "Préfères-tu le thé ou le café ?" ?',
    options: [
      'a) Trinkst du Tee oder Kaffee?',
      'b) Möchtest du Tee oder Kaffee?',
      'c) Willst du Tee oder Kaffee?',
      'd) Alle réponses sont possibles'
    ],
    correctAnswer: 'd) Alle réponses sont possibles',
    explanation: 'Plusieurs verbes peuvent exprimer la préférence.'
  },
  {
    id: 'interro-qcm-10',
    type: 'qcm',
    category: 'Questions avec "welcher"',
    level: 'intermédiaire',
    question: 'Comment dire "Quel livre lis-tu ?" ?',
    options: [
      'a) Was Buch liest du?',
      'b) Welches Buch liest du?',
      'c) Was liest du?',
      'd) Buch liest du?'
    ],
    correctAnswer: 'b) Welches Buch liest du?',
    explanation: '"Welcher" demande de choisir parmi plusieurs options.'
  },
  {
    id: 'interro-qcm-11',
    type: 'qcm',
    category: 'Questions indirectes',
    level: 'avancé',
    question: 'Comment transformer "Wo wohnst du?" en question indirecte ?',
    options: [
      'a) Ich weiß, wo du wohnst',
      'b) Ich weiß, wohnst du wo',
      'c) Ich weiß, du wohnst wo',
      'd) Wo ich weiß, du wohnst'
    ],
    correctAnswer: 'a) Ich weiß, wo du wohnst',
    explanation: 'Les questions indirectes gardent l\'ordre sujet-verbe.'
  },
  {
    id: 'interro-qcm-12',
    type: 'qcm',
    category: 'Questions avec "wohin"',
    level: 'intermédiaire',
    question: 'Comment dire "Où vas-tu ?" ?',
    options: [
      'a) Wo gehst du?',
      'b) Wohin gehst du?',
      'c) Woher kommst du?',
      'd) Was gehst du?'
    ],
    correctAnswer: 'b) Wohin gehst du?',
    explanation: '"Wohin" demande la direction ou la destination.'
  },
  {
    id: 'interro-qcm-13',
    type: 'qcm',
    category: 'Questions avec "woher"',
    level: 'avancé',
    question: 'Comment dire "D\'où viens-tu ?" ?',
    options: [
      'a) Wo kommst du?',
      'b) Wohin gehst du?',
      'c) Woher kommst du?',
      'd) Was kommst du?'
    ],
    correctAnswer: 'c) Woher kommst du?',
    explanation: '"Woher" demande l\'origine ou le point de départ.'
  },
  {
    id: 'interro-qcm-14',
    type: 'qcm',
    category: 'Questions avec "wie"',
    level: 'intermédiaire',
    question: 'Comment demander "Comment allez-vous ?" ?',
    options: [
      'a) Was geht es Ihnen?',
      'b) Wie geht es Ihnen?',
      'c) Wann geht es Ihnen?',
      'd) Warum geht es Ihnen?'
    ],
    correctAnswer: 'b) Wie geht es Ihnen?',
    explanation: '"Wie" demande la manière ou l\'état.'
  },
  {
    id: 'interro-qcm-15',
    type: 'qcm',
    category: 'Questions rhétoriques',
    level: 'avancé',
    question: 'Quel type de question n\'attend pas de réponse ?',
    options: [
      'a) Les questions fermées',
      'b) Les questions ouvertes',
      'c) Les questions rhétoriques',
      'd) Les questions alternatives'
    ],
    correctAnswer: 'c) Les questions rhétoriques',
    explanation: 'Les questions rhétoriques expriment une opinion.'
  },
  {
    id: 'interro-qcm-16',
    type: 'qcm',
    category: 'Questions avec "warum"',
    level: 'intermédiaire',
    question: 'Comment dire "Pourquoi apprends-tu l\'allemand ?" ?',
    options: [
      'a) Warum lernst du Deutsch?',
      'b) Was lernst du Deutsch?',
      'c) Wie lernst du Deutsch?',
      'd) Wann lernst du Deutsch?'
    ],
    correctAnswer: 'a) Warum lernst du Deutsch?',
    explanation: '"Warum" demande la raison ou le motif.'
  },
  {
    id: 'interro-qcm-17',
    type: 'qcm',
    category: 'Questions avec "wann"',
    level: 'avancé',
    question: 'Comment dire "Quand arrives-tu ?" ?',
    options: [
      'a) Was kommst du?',
      'b) Wie kommst du?',
      'c) Wann kommst du?',
      'd) Warum kommst du?'
    ],
    correctAnswer: 'c) Wann kommst du?',
    explanation: '"Wann" demande le moment ou l\'heure.'
  },
  {
    id: 'interro-qcm-18',
    type: 'qcm',
    category: 'Questions avec "was für ein"',
    level: 'intermédiaire',
    question: 'Comment dire "Quel genre de voiture as-tu ?" ?',
    options: [
      'a) Was Auto hast du?',
      'b) Was für ein Auto hast du?',
      'c) Welches Auto hast du?',
      'd) Wann Auto hast du?'
    ],
    correctAnswer: 'b) Was für ein Auto hast du?',
    explanation: '"Was für ein" demande la qualité ou le type.'
  },
  {
    id: 'interro-qcm-19',
    type: 'qcm',
    category: 'Questions tag',
    level: 'avancé',
    question: 'Comment former une question tag en allemand ?',
    options: [
      'a) Avec "nicht wahr?"',
      'b) Avec "oder?"',
      'c) Avec "stimmt\'s?"',
      'd) Toutes les réponses'
    ],
    correctAnswer: 'd) Toutes les réponses',
    explanation: 'Plusieurs expressions forment les questions tag.'
  },
  {
    id: 'interro-qcm-20',
    type: 'qcm',
    category: 'Questions avec prépositions',
    level: 'intermédiaire',
    question: 'Comment dire "Avec qui parles-tu ?" ?',
    options: [
      'a) Mit wer sprichst du?',
      'b) Mit wem sprichst du?',
      'c) Mit was sprichst du?',
      'd) Mit wann sprichst du?'
    ],
    correctAnswer: 'b) Mit wem sprichst du?',
    explanation: 'Après préposition, on utilise "wem" (datif).'
  },
  // Nouveaux exercices de mots à compléter (18 supplémentaires pour atteindre 20)
  {
    id: 'interro-complet-3',
    type: 'complet',
    category: 'Questions fermées',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Kommst) du morgen?',
    correctAnswer: 'Kommst',
    explanation: 'Inversion verbe-sujet dans les questions fermées.'
  },
  {
    id: 'interro-complet-4',
    type: 'complet',
    category: 'Questions ouvertes',
    level: 'avancé',
    question: 'Complétez : ___ (Wie) heißt du?',
    correctAnswer: 'Wie',
    explanation: '"Wie" demande la manière ou les caractéristiques.'
  },
  {
    id: 'interro-complet-5',
    type: 'complet',
    category: 'Mots interrogatifs',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wo) bist du geboren?',
    correctAnswer: 'Wo',
    explanation: '"Wo" demande le lieu où l\'on est né.'
  },
  {
    id: 'interro-complet-6',
    type: 'complet',
    category: 'Questions avec "warum"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Warum) bist du müde?',
    correctAnswer: 'Warum',
    explanation: '"Warum" demande la raison de la fatigue.'
  },
  {
    id: 'interro-complet-7',
    type: 'complet',
    category: 'Questions avec "wer"',
    level: 'avancé',
    question: 'Complétez : ___ (Wer) hat das gesagt?',
    correctAnswer: 'Wer',
    explanation: '"Wer" demande la personne qui a parlé.'
  },
  {
    id: 'interro-complet-8',
    type: 'complet',
    category: 'Questions avec "wie viel"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wie viel) kostet das?',
    correctAnswer: 'Wie viel',
    explanation: '"Wie viel" demande le prix ou la quantité.'
  },
  {
    id: 'interro-complet-9',
    type: 'complet',
    category: 'Questions alternatives',
    level: 'avancé',
    question: 'Complétez : Möchtest du Tee ___ (oder) Kaffee?',
    correctAnswer: 'oder',
    explanation: '"Oder" relie les alternatives dans une question.'
  },
  {
    id: 'interro-complet-10',
    type: 'complet',
    category: 'Questions avec "welcher"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Welches) Buch willst du?',
    correctAnswer: 'Welches',
    explanation: '"Welches" demande de choisir un livre spécifique.'
  },
  {
    id: 'interro-complet-11',
    type: 'complet',
    category: 'Questions indirectes',
    level: 'avancé',
    question: 'Complétez : Sage mir, ___ (wann) du kommst.',
    correctAnswer: 'wann',
    explanation: 'Dans les questions indirectes, l\'ordre est sujet-verbe.'
  },
  {
    id: 'interro-complet-12',
    type: 'complet',
    category: 'Questions avec "wohin"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wohin) fährst du?',
    correctAnswer: 'Wohin',
    explanation: '"Wohin" demande la destination du voyage.'
  },
  {
    id: 'interro-complet-13',
    type: 'complet',
    category: 'Questions avec "woher"',
    level: 'avancé',
    question: 'Complétez : ___ (Woher) kommst du?',
    correctAnswer: 'Woher',
    explanation: '"Woher" demande l\'origine ou le lieu de provenance.'
  },
  {
    id: 'interro-complet-14',
    type: 'complet',
    category: 'Questions avec "wie"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wie) geht es dir?',
    correctAnswer: 'Wie',
    explanation: '"Wie" demande l\'état de santé ou les conditions.'
  },
  {
    id: 'interro-complet-15',
    type: 'complet',
    category: 'Questions rhétoriques',
    level: 'avancé',
    question: 'Complétez : Ist das ___ (nicht) logisch?',
    correctAnswer: 'nicht',
    explanation: 'Les questions rhétoriques expriment souvent une évidence.'
  },
  {
    id: 'interro-complet-16',
    type: 'complet',
    category: 'Questions avec "wann"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wann) beginnt der Film?',
    correctAnswer: 'Wann',
    explanation: '"Wann" demande l\'heure de début du film.'
  },
  {
    id: 'interro-complet-17',
    type: 'complet',
    category: 'Questions avec "was für ein"',
    level: 'avancé',
    question: 'Complétez : ___ (Was für ein) Mensch bist du?',
    correctAnswer: 'Was für ein',
    explanation: '"Was für ein" demande le type de personne.'
  },
  {
    id: 'interro-complet-18',
    type: 'complet',
    category: 'Questions tag',
    level: 'intermédiaire',
    question: 'Complétez : Du kommst morgen, ___ (nicht wahr)?',
    correctAnswer: 'nicht wahr',
    explanation: '"Nicht wahr" forme une question tag cherchant confirmation.'
  },
  {
    id: 'interro-complet-19',
    type: 'complet',
    category: 'Questions avec prépositions',
    level: 'avancé',
    question: 'Complétez : ___ (Mit wem) sprichst du?',
    correctAnswer: 'Mit wem',
    explanation: '"Wem" est le datif de "wer" après "mit".'
  },
  {
    id: 'interro-complet-20',
    type: 'complet',
    category: 'Questions avec "was"',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Was) machst du heute Abend?',
    correctAnswer: 'Was',
    explanation: '"Was" demande l\'activité ou l\'occupation.'
  }
];

const PhrasesInterrogativesExercicesPage = () => {
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

  const filteredExercises = filterExercises(phrasesInterrogativesExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = phrasesInterrogativesExercises.find(ex => ex.id === exerciseId);
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
    phrasesInterrogativesExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-phrases-interrogatives" className="hover:text-gray-900 transition-colors">
              Phrases Interrogatives
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-phrases-interrogatives">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour aux phrases interrogatives
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices des Phrases Interrogatives
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur les différents types de questions en allemand
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{phrasesInterrogativesExercises.length} exercices</Badge>
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
                  <option value="Questions fermées">Questions fermées</option>
                  <option value="Questions ouvertes">Questions ouvertes</option>
                  <option value="Questions avec prépositions">Questions avec prépositions</option>
                  <option value="Questions avec was">Questions avec was</option>
                  <option value="Questions indirectes">Questions indirectes</option>
                  <option value="Questions avec wie">Questions avec wie</option>
                  <option value="Questions avec wo">Questions avec wo</option>
                  <option value="Questions avec wann">Questions avec wann</option>
                  <option value="Questions avec warum">Questions avec warum</option>
                  <option value="Questions avec wer">Questions avec wer</option>
                  <option value="Questions avec welch">Questions avec welch</option>
                  <option value="Questions avec wie viel">Questions avec wie viel</option>
                  <option value="Questions avec nicht wahr">Questions avec nicht wahr</option>
                  <option value="Questions complexes">Questions complexes</option>
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
                            Bonne réponse : <strong>{phrasesInterrogativesExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les phrases interrogatives allemandes.'}
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

export default PhrasesInterrogativesExercicesPage;
