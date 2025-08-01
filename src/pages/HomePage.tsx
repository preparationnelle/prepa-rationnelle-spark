
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { OffersSection } from '@/components/OffersSection';
import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calculator, Code, Globe, Languages, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Héro avec appel à l'action principal */}
      <HeroSection />

      {/* Section Formations avec onglets pour une meilleure organisation */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Nos <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">formations spécialisées</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
          </p>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all">Toutes les formations</TabsTrigger>
              <TabsTrigger value="maths-info">Maths & Informatique</TabsTrigger>
              <TabsTrigger value="langues-geo">Langues & Géopolitique</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Maths */}
                <Link to="/formation/maths" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                    <Calculator className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Maths</h3>
                  <p className="text-sm text-gray-500">Maîtrisez tout le programme ECG</p>
                </Link>
                
                {/* Python */}
                <Link to="/pourquoi-python-prepa-ecg" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Code className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Python</h3>
                  <p className="text-sm text-gray-500">54 commandes essentielles</p>
                </Link>
                
                {/* Anglais */}
                <Link to="/formation/anglais" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Languages className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Anglais</h3>
                  <p className="text-sm text-gray-500">Grammaire et synthèses</p>
                </Link>
                
                {/* Allemand */}
                <Link to="/formation/allemand" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <Languages className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Allemand</h3>
                  <p className="text-sm text-gray-500">Déclinaisons et cas</p>
                </Link>
                
                {/* Géopolitique */}
                <Link to="/formation/geopolitique" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <Globe className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Géopolitique</h3>
                  <p className="text-sm text-gray-500">Enjeux contemporains</p>
                </Link>
                
                {/* Entretiens */}
                <Link to="/methodologie/entretiens-personnalite" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Entretiens</h3>
                  <p className="text-sm text-gray-500">Techniques de présentation</p>
                </Link>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/formations">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Voir toutes nos formations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="maths-info" className="mt-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Maths */}
                <Link to="/formation/maths" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                    <Calculator className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Maths</h3>
                  <p className="text-sm text-gray-500">Maîtrisez tout le programme ECG</p>
                </Link>
                
                {/* Python */}
                <Link to="/pourquoi-python-prepa-ecg" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Code className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Python</h3>
                  <p className="text-sm text-gray-500">54 commandes essentielles</p>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="langues-geo" className="mt-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Anglais */}
                <Link to="/formation/anglais" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Languages className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Anglais</h3>
                  <p className="text-sm text-gray-500">Grammaire et synthèses</p>
                </Link>
                
                {/* Allemand */}
                <Link to="/formation/allemand" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <Languages className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Allemand</h3>
                  <p className="text-sm text-gray-500">Déclinaisons et cas</p>
                </Link>
                
                {/* Géopolitique */}
                <Link to="/formation/geopolitique" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <Globe className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Géopolitique</h3>
                  <p className="text-sm text-gray-500">Enjeux contemporains</p>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section Offres */}
      <OffersSection />
      
      {/* Section Témoignages */}
      <SuperprofReviewsSection />
      
      {/* Section Automatisations */}
      <AutomationsSection />
      
      {/* Section Podcast */}
      <PodcastSection />
      
      {/* Section Partenaires */}
      <PartnersSection />
      
      {/* Section Appel à l'action */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
