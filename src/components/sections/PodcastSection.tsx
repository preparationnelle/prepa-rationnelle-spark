
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
          
          {/* Schools logos section */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Nos étudiants intègrent :
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/32398317-bb54-4b85-99f3-21247ecb9e95.png" 
                  alt="HEC Paris" 
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/c6cfc2c2-ee21-48be-ad58-9fa106616bd7.png" 
                  alt="ESSEC Business School" 
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8b0d9bde-2b1c-4287-98e6-815b3b5a021b.png" 
                  alt="ESCP Business School" 
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/d8388a7f-02a4-4b44-84ef-900fa8fa9574.png" 
                  alt="EDHEC Business School" 
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-center col-span-2 md:col-span-1">
                <img 
                  src="/lovable-uploads/a3d4a91b-bf18-4bb7-8470-c6dd0ae311ea.png" 
                  alt="EM Lyon Business School" 
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
