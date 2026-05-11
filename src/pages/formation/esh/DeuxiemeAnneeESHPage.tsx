import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Home, ChevronRight, ArrowLeft, ArrowRight, BarChart3, Globe } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

type Chapter = {
  number: string;
  title: string;
  description: string;
  introTo?: string;
  moduleTo?: string;
};

type Section = {
  title: string;
  description: string;
  chapters: Chapter[];
};

type Module = {
  number: string;
  title: string;
  description: string;
  sections: Section[];
};

const modules: Module[] = [
  {
    number: '03',
    title: 'La mondialisation économique et financière',
    description: 'Analyser les mécanismes et les enjeux de la mondialisation économique et financière moderne',
    sections: [
      {
        title: 'La dynamique de la mondialisation économique',
        description: "Étudier l'ouverture des économies et les échanges internationaux",
        chapters: [
          {
            number: '3.1',
            title: "L'ouverture des économies depuis le XIXe siècle : évolution et acteurs",
            description: "Analyser l'évolution historique de l'ouverture économique et ses acteurs",
            introTo: '/formation/esh/module3/ouverture-economies',
          },
          {
            number: '3.2',
            title: "L'analyse économique des échanges internationaux",
            description: 'Comprendre les théories et les mécanismes des échanges commerciaux',
            introTo: '/formation/esh/module3/analyse-echanges',
          },
          {
            number: '3.3',
            title: 'Régionalisation, gouvernance et régulations internationales',
            description: 'Étudier les accords régionaux et les institutions internationales',
            introTo: '/formation/esh/module3/regionalisation-gouvernance',
          },
        ],
      },
      {
        title: 'La dynamique de la mondialisation financière',
        description: 'Explorer les mécanismes financiers internationaux et leur évolution',
        chapters: [
          {
            number: '3.4',
            title: 'Balance des paiements, cours de change et systèmes de change',
            description: 'Analyser les mécanismes de change et la balance des paiements',
            introTo: '/formation/esh/module3/balance-paiements',
          },
          {
            number: '3.5',
            title: "L'évolution du système monétaire international depuis le XIXe siècle",
            description: "Comprendre l'histoire des systèmes monétaires internationaux",
            introTo: '/formation/esh/module3/evolution-systeme-monetaires',
          },
          {
            number: '3.6',
            title: 'Constitution et fonctionnement du marché international des capitaux',
            description: 'Étudier les marchés financiers internationaux et leur fonctionnement',
            introTo: '/formation/esh/module3/marche-capitaux',
          },
        ],
      },
      {
        title: "L'intégration européenne",
        description: "Analyser la construction et les défis de l'intégration européenne",
        chapters: [
          {
            number: '3.7',
            title: 'La dynamique de la construction européenne',
            description: "Étudier l'histoire et les enjeux de la construction européenne",
            introTo: '/formation/esh/module3/construction-europeenne',
          },
          {
            number: '3.8',
            title: "L'Europe économique et monétaire",
            description: "Comprendre l'union économique et monétaire européenne",
            introTo: '/formation/esh/module3/europe-economique-monetaires',
          },
          {
            number: '3.9',
            title: "L'Europe sociale",
            description: 'Analyser les politiques sociales européennes et leurs enjeux',
            introTo: '/formation/esh/module3/europe-sociale',
          },
        ],
      },
    ],
  },
  {
    number: '04',
    title: 'Déséquilibres, régulation et action publique',
    description: "Analyser les mécanismes de régulation économique et l'intervention publique face aux déséquilibres",
    sections: [
      {
        title: 'Équilibres et déséquilibres macroéconomiques',
        description: "Comprendre les mécanismes d'équilibre et de déséquilibre dans l'économie",
        chapters: [
          {
            number: '4.1',
            title: "L'inflation et le chômage",
            description: "Analyser les relations entre inflation et chômage dans l'économie",
            introTo: '/formation/esh/module4/inflation-chomage',
          },
          {
            number: '4.2',
            title: "L'équilibre macroéconomique à travers les modèles : IS-LM / IS-LM-BP / OGDG",
            description: "Maîtriser les modèles d'équilibre macroéconomique et leurs applications",
            introTo: '/formation/esh/module4/equilibre-macro',
          },
        ],
      },
      {
        title: "L'intervention économique des pouvoirs publics",
        description: 'Explorer les politiques publiques de régulation économique',
        chapters: [
          {
            number: '4.3',
            title: 'Fluctuations économiques et politiques de régulation des cycles',
            description: 'Comprendre les cycles économiques et les politiques de régulation',
            introTo: '/formation/esh/module4/fluctuations-economiques',
          },
          {
            number: '4.4',
            title: "Politiques structurelles et interventions de l'État face aux défaillances de marché",
            description: 'Analyser les interventions publiques face aux défaillances du marché',
            introTo: '/formation/esh/module4/politiques-structurelles',
          },
          {
            number: '4.5',
            title: 'Les contraintes auxquelles se heurtent les politiques économiques',
            description: 'Comprendre les limites et contraintes des politiques économiques',
            introTo: '/formation/esh/module4/contraintes-politiques',
          },
        ],
      },
      {
        title: 'Les politiques sociales',
        description: 'Explorer les politiques sociales et la justice sociale',
        chapters: [
          {
            number: '4.6',
            title: "Justice sociale et légitimation de l'intervention publique",
            description: 'Analyser la légitimité des interventions publiques pour la justice sociale',
            introTo: '/formation/esh/module4/justice-sociale',
          },
          {
            number: '4.7',
            title: 'Les politiques de lutte contre les inégalités',
            description: "Étudier les politiques publiques de réduction des inégalités",
            introTo: '/formation/esh/module4/lutte-inegalites',
          },
          {
            number: '4.8',
            title: 'Etat-providence et protection sociale',
            description: "Analyser le rôle de l'Etat-providence dans la protection sociale",
            introTo: '/formation/esh/module4/etat-providence',
          },
        ],
      },
    ],
  },
];

const ChapterCard: React.FC<{ chapter: Chapter; tilt?: string }> = ({ chapter, tilt }) => (
  <div
    className={`group bg-carnet-paper-2 rounded-xl p-5 border border-dashed border-[rgba(78,55,30,0.18)] hover:border-carnet-red/40 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_2px_rgba(78,55,30,0.04)] hover:shadow-[0_6px_18px_rgba(78,55,30,0.08)] ${tilt || ''}`}
  >
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
        <span className="font-lora text-[15px] font-semibold text-carnet-red">{chapter.number}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-lora text-[17px] leading-snug text-carnet-ink group-hover:text-carnet-red transition-colors mb-1.5">
          {chapter.title}
        </h4>
        <p className="font-instrument text-[13px] leading-[1.55] text-carnet-ink-soft mb-4">
          {chapter.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {chapter.introTo && (
            <Link
              to={chapter.introTo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument text-[12px] font-semibold transition-colors"
            >
              Introduction
              <ArrowRight className="h-3 w-3" />
            </Link>
          )}
          {chapter.moduleTo ? (
            <Link
              to={chapter.moduleTo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red/40 font-instrument text-[12px] font-semibold transition-colors"
            >
              Accéder au module
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] text-carnet-ink-mute font-instrument text-[12px] opacity-70">
              Bientôt disponible
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const DeuxiemeAnneeESHPage = () => {
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
            <span className="carnet-eyebrow text-[11px]">Deuxième année</span>
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
            <div className="carnet-eyebrow mb-6">ESH · 2ème année ECG</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-carnet-ink tracking-tight">
                Deuxième{' '}
                <em className="font-lora italic text-carnet-red">année</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Approfondis tes connaissances en <span className="carnet-hl font-lora italic">macroéconomie et analyse critique</span> pour maîtriser les enjeux contemporains.
            </p>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ programme par module
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, modIdx) => (
        <section key={mod.number} className="relative pb-12">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">{mod.number}</span>
                <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
                <div>
                  <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                    {mod.title}
                  </h2>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                    {mod.description}
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {mod.sections.map((section, secIdx) => (
                  <div key={`${modIdx}-${secIdx}`}>
                    <div className="mb-5 pl-5 border-l-2 border-carnet-red/40">
                      <h3 className="font-lora italic text-[20px] text-carnet-ink-soft leading-snug mb-1">
                        {section.title}
                      </h3>
                      <p className="font-instrument text-[13px] text-carnet-ink-mute">
                        {section.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {section.chapters.map((ch, chIdx) => {
                        const tilt = chIdx % 4 === 1 ? 'carnet-tilt-r' : chIdx % 4 === 3 ? 'carnet-tilt-l' : '';
                        return (
                          <motion.div
                            key={ch.number}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.3, delay: Math.min(chIdx * 0.04, 0.25) }}
                          >
                            <ChapterCard chapter={ch} tilt={tilt} />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Méthodologie d'analyse */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 p-8 sm:p-10">
            <div className="carnet-eyebrow mb-3">Méthodologie · 2ème année</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight mb-8">
              Trois <em className="font-lora italic text-carnet-red">axes d'analyse</em> pour réussir.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-4">
                  <BarChart3 className="h-5 w-5 text-carnet-red" />
                </div>
                <h4 className="font-lora text-[18px] text-carnet-ink mb-2">Analyse quantitative</h4>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.6]">
                  Maîtrise des indicateurs économiques et interprétation des données statistiques.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-4">
                  <Globe className="h-5 w-5 text-carnet-red" />
                </div>
                <h4 className="font-lora text-[18px] text-carnet-ink mb-2">Perspective historique</h4>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.6]">
                  Compréhension des évolutions longues et des ruptures économiques.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5 text-carnet-red" />
                </div>
                <h4 className="font-lora text-[18px] text-carnet-ink mb-2">Analyse critique</h4>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.6]">
                  Évaluation des politiques publiques et de leurs impacts sociaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next CTA */}
      <section className="relative pb-24 pt-4">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 p-8 sm:p-10 text-center">
            <div className="carnet-eyebrow mb-3">Prêt pour la méthode ?</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight mb-5">
              Découvre la <em className="font-lora italic text-carnet-red">méthodologie ESH</em>
            </h2>
            <Link
              to="/formation/esh/methodologie"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(193,68,58,0.25)]"
            >
              Accéder à la méthodologie
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeuxiemeAnneeESHPage;
