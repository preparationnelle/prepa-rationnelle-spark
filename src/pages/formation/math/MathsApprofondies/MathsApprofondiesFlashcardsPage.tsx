import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { mathFlashcardsData } from '@/data/mathFlashcardsData';
import { mathsAppliqueesFlashcards } from '@/data/mathsAppliqueesFlashcards';

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

// Liste des slugs qui appartiennent aux maths appliquées
const MATHS_APPLIQUEES_SLUGS = [
  'elements-de-logique',
  'ensembles-et-applications',
  'sommes-produits-coefficients-binomiaux',
  'suites-numeriques',
  'fonctions-d-une-variable-reelle',
  'derivation',
  'integration-sur-un-segment',
  'polynomes',
  'matrices-espaces-vectoriels',
  'probabilites-conditionnement',
  'applications-lineaires-structures-vectorielles',
  'comparaison-negligeabilite-equivalence',
  'series-numeriques',
  'developpements-limites-formule-de-taylor',
  'integrales-impropres-criteres-de-convergence',
  'espaces-probabilises-conditionnement',
  'variables-aleatoires-discretes-lois',
  'convergences-theoremes-limites'
];

const MathsApprofondiesFlashcardsPage: React.FC = () => {
  const { pathname } = useLocation();
  // Expect paths like /formation/maths-<slug>-flashcards
  const match = pathname.match(/\/formation\/maths-(.*)-flashcards$/);
  const slug = match?.[1] || '';
  const meta = CHAPTERS[slug];

  // Déterminer si c'est un chapitre de maths appliquées
  const isMathsAppliquees = MATHS_APPLIQUEES_SLUGS.includes(slug);

  // Trouver les chapitres adjacents
  const { previous: previousChapter, next: nextChapter } = getAdjacentChapters(slug);

  if (!meta) {
    return (
      <MathChapterTemplate
        chapterNumber={0}
        chapterTitle="Flashcards"
        description="Ces flashcards n'existent pas encore."
        subject="maths"
      >
        <div className="text-center text-slate-700">Aucune flashcard trouvée pour cette adresse.</div>
      </MathChapterTemplate>
    );
  }

  // Choisir la source de données appropriée
  const flashcardsDataSource = isMathsAppliquees ? mathsAppliqueesFlashcards : mathFlashcardsData;
  const flashcardsKey = isMathsAppliquees ? slug : (meta.key || keyFromNumber(meta.number));
  const flashcards = (flashcardsDataSource as any)[flashcardsKey] as any[] | undefined;

  if (!flashcards || flashcards.length === 0) {
    return (
      <MathChapterTemplate
        chapterNumber={meta.number}
        chapterTitle={meta.title}
        description={`Flashcards interactives — ${meta.title}`}
        subject="maths"
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      >
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Flashcards en préparation</h3>
          </div>
          <p className="text-blue-700">
            Les flashcards pour le chapitre <strong>"{meta.title}"</strong> sont actuellement en cours de développement.
            Elles seront bientôt disponibles pour vous aider à réviser de manière interactive !
          </p>
          <div className="mt-4 p-3 bg-blue-100 rounded-md">
            <p className="text-sm text-blue-800">
              💡 <strong>Astuce :</strong> En attendant, consultez les cours et exercices de ce chapitre pour bien assimiler les concepts.
            </p>
          </div>
        </div>
      </MathChapterTemplate>
    );
  }

  return (
    <MathChapterTemplate
      chapterNumber={meta.number}
      chapterTitle={meta.title}
      description={`Flashcards interactives — ${meta.title}`}
      subject="maths"
      previousChapter={previousChapter}
      nextChapter={nextChapter}
      activeSection="flashcards"
      slug={slug}
      showNavigation={true}
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={flashcards || []}
        title={`Flashcards — ${meta.title}`}
        chapterNumber={meta.number}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default MathsApprofondiesFlashcardsPage;
