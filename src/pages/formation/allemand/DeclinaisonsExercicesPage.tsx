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

// Données d'exercices pour les déclinaisons
const declinaisonsExercises = [
  {
    id: 'decl-qcm-1',
    type: 'qcm',
    category: 'Articles définis',
    level: 'intermédiaire',
    question: 'Comment décline-t-on "der Mann" au génitif ?',
    options: [
      'a) des Mann',
      'b) des Mannes',
      'c) der Mann',
      'd) dem Mann'
    ],
    correctAnswer: 'b) des Mannes',
    explanation: 'Au génitif masculin, l\'article défini "der" devient "des" et le nom prend la terminaison -(e)s.'
  },
  {
    id: 'decl-qcm-2',
    type: 'qcm',
    category: 'Articles indéfinis',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "ein Kind" à l\'accusatif ?',
    options: [
      'a) ein Kind',
      'b) eines Kindes',
      'c) einem Kind',
      'd) ein Kind'
    ],
    correctAnswer: 'a) ein Kind',
    explanation: 'À l\'accusatif neutre, l\'article indéfini "ein" reste inchangé et le nom ne prend pas de terminaison.'
  },
  {
    id: 'decl-complet-1',
    type: 'complet',
    category: 'Prépositions + cas',
    level: 'avancé',
    question: 'Complétez : Ich wohne ___ (in + datif) ___ (die) Stadt.',
    correctAnswer: 'in der',
    explanation: 'La préposition "in" régit le datif : "in der Stadt" (dans la ville).'
  },
  {
    id: 'decl-qcm-3',
    type: 'qcm',
    category: 'Pronoms possessifs',
    level: 'avancé',
    question: 'Comment décline-t-on "mein Bruder" au génitif ?',
    options: [
      'a) meines Bruder',
      'b) meines Bruders',
      'c) meinem Bruder',
      'd) meinen Bruder'
    ],
    correctAnswer: 'b) meines Bruders',
    explanation: 'Au génitif masculin, le pronom possessif "mein" devient "meines" et le nom prend -(e)s.'
  },
  {
    id: 'decl-complet-2',
    type: 'complet',
    category: 'Adjectifs possessifs',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (mein) Auto.',
    correctAnswer: 'mein',
    explanation: 'Devant un nom masculin au nominatif, l\'adjectif possessif "mein" reste inchangé.'
  },
  {
    id: 'decl-qcm-4',
    type: 'qcm',
    category: 'Articles définis pluriel',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "die Bücher" au datif ?',
    options: [
      'a) die Bücher',
      'b) der Bücher',
      'c) den Büchern',
      'd) des Bücher'
    ],
    correctAnswer: 'c) den Büchern',
    explanation: 'Au datif pluriel, l\'article défini "die" devient "den" et les noms prennent la terminaison -n ou -en.'
  },
  {
    id: 'decl-complet-3',
    type: 'complet',
    category: 'Prépositions contractées',
    level: 'avancé',
    question: 'Complétez : Das Buch liegt ___ (auf + datif) ___ (der) Tisch.',
    correctAnswer: 'auf dem',
    explanation: 'La préposition "auf" contracte avec l\'article défini datif "dem" : "auf dem Tisch".'
  },
  {
    id: 'decl-qcm-5',
    type: 'qcm',
    category: 'Adjectifs démonstratifs',
    level: 'avancé',
    question: 'Comment décline-t-on "dieser Mann" à l\'accusatif ?',
    options: [
      'a) dieser Mann',
      'b) diesen Mann',
      'c) diesem Mann',
      'd) dieses Mannes'
    ],
    correctAnswer: 'b) diesen Mann',
    explanation: 'À l\'accusatif masculin, l\'adjectif démonstratif "dieser" devient "diesen".'
  },
  {
    id: 'decl-complet-4',
    type: 'complet',
    category: 'Génitif avec noms propres',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (Anna) Buch.',
    correctAnswer: 'Annas',
    explanation: 'Avec les noms propres féminins, le génitif s\'exprime par -s : "Annas Buch".'
  },
  // Nouveaux QCM (17 supplémentaires pour atteindre 20)
  {
    id: 'decl-qcm-7',
    type: 'qcm',
    category: 'Articles définis',
    level: 'intermédiaire',
    question: 'Comment décline-t-on "der Garten" au datif pluriel ?',
    options: [
      'a) den Gärten',
      'b) der Gärten',
      'c) die Gärten',
      'd) des Gärten'
    ],
    correctAnswer: 'a) den Gärten',
    explanation: 'Au datif pluriel, l\'article défini "die" devient "den" et le nom prend la terminaison -n.'
  },
  {
    id: 'decl-qcm-8',
    type: 'qcm',
    category: 'Articles indéfinis',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "ein Kind" au génitif ?',
    options: [
      'a) eines Kindes',
      'b) einem Kind',
      'c) ein Kind',
      'd) eines Kind'
    ],
    correctAnswer: 'a) eines Kindes',
    explanation: 'Au génitif neutre, l\'article indéfini "ein" devient "eines" et le nom prend -(e)s.'
  },
  {
    id: 'decl-qcm-9',
    type: 'qcm',
    category: 'Pronoms possessifs',
    level: 'avancé',
    question: 'Comment décline-t-on "unsere Freunde" au datif ?',
    options: [
      'a) unseren Freunden',
      'b) unsere Freunde',
      'c) unseren Freund',
      'd) unserer Freunde'
    ],
    correctAnswer: 'a) unseren Freunden',
    explanation: 'Au datif pluriel, le pronom possessif "unsere" devient "unseren" et le nom prend -n.'
  },
  {
    id: 'decl-qcm-10',
    type: 'qcm',
    category: 'Adjectifs possessifs',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte de "sein Haus" à l\'accusatif ?',
    options: [
      'a) sein Haus',
      'b) seinem Haus',
      'c) seines Hauses',
      'd) seines Haus'
    ],
    correctAnswer: 'a) sein Haus',
    explanation: 'À l\'accusatif masculin, l\'adjectif possessif "sein" reste inchangé.'
  },
  {
    id: 'decl-qcm-11',
    type: 'qcm',
    category: 'Articles définis pluriel',
    level: 'intermédiaire',
    question: 'Comment décline-t-on "die Tische" au génitif ?',
    options: [
      'a) der Tische',
      'b) den Tischen',
      'c) die Tische',
      'd) der Tische'
    ],
    correctAnswer: 'a) der Tische',
    explanation: 'Au génitif pluriel, l\'article défini "die" devient "der".'
  },
  {
    id: 'decl-qcm-12',
    type: 'qcm',
    category: 'Prépositions contractées',
    level: 'avancé',
    question: 'Quelle est la contraction correcte pour "zu dem" ?',
    options: [
      'a) zum',
      'b) zur',
      'c) zu dem',
      'd) zu der'
    ],
    correctAnswer: 'a) zum',
    explanation: '"Zu" + "dem" se contracte en "zum" (masculin/datif).'
  },
  {
    id: 'decl-qcm-13',
    type: 'qcm',
    category: 'Adjectifs démonstratifs',
    level: 'avancé',
    question: 'Comment décline-t-on "diese Frau" au génitif ?',
    options: [
      'a) dieser Frau',
      'b) dieser Frauen',
      'c) dieser Frau',
      'd) dieser Frauen'
    ],
    correctAnswer: 'a) dieser Frau',
    explanation: 'Au génitif féminin singulier, l\'adjectif démonstratif "diese" reste inchangé.'
  },
  {
    id: 'decl-qcm-14',
    type: 'qcm',
    category: 'Pronoms interrogatifs',
    level: 'intermédiaire',
    question: 'Quelle est la forme correcte pour "welche Kinder" au datif ?',
    options: [
      'a) welchen Kindern',
      'b) welcher Kinder',
      'c) welche Kinder',
      'd) welchen Kinder'
    ],
    correctAnswer: 'a) welchen Kindern',
    explanation: 'Au datif pluriel, le pronom interrogatif "welche" devient "welchen".'
  },
  {
    id: 'decl-qcm-15',
    type: 'qcm',
    category: 'Génitif avec noms propres',
    level: 'intermédiaire',
    question: 'Comment forme-t-on le génitif de "Berlin" ?',
    options: [
      'a) Berlins',
      'b) Berlin',
      'c) Berlins',
      'd) Berlins'
    ],
    correctAnswer: 'a) Berlins',
    explanation: 'Avec les noms propres neutres finissant par une consonne, on ajoute -s.'
  },
  {
    id: 'decl-qcm-16',
    type: 'qcm',
    category: 'Prépositions + cas',
    level: 'avancé',
    question: 'Quelle préposition nécessite le génitif dans "wegen des Wetters" ?',
    options: [
      'a) wegen (génitif)',
      'b) wegen (datif)',
      'c) wegen (accusatif)',
      'd) wegen (nominatif)'
    ],
    correctAnswer: 'a) wegen (génitif)',
    explanation: '"Wegen" est l\'une des prépositions qui régit le génitif.'
  },
  {
    id: 'decl-qcm-17',
    type: 'qcm',
    category: 'Articles définis',
    level: 'intermédiaire',
    question: 'Comment décline-t-on "das Auto" au datif ?',
    options: [
      'a) dem Auto',
      'b) des Autos',
      'c) das Auto',
      'd) den Autos'
    ],
    correctAnswer: 'a) dem Auto',
    explanation: 'Au datif neutre, l\'article défini "das" devient "dem".'
  },
  {
    id: 'decl-qcm-18',
    type: 'qcm',
    category: 'Pronoms possessifs',
    level: 'avancé',
    question: 'Quelle est la forme correcte pour "meine Schwester" au datif ?',
    options: [
      'a) meiner Schwester',
      'b) meine Schwester',
      'c) meiner Schwester',
      'd) meinen Schwester'
    ],
    correctAnswer: 'a) meiner Schwester',
    explanation: 'Au datif féminin singulier, le pronom possessif "meine" devient "meiner".'
  },
  {
    id: 'decl-qcm-19',
    type: 'qcm',
    category: 'Adjectifs démonstratifs',
    level: 'intermédiaire',
    question: 'Comment décline-t-on "dieses Buch" au datif ?',
    options: [
      'a) diesem Buch',
      'b) dieses Buches',
      'c) dieses Buch',
      'd) diesen Buch'
    ],
    correctAnswer: 'a) diesem Buch',
    explanation: 'Au datif neutre singulier, l\'adjectif démonstratif "dieses" devient "diesem".'
  },
  {
    id: 'decl-qcm-20',
    type: 'qcm',
    category: 'Articles indéfinis',
    level: 'avancé',
    question: 'Quelle est la forme correcte pour "eine Frau" au génitif ?',
    options: [
      'a) einer Frau',
      'b) eine Frau',
      'c) einer Frauen',
      'd) einen Frau'
    ],
    correctAnswer: 'a) einer Frau',
    explanation: 'Au génitif féminin, l\'article indéfini "eine" devient "einer".'
  },
  // Nouveaux exercices de mots à compléter (17 supplémentaires pour atteindre 20)
  {
    id: 'decl-complet-5',
    type: 'complet',
    category: 'Prépositions + cas',
    level: 'avancé',
    question: 'Complétez : Wir warten ___ (auf + accusatif) ___ (der) Zug.',
    correctAnswer: 'auf den',
    explanation: 'La préposition "auf" régit l\'accusatif : "auf den Zug".'
  },
  {
    id: 'decl-complet-6',
    type: 'complet',
    category: 'Adjectifs possessifs',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (mein) Bruder.',
    correctAnswer: 'mein',
    explanation: 'Devant un nom masculin au nominatif, l\'adjectif possessif "mein" reste inchangé.'
  },
  {
    id: 'decl-complet-7',
    type: 'complet',
    category: 'Articles définis pluriel',
    level: 'intermédiaire',
    question: 'Complétez : Die ___ (Buch) liegen auf dem Tisch.',
    correctAnswer: 'Bücher',
    explanation: 'Au nominatif pluriel, le nom "Buch" prend un Umlaut et la terminaison -er.'
  },
  {
    id: 'decl-complet-8',
    type: 'complet',
    category: 'Pronoms possessifs',
    level: 'avancé',
    question: 'Complétez : Ich gebe ___ (mein) Schwester das Geschenk.',
    correctAnswer: 'meiner',
    explanation: 'Au datif féminin singulier, le pronom possessif "mein" devient "meiner".'
  },
  {
    id: 'decl-complet-9',
    type: 'complet',
    category: 'Prépositions contractées',
    level: 'avancé',
    question: 'Complétez : Sie geht ___ (zu + datif) ___ (der) Schule.',
    correctAnswer: 'zur',
    explanation: 'La préposition "zu" contracte avec l\'article défini datif féminin "der" : "zur Schule".'
  },
  {
    id: 'decl-complet-10',
    type: 'complet',
    category: 'Adjectifs démonstratifs',
    level: 'intermédiaire',
    question: 'Complétez : ___ (dies) Haus ist sehr alt.',
    correctAnswer: 'Dieses',
    explanation: 'Devant un nom neutre au nominatif singulier, l\'adjectif démonstratif est "dieses".'
  },
  {
    id: 'decl-complet-11',
    type: 'complet',
    category: 'Pronoms interrogatifs',
    level: 'intermédiaire',
    question: 'Complétez : ___ (welch) Buch möchtest du lesen?',
    correctAnswer: 'Welches',
    explanation: 'Pour un nom neutre au nominatif, le pronom interrogatif est "welches".'
  },
  {
    id: 'decl-complet-12',
    type: 'complet',
    category: 'Génitif avec noms propres',
    level: 'avancé',
    question: 'Complétez : Das ist ___ (Karl) Auto.',
    correctAnswer: 'Karls',
    explanation: 'Avec les noms propres masculins, le génitif s\'exprime par -s : "Karls Auto".'
  },
  {
    id: 'decl-complet-13',
    type: 'complet',
    category: 'Articles définis',
    level: 'intermédiaire',
    question: 'Complétez : Der ___ (Mann) arbeitet im Büro.',
    correctAnswer: 'Mann',
    explanation: 'Au nominatif masculin singulier, l\'article défini est "der" et le nom reste inchangé.'
  },
  {
    id: 'decl-complet-14',
    type: 'complet',
    category: 'Prépositions + cas',
    level: 'avancé',
    question: 'Complétez : Das Bild hängt ___ (an + datif) ___ (die) Wand.',
    correctAnswer: 'an der',
    explanation: 'La préposition "an" régit le datif : "an der Wand".'
  },
  {
    id: 'decl-complet-15',
    type: 'complet',
    category: 'Adjectifs possessifs',
    level: 'intermédiaire',
    question: 'Complétez : Das sind ___ (unser) Kinder.',
    correctAnswer: 'unsere',
    explanation: 'Devant un nom pluriel au nominatif, l\'adjectif possessif "unser" reste inchangé.'
  },
  {
    id: 'decl-complet-16',
    type: 'complet',
    category: 'Articles indéfinis',
    level: 'avancé',
    question: 'Complétez : Sie hat ___ (ein) interessante Idee.',
    correctAnswer: 'eine',
    explanation: 'Devant un nom féminin au nominatif, l\'article indéfini est "eine".'
  },
  {
    id: 'decl-complet-17',
    type: 'complet',
    category: 'Pronoms possessifs',
    level: 'avancé',
    question: 'Complétez : Das Haus gehört ___ (mein) Eltern.',
    correctAnswer: 'meinen',
    explanation: 'Au datif pluriel, le pronom possessif "mein" devient "meinen".'
  },
  {
    id: 'decl-complet-18',
    type: 'complet',
    category: 'Adjectifs démonstratifs',
    level: 'intermédiaire',
    question: 'Complétez : ___ (dies) Frau ist meine Lehrerin.',
    correctAnswer: 'Diese',
    explanation: 'Devant un nom féminin au nominatif singulier, l\'adjectif démonstratif est "diese".'
  },
  {
    id: 'decl-complet-19',
    type: 'complet',
    category: 'Prépositions contractées',
    level: 'avancé',
    question: 'Complétez : Er geht ___ (in + accusatif) ___ (das) Kino.',
    correctAnswer: 'ins',
    explanation: 'La préposition "in" contracte avec l\'article défini accusatif neutre "das" : "ins Kino".'
  },
  {
    id: 'decl-complet-20',
    type: 'complet',
    category: 'Génitif avec noms propres',
    level: 'intermédiaire',
    question: 'Complétez : Das ist ___ (Maria) Zimmer.',
    correctAnswer: 'Marias',
    explanation: 'Avec les noms propres féminins, le génitif s\'exprime par -s : "Marias Zimmer".'
  }
];

const DeclinaisonsExercicesPage = () => {
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
  const [selectedExerciseType, setSelectedExerciseType] = useState<'qcm' | 'complet' | 'toutes'>('qcm');

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
  const filteredExercises = filterExercises(declinaisonsExercises);
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
    const exercise = declinaisonsExercises.find(ex => ex.id === exerciseId);
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

    declinaisonsExercises.forEach(exercise => {
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
                    Bonne réponse : <strong>{declinaisonsExercises.find(ex => ex.id === exerciseId)?.correctAnswer}</strong>
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
            <Link to="/formation/allemand-declinaisons" className="hover:text-gray-900 transition-colors">
              Déclinaisons
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
            <Link to="/formation/allemand-declinaisons">
              <Button variant="outline" className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Retour aux déclinaisons
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exercices de Déclinaisons
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances sur les déclinaisons allemandes avec ces exercices progressifs
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{declinaisonsExercises.length} exercices</Badge>
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
                  <option value="Articles définis">Articles définis</option>
                  <option value="Articles indéfinis">Articles indéfinis</option>
                  <option value="Prépositions + cas">Prépositions + cas</option>
                  <option value="Adjectifs possessifs">Adjectifs possessifs</option>
                  <option value="Pronoms possessifs">Pronoms possessifs</option>
                  <option value="Articles définis pluriel">Articles définis pluriel</option>
                  <option value="Prépositions contractées">Prépositions contractées</option>
                  <option value="Adjectifs démonstratifs">Adjectifs démonstratifs</option>
                  <option value="Génitif avec noms propres">Génitif avec noms propres</option>
                  <option value="Pronoms interrogatifs">Pronoms interrogatifs</option>
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
                    {examMode ? 'Félicitations ! Vous avez réussi l\'examen avec brio.' : 'Excellent ! Vous maîtrisez bien les déclinaisons allemandes.'}
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

export default DeclinaisonsExercicesPage;
