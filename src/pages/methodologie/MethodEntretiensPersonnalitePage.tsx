import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '@/context/ProgressContext';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { SEOHead } from '@/components/SEOHead';
import {
  Award,
  Bot,
  Users,
  Puzzle,
  HelpCircle,
  Target,
  FileText,
  MessageSquare,
  School,
  Heart,
  CheckCircle,
  AlertTriangle,
  HandHeart,
  Presentation,
  Brain,
  Newspaper,
  Eye,
  Star,
  Zap,
  ThumbsDown,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Home,
  ChevronRight,
  Sparkles,
  BookOpen,
  Lightbulb,
  Globe,
  type LucideIcon,
} from 'lucide-react';

type MethodModule = { to: string; icon: LucideIcon; label: string; description: string };

const methodModules: MethodModule[] = [
  { to: '/methodologie/storytelling',                icon: MessageSquare, label: 'Storytelling',               description: 'Structurez vos récits pour marquer le jury.' },
  { to: '/methodologie/motivation-ecole',            icon: School,        label: 'Motivation école',           description: 'Démontrez une motivation sincère et documentée.' },
  { to: '/methodologie/projet-professionnel',        icon: Target,        label: 'Projet professionnel',       description: 'Articulez un projet cohérent et ambitieux.' },
  { to: '/methodologie/personnalite',                icon: Heart,         label: 'Questions personnalité',     description: 'Révélez votre authenticité de manière stratégique.' },
  { to: '/methodologie/finir-entretien',             icon: CheckCircle,   label: 'Finir un entretien',         description: 'Laissez une dernière impression mémorable.' },
  { to: '/methodologie/erreur-entretien',            icon: AlertTriangle, label: 'Erreurs à éviter',           description: 'Connaissez les pièges classiques.' },
  { to: '/methodologie/tendre-perches',              icon: HandHeart,     label: 'Tendre des perches',         description: 'Orientez le jury vers vos points forts.' },
  { to: '/methodologie/pitch-intro',                 icon: Presentation,  label: "Pitch d'introduction",       description: 'Ouvrez fort en 60 secondes.' },
  { to: '/methodologie/gestion-stress',              icon: Brain,         label: 'Gestion du stress',          description: 'Restez maître de vous le jour J.' },
  { to: '/methodologie/questions-actualite',         icon: Newspaper,     label: "Questions d'actualité",      description: 'Construisez une culture générale activable.' },
  { to: '/methodologie/langage-non-verbal',          icon: Eye,           label: 'Langage non-verbal',         description: 'Ce que votre corps dit vraiment.' },
  { to: '/methodologie/questions-comportementales',  icon: Star,          label: 'Questions comportementales', description: 'Méthode STAR pour les questions situationnelles.' },
  { to: '/methodologie/questions-destabilisantes',   icon: Zap,           label: 'Questions déstabilisantes',  description: 'Transformez les pièges en opportunités.' },
  { to: '/methodologie/parler-defauts',              icon: ThumbsDown,    label: 'Parler de ses défauts',      description: 'Faites de vos faiblesses un atout.' },
  { to: '/methodologie/valoriser-experiences',       icon: Briefcase,     label: 'Valoriser ses expériences',  description: 'Donnez du sens à chaque ligne de votre CV.' },
  { to: '/methodologie/questions-au-jury',           icon: HelpCircle,    label: 'Questions au jury',          description: 'Marquez des points avec vos propres questions.' },
  { to: '/methodologie/banque-anecdotes',            icon: BookOpen,      label: 'Banque d\'anecdotes',         description: 'Construisez 7 histoires polyvalentes pour 90 % des questions.' },
  { to: '/methodologie/international',               icon: Globe,         label: 'Parler de l\'international',  description: 'Reliez en une réponse votre profil, votre projet et l\'école.' },
  { to: '/methodologie/se-differencier',             icon: Sparkles,      label: 'Se différencier',             description: 'Pensez comme le jury et construisez une présence mémorable.' },
  { to: '/methodologie/associations-ecole',          icon: Users,         label: 'Associations de l\'école',   description: 'Parlez des associations de manière concrète et différenciante.' },
];

type SpecialFormat = { to: string; badge: string; title: string; description: string; icon: LucideIcon };

const specialFormats: SpecialFormat[] = [
  {
    to: '/entretien-inverse-gem',
    badge: 'GEM',
    title: 'Entretien inversé GEM',
    description: "Guide complet pour réussir la partie unique de l'oral de GEM où c'est vous qui menez l'entretien.",
    icon: Users,
  },
  {
    to: '/cv-projectif',
    badge: 'SKEMA',
    title: 'CV projectif',
    description: 'Construisez un CV projectif convaincant pour SKEMA et les écoles qui demandent ce format unique.',
    icon: FileText,
  },
  {
    to: '/mise-en-situation-essec',
    badge: 'ESSEC',
    title: 'Mise en situation ESSEC',
    description: "Une question, un cas pratique ou un dilemme éthique posé sans préparation pour révéler vos valeurs, votre logique et votre capacité de décision.",
    icon: Lightbulb,
  },
];

type Tool = { to: string; icon: LucideIcon; title: string; desc: string; cta: string };

const tools: Tool[] = [
  { to: '/generator/answer', icon: Bot,         title: 'Générateur de réponses', desc: "Générez des réponses structurées pour toutes vos questions d'entretien avec l'IA.", cta: 'Utiliser le générateur' },
  { to: '/generator/emlyon', icon: HelpCircle,  title: 'Questions EM Lyon',      desc: 'Entraînez-vous avec des questions aléatoires format EM Lyon (cartes thématiques).',                cta: 'Questions aléatoires'     },
  { to: '/generator/edhec',  icon: Puzzle,      title: 'Mots EDHEC',             desc: "Générateur de mots aléatoires pour préparer votre présentation EDHEC.",                          cta: 'Mots aléatoires'          },
];

type SchoolEntry = { name: string; duration: string; feature: string; link: string; coef: string };

const schools: SchoolEntry[] = [
  { name: 'ESSEC',    duration: 'Entretien 30-45 min',  feature: 'Format approfondi avec mise en situation initiale.',           link: '/essec',    coef: 'Coef. 10' },
  { name: 'ESCP',     duration: 'Entretien 30 min',     feature: 'Structuré autour d\'un questionnaire préalable.',              link: '/escp',     coef: 'Coef. 12' },
  { name: 'EDHEC',    duration: 'Entretien 1h30',       feature: 'Tripartite : présentation, travail de groupe, entretien.',     link: '/edhec',    coef: 'Coef. 15' },
  { name: 'EM Lyon',  duration: 'Entretien 25 min',     feature: 'Format ludique avec cartes thématiques + pitch 1 minute.',     link: '/emlyon',   coef: 'Coef. 9'  },
  { name: 'SKEMA',    duration: 'Entretien 25 min',     feature: 'CV fictif à 10 ans : projection professionnelle exigée.',      link: '/skema',    coef: 'Coef. 20' },
  { name: 'Audencia', duration: 'Entretien 30 min',     feature: 'Forte dimension RSE, partie en anglais.',                      link: '/audencia', coef: 'Coef. 10' },
  { name: 'GEM',      duration: 'Entretien 30 min',     feature: "Format original avec partie d'entretien inversé.",             link: '/gem',      coef: 'Coef. 10' },
  { name: 'KEDGE',    duration: 'Entretien 30 min',     feature: "Approche \"Grow by Doing\" et questionnaire maison.",          link: '/kedge',    coef: 'Coef. 14' },
  { name: 'NEOMA',    duration: 'Entretien 30 min',     feature: 'Structuré autour de la « réussite responsable ».',             link: '/neoma',    coef: 'Coef. 12' },
];

const MethodEntretiensPersonnalitePage = () => {
  const { trackPageVisit } = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);

  return (
    <div className="carnet-paper-plain min-h-screen">
      <SEOHead
        canonical="/methodologie/entretiens-personnalite"
        title="Méthodologie des entretiens de personnalité — Prépa Rationnelle"
        description="20 techniques essentielles pour réussir vos entretiens de personnalité aux concours BCE et Ecricome. Méthode, outils IA et fiches écoles."
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
            <Link to="/methodologie" className="hover:text-carnet-red transition-colors">
              Méthodologie
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Entretiens de personnalité</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-5 flex items-center gap-2">
              <Award className="h-3.5 w-3.5" />
              <span>Oraux · Concours BCE & Ecricome</span>
            </div>

            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.08] text-carnet-ink tracking-tight mb-5">
              Entretiens de{' '}
              <em className="font-lora italic text-carnet-red">personnalité</em>.
            </h1>

            <p className="font-instrument text-[16px] lg:text-[18px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-6">
              Toutes les ressources pour réussir vos entretiens : méthodologie structurée, outils de préparation et fiches écoles détaillées.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-instrument text-[13px] text-carnet-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-carnet-red" strokeWidth={1.8} />
                20 techniques clés
              </span>
              <span className="h-3 w-px bg-carnet-rule hidden sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-carnet-ink-mute" strokeWidth={1.8} />
                9 fiches écoles
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BANQUE DE QUESTIONS — bloc mis en avant */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/methodologie/banque-questions" className="block group">
              <div className="relative rounded-md overflow-hidden bg-[#1a1209] flex">
                {/* Barre rouge verticale */}
                <div className="w-[3px] flex-shrink-0 bg-carnet-red" />

                <div className="relative flex-1 flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-0 px-7 py-9 sm:px-10">
                  {/* Texte */}
                  <div className="flex-1 min-w-0">
                    <p className="font-instrument text-[10.5px] font-semibold uppercase tracking-[0.18em] text-carnet-red/70 mb-4 whitespace-nowrap">
                      Ressource essentielle · Entretiens de personnalité
                    </p>
                    <h2 className="font-lora text-[27px] sm:text-[32px] lg:text-[38px] leading-[1.1] tracking-tight text-white mb-3">
                      100 questions —{' '}
                      <em className="text-carnet-red not-italic">100 réponses structurées.</em>
                    </h2>
                    <p className="font-instrument text-[13px] leading-[1.7] text-white/50 max-w-[480px]">
                      Jury · Structure · Ancrage · Phrases-clés — pour chacune des 100 questions classiques.
                    </p>
                  </div>

                  {/* CTA + watermark */}
                  <div className="flex-shrink-0 lg:pl-12 flex items-center gap-10">
                    {/* numéro décoratif dans la zone droite */}
                    <span className="hidden xl:block font-lora text-[88px] leading-none text-white/[0.05] tabular-nums select-none">
                      100
                    </span>
                    <span className="inline-flex items-center gap-2.5 bg-carnet-red text-white font-instrument font-semibold text-[13.5px] px-6 py-3 rounded-sm group-hover:bg-[#b03a30] transition-colors whitespace-nowrap">
                      Accéder à la banque
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01 — MÉTHODOLOGIE GÉNÉRALE */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-[820px] mb-8">
            <div className="carnet-eyebrow mb-3">Section 01 · Méthodologie</div>
            <h2 className="font-lora text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] text-carnet-ink tracking-tight">
              Méthodologie générale.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[16px] leading-[1.65] text-carnet-ink-soft mt-3 max-w-[640px]">
              Maîtrisez les 20 techniques essentielles pour briller lors de vos entretiens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {methodModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.02, 0.25) }}
                >
                  <div
                    onClick={() => navigate(mod.to)}
                    className="group cursor-pointer bg-carnet-paper-2 border border-carnet-rule/60 rounded-md p-4 sm:p-5 hover:border-carnet-red transition-colors h-full"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-lora text-[22px] text-carnet-red leading-none flex-shrink-0 pt-0.5 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <Icon className="hidden sm:block h-4 w-4 text-carnet-red mt-1.5 flex-shrink-0" strokeWidth={1.8} />

                      <div className="flex-1 min-w-0">
                        <h3 className="font-lora text-[17px] sm:text-[18px] leading-[1.3] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                          {mod.label}
                        </h3>
                        <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.55]">
                          {mod.description}
                        </p>
                      </div>

                      <ArrowRight className="hidden sm:block h-4 w-4 text-carnet-ink-mute mt-1.5 flex-shrink-0 group-hover:text-carnet-red group-hover:translate-x-0.5 transition-all" strokeWidth={1.8} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORMATS SPÉCIALISÉS */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-[820px] mb-8">
            <div className="carnet-eyebrow mb-3">Formats spécialisés</div>
            <h2 className="font-lora text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] text-carnet-ink tracking-tight">
              Pour les écoles à formats uniques.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[16px] leading-[1.65] text-carnet-ink-soft mt-3 max-w-[600px]">
              Guides détaillés pour les épreuves singulières de certaines écoles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialFormats.map((fmt, idx) => {
              const Icon = fmt.icon;
              return (
                <motion.div
                  key={fmt.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link to={fmt.to} className="block h-full group">
                    <div className="bg-carnet-paper-2 border border-carnet-rule/60 rounded-md p-6 sm:p-7 h-full hover:border-carnet-red transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-5 w-5 text-carnet-red" strokeWidth={1.8} />
                        <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.18em] text-carnet-red">
                          {fmt.badge}
                        </span>
                      </div>

                      <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                        {fmt.title}
                      </h3>
                      <div className="h-px w-8 bg-carnet-red mb-3" />
                      <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                        {fmt.description}
                      </p>

                      <div className="inline-flex items-center gap-1.5 font-instrument text-[13px] font-semibold text-carnet-red group-hover:gap-2.5 transition-all">
                        Voir le guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 02 — OUTILS IA */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-[820px] mb-8">
            <div className="carnet-eyebrow mb-3">Section 02 · Outils</div>
            <h2 className="font-lora text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] text-carnet-ink tracking-tight">
              Outils IA.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[16px] leading-[1.65] text-carnet-ink-soft mt-3 max-w-[640px]">
              Préparez-vous avec nos générateurs intelligents personnalisés pour chaque école.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link to={tool.to} className="block h-full group">
                    <div className="bg-carnet-paper-2 border border-carnet-rule/60 rounded-md p-5 sm:p-6 h-full flex flex-col hover:border-carnet-red transition-colors">
                      <Icon className="h-5 w-5 text-carnet-red mb-4" strokeWidth={1.8} />
                      <h3 className="font-lora text-[19px] leading-[1.25] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                        {tool.title}
                      </h3>
                      <div className="h-px w-8 bg-carnet-red mb-3" />
                      <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.6] flex-1 mb-4">
                        {tool.desc}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-carnet-rule/60 text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red font-instrument rounded-md h-9 bg-transparent"
                      >
                        {tool.cta}
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FICHES ÉCOLES */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-[820px] mb-8">
            <div className="carnet-eyebrow mb-3">Section 03 · Écoles</div>
            <h2 className="font-lora text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] text-carnet-ink tracking-tight">
              Fiches écoles.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[16px] leading-[1.65] text-carnet-ink-soft mt-3 max-w-[640px]">
              Découvrez les spécificités de chaque école et leurs attentes pour les entretiens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schools.map((school, idx) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
              >
                <Link to={school.link} className="block h-full group">
                  <div className="bg-carnet-paper-2 border border-carnet-rule/60 rounded-md p-5 h-full hover:border-carnet-red transition-colors">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-lora text-[22px] leading-[1.2] text-carnet-ink group-hover:text-carnet-red transition-colors">
                        {school.name}
                      </h3>
                      <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.14em] text-carnet-ink-mute">
                        {school.coef}
                      </span>
                    </div>
                    <p className="font-instrument text-[12px] text-carnet-ink-mute mb-3">{school.duration}</p>
                    <div className="h-px w-8 bg-carnet-red mb-3" />
                    <p className="font-instrument text-[13.5px] text-carnet-ink-soft leading-[1.55]">
                      {school.feature}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast + Témoignages */}
      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
        <PodcastSection />
        <TestimonialsSection />
      </div>

      {/* CTA bas de page */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-carnet-paper-2 border border-carnet-rule/60 rounded-md p-8 sm:p-10"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="carnet-eyebrow mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Accompagnement Prépa Rationnelle</span>
                </div>
                <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-ink leading-[1.2] mb-2">
                  Prêt à préparer vos oraux ?
                </h3>
                <p className="font-instrument text-[14.5px] text-carnet-ink-soft leading-[1.65]">
                  Coaching individuel, simulations et travail sur le storytelling pour structurer votre préparation aux entretiens de personnalité.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link to="/nos-offres">
                  <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-5 px-6 rounded-md border-0">
                    Découvrir nos offres
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-carnet-rule/60 bg-transparent text-carnet-ink-soft hover:bg-transparent hover:text-carnet-red hover:border-carnet-red font-instrument font-semibold py-5 px-6 rounded-md"
                  >
                    Coaching personnalisé
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Retour */}
          <div className="mt-8 flex items-center gap-3">
            <Link
              to="/methodologie"
              className="inline-flex items-center gap-1.5 font-instrument text-[13.5px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à la méthodologie
            </Link>
            <span className="text-carnet-ink-mute text-xs">·</span>
            <Link
              to="/"
              className="font-instrument text-[13.5px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              Accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodEntretiensPersonnalitePage;
