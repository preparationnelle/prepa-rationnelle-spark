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
  Target,
  Code,
  Target as TargetIcon,
  Lightbulb,
  CheckCircle,
  Eye,
  FileText,
  MessageSquare,
  Users,
  Zap,
  Table,
  BookOpen as BookOpenIcon,
  Brain,
  Languages,
  Puzzle,
  MapPin,
  Clock,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';
import PrepositionSectionComponent from '@/components/grammar/PrepositionSection';
import ConjugationTable from '@/components/grammar/ConjugationTable';
import { 
  prepositionSections, 
  prepositionExercises, 
  prepositionTables 
} from '@/data/spanishPrepositionsData';

const PrepositionsPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            <span className="text-gray-900 font-bold">Prépositions et Locutions</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
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
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <MapPin className="h-9 w-9" />
            </div>
            Prépositions et Locutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Module 4 : Emploi précis des prépositions et locutions prépositionnelles
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Tous niveaux</Badge>
            <Badge variant="outline">1-2 heures</Badge>
            <Badge className="bg-blue-600">Module essentiel</Badge>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <Brain className="h-6 w-6" />
              Comment utiliser ce module
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpenIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">1. Étudiez la théorie</h3>
                <p className="text-sm">Lisez les règles et exemples de chaque section</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Table className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">2. Consultez les tableaux</h3>
                <p className="text-sm">Mémorisez les usages et contractions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">3. Pratiquez les exercices</h3>
                <p className="text-sm">Appliquez vos connaissances avec les exercices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tableaux de référence */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Table className="h-8 w-8 text-blue-600" />
            Tableaux de Référence
          </h2>
          
          <div className="grid gap-6">
            <ConjugationTable 
              title={prepositionTables.prepositionsBase.title}
              headers={prepositionTables.prepositionsBase.headers}
              rows={prepositionTables.prepositionsBase.rows}
            />
            
            <ConjugationTable 
              title={prepositionTables.contractions.title}
              headers={prepositionTables.contractions.headers}
              rows={prepositionTables.contractions.rows}
            />
            
            <ConjugationTable 
              title={prepositionTables.locutionsFrequentes.title}
              headers={prepositionTables.locutionsFrequentes.headers}
              rows={prepositionTables.locutionsFrequentes.rows}
            />
          </div>
        </div>

        {/* Sections théoriques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-8 w-8 text-blue-600" />
            Théorie et Règles
          </h2>
          
          <div className="space-y-6">
            {prepositionSections.map((section) => (
              <PrepositionSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TargetIcon className="h-8 w-8 text-blue-600" />
            Exercices Pratiques
          </h2>
          
          <div className="space-y-6">
            {prepositionExercises.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
                    <FileText className="h-5 w-5" />
                    {exercise.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-blue-600">
                      {exercise.level}
                    </Badge>
                    <Badge variant="secondary">
                      {exercise.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Instruction */}
                  <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📝 Instruction :</h4>
                    <p className="text-lg text-gray-800">{exercise.instruction}</p>
                  </div>

                  {/* Question */}
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">🎯 Question :</h4>
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

        {/* Conseils méthodologiques */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <Zap className="h-6 w-6" />
              Conseils pour maîtriser les Prépositions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">🎯 Stratégie d'apprentissage :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Mémorisez par catégories (lieu, temps, cause)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Comparez au français pour identifier les différences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Pratiquez avec des contextes variés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Mémorisez les expressions figées</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">📚 Points de grammaire essentiels :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Distinction a/en pour lieu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Contractions al/del obligatoires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Régimes verbaux spécifiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Expressions idiomatiques fixes</span>
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

export default PrepositionsPage; 