
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FFF9ED]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 md:gap-8">
        {/* Content only - plus de photo */}
        <div className="w-full max-w-xl mb-8 md:mb-0">
          <div className="mb-5 flex flex-col gap-2">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <Link to="/calendar" className="text-sm font-semibold text-primary uppercase tracking-wider hover:underline">
                PRÉPAREZ VOTRE ENTRETIEN
              </Link>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-orange-600 mr-2" />
              <Link to="/generator" className="text-sm font-semibold text-orange-600 uppercase tracking-wider hover:underline">
                PRÉPAREZ VOS ÉCRITS AVEC IA
              </Link>
            </div>
          </div>

          <h1 className="hero-heading mb-6 text-4xl md:text-5xl xl:text-6xl font-extrabold text-orange-600 leading-tight">
            Je vous aide à intégrer l'école de vos rêves
          </h1>

          <p className="text-base md:text-lg text-[#393830] mb-10 leading-relaxed font-light max-w-[90%]">
            Vous avez bossé 2 ans. Maintenant, il faut <span className="font-bold">convaincre</span>. 
            Une plateforme qui combine <Link to="/calendar" className="text-primary font-bold underline hover:text-primary/90 transition-colors">coaching sur‑mesure</Link> et <Link to="/generator" className="text-orange-600 font-bold underline hover:text-orange-600/90 transition-colors">automatisations IA</Link> pour réussir son entretien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-md transition-all text-base"
              >
                Commencer gratuitement
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-orange-200 bg-white hover:bg-orange-50 text-orange-700 font-semibold rounded-md transition-all text-base"
              >
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
