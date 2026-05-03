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
    color: "gray",
    link: "/formation/python-fondamentaux-exercices",
    topics: ["Variables et types de données", "Opérateurs arithmétiques et logiques", "Structures conditionnelles (if, elif, else)", "Boucles (for, while)", "Fonctions de base"]
  }, {
    id: 1,
    title: "Module 1 : Matrices",
    description: "Apprenez à manipuler les matrices avec NumPy : création, indexation, opérations et applications pratiques.",
    icon: Calculator,
    color: "gray",
    link: "/formation/python-matrices-exercices",
    topics: ["Création et manipulation de matrices", "Indexation et slicing", "Opérations matricielles", "Fonctions NumPy essentielles", "Applications pratiques"]
  }, {
    id: 2,
    title: "Module 2 : Analyse",
    description: "Explorez l'analyse de données avec Pandas : traitement, visualisation et statistiques descriptives.",
    icon: TrendingUp,
    color: "gray",
    link: "/formation/python-analyse-exercices",
    topics: ["DataFrames et Series", "Nettoyage de données", "Groupement et agrégation", "Visualisation avec Matplotlib", "Statistiques descriptives"]
  }, {
    id: 3,
    title: "Module 3 : Probabilités",
    description: "Découvrez les probabilités et statistiques avec Python : distributions, tests et simulations.",
    icon: BarChart3,
    color: "gray",
    link: "/formation/python-probabilites-exercices",
    topics: ["Distributions de probabilité", "Échantillonnage et simulation", "Tests statistiques", "Intervalles de confiance", "Applications ECG"]
  }];
  return <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
    {/* Breadcrumb Navigation */}
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/60">
      <div className="h-[2px] w-full bg-pr-orange" />
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center text-[11px] uppercase tracking-wider text-pr-gray-mid">
          <Link to="/" className="flex items-center gap-1.5 hover:text-pr-orange-dark transition-colors">
            <Home className="h-3 w-3" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
          <Link to="/formations" className="hover:text-pr-orange-dark transition-colors">
            Toutes les formations
          </Link>
          <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
          <span className="text-pr-black font-semibold normal-case tracking-normal">
            Formation <span className="text-pr-orange">Python</span> ECG
          </span>
        </div>
      </div>
    </nav>

    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-pr-orange-pale border border-pr-orange-soft/60">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
            Exercices
          </span>
        </div>
        <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black tracking-tight leading-tight mb-4">
          Exercices <span className="text-pr-orange">Python</span> ECG
        </h1>
        <div className="flex justify-center mb-4">
          <div className="h-[2px] w-14 bg-pr-orange" />
        </div>
        <p className="text-lg text-pr-gray-dark/80">
          Renforcez vos compétences Python avec nos exercices pratiques
        </p>
      </div>

      {/* Navigation Tabs */}
      <PythonNavigationTabs className="mb-8" />

      {/* Exercise Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {exerciseModules.map(module => {
          const IconComponent = module.icon;
          return <Link key={module.id} to={module.link} className="block group">
            <Card className="relative bg-white border border-pr-gray-light hover:border-pr-orange-soft transition-all duration-300 hover:shadow-lg cursor-pointer rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pr-orange-pale border border-pr-orange-soft/40">
                    <IconComponent className="h-5 w-5 text-pr-orange-dark" />
                  </div>
                  <CardTitle className="font-dm-serif text-2xl text-pr-black group-hover:text-pr-orange-dark transition-colors">
                    {module.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-pr-gray-dark/80">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-3">Au programme</h4>
                    <ul className="space-y-1.5">
                      {module.topics.map((topic, index) => <li key={index} className="text-sm text-pr-gray-dark flex items-start gap-2">
                        <span className="text-pr-orange mt-0.5">→</span>
                        {topic}
                      </li>)}
                    </ul>
                  </div>
                  <Button className="w-full bg-pr-orange hover:bg-pr-orange-dark text-white rounded-xl shadow-sm">
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
        <Card className="relative max-w-2xl mx-auto bg-white border border-pr-gray-light rounded-2xl overflow-hidden">
          <div className="h-[2px] w-full bg-pr-orange" />
          <CardContent className="p-8">
            <h3 className="font-dm-serif text-2xl text-pr-black mb-2">
              Besoin d'aide supplémentaire ?
            </h3>
            <p className="text-pr-gray-dark/80 mb-5">
              Découvrez nos flashcards Python et notre référence complète des commandes essentielles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline" className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-xl">
                <Link to="/python-flashcards">Flashcards Python</Link>
              </Button>
              <Button asChild variant="outline" className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-xl">
                <Link to="/python-reference">Référence Python</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>;
};
export default PythonExercicesPage;