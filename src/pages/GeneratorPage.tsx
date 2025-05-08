
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Copy, Loader2, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useProgress } from '@/context/ProgressContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

// Define the answer type structure
type Answer = {
  response: {
    introduction: string;
    mainIdea: string;
    example: string;
    benefit: string;
    conclusion: string;
  };
  analysis: {
    strength: string;
    improvement: string;
    alignment: string;
    relevance: string;
    clarity: string;
  };
  exercise: string;
  similarQuestions: string[];
};

// Type pour les infos supplémentaires du candidat
type AdditionalInfo = {
  filiere?: string;
  specialite?: string;
  ecole?: string;
  associatif?: string;
  interets?: string;
  voyages?: string;
  sport?: string;
  trait?: string;
};

// Word count indicator component
const WordCountIndicator = ({ count, target = 250, tolerance = 0.1 }) => {
  const min = target * (1 - tolerance);
  const max = target * (1 + tolerance);
  const isWithinRange = count >= min && count <= max;
  const isUnder = count < min;
  
  let colorClass = "text-amber-600";
  if (isWithinRange) colorClass = "text-green-600";
  else if (count > max) colorClass = "text-red-600";
  
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className={colorClass}>{count} mots</span>
      <div className="bg-gray-200 h-2 w-24 rounded-full overflow-hidden">
        <div 
          className={`h-full ${isWithinRange ? 'bg-green-500' : isUnder ? 'bg-amber-500' : 'bg-red-500'}`}
          style={{ width: `${Math.min(count / max * 100, 100)}%` }}
        />
      </div>
      <span className="text-gray-500">{min.toFixed(0)}-{max.toFixed(0)}</span>
    </div>
  );
};

const GeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page et marquer comme activité de type generator
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  const [question, setQuestion] = useState('');
  const [generating, setGenerating] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const { currentUser } = useAuth();
  const { toast } = useToast();
  
  // Form pour les informations supplémentaires
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

  // Exemple préconfiguré
  const loadExample = () => {
    setQuestion("Quels sont vos défauts ?");
    additionalInfoForm.setValue('trait', 'Je veux tout gérer moi-même');
    additionalInfoForm.setValue('filiere', 'ECE');
    additionalInfoForm.setValue('ecole', 'HEC');
    additionalInfoForm.setValue('associatif', 'Responsable du pôle finance de l\'association Junior Conseil');
    setShowAdditionalInfo(true);
  };

  const handleGenerate = async () => {
    if (!question.trim()) {
      toast({
        title: language === 'fr' ? "Question requise" : "Question required",
        description: language === 'fr' 
          ? "Veuillez entrer une question d'entretien pour générer une réponse." 
          : "Please enter an interview question to generate an answer.",
        variant: "destructive"
      });
      return;
    }

    setGenerating(true);
    
    try {
      // Récupérer les données du formulaire d'infos supplémentaires
      const additionalInfo = additionalInfoForm.getValues();
      
      // Call the Supabase Edge Function to generate the answer
      const { data, error } = await supabase.functions.invoke('generate-interview-answer', {
        body: {
          question: question,
          language: language,
          additionalInfo: additionalInfo
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setCurrentAnswer(data.answer);
      setWordCount(data.wordCount || 0);
      
      // Save the generated answer to Supabase
      if (currentUser) {
        const { error: saveError } = await supabase.from('submissions').insert({
          user_id: currentUser.id,
          title: question,
          texte: JSON.stringify(data.answer),
          date: new Date().toISOString(),
          status: "generated"
        });

        if (saveError) {
          console.error("Error saving answer:", saveError);
          toast({
            title: language === 'fr' ? "Erreur" : "Error",
            description: language === 'fr' 
              ? "Une erreur est survenue lors de la sauvegarde de la réponse: " + saveError.message 
              : "An error occurred while saving the answer: " + saveError.message,
            variant: "destructive"
          });
        }
      }
      
    } catch (error) {
      console.error("Error generating answer:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur est survenue lors de la génération de la réponse: " + (error as Error).message 
          : "An error occurred while generating the answer: " + (error as Error).message,
        variant: "destructive"
      });
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!currentAnswer) return;
    
    let text = "";
    
    if (activeTab === 'response') {
      text = `${language === 'fr' ? 'INTRODUCTION' : 'INTRODUCTION'}:\n${currentAnswer.response.introduction}\n\n`;
      text += `${language === 'fr' ? 'IDÉE PRINCIPALE' : 'MAIN IDEA'}:\n${currentAnswer.response.mainIdea}\n\n`;
      text += `${language === 'fr' ? 'EXEMPLE' : 'EXAMPLE'}:\n${currentAnswer.response.example}\n\n`;
      text += `${language === 'fr' ? 'BÉNÉFICE' : 'BENEFIT'}:\n${currentAnswer.response.benefit}\n\n`;
      text += `${language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}:\n${currentAnswer.response.conclusion}`;
    } else if (activeTab === 'analysis') {
      text = `${language === 'fr' ? 'ANALYSE CRITIQUE' : 'CRITICAL ANALYSIS'}:\n\n`;
      text += `${language === 'fr' ? '• Force principale: ' : '• Main strength: '}${currentAnswer.analysis.strength}\n\n`;
      text += `${language === 'fr' ? '• Point à améliorer: ' : '• Point to improve: '}${currentAnswer.analysis.improvement}\n\n`;
      text += `${language === 'fr' ? '• Alignement avec les valeurs de l\'école: ' : '• Alignment with school values: '}${currentAnswer.analysis.alignment}\n\n`;
      text += `${language === 'fr' ? '• Pertinence de l\'exemple: ' : '• Relevance of the example: '}${currentAnswer.analysis.relevance}\n\n`;
      text += `${language === 'fr' ? '• Clarté et impact à l\'oral: ' : '• Clarity and oral impact: '}${currentAnswer.analysis.clarity}`;
    } else if (activeTab === 'exercise') {
      text = `${language === 'fr' ? 'EXERCICE D\'ENTRAÎNEMENT' : 'TRAINING EXERCISE'}:\n\n${currentAnswer.exercise}`;
    } else if (activeTab === 'similarQuestions') {
      text = `${language === 'fr' ? 'QUESTIONS SIMILAIRES' : 'SIMILAR QUESTIONS'}:\n\n`;
      currentAnswer.similarQuestions.forEach((q, i) => {
        text += `${i + 1}. ${q}\n`;
      });
    }
    
    navigator.clipboard.writeText(text);
    
    toast({
      title: language === 'fr' ? "Copié !" : "Copied!",
      description: language === 'fr' 
        ? "La section a été copiée dans le presse-papiers." 
        : "The section has been copied to clipboard."
    });
  };

  const getPlaceholder = () => {
    return language === 'fr'
      ? "Ex: Quels sont vos trois défauts ?"
      : "Ex: What are your three weaknesses?";
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
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
            <ToggleGroup type="single" value={language} onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}>
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder={getPlaceholder()}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" onClick={loadExample} className="whitespace-nowrap">
                Voir un exemple
              </Button>
            </div>
            
            <div className="flex justify-between items-center">
              <Button 
                variant="ghost" 
                onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                className="flex items-center gap-2"
              >
                <Info className="h-4 w-4" />
                {language === 'fr' ? 'Informations supplémentaires' : 'Additional information'}
                {showAdditionalInfo ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              
              <Button onClick={handleGenerate} disabled={generating || !question.trim()}>
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                  </>
                ) : language === 'fr' ? "Générer une réponse" : "Generate an answer"}
              </Button>
            </div>
            
            {showAdditionalInfo && (
              <Card className="mt-4 p-4 bg-accent/30">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-lg">
                    {language === 'fr' 
                      ? 'Personnalisez votre réponse' 
                      : 'Personalize your answer'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'fr'
                      ? 'Ces informations seront utilisées pour personnaliser votre réponse'
                      : 'This information will be used to personalize your answer'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Form {...additionalInfoForm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={additionalInfoForm.control}
                        name="filiere"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Filière' : 'Track'}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="ECE, ECT, ECG..." {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="specialite"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Spécialité' : 'Specialization'}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Maths, ESH, Géopolitique..." {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="ecole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'École visée' : 'Target school'}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="HEC, ESSEC, ESCP..." {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="trait"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Trait de personnalité principal' : 'Main personality trait'}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={language === 'fr' 
                                  ? "Ex: Je veux tout gérer moi-même" 
                                  : "Ex: I want to manage everything myself"} 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="associatif"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>
                              {language === 'fr' ? 'Activités associatives' : 'Extracurricular activities'}
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={language === 'fr' 
                                  ? "Association, responsabilités, projets..." 
                                  : "Associations, responsibilities, projects..."} 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="interets"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Centres d\'intérêt' : 'Interests'}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={language === 'fr' 
                                  ? "Lecture, musique, théâtre..." 
                                  : "Reading, music, theater..."} 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="voyages"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Voyages / Expériences interculturelles' : 'Travel / Intercultural experiences'}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={language === 'fr' 
                                  ? "Pays visités, échanges..." 
                                  : "Countries visited, exchanges..."} 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={additionalInfoForm.control}
                        name="sport"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {language === 'fr' ? 'Sports pratiqués' : 'Sports'}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={language === 'fr' 
                                  ? "Niveau, compétition, équipe..." 
                                  : "Level, competition, team..."} 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
      
      {currentAnswer && (
        <Card className="bg-white">
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold">{question}</CardTitle>
                <CardDescription className="flex justify-between mt-1">
                  <span>
                    {language === 'fr'
                      ? 'Réponse complète avec analyse et conseils'
                      : 'Complete answer with analysis and advice'}
                  </span>
                  <WordCountIndicator count={wordCount} target={250} tolerance={0.2} />
                </CardDescription>
              </div>
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="response">
                  {language === 'fr' ? 'Réponse' : 'Response'}
                </TabsTrigger>
                <TabsTrigger value="analysis">
                  {language === 'fr' ? 'Analyse' : 'Analysis'}
                </TabsTrigger>
                <TabsTrigger value="exercise">
                  {language === 'fr' ? 'Exercice' : 'Exercise'}
                </TabsTrigger>
                <TabsTrigger value="similarQuestions">
                  {language === 'fr' ? 'Questions similaires' : 'Similar Questions'}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="response" className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'INTRODUCTION' : 'INTRODUCTION'}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentAnswer.response.introduction.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'IDÉE PRINCIPALE' : 'MAIN IDEA'}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentAnswer.response.mainIdea.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'EXEMPLE' : 'EXAMPLE'}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentAnswer.response.example.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'BÉNÉFICE' : 'BENEFIT'}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentAnswer.response.benefit.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentAnswer.response.conclusion.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="analysis" className="space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Force principale' : 'Main strength'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.analysis.strength}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Point à améliorer' : 'Point to improve'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.analysis.improvement}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Alignement avec les valeurs de l\'école' : 'Alignment with school values'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.analysis.alignment}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Pertinence de l\'exemple' : 'Relevance of the example'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.analysis.relevance}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Clarté et impact à l\'oral' : 'Clarity and oral impact'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.analysis.clarity}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="exercise" className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="font-semibold mb-4 text-amber-700">
                  {language === 'fr' ? 'EXERCICE D\'ENTRAÎNEMENT' : 'TRAINING EXERCISE'}
                </h3>
                <p className="text-amber-700">{currentAnswer.exercise}</p>
              </TabsContent>
              
              <TabsContent value="similarQuestions" className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-4 text-blue-700">
                  {language === 'fr' ? 'QUESTIONS SIMILAIRES À PRÉPARER' : 'SIMILAR QUESTIONS TO PREPARE'}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {currentAnswer.similarQuestions.map((question, index) => (
                    <li key={index} className="text-blue-700">
                      {question}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button variant="outline" onClick={() => setCurrentAnswer(null)}>
              {language === 'fr' ? 'Générer une autre réponse' : 'Generate another answer'}
            </Button>
            <Button asChild>
              <Link to="/questions">
                {language === 'fr' ? 'Voir nos questions d\'entretien' : 'See our interview questions'}{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {!currentAnswer && !generating && (
        <div className="text-center py-12">
          <div className="bg-accent rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Comment ça marche ?' : 'How does it work?'}
            </h2>
            <ol className="text-left space-y-4 mb-6">
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">1</span>
                <span>
                  {language === 'fr'
                    ? "Entrez une question d'entretien classique comme \"Parlez-moi de vous\" ou \"Quels sont vos défauts ?\""
                    : "Enter a classic interview question like \"Tell me about yourself\" or \"What are your weaknesses?\""}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">2</span>
                <span>
                  {language === 'fr'
                    ? "Ajoutez des informations sur votre profil pour personnaliser davantage votre réponse"
                    : "Add information about your profile to personalize your answer further"}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
                <span>
                  {language === 'fr'
                    ? "Notre système génère une réponse structurée avec storytelling, analyse critique et conseils d'entraînement"
                    : "Our system generates a structured answer with storytelling, critical analysis and training advice"}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">4</span>
                <span>
                  {language === 'fr'
                    ? "Utilisez cette réponse comme base pour développer votre propre réponse personnalisée"
                    : "Use this answer as a foundation to develop your own personalized response"}
                </span>
              </li>
            </ol>
            <p className="text-sm text-gray-600 italic">
              {language === 'fr'
                ? "Note: Toutes les anecdotes de storytelling seront mises en italique pour faciliter leur identification."
                : "Note: All storytelling anecdotes will be in italics for easy identification."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
