import React from 'react';
import { AtlasECGChatbot } from '@/components/generator/AtlasECGChatbot';

const AtlasECGChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Atlas ECG - Tuteur Géopolitique IA
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ton assistant spécialisé en HGG pour préparer les concours BCE et Ecricome, avec accès à la base de définitions, glossaire et références du programme.
          </p>
        </div>

        <AtlasECGChatbot mode="full" />
      </div>
    </div>
  );
};

export default AtlasECGChatbotPage;
