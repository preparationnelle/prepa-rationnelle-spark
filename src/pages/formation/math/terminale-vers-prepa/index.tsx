import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Sigma,
  TrendingUp,
  FunctionSquare,
  Spline,
  AreaChart,
  Dices,
  Grid,
  Play,
  Infinity as InfinityIcon,
  Repeat,
  Target,
  Brain,
  Home,
  ChevronRight,
  GraduationCap,
  ArrowLeft,
  Sparkles,
  Code,
  Lightbulb,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

const CHAPITRES = [
  { id: 1, slug: 'calculs', title: 'Calculs', icon: BookOpen, description: 'Maîtriser les bases du calcul algébrique et numérique pour la prépa.' },
  { id: 2, slug: 'sommes-suites-produits', title: 'Sommes, suites et produits', icon: Sigma, description: 'Manipuler les sommes (Σ) et les produits (Π) avec aisance.' },
  { id: 3, slug: 'suites', title: 'Suites', icon: TrendingUp, description: 'Étude des suites arithmétiques, géométriques et de leur convergence.' },
  { id: 4, slug: 'fonctions', title: 'Fonctions', icon: FunctionSquare, description: 'Généralités, parité, périodicité et variations des fonctions usuelles.' },
  { id: 5, slug: 'derivées', title: 'Dérivées', icon: Spline, description: 'Calcul de dérivées, tangentes et étude complète de fonctions.' },
  { id: 6, slug: 'integrale', title: 'Intégrale', icon: AreaChart, description: 'Calcul intégral, primitives, IPP et calcul d\'aires.' },
  { id: 7, slug: 'limites', title: 'Limites', icon: InfinityIcon, description: 'Limites de fonctions et de suites, formes indéterminées et asymptotes.' },
  { id: 8, slug: 'probabilites', title: 'Probabilités', icon: Dices, description: 'Probabilités conditionnelles, indépendance et variables aléatoires.' },
  { id: 9, slug: 'recurrence', title: 'Récurrence', icon: Repeat, description: 'Le raisonnement par récurrence : principes, méthodes et rédaction.' },
  { id: 10, slug: 'matrice', title: 'Matrice', icon: Grid, description: 'Calcul matriciel : opérations, inverse et puissances de matrices.' },
];

const getLinks = (slug: string) => {
  const base = '/formation/math/terminale-vers-prepa';
  let slugBase = slug;
  if (slug === 'sommes-suites-produits') slugBase = 'sommes-suites';
  if (slug === 'derivées') slugBase = 'derivees';
  if (slug === 'integrale') slugBase = 'integrales';
  if (slug === 'matrice') slugBase = 'matrices';

  return {
    cours: `${base}/${slugBase}-cours`,
    exercices: `${base}/${slugBase}-exercices`,
    quiz: `${base}/${slugBase}-quiz`,
    flashcards: `${base}/${slugBase}-flashcards`,
  };
};

const TerminaleVersPrepaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa"
        title="Module Maths — Terminale vers la prépa ECG"
        description="10 chapitres clés pour réussir la transition Terminale → prépa ECG : calculs, fonctions, dérivées, intégrales, probabilités, matrices. Cours, exercices, quiz et flashcards."
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/articles/terminale-prepa" className="hover:text-carnet-red transition-colors">
              Terminale → Prépa
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Module Maths</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Module Mathématiques · Transition lycée → prépa</div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Terminale{' '}
              <em className="font-lora italic text-carnet-red">→ Prépa</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              La transition essentielle pour réussir. <span className="carnet-hl font-lora italic">Méthodes de travail, organisation et consolidation des bases mathématiques</span> avant la rentrée en prépa ECG.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Target className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Objectif : rentrée réussie</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <GraduationCap className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">10 chapitres clés</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-6 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ commence par le 01 et avance dans l'ordre
            </div>
          </motion.div>
        </div>
      </section>

      {/* Liste des chapitres */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4">
            {CHAPITRES.map((chap, idx) => {
              const links = getLinks(chap.slug);
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';

              return (
                <motion.div
                  key={chap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
                  className={tilt}
                >
                  <div
                    onClick={() => navigate(links.cours)}
                    className="carnet-card group cursor-pointer p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      {/* Numéro façon cahier */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <span className="carnet-hand text-[40px] sm:text-[48px] text-carnet-red leading-none font-semibold">
                          {String(chap.id).padStart(2, '0')}
                        </span>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                      </div>

                      {/* Icône */}
                      <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                        <chap.icon className="h-5 w-5 text-carnet-red" />
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                        <div className="min-w-0">
                          <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                            {chap.title}
                          </h3>
                          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                            {chap.description}
                          </p>
                        </div>

                        {/* Actions */}
                        <div
                          className="flex flex-wrap gap-2 lg:flex-nowrap flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Link to={links.cours}>
                            <Button
                              size="sm"
                              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                            >
                              <BookOpen className="mr-2 h-3.5 w-3.5" />
                              Cours
                            </Button>
                          </Link>
                          <Link to={links.exercices}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                            >
                              <Play className="mr-2 h-3.5 w-3.5" />
                              Exercices
                            </Button>
                          </Link>
                          <Link to={links.flashcards}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                            >
                              <Brain className="mr-2 h-3.5 w-3.5" />
                              Flashcards
                            </Button>
                          </Link>
                          <Link to={links.quiz}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                            >
                              <Target className="mr-2 h-3.5 w-3.5" />
                              Quiz
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* En complément — modules à venir */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mb-10"
            >
              <div className="carnet-eyebrow mb-5">En complément</div>
              <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
                Pour aller <em className="font-lora italic text-carnet-red">plus loin</em>.
              </h2>
              <p className="font-instrument text-[15px] lg:text-[17px] leading-[1.6] text-carnet-ink-soft mt-4 max-w-[600px]">
                Deux modules complémentaires, en plus des 10 chapitres de maths, pour arriver vraiment armé en prépa ECG.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Python',
                  description: 'Les bases de Python à connaître avant la rentrée pour ne pas être largué dès le premier TP.',
                },
                {
                  icon: Lightbulb,
                  title: 'Méthode de travail spécifique maths prépa ECG',
                  description: 'Comment ficher, refaire, mémoriser et travailler les maths à la manière des élèves qui réussissent en prépa.',
                },
              ].map((module, idx) => {
                const tilt = idx === 0 ? 'carnet-tilt-l' : 'carnet-tilt-r';
                return (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={tilt}
                  >
                    <div className="carnet-card relative p-7 sm:p-8 h-full opacity-90">
                      <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(78,55,30,0.06)] border border-dashed border-[rgba(78,55,30,0.25)]">
                        <Lock className="h-3 w-3 text-carnet-ink-mute" />
                        <span className="carnet-eyebrow text-[10px] text-carnet-ink-mute">Bientôt</span>
                      </div>

                      <div className="flex items-center gap-3 mb-4 pr-24">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <module.icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink">
                          {module.title}
                        </h3>
                      </div>
                      <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-4" />
                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6]">
                        {module.description}
                      </p>

                      <div className="mt-6 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                        <span className="font-instrument text-[12px] uppercase tracking-[0.1em] text-carnet-ink-mute">
                          Module en préparation
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA bas de page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mt-14 relative bg-carnet-ink rounded-lg p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-carnet-red" />
                  <span className="carnet-eyebrow text-carnet-red">Offre dédiée bientôt disponible</span>
                </div>
                <h3 className="font-lora text-[26px] sm:text-[32px] text-carnet-paper leading-[1.15] mb-3">
                  Tu veux aller plus loin que les fiches ?
                </h3>
                <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.65]">
                  Un programme estival "Du bac à la prépa" avec coaching méthode, cours collectifs en visio et suivi individuel arrive bientôt. Inscris-toi pour être prévenu·e du lancement.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link to="/contact">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    Être prévenu
                  </Button>
                </Link>
                <Link to="/articles/terminale-prepa">
                  <Button
                    variant="outline"
                    className="border-[rgba(251,246,234,0.3)] bg-transparent text-carnet-paper hover:bg-[rgba(251,246,234,0.08)] hover:text-carnet-paper hover:border-[rgba(251,246,234,0.6)] font-instrument font-semibold py-6 px-8 rounded-full"
                  >
                    Voir la rubrique
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Retour */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              to="/articles/terminale-prepa"
              className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à la rubrique Terminale → Prépa
            </Link>
            <span className="text-carnet-ink-mute">·</span>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              Accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerminaleVersPrepaPage;
