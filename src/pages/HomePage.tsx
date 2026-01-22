
import React, { useEffect, useRef } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { BookOpen, Calculator, Code, Languages, Globe, GraduationCap, Zap, Heart, Mic, Brain, ChevronRight, ArrowRight, Sparkles, Flame } from 'lucide-react';
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
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const formations = [
    {
      title: 'Maths ECG',
      icon: Calculator,
      description: 'Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre.',
      features: ['20 chapitres progressifs', 'Exercices type concours', 'Méthodes de prépa'],
      link: '/formation/maths',
      delay: '0.1s'
    },
    {
      title: 'Python ECG',
      icon: Code,
      description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques.',
      features: ['54 commandes essentielles', 'Exercices type concours', '+3 à 5 points garantis'],
      link: '/pourquoi-python-prepa-ecg',
      delay: '0.15s'
    },
    {
      title: 'Anglais ECG',
      icon: Languages,
      description: 'Perfectionnez votre anglais avec méthodes ciblées et grammaire avancée.',
      features: ['Grammaire systématique', 'Thèmes et versions', 'Essais et synthèses'],
      link: '/formation/anglais',
      delay: '0.2s'
    },
    {
      title: 'Culture Générale',
      icon: BookOpen,
      description: 'Développez votre culture générale avec méthodes et outils pour réussir.',
      features: ['Méthodes de synthèse', 'Analyse de textes', "Épreuves d'essai"],
      link: '/formation/culture-generale',
      delay: '0.25s'
    },
    {
      title: 'Géopolitique',
      icon: Globe,
      description: 'Analysez les enjeux mondiaux contemporains avec méthodes et outils.',
      features: ['Enjeux contemporains', "Méthodes d'analyse", 'Actualité stratégique'],
      link: '/formation/geopolitique',
      delay: '0.3s'
    },
    {
      title: 'ESH ECG',
      icon: GraduationCap,
      description: "Maîtrisez l'économie et les sciences humaines avec méthodes ciblées.",
      features: ['Première et deuxième année', 'Méthodologie spécialisée', 'Études de cas concrètes'],
      link: '/formation/esh',
      delay: '0.35s'
    }
  ];

  const generators = [
    {
      title: 'Flashcards',
      icon: Brain,
      description: 'Créez vos flashcards personnalisées',
      features: ['Flashcards personnalisées', 'Révision intelligente', 'Suivi des progrès'],
      link: '/generator/flashcards',
      delay: '0.1s'
    },
    {
      title: 'Langues',
      icon: Languages,
      description: 'Générez et corrigez vos textes',
      features: ['Correction automatique', 'Génération de paragraphes', 'Thèmes corrigés'],
      link: '/generator/languages-unified',
      delay: '0.15s'
    },
    {
      title: 'Géopolitique',
      icon: Globe,
      description: 'Études et fiches automatiques',
      features: ['Études géopolitiques', 'Fiches automatiques', 'Analyse stratégique'],
      link: '/generator/geopolitics-unified',
      delay: '0.2s'
    },
    {
      title: 'Culture Générale',
      icon: BookOpen,
      description: 'Thèmes et problématiques',
      features: ['Définition de thèmes', 'Problématiques rapides', 'Plans détaillés'],
      link: '/generator/culture-generale',
      delay: '0.25s'
    },
    {
      title: 'Oraux',
      icon: Mic,
      description: 'Questions et réponses orales',
      features: ['Questions types concours', 'Réponses générées', 'Entraînement oral'],
      link: '/generator/orals-unified',
      delay: '0.3s'
    },
    {
      title: 'Chat-bot',
      icon: Heart,
      description: 'Conseils et motivation',
      features: ['Conseils méthodologiques', 'Motivation quotidienne', 'Bien-être prépa'],
      link: '/generator/prepa-chatbot',
      delay: '0.35s'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Héro (Dark + Form + Stats + Value Props) */}
      <HeroSection />

      {/* Section 2: Formations spécialisées */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-16">
            <div className="fade-in-up inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-5 shadow-lg shadow-orange-500/30">
              <Flame className="h-4 w-4" />
              9 formations disponibles
            </div>
            <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ animationDelay: '0.05s' }}>
              Nos <span className="text-orange-500">formations spécialisées</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
              Méthodes éprouvées, +250 exercices ultra classiques, flashcards, quizz
            </p>
          </div>

          {/* Formations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {formations.map((formation) => (
              <Link
                key={formation.title}
                to={formation.link}
                className="fade-in-up group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
                style={{ animationDelay: formation.delay }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <formation.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {formation.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
                    {formation.description}
                  </p>

                  <div className="space-y-2">
                    {formation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orange-600 font-semibold">
                        <span className="mr-2 text-orange-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center text-orange-500 font-bold text-sm">
                    Découvrir <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="fade-in-up flex justify-center" style={{ animationDelay: '0.4s' }}>
            <Link to="/formations">
              <Button className="px-10 py-7 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 group">
                <span className="flex items-center gap-2">
                  Découvre nos 9 formations
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Générateurs IA - Dark themed for contrast */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-[#0a0f1a]">
        {/* Decorative glows */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-[120px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-16">
            <div className="fade-in-up inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-5 shadow-lg shadow-orange-500/30">
              <Zap className="h-4 w-4" />
              Powered by AI
            </div>
            <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white" style={{ animationDelay: '0.05s' }}>
              Générateurs <span className="text-orange-400">IA</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
              Découvrez nos outils IA pour gagner du temps en prépa
            </p>
          </div>

          {/* Generators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {generators.map((generator) => (
              <Link
                key={generator.title}
                to={generator.link}
                className="fade-in-up group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-2 border-white/10 hover:border-orange-400/50 overflow-hidden"
                style={{ animationDelay: generator.delay }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <generator.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-orange-400 transition-colors">
                    {generator.title}
                  </h3>

                  <p className="text-sm text-white/70 mb-4 leading-relaxed font-medium">
                    {generator.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {generator.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orange-400 font-semibold">
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 group-hover:shadow-xl transition-all duration-300">
                    <Zap className="mr-2 h-4 w-4" />
                    Utiliser le générateur
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="fade-in-up flex justify-center" style={{ animationDelay: '0.4s' }}>
            <Link to="/generator">
              <Button className="px-10 py-7 text-lg font-bold bg-white hover:bg-gray-100 text-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="flex items-center gap-2">
                  Tous nos générateurs
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Avis d'élèves */}
      <SuperprofReviewsSection />

      {/* Section 5: Interview Europe 1 */}
      <PodcastSection />

      {/* Section 6: Partenaires */}
      <PartnersSection />

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

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
