
import React, { useEffect, useRef } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { BookOpen, Calculator, Code, Languages, Globe, GraduationCap, Zap, Heart, Mic, Library, ChevronRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
      // Force l'animation pour les éléments déjà visibles
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Héro */}
      <HeroSection />

      {/* Section 2: Formations spécialisées (inclut le bouton "Toutes nos formations") */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-10 w-40 h-40 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
        
        <div className="container mx-auto max-w-6xl">
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-bold">Nos formations spécialisées</span>
          </h2>
          <p className="fade-in-up text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg" style={{ animationDelay: '0.1s' }}>
            Méthodes éprouvées, +250 exercices ultra classiques, flashcards, quizz
          </p>

          <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Maths ECG */}
                <Link to="/formation/maths" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">Maths ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>20 chapitres progressifs</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes et astuces de prépa</span>
                    </div>
                  </div>
                </Link>

                {/* Python ECG */}
                <Link to="/pourquoi-python-prepa-ecg" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.3s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">Python ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>54 commandes essentielles</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>+3 à 5 points garantis</span>
                    </div>
                  </div>
                </Link>

                {/* Anglais ECG */}
                <Link to="/formation/anglais" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.4s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Languages className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">Anglais ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Grammaire systématique</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Thèmes et versions</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Essais et synthèses</span>
                    </div>
                  </div>
                </Link>

                {/* Culture Générale (remplace l'Espagnol) */}
                <Link to="/formation/culture-generale" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.5s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">Culture Générale</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Développez votre culture générale avec méthodes et outils pour réussir les épreuves de synthèse et d'essai.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes de synthèse</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Analyse de textes</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Épreuves d'essai</span>
                    </div>
                  </div>
                </Link>

                {/* Géopolitique */}
                <Link to="/formation/geopolitique" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.6s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">Géopolitique</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Enjeux contemporains</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodes d'analyse</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Actualité stratégique</span>
                    </div>
                  </div>
                </Link>

                {/* ESH ECG */}
                <Link to="/formation/esh" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group" style={{ animationDelay: '0.7s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 transition-colors duration-300">ESH ECG</h3>
                  <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">Maîtrisez l'économie et les sciences humaines avec méthodes ciblées et études de cas pratiques.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Première et deuxième année</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Méthodologie spécialisée</span>
                    </div>
                    <div className="flex items-center text-orange-600 transition-colors duration-300">
                      <span className="mr-2">✓</span>
                      <span>Études de cas concrètes</span>
                    </div>
                  </div>
                </Link>

                
              </div>
            </div>

          {/* Bouton Toutes nos formations - Inclus dans la même section */}
          <div className="fade-in-up flex justify-center mt-12" style={{ animationDelay: '0.8s' }}>
            <Link to="/formations">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Toutes nos formations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Générateurs IA */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Floating elements - Orange bubbles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-300 rounded-full opacity-5 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Générateurs </span>
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">IA</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
              Découvrez nos outils IA pour gagner du temps en prépa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Générateur Flashcards */}
            <Link
              to="/generator/flashcards"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Flashcards</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Créez vos flashcards personnalisées</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Flashcards personnalisées</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Révision intelligente</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Suivi des progrès</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Générateur Langues */}
            <Link
              to="/generator/languages-unified"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Languages className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Langues</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Générez et corrigez vos textes</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Correction automatique</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Génération de paragraphes</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Thèmes corrigés</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Générateur Géopolitique */}
            <Link
              to="/generator/geopolitics-unified"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Géopolitique</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Études et fiches automatiques</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Études géopolitiques</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Fiches automatiques</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Analyse stratégique</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Générateur Culture Générale */}
            <Link
              to="/generator/culture-generale"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Culture Générale</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Thèmes et problématiques</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Définition de thèmes</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Problématiques rapides</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Plans détaillés</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Générateur Oraux */}
            <Link
              to="/generator/orals-unified"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mic className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Oraux</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Questions et réponses orales</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Questions types concours</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Réponses générées</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Entraînement oral</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>

            {/* Chat-bot prépa */}
            <Link
              to="/generator/prepa-chatbot"
              className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors">Chat-bot</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors">Conseils et motivation</p>
              <div className="space-y-1 text-xs w-full mb-4">
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Conseils méthodologiques</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Motivation quotidienne</span>
                </div>
                <div className="flex items-center text-orange-600 transition-colors">
                  <span className="mr-2">✓</span>
                  <span>Bien-être prépa</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-xl">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>
          </div>

          {/* Bouton CTA vers tous les générateurs */}
          <div className="fade-in-up flex justify-center mt-12" style={{ animationDelay: '0.8s' }}>
            <Link to="/generator">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2">
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

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
        }

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
