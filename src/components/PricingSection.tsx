
import React from 'react';
import { PricingCard } from './PricingCard';

export const PricingSection = () => {
  const freeFeatures = [
    { text: "Accès à 3 plans par mois" },
    { text: "Tableau de bord basique" },
    { text: "Ressources pédagogiques" }
  ];

  const premiumFeatures = [
    { text: "Plans illimités" },
    { text: "Tableau de bord avancé" },
    { text: "2 sessions de coaching par mois" },
    { text: "Feedback personnalisé sur vos essais" },
    { text: "Accès à tous les contenus exclusifs" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12">
          Nos formules
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Gratuit"
            price="0€"
            features={freeFeatures}
            ctaText="Commencer gratuitement"
            ctaLink="/register"
          />
          
          <PricingCard
            title="Premium"
            price="29€"
            period="/mois"
            features={premiumFeatures}
            ctaText="Prendre RDV"
            ctaLink="/calendar"
            recommended={true}
            subText="Réservez un rendez-vous pour discuter de votre accompagnement"
            variant="premium"
            isCalendly={true}
          />
        </div>
      </div>
    </section>
  );
};
