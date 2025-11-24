import React from 'react';
import { MathGenerator } from '@/components/generator/MathGenerator';
import { Calculator } from 'lucide-react';

const MathGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center">
              <Calculator className="h-10 w-10 text-orange-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Générateur
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Maths IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Posez vos questions sur les théorèmes du programme Maths Approfondies 1ère et 2ème année avec réponses en LaTeX
          </p>
        </div>

        <MathGenerator />
      </div>
    </div>
  );
};

export default MathGeneratorPage;
