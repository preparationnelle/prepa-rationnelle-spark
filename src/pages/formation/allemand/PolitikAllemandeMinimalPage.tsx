import React from 'react';

const PolitikAllemandeMinimalPage = () => {
  console.log('PolitikAllemandeMinimalPage: Chargé avec succès');
  
  return (
    <div className="min-h-screen bg-[#F8FAFF] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Politik in Deutschland
        </h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Version Minimale</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cette version minimale du composant fonctionne. 
            Le problème vient probablement du contenu complexe du composant original.
          </p>
          <p className="text-base text-gray-600">
            Nous allons maintenant identifier quelle partie du composant original cause le problème.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitikAllemandeMinimalPage;