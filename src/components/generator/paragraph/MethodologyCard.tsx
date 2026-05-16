import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const STEPS = [
  {
    n: 1,
    title: 'Accroche',
    detail: 'Fait marquant · événement · donnée frappante en une phrase.',
  },
  {
    n: 2,
    title: 'Contexte',
    detail: 'Qui · quand · où · pourquoi. On situe l\'élève.',
  },
  {
    n: 3,
    title: 'Chiffre précis',
    detail: 'Montant · pourcentage · date — la donnée qu\'on retient.',
  },
  {
    n: 4,
    title: 'Tension',
    detail: 'Nuance · contre-point · ce qui rend l\'exemple original.',
  },
  {
    n: 5,
    title: 'Ouverture',
    detail: 'Implication politique · économique · sociale · géopolitique.',
  },
];

const RULES = [
  '100 – 160 mots',
  'Ancrage géographique',
  'Noms propres + chiffres',
  'Aucune citation inventée',
  'Exemples < 5 ans',
];

export const MethodologyCard: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="carnet-card relative overflow-hidden">
      <div className="px-5 sm:px-7 pt-5 pb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <BookOpen className="w-5 h-5 text-carnet-red" />
          </div>
          <div>
            <div className="carnet-eyebrow mb-1">Méthode · paragraphe ECG</div>
            <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-tight">
              La recette du <em className="font-lora italic text-carnet-red">paragraphe parfait</em>.
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 text-[12px] font-instrument font-semibold uppercase tracking-[0.12em] text-carnet-ink-mute hover:text-carnet-red transition-colors flex-shrink-0 mt-1.5"
        >
          {open ? 'Masquer' : 'Afficher'}
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {open && (
        <div className="px-5 sm:px-7 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-3 sm:p-4 flex flex-col gap-2 transition-colors hover:border-carnet-red hover:bg-[rgba(193,68,58,0.04)]"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-carnet-red text-carnet-paper font-instrument font-bold text-[12px]">
                    {step.n}
                  </span>
                  <span className="font-lora text-[15px] text-carnet-ink leading-none">
                    {step.title}
                  </span>
                </div>
                <p className="font-instrument text-[12.5px] text-carnet-ink-soft leading-snug">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <hr className="carnet-divider my-5" />

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="carnet-eyebrow text-[10.5px]">Règles d'or</span>
            {RULES.map((rule) => (
              <span
                key={rule}
                className="inline-flex items-center font-instrument text-[12px] font-semibold text-carnet-ink bg-[rgba(255,225,120,0.45)] px-2.5 py-1 rounded-sm border border-[rgba(78,55,30,0.18)]"
              >
                {rule}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
