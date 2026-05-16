import React, { useMemo } from 'react';
import { Check, AlertTriangle } from 'lucide-react';

interface QualityScoreProps {
  paragraph: string;
}

interface QualityItem {
  label: string;
  ok: boolean;
  detail: string;
}

function evaluate(paragraph: string): QualityItem[] {
  const text = (paragraph || '').trim();
  if (!text) return [];

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const sentenceCount = text.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean).length;
  const hasDigit = /\b\d/.test(text);
  const hasFigure = /[%$€£]|\b\d+\s*(billion|million|trillion|milliards?|millions?|trillions?|bn|mn|m|k)\b/i.test(text);
  const properNounMatches = text.match(/(?<=[a-z]\s)[A-Z][a-z]+/g) || [];
  const hasProperNouns = properNounMatches.length >= 2;

  return [
    {
      label: `${wordCount} mots`,
      ok: wordCount >= 100 && wordCount <= 160,
      detail: 'Cible 100 – 160 mots',
    },
    {
      label: `${sentenceCount} phrases`,
      ok: sentenceCount >= 5 && sentenceCount <= 9,
      detail: 'Cible 5 – 9 phrases',
    },
    {
      label: 'Chiffres',
      ok: hasDigit,
      detail: 'Au moins une donnée chiffrée',
    },
    {
      label: 'Montant / %',
      ok: hasFigure,
      detail: 'Montant, pourcentage ou ordre de grandeur',
    },
    {
      label: 'Noms propres',
      ok: hasProperNouns,
      detail: 'Au moins 2 noms propres (acteurs, lieux, lois)',
    },
  ];
}

export const QualityScore: React.FC<QualityScoreProps> = ({ paragraph }) => {
  const items = useMemo(() => evaluate(paragraph), [paragraph]);
  if (!items.length) return null;
  const allGreen = items.every((i) => i.ok);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="carnet-eyebrow text-[10.5px]">Calibre concours</span>
        {allGreen && (
          <span className="carnet-hand text-[20px] leading-none -rotate-3">calibre ok ✓</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.label}
            title={item.detail}
            className={`inline-flex items-center gap-1.5 font-instrument text-[12px] font-semibold px-2.5 py-1 rounded-sm border transition-colors ${
              item.ok
                ? 'bg-[rgba(34,127,80,0.08)] border-[rgba(34,127,80,0.30)] text-[#1F6648]'
                : 'bg-[rgba(255,225,120,0.45)] border-[rgba(78,55,30,0.18)] text-carnet-ink'
            }`}
          >
            {item.ok ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <AlertTriangle className="w-3.5 h-3.5" />
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
