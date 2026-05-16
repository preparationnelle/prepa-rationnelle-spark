import React, { useMemo } from 'react';

export type BreakdownRole = 'hook' | 'context' | 'figure' | 'tension' | 'opening';

export interface BreakdownEntry {
  sentence: string;
  role: BreakdownRole;
}

interface AnnotatedParagraphProps {
  paragraph: string;
  breakdown: BreakdownEntry[];
  lang: 'en' | 'de' | 'es';
}

const ROLE_LABELS: Record<BreakdownRole, string> = {
  hook: 'Accroche',
  context: 'Contexte',
  figure: 'Chiffre',
  tension: 'Tension',
  opening: 'Ouverture',
};

const ROLE_TOOLTIP: Record<BreakdownRole, string> = {
  hook: 'Accroche — fait marquant, donnée frappante.',
  context: 'Contexte — qui, quand, où, pourquoi.',
  figure: 'Chiffre précis — montant, %, date.',
  tension: 'Tension — nuance, contre-point, originalité.',
  opening: 'Ouverture — implication politique, économique, sociale.',
};

const ROLE_CLASS: Record<BreakdownRole, string> = {
  hook: 'bg-[rgba(193,68,58,0.12)] text-carnet-ink',
  context: 'bg-[rgba(78,55,30,0.07)] text-carnet-ink',
  figure: 'bg-[rgba(255,225,120,0.45)] text-carnet-ink',
  tension: 'bg-[rgba(193,68,58,0.20)] text-carnet-ink',
  opening: 'bg-[rgba(78,55,30,0.14)] text-carnet-ink',
};

const ROLE_DOT: Record<BreakdownRole, string> = {
  hook: 'bg-[rgba(193,68,58,0.55)]',
  context: 'bg-[rgba(78,55,30,0.35)]',
  figure: 'bg-[rgba(220,170,30,0.70)]',
  tension: 'bg-[rgba(193,68,58,0.85)]',
  opening: 'bg-[rgba(78,55,30,0.60)]',
};

const ROLES_ORDER: BreakdownRole[] = ['hook', 'context', 'figure', 'tension', 'opening'];

type Segment = { text: string; role: BreakdownRole | null };

function buildSegments(paragraph: string, breakdown: BreakdownEntry[]): Segment[] {
  if (!paragraph) return [];
  if (!breakdown.length) return [{ text: paragraph, role: null }];

  const segments: Segment[] = [];
  let cursor = 0;

  const ordered = [...breakdown]
    .map((entry) => {
      const idx = paragraph.indexOf(entry.sentence);
      return { ...entry, idx };
    })
    .filter((entry) => entry.idx >= 0)
    .sort((a, b) => a.idx - b.idx);

  for (const entry of ordered) {
    if (entry.idx < cursor) continue;
    if (entry.idx > cursor) {
      segments.push({ text: paragraph.slice(cursor, entry.idx), role: null });
    }
    segments.push({ text: entry.sentence, role: entry.role });
    cursor = entry.idx + entry.sentence.length;
  }

  if (cursor < paragraph.length) {
    segments.push({ text: paragraph.slice(cursor), role: null });
  }

  return segments;
}

export const AnnotatedParagraph: React.FC<AnnotatedParagraphProps> = ({ paragraph, breakdown, lang }) => {
  const segments = useMemo(() => buildSegments(paragraph, breakdown), [paragraph, breakdown]);
  const annotated = segments.some((s) => s.role !== null);

  return (
    <div className="space-y-4">
      {annotated && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="carnet-eyebrow text-[10px]">Structure</span>
          {ROLES_ORDER.map((role) => (
            <span
              key={role}
              className="inline-flex items-center gap-1.5 font-instrument text-[11.5px] text-carnet-ink-soft"
            >
              <span className={`inline-block w-2 h-2 rounded-full ${ROLE_DOT[role]}`} />
              {ROLE_LABELS[role]}
            </span>
          ))}
        </div>
      )}

      <div className="bg-carnet-paper-2 rounded-md p-5 sm:p-7 border border-dashed border-[rgba(78,55,30,0.18)]">
        <p
          lang={lang}
          className="font-lora text-carnet-ink leading-[1.75] text-[17px] sm:text-[18px] whitespace-pre-wrap"
        >
          {segments.length === 0
            ? paragraph
            : segments.map((seg, i) => {
                if (seg.role === null) {
                  return <React.Fragment key={i}>{seg.text}</React.Fragment>;
                }
                return (
                  <span
                    key={i}
                    title={ROLE_TOOLTIP[seg.role]}
                    className={`${ROLE_CLASS[seg.role]} px-[3px] py-[1px] rounded-sm transition-colors hover:bg-opacity-80 cursor-help`}
                  >
                    {seg.text}
                  </span>
                );
              })}
        </p>
      </div>

      {!annotated && breakdown.length > 0 && (
        <p className="font-instrument text-[12px] text-carnet-ink-mute italic">
          La structure phrase-par-phrase n'a pas pu être alignée sur ce paragraphe — on affiche le texte brut.
        </p>
      )}
    </div>
  );
};
