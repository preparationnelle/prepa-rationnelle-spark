import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export const HeroSection = () => {
  return <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-lg">
            <h1 className="hero-heading gradient-text mb-4 text-4xl md:text-5xl lg:text-6xl">
              Préparez-vous aux entretiens de personnalité
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-light leading-relaxed">Tout le contenu dont j’aurais rêvé pour préparer les entretiens de personnalité est réuni : une plateforme qui combine un coaching individuel sur‑mesure et des ressources pour faire de votre oral le sésame qui ouvrira les portes de l’école de vos rêves.</p>
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
          
          <div className="relative shrink-0">
            <img src="/lovable-uploads/f208343e-6d37-4580-bf38-cf10f5571a1e.png" alt="Étudiant ESCP" className="w-auto h-auto max-w-[280px] md:max-w-xs rounded-2xl" />
          </div>
        </div>
      </div>
    </section>;
};