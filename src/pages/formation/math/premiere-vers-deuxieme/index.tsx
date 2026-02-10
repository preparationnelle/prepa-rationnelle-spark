import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Move, ArrowRight, Play, BookOpen, Target, Calculator, GraduationCap } from 'lucide-react';
import BookingPopup from '@/components/BookingPopup';

type ChapitreLibre = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  paths: {
    cours: string;
    exercices: string;
    quiz: string;
  };
};

const CHAPITRES_LIBRES: ChapitreLibre[] = [
  {
    id: 1,
    title: 'Suites numériques',
    description: 'Convergence, récurrence, et propriétés fondamentales des suites',
    icon: Calculator,
    paths: {
      cours: '/chapitres-libres/suites-cours',
      exercices: '/chapitres-libres/suites-exercices',
      quiz: '/chapitres-libres/suites-quiz'
    }
  },
  {
    id: 2,
    title: 'Séries numériques',
    description: 'Critères de convergence et étude des séries infinies',
    icon: Target,
    paths: {
      cours: '/chapitres-libres/series-cours',
      exercices: '/chapitres-libres/series-exercices',
      quiz: '/chapitres-libres/series-quiz'
    }
  },
  {
    id: 3,
    title: 'Intégrales impropres',
    description: 'Convergence et calculs d\'intégrales sur intervalles non bornés',
    icon: BookOpen,
    paths: {
      cours: '/chapitres-libres/integrales-impropres-cours',
      exercices: '/chapitres-libres/integrales-impropres-exercices',
      quiz: '/chapitres-libres/integrales-impropres-quiz'
    }
  },
  {
    id: 4,
    title: 'Applications linéaires',
    description: 'Transformations linéaires, noyau, image et propriétés essentielles',
    icon: Move,
    paths: {
      cours: '#',
      exercices: '/formation/math/premiere-vers-deuxieme/module-1-applications-lineaires-exercices',
      quiz: '#'
    }
  }
];

const PremiereVersDeuxiemePage: React.FC = () => {
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

  const handleQuizClick = () => {
    setIsBookingPopupOpen(true);
  };

  const handleCoursApplicationsClick = () => {
    setIsBookingPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Floating elements - Refined & Sober */}
      <div className="absolute -z-10 top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 right-1/4 w-72 h-72 bg-blue-50/80 rounded-full blur-2xl"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-300" />
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Première → Deuxième année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* En-tête */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 rotate-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
              Première <span className="text-blue-600 mx-2">→</span> Deuxième année
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Modules d’exercices incontournables à maîtriser pour aborder l’ECG2 sereinement.
          </p>
        </div>


        {/* Chapitres libres d'accès */}
        <div className="max-w-5xl mx-auto pb-16">
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

            <h2 className="text-2xl font-bold mb-8 text-blue-900 text-center relative z-10">
              Autres chapitres essentiels (accès libre)
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto relative z-10 leading-relaxed">
              Pour compléter votre préparation, découvrez ces chapitres fondamentaux issus de la formation Maths Approfondies,
              maintenant <strong>gratuits et accessibles à tous</strong> !
            </p>

            <div className="space-y-4 mb-8 relative z-10">
              {CHAPITRES_LIBRES.map((chapitre) => {
                return (
                  <div key={chapitre.id} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-200 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 border border-blue-100/50">
                        <chapitre.icon className="h-6 w-6" />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full">Chapitre {chapitre.id}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                          {chapitre.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                          {chapitre.description}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap justify-center sm:justify-end gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                        {chapitre.id === 4 ? (
                          <Button
                            onClick={handleCoursApplicationsClick}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg h-9 px-4"
                          >
                            <BookOpen className="w-3.5 h-3.5 mr-2" />
                            Cours
                          </Button>
                        ) : (
                          <Link to={chapitre.paths.cours}>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg h-9 px-4"
                            >
                              <BookOpen className="w-3.5 h-3.5 mr-2" />
                              Cours
                            </Button>
                          </Link>
                        )}

                        <Button
                          onClick={handleQuizClick}
                          variant="outline"
                          size="sm"
                          className="border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 rounded-lg h-9 px-4 bg-transparent"
                        >
                          <Target className="w-3.5 h-3.5 mr-2" />
                          Quiz
                        </Button>

                        <Link to={chapitre.paths.exercices}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 rounded-lg h-9 px-4 bg-transparent"
                          >
                            <Play className="w-3.5 h-3.5 mr-2" />
                            Exercices
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center relative z-10">
              <Link to="/chapitres-libres">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium">
                  Voir tous les chapitres libres
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BookingPopup
        isOpen={isBookingPopupOpen}
        onClose={() => setIsBookingPopupOpen(false)}
      />
    </div>
  );
};

export default PremiereVersDeuxiemePage;
