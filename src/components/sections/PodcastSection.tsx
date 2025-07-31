
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Mic, Radio, TrendingUp } from 'lucide-react';

export const PodcastSection = () => {
  const podcastUrl = "https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526";
  
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Radio className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Interview exclusive
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Découvrez notre interview sur{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Europe 1
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Écoutez notre fondateur présenter comment Prepa Rationnelle révolutionne la préparation aux oraux des écoles de commerce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Écouter le podcast
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Mic className="h-4 w-4" />
                  <span>Interview radio</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>+2M auditeurs</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative">
            <a 
              href={podcastUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 block"
            >
              <img 
                src="/lovable-uploads/b7d741c4-5fa9-4c55-8fe0-37e63fa54d5f.png" 
                alt="Interview Europe 1 - Jeune homme parlant dans un microphone bleu" 
                className="shadow-2xl rounded-2xl w-96 md:w-[500px] h-auto object-cover"
              />
            </a>
            
            {/* Europe 1 badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-orange-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="font-bold text-blue-600">Europe 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
