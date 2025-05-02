
import React from 'react';
import { SchoolCard } from '../SchoolCard';

export const SchoolsSection = () => {
  const schools = [
    {
      name: "ESCP Business School",
      description: "Format court (30 min), coefficient 12. Entretien structuré autour d'un questionnaire préalable.",
      link: "/ecoles/escp"
    },
    {
      name: "ESSEC Business School",
      description: "Entretien long (30-45 min), coefficient 10. Format approfondi avec mise en situation.",
      link: "/ecoles/essec"
    },
    {
      name: "EDHEC Business School",
      description: "Format tripartite (1h30), coefficient 15. Présentation, travail de groupe et entretien.",
      link: "/ecoles/edhec"
    },
    {
      name: "EM Lyon Business School",
      description: "Entretien \"Flash\" (25 min), coefficient 9. Format ludique avec cartes thématiques.",
      link: "/ecoles/emlyon"
    },
    {
      name: "SKEMA Business School",
      description: "Entretien projectif (25 min), coefficient 20. CV fictif à 10 ans.",
      link: "/ecoles/skema"
    },
    {
      name: "Audencia Business School",
      description: "Entretien à orientation RSE (30 min), coefficient 10. Forte dimension responsabilité sociétale.",
      link: "/ecoles/audencia"
    },
    {
      name: "Grenoble École de Management",
      description: "Entretien multi-parties (30 min), coefficient 10. Format avec exposé d'actualité et entretien inversé.",
      link: "/ecoles/gem"
    },
    {
      name: "KEDGE Business School",
      description: "Entretien classique (30 min), coefficient 14. Basé sur un questionnaire avec focus sur le \"Grow by Doing\".",
      link: "/ecoles/kedge"
    },
    {
      name: "NEOMA Business School",
      description: "Entretien classique (30 min), coefficient 12. Format avec questionnaire similaire à ESCP.",
      link: "/ecoles/neoma"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-4">
          Fiches écoles
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez nos analyses des entretiens de personnalité des grandes écoles et préparez-vous efficacement.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schools.map((school, index) => (
            <SchoolCard 
              key={index}
              name={school.name}
              description={school.description}
              link={school.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
