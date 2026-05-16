import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  BookOpen,
  Globe,
  Target,
  Languages,
  Award,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

const modules = [
  {
    to: '/formation/allemand/vocabulaire',
    Icon: Languages,
    title: 'Vocabulaire',
    subtitle: '200+ termes essentiels',
    description: 'Lexique thématique et expressions idiomatiques. Vocabulaire des concours classé par champ sémantique.',
    bullets: ['200+ termes essentiels', 'Vocabulaire thématique', 'Flashcards interactives'],
  },
  {
    to: '/formation/allemand/grammaire',
    Icon: BookOpen,
    title: 'Grammaire',
    subtitle: '14 fiches structurées',
    description: 'Déclinaisons, conjugaisons et structures avancées. Tout ce qu\'il faut pour maîtriser la grammaire allemande.',
    bullets: ['14 fiches de grammaire', 'Exercices pratiques', 'Conjugaisons'],
  },
  {
    to: '/formation/allemand/civilisation',
    Icon: Globe,
    title: 'Civilisation',
    subtitle: 'Espace germanophone',
    description: 'Politique, société et géopolitique de l\'espace germanophone — actualités allemandes, autrichiennes et suisses.',
    bullets: ['10 modules thématiques', 'Culture allemande', 'Géopolitique européenne'],
  },
  {
    to: '/formation/allemand/epreuves',
    Icon: Target,
    title: 'Méthodologie',
    subtitle: 'Écrit & oral',
    description: 'Techniques et stratégies pour réussir les épreuves. Synthèse, essai, colles : structures prêtes à dérouler.',
    bullets: ['Techniques d\'examen', 'Méthodologie complète', 'Exemples pratiques'],
  },
  {
    to: '/formation/allemand/sesame',
    Icon: Award,
    title: 'Exercices',
    subtitle: 'Spécial concours',
    description: 'Exercices types du concours pour s\'entraîner efficacement. Traduction, grammaire et explications détaillées.',
    bullets: ['50 questions', 'Traduction & grammaire', 'Explications détaillées'],
  },
];

const FormationAllemandPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/allemand"
        title="Formation Allemand ECG · Prépa Rationnelle"
        description="Formation complète d'allemand pour les concours ECG : vocabulaire, grammaire, civilisation, méthodologie et exercices. Programme structuré pour les Grandes Écoles de Commerce."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Allemand ECG</span>
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
            <div className="carnet-eyebrow mb-6">Prépa Rationnelle · Formation</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Allemand</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Formation <span className="carnet-hl font-lora italic">complète</span> pour maîtriser l'allemand aux concours des Grandes Écoles de Commerce — vocabulaire, grammaire, civilisation, méthodologie et exercices types.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <GraduationCap className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">ECG 1 & 2</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Niveau prépa</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Vocabulaire & civilisation</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton module
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              const isLast = idx === modules.length - 1;
              const isOddCount = modules.length % 2 === 1;

              return (
                <motion.div
                  key={module.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                  className={`${tilt} ${isLast && isOddCount ? 'md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto md:w-full' : ''}`}
                >
                  <Link to={module.to} className="block h-full">
                    <div className="carnet-card group cursor-pointer p-7 sm:p-8 h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                        </div>
                        <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] text-carnet-red">
                          Module {idx + 1}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <module.Icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[24px] sm:text-[26px] leading-[1.2] text-carnet-ink group-hover:text-carnet-red transition-colors">
                          {module.title}
                        </h3>
                      </div>

                      <p className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-ink-mute font-semibold mb-4">
                        {module.subtitle}
                      </p>

                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-6">
                        {module.description}
                      </p>

                      <div className="space-y-2 mb-6 carnet-paper-plain rounded-md p-4 border border-dashed border-[rgba(78,55,30,0.18)]">
                        {module.bullets.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                            <span className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.5]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-11 text-[14px] border-0 transition-colors">
                        Découvrir le module
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
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

export default FormationAllemandPage;
