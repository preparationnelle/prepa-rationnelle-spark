import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { mathQuizQuestions } from '@/data/mathQuizQuestions';

// Mapping slug -> meta
const CHAPTERS: Record<string, { number: number; title: string }> = {
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
};

const keyFromNumber = (n: number) => `chapitre${n}` as const;

const MathsApprofondiesQuizPage: React.FC = () => {
  const { pathname } = useLocation();
  // Expect paths like /formation/maths-<slug>-quiz
  const match = pathname.match(/\/formation\/maths-(.*)-quiz$/);
  const slug = match?.[1] || '';
  const meta = CHAPTERS[slug];

  if (!meta) {
    return (
      <MathChapterTemplate
        chapterNumber={0}
        chapterTitle="Quiz"
        description="Ce quiz n'existe pas encore."
      >
        <div className="text-center text-slate-700">Aucun quiz trouvé pour cette adresse.</div>
      </MathChapterTemplate>
    );
  }

  const questions = (mathQuizQuestions as any)[keyFromNumber(meta.number)] as any[] | undefined;

  if (!questions || questions.length === 0) {
    return (
      <MathChapterTemplate
        chapterNumber={meta.number}
        chapterTitle={meta.title}
        description={`Quiz interactif — ${meta.title}`}
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