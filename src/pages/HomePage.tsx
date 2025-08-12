
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { OffersSection } from '@/components/OffersSection';
import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { BookOpen, Calculator, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Héro avec appel à l'action principal */}
      <HeroSection />

      {/* Section Formations avec onglets pour une meilleure organisation */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Nos <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">formations spécialisées</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Méthodes éprouvées, +250 exercices validés, et accompagnement personnalisé pour +5 points garantis.
          </p>

          <div className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Maths - toujours visible */}
                <Link to="/formation/maths" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                    <Calculator className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Maths</h3>
                  <p className="text-sm text-gray-500">Maîtrisez tout le programme ECG</p>
                </Link>
                
                {/* Python - toujours visible */}
                <Link to="/pourquoi-python-prepa-ecg" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Code className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Python</h3>
                  <p className="text-sm text-gray-500">+100 commandes et scripts essentiels</p>
                </Link>
                
                {/* Découvrir toutes nos formations */}
                <Link to="/formations" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <BookOpen className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Découvrir toutes nos formations</h3>
                  <p className="text-sm text-gray-500">Anglais, Allemand, Géopolitique, Culture générale…</p>
                </Link>
              </div>

              </div>
        </div>
      </section>

      {/* Section Offres */}
      <OffersSection />
      
      {/* Section Générateur IA */}
      <AutomationsSection />
      
      {/* Section Témoignages */}
      <SuperprofReviewsSection />
      
      {/* Section Podcast */}
      <PodcastSection />
      
      {/* Section Partenaires */}
      <PartnersSection />
      
      {/* Section Appel à l'action */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
