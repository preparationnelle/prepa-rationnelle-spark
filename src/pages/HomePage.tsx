import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, Briefcase, GraduationCap, BookOpen, MessageSquare, Book, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { HeroSection } from '@/components/sections/HeroSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { SchoolsSection } from '@/components/sections/SchoolsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Footer } from '@/components/Footer';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { Megaphone } from 'lucide-react';
import OffersSection from "@/components/OffersSection";

const HomePage = () => {
  const [showAllMethods, setShowAllMethods] = useState(false);

  const methodsCards = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Personnalité",
      description: "Apprenez à présenter vos qualités, vos défauts et vos traits marquants avec authenticité et exemples concrets.",
      link: "/methodes/personnalite"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Projet professionnel",
      description: "Structurez votre projet professionnel de manière convaincante en démontrant cohérence et vision d'avenir.",
      link: "/methodes/projet-professionnel"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Motivation pour l'école",
      description: "Apprenez à démontrer votre motivation spécifique pour chaque école et à vous démarquer des autres candidats.",
      link: "/methodes/motivation-ecole"
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Pitch d’introduction",
      description:
        "Réussissez votre introduction en entretien : captez l’attention, donnez envie, évitez les pièges et démarquez-vous avec une histoire personnelle vivante.",
      link: "/methodes/pitch-intro"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Storytelling",
      description: "Transformez vos expériences passées en récits captivants qui créeront une impression durable sur votre jury.",
      link: "/methodes/storytelling"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Tendre des \"perches\"",
      description: "Apprenez l'art de guider subtilement le jury pendant votre entretien pour orienter la conversation vers vos forces.",
      link: "/methodes/tendre-perches"
    },
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Bien finir son entretien",
      description: "Découvrez comment conclure parfaitement votre entretien pour laisser une impression mémorable et positive.",
      link: "/methodes/finir-entretien"
    }
  ];

  // Display only the first 3 methods or all methods based on state
  const visibleMethods = showAllMethods ? methodsCards : methodsCards.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* NOUVEAU : Section Nos offres juste après Hero */}
      <OffersSection />

      {/* 1. PREMIÈRE SECTION - Automatisations IA */}
      <AutomationsSection />
      
      {/* 2. Section des écoles */}
      <SchoolsSection />
      
      {/* 3. Comment Prepa Rationnelle vous aide */}
      <FeaturesSection />
      
      {/* 4. Méthodologie Section - Préparer son entretien de personnalité */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-4 text-foreground">
            Préparer son <span className="gradient-text">entretien</span> de personnalité
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Découvrez les méthodologies éprouvées pour structurer vos réponses et impressionner le jury lors de votre entretien.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {visibleMethods.map((method, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-all bg-card border-border">
                <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={method.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      Consulter la méthode
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {!showAllMethods && (
            <div className="text-center mb-8">
              <Button 
                onClick={() => setShowAllMethods(true)} 
                variant="outline"
                className="flex items-center gap-2"
              >
                Voir toutes les méthodes <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* 5. Nos formules - Pricing Section */}
      <PricingSection />
      
      {/* 6. Ce que nos étudiants disent - Testimonials Section */}
      <TestimonialsSection />
      
      <PodcastSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
