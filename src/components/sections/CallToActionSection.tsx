
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CallToActionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Prêt à transformer ta <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">réussite</span> ?
        </h2>
        <div className="flex justify-center max-w-2xl mx-auto">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto px-10 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Réserver mon premier cours gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
