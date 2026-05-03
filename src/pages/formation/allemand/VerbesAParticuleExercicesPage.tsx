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

// Données d'exercices pour les verbes à particule
const verbesAParticuleExercises = [
  {
    id: 'part-qcm-1',
    type: 'qcm',
    category: 'Particules séparables',
    level: 'intermédiaire',
    question: 'Quelle est la position de la particule dans "Ich stehe um 7 Uhr auf" ?',
    options: [
      'a) Au début de la phrase',
      'b) Avant le verbe',
      'c) À la fin de la phrase',
      'd) Au milieu du verbe'
    ],
    correctAnswer: 'c) À la fin de la phrase',
    explanation: 'Dans les propositions principales, la particule séparable va à la fin.'
  },
  {
    id: 'part-qcm-2',
    type: 'qcm',
    category: 'Particules séparables',
    level: 'avancé',
    question: 'Comment se forme le participe passé de "aufstehen" ?',
    options: [
      'a) aufgestanden',
      'b) aufgestehen',
      'c) gestanden auf',
      'd) auf stehen'
    ],
    correctAnswer: 'a) aufgestanden',
    explanation: 'Particule + ge + radical + en : auf + ge + stand + en.'
  },
  {
    id: 'part-complet-1',
    type: 'complet',
    category: 'Particules séparables',
    level: 'intermédiaire',
    question: 'Complétez : Ich stehe jeden Morgen um 7 Uhr ___ (auf).',
    correctAnswer: 'auf',
    explanation: 'Particule séparable à la fin dans la proposition principale.'
  },
  {
    id: 'part-qcm-3',
    type: 'qcm',
    category: 'Particules inséparables',
    level: 'intermédiaire',
    question: 'Quelle particule est toujours inséparable ?',
    options: [
      'a) an-',
      'b) auf-',
      'c) be-',
      'd) mit-'
    ],
    correctAnswer: 'c) be-',
    explanation: '"be-" est toujours inséparable et modifie le sens du verbe.'
  },
  {
    id: 'part-complet-2',
    type: 'complet',
    category: 'Particules séparables',
    level: 'avancé',
    question: 'Complétez : Ich bin gestern früh ___ (auf)gestanden.',
    correctAnswer: 'aufgestanden',
    explanation: 'Au Perfekt avec particule séparable : particule + ge + radical + en.'
  },
  {
    id: 'part-qcm-4',
    type: 'qcm',
    category: 'Changement de sens',
    level: 'avancé',
    question: 'Quel est le sens de "ankommen" ?',
    options: [
      'a) Venir',
      'b) Arriver',
      'c) Partir',
      'd) Rester'
    ],
    correctAnswer: 'b) Arriver',
    explanation: '"ankommen" signifie "arriver" (sens différent de "kommen").'
  },
  {
    id: 'part-complet-3',
    type: 'complet',
    category: 'Particules inséparables',
    level: 'intermédiaire',
    question: 'Complétez : Der Lehrer ___ (be)antwortet die Frage.',
    correctAnswer: 'beantwortet',
    explanation: '"beantworten" avec particule inséparable "be-".'
  },
  {
    id: 'part-qcm-5',
    type: 'qcm',
    category: 'Position dans la subordonnée',
    level: 'intermédiaire',
    question: 'Où se trouve la particule dans "..., weil ich aufstehe" ?',
    options: [
      'a) Au début',
      'b) Après le sujet',
      'c) Collée au verbe',
      'd) À la fin'
    ],
    correctAnswer: 'c) Collée au verbe',
    explanation: 'Dans les subordonnées, particule + verbe forment un bloc à la fin.'
  },
  {
    id: 'part-complet-4',
    type: 'complet',
    category: 'Changement de sens',
    level: 'avancé',
    question: 'Complétez : Wir ___ (kommen) um 8 Uhr ___ (an).',
    correctAnswer: 'kommen an',
    explanation: '"ankommen" = arriver (changement de sens par rapport à "kommen").'
  },
  {
    id: 'part-qcm-6',
    type: 'qcm',
    category: 'Particules séparables',
    level: 'intermédiaire',
    question: 'Quel verbe à particule signifie "se lever" ?',
    options: [
      'a) aufstehen',
      'b) ankommen',
      'c) aussteigen',
      'd) einsteigen'
    ],
    correctAnswer: 'a) aufstehen',
    explanation: '"aufstehen" = se lever, particule séparable.'
  },
  {
    id: 'part-complet-5',
    type: 'complet',
    category: 'Position subordonnée',
    level: 'intermédiaire',
    question: 'Complétez : ..., weil ich früh ___ (aufstehe).',
    correctAnswer: 'aufstehe',
    explanation: 'Dans les subordonnées : particule + verbe à la fin.'
  },
  {
    id: 'part-qcm-7',
    type: 'qcm',
    category: 'Particules inséparables',
    level: 'avancé',
    question: 'Comment se forme le participe passé de "verstehen" ?',
    options: [
      'a) verstanden',
      'b) verstehen',
      'c) geverstanden',
      'd) ver gestanden'
    ],
    correctAnswer: 'a) verstanden',
    explanation: 'Verbes avec particules inséparables : pas de "ge-" au participe passé.'
  },
  {
    id: 'part-complet-6',
    type: 'complet',
    category: 'Particules séparables',
    level: 'avancé',
    question: 'Complétez : Mach das Licht ___ (aus)!',
    correctAnswer: 'aus',
    explanation: 'Impératif : verbe conjugué + particule séparable.'
  },
  {
    id: 'part-qcm-8',
    type: 'qcm',
    category: 'Changement de sens',
    level: 'intermédiaire',
    question: 'Quelle est la différence entre "sehen" et "ansehen" ?',
    options: [
      'a) Aucune différence',
      'b) "ansehen" signifie "regarder"',
      'c) "ansehen" signifie "voir"',
      'd) "ansehen" signifie "apercevoir"'
    ],
    correctAnswer: 'b) "ansehen" signifie "regarder"',
    explanation: '"sehen" = voir, "ansehen" = regarder (action volontaire et durable).'
  },
  {
    id: 'part-complet-7',
    type: 'complet',
    category: 'Particules inséparables',
    level: 'intermédiaire',
    question: 'Complétez : Ich ___ (ver)stehe die Regel nicht.',
    correctAnswer: 'verstehe',
    explanation: '"verstehen" avec particule inséparable "ver-".'
  },
  {
    id: 'part-qcm-9',
    type: 'qcm',
    category: 'Particules séparables',
    level: 'avancé',
    question: 'Dans "Ich habe das Buch zugemacht", quelle est la particule ?',
    options: [
      'a) zu',
      'b) ge',
      'c) macht',
      'd) habe'
    ],
    correctAnswer: 'a) zu',
    explanation: '"zumachen" = fermer, particule séparable "zu-".'
  },
  {
    id: 'part-complet-8',
    type: 'complet',
    category: 'Changement de sens',
    level: 'avancé',
    question: 'Complétez : Sie ___ (sieht) das Bild ___ (an).',
    correctAnswer: 'sieht an',
    explanation: '"ansehen" = regarder (duratif vs "sehen" = voir).'
  },
  {
    id: 'part-qcm-10',
    type: 'qcm',
    category: 'Particules inséparables',
    level: 'intermédiaire',
    question: 'Quel verbe signifie "répondre" avec une particule inséparable ?',
    options: [
      'a) antworten',
      'b) beantworten',
      'c) aufantworten',
      'd) antworten auf'
    ],
    correctAnswer: 'b) beantworten',
    explanation: '"beantworten" = répondre à, avec "be-" inséparable.'
  },
  {
    id: 'part-complet-9',
    type: 'complet',
    category: 'Particules séparables',
    level: 'intermédiaire',
    question: 'Complétez : Wann ___ (kommst) du ___ (an)?',
    correctAnswer: 'kommst an',
    explanation: '"ankommen" = arriver à destination.'
  },
  {
    id: 'part-qcm-11',
    type: 'qcm',
    category: 'Particules séparables',
    level: 'intermédiaire',
    question: 'Quelle particule utilise-t-on pour "sortir" (d\'un véhicule) ?',
    options: [
      'a) aus-',
      'b) ein-',
      'c) auf-',
      'd) zu-'
    ],
    correctAnswer: 'a) aus-',
    explanation: '"aussteigen" = sortir d\'un véhicule, descendre.'
  },
  {
    id: 'part-complet-10',
    type: 'complet',
    category: 'Particules inséparables',
    level: 'avancé',
    question: 'Complétez : Der Sturm hat das Haus ___ (zer)stört.',
    correctAnswer: 'zerstört',
    explanation: '"zerstören" avec particule inséparable "zer-".'
  }
];

const VerbesAParticuleExercicesPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
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

  // New state for single question display
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [selectedExerciseType, setSelectedExerciseType] = useState<'qcm' | 'complet'>('qcm');

  // Filtrer les exercices selon les sélections
  const filterExercises = (exercises: any[]) => {
    return exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'toutes' || exercise.category === selectedCategory;
      const levelMatch = selectedLevel === 'tous' || exercise.level === selectedLevel;
      const typeMatch = selectedExerciseType === exercise.type;
      return categoryMatch && levelMatch && typeMatch;
    });
  };

  // Filtered exercises based on type and category/level
  const filteredExercises = filterExercises(verbesAParticuleExercises);
  const currentExercise = filteredExercises[currentExerciseIndex];

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

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    const exercise = verbesAParticuleExercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    const userAnswer = userAnswers[exerciseId];
    if (!userAnswer) return;

    let isCorrect = false;

    if (exercise.type === 'qcm') {
      // Pour QCM, extraire la lettre de la réponse
      const userLetter = userAnswer.split(')')[0];
      const correctLetter = exercise.correctAnswer.split(')')[0];
      isCorrect = userLetter === correctLetter;
    } else {
      // Pour les mots à compléter, comparer directement
      isCorrect = userAnswer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    }

    setValidatedAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;

    verbesAParticuleExercises.forEach(exercise => {
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
    setShowHints({});
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

  // Fonction helper pour générer les boutons d'action et le feedback
  const renderActionButtons = (exerciseId: string) => {
    if (examMode && examStarted) {
      // Mode examen : pas de boutons de validation ni de feedback
      return null;
    }

    return (
      <>
                {/* Boutons d'action */}
        <div className="flex gap-3 pt-6">
          <Button
            onClick={() => validateAnswer(exerciseId)}
            disabled={!userAnswers[exerciseId]}
            className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2 px-6 py-2"
          >
            <CheckCircle className="h-4 w-4" />
            Valider ma réponse
          </Button>
          <Button
            variant="outline"
            onClick={() => toggleCorrections(exerciseId)}
            className="flex items-center gap-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50 px-6 py-2"
          >
            <Eye className="h-4 w-4" />
            {showCorrections[exerciseId] ? 'Masquer la correction' : 'Voir la correction'}
          </Button>
        </div>

        {/* Feedback immédiat */}
        {validatedAnswers[exerciseId] !== undefined && (
          <div className={`rounded-lg p-4 border-l-4 mt-4 ${
            validatedAnswers[exerciseId]
              ? 'bg-green-50 border-green-400'
              : 'bg-red-50 border-red-400'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                validatedAnswers[exerciseId] ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {validatedAnswers[exerciseId] ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <X className="h-5 w-5 text-red-600" />
                )}
              </div>
              <div>
                <span className={`font-semibold text-lg ${
                  validatedAnswers[exerciseId] ? 'text-green-800' : 'text-red-800'
                }`}>
                  {validatedAnswers[exerciseId] ? 'Correct !' : 'Incorrect'}
                </span>
                {!validatedAnswers[exerciseId] && (
                  <p className="text-red-700 mt-1 text-sm">
                    Bonne réponse : <strong>{verbesAParticuleExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
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
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Formations
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
            <Link to="/formation/allemand/verbes-particules" className="hover:text-gray-900 transition-colors">
              Verbes à Particule
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
                {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Link to="/formation/allemand/verbes-particules">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour aux verbes à particule
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices des Verbes à Particule
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maîtrisez les verbes à particule séparables et inséparables en allemand avec ces exercices progressifs
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{verbesAParticuleExercises.length} exercices</Badge>
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
                  <option value="Particules séparables">Particules séparables</option>
                  <option value="Particules inséparables">Particules inséparables</option>
                  <option value="Changement de sens">Changement de sens</option>
                  <option value="Position dans la subordonnée">Position dans la subordonnée</option>
                  <option value="Position subordonnée">Position subordonnée</option>
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

        {/* Affichage d'une seule question à la fois */}
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
              <Badge variant="outline" className="border-orange-300 text-orange-700">
                {selectedExerciseType === 'qcm' ? 'QCM' : 'Mots à compléter'}
              </Badge>
            </div>

            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-6">
                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Question
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-base text-gray-800 leading-relaxed">{currentExercise.question}</p>
                  </div>
                </div>

                {/* Options / Input pour la réponse */}
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
                            disabled={examMode && examStarted}
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
                      disabled={examMode && examStarted}
                    />
                  </div>
                )}

                {renderActionButtons(currentExercise.id)}

                {/* Correction */}
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les verbes à particule allemands.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bon résultat ! Vous avez validé l\'examen.' : 'Bon effort ! Continuez à pratiquer pour améliorer votre score.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                    {examMode ? 'Continuez à travailler ces verbes. La persévérance paiera !' : 'Ne vous découragez pas ! Les verbes à particule nécessitent de la pratique régulière.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm">
                    💡 Les verbes à particule sont essentiels en allemand. Continuez à les pratiquer régulièrement !
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

export default VerbesAParticuleExercicesPage;
