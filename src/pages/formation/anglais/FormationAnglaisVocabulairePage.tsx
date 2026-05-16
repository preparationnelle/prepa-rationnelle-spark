import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  BookOpen, Leaf, Users, DollarSign, Heart, GraduationCap, Newspaper,
  Globe, UserCheck, Scale, Briefcase, Split, Cpu, Flag, Shield,
  Church, Crown, AlertTriangle,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

type Theme = {
  Icon: LucideIcon;
  title: string;
  description: string;
  to: string;
};

const themes: Theme[] = [
  { Icon: Leaf, title: 'Environnement', description: 'Écologie & Climat', to: '/formation/anglais/civilisation/environment/vocabulary' },
  { Icon: Users, title: 'Politique', description: 'Institutions & Pouvoir', to: '/formation/anglais/civilisation/politics/vocabulary' },
  { Icon: DollarSign, title: 'Économie', description: 'Finance & Commerce', to: '/formation/anglais/civilisation/economy/vocabulary' },
  { Icon: Heart, title: 'Santé', description: 'Médecine & Bien-être', to: '/formation/anglais/civilisation/health/vocabulary' },
  { Icon: GraduationCap, title: 'Éducation', description: 'Apprentissage & Formation', to: '/formation/anglais/civilisation/education/vocabulary' },
  { Icon: Newspaper, title: 'Médias', description: 'Information & Communication', to: '/formation/anglais/civilisation/media/vocabulary' },
  { Icon: Globe, title: 'Géopolitique', description: 'Relations Internationales', to: '/formation/anglais/civilisation/geopolitics/vocabulary' },
  { Icon: UserCheck, title: 'Immigration', description: 'Migration & Intégration', to: '/formation/anglais/civilisation/immigration/vocabulary' },
  { Icon: Scale, title: 'Justice', description: 'Droit & Équité', to: '/formation/anglais/civilisation/justice/vocabulary' },
  { Icon: Briefcase, title: 'Travail', description: 'Emploi & Syndicalisme', to: '/formation/anglais/civilisation/labor/vocabulary' },
  { Icon: Split, title: 'Polarisation', description: 'Division Sociale', to: '/formation/anglais/civilisation/polarization/vocabulary' },
  { Icon: Cpu, title: 'IA & Tech', description: 'Innovation Numérique', to: '/formation/anglais/civilisation/ai-technology/vocabulary' },
  { Icon: Flag, title: 'Brexit', description: 'Europe & Royaume-Uni', to: '/formation/anglais/civilisation/brexit/vocabulary' },
  { Icon: Shield, title: 'Droits Civils', description: 'Libertés & Égalité', to: '/formation/anglais/civilisation/civil-rights/vocabulary' },
  { Icon: Church, title: 'Religion Civile', description: 'Valeurs & Société', to: '/formation/anglais/civilisation/civil-religion/vocabulary' },
  { Icon: Crown, title: 'Commonwealth', description: 'Nations Unies', to: '/formation/anglais/civilisation/commonwealth/vocabulary' },
  { Icon: AlertTriangle, title: 'Crises', description: 'Urgences & Défis', to: '/formation/anglais/civilisation/crises/vocabulary' },
];

const FormationAnglaisVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/anglais/vocabulaire"
        title="Vocabulaire Anglais ECG · Prépa Rationnelle"
        description="1000+ termes essentiels d'anglais classés par thématique de civilisation pour les concours ECG. Flashcards interactives et système de révision."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/anglais" className="hover:text-carnet-red transition-colors">
              Anglais
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Vocabulaire</span>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Anglais · Module 01</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Vocabulaire</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              <span className="carnet-hl font-lora italic">1000+ termes essentiels</span> classés par thématique de civilisation, avec flashcards interactives et système de révision espacée.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <BookOpen className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">1000+ mots</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">17 thèmes</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ entraîne-toi avec les flashcards
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-12">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="carnet-card overflow-hidden">
              <div className="h-[3px] bg-carnet-red" />
              <div className="p-6 sm:p-8">
                <VocabularyFlashcards language={language} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
              <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
              <div>
                <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                  Vocabulaire <em className="font-lora italic text-carnet-red">par thème</em>.
                </h2>
                <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                  Explore le lexique spécialisé par domaine de civilisation.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {themes.map((t, idx) => {
              const tilt = idx % 5 === 1 ? 'carnet-tilt-r' : idx % 5 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={t.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
                  className={tilt}
                >
                  <Link to={t.to} className="block h-full">
                    <div className="carnet-card group p-5 h-full hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                          <t.Icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-lora text-[17px] text-carnet-ink leading-tight mb-1 group-hover:text-carnet-red transition-colors">
                            {t.title}
                          </h3>
                          <p className="font-instrument text-[12px] text-carnet-ink-mute leading-relaxed">
                            {t.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationAnglaisVocabulairePage;
