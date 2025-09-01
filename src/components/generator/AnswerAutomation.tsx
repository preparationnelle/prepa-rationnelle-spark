
import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { QuestionForm } from '@/components/generator/QuestionForm';
import { ContextualQuestionsForm } from '@/components/generator/ContextualQuestionsForm';
import { ResponseCard } from '@/components/generator/ResponseCard';
import { Answer } from '@/components/generator/ResponseTabs';

interface AnswerAutomationProps {
  question: string;
  setQuestion: (q: string) => void;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  generating: boolean;
  generatingQuestions: boolean;
  currentAnswer: Answer | null;
  setCurrentAnswer: (s: Answer | null) => void;
  wordCount: number;
  contextualQuestions: string[];
  showContextualQuestions: boolean;
  onGenerateQuestions: () => void;
  onGenerateAnswer: (answers: string[]) => void;
  onResetFlow: () => void;
}

export const AnswerAutomation: React.FC<AnswerAutomationProps> = ({
  question,
  setQuestion,
  language,
  setLanguage,
  activeTab,
  setActiveTab,
  generating,
  generatingQuestions,
  currentAnswer,
  setCurrentAnswer,
  wordCount,
  contextualQuestions,
  showContextualQuestions,
  onGenerateQuestions,
  onGenerateAnswer,
  onResetFlow,
}) => (
  <>
    <Card className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#5B3FFF] to-[#FF6B9D] text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                Générer une nouvelle réponse
              </CardTitle>
              <CardDescription className="text-white/90 mt-1">
                {!showContextualQuestions 
                  ? "Entrez une question d'entretien pour commencer" 
                  : "Répondez aux questions pour personnaliser votre réponse"}
              </CardDescription>
            </div>
          </div>
          <ToggleGroup
            type="single"
            value={language}
            onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
            className="bg-white/20 backdrop-blur-sm rounded-lg"
          >
            <ToggleGroupItem value="fr" aria-label="Français" className="text-white hover:bg-white/30 rounded-l-lg">
              🇫🇷
            </ToggleGroupItem>
            <ToggleGroupItem value="en" aria-label="English" className="text-white hover:bg-white/30 rounded-r-lg">
              🇬🇧
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {!showContextualQuestions ? (
          <QuestionForm
            question={question}
            setQuestion={setQuestion}
            language={language}
            showAdditionalInfo={false}
            setShowAdditionalInfo={() => {}}
            loadExample={() => {
              setQuestion("Quels sont vos défauts ?");
            }}
            handleGenerate={onGenerateQuestions}
            generating={generatingQuestions}
          />
        ) : (
          <ContextualQuestionsForm
            questions={contextualQuestions}
            onAnswersSubmit={onGenerateAnswer}
            onBack={onResetFlow}
            language={language}
            loading={generating}
          />
        )}
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
        onClearAnswer={() => {
          setCurrentAnswer(null);
          onResetFlow();
        }}
      />
    )}
  </>
);
