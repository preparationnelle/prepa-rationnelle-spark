
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { SchoolsSection } from '@/components/sections/SchoolsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Footer } from '@/components/Footer';
import { Brain, Target, Users, Puzzle, User, Briefcase, GraduationCap, BookOpen, MessageSquare, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
      
      {/* Méthodologie Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-4">
            Préparer son <span className="gradient-text">entretien</span> de personnalité
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez les méthodologies éprouvées pour structurer vos réponses et impressionner le jury lors de votre entretien.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personnalité</h3>
                <p className="text-muted-foreground mb-6">
                  Apprenez à présenter vos qualités, vos défauts et vos traits marquants avec authenticité et exemples concrets.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/personnalite" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Projet professionnel</h3>
                <p className="text-muted-foreground mb-6">
                  Structurez votre projet professionnel de manière convaincante en démontrant cohérence et vision d'avenir.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/projet-professionnel" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Motivation pour l'école</h3>
                <p className="text-muted-foreground mb-6">
                  Apprenez à démontrer votre motivation spécifique pour chaque école et à vous démarquer des autres candidats.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/motivation-ecole" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Storytelling</h3>
                <p className="text-muted-foreground mb-6">
                  Transformez vos expériences passées en récits captivants qui créeront une impression durable sur votre jury.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/storytelling" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tendre des "perches"</h3>
                <p className="text-muted-foreground mb-6">
                  Apprenez l'art de guider subtilement le jury pendant votre entretien pour orienter la conversation vers vos forces.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/tendre-perches" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bien finir son entretien</h3>
                <p className="text-muted-foreground mb-6">
                  Découvrez comment conclure parfaitement votre entretien pour laisser une impression mémorable et positive.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/methodes/finir-entretien" className="w-full">
                  <Button variant="outline" className="w-full">
                    Consulter la méthode
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <PricingSection />
      <PodcastSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
