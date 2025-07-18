import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, BookOpen, Code, ListChecks, FileText, Brain, Target } from 'lucide-react';
import PythonFlashcardGenerator from '@/components/python/PythonFlashcardGenerator';

const tabs = [
  { label: "Méthodo / Conseil", icon: <BookOpen className="h-4 w-4" />, path: "/formation/methode" },
  { label: "Cours", icon: <BookOpen className="h-4 w-4" />, path: "/formation/cours" },
  { label: "Exercices", icon: <ListChecks className="h-4 w-4" />, path: "/formation/exercices" },
  { label: "Flashcards Python", icon: <Code className="h-4 w-4" />, path: "/formation/flashcards" },
  { label: "Référence Python", icon: <FileText className="h-4 w-4" />, path: "/formation/reference" },
];

const PythonFlashcardsPage = () => {
  const location = useLocation();

  // Breadcrumb
  const breadcrumb = [
    { label: 'Accueil', icon: <Home className="h-3 w-3" />, to: '/' },
    { label: 'Formation', icon: <BookOpen className="h-3 w-3" />, to: '/formation' },
    { label: 'Flashcards Python', icon: <Code className="h-3 w-3" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-6">
        <nav className="mb-4">
          <div className="flex items-center text-xs text-muted-foreground py-2">
            {breadcrumb.map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />}
                {item.to ? (
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 text-foreground font-medium">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Main container */}
      <div className="container mx-auto py-2 px-4">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Flashcards Python
        </h1>
        {/* Tabs Menu */}
        <div className="w-full flex justify-center mb-10">
          <div className="flex rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow">
            {tabs.map((tab, idx) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.label}
                  to={tab.path}
                  className={
                    "flex items-center gap-2 px-6 py-3 text-base font-medium transition-colors duration-200 " +
                    (isActive
                      ? "bg-white dark:bg-gray-950 text-foreground shadow-sm"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800")
                  }
                  style={{
                    borderRight: idx !== tabs.length - 1 ? '1px solid #eee' : undefined,
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.icon}
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
          </p>
        </div>
        {/* Flashcard Generator */}
        <PythonFlashcardGenerator />

        {/* Stats Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-400">
            Pourquoi ces flashcards ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">54 Commandes</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes les commandes Python au programme ECG, organisées par modules
                </p>
              </div>
            </div>
            <div className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">4 Modules</h3>
                <p className="text-sm text-muted-foreground">
                  Fondamentaux, analyse, matrices et probabilités
                </p>
              </div>
            </div>
            <div className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">+3 à 5 points</h3>
                <p className="text-sm text-muted-foreground">
                  Points sûrs aux concours avec une préparation optimale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Prêt à aller plus loin ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Découvrez notre référence complète des commandes Python et notre coaching personnalisé
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/formation/reference">
                <button className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-xl font-semibold transition">
                  <Code className="h-4 w-4" />
                  Référence complète
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PythonFlashcardsPage;