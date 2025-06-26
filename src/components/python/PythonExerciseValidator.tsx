
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Play, BookOpen, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
}

interface ValidationResult {
  success: boolean;
  feedback: string;
  exercise: {
    title: string;
    description: string;
  };
}

interface PythonExerciseValidatorProps {
  exercise: Exercise;
}

export const PythonExerciseValidator: React.FC<PythonExerciseValidatorProps> = ({ exercise }) => {
  const [code, setCode] = useState(exercise.template);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);

  const handleValidate = async () => {
    setIsValidating(true);
    setAttemptCount(prev => prev + 1);

    try {
      const { data, error } = await supabase.functions.invoke('python-exercise-validator', {
        body: {
          exerciseId: exercise.id,
          code,
          attemptCount: attemptCount + 1
        }
      });

      if (error) throw error;

      setValidationResult(data);
    } catch (error) {
      console.error('Validation error:', error);
      setValidationResult({
        success: false,
        feedback: `Erreur de validation: ${error.message}`,
        exercise: { title: exercise.title, description: exercise.description }
      });
    } finally {
      setIsValidating(false);
    }
  };

  const resetExercise = () => {
    setCode(exercise.template);
    setValidationResult(null);
    setAttemptCount(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Exercise Description */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-blue-600" />
            {exercise.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{exercise.description}</p>
        </CardContent>
      </Card>

      {/* Code Editor */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-600" />
              Votre solution
            </CardTitle>
            <Badge variant="outline" className="text-sm">
              Tentative #{attemptCount}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[250px] bg-gray-50 border-2 focus:border-indigo-300"
            placeholder="Écrivez votre code Python ici..."
            spellCheck={false}
          />
          
          <div className="flex gap-3">
            <Button 
              onClick={handleValidate}
              disabled={isValidating || !code.trim()}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
            >
              <Play className="h-4 w-4" />
              {isValidating ? 'Analyse en cours...' : 'Analyser le code'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetExercise}
              disabled={isValidating}
              className="border-gray-300"
            >
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Feedback */}
      {validationResult && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700">Feedback de l'assistant</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-sans">
                  {validationResult.feedback}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
