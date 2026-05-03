import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const GeopoliticsGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="HGG · ECG"
            badgeIcon={Globe}
            title="Générateur de"
            highlight="Géopolitique"
            subtitle="Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés."
            breadcrumb="Géopolitique"
          />
        </div>

        <GeopoliticsGenerator language={language} />
      </div>
    </div>
  );
};

export default GeopoliticsGeneratorPage;
