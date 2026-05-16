import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Home, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import FormationChapterListRow, { buildMathChapterActions } from '@/components/formation/shared/FormationChapterListRow';
import { mathsApprofondies2eAnneeData } from '@/data/maths-approfondies-2e-annee';
import { SEOHead } from '@/components/SEOHead';

const MathsApprofondies2eAnneePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/maths-deuxieme-approfondies"
        title="Maths Approfondies · 2ème année ECG · Prépa Rationnelle"
        description="Programme complet de Maths Approfondies 2ème année ECG : approfondissement de l'algèbre linéaire, des probabilités et de l'analyse multivariée."
      />

      {/* Fil d'Ariane */}
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
            <Link to="/formation/maths-choix" className="hover:text-carnet-red transition-colors">
              Parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Maths Approfondies · 2A</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Mathématiques · 2ème année ECG</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                Maths{' '}
                <em className="font-lora italic text-carnet-red">Approfondies</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Formation <span className="carnet-hl font-lora italic">théorique avancée</span> pour la 2ème année ECG, avec approfondissement de l'algèbre linéaire, des probabilités et de l'analyse multivariée.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <GraduationCap className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">2ème année ECG</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Voie Théorique</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ programme par semestre
            </div>
          </motion.div>
        </div>
      </section>

      {/* Semestre 3 */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-baseline gap-4 mb-8">
              <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
              <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
              <div>
                <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                  {mathsApprofondies2eAnneeData.semestre1.title}
                </h2>
                <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                  {mathsApprofondies2eAnneeData.semestre1.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {mathsApprofondies2eAnneeData.semestre1.chapters.map((chapter, idx) => {
                const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                    className={tilt}
                  >
                    <FormationChapterListRow
                      number={chapter.id}
                      title={chapter.title}
                      description={chapter.description}
                      Icon={chapter.icon}
                      actions={buildMathChapterActions(chapter.slug, chapter.customLink)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Semestre 4 */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-baseline gap-4 mb-8">
              <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
              <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
              <div>
                <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                  {mathsApprofondies2eAnneeData.semestre2.title}
                </h2>
                <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                  {mathsApprofondies2eAnneeData.semestre2.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {mathsApprofondies2eAnneeData.semestre2.chapters.map((chapter, idx) => {
                const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                    className={tilt}
                  >
                    <FormationChapterListRow
                      number={chapter.id}
                      title={chapter.title}
                      description={chapter.description}
                      Icon={chapter.icon}
                      actions={buildMathChapterActions(chapter.slug, chapter.customLink)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MathsApprofondies2eAnneePage;
