export interface SpanishVocabularyItem {
  id: string;
  spanish: string;
  french: string;
  category: string;
}

// Helper function to generate IDs based on index
const generateId = (index: number): string => `vocab_${String(index + 1).padStart(4, '0')}`;

export const spanishVocabularyData: SpanishVocabularyItem[] = baseVocabularyData.map((item, index) => ({
  ...item,
  id: generateId(index)
}));

export const getCategorizedSpanishVocabulary = () => {
  const categories = [...new Set(spanishVocabularyData.map(item => item.category))];
  
  return categories.map(category => ({
    category,
    items: spanishVocabularyData.filter(item => item.category === category)
  }));
};
