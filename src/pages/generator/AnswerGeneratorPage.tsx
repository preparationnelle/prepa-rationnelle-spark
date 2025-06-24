
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useForm } from "react-hook-form";
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';

const AnswerGeneratorPage = () => {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const additionalInfoForm = useForm<AdditionalInfo>({
    defaultValues: {
      filiere: '',
      specialite: '',
      ecole: '',
      associatif: '',
      interets: '',
      voyages: '',
      sport: '',
      trait: '',
    }
  });

  const { currentUser } = useAuth();

  const {
    generating,
    wordCount,
    currentAnswer,
    setCurrentAnswer,
    generateAnswer
  } = useGenerateAnswer(currentUser?.id);

  const loadExample = () => {
    setQuestion("Quels sont vos défauts ?");
    additionalInfoForm.setValue('trait', 'Je veux tout gérer moi-même');
    additionalInfoForm.setValue('filiere', 'ECE');
    additionalInfoForm.setValue('ecole', 'HEC');
    additionalInfoForm.setValue('associatif', 'Responsable du pôle finance de l\'association Junior Conseil');
    setShowAdditionalInfo(true);
  };

  const handleGenerate = async () => {
    const additionalInfo = additionalInfoForm.getValues();
    await generateAnswer(question, language, additionalInfo);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          Générateur de Réponses d'Entretien
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté
        </p>
      </div>

      <AnswerAutomation
        question={question}
        setQuestion={setQuestion}
        language={language}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showAdditionalInfo={showAdditionalInfo}
        setShowAdditionalInfo={setShowAdditionalInfo}
        loadExample={loadExample}
        handleGenerate={handleGenerate}
        generating={generating}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        wordCount={wordCount}
        additionalInfoForm={additionalInfoForm}
      />
    </div>
  );
};

export default AnswerGeneratorPage;
