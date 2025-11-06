import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award, Code2, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const OteriaHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">OTERIA Cyber School</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Code2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-teal-900">OTERIA Cyber School</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Formation intensive en mathématiques, logique et programmation pour l'informatique et la cybersécurité
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2 text-teal-600 border-teal-200 bg-teal-50">
              <Shield className="h-4 w-4 mr-2" />
              Cybersécurité
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-teal-600 border-teal-200 bg-teal-50">
              <Code2 className="h-4 w-4 mr-2" />
              Programmation
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-teal-600 border-teal-200 bg-teal-50">
              <Brain className="h-4 w-4 mr-2" />
              Algorithmique
            </Badge>
          </div>
        </div>

        {/* Programmes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bachelor 1 */}
          <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-teal-900 mb-2">
                Bachelor 1
              </CardTitle>
              <Badge variant="outline" className="text-teal-600 border-teal-300 bg-teal-50">
                Niveau Fondamental
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Initiation aux bases des mathématiques, logique et programmation Python.
                Programme structuré en 14 séances intensives couvrant les concepts fondamentaux
                nécessaires à l'informatique et la cybersécurité.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <Binary className="h-4 w-4" />
                  <span>Logique</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <Code2 className="h-4 w-4" />
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <BarChart3 className="h-4 w-4" />
                  <span>Mathématiques</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <Network className="h-4 w-4" />
                  <span>Probabilités</span>
                </div>
              </div>
              <Link to="/articles/oteria-cyber-school/bachelor-1">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder au Programme Bachelor 1
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Bachelor 2 */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-blue-900 mb-2">
                Bachelor 2
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">
                Niveau Avancé
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Approfondissement des concepts avec des notions mathématiques avancées,
                algorithmes complexes et applications pratiques en cybersécurité.
                Programme intensif pour consolider les bases et explorer des sujets avancés.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Lock className="h-4 w-4" />
                  <span>Cryptographie</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Database className="h-4 w-4" />
                  <span>Algorithmes avancés</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Shield className="h-4 w-4" />
                  <span>Cybersécurité</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Zap className="h-4 w-4" />
                  <span>Optimisation</span>
                </div>
              </div>
              <Link to="/articles/oteria-cyber-school/bachelor-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder au Programme Bachelor 2
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Objectifs de formation */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 mb-12 border border-teal-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Objectifs de Formation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Maîtrise des Concepts</h3>
              <p className="text-sm text-gray-700">
                Acquérir une compréhension profonde des mathématiques et de la logique nécessaires à l'informatique moderne.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Compétences Techniques</h3>
              <p className="text-sm text-gray-700">
                Développer des compétences pratiques en programmation et algorithmique pour résoudre des problèmes complexes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Préparation Professionnelle</h3>
              <p className="text-sm text-gray-700">
                Se préparer aux défis de la cybersécurité et du développement informatique de haut niveau.
              </p>
            </div>
          </div>
        </div>

        {/* Méthodologie */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Méthodologie Pédagogique</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cours Théoriques</h3>
              <p className="text-sm text-gray-600">Apprentissage structuré des concepts fondamentaux</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Exercices Pratiques</h3>
              <p className="text-sm text-gray-600">Mise en application immédiate des connaissances</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flashcards</h3>
              <p className="text-sm text-gray-600">Révision interactive et mémorisation efficace</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Évaluations</h3>
              <p className="text-sm text-gray-600">QCM et tests pour valider les acquis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaHomepage;
