import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Conseils & Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conseils d'experts et articles pratiques pour réussir votre prépa et vos concours.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="space-y-8">
            {articles.map((article) => (
              <Card key={article.id} className={`hover:shadow-lg transition-all duration-300 ${article.featured ? 'border-primary/20 bg-primary/5' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {article.featured && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-3">
                          Article vedette
                        </div>
                      )}
                      <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
                        <Link to={article.link}>
                          {article.title}
                        </Link>
                      </CardTitle>
                      {article.subtitle && (
                        <p className="text-lg text-muted-foreground font-medium mb-3">
                          {article.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground mb-4">
                        {article.description}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
                    <Button className="group">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Besoin de conseils personnalisés ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nos experts sont là pour vous accompagner dans votre réussite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg">
                      Nous contacter
                    </Button>
                  </Link>
                  <Link to="/coaching">
                    <Button variant="outline" size="lg">
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
  );
};

export default ArticlesPage;