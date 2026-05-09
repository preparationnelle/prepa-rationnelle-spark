import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Calculator,
  TrendingUp,
  BarChart3,
  Home,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Brain,
  Play,
  Target,
  Sparkles,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/context/AuthContext';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { pythonFormationStructure } from '@/data/python-formation-structure';
import { toast } from 'sonner';

const MODULE_ICONS = [Code, Calculator, TrendingUp, BarChart3];

const FormationPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { globalProgress, getModuleProgress } = usePythonProgress();

  const requireAuth = (e: React.MouseEvent, target?: string) => {
    if (!currentUser) {
      e.preventDefault();
      toast.error('Vous devez être connecté pour accéder à la formation');
      navigate(`/login?next=${encodeURIComponent(target ?? '/formation')}`);
    }
  };

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation"
        title="Formation Python — Prépa ECG"
        description="4 modules progressifs pour maîtriser Python en prépa ECG : fondamentaux, NumPy, analyse numérique et probabilités. Cours, exercices, quiz et flashcards."
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
            <span className="carnet-eyebrow text-[11px]">Formation Python</span>
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
            <div className="carnet-eyebrow mb-6">Formation · Prépa ECG</div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Formation{' '}
              <em className="font-lora italic text-carnet-red">Python</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Maîtrisez Python pour les concours.{' '}
              <span className="carnet-hl font-lora italic">
                4 modules progressifs avec exercices pratiques
              </span>{' '}
              et coaching personnalisé.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Target className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">
                  Objectif : épreuve Python ECG
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <GraduationCap className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">
                  4 modules progressifs
                </span>
              </div>
            </div>

            {currentUser && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 max-w-md carnet-card p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="carnet-eyebrow text-[11px]">Progression globale</span>
                  <span className="font-lora italic text-[18px] text-carnet-red">
                    {globalProgress}%
                  </span>
                </div>
                <Progress
                  value={globalProgress}
                  className="h-2 bg-[rgba(78,55,30,0.08)] [&>div]:bg-carnet-red rounded-full"
                />
              </motion.div>
            )}

            <div
              className="carnet-hand text-[24px] mt-6 hidden md:block"
              style={{ transform: 'rotate(-2deg)' }}
            >
              ↓ commence par le 00 et avance dans l'ordre
            </div>
          </motion.div>
        </div>
      </section>

      {/* Liste des modules */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4">
            {pythonFormationStructure.map((module, idx) => {
              const Icon = MODULE_ICONS[idx] || Code;
              const moduleProgress = getModuleProgress(module.id);
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';

              const courseLink = module.chapters.find((c) => c.type === 'cours')?.link || '#';
              const exercisesLink = module.chapters.find((c) => c.type === 'exercice')?.link || '#';
              const flashcardsLink = module.chapters.find((c) => c.type === 'flashcards')?.link;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                  className={tilt}
                >
                  <div
                    onClick={(e) => {
                      requireAuth(e, courseLink);
                      if (currentUser) navigate(courseLink);
                    }}
                    className="carnet-card group cursor-pointer p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      {/* Numéro façon cahier */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <span className="carnet-hand text-[40px] sm:text-[48px] text-carnet-red leading-none font-semibold">
                          {String(module.id).padStart(2, '0')}
                        </span>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                      </div>

                      {/* Icône */}
                      <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-carnet-red" />
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                        <div className="min-w-0">
                          <div className="flex items-center gap-3 flex-wrap mb-1.5">
                            <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink group-hover:text-carnet-red transition-colors">
                              {module.title}
                            </h3>
                            {currentUser && (
                              <span
                                className={`font-instrument text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                                  moduleProgress === 100
                                    ? 'text-carnet-red bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)]'
                                    : 'text-carnet-ink-mute bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]'
                                }`}
                              >
                                {moduleProgress}%
                              </span>
                            )}
                          </div>
                          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                            {module.description}
                          </p>
                          {currentUser && (
                            <div className="mt-3 max-w-xs">
                              <Progress
                                value={moduleProgress}
                                className="h-1 bg-[rgba(78,55,30,0.08)] [&>div]:bg-carnet-red rounded-full"
                              />
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div
                          className="flex flex-wrap gap-2 lg:flex-nowrap flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Link to={courseLink} onClick={(e) => requireAuth(e, courseLink)}>
                            <Button
                              size="sm"
                              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                            >
                              <BookOpen className="mr-2 h-3.5 w-3.5" />
                              Cours
                            </Button>
                          </Link>
                          <Link
                            to={exercisesLink}
                            onClick={(e) => requireAuth(e, exercisesLink)}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                            >
                              <Play className="mr-2 h-3.5 w-3.5" />
                              Exercices
                            </Button>
                          </Link>
                          <Link
                            to={`${exercisesLink}?quiz=true`}
                            onClick={(e) => requireAuth(e, `${exercisesLink}?quiz=true`)}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                            >
                              <Target className="mr-2 h-3.5 w-3.5" />
                              Quiz
                            </Button>
                          </Link>
                          {flashcardsLink && (
                            <Link
                              to={flashcardsLink}
                              onClick={(e) => requireAuth(e, flashcardsLink)}
                            >
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                              >
                                <Brain className="mr-2 h-3.5 w-3.5" />
                                Flashcards
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Outils & ressources */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mb-10"
            >
              <div className="carnet-eyebrow mb-5">Ressources</div>
              <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
                Outils &amp; <em className="font-lora italic text-carnet-red">ressources</em>.
              </h2>
              <p className="font-instrument text-[15px] lg:text-[17px] leading-[1.6] text-carnet-ink-soft mt-4 max-w-[600px]">
                Les indispensables pour ancrer Python dans la durée et préparer chaque épreuve.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Flashcards',
                  description: '54 commandes essentielles à mémoriser pour gagner en automatismes.',
                  cta: "S'entraîner",
                  to: '/python-flashcards',
                  tilt: 'carnet-tilt-l',
                },
                {
                  icon: BookOpen,
                  title: 'Référence',
                  description: 'La documentation complète des commandes Python autorisées au programme.',
                  cta: 'Consulter',
                  to: '/python-reference',
                  tilt: '',
                },
                {
                  icon: TrendingUp,
                  title: 'Enjeux',
                  description: "Pourquoi Python compte aux concours : stratégie et points à viser.",
                  cta: "Lire l'article",
                  to: '/python-article',
                  tilt: 'carnet-tilt-r',
                },
              ].map((tool, idx) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={tool.tilt}
                >
                  <Link to={tool.to} className="block h-full">
                    <div className="carnet-card group h-full p-7 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <tool.icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink group-hover:text-carnet-red transition-colors">
                          {tool.title}
                        </h3>
                      </div>
                      <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-4" />
                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-6">
                        {tool.description}
                      </p>
                      <span className="font-instrument text-[13px] font-semibold text-carnet-red inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        {tool.cta}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
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
                  <span className="carnet-eyebrow text-carnet-red">Coaching personnalisé</span>
                </div>
                <h3 className="font-lora text-[26px] sm:text-[32px] text-carnet-paper leading-[1.15] mb-3">
                  Tu veux aller plus loin que les fiches ?
                </h3>
                <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.65]">
                  Un suivi individuel avec un prof Prépa Rationnelle pour débloquer les TP, sécuriser
                  l'épreuve Python et viser les meilleures écoles. Discute de ton profil avec nous.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link to="/contact">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    Prendre contact
                  </Button>
                </Link>
                <Link to="/formation">
                  <Button
                    variant="outline"
                    className="border-[rgba(251,246,234,0.3)] bg-transparent text-carnet-paper hover:bg-[rgba(251,246,234,0.08)] hover:text-carnet-paper hover:border-[rgba(251,246,234,0.6)] font-instrument font-semibold py-6 px-8 rounded-full"
                  >
                    Toutes les formations
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Retour */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationPage;
