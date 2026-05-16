import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  Globe,
  Landmark,
  Users,
  GraduationCap,
  Theater,
  Compass,
  Cpu,
  Leaf,
  Factory,
  Scale,
  Scroll,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

type ModuleItem = {
  number: number;
  title: string;
  description: string;
  modulePath: string;
  vocabPath: string;
  essaysPath?: string;
  Icon: LucideIcon;
};

const modules: ModuleItem[] = [
  { number: 1, title: 'Politik', description: 'Système politique, élections, partis et gouvernements', modulePath: '/formation/allemand/politik', vocabPath: '/formation/allemand/vocabulaire-politique', essaysPath: '/formation/allemand/civilisation/politik-essays', Icon: Landmark },
  { number: 2, title: 'Démographie', description: 'Évolution, vieillissement, migrations et société', modulePath: '/formation/allemand/demographie', vocabPath: '/formation/allemand/vocabulaire-demographie', essaysPath: '/formation/allemand/civilisation/demographie-essays', Icon: Users },
  { number: 3, title: 'Éducation', description: 'Système éducatif et formation professionnelle', modulePath: '/formation/allemand/education', vocabPath: '/formation/allemand/vocabulaire-bildung', essaysPath: '/formation/allemand/civilisation/education-essays', Icon: GraduationCap },
  { number: 4, title: 'Culture', description: 'Identité, société moderne et enjeux sociaux', modulePath: '/formation/allemand/culture', vocabPath: '/formation/allemand/vocabulaire-kultur', essaysPath: '/formation/allemand/civilisation/culture-essays', Icon: Theater },
  { number: 5, title: 'Géopolitique', description: 'UE, relations internationales et sécurité', modulePath: '/formation/allemand/geopolitique', vocabPath: '/formation/allemand/vocabulaire-geopolitique', essaysPath: '/formation/allemand/civilisation/geopolitique-essays', Icon: Compass },
  { number: 6, title: 'Technologie & Innovation', description: 'Industrie 4.0, IA et recherche', modulePath: '/formation/allemand/technologie', vocabPath: '/formation/allemand/vocabulaire-innovation', essaysPath: '/formation/allemand/civilisation/technologie-essays', Icon: Cpu },
  { number: 7, title: 'Écologie', description: 'Transition énergétique et environnement', modulePath: '/formation/allemand/ecologie', vocabPath: '/formation/allemand/vocabulaire-ecologie', essaysPath: '/formation/allemand/civilisation/ecologie-essays', Icon: Leaf },
  { number: 8, title: 'Économie', description: 'Wirtschaft, commerce extérieur, innovation', modulePath: '/formation/allemand/industrie', vocabPath: '/formation/allemand/vocabulaire-wirtschaft', essaysPath: '/formation/allemand/civilisation/economie-essays', Icon: Factory },
  { number: 9, title: 'Femmes et Égalité', description: 'Droits, politiques publiques et société', modulePath: '/formation/allemand/femmes', vocabPath: '/formation/allemand/vocabulaire-frauen', essaysPath: '/formation/allemand/civilisation/femmes-essays', Icon: Scale },
  { number: 10, title: 'Histoire et Mémoire', description: 'Mémoire collective et histoire contemporaine', modulePath: '/formation/allemand/geschichte', vocabPath: '/formation/allemand/vocabulaire-geschichte', essaysPath: '/formation/allemand/civilisation/histoire-essays', Icon: Scroll },
];

const FormationAllemandCivilisationPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/allemand/civilisation"
        title="Civilisation Allemande ECG · Prépa Rationnelle"
        description="Les enjeux contemporains de l'Allemagne et de l'espace germanophone pour les concours ECG : politique, économie, société, géopolitique."
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
            <span className="carnet-eyebrow text-[11px]">Civilisation</span>
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
            <div className="carnet-eyebrow mb-6">Allemand · Module 03</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Civilisation</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Découvrez l'Allemagne contemporaine et ses <span className="carnet-hl font-lora italic">enjeux sociétaux</span> — chaque thématique avec module, vocabulaire et sujets rédigés.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Globe className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">10 thématiques</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Actualisé 2025</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ explore les thématiques
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4 max-w-4xl">
            {modules.map((m, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                          {String(m.number).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                            <m.Icon className="h-4 w-4 text-carnet-red" />
                          </div>
                          <Link to={m.modulePath} className="block">
                            <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-tight group-hover:text-carnet-red transition-colors">
                              {m.title}
                            </h3>
                          </Link>
                        </div>
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4 ml-12">
                          {m.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center ml-12">
                          <Link
                            to={m.modulePath}
                            className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Module
                          </Link>
                          <Link
                            to={m.vocabPath}
                            className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Vocabulaire
                          </Link>
                          {m.essaysPath && (
                            <Link
                              to={m.essaysPath}
                              className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                            >
                              Sujets rédigés
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

export default FormationAllemandCivilisationPage;
