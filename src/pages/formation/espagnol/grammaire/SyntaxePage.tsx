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
import { syntaxExercises } from '@/data/spanishSyntaxExercisesData';

const SyntaxePage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
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
            <span className="text-gray-900 font-bold">Syntaxe et Structures Complexes</span>
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
              <BookOpen className="h-9 w-9" />
            </div>
            Syntaxe et Structures Complexes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structures syntaxiques sophistiquées pour enrichir l'expression écrite et orale
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Avancé</Badge>
            <Badge variant="outline">2-3 heures</Badge>
            <Badge className="bg-orange-600">Module essentiel</Badge>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
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
                <p className="text-sm">Mémorisez les structures et tournures idiomatiques</p>
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

        {/* Sections théoriques (Points essentiels) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-8 w-8 text-orange-600" />
            Points Essentiels
          </h2>
          
          <div className="space-y-6">
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-lg text-orange-800">
                  <li>Propositions relatives complexes</li>
                  <li>Discours rapporté</li>
                  <li>Expression de l'opinion</li>
                  <li>Structures emphatiques</li>
                  <li>Accords et désaccords</li>
                  <li>+5 autres points</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sections d'approfondissement */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-orange-600" />
            Approfondissements
          </h2>
          
          <div className="space-y-6">
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-lg text-orange-800">
                  <li>Relatifs : que, quien, cuyo, donde</li>
                  <li>Style direct → style indirect</li>
                  <li>Verbes d'opinion et subjonctif</li>
                  <li>Mise en relief : es que, lo que</li>
                  <li>Tournures idiomatiques courantes</li>
                  <li>+3 autres approfondissements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-orange-600" />
            Exercices Proposés
          </h2>
          
          <div className="space-y-6">
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-lg text-orange-800">
                  <li>Transformer en discours rapporté</li>
                  <li>Construire des phrases complexes</li>
                  <li>Utiliser les structures emphatiques</li>
                  <li>+2 autres exercices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bouton vers les exercices */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
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
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Target className="h-5 w-5 mr-2" />
                Commencer les exercices
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Conseils méthodologiques */}
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Zap className="h-6 w-6" />
              Conseils pour maîtriser la syntaxe et les structures complexes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-900 mb-3">🎯 Stratégie d'apprentissage :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Identifiez les types de propositions (relatives, complétives)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Maîtrisez la concordance des temps au subjonctif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Entraînez-vous au passage du style direct à indirect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Intégrez les tournures idiomatiques dans votre expression</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-900 mb-3">📚 Points de grammaire essentiels :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Usage des pronoms relatifs : que, quien, cuyo, donde</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Verbes d'opinion et le subjonctif/indicatif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Structures de mise en relief : es que, lo que</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Expressions figées et idiotismes courants</span>
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

export default SyntaxePage; 