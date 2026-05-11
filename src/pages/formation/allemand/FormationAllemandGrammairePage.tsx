import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

type Chapter = {
  slug: string;
  title: string;
  description: string;
};

const chapters: Chapter[] = [
  { slug: 'declinaisons', title: 'Déclinaisons', description: "Les déclinaisons de l'adjectif et leurs cas en allemand." },
  { slug: 'relatives', title: 'Proposition Relative', description: 'Les propositions relatives et leurs pronoms en allemand.' },
  { slug: 'structure', title: 'Structure de la Phrase', description: "L'ordre des mots et la structure des phrases allemandes." },
  { slug: 'passif', title: 'Le Passif', description: 'Formation et utilisation du passif en allemand.' },
  { slug: 'recurrents', title: 'Points Récurrents', description: 'Les règles de grammaire les plus fréquemment testées.' },
  { slug: 'verbes-a-particule', title: 'Verbes à Particule Séparable', description: 'Maîtriser les verbes à particule séparable et leur séparation.' },
  { slug: 'temps-composes', title: 'Formation des Temps Composés', description: 'Maîtriser haben/sein et la formation des temps composés.' },
  { slug: 'verbes-modaux', title: 'Verbes Modaux Complexes', description: 'Les six verbes modaux et leurs particularités aux temps composés.' },
  { slug: 'position-v2', title: 'Règle de Position V2', description: 'La position rigide du verbe en allemand (Verb Zweite Position).' },
  { slug: 'auxiliaire-parfait', title: "Choix de l'Auxiliaire au Parfait", description: 'Maîtriser haben vs sein pour former le parfait allemand.' },
  { slug: 'genitif', title: 'Formation du Génitif', description: "Maîtriser l'usage complexe du génitif pour exprimer la possession." },
  { slug: 'negation', title: 'La Négation et les Particules', description: 'Maîtriser nicht, kein et les autres particules de négation allemande.' },
  { slug: 'phrases-interrogatives', title: 'Les Phrases Interrogatives', description: "Maîtriser les différents types de questions en allemand." },
  { slug: 'comparatif-superlatif', title: 'Comparatif et Superlatif', description: 'Maîtriser la comparaison des adjectifs et adverbes en allemand.' },
];

const FormationAllemandGrammairePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/allemand/grammaire"
        title="Grammaire Allemande ECG · Prépa Rationnelle"
        description="Formation complète de grammaire allemande pour les concours ECG : 14 fiches structurées (déclinaisons, passif, temps composés, etc.) avec exercices."
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
            <span className="carnet-eyebrow text-[11px]">Grammaire</span>
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
            <div className="carnet-eyebrow mb-6">Allemand · Module 02</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Grammaire</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Maîtrisez les structures grammaticales <span className="carnet-hl font-lora italic">complexes</span> pour exceller aux épreuves d'allemand ECG — 14 fiches avec exercices.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <BookOpen className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">14 fiches</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Exercices inclus</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton chapitre
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4 max-w-4xl">
            {chapters.map((chapter, idx) => {
              const base = `/formation/allemand-${chapter.slug}`;
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={chapter.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link to={base} className="block">
                          <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-tight mb-2 group-hover:text-carnet-red transition-colors">
                            {chapter.title}
                          </h3>
                        </Link>
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                          {chapter.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center">
                          <Link
                            to={base}
                            className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Étudier
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          <Link
                            to={`${base}/exercices`}
                            className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Exercices
                          </Link>
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

export default FormationAllemandGrammairePage;
