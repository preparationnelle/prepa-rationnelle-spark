import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Target,
  FileText,
  Sparkles,
  BookOpen,
  Clock,
  PenTool,
  TreePine,
  Snowflake,
  Building,
  Ship,
  Cpu,
  DollarSign,
  Shield,
  MessageCircle,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FormationLayout from '@/components/formation/shared/FormationLayout';
import FormationHero from '@/components/formation/shared/FormationHero';
import FormationResourceTile from '@/components/formation/shared/FormationResourceTile';

const niveaux = [
  {
    to: '/formation/geopolitique/premiere-annee',
    Icon: BookOpen,
    badge: '1ʳᵉ année',
    title: 'Première année',
    description:
      "Fondamentaux & méthodes — bases du programme, outils d'analyse, premiers grands repères chronologiques.",
    bullets: [
      'Bases du programme officiel',
      "Outils d'analyse géopolitique",
      'Grands repères chronologiques',
    ],
    cta: 'Accéder aux modules',
  },
  {
    to: '/formation/geopolitique/deuxieme-annee',
    Icon: Globe,
    badge: '2ᵉ année',
    title: 'Deuxième année',
    description:
      'Géodynamiques & enjeux — aires régionales, mondialisation, puissances et conflits contemporains.',
    bullets: [
      'Aires régionales détaillées',
      'Mondialisation et multipolarité',
      'Conflits et puissances contemporains',
    ],
    cta: 'Accéder aux régions',
  },
];

const ressources = [
  { to: '/formation/geopolitique/sujets-probables', Icon: Target, title: 'Pronostics 2025', subtitle: 'Sujets probables' },
  { to: '/formation/geopolitique/etudes-de-cas', Icon: FileText, title: 'Thèmes centraux', subtitle: '19 analyses clés' },
  { to: '/formation/geopolitique/chronologies', Icon: Clock, title: 'Chronologies', subtitle: 'Repères historiques' },
  { to: '/formation/geopolitique/methodologie', Icon: PenTool, title: 'Méthodologie', subtitle: 'Dissertations & E.C.' },
  { to: '/formation/geopolitique/annales', Icon: BookOpen, title: 'Annales', subtitle: '25 ans de sujets' },
  { to: '/formation/geopolitique/flashcards', Icon: BookOpen, title: 'Flashcards', subtitle: 'Vocabulaire clé' },
  { to: '/formation/geopolitique/generateur', Icon: Sparkles, title: 'Générateur IA', subtitle: 'Contenu & sujets' },
  { to: '/formation/geopolitique/atlas-ecg', Icon: MessageCircle, title: 'Atlas ECG', subtitle: 'Chatbot géopolitique' },
  { to: '/formation/geopolitique/references', Icon: FileText, title: 'Références', subtitle: 'Bibliographie' },
];

const etudesDeCas = [
  {
    to: '/formation/geopolitique/etudes-de-cas/foret-amazonienne',
    Icon: TreePine,
    title: 'Forêt Amazonienne',
    desc: '« Poumon de la planète » face à la déforestation accélérée. 20 % de surface déboisée, enjeux climatiques majeurs.',
    tags: 'Environnement · Climat · Biodiversité',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/antarctique',
    Icon: Snowflake,
    title: 'Antarctique',
    desc: 'Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.',
    tags: 'Droit international · Ressources · Climat',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/canada-guerre-economique',
    Icon: Shield,
    title: 'Canada — Guerre économique',
    desc: 'Ingérences chinoises et tariffs américains. Sécurité économique exposant 10–20 % du PIB.',
    tags: 'Économie · Sécurité · Commerce',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/dubai-the-line',
    Icon: Building,
    title: 'Dubai / The Line',
    desc: 'Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.',
    tags: 'Économie · Tourisme · Énergie verte',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/canal-suez',
    Icon: Ship,
    title: 'Canal de Suez',
    desc: 'Chokepoint vital pour 12 % du commerce mondial. Sécurité maritime et enjeux historiques.',
    tags: 'Commerce · Sécurité maritime · Histoire',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/nvidia-ia',
    Icon: Cpu,
    title: 'NVIDIA — IA',
    desc: 'Leader en puces IA. Guerre technologique US-Chine, 80 % du marché des GPU IA.',
    tags: 'Technologie · Économie · Sécurité',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/guerre-economique',
    Icon: DollarSign,
    title: 'Guerre économique',
    desc: "Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d'approvisionnement globales.",
    tags: 'Économie · Commerce · Sécurité',
  },
  {
    to: '/formation/geopolitique/etudes-de-cas/brics',
    Icon: Globe,
    title: 'BRICS',
    desc: '10 membres, 55 % de la population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.',
    tags: 'Gouvernance · Économies émergentes · Diplomatie',
  },
];

const FormationGeopolitiquePage = () => {
  return (
    <FormationLayout
      seo={{
        title: 'Formation Géopolitique ECG',
        description:
          'Formation complète de géopolitique pour la prépa ECG : 1ʳᵉ et 2ᵉ année, modules thématiques, aires régionales, études de cas, méthodologie, chronologies, flashcards et outils IA.',
        canonical: '/formation/geopolitique',
      }}
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'Géopolitique' },
      ]}
    >
      <FormationHero
        eyebrow="Prépa Rationnelle · Formation"
        Icon={Globe}
        title="Géo"
        titleAccent="politique."
        subtitle={
          <>
            Analysez les enjeux mondiaux contemporains avec une <span className="carnet-hl font-lora italic">méthode claire</span> et des outils modernes : modules thématiques, aires régionales, études de cas, chronologies et IA dédiée.
          </>
        }
        tags={[
          { label: 'ECG 1ʳᵉ & 2ᵉ année', icon: GraduationCap },
          { label: 'Méthode + outils', variant: 'outline' },
          { label: 'Atlas ECG', variant: 'outline' },
        ]}
        annotation="↓ commence par ton année"
      />

      {/* Section 1 — Niveaux */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-14"
          >
            <span className="carnet-eyebrow inline-block mb-6">2 niveaux disponibles</span>
            <h2 className="font-lora text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-carnet-ink tracking-tight">
              Choisis ton <em className="font-lora italic text-carnet-red">niveau</em>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niveaux.map((n, idx) => {
              const tilt = idx === 1 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={tilt}
                >
                  <Link to={n.to} className="block h-full">
                    <div className="carnet-card group cursor-pointer p-7 sm:p-8 h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow flex flex-col">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                        </div>
                        <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] text-carnet-red">
                          {n.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <n.Icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[24px] sm:text-[26px] leading-[1.2] text-carnet-ink group-hover:text-carnet-red transition-colors">
                          {n.title}
                        </h3>
                      </div>

                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-6">
                        {n.description}
                      </p>

                      <div className="space-y-2 mb-6 carnet-paper-plain rounded-md p-4 border border-dashed border-[rgba(78,55,30,0.18)]">
                        {n.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                            <span className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.5]">{b}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="mt-auto w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-11 text-[14px] border-0 transition-colors">
                        {n.cta}
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

      {/* Section 2 — Ressources & outils */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-14"
          >
            <span className="carnet-eyebrow inline-block mb-6">Inclus dans ta formation</span>
            <h2 className="font-lora text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-carnet-ink tracking-tight">
              Ressources & <em className="font-lora italic text-carnet-red">outils</em>.
            </h2>
            <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.55] text-carnet-ink-soft mt-5 max-w-[600px]">
              Méthodo, annales, chronologies, flashcards et IA dédiée.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ressources.map((r, idx) => (
              <motion.div
                key={r.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.25) }}
              >
                <FormationResourceTile {...r} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Études de cas */}
      <section className="relative pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-14"
          >
            <span className="carnet-eyebrow inline-block mb-6">19 analyses clés</span>
            <h2 className="font-lora text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-carnet-ink tracking-tight">
              Études de <em className="font-lora italic text-carnet-red">cas</em>.
            </h2>
            <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.55] text-carnet-ink-soft mt-5 max-w-[600px]">
              Des analyses approfondies pour nourrir vos copies et structurer votre lecture du monde actuel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {etudesDeCas.map(({ to, Icon, title, desc, tags }, idx) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                className={idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : ''}
              >
                <Link
                  to={to}
                  className="carnet-card group block p-6 h-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-carnet-red" />
                  </div>
                  <h3 className="font-lora text-[20px] text-carnet-ink mb-2 leading-snug group-hover:text-carnet-red transition-colors">
                    {title}
                  </h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-4 leading-relaxed flex-1">
                    {desc}
                  </p>
                  <div className="carnet-eyebrow pt-3 border-t border-dashed border-[rgba(78,55,30,0.18)] text-[10px]">
                    {tags}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 flex justify-center"
          >
            <Link to="/formation/geopolitique/cas-pratiques">
              <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                Voir toutes les études de cas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </FormationLayout>
  );
};

export default FormationGeopolitiquePage;
