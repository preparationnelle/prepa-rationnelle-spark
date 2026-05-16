// Contrat de données partagé pour les quiz & flashcards de la grammaire espagnole.
// Un fichier par chapitre dans ce dossier exporte `export const content: SpanishGrammarChapterContent`.
// Le registre `index.ts` agrège tous les chapitres par slug.

export interface SpanishQuizOption {
  /** Identifiant stable de l'option : 'a' | 'b' | 'c' | 'd' */
  id: string;
  text: string;
  correct: boolean;
}

export interface SpanishQuizQuestion {
  id: number;
  question: string;
  options: SpanishQuizOption[];
  explanation: string;
}

export interface SpanishFlashcard {
  id: number;
  /** Recto : amorce en français (règle à retrouver, traduction à produire…) */
  front: string;
  /** Verso : la réponse en espagnol (forme, exemple modèle, règle clé) */
  back: string;
  /** Indice optionnel affiché au recto */
  hint?: string;
  /** Sous-thème du chapitre (sert de badge de catégorie) */
  category: string;
}

export interface SpanishGrammarChapterContent {
  /** Slug relatif sous /formation/espagnol/grammaire/ — ex. "subjonctif" */
  slug: string;
  /** Titre du chapitre — ex. "Le Subjonctif" */
  title: string;
  /** Numéro de fiche (1 à 20) */
  chapterNumber: number;
  /** Titre affiché en tête du quiz — ex. "Quiz — Le Subjonctif" */
  quizTitle: string;
  quizQuestions: SpanishQuizQuestion[];
  flashcards: SpanishFlashcard[];
}
