import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

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
    number: '01',
    title: "Les fondements de l'économie et de la sociologie",
    description: "Comprendre les bases théoriques et méthodologiques de l'économie et de la sociologie",
    sections: [
      {
        title: "Les fondements de l'économie",
        description: "Découvrir les principes fondamentaux de l'économie et comprendre son rôle dans la société",
        chapters: [
          {
            number: '1.1',
            title: "Les acteurs et les grandes fonctions de l'économie",
            description: "Comprendre les différents acteurs économiques",
            introTo: '/formation/esh/module1/acteurs-fonctions-economie',
            moduleTo: '/formation/esh/module1/acteurs-fonctions-economie/module',
          },
          {
            number: '1.2',
            title: "La monnaie et le financement de l'économie",
            description: "Explorer le rôle de la monnaie et les mécanismes de financement",
            introTo: '/formation/esh/module1/monnaie-financement-economie',
            moduleTo: '/formation/esh/module1/monnaie-financement-economie/module',
          },
          {
            number: '1.3',
            title: "Les grands courants de la pensée économique depuis le XVIe siècle",
            description: "Découvrir l'évolution historique de la pensée économique",
            introTo: '/formation/esh/module1/courants-economiques',
            moduleTo: '/formation/esh/module1/courants-economiques/module',
          },
        ],
      },
      {
        title: 'Le comportement des agents et le fonctionnement du marché',
        description: 'Analyser les comportements économiques et les mécanismes de marché',
        chapters: [
          {
            number: '1.4',
            title: "L'équilibre micro-économique du producteur et du consommateur",
            description: 'Étudier les équilibres individuels et leurs interactions',
            introTo: '/formation/esh/module1/equilibre-micro',
            moduleTo: '/formation/esh/module1/equilibre-micro/module',
          },
          {
            number: '1.5',
            title: "L'offre, la demande et l'équilibre du marché en concurrence parfaite",
            description: "Comprendre les mécanismes d'équilibre en concurrence parfaite",
            introTo: '/formation/esh/module1/offre-demande',
            moduleTo: '/formation/esh/module1/offre-demande/module',
          },
          {
            number: '1.6',
            title: 'Les défaillances de marché',
            description: 'Analyser les situations où le marché ne fonctionne pas de manière optimale',
            introTo: '/formation/esh/module1/defaillances-marche',
            moduleTo: '/formation/esh/module1/defaillances-marche/module',
          },
        ],
      },
      {
        title: 'Les fondements de la sociologie',
        description: 'Découvrir les origines et les principes fondamentaux de la sociologie',
        chapters: [
          {
            number: '1.7',
            title: 'Les grands courants de la pensée sociologique depuis le XIXe siècle',
            description: "Explorer l'évolution historique de la pensée sociologique",
            introTo: '/formation/esh/module1/courants-sociologiques',
          },
          {
            number: '1.8',
            title: 'La pluralité des méthodes sociologiques',
            description: 'Découvrir les différentes approches méthodologiques en sociologie',
            introTo: '/formation/esh/module1/methodes-sociologiques',
          },
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'La croissance et le développement depuis le XIXe siècle',
    description: 'Analyser les transformations économiques, sociales et démographiques modernes',
    sections: [
      {
        title: 'La croissance et le développement depuis le XIXe siècle',
        description: 'Analyser les transformations économiques, sociales et démographiques modernes',
        chapters: [
          {
            number: '2.1',
            title: 'La croissance économique',
            description: 'Comprendre les mécanismes et les facteurs de la croissance économique',
            introTo: '/formation/esh/module2/croissance-economique',
          },
          {
            number: '2.2',
            title: 'Inégalités et stratégies de développement',
            description: 'Analyser les inégalités économiques et les politiques de développement',
            introTo: '/formation/esh/module2/inegalites-developpement',
          },
          {
            number: '2.3',
            title: 'La soutenabilité de la croissance et du développement',
            description: 'Étudier les enjeux environnementaux et sociaux du développement durable',
            introTo: '/formation/esh/module2/soutenabilite-croissance',
            moduleTo: '/formation/esh/module2/soutenabilite-croissance/module',
          },
        ],
      },
      {
        title: 'Les transformations des structures économiques, sociales et démographiques',
        description: 'Explorer les grandes mutations structurelles de la société moderne',
        chapters: [
          {
            number: '2.4',
            title: 'Les transformations des structures économiques et financières',
            description: "Analyser l'évolution des systèmes économiques et financiers modernes",
            introTo: '/formation/esh/module2/transformations-economiques-financieres',
            moduleTo: '/formation/esh/module2/transformations-economiques-financieres/module',
          },
          {
            number: '2.5',
            title: 'Mobilité sociale et transformations des structures sociales',
            description: "Étudier l'évolution des classes sociales et de la mobilité sociale",
            introTo: '/formation/esh/module2/mobilite-sociale',
          },
          {
            number: '2.6',
            title: 'Transformations démographiques et évolution des modes de vie',
            description: 'Comprendre les changements démographiques et leurs impacts sur la société',
            introTo: '/formation/esh/module2/transformations-demographiques',
          },
        ],
      },
      {
        title: 'Entreprise et organisations',
        description: "Explorer l'évolution des formes d'organisation du travail et de l'entreprise",
        chapters: [
          {
            number: '2.7',
            title: "Les transformations de l'entreprise et de sa gouvernance depuis le XIXe siècle",
            description: "Évolution des formes d'organisation et de management des entreprises",
            introTo: '/formation/esh/module2/transformations-entreprise',
            moduleTo: '/formation/esh/module2/transformations-entreprise/module',
          },
          {
            number: '2.8',
            title: 'Concurrence imparfaite et stratégies des firmes',
            description: 'Analyser les stratégies des entreprises dans un contexte de concurrence imparfaite',
            introTo: '/formation/esh/module2/concurrence-imparfaite',
            moduleTo: '/formation/esh/module2/concurrence-imparfaite/module',
          },
          {
            number: '2.9',
            title: 'Éléments de sociologie du travail et des organisations',
            description: 'Comprendre les dynamiques sociales au sein des organisations de travail',
            introTo: '/formation/esh/module2/sociologie-travail',
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

const PremiereAnneeESHPage = () => {
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
            <span className="carnet-eyebrow text-[11px]">Première année</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">ESH · 1ère année ECG</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-carnet-ink tracking-tight">
                Première{' '}
                <em className="font-lora italic text-carnet-red">année</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Maîtrise les fondements de l'<span className="carnet-hl font-lora italic">économie et de la sociologie</span> pour réussir tes épreuves ESH.
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

      {/* Next CTA */}
      <section className="relative pb-24 pt-4">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 p-8 sm:p-10 text-center">
            <div className="carnet-eyebrow mb-3">Prêt pour la suite ?</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight mb-5">
              Passe à la <em className="font-lora italic text-carnet-red">deuxième année</em>
            </h2>
            <Link
              to="/formation/esh/deuxieme-annee"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(193,68,58,0.25)]"
            >
              Accéder à la deuxième année
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiereAnneeESHPage;
