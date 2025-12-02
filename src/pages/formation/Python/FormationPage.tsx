import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Calculator, TrendingUp, BarChart3, Home, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';

const FormationPage = () => {
  const pythonModules = [
    {
      id: 0,
      title: "Les Fondamentaux",
      description: "Bases essentielles : variables, types, opérateurs, fonctions et structures de contrôle.",
      icon: Code,
      courseLink: "/formation/python-fondamentaux",
      exercisesLink: "/formation/python-fondamentaux-exercices",
    },
    {
      id: 1,
      title: "Les Matrices NumPy",
      description: "Calcul scientifique avec NumPy : création, manipulation et analyse de matrices.",
      icon: Calculator,
      courseLink: "/formation/python-matrices",
      exercisesLink: "/formation/python-matrices-exercices",
    },
    {
      id: 2,
      title: "Analyse Numérique",
      description: "Méthodes numériques : suites, approximation et visualisation des données.",
      icon: TrendingUp,
      courseLink: "/formation/python-analyse",
      exercisesLink: "/formation/python-analyse-exercices",
    },
    {
      id: 3,
      title: "Probabilités & Simulation",
      description: "Simulation Monte-Carlo et statistiques avec NumPy & Matplotlib.",
      icon: BarChart3,
      courseLink: "/formation/python-probabilites",
      exercisesLink: "/formation/python-probabilites-exercices",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
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

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Formation Python ECG
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé
          </p>
        </div>

        {/* Modules Python - Design System */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {pythonModules.map((module, index) => (
              <Link key={module.id} to={module.courseLink} className="block">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                      <span className="font-bold text-blue-700 text-lg">{index}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Étudier ce module
                        </Button>
                        <Link to={`${module.exercisesLink}?quiz=true`}>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Quiz
                          </Button>
                        </Link>
                        <Link to={module.exercisesLink}>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                            <Calculator className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section Outils Python */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outils Python ECG
            </h2>
            <p className="text-xl text-gray-600">
              Accédez rapidement à vos outils d'apprentissage Python
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Flashcards Python */}
            <Link to="/python-flashcards" className="block h-full">
              <Card className="h-full bg-white shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                      <HelpCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Flashcards Python
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez les 54 commandes essentielles avec nos flashcards interactives.
                    Testez vos connaissances avec le système de révélation progressif.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div>✓ 54 commandes au programme ECG</div>
                    <div>✓ Mode plein écran disponible</div>
                    <div>✓ Navigation clavier complète</div>
                    <div>✓ Mélange aléatoire possible</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Lancer les flashcards
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Référence Python */}
            <Link to="/python-reference" className="block h-full">
              <Card className="h-full bg-white shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Référence Python
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Liste complète et organisée de toutes les commandes Python ECG.
                    Recherche rapide et copie en un clic.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div>✓ 9 catégories organisées</div>
                    <div>✓ Recherche en temps réel</div>
                    <div>✓ Copie en un clic</div>
                    <div>✓ Toutes les 54 commandes</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Consulter la référence
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Section Pourquoi Python */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Link to="/python-article" className="block">
            <Card className="bg-white shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Pourquoi travailler Python en prépa ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Découvrez pourquoi Python est essentiel pour réussir les concours et pourquoi notre formation est votre meilleure option.
                </p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div>✓ Le vrai poids de Python aux concours</div>
                  <div>✓ Pourquoi la plupart passent à côté</div>
                  <div>✓ Ce qui fait la différence de notre formation</div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                  <BookOpen className="h-4 w-4 mr-2" />
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;