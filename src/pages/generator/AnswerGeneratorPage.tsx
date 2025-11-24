
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from "@/context/ProgressContext";

const AnswerGeneratorPage = () => {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');

  const { currentUser } = useAuth();

  const {
    generating,
    generatingQuestions,
    wordCount,
    currentAnswer,
    contextualQuestions,
    showContextualQuestions,
    setCurrentAnswer,
    generateContextualQuestions,
    generateAnswer,
    resetFlow
  } = useGenerateAnswer(currentUser?.id);

  const handleGenerateQuestions = async () => {
    await generateContextualQuestions(question, language);
  };

  const handleGenerateAnswer = async (contextualAnswers: string[]) => {
    await generateAnswer(question, language, contextualAnswers);
  };

  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4">
          Réponse d'entretien
        </h1>
        <p className="text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto">
          Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec des questions contextuelles adaptées.
        </p>
      </div>

      <AnswerAutomation
        question={question}
        setQuestion={setQuestion}
        language={language}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        generating={generating}
        generatingQuestions={generatingQuestions}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        wordCount={wordCount}
        contextualQuestions={contextualQuestions}
        showContextualQuestions={showContextualQuestions}
        onGenerateQuestions={handleGenerateQuestions}
        onGenerateAnswer={handleGenerateAnswer}
        onResetFlow={resetFlow}
      />
    </div>
  );
};

export default AnswerGeneratorPage;
