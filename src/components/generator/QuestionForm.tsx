
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
          className="min-h-[100px] border border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-gray-50 rounded-lg resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={loadExample}
          variant="outline"
          className="flex items-center gap-2 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-50 hover:border-orange-500 rounded-xl h-11 transition-all duration-300 shadow-sm hover:shadow-md"
          disabled={generating}
        >
          <Lightbulb className="h-4 w-4" />
          {language === 'fr' ? 'Exemple' : 'Example'}
        </Button>
        
        <Button
          onClick={handleGenerate}
          disabled={!question.trim() || generating}
          className="flex items-center gap-2 flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl h-11 transition-all duration-300 shadow-sm hover:shadow-md"
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
