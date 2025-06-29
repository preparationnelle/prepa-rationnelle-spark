
import React from 'react';
import { SchoolProfileGenerator } from '@/components/generator/SchoolProfileGenerator';

const SchoolProfileGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Fiche École Personnalisée
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Obtenez une analyse complète et personnalisée d'une école de commerce selon votre profil, vos objectifs et vos ambitions
        </p>
      </div>

      <SchoolProfileGenerator />
    </div>
  );
};

export default SchoolProfileGeneratorPage;
