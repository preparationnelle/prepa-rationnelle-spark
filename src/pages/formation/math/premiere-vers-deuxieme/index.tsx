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
  color: string;
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
    color: 'blue',
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
    color: 'green',
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
    color: 'purple',
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
    color: 'orange',
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
    <div className="min-h-screen bg-[#F0F8FF]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Première → Deuxième année</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Première année → Deuxième année (Maths)
            </h1>
            <p className="text-slate-600 text-lg">
              Modules d’exercices incontournables à maîtriser pour aborder l’ECG2 sereinement.
            </p>
          </div>
        </Card>



        {/* Chapitres libres d'accès */}
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center">
              Autres chapitres essentiels (accès libre)
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Pour compléter votre préparation, découvrez ces chapitres fondamentaux issus de la formation Maths Approfondies, 
              maintenant <strong>gratuits et accessibles à tous</strong> !
            </p>
            
            <div className="space-y-6 mb-8">
              {CHAPITRES_LIBRES.map((chapitre) => {
                const getColorClasses = () => {
                  switch(chapitre.color) {
                    case 'blue': return {
                      bg: 'bg-blue-50',
                      border: 'border-blue-200',
                      icon: 'bg-blue-500',
                      badge: 'bg-blue-500',
                      title: 'text-blue-900'
                    };
                    case 'green': return {
                      bg: 'bg-green-50',
                      border: 'border-green-200',
                      icon: 'bg-green-500',
                      badge: 'bg-green-500',
                      title: 'text-green-900'
                    };
                    case 'purple': return {
                      bg: 'bg-purple-50',
                      border: 'border-purple-200',
                      icon: 'bg-purple-500',
                      badge: 'bg-purple-500',
                      title: 'text-purple-900'
                    };
                    case 'orange': return {
                      bg: 'bg-orange-50',
                      border: 'border-orange-200',
                      icon: 'bg-orange-500',
                      badge: 'bg-orange-500',
                      title: 'text-orange-900'
                    };
                    default: return {
                      bg: 'bg-gray-50',
                      border: 'border-gray-200',
                      icon: 'bg-gray-500',
                      badge: 'bg-gray-500',
                      title: 'text-gray-900'
                    };
                  }
                };
                
                const colors = getColorClasses();
                
                return (
                  <Card key={chapitre.id} className={`${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-200`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Header avec icône et titre */}
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center shadow-lg`}>
                            <chapitre.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <Badge className={`mb-2 ${colors.badge} text-white border-0 shadow-sm`}>
                              Chapitre {chapitre.id}
                            </Badge>
                            <h3 className={`text-xl font-bold ${colors.title} leading-tight`}>
                              {chapitre.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {chapitre.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Boutons Cours, Quiz, Exercices */}
                        <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto">
                          {chapitre.id === 4 ? (
                            <Button 
                              onClick={handleCoursApplicationsClick}
                              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow flex items-center justify-center gap-2"
                            >
                              <BookOpen className="w-4 h-4" />
                              Cours
                            </Button>
                          ) : (
                            <Link to={chapitre.paths.cours}>
                              <Button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Cours
                              </Button>
                            </Link>
                          )}
                          <Button 
                            onClick={handleQuizClick}
                            variant="outline" 
                            className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg shadow flex items-center justify-center gap-2"
                          >
                            <Target className="w-4 h-4" />
                            Quiz
                          </Button>
                          <Link to={chapitre.paths.exercices}>
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg shadow flex items-center justify-center gap-2">
                              <Play className="w-4 h-4" />
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
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
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

