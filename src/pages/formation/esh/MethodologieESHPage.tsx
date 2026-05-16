import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Home, ChevronRight, ArrowLeft, ArrowRight, FileText, Brain, Lightbulb, CheckCircle } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

const pillars = [
  {
    Icon: FileText,
    title: 'Analyse de documents',
    badge: 'Technique',
    description: "Apprends à décortiquer et analyser efficacement tout type de document économique ou sociologique.",
    items: ['Identification des enjeux', 'Analyse des arguments', 'Critique et synthèse'],
  },
  {
    Icon: Brain,
    title: 'Raisonnement économique',
    badge: 'Logique',
    description: 'Développe une pensée structurée pour analyser les phénomènes économiques complexes.',
    items: ['Causalité économique', 'Analyse coûts/avantages', 'Modélisation simplifiée'],
  },
  {
    Icon: Lightbulb,
    title: 'Préparation aux colles',
    badge: 'Pratique',
    description: "Techniques spécifiques pour briller lors des épreuves orales et des colles d'ESH.",
    items: ["Structuration de l'exposé", 'Gestion du temps', 'Argumentation convaincante'],
  },
];

const steps = [
  {
    n: '01',
    title: 'Compréhension du sujet',
    description: 'Lire attentivement le sujet et identifier les notions clés, les enjeux et les limites temporelles.',
    items: [
      'Repérer les mots-clés et concepts économiques/sociologiques',
      "Identifier le type d'épreuve (analyse, synthèse, dissertation)",
      'Délimiter le cadre temporel et spatial',
    ],
  },
  {
    n: '02',
    title: 'Mobilisation des connaissances',
    description: 'Rappeler les concepts théoriques et faits économiques pertinents pour traiter le sujet.',
    items: [
      'Sélectionner les théories économiques appropriées',
      'Mobiliser des exemples concrets et actualités',
      'Établir des liens entre micro et macroéconomie',
    ],
  },
  {
    n: '03',
    title: 'Analyse et argumentation',
    description: 'Construire un raisonnement logique avec des arguments solides et des exemples pertinents.',
    items: [
      'Développer une problématique claire',
      'Articuler thèse, arguments et exemples',
      'Prévoir les contre-arguments',
    ],
  },
  {
    n: '04',
    title: 'Conclusion et ouverture',
    description: "Synthétiser l'analyse et ouvrir sur des perspectives plus larges.",
    items: [
      'Répondre explicitement à la problématique',
      'Ouvrir sur des enjeux contemporains',
      'Maintenir une distance critique',
    ],
  },
];

const tools = {
  economic: [
    { title: "Courbes d'offre et demande", desc: 'Interprétation des variations et impacts des politiques' },
    { title: 'Multiplicateur keynésien', desc: "Effets des politiques budgétaires sur l'économie" },
    { title: 'Équilibre général', desc: 'Interactions entre marchés et effets globaux' },
  ],
  sociological: [
    { title: 'Analyse des acteurs', desc: 'Intérêts, stratégies et rapports de force' },
    { title: 'Variables contextuelles', desc: 'Facteurs historiques, culturels et institutionnels' },
    { title: 'Analyse critique', desc: 'Questionnement des normes et des représentations' },
  ],
};

const MethodologieESHPage = () => {
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
            <span className="carnet-eyebrow text-[11px]">Méthodologie</span>
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
            <div className="carnet-eyebrow mb-6">ESH · Méthodologie</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-carnet-ink tracking-tight">
                Méthodologie{' '}
                <em className="font-lora italic text-carnet-red">ESH</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Maîtrise les <span className="carnet-hl font-lora italic">techniques et stratégies essentielles</span> pour réussir les épreuves ESH des concours.
            </p>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ trois piliers + une méthode
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                Trois piliers méthodologiques
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                Les compétences fondamentales à maîtriser.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const tilt = idx % 3 === 1 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={`bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] shadow-[0_1px_2px_rgba(78,55,30,0.04)] ${tilt}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                      <p.Icon className="h-5 w-5 text-carnet-red" />
                    </div>
                    <span className="font-instrument text-[10px] uppercase tracking-[0.12em] text-carnet-ink-mute px-2.5 py-1 rounded-full bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)]">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-lora text-[22px] text-carnet-ink mb-3 leading-tight">{p.title}</h3>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                        <CheckCircle className="h-3.5 w-3.5 text-carnet-red flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthode pas à pas */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                Méthode d'analyse — pas à pas
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                Quatre étapes pour structurer chaque épreuve.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((step, idx) => {
              const tilt = idx % 2 === 1 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)] ${tilt}`}
                >
                  <div className="flex items-start gap-5">
                    <span className="carnet-hand text-[32px] text-carnet-red leading-none font-semibold flex-shrink-0">
                      {step.n}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-lora text-[20px] text-carnet-ink mb-2 leading-snug">{step.title}</h4>
                      <p className="font-instrument text-[14px] text-carnet-ink-soft mb-3 leading-[1.6]">
                        {step.description}
                      </p>
                      <ul className="space-y-1.5">
                        {step.items.map((it) => (
                          <li key={it} className="font-instrument text-[13px] text-carnet-ink-mute leading-[1.55]">
                            <span className="text-carnet-red mr-2">·</span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outils méthodologiques */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                Outils méthodologiques essentiels
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                Pour articuler analyse économique et sociologique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h4 className="font-lora italic text-[20px] text-carnet-ink-soft mb-5 leading-snug">
                Pour l'analyse économique
              </h4>
              <div className="space-y-4">
                {tools.economic.map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-carnet-red rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-lora text-[15px] text-carnet-ink font-semibold mb-0.5">{t.title}</div>
                      <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h4 className="font-lora italic text-[20px] text-carnet-ink-soft mb-5 leading-snug">
                Pour l'analyse sociologique
              </h4>
              <div className="space-y-4">
                {tools.sociological.map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-carnet-red rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-lora text-[15px] text-carnet-ink font-semibold mb-0.5">{t.title}</div>
                      <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 p-8 sm:p-10 text-center">
            <div className="carnet-eyebrow mb-3">Mets-toi en pratique</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight mb-5">
              Passe aux <em className="font-lora italic text-carnet-red">études de cas</em>
            </h2>
            <Link
              to="/formation/esh/etudes-cas"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(193,68,58,0.25)]"
            >
              Pratiquer avec les études de cas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologieESHPage;
