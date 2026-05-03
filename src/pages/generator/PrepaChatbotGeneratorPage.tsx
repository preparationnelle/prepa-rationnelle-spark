import React from 'react';
import { Heart, Youtube } from 'lucide-react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const PrepaChatbotGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Assistant IA"
            badgeIcon={Heart}
            title="Assistant"
            highlight="Prépa Rationnelle"
            subtitle="Ton compagnon d'excellence pour maîtriser toutes les matières — méthodologie, concepts, motivation."
            breadcrumb="Assistant Prépa"
          />
        </div>

        {/* Tutoriel vidéo — carte charte PR */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="px-6 py-4 border-b border-pr-gray-light flex items-center gap-2.5 bg-pr-gray-bg">
              <Youtube className="h-4 w-4 text-pr-orange-dark" />
              <span className="font-dm-sans text-sm font-semibold text-pr-black uppercase tracking-[0.04em]">
                Tutoriel vidéo · utiliser le chatbot
              </span>
            </div>
            <div className="p-3">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-pr-gray-bg">
                <iframe
                  src="https://www.loom.com/embed/ee8a95eb3d7b475695baf56bf9f29c64"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <PrepaChatbotGenerator />
      </div>
    </div>
  );
};

export default PrepaChatbotGeneratorPage;
