import React from 'react';
import { Link } from "react-router-dom";
import {
  Globe, Target, FileText, Sparkles, BookOpen, Clock, ChevronRight, PenTool,
  TreePine, Snowflake, Building, Ship, Cpu, DollarSign, Shield, MessageCircle
} from 'lucide-react';

const PR_ORANGE = "#F4845F";
const PR_ORANGE_LIGHT = "#FDF0EC";
const PR_ORANGE_DARK = "#C45A35";
const PR_BLACK = "#1A1A18";
const PR_GRAY_DARK = "#3A3A38";
const PR_GRAY_MID = "#888880";
const PR_GRAY_LIGHT = "#D8D6CE";
const PR_GRAY_BG = "#F7F6F3";

const FormationGeopolitiquePage = () => {
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
            <Link to="/formations" className="hover:opacity-70 transition-opacity">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-1.5" style={{ color: PR_GRAY_LIGHT }} />
            <span style={{ color: PR_BLACK }} className="font-medium">
              Formation Géopolitique
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 sm:py-16 px-4">

        {/* Header Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="h-px w-8"
              style={{ backgroundColor: PR_ORANGE }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: PR_ORANGE_DARK }}
            >
              Formation · ECG 1ʳᵉ & 2ᵉ année
            </span>
            <span
              className="h-px w-8"
              style={{ backgroundColor: PR_ORANGE }}
            />
          </div>

          {/* Main Title */}
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
            style={{ color: PR_BLACK }}
          >
            Formation Géopolitique
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: PR_GRAY_DARK }}
          >
            Analysez les enjeux mondiaux contemporains avec une méthode claire
            et des outils modernes.
          </p>
        </div>

        {/* Niveaux d'étude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {/* Première Année */}
          <Link
            to="/formation/geopolitique/premiere-annee"
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: `1px solid ${PR_GRAY_LIGHT}`, boxShadow: "0 1px 2px rgba(0,0,0,0.02)" }}
          >
            {/* Trait orange top */}
            <div className="h-[3px] w-full" style={{ backgroundColor: PR_ORANGE }} />

            <div className="p-7">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                  style={{ backgroundColor: PR_ORANGE_LIGHT }}
                >
                  <BookOpen className="h-6 w-6" style={{ color: PR_ORANGE_DARK }} />
                </div>
                <div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: PR_ORANGE_DARK }}
                  >
                    Niveau 1
                  </span>
                  <h3
                    className="font-serif text-2xl leading-tight"
                    style={{ color: PR_BLACK }}
                  >
                    Première année
                  </h3>
                </div>
              </div>

              <p className="text-sm mb-6" style={{ color: PR_GRAY_DARK }}>
                Fondamentaux & méthodes — bases du programme, outils d'analyse,
                premiers grands repères chronologiques.
              </p>

              <div
                className="flex items-center justify-between text-sm font-medium pt-4"
                style={{ borderTop: `1px solid ${PR_GRAY_LIGHT}`, color: PR_BLACK }}
              >
                <span>Accéder aux modules</span>
                <ChevronRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  style={{ color: PR_ORANGE }}
                />
              </div>
            </div>
          </Link>

          {/* Deuxième Année */}
          <Link
            to="/formation/geopolitique/deuxieme-annee"
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: `1px solid ${PR_GRAY_LIGHT}`, boxShadow: "0 1px 2px rgba(0,0,0,0.02)" }}
          >
            <div className="h-[3px] w-full" style={{ backgroundColor: PR_ORANGE }} />

            <div className="p-7">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: PR_ORANGE_LIGHT }}
                >
                  <Globe className="h-6 w-6" style={{ color: PR_ORANGE_DARK }} />
                </div>
                <div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: PR_ORANGE_DARK }}
                  >
                    Niveau 2
                  </span>
                  <h3
                    className="font-serif text-2xl leading-tight"
                    style={{ color: PR_BLACK }}
                  >
                    Deuxième année
                  </h3>
                </div>
              </div>

              <p className="text-sm mb-6" style={{ color: PR_GRAY_DARK }}>
                Géodynamiques & enjeux — aires régionales, mondialisation,
                puissances et conflits contemporains.
              </p>

              <div
                className="flex items-center justify-between text-sm font-medium pt-4"
                style={{ borderTop: `1px solid ${PR_GRAY_LIGHT}`, color: PR_BLACK }}
              >
                <span>Accéder aux modules</span>
                <ChevronRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  style={{ color: PR_ORANGE }}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Section ressources */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-6" style={{ backgroundColor: PR_ORANGE }} />
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: PR_BLACK }}
            >
              Ressources & outils
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { to: "/formation/geopolitique/sujets-probables", icon: Target, title: "Pronostics 2025", subtitle: "Sujets probables" },
              { to: "/formation/geopolitique/etudes-de-cas", icon: FileText, title: "Thèmes centraux", subtitle: "19 analyses clés" },
              { to: "/formation/geopolitique/chronologies", icon: Clock, title: "Chronologies", subtitle: "Repères historiques" },
              { to: "/formation/geopolitique/methodologie", icon: PenTool, title: "Méthodologie", subtitle: "Dissertations & E.C." },
              { to: "/formation/geopolitique/annales", icon: BookOpen, title: "Annales", subtitle: "25 ans de sujets" },
              { to: "/formation/geopolitique/flashcards", icon: BookOpen, title: "Flashcards", subtitle: "Vocabulaire clé" },
              { to: "/formation/geopolitique/generateur", icon: Sparkles, title: "Générateur IA", subtitle: "Contenu & sujets" },
              { to: "/formation/geopolitique/atlas-ecg", icon: MessageCircle, title: "Atlas ECG", subtitle: "Chatbot géopolitique" },
              { to: "/formation/geopolitique/references", icon: FileText, title: "Références", subtitle: "Bibliographie" },
            ].map(({ to, icon: Icon, title, subtitle }) => (
              <Link
                key={to}
                to={to}
                className="group bg-white rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${PR_GRAY_LIGHT}`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                  style={{ backgroundColor: PR_ORANGE_LIGHT }}
                >
                  <Icon className="h-5 w-5" style={{ color: PR_ORANGE_DARK }} />
                </div>
                <h3
                  className="font-medium text-[15px] mb-1 leading-tight"
                  style={{ color: PR_BLACK }}
                >
                  {title}
                </h3>
                <p className="text-xs" style={{ color: PR_GRAY_MID }}>
                  {subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Études de cas */}
        <div
          className="max-w-6xl mx-auto rounded-2xl p-8 sm:p-12"
          style={{ backgroundColor: PR_GRAY_BG }}
        >
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6" style={{ backgroundColor: PR_ORANGE }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: PR_ORANGE_DARK }}
              >
                Études de cas
              </span>
              <span className="h-px w-6" style={{ backgroundColor: PR_ORANGE }} />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl mb-4"
              style={{ color: PR_BLACK }}
            >
              Enjeux géopolitiques contemporains
            </h2>
            <p className="text-base sm:text-lg" style={{ color: PR_GRAY_DARK }}>
              Des analyses approfondies pour nourrir vos copies et structurer
              votre lecture du monde actuel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[
              {
                to: "/formation/geopolitique/etudes-de-cas/foret-amazonienne",
                icon: TreePine,
                title: "Forêt Amazonienne",
                desc: "« Poumon de la planète » face à la déforestation accélérée. 20 % de surface déboisée, enjeux climatiques majeurs.",
                tags: "Environnement · Climat · Biodiversité",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/antarctique",
                icon: Snowflake,
                title: "Antarctique",
                desc: "Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.",
                tags: "Droit international · Ressources · Climat",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/canada-guerre-economique",
                icon: Shield,
                title: "Canada — Guerre économique",
                desc: "Ingérences chinoises et tariffs américains. Sécurité économique exposant 10–20 % du PIB.",
                tags: "Économie · Sécurité · Commerce",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/dubai-the-line",
                icon: Building,
                title: "Dubai / The Line",
                desc: "Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.",
                tags: "Économie · Tourisme · Énergie verte",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/canal-suez",
                icon: Ship,
                title: "Canal de Suez",
                desc: "Chokepoint vital pour 12 % du commerce mondial. Sécurité maritime et enjeux historiques.",
                tags: "Commerce · Sécurité maritime · Histoire",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/nvidia-ia",
                icon: Cpu,
                title: "NVIDIA — IA",
                desc: "Leader en puces IA. Guerre technologique US-Chine, 80 % du marché des GPU IA.",
                tags: "Technologie · Économie · Sécurité",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/guerre-economique",
                icon: DollarSign,
                title: "Guerre économique",
                desc: "Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d'approvisionnement globales.",
                tags: "Économie · Commerce · Sécurité",
              },
              {
                to: "/formation/geopolitique/etudes-de-cas/brics",
                icon: Globe,
                title: "BRICS",
                desc: "10 membres, 55 % de la population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.",
                tags: "Gouvernance · Économies émergentes · Diplomatie",
              },
            ].map(({ to, icon: Icon, title, desc, tags }) => (
              <Link
                key={to}
                to={to}
                className="group bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                style={{
                  border: `1px solid ${PR_GRAY_LIGHT}`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: PR_ORANGE_LIGHT }}
                >
                  <Icon className="h-5 w-5" style={{ color: PR_ORANGE_DARK }} />
                </div>
                <h3
                  className="font-serif text-lg mb-2 leading-snug"
                  style={{ color: PR_BLACK }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm mb-4 leading-relaxed flex-1"
                  style={{ color: PR_GRAY_DARK }}
                >
                  {desc}
                </p>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] pt-3"
                  style={{
                    color: PR_ORANGE_DARK,
                    borderTop: `1px solid ${PR_GRAY_LIGHT}`,
                  }}
                >
                  {tags}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/formation/geopolitique/cas-pratiques"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: PR_ORANGE,
                color: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(244,132,95,0.25)",
              }}
            >
              Voir toutes les études de cas
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;
