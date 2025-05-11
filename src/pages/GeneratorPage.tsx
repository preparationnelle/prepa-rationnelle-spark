
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { useProgress } from '@/context/ProgressContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Import components
import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';

// Import hooks
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';

const GeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  // Track page visit
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  // State
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  
  // Form for additional information
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
  
  // Auth context
  const { currentUser } = useAuth();
  
  // Answer generation
  const { 
    generating, 
    wordCount, 
    currentAnswer, 
    setCurrentAnswer,
    generateAnswer 
  } = useGenerateAnswer(currentUser?.id);

  // Example
  const loadExample = () => {
    setQuestion("Quels sont vos défauts ?");
    additionalInfoForm.setValue('trait', 'Je veux tout gérer moi-même');
    additionalInfoForm.setValue('filiere', 'ECE');
    additionalInfoForm.setValue('ecole', 'HEC');
    additionalInfoForm.setValue('associatif', 'Responsable du pôle finance de l\'association Junior Conseil');
    setShowAdditionalInfo(true);
  };

  // Handle answer generation
  const handleGenerate = async () => {
    const additionalInfo = additionalInfoForm.getValues();
    await generateAnswer(question, language, additionalInfo);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">
        {language === 'fr' ? 'Générateur de réponses d\'entretien' : 'Interview Answer Generator'}
      </h1>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>
                {language === 'fr' ? 'Générer une nouvelle réponse' : 'Generate a new answer'}
              </CardTitle>
              <CardDescription>
                {language === 'fr'
                  ? "Entrez une question d'entretien pour obtenir une réponse structurée avec du storytelling"
                  : "Enter an interview question to get a structured answer with storytelling"}
              </CardDescription>
            </div>
            <ToggleGroup 
              type="single" 
              value={language} 
              onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
            >
              <ToggleGroupItem value="fr" aria-label="Français">
                🇫🇷
              </ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English">
                🇬🇧
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        <CardContent>
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
    </div>
  );
};

export default GeneratorPage;
