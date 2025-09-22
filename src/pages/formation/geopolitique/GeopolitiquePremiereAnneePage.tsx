import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopolitiquePremiereAnneePage = () => {
  const sujets = [
    {
      id: 1,
      title: 'Les espaces maritimes',
      description:
        "Territorialisation, maritimisation de l'économie mondiale et nouveaux rapports de puissance",
      to: '/formation/geopolitique/premiere-annee/espaces-maritimes'
    },
    {
      id: 2,
      title: 'Espaces maritimes — tensions et conflits',
      description: "Puissance, conflits historiques, renouveau juridique et militarisation",
      to: '/formation/geopolitique/premiere-annee/espaces-maritimes-tensions'
    },
    {
      id: 3,
      title: 'Géopolitique des énergies',
      description: "Dépendances, matières premières critiques et transition énergétique européenne",
      to: '/formation/geopolitique/premiere-annee/energies'
    },
    {
      id: 4,
      title: 'Gouvernance mondiale',
      description: "Institutions, limites, réussites et nouveaux défis de la régulation globale",
      to: '/formation/geopolitique/premiere-annee/gouvernance-mondiale'
    },
    {
      id: 5,
      title: 'Les guerres',
      description: "Évolutions des formes de guerre, cyberconflits et résurgence des rivalités",
      to: '/formation/geopolitique/premiere-annee/guerres'
    },
    {
      id: 6,
      title: 'Les migrations',
      description: "Causes, gouvernance, effets contrastés et migrations climatiques/démographiques",
      to: '/formation/geopolitique/premiere-annee/migrations'
    },
    {
      id: 7,
      title: 'La puissance',
      description: "Définitions, critères (hard/soft/smart/sharp), ressources et technologies",
      to: '/formation/geopolitique/premiere-annee/puissance'
    },
    {
      id: 8,
      title: 'Ressources stratégiques',
      description: "Typologie, rivalités/cooperations, métaux rares et études de cas",
      to: '/formation/geopolitique/premiere-annee/ressources-strategiques'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-900 font-bold">Première Année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Géopolitique - Première Année</h1>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Sélection de sujets clés du programme. Commencez par les espaces maritimes.
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
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to={sujet.to} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                        <FileText className="h-4 w-4" />
                        Accéder au cours
                      </Link>
                      <Link to={
                        sujet.id === 1 ? "/formation/geopolitique/premiere-annee/espaces-maritimes/flashcards" :
                        sujet.id === 2 ? "/formation/geopolitique/premiere-annee/espaces-maritimes-tensions/flashcards" :
                        sujet.id === 3 ? "/formation/geopolitique/premiere-annee/energies/flashcards" :
                        sujet.id === 4 ? "/formation/geopolitique/premiere-annee/gouvernance-mondiale/flashcards" :
                        sujet.id === 5 ? "/formation/geopolitique/premiere-annee/guerres/flashcards" :
                        sujet.id === 6 ? "/formation/geopolitique/premiere-annee/migrations/flashcards" :
                        sujet.id === 7 ? "/formation/geopolitique/premiere-annee/puissance/flashcards" :
                        sujet.id === 8 ? "/formation/geopolitique/premiere-annee/ressources-strategiques/flashcards" :
                        "/formation/geopolitique/flashcards"
                      } className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                        <BookOpen className="h-4 w-4" />
                        Accéder aux flashcards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* (Outils et ressources supprimés pour une page plus simple axée sur la liste de sujets) */}
      </div>
    </div>
  );
};

export default GeopolitiquePremiereAnneePage;