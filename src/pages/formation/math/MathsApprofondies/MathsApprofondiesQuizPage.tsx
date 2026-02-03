import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { mathQuizQuestions } from '@/data/mathQuizQuestions';

// Mapping slug -> meta
const CHAPTERS: Record<string, { number: number; title: string; key?: string }> = {
  'elements-de-logique': { number: 1, title: 'Logique & raisonnement fondamentaux' },
  'ensembles-et-applications': { number: 2, title: 'Ensembles et applications' },
  'sommes-produits-coefficients-binomiaux': { number: 3, title: 'Sommes, produits & coefficients binomiaux' },
  'suites-numeriques': { number: 4, title: 'Suites numériques' },
  "fonctions-d-une-variable-reelle": { number: 5, title: "Fonctions d'une variable réelle" },
  'derivation': { number: 6, title: 'Dérivation' },
  'integration-sur-un-segment': { number: 7, title: 'Intégration sur un segment' },
  'polynomes': { number: 8, title: 'Polynômes' },
  'matrices-espaces-vectoriels': { number: 9, title: 'Matrices & espaces vectoriels' },
  'probabilites-conditionnement': { number: 10, title: 'Probabilités & conditionnement' },
  'applications-lineaires-structures-vectorielles': { number: 11, title: 'Applications linéaires & structures vectorielles' },
  'comparaison-negligeabilite-equivalence': { number: 12, title: 'Comparaison — négligeabilité & équivalence' },
  'series-numeriques': { number: 13, title: 'Séries numériques' },
  'developpements-limites-formule-de-taylor': { number: 14, title: 'Développements limités & formule de Taylor' },
  'integrales-impropres-criteres-de-convergence': { number: 15, title: 'Intégrales impropres & critères de convergence' },
  'espaces-probabilises-conditionnement': { number: 16, title: 'Espaces probabilisés & conditionnement' },
  'variables-aleatoires-discretes-lois': { number: 17, title: 'Variables aléatoires discrètes & lois' },
  'convergences-theoremes-limites': { number: 18, title: 'Convergences & théorèmes limites' },
  'variables-aleatoires-densite': { number: 46, title: 'Variables aléatoires à densité' },
  // Chapitres 2e année
  'complements-algebre-lineaire': { number: 1, title: 'Compléments d\'algèbre linéaire', key: 'chapitre1Complements2e' },
  'endomorphismes-matrices-avancees': { number: 2, title: 'Éléments propres et réduction des endomorphismes', key: 'chapitre2Endomorphismes2e' },
  'algebre-bilineaire': { number: 3, title: 'Algèbre bilinéaire', key: 'chapitre3AlgebreBilineaire2e' },
  'algebre-bilineaire-espaces-euclidiens': { number: 8, title: 'Algèbre bilinéaire et espaces euclidiens', key: 'chapitre3AlgebreBilineaire2e' },
  'n-uplets-variables-aleatoires': { number: 6, title: 'n-uplets de variables aléatoires réelles', key: 'chapitre6NupletsVariables' },
  'couple-variables-aleatoires': { number: 7, title: 'Probabilités (Variables aléatoires)', key: 'chapitre7CoupleVariables' },
  'fonctions-multivariees-calcul-differentiel': { number: 4, title: 'Fonctions multivariées et calcul différentiel' },
  'optimisation-multivariee-avancee': { number: 10, title: 'Optimisation multivariée avancée' },
  'reduction-matrices-symetriques': { number: 9, title: 'Réduction des matrices symétriques' },
  'convergences-approximations': { number: 11, title: 'Convergences et approximations' },
  'estimation-statistique-avancee': { number: 12, title: 'Estimation statistique avancée' },
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
    next: next ? { slug: next[0], title: next[1].title } : undefined
  };
};

const MathsApprofondiesQuizPage: React.FC = () => {
  const { pathname } = useLocation();
  // Expect paths like /formation/maths-<slug>-quiz
  const match = pathname.match(/\/formation\/maths-(.*)-quiz$/);
  const slug = match?.[1] || '';
  const meta = CHAPTERS[slug];

  // Trouver les chapitres adjacents
  const { previous: previousChapter, next: nextChapter } = getAdjacentChapters(slug);

  if (!meta) {
    return (
      <MathChapterTemplate
        chapterNumber={0}
        chapterTitle="Quiz"
        description="Ce quiz n'existe pas encore."
        subject="maths"
      >
        <div className="text-center text-slate-700">Aucun quiz trouvé pour cette adresse.</div>
      </MathChapterTemplate>
    );
  }

  const questionsKey = meta.key || keyFromNumber(meta.number);
  const questions = (mathQuizQuestions as any)[questionsKey] as any[] | undefined;

  if (!questions || questions.length === 0) {
    return (
      <MathChapterTemplate
        chapterNumber={meta.number}
        chapterTitle={meta.title}
        description={`Quiz interactif — ${meta.title}`}
        subject="maths"
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      >
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-6">
          Le quiz de ce chapitre est en cours de préparation.
        </div>
      </MathChapterTemplate>
    );
  }

  return (
    <MathChapterTemplate
      chapterNumber={meta.number}
      chapterTitle={meta.title}
      description={`Quiz interactif — ${meta.title}`}
      subject="maths"
      previousChapter={previousChapter}
      nextChapter={nextChapter}
      activeSection="quiz"
      slug={slug}
      showNavigation={true}
      titleClassName="text-slate-800"
    >
      <MathQuiz
        title={`Quiz — ${meta.title}`}
        questions={questions || []}
        chapterNumber={meta.number}
        chapterTitle={meta.title}
      />
    </MathChapterTemplate>
  );
};

export default MathsApprofondiesQuizPage;