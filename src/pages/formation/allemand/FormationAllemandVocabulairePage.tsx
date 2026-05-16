import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  Languages,
  Landmark,
  Users,
  Leaf,
  Globe,
  Factory,
  Theater,
  GraduationCap,
  FlaskConical,
  Scale,
  Scroll,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

type Theme = {
  Icon: LucideIcon;
  title: string;
  description: string;
  to: string;
};

const themes: Theme[] = [
  { Icon: Landmark, title: 'Politique', description: 'Institutions, élections, partis politiques', to: '/formation/allemand/vocabulaire-politique' },
  { Icon: Users, title: 'Démographie', description: 'Population, migration, vieillissement', to: '/formation/allemand/vocabulaire-demographie' },
  { Icon: Leaf, title: 'Écologie', description: 'Environnement, transition énergétique', to: '/formation/allemand/vocabulaire-ecologie' },
  { Icon: Globe, title: 'Géopolitique', description: 'Relations internationales, UE, sécurité', to: '/formation/allemand/vocabulaire-geopolitique' },
  { Icon: Factory, title: 'Économie', description: 'Industrie, commerce, marché du travail', to: '/formation/allemand/vocabulaire-wirtschaft' },
  { Icon: Theater, title: 'Culture', description: 'Identité, diversité, société', to: '/formation/allemand/vocabulaire-kultur' },
  { Icon: GraduationCap, title: 'Éducation', description: 'Système éducatif, formation, recherche', to: '/formation/allemand/vocabulaire-bildung' },
  { Icon: FlaskConical, title: 'Innovation', description: 'Technologie, recherche, start-ups', to: '/formation/allemand/vocabulaire-innovation' },
  { Icon: Scale, title: 'Égalité des Genres', description: 'Droits des femmes, politiques sociales', to: '/formation/allemand/vocabulaire-frauen' },
  { Icon: Scroll, title: 'Histoire', description: 'Mémoire collective, histoire contemporaine', to: '/formation/allemand/vocabulaire-geschichte' },
];

const FormationAllemandVocabulairePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/allemand/vocabulaire"
        title="Vocabulaire Allemand ECG · Prépa Rationnelle"
        description="200+ termes essentiels d'allemand classés par thématique de civilisation pour les concours ECG. Flashcards interactives par champ sémantique."
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
            <Link to="/formation/allemand" className="hover:text-carnet-red transition-colors">
              Allemand
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Vocabulaire</span>
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
            <div className="carnet-eyebrow mb-6">Allemand · Module 01</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Vocabulaire</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              <span className="carnet-hl font-lora italic">200+ termes essentiels</span> classés par thématique de civilisation, avec flashcards interactives pour chaque champ sémantique.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Languages className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">200+ mots</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">10 thèmes</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton champ sémantique
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vocabulaire par thème */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
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

export default FormationAllemandVocabulairePage;
