import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Code,
  Calculator,
  TrendingUp,
  BarChart3,
  BookOpen,
  Brain,
  Play,
  Target,
  Sparkles,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Home,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
    <>
      <SEOHead
        canonical="/formation"
        title="Formation Python — Prépa ECG"
        description="4 modules progressifs pour maîtriser Python en prépa ECG : fondamentaux, NumPy, analyse numérique et probabilités. Cours, exercices, quiz et flashcards."
      />

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
              <span className="carnet-eyebrow text-[11px]">Python ECG</span>
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
              <div className="carnet-eyebrow mb-6">Python · Prépa ECG</div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-carnet-red" />
                </div>
                <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                  Python{' '}
                  <em className="font-lora italic text-carnet-red">ECG</em>.
                </h1>
              </div>

              <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
                Maîtrise Python pour les concours.{' '}
                <span className="carnet-hl font-lora italic">4 modules progressifs</span> avec
                exercices pratiques et coaching personnalisé.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                  <GraduationCap className="h-4 w-4 text-carnet-red" />
                  <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Prépa ECG</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                  <span className="carnet-eyebrow text-[11px]">Cours + exercices + quiz</span>
                </div>
              </div>

              <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
                ↓ 4 modules progressifs
              </div>
            </motion.div>
          </div>
        </section>

        {/* Progression globale */}
        {currentUser && (
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 mb-8">
            <div className="carnet-card p-5 max-w-md">
              <div className="flex items-center justify-between mb-3">
                <span className="carnet-eyebrow text-[11px]">Progression globale</span>
                <span className="carnet-hand text-[26px] text-carnet-red leading-none">{globalProgress}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(78,55,30,0.08)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-carnet-red transition-all"
                  style={{ width: `${globalProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Modules */}
        <section className="pb-12">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <div className="space-y-4 mb-20">
              {pythonFormationStructure.map((module, idx) => {
                const Icon = MODULE_ICONS[idx] || Code;
                const moduleProgress = getModuleProgress(module.id);
                const courseLink = module.chapters.find((c) => c.type === 'cours')?.link || '#';
                const exercisesLink = module.chapters.find((c) => c.type === 'exercice')?.link || '#';
                const flashcardsLink = module.chapters.find((c) => c.type === 'flashcards')?.link;

                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                  >
                    <div
                      onClick={(e) => {
                        requireAuth(e, courseLink);
                        if (currentUser) navigate(courseLink);
                      }}
                      className="carnet-card group cursor-pointer p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                    >
                      <div className="flex items-start sm:items-center gap-5">
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <span className="carnet-hand text-[36px] sm:text-[40px] text-carnet-red leading-none font-semibold">
                            {String(module.id).padStart(2, '0')}
                          </span>
                          <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
                        </div>

                        <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-carnet-red" />
                        </div>

                        <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                          <div className="min-w-0">
                            <div className="flex items-center gap-3 flex-wrap mb-1">
                              <h3 className="font-lora text-[19px] sm:text-[20px] leading-[1.25] text-carnet-ink group-hover:text-carnet-red transition-colors">
                                {module.title}
                              </h3>
                              {currentUser && (
                                <span className="font-instrument text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] text-carnet-ink whitespace-nowrap">
                                  {moduleProgress}%
                                </span>
                              )}
                            </div>
                            <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                              {module.description}
                            </p>
                            {currentUser && (
                              <div className="mt-2 max-w-xs h-1 rounded-full bg-[rgba(78,55,30,0.08)] overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-carnet-red transition-all"
                                  style={{ width: `${moduleProgress}%` }}
                                />
                              </div>
                            )}
                          </div>

                          <div
                            className="flex flex-wrap gap-2 flex-shrink-0"
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
                            <Link to={exercisesLink} onClick={(e) => requireAuth(e, exercisesLink)}>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                              >
                                <Play className="mr-2 h-3.5 w-3.5" />
                                Exercices
                              </Button>
                            </Link>
                            <Link to={`${exercisesLink}?quiz=true`} onClick={(e) => requireAuth(e, `${exercisesLink}?quiz=true`)}>
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
                              <Link to={flashcardsLink} onClick={(e) => requireAuth(e, flashcardsLink)}>
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
          </div>
        </section>

        {/* Ressources */}
        <section className="pb-20">
          <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">+</span>
              <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
              <div>
                <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                  Outils &amp; ressources
                </h2>
                <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                  Les indispensables pour ancrer Python dans la durée et préparer chaque épreuve.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  Icon: Brain,
                  title: 'Flashcards',
                  description: '54 commandes essentielles à mémoriser pour gagner en automatismes.',
                  cta: "S'entraîner",
                  to: '/python-flashcards',
                },
                {
                  Icon: BookOpen,
                  title: 'Référence',
                  description: 'La documentation complète des commandes Python autorisées au programme.',
                  cta: 'Consulter',
                  to: '/python-reference',
                },
                {
                  Icon: GraduationCap,
                  title: 'Enjeux',
                  description: 'Pourquoi Python compte aux concours : stratégie et points à viser.',
                  cta: "Lire l'article",
                  to: '/python-article',
                },
              ].map(({ Icon, title, description, cta, to }) => (
                <Link
                  key={title}
                  to={to}
                  className="carnet-card group p-6 flex flex-col hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-carnet-red" />
                  </div>
                  <h3 className="font-lora text-[20px] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                    {title}
                  </h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] mb-5">
                    {description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 font-instrument text-xs font-semibold uppercase tracking-[0.12em] text-carnet-red">
                    {cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching CTA */}
        <section className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 pb-24">
          <div className="rounded-2xl bg-carnet-ink text-carnet-paper p-8 sm:p-12 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-carnet-red" />
                  <span className="font-instrument text-[11px] font-semibold uppercase tracking-[0.18em] text-carnet-red">
                    Coaching personnalisé
                  </span>
                </div>
                <h3 className="font-lora text-[24px] sm:text-[30px] mb-3">
                  Tu veux aller plus loin que les fiches ?
                </h3>
                <p className="font-instrument text-sm text-carnet-paper/80 leading-relaxed">
                  Un suivi individuel avec un prof Prépa Rationnelle pour débloquer les TP, sécuriser
                  l'épreuve Python et viser les meilleures écoles. Discute de ton profil avec nous.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:opacity-90 text-carnet-paper font-instrument font-semibold text-sm transition-opacity"
                >
                  Prendre contact
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/formations"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-carnet-paper/30 bg-transparent hover:bg-carnet-paper/10 text-carnet-paper font-instrument font-semibold text-sm transition-colors"
                >
                  Toutes les formations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationPage;
