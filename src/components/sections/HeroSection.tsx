
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="hero-heading gradient-text mb-6">Préparez-vous aux oraux </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Développez votre capacité à structurer des arguments pour réussir vos oraux de langue et entretien de personnalité.
            </p>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/f208343e-6d37-4580-bf38-cf10f5571a1e.png" 
              alt="Étudiant ESCP" 
              className="w-auto h-auto max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
