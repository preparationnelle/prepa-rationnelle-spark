
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à exceller dans vos entretiens ?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez des centaines d'étudiants qui ont amélioré leur performance aux oraux de personnalité grâce à Prepa Rationnelle.
        </p>
        <Link to="/register">
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary">
            Commencer maintenant
          </Button>
        </Link>
      </div>
    </section>
  );
};
