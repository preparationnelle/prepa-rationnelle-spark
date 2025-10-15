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

// Données d'exercices pour le passif
const passifExercises = [
  // QCM sur le Vorgangspassiv (passif d'action)
  {
    id: 'passif-qcm-1',
    type: 'qcm',
    category: 'Formation du Vorgangspassiv',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le passif d\'action en allemand ?',
    options: [
      'a) sein + Participe II',
      'b) haben + Participe II',
      'c) werden + Participe II',
      'd) sein + Infinitif'
    ],
    correctAnswer: 'c) werden + Participe II',
    explanation: 'Le passif d\'action se forme avec "werden" + participe passé.'
  },
  {
    id: 'passif-qcm-2',
    type: 'qcm',
    category: 'Formation du Vorgangspassiv',
    level: 'avancé',
    question: 'Quel est le participe passé de "schreiben" au passif ?',
    options: [
      'a) schreibt',
      'b) schrieb',
      'c) geschrieben',
      'd) schreibend'
    ],
    correctAnswer: 'c) geschrieben',
    explanation: 'Le participe passé reste le même : "geschrieben".'
  },
  {
    id: 'passif-qcm-3',
    type: 'qcm',
    category: 'Agent du passif',
    level: 'intermédiaire',
    question: 'Quelle préposition utilise-t-on pour l\'agent humain ?',
    options: [
      'a) durch',
      'b) von',
      'c) mit',
      'd) für'
    ],
    correctAnswer: 'b) von',
    explanation: '"Von" + datif pour les agents humains.'
  },
  {
    id: 'passif-qcm-4',
    type: 'qcm',
    category: 'Agent du passif',
    level: 'avancé',
    question: 'Quelle préposition utilise-t-on pour l\'agent non-humain ?',
    options: [
      'a) von',
      'b) durch',
      'c) mit',
      'd) bei'
    ],
    correctAnswer: 'b) durch',
    explanation: '"Durch" + accusatif pour les agents non-humains.'
  },
  {
    id: 'passif-qcm-5',
    type: 'qcm',
    category: 'Zustandspassiv',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le passif d\'état ?',
    options: [
      'a) werden + Participe II',
      'b) sein + Participe II',
      'c) haben + Participe II',
      'd) bleiben + Participe II'
    ],
    correctAnswer: 'b) sein + Participe II',
    explanation: 'Le passif d\'état utilise "sein" + participe passé.'
  },
  {
    id: 'passif-qcm-6',
    type: 'qcm',
    category: 'Passif avec modaux',
    level: 'avancé',
    question: 'Comment dit-on "Cela doit être fait" au passif ?',
    options: [
      'a) Das muss getan werden',
      'b) Das wird getan müssen',
      'c) Das getan muss werden',
      'd) Das muss werden getan'
    ],
    correctAnswer: 'a) Das muss getan werden',
    explanation: 'Modal + infinitif + werden : "muss getan werden".'
  },
  {
    id: 'passif-qcm-7',
    type: 'qcm',
    category: 'Passif impersonnel',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le passif impersonnel ?',
    options: [
      'a) Es + wird + Participe II',
      'b) Es + ist + Participe II',
      'c) Es + wird + Infinitif',
      'd) Es + hat + Participe II'
    ],
    correctAnswer: 'a) Es + wird + Participe II',
    explanation: 'Le passif impersonnel utilise "es wird" + participe passé.'
  },
  {
    id: 'passif-qcm-8',
    type: 'qcm',
    category: 'Temps du passif',
    level: 'avancé',
    question: 'Comment forme-t-on le passé du passif ?',
    options: [
      'a) wurde + Participe II',
      'b) ist + Participe II',
      'c) hat + Participe II',
      'd) wird + Participe II'
    ],
    correctAnswer: 'a) wurde + Participe II',
    explanation: 'Prétérit : "wurde" + participe passé.'
  },
  {
    id: 'passif-qcm-9',
    type: 'qcm',
    category: 'Passif au Perfekt',
    level: 'intermédiaire',
    question: 'Quel auxiliaire utilise-t-on au Perfekt du passif ?',
    options: [
      'a) haben',
      'b) sein',
      'c) werden',
      'd) bleiben'
    ],
    correctAnswer: 'b) sein',
    explanation: 'Le passif utilise "sein" au Perfekt.'
  },
  {
    id: 'passif-qcm-10',
    type: 'qcm',
    category: 'Zustandspassiv',
    level: 'avancé',
    question: 'Quelle différence entre "Das Fenster wird geöffnet" et "Das Fenster ist geöffnet" ?',
    options: [
      'a) Aucune différence',
      'b) Premier = action, deuxième = état',
      'c) Premier = état, deuxième = action',
      'd) Les deux expriment l\'action'
    ],
    correctAnswer: 'b) Premier = action, deuxième = état',
    explanation: 'Vorgangspassiv = action en cours, Zustandspassiv = état résultant.'
  },
  {
    id: 'passif-qcm-11',
    type: 'qcm',
    category: 'Passif avec prépositions',
    level: 'intermédiaire',
    question: 'Dans "Das Auto wird von Peter repariert", quelle est la fonction de "von" ?',
    options: [
      'a) Cause',
      'b) Agent',
      'c) Instrument',
      'd) Lieu'
    ],
    correctAnswer: 'b) Agent',
    explanation: '"Von" introduit l\'agent de l\'action.'
  },
  {
    id: 'passif-qcm-12',
    type: 'qcm',
    category: 'Passif au Futur',
    level: 'avancé',
    question: 'Comment dit-on "Ce sera fait demain" ?',
    options: [
      'a) Das wird morgen getan',
      'b) Das wird getan morgen',
      'c) Das getan wird morgen',
      'd) Das morgen wird getan'
    ],
    correctAnswer: 'a) Das wird morgen getan',
    explanation: 'Futur : "wird" + participe passé + complément.'
  },
  {
    id: 'passif-qcm-13',
    type: 'qcm',
    category: 'Passif impersonnel',
    level: 'intermédiaire',
    question: 'Que remplace "es" dans "Es wird getanzt" ?',
    options: [
      'a) Un objet direct',
      'b) Un sujet impersonnel',
      'c) Un complément de lieu',
      'd) Un complément de temps'
    ],
    correctAnswer: 'b) Un sujet impersonnel',
    explanation: '"Es" est un sujet impersonnel dans le passif impersonnel.'
  },
  {
    id: 'passif-qcm-14',
    type: 'qcm',
    category: 'Passif avec modaux',
    level: 'avancé',
    question: 'Comment forme-t-on "Cela peut être vu" au passif ?',
    options: [
      'a) Das kann gesehen werden',
      'b) Das wird gesehen können',
      'c) Das gesehen kann werden',
      'd) Das kann werden gesehen'
    ],
    correctAnswer: 'a) Das kann gesehen werden',
    explanation: 'Modal + infinitif + werden : "kann gesehen werden".'
  },
  {
    id: 'passif-qcm-15',
    type: 'qcm',
    category: 'Temps composés du passif',
    level: 'intermédiaire',
    question: 'Comment dit-on "Cela avait été fait" au passif ?',
    options: [
      'a) Das war getan worden',
      'b) Das wurde getan worden',
      'c) Das hatte getan werden',
      'd) Das getan war worden'
    ],
    correctAnswer: 'a) Das war getan worden',
    explanation: 'Plusquamperfekt : "war" + participe passé + "worden".'
  },
  {
    id: 'passif-qcm-16',
    type: 'qcm',
    category: 'Zustandspassiv',
    level: 'avancé',
    question: 'Dans "Die Tür ist geschlossen", quel type de passif est-ce ?',
    options: [
      'a) Vorgangspassiv',
      'b) Zustandspassiv',
      'c) Passif impersonnel',
      'd) Passif avec modal'
    ],
    correctAnswer: 'b) Zustandspassiv',
    explanation: '"Ist geschlossen" = état : la porte est fermée.'
  },
  {
    id: 'passif-qcm-17',
    type: 'qcm',
    category: 'Agent du passif',
    level: 'intermédiaire',
    question: 'Quelle préposition utilise-t-on pour "le vent" dans "zerstört durch den Wind" ?',
    options: [
      'a) von',
      'b) durch',
      'c) mit',
      'd) bei'
    ],
    correctAnswer: 'b) durch',
    explanation: '"Durch" pour les agents non-humains comme les éléments naturels.'
  },
  {
    id: 'passif-qcm-18',
    type: 'qcm',
    category: 'Passif au Plusquamperfekt',
    level: 'avancé',
    question: 'Comment forme-t-on le Plusquamperfekt du passif ?',
    options: [
      'a) war + Participe II + worden',
      'b) wurde + Participe II + worden',
      'c) hatte + Participe II + werden',
      'd) ist + Participe II + worden'
    ],
    correctAnswer: 'a) war + Participe II + worden',
    explanation: 'Plusquamperfekt : "war" + participe passé + "worden".'
  },
  {
    id: 'passif-qcm-19',
    type: 'qcm',
    category: 'Passif impersonnel',
    level: 'intermédiaire',
    question: 'Peut-on omettre "es" dans le passif impersonnel ?',
    options: [
      'a) Jamais',
      'b) Parfois, si un autre élément est en position 1',
      'c) Toujours',
      'd) Seulement à l\'impératif'
    ],
    correctAnswer: 'b) Parfois, si un autre élément est en position 1',
    explanation: '"Es" peut être omis si un complément est en position 1.'
  },
  {
    id: 'passif-qcm-20',
    type: 'qcm',
    category: 'Passif avec "lassen"',
    level: 'avancé',
    question: 'Comment dit-on "se faire couper les cheveux" ?',
    options: [
      'a) Die Haare schneiden lassen',
      'b) Die Haare lassen schneiden',
      'c) Die Haare werden geschnitten',
      'd) Die Haare schneiden werden'
    ],
    correctAnswer: 'b) Die Haare lassen schneiden',
    explanation: '"Lassen" + infinitif pour "faire faire quelque chose".'
  },

  // Exercices de mots à compléter
  {
    id: 'passif-complet-1',
    type: 'complet',
    category: 'Formation du Vorgangspassiv',
    level: 'intermédiaire',
    question: 'Complétez : Das Haus ___ (bauen) von einem Architekten.',
    correctAnswer: 'wird gebaut',
    explanation: 'Présent : "wird" + participe passé "gebaut".'
  },
  {
    id: 'passif-complet-2',
    type: 'complet',
    category: 'Formation du Vorgangspassiv',
    level: 'avancé',
    question: 'Complétez : Der Brief ___ (schreiben) gestern.',
    correctAnswer: 'wurde geschrieben',
    explanation: 'Prétérit : "wurde" + participe passé.'
  },
  {
    id: 'passif-complet-3',
    type: 'complet',
    category: 'Agent du passif',
    level: 'intermédiaire',
    question: 'Complétez : Das Bild ___ (malen) ___ (von Picasso).',
    correctAnswer: 'wurde gemalt von Picasso',
    explanation: 'Agent humain avec "von" + datif.'
  },
  {
    id: 'passif-complet-4',
    type: 'complet',
    category: 'Agent du passif',
    level: 'avancé',
    question: 'Complétez : Die Stadt ___ (zerstören) ___ (durch den Krieg).',
    correctAnswer: 'wurde zerstört durch den Krieg',
    explanation: 'Agent non-humain avec "durch" + accusatif.'
  },
  {
    id: 'passif-complet-5',
    type: 'complet',
    category: 'Zustandspassiv',
    level: 'intermédiaire',
    question: 'Complétez : Die Tür ___ (schließen) seit einer Stunde.',
    correctAnswer: 'ist geschlossen',
    explanation: 'Zustandspassiv : "ist" + participe passé pour l\'état.'
  },
  {
    id: 'passif-complet-6',
    type: 'complet',
    category: 'Zustandspassiv',
    level: 'avancé',
    question: 'Complétez : Das Fenster ___ (öffnen) den ganzen Tag.',
    correctAnswer: 'war geöffnet',
    explanation: 'Zustandspassiv au prétérit : "war geöffnet".'
  },
  {
    id: 'passif-complet-7',
    type: 'complet',
    category: 'Passif avec modaux',
    level: 'intermédiaire',
    question: 'Complétez : Die Arbeit ___ (müssen) ___ (machen) bis morgen.',
    correctAnswer: 'muss gemacht werden',
    explanation: 'Modal + infinitif + werden : "muss gemacht werden".'
  },
  {
    id: 'passif-complet-8',
    type: 'complet',
    category: 'Passif avec modaux',
    level: 'avancé',
    question: 'Complétez : Das Auto ___ (können) ___ (reparieren) heute.',
    correctAnswer: 'kann repariert werden',
    explanation: 'Modal + infinitif + werden : "kann repariert werden".'
  },
  {
    id: 'passif-complet-9',
    type: 'complet',
    category: 'Passif impersonnel',
    level: 'intermédiaire',
    question: 'Complétez : ___ (es) ___ (arbeiten) hier viel.',
    correctAnswer: 'Es wird gearbeitet',
    explanation: 'Passif impersonnel : "Es wird" + participe passé.'
  },
  {
    id: 'passif-complet-10',
    type: 'complet',
    category: 'Passif impersonnel',
    level: 'avancé',
    question: 'Complétez : Hier ___ (tanzen) bis spät in die Nacht.',
    correctAnswer: 'wurde getanzt',
    explanation: 'Passif impersonnel au prétérit : "wurde getanzt".'
  },
  {
    id: 'passif-complet-11',
    type: 'complet',
    category: 'Temps du passif',
    level: 'intermédiaire',
    question: 'Complétez : Das Buch ___ (lesen) von vielen Studenten.',
    correctAnswer: 'wird gelesen',
    explanation: 'Présent du passif : "wird gelesen".'
  },
  {
    id: 'passif-complet-12',
    type: 'complet',
    category: 'Temps du passif',
    level: 'avancé',
    question: 'Complétez : Die Aufgabe ___ (machen) bis nächste Woche.',
    correctAnswer: 'wird gemacht werden',
    explanation: 'Futur du passif : "wird gemacht werden".'
  },
  {
    id: 'passif-complet-13',
    type: 'complet',
    category: 'Passif au Perfekt',
    level: 'intermédiaire',
    question: 'Complétez : Der Kuchen ___ (backen) schon.',
    correctAnswer: 'ist gebacken worden',
    explanation: 'Perfekt du passif : "ist" + participe passé + "worden".'
  },
  {
    id: 'passif-complet-14',
    type: 'complet',
    category: 'Passif au Perfekt',
    level: 'avancé',
    question: 'Complétez : Die Briefe ___ (schreiben) gestern.',
    correctAnswer: 'sind geschrieben worden',
    explanation: 'Perfekt du passif pluriel : "sind" + participe passé + "worden".'
  },
  {
    id: 'passif-complet-15',
    type: 'complet',
    category: 'Passif au Plusquamperfekt',
    level: 'intermédiaire',
    question: 'Complétez : Das Haus ___ (bauen) vor 100 Jahren.',
    correctAnswer: 'war gebaut worden',
    explanation: 'Plusquamperfekt : "war gebaut worden".'
  },
  {
    id: 'passif-complet-16',
    type: 'complet',
    category: 'Passif au Plusquamperfekt',
    level: 'avancé',
    question: 'Complétez : Die Dokumente ___ (vernichten) schon lange.',
    correctAnswer: 'waren vernichtet worden',
    explanation: 'Plusquamperfekt pluriel : "waren vernichtet worden".'
  },
  {
    id: 'passif-complet-17',
    type: 'complet',
    category: 'Passif avec "lassen"',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (schneiden) meine Haare ___ (lassen).',
    correctAnswer: 'lasse schneiden',
    explanation: '"Lassen" + infinitif = faire faire quelque chose.'
  },
  {
    id: 'passif-complet-18',
    type: 'complet',
    category: 'Passif avec "lassen"',
    level: 'avancé',
    question: 'Complétez : Das Auto ___ (reparieren) ___ (lassen) nächste Woche.',
    correctAnswer: 'lasse reparieren',
    explanation: '"Lassen reparieren" = faire réparer.'
  },
  {
    id: 'passif-complet-19',
    type: 'complet',
    category: 'Passif avec prépositions',
    level: 'intermédiaire',
    question: 'Complétez : Der Brief ___ (schreiben) ___ (mit der Hand).',
    correctAnswer: 'wurde geschrieben mit der Hand',
    explanation: 'Instrument avec "mit" : "mit der Hand".'
  },
  {
    id: 'passif-complet-20',
    type: 'complet',
    category: 'Passif avec prépositions',
    level: 'avancé',
    question: 'Complétez : Die Stadt ___ (belagern) ___ (von den Feinden).',
    correctAnswer: 'wurde belagert von den Feinden',
    explanation: 'Agent humain avec "von" : "von den Feinden".'
  }
];

const PassifExercicesPage = () => {
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

  const filteredExercises = filterExercises(passifExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = passifExercises.find(ex => ex.id === exerciseId);
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
    passifExercises.forEach(exercise => {
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
            <Link to="/formation/allemand-passif" className="hover:text-gray-900 transition-colors">
              Le Passif
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand-passif">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour au passif
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices du Passif
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maîtrisez les formes passives en allemand : Vorgangspassiv, Zustandspassiv et passif impersonnel
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{passifExercises.length} exercices</Badge>
            <Badge className="bg-orange-600 px-3 py-1">Chapitre essentiel</Badge>
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
                  <option value="Formation du Vorgangspassiv">Formation du Vorgangspassiv</option>
                  <option value="Formation du Zustandspassiv">Formation du Zustandspassiv</option>
                  <option value="Agent du passif">Agent du passif</option>
                  <option value="Passif avec modaux">Passif avec modaux</option>
                  <option value="Passif impersonnel">Passif impersonnel</option>
                  <option value="Temps du passif">Temps du passif</option>
                  <option value="Passif au Perfekt">Passif au Perfekt</option>
                  <option value="Passif au Plusquamperfekt">Passif au Plusquamperfekt</option>
                  <option value="Passif avec lassen">Passif avec lassen</option>
                  <option value="Passif avec prépositions">Passif avec prépositions</option>
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
                            Bonne réponse : <strong>{passifExercises.find(ex => ex.id === currentExercise.id)?.correctAnswer}</strong>
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les formes passives en allemand.'}
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

export default PassifExercicesPage;
