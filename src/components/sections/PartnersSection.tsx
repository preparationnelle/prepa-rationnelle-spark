
import React from 'react';

export const PartnersSection = () => {
  const partners = [
    {
      name: "Mister Prépa",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Mister Prépa",
      url: "https://misterprepa.net"
    },
    {
      name: "Blue Factory x ESCP",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Blue Factory x ESCP",
      url: "https://www.blue-factory.eu"
    },
    {
      name: "ESCP Business School",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo ESCP Business School",
      url: "https://escp.eu"
    },
    {
      name: "myPREPA",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo myPREPA",
      url: "https://myprepa.fr"
    },
    {
      name: "Maisons des Jeunes Talents",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Maisons des Jeunes Talents",
      url: "https://fondation.groupelbpam.com/en/maisons-des-jeunes-talents-about-us/"
    },
    {
      name: "Stéphane Preteseille",
      logo: "/lovable-uploads/77c5d94a-6b9a-43b4-95df-b1e0923dd0d2.png",
      alt: "Logo Stéphane Preteseille",
      url: "https://stephanepreteseille.com"
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-8">
          Nos partenaires
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Liste des logos partenaires en version cliquable */}
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-40"
              aria-label={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="h-16 w-auto object-contain mb-2"
              />
              <span className="text-base text-primary text-center">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
