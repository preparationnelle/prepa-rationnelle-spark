import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Calculator, TrendingUp, BarChart3, Home, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
const FormationPage = () => {
  const pythonModules = [
    {
      id: 0,
      title: "Module 0 - Fondamentaux",
      subtitle: "Les Fondamentaux",
      description: "Variables, types, opérateurs, fonctions et structures de contrôle. Les bases essentielles pour débuter en Python.",
      icon: Code,
      courseLink: "/formation/python-fondamentaux",
      exercisesLink: "/formation/python-fondamentaux-exercices",
      detailsLink: "/formation/python-fondamentaux-details",
      features: [
        "✓ Types fondamentaux Python",
        "✓ Structures de contrôle",
        "✓ Fonctions et modules",
        "✓ Exercices pratiques"
      ]
    },
    {
      id: 1,
      title: "Module 1 - Matrices",
      subtitle: "Les Matrices NumPy",
      description: "Introduction à NumPy pour le calcul scientifique et les opérations matricielles. Création, manipulation et analyse de matrices.",
      icon: Calculator,
      courseLink: "/formation/python-matrices",
      exercisesLink: "/formation/python-matrices-exercices",
      detailsLink: "/formation/python-matrices-details",
      features: [
        "✓ Création de matrices",
        "✓ Opérations matricielles",
        "✓ Indexation avancée",
        "✓ Applications pratiques"
      ]
    },
    {
      id: 2,
      title: "Module 2 - Analyse",
      subtitle: "Analyse Numérique",
      description: "Méthodes d'analyse numérique : calcul de sommes et produits, étude des suites, et approximation par dichotomie.",
      icon: TrendingUp,
      courseLink: "/formation/python-analyse",
      exercisesLink: "/formation/python-analyse-exercices",
      detailsLink: "/formation/python-analyse-details",
      features: [
        "✓ Suites et récurrence",
        "✓ Méthodes itératives",
        "✓ Approximation numérique",
        "✓ Visualisation des données"
      ]
    },
    {
      id: 3,
      title: "Module 3 - Probabilités",
      subtitle: "Probabilités & Simulation",
      description: "Simulation et statistiques avec NumPy & Matplotlib. Lois de probabilité, méthode de Monte-Carlo et visualisations.",
      icon: BarChart3,
      courseLink: "/formation/python-probabilites",
      exercisesLink: "/formation/python-probabilites-exercices",
      detailsLink: "/formation/python-probabilites-details",
      features: [
        "✓ Simulation Monte-Carlo",
        "✓ Lois de probabilité",
        "✓ Processus stochastiques",
        "✓ Visualisations statistiques"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python</span>
          </div>
        </div>
      </nav>

      <div className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Formation <span className="text-gray-700">Python ECG</span>
            </h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {pythonModules.map((module) => (
                <Card key={module.id} className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <module.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <CardTitle className="text-xl hover:text-gray-600 transition-colors">
                        {module.subtitle}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {module.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {module.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600">{feature}</div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Link to={module.courseLink} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full border-gray-200 text-gray-600 hover:bg-gray-50">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Voir le cours
                          </Button>
                        </Link>
                        <Link to={module.exercisesLink} className="flex-1">
                          <Button size="default" className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold">
                            <Calculator className="h-4 w-4 mr-2" />
                            Exercices
                          </Button>
                        </Link>
                      </div>
                      <Link to={`${module.exercisesLink}?quiz=true`} className="block">
                        <Button variant="outline" size="sm" className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 text-sm">
                          <HelpCircle className="h-3 w-3 mr-2" />
                          Quiz 20 questions
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;