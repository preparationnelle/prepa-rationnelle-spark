
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SchoolsSection } from '@/components/sections/SchoolsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Footer } from '@/components/Footer';
import { Brain, Target, Users, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <HeroSection />
      <SchoolsSection />
      <FeaturesSection />
      
      {/* Questions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-4">
            Banque de <span className="gradient-text">questions</span> d'entretien
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Préparez-vous efficacement avec notre bibliothèque de questions classées par catégorie et découvrez des exemples de réponses structurées.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="bg-accent/50 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Introspection</h3>
                <p className="text-sm text-muted-foreground">Questions sur la personnalité et la connaissance de soi</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Motivation</h3>
                <p className="text-sm text-muted-foreground">Questions sur les objectifs et les aspirations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Interpersonnel</h3>
                <p className="text-sm text-muted-foreground">Questions sur le travail d'équipe et la communication</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Créativité</h3>
                <p className="text-sm text-muted-foreground">Questions inattendues et situations originales</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/questions">
              <Button size="lg">
                Explorer toutes les questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
