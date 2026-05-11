import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { MessageSquare, Home, ChevronRight, ArrowLeft, ArrowRight, Building, TrendingUp, Globe, Users, Brain } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

const intro = [
  { Icon: TrendingUp, title: 'Application pratique', desc: 'Transposer la théorie dans des situations réelles complexes' },
  { Icon: Brain, title: 'Analyse critique', desc: "Développer l'esprit d'analyse et la prise de recul" },
  { Icon: MessageSquare, title: 'Argumentation', desc: 'Construire des raisonnements solides et nuancés' },
];

type CaseStudy = {
  Icon: typeof Building;
  title: string;
  badge: string;
  description: string;
  examples: Array<{ title: string; sub: string; bullets: string[] }>;
};

const cases: CaseStudy[] = [
  {
    Icon: Building,
    title: "Cas d'entreprises",
    badge: "Économie d'entreprise",
    description: "Analyse les stratégies d'entreprises, décisions d'investissement et adaptations aux marchés.",
    examples: [
      {
        title: 'Relocalisation industrielle',
        sub: "Une entreprise automobile face à la mondialisation",
        bullets: ['Analyse coûts de production', "Impact sur l'emploi local", 'Stratégies de transition'],
      },
      {
        title: 'Innovation disruptive',
        sub: "Transformation digitale d'une entreprise traditionnelle",
        bullets: ['Adoption de nouvelles technologies', 'Changement de modèle économique', 'Gestion des résistances internes'],
      },
    ],
  },
  {
    Icon: TrendingUp,
    title: 'Études de marché',
    badge: 'Microéconomie appliquée',
    description: 'Étudie le fonctionnement des marchés, les comportements des consommateurs et les stratégies concurrentielles.',
    examples: [
      {
        title: 'Marché des smartphones',
        sub: 'Concurrence oligopolistique et innovation',
        bullets: ['Structure de marché', 'Stratégies de différenciation', "Impact des barrières à l'entrée"],
      },
      {
        title: 'Crise énergétique',
        sub: 'Fluctuations des prix et adaptation des acteurs',
        bullets: ['Élasticité-prix de la demande', 'Politiques de substitution', "Impact sur l'inflation"],
      },
    ],
  },
  {
    Icon: Globe,
    title: 'Politiques publiques',
    badge: 'Macroéconomie appliquée',
    description: "Évalue l'efficacité des interventions publiques et leurs impacts socio-économiques.",
    examples: [
      {
        title: "Revenu minimum d'insertion",
        sub: 'Politique sociale et incitations au travail',
        bullets: ["Effets sur l'emploi", 'Coûts budgétaires', 'Redistribution des revenus'],
      },
      {
        title: 'Transition énergétique',
        sub: 'Politiques environnementales et développement durable',
        bullets: ['Externalités environnementales', 'Instruments économiques', 'Acceptabilité sociale'],
      },
    ],
  },
  {
    Icon: Users,
    title: 'Questions sociales',
    badge: 'Sociologie appliquée',
    description: 'Explore les dynamiques sociales, les inégalités et les changements sociétaux.',
    examples: [
      {
        title: 'Travail et numérique',
        sub: 'Transformation du monde du travail',
        bullets: ['Évolution des qualifications', "Nouvelles formes d'emploi", 'Inégalités numériques'],
      },
      {
        title: 'Vieillissement démographique',
        sub: 'Enjeux sociaux et économiques du vieillissement',
        bullets: ['Systèmes de retraite', 'Marché du travail', 'Cohésion sociale'],
      },
    ],
  },
];

const phases = [
  {
    title: 'Phase de compréhension',
    steps: [
      { n: '1', title: 'Lecture active', desc: 'Identifier les acteurs, enjeux et contexte' },
      { n: '2', title: 'Problématique', desc: 'Formuler clairement la question centrale' },
      { n: '3', title: 'Décomposition', desc: 'Isoler les dimensions économiques/sociologiques' },
    ],
  },
  {
    title: "Phase d'analyse",
    steps: [
      { n: '4', title: 'Mobilisation théorique', desc: 'Appliquer concepts et théories appropriés' },
      { n: '5', title: 'Analyse critique', desc: 'Évaluer limites et implications' },
      { n: '6', title: 'Synthèse', desc: 'Construire réponse argumentée' },
    ],
  },
];

const EtudesCasESHPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
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
            <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">
              ESH ECG
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Études de cas</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <Link
            to="/formation/esh"
            className="inline-flex items-center gap-2 mb-8 font-instrument text-[13px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation ESH
          </Link>

          <div className="mb-10">
            <ESHModuleNavigation />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">ESH · Études de cas</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-carnet-ink tracking-tight">
                Études de <em className="font-lora italic text-carnet-red">cas</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Applique tes connaissances théoriques à des <span className="carnet-hl font-lora italic">situations concrètes</span> et développe ta capacité d'analyse.
            </p>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ quatre familles d'études
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 p-8 sm:p-10">
            <div className="carnet-eyebrow mb-3">Pourquoi les études de cas ?</div>
            <h2 className="font-lora text-[24px] sm:text-[28px] text-carnet-ink leading-tight mb-3">
              Un outil pour développer <em className="font-lora italic text-carnet-red">l'esprit critique</em>.
            </h2>
            <p className="font-instrument text-[15px] text-carnet-ink-soft max-w-3xl leading-[1.65] mb-8">
              Les études de cas constituent un outil pédagogique essentiel pour développer l'esprit critique et l'application pratique des concepts économiques et sociologiques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {intro.map((it) => (
                <div key={it.title}>
                  <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-3">
                    <it.Icon className="h-5 w-5 text-carnet-red" />
                  </div>
                  <h4 className="font-lora text-[17px] text-carnet-ink mb-1.5">{it.title}</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cas par domaine */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                Études de cas par domaine
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                Quatre familles d'analyse pour s'entraîner.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cases.map((c, idx) => {
              const tilt = idx % 2 === 1 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ${tilt}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                      <c.Icon className="h-5 w-5 text-carnet-red" />
                    </div>
                    <span className="font-instrument text-[10px] uppercase tracking-[0.12em] text-carnet-ink-mute px-2.5 py-1 rounded-full bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)]">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-lora text-[22px] text-carnet-ink mb-3 leading-tight">{c.title}</h3>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-5">
                    {c.description}
                  </p>
                  <div className="space-y-4">
                    {c.examples.map((ex) => (
                      <div key={ex.title} className="border-l-2 border-carnet-red/40 pl-4">
                        <h5 className="font-lora text-[15px] text-carnet-ink font-semibold mb-1">
                          {ex.title}
                        </h5>
                        <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2">{ex.sub}</p>
                        <ul className="space-y-0.5">
                          {ex.bullets.map((b) => (
                            <li key={b} className="font-instrument text-[12px] text-carnet-ink-mute">
                              <span className="text-carnet-red mr-2">·</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthode d'analyse */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                Méthode d'analyse des études de cas
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                De la lecture à la synthèse argumentée.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]"
              >
                <h4 className="font-lora italic text-[20px] text-carnet-ink-soft mb-5 leading-snug">
                  {phase.title}
                </h4>
                <div className="space-y-4">
                  {phase.steps.map((s) => (
                    <div key={s.n} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <span className="font-lora text-[13px] font-semibold text-carnet-red">{s.n}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-lora text-[15px] text-carnet-ink font-semibold mb-0.5">
                          {s.title}
                        </div>
                        <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 p-8 sm:p-10 text-center">
            <div className="carnet-eyebrow mb-3">Continue ta progression</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight mb-5">
              Retour à la <em className="font-lora italic text-carnet-red">formation ESH</em>
            </h2>
            <Link
              to="/formation/esh"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(193,68,58,0.25)]"
            >
              Retour à la formation ESH
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtudesCasESHPage;
