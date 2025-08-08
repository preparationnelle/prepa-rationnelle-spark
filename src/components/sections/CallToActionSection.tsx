
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CallToActionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Prêt à transformer votre <span className="text-[#F36C00]">réussite</span> ?
        </h2>
        <div className="flex justify-center max-w-2xl mx-auto">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto px-10 py-6 bg-[#F36C00] text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:bg-[#e66200] transition-all duration-300 transform hover:scale-105">
              Réserve ton premier coaching gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
