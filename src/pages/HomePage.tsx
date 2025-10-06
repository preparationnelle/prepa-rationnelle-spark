
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { BookOpen, Calculator, Code, Languages, Globe, GraduationCap, Zap, Heart, Mic, Library, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Section 1: Héro */}
      <HeroSection />

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section 2: Formations spécialisées (inclut le bouton "Toutes nos formations") */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
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
                <Link to="/formation/maths" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Calculator className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">Maths ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>20 chapitres progressifs</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes et astuces de prépa</span>
                    </div>
                  </div>
                </Link>

                {/* Python ECG */}
                <Link to="/pourquoi-python-prepa-ecg" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Code className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">Python ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>54 commandes essentielles</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>+3 à 5 points garantis</span>
                    </div>
                  </div>
                </Link>

                {/* Anglais ECG */}
                <Link to="/formation/anglais" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Languages className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">Anglais ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Grammaire systématique</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Thèmes et versions</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Essais et synthèses</span>
                    </div>
                  </div>
                </Link>

                {/* Culture Générale (remplace l'Espagnol) */}
                <Link to="/formation/culture-generale" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">Culture Générale</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Développez votre culture générale avec méthodes et outils pour réussir les épreuves de synthèse et d'essai.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes de synthèse</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Analyse de textes</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Épreuves d'essai</span>
                    </div>
                  </div>
                </Link>

                {/* Géopolitique */}
                <Link to="/formation/geopolitique" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Globe className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">Géopolitique</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Enjeux contemporains</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes d'analyse</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Actualité stratégique</span>
                    </div>
                  </div>
                </Link>

                {/* ESH ECG */}
                <Link to="/formation/esh" className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-orange-700 transition-colors duration-300">ESH ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Maîtrisez l'économie et les sciences humaines avec méthodes ciblées et études de cas pratiques.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Première et deuxième année</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodologie spécialisée</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Études de cas concrètes</span>
                    </div>
                  </div>
                </Link>

                
              </div>
            </div>

          {/* Bouton Toutes nos formations - Inclus dans la même section */}
          <div className="flex justify-center mt-12">
            <Link to="/formations">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Toutes nos formations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section 3: Générateurs IA */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        {/* Floating elements - Blue bubbles only */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-black">Générateurs </span>
              <span className="text-blue-600">IA</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos outils IA pour gagner du temps en prépa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Générateur Langues */}
            <Link
              to="/generator/languages-unified"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center border border-transparent hover:border-orange-300 hover:bg-orange-50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Languages className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-700 group-hover:text-orange-800 transition-colors">Langues</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">Générez et corrigez vos textes</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Correction automatique</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Génération de paragraphes</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Thèmes corrigés</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Générateur Géopo */}
            <Link
              to="/generator/geopolitics-unified"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center border border-transparent hover:border-orange-300 hover:bg-orange-50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Globe className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-700 group-hover:text-orange-800 transition-colors">Géopolitique</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">Études et fiches automatiques</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Études géopolitiques</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Fiches automatiques</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Analyse stratégique</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Chat-bot prépa */}
            <Link
              to="/generator/prepa-chatbot"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center border border-transparent hover:border-orange-300 hover:bg-orange-50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Heart className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-700 group-hover:text-orange-800 transition-colors">Chat-bot</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">Conseils et motivation</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Conseils méthodologiques</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Motivation quotidienne</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Bien-être prépa</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>
          </div>

          {/* Bouton CTA vers tous les générateurs */}
          <div className="flex justify-center mt-12">
            <Link to="/generator">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <ChevronRight className="h-5 w-5" />
                Tous nos générateurs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>
      
      {/* Section 4: Avis d'élèves */}
      <SuperprofReviewsSection />

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>
      
      {/* Section 5: Interview Europe 1 */}
      <PodcastSection />

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>
      
      {/* Section 6: Partenaires */}
      <PartnersSection />
      
      {/* Section Appel à l'action - Supprimée */}
      {/* <CallToActionSection /> */}
    </div>
  );
};

export default HomePage;
