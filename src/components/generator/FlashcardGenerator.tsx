
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, History, Sparkles, BarChart3 } from 'lucide-react';
import { FlashcardInput } from './FlashcardInput';
import { GeneratedFlashcardsList } from './GeneratedFlashcardsList';
import { FlashcardReviewSystem } from '@/components/flashcards/FlashcardReviewSystem';
import { useFlashcardGenerator } from '@/hooks/useFlashcardGenerator';
import { useUnifiedFlashcards } from '@/hooks/useUnifiedFlashcards';
import { FlashcardHistoryTab } from './FlashcardHistoryTab';

interface FlashcardGeneratorProps {
  language: 'fr' | 'en';
  onFlashcardCreated?: () => void;
}

export const FlashcardGenerator = ({ language, onFlashcardCreated }: FlashcardGeneratorProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [activeTab, setActiveTab] = useState('generated');

  const {
    isGenerating,
    generatedFlashcards,
    clearGeneratedHistory,
    // Universal mode
    isAiMode,
    setIsAiMode,
    frontInput,
    setFrontInput,
    backInput,
    setBackInput,
    hintInput,
    setHintInput,
    categoryInput,
    setCategoryInput,
    tagsInput,
    setTagsInput,
    topicInput,
    setTopicInput,
    generateFlashcardUniversal,
  } = useFlashcardGenerator(language, () => {
    setRefreshTrigger(prev => prev + 1);
    if (onFlashcardCreated) onFlashcardCreated();
  });

  const {
    allFlashcards,
    isLoading: isLoadingHistory,
    deleteFlashcard,
  } = useUnifiedFlashcards(language, refreshTrigger);

  const handleGenerate = async () => {
    await generateFlashcardUniversal();
  };

  // Get category breakdown for stats
  const getCategoryStats = () => {
    const stats: Record<string, number> = {};
    allFlashcards.forEach(card => {
      const cat = card.category || 'Vocabulaire';
      stats[cat] = (stats[cat] || 0) + 1;
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">

      {/* Header Section */}
      <div className="relative text-center pb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 w-64 h-64 bg-orange-200/20 rounded-full blur-[80px] pointer-events-none" />

        <h1 className="relative text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-2 tracking-tight">
          {language === 'fr' ? 'Flashcards Universelles' : 'Universal Flashcards'}
        </h1>

        <p className="relative text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr'
            ? 'Créez des cartes de révision pour n\'importe quel sujet : maths, code, histoire, vocabulaire...'
            : 'Create review cards for any subject: math, code, history, vocabulary...'}
        </p>
      </div>

      {/* Main Input Area */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-1 shadow-2xl shadow-orange-500/10 border border-gray-100 dark:border-gray-800">
          <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 rounded-[22px] px-6 py-6 md:px-8 md:py-8">
            <FlashcardInput
              language={language}
              isAiMode={isAiMode}
              setIsAiMode={setIsAiMode}
              frontInput={frontInput}
              setFrontInput={setFrontInput}
              backInput={backInput}
              setBackInput={setBackInput}
              hintInput={hintInput}
              setHintInput={setHintInput}
              categoryInput={categoryInput}
              setCategoryInput={setCategoryInput}
              tagsInput={tagsInput}
              setTagsInput={setTagsInput}
              topicInput={topicInput}
              setTopicInput={setTopicInput}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-1.5 h-auto rounded-full shadow-lg shadow-gray-200/50 dark:shadow-none inline-flex gap-1">
              {[
                { id: 'generated', icon: Sparkles, label: language === 'fr' ? 'Générées' : 'Generated', count: generatedFlashcards.length, countColor: 'bg-orange-100 text-orange-700' },
                { id: 'review', icon: Play, label: language === 'fr' ? 'Révision' : 'Review', count: allFlashcards.length, countColor: 'bg-green-100 text-green-700' },
                { id: 'history', icon: History, label: language === 'fr' ? 'Ma Collection' : 'My Collection', count: allFlashcards.length, countColor: 'bg-blue-100 text-blue-700' },
                { id: 'stats', icon: BarChart3, label: 'Stats' }
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-full px-6 py-3 text-sm font-medium transition-all data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    {tab.count !== undefined && tab.count > 0 && (
                      <span className={`ml-1.5 px-2 py-0.5 text-[10px] font-bold rounded-full ${activeTab === tab.id ? 'bg-white/20 text-current' : tab.countColor}`}>
                        {tab.count}
                      </span>
                    )}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 min-h-[400px] border border-white/50 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none">
            <TabsContent value="generated" className="mt-0 focus-visible:outline-none">
              <GeneratedFlashcardsList
                language={language}
                generatedFlashcards={generatedFlashcards}
                onClearHistory={clearGeneratedHistory}
              />
            </TabsContent>

            <TabsContent value="history" className="mt-0 focus-visible:outline-none">
              <FlashcardHistoryTab
                language={language}
                flashcards={allFlashcards}
                isLoading={isLoadingHistory}
                onDelete={deleteFlashcard}
              />
            </TabsContent>

            <TabsContent value="review" className="mt-0 focus-visible:outline-none">
              <FlashcardReviewSystem
                language={language}
                refreshTrigger={refreshTrigger}
              />
            </TabsContent>

            <TabsContent value="stats" className="mt-0 focus-visible:outline-none">
              <div className="space-y-8">
                {/* Summary Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: language === 'fr' ? 'Total créées' : 'Total Created', value: allFlashcards.length, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                    { label: language === 'fr' ? 'Cette session' : 'This Session', value: generatedFlashcards.length, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
                    { label: language === 'fr' ? "Aujourd'hui" : 'Today', value: allFlashcards.filter(c => new Date(c.created_at).toDateString() === new Date().toDateString()).length, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
                    {
                      label: language === 'fr' ? 'Cette semaine' : 'This Week', value: allFlashcards.filter(card => {
                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                        return new Date(card.created_at) >= oneWeekAgo;
                      }).length, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20'
                    }
                  ].map((stat, idx) => (
                    <Card key={idx} className="border-0 shadow-none bg-transparent">
                      <div className={`${stat.bg} rounded-2xl p-6 text-center transition-transform hover:scale-105 duration-300`}>
                        <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Category Breakdown */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-orange-500" />
                    {language === 'fr' ? 'Par catégorie' : 'By Category'}
                  </h3>
                  <div className="space-y-3">
                    {getCategoryStats().length > 0 ? (
                      getCategoryStats().map(([cat, count]) => (
                        <div key={cat} className="flex items-center justify-between">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{cat}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-orange-500 rounded-full transition-all"
                                style={{ width: `${(count / allFlashcards.length) * 100}%` }}
                              />
                            </div>
                            <Badge variant="secondary" className="min-w-[40px] justify-center">
                              {count}
                            </Badge>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        {language === 'fr' ? 'Aucune flashcard créée' : 'No flashcards created'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
