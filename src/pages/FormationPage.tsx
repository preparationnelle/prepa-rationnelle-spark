
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Calculator, TrendingUp, BarChart3, Play, BookOpen } from 'lucide-react';

const FormationPage = () => {
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
      link: "/formation/python-fundamentals",
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

  return (
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
                <Link to={module.link}>
                  <Button className={`${module.color} hover:opacity-90 w-full`}>
                    <Play className="mr-2 h-4 w-4" />
                    Commencer le module
                  </Button>
                </Link>
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
                        <Badge className="bg-green-600 text-white">Disponible</Badge>
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
                  <Link to={module.link} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Voir le cours
                    </Button>
                  </Link>
                  <Link to={module.exerciseLink} className="flex-1">
                    <Button className={`${module.color} hover:opacity-90 w-full`}>
                      <Play className="mr-2 h-4 w-4" />
                      Commencer le module
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
