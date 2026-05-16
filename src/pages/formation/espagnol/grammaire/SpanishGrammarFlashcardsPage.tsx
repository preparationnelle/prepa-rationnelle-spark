import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SpanishGrammarFlashcards } from '@/components/formation/espagnol/SpanishGrammarFlashcards';
import { getSpanishGrammarChapter } from '@/data/spanishGrammar';

const SpanishGrammarFlashcardsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapter = getSpanishGrammarChapter(slug);

  if (!chapter) {
    return <Navigate to="/formation/espagnol/grammaire" replace />;
  }

  const base = `/formation/espagnol/grammaire/${chapter.slug}`;

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical={`${base}/flashcards`}
        title={`Flashcards — ${chapter.title} · Grammaire Espagnole ECG · Prépa Rationnelle`}
        description={`Flashcards de mémorisation — ${chapter.title}. ${chapter.flashcards.length} cartes pour ancrer les réflexes de grammaire espagnole aux concours ECG.`}
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-carnet-red transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to={base} className="hover:text-carnet-red transition-colors">
              {chapter.title}
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Flashcards</span>
          </div>
        </div>
      </nav>

      <section className="relative py-12 lg:py-14">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <SpanishGrammarFlashcards cards={chapter.flashcards} chapterTitle={chapter.title} />

          <div className="max-w-2xl mx-auto mt-12 flex flex-wrap gap-5">
            <Link
              to={`${base}/quiz`}
              className="inline-flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              Se tester avec le quiz
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/formation/espagnol/grammaire"
              className="inline-flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" />
              Retour à tous les chapitres
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpanishGrammarFlashcardsPage;
