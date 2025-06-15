import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { useProgress } from '@/context/ProgressContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Zap, Languages, Globe, HelpCircle, Dices, TrendingUp } from 'lucide-react';

// Import components
import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { FlashcardReviewer } from '@/components/flashcards/FlashcardReviewer';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';

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
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
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
  
  // Answer generation with streaming
  const { 
    generating, 
    wordCount, 
    streamingContent,
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

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {language === 'fr' ? 'Générateurs IA d\'Entretien' : 'AI Interview Generators'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {language === 'fr' 
            ? 'Préparez vos entretiens avec nos générateurs intelligents : réponses personnalisées, flashcards, langues et géopolitique'
            : 'Prepare your interviews with our smart generators: personalized answers, flashcards, languages and geopolitics'
          }
        </p>
      </div>
      
      <Tabs value={activeGeneratorTab} onValueChange={setActiveGeneratorTab} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-7 mb-8 h-14">
          <TabsTrigger value="answer" className="text-sm py-3">
            <MessageSquare className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Réponse d\'entretien' : 'Interview Answer'}
          </TabsTrigger>
          <TabsTrigger value="flashcards" className="text-sm py-3">
            <Zap className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Flashcards' : 'Flashcards'}
          </TabsTrigger>
          <TabsTrigger value="languages" className="text-sm py-3">
            <Languages className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Langues' : 'Languages'}
          </TabsTrigger>
          <TabsTrigger value="geopolitics" className="text-sm py-3">
            <Globe className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Géopolitique' : 'Geopolitics'}
          </TabsTrigger>
          <TabsTrigger value="case-study" className="text-sm py-3">
            <TrendingUp className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Études de cas' : 'Case Studies'}
          </TabsTrigger>
          <TabsTrigger value="emlyon" className="text-sm py-3">
            <HelpCircle className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Questions EM Lyon' : 'EM Lyon Questions'}
          </TabsTrigger>
          <TabsTrigger value="edhec" className="text-sm py-3">
            <Dices className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Mots EDHEC' : 'EDHEC Words'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="answer">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      {language === 'fr' ? 'Générer une nouvelle réponse' : 'Generate a new answer'}
                    </CardTitle>
                    <CardDescription className="text-orange-100 mt-1">
                      {language === 'fr'
                        ? "Entrez une question d'entretien pour obtenir une réponse structurée avec du storytelling"
                        : "Enter an interview question to get a structured answer with storytelling"}
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
          
          {(currentAnswer || streamingContent || generating) && (
            <ResponseCard
              question={question}
              answer={currentAnswer}
              streamingContent={streamingContent}
              wordCount={wordCount}
              language={language}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onClearAnswer={() => {
                setCurrentAnswer(null);
              }}
              isStreaming={generating}
            />
          )}
          
          {!currentAnswer && !streamingContent && !generating && (
            <InfoPanel language={language} />
          )}
        </TabsContent>

        <TabsContent value="flashcards">
          <Tabs defaultValue="generator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 h-12">
              <TabsTrigger value="generator" className="text-base py-3">
                {language === 'fr' ? 'Créer' : 'Create'}
              </TabsTrigger>
              <TabsTrigger value="review" className="text-base py-3">
                {language === 'fr' ? 'Réviser' : 'Review'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator">
              <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
            </TabsContent>
            
            <TabsContent value="review">
              <FlashcardReviewer language={language} refreshTrigger={refreshTrigger} />
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="languages">
          <LanguageParagraphGenerator language={language} />
        </TabsContent>

        <TabsContent value="geopolitics">
          <GeopoliticsGenerator language={language} />
        </TabsContent>
        
        <TabsContent value="case-study">
          <CaseStudyGenerator language={language} />
        </TabsContent>
        
        <TabsContent value="emlyon">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/30">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Questions d'entretien EM Lyon</div>
                  <div className="text-yellow-100 text-sm font-normal mt-1">
                    Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RandomWordGenerator type="emlyon" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="edhec">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
            <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Dices className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Générateur de mots EDHEC</div>
                  <div className="text-rose-100 text-sm font-normal mt-1">
                    Générateur de mots aléatoires pour votre présentation EDHEC
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RandomWordGenerator type="word" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GeneratorPage;
