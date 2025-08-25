import React from 'react';

const PolitikAllemandeTestPage = () => {
  console.log('TEST: PolitikAllemandeTestPage chargé');
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          TEST - Politik in Deutschland
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            Si vous voyez ce texte, le routage fonctionne correctement.
          </p>
          <p className="text-base text-gray-600">
            Le problème vient du contenu du composant principal PolitikAllemandePage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitikAllemandeTestPage;