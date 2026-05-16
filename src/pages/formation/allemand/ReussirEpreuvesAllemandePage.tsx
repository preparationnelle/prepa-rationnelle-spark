import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

type Chapter = {
  title: string;
  description: string;
  to: string;
  exercicesTo?: string;
};

const chapters: Chapter[] = [
  {
    title: "Réussir l'essai",
    description: 'Structure argumentative en allemand, connecteurs logiques avancés et vocabulaire argumentatif spécialisé.',
    to: '/formation/allemand/reussir-essai',
    exercicesTo: '/formation/allemand/reussir-essai/exercices',
  },
  {
    title: 'Réussir la synthèse',
    description: 'Techniques de synthèse : identification des idées principales, structuration hiérarchique et langage objectif.',
    to: '/formation/allemand/reussir-synthese',
    exercicesTo: '/formation/allemand/reussir-synthese/exercices',
  },
  {
    title: 'Méthodologie de travail',
    description: "Méthode complète d'allemand en prépa : traduction, gestion des erreurs, approfondissement thématique et organisation du temps.",
    to: '/formation/allemand/methodologie',
    exercicesTo: '/formation/allemand/methodologie/exercices',
  },
  {
    title: 'Thèmes grammaticaux',
    description: "Subjonctif, constructions passives, relatives complexes et style indirect pour maîtriser l'allemand académique.",
    to: '/formation/allemand/grammaire-avancee',
    exercicesTo: '/formation/allemand/grammaire-avancee/exercices',
  },
  {
    title: 'Épreuves orales',
    description: 'Préparation aux épreuves orales : présentation structurée, argumentation orale et gestion du temps.',
    to: '/formation/allemand/epreuves-orales',
    exercicesTo: '/formation/allemand/epreuves-orales/exercices',
  },
];

const ReussirEpreuvesAllemandePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/allemand/epreuves"
        title="Réussir les épreuves d'Allemand ECG · Prépa Rationnelle"
        description="Méthodologie complète pour les épreuves d'allemand aux concours ECG : essai, synthèse, grammaire avancée, épreuves orales. Méthodes prêtes à dérouler."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/allemand" className="hover:text-carnet-red transition-colors">
              Allemand
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Méthodologie</span>
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
            <div className="carnet-eyebrow mb-6">Allemand · Module 04</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Méthodologie</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Maîtrisez <span className="carnet-hl font-lora italic">toutes</span> les épreuves du concours d'allemand — essai, synthèse, grammaire avancée et oraux.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Target className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">5 méthodes</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Écrit & Oral</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ les 5 méthodes clés
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-5 max-w-4xl">
            {chapters.map((chapter, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={chapter.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link to={chapter.to} className="block">
                          <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-tight mb-2 group-hover:text-carnet-red transition-colors">
                            {chapter.title}
                          </h3>
                        </Link>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                        <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-4">
                          {chapter.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center">
                          <Link
                            to={chapter.to}
                            className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Étudier <ArrowRight className="h-3 w-3" />
                          </Link>
                          {chapter.exercicesTo && (
                            <Link
                              to={chapter.exercicesTo}
                              className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                            >
                              Exercices
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReussirEpreuvesAllemandePage;
