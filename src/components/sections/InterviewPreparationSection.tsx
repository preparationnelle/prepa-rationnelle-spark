
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SchoolCard } from '../SchoolCard';
import { 
  Target, 
  Users, 
  Map, 
  ChevronDown, 
  MessageCircle, 
  FileText,
  GraduationCap
} from 'lucide-react';

export const InterviewPreparationSection = () => {
  const [showAllSchools, setShowAllSchools] = useState(false);

  const schools = [
    {
      name: "ESSEC Business School",
      duration: "Entretien de 30-45 minutes, coefficient 10.",
      feature: "Format approfondi avec mise en situation initiale.",
      link: "/essec"
    },
    {
      name: "ESCP Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Entretien structuré autour d'un questionnaire préalable.",
      link: "/escp"
    },
    {
      name: "EDHEC Business School",
      duration: "Entretien de 1h30, coefficient 15.",
      feature: "Format tripartite avec présentation, travail de groupe et entretien.",
      link: "/edhec"
    },
    {
      name: "EM Lyon Business School",
      duration: "Entretien de 25 minutes, coefficient 9.",
      feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
      link: "/emlyon"
    },
    {
      name: "SKEMA Business School",
      duration: "Entretien de 25 minutes, coefficient 20.",
      feature: "CV fictif à 10 ans.",
      link: "/skema"
    },
    {
      name: "Audencia Business School",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
      link: "/audencia"
    },
    {
      name: "Grenoble École de Management",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Format original avec entretien inversé.",
      link: "/gem"
    },
    {
      name: "KEDGE Business School",
      duration: "Entretien de 30 minutes, coefficient 14.",
      feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
      link: "/kedge"
    },
    {
      name: "NEOMA Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Format structuré autour de la 'réussite responsable'.",
      link: "/neoma"
    }
  ];

  const questionCategories = [
    {
      id: 'projection-scenarios',
      title: "Projection & scénarios",
      description: "Questions sur la projection dans l'avenir et les scénarios hypothétiques",
      icon: <Map className="h-6 w-6 text-primary" />
    },
    {
      id: 'motivation-objectives',
      title: "Motivations & objectifs",
      description: "Questions sur les motivations profondes et les objectifs de carrière",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      id: 'interpersonal-teamwork',
      title: "Relations & travail d'équipe",
      description: "Questions sur les compétences interpersonnelles et le travail collaboratif",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  const visibleSchools = showAllSchools ? schools : schools.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-4">
          Préparer ses <span className="gradient-text">entretiens</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Tout ce dont vous avez besoin pour réussir vos entretiens de personnalité : fiches écoles, 
          questions par catégorie et guides spécialisés.
        </p>
        
        {/* Fiches écoles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <GraduationCap className="inline-block h-8 w-8 text-primary mr-2" />
            Fiches écoles
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleSchools.map((school, index) => (
              <SchoolCard 
                key={index}
                name={school.name}
                duration={school.duration}
                feature={school.feature}
                link={school.link}
              />
            ))}
          </div>
          
          {!showAllSchools && (
            <div className="text-center mt-6">
              <Button 
                onClick={() => setShowAllSchools(true)} 
                variant="outline"
                className="flex items-center gap-2"
              >
                Voir toutes les écoles <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Catégories de questions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Catégories de questions d'entretien
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {questionCategories.map((category) => (
              <Link key={category.id} to={`/questions/${category.id}`} className="group">
                <Card className="bg-white hover:shadow-lg transition-all h-full border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Articles spécialisés */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Guides spécialisés
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Guide complet pour réaliser son CV projectif</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Tout ce qu'il faut savoir pour créer un CV projectif convaincant pour SKEMA et autres écoles
                    </p>
                    <Link to="/questions/cv-projectif">
                      <Button size="sm" variant="outline">
                        Découvrir l'article complet
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Entretien inversé à GEM</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Guide complet avec toutes les questions à poser lors de l'entretien inversé de 10 minutes à Grenoble EM
                    </p>
                    <Link to="/questions/entretien-inverse-gem">
                      <Button size="sm" variant="outline">
                        Découvrir l'article complet
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Link to="/questions">
            <Button size="lg">
              Explorer tous les contenus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
