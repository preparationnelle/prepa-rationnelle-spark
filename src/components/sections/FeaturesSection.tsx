
import React from 'react';
import { FeatureCard } from '../FeatureCard';

export const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12">
          Comment <span className="gradient-text">Prepa Rationnelle</span> vous aide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Plans structurés"
            description="Générez des plans argumentés sur des sujets de géopolitique et d'actualité pour mieux structurer vos réponses."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 7 3 5l2-2" /><path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9" /><path d="M5 19 3 17l2-2" /><path d="M5 5v14" /></svg>}
          />
          
          <FeatureCard
            title="Suivi de progression"
            description="Suivez votre évolution et identifiez vos points forts et axes d'amélioration grâce à notre tableau de bord."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>}
          />
          
          <FeatureCard
            title="Coaching personnalisé"
            description="Bénéficiez d'un accompagnement individuel pour perfectionner votre préparation aux entretiens."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5.5 20H8" /><path d="M17 9h.01" /><path d="M11 13h.01" /><path d="M13 15h.01" /><path d="M15 11h.01" /><path d="M17 13h.01" /><path d="M9 15h.01" /><path d="M3 3v18h18" /><path d="m3 6 3-3 3 3 3-3 3 3 3-3 3 3" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};
