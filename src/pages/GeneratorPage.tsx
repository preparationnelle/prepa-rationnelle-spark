
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Copy, Loader2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Define the plan type structure
type Plan = {
  title: string;
  introduction: string;
  parts: {
    title: string;
    subparts: string[];
  }[];
  conclusion: string;
};

// Word count indicator component
const WordCountIndicator = ({ count, target = 500, tolerance = 0.1 }) => {
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
  const [topic, setTopic] = useState('');
  const [generating, setGenerating] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<Plan | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: language === 'fr' ? "Sujet requis" : "Topic required",
        description: language === 'fr' 
          ? "Veuillez entrer un sujet pour générer un plan." 
          : "Please enter a topic to generate a plan.",
        variant: "destructive"
      });
      return;
    }

    setGenerating(true);
    
    try {
      // Call the Supabase Edge Function to generate the plan
      const { data, error } = await supabase.functions.invoke('generate-plan', {
        body: {
          topic: topic,
          wordLimit: 500, // Target word count for the plan
          language: language
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setCurrentPlan(data.plan);
      setWordCount(data.wordCount || 0);
      
      // Save the generated plan to Supabase
      if (currentUser) {
        const { error: saveError } = await supabase.from('submissions').insert({
          user_id: currentUser.id,
          title: data.plan.title,
          texte: JSON.stringify(data.plan),
          date: new Date().toISOString(),
          status: "generated"
        });

        if (saveError) {
          console.error("Error saving plan:", saveError);
          toast({
            title: language === 'fr' ? "Erreur" : "Error",
            description: language === 'fr' 
              ? "Une erreur est survenue lors de la sauvegarde du plan: " + saveError.message 
              : "An error occurred while saving the plan: " + saveError.message,
            variant: "destructive"
          });
        }
      }
      
    } catch (error) {
      console.error("Error generating plan:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur est survenue lors de la génération du plan: " + (error as Error).message 
          : "An error occurred while generating the plan: " + (error as Error).message,
        variant: "destructive"
      });
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!currentPlan) return;
    
    let text = `${currentPlan.title}\n\n${language === 'fr' ? 'INTRODUCTION' : 'INTRODUCTION'}:\n${currentPlan.introduction}\n\n`;
    
    currentPlan.parts.forEach((part, index) => {
      text += `${part.title}\n`;
      part.subparts.forEach(subpart => {
        text += `${subpart}\n`;
      });
      text += '\n';
    });
    
    text += `${language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}:\n${currentPlan.conclusion}`;
    
    navigator.clipboard.writeText(text);
    
    toast({
      title: language === 'fr' ? "Copié !" : "Copied!",
      description: language === 'fr' 
        ? "Le plan a été copié dans le presse-papiers." 
        : "The plan has been copied to clipboard."
    });
  };

  const getPlaceholder = () => {
    return language === 'fr'
      ? "Ex: L'intelligence artificielle représente-t-elle une menace pour l'humanité ?"
      : "Ex: Does artificial intelligence represent a threat to humanity?";
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">
        {language === 'fr' ? 'Générateur de plan' : 'Plan Generator'}
      </h1>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>
                {language === 'fr' ? 'Générer un nouveau plan' : 'Generate a new plan'}
              </CardTitle>
              <CardDescription>
                {language === 'fr'
                  ? "Entrez un sujet de géopolitique ou d'actualité pour obtenir un plan structuré"
                  : "Enter a geopolitics or current affairs topic to get a structured outline"}
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
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleGenerate} disabled={generating || !topic.trim()}>
              {generating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                </>
              ) : language === 'fr' ? "Générer un plan" : "Generate a plan"}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {currentPlan && (
        <Card className="bg-white">
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold">{currentPlan.title}</CardTitle>
                <CardDescription className="flex justify-between mt-1">
                  <span>
                    {language === 'fr'
                      ? 'Plan structuré généré par IA'
                      : 'AI-generated structured outline'}
                  </span>
                  <WordCountIndicator count={wordCount} target={500} tolerance={0.1} />
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
                <h3 className="font-semibold mb-2">{language === 'fr' ? 'INTRODUCTION' : 'INTRODUCTION'}</h3>
                <p className="text-gray-700">{currentPlan.introduction}</p>
              </div>
              
              {currentPlan.parts.map((part, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{part.title}</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    {part.subparts.map((subpart, subIndex) => (
                      <li key={subIndex} className="text-gray-700">{subpart}</li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div>
                <h3 className="font-semibold mb-2">{language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}</h3>
                <p className="text-gray-700">{currentPlan.conclusion}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button variant="outline" onClick={() => setCurrentPlan(null)}>
              {language === 'fr' ? 'Générer un autre plan' : 'Generate another plan'}
            </Button>
            <Button asChild>
              <Link to="/submission">
                {language === 'fr' ? 'Soumettre un essai' : 'Submit an essay'}{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {!currentPlan && !generating && (
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
                    ? "Entrez un sujet de géopolitique, d'économie ou d'actualité sous forme de question ou d'affirmation"
                    : "Enter a topic on geopolitics, economics, or current affairs as a question or statement"}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">2</span>
                <span>
                  {language === 'fr'
                    ? "Notre système génère un plan détaillé avec introduction, parties structurées et conclusion"
                    : "Our system generates a detailed plan with introduction, structured parts, and conclusion"}
                </span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
                <span>
                  {language === 'fr'
                    ? "Utilisez ce plan comme base pour développer votre propre réflexion et argumentation"
                    : "Use this plan as a foundation to develop your own thinking and argumentation"}
                </span>
              </li>
            </ol>
            <p className="text-sm text-gray-600 italic">
              {language === 'fr'
                ? "Note: Le plan généré est un point de départ. Pour exceller aux entretiens, personnalisez-le avec vos connaissances et votre analyse."
                : "Note: The generated plan is a starting point. To excel in interviews, personalize it with your knowledge and analysis."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
