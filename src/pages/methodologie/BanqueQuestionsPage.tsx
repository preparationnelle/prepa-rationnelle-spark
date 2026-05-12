import React, { useState } from 'react';
import { ChevronDown, Target, Lightbulb, MessageSquare, HelpCircle, BookOpen } from 'lucide-react';
import { MethodologyShell, MethodIntroCard } from '@/components/methodologie/MethodologyShell';
import { motion } from 'framer-motion';
import { BANQUE_PART1 } from '@/data/banque-questions-part1';
import { BANQUE_PART2 } from '@/data/banque-questions-part2';
import { BANQUE_PART3 } from '@/data/banque-questions-part3';
import type { QA, BanqueCategory } from '@/data/banque-questions-types';

const ALL_CATEGORIES: BanqueCategory[] = [
  ...BANQUE_PART1,
  ...BANQUE_PART2,
  ...BANQUE_PART3,
];

const TOTAL = ALL_CATEGORIES.reduce((acc, cat) => acc + cat.questions.length, 0);

function QuestionRow({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(false);
  const tilt = index % 4 === 1 ? 'carnet-tilt-r' : index % 4 === 3 ? 'carnet-tilt-l' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
      className={tilt}
    >
      <div className={`carnet-card overflow-hidden transition-shadow ${open ? 'shadow-[0_12px_32px_rgba(78,55,30,0.10)]' : 'hover:shadow-[0_8px_24px_rgba(78,55,30,0.08)]'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-5 sm:p-6 text-left group"
        >
          <div className="flex items-start sm:items-center gap-5">
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="carnet-hand text-[36px] sm:text-[40px] text-carnet-red leading-none font-semibold">
                {String(qa.id).padStart(2, '0')}
              </span>
              <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <h3 className={`font-lora text-[18px] sm:text-[19px] leading-[1.25] text-carnet-ink mb-0.5 transition-colors ${open ? 'text-carnet-red' : 'group-hover:text-carnet-red'}`}>
                  {qa.question}
                </h3>
                {!open && (
                  <p className="font-instrument text-[13px] text-carnet-ink-mute leading-[1.5] line-clamp-1">
                    {qa.hint}
                  </p>
                )}
              </div>
              <ChevronDown
                className={`h-4 w-4 text-carnet-ink-mute flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-carnet-red' : ''}`}
                strokeWidth={1.8}
              />
            </div>
          </div>
        </button>

        {open && <div className="border-t border-dashed border-[rgba(78,55,30,0.18)] mx-5 sm:mx-6" />}

        {open && (
          <div className="px-5 sm:px-6 pb-6 pt-5 space-y-5 bg-carnet-page/40">
            <div className="flex gap-3">
              <Target className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="carnet-eyebrow text-[10px] mb-1.5">Ce que le jury évalue</p>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">{qa.jury}</p>
              </div>
            </div>

            <div className="h-px bg-[rgba(78,55,30,0.10)]" />

            <div className="flex gap-3">
              <BookOpen className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div className="flex-1">
                <p className="carnet-eyebrow text-[10px] mb-2">Comment structurer ta réponse</p>
                <ol className="space-y-1.5">
                  {qa.structure.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="carnet-hand text-[14px] text-carnet-red leading-5 flex-shrink-0 tabular-nums">{i + 1}.</span>
                      <span className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="h-px bg-[rgba(78,55,30,0.10)]" />

            <div className="flex gap-3">
              <Lightbulb className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="carnet-eyebrow text-[10px] mb-1.5">L'ancrage à utiliser</p>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">{qa.ancrage}</p>
              </div>
            </div>

            <div className="h-px bg-[rgba(78,55,30,0.10)]" />

            <div className="flex gap-3">
              <MessageSquare className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div className="flex-1">
                <p className="carnet-eyebrow text-[10px] mb-2">Phrases-clés prêtes à l'emploi</p>
                <div className="space-y-2">
                  {qa.phrasesCles.map((p, i) => (
                    <div key={i} className="border-l-4 border-carnet-red rounded-r bg-white px-4 py-3">
                      <p className="font-instrument text-[13.5px] text-carnet-ink leading-[1.65] italic">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const BanqueQuestionsPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Banque de questions"
    icon={HelpCircle}
    titlePrefix={`${TOTAL} questions,`}
    titleAccent={`${TOTAL} réponses structurées.`}
    intro="Toutes les questions classiques des entretiens de personnalité — déplie chaque question pour voir ce que le jury évalue vraiment, comment structurer ta réponse, l'ancrage à utiliser et des phrases-clés prêtes à l'emploi."
    cta={{
      title: "Prépare ton entretien de A à Z",
      text: "Nos coachs travaillent avec toi chaque réponse en simulation, école par école.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Comment utiliser cette banque ?">
      <p className="mb-3">
        Chaque question est décomposée en <strong>4 blocs</strong> : ce que le jury cherche vraiment,
        la structure de réponse en 2-3 étapes, l'ancrage à utiliser, et des phrases-clés
        directement réutilisables à l'oral.
      </p>
      <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-4">
        <p className="font-medium text-carnet-ink mb-1">Méthode recommandée</p>
        <p className="text-sm text-carnet-ink-soft">
          Ne mémorise pas les phrases mot pour mot. Mémorise la <strong>structure</strong> et l'
          <strong>ancrage</strong>, puis reformule à voix haute. Une réponse vivante vaut dix fois une réponse récitée.
        </p>
      </div>
    </MethodIntroCard>

    <div className="mt-10 space-y-16">
      {ALL_CATEGORIES.map((cat) => (
        <section key={cat.id}>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[40px] sm:text-[44px] text-carnet-red leading-none font-semibold">
              {cat.tag}
            </span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[24px] sm:text-[28px] text-carnet-ink leading-tight">
                {cat.label}
              </h2>
              <p className="font-instrument text-[13px] text-carnet-ink-mute mt-0.5">
                {cat.questions.length} question{cat.questions.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {cat.questions.map((qa, idx) => (
              <QuestionRow key={qa.id} qa={qa} index={idx} />
            ))}
          </div>
        </section>
      ))}
    </div>
  </MethodologyShell>
);

export default BanqueQuestionsPage;
