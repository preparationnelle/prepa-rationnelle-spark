import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, FileText, Globe, Building, Cpu, Ship, Shield, DollarSign, Snowflake
} from 'lucide-react';

const PR_ORANGE = "#F4845F";
const PR_ORANGE_LIGHT = "#FDF0EC";
const PR_ORANGE_DARK = "#C45A35";
const PR_BLACK = "#1A1A18";
const PR_GRAY_DARK = "#3A3A38";
const PR_GRAY_MID = "#888880";
const PR_GRAY_LIGHT = "#D8D6CE";
const PR_GRAY_BG = "#F7F6F3";

function TreePine(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7l6.7-7.3a1 1 0 0 1 1.4 0l6.7 7.3a1 1 0 0 1-.7 1.7H17Z" />
    </svg>
  );
}

const GeopolitiqueCasPratiquesPage = () => {
  const caseStudies = [
    {
      id: 'foret-amazonienne',
      title: 'Forêt Amazonienne',
      subtitle: 'Poumon de la planète & enjeux',
      description: '« Poumon de la planète » face à la déforestation accélérée. 20 % de surface déboisée, enjeux climatiques majeurs.',
      icon: TreePine,
      keyStats: ['20 % surface déboisée', '10–15 % émissions CO₂', 'COP30 2025'],
      route: '/formation/geopolitique/etudes-de-cas/foret-amazonienne'
    },
    {
      id: 'antarctique',
      title: 'Antarctique',
      subtitle: 'Ressources & tensions',
      description: 'Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.',
      icon: Snowflake,
      keyStats: ['90 % eau douce', '14 M km²', 'Traité 1959'],
      route: '/formation/geopolitique/etudes-de-cas/antarctique'
    },
    {
      id: 'canada',
      title: 'Canada — Guerre éco',
      subtitle: 'Ingérences & résilience',
      description: 'Ingérences chinoises et tariffs américains. Sécurité économique exposant 10–20 % du PIB.',
      icon: Shield,
      keyStats: ['10–20 % PIB exposé', 'Stratégie Indo-Pacifique', 'Tariffs US'],
      route: '/formation/geopolitique/etudes-de-cas/canada'
    },
    {
      id: 'dubai',
      title: 'Dubai / The Line',
      subtitle: 'Vision 2030 & diversification',
      description: 'Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.',
      icon: Building,
      keyStats: ['150 M visiteurs 2030', '50 % énergies renouv.', 'PIF 1 000 Md$'],
      route: '/formation/geopolitique/etudes-de-cas/dubai'
    },
    {
      id: 'suez',
      title: 'Canal de Suez',
      subtitle: 'Chokepoint maritime vital',
      description: 'Chokepoint vital pour 12 % du commerce mondial. Sécurité maritime et enjeux historiques.',
      icon: Ship,
      keyStats: ['12 % commerce mondial', '50 K navires/an', 'Sécurité maritime'],
      route: '/formation/geopolitique/etudes-de-cas/suez'
    },
    {
      id: 'tsmc',
      title: 'TSMC — Bouclier de silicium',
      subtitle: 'Géopolitique des semi-conducteurs',
      description: 'L\'entreprise la plus indispensable au monde. 90 % des puces avancées, « Silicon Shield » protégeant Taïwan, enjeux de sécurité nationale US et Chine.',
      icon: Cpu,
      keyStats: ['90 % puces avancées', '60 % fonderie mondiale', 'Usines Arizona'],
      route: '/formation/geopolitique/etudes-de-cas/tsmc'
    },
    {
      id: 'nvidia',
      title: 'NVIDIA — IA',
      subtitle: 'Guerre technologique',
      description: 'Leader en puces IA. Guerre technologique US-Chine, 80 % du marché des GPU IA.',
      icon: Cpu,
      keyStats: ['4 000 Md$ market cap', '80 % marché GPU', 'Sanctions US'],
      route: '/formation/geopolitique/etudes-de-cas/nvidia'
    },
    {
      id: 'guerre-economique',
      title: 'Guerre économique',
      subtitle: 'Sanctions & stratégies',
      description: 'Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d\'approvisionnement globales.',
      icon: DollarSign,
      keyStats: ['Tariffs Trump', 'Sanctions Russie', 'Déstabilisation'],
      route: '/formation/geopolitique/etudes-de-cas/guerre-economique'
    },
    {
      id: 'brics',
      title: 'BRICS',
      subtitle: 'Multipolarité émergente',
      description: '10 membres, 55 % de la population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.',
      icon: Globe,
      keyStats: ['10 membres', '55 % population', '46 % PIB PPA'],
      route: '/formation/geopolitique/etudes-de-cas/brics'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>

      {/* Sticky Breadcrumb */}
      <nav
        className="sticky top-0 z-50 bg-white"
        style={{ borderBottom: `1px solid ${PR_GRAY_LIGHT}` }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs" style={{ color: PR_GRAY_MID }}>
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3 mx-1.5" style={{ color: PR_GRAY_LIGHT }} />
            <Link to="/formation/geopolitique" className="hover:opacity-70 transition-opacity">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 mx-1.5" style={{ color: PR_GRAY_LIGHT }} />
            <span style={{ color: PR_BLACK }} className="font-medium">
              Études de cas & actualités
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 sm:py-16">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8" style={{ backgroundColor: PR_ORANGE }} />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: PR_ORANGE_DARK }}
            >
              Cas pratiques · Géopolitique ECG
            </span>
            <span className="h-px w-8" style={{ backgroundColor: PR_ORANGE }} />
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
            style={{ color: PR_BLACK }}
          >
            Études de cas & actualités
          </h1>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: PR_GRAY_DARK }}
          >
            Analyses détaillées de situations géopolitiques concrètes,
            d'entreprises stratégiques et de zones de tension actuelles.
            Des exemples précis pour enrichir vos copies.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <Link
                key={study.id}
                to={study.route}
                className="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${PR_GRAY_LIGHT}`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
                }}
              >
                {/* Trait orange top */}
                <div className="h-[3px] w-full" style={{ backgroundColor: PR_ORANGE }} />

                <div className="p-6 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: PR_ORANGE_LIGHT }}
                    >
                      <Icon className="h-5 w-5" style={{ color: PR_ORANGE_DARK }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded"
                      style={{
                        backgroundColor: PR_ORANGE_LIGHT,
                        color: PR_ORANGE_DARK,
                      }}
                    >
                      Cas pratique
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <h3
                    className="font-serif text-xl mb-1 leading-snug"
                    style={{ color: PR_BLACK }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-[0.08em] font-medium mb-4"
                    style={{ color: PR_GRAY_MID }}
                  >
                    {study.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: PR_GRAY_DARK }}
                  >
                    {study.description}
                  </p>

                  {/* Stats chips */}
                  <div
                    className="flex flex-wrap gap-1.5 pt-4 mb-4"
                    style={{ borderTop: `1px solid ${PR_GRAY_LIGHT}` }}
                  >
                    {study.keyStats.map((stat, index) => (
                      <span
                        key={index}
                        className="text-[10px] px-2 py-1 rounded font-medium"
                        style={{
                          backgroundColor: PR_GRAY_BG,
                          color: PR_GRAY_DARK,
                          border: `1px solid ${PR_GRAY_LIGHT}`,
                        }}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center justify-between text-sm font-medium"
                    style={{ color: PR_BLACK }}
                  >
                    <span>Lire le cas</span>
                    <ChevronRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      style={{ color: PR_ORANGE }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeopolitiqueCasPratiquesPage;
