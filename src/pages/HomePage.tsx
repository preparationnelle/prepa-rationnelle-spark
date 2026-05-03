
import React, { useEffect, useRef } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Calculator, Code, Languages, Globe, Brain, ArrowRight, Calendar, CheckCircle, Star, Play, ExternalLink, TrendingUp, ChevronLeft, ChevronRight, Radio } from 'lucide-react';
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
    },
    {
      title: 'Python ECG',
      icon: Code,
      description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques.',
      features: ['54 commandes essentielles', 'Exercices type concours', '+3 à 5 points garantis'],
      link: '/pourquoi-python-prepa-ecg',
    },
    {
      title: 'Anglais ECG',
      icon: Languages,
      description: 'Perfectionnez votre anglais avec méthodes ciblées et grammaire avancée.',
      features: ['Grammaire systématique', 'Thèmes et versions', 'Essais et synthèses'],
      link: '/formation/anglais',
    }
  ];

  const generators = [
    {
      title: 'Flashcards',
      icon: Brain,
      description: 'Créez vos flashcards personnalisées',
      features: ['Flashcards personnalisées', 'Révision intelligente', 'Suivi des progrès'],
      link: '/generator/flashcards',
    },
    {
      title: 'Langues',
      icon: Languages,
      description: 'Générez et corrigez vos textes',
      features: ['Correction automatique', 'Génération de paragraphes', 'Thèmes corrigés'],
      link: '/generator/languages-unified',
    },
    {
      title: 'Géopolitique',
      icon: Globe,
      description: 'Études et fiches automatiques',
      features: ['Études géopolitiques', 'Fiches automatiques', 'Analyse stratégique'],
      link: '/generator/geopolitics-unified',
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

  // Composant utilitaire : en-tête de section avec eyebrow + titre serif + trait orange
  const SectionHeader: React.FC<{ eyebrow?: string; eyebrowLink?: string; title: React.ReactNode; subtitle?: string }> = ({ eyebrow, eyebrowLink, title, subtitle }) => (
    <div className="text-center mb-14">
      {eyebrow && (
        eyebrowLink ? (
          <Link to={eyebrowLink} className="fade-in-up inline-block font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-5 hover:text-pr-orange transition-colors">
            {eyebrow}
          </Link>
        ) : (
          <span className="fade-in-up inline-block font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-5">
            {eyebrow}
          </span>
        )
      )}
      <h2 className="fade-in-up font-dm-serif text-3xl sm:text-4xl lg:text-5xl text-pr-black leading-[1.1] mb-5" style={{ animationDelay: '0.05s' }}>
        {title}
      </h2>
      <div className="fade-in-up flex justify-center mb-5" style={{ animationDelay: '0.08s' }}>
        <div className="h-[2px] w-16 bg-pr-orange"></div>
      </div>
      {subtitle && (
        <p className="fade-in-up font-dm-sans text-base sm:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-[1.7]" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        canonical="/"
        description="Prepa Rationnelle : Formations maths, Python, langues et méthodologie pour prépa ECG. +250 exercices, cours particuliers et coaching pour intégrer HEC, ESSEC, ESCP. Noté 5/5 sur Google."
      />

      {/* Section 1 : Hero */}
      <HeroSection />

      {/* Section 2 : Formations spécialisées */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-pr-gray-bg">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="9 formations disponibles"
            eyebrowLink="/formations"
            title={<>Nos <em className="text-pr-orange not-italic">formations spécialisées</em></>}
            subtitle="Méthodes éprouvées, +250 exercices ultra-classiques, flashcards et quiz."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {formations.map((formation, idx) => (
              <Link
                key={formation.title}
                to={formation.link}
                className="fade-in-up group relative bg-white rounded-xl p-7 border border-pr-gray-light hover:border-pr-orange transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-dm-serif text-5xl text-pr-orange leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[2px] w-8 bg-pr-orange"></div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <formation.icon className="h-4 w-4 text-pr-orange-dark" />
                  <h3 className="font-dm-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                    {formation.title}
                  </h3>
                </div>

                <p className="font-dm-sans text-[15px] text-pr-gray-dark leading-[1.65] mb-5">
                  {formation.description}
                </p>

                <ul className="space-y-2 mb-6 pt-5 border-t border-pr-gray-light">
                  {formation.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-dm-sans text-[13px] text-pr-gray-dark">
                      <span className="text-pr-orange mt-0.5">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 font-dm-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark group-hover:text-pr-orange transition-colors">
                  Découvrir <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/formations">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold py-6 px-8 rounded-full">
                Voir toutes les formations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 : Générateurs IA */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Inclus dans ta formation"
            eyebrowLink="/generator"
            title={<>Outils pour <em className="text-pr-orange not-italic">aller plus vite</em></>}
            subtitle="Des outils pensés par des prépas, pour les prépas — pour travailler mieux et plus efficacement."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {generators.map((generator, idx) => (
              <Link
                key={generator.title}
                to={generator.link}
                className="fade-in-up group relative bg-pr-gray-bg rounded-xl p-7 border border-pr-gray-light hover:border-pr-orange hover:bg-white transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-dm-serif text-5xl text-pr-orange leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[2px] w-8 bg-pr-orange"></div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <generator.icon className="h-4 w-4 text-pr-orange-dark" />
                  <h3 className="font-dm-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                    {generator.title}
                  </h3>
                </div>

                <p className="font-dm-sans text-[15px] text-pr-gray-dark leading-[1.65] mb-5">
                  {generator.description}
                </p>

                <ul className="space-y-2 mb-6 pt-5 border-t border-pr-gray-light">
                  {generator.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-dm-sans text-[13px] text-pr-gray-dark">
                      <span className="text-pr-orange mt-0.5">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 font-dm-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark group-hover:text-pr-orange transition-colors">
                  Accéder à l'outil <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/generator">
              <Button variant="outline" className="border-pr-orange text-pr-orange-dark hover:bg-pr-orange-pale font-dm-sans font-semibold py-6 px-8 rounded-full">
                Voir tous les générateurs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 : Lead Magnet */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-pr-gray-bg">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div>
              <span className="inline-block font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-4">
                Premier cours offert
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-pr-black leading-[1.1] mb-4">
                Un accompagnement <em className="text-pr-orange not-italic">personnalisé</em> qui fait vraiment la différence.
              </h2>
              <div className="h-[2px] w-16 bg-pr-orange mb-6"></div>
              <p className="font-dm-sans text-base lg:text-lg text-pr-gray-dark max-w-xl leading-[1.7]">
                Dimitar prend le temps de comprendre ton niveau et tes objectifs. Remplis ce formulaire pour discuter de ton parcours et bénéficier d'un <span className="text-pr-orange-dark font-semibold">premier cours offert</span>.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { text: 'Réponse personnalisée sous 24h', icon: Calendar },
                { text: 'Diagnostic gratuit de ton niveau', icon: CheckCircle },
                { text: 'Premier cours 100 % offert, sans engagement', icon: Star }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-pr-orange-pale border border-pr-orange-soft flex items-center justify-center text-pr-orange-dark">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-dm-sans text-[15px] text-pr-gray-dark">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white rounded-2xl border border-pr-gray-light p-2">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange rounded-t-2xl"></div>
            <HeroContactForm showContent={true} theme="orange" />
          </div>
        </div>
      </section>

      {/* Section 5 : Interview Europe 1 */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pr-orange-pale border border-pr-orange-soft rounded-full flex items-center justify-center">
                  <Radio className="h-4 w-4 text-pr-orange-dark" />
                </div>
                <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
                  Interview exclusive
                </span>
              </div>

              <h2 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-pr-black leading-[1.1] mb-4">
                Dimitar dans l'émission{' '}
                <em className="text-pr-orange not-italic">Europe 1</em>
              </h2>

              <div className="h-[2px] w-16 bg-pr-orange mb-6"></div>

              <p className="font-dm-sans text-base lg:text-lg text-pr-gray-dark mb-8 leading-[1.7]">
                Dimitar a été invité sur Europe 1 pour parler de la méthode Prépa Rationnelle et de la façon dont il accompagne ses élèves vers les Grandes Écoles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold py-6 px-8 rounded-full">
                    <Play className="h-4 w-4 mr-2" />
                    Écouter le podcast
                    <ExternalLink className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </a>

                <div className="flex items-center gap-1.5 font-dm-sans text-[13px] text-pr-gray-mid">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>+2M auditeurs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/b7d741c4-5fa9-4c55-8fe0-37e63fa54d5f.png"
                  alt="Interview Europe 1"
                  className="rounded-xl w-80 md:w-[440px] h-auto object-cover border border-pr-gray-light"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.5 : Conseils en vidéo */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-pr-gray-bg">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="7 vidéos disponibles"
            eyebrowLink="/conseils-videos"
            title={<>Mes <em className="text-pr-orange not-italic">conseils en vidéo</em></>}
            subtitle="Méthodes de travail, gestion du temps, astuces pour progresser en prépa ECG."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Prépare-toi chez toi', youtubeId: 'vPlRUX1OfiQ' },
              { title: 'Live Conseils', youtubeId: 'GEI6T4SMRDw' },
              { title: 'Gestion du temps de travail', youtubeId: '6hZVGoSB5ts' },
            ].map((video, idx) => (
              <Link
                key={video.youtubeId}
                to="/conseils-videos"
                className="fade-in-up group relative bg-white rounded-xl overflow-hidden border border-pr-gray-light hover:border-pr-orange transition-all duration-300"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <div className="relative aspect-video bg-pr-gray-bg overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-pr-black/10 group-hover:bg-pr-black/0 transition-all duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 text-pr-orange ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <span className="font-dm-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                    Vidéo · {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-dm-serif text-xl text-pr-black group-hover:text-pr-orange-dark transition-colors">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/conseils-videos">
              <Button variant="outline" className="border-pr-orange text-pr-orange-dark hover:bg-pr-orange-pale font-dm-sans font-semibold py-6 px-8 rounded-full">
                Voir toutes les vidéos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 : Partenaires */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-pr-gray-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
              Ils nous font confiance
            </span>
            <h2 className="mt-3 font-dm-serif text-3xl md:text-4xl text-pr-black leading-[1.1]">
              Nos <em className="text-pr-orange not-italic">partenaires</em>
            </h2>
            <div className="flex justify-center mt-5">
              <div className="h-[2px] w-16 bg-pr-orange"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center w-32 transition-transform hover:scale-105"
              >
                <div className="bg-pr-gray-bg p-4 rounded-lg border border-pr-gray-light group-hover:border-pr-orange transition-all duration-300 flex items-center justify-center h-20 w-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="mt-3 font-dm-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-pr-gray-mid text-center group-hover:text-pr-orange-dark transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 : Avis d'élèves */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-pr-gray-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
                Témoignages élèves
              </span>
              <h2 className="mt-3 font-dm-serif text-3xl md:text-4xl text-pr-black leading-[1.1] flex flex-wrap items-baseline gap-x-4 gap-y-2">
                Avis d'élèves
                <span className="inline-flex items-center gap-2 bg-pr-orange-pale border border-pr-orange-soft px-3 py-1 rounded-full">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-pr-orange text-pr-orange" />
                    ))}
                  </span>
                  <span className="font-dm-sans text-[12px] font-semibold text-pr-orange-dark">5.0</span>
                  <span className="font-dm-sans text-[10px] uppercase tracking-[0.08em] text-pr-orange-dark">Superprof</span>
                </span>
              </h2>
              <div className="h-[2px] w-16 bg-pr-orange mt-4"></div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                  className="bg-white hover:bg-pr-orange-pale text-pr-gray-dark hover:text-pr-orange-dark rounded-full p-2 transition-all border border-pr-gray-light"
                  aria-label="Avis précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-dm-sans text-[12px] text-pr-gray-mid min-w-[50px] text-center">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                  className="bg-white hover:bg-pr-orange-pale text-pr-gray-dark hover:text-pr-orange-dark rounded-full p-2 transition-all border border-pr-gray-light"
                  aria-label="Avis suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <Link to="/avis">
                <Button size="sm" className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold rounded-full">
                  Voir +20 avis
                  <ChevronRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getCurrentReviews().map((review, index) => (
              <Link key={index} to="/avis" className="block group">
                <div className="relative bg-white rounded-xl p-6 border border-pr-gray-light hover:border-pr-orange transition-all duration-300 h-full overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <span className="font-dm-serif text-5xl text-pr-orange leading-none block mb-4">"</span>

                  <p className="font-dm-sans text-[14px] text-pr-gray-dark leading-[1.65] mb-6 line-clamp-4">
                    {review.content}
                  </p>

                  <div className="pt-5 border-t border-pr-gray-light flex items-center gap-3">
                    <div className="w-9 h-9 bg-pr-orange-pale border border-pr-orange-soft rounded-full flex items-center justify-center font-dm-serif text-sm text-pr-orange-dark">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-dm-sans font-semibold text-[13px] text-pr-black truncate">{review.name}</div>
                      <div className="font-dm-sans text-[10px] uppercase tracking-[0.08em] text-pr-gray-mid">{review.subject}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-pr-orange text-pr-orange" />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-pr-orange w-8' : 'bg-pr-gray-light w-4 hover:bg-pr-gray-mid'}`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-in-up, .scale-in { opacity: 0; }
        .fade-in-up.animate-in { animation: fadeInUp 0.7s ease-out forwards; }
        .scale-in.animate-in { animation: scaleIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default HomePage;
