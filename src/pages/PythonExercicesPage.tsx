import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, TrendingUp, BarChart3, Home, ChevronRight } from 'lucide-react';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { useProgress } from '@/context/ProgressContext';
const PythonExercicesPage: React.FC = () => {
  const {
    trackPageVisit
  } = useProgress();
  useEffect(() => {
    trackPageVisit('python-exercices');
  }, [trackPageVisit]);
  const exerciseModules = [{
    id: 0,
    title: "Module 0 : Fondamentaux",
    description: "Maîtrisez les bases essentielles de Python : variables, types de données, opérateurs et structures de contrôle.",
    icon: BookOpen,
    color: "orange",
    link: "/formation/python-fondamentaux-exercices",
    topics: ["Variables et types de données", "Opérateurs arithmétiques et logiques", "Structures conditionnelles (if, elif, else)", "Boucles (for, while)", "Fonctions de base"]
  }, {
    id: 1,
    title: "Module 1 : Matrices",
    description: "Apprenez à manipuler les matrices avec NumPy : création, indexation, opérations et applications pratiques.",
    icon: Calculator,
    color: "green",
    link: "/formation/python-matrices-exercices",
    topics: ["Création et manipulation de matrices", "Indexation et slicing", "Opérations matricielles", "Fonctions NumPy essentielles", "Applications pratiques"]
  }, {
    id: 2,
    title: "Module 2 : Analyse",
    description: "Explorez l'analyse de données avec Pandas : traitement, visualisation et statistiques descriptives.",
    icon: TrendingUp,
    color: "blue",
    link: "/formation/python-analyse-exercices",
    topics: ["DataFrames et Series", "Nettoyage de données", "Groupement et agrégation", "Visualisation avec Matplotlib", "Statistiques descriptives"]
  }, {
    id: 3,
    title: "Module 3 : Probabilités",
    description: "Découvrez les probabilités et statistiques avec Python : distributions, tests et simulations.",
    icon: BarChart3,
    color: "purple",
    link: "/formation/python-probabilites-exercices",
    topics: ["Distributions de probabilité", "Échantillonnage et simulation", "Tests statistiques", "Intervalles de confiance", "Applications ECG"]
  }];
  return <div className="min-h-screen bg-[#F8FAFF]">
      {/* Breadcrumb Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6B00] to-[#FF7A1C] bg-clip-text text-transparent">
            Exercices Python ECG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Renforcez vos compétences Python avec nos exercices pratiques
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Exercise Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {exerciseModules.map(module => {
          const IconComponent = module.icon;
          const colorClasses = {
            orange: "from-[#FF6B00]/10 to-[#FF7A1C]/10 border-[#FF7A1C] hover:border-[#FF6B00]",
            green: "from-green-100 to-green-50 border-green-200 hover:border-green-400",
            blue: "from-blue-100 to-blue-50 border-blue-200 hover:border-blue-400",
            purple: "from-purple-100 to-purple-50 border-purple-200 hover:border-purple-400"
          };
          return <Link key={module.id} to={module.link} className="block">
                <Card className={`bg-gradient-to-br ${colorClasses[module.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${module.color === 'orange' ? 'bg-[#FF7A1C]/10' : `bg-${module.color}-100`}` }>
                        <IconComponent className={`h-6 w-6 ${module.color === 'orange' ? 'text-[#FF6B00]' : `text-${module.color}-600`}` } />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-foreground">Au programme :</h4>
                        <ul className="space-y-1">
                          {module.topics.map((topic, index) => <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${module.color}-500`} />
                              {topic}
                            </li>)}
                        </ul>
                      </div>
                      <Button className={`w-full bg-${module.color}-600 hover:bg-${module.color}-700 pointer-events-none`}>
                        Accéder aux exercices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Besoin d'aide supplémentaire ?</h3>
              <p className="text-muted-foreground mb-4">
                Découvrez nos flashcards Python et notre référence complète des commandes essentielles.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline">
                  <Link to="/python-flashcards">
                    Flashcards Python
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/python-reference">
                    Référence Python
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default PythonExercicesPage;