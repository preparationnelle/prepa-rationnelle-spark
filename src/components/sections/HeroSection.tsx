import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return <section className="min-h-[90vh] w-full flex flex-col justify-center items-center py-20 px-4">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-[#F36C00] text-center mb-8 leading-[1.1] w-full max-w-[900px]" style={{
        wordBreak: 'keep-all'
      }}>
          écris ta réussite en prépa ECG
        </h1>

        {/* Triptyque harmonisé */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 w-full max-w-[900px]">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#F36C00] mb-2">Une prépa exigeante</h3>
            <p className="text-gray-600">Excellence académique et rigueur méthodologique</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#F36C00] mb-2">Un suivi humain</h3>
            <p className="text-gray-600">Accompagnement personnalisé et bienveillant</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#F36C00] mb-2">Des résultats concrets</h3>
            <p className="text-gray-600">Progression mesurable et objectifs atteints</p>
          </div>
        </div>

        {/* Message d'accompagnement simplifié */}
        <p className="text-lg sm:text-xl text-[#F36C00] text-center font-medium leading-[1.4] mb-6 max-w-[800px]">
          Ensemble, révélons ton potentiel et construisons ta réussite étape par étape
        </p>

        {/* Call to Action */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F36C00] mb-4">
            Prêt à intégrer le top 5 avec méthode ?
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-[600px]">
          <Link to="/register" className="flex-1 sm:flex-none">
            <Button size="lg" className="w-full sm:w-auto px-10 py-6 bg-[#F36C00] text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:bg-[#e66200] transition-all duration-300 transform hover:scale-105 border-0" style={{
            boxShadow: "0 8px 25px rgba(243,108,0,0.3)"
          }}>
              Je débloque ma stratégie gagnante
            </Button>
          </Link>
          <Link to="/login" className="flex-1 sm:flex-none">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-6 text-[#F36C00] border-2 border-[#F36C00] bg-white/80 backdrop-blur-sm hover:bg-[#F36C00] hover:text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{
            boxShadow: "0 4px 15px rgba(243,108,0,0.1)"
          }}>
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};