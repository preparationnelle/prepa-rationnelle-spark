// TEMPLATE STANDARD POUR LES FLASHCARDS — DESIGN PRÉPA RATIONNELLE
// =============================================================================
// Copier ce fichier pour créer un nouveau jeu de flashcards conforme au design
// system (slate + serif, badges discrets, progress fin, contrôles ronds).
// La logique d'affichage est déléguée à <ThemedFlashcards/>.
// =============================================================================

import React, { useMemo } from 'react';
import { ThemedFlashcards, type ThemedFlashcardItem } from '@/components/ui/ThemedFlashcards';

interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

// =============================================================================
// DONNÉES — REMPLACER PAR VOS DONNÉES
// =============================================================================

const vocabularyData: VocabularyItem[] = [
  {
    id: 1,
    french: 'Mot français 1',
    spanish: 'Traducción española 1',
    category: 'Catégorie 1',
  },
];

// =============================================================================
// COMPOSANT — laisser tel quel et adapter title / labels
// =============================================================================

const SubjectVocabularyFlashcards: React.FC = () => {
  const cards: ThemedFlashcardItem[] = useMemo(
    () =>
      vocabularyData.map((item) => ({
        id: item.id,
        front: item.french,
        back: item.spanish,
        category: item.category,
      })),
    [],
  );

  return (
    <ThemedFlashcards
      cards={cards}
      title="Vocabulaire — titre du module"
      frontLabel="Français"
      backLabel="Espagnol"
      showCategories
      enableShuffle
    />
  );
};

export default SubjectVocabularyFlashcards;
