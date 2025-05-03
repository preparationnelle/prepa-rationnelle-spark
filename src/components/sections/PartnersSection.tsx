
import React from 'react';

export const PartnersSection = () => {
  const partners = [
    {
      name: "Mister Prépa",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Mister Prépa"
    },
    {
      name: "Blue Factory x ESCP",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Blue Factory x ESCP"
    },
    {
      name: "ESCP Business School",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo ESCP Business School"
    },
    {
      name: "myPREPA",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo myPREPA"
    },
    {
      name: "Maisons des Jeunes Talents",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Maisons des Jeunes Talents"
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-8">
          Nos partenaires
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Image complète pour mobile */}
          <div className="w-full block md:hidden mb-4">
            <img 
              src="/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png" 
              alt="Nos partenaires" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Logos individuels pour écrans plus grands - masqués sur mobile */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex justify-center flex-wrap gap-8 md:gap-12">
              <img 
                src="/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png" 
                alt="Nos partenaires" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
