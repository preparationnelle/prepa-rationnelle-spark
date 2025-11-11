import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, ArrowRight, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesLyceePage = () => {
  const niveaux = [
    {
      id: 1,
      title: "Seconde",
      subtitle: "Classe de détermination",
      description: "Découvrez toutes les matières enseignées en classe de seconde et les stratégies pour bien choisir votre voie.",
      color: "blue",
      link: "/articles/lycee/seconde",
      matieresCount: 12,
      featured: true
    },
    {
      id: 2,
      title: "Première",
      subtitle: "Approfondissement des connaissances",
      description: "Explorez les matières de première avec spécialisation progressive selon votre série choisie.",
      color: "orange",
      link: "/articles/lycee/premiere",
      matieresCount: 10,
      featured: false
    },
    {
      id: 3,
      title: "Terminale",
      subtitle: "Préparation au baccalauréat",
      description: "Maîtrisez toutes les matières de terminale et préparez-vous efficacement aux épreuves du bac.",
      color: "orange",
      link: "/articles/lycee/terminale",
      matieresCount: 9,
      featured: false
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for lycée */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Articles </span>
                <span className="text-blue-600">Lycée</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Conseils et méthodes adaptés au lycée pour réussir ses études et préparer son avenir.
              </p>
              <Link to="/articles">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                  ← Retour aux niveaux
                </Button>
              </Link>
            </div>

            {/* Niveaux Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {niveaux.map((niveau) => {
                const colorClasses = {
                  blue: {
                    border: 'border-blue-100',
                    bg: 'bg-blue-50',
                    text: 'text-blue-700',
                    hoverBg: 'hover:bg-orange-50',
                    hoverBorder: 'hover:border-orange-300',
                    hoverText: 'group-hover:text-orange-800',
                    button: 'bg-blue-600 hover:bg-orange-600',
                    ring: 'ring-blue-200'
                  },
                  orange: {
                    border: 'border-orange-100',
                    bg: 'bg-orange-50',
                    text: 'text-orange-700',
                    hoverBg: 'hover:bg-blue-50',
                    hoverBorder: 'hover:border-blue-300',
                    hoverText: 'group-hover:text-blue-800',
                    button: 'bg-orange-600 hover:bg-blue-600',
                    ring: 'ring-orange-200'
                  }
                };

                const colors = colorClasses[niveau.color as keyof typeof colorClasses];

                return (
                  <Card key={niveau.id} className={`bg-white border-2 ${colors.border} hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${colors.hoverBorder} ${colors.hoverBg} transition-all duration-300 group ${niveau.featured ? `ring-2 ${colors.ring}` : ''}`}>
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                          <GraduationCap className={`h-8 w-8 ${colors.text}`} />
                        </div>
                      </div>
                      <CardTitle className={`text-3xl mb-2 ${colors.text} ${colors.hoverText} transition-colors duration-300`}>
                        <Link to={niveau.link}>
                          {niveau.title}
                        </Link>
                      </CardTitle>
                      {niveau.subtitle && (
                        <p className={`text-lg ${colors.text.replace('700', '600')} ${colors.hoverText.replace('800', '700')} transition-colors duration-300 font-medium mb-3`}>
                          {niveau.subtitle}
                        </p>
                      )}
                      <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-4">
                        {niveau.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-4">
                        {niveau.matieresCount} matières enseignées
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link to={niveau.link}>
                        <Button className={`${colors.button} text-white border-0 group-inner transition-all duration-300 w-full`}>
                          Découvrir les matières
                          <ArrowRight className="ml-2 h-4 w-4 group-inner-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                    Besoin de conseils personnalisés ?
                  </h3>
                  <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6">
                    Nos experts sont là pour vous accompagner dans votre réussite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-blue-600 hover:bg-orange-600 text-white transition-all duration-300">
                        Nous contacter
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesLyceePage;
