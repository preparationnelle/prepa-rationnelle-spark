import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "Un été pour (re)prendre le contrôle en maths",
      subtitle: "Entre ECG1 et ECG2 : pas d'avance, mais de l'assurance",
      description: "Guide pratique pour optimiser ses révisions mathématiques pendant l'été et aborder sereinement la deuxième année de prépa.",
      author: "Dimitar Dimitrov",
      date: "Juillet 2024",
      readTime: "8 min",
      link: "/articles/maths-ete-controle",
      featured: true
    },
    {
      id: 2,
      title: "L'entretien inversé à GEM",
      subtitle: "Guide complet pour réussir cette partie unique de l'oral",
      description: "Découvrez toutes les stratégies pour maîtriser l'entretien inversé de Grenoble École de Management.",
      author: "Équipe Prépa Rationnelle",
      date: "Juin 2024",
      readTime: "12 min",
      link: "/entretien-inverse-gem",
      featured: false
    },
    {
      id: 3,
      title: "Guide complet pour réaliser son CV projectif",
      subtitle: "Tout ce qu'il faut savoir pour SKEMA et autres écoles",
      description: "Méthodologie complète pour créer un CV projectif convaincant et se démarquer lors des entretiens.",
      author: "Équipe Prépa Rationnelle",
      date: "Mai 2024",
      readTime: "15 min",
      link: "/cv-projectif",
      featured: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Conseils & Articles pour réussir en Prépa ECG"
        description="Découvrez nos conseils d'experts et articles pratiques pour réussir votre prépa ECG et vos concours. Méthodologie, révisions, entretiens et études de cas."
        canonical="/articles"
        ogType="article"
      />
      <div className="relative py-8 sm:py-8">

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Conseils & </span>
                <span className="text-carnet-red">Articles</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Découvrez nos conseils d'experts et articles pratiques pour réussir votre prépa et vos concours.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {articles.map((article) => (
                <Card key={article.id} className={`bg-white border-2 border-carnet-red/20 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group ${article.featured ? 'ring-2 ring-blue-200' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {article.featured && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-carnet-red/10 text-carnet-red group-hover:bg-orange-100 group-hover:text-pr-orange-dark transition-colors duration-300 mb-3">
                            Article vedette
                          </div>
                        )}
                        <CardTitle className="text-2xl mb-2 text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">
                          <Link to={article.link}>
                            {article.title}
                          </Link>
                        </CardTitle>
                        {article.subtitle && (
                          <p className="text-lg text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300 font-medium mb-3">
                            {article.subtitle}
                          </p>
                        )}
                        <p className="text-gray-600 group-hover:text-pr-orange-dark transition-colors duration-300 mb-4">
                          {article.description}
                        </p>

                        {/* Meta information */}
                        <div className="flex items-center gap-4 text-sm text-carnet-red group-hover:text-pr-orange transition-colors duration-300 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>{article.readTime} de lecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link to={article.link}>
                      <Button className="bg-carnet-red hover:bg-pr-orange-dark text-white border-0 group-inner transition-all duration-300">
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4 group-inner-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-carnet-paper-2 to-orange-50 border-2 border-carnet-red/30 hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-gradient-to-br hover:from-orange-50 hover:to-pr-orange-pale transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-carnet-red/10 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-carnet-red group-hover:text-pr-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">
                    Besoin de conseils personnalisés ?
                  </h3>
                  <p className="text-gray-600 group-hover:text-pr-orange-dark transition-colors duration-300 mb-6">
                    Nos experts sont là pour vous accompagner dans votre réussite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-carnet-red hover:bg-pr-orange-dark text-white transition-all duration-300">
                        Nous contacter
                      </Button>
                    </Link>
                    <Link to="/coaching">
                      <Button variant="outline" size="lg" className="border-carnet-red text-carnet-red hover:border-pr-orange-dark hover:text-pr-orange hover:bg-pr-orange-pale transition-all duration-300">
                        Coaching individuel
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

export default ArticlesPage;