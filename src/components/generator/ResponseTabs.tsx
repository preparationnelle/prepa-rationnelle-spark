
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Define the answer type structure
export type Answer = {
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

type ResponseTabsProps = {
  answer: Answer | null;
  activeTab: string;
  language: 'fr' | 'en';
  onTabChange: (value: string) => void;
};

export const ResponseTabs = ({ answer, activeTab, language, onTabChange }: ResponseTabsProps) => {
  const { toast } = useToast();
  
  if (!answer) return null;

  const copyToClipboard = () => {
    if (!answer) return;
    
    let text = "";
    
    if (activeTab === 'response') {
      text = `${language === 'fr' ? 'INTRODUCTION' : 'INTRODUCTION'}:\n${answer.response.introduction}\n\n`;
      text += `${language === 'fr' ? 'IDÉE PRINCIPALE' : 'MAIN IDEA'}:\n${answer.response.mainIdea}\n\n`;
      text += `${language === 'fr' ? 'EXEMPLE' : 'EXAMPLE'}:\n${answer.response.example}\n\n`;
      text += `${language === 'fr' ? 'BÉNÉFICE' : 'BENEFIT'}:\n${answer.response.benefit}\n\n`;
      text += `${language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}:\n${answer.response.conclusion}`;
    } else if (activeTab === 'analysis') {
      text = `${language === 'fr' ? 'ANALYSE CRITIQUE' : 'CRITICAL ANALYSIS'}:\n\n`;
      text += `${language === 'fr' ? '• Force principale: ' : '• Main strength: '}${answer.analysis.strength}\n\n`;
      text += `${language === 'fr' ? '• Point à améliorer: ' : '• Point to improve: '}${answer.analysis.improvement}\n\n`;
      text += `${language === 'fr' ? '• Alignement avec les valeurs de l\'école: ' : '• Alignment with school values: '}${answer.analysis.alignment}\n\n`;
      text += `${language === 'fr' ? '• Pertinence de l\'exemple: ' : '• Relevance of the example: '}${answer.analysis.relevance}\n\n`;
      text += `${language === 'fr' ? '• Clarté et impact à l\'oral: ' : '• Clarity and oral impact: '}${answer.analysis.clarity}`;
    } else if (activeTab === 'exercise') {
      text = `${language === 'fr' ? 'EXERCICE D\'ENTRAÎNEMENT' : 'TRAINING EXERCISE'}:\n\n${answer.exercise}`;
    } else if (activeTab === 'similarQuestions') {
      text = `${language === 'fr' ? 'QUESTIONS SIMILAIRES' : 'SIMILAR QUESTIONS'}:\n\n`;
      answer.similarQuestions.forEach((q, i) => {
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
  
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
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
            className="text-carnet-ink"
            dangerouslySetInnerHTML={{ __html: answer.response.introduction.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 text-primary">
            {language === 'fr' ? 'IDÉE PRINCIPALE' : 'MAIN IDEA'}
          </h3>
          <div 
            className="text-carnet-ink"
            dangerouslySetInnerHTML={{ __html: answer.response.mainIdea.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 text-primary">
            {language === 'fr' ? 'EXEMPLE' : 'EXAMPLE'}
          </h3>
          <div 
            className="text-carnet-ink"
            dangerouslySetInnerHTML={{ __html: answer.response.example.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 text-primary">
            {language === 'fr' ? 'BÉNÉFICE' : 'BENEFIT'}
          </h3>
          <div 
            className="text-carnet-ink"
            dangerouslySetInnerHTML={{ __html: answer.response.benefit.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 text-primary">
            {language === 'fr' ? 'CONCLUSION' : 'CONCLUSION'}
          </h3>
          <div 
            className="text-carnet-ink"
            dangerouslySetInnerHTML={{ __html: answer.response.conclusion.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="analysis" className="space-y-6">
        <div className="space-y-4 pl-4 border-l-2 border-primary/30">
          <div>
            <h4 className="font-medium text-carnet-ink">
              {language === 'fr' ? 'Force principale' : 'Main strength'}
            </h4>
            <p className="text-carnet-ink">{answer.analysis.strength}</p>
          </div>
          <div>
            <h4 className="font-medium text-carnet-ink">
              {language === 'fr' ? 'Point à améliorer' : 'Point to improve'}
            </h4>
            <p className="text-carnet-ink">{answer.analysis.improvement}</p>
          </div>
          <div>
            <h4 className="font-medium text-carnet-ink">
              {language === 'fr' ? 'Alignement avec les valeurs de l\'école' : 'Alignment with school values'}
            </h4>
            <p className="text-carnet-ink">{answer.analysis.alignment}</p>
          </div>
          <div>
            <h4 className="font-medium text-carnet-ink">
              {language === 'fr' ? 'Pertinence de l\'exemple' : 'Relevance of the example'}
            </h4>
            <p className="text-carnet-ink">{answer.analysis.relevance}</p>
          </div>
          <div>
            <h4 className="font-medium text-carnet-ink">
              {language === 'fr' ? 'Clarté et impact à l\'oral' : 'Clarity and oral impact'}
            </h4>
            <p className="text-carnet-ink">{answer.analysis.clarity}</p>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="exercise" className="bg-pr-gray-bg p-6 rounded-xl border border-pr-black/20">
        <h3 className="font-semibold mb-4 text-pr-black uppercase tracking-[0.06em] font-dm-sans">
          {language === 'fr' ? "Exercice d'entraînement" : 'Training exercise'}
        </h3>
        <p className="text-pr-gray-dark font-dm-sans leading-relaxed">{answer.exercise}</p>
      </TabsContent>

      <TabsContent value="similarQuestions" className="bg-pr-gray-bg p-6 rounded-xl border border-pr-gray-light">
        <h3 className="font-semibold mb-4 text-pr-black uppercase tracking-[0.06em] font-dm-sans">
          {language === 'fr' ? 'Questions similaires à préparer' : 'Similar questions to prepare'}
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {answer.similarQuestions.map((question, index) => (
            <li key={index} className="text-pr-gray-dark font-dm-sans leading-relaxed">
              {question}
            </li>
          ))}
        </ul>
      </TabsContent>
      
      <Button variant="outline" size="icon" className="absolute top-6 right-6" onClick={copyToClipboard}>
        <Copy className="h-4 w-4" />
      </Button>
    </Tabs>
  );
};
