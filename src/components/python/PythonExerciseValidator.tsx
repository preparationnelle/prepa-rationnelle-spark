
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Lightbulb, Code, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
}

interface TestResult {
  description: string;
  expected: any;
  actual: any;
  passed: boolean;
  error?: string;
}

interface ValidationResult {
  success: boolean;
  feedback: string;
  testResults: TestResult[];
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
        testResults: [],
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            {exercise.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 whitespace-pre-line">{exercise.description}</p>
        </CardContent>
      </Card>

      {/* Code Editor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Votre solution</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">Tentative #{attemptCount}</Badge>
            {validationResult?.success && (
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Réussi
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[200px] bg-gray-50"
            placeholder="Écrivez votre code Python ici..."
            spellCheck={false}
          />
          
          <div className="flex gap-2">
            <Button 
              onClick={handleValidate}
              disabled={isValidating || !code.trim()}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {isValidating ? 'Validation...' : 'Valider'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetExercise}
              disabled={isValidating}
            >
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {validationResult && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {validationResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              Résultats de validation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <pre className="whitespace-pre-wrap text-sm">{validationResult.feedback}</pre>
            </div>

            {validationResult.testResults.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold">Détail des tests:</h4>
                {validationResult.testResults.map((test, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded border-l-4 ${
                      test.passed 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {test.passed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      <span className="font-medium">{test.description}</span>
                    </div>
                    
                    {!test.passed && (
                      <div className="text-sm space-y-1 ml-6">
                        <div>Attendu: <code className="bg-white px-2 py-1 rounded">{JSON.stringify(test.expected)}</code></div>
                        <div>Obtenu: <code className="bg-white px-2 py-1 rounded">{JSON.stringify(test.actual)}</code></div>
                        {test.error && (
                          <div className="text-red-600">Erreur: {test.error}</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {validationResult.success && (
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-800">
                  <Lightbulb className="h-4 w-4" />
                  <span className="font-medium">Conseil pour aller plus loin</span>
                </div>
                <p className="text-green-700 mt-2 text-sm">
                  Excellente solution ! Vous pourriez maintenant essayer d'optimiser votre code 
                  ou explorer des cas particuliers plus complexes.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
