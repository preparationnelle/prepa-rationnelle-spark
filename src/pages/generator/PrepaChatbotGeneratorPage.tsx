
import React from 'react';
import { Youtube } from 'lucide-react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

const PrepaChatbotGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Assistant IA Prépa Rationnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ton compagnon d'excellence pour maîtriser toutes les matières, de la méthodologie aux concepts les plus complexes.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100/50">
            <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-800">Tutoriel vidéo - Comment utiliser le Chatbot</span>
            </div>
            <div className="p-2 bg-white">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100">
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
