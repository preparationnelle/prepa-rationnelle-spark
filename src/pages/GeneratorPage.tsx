import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Copy, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useProgress } from '@/context/ProgressContext';

// Define the answer type structure
type Answer = {
  angleKey: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  valueLink: string;
  deliveryTip: string;
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
  const { currentUser } = useAuth();
  const { toast } = useToast();

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
      // Call the Supabase Edge Function to generate the answer
      const { data, error } = await supabase.functions.invoke('generate-interview-answer', {
        body: {
          question: question,
          language: language
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
    
    let text = `${language === 'fr' ? 'ANGLE CLÉ' : 'KEY ANGLE'}:\n${currentAnswer.angleKey}\n\n`;
    text += `${language === 'fr' ? 'STAR' : 'STAR'}:\n`;
    text += `${language === 'fr' ? '• Situation: ' : '• Situation: '}${currentAnswer.star.situation}\n`;
    text += `${language === 'fr' ? '• Tâche: ' : '• Task: '}${currentAnswer.star.task}\n`;
    text += `${language === 'fr' ? '• Action: ' : '• Action: '}${currentAnswer.star.action}\n`;
    text += `${language === 'fr' ? '• Résultat: ' : '• Result: '}${currentAnswer.star.result}\n\n`;
    text += `${language === 'fr' ? 'LIEN VALEUR AJOUTÉE' : 'VALUE-ADDED LINK'}:\n${currentAnswer.valueLink}\n\n`;
    text += `${language === 'fr' ? 'CONSEIL DE PRÉSENTATION' : 'DELIVERY TIP'}:\n${currentAnswer.deliveryTip}`;
    
    navigator.clipboard.writeText(text);
    
    toast({
      title: language === 'fr' ? "Copié !" : "Copied!",
      description: language === 'fr' 
        ? "La réponse a été copiée dans le presse-papiers." 
        : "The answer has been copied to clipboard."
    });
  };

  const getPlaceholder = () => {
    return language === 'fr'
      ? "Ex: Quels sont vos trois défauts ?"
      : "Ex: What are your three weaknesses?";
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
                  ? "Entrez une question d'entretien pour obtenir une réponse structurée selon la méthode STAR"
                  : "Enter an interview question to get a structured answer using the STAR method"}
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder={getPlaceholder()}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleGenerate} disabled={generating || !question.trim()}>
              {generating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                </>
              ) : language === 'fr' ? "Générer une réponse" : "Generate an answer"}
            </Button>
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
                      ? 'Réponse structurée selon la méthode STAR'
                      : 'Structured answer using the STAR method'}
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
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {language === 'fr' ? 'ANGLE CLÉ' : 'KEY ANGLE'}
                </h3>
                <p className="text-gray-700 font-medium">{currentAnswer.angleKey}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {language === 'fr' ? 'STAR (Situation, Tâche, Action, Résultat)' : 'STAR (Situation, Task, Action, Result)'}
                </h3>
                <div className="space-y-3 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Situation' : 'Situation'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.star.situation}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Tâche' : 'Task'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.star.task}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Action' : 'Action'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.star.action}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {language === 'fr' ? 'Résultat' : 'Result'}
                    </h4>
                    <p className="text-gray-700">{currentAnswer.star.result}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {language === 'fr' ? 'LIEN VALEUR AJOUTÉE' : 'VALUE-ADDED LINK'}
                </h3>
                <p className="text-gray-700">{currentAnswer.valueLink}</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold mb-2 text-amber-700">
                  {language === 'fr' ? 'CONSEIL DE PRÉSENTATION' : 'DELIVERY TIP'}
                </h3>
                <p className="text-amber-700 italic">{currentAnswer.deliveryTip}</p>
              </div>
            </div>
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
                    ? "Notre système génère une réponse structurée selon la méthode STAR (Situation, Tâche, Action, Résultat)"
                    : "Our system generates a structured answer using the STAR method (Situation, Task, Action, Result)"}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
                <span>
                  {language === 'fr'
                    ? "Utilisez cette réponse comme base pour développer votre propre réponse personnalisée"
                    : "Use this answer as a foundation to develop your own personalized response"}
                </span>
              </li>
            </ol>
            <p className="text-sm text-gray-600 italic">
              {language === 'fr'
                ? "Note: La réponse générée est un point de départ. Pour exceller aux entretiens, personnalisez-la avec vos propres expériences et votre personnalité."
                : "Note: The generated answer is a starting point. To excel in interviews, personalize it with your own experiences and personality."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
