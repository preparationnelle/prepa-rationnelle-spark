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
  BookOpen as BookOpenIcon
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

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
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
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la grammaire
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Clock className="h-9 w-9" />
            </div>
            Conjugaison et Temps Verbaux
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Module 1 : Maîtrisez les temps complexes : subjonctif, conditionnel, impératif et tous les temps de l'indicatif
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline">2-3 heures</Badge>
            <Badge className="bg-orange-600">Module essentiel</Badge>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Lightbulb className="h-6 w-6" />
              Comment utiliser ce module
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpenIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-orange-900 mb-2">1. Étudiez la théorie</h3>
                <p className="text-sm">Lisez les règles et exemples de chaque section</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Table className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-orange-900 mb-2">2. Consultez les tableaux</h3>
                <p className="text-sm">Mémorisez les terminaisons et conjugaisons</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-orange-900 mb-2">3. Pratiquez les exercices</h3>
                <p className="text-sm">Appliquez vos connaissances avec les exercices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tableaux de conjugaison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Table className="h-8 w-8 text-orange-600" />
            Tableaux de Conjugaison
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-8 w-8 text-orange-600" />
            Théorie et Règles
          </h2>
          
          <div className="space-y-6">
            {conjugationSections.map((section) => (
              <ConjugationSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-orange-600" />
            Exercices Pratiques
          </h2>
          
          <div className="space-y-6">
            {conjugationExercises.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
                    <FileText className="h-5 w-5" />
                    {exercise.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-orange-600">
                      {exercise.level}
                    </Badge>
                    <Badge variant="secondary">
                      {exercise.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Instruction */}
                  <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-2">📝 Instruction :</h4>
                    <p className="text-lg text-gray-800">{exercise.instruction}</p>
                  </div>

                  {/* Question */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">🎯 Question :</h4>
                    <p className="text-lg text-gray-800 font-mono">{exercise.content.question}</p>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => toggleHints(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      {showHints[exercise.id] ? 'Masquer les indices' : 'Voir les indices'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => toggleCorrections(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {showCorrections[exercise.id] ? 'Masquer la correction' : 'Voir la correction'}
                    </Button>
                  </div>

                  {/* Indices */}
                  {showHints[exercise.id] && (
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        💡 Indices et règles :
                      </h4>
                      <ul className="space-y-2">
                        {exercise.content.hints.map((hint, index) => (
                          <li key={index} className="flex items-start gap-2 text-yellow-800">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{hint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Correction */}
                  {showCorrections[exercise.id] && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ✅ Correction et explication :
                      </h4>
                      <p className="text-lg text-green-800 font-medium mb-2">{exercise.content.correction}</p>
                      <p className="text-sm text-green-700">{exercise.content.explanation}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bouton vers les exercices */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Prêt à tester vos connaissances ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-orange-700 mb-6">
              Maintenant que vous avez étudié la théorie, mettez vos connaissances en pratique avec nos exercices interactifs !
            </p>
            <Link to="/formation/espagnol/grammaire/conjugaison/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Target className="h-5 w-5 mr-2" />
                Commencer les exercices
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Conseils méthodologiques */}
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Zap className="h-6 w-6" />
              Conseils pour maîtriser la conjugaison
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-900 mb-3">🎯 Stratégie d'apprentissage :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Apprenez d'abord les terminaisons régulières</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Identifiez les verbes irréguliers courants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Pratiquez la concordance des temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Révisez régulièrement les exceptions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-900 mb-3">📚 Points de grammaire essentiels :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Subjonctif après les verbes d'opinion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Concordance des temps en hypothèse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Impératif avec pronoms enclitiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Verbes irréguliers avec diphtongue</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConjugaisonPage; 