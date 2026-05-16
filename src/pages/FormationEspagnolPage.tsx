import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  Home,
  Languages,
  MessageSquare,
  Target,
  ArrowRight,
} from 'lucide-react';

const modules = [
  {
    number: 1,
    to: '/formation/espagnol/vocabulaire',
    Icon: Languages,
    title: 'Vocabulaire',
    description: 'Lexique thématique et expressions idiomatiques.',
    bullets: ['Économie et affaires', 'Culture et société', 'Expressions courantes'],
  },
  {
    number: 2,
    to: '/formation/espagnol/grammaire',
    Icon: BookOpen,
    title: 'Grammaire',
    description: 'Conjugaisons, syntaxe et structures avancées.',
    bullets: ['Temps verbaux', 'Syntaxe idiomatique', 'Thèmes grammaticaux'],
  },
  {
    number: 3,
    to: '/formation/espagnol/civilisation',
    Icon: MessageSquare,
    title: 'Civilisation',
    description: 'Enjeux contemporains d’Espagne et d’Amérique latine.',
    bullets: ['Politique et démocratie', 'Enjeux sociaux et égalité', 'Migrations et environnement'],
  },
  {
    number: 4,
    to: '/formation/espagnol/methodologie',
    Icon: Target,
    title: 'Méthodologie',
    description: 'Techniques et stratégies pour réussir les épreuves.',
    bullets: ['Épreuves écrites', 'Épreuves orales (colles)', 'Gestion du temps'],
  },
];

const FormationEspagnolPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
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
            <span className="carnet-eyebrow text-[11px]">Espagnol ECG</span>
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

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Formation <em className="font-lora italic text-carnet-red">Espagnol</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Une <span className="carnet-hl font-lora italic">formation complète</span> pour exceller en espagnol aux concours des Grandes Écoles de Commerce — vocabulaire, grammaire, civilisation et méthodologie réunis dans un parcours structuré.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Niveau prépa</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Concours BCE & Ecricome</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <span className="carnet-eyebrow text-[11px]">ECG 1 & 2</span>
              </span>
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
            {modules.map((m, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={m.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                  className={tilt}
                >
                  <Link to={m.to} className="block h-full">
                    <div className="carnet-card group p-7 sm:p-8 h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                            {String(m.number).padStart(2, '0')}
                          </span>
                          <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <m.Icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[24px] sm:text-[26px] leading-[1.2] text-carnet-ink group-hover:text-carnet-red transition-colors">
                          {m.title}
                        </h3>
                      </div>

                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-6">
                        {m.description}
                      </p>

                      <div className="space-y-2 mb-6 carnet-paper-plain rounded-md p-4 border border-dashed border-[rgba(78,55,30,0.18)]">
                        {m.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                            <span className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.5]">
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 font-instrument text-[13px] font-semibold text-carnet-red opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                        Accéder au module <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/formation/espagnol/sommaire" className="block">
              <div className="carnet-card group p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                <div className="carnet-eyebrow mb-3">Vue d'ensemble</div>
                <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                  Sommaire de la formation
                </h3>
                <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">
                  Guide complet pour naviguer dans tous les modules de la formation Espagnol ECG.
                </p>
              </div>
            </Link>
            <Link to="/formation/espagnol/generateurs" className="block">
              <div className="carnet-card group p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                <div className="carnet-eyebrow mb-3">Outils IA</div>
                <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                  Générateurs IA
                </h3>
                <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">
                  Paragraphes argumentatifs et thèmes grammaticaux avec correction automatique.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolPage;
