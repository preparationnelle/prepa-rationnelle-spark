import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Users,
  Award,
  Clock,
  TrendingUp,
  BookOpen,
  Target,
  Zap,
  MessageCircle,
  Shield,
  Play,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const stats = [
  { value: '+3 pts', label: 'gagnés en moyenne aux concours', icon: TrendingUp },
  { value: '89%', label: 'intègrent une école top 5', icon: Award },
  { value: '4.9/5', label: 'note moyenne Superprof', icon: Star },
  { value: '1 200+', label: 'heures de coaching maths', icon: Clock },
];

const painPoints = [
  {
    emoji: '',
    title: 'Tu refais les exercices mais rien ne rentre vraiment',
    body: "Tu passes des heures sur les annales, tu recopies les corrigés… et le DS suivant tu ne sais plus quoi faire. Ce n'est pas un problème de travail — c'est un problème de méthode de pensée.",
  },
  {
    emoji: '',
    title: 'Tes notes plafonnent autour de 10-12',
    body: "Assez pour rester en prépa, pas assez pour intégrer. En maths ECG, 2 points d'écart sur la moyenne nationale peuvent faire sauter un palier d'école entier.",
  },
  {
    emoji: '',
    title: 'Certains chapitres te font paniquer',
    body: "Algèbre linéaire, probabilités, séries… Tu sais qu'ils tombent chaque année et tu ne te sens pas prêt. Ce blanc devant la copie coûte cher le jour J.",
  },
  {
    emoji: '',
    title: 'Tu ne finis jamais les épreuves en temps',
    body: "Les concours ECG sont chronométrés. Sans stratégie d'épreuve — ordre des questions, gestion des points rapides — tu laisses des points sur la table à chaque DS.",
  },
];

const pillars = [
  {
    icon: Target,
    title: 'Diagnostic chapitre par chapitre',
    body: 'On identifie précisément les chapitres qui te coûtent des points et ceux qui peuvent devenir tes points forts. Pas de temps perdu sur ce que tu maîtrises déjà.',
  },
  {
    icon: Zap,
    title: 'Méthode de rédaction qui rapporte',
    body: "En maths ECG, la forme compte autant que le fond. On travaille les enchaînements logiques, les mots-clés attendus et la mise en page — +2 à +4 points rien que sur la forme.",
  },
  {
    icon: MessageCircle,
    title: "Stratégie d'épreuve sur-mesure",
    body: 'Ordre des questions, gestion du temps, checkpoints minuteurs. Tu entres en épreuve avec un plan — et tu ressors avec 10-15 min d\'avance.',
  },
];

const included = [
  'Séances individuelles de 1h30 avec un prof maths ECG',
  'Diagnostic initial : tous les chapitres passés en revue',
  'Plan de travail hebdomadaire par chapitre prioritaire',
  'Corrections de DS et khôlles avec retours détaillés',
  'Accès WhatsApp illimité entre les séances (réponse < 24h)',
  "Pack \"20 ans d'annales classées par chapitre\" offert",
  'Guide méthode de rédaction maths ECG (PDF)',
  'Entraînement à la gestion du temps sur épreuves complètes',
];

const testimonials = [
  {
    initials: 'L.P.',
    name: 'Lucas P.',
    school: 'ESSEC Business School',
    year: 'Promo 2024',
    quote:
      "En maths j'étais à 9 de moyenne. Trois mois de coaching plus tard, je finissais les DS en avance avec 15. Ce qui a tout changé : la méthode de rédaction et la stratégie d'épreuve.",
    stars: 5,
  },
  {
    initials: 'C.M.',
    name: 'Clément M.',
    school: 'HEC Paris',
    year: 'Promo 2024',
    quote:
      "Je bloquais sur l'algèbre linéaire depuis le début de la 2A. En 4 séances, j'avais compris les mécanismes et je savais traiter n'importe quel sujet. HEC en 1ère liste.",
    stars: 5,
  },
  {
    initials: 'M.B.',
    name: 'Margaux B.',
    school: 'EM Lyon',
    year: 'Promo 2025',
    quote:
      "Ce que j'appréciais : pouvoir envoyer un exo à 22h avant une colle et avoir une réponse complète en moins de 30 min. Impossible dans une prépa classique.",
    stars: 5,
  },
];

const faqs = [
  {
    q: 'À quel niveau faut-il être pour commencer le coaching maths ?',
    a: 'On travaille avec des élèves de 1ère comme de 2ème année, de 8 à 16 de moyenne. Le diagnostic initial permet d\'adapter exactement le niveau et le rythme. Pas besoin d\'être déjà bon — juste prêt à travailler avec méthode.',
  },
  {
    q: 'Comment se déroule une séance de coaching maths ?',
    a: 'Chaque séance dure 1h30. On commence par un point sur les exercices faits depuis la dernière séance (15 min), puis on travaille les chapitres prioritaires — correction raisonnée, construction de méthode, entraînement sur annales. On finit par le plan de travail de la semaine.',
  },
  {
    q: 'À quelle fréquence doit-on travailler ensemble ?',
    a: 'On recommande 1 à 2 séances par semaine selon tes besoins et ton rythme. La plupart des élèves voient des résultats significatifs en 4 à 6 semaines. Entre les séances, tu as accès au WhatsApp pour toutes tes questions.',
  },
  {
    q: 'Quels chapitres couvre le coaching maths ECG ?',
    a: 'Tout le programme ECG maths approfondies et maths appliquées : algèbre linéaire, analyse (suites, séries, intégrales), probabilités, statistiques, Python. On priorise selon ton niveau et l\'échéance des concours.',
  },
  {
    q: 'Quels sont les profs qui assurent le coaching maths ?',
    a: 'Nos coachs maths sont des anciens de HEC, ESSEC, ESCP ou des professeurs de prépa certifiés. Chaque coach est sélectionné sur ses résultats en maths ECG et sa capacité à expliquer les mécanismes, pas juste les corrections.',
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: 'Non. Tu commences avec une séance découverte. Si tu veux continuer, on construit ensemble un suivi adapté à ton niveau, tes chapitres prioritaires et l\'échéance de tes concours.',
  },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-instrument text-[11px] font-semibold uppercase tracking-[0.14em] text-carnet-red mb-4">
      {children}
    </p>
  );
}

function CTAButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}) {
  const base =
    'inline-flex items-center gap-2 font-instrument font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-300 group';
  const styles = {
    primary:
      'bg-pr-orange text-white hover:bg-pr-orange-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary:
      'bg-transparent border-2 border-carnet-ink text-carnet-ink hover:bg-carnet-ink hover:text-carnet-paper',
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-[rgba(78,55,30,0.14)] last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-instrument font-semibold text-[15px] text-carnet-ink leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-carnet-red flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="font-instrument text-[14px] text-carnet-ink-soft leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function LandingPrepaMathsPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Coaching Maths Prépa ECG — Prépa Rationnelle"
        description="+3 points en maths ECG grâce à la méthode Prépa Rationnelle. Coaching individuel, diagnostic chapitre par chapitre, stratégie d'épreuve. HEC, ESSEC, ESCP."
        canonical="/landing/prepa-maths"
      />

      <div className="min-h-screen overflow-hidden">

        {/* ── 1. HERO ─────────────────────────────────── */}
        <section className="relative pt-10 pb-10 sm:pb-14 overflow-hidden">

          {/* Subtle ruled-paper lines overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(78,55,30,0.10) 31px, rgba(78,55,30,0.10) 32px)',
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 text-center">

            <motion.div {...fadeUp(0)}>
              <SectionEyebrow>Coaching Maths ECG · Individuel &amp; Sur-mesure</SectionEyebrow>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-lora text-[44px] sm:text-[62px] lg:text-[80px] leading-[0.97] tracking-[-0.022em] text-carnet-ink mx-auto max-w-[960px]"
              style={{ textWrap: 'balance' }}
            >
              Passe de{' '}
              <span className="relative inline-block">
                <span
                  className="text-[#9C8772]"
                  style={{
                    textDecoration: 'line-through',
                    textDecorationColor: '#C1443A',
                    textDecorationThickness: '3px',
                  }}
                >
                  10 en maths
                </span>
                <span
                  className="absolute font-hand italic whitespace-nowrap text-carnet-red"
                  style={{
                    top: '-0.6em',
                    left: '0.1em',
                    fontSize: '0.8em',
                    transform: 'rotate(-3deg)',
                    fontFamily: 'Caveat, cursive',
                    fontWeight: 600,
                  }}
                >
                  15 et plus
                </span>
              </span>{' '}
              avant les concours ECG
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="font-instrument text-[17px] text-carnet-ink-soft leading-relaxed mt-7 max-w-[640px] mx-auto"
            >
              Coaching maths individuel avec un ancien de grande école — diagnostic chapitre par
              chapitre, méthode de rédaction et stratégie d'épreuve jusqu'aux concours.
            </motion.p>

            <motion.div
              {...fadeUp(0.22)}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <CTAButton onClick={() => scrollTo('offre')}>
                Réserver ma séance découverte
              </CTAButton>
            </motion.div>

            {/* School logos strip */}
            <motion.div
              {...fadeUp(0.28)}
              className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            >
              <span className="font-instrument text-[11px] text-carnet-ink-mute uppercase tracking-[0.12em]">
                Élèves admis à
              </span>
              {['HEC Paris', 'ESSEC', 'ESCP', 'EM Lyon', 'EDHEC', 'Audencia'].map((school) => (
                <span
                  key={school}
                  className="font-instrument text-[13px] font-semibold text-carnet-ink-soft border border-[rgba(78,55,30,0.2)] rounded-full px-4 py-1.5"
                >
                  {school}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 2. VSL ──────────────────────────────────── */}
        <section className="pb-14">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div
              {...fadeUp(0)}
              className="relative mx-auto max-w-[820px]"
            >
              {/* Video container — 16:9 */}
              <div className="relative w-full overflow-hidden rounded-2xl border-2 border-carnet-ink shadow-2xl bg-carnet-ink"
                style={{ paddingBottom: '56.25%' }}
              >
                {/* Remplace src par l'URL YouTube/Vimeo de ta VSL */}
                <iframe
                  src="https://www.youtube.com/embed/vPlRUX1OfiQ?start=36&rel=0&modestbranding=1"
                  title="Présentation coaching maths Prépa Rationnelle"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="font-instrument text-[13px] text-carnet-ink-mute text-center mt-3">
                Regarde cette vidéo avant de réserver ta séance découverte
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 3. STATS STRIP ──────────────────────────── */}
        <section className="border-y border-[rgba(78,55,30,0.14)] bg-carnet-ink py-12">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div key={label} {...fadeUp(i * 0.07)} className="flex flex-col items-center gap-2">
                  <Icon className="h-5 w-5 text-pr-orange" />
                  <span className="font-lora text-[32px] text-carnet-paper leading-none">{value}</span>
                  <span className="font-instrument text-[12px] text-carnet-paper/60 uppercase tracking-[0.1em]">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. PROBLEM ──────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <SectionEyebrow>Le vrai problème</SectionEyebrow>
              <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-ink leading-tight max-w-[680px] mx-auto">
                Tu travailles déjà beaucoup. Le problème,{' '}
                <span className="text-carnet-red">c'est la méthode</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {painPoints.map(({ title, body }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.09)}
                  className="group bg-carnet-paper-2 border border-[rgba(78,55,30,0.12)] rounded-2xl p-7 hover:border-carnet-red/40 hover:shadow-lg transition-all duration-300"
                >

                  <h3 className="font-instrument font-semibold text-[16px] text-carnet-ink mb-2">{title}</h3>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SOLUTION ─────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-carnet-ink">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <SectionEyebrow>La solution</SectionEyebrow>
              <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-paper leading-tight max-w-[680px] mx-auto">
                La méthode Prépa Rationnelle
              </h2>
              <p className="font-instrument text-[16px] text-carnet-paper/60 mt-4 max-w-[540px] mx-auto">
                Pas un cours de plus. Une approche ciblée chapitre par chapitre qui transforme
                tes lacunes en points gagnés le jour des concours.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.1)}
                  className="border border-carnet-paper/10 rounded-2xl p-8 hover:border-pr-orange/40 hover:bg-carnet-paper/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-pr-orange/15 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-pr-orange" />
                  </div>
                  <h3 className="font-instrument font-semibold text-[17px] text-carnet-paper mb-3">{title}</h3>
                  <p className="font-instrument text-[14px] text-carnet-paper/60 leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. WHAT'S INCLUDED ──────────────────────── */}
        <section id="programme" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — text */}
              <motion.div {...fadeUp(0)}>
                <SectionEyebrow>Ce qui est inclus</SectionEyebrow>
                <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-ink leading-tight mb-6">
                  Tout ce dont tu as besoin,{' '}
                  <span className="text-carnet-red">rien de superflu</span>
                </h2>
                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-relaxed mb-8">
                  Chaque élément du programme a été sélectionné parce qu'il rapporte des points
                  en maths ECG — pas parce qu'il rassure. Du diagnostic au jour J.
                </p>
                <CTAButton onClick={() => scrollTo('offre')}>
                  Démarrer maintenant
                </CTAButton>
              </motion.div>

              {/* Right — checklist */}
              <motion.div {...fadeUp(0.1)}>
                <ul className="space-y-3.5">
                  {included.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3.5"
                    >
                      <CheckCircle className="h-5 w-5 text-carnet-red flex-shrink-0 mt-0.5" />
                      <span className="font-instrument text-[15px] text-carnet-ink-soft leading-snug">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 6. TESTIMONIALS ─────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-[rgba(78,55,30,0.1)]">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <SectionEyebrow>Témoignages</SectionEyebrow>
              <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-ink leading-tight max-w-[560px] mx-auto">
                Ce que disent nos élèves
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.map(({ initials, name, school, year, quote, stars }, i) => (
                <motion.div
                  key={name}
                  {...fadeUp(i * 0.1)}
                  className="bg-carnet-paper-2 border border-[rgba(78,55,30,0.12)] rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Quote className="h-5 w-5 text-pr-orange/60" />
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-relaxed flex-1 italic">
                    "{quote}"
                  </p>
                  <div className="flex items-center gap-0.5 mt-auto">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-pr-orange text-pr-orange" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 border-t border-[rgba(78,55,30,0.1)] pt-4">
                    <div className="w-9 h-9 rounded-full bg-carnet-ink flex items-center justify-center flex-shrink-0">
                      <span className="font-instrument text-[11px] font-semibold text-carnet-paper">
                        {initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-instrument text-[13px] font-semibold text-carnet-ink">{name}</p>
                      <p className="font-instrument text-[11px] text-carnet-ink-mute">
                        {school} · {year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. PRICING ──────────────────────────────── */}
        <section id="offre" className="py-20 sm:py-28 bg-carnet-paper-2">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <SectionEyebrow>L'offre</SectionEyebrow>
              <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-ink leading-tight max-w-[560px] mx-auto">
                Commence par une séance découverte
              </h2>
              <p className="font-instrument text-[15px] text-carnet-ink-soft mt-4 max-w-[480px] mx-auto">
                Sans engagement. Pour voir si la méthode te correspond avant de s'engager.
              </p>
            </motion.div>

            <div className="max-w-[600px] mx-auto">
              <motion.div
                {...fadeUp(0.1)}
                className="relative border-2 border-carnet-ink rounded-3xl p-8 sm:p-10 bg-carnet-paper overflow-hidden"
              >
                {/* Popular badge */}
                <div className="absolute top-5 right-5 bg-pr-orange text-white font-instrument text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                  Le plus choisi
                </div>

                <div className="mb-6">
                  <h3 className="font-lora text-[26px] text-carnet-ink mb-1">
                    Coaching individuel
                  </h3>
                  <p className="font-instrument text-[14px] text-carnet-ink-mute">
                    Séances 1-to-1 avec un coach Prépa Rationnelle
                  </p>
                </div>

                <div className="flex items-end gap-2 mb-8">
                  <span className="font-lora text-[52px] text-carnet-ink leading-none">75€</span>
                  <span className="font-instrument text-[15px] text-carnet-ink-soft mb-2">/ séance</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Séance individuelle de 1h30',
                    'Diagnostic initial offert (1re séance)',
                    'Plan de travail personnalisé',
                    'Accès WhatsApp entre les séances',
                    'Ressources et fiches méthode incluses',
                    'Sans engagement de durée',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-carnet-red flex-shrink-0" />
                      <span className="font-instrument text-[14px] text-carnet-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/33609164668?text=Bonjour%20Prépa%20Rationnelle%2C%20je%20veux%20réserver%20une%20séance%20découverte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-pr-orange text-white font-instrument font-semibold text-[16px] px-8 py-4 rounded-full hover:bg-pr-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  Réserver ma séance découverte
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Guarantee */}
                <div className="flex items-start gap-3 mt-6 pt-6 border-t border-[rgba(78,55,30,0.12)]">
                  <Shield className="h-5 w-5 text-carnet-ink-mute flex-shrink-0 mt-0.5" />
                  <p className="font-instrument text-[12px] text-carnet-ink-mute leading-snug">
                    <strong className="text-carnet-ink">Garantie satisfaction.</strong> Si tu n'es pas
                    satisfait après la 1ère séance, on te rembourse intégralement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ──────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16">
            <motion.div {...fadeUp(0)} className="text-center mb-12">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="font-lora text-[34px] sm:text-[44px] text-carnet-ink leading-tight max-w-[520px] mx-auto">
                Questions fréquentes
              </h2>
            </motion.div>

            <div className="max-w-[720px] mx-auto">
              {faqs.map((item, i) => (
                <motion.div key={item.q} {...fadeUp(i * 0.05)}>
                  <FaqItem q={item.q} a={item.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-carnet-ink">
          <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 text-center">
            <motion.div {...fadeUp(0)}>
              <SectionEyebrow>Prêt à franchir le cap ?</SectionEyebrow>
              <h2 className="font-lora text-[36px] sm:text-[52px] text-carnet-paper leading-tight max-w-[720px] mx-auto mb-6">
                En maths ECG, 2 points d'écart sur la moyenne nationale,{' '}
                <span className="text-pr-orange">c'est un palier d'école entier.</span>
              </h2>
              <p className="font-instrument text-[16px] text-carnet-paper/60 max-w-[480px] mx-auto mb-10">
                Réserve ta séance découverte maths aujourd'hui — diagnostic offert, sans engagement.
              </p>
              <a
                href="https://wa.me/33609164668?text=Bonjour%20Prépa%20Rationnelle%2C%20je%20veux%20réserver%20une%20séance%20découverte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pr-orange text-white font-instrument font-semibold text-[16px] px-8 py-4 rounded-full hover:bg-pr-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Réserver maintenant — c'est gratuit
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="font-instrument text-[12px] text-carnet-paper/40 mt-4">
                Sans engagement · Réponse sous 2h
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
