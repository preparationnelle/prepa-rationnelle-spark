
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  BookOpen, 
  Languages, 
  Globe, 
  User, 
  Zap 
} from 'lucide-react';

export const AutomationsSection = () => {
  const automations = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Réponses d'entretien personnalisées",
      description: "Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.",
      link: "/generator",
      badge: "IA"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Flashcards intelligentes",
      description: "Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.",
      link: "/generator",
      badge: "Auto"
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "Paragraphes de langues",
      description: "Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé.",
      link: "/generator",
      badge: "Nouveau"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Contenu géopolitique complet",
      description: "Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés.",
      link: "/generator",
      badge: "Complet"
    },
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Simulateur d'entretien IA",
      description: "Entraînez-vous avec un simulateur intelligent qui adapte ses questions et fournit un feedback personnalisé.",
      link: "/interview-simulator",
      badge: "Interactif"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-orange-50 to-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="section-heading">
              Automatisations <span className="gradient-text">IA</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            Découvrez nos outils d'intelligence artificielle qui automatisent votre préparation 
            et vous font gagner des heures de travail tout en améliorant vos performances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {automations.map((automation, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {automation.icon}
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {automation.badge}
                  </span>
                </div>
                <CardTitle className="text-lg">{automation.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {automation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link to={automation.link}>
                  <Button className="w-full group">
                    Essayer maintenant
                    <Zap className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/generator">
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90">
              <Zap className="h-5 w-5 mr-2" />
              Accéder à tous les générateurs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
