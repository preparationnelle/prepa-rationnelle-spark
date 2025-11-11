import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { terminaleVersPrepaQuizQuestions } from '@/data/terminaleVersPrepaQuizQuestions';

// Mapping slug -> meta pour Terminale vers Prépa
const CHAPTERS: Record<string, { number: number; title: string; key?: string }> = {
  'calculs': { number: 1, title: 'Calculs' },
  'sommes-suites-produits': { number: 2, title: 'Sommes, suites et produits' },
  'suites': { number: 3, title: 'Suites' },
  'fonctions': { number: 4, title: 'Fonctions' },
  'derivées': { number: 5, title: 'Dérivées' },
  'integrale': { number: 6, title: 'Intégrale' },
  'limites': { number: 7, title: 'Limites' },
  'probabilites': { number: 8, title: 'Probabilités' },
  'recurrence': { number: 9, title: 'Récurrence' },
  'matrice': { number: 10, title: 'Matrice' },
};

const keyFromNumber = (n: number) => `chapitre${n}` as const;

// Fonction pour trouver le chapitre précédent et suivant
const getAdjacentChapters = (currentSlug: string) => {
  const entries = Object.entries(CHAPTERS);
  const currentIndex = entries.findIndex(([slug]) => slug === currentSlug);

  if (currentIndex === -1) return { previous: undefined, next: undefined };

  const previous = currentIndex > 0 ? entries[currentIndex - 1] : undefined;
  const next = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : undefined;

  return {
    previous: previous ? { slug: previous[0], title: previous[1].title } : undefined,
    next: next ? { slug: next[0], title: next[1].title } : undefined,
  };
};

const TerminaleVersPrepaQuizPage: React.FC = () => {
  const location = useLocation();

  // Extraire le slug du chapitre depuis l'URL
  const pathSegments = location.pathname.split('/');
  const chapterSlug = pathSegments[pathSegments.length - 2]; // /formation/math/terminale-vers-prepa/{slug}/quiz

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
  const questionsKey = keyFromNumber(chapter.number);
  const questions = (terminaleVersPrepaQuizQuestions as any)[chapterSlug] as any[] | undefined;

  if (!questions) {
    return (
      <MathChapterTemplate
        title={`Chapitre ${chapter.number} : ${chapter.title} - Quiz`}
        subtitle="Questions non disponibles"
        chapterNumber={chapter.number}
        previousChapter={previous}
        nextChapter={next}
      >
        <div className="text-center">
          <p>Les questions pour ce chapitre ne sont pas encore disponibles.</p>
        </div>
      </MathChapterTemplate>
    );
  }

  return (
    <MathChapterTemplate
      title={`Chapitre ${chapter.number} : ${chapter.title} - Quiz`}
      subtitle="Testez vos connaissances avec ce quiz interactif"
      chapterNumber={chapter.number}
      previousChapter={previous}
      nextChapter={next}
    >
      <MathQuiz
        title={`Quiz - Chapitre ${chapter.number} : ${chapter.title}`}
        questions={questions}
        chapterNumber={chapter.number}
        chapterTitle={chapter.title}
      />
    </MathChapterTemplate>
  );
};

export default TerminaleVersPrepaQuizPage;
