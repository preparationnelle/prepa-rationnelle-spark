
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, History, Sparkles, BarChart3 } from 'lucide-react';
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

  const getCategoryStats = () => {
    const stats: Record<string, number> = {};
    allFlashcards.forEach(card => {
      const cat = card.category || 'Vocabulaire';
      stats[cat] = (stats[cat] || 0) + 1;
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  };

  const todayCount = allFlashcards.filter(
    c => new Date(c.created_at).toDateString() === new Date().toDateString()
  ).length;

  const weekCount = allFlashcards.filter(card => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return new Date(card.created_at) >= oneWeekAgo;
  }).length;

  const summaryStats = [
    { label: language === 'fr' ? 'Total créées' : 'Total created', value: allFlashcards.length },
    { label: language === 'fr' ? 'Cette session' : 'This session', value: generatedFlashcards.length },
    { label: language === 'fr' ? "Aujourd'hui" : 'Today', value: todayCount },
    { label: language === 'fr' ? 'Cette semaine' : 'This week', value: weekCount },
  ];

  const tabs = [
    { id: 'generated', icon: Sparkles, label: language === 'fr' ? 'Générées' : 'Generated', count: generatedFlashcards.length },
    { id: 'review', icon: Play, label: language === 'fr' ? 'Révision' : 'Review', count: allFlashcards.length },
    { id: 'history', icon: History, label: language === 'fr' ? 'Ma collection' : 'My collection', count: allFlashcards.length },
    { id: 'stats', icon: BarChart3, label: 'Stats' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20 font-dm-sans">

      {/* Header compact — pitch contexte d'abord, titre en éyebrow */}
      <header className="text-center pt-1 pb-5 max-w-2xl mx-auto">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-black mb-3">
          {language === 'fr' ? 'Flashcards Universelles' : 'Universal Flashcards'}
        </div>

        <h1 className="font-dm-serif text-2xl md:text-3xl text-pr-black leading-[1.15] mb-3">
          {language === 'fr'
            ? <>Pas juste le mot — une <em className="italic">phrase entière</em> avec le mot dedans.</>
            : <>Not just the word — a <em className="italic">full sentence</em> with the word inside.</>}
        </h1>

        <p className="text-[14px] text-pr-gray-dark leading-relaxed">
          {language === 'fr'
            ? 'Tu retiens en contexte, donc tu retiens mieux. L\'IA génère la carte complète avec toutes les subtilités.'
            : 'You learn in context, so you remember better. The AI generates the full card with all the nuances.'}
        </p>
      </header>

      {/* Carte de saisie */}
      <section className="max-w-3xl mx-auto mb-6">
        <div className="relative bg-carnet-paper-2 border border-pr-gray-light rounded-2xl overflow-hidden">
          {/* trait noir signature en haut */}
          <div className="h-[3px] bg-pr-black" />
          <div className="p-6 md:p-8">
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
      </section>

      {/* Tabs + contenu */}
      <section className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="sticky top-2 z-30 mb-8 flex justify-center">
            <TabsList className="bg-carnet-paper/80 backdrop-blur-md border border-pr-gray-light p-1 h-auto rounded-full inline-flex gap-1 shadow-sm overflow-x-auto max-w-full">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-full px-4 sm:px-5 py-2.5 text-[13px] font-medium text-pr-gray-mid transition-colors data-[state=active]:bg-pr-gray-bg data-[state=active]:text-pr-black data-[state=active]:shadow-sm whitespace-nowrap"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      {tab.count !== undefined && tab.count > 0 && (
                        <span
                          className={`ml-0 sm:ml-1 px-1.5 min-w-[20px] text-center text-[10px] font-semibold rounded-full ${
                            isActive
                              ? 'bg-carnet-paper-2 text-pr-black border border-pr-gray-light/30'
                              : 'bg-pr-gray-bg text-pr-gray-mid border border-pr-gray-light'
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <div className="bg-carnet-paper-2 border border-pr-gray-light rounded-2xl p-6 md:p-8 min-h-[400px]">
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
              {allFlashcards.length === 0 ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-12 h-12 rounded-full bg-pr-gray-bg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-pr-black" />
                  </div>
                  <h3 className="font-dm-serif text-xl text-pr-black mb-2">
                    {language === 'fr' ? 'Pas encore de statistiques' : 'No stats yet'}
                  </h3>
                  <p className="text-sm text-pr-gray-mid max-w-sm mb-5">
                    {language === 'fr'
                      ? "Crée ta première flashcard pour voir tes progrès — total, cadence, répartition par matière."
                      : 'Create your first flashcard to see your progress — total, pace, breakdown by subject.'}
                  </p>
                  <button
                    onClick={() => setActiveTab('generated')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pr-black hover:bg-pr-black-dark text-white text-[13px] font-semibold transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    {language === 'fr' ? 'Créer ma première carte' : 'Create my first card'}
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {/* Cartes stats — neutres + numéro noir décoratif */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {summaryStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="relative bg-pr-gray-bg border border-pr-gray-light rounded-xl p-5 text-center overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 h-[2px] w-10 bg-pr-black" />
                        <div className="font-dm-serif text-4xl text-pr-black leading-none mb-2 tabular-nums">
                          {stat.value}
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Répartition par catégorie */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-7 w-[3px] bg-pr-black rounded-full" />
                      <h3 className="font-dm-serif text-xl text-pr-black">
                        {language === 'fr' ? 'Répartition par catégorie' : 'By category'}
                      </h3>
                    </div>

                    <div className="bg-pr-gray-bg border border-pr-gray-light rounded-xl p-6">
                      <div className="space-y-4">
                        {getCategoryStats().map(([cat, count]) => {
                          const percent = (count / allFlashcards.length) * 100;
                          return (
                            <div key={cat} className="space-y-1.5">
                              <div className="flex items-center justify-between text-[13px]">
                                <span className="font-medium text-pr-gray-dark">{cat}</span>
                                <span className="text-pr-gray-mid tabular-nums">
                                  <span className="text-pr-black font-semibold">{count}</span>
                                  <span className="mx-1.5 text-pr-gray-light">·</span>
                                  {percent.toFixed(0)}%
                                </span>
                              </div>
                              <div className="h-1.5 bg-carnet-paper-2 rounded-full overflow-hidden border border-pr-gray-light">
                                <div
                                  className="h-full bg-pr-black rounded-full transition-all"
                                  style={{ width: `${percent}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </div>
  );
};
