import React from 'react';
import { Globe } from 'lucide-react';
import { AtlasECGChatbot } from '@/components/generator/AtlasECGChatbot';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const AtlasECGChatbotPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Tuteur IA"
            badgeIcon={Globe}
            title="Atlas ECG"
            highlight="HGG"
            subtitle="Ton assistant spécialisé en HGG pour préparer les concours BCE et Ecricome, avec accès à la base de définitions, glossaire et références du programme."
            breadcrumb="Atlas ECG"
          />
        </div>

        <AtlasECGChatbot mode="full" />
      </div>
    </div>
  );
};

export default AtlasECGChatbotPage;
