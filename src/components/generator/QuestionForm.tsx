
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Info, ChevronUp, ChevronDown, Loader2, MessageSquare, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';

type QuestionFormProps = {
  question: string;
  setQuestion: (question: string) => void;
  language: 'fr' | 'en';
  showAdditionalInfo: boolean;
  setShowAdditionalInfo: (show: boolean) => void;
  loadExample: () => void;
  handleGenerate: () => void;
  generating: boolean;
};

export const QuestionForm = ({
  question,
  setQuestion,
  language,
  showAdditionalInfo,
  setShowAdditionalInfo,
  loadExample,
  handleGenerate,
  generating
}: QuestionFormProps) => {
  const getPlaceholder = () => {
    return language === 'fr'
      ? "Ex: Quels sont vos trois défauts ?"
      : "Ex: What are your three weaknesses?";
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder={getPlaceholder()}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1"
        />
        <Button variant="outline" onClick={loadExample} className="whitespace-nowrap">
          {language === 'fr' ? 'Voir un exemple' : 'See an example'}
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        <Button variant="outline" size="sm" asChild className="flex items-center gap-1">
          <Link to="/ecoles/emlyon">
            <MessageSquare className="h-4 w-4" />
            {language === 'fr' ? 'Questions EM Lyon' : 'EM Lyon Questions'}
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild className="flex items-center gap-1">
          <Link to="/ecoles/edhec">
            <Puzzle className="h-4 w-4" />
            {language === 'fr' ? 'Mots EDHEC' : 'EDHEC Words'}
          </Link>
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
    </div>
  );
};
