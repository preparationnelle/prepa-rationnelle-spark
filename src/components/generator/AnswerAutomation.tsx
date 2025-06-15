import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';
import { UseFormReturn } from "react-hook-form";
import { Answer } from '@/components/generator/ResponseTabs';

interface AnswerAutomationProps {
  question: string;
  setQuestion: (q: string) => void;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showAdditionalInfo: boolean;
  setShowAdditionalInfo: (b: boolean) => void;
  loadExample: () => void;
  handleGenerate: () => void;
  generating: boolean;
  currentAnswer: Answer | null; // <-- Typing fixed to Answer | null
  setCurrentAnswer: (s: Answer | null) => void;
  wordCount: number;
  additionalInfoForm: UseFormReturn<AdditionalInfo>;
}

export const AnswerAutomation: React.FC<AnswerAutomationProps> = ({
  question,
  setQuestion,
  language,
  setLanguage,
  activeTab,
  setActiveTab,
  showAdditionalInfo,
  setShowAdditionalInfo,
  loadExample,
  handleGenerate,
  generating,
  currentAnswer,
  setCurrentAnswer,
  wordCount,
  additionalInfoForm,
}) => (
  <>
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 mb-12">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                Générer une nouvelle réponse
              </CardTitle>
              <CardDescription className="text-orange-100 mt-1">
                Entrez une question d'entretien pour obtenir une réponse structurée avec du storytelling
              </CardDescription>
            </div>
          </div>
          <ToggleGroup
            type="single"
            value={language}
            onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
            className="bg-white/20 backdrop-blur-sm"
          >
            <ToggleGroupItem value="fr" aria-label="Français" className="text-white hover:bg-white/30">
              🇫🇷
            </ToggleGroupItem>
            <ToggleGroupItem value="en" aria-label="English" className="text-white hover:bg-white/30">
              🇬🇧
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <QuestionForm
          question={question}
          setQuestion={setQuestion}
          language={language}
          showAdditionalInfo={showAdditionalInfo}
          setShowAdditionalInfo={setShowAdditionalInfo}
          loadExample={loadExample}
          handleGenerate={handleGenerate}
          generating={generating}
        />
        <AdditionalInfoForm
          language={language}
          showAdditionalInfo={showAdditionalInfo}
          form={additionalInfoForm}
        />
      </CardContent>
    </Card>
    {currentAnswer && (
      <ResponseCard
        question={question}
        answer={currentAnswer}
        wordCount={wordCount}
        language={language}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onClearAnswer={() => setCurrentAnswer(null)}
      />
    )}
    {!currentAnswer && !generating && (
      <InfoPanel language={language} />
    )}
  </>
);
