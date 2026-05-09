import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  Home,
  BookOpen,
  Calculator,
  BookMarked,
  Award,
  TrendingUp,
  Zap,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { SEOHead } from '@/components/SEOHead';

const MathsChoixOptionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserPreference = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: preference } = await (supabase as any)
            .from('user_preferences')
            .select('math_option, math_year')
            .eq('user_id', user.id)
            .single();

          if (preference?.math_option && preference?.math_year) {
            const route = `/formation/maths-${preference.math_year}-${preference.math_option}`;
            navigate(route);
          }
        }
      } catch (error) {
        console.error('Error checking user preference:', error);
      }
    };

    checkUserPreference();
  }, [navigate]);

  const allModules = [
    {
      id: 'premiere-appliquees',
      year: 'premiere',
      type: 'appliquees',
      number: 1,
      title: 'Maths Appliquées',
      subtitle: '1ère année · Voie pratique',
      description: 'Formation axée sur les applications pratiques, les méthodes de résolution et les cas concrets.',
      icon: Calculator,
      features: [
        'Applications pratiques et modélisation',
        'Méthodes de résolution pas à pas',
        'Cas concrets et business cases',
      ],
    },
    {
      id: 'premiere-approfondies',
      year: 'premiere',
      type: 'approfondies',
      number: 2,
      title: 'Maths Approfondies',
      subtitle: '1ère année · Voie théorique',
      description: 'Programme complet pour la voie approfondie avec focus sur les démonstrations et concepts théoriques.',
      icon: BookOpen,
      features: [
        'Démonstrations rigoureuses',
        'Concepts théoriques avancés',
        'Préparation intensive aux concours',
      ],
    },
    {
      id: 'deuxieme-appliquees',
      year: 'deuxieme',
      type: 'appliquees',
      number: 3,
      title: 'Maths Appliquées',
      subtitle: '2ème année · Voie avancée',
      description: 'Seconde année avec focus sur les applications industrielles et la résolution de problèmes complexes.',
      icon: TrendingUp,
      features: [
        'Applications industrielles',
        'Problèmes complexes et Big Data',
        'Outils informatiques avancés',
      ],
    },
    {
      id: 'deuxieme-approfondies',
      year: 'deuxieme',
      type: 'approfondies',
      number: 4,
      title: 'Maths Approfondies',
      subtitle: '2ème année · Voie experte',
      description: 'Formation approfondie avec concepts mathématiques complexes et préparation intensive aux Parisiennes.',
      icon: Award,
      features: [
        'Concepts abstraits avancés',
        'Préparation concours niveau expert',
        'Sujets types Parisiennes',
      ],
    },
  ];

  const additionalModules = [
    {
      title: 'Terminale → Prépa',
      description: 'Réussir la transition : méthodes de travail, organisation et points clés à anticiper.',
      icon: GraduationCap,
      route: '/formation/math/terminale-vers-prepa',
      badge: 'Transition',
    },
    {
      title: 'Première → Deuxième année',
      description: 'Transition vers l\'ECG2 : révisions d\'été, objectifs, planning et ressources clés.',
      icon: ArrowRight,
      route: '/formation/math/premiere-vers-deuxieme',
      badge: 'ECG2',
    },
    {
      title: 'Méthodologie',
      description: 'Stratégies d\'apprentissage, gestion du temps et méthodes de résolution pour les concours.',
      icon: BookMarked,
      route: '/formation/maths-methodologie',
      badge: 'Conseils',
    },
  ];

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/maths-choix"
        title="Votre parcours en Mathématiques · Prépa Rationnelle"
        description="Choisissez votre voie en mathématiques (Appliquées ou Approfondies, 1ère ou 2ème année) pour accéder aux cours, exercices et flashcards adaptés."
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
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Parcours Maths</span>
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
            <div className="carnet-eyebrow mb-6">Mathématiques · Prépa ECG</div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Votre parcours en{' '}
              <em className="font-lora italic text-carnet-red">Mathématiques</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Une <span className="carnet-hl font-lora italic">formation d'excellence</span> adaptée à votre niveau et à vos ambitions. Sélectionnez votre voie pour accéder aux ressources.
            </p>

            <div className="carnet-hand text-[24px] mt-2 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ta voie & ton année
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules principaux */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allModules.map((module, idx) => {
              const route = `/formation/maths-${module.year}-${module.type}`;
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';

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
                    onClick={() => navigate(route)}
                    className="carnet-card group cursor-pointer p-7 sm:p-8 h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
                  >
                    {/* Header avec numéro et badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                          {String(module.number).padStart(2, '0')}
                        </span>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                      </div>
                      <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] text-carnet-red">
                        {module.year === 'premiere' ? '1ère Année' : '2ème Année'}
                      </span>
                    </div>

                    {/* Icône + Titre */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <module.icon className="h-5 w-5 text-carnet-red" />
                      </div>
                      <h3 className="font-lora text-[24px] sm:text-[26px] leading-[1.2] text-carnet-ink group-hover:text-carnet-red transition-colors">
                        {module.title}
                      </h3>
                    </div>

                    <p className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-ink-mute font-semibold mb-4">
                      {module.subtitle}
                    </p>

                    <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6] mb-6">
                      {module.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6 carnet-paper-plain rounded-md p-4 border border-dashed border-[rgba(78,55,30,0.18)]">
                      {module.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                          <span className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.5]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div onClick={(e) => e.stopPropagation()}>
                      <Link to={route}>
                        <Button className="w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-11 text-[14px] border-0 transition-colors">
                          Accéder au cours
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Modules complémentaires */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mb-10"
            >
              <div className="carnet-eyebrow mb-5">Ressources & Transition</div>
              <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
                Pour aller <em className="font-lora italic text-carnet-red">plus loin</em>.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalModules.map((module, idx) => {
                const tilt = idx === 0 ? 'carnet-tilt-l' : idx === 2 ? 'carnet-tilt-r' : '';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={tilt}
                  >
                    <Link to={module.route} className="block h-full">
                      <div className="carnet-card group p-6 h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                            <module.icon className="h-4 w-4 text-carnet-red" />
                          </div>
                          <span className="carnet-eyebrow text-[10px] px-2.5 py-1 rounded-full border border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-mute">
                            {module.badge}
                          </span>
                        </div>
                        <h3 className="font-lora text-[20px] leading-[1.25] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                          {module.title}
                        </h3>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4 line-clamp-3">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-1.5 font-instrument text-[13px] font-semibold text-carnet-red opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                          Découvrir <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Générateur IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mt-16 relative bg-carnet-ink rounded-lg p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-carnet-red" />
                  <span className="carnet-eyebrow text-carnet-red">Assistant IA · Beta</span>
                </div>
                <h3 className="font-lora text-[26px] sm:text-[32px] text-carnet-paper leading-[1.15] mb-3">
                  Générateur de maths intelligent.
                </h3>
                <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.65] mb-4">
                  Pose tes questions sur n'importe quel théorème ou exercice. Démonstrations détaillées, formules LaTeX, explications pas à pas — instantanément.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-instrument text-[12px] text-[rgba(251,246,234,0.7)] border border-[rgba(251,246,234,0.2)] rounded-full px-3 py-1">
                    Programme complet 1ère/2ème année
                  </span>
                  <span className="font-instrument text-[12px] text-[rgba(251,246,234,0.7)] border border-[rgba(251,246,234,0.2)] rounded-full px-3 py-1">
                    Formules LaTeX
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link to="/generator/math">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                    <Zap className="mr-2 h-4 w-4" />
                    Essayer le générateur
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MathsChoixOptionPage;
