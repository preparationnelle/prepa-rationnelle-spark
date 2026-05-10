import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Target, FileText, Sparkles, BookOpen, Clock, ChevronRight, PenTool,
  TreePine, Snowflake, Building, Ship, Cpu, DollarSign, Shield, MessageCircle, ArrowRight,
} from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const niveaux = [
  {
    to: '/formation/geopolitique/premiere-annee',
    Icon: BookOpen,
    title: 'Première année',
    description:
      'Fondamentaux & méthodes — bases du programme, outils d’analyse, premiers grands repères chronologiques.',
  },
  {
    to: '/formation/geopolitique/deuxieme-annee',
    Icon: Globe,
    title: 'Deuxième année',
    description:
      'Géodynamiques & enjeux — aires régionales, mondialisation, puissances et conflits contemporains.',
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
    desc: 'Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d’approvisionnement globales.',
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

const SectionTitle: React.FC<{ eyebrow?: string; title: string }> = ({ eyebrow, title }) => (
  <div className="flex flex-col items-start gap-2 mb-8">
    {eyebrow && (
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
        {eyebrow}
      </span>
    )}
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-6 bg-pr-orange" />
      <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black">{title}</h2>
    </div>
  </div>
);

const FormationGeopolitiquePage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Toutes les formations', to: '/formations' },
        { label: 'Géopolitique' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Géopolitique"
      subtitle="Analysez les enjeux mondiaux contemporains avec une méthode claire et des outils modernes."
      tags={[
        { label: 'ECG 1ʳᵉ & 2ᵉ année' },
        { label: 'Méthode + outils' },
        { label: 'Atlas ECG', highlight: true },
      ]}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {niveaux.map((n, idx) => (
          <PRHubCard key={n.to} number={idx + 1} {...n} cta="Accéder aux modules" />
        ))}
      </section>

      <section className="mb-20">
        <SectionTitle title="Ressources & outils" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ressources.map(({ to, Icon, title, subtitle }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white border border-pr-gray-light rounded-xl p-5 transition-all duration-300 hover:border-pr-orange hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(244,132,95,0.10)]"
            >
              <div className="w-10 h-10 rounded-lg bg-pr-orange-pale flex items-center justify-center mb-3 group-hover:bg-pr-orange-soft/40 transition-colors">
                <Icon className="h-5 w-5 text-pr-orange-dark" />
              </div>
              <h3 className="font-dm-serif text-[17px] text-pr-black mb-1 leading-tight">{title}</h3>
              <p className="text-xs text-pr-gray-mid">{subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-12">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-3">
            Études de cas
          </p>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-4">
            Enjeux géopolitiques contemporains
          </h2>
          <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-5" />
          <p className="text-base sm:text-lg text-pr-gray-dark/80">
            Des analyses approfondies pour nourrir vos copies et structurer votre lecture du monde actuel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {etudesDeCas.map(({ to, Icon, title, desc, tags }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white border border-pr-gray-light rounded-xl p-6 transition-all duration-300 hover:border-pr-orange hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(244,132,95,0.10)] flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-pr-orange-pale flex items-center justify-center mb-4 group-hover:bg-pr-orange-soft/40 transition-colors">
                <Icon className="h-5 w-5 text-pr-orange-dark" />
              </div>
              <h3 className="font-dm-serif text-lg text-pr-black mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-pr-gray-dark/80 mb-4 leading-relaxed flex-1">{desc}</p>
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark pt-3 border-t border-pr-gray-light/70">
                {tags}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/formation/geopolitique/cas-pratiques"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(244,132,95,0.25)]"
          >
            Voir toutes les études de cas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PRFormationLayout>
  );
};

export default FormationGeopolitiquePage;
