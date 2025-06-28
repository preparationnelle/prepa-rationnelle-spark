
import { useState, useMemo } from 'react';
import { searchData, SearchItem } from '@/data/searchData';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase().trim();
    
    const results = searchData
      .map(item => {
        let score = 0;
        
        // Title match (highest priority)
        if (item.title.toLowerCase().includes(term)) {
          score += 10;
        }
        
        // Keywords match
        const keywordMatches = item.keywords.filter(keyword => 
          keyword.toLowerCase().includes(term)
        ).length;
        score += keywordMatches * 5;
        
        // Description match
        if (item.description.toLowerCase().includes(term)) {
          score += 3;
        }
        
        // Category filter
        if (selectedCategory && item.category !== selectedCategory) {
          return null;
        }
        
        return score > 0 ? { ...item, score } : null;
      })
      .filter(Boolean)
      .sort((a, b) => (b?.score || 0) - (a?.score || 0)) as (SearchItem & { score: number })[];

    return results;
  }, [searchTerm, selectedCategory]);

  const resultsByCategory = useMemo(() => {
    const grouped: Record<string, (SearchItem & { score: number })[]> = {};
    
    searchResults.forEach(result => {
      if (!grouped[result.category]) {
        grouped[result.category] = [];
      }
      grouped[result.category].push(result);
    });
    
    return grouped;
  }, [searchResults]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    searchResults,
    resultsByCategory
  };
};
