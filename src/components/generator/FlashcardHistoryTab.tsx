
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  History,
  Search,
  Download,
  FileText,
  Trash2,
  Calendar,
  Sparkles,
  Lightbulb,
  Tag,
  Filter
} from 'lucide-react';
import { downloadFlashcardsAsCSV, downloadFlashcardsAsPDF } from '@/utils/flashcardDownloadUtils';
import { downloadFlashcardsAsExcel } from '@/utils/flashcardExcelUtils';
import { FLASHCARD_CATEGORIES } from '@/hooks/useFlashcardGenerator';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  front?: string | null;
  back?: string | null;
  hint?: string | null;
  category?: string | null;
  tags?: string[] | null;
  source?: string | null;
  created_at: string;
}

interface FlashcardHistoryTabProps {
  language: 'fr' | 'en';
  flashcards: FlashcardData[];
  isLoading: boolean;
  onDelete: (id: string) => void;
}

export const FlashcardHistoryTab = ({
  language,
  flashcards,
  isLoading,
  onDelete
}: FlashcardHistoryTabProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Get unique categories from flashcards
  const uniqueCategories = Array.from(new Set(flashcards.map(c => c.category || 'Vocabulaire')));

  const filteredFlashcards = flashcards.filter(card => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const front = card.front || card.word_fr || '';
      const back = card.back || card.word_en || '';
      const hint = card.hint || `${card.sentence_fr || ''} ${card.sentence_en || ''}`;
      const matchesSearch =
        front.toLowerCase().includes(query) ||
        back.toLowerCase().includes(query) ||
        hint.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Category filter
    if (categoryFilter !== 'all') {
      const cardCategory = card.category || 'Vocabulaire';
      if (cardCategory !== categoryFilter) return false;
    }

    // Date filter
    if (dateFilter !== 'all') {
      const cardDate = new Date(card.created_at);
      const now = new Date();

      switch (dateFilter) {
        case 'today':
          return cardDate.toDateString() === now.toDateString();
        case 'week':
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return cardDate >= oneWeekAgo;
        case 'month':
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          return cardDate >= oneMonthAgo;
        default:
          return true;
      }
    }

    return true;
  });

  // Helper to get display values (handle both legacy and new format)
  const getCardFront = (card: FlashcardData) => card.front || card.word_fr || '';
  const getCardBack = (card: FlashcardData) => card.back || card.word_en || '';
  const getCardHint = (card: FlashcardData) => {
    if (card.hint) return card.hint;
    if (card.sentence_fr && card.sentence_en) return `${card.sentence_fr} / ${card.sentence_en}`;
    return null;
  };

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    // Convert to legacy format for download utils
    const exportData = filteredFlashcards.map(c => ({
      word_fr: getCardFront(c),
      word_en: getCardBack(c),
      sentence_fr: c.sentence_fr || c.hint || '',
      sentence_en: c.sentence_en || '',
    }));
    downloadFlashcardsAsCSV(exportData, `flashcards-${timestamp}`);
  };

  const handleDownloadPDF = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const exportData = filteredFlashcards.map(c => ({
      word_fr: getCardFront(c),
      word_en: getCardBack(c),
      sentence_fr: c.sentence_fr || c.hint || '',
      sentence_en: c.sentence_en || '',
    }));
    downloadFlashcardsAsPDF(exportData, `flashcards-${timestamp}`);
  };

  const handleDownloadExcel = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const exportData = filteredFlashcards.map(c => ({
      word_fr: getCardFront(c),
      word_en: getCardBack(c),
      sentence_fr: c.sentence_fr || c.hint || '',
      sentence_en: c.sentence_en || '',
    }));
    downloadFlashcardsAsExcel(exportData, `flashcards-${timestamp}`);
  };

  if (isLoading) {
    return (
      <div className="p-16 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-500">
          {language === 'fr' ? 'Chargement...' : 'Loading...'}
        </p>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full mb-4">
          <History className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {language === 'fr' ? 'Aucune flashcard' : 'No flashcards'}
        </h3>
        <p className="text-gray-500 max-w-sm mt-2">
          {language === 'fr'
            ? 'Créez votre première flashcard pour commencer votre collection.'
            : 'Create your first flashcard to start your collection.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="flex flex-col gap-6 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
            <History className="h-5 w-5 text-orange-500" />
            {language === 'fr' ? 'Ma Collection' : 'My Collection'}
            <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {filteredFlashcards.length} / {flashcards.length}
            </Badge>
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCSV}
              className="flex items-center gap-1 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <Download className="h-3.5 w-3.5" />
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadExcel}
              className="flex items-center gap-1 border-green-200 bg-green-50/50 text-green-700 hover:bg-green-100 dark:border-green-900/30 dark:bg-green-900/10 dark:text-green-400"
            >
              <Download className="h-3.5 w-3.5" />
              Excel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPDF}
              className="flex items-center gap-1 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <FileText className="h-3.5 w-3.5" />
              PDF
            </Button>
          </div>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={language === 'fr' ? 'Rechercher...' : 'Search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[180px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <Filter className="h-4 w-4 mr-2 text-gray-400" />
              <SelectValue placeholder={language === 'fr' ? 'Catégorie' : 'Category'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{language === 'fr' ? 'Toutes' : 'All'}</SelectItem>
              {uniqueCategories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Date Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {(['all', 'today', 'week', 'month'] as const).map((filter) => (
              <Button
                key={filter}
                variant={dateFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setDateFilter(filter)}
                className={`flex items-center gap-1 whitespace-nowrap ${dateFilter === filter ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <Calendar className="h-3.5 w-3.5" />
                {filter === 'all' && (language === 'fr' ? 'Tout' : 'All')}
                {filter === 'today' && (language === 'fr' ? "Aujourd'hui" : 'Today')}
                {filter === 'week' && (language === 'fr' ? 'Semaine' : 'Week')}
                {filter === 'month' && (language === 'fr' ? 'Mois' : 'Month')}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Flashcards list */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {filteredFlashcards.map((flashcard) => (
          <div key={flashcard.id} className="group relative border border-gray-100 dark:border-gray-800 rounded-2xl p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-900 hover:border-orange-200 dark:hover:border-orange-900/50">
            <div className="flex justify-between items-start">
              <div className="flex-1 space-y-4">
                {/* Category & Source */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800">
                    {flashcard.category || 'Vocabulaire'}
                  </Badge>
                  {flashcard.source === 'ai_generated' && (
                    <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                      <Sparkles className="w-3 h-3 mr-1" />
                      IA
                    </Badge>
                  )}
                </div>

                {/* Front / Back */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-[10px] font-bold">Q</span>
                      <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">
                        {language === 'fr' ? 'Question' : 'Question'}
                      </span>
                    </div>
                    <p className="font-bold text-xl text-gray-900 dark:text-white">{getCardFront(flashcard)}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-[10px] font-bold">R</span>
                      <span className="text-[10px] font-bold tracking-wider text-green-600 uppercase">
                        {language === 'fr' ? 'Réponse' : 'Answer'}
                      </span>
                    </div>
                    <p className="font-bold text-xl text-gray-900 dark:text-white">{getCardBack(flashcard)}</p>
                  </div>
                </div>

                {/* Hint */}
                {getCardHint(flashcard) && (
                  <div className="bg-gray-50/50 dark:bg-gray-800/30 p-4 rounded-xl flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      {getCardHint(flashcard)}
                    </p>
                  </div>
                )}

                {/* Tags */}
                {flashcard.tags && flashcard.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-3 h-3 text-gray-400" />
                    {flashcard.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Creation date */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <Calendar className="h-3 w-3" />
                  {language === 'fr' ? 'Créée le' : 'Created on'} {new Date(flashcard.created_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(flashcard.id)}
                className="text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors opacity-0 group-hover:opacity-100 absolute top-4 right-4"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredFlashcards.length === 0 && (searchQuery || categoryFilter !== 'all') && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-200 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">
            {language === 'fr'
              ? 'Aucun résultat trouvé'
              : 'No results found'
            }
          </p>
          <Button
            variant="link"
            onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }}
            className="mt-2 text-orange-500"
          >
            {language === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
          </Button>
        </div>
      )}
    </div>
  );
};
