import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SpanishGrammarQuiz } from '@/components/formation/espagnol/SpanishGrammarQuiz';
import { getSpanishGrammarChapter } from '@/data/spanishGrammar';

const SpanishGrammarQuizPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapter = getSpanishGrammarChapter(slug);

  if (!chapter) {
    return <Navigate to="/formation/espagnol/grammaire" replace />;
  }

  const base = `/formation/espagnol/grammaire/${chapter.slug}`;

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical={`${base}/quiz`}
        title={`${chapter.quizTitle} · Grammaire Espagnole ECG · Prépa Rationnelle`}
        description={`Quiz interactif de grammaire espagnole — ${chapter.title}. ${chapter.quizQuestions.length} questions corrigées pour les concours ECG.`}
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
            <span className="carnet-eyebrow text-[11px]">Quiz</span>
          </div>
        </div>
      </nav>

      <section className="relative py-12 lg:py-14">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="carnet-eyebrow mb-3">
              Espagnol · Grammaire · Fiche {String(chapter.chapterNumber).padStart(2, '0')}
            </div>
            <h1 className="font-lora text-[30px] sm:text-[38px] leading-[1.1] text-carnet-ink tracking-tight">
              Quiz — <em className="font-lora italic text-carnet-red">{chapter.title}</em>.
            </h1>
            <p className="font-instrument text-[15px] text-carnet-ink-soft mt-3">
              {chapter.quizQuestions.length} questions · sélectionnez une réponse par question puis validez.
            </p>
          </div>

          <SpanishGrammarQuiz
            questions={chapter.quizQuestions}
            title={chapter.quizTitle}
            qcmId={`espagnol-grammaire-${chapter.slug}`}
          />

          <div className="max-w-3xl mx-auto mt-12 flex flex-wrap gap-5">
            <Link
              to={`${base}/flashcards`}
              className="inline-flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              Réviser avec les flashcards
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

export default SpanishGrammarQuizPage;
