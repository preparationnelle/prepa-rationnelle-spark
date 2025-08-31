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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating bubbles - Design décoratif comme la landing page */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-5 animate-pulse -z-10"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-3 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-3 animate-pulse -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-3 animate-pulse -z-10"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-blue-50 rounded-full opacity-3 animate-pulse -z-10"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation <span className="text-orange-600">Python</span></span>
          </div>
        </div>
      </nav>

      <div className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Formation <span className="text-orange-600">Python</span> <span className="text-gray-700">ECG</span>
            </h1>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg whitespace-nowrap">
              Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {pythonModules.map((module) => (
                <Link key={module.id} to={module.courseLink} className="block h-full">
                  <Card className="h-full bg-white shadow-xl shadow-blue-100/50 hover:shadow-orange-100/50 transition-all duration-500 border-2 border-blue-200 hover:border-orange-200 bg-blue-50/30 hover:bg-orange-50/30 relative overflow-hidden group cursor-pointer">
                    {/* Effet de surbrillance bleu → orange au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent group-hover:from-orange-50/20 group-hover:to-orange-100/10 opacity-100 transition-all duration-500 pointer-events-none"></div>
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
                        <Link to={`${module.exercisesLink}?quiz=true`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full border-gray-200 text-gray-600 hover:bg-gray-50">
                            <HelpCircle className="h-3 w-3 mr-2" />
                            Quiz 20 questions
                          </Button>
                        </Link>
                      </div>
                      <Link to={module.exercisesLink} className="block">
                        <Button size="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                          <Calculator className="h-4 w-4 mr-2" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;