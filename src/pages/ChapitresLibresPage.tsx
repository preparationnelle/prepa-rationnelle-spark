import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calculator, Target, ArrowRight, Play } from 'lucide-react';
import BookingPopup from '@/components/BookingPopup';

const ChapitresLibresPage = () => {
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

  const handleQuizClick = () => {
    setIsBookingPopupOpen(true);
  };

  const chapitres = [
    {
      id: 1,
      slug: 'suites',
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
      slug: 'series',
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
      slug: 'integrales-impropres',
      title: 'Intégrales impropres',
      description: 'Convergence et calculs d\'intégrales sur intervalles non bornés',
      icon: BookOpen,
      color: 'purple',
      paths: {
        cours: '/chapitres-libres/integrales-impropres-cours',
        exercices: '/chapitres-libres/integrales-impropres-exercices',
        quiz: '/chapitres-libres/integrales-impropres-quiz'
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100',
        text: 'text-blue-900',
        button: 'bg-blue-500 hover:bg-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        hover: 'hover:bg-green-100',
        text: 'text-green-900',
        button: 'bg-green-500 hover:bg-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-100',
        text: 'text-purple-900',
        button: 'bg-purple-500 hover:bg-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chapitres <span className="text-orange-500">Libres d'Accès</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez gratuitement ces chapitres essentiels de mathématiques approfondies avec cours, exercices et quiz inclus.
          </p>
        </div>

        {/* Chapitres List - Style Maths Approfondies */}
        <div className="space-y-6 mb-12">
          {chapitres.map((chapitre) => {
            const colors = getColorClasses(chapitre.color);
            return (
              <Card key={chapitre.id} className={`${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-200`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Header avec icône et titre */}
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${colors.button.split(' ')[0]} rounded-full flex items-center justify-center shadow-lg`}>
                        <chapitre.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <Badge className={`mb-2 ${colors.button.split(' ')[0]} text-white border-0 shadow-sm`}>
                          Chapitre {chapitre.id}
                        </Badge>
                        <h3 className={`text-xl font-bold ${colors.text} leading-tight`}>
                          {chapitre.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {chapitre.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Boutons Cours, Quiz, Exercices */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto">
                      <Link to={chapitre.paths.cours}>
                        <Button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Cours
                        </Button>
                      </Link>
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

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Envie d'aller plus loin ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ces chapitres vous donnent un aperçu de nos formations complètes. 
              Découvrez l'ensemble de nos contenus pour maximiser vos résultats en prépa ECG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formations">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Découvrir toutes nos formations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <BookingPopup 
        isOpen={isBookingPopupOpen} 
        onClose={() => setIsBookingPopupOpen(false)} 
      />
    </div>
  );
};

export default ChapitresLibresPage;