
import React from "react";

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

export default function PartnersPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">Nos partenaires</h1>
        <p className="text-center text-muted-foreground mb-10">
          Prepa Rationnelle travaille avec différents partenaires reconnus pour enrichir l'expérience des étudiants.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 border border-orange-100 w-56 hover:shadow-lg transition-shadow hover:border-primary/30"
              aria-label={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-16 w-auto mb-3 object-contain"
                loading="lazy"
              />
              <span className="font-semibold text-primary text-center">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
