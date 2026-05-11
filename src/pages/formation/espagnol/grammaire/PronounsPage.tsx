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
  HelpCircle,
  Clock,
  ArrowRight as ArrowRightIcon,
  User,
  UserCheck,
  Heart,
  Shield,
  Award
} from 'lucide-react';
import PronounSectionComponent from '@/components/grammar/PronounSection';
import ConjugationTable from '@/components/grammar/ConjugationTable';
import { 
  pronounSections, 
  pronounExercises, 
  pronounTables 
} from '@/data/spanishPronounsData';

const PronounsPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="carnet-paper min-h-screen font-instrument text-carnet-ink">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-carnet-red transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <span className="text-carnet-ink font-semibold">Pronoms</span>
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
          
          <h1 className="text-4xl font-lora text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red text-carnet-paper">
              <User className="h-9 w-9" />
            </div>
            Pronoms
          </h1>
          <p className="text-xl text-carnet-ink-mute max-w-3xl mx-auto">
            Module 8 : Maîtriser les pronoms en espagnol : sujets, compléments, possessifs et réfléchis
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Intermédiaire</Badge>
            <Badge variant="outline">1-2 heures</Badge>
            <Badge className="bg-carnet-red">Module essentiel</Badge>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-8 border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
              <Brain className="h-6 w-6" />
              Comment utiliser ce module
            </CardTitle>
          </CardHeader>
          <CardContent className="text-carnet-red">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpenIcon className="h-8 w-8 text-carnet-red" />
                </div>
                <h3 className="font-semibold text-carnet-red-deep mb-2">1. Étudiez la théorie</h3>
                <p className="text-sm">Lisez les règles et exemples de chaque section</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Table className="h-8 w-8 text-carnet-red" />
                </div>
                <h3 className="font-semibold text-carnet-red-deep mb-2">2. Consultez les tableaux</h3>
                <p className="text-sm">Mémorisez les types de pronoms et leurs usages</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-carnet-red" />
                </div>
                <h3 className="font-semibold text-carnet-red-deep mb-2">3. Pratiquez les exercices</h3>
                <p className="text-sm">Appliquez vos connaissances avec les exercices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tableaux de référence */}
        <div className="mb-12">
          <h2 className="text-3xl font-lora text-carnet-ink mb-6 flex items-center gap-3">
            <Table className="h-8 w-8 text-carnet-red" />
            Tableaux de Référence
          </h2>
          
          <div className="grid gap-6">
            <ConjugationTable 
              title={pronounTables.pronomsSujets.title}
              headers={pronounTables.pronomsSujets.headers}
              rows={pronounTables.pronomsSujets.rows}
            />
            
            <ConjugationTable 
              title={pronounTables.pronomsComplements.title}
              headers={pronounTables.pronomsComplements.headers}
              rows={pronounTables.pronomsComplements.rows}
            />
            
            <ConjugationTable 
              title={pronounTables.placement.title}
              headers={pronounTables.placement.headers}
              rows={pronounTables.placement.rows}
            />
          </div>
        </div>

        {/* Sections théoriques */}
        <div className="mb-12">
          <h2 className="text-3xl font-lora text-carnet-ink mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-8 w-8 text-carnet-red" />
            Théorie et Règles
          </h2>
          
          <div className="space-y-6">
            {pronounSections.map((section) => (
              <PronounSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-3xl font-lora text-carnet-ink mb-6 flex items-center gap-3">
            <TargetIcon className="h-8 w-8 text-carnet-red" />
            Exercices Pratiques
          </h2>
          
          <div className="space-y-6">
            {pronounExercises.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-carnet-red-deep">
                    <FileText className="h-5 w-5" />
                    {exercise.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-carnet-red">
                      {exercise.level}
                    </Badge>
                    <Badge variant="secondary">
                      {exercise.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Instruction */}
                  <div className="bg-white/70 rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                    <h4 className="font-semibold text-carnet-red-deep mb-2">📝 Instruction :</h4>
                    <p className="text-lg text-carnet-ink">{exercise.instruction}</p>
                  </div>

                  {/* Question */}
                  <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                    <h4 className="font-semibold text-carnet-red-deep mb-2">Question :</h4>
                    <p className="text-lg text-carnet-ink font-mono">{exercise.content.question}</p>
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
                    <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
                      <h4 className="font-semibold text-carnet-red-deep mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ✅ Correction et explication :
                      </h4>
                      <p className="text-lg text-carnet-red-deep font-medium mb-2">{exercise.content.correction}</p>
                      <p className="text-sm text-carnet-ink-soft">{exercise.content.explanation}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conseils méthodologiques */}
        <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
              <Zap className="h-6 w-6" />
              Conseils pour maîtriser les Pronoms
            </CardTitle>
          </CardHeader>
          <CardContent className="text-carnet-red space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-carnet-red-deep mb-3">🎯 Stratégie d'apprentissage :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Commencez par les pronoms sujets et leurs conjugaisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Pratiquez la distinction COD/COI avec des exemples simples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Apprenez les règles de placement et d'enclise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Attention aux différences régionales (vosotros vs ustedes)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-carnet-red-deep mb-3">📚 Points de grammaire essentiels :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Vouvoiement vs tutoiement : usted/ustedes vs tú/vosotros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                                          <span>Ordre des pronoms : Réfléchi {'>'} COI {'>'} COD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Placement : avant verbe conjugué, enclise avec infinitif/gérondif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                    <span>Évitez leísmo, laísmo, loísmo en espagnol standard</span>
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

export default PronounsPage; 