
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { useProgress } from '@/context/ProgressContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import components
import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { FlashcardReviewer } from '@/components/flashcards/FlashcardReviewer';

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
  const [activeGeneratorTab, setActiveGeneratorTab] = useState('answer');
  
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
        {language === 'fr' ? 'Générateurs d\'entretien' : 'Interview Generators'}
      </h1>
      
      <Tabs value={activeGeneratorTab} onValueChange={setActiveGeneratorTab} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="answer">
            {language === 'fr' ? 'Réponse d\'entretien' : 'Interview Answer'}
          </TabsTrigger>
          <TabsTrigger value="flashcards">
            {language === 'fr' ? 'Flashcards' : 'Flashcards'}
          </TabsTrigger>
          <TabsTrigger value="emlyon">
            {language === 'fr' ? 'Questions EM Lyon' : 'EM Lyon Questions'}
          </TabsTrigger>
          <TabsTrigger value="edhec">
            {language === 'fr' ? 'Mots EDHEC' : 'EDHEC Words'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="answer">
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
        </TabsContent>

        <TabsContent value="flashcards">
          <Tabs defaultValue="generator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="generator">
                {language === 'fr' ? 'Créer' : 'Create'}
              </TabsTrigger>
              <TabsTrigger value="review">
                {language === 'fr' ? 'Réviser' : 'Review'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator">
              <FlashcardGenerator language={language} />
            </TabsContent>
            
            <TabsContent value="review">
              <FlashcardReviewer language={language} />
            </TabsContent>
          </Tabs>
        </TabsContent>
        
        <TabsContent value="emlyon">
          <Card>
            <CardHeader>
              <CardTitle>Questions d'entretien EM Lyon</CardTitle>
              <CardDescription>
                Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RandomWordGenerator type="emlyon" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="edhec">
          <Card>
            <CardHeader>
              <CardTitle>Générateur de mots EDHEC</CardTitle>
              <CardDescription>
                Générateur de mots aléatoires pour votre présentation EDHEC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RandomWordGenerator type="word" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GeneratorPage;
