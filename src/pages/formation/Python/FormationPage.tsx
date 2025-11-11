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
      description: "Bases essentielles : variables, types, opérateurs, fonctions et structures de contrôle.",
      icon: Code,
      courseLink: "/formation/python-fondamentaux",
      exercisesLink: "/formation/python-fondamentaux-exercices",
      detailsLink: "/formation/python-fondamentaux-details",
      features: [
        "✓ Types Python",
        "✓ Structures de contrôle",
        "✓ Fonctions",
        "✓ Exercices pratiques"
      ]
    },
    {
      id: 1,
      title: "Module 1 - Matrices",
      subtitle: "Les Matrices NumPy",
      description: "Calcul scientifique avec NumPy : création, manipulation et analyse de matrices.",
      icon: Calculator,
      courseLink: "/formation/python-matrices",
      exercisesLink: "/formation/python-matrices-exercices",
      detailsLink: "/formation/python-matrices-details",
      features: [
        "✓ Création matrices",
        "✓ Opérations",
        "✓ Indexation",
        "✓ Applications"
      ]
    },
    {
      id: 2,
      title: "Module 2 - Analyse",
      subtitle: "Analyse Numérique",
      description: "Méthodes numériques : suites, approximation et visualisation des données.",
      icon: TrendingUp,
      courseLink: "/formation/python-analyse",
      exercisesLink: "/formation/python-analyse-exercices",
      detailsLink: "/formation/python-analyse-details",
      features: [
        "✓ Suites",
        "✓ Méthodes itératives",
        "✓ Approximation",
        "✓ Visualisation"
      ]
    },
    {
      id: 3,
      title: "Module 3 - Probabilités",
      subtitle: "Probabilités & Simulation",
      description: "Simulation Monte-Carlo et statistiques avec NumPy & Matplotlib.",
      icon: BarChart3,
      courseLink: "/formation/python-probabilites",
      exercisesLink: "/formation/python-probabilites-exercices",
      detailsLink: "/formation/python-probabilites-details",
      features: [
        "✓ Monte-Carlo",
        "✓ Lois probabilité",
        "✓ Processus",
        "✓ Visualisations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating bubbles - Design décoratif avec accent sky-blue */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-5 animate-pulse -z-10"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-sky-300 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-sky-100 rounded-full opacity-3 animate-pulse-slow -z-10"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-sky-200 rounded-full opacity-3 animate-pulse -z-10"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-sky-50 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-sky-200 rounded-full opacity-3 animate-pulse -z-10"></div>
      <div className="absolute -z-10 top-1/2 left-10 w-24 h-24 bg-sky-100 rounded-full opacity-5 animate-pulse-slow -z-10"></div>
      <div className="absolute -z-10 bottom-1/3 right-5 w-36 h-36 bg-sky-100 rounded-full opacity-3 animate-pulse -z-10"></div>

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
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                  Formation Python ECG
                </h1>
              </div>
            </div>
            <p className="text-center text-blue-600 mb-12 max-w-4xl mx-auto text-lg whitespace-nowrap">
              Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
            </p>

            {/* Modules Python - Style formation anglais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-16">
              {pythonModules.map((module) => (
                <Link
                  key={module.id}
                  to={module.courseLink}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[340px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <module.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-center text-blue-700 group-hover:text-orange-800 transition-colors">{module.subtitle}</h3>
                    <p className="text-sm text-blue-700 mb-8 text-center leading-relaxed font-medium">{module.description}</p>
                    <div className="space-y-2 text-sm mb-6 w-full">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                          <span className="mr-2 text-xs">✓</span>
                          <span className="font-medium">{feature.replace('✓ ', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Voir le cours
                    </Button>
                    <div className="flex gap-2">
                      <Link to={`${module.exercisesLink}?quiz=true`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-700 hover:bg-orange-100 hover:text-orange-800 hover:border-orange-400 transition-all duration-300">
                          <HelpCircle className="h-3 w-3 mr-1" />
                          Quiz
                        </Button>
                      </Link>
                      <Link to={module.exercisesLink} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-700 hover:bg-orange-100 hover:text-orange-800 hover:border-orange-400 transition-all duration-300">
                          <Calculator className="h-3 w-3 mr-1" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Section Outils Python - Flashcards et Référence */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Outils Python ECG
                </h2>
                <p className="text-blue-600 text-lg">
                  Accédez rapidement à vos outils d'apprentissage Python
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Flashcards Python */}
                <Link to="/python-flashcards" className="block h-full">
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl shadow-blue-200/60 hover:shadow-orange-200/50 transition-all duration-500 border-2 border-blue-300 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 relative overflow-hidden group cursor-pointer">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50/20 to-transparent group-hover:from-orange-100/30 group-hover:to-orange-50/20 opacity-100 transition-all duration-500 pointer-events-none"></div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <HelpCircle className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-blue-800 group-hover:text-orange-800 transition-colors">
                          Flashcards Python
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Maîtrisez les 54 commandes essentielles avec nos flashcards interactives.
                        Testez vos connaissances avec le système de révélation progressif.
                      </p>
                      <div className="space-y-3 mb-4">
                        <div className="text-sm text-blue-700 font-semibold">✓ 54 commandes au programme ECG</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Mode plein écran disponible</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Navigation clavier complète</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Mélange aléatoire possible</div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-orange-600 text-white font-bold">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Lancer les flashcards
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                {/* Référence Python */}
                <Link to="/python-reference" className="block h-full">
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl shadow-blue-200/60 hover:shadow-orange-200/50 transition-all duration-500 border-2 border-blue-300 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 relative overflow-hidden group cursor-pointer">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50/20 to-transparent group-hover:from-orange-100/30 group-hover:to-orange-50/20 opacity-100 transition-all duration-500 pointer-events-none"></div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-blue-800 group-hover:text-orange-800 transition-colors">
                          Référence Python
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Liste complète et organisée de toutes les commandes Python ECG.
                        Recherche rapide et copie en un clic.
                      </p>
                      <div className="space-y-3 mb-4">
                        <div className="text-sm text-blue-700 font-semibold">✓ 9 catégories organisées</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Recherche en temps réel</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Copie en un clic</div>
                        <div className="text-sm text-blue-700 font-semibold">✓ Toutes les 54 commandes</div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-orange-600 text-white font-bold">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Consulter la référence
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;