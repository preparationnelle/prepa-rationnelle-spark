import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Target, TrendingUp, ArrowRight, ChevronRight, Home, GraduationCap } from 'lucide-react';

const modules = [
  {
    to: '/formation/esh/premiere-annee',
    Icon: BookOpen,
    title: 'Première année',
    description:
      "Fondamentaux de l'économie et des sciences sociales. Construis les bases solides nécessaires pour aborder la deuxième année avec sérénité.",
    bullets: ['Microéconomie', 'Sociologie', 'Concepts de base'],
    cta: 'Accéder à la première année',
  },
  {
    to: '/formation/esh/deuxieme-annee',
    Icon: TrendingUp,
    title: 'Deuxième année',
    description:
      "Approfondissement et analyse des mécanismes économiques. Maîtrise les théories et les enjeux contemporains pour les concours.",
    bullets: ['Macroéconomie', 'Histoire économique', 'Analyse critique'],
    cta: 'Accéder à la deuxième année',
  },
  {
    to: '/formation/esh/ressources',
    Icon: MessageSquare,
    title: 'Ressources',
    description:
      "Application pratique des concepts économiques et sociaux. Études de cas concrètes et problématiques d'actualité.",
    bullets: ["Cas d'entreprises", "Études de marché", "Problématiques actuelles"],
    cta: 'Accéder aux ressources',
  },
  {
    to: '/formation/esh/methodologie',
    Icon: Target,
    title: 'Méthodologie',
    description:
      'Techniques et stratégies pour réussir les épreuves ESH. Analyse de documents, raisonnement, préparation aux colles.',
    bullets: ['Analyse de documents', 'Raisonnement économique', 'Préparation aux colles'],
    cta: 'Accéder à la méthodologie',
  },
];

const FormationESHPage = () => {
  return (
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
            <span className="carnet-eyebrow text-[11px]">ESH · ECG</span>
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
            <div className="carnet-eyebrow mb-6">Prépa Rationnelle · Formation</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                ESH{' '}
                <em className="font-lora italic text-carnet-red">ECG</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Maîtrise l'<span className="carnet-hl font-lora italic">économie, sociologie et histoire</span> du monde contemporain. Quatre modules progressifs pour aborder les épreuves ESH avec méthode et confiance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <GraduationCap className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Prépa ECG</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">4 modules progressifs</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Méthodologie + colles</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton parcours
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((m, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={m.to}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.06, 0.3) }}
                  className={tilt}
                >
                  <Link
                    to={m.to}
                    className="group block h-full bg-carnet-paper-2 rounded-2xl p-7 border border-dashed border-[rgba(78,55,30,0.18)] hover:border-carnet-red/40 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_2px_rgba(78,55,30,0.04)] hover:shadow-[0_8px_24px_rgba(78,55,30,0.08)]"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <m.Icon className="h-5 w-5 text-carnet-red" />
                      </div>
                      <div className="flex-1">
                        <div className="carnet-eyebrow text-[10px] mb-1">Module {String(idx + 1).padStart(2, '0')}</div>
                        <h2 className="font-lora text-[22px] lg:text-[24px] leading-tight text-carnet-ink group-hover:text-carnet-red transition-colors">
                          {m.title}
                        </h2>
                      </div>
                    </div>

                    <p className="font-instrument text-[14px] leading-[1.65] text-carnet-ink-soft mb-5">
                      {m.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6">
                      {m.bullets.map((b) => (
                        <li
                          key={b}
                          className="font-instrument text-[11px] uppercase tracking-[0.1em] text-carnet-ink-mute px-3 py-1 rounded-full bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 font-instrument text-[13px] font-semibold text-carnet-red group-hover:gap-3 transition-all">
                      {m.cta}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper-2 p-10 sm:p-12 text-center">
            <div className="carnet-eyebrow mb-3">Besoin d'un accompagnement ?</div>
            <h2 className="font-lora text-[30px] sm:text-[38px] text-carnet-ink leading-tight mb-3">
              Discutons de tes <em className="font-lora italic text-carnet-red">objectifs ESH</em>
            </h2>
            <div className="w-12 h-[2px] bg-carnet-red mx-auto mb-5" />
            <p className="font-instrument text-[15px] lg:text-[17px] text-carnet-ink-soft max-w-xl mx-auto mb-8 leading-[1.65]">
              Premier cours offert. Diagnostic gratuit de ton niveau et conseils sur la stratégie la plus adaptée à ton concours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(193,68,58,0.25)]"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationESHPage;
