
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Play, CheckCircle, XCircle, Code, Lock } from 'lucide-react';
import { Exercise } from '@/components/python/ExerciseSelector';
import { supabase } from '@/integrations/supabase/client';
import { usePythonAccess } from '@/hooks/usePythonAccess';
import { PythonPaymentModal } from '@/components/python/PythonPaymentModal';

interface PythonExerciseValidatorProps {
  exercise: Exercise;
}

export const PythonExerciseValidator: React.FC<PythonExerciseValidatorProps> = ({ exercise }) => {
  const { hasAccess } = usePythonAccess();
  const [code, setCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    setCode('');
    setResult(null);
  }, [exercise.id]);

  const handleValidate = async () => {
    if (!hasAccess) {
      setShowPaymentModal(true);
      return;
    }

    if (!code.trim()) return;

    setIsValidating(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('python-exercise-validator', {
        body: {
          exerciseId: exercise.id,
          code: code,
          expected: exercise.expected_output
        }
      });

      if (error) throw error;
      setResult(data);
    } catch (error) {
      console.error('Erreur lors de la validation:', error);
      setResult({
        success: false,
        message: 'Erreur lors de la validation. Veuillez réessayer.',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="space-y-6 text-gray-900">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-600" />
              {exercise.title}
              {!hasAccess && (
                <Lock className="h-4 w-4 text-orange-500" />
              )}
            </CardTitle>
            <Badge variant={exercise.difficulty === 'facile' ? 'default' : exercise.difficulty === 'moyen' ? 'secondary' : 'destructive'}>
              {exercise.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Énoncé :</h4>
            <p className="text-gray-700">{exercise.description}</p>
          </div>

          {exercise.example_input && (
            <div>
              <h4 className="font-semibold mb-2">Exemple d'entrée :</h4>
              <pre className="bg-gray-100 p-2 rounded text-sm font-mono">{exercise.example_input}</pre>
            </div>
          )}

          {exercise.expected_output && (
            <div>
              <h4 className="font-semibold mb-2">Sortie attendue :</h4>
              <pre className="bg-gray-100 p-2 rounded text-sm font-mono">{exercise.expected_output}</pre>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-2">Votre code Python :</h4>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={hasAccess ? "Écrivez votre code Python ici..." : "Débloquez l'accès premium pour coder..."}
              className="font-mono text-sm min-h-[200px]"
              disabled={!hasAccess}
            />
          </div>

          <Button 
            onClick={handleValidate}
            disabled={isValidating || !code.trim()}
            className={hasAccess ? "w-full" : "w-full bg-orange-600 hover:bg-orange-700"}
          >
            {isValidating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Validation en cours...
              </>
            ) : hasAccess ? (
              <>
                <Play className="h-4 w-4 mr-2" />
                Valider le code
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Débloquer pour valider
              </>
            )}
          </Button>

          {result && hasAccess && (
            <Alert className={result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
              <div className="flex items-center gap-2">
                {result.success ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={result.success ? "text-green-800" : "text-red-800"}>
                  {result.message}
                  {result.output && (
                    <pre className="mt-2 text-sm font-mono bg-white p-2 rounded border">
                      {result.output}
                    </pre>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          )}
        </CardContent>
      </Card>

      <PythonPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        exerciseTitle={exercise.title}
      />
    </div>
  );
};
