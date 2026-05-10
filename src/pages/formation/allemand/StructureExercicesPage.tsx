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
  Brain,
  Award,
  Trophy,
  Star,
  BarChart3,
  X
} from 'lucide-react';

// Données d'exercices pour la structure de la phrase
const structureExercises = [
  {
    id: 'struct-qcm-1',
    type: 'qcm',
    category: 'Position du verbe',
    level: 'intermédiaire',
    question: 'Dans quelle position se trouve le verbe conjugué dans une phrase déclarative ?',
    options: [
      'a) Position 1',
      'b) Position 2',
      'c) Position finale',
      'd) Position 3'
    ],
    correctAnswer: 'b) Position 2',
    explanation: 'Dans les phrases déclaratives allemandes, le verbe conjugué occupe toujours la deuxième position.'
  },
  {
    id: 'struct-complet-1',
    type: 'complet',
    category: 'Ordre des compléments',
    level: 'avancé',
    question: 'Complétez l\'ordre : Ich gehe ___ (morgen) ___ (zur Schule) ___ (mit dem Bus).',
    correctAnswer: 'morgen zur Schule mit dem Bus',
    explanation: 'Ordre temporel - lieu - manière : morgen (temps), zur Schule (lieu), mit dem Bus (manière).'
  },
  {
    id: 'struct-qcm-2',
    type: 'qcm',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Où se place généralement "nicht" dans une phrase négative simple ?',
    options: [
      'a) Au début de la phrase',
      'b) Avant le verbe',
      'c) À la fin de la phrase',
      'd) Après l\'article'
    ],
    correctAnswer: 'c) À la fin de la phrase',
    explanation: 'Dans les phrases négatives simples, "nicht" se place généralement en fin de phrase.'
  },
  {
    id: 'struct-complet-2',
    type: 'complet',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Complétez : Er ___ (haben) das Buch gestern ___ (lesen).',
    correctAnswer: 'hat gelesen',
    explanation: 'Au parfait avec "haben" : auxiliaire conjugué (hat) + participe passé (gelesen).'
  },
  // Nouveaux QCM (17 supplémentaires pour atteindre 20)
  {
    id: 'struct-qcm-4',
    type: 'qcm',
    category: 'Position du verbe',
    level: 'intermédiaire',
    question: 'Dans les questions avec mot interrogatif, où se place le verbe ?',
    options: [
      'a) Position 1',
      'b) Position 2',
      'c) Position finale',
      'd) Position 3'
    ],
    correctAnswer: 'b) Position 2',
    explanation: 'Dans les questions avec mot interrogatif, le verbe conjugué est en position 2.'
  },
  {
    id: 'struct-qcm-5',
    type: 'qcm',
    category: 'Ordre des compléments',
    level: 'avancé',
    question: 'Quel est l\'ordre correct : temps - lieu - manière ?',
    options: [
      'a) Lieu - Temps - Manière',
      'b) Manière - Lieu - Temps',
      'c) Temps - Lieu - Manière',
      'd) Temps - Manière - Lieu'
    ],
    correctAnswer: 'c) Temps - Lieu - Manière',
    explanation: 'Ordre des compléments : temporal - local - modal.'
  },
  {
    id: 'struct-qcm-6',
    type: 'qcm',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Dans "Ich esse das Brot nicht", où se trouve "nicht" ?',
    options: [
      'a) Avant le verbe',
      'b) Après le sujet',
      'c) Avant l\'objet',
      'd) En fin de phrase'
    ],
    correctAnswer: 'd) En fin de phrase',
    explanation: '"Nicht" nie l\'objet et se place en fin de phrase.'
  },
  {
    id: 'struct-qcm-7',
    type: 'qcm',
    category: 'Pronoms personnels',
    level: 'avancé',
    question: 'Quel pronom remplace "der Mann" dans "Ich sehe den Mann" ?',
    options: [
      'a) ihn',
      'b) ihm',
      'c) er',
      'd) ihn'
    ],
    correctAnswer: 'a) ihn',
    explanation: '"Der Mann" est COD, remplacé par "ihn" (accusatif masculin).'
  },
  {
    id: 'struct-qcm-8',
    type: 'qcm',
    category: 'Position du verbe',
    level: 'intermédiaire',
    question: 'Dans les subordonnées, où se place le verbe conjugué ?',
    options: [
      'a) Position 1',
      'b) Position 2',
      'c) Position finale',
      'd) Après le sujet'
    ],
    correctAnswer: 'c) Position finale',
    explanation: 'Dans les subordonnées, le verbe conjugué est en position finale.'
  },
  {
    id: 'struct-qcm-9',
    type: 'qcm',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Dans "Ich habe das Buch gelesen", quelle est la position du participe passé ?',
    options: [
      'a) Avant l\'auxiliaire',
      'b) Après l\'auxiliaire',
      'c) Au milieu',
      'd) En position 2'
    ],
    correctAnswer: 'b) Après l\'auxiliaire',
    explanation: 'Le participe passé suit toujours l\'auxiliaire conjugué.'
  },
  {
    id: 'struct-qcm-10',
    type: 'qcm',
    category: 'Ordre des compléments',
    level: 'intermédiaire',
    question: 'Quel complément vient en premier dans "Ich fahre morgen nach Berlin mit dem Zug" ?',
    options: [
      'a) morgen (temps)',
      'b) nach Berlin (lieu)',
      'c) mit dem Zug (manière)',
      'd) Ich (sujet)'
    ],
    correctAnswer: 'a) morgen (temps)',
    explanation: 'L\'ordre est : sujet + temps + lieu + manière.'
  },
  {
    id: 'struct-qcm-11',
    type: 'qcm',
    category: 'Pronoms personnels',
    level: 'avancé',
    question: 'Dans "Er gibt mir das Buch", quels sont les pronoms personnels ?',
    options: [
      'a) Er (nominatif), mir (datif)',
      'b) Er (nominatif), mir (accusatif)',
      'c) Er (accusatif), mir (datif)',
      'd) Er (datif), mir (nominatif)'
    ],
    correctAnswer: 'a) Er (nominatif), mir (datif)',
    explanation: '"Er" est sujet (nominatif), "mir" est COI (datif).'
  },
  {
    id: 'struct-qcm-12',
    type: 'qcm',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Comment nier "alle Studenten" ?',
    options: [
      'a) nicht alle Studenten',
      'b) alle Studenten nicht',
      'c) kein alle Studenten',
      'd) alle nicht Studenten'
    ],
    correctAnswer: 'a) nicht alle Studenten',
    explanation: '"Nicht" précède "alle" dans les expressions de quantité.'
  },
  {
    id: 'struct-qcm-13',
    type: 'qcm',
    category: 'Position du verbe',
    level: 'avancé',
    question: 'Dans "..., weil ich müde bin", où est le verbe ?',
    options: [
      'a) Position 1',
      'b) Position 2',
      'c) Avant "weil"',
      'd) En fin de subordonnée'
    ],
    correctAnswer: 'd) En fin de subordonnée',
    explanation: 'Le verbe conjugué est toujours en fin de subordonnée.'
  },
  {
    id: 'struct-qcm-14',
    type: 'qcm',
    category: 'Temps composés',
    level: 'intermédiaire',
    question: 'Quel auxiliaire utilise-t-on pour former le passé composé avec "gehen" ?',
    options: [
      'a) Haben',
      'b) Sein',
      'c) Werden',
      'd) Können'
    ],
    correctAnswer: 'b) Sein',
    explanation: '"Gehen" est un verbe de mouvement, il utilise "sein".'
  },
  {
    id: 'struct-qcm-15',
    type: 'qcm',
    category: 'Ordre des compléments',
    level: 'avancé',
    question: 'Dans "Ich arbeite heute im Büro mit dem Computer", quel est l\'ordre correct ?',
    options: [
      'a) Temps - Lieu - Manière',
      'b) Lieu - Temps - Manière',
      'c) Manière - Temps - Lieu',
      'd) Temps - Manière - Lieu'
    ],
    correctAnswer: 'a) Temps - Lieu - Manière',
    explanation: 'Ordre temporel - local - modal.'
  },
  {
    id: 'struct-qcm-16',
    type: 'qcm',
    category: 'Pronoms personnels',
    level: 'intermédiaire',
    question: 'Comment dit-on "Il me le donne" en allemand ?',
    options: [
      'a) Er gibt mir es',
      'b) Er gibt es mir',
      'c) Er gibt mir ihn',
      'd) Er gibt ihm es'
    ],
    correctAnswer: 'b) Er gibt es mir',
    explanation: 'Ordre : sujet + COD + COI.'
  },
  {
    id: 'struct-qcm-17',
    type: 'qcm',
    category: 'Position du verbe',
    level: 'avancé',
    question: 'Dans "Wenn es regnet, bleibe ich zu Hause", où sont les verbes ?',
    options: [
      'a) Les deux en position 1',
      'b) Les deux en position 2',
      'c) Premier en fin, deuxième en position 2',
      'd) Premier en position 2, deuxième en fin'
    ],
    correctAnswer: 'c) Premier en fin, deuxième en position 2',
    explanation: 'Subordonnée : verbe en fin. Principale : verbe en position 2.'
  },
  {
    id: 'struct-qcm-18',
    type: 'qcm',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Dans "Ich habe kein Geld", quel mot indique la négation ?',
    options: [
      'a) Ich',
      'b) habe',
      'c) kein',
      'd) Geld'
    ],
    correctAnswer: 'c) kein',
    explanation: '"Kein" est la négation de l\'article indéfini.'
  },
  {
    id: 'struct-qcm-19',
    type: 'qcm',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Comment forme-t-on le futur avec "werden" ?',
    options: [
      'a) Werden + infinitif',
      'b) Infinitif + werden',
      'c) Werden + participe passé',
      'd) Participe passé + werden'
    ],
    correctAnswer: 'a) Werden + infinitif',
    explanation: 'Le futur utilise "werden" conjugué + infinitif.'
  },
  {
    id: 'struct-qcm-20',
    type: 'qcm',
    category: 'Ordre des compléments',
    level: 'intermédiaire',
    question: 'Quel complément peut être omis dans l\'ordre temporel-lieu-manière ?',
    options: [
      'a) Le complément temporel',
      'b) Le complément de lieu',
      'c) Le complément de manière',
      'd) Aucun ne peut être omis'
    ],
    correctAnswer: 'd) Aucun ne peut être omis',
    explanation: 'L\'ordre temporel-lieu-manière est fixe quand tous sont présents.'
  },
  // Nouveaux exercices de mots à compléter (17 supplémentaires pour atteindre 20)
  {
    id: 'struct-complet-4',
    type: 'complet',
    category: 'Position du verbe',
    level: 'intermédiaire',
    question: 'Complétez : ___ (Wo) wohnst du?',
    correctAnswer: 'Wo',
    explanation: '"Wo" est un mot interrogatif qui se place en position 1.'
  },
  {
    id: 'struct-complet-5',
    type: 'complet',
    category: 'Ordre des compléments',
    level: 'avancé',
    question: 'Complétez : Ich gehe ___ (jeden Tag) ___ (ins Kino) ___ (mit Freunden).',
    correctAnswer: 'jeden Tag ins Kino mit Freunden',
    explanation: 'Ordre temporel - lieu - manière.'
  },
  {
    id: 'struct-complet-6',
    type: 'complet',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (nicht) wahr.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" se place en fin de phrase dans les négations simples.'
  },
  {
    id: 'struct-complet-7',
    type: 'complet',
    category: 'Pronoms personnels',
    level: 'avancé',
    question: 'Complétez : Sie gibt ___ (mir) ___ (das Buch).',
    correctAnswer: 'mir das Buch',
    explanation: 'Ordre COI - COD : mir (datif) - das Buch (accusatif).'
  },
  {
    id: 'struct-complet-8',
    type: 'complet',
    category: 'Position du verbe',
    level: 'intermédiaire',
    question: 'Complétez : Ich weiß, dass du ___ (kommen) kannst.',
    correctAnswer: 'kommen',
    explanation: 'Dans les subordonnées, le verbe conjugué est en position finale.'
  },
  {
    id: 'struct-complet-9',
    type: 'complet',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Complétez : Wir ___ (sein) gestern im Park ___ (spazieren).',
    correctAnswer: 'sind spazieren gegangen',
    explanation: 'Avec "sein" : auxiliaire conjugué + infinitif + participe passé.'
  },
  {
    id: 'struct-complet-10',
    type: 'complet',
    category: 'Ordre des compléments',
    level: 'intermédiaire',
    question: 'Complétez : Er arbeitet ___ (morgens) ___ (zu Hause) ___ (am Computer).',
    correctAnswer: 'morgens zu Hause am Computer',
    explanation: 'Ordre temps - lieu - manière.'
  },
  {
    id: 'struct-complet-11',
    type: 'complet',
    category: 'Pronoms personnels',
    level: 'avancé',
    question: 'Complétez : Der Lehrer erklärt ___ (uns) ___ (die Grammatik).',
    correctAnswer: 'uns die Grammatik',
    explanation: 'Ordre COI - COD : uns (datif) - die Grammatik (accusatif).'
  },
  {
    id: 'struct-complet-12',
    type: 'complet',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Complétez : Ich habe ___ (kein) Geld.',
    correctAnswer: 'kein',
    explanation: '"Kein" nie les noms indéfinis sans article.'
  },
  {
    id: 'struct-complet-13',
    type: 'complet',
    category: 'Position du verbe',
    level: 'avancé',
    question: 'Complétez : Wenn du Zeit hast, ___ (rufen) mich an.',
    correctAnswer: 'rufe',
    explanation: 'Dans la principale, le verbe conjugué est en position 2.'
  },
  {
    id: 'struct-complet-14',
    type: 'complet',
    category: 'Temps composés',
    level: 'intermédiaire',
    question: 'Complétez : Sie ___ (haben) das Haus ___ (verkaufen).',
    correctAnswer: 'hat verkauft',
    explanation: 'Avec "haben" : auxiliaire conjugué + participe passé.'
  },
  {
    id: 'struct-complet-15',
    type: 'complet',
    category: 'Ordre des compléments',
    level: 'avancé',
    question: 'Complétez : Wir fahren ___ (nächste Woche) ___ (nach Paris) ___ (mit dem Zug).',
    correctAnswer: 'nächste Woche nach Paris mit dem Zug',
    explanation: 'Ordre temporel - local - modal.'
  },
  {
    id: 'struct-complet-16',
    type: 'complet',
    category: 'Pronoms personnels',
    level: 'intermédiaire',
    question: 'Complétez : Ich gebe ___ (dir) ___ (mein Buch).',
    correctAnswer: 'dir mein Buch',
    explanation: 'Ordre COI - COD : dir (datif) - mein Buch (accusatif).'
  },
  {
    id: 'struct-complet-17',
    type: 'complet',
    category: 'Position du verbe',
    level: 'avancé',
    question: 'Complétez : Das ist das Haus, ___ (wo) ich wohne.',
    correctAnswer: 'wo',
    explanation: '"Wo" est un mot interrogatif relatif qui se place après l\'antécédent.'
  },
  {
    id: 'struct-complet-18',
    type: 'complet',
    category: 'Négation',
    level: 'intermédiaire',
    question: 'Complétez : Er kommt ___ (nicht) heute.',
    correctAnswer: 'nicht',
    explanation: '"Nicht" nie l\'adverbe "heute" et se place après.'
  },
  {
    id: 'struct-complet-19',
    type: 'complet',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Complétez : Du wirst ___ (kommen) morgen.',
    correctAnswer: 'kommen',
    explanation: 'Au futur : "werden" conjugué + infinitif.'
  },
  {
    id: 'struct-complet-20',
    type: 'complet',
    category: 'Ordre des compléments',
    level: 'intermédiaire',
    question: 'Complétez : Sie lernt ___ (abends) ___ (in der Bibliothek) ___ (Deutsch).',
    correctAnswer: 'abends in der Bibliothek Deutsch',
    explanation: 'Ordre temps - lieu - objet.'
  }
];

const StructureExercicesPage = () => {
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

  const filteredExercises = filterExercises(structureExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = structureExercises.find(ex => ex.id === exerciseId);
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
    structureExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-structure" className="hover:text-gray-900 transition-colors">
              Structure
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-structure">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour à la structure
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices de Structure de Phrase
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur la structure des phrases allemandes
            </p>
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
          <Card className="mb-8 border-2 border-carnet-red/30 bg-gradient-to-r from-blue-50 to-indigo-50">
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
                  <option value="Position du verbe">Position du verbe</option>
                  <option value="Ordre des compléments">Ordre des compléments</option>
                  <option value="Négation">Négation</option>
                  <option value="Pronoms personnels">Pronoms personnels</option>
                  <option value="Temps composés">Temps composés</option>
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
                            Bonne réponse : <strong>{structureExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                examMode ? 'text-carnet-red' : 'text-orange-700'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien la structure des phrases allemandes.'}
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

export default StructureExercicesPage;
