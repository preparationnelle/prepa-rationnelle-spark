import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Move, ArrowRight, Play, ExternalLink, BookOpen, Target, Calculator } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/maths-choix" className="hover:text-foreground transition-colors">Choix option Maths</Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-blue-600 font-medium">Première → Deuxième année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Première année → Deuxième année (Maths)
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modules d’exercices incontournables à maîtriser pour aborder l’ECG2 sereinement.
          </p>
        </div>



        {/* Chapitres libres d'accès */}
        <div className="max-w-4xl mx-auto pb-16">
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">
              Autres chapitres essentiels (accès libre)
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Pour compléter votre préparation, découvrez ces chapitres fondamentaux issus de la formation Maths Approfondies,
              maintenant <strong>gratuits et accessibles à tous</strong> !
            </p>

            <div className="space-y-4 mb-8">
              {CHAPITRES_LIBRES.map((chapitre) => {
                return (
                  <Card key={chapitre.id} className="bg-white border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row items-center gap-5">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                          <chapitre.icon className="h-6 w-6" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 text-center sm:text-left">
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Chapitre {chapitre.id}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {chapitre.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {chapitre.description}
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center sm:justify-end gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                          {chapitre.id === 4 ? (
                            <Button
                              onClick={handleCoursApplicationsClick}
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                            >
                              <BookOpen className="w-4 h-4 mr-2" />
                              Cours
                            </Button>
                          ) : (
                            <Link to={chapitre.paths.cours}>
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                              >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Cours
                              </Button>
                            </Link>
                          )}

                          <Button
                            onClick={handleQuizClick}
                            variant="outline"
                            size="sm"
                            className="border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50"
                          >
                            <Target className="w-4 h-4 mr-2" />
                            Quiz
                          </Button>

                          <Link to={chapitre.paths.exercices}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Exercices
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Link to="/chapitres-libres">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
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

