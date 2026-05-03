import React from 'react';
import { Calculator } from 'lucide-react';
import { MathGenerator } from '@/components/generator/MathGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const MathGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12">
          <GeneratorHero
            badge="Maths Approfondies"
            badgeIcon={Calculator}
            title="Générateur"
            highlight="Maths IA"
            subtitle="Posez vos questions sur les théorèmes du programme Maths Approfondies 1ère et 2ème année avec réponses en LaTeX."
            breadcrumb="Maths"
          />
        </div>

        <MathGenerator />
      </div>
    </div>
  );
};

export default MathGeneratorPage;
