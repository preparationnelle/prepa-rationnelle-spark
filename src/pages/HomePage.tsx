
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { BookOpen, Calculator, Code, Languages, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Héro avec appel à l'action principal */}
      <HeroSection />

      {/* Section Formations avec onglets pour une meilleure organisation */}
      <section className="pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-orange-600 font-bold">Nos formations spécialisées</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Méthodes éprouvées, +250 exercices ultra classiques, flashcards, quizz
          </p>

          <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Maths ECG */}
                <Link to="/formation/maths" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-300 hover:bg-yellow-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-300 transition-colors duration-300">
                    <Calculator className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Maths ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-yellow-600">
                      <span className="mr-2">✓</span>
                      <span>20 chapitres progressifs</span>
                    </div>
                    <div className="flex items-center text-yellow-600">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-yellow-600">
                      <span className="mr-2">✓</span>
                      <span>Méthodes et astuces de prépa</span>
                    </div>
                  </div>
                </Link>
                
                {/* Python ECG */}
                <Link to="/pourquoi-python-prepa-ecg" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-300 hover:bg-blue-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-300 transition-colors duration-300">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Python ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600">
                      <span className="mr-2">✓</span>
                      <span>54 commandes essentielles</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span className="mr-2">✓</span>
                      <span>+3 à 5 points garantis</span>
                    </div>
                  </div>
                </Link>
                
                {/* Anglais ECG */}
                <Link to="/formation/anglais" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-green-300 hover:bg-green-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-300 transition-colors duration-300">
                    <Languages className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Anglais ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✓</span>
                      <span>Grammaire systématique</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✓</span>
                      <span>Thèmes et versions</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✓</span>
                      <span>Essais et synthèses</span>
                    </div>
                  </div>
                </Link>

                {/* Espagnol ECG */}
                <Link to="/formation/espagnol" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-red-300 hover:bg-red-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-300 transition-colors duration-300">
                    <Languages className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Espagnol ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Perfectionnez votre espagnol avec méthodes ciblées, grammaire avancée et préparation intensive aux concours.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">✓</span>
                      <span>Grammaire et conjugaison</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">✓</span>
                      <span>Thèmes et versions</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">✓</span>
                      <span>Expression écrite et orale</span>
                    </div>
                  </div>
                </Link>

                {/* Géopolitique */}
                <Link to="/formation/geopolitique" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-300 transition-colors duration-300">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Géopolitique</h3>
                  <p className="text-sm text-gray-600 mb-3">Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Enjeux contemporains</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Méthodes d'analyse</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Actualité stratégique</span>
                    </div>
                  </div>
                </Link>

                {/* Culture Générale */}
                <Link to="/formation/culture-generale" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-purple-300 hover:bg-purple-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-300 transition-colors duration-300">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Culture Générale</h3>
                  <p className="text-sm text-gray-600 mb-3">Développez votre culture générale avec méthodes et outils pour réussir les épreuves de synthèse et d'essai.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-purple-600">
                      <span className="mr-2">✓</span>
                      <span>Méthodes de synthèse</span>
                    </div>
                    <div className="flex items-center text-purple-600">
                      <span className="mr-2">✓</span>
                      <span>Analyse de textes</span>
                    </div>
                    <div className="flex items-center text-purple-600">
                      <span className="mr-2">✓</span>
                      <span>Épreuves d'essai</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </section>


      {/* Section Générateur IA */}
      <AutomationsSection />
      
      {/* Section Témoignages */}
      <SuperprofReviewsSection />
      
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
