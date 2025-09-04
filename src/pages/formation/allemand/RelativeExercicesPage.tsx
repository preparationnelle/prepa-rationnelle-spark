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
  X,
  ArrowRight
} from 'lucide-react';

// Données d'exercices pour les propositions relatives
const relativeExercises = [
  {
    id: 'rel-qcm-1',
    type: 'qcm',
    category: 'Pronoms relatifs',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "la ville que je visite" ?',
    options: [
      'a) die Stadt, die ich besuche',
      'b) die Stadt, den ich besuche',
      'c) die Stadt, das ich besuche',
      'd) die Stadt, denen ich besuche'
    ],
    correctAnswer: 'a) die Stadt, die ich besuche',
    explanation: 'Pour un nom féminin au nominatif, on utilise "die".'
  },
  {
    id: 'rel-qcm-2',
    type: 'qcm',
    category: 'Cas dans la relative',
    level: 'avancé',
    question: 'Comment s\'exprime "le livre que j\'ai acheté" ?',
    options: [
      'a) das Buch, die ich gekauft habe',
      'b) das Buch, das ich gekauft habe',
      'c) das Buch, den ich gekauft habe',
      'd) das Buch, dem ich gekauft habe'
    ],
    correctAnswer: 'c) das Buch, den ich gekauft habe',
    explanation: 'Pour un COD masculin, on utilise "den".'
  },
  {
    id: 'rel-complet-1',
    type: 'complet',
    category: 'Prépositions + relatifs',
    level: 'avancé',
    question: 'Complétez : Das ist der Mann, ___ (mit + datif) ich gesprochen habe.',
    correctAnswer: 'mit dem',
    explanation: 'La préposition "mit" régit le datif : "mit dem".'
  },
  {
    id: 'rel-qcm-3',
    type: 'qcm',
    category: 'Relatives participiales',
    level: 'intermédiaire',
    question: 'Quelle est la forme participiale de "Der Roman, der von Goethe geschrieben wurde" ?',
    options: [
      'a) Der von Goethe geschriebene Roman',
      'b) Der Goethe geschriebene Roman',
      'c) Der geschriebene Goethe Roman',
      'd) Der Roman von Goethe geschrieben'
    ],
    correctAnswer: 'a) Der von Goethe geschriebene Roman',
    explanation: 'Le participe passé précède le nom avec l\'article approprié.'
  },
  {
    id: 'rel-complet-2',
    type: 'complet',
    category: 'Génitif relatif',
    level: 'avancé',
    question: 'Complétez : Das ist die Frau, ___ (deren) Mann Professor ist.',
    correctAnswer: 'deren',
    explanation: 'Pour exprimer la possession, on utilise "deren" pour le féminin.'
  },
  {
    id: 'rel-qcm-4',
    type: 'qcm',
    category: 'Remplacement de "dont"',
    level: 'intermédiaire',
    question: 'Comment traduire "Ce livre dont le titre est connu" ?',
    options: [
      'a) Dieses Buch, dessen Titel bekannt ist',
      'b) Dieses Buch, deren Titel bekannt ist',
      'c) Dieses Buch, dem Titel bekannt ist',
      'd) Dieses Buch, den Titel bekannt ist'
    ],
    correctAnswer: 'a) Dieses Buch, dessen Titel bekannt ist',
    explanation: 'Pour un complément du nom masculin, on utilise "dessen".'
  },
  {
    id: 'rel-complet-3',
    type: 'complet',
    category: 'Relatives sans antécédent',
    level: 'avancé',
    question: 'Complétez : ___ (was) du gesagt hast, ist richtig.',
    correctAnswer: 'Was',
    explanation: 'Pour remplacer une proposition entière, on utilise "was".'
  },
  {
    id: 'rel-qcm-5',
    type: 'qcm',
    category: 'Ponctuation',
    level: 'intermédiaire',
    question: 'Où place-t-on les virgules dans "Der Mann, der hier wohnt, ist Lehrer" ?',
    options: [
      'a) Avant et après la relative',
      'b) Seulement avant la relative',
      'c) Seulement après la relative',
      'd) Aucune virgule'
    ],
    correctAnswer: 'a) Avant et après la relative',
    explanation: 'Les propositions relatives sont toujours encadrées de virgules.'
  },
  {
    id: 'rel-complet-4',
    type: 'complet',
    category: 'Relatives avec "wo-/"',
    level: 'avancé',
    question: 'Complétez : Das Haus, ___ (in + datif) ich wohne, ist alt.',
    correctAnswer: 'worin',
    explanation: '"Wor-" + préposition pour remplacer un complément de lieu.'
  },
  // Nouveaux QCM (17 supplémentaires pour atteindre 20)
  {
    id: 'rel-qcm-7',
    type: 'qcm',
    category: 'Pronoms relatifs',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "der Mann den ich gesehen habe" ?',
    options: [
      'a) der Mann, die ich gesehen habe',
      'b) der Mann, den ich gesehen habe',
      'c) der Mann, das ich gesehen habe',
      'd) der Mann, denen ich gesehen habe'
    ],
    correctAnswer: 'b) der Mann, den ich gesehen habe',
    explanation: 'Pour un COD masculin, on utilise "den".'
  },
  {
    id: 'rel-qcm-8',
    type: 'qcm',
    category: 'Cas dans la relative',
    level: 'avancé',
    question: 'Comment s\'exprime "la maison dans laquelle j\'habite" ?',
    options: [
      'a) das Haus, in dem ich wohne',
      'b) das Haus, in das ich wohne',
      'c) das Haus, in der ich wohne',
      'd) das Haus, in denen ich wohne'
    ],
    correctAnswer: 'a) das Haus, in dem ich wohne',
    explanation: 'Pour un complément de lieu avec "in", on utilise "dem" (datif).'
  },
  {
    id: 'rel-qcm-9',
    type: 'qcm',
    category: 'Prépositions + relatifs',
    level: 'avancé',
    question: 'Quelle est la forme correcte pour "mit dem ich gesprochen habe" ?',
    options: [
      'a) mit dem ich gesprochen habe',
      'b) mit den ich gesprochen habe',
      'c) mit der ich gesprochen habe',
      'd) mit denen ich gesprochen habe'
    ],
    correctAnswer: 'a) mit dem ich gesprochen habe',
    explanation: '"Mit" régit le datif masculin singulier : "dem".'
  },
  {
    id: 'rel-qcm-10',
    type: 'qcm',
    category: 'Relatives participiales',
    level: 'intermédiaire',
    question: 'Comment traduire "Le livre écrit par Goethe" ?',
    options: [
      'a) Das von Goethe geschriebene Buch',
      'b) Das Goethe geschriebene Buch',
      'c) Das geschriebene Goethe Buch',
      'd) Das Buch von Goethe geschrieben'
    ],
    correctAnswer: 'a) Das von Goethe geschriebene Buch',
    explanation: 'Le participe passé précède le nom avec l\'article approprié.'
  },
  {
    id: 'rel-qcm-11',
    type: 'qcm',
    category: 'Génitif relatif',
    level: 'avancé',
    question: 'Comment exprimer "dont le père est médecin" pour un masculin ?',
    options: [
      'a) dessen Vater Arzt ist',
      'b) deren Vater Arzt ist',
      'c) dem Vater Arzt ist',
      'd) den Vater Arzt ist'
    ],
    correctAnswer: 'a) dessen Vater Arzt ist',
    explanation: 'Pour exprimer la possession masculine, on utilise "dessen".'
  },
  {
    id: 'rel-qcm-12',
    type: 'qcm',
    category: 'Remplacement de dont',
    level: 'intermédiaire',
    question: 'Comment traduire "Ce film dont l\'histoire est intéressante" ?',
    options: [
      'a) Dieser Film, dessen Geschichte interessant ist',
      'b) Dieser Film, deren Geschichte interessant ist',
      'c) Dieser Film, dem Geschichte interessant ist',
      'd) Dieser Film, den Geschichte interessant ist'
    ],
    correctAnswer: 'a) Dieser Film, dessen Geschichte interessant ist',
    explanation: 'Pour un complément du nom masculin, on utilise "dessen".'
  },
  {
    id: 'rel-qcm-13',
    type: 'qcm',
    category: 'Relatives sans antécédent',
    level: 'avancé',
    question: 'Quelle forme utilise-t-on pour remplacer une proposition entière ?',
    options: [
      'a) was',
      'b) der',
      'c) die',
      'd) das'
    ],
    correctAnswer: 'a) was',
    explanation: 'Pour remplacer une proposition entière, on utilise "was".'
  },
  {
    id: 'rel-qcm-14',
    type: 'qcm',
    category: 'Ponctuation',
    level: 'intermédiaire',
    question: 'Où place-t-on les virgules dans "Das Buch, das ich lese, ist spannend" ?',
    options: [
      'a) Avant et après la relative',
      'b) Seulement avant la relative',
      'c) Seulement après la relative',
      'd) Aucune virgule'
    ],
    correctAnswer: 'a) Avant et après la relative',
    explanation: 'Les propositions relatives sont toujours encadrées de virgules.'
  },
  {
    id: 'rel-qcm-15',
    type: 'qcm',
    category: 'Relatives avec wo-',
    level: 'avancé',
    question: 'Comment forme-t-on "sur lequel" avec "wor-" ?',
    options: [
      'a) worauf',
      'b) womit',
      'c) wobei',
      'd) wovon'
    ],
    correctAnswer: 'a) worauf',
    explanation: '"Wor-" + "auf" donne "worauf" pour remplacer un complément de lieu.'
  },
  {
    id: 'rel-qcm-16',
    type: 'qcm',
    category: 'Accord du verbe',
    level: 'intermédiaire',
    question: 'Comment s\'accorde le verbe dans "Die Männer, die ___ (arbeiten)" ?',
    options: [
      'a) arbeiten (présent)',
      'b) arbeitet (présent)',
      'c) arbeitete (prétérit)',
      'd) gearbeitet (participe)'
    ],
    correctAnswer: 'a) arbeiten (présent)',
    explanation: 'Le verbe s\'accorde avec l\'antécédent pluriel : "die Männer".'
  },
  {
    id: 'rel-qcm-17',
    type: 'qcm',
    category: 'Pronoms relatifs',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "das Kind das spielt" ?',
    options: [
      'a) das Kind, die spielt',
      'b) das Kind, das spielt',
      'c) das Kind, den spielt',
      'd) das Kind, dem spielt'
    ],
    correctAnswer: 'b) das Kind, das spielt',
    explanation: 'Pour un nom neutre au nominatif, on utilise "das".'
  },
  {
    id: 'rel-qcm-18',
    type: 'qcm',
    category: 'Cas dans la relative',
    level: 'avancé',
    question: 'Comment s\'exprime "le cadeau que j\'ai reçu" ?',
    options: [
      'a) das Geschenk, die ich bekommen habe',
      'b) das Geschenk, das ich bekommen habe',
      'c) das Geschenk, den ich bekommen habe',
      'd) das Geschenk, dem ich bekommen habe'
    ],
    correctAnswer: 'b) das Geschenk, das ich bekommen habe',
    explanation: 'Pour un COD neutre, on utilise "das".'
  },
  {
    id: 'rel-qcm-19',
    type: 'qcm',
    category: 'Prépositions + relatifs',
    level: 'avancé',
    question: 'Quelle est la forme correcte pour "von der ich gesprochen habe" ?',
    options: [
      'a) von der ich gesprochen habe',
      'b) von dem ich gesprochen habe',
      'c) von den ich gesprochen habe',
      'd) von denen ich gesprochen habe'
    ],
    correctAnswer: 'a) von der ich gesprochen habe',
    explanation: '"Von" régit le datif féminin singulier : "der".'
  },
  {
    id: 'rel-qcm-20',
    type: 'qcm',
    category: 'Relatives participiales',
    level: 'intermédiaire',
    question: 'Comment traduire "La lettre envoyée hier" ?',
    options: [
      'a) Der gestern gesendete Brief',
      'b) Der gesendete gestern Brief',
      'c) Der Brief gestern gesendet',
      'd) Der Brief gesendet gestern'
    ],
    correctAnswer: 'a) Der gestern gesendete Brief',
    explanation: 'Le participe passé précède le nom avec l\'article approprié.'
  },
  // Nouveaux exercices de mots à compléter (17 supplémentaires pour atteindre 20)
  {
    id: 'rel-complet-5',
    type: 'complet',
    category: 'Pronoms relatifs',
    level: 'intermédiaire',
    question: 'Complétez : Das ist der Mann, ___ (der) ich gestern getroffen habe.',
    correctAnswer: 'den',
    explanation: 'Pour un COD masculin, on utilise "den".'
  },
  {
    id: 'rel-complet-6',
    type: 'complet',
    category: 'Cas dans la relative',
    level: 'avancé',
    question: 'Complétez : Die Frau, ___ (der) ich helfe, ist meine Nachbarin.',
    correctAnswer: 'der',
    explanation: 'Pour un COI féminin, on utilise "der" au datif.'
  },
  {
    id: 'rel-complet-7',
    type: 'complet',
    category: 'Prépositions + relatifs',
    level: 'avancé',
    question: 'Complétez : Das ist das Haus, ___ (in + datif) ich aufgewachsen bin.',
    correctAnswer: 'in dem',
    explanation: 'La préposition "in" avec datif donne "in dem".'
  },
  {
    id: 'rel-complet-8',
    type: 'complet',
    category: 'Relatives participiales',
    level: 'intermédiaire',
    question: 'Complétez : Der ___ (von Goethe) Roman ist berühmt.',
    correctAnswer: 'von Goethe geschriebene',
    explanation: 'Le participe passé avec préposition précède le nom.'
  },
  {
    id: 'rel-complet-9',
    type: 'complet',
    category: 'Génitif relatif',
    level: 'avancé',
    question: 'Complétez : Das ist der Student, ___ (dessen) Arbeit sehr gut ist.',
    correctAnswer: 'dessen',
    explanation: 'Pour exprimer la possession masculine, on utilise "dessen".'
  },
  {
    id: 'rel-complet-10',
    type: 'complet',
    category: 'Remplacement de dont',
    level: 'intermédiaire',
    question: 'Complétez : Das Auto, ___ (dessen) Farbe rot ist, gehört mir.',
    correctAnswer: 'dessen',
    explanation: 'Pour un complément du nom neutre, on utilise "dessen".'
  },
  {
    id: 'rel-complet-11',
    type: 'complet',
    category: 'Relatives sans antécédent',
    level: 'avancé',
    question: 'Complétez : ___ (was) du sagst, ist sehr wichtig.',
    correctAnswer: 'Was',
    explanation: 'Pour remplacer une proposition entière, on utilise "was".'
  },
  {
    id: 'rel-complet-12',
    type: 'complet',
    category: 'Ponctuation',
    level: 'intermédiaire',
    question: 'Complétez : Der Lehrer, ___ (der) unterrichtet, ist streng.',
    correctAnswer: 'der',
    explanation: 'Pour un sujet masculin, on utilise "der".'
  },
  {
    id: 'rel-complet-13',
    type: 'complet',
    category: 'Relatives avec wo-',
    level: 'avancé',
    question: 'Complétez : Der Ort, ___ (an + datif) ich denke, ist schön.',
    correctAnswer: 'woran',
    explanation: '"Wo-" + "an" donne "woran" pour remplacer un complément.'
  },
  {
    id: 'rel-complet-14',
    type: 'complet',
    category: 'Accord du verbe',
    level: 'intermédiaire',
    question: 'Complétez : Die Kinder, ___ (die) spielen, sind glücklich.',
    correctAnswer: 'die',
    explanation: 'Pour un sujet pluriel, on utilise "die".'
  },
  {
    id: 'rel-complet-15',
    type: 'complet',
    category: 'Pronoms relatifs',
    level: 'intermédiaire',
    question: 'Complétez : Das Buch, ___ (das) ich lese, ist spannend.',
    correctAnswer: 'das',
    explanation: 'Pour un COD neutre, on utilise "das".'
  },
  {
    id: 'rel-complet-16',
    type: 'complet',
    category: 'Cas dans la relative',
    level: 'avancé',
    question: 'Complétez : Der Freund, ___ (dem) ich vertraue, ist ehrlich.',
    correctAnswer: 'dem',
    explanation: 'Pour un COI masculin, on utilise "dem" au datif.'
  },
  {
    id: 'rel-complet-17',
    type: 'complet',
    category: 'Prépositions + relatifs',
    level: 'avancé',
    question: 'Complétez : Das Geschenk, ___ (für + accusatif) ich dankbar bin.',
    correctAnswer: 'für das',
    explanation: 'La préposition "für" avec accusatif donne "für das".'
  },
  {
    id: 'rel-complet-18',
    type: 'complet',
    category: 'Relatives participiales',
    level: 'intermédiaire',
    question: 'Complétez : Die ___ (im letzten Jahr) gebaute Brücke ist modern.',
    correctAnswer: 'im letzten Jahr gebaute',
    explanation: 'Le participe passé avec complément précède le nom.'
  },
  {
    id: 'rel-complet-19',
    type: 'complet',
    category: 'Génitif relatif',
    level: 'avancé',
    question: 'Complétez : Die Frau, ___ (deren) Mann verreist ist.',
    correctAnswer: 'deren',
    explanation: 'Pour exprimer la possession féminine, on utilise "deren".'
  },
  {
    id: 'rel-complet-20',
    type: 'complet',
    category: 'Remplacement de dont',
    level: 'intermédiaire',
    question: 'Complétez : Das Thema, ___ (über + accusatif) wir sprechen.',
    correctAnswer: 'über das',
    explanation: 'La préposition "über" avec accusatif donne "über das".'
  }
];

const RelativeExercicesPage = () => {

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
      const typeMatch = selectedExerciseType === exercise.type || selectedExerciseType === 'toutes';
      return categoryMatch && levelMatch && typeMatch;
    });
  };

  // Filtered exercises based on type and category/level
  const filteredExercises = filterExercises(relativeExercises);
  const currentExercise = filteredExercises.length > 0 ? filteredExercises[currentExerciseIndex] : null;

  // Keyboard navigation for exercises
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!examStarted && filteredExercises.length > 0) { // Only enable keyboard navigation outside exam mode and if there are exercises
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

  const toggleCorrections = (exerciseId: string) => {
    if (!exerciseId) return;
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    if (!exerciseId) return;
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const validateAnswer = (exerciseId: string) => {
    if (!exerciseId) return;
    const exercise = relativeExercises.find(ex => ex.id === exerciseId);
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

    relativeExercises.forEach(exercise => {
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

  // Fonction helper pour générer les boutons d'action et le feedback
  const renderActionButtons = (exerciseId: string) => {
    if (!exerciseId) return null;
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
                    Bonne réponse : <strong>{relativeExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
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
    // Reset index when filters or type change, and ensure it's within bounds
    if (currentExerciseIndex >= filteredExercises.length && filteredExercises.length > 0) {
      setCurrentExerciseIndex(0);
    } else if (filteredExercises.length === 0) {
      setCurrentExerciseIndex(0);
    } else {
      setCurrentExerciseIndex(0); // Reset to first exercise when filters change
    }
  }, [selectedCategory, selectedLevel, selectedExerciseType, filteredExercises.length, currentExerciseIndex]);

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
            <Link to="/formation/allemand-relative" className="hover:text-gray-900 transition-colors">
              Proposition Relative
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
            <Link to="/formation/allemand-relative">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour aux propositions relatives
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices de Propositions Relatives
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur les propositions relatives allemandes avec ces exercices progressifs
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{relativeExercises.length} exercices</Badge>
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
                  <option value="Pronoms relatifs">Pronoms relatifs</option>
                  <option value="Cas dans la relative">Cas dans la relative</option>
                  <option value="Prépositions + relatifs">Prépositions + relatifs</option>
                  <option value="Relatives participiales">Relatives participiales</option>
                  <option value="Génitif relatif">Génitif relatif</option>
                  <option value="Remplacement de dont">Remplacement de dont</option>
                  <option value="Relatives sans antécédent">Relatives sans antécédent</option>
                  <option value="Ponctuation">Ponctuation</option>
                  <option value="Relatives avec wo-">Relatives avec wo-</option>
                  <option value="Accord du verbe">Accord du verbe</option>
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
        {filteredExercises.length > 0 && currentExercise && currentExercise.id && (
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
                            onChange={(e) => currentExercise && currentExercise.id && handleAnswerChange(currentExercise.id, e.target.value)}
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
                      onChange={(e) => currentExercise && currentExercise.id && handleAnswerChange(currentExercise.id, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800 placeholder-gray-500"
                      placeholder="Tapez votre réponse ici..."
                      disabled={examMode && examStarted}
                    />
                  </div>
                )}

                {currentExercise && currentExercise.id && renderActionButtons(currentExercise.id)}

                {/* Correction */}
                {currentExercise && currentExercise.id && showCorrections[currentExercise.id] && (
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
                onClick={() => filteredExercises.length > 0 && setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
                disabled={currentExerciseIndex === 0 || examStarted || filteredExercises.length === 0}
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
                      onClick={() => !examStarted && filteredExercises.length > 0 && setCurrentExerciseIndex(index)}
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
                onClick={() => filteredExercises.length > 0 && setCurrentExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
                disabled={currentExerciseIndex === filteredExercises.length - 1 || examStarted || filteredExercises.length === 0}
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les propositions relatives.'}
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

export default RelativeExercicesPage;
