import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import type { ColleHistoryCardProps, Langue } from '@/types/colle';

const FLAG_MAP: Record<Langue, string> = {
  en: '\u{1F1EC}\u{1F1E7}',
  de: '\u{1F1E9}\u{1F1EA}',
  es: '\u{1F1EA}\u{1F1F8}',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatDuration(startStr: string, endStr: string): string {
  const start = new Date(startStr).getTime();
  const end = new Date(endStr).getTime();
  const diffMinutes = Math.round((end - start) / 60000);
  if (diffMinutes < 1) return '< 1 min';
  return `${diffMinutes} min`;
}

function getTitle(session: ColleHistoryCardProps['session']): string {
  if (session.mode === 'theme') {
    return session.theme || 'Th\u00e8me non d\u00e9fini';
  }
  if (session.article_texte) {
    const truncated = session.article_texte.slice(0, 60);
    return `Article : ${truncated}${session.article_texte.length > 60 ? '...' : ''}`;
  }
  return 'Article';
}

export const ColleHistoryCard: React.FC<ColleHistoryCardProps> = ({
  session,
  onClick,
}) => {
  const title = useMemo(() => getTitle(session), [session]);

  const noteColor = useMemo(() => {
    if (session.note_globale == null) return null;
    if (session.note_globale >= 14) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (session.note_globale >= 10) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-red-100 text-red-800 border-red-200';
  }, [session.note_globale]);

  const duration = useMemo(() => {
    if (!session.ended_at) return null;
    return formatDuration(session.created_at, session.ended_at);
  }, [session.created_at, session.ended_at]);

  return (
    <Card
      className={`
        transition-all duration-200 border
        ${onClick ? 'cursor-pointer hover:shadow-md hover:border-[#FF6A00]/30 active:scale-[0.99]' : ''}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Session de colle : ${title}`}
    >
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          {/* Contenu principal */}
          <div className="flex-1 min-w-0 space-y-2">
            {/* Premi\u00e8re ligne : drapeau + badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg" aria-label={`Langue : ${session.langue}`}>
                {FLAG_MAP[session.langue]}
              </span>
              <Badge
                variant="outline"
                className="text-xs capitalize"
              >
                {session.mode === 'article' ? 'Article' : 'Th\u00e8me'}
              </Badge>
            </div>

            {/* Titre */}
            <p className="text-sm font-medium leading-snug truncate">
              {title}
            </p>

            {/* Date + dur\u00e9e */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{formatDate(session.created_at)}</span>
              {duration && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {duration}
                </span>
              )}
            </div>
          </div>

          {/* Note globale */}
          {session.note_globale != null && noteColor && (
            <Badge
              variant="outline"
              className={`text-sm font-bold px-2.5 py-1 shrink-0 ${noteColor}`}
            >
              {session.note_globale.toFixed(1)}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColleHistoryCard;
