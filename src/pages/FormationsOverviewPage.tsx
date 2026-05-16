import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Languages,
  Globe,
  BookOpen,
  Calculator,
  FileText,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

type Formation = {
  to: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
};

const formations: Formation[] = [
  {
    to: '/formation/maths',
    Icon: Calculator,
    title: 'Maths ECG',
    description:
      'Tout le programme de maths : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes.',
    bullets: ['20 chapitres progressifs', 'Exercices type concours', 'Méthodes et astuces de prépa'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation',
    Icon: Code,
    title: 'Python ECG',
    description:
      'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices et coaching personnalisé.',
    bullets: ['54 commandes essentielles', 'Exercices type concours', '+3 à 5 points garantis'],
    cta: 'Commencer le module',
  },
  {
    to: '/formation/anglais',
    Icon: Languages,
    title: 'Anglais ECG',
    description: 'Méthodes ciblées, grammaire avancée et préparation aux épreuves.',
    bullets: ['Grammaire systématique', 'Thèmes et versions', 'Essais et synthèses'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/culture-generale',
    Icon: BookOpen,
    title: 'Culture générale',
    description: 'Méthodes et outils pour réussir les épreuves de synthèse et d’essai.',
    bullets: ['Méthodes de synthèse', 'Analyse de textes', 'Épreuves d’essai'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/geopolitique',
    Icon: Globe,
    title: 'Géopolitique',
    description:
      'Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.',
    bullets: ['Enjeux contemporains', 'Méthodes d’analyse', 'Actualité stratégique'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/esh',
    Icon: GraduationCap,
    title: 'ESH ECG',
    description: 'Économie et sciences humaines avec méthodes ciblées et études de cas pratiques.',
    bullets: ['Première et deuxième année', 'Méthodologie spécialisée', 'Études de cas concrètes'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/espagnol',
    Icon: Languages,
    title: 'Espagnol ECG',
    description: 'Méthodes ciblées, grammaire avancée et préparation intensive aux concours.',
    bullets: ['Grammaire et conjugaison', 'Thèmes et versions', 'Expression écrite et orale'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/allemand',
    Icon: Languages,
    title: 'Allemand ECG',
    description: 'Déclinaisons, grammaire complexe et techniques d’expression écrite et orale.',
    bullets: ['Déclinaisons et cas', 'Structures complexes', 'Essais méthodiques'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation/synthese-texte',
    Icon: FileText,
    title: 'Synthèse de texte ECG',
    description: 'Méthodes éprouvées, analyse de sujets et organisation annuelle complète.',
    bullets: ['Méthodologie détaillée 4h', 'Types de sujets économiques', 'Travail annuel structuré'],
    cta: 'Découvrir la formation',
  },
];

const tiltClass = (idx: number) => {
  const mod = idx % 3;
  if (mod === 1) return 'carnet-tilt-l';
  if (mod === 2) return 'carnet-tilt-r';
  return '';
};

const FormationsOverviewPage = () => {
  return (
    <>
      <SEOHead
        title="9 Formations Prépa ECG : Maths, Python, Langues, Géopolitique"
        description="Découvrez nos 9 formations spécialisées pour prépa ECG : Maths, Python, Anglais, Espagnol, Allemand, Géopolitique, ESH, Culture Générale, Synthèse de Texte. Méthodes éprouvées et exercices type concours."
        canonical="/formations"
      />

      <div className="min-h-screen font-instrument text-carnet-ink">
        {/* Breadcrumb — papier translucide */}
        <nav className="sticky top-0 z-40 bg-[rgba(251,246,234,0.85)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(251,246,234,0.7)] border-b border-dashed border-[rgba(78,55,30,0.18)]">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 py-2.5">
            <div className="flex items-center font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-ink-mute font-semibold">
              <Link to="/" className="hover:text-carnet-red transition-colors">
                Accueil
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 text-carnet-ink-mute" />
              <span className="text-carnet-ink">Toutes nos formations</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[820px] mx-auto text-center"
            >
              <span className="carnet-eyebrow inline-block mb-6">Prépa Rationnelle · Formations</span>

              <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] tracking-tight text-carnet-ink">
                Nos{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <em className="font-lora italic text-carnet-red">9 formations</em>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-carnet-red"
                    style={{ transform: 'rotate(-0.5deg)' }}
                  />
                </span>
                .
              </h1>

              <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft mt-7 max-w-[640px] mx-auto">
                Formations conçues spécifiquement pour les étudiants en prépa ECG, avec{' '}
                <span className="carnet-hl font-lora italic">méthodes éprouvées</span> et
                accompagnement personnalisé.
              </p>

              <div className="flex flex-wrap justify-center gap-2.5 mt-8">
                {[
                  { label: 'Prépa ECG', highlight: false },
                  { label: '9 disciplines', highlight: false },
                  { label: 'Cours particuliers', highlight: true },
                ].map((t) => (
                  <span
                    key={t.label}
                    className={
                      t.highlight
                        ? 'carnet-card px-3.5 py-1.5 font-instrument text-[11px] font-bold uppercase tracking-[0.14em] text-carnet-red'
                        : 'carnet-card px-3.5 py-1.5 font-instrument text-[11px] font-bold uppercase tracking-[0.14em] text-carnet-ink-soft'
                    }
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grille des formations — cards style cahier */}
        <section className="relative pb-24">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {formations.map((f, idx) => (
                <motion.div
                  key={f.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                  className={tiltClass(idx)}
                >
                  <Link
                    to={f.to}
                    className="carnet-card relative block p-8 h-full group hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                  >
                    <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />

                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center">
                        <f.Icon className="h-4 w-4 text-carnet-red" />
                      </div>
                      <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink">
                        {f.title}
                      </h3>
                    </div>

                    <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.55] mb-5">
                      {f.description}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                      {f.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft"
                        >
                          <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-1.5 font-instrument text-[12px] font-semibold uppercase tracking-[0.1em] text-carnet-red group-hover:gap-2.5 transition-all">
                      {f.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final — note manuscrite signée */}
        <section className="relative pb-28">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="carnet-card relative px-8 sm:px-14 py-14 sm:py-16 carnet-tilt-l text-center"
            >
              <div
                className="carnet-hand absolute hidden sm:block"
                style={{
                  top: 24,
                  right: 44,
                  fontSize: 26,
                  transform: 'rotate(6deg)',
                  maxWidth: 140,
                  lineHeight: 1.1,
                }}
              >
                ↘ premier cours<br />offert
              </div>

              <span className="carnet-eyebrow inline-block mb-5">Besoin d'aide pour choisir ?</span>

              <h2 className="font-lora text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight text-carnet-ink">
                Discutons de ton{' '}
                <em className="font-lora italic text-carnet-red">parcours</em>.
              </h2>

              <p className="font-instrument text-[17px] sm:text-[18px] leading-[1.6] text-carnet-ink-soft mt-6 mb-9 max-w-[620px] mx-auto">
                Diagnostic gratuit de ton niveau et conseil sur la formation la plus adaptée à tes
                objectifs.{' '}
                <span className="carnet-hl font-lora italic">Premier cours offert</span>, sans
                engagement.
              </p>

              <Link to="/contact">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto">
                  Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="mt-10 pt-7 border-t border-dashed border-[rgba(78,55,30,0.18)] flex items-center justify-center gap-3">
                <div className="font-instrument text-[11px] uppercase tracking-[0.18em] text-carnet-ink-mute">
                  Signé
                </div>
                <div
                  className="carnet-hand text-[30px] text-carnet-red leading-none"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  Dimitar
                </div>
                <div className="font-instrument text-[11px] uppercase tracking-[0.18em] text-carnet-ink-mute">
                  Fondateur
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationsOverviewPage;
