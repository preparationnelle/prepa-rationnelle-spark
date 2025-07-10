import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Calculator, TrendingUp, BarChart3, Play, BookOpen, Lock } from 'lucide-react';
import { usePythonModuleAccess } from '@/hooks/usePythonModuleAccess';
import { PythonRestrictedAccessModal } from '@/components/python/PythonRestrictedAccessModal';

const FormationPage = () => {
  const { 
    checkModuleAccess, 
    showRestrictedModal, 
    currentModule, 
    handleModalClose,
    isRestrictedModule 
  } = usePythonModuleAccess();

  const handleModuleClick = (moduleId: number, moduleName: string, link: string) => {
    if (checkModuleAccess(moduleId, moduleName)) {
      window.location.href = link;
    }
  };

  const handleExerciseClick = (moduleId: number, moduleName: string, link: string) => {
    if (checkModuleAccess(moduleId, moduleName)) {
      window.location.href = link;
    }
  };
  const coursModules = [
    {
      id: 0,
      title: "Les Fondamentaux",
      description: "Variables, types, opérateurs, fonctions et structures de contrôle. Les bases essentielles pour débuter en Python.",
      topics: [
        "Types fondamentaux (int, float, bool, str)",
        "Opérateurs numériques", 
        "Fonctions et structures de contrôle",
        "Listes et boucles"
      ],
      link: "/formation/python-fondamentaux",
      icon: BookOpen,
      color: "bg-orange-500",
      available: true
    }
  ];

  const exerciseModules = [
    {
      id: 1,
      title: "Les Matrices NumPy",
      description: "Introduction à NumPy pour le calcul scientifique et les opérations matricielles. Création, manipulation et analyse de matrices.",
      topics: [
        "Création de matrices et vecteurs",
        "Opérations matricielles",
        "Fonctions d'analyse statistique",
        "Applications pratiques"
      ],
      link: "/formation/python-matrices",
      exerciseLink: "/formation/python-matrices-exercices",
      icon: Calculator,
      color: "bg-green-500",
      available: true
    },
    {
      id: 2,
      title: "Analyse",
      description: "Méthodes d'analyse numérique : calcul de sommes et produits, étude des suites, et approximation par dichotomie.",
      topics: [
        "Calcul de sommes et produits finis",
        "Suites définies par récurrence",
        "Méthode de dichotomie",
        "Visualisation avec Matplotlib"
      ],
      link: "/formation/python-analyse",
      exerciseLink: "/formation/python-analyse-exercices",
      icon: TrendingUp,
      color: "bg-blue-500",
      available: true
    },
    {
      id: 3,
      title: "Probabilités",
      description: "Simulation et statistiques avec NumPy & Matplotlib. Lois de probabilité, méthode de Monte-Carlo et visualisations.",
      topics: [
        "Génération aléatoire et lois discrètes",
        "Statistiques descriptives",
        "Méthode de Monte-Carlo",
        "Graphiques statistiques"
      ],
      link: "/formation/python-probabilites",
      exerciseLink: "/formation/python-probabilites-exercices",
      icon: BarChart3,
      color: "bg-purple-500",
      available: true
    }
  ];

  const pythonCommands = [
    // Imports
    "import numpy as np", "import matplotlib.pyplot as plt", "from numpy import *", "from matplotlib.pyplot import *",
    
    // Fonctions de base
    "len()", "range()", "print()", "input()", "type()", "abs()", "round()", "min()", "max()", "sum()",
    
    // Constantes et valeurs spéciales
    "np.pi", "np.e", "np.inf", "np.nan",
    
    // Création de vecteurs et matrices
    "np.array()", "np.zeros()", "np.ones()", "np.eye()", "np.diag()", "np.linspace()", "np.arange()",
    
    // Opérations matricielles
    "np.dot()", "np.transpose()", "np.linalg.inv()", "np.linalg.det()", "np.shape()", "np.size()",
    
    // Fonctions mathématiques
    "np.sqrt()", "np.exp()", "np.log()", "np.sin()", "np.cos()", "np.tan()",
    
    // Statistiques et aléatoire
    "np.mean()", "np.std()", "np.var()", "np.random.rand()", "np.random.randint()", "np.random.choice()",
    
    // Graphiques
    "plt.plot()", "plt.show()", "plt.xlabel()", "plt.ylabel()", "plt.title()", "plt.legend()", "plt.grid()"
  ];

  return (
    <>
      <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-blue-600 text-white">
            <Code className="h-8 w-8" />
          </div>
          Formation Python ECG
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formation complète en Python pour les concours des Grandes Écoles de Commerce
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Débutant à avancé</Badge>
          <Badge variant="outline">10-12 heures</Badge>
          <Badge className="bg-blue-600">Complet</Badge>
        </div>
      </div>

      {/* Section Cours */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Cours
        </h2>
        <div className="grid gap-6">
          {coursModules.map((module) => (
            <Card key={module.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Module {module.id}
                        <Badge className="bg-black text-white">Disponible</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-primary mt-1">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <Button 
                  className={`${module.color} hover:opacity-90 w-full`}
                  onClick={() => handleModuleClick(module.id, module.title, module.link)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Commencer le module
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section Exercices */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          Exercices
        </h2>
        <div className="grid gap-6">
          {exerciseModules.map((module) => (
            <Card key={module.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Module {module.id}
                        {isRestrictedModule(module.id) ? (
                          <Badge className="bg-orange-600 text-white flex items-center gap-1">
                            <Lock className="h-3 w-3" />
                            Accès restreint
                          </Badge>
                        ) : (
                          <Badge className="bg-green-600 text-white">Disponible</Badge>
                        )}
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-primary mt-1">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleModuleClick(module.id, module.title, module.link)}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Voir le cours
                  </Button>
                  <Button 
                    className={`${module.color} hover:opacity-90 flex-1`}
                    onClick={() => handleExerciseClick(module.id, module.title, module.exerciseLink)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Commencer les exercices
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section Flashcards */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-2xl text-purple-800">
                  🧠 Flashcards Python ECG
                </CardTitle>
                <p className="text-purple-600 mt-1">
                  Mémorisez facilement toutes les commandes essentielles
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">✨ Système de mémorisation intelligent</h4>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>• Répétition espacée pour mémorisation durable</li>
                  <li>• Suivi de progression personnalisé</li>
                  <li>• Questions adaptées à votre niveau</li>
                  <li>• Révisions optimisées selon vos lacunes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Contenu spécialisé ECG</h4>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>• 54 commandes du programme officiel</li>
                  <li>• Exemples concrets d'application</li>
                  <li>• Syntaxe et paramètres détaillés</li>
                  <li>• Cas d'usage typiques en concours</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link to="/python-flashcards">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Commencer les flashcards
                </Button>
              </Link>
              <Link to="/python-reference">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Code className="mr-2 h-5 w-5" />
                  Voir toutes les commandes
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Liste des commandes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          Les 54 commandes Python ECG à connaître
        </h2>
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              📋 Référence complète du programme officiel
            </CardTitle>
            <p className="text-blue-600">
              Toutes les commandes essentielles organisées par catégorie pour une révision efficace
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pythonCommands.map((command, index) => (
                  <div 
                    key={index}
                    className="bg-white p-3 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors"
                  >
                    <code className="text-sm font-mono text-blue-800 bg-blue-50 px-2 py-1 rounded">
                      {command}
                    </code>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/python-reference">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Code className="mr-2 h-5 w-5" />
                  Voir la référence détaillée avec exemples
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>

      {showRestrictedModal && currentModule && (
        <PythonRestrictedAccessModal
          isOpen={showRestrictedModal}
          onClose={handleModalClose}
          moduleId={currentModule.id}
          moduleName={currentModule.name}
        />
      )}
    </>
  );
};

export default FormationPage;
