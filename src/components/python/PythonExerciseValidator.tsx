import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Play, BookOpen, MessageSquare, Wand2, AlertTriangle, CheckCircle, XCircle, Lightbulb, Wrench, ChevronDown, ChevronUp, Eye } from 'lucide-react';
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

interface StructuredFeedback {
  score: number;
  errors: string[];
  correctedCode: string;
  keyCommands: string[];
  concepts: string[];
  detailedFeedback: string;
}

interface ValidationResult {
  success: boolean;
  feedback?: string;
  structuredFeedback?: StructuredFeedback;
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
  const [isFormatting, setIsFormatting] = useState(false);
  const [isLoadingSolution, setIsLoadingSolution] = useState(false);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [showDetailedFeedback, setShowDetailedFeedback] = useState(false);
  const [showCorrectedCode, setShowCorrectedCode] = useState(false);
  const [showOfficialSolution, setShowOfficialSolution] = useState(false);
  const [officialSolution, setOfficialSolution] = useState<string>('');

  const handleValidate = async () => {
    setIsValidating(true);
    setAttemptCount(prev => prev + 1);

    try {
      const { data, error } = await supabase.functions.invoke('python-exercise-validator', {
        body: {
          exerciseId: exercise.id,
          code,
          attemptCount: attemptCount + 1,
          action: 'validate'
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

  const handleAutoFormat = async () => {
    setIsFormatting(true);

    try {
      const { data, error } = await supabase.functions.invoke('python-exercise-validator', {
        body: {
          exerciseId: exercise.id,
          code,
          action: 'format'
        }
      });

      if (error) throw error;
      if (data.formattedCode) {
        setCode(data.formattedCode);
      }
    } catch (error) {
      console.error('Formatting error:', error);
    } finally {
      setIsFormatting(false);
    }
  };

  const handleGetSolution = async () => {
    setIsLoadingSolution(true);

    try {
      const { data, error } = await supabase.functions.invoke('python-exercise-validator', {
        body: {
          exerciseId: exercise.id,
          code: 'dummy', // Not used for getSolution action
          action: 'getSolution'
        }
      });

      if (error) throw error;
      if (data.solution) {
        setOfficialSolution(data.solution);
        setShowOfficialSolution(true);
      }
    } catch (error) {
      console.error('Error getting solution:', error);
    } finally {
      setIsLoadingSolution(false);
    }
  };

  const resetExercise = () => {
    setCode(exercise.template);
    setValidationResult(null);
    setAttemptCount(0);
    setShowDetailedFeedback(false);
    setShowCorrectedCode(false);
    setShowOfficialSolution(false);
    setOfficialSolution('');
  };

  const applyIndentationFix = () => {
    if (validationResult?.indentationAnalysis?.correctedCode) {
      setCode(validationResult.indentationAnalysis.correctedCode);
    }
  };

  const applyCorrectedCode = () => {
    if (validationResult?.structuredFeedback?.correctedCode) {
      setCode(validationResult.structuredFeedback.correctedCode);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 text-green-800 border-green-300';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    if (score >= 4) return 'bg-orange-100 text-orange-800 border-orange-300';
    return 'bg-red-100 text-red-800 border-red-300';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return <CheckCircle className="h-4 w-4" />;
    if (score >= 4) return <AlertTriangle className="h-4 w-4" />;
    return <XCircle className="h-4 w-4" />;
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
          
          <div className="flex gap-3 flex-wrap">
            <Button 
              onClick={handleAutoFormat}
              disabled={isFormatting || !code.trim()}
              variant="outline"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
            >
              <Wand2 className="h-4 w-4 mr-2" />
              {isFormatting ? 'Formatage...' : 'Auto-formater'}
            </Button>

            <Button 
              onClick={handleGetSolution}
              disabled={isLoadingSolution}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isLoadingSolution ? 'Chargement...' : 'Voir la solution'}
            </Button>
            
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
              disabled={isValidating || isFormatting}
              className="border-gray-300"
            >
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Official Solution Section */}
      {showOfficialSolution && officialSolution && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-5 w-5" />
                Solution officielle
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowOfficialSolution(false)}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <ChevronUp className="h-4 w-4" />
                Masquer
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-blue-50 p-4 rounded border text-sm overflow-auto font-mono border-blue-200">
              <code className="text-blue-900">{officialSolution}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {/* Results Section */}
      {validationResult && (
        <div className="space-y-4">
          {/* Score Section */}
          {validationResult.structuredFeedback && (
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Évaluation
                  </span>
                  <Badge className={`${getScoreColor(validationResult.structuredFeedback.score)} flex items-center gap-1`}>
                    {getScoreIcon(validationResult.structuredFeedback.score)}
                    {validationResult.structuredFeedback.score}/10
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>
          )}

          {/* Errors Section */}
          {validationResult.structuredFeedback?.errors.length > 0 && (
            <Card className="border-l-4 border-l-red-500 bg-red-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <XCircle className="h-5 w-5" />
                  Erreurs détectées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-red-700">
                  {validationResult.structuredFeedback.errors.map((error, index) => (
                    <li key={index} className="text-sm">{error}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Indentation Issues */}
          {validationResult.indentationAnalysis?.hasIndentationIssues && (
            <Card className="border-l-4 border-l-amber-500 bg-amber-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-amber-800">
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Problèmes d'indentation
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={applyIndentationFix}
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                  >
                    <Wand2 className="h-4 w-4 mr-2" />
                    Corriger
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-amber-700">
                  {validationResult.indentationAnalysis.issues.map((issue, index) => (
                    <li key={index} className="text-sm">{issue}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Corrected Code Section */}
          {validationResult.structuredFeedback?.correctedCode && (
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    Code corrigé
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowCorrectedCode(!showCorrectedCode)}
                      className="border-green-300 text-green-700 hover:bg-green-50"
                    >
                      {showCorrectedCode ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      {showCorrectedCode ? 'Masquer' : 'Voir'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={applyCorrectedCode}
                      className="border-green-300 text-green-700 hover:bg-green-50"
                    >
                      Appliquer
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              {showCorrectedCode && (
                <CardContent>
                  <pre className="bg-white p-3 rounded border text-sm overflow-auto font-mono">
                    <code>{validationResult.structuredFeedback.correctedCode}</code>
                  </pre>
                </CardContent>
              )}
            </Card>
          )}

          {/* Toolbox Section */}
          {validationResult.structuredFeedback && (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Key Commands */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Wrench className="h-5 w-5" />
                    Commandes clés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {validationResult.structuredFeedback.keyCommands.map((command, index) => (
                      <Badge key={index} variant="outline" className="font-mono">
                        {command}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Concepts */}
              <Card className="border-l-4 border-l-teal-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-teal-800">
                    <Lightbulb className="h-5 w-5" />
                    Concepts importants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-teal-700">
                    {validationResult.structuredFeedback.concepts.map((concept, index) => (
                      <li key={index} className="text-sm">{concept}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Detailed Feedback Section */}
          {validationResult.structuredFeedback?.detailedFeedback && (
            <Card className="border-l-4 border-l-gray-500">
              <CardHeader className="pb-3">
                <CardTitle 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowDetailedFeedback(!showDetailedFeedback)}
                >
                  <span className="flex items-center gap-2 text-gray-800">
                    <MessageSquare className="h-5 w-5" />
                    Feedback détaillé de l'assistant
                  </span>
                  {showDetailedFeedback ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </CardTitle>
              </CardHeader>
              {showDetailedFeedback && (
                <CardContent>
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-sans">
                      {validationResult.structuredFeedback.detailedFeedback}
                    </pre>
                  </div>
                </CardContent>
              )}
            </Card>
          )}
        </div>
      )}
    </div>
  );
};
