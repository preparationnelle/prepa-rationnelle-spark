export interface SpanishVocabularyItem {
  id: string;
  spanish: string;
  french: string;
  category: string;
}

// Helper function to generate IDs based on index
const generateId = (index: number): string => `vocab_${String(index + 1).padStart(4, '0')}`;

// Base vocabulary data - you can add your vocabulary items here
const baseVocabularyData = [
  { spanish: "el gobierno", french: "le gouvernement", category: "Institutions politiques" },
  { spanish: "la democracia", french: "la démocratie", category: "Systèmes politiques" },
  { spanish: "el parlamento", french: "le parlement", category: "Institutions politiques" },
  { spanish: "el presidente", french: "le président", category: "Fonctions politiques" },
  { spanish: "la constitución", french: "la constitution", category: "Droit constitutionnel" }
];

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
