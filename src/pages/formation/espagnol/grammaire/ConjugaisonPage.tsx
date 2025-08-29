import React, { useState } from 'react';
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
  Users,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Table,
  BookOpen as BookOpenIcon,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import ConjugationSectionComponent from '@/components/grammar/ConjugationSection';
import ConjugationTable from '@/components/grammar/ConjugationTable';
import { 
  conjugationSections, 
  conjugationExercises, 
  conjugationTables 
} from '@/data/spanishConjugationData';

const ConjugaisonPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const goToPreviousExercise = () => {
    setCurrentExerciseIndex(prev => Math.max(0, prev - 1));
  };

  const goToNextExercise = () => {
    setCurrentExerciseIndex(prev => Math.min(conjugationExercises.length - 1, prev + 1));
  };

  const currentExercise = conjugationExercises[currentExerciseIndex];

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
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Conjugaison</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Clock className="h-9 w-9" />
            </div>
            Conjugaison et Temps Verbaux
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les structures grammaticales complexes pour exceller aux épreuves d'espagnol ECG
          </p>
        </div>



        {/* Tableaux de conjugaison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Table className="h-6 w-6 text-orange-600" />
            Tableaux
          </h2>
          
          <div className="grid gap-6">
            <ConjugationTable 
              title={conjugationTables.presentIndicative.title}
              headers={conjugationTables.presentIndicative.headers}
              rows={conjugationTables.presentIndicative.rows}
            />
            
            <ConjugationTable 
              title={conjugationTables.subjunctivePresent.title}
              headers={conjugationTables.subjunctivePresent.headers}
              rows={conjugationTables.subjunctivePresent.rows}
            />
            
            <ConjugationTable 
              title={conjugationTables.timeSequence.title}
              headers={conjugationTables.timeSequence.headers}
              rows={conjugationTables.timeSequence.rows}
            />
          </div>
        </div>

        {/* Sections théoriques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-6 w-6 text-orange-600" />
            Théorie
          </h2>
          
          <div className="space-y-6">
            {conjugationSections.map((section) => (
              <ConjugationSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="h-6 w-6 text-orange-600" />
            Exercices
          </h2>

          {/* Navigateur d'exercices */}
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                    <FileText className="h-5 w-5 text-orange-600" />
                    {currentExercise.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-orange-600">
                      {currentExercise.level}
                    </Badge>
                    <Badge variant="secondary">
                      {currentExercise.type}
                    </Badge>
                  </div>
                </div>

                {/* Indicateur de progression */}
                <div className="text-sm text-gray-600">
                  Exercice {currentExerciseIndex + 1} sur {conjugationExercises.length}
                </div>
              </div>

              {/* Boutons de navigation */}
              <div className="flex items-center justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={goToPreviousExercise}
                  disabled={currentExerciseIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Précédent
                </Button>

                <div className="flex space-x-1">
                  {conjugationExercises.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExerciseIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentExerciseIndex
                          ? 'bg-orange-600'
                          : 'bg-orange-200 hover:bg-orange-300'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={goToNextExercise}
                  disabled={currentExerciseIndex === conjugationExercises.length - 1}
                  className="flex items-center gap-2"
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Instruction */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Instruction :</h4>
                <p className="text-gray-800">{currentExercise.instruction}</p>
              </div>

              {/* Question */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Question :</h4>
                <p className="text-gray-800 font-mono">{currentExercise.content.question}</p>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => toggleHints(currentExercise.id)}
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {showHints[currentExercise.id] ? 'Masquer les indices' : 'Voir les indices'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toggleCorrections(currentExercise.id)}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  {showCorrections[currentExercise.id] ? 'Masquer la correction' : 'Voir la correction'}
                </Button>
              </div>

              {/* Indices */}
              {showHints[currentExercise.id] && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-blue-600" />
                    Indices et règles :
                  </h4>
                  <ul className="space-y-2">
                    {currentExercise.content.hints.map((hint, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-800">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Correction */}
              {showCorrections[currentExercise.id] && (
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Correction et explication :
                  </h4>
                  <p className="text-green-800 font-medium mb-2">{currentExercise.content.correction}</p>
                  <p className="text-sm text-green-700">{currentExercise.content.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bouton vers les exercices */}
        <Card className="mb-8 border border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-gray-900">
              <Target className="h-6 w-6 text-orange-600" />
              Prêt à tester vos connaissances ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 mb-6">
              Maintenant que vous avez étudié la théorie, mettez vos connaissances en pratique avec nos exercices interactifs !
            </p>
            <Link to="/formation/espagnol/grammaire/conjugaison/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Target className="h-5 w-5 mr-2" />
                Commencer les exercices
              </Button>
            </Link>
          </CardContent>
        </Card>


      </div>
    </div>
  );
};

export default ConjugaisonPage; 