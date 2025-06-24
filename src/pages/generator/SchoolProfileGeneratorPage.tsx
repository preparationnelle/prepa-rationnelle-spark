
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
          Automatise la recherche des infos-clés pour ton entretien : valeurs, assos, doubles diplômes, actu, etc.
        </p>
      </div>

      <SchoolProfileGenerator />
    </div>
  );
};

export default SchoolProfileGeneratorPage;
