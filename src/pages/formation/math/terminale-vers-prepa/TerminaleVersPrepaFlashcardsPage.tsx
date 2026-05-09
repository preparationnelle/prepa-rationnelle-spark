import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { terminaleVersPrepaFlashcards } from '@/data/terminaleVersPrepaFlashcards';

// Slug d'URL (tel qu'apparaissant dans la route) → meta du chapitre
const CHAPTERS: Record<string, { number: number; title: string }> = {
  'calculs': { number: 1, title: 'Calculs' },
  'sommes-suites': { number: 2, title: 'Sommes, suites et produits' },
  'suites': { number: 3, title: 'Suites' },
  'fonctions': { number: 4, title: 'Fonctions' },
  'derivees': { number: 5, title: 'Dérivées' },
  'integrales': { number: 6, title: 'Intégrale' },
  'limites': { number: 7, title: 'Limites' },
  'probabilites': { number: 8, title: 'Probabilités' },
  'recurrence': { number: 9, title: 'Récurrence' },
  'matrices': { number: 10, title: 'Matrice' },
};

const ORDER = Object.keys(CHAPTERS);

const getAdjacentChapters = (currentSlug: string) => {
  const idx = ORDER.indexOf(currentSlug);
  if (idx === -1) return { previous: undefined, next: undefined };
  const previousSlug = idx > 0 ? ORDER[idx - 1] : undefined;
  const nextSlug = idx < ORDER.length - 1 ? ORDER[idx + 1] : undefined;
  return {
    previous: previousSlug ? { slug: previousSlug, title: CHAPTERS[previousSlug].title } : undefined,
    next: nextSlug ? { slug: nextSlug, title: CHAPTERS[nextSlug].title } : undefined,
  };
};

const TerminaleVersPrepaFlashcardsPage: React.FC = () => {
  const location = useLocation();

  // URL au format /formation/math/terminale-vers-prepa/{slug}-flashcards
  const segments = location.pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || '';
  const chapterSlug = lastSegment.replace(/-flashcards$/, '');

  const chapter = CHAPTERS[chapterSlug];

  if (!chapter) {
    return (
      <MathChapterTemplate
        title="Chapitre non trouvé"
        subtitle="Le chapitre demandé n'existe pas."
        chapterNumber={0}
        previousChapter={undefined}
        nextChapter={undefined}
      >
        <div className="text-center">
          <p>Chapitre non trouvé. Retournez à la page principale.</p>
        </div>
      </MathChapterTemplate>
    );
  }

  const { previous, next } = getAdjacentChapters(chapterSlug);
  const flashcards = (terminaleVersPrepaFlashcards as any)[chapterSlug] as any[] | undefined;

  if (!flashcards) {
    return (
      <MathChapterTemplate
        title={`Chapitre ${chapter.number} : ${chapter.title} - Flashcards`}
        subtitle="Flashcards non disponibles"
        chapterNumber={chapter.number}
        previousChapter={previous}
        nextChapter={next}
      >
        <div className="text-center">
          <p>Les flashcards pour ce chapitre ne sont pas encore disponibles.</p>
        </div>
      </MathChapterTemplate>
    );
  }

  return (
    <MathChapterTemplate
      title={`Chapitre ${chapter.number} : ${chapter.title} - Flashcards`}
      subtitle="Révisez les concepts clés avec ces flashcards interactives"
      chapterNumber={chapter.number}
      previousChapter={previous}
      nextChapter={next}
    >
      <MathFlashcards
        flashcards={flashcards}
        title={`Chapitre ${chapter.number} : ${chapter.title} - Flashcards`}
        chapterNumber={chapter.number}
      />
    </MathChapterTemplate>
  );
};

export default TerminaleVersPrepaFlashcardsPage;
