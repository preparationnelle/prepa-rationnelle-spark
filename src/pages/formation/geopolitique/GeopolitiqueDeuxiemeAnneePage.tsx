import React from 'react';
import { ChevronRight, Home, BookOpen, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopolitiqueDeuxiemeAnneePage = () => {
  const sujets = [
    {
      id: 1,
      title: "Union européenne",
      description: "Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.",
      to: "/formation/geopolitique/union-europeenne",
      chronologiePath: "/formation/geopolitique/chronologie-europe",
      flashcardsPath: "/formation/geopolitique/union-europeenne/flashcards"
    },
    {
      id: 2,
      title: "Continent africain",
      description: "États, territoires, cultures, développement et enjeux géopolitiques de l'Afrique contemporaine.",
      to: "/formation/geopolitique/continent-africain",
      chronologiePath: "/formation/geopolitique/continent-africain/chronologie",
      flashcardsPath: "/formation/geopolitique/continent-africain/flashcards"
    },
    {
      id: 3,
      title: "Proche et Moyen-Orient",
      description: "États, territoires, cultures et géopolitique d'une région au cœur des enjeux mondiaux.",
      to: "/formation/geopolitique/proche-moyen-orient",
      chronologiePath: "/formation/geopolitique/proche-moyen-orient/chronologie",
      flashcardsPath: "/formation/geopolitique/proche-moyen-orient/flashcards"
    },
    {
      id: 4,
      title: "Amérique du Nord",
      description: "États-Unis, Canada, Mexique : société, politique et puissance dans un espace intégré.",
      to: "/formation/geopolitique/amerique-nord",
      chronologiePath: "/formation/geopolitique/amerique-nord/chronologie",
      flashcardsPath: "/formation/geopolitique/amerique-nord/flashcards"
    },
    {
      id: 5,
      title: "Amérique latine",
      description: "Émergences, crises, intégrations régionales et géopolitique du sous-continent latino-américain.",
      to: "/formation/geopolitique/amerique-latine",
      chronologiePath: "/formation/geopolitique/amerique-latine/chronologie",
      flashcardsPath: "/formation/geopolitique/amerique-latine/flashcards"
    },
    {
      id: 6,
      title: "Asie",
      description: "Géopolitique d'une région multipolaire : Chine, Inde, puissances émergentes et mondialisation asiatique.",
      to: "/formation/geopolitique/asie",
      chronologiePath: "/formation/geopolitique/asie/chronologie",
      flashcardsPath: "/formation/geopolitique/asie/flashcards"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Deuxième Année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Géopolitique - Deuxième Année</h1>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Sélection des continents clés : Union européenne, Afrique, Proche et Moyen-Orient, Amériques et Asie.
        </p>

        <div className="max-w-5xl mx-auto space-y-4">
          {sujets.map((sujet, idx) => (
            <Link key={sujet.id} to={sujet.to} className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-200 transition-colors">{idx + 1}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{sujet.title}</h3>
                    <p className="text-gray-600 mb-4">{sujet.description}</p>
                    <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to={sujet.to} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                        <BookOpen className="w-4 h-4" />
                        Accéder au cours
                      </Link>
                      <Link to={sujet.chronologiePath} className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
                        <Globe className="w-4 h-4" />
                        Chronologie
                      </Link>
                      <Link to={sujet.flashcardsPath} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                        <FileText className="w-4 h-4" />
                        Flash cards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeopolitiqueDeuxiemeAnneePage;