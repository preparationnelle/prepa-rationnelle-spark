
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Play, BookOpen, MessageSquare, Wand2, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
}

interface IndentationAnalysis {
  hasIndentationIssues: boolean;
  correctedCode: string;
  issues: string[];
}

interface ValidationResult {
  success: boolean;
  feedback: string;
  indentationAnalysis?: IndentationAnalysis;
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
  const [showCorrectedCode, setShowCorrectedCode] = useState(false);

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
    setShowCorrectedCode(false);
  };

  const applyIndentationFix = () => {
    if (validationResult?.indentationAnalysis?.correctedCode) {
      setCode(validationResult.indentationAnalysis.correctedCode);
      setShowCorrectedCode(false);
    }
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

      {/* Indentation Tips */}
      <Card className="border-l-4 border-l-amber-500 bg-amber-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
            <Code className="h-5 w-5" />
            Rappel : Indentation Python
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-amber-700 space-y-2">
          <p><strong>L'indentation définit la structure de votre code :</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Utilisez <strong>4 espaces</strong> par niveau (jamais de tabulations)</li>
            <li>Chaque bloc après <code>:</code> doit être indenté</li>
            <li>L'IA utilise des jetons &lt;indent&gt;/&lt;dedent&gt; pour comprendre votre code</li>
            <li>Une erreur d'indentation = IndentationError</li>
          </ul>
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
          
          <div className="flex gap-3 flex-wrap">
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

            {validationResult?.indentationAnalysis?.hasIndentationIssues && (
              <Button 
                variant="outline" 
                onClick={applyIndentationFix}
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                <Wand2 className="h-4 w-4 mr-2" />
                Corriger l'indentation
              </Button>
            )}

            {validationResult?.indentationAnalysis?.hasIndentationIssues && (
              <Button 
                variant="ghost" 
                onClick={() => setShowCorrectedCode(!showCorrectedCode)}
                className="text-amber-600 hover:bg-amber-50"
              >
                {showCorrectedCode ? 'Masquer' : 'Voir'} la correction
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Indentation Issues Alert */}
      {validationResult?.indentationAnalysis?.hasIndentationIssues && (
        <Card className="border-l-4 border-l-amber-500 bg-amber-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Problèmes d'indentation détectés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-amber-700">
                {validationResult.indentationAnalysis.issues.map((issue, index) => (
                  <li key={index} className="text-sm">{issue}</li>
                ))}
              </ul>
              
              {showCorrectedCode && (
                <div className="mt-4">
                  <h4 className="font-medium text-amber-800 mb-2">Code avec indentation corrigée :</h4>
                  <pre className="bg-white p-3 rounded border text-sm overflow-auto">
                    <code>{validationResult.indentationAnalysis.correctedCode}</code>
                  </pre>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

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
