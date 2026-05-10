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
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/context/AuthContext';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { pythonFormationStructure } from '@/data/python-formation-structure';
import { toast } from 'sonner';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

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
      <PRFormationLayout
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Formations', to: '/formations' },
          { label: 'Python' },
        ]}
        eyebrow="Prépa Rationnelle · Formation"
        title="Python"
        titleAccent="ECG"
        subtitle="Maîtrise Python pour les concours. 4 modules progressifs avec exercices pratiques et coaching personnalisé."
        tags={[
          { label: 'Prépa ECG' },
          { label: '4 modules progressifs' },
          { label: 'Cours + exercices + quiz', highlight: true },
        ]}
      >
        {currentUser && (
          <div className="max-w-md mx-auto mb-12 bg-white border border-pr-gray-light rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                Progression globale
              </span>
              <span className="font-dm-serif text-2xl text-pr-orange">{globalProgress}%</span>
            </div>
            <Progress
              value={globalProgress}
              className="h-2 bg-pr-gray-light/40 [&>div]:bg-pr-orange rounded-full"
            />
          </div>
        )}

        <section className="space-y-4 mb-20">
          {pythonFormationStructure.map((module, idx) => {
            const Icon = MODULE_ICONS[idx] || Code;
            const moduleProgress = getModuleProgress(module.id);
            const courseLink = module.chapters.find((c) => c.type === 'cours')?.link || '#';
            const exercisesLink = module.chapters.find((c) => c.type === 'exercice')?.link || '#';
            const flashcardsLink = module.chapters.find((c) => c.type === 'flashcards')?.link;

            return (
              <div
                key={module.id}
                onClick={(e) => {
                  requireAuth(e, courseLink);
                  if (currentUser) navigate(courseLink);
                }}
                className="group cursor-pointer relative bg-white border border-pr-gray-light rounded-2xl p-6 sm:p-7 hover:border-pr-orange hover:shadow-[0_8px_30px_rgba(244,132,95,0.12)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start sm:items-center gap-5">
                  <div className="flex-shrink-0">
                    <span className="font-dm-serif text-4xl text-pr-orange leading-none">
                      {String(module.id).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pr-orange-pale items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-pr-orange-dark" />
                  </div>

                  <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1.5">
                        <h3 className="font-dm-serif text-xl sm:text-2xl text-pr-black leading-tight group-hover:text-pr-orange-dark transition-colors">
                          {module.title}
                        </h3>
                        {currentUser && (
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                              moduleProgress === 100
                                ? 'text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/60'
                                : 'text-pr-gray-mid bg-pr-gray-bg border border-pr-gray-light'
                            }`}
                          >
                            {moduleProgress}%
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-pr-gray-dark/80 leading-relaxed line-clamp-2">
                        {module.description}
                      </p>
                      {currentUser && (
                        <div className="mt-3 max-w-xs">
                          <Progress
                            value={moduleProgress}
                            className="h-1 bg-pr-gray-light/40 [&>div]:bg-pr-orange rounded-full"
                          />
                        </div>
                      )}
                    </div>

                    <div
                      className="flex flex-wrap gap-2 lg:flex-nowrap flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        to={courseLink}
                        onClick={(e) => requireAuth(e, courseLink)}
                        className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white text-xs font-semibold transition-colors"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Cours
                      </Link>
                      <Link
                        to={exercisesLink}
                        onClick={(e) => requireAuth(e, exercisesLink)}
                        className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange hover:text-pr-orange-dark text-pr-gray-dark text-xs font-semibold transition-colors"
                      >
                        <Play className="h-3.5 w-3.5" />
                        Exercices
                      </Link>
                      <Link
                        to={`${exercisesLink}?quiz=true`}
                        onClick={(e) => requireAuth(e, `${exercisesLink}?quiz=true`)}
                        className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange hover:text-pr-orange-dark text-pr-gray-dark text-xs font-semibold transition-colors"
                      >
                        <Target className="h-3.5 w-3.5" />
                        Quiz
                      </Link>
                      {flashcardsLink && (
                        <Link
                          to={flashcardsLink}
                          onClick={(e) => requireAuth(e, flashcardsLink)}
                          className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange hover:text-pr-orange-dark text-pr-gray-dark text-xs font-semibold transition-colors"
                        >
                          <Brain className="h-3.5 w-3.5" />
                          Flashcards
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-3">
              Ressources
            </p>
            <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
              Outils & <span className="text-pr-orange">ressources</span>
            </h2>
            <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-5" />
            <p className="text-base text-pr-gray-dark/80 max-w-2xl mx-auto">
              Les indispensables pour ancrer Python dans la durée et préparer chaque épreuve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Brain,
                title: 'Flashcards',
                description: '54 commandes essentielles à mémoriser pour gagner en automatismes.',
                cta: 'S’entraîner',
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
                cta: 'Lire l’article',
                to: '/python-article',
              },
            ].map(({ Icon, title, description, cta, to }) => (
              <Link
                key={title}
                to={to}
                className="group relative bg-white border border-pr-gray-light rounded-2xl p-7 hover:border-pr-orange hover:shadow-[0_8px_30px_rgba(244,132,95,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-pr-orange-pale flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-pr-orange-dark" />
                </div>
                <h3 className="font-dm-serif text-2xl text-pr-black mb-2">{title}</h3>
                <p className="text-sm text-pr-gray-dark/80 leading-relaxed mb-5">{description}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-pr-black text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(244,132,95,0.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-pr-orange" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange">
                  Coaching personnalisé
                </span>
              </div>
              <h3 className="font-dm-serif text-2xl sm:text-3xl mb-3">
                Tu veux aller plus loin que les fiches ?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Un suivi individuel avec un prof Prépa Rationnelle pour débloquer les TP, sécuriser
                l’épreuve Python et viser les meilleures écoles. Discute de ton profil avec nous.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-colors"
              >
                Prendre contact
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/formations"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 bg-transparent hover:bg-white/10 text-white font-semibold text-sm transition-colors"
              >
                Toutes les formations
              </Link>
            </div>
          </div>
        </section>
      </PRFormationLayout>
    </>
  );
};

export default FormationPage;
