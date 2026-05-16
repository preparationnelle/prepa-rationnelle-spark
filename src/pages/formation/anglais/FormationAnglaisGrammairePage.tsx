import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Languages, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

const chapters = [
  { slug: 'temps-verbaux', title: 'Temps Verbaux', description: 'Maîtrisez tous les temps verbaux anglais essentiels pour les concours.' },
  { slug: 'conditionnels', title: 'Conditionnels', description: 'Les structures conditionnelles et leur utilisation en contexte.' },
  { slug: 'voix-passives', title: 'Voix Passives', description: 'Formation et utilisation des voix passives en anglais.' },
  { slug: 'discours-indirect', title: 'Discours Indirect', description: 'Transformation du discours direct en discours indirect.' },
  { slug: 'modaux', title: 'Modaux et Auxiliaires', description: 'Maîtrisez can, could, may, might, must, should, will, would et leurs nuances.' },
  { slug: 'prepositions', title: 'Prépositions et Particules', description: 'Emploi des prépositions et phrasal verbs essentiels.' },
  { slug: 'articles', title: 'Articles et Déterminants', description: 'Usage des articles a/an/the et déterminants some, any, much, many.' },
  { slug: 'relatives', title: 'Subordonnées Relatives', description: 'Propositions relatives avec who, which, that, whose, where, when.' },
  { slug: 'gerondif-infinitif', title: 'Gérondif et Infinitif', description: "Quand utiliser -ing ou to + infinitif selon les verbes et contextes." },
  { slug: 'comparatifs', title: 'Comparatifs et Superlatifs', description: 'Formation et usage des degrés de comparaison en anglais.' },
  { slug: 'questions', title: 'Questions et Interrogatifs', description: 'Formation des questions avec who, what, where, when, why, how.' },
  { slug: 'expressions-temps', title: 'Expressions de Temps', description: 'Since, for, ago, already, yet, still, just et autres marqueurs temporels.' },
  { slug: 'concordance', title: 'Concordance des Temps', description: 'Règles de concordance dans les subordonnées et le discours indirect.' },
  { slug: 'quantifieurs', title: 'Quantifieurs', description: 'Much, many, little, few, a lot of, plenty of et expressions de quantité.' },
  { slug: 'subjunctif', title: 'Subjunctif et Structures Subjectives', description: 'I suggest that he be, If I were you, et structures hypothétiques.' },
  { slug: 'inversions', title: 'Inversions et Emphase', description: 'Never have I seen, So beautiful was she, structures emphatiques.' },
  { slug: 'connecteurs', title: 'Connecteurs Logiques', description: 'However, therefore, nevertheless, furthermore pour structurer vos idées.' },
  { slug: 'verbes-irreguliers', title: 'Verbes Irréguliers', description: 'Liste complète des verbes irréguliers essentiels avec exercices.' },
  { slug: 'causatives', title: 'Structures Causatives', description: 'Have something done, get someone to do, make/let structures.' },
  { slug: 'nuances-lexicales', title: 'Nuances Lexicales', description: 'Confusions fréquentes : affect/effect, advice/advise, complement/compliment.' },
];

const FormationAnglaisGrammairePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/anglais/grammaire"
        title="Grammaire Anglaise ECG · Prépa Rationnelle"
        description="Formation complète de grammaire anglaise pour les concours ECG : 20 fiches structurées avec exercices, quiz et flashcards."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/anglais" className="hover:text-carnet-red transition-colors">
              Anglais
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Grammaire</span>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Anglais · Module 02</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                <em className="font-lora italic text-carnet-red">Grammaire</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Formation <span className="carnet-hl font-lora italic">complète</span> de grammaire anglaise — 20 fiches structurées pour maîtriser les épreuves des concours des Grandes Écoles de Commerce.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Languages className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">20 fiches</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Exercices · Quiz · Flashcards</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ choisis ton chapitre
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4 max-w-4xl">
            {chapters.map((chapter, idx) => {
              const base = `/formation/anglais/grammaire/${chapter.slug}`;
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={chapter.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link to={base} className="block">
                          <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-tight mb-2 group-hover:text-carnet-red transition-colors">
                            {chapter.title}
                          </h3>
                        </Link>
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                          {chapter.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center">
                          <Link
                            to={base}
                            className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Étudier
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          <Link
                            to={`${base}/exercices`}
                            className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Exercices
                          </Link>
                          <Link
                            to={`${base}/quiz`}
                            className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Quiz
                          </Link>
                          <Link
                            to={`${base}/flashcards`}
                            className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                          >
                            Flashcards
                          </Link>
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
    </div>
  );
};

export default FormationAnglaisGrammairePage;
