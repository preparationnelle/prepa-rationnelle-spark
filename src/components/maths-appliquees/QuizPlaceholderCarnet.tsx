import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Pencil, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizPlaceholderCarnetProps {
  chapterNumber: number;
  chapterTitle: string;
  shortTitle: string;
  cursSlug: string;
  exercicesSlug: string;
}

export const QuizPlaceholderCarnet: React.FC<QuizPlaceholderCarnetProps> = ({
  chapterNumber,
  chapterTitle,
  shortTitle,
  cursSlug,
  exercicesSlug,
}) => {
  return (
    <div className="min-h-screen carnet-paper carnet-cours-skin">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[rgba(251,246,234,0.92)] backdrop-blur border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center font-instrument text-[11px] uppercase tracking-[0.16em] font-semibold text-carnet-ink-soft">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1.5" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">Formations</Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1.5" />
            <Link to="/formation/maths-choix" className="hover:text-carnet-red transition-colors">Choix Maths</Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1.5" />
            <Link to="/formation/maths-appliquees" className="hover:text-carnet-red transition-colors">Maths Appliquées</Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1.5" />
            <span className="text-carnet-red">Chapitre {chapterNumber} — {shortTitle}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* En-tête */}
        <div className="mb-10">
          <div className="carnet-eyebrow mb-4">Quiz · Chapitre {chapterNumber}</div>
          <h1 className="font-lora text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.022em] text-carnet-ink">
            {chapterTitle}
          </h1>
          <div className="mt-4 h-[1px] w-16 bg-carnet-red"></div>
          <p className="font-instrument text-[16px] text-carnet-ink-soft mt-5 max-w-[560px] leading-[1.55]">
            Théorie approfondie et applications pratiques pour la voie appliquée en prépa ECG.
          </p>
        </div>

        {/* Carte placeholder */}
        <div className="carnet-card p-12 carnet-tilt-r relative">
          <div
            className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold"
            style={{ transform: 'rotate(-3deg)' }}
          >
            en cours…
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-[rgba(193,68,58,0.10)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center mb-6">
              <Pencil className="h-7 w-7 text-carnet-red" />
            </div>

            <h2 className="font-lora text-[28px] leading-[1.15] text-carnet-ink mb-3">
              Quiz en cours de <em className="font-lora italic text-carnet-red">rédaction</em>
            </h2>

            <p className="font-instrument text-[15px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.6] mb-8">
              On rédige les questions interactives en ce moment — adaptées aux besoins
              spécifiques de la voie appliquée. En attendant, le cours et les exercices
              sont déjà disponibles.
            </p>

            <div
              className="carnet-hand text-[22px] mb-8 inline-block"
              style={{ transform: 'rotate(-2deg)' }}
            >
              ↘ pars sur le cours
            </div>

            <hr className="carnet-divider mb-8 max-w-[320px] mx-auto" />

            <div className="flex flex-wrap gap-3 justify-center">
              <Link to={`/formation/maths-${cursSlug}`}>
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] py-[18px] px-7 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Voir le cours
                </Button>
              </Link>
              <Link to={`/formation/maths-${exercicesSlug}`}>
                <Button
                  variant="outline"
                  className="border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument font-semibold py-[18px] px-7 rounded-full h-auto"
                >
                  Faire les exercices
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
