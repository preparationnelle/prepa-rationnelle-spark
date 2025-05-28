
import React, { useState } from 'react';
import { SchoolCard } from '../SchoolCard';
import { Link } from 'react-router-dom';
import { 
  User, Target, UsersRound, Sparkles, Map, Heart, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { questionCategories } from '@/data/questionCards';

export const SchoolsSection = () => {
  const [showAllSchools, setShowAllSchools] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const schools = [
    {
      name: "ESSEC Business School",
      duration: "Entretien de 30-45 minutes, coefficient 10.",
      feature: "Format approfondi avec mise en situation initiale.",
      link: "/ecoles/essec"
    },
    {
      name: "ESCP Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Entretien structuré autour d'un questionnaire préalable.",
      link: "/ecoles/escp"
    },
    {
      name: "EDHEC Business School",
      duration: "Entretien de 1h30, coefficient 15.",
      feature: "Format tripartite avec présentation, travail de groupe et entretien.",
      link: "/ecoles/edhec"
    },
    {
      name: "EM Lyon Business School",
      duration: "Entretien de 25 minutes, coefficient 9.",
      feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
      link: "/ecoles/emlyon"
    },
    {
      name: "SKEMA Business School",
      duration: "Entretien de 25 minutes, coefficient 20.",
      feature: "CV fictif à 10 ans.",
      link: "/ecoles/skema"
    },
    {
      name: "Audencia Business School",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
      link: "/ecoles/audencia"
    },
    {
      name: "Grenoble École de Management",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Format original avec entretien inversé.",
      link: "/ecoles/gem"
    },
    {
      name: "KEDGE Business School",
      duration: "Entretien de 30 minutes, coefficient 14.",
      feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
      link: "/ecoles/kedge"
    },
    {
      name: "NEOMA Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Format structuré autour de la 'réussite responsable'.",
      link: "/ecoles/neoma"
    }
  ];

  // Utiliser directement les IDs des catégories de questions depuis les données réelles
  const displayedCategories = [
    {
      id: 'introspection',
      title: "Introspection",
      description: "Questions sur la personnalité et la connaissance de soi",
      icon: <User className="h-6 w-6 text-primary" />
    },
    {
      id: 'motivation-objectives',
      title: "Motivations & objectifs",
      description: "Questions sur les objectifs et les aspirations",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      id: 'interpersonal-teamwork',
      title: "Relations & travail d'équipe",
      description: "Questions sur le travail collaboratif et la communication",
      icon: <UsersRound className="h-6 w-6 text-primary" />
    },
    {
      id: 'creative-unexpected',
      title: "Questions créatives & inattendues",
      description: "Questions originales pour tester votre créativité",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      id: 'projection-scenarios',
      title: "Projection & mises en situation",
      description: "Scénarios et questions sur votre vision du futur",
      icon: <Map className="h-6 w-6 text-primary" />
    },
    {
      id: 'values',
      title: "Valeurs",
      description: "Questions sur ce qui est important pour vous",
      icon: <Heart className="h-6 w-6 text-primary" />
    }
  ];

  // Display only the first 3 schools or all schools based on state
  const visibleSchools = showAllSchools ? schools : schools.slice(0, 3);
  // Display only the first 3 categories or all categories based on state
  const visibleCategories = showAllCategories ? displayedCategories : displayedCategories.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-muted/30" id="schools-section">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-4">
          Comprenez ce que chaque école <span className="gradient-text">attend vraiment</span> de vous
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Découvrez des fiches claires et concrètes sur chaque école : leurs valeurs, leurs programmes, leurs particularités, 
          les associations emblématiques, et ce qui les distingue vraiment dans le paysage des business schools.
        </p>
        
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
        
        {/* Question Categories Section */}
        <h2 className="section-heading text-center mt-20 mb-4">
          Banque de <span className="gradient-text">questions</span> d'entretien
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Préparez-vous efficacement avec notre bibliothèque de questions classées par catégorie.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {visibleCategories.map((category) => (
            <Link key={category.id} to={`/questions/${category.id}`} className="group">
              <Card className="bg-accent/50 border-0 hover:shadow-md transition-all h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-medium mb-2 text-lg group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {!showAllCategories && (
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowAllCategories(true)} 
              variant="outline"
              className="flex items-center gap-2"
            >
              Voir toutes les catégories <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="text-center">
          <Link to="/questions">
            <Button size="lg">
              Explorer toutes les questions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
