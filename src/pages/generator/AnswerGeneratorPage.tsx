import React, { useEffect, useState } from 'react';
import { Mic } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from '@/context/ProgressContext';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

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
    resetFlow,
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
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Oraux"
            badgeIcon={Mic}
            title="Réponse"
            highlight="d'entretien"
            subtitle="Génère des réponses structurées et personnalisées pour tes entretiens de personnalité avec questions contextuelles adaptées."
            breadcrumb="Réponse d'entretien"
          />
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
    </div>
  );
};

export default AnswerGeneratorPage;
