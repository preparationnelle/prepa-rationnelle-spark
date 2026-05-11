import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight, Home, MessageSquare, Target, Wand2 } from 'lucide-react';

type Step = {
  number: number;
  title: string;
  subtitle: string;
  cards: { Icon: React.ComponentType<{ className?: string }>; title: string; description: string }[];
};

const steps: Step[] = [
  {
    number: 1,
    title: 'Modules principaux',
    subtitle: 'Les deux piliers fondamentaux de la formation espagnol',
    cards: [
      { Icon: BookOpen, title: 'Grammaire espagnole', description: 'Maîtrise conjugaisons, syntaxe et structures avancées avec 6 fiches détaillées.' },
      { Icon: MessageSquare, title: 'Civilisation hispanique', description: 'Explore l’Espagne et l’Amérique latine contemporaines pour les épreuves.' },
    ],
  },
  {
    number: 2,
    title: 'Outils IA',
    subtitle: 'Technologies avancées pour accélérer ton apprentissage',
    cards: [
      { Icon: MessageSquare, title: 'Générateur de paragraphes', description: 'Crée des paragraphes argumentatifs de 150 mots basés sur articles de presse.' },
      { Icon: Wand2, title: 'Générateur de thèmes', description: 'Entraîne-toi aux thèmes grammaticaux avec correction automatique.' },
    ],
  },
  {
    number: 3,
    title: 'Vocabulaire spécialisé',
    subtitle: 'Le lexique essentiel pour les épreuves de concours',
    cards: [
      { Icon: MessageSquare, title: 'Flashcards interactives', description: '+70 termes et expressions par thématiques : institutions, élections, partis, législation, administration et relations internationales.' },
    ],
  },
  {
    number: 4,
    title: 'Méthodes & ressources',
    subtitle: 'Techniques éprouvées pour réussir tes épreuves',
    cards: [
      { Icon: BookOpen, title: 'Méthodes essentielles', description: 'Version espagnole, thème espagnol et expression écrite.' },
      { Icon: Target, title: 'Préparation concours', description: 'Épreuves écrites, épreuves orales et civilisation hispanique.' },
    ],
  },
];

const parcours = [
  { title: 'Commence par la grammaire', description: 'Maîtrise les bases avec les 6 fiches détaillées.' },
  { title: 'Utilise les générateurs IA', description: 'Entraîne-toi avec nos outils de correction automatique.' },
  { title: 'Explore la civilisation', description: 'Découvre l’actualité hispanique pour tes dissertations.' },
  { title: 'Perfectionne-toi', description: 'Utilise méthodes et vocabulaire pour tes révisions finales.' },
];

const FormationEspagnolSommairePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
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
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Sommaire</span>
          </div>
        </div>
      </nav>

      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-[820px]">
            <div className="carnet-eyebrow mb-6">Espagnol · Sommaire</div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Sommaire <em className="font-lora italic text-carnet-red">de la formation</em>.
            </h1>
            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Guide complet pour naviguer dans la formation Espagnol ECG.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <Link
            to="/formation/espagnol"
            className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 hover:border-carnet-red text-carnet-ink-soft hover:text-carnet-red font-instrument text-[13px] font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la formation
          </Link>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                  className={tilt}
                >
                  <section className="carnet-card relative p-7 sm:p-9">
                    <div className="flex items-start gap-5 mb-6">
                      <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <div className="flex-1 pt-1">
                        <h3 className="font-lora text-[24px] text-carnet-ink mb-1 leading-tight">{step.title}</h3>
                        <p className="font-instrument text-[14px] text-carnet-ink-soft">{step.subtitle}</p>
                      </div>
                    </div>
                    <div className={`grid gap-4 ${step.cards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                      {step.cards.map(({ Icon, title, description }) => (
                        <div key={title} className="carnet-paper-plain rounded-md p-5 border border-dashed border-[rgba(78,55,30,0.18)] flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-carnet-red" />
                          </div>
                          <div>
                            <h4 className="font-lora text-[18px] text-carnet-ink mb-1">{title}</h4>
                            <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.55]">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              );
            })}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="mt-16 carnet-card p-8 sm:p-10"
          >
            <div className="mb-6">
              <div className="carnet-eyebrow mb-3">Parcours recommandé</div>
              <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">
                Suis ce guide étape par étape pour optimiser ton apprentissage.
              </h2>
              <hr className="w-10 h-0.5 bg-carnet-ink border-0 mt-4" />
            </div>
            <ol className="space-y-4">
              {parcours.map((p, i) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="w-9 h-9 flex-shrink-0 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] text-carnet-red font-lora text-lg flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-instrument font-semibold text-carnet-ink">{p.title}</p>
                    <p className="font-instrument text-[14px] text-carnet-ink-soft">{p.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolSommairePage;
