
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Wand2 } from 'lucide-react';

interface QuestionFormProps {
  question: string;
  setQuestion: (question: string) => void;
  language: 'fr' | 'en';
  showAdditionalInfo: boolean;
  setShowAdditionalInfo: (show: boolean) => void;
  loadExample: () => void;
  handleGenerate: () => void;
  generating: boolean;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  setQuestion,
  language,
  loadExample,
  handleGenerate,
  generating
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-[#333333]">
          {language === 'fr' ? 'Question d\'entretien' : 'Interview question'}
        </label>
        <Textarea
          placeholder={language === 'fr' 
            ? "Ex: Quels sont vos défauts ? Pourquoi cette école ? Parlez-moi de vous..." 
            : "Ex: What are your weaknesses? Why this school? Tell me about yourself..."}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="min-h-[100px] border border-carnet-rule focus:border-pr-black focus:ring-pr-black bg-carnet-paper rounded-lg resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={loadExample}
          variant="outline"
          className="flex items-center gap-2 border border-carnet-rule bg-carnet-paper text-carnet-ink hover:bg-carnet-paper hover:border-pr-black rounded-xl h-11 transition-all duration-300 shadow-sm hover:shadow-sm"
          disabled={generating}
        >
          <Lightbulb className="h-4 w-4" />
          {language === 'fr' ? 'Exemple' : 'Example'}
        </Button>
        
        <Button
          onClick={handleGenerate}
          disabled={!question.trim() || generating}
          className="flex items-center gap-2 flex-1 bg-gradient-to-r from-pr-black to-pr-black hover:from-pr-black hover:to-pr-black text-white rounded-xl h-11 transition-all duration-300 shadow-sm hover:shadow-sm"
        >
          <Wand2 className="h-4 w-4" />
          {generating 
            ? (language === 'fr' ? 'Génération des questions...' : 'Generating questions...') 
            : (language === 'fr' ? 'Commencer' : 'Start')}
        </Button>
      </div>
    </div>
  );
};
