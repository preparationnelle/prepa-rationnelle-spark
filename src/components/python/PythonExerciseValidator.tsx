
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Lightbulb, Code, Play, BookOpen, Zap } from 'lucide-react';
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
            <div className="flex gap-2">
              <Badge variant="outline" className="text-sm">
                Tentative #{attemptCount}
              </Badge>
              {validationResult?.success && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Réussi !
                </Badge>
              )}
            </div>
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
              {isValidating ? 'Validation en cours...' : 'Tester le code'}
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

      {/* Results with Enhanced Pedagogical Feedback */}
      {validationResult && (
        <Card className={`border-l-4 ${validationResult.success ? 'border-l-green-500 bg-green-50/30' : 'border-l-orange-500 bg-orange-50/30'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              {validationResult.success ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-700">Excellent travail !</span>
                </>
              ) : (
                <>
                  <Lightbulb className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-700">Continuons ensemble</span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`p-4 rounded-lg ${validationResult.success ? 'bg-green-50 border border-green-200' : 'bg-white border border-orange-200'}`}>
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
                  {validationResult.feedback}
                </pre>
              </div>
            </div>

            {validationResult.testResults.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Détail des tests
                </h4>
                <div className="grid gap-3">
                  {validationResult.testResults.map((test, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        test.passed 
                          ? 'border-l-green-500 bg-green-50 border border-green-200' 
                          : 'border-l-red-500 bg-red-50 border border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {test.passed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        <span className="font-medium text-sm">{test.description}</span>
                      </div>
                      
                      {!test.passed && (
                        <div className="text-sm space-y-1 ml-6 text-gray-700">
                          <div>
                            <span className="font-medium">Attendu :</span> 
                            <code className="bg-white px-2 py-1 rounded border ml-1">
                              {JSON.stringify(test.expected)}
                            </code>
                          </div>
                          <div>
                            <span className="font-medium">Obtenu :</span> 
                            <code className="bg-white px-2 py-1 rounded border ml-1">
                              {JSON.stringify(test.actual)}
                            </code>
                          </div>
                          {test.error && (
                            <div className="text-red-600 mt-1">
                              <span className="font-medium">Erreur :</span> {test.error}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {validationResult.success && (
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-800 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  <span className="font-medium">Bravo ! Et maintenant ?</span>
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  Votre solution fonctionne parfaitement ! Vous pouvez maintenant :
                  <br />• Essayer d'optimiser votre code pour le rendre plus élégant
                  <br />• Passer à l'exercice suivant pour continuer votre progression
                  <br />• Réfléchir à des cas particuliers plus complexes
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
