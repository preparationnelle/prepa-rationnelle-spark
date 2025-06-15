
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, MessageSquare, Loader2 } from 'lucide-react';
import { ResponseTabs } from './ResponseTabs';
import { Answer } from './ResponseTabs';

interface ResponseCardProps {
  question: string;
  answer: Answer | null;
  streamingContent?: string;
  wordCount: number;
  language: 'fr' | 'en';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClearAnswer: () => void;
  isStreaming?: boolean;
}

export const ResponseCard = ({ 
  question, 
  answer, 
  streamingContent,
  wordCount, 
  language, 
  activeTab, 
  onTabChange, 
  onClearAnswer,
  isStreaming = false
}: ResponseCardProps) => {
  // Show streaming content if available, otherwise show final answer
  const displayContent = streamingContent || (answer?.fullText || '');
  const isGenerating = isStreaming && !answer;

  return (
    <Card className="mt-8 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                {language === 'fr' ? 'Réponse générée' : 'Generated response'}
                {isGenerating && <Loader2 className="h-5 w-5 animate-spin" />}
              </CardTitle>
              <div className="text-green-100 text-sm font-normal mt-1">
                {wordCount} {language === 'fr' ? 'mots' : 'words'}
                {isGenerating && (
                  <span className="ml-2 text-green-200">
                    {language === 'fr' ? '• En cours de génération...' : '• Generating...'}
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button
            onClick={onClearAnswer}
            variant="secondary"
            size="sm"
            className="bg-white/20 text-white hover:bg-white/30 border-white/20"
            disabled={isGenerating}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Effacer' : 'Clear'}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-green-800 mb-2">
            {language === 'fr' ? 'Question :' : 'Question:'}
          </h3>
          <p className="text-green-700">{question}</p>
        </div>
        
        {/* Show streaming content or final answer */}
        {(displayContent || isGenerating) && (
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed relative">
            {displayContent}
            {isGenerating && (
              <span className="inline-block w-2 h-5 bg-green-600 animate-pulse ml-1" />
            )}
          </div>
        )}
        
        {/* Show structured tabs only when final answer is ready */}
        {answer && !isStreaming && (
          <ResponseTabs
            answer={answer}
            language={language}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        )}
      </CardContent>
    </Card>
  );
};
