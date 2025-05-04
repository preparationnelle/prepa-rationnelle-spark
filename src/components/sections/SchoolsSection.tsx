
import React from 'react';
import { SchoolCard } from '../SchoolCard';
import { skemaData, gemData, kedgeData, neomaData } from '@/data/schools';

export const SchoolsSection = () => {
  const schools = [
    {
      name: "ESCP Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Entretien structuré autour d'un questionnaire préalable.",
      link: "/ecoles/escp"
    },
    {
      name: "ESSEC Business School",
      duration: "Entretien de 30-45 minutes, coefficient 10.",
      feature: "Format approfondi avec mise en situation initiale.",
      link: "/ecoles/essec"
    },
    {
      name: "EDHEC Business School",
      duration: "Entretien de 1h30, coefficient 15.",
      feature: "Format tripartite avec présentation, travail de groupe et entretien.",
      link: "/ecoles/edhec"
    },
    {
      name: "EM Lyon Business School",
      duration: "Entretien de 25 minutes, coefficient 9.",
      feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
      link: "/ecoles/emlyon"
    },
    {
      name: skemaData.name,
      duration: "Entretien de 25 minutes, coefficient 20.",
      feature: "CV fictif à 10 ans.",
      link: "/ecoles/skema"
    },
    {
      name: "Audencia Business School",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
      link: "/ecoles/audencia"
    },
    {
      name: gemData.name,
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Format original avec entretien inversé.",
      link: "/ecoles/gem"
    },
    {
      name: kedgeData.name,
      duration: "Entretien de 30 minutes, coefficient 14.",
      feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
      link: "/ecoles/kedge"
    },
    {
      name: neomaData.name,
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Format structuré autour de la 'réussite responsable'.",
      link: "/ecoles/neoma"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="schools-section">
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
              duration={school.duration}
              feature={school.feature}
              link={school.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
