
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';

import { useForm } from "react-hook-form";
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from "@/context/ProgressContext";
import { Answer } from '@/components/generator/ResponseTabs';

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

  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          Réponse d'entretien
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r max-w-4xl mx-auto mb-8">
          <p className="text-sm text-blue-800 font-medium mb-2">💡 Comment l'utiliser :</p>
          <p className="text-sm text-blue-700">
            Saisissez votre question d'entretien, remplissez vos informations personnelles (filière, école visée, expériences), et l'IA génère une réponse structurée avec des exemples concrets tirés de votre profil.
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default AnswerGeneratorPage;
