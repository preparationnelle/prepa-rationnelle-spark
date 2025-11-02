import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  Target,
  Calendar,
  CheckCircle,
  Clock,
  Brain,
  Trophy,
  Star,
  BarChart3
} from 'lucide-react';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { comparativesSuperlatifsExercises, getComparativesSuperlatifsExercisesByType } from '@/data/englishComparativesSuperlatifsExercisesData';

// Convert comparatives/superlatifs exercises to MathQuiz format
const convertToMathQuizFormat = (exercises: any[]) => {
  return exercises.map(exercise => ({
    id: parseInt(exercise.id.split('_')[2]), // Extract number from id
    question: exercise.question,
    options: exercise.options || [],
    correctAnswer: exercise.options ? exercise.options.findIndex((option: string) => option === exercise.correctAnswer) : 0,
    explanation: exercise.explanation,
    latex: undefined
  }));
};

const ComparatifsSuperlatifsExercicesPage = () => {
  // Get QCM exercises only
  const qcmExercises = getComparativesSuperlatifsExercisesByType('qcm');
  const quizQuestions = convertToMathQuizFormat(qcmExercises);

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-900 transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire/comparatifs" className="hover:text-gray-900 transition-colors">
              Comparatifs & Superlatifs
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Target className="h-9 w-9" />
            </div>
            Exercices QCM : Comparatifs et Superlatifs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testez vos connaissances sur la formation et l'usage des comparatifs (plus...que) et superlatifs (le/la/les plus...), y compris les structures d'égalité et les irréguliers.
          </p>
        </div>

        {/* Informations sur le quiz */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Brain className="h-6 w-6" />
              Quiz - Comparatifs et Superlatifs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-orange-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">Questions</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">{quizQuestions.length}</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">Temps estimé</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">15-20 min</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">Niveau</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">Débutant à Avancé</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">Points</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">Max {quizQuestions.length}</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Ce que vous allez pratiquer :
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-orange-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Formation des comparatifs courts (-er)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Formation des comparatifs longs (more + adj)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Formation des superlatifs courts (the + -est)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Formation des superlatifs longs (the most + adj)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Adjectifs irréguliers (good/better/best)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Structures d'égalité (as...as)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Intensificateurs (much, far, a bit)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Structures avancées (the more...the more)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Component */}
        <MathQuiz
          title="Quiz QCM - Comparatifs et Superlatifs"
          questions={quizQuestions}
          chapterNumber={10}
          chapterTitle="Comparatifs et Superlatifs"
        />

        {/* Section révision rapide */}
        <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <BookOpen className="h-6 w-6" />
              Révision rapide avant de commencer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Règles de formation</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>Courts (1 syllabe)</strong> : tall → taller → the tallest</li>
                  <li><strong>Longs (≥2 syllabes)</strong> : more interesting → the most interesting</li>
                  <li><strong>Irréguliers</strong> : good → better → the best</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Structures importantes</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>Égalité</strong> : as tall as</li>
                  <li><strong>Infériorité</strong> : less interesting than</li>
                  <li><strong>Intensificateurs</strong> : much better, by far the best</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boutons de navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link to="/formation/anglais/grammaire/comparatifs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à la fiche de cours
            </Button>
          </Link>
          <Link to="/formation/anglais/grammaire">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Autres sujets de grammaire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparatifsSuperlatifsExercicesPage;
