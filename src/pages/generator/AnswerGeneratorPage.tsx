import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Home, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from '@/context/ProgressContext';

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
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Réponse d'entretien</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Oraux</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Mic className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Réponse <em className="font-lora italic text-carnet-red">d'entretien</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Génère des réponses <span className="carnet-hl font-lora italic">structurées et personnalisées</span> pour tes entretiens de personnalité, avec questions contextuelles adaptées.
          </p>
        </header>

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
