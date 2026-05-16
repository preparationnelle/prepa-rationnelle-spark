import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ThemeEntry } from './themes';

interface ThemeGalleryProps {
  themes: ThemeEntry[];
  onPick: (theme: ThemeEntry, angle: ThemeEntry['angles'][number]) => void;
  loading?: boolean;
}

const TILT_PATTERN = [
  'carnet-tilt-l',
  'carnet-tilt-r',
  'carnet-tilt-l-strong',
  'carnet-tilt-r-strong',
];

export const ThemeGallery: React.FC<ThemeGalleryProps> = ({ themes, onPick, loading = false }) => {
  const [selected, setSelected] = useState<ThemeEntry | null>(null);

  if (!selected) {
    return (
      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <div>
            <div className="carnet-eyebrow text-[11px] mb-1">14 banques thématiques</div>
            <h3 className="font-lora text-[20px] sm:text-[22px] text-carnet-ink leading-tight">
              Pick a <em className="font-lora italic text-carnet-red">theme</em>, et on déroule un angle.
            </h3>
          </div>
          <p className="font-instrument text-[12.5px] text-carnet-ink-mute max-w-[280px]">
            Anglo-saxon uniquement. Chaque thème ouvre 4 angles pré-écrits, anchored & memorisable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {themes.map((theme, index) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => setSelected(theme)}
              className={`group text-left bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4 transition-all hover:border-carnet-red hover:bg-[rgba(193,68,58,0.04)] hover:shadow-[0_4px_14px_rgba(78,55,30,0.08)] ${TILT_PATTERN[index % TILT_PATTERN.length]} hover:rotate-0`}
            >
              <div className="text-[28px] leading-none mb-3">{theme.emoji}</div>
              <div className="font-lora text-[15.5px] text-carnet-ink leading-tight mb-1.5 group-hover:text-carnet-red transition-colors">
                {theme.title}
              </div>
              <p className="font-instrument text-[12px] text-carnet-ink-mute leading-snug line-clamp-2">
                {theme.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="inline-flex items-center gap-1.5 font-instrument text-[13px] text-carnet-ink-mute hover:text-carnet-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Tous les thèmes
        </button>
        <div className="carnet-eyebrow text-[10.5px]">Angles d'attaque · {selected.angles.length}</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-[32px] leading-none">{selected.emoji}</div>
        <div>
          <h3 className="font-lora text-[24px] sm:text-[26px] text-carnet-ink leading-none">
            {selected.title}
          </h3>
          <p className="font-instrument text-[13px] text-carnet-ink-soft mt-1">
            {selected.description}
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {selected.angles.map((angle, idx) => (
          <div
            key={angle.title}
            className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-colors hover:border-carnet-red hover:bg-[rgba(193,68,58,0.04)]"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(193,68,58,0.1)] text-carnet-red font-instrument font-bold text-[10.5px]">
                  {idx + 1}
                </span>
                <div className="font-lora text-[16.5px] text-carnet-ink leading-tight">
                  {angle.title}
                </div>
              </div>
              <p className="font-instrument text-[12px] text-carnet-ink-mute leading-snug">
                {angle.keywords}
              </p>
            </div>
            <Button
              type="button"
              onClick={() => onPick(selected, angle)}
              disabled={loading}
              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[13px] h-10 px-4 rounded-md border-0 transition-colors disabled:opacity-50 flex-shrink-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                  Génération…
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Utiliser cet angle
                </>
              )}
            </Button>
          </div>
        ))}
      </div>

      <hr className="carnet-divider" />

      <div className="bg-[rgba(193,68,58,0.04)] border border-[rgba(193,68,58,0.15)] rounded-md p-4">
        <div className="carnet-eyebrow text-[10.5px] mb-2">Sujets de concours mobilisables</div>
        <ul className="space-y-1.5">
          {selected.concoursTopics.map((topic) => (
            <li
              key={topic}
              className="font-instrument text-[13px] text-carnet-ink-soft leading-snug flex items-start gap-2"
            >
              <span className="text-carnet-red mt-1.5 flex-shrink-0">›</span>
              <span className="italic">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
