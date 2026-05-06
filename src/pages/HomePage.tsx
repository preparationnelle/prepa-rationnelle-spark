
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Calculator, Code, Languages, Globe, Brain, ArrowRight, Calendar, CheckCircle, Star, Play, ExternalLink, TrendingUp, ChevronLeft, ChevronRight, Radio, GraduationCap, Clock, BookOpenCheck, Compass, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { HeroContactForm } from '@/components/HeroContactForm';

import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
    { name: "Arthur", content: "Je recommande vivement Dimitar en tant que professeur particulier. Grâce à son accompagnement régulier, j'ai pu gagner plus de 4 à 5 en maths, ce qui a vraiment fait la différence pour le concours.", subject: "Maths ECG", grade: "+4 pts" },
    { name: "Léa", content: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible.", subject: "Python", grade: "17/20" },
    { name: "Daniel", content: "Dimitar m'a beaucoup aidé en géopolitique, notamment sur la méthode. Grâce à son accompagnement, j'ai pu progresser en rigueur. J'ai été admis cette année à l'ESCP.", subject: "Géopolitique", grade: "ESCP" },
    { name: "Sophie", content: "Dimitar a transformé ma vision des mathématiques. Sa pédagogie exceptionnelle m'a permis de passer de 8 à 15 en maths ECG. Il a un don pour expliquer les concepts complexes.", subject: "Maths ECG", grade: "8 → 15" },
    { name: "Thomas", content: "Grâce à Dimitar, j'ai pu intégrer l'ESSEC. Sa méthode de travail et ses explications claires ont fait toute la différence. Il s'adapte parfaitement au niveau de chaque élève.", subject: "Admis ESSEC", grade: "ESSEC" },
    { name: "Clara", content: "Dimitar est un pédagogue hors pair. Il a su m'aider à comprendre les subtilités de Python et à maîtriser les concepts de programmation. Sa méthode progressive est géniale.", subject: "Python", grade: "TB" }
  ];

  const totalSlides = Math.ceil(reviews.length / 3);
  const getCurrentReviews = () => reviews.slice(currentSlide * 3, currentSlide * 3 + 3);

  const podcastUrl = "https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526";

  /* En-tête de section style cahier — eyebrow rouge + titre serif italique */
  const SectionHead: React.FC<{ eyebrow?: string; eyebrowLink?: string; title: React.ReactNode; subtitle?: string; align?: 'left' | 'center' }> = ({ eyebrow, eyebrowLink, title, subtitle, align = 'left' }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-[760px] mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        eyebrowLink ? (
          <Link to={eyebrowLink} className="carnet-eyebrow inline-block mb-6 hover:opacity-70 transition-opacity">
            {eyebrow}
          </Link>
        ) : (
          <span className="carnet-eyebrow inline-block mb-6">{eyebrow}</span>
        )
      )}
      <h2 className="font-lora text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-carnet-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-instrument text-[17px] lg:text-[18px] leading-[1.55] text-carnet-ink-soft mt-5 max-w-[600px] ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/"
        description="Prepa Rationnelle : Formations maths, Python, langues et méthodologie pour prépa ECG. +250 exercices, cours particuliers et coaching pour intégrer HEC, ESSEC, ESCP. Noté 5/5 sur Google."
      />

      {/* Section 1 : Hero */}
      <HeroSection />

      {/* Trust strip — écoles intégrées */}
      <section className="relative">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="border-y border-dashed border-[rgba(78,55,30,0.18)] py-7 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <span className="font-instrument text-[11px] font-bold uppercase tracking-[0.2em] text-carnet-ink-mute">
              Nos élèves intègrent
            </span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {['HEC', 'ESSEC', 'ESCP', 'EM Lyon', 'EDHEC'].map((school, i, arr) => (
                <React.Fragment key={school}>
                  <span className="font-lora italic text-[22px] text-carnet-ink-soft font-medium">
                    {school}
                  </span>
                  {i < arr.length - 1 && <span className="text-carnet-ink-mute text-base">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Formations spécialisées */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="9 formations disponibles"
            eyebrowLink="/formations"
            title={<>Nos <em className="font-lora italic text-carnet-red">formations spécialisées</em>.</>}
            subtitle="Méthodes éprouvées, +250 exercices ultra-classiques, flashcards et quiz."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {formations.map((formation, idx) => (
              <motion.div
                key={formation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={idx === 1 ? 'carnet-tilt-l' : idx === 2 ? 'carnet-tilt-r' : ''}
              >
                <Link to={formation.link} className="carnet-card relative block p-8 h-full group hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                  <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center">
                      <formation.icon className="h-4 w-4 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink">
                      {formation.title}
                    </h3>
                  </div>
                  <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.55] mb-5">
                    {formation.description}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                    {formation.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                        <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1.5 font-instrument text-[12px] font-semibold uppercase tracking-[0.1em] text-carnet-red group-hover:gap-2.5 transition-all">
                    Découvrir <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/formations">
              <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                Voir toutes les formations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 : Générateurs IA */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="Inclus dans ta formation"
            eyebrowLink="/generator"
            title={<>Outils pour <em className="font-lora italic text-carnet-red">aller plus vite</em>.</>}
            subtitle="Des outils pensés par des prépas, pour les prépas — pour travailler mieux, plus efficacement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {generators.map((g, idx) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={idx === 1 ? 'carnet-tilt-r' : idx === 2 ? 'carnet-tilt-l' : ''}
              >
                <Link to={g.link} className="carnet-card relative block p-8 h-full group hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                  <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center">
                      <g.icon className="h-4 w-4 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink">{g.title}</h3>
                  </div>
                  <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.55] mb-5">
                    {g.description}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                    {g.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                        <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1.5 font-instrument text-[12px] font-semibold uppercase tracking-[0.1em] text-carnet-red">
                    Accéder à l'outil <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/generator">
              <Button variant="outline" className="border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument font-semibold py-6 px-8 rounded-full">
                Voir tous les générateurs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3.5 : Terminale → Prépa — comparaison style copie corrigée */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="Nouveau · Pour les futurs prépas"
            eyebrowLink="/articles/terminale-prepa"
            title={<>
              Arriver en prépa{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span
                  className="text-[#9C8772]"
                  style={{ textDecoration: 'line-through', textDecorationColor: '#C1443A', textDecorationThickness: '3px' }}
                >
                  en panique
                </span>
                <span
                  className="absolute carnet-hand italic whitespace-nowrap"
                  style={{ top: '-0.55em', left: '0.2em', fontSize: '0.78em', color: '#C1443A', transform: 'rotate(-4deg)', fontWeight: 600 }}
                >
                  préparé
                </span>
              </span>
              .
            </>}
            subtitle="Le passage du lycée à la prépa ECG est brutal. La bonne nouvelle : il s'anticipe."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="carnet-card relative px-8 sm:px-14 py-12 sm:py-14"
          >
            <div className="carnet-hand absolute hidden lg:block" style={{ top: 24, right: 48, fontSize: 26, transform: 'rotate(6deg)', maxWidth: 130, lineHeight: 1.1 }}>
              ↘ ce qu'on aurait<br/>aimé savoir
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-dashed border-[rgba(78,55,30,0.18)]">
              {/* Colonne — Sans méthode */}
              <div className="md:pr-10 md:border-r md:border-dashed md:border-[rgba(78,55,30,0.18)] py-10">
                <div className="carnet-hand text-[26px] mb-4 text-[#8A7864]" style={{ transform: 'rotate(-2deg)', display: 'inline-block' }}>
                  ✗ Sans préparation
                </div>
                <ul className="space-y-3">
                  {[
                    'Découvrir un nouveau rythme du jour au lendemain',
                    'Réviser dans le désordre, sans plan',
                    'Subir les premiers DS de septembre',
                    'Perdre confiance dès la première colle',
                  ].map((item, i) => (
                    <li key={i} className="font-lora text-[18px] leading-[1.5] text-[#6E5D49] flex items-start gap-3" style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(110,93,73,0.4)' }}>
                      <span className="carnet-hand text-[22px] leading-none flex-none mt-0.5 text-[#8A7864]">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne — Avec méthode */}
              <div className="md:pl-10 py-10 border-t md:border-t-0 border-dashed border-[rgba(78,55,30,0.18)]">
                <div className="carnet-hand text-[26px] mb-4 text-carnet-red" style={{ transform: 'rotate(-2deg)', display: 'inline-block' }}>
                  ✓ Avec Prépa Rationnelle
                </div>
                <ul className="space-y-3">
                  {[
                    { icon: Clock, text: 'Une organisation calée avant la rentrée' },
                    { icon: Brain, text: 'Les méthodes de travail qui marchent vraiment' },
                    { icon: BookOpenCheck, text: 'Les bases mathématiques solides du lycée' },
                    { icon: Compass, text: 'Le bon mindset pour tenir deux ans' },
                  ].map((item, i) => (
                    <li key={i} className="font-lora text-[18px] leading-[1.5] text-carnet-ink flex items-start gap-3">
                      <span className="carnet-hand text-[22px] leading-none flex-none mt-0.5 text-carnet-red">✓</span>
                      <span>
                        {i === 0 ? <><span className="carnet-hl">Une organisation calée</span> avant la rentrée</> : item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-2 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to="/articles/terminale-prepa">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                  Découvrir la rubrique <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                to="/formation/math/terminale-vers-prepa"
                className="font-instrument text-[15px] font-medium text-carnet-ink-soft hover:text-carnet-red transition-colors flex items-center gap-2"
              >
                <Calculator className="h-4 w-4" /> Module Maths Terminale → Prépa →
              </Link>
              <span className="carnet-eyebrow text-[10px] ml-auto hidden sm:block">
                Offre dédiée · bientôt
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 : Lead Magnet — formulaire premier cours */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="carnet-eyebrow mb-5">Premier cours offert</div>
                <h2 className="font-lora text-[36px] md:text-[44px] lg:text-[52px] text-carnet-ink leading-[1.1] tracking-tight">
                  Un accompagnement <em className="font-lora italic text-carnet-red">personnalisé</em> qui fait la différence.
                </h2>
                <p className="font-instrument text-[17px] lg:text-[18px] text-carnet-ink-soft leading-[1.7] mt-6 max-w-xl">
                  Dimitar prend le temps de comprendre ton niveau et tes objectifs. Remplis ce formulaire pour discuter de ton parcours et bénéficier d'un{' '}
                  <span className="carnet-hl font-lora italic">premier cours offert</span>.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                {[
                  { text: 'Réponse personnalisée sous 24h', icon: Calendar },
                  { text: 'Diagnostic gratuit de ton niveau', icon: CheckCircle },
                  { text: 'Premier cours 100 % offert, sans engagement', icon: Star }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-2">
                    <span className="carnet-hand text-[24px] text-carnet-red leading-none w-6">✓</span>
                    <span className="font-instrument text-[15px] text-carnet-ink-soft">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative carnet-card p-2 carnet-tilt-r-strong">
              <HeroContactForm showContent={true} theme="orange" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Interview Europe 1 */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] rounded-full flex items-center justify-center">
                  <Radio className="h-4 w-4 text-carnet-red" />
                </div>
                <span className="carnet-eyebrow">Interview exclusive</span>
              </div>

              <h2 className="font-lora text-[36px] md:text-[44px] lg:text-[52px] text-carnet-ink leading-[1.1]">
                Dimitar dans l'émission{' '}
                <em className="font-lora italic text-carnet-red">Europe 1</em>.
              </h2>

              <p className="font-instrument text-[17px] lg:text-[18px] text-carnet-ink-soft mt-6 leading-[1.7] mb-8">
                Dimitar a été invité sur Europe 1 pour parler de la méthode Prépa Rationnelle et de la façon dont il accompagne ses élèves vers les Grandes Écoles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    <Play className="h-4 w-4 mr-2 fill-current" /> Écouter le podcast
                    <ExternalLink className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </a>

                <div className="flex items-center gap-1.5 font-instrument text-[13px] text-carnet-ink-mute">
                  <TrendingUp className="h-3.5 w-3.5" /> <span>+2M auditeurs</span>
                </div>
              </div>
            </div>

            <div className="relative carnet-tilt-l">
              <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/b7d741c4-5fa9-4c55-8fe0-37e63fa54d5f.png"
                  alt="Interview Europe 1"
                  className="rounded-md w-80 md:w-[440px] h-auto object-cover border border-[rgba(78,55,30,0.18)] shadow-[0_12px_32px_rgba(78,55,30,0.12)]"
                />
              </a>
              <div className="carnet-hand absolute hidden lg:block" style={{ top: -28, right: -36, fontSize: 24, color: '#C1443A', transform: 'rotate(6deg)' }}>
                ↘ écoute<br/>jusqu'au bout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.5 : Conseils en vidéo */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            eyebrow="7 vidéos disponibles"
            eyebrowLink="/conseils-videos"
            title={<>Mes <em className="font-lora italic text-carnet-red">conseils en vidéo</em>.</>}
            subtitle="Méthodes de travail, gestion du temps, astuces pour progresser en prépa ECG."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {[
              { title: 'Prépare-toi chez toi', youtubeId: 'vPlRUX1OfiQ' },
              { title: 'Live Conseils', youtubeId: 'GEI6T4SMRDw' },
              { title: 'Gestion du temps de travail', youtubeId: '6hZVGoSB5ts' },
            ].map((video, idx) => (
              <Link
                key={video.youtubeId}
                to="/conseils-videos"
                className={`carnet-card relative block overflow-hidden group ${idx === 1 ? 'carnet-tilt-l' : idx === 2 ? 'carnet-tilt-r' : ''}`}
              >
                <div className="relative aspect-video overflow-hidden bg-carnet-ink">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-carnet-paper-2 rounded-full flex items-center justify-center shadow-md group-hover:bg-carnet-red transition-all duration-300">
                      <Play className="h-5 w-5 text-carnet-ink ml-0.5 group-hover:text-carnet-paper transition-colors" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="carnet-eyebrow text-[10px]">
                    Vidéo · {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-lora italic text-[20px] text-carnet-ink group-hover:text-carnet-red transition-colors">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/conseils-videos">
              <Button variant="outline" className="border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument font-semibold py-6 px-8 rounded-full">
                Voir toutes les vidéos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 : Partenaires */}
      <section className="relative py-24 lg:py-28 border-t border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SectionHead
            align="center"
            eyebrow="Ils nous font confiance"
            title={<>Nos <em className="font-lora italic text-carnet-red">partenaires</em>.</>}
          />

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center w-32 transition-transform hover:scale-105"
              >
                <div className="carnet-card p-4 flex items-center justify-center h-20 w-full group-hover:border-carnet-red transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="mt-3 carnet-eyebrow text-[10px] text-carnet-ink-mute text-center group-hover:text-carnet-red transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 : Avis d'élèves — copies corrigées */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-[760px]">
              <div className="carnet-eyebrow mb-5">Ils en parlent mieux que nous</div>
              <h2 className="font-lora text-[36px] md:text-[44px] lg:text-[52px] text-carnet-ink leading-[1.1] tracking-tight">
                Des élèves qui <em className="font-lora italic text-carnet-red">débloquent</em>, des parents <em className="font-lora italic text-carnet-red">rassurés</em>.
              </h2>
              <div className="mt-5 inline-flex items-center gap-2 carnet-card px-3 py-1.5">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-carnet-red text-carnet-red" />
                  ))}
                </span>
                <span className="font-instrument text-[12px] font-semibold text-carnet-ink">5.0</span>
                <span className="font-instrument text-[10px] uppercase tracking-[0.1em] text-carnet-ink-mute">Superprof</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                  className="carnet-card text-carnet-ink-soft hover:text-carnet-red rounded-full p-2 transition-all"
                  aria-label="Avis précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-instrument text-[12px] text-carnet-ink-mute min-w-[50px] text-center">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                  className="carnet-card text-carnet-ink-soft hover:text-carnet-red rounded-full p-2 transition-all"
                  aria-label="Avis suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <Link to="/avis">
                <Button size="sm" className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full border-0">
                  Voir +20 avis <ChevronRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-8">
            {getCurrentReviews().map((review, index) => (
              <Link
                key={index}
                to="/avis"
                className={`relative carnet-card block p-9 group transition-shadow hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] ${
                  index === 0 ? 'carnet-tilt-l' : index === 2 ? 'carnet-tilt-r' : ''
                }`}
              >
                <div className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                  {review.grade}
                </div>

                <p className="font-lora italic text-[17px] leading-[1.5] text-carnet-ink line-clamp-5">
                  « {review.content} »
                </p>

                <div className="mt-5 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)] flex items-center gap-3">
                  <div className="w-9 h-9 bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] rounded-full flex items-center justify-center font-lora text-sm text-carnet-red">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-instrument font-semibold text-[13px] text-carnet-ink truncate">{review.name}</div>
                    <div className="font-instrument text-[10px] uppercase tracking-[0.1em] text-carnet-ink-mute">{review.subject}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-carnet-red text-carnet-red" />
                    ))}
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
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-carnet-red w-8' : 'bg-[rgba(78,55,30,0.18)] w-4 hover:bg-[rgba(78,55,30,0.35)]'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — note manuscrite signée sur cream paper */}
      <section className="relative pt-12 pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="carnet-card relative px-8 sm:px-16 py-16 sm:py-20 carnet-tilt-l"
          >
            {/* Annotations manuscrites */}
            <div className="carnet-hand absolute hidden sm:block" style={{ top: 28, right: 48, fontSize: 32, transform: 'rotate(8deg)', maxWidth: 150, lineHeight: 1.1 }}>
              ↘ c'est<br/>par ici !
            </div>
            <div className="carnet-hand absolute hidden lg:block" style={{ bottom: 32, left: 60, fontSize: 22, transform: 'rotate(-4deg)', color: '#8A7864' }}>
              — sans engagement
            </div>

            <div className="relative z-10 max-w-[760px] text-center mx-auto">
              <div className="carnet-eyebrow mb-6">Premier cours offert</div>

              <h2 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink">
                On en discute autour d'un{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span
                    className="text-[#9C8772]"
                    style={{ textDecoration: 'line-through', textDecorationColor: '#C1443A', textDecorationThickness: '3px' }}
                  >
                    café
                  </span>
                  <span
                    className="absolute carnet-hand italic whitespace-nowrap"
                    style={{ top: '-0.55em', left: '0.2em', fontSize: '0.85em', color: '#C1443A', transform: 'rotate(-3deg)', fontWeight: 600 }}
                  >
                    Zoom
                  </span>
                </span>
                ?
              </h2>

              <p className="font-instrument text-[17px] sm:text-[19px] leading-[1.6] text-carnet-ink-soft mt-10 mb-9 max-w-[600px] mx-auto">
                30 minutes avec Dimitar pour parler de ton niveau, tes objectifs, et identifier{' '}
                <span className="carnet-hl font-lora italic">ce qui va vraiment te faire progresser</span>.
                Premier cours offert, sans engagement.
              </p>

              {/* Liste manuscrite des "what you get" */}
              <div className="flex flex-col sm:flex-row justify-center gap-x-10 gap-y-3 mb-10">
                {[
                  'Diagnostic personnalisé',
                  'Plan de travail concret',
                  'Réponse sous 24h',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 font-instrument text-[14px] text-carnet-ink-soft">
                    <span className="carnet-hand text-[24px] text-carnet-red leading-none">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/dashboard">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[16px] py-[20px] px-9 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Réserver mon premier cours
                </Button>
              </Link>

              {/* Signature manuscrite */}
              <div className="mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)] flex items-center justify-center gap-3">
                <div className="font-instrument text-[12px] uppercase tracking-[0.18em] text-carnet-ink-mute">
                  Signé
                </div>
                <div className="carnet-hand text-[34px] text-carnet-red leading-none" style={{ transform: 'rotate(-3deg)' }}>
                  Dimitar
                </div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.18em] text-carnet-ink-mute">
                  Fondateur
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
