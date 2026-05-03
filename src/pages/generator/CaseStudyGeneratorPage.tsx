import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const CaseStudyGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Géopolitique"
            badgeIcon={FileText}
            title="Générateur d'Études"
            highlight="de cas"
            subtitle="Transformez vos articles d'actualité en études de cas géopolitiques avec chiffres clés et sujets de dissertation."
            breadcrumb="Études de cas"
          />
        </div>

        <CaseStudyGenerator language={language} />
      </div>
    </div>
  );
};

export default CaseStudyGeneratorPage;
