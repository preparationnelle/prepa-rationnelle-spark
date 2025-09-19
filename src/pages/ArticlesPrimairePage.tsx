import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, ArrowRight, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesPrimairePage = () => {
  const articles = [
    {
      id: 1,
      title: "Développer l'autonomie en primaire",
      subtitle: "Les bases de l'apprentissage autonome",
      description: "Guide pour aider les enfants de primaire à développer leur autonomie dans les apprentissages et devenir acteurs de leur réussite scolaire.",
      author: "Équipe Prépa Rationnelle",
      date: "Septembre 2024",
      readTime: "6 min",
      link: "/articles/primaire/autonomie",
      featured: true
    },
    {
      id: 2,
      title: "Méthodes de lecture efficace",
      subtitle: "Techniques pour améliorer la compréhension",
      description: "Découvrez les stratégies éprouvées pour développer la lecture et la compréhension de texte dès le primaire.",
      author: "Équipe Prépa Rationnelle",
      date: "Août 2024",
      readTime: "8 min",
      link: "/articles/primaire/lecture",
      featured: false
    },
    {
      id: 3,
      title: "Mathématiques ludiques au primaire",
      subtitle: "Apprendre en s'amusant",
      description: "Comment rendre les mathématiques attrayantes et efficaces grâce à des méthodes ludiques adaptées au primaire.",
      author: "Équipe Prépa Rationnelle",
      date: "Juillet 2024",
      readTime: "10 min",
      link: "/articles/primaire/maths-ludiques",
      featured: false
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Orange theme for primary */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Articles </span>
                <span className="text-orange-600">Primaire</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Conseils et méthodes adaptés au cycle primaire pour accompagner votre enfant dans sa réussite scolaire.
              </p>
              <Link to="/articles">
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700">
                  ← Retour aux articles
                </Button>
              </Link>
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {articles.map((article) => (
                <Card key={article.id} className={`bg-white border-2 border-orange-100 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group ${article.featured ? 'ring-2 ring-orange-200' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {article.featured && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300 mb-3">
                            Article vedette
                          </div>
                        )}
                        <CardTitle className="text-2xl mb-2 text-orange-700 group-hover:text-blue-800 transition-colors duration-300">
                          <Link to={article.link}>
                            {article.title}
                          </Link>
                        </CardTitle>
                        {article.subtitle && (
                          <p className="text-lg text-orange-600 group-hover:text-blue-700 transition-colors duration-300 font-medium mb-3">
                            {article.subtitle}
                          </p>
                        )}
                        <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-4">
                          {article.description}
                        </p>

                        {/* Meta information */}
                        <div className="flex items-center gap-4 text-sm text-orange-500 group-hover:text-blue-600 transition-colors duration-300 mb-4">
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
                      <Button className="bg-orange-600 hover:bg-blue-600 text-white border-0 group-inner transition-all duration-300">
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
              <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-700 group-hover:text-blue-800 transition-colors duration-300">
                    Besoin de conseils personnalisés ?
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                    Nos experts sont là pour accompagner votre enfant dans sa réussite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-orange-600 hover:bg-blue-600 text-white transition-all duration-300">
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

export default ArticlesPrimairePage;
