
import React, { useEffect, useRef } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { BookOpen, Calculator, Code, Languages, Globe, GraduationCap, Zap, Heart, Mic, Brain, ArrowRight, Sparkles, Flame, Calendar, CheckCircle, Star, Radio, Play, ExternalLink, TrendingUp, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { HeroContactForm } from '@/components/HeroContactForm';


const HomePage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
    }
  ];

  const partners = [
    { name: "Mister Prépa", logo: "/lovable-uploads/0e2fccc2-ec73-424b-b6c6-bdf1212646fa.png", url: "https://misterprepa.net" },
    { name: "Blue Factory x ESCP", logo: "/lovable-uploads/dbcafb26-e562-4250-b4c4-25fa9c1e4054.png", url: "https://www.blue-factory.eu" },
    { name: "ESCP", logo: "/lovable-uploads/c0bbdb09-51b9-4152-9846-68b665c90f83.png", url: "https://escp.eu" },
    { name: "myPREPA", logo: "/lovable-uploads/3e5a4535-39d6-4d27-8faa-8b0514725dcb.png", url: "https://myprepa.fr" },
    { name: "Maisons des Jeunes Talents", logo: "/lovable-uploads/8a218555-a2b6-4739-88e1-c64dff3c33ea.png", url: "https://fondation.groupelbpam.com/en/maisons-des-jeunes-talents-about-us/" }
  ];

  const reviews = [
    { name: "Arthur", content: "Je recommande vivement Dimitar en tant que professeur particulier. Grâce à son accompagnement régulier, j'ai pu gagner plus de 4 à 5 en maths, ce qui a vraiment fait la différence pour le concours.", subject: "Maths ECG" },
    { name: "Léa", content: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible.", subject: "Python" },
    { name: "Daniel", content: "Dimitar m'a beaucoup aidé en géopolitique, notamment sur la méthode. Grâce à son accompagnement, j'ai pu progresser en rigueur. J'ai été admis cette année à l'ESCP.", subject: "Géopolitique" },
    { name: "Sophie", content: "Dimitar a transformé ma vision des mathématiques. Sa pédagogie exceptionnelle m'a permis de passer de 8 à 15 en maths ECG. Il a un don pour expliquer les concepts complexes.", subject: "Maths ECG" },
    { name: "Thomas", content: "Grâce à Dimitar, j'ai pu intégrer l'ESSEC. Sa méthode de travail et ses explications claires ont fait toute la différence. Il s'adapte parfaitement au niveau de chaque élève.", subject: "Admis ESSEC" },
    { name: "Clara", content: "Dimitar est un pédagogue hors pair. Il a su m'aider à comprendre les subtilités de Python et à maîtriser les concepts de programmation. Sa méthode progressive est géniale.", subject: "Python" }
  ];

  const totalSlides = Math.ceil(reviews.length / 3);
  const getCurrentReviews = () => reviews.slice(currentSlide * 3, currentSlide * 3 + 3);

  const podcastUrl = "https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526";

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <SEOHead
        canonical="/"
        description="Prepa Rationnelle : Formations maths, Python, langues et méthodologie pour prépa ECG. +250 exercices, cours particuliers et coaching pour intégrer HEC, ESSEC, ESCP. Noté 5/5 sur Google."
      />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Formations spécialisées - Dark Theme */}
      {/* Section 2: Formations spécialisées - Dark Theme */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#0a0f1a]">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <Link to="/formations" className="fade-in-up inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-5 py-2.5 rounded-full text-sm font-bold mb-6 hover:bg-orange-500/30 transition-all duration-300">
              <Flame className="h-4 w-4" />
              9 formations disponibles
            </Link>
            <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white" style={{ animationDelay: '0.05s' }}>
              Nos <span className="text-orange-400">formations spécialisées</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
              Méthodes éprouvées, +250 exercices ultra classiques, flashcards, quizz
            </p>
          </div>

          {/* Formations Grid - Glassmorphism Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {formations.map((formation) => (
              <Link
                key={formation.title}
                to={formation.link}
                className="fade-in-up group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-orange-400/50 overflow-hidden"
                style={{ animationDelay: formation.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <formation.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-orange-400 transition-colors">
                    {formation.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4 leading-relaxed">
                    {formation.description}
                  </p>

                  <div className="space-y-2">
                    {formation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orange-400 font-medium">
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center text-orange-400 font-bold text-sm">
                    Découvrir <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link to="/formations">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white text-lg font-bold py-6 px-10 rounded-full shadow-lg shadow-orange-500/30">
                Voir toutes les formations <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Générateurs IA */}
      {/* Section 3: Générateurs IA */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#080c14]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <Link to="/generator" className="fade-in-up inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-5 py-2.5 rounded-full text-sm font-bold mb-6 hover:bg-orange-500/30 transition-all duration-300">
              <Zap className="h-4 w-4" />
              Powered by AI
            </Link>
            <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white" style={{ animationDelay: '0.05s' }}>
              Générateurs <span className="text-orange-400">IA</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
              Découvrez nos outils IA pour gagner du temps en prépa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {generators.map((generator) => (
              <Link
                key={generator.title}
                to={generator.link}
                className="fade-in-up group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-orange-400/50 overflow-hidden"
                style={{ animationDelay: generator.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <generator.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-orange-400 transition-colors">
                    {generator.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4 leading-relaxed">
                    {generator.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {generator.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orange-400 font-medium">
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30">
                    <Zap className="mr-2 h-4 w-4" />
                    Utiliser
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/generator">
              <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/20 text-lg font-bold py-6 px-10 rounded-full">
                Voir tous les générateurs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Lead Magnet (Contact Form) */}
      {/* Section 4: Lead Magnet (Contact Form) */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#0a0f1a]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Offre limitée
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Une <span className="text-orange-400">bonne méthode</span> rend la <span className="text-white">progression inévitable</span>.
              </h2>
              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Ne laissez pas les lacunes s'accumuler. Remplissez ce formulaire pour obtenir votre programme personnalisé et un <span className="text-orange-400 font-semibold">premier cours offert</span>.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { text: '3 créneaux restants cette semaine', icon: Calendar },
                { text: 'Réponse rapide sous 24h', icon: CheckCircle },
                { text: 'Cours 100% offert sans engagement', icon: Star }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="h-12 w-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/30 transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
            <HeroContactForm showContent={true} theme="orange" />
          </div>
        </div>
      </section>

      {/* Section 5: Interview Europe 1 - White Theme for Contrast */}
      {/* Section 5: Interview Europe 1 - White Theme for Contrast */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-white">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400/10 rounded-full blur-[60px]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Radio className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-orange-600 bg-orange-100 border border-orange-200 px-3 py-1 rounded-full">
                  Interview exclusive
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Découvrez notre interview sur{' '}
                <span className="text-orange-500">Europe 1</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Écoutez notre fondateur présenter comment Prepa Rationnelle révolutionne la préparation aux oraux des écoles de commerce.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
                    <Play className="h-5 w-5 mr-2" />
                    Écouter le podcast
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>+2M auditeurs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-orange-300/10 rounded-3xl blur-2xl"></div>
                <img
                  src="/lovable-uploads/b7d741c4-5fa9-4c55-8fe0-37e63fa54d5f.png"
                  alt="Interview Europe 1"
                  className="relative shadow-2xl rounded-2xl w-96 md:w-[500px] h-auto object-cover border border-gray-200"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.5: Conseils en vidéo */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#080c14]">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <Link to="/conseils-videos" className="fade-in-up inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-5 py-2.5 rounded-full text-sm font-bold mb-6 hover:bg-orange-500/30 transition-all duration-300">
              <Play className="h-4 w-4" />
              7 vidéos disponibles
            </Link>
            <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white" style={{ animationDelay: '0.05s' }}>
              Mes <span className="text-orange-400">conseils en vidéo</span>
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
              Méthodes de travail, gestion du temps, astuces pour progresser en prépa ECG
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Prépare-toi chez toi', youtubeId: 'vPlRUX1OfiQ', icon: '🏠' },
              { title: 'Live Conseils', youtubeId: 'GEI6T4SMRDw', icon: '🔴' },
              { title: 'Gestion du temps de travail', youtubeId: '6hZVGoSB5ts', icon: '⏱️' },
            ].map((video, idx) => (
              <Link
                key={video.youtubeId}
                to="/conseils-videos"
                className="fade-in-up group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-orange-400/50"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <div className="relative aspect-video bg-black/40 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300 flex items-center gap-2">
                    <span>{video.icon}</span> {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/conseils-videos">
              <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/20 text-lg font-bold py-6 px-10 rounded-full">
                Voir toutes les vidéos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Partenaires - Dark Theme */}
      {/* Section 6: Partenaires - Dark Theme */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 relative overflow-hidden bg-[#0a0f1a]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Nos <span className="text-orange-400">partenaires</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center w-32 transition-transform hover:scale-110"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group-hover:border-orange-400/50 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="mt-2 text-xs text-white/50 text-center group-hover:text-orange-400 transition-colors">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Avis d'élèves - Dark Theme */}
      {/* Section 7: Avis d'élèves - Dark Theme */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#080c14]">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Avis d'élèves
              </h2>
              <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1.5 rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">5.0</span>
                <span className="text-xs text-white/60">Superprof</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 border border-white/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm text-white/60 min-w-[60px] text-center">
                  {currentSlide + 1}/{totalSlides}
                </span>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 border border-white/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <Link to="/avis">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30">
                  Voir +20 avis
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getCurrentReviews().map((review, index) => (
              <Link key={index} to="/avis" className="block group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-orange-400/50 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/30">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm truncate">{review.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                        <span className="text-xs text-orange-400 font-medium">{review.subject}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                    "{review.content}"
                  </p>
                  <div className="mt-4 text-xs text-orange-400 font-medium group-hover:text-orange-300 transition-colors flex items-center gap-1">
                    Lire la suite <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

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
