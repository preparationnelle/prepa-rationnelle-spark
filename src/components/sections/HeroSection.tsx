
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp, Star } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-accent via-accent/90 to-background overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10">
          <Star className="w-64 h-64 text-primary" />
        </div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10">
          <Award className="w-48 h-48 text-primary" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
          <div className="max-w-lg">
            <div className="mb-4 flex items-center">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <Link to="/calendar" className="text-sm font-semibold text-primary uppercase tracking-wider hover:underline">
                PRÉPAREZ VOTRE ENTRETIEN
              </Link>
            </div>
            
            <h1 className="hero-heading gradient-text mb-6 text-4xl md:text-5xl lg:text-6xl animate-fade-in">
              Je vous aide à intégrer l'école de vos rêves
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              Vous avez bossé 2 ans. Maintenant, il faut <span className="font-medium">convaincre</span>. Une plateforme qui combine <Link to="/calendar" className="text-primary font-medium underline hover:text-primary/80 transition-colors">coaching sur‑mesure</Link> et ressources pour réussir son entretien.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-accent/50 transition-all">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative shrink-0">
            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-md"></div>
            <img 
              src="/lovable-uploads/f208343e-6d37-4580-bf38-cf10f5571a1e.png" 
              alt="Étudiant préparant un entretien" 
              className="w-auto h-auto max-w-[280px] md:max-w-xs rounded-2xl relative shadow-lg hover:shadow-xl transition-all duration-300" 
            />
            <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-full shadow-lg">
              <Award className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
