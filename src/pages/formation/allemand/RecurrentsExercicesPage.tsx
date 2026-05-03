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

// Données d'exercices pour les points récurrents
const recurrentsExercises = [
  // QCM sur les verbes de modalité - POINTS TRÈS RÉCURRENTS
  {
    id: 'recur-qcm-1',
    type: 'qcm',
    category: 'Verbes de modalité',
    level: 'intermédiaire',
    question: 'Quel verbe modal exprime la capacité ?',
    options: [
      'a) müssen (devoir)',
      'b) können (pouvoir)',
      'c) sollen (devoir moral)',
      'd) wollen (vouloir)'
    ],
    correctAnswer: 'b) können (pouvoir)',
    explanation: '"Können" exprime la capacité ou la possibilité.'
  },
  {
    id: 'recur-qcm-2',
    type: 'qcm',
    category: 'Verbes de modalité',
    level: 'intermédiaire',
    question: 'Quel verbe modal exprime l\'obligation ?',
    options: [
      'a) dürfen (avoir le droit)',
      'b) mögen (aimer)',
      'c) müssen (devoir)',
      'd) wollen (vouloir)'
    ],
    correctAnswer: 'c) müssen (devoir)',
    explanation: '"Müssen" exprime une obligation forte ou une nécessité.'
  },
  {
    id: 'recur-qcm-3',
    type: 'qcm',
    category: 'Verbes de modalité',
    level: 'avancé',
    question: 'Comment forme-t-on le prétérit de "dürfen" ?',
    options: [
      'a) durfte',
      'b) dürfte',
      'c) gedurft',
      'd) darf'
    ],
    correctAnswer: 'a) durfte',
    explanation: 'Prétérit de "dürfen" : ich/er/es durfte, du durftest, etc.'
  },
  {
    id: 'recur-qcm-4',
    type: 'qcm',
    category: 'Subjonctif II',
    level: 'intermédiaire',
    question: 'Quel est le subjonctif II de "haben" ?',
    options: [
      'a) hätte',
      'b) habe',
      'c) gehabt',
      'd) hab'
    ],
    correctAnswer: 'a) hätte',
    explanation: 'Subjonctif II de "haben" : ich hätte, du hättest, er/es hätte.'
  },

  // QCM sur les prépositions - TRÈS RÉCURRENTS
  {
    id: 'recur-qcm-5',
    type: 'qcm',
    category: 'Prépositions à cas',
    level: 'intermédiaire',
    question: 'Quelle préposition demande toujours l\'accusatif ?',
    options: [
      'a) in (dans)',
      'b) auf (sur)',
      'c) durch (à travers)',
      'd) mit (avec)'
    ],
    correctAnswer: 'c) durch (à travers)',
    explanation: '"Durch" est toujours suivi de l\'accusatif.'
  },
  {
    id: 'recur-qcm-6',
    type: 'qcm',
    category: 'Prépositions à cas',
    level: 'avancé',
    question: 'Quelle préposition change de sens selon le cas ?',
    options: [
      'a) seit (depuis)',
      'b) für (pour)',
      'c) in (dans)',
      'd) mit (avec)'
    ],
    correctAnswer: 'c) in (dans)',
    explanation: '"In" + datif = dans (lieu), "in" + accusatif = dans (direction).'
  },
  {
    id: 'recur-qcm-7',
    type: 'qcm',
    category: 'Prépositions à cas',
    level: 'intermédiaire',
    question: 'Quelle préposition signifie "depuis" et demande l\'accusatif ?',
    options: [
      'a) von (de)',
      'b) seit (depuis)',
      'c) aus (de provenance)',
      'd) bei (chez)'
    ],
    correctAnswer: 'b) seit (depuis)',
    explanation: '"Seit" exprime le temps écoulé et est toujours suivi de l\'accusatif.'
  },

  // QCM sur l'ordre des mots - TRÈS IMPORTANT
  {
    id: 'recur-qcm-8',
    type: 'qcm',
    category: 'Ordre des mots',
    level: 'intermédiaire',
    question: 'Où se place le verbe conjugué dans une proposition principale ?',
    options: [
      'a) Position 1',
      'b) Position 2',
      'c) Position finale',
      'd) Position 3'
    ],
    correctAnswer: 'b) Position 2',
    explanation: 'Dans les propositions principales, le verbe conjugué est en position 2.'
  },
  {
    id: 'recur-qcm-9',
    type: 'qcm',
    category: 'Ordre des mots',
    level: 'avancé',
    question: 'Dans les subordonnées, où vont le sujet et le verbe ?',
    options: [
      'a) Sujet en 1, verbe en 2',
      'b) Sujet en 1, verbe à la fin',
      'c) Verbe en 1, sujet en 2',
      'd) Verbe en 2, sujet à la fin'
    ],
    correctAnswer: 'b) Sujet en 1, verbe à la fin',
    explanation: 'Dans les subordonnées : conjonction + sujet + ... + verbe à la fin.'
  },

  // QCM sur les auxiliaires - ESSENTIELS
  {
    id: 'recur-qcm-10',
    type: 'qcm',
    category: 'Auxiliaires sein/haben',
    level: 'intermédiaire',
    question: 'Quel auxiliaire utilise-t-on avec "gehen" au Perfekt ?',
    options: [
      'a) haben',
      'b) sein',
      'c) werden',
      'd) bleiben'
    ],
    correctAnswer: 'b) sein',
    explanation: 'Les verbes de mouvement utilisent "sein" au Perfekt.'
  },
  {
    id: 'recur-qcm-11',
    type: 'qcm',
    category: 'Auxiliaires sein/haben',
    level: 'avancé',
    question: 'Quel auxiliaire utilise-t-on avec "essen" au Perfekt ?',
    options: [
      'a) haben',
      'b) sein',
      'c) werden',
      'd) bleiben'
    ],
    correctAnswer: 'a) haben',
    explanation: '"Essen" est un verbe transitif, donc "haben" au Perfekt.'
  },

  // QCM sur les déclinaisons - TRÈS RÉCURRENTS
  {
    id: 'recur-qcm-12',
    type: 'qcm',
    category: 'Déclinaisons',
    level: 'intermédiaire',
    question: 'Quel est l\'article défini masculin nominatif ?',
    options: [
      'a) der',
      'b) die',
      'c) das',
      'd) den'
    ],
    correctAnswer: 'a) der',
    explanation: 'Article défini masculin nominatif : der.'
  },
  {
    id: 'recur-qcm-13',
    type: 'qcm',
    category: 'Déclinaisons',
    level: 'avancé',
    question: 'Comment décline-t-on "ein guter Freund" à l\'accusatif ?',
    options: [
      'a) einen guten Freund',
      'b) einem guten Freund',
      'c) eines guten Freundes',
      'd) einen guten Freunde'
    ],
    correctAnswer: 'a) einen guten Freund',
    explanation: 'Masculin accusatif : einen (article) + guten (adjectif).'
  },

  // QCM sur le passif - RÉCURRENT
  {
    id: 'recur-qcm-14',
    type: 'qcm',
    category: 'Passif',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le passif d\'action ?',
    options: [
      'a) sein + Participe II',
      'b) haben + Participe II',
      'c) werden + Participe II',
      'd) bleiben + Participe II'
    ],
    correctAnswer: 'c) werden + Participe II',
    explanation: 'Passif d\'action : werden + participe passé.'
  },
  {
    id: 'recur-qcm-15',
    type: 'qcm',
    category: 'Passif',
    level: 'avancé',
    question: 'Comment forme-t-on le passif d\'état ?',
    options: [
      'a) werden + Participe II',
      'b) sein + Participe II',
      'c) haben + Participe II',
      'd) bleiben + Participe II'
    ],
    correctAnswer: 'b) sein + Participe II',
    explanation: 'Passif d\'état : sein + participe passé.'
  },

  // QCM sur les verbes à particule - FRÉQUENTS
  {
    id: 'recur-qcm-16',
    type: 'qcm',
    category: 'Verbes à particule',
    level: 'intermédiaire',
    question: 'Quel verbe à particule signifie "commencer" ?',
    options: [
      'a) anfangen',
      'b) aufhören',
      'c) einsteigen',
      'd) aussteigen'
    ],
    correctAnswer: 'a) anfangen',
    explanation: '"Anfangen" = commencer, particule inséparable "an-".'
  },
  {
    id: 'recur-qcm-17',
    type: 'qcm',
    category: 'Verbes à particule',
    level: 'avancé',
    question: 'Où se place la particule séparable dans les propositions principales ?',
    options: [
      'a) Au début',
      'b) Au milieu',
      'c) À la fin',
      'd) Avec le sujet'
    ],
    correctAnswer: 'c) À la fin',
    explanation: 'Dans les principales : sujet + verbe conjugué + ... + particule.'
  },

  // QCM sur les temps composés - ESSENTIELS
  {
    id: 'recur-qcm-18',
    type: 'qcm',
    category: 'Temps composés',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le Plus-que-parfait ?',
    options: [
      'a) hatte + Participe II',
      'b) ist + Participe II',
      'c) wird + Infinitif',
      'd) war + Participe II'
    ],
    correctAnswer: 'a) hatte + Participe II',
    explanation: 'Plus-que-parfait : hatte (ou war) + participe passé.'
  },
  {
    id: 'recur-qcm-19',
    type: 'qcm',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Comment forme-t-on le Futur II ?',
    options: [
      'a) werde + haben + Participe II',
      'b) wird + sein + Participe II',
      'c) würde + haben + Participe II',
      'd) wird + haben + Participe II'
    ],
    correctAnswer: 'a) werde + haben + Participe II',
    explanation: 'Futur II : werde + auxiliaire + participe passé.'
  },

  // QCM sur les comparatifs/superlatifs - RÉCURRENTS
  {
    id: 'recur-qcm-20',
    type: 'qcm',
    category: 'Comparatifs',
    level: 'intermédiaire',
    question: 'Quel est le comparatif de "groß" ?',
    options: [
      'a) größer',
      'b) großer',
      'c) großest',
      'd) großsten'
    ],
    correctAnswer: 'a) größer',
    explanation: 'Comparatif régulier : -er ajouté à l\'adjectif.'
  },

  // Exercices de mots à compléter - VERBES MODAUX
  {
    id: 'recur-complet-1',
    type: 'complet',
    category: 'Subjonctif II',
    level: 'avancé',
    question: 'Complétez : Wenn ich Zeit ___ (haben), ___ (kommen) ich.',
    correctAnswer: 'hätte käme',
    explanation: 'Subjonctif II : hätte (haben) et käme (kommen).'
  },
  {
    id: 'recur-complet-2',
    type: 'complet',
    category: 'Verbes de modalité',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (können) Deutsch sprechen.',
    correctAnswer: 'kann',
    explanation: 'Présent de "können" : ich kann.'
  },
  {
    id: 'recur-complet-3',
    type: 'complet',
    category: 'Verbes de modalité',
    level: 'avancé',
    question: 'Complétez : Du ___ (dürfen) hier nicht rauchen.',
    correctAnswer: 'darfst',
    explanation: 'Présent de "dürfen" : du darfst.'
  },
  {
    id: 'recur-complet-4',
    type: 'complet',
    category: 'Verbes de modalité',
    level: 'intermédiaire',
    question: 'Complétez : Wir ___ (müssen) lernen.',
    correctAnswer: 'müssen',
    explanation: 'Présent de "müssen" : wir müssen.'
  },

  // Exercices de mots à compléter - PRÉPOSITIONS
  {
    id: 'recur-complet-5',
    type: 'complet',
    category: 'Prépositions à cas',
    level: 'intermédiaire',
    question: 'Complétez : Ich gehe ___ (dans) die Stadt.',
    correctAnswer: 'in',
    explanation: 'Direction vers un lieu fermé : "in" + accusatif.'
  },
  {
    id: 'recur-complet-6',
    type: 'complet',
    category: 'Prépositions à cas',
    level: 'avancé',
    question: 'Complétez : Das Buch liegt ___ (sur) dem Tisch.',
    correctAnswer: 'auf',
    explanation: 'Position sur une surface : "auf" + datif.'
  },
  {
    id: 'recur-complet-7',
    type: 'complet',
    category: 'Prépositions à cas',
    level: 'intermédiaire',
    question: 'Complétez : Ich warte ___ (depuis) zwei Stunden.',
    correctAnswer: 'seit',
    explanation: '"Seit" exprime la durée et demande l\'accusatif.'
  },
  {
    id: 'recur-complet-8',
    type: 'complet',
    category: 'Prépositions à cas',
    level: 'avancé',
    question: 'Complétez : Er kommt ___ (de) Berlin.',
    correctAnswer: 'aus',
    explanation: 'Origine d\'un lieu : "aus" + datif.'
  },

  // Exercices de mots à compléter - ORDRE DES MOTS
  {
    id: 'recur-complet-9',
    type: 'complet',
    category: 'Ordre des mots',
    level: 'intermédiaire',
    question: 'Complétez : ___ (demain) gehe ich ins Kino.',
    correctAnswer: 'Morgen',
    explanation: 'Proposition principale : complément de temps + verbe en position 2.'
  },
  {
    id: 'recur-complet-10',
    type: 'complet',
    category: 'Ordre des mots',
    level: 'avancé',
    question: 'Complétez : ..., ___ (weil) ich müde bin.',
    correctAnswer: 'weil',
    explanation: 'Subordonnée : conjonction weil + sujet + ... + verbe à la fin.'
  },

  // Exercices de mots à compléter - AUXILIAIRES
  {
    id: 'recur-complet-11',
    type: 'complet',
    category: 'Auxiliaires sein/haben',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (sein) gestern im Kino.',
    correctAnswer: 'war',
    explanation: 'Prétérit de "sein" : ich war.'
  },
  {
    id: 'recur-complet-12',
    type: 'complet',
    category: 'Auxiliaires sein/haben',
    level: 'avancé',
    question: 'Complétez : Wir ___ (haben) das Buch gelesen.',
    correctAnswer: 'haben',
    explanation: 'Perfekt avec "haben" : wir haben gelesen.'
  },

  // Exercices de mots à compléter - DÉCLINAISONS
  {
    id: 'recur-complet-13',
    type: 'complet',
    category: 'Déclinaisons',
    level: 'intermédiaire',
    question: 'Complétez : Ich sehe ___ (le) Hund.',
    correctAnswer: 'den',
    explanation: 'Masculin accusatif : den.'
  },
  {
    id: 'recur-complet-14',
    type: 'complet',
    category: 'Déclinaisons',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (une) schöne Frau.',
    correctAnswer: 'eine',
    explanation: 'Féminin nominatif : eine.'
  },

  // Exercices de mots à compléter - PASSIF
  {
    id: 'recur-complet-15',
    type: 'complet',
    category: 'Passif',
    level: 'intermédiaire',
    question: 'Complétez : Das Haus ___ (bauen) von einem Architekten.',
    correctAnswer: 'wird gebaut',
    explanation: 'Passif présent : wird + participe passé.'
  },
  {
    id: 'recur-complet-16',
    type: 'complet',
    category: 'Passif',
    level: 'avancé',
    question: 'Complétez : Die Tür ___ (schließen) seit einer Stunde.',
    correctAnswer: 'ist geschlossen',
    explanation: 'Passif d\'état : ist + participe passé.'
  },

  // Exercices de mots à compléter - VERBES À PARTICULE
  {
    id: 'recur-complet-17',
    type: 'complet',
    category: 'Verbes à particule',
    level: 'intermédiaire',
    question: 'Complétez : Ich stehe jeden Morgen um 7 Uhr ___ (auf).',
    correctAnswer: 'auf',
    explanation: 'Verbe à particule séparable : aufstehen.'
  },
  {
    id: 'recur-complet-18',
    type: 'complet',
    category: 'Verbes à particule',
    level: 'avancé',
    question: 'Complétez : Wir müssen das Problem ___ (be)sprechen.',
    correctAnswer: 'besprechen',
    explanation: 'Verbe à particule inséparable : besprechen.'
  },

  // Exercices de mots à compléter - TEMPS COMPOSÉS
  {
    id: 'recur-complet-19',
    type: 'complet',
    category: 'Temps composés',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (haben) gestern gearbeitet.',
    correctAnswer: 'habe',
    explanation: 'Perfekt : habe + participe passé.'
  },
  {
    id: 'recur-complet-20',
    type: 'complet',
    category: 'Temps composés',
    level: 'avancé',
    question: 'Complétez : Bevor ich kam, ___ (haben) er schon gegessen.',
    correctAnswer: 'hatte',
    explanation: 'Plus-que-parfait : hatte + participe passé.'
  },

  // Exercices de mots à compléter - COMPARATIFS
  {
    id: 'recur-complet-21',
    type: 'complet',
    category: 'Comparatifs',
    level: 'intermédiaire',
    question: 'Complétez : Berlin ist ___ (plus grand que) München.',
    correctAnswer: 'größer als',
    explanation: 'Comparatif : größer als.'
  },
  {
    id: 'recur-complet-22',
    type: 'complet',
    category: 'Comparatifs',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (le plus beau) Film, den ich gesehen habe.',
    correctAnswer: 'der schönste',
    explanation: 'Superlatif : der schönste.'
  }
];

const RecurrentsExercicesPage = () => {
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

  const filteredExercises = filterExercises(recurrentsExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = recurrentsExercises.find(ex => ex.id === exerciseId);
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
    recurrentsExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-recurrents" className="hover:text-gray-900 transition-colors">
              Points Récurrents
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-recurrents">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour aux points récurrents
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices des Points Récurrents
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les règles de grammaire allemandes les plus fréquemment testées aux examens
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{recurrentsExercises.length} exercices</Badge>
            <Badge className="bg-orange-600 px-3 py-1">Préparation Examens</Badge>
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
                  <option value="Verbes de modalité">Verbes de modalité</option>
                  <option value="Subjonctif II">Subjonctif II</option>
                  <option value="Prépositions à cas">Prépositions à cas</option>
                  <option value="Ordre des mots">Ordre des mots</option>
                  <option value="Auxiliaires sein/haben">Auxiliaires sein/haben</option>
                  <option value="Déclinaisons">Déclinaisons</option>
                  <option value="Passif">Passif</option>
                  <option value="Verbes à particule">Verbes à particule</option>
                  <option value="Temps composés">Temps composés</option>
                  <option value="Comparatifs">Comparatifs</option>
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
                            Bonne réponse : <strong>{recurrentsExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                    {examMode ? 'Excellente performance ! Vous maîtrisez parfaitement les points récurrents.' : 'Excellent ! Vous êtes prêt pour les épreuves d\'allemand.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Continuez à pratiquer pour perfectionner votre maîtrise.' : 'Bon niveau ! Quelques révisions supplémentaires vous rendront incollable.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                    {examMode ? 'Continuez à travailler ces points récurrents. La persévérance paiera !' : 'Ne vous découragez pas ! Révisez régulièrement ces règles essentielles.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm">
                    💡 Les points récurrents sont cruciaux pour réussir les épreuves d'allemand. Continuez à les pratiquer !
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

export default RecurrentsExercicesPage;
