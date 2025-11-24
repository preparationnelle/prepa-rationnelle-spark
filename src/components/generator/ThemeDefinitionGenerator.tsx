import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Target, Loader2, Sparkles, Check, X, Info, Lightbulb, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface SubjectData {
  sujet: string;
  termes: string[];
  indices?: Record<string, string>;
  definitions_attendues?: Record<string, string>;
  contexte?: string;
}

export const ThemeDefinitionGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [subjectData, setSubjectData] = useState<SubjectData | null>(null);
  const [userDefinitions, setUserDefinitions] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const { toast } = useToast();

  const handleGenerateSubject = async () => {
    if (loading) return; // Prevent multiple clicks
    
    setLoading(true);
    setSubjectData(null);
    setUserDefinitions({});
    setShowAnswers(false);

    try {
      console.log('Calling generate-culture-generale-subject with difficulty:', difficulty);

      const { data, error } = await supabase.functions.invoke('generate-culture-generale-subject', {
        body: { difficulty },
      });

      console.log('Response received:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        const errorMessage = error.message || error.toString() || "Erreur lors de l'appel à la fonction";
        toast({
          title: "Erreur",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }

      if (!data) {
        console.error('No data received');
        toast({
          title: "Erreur",
          description: "Aucune donnée reçue du serveur.",
          variant: "destructive",
        });
        return;
      }

      if (data?.error) {
        console.error('API returned error:', data.error);
        toast({
          title: "Erreur",
          description: typeof data.error === 'string' ? data.error : data.error.message || "Une erreur s'est produite lors de la génération.",
          variant: "destructive",
        });
        return;
      }

      if (!data?.sujet || !data?.termes || !Array.isArray(data.termes)) {
        console.error('Invalid response structure:', data);
        toast({
          title: "Erreur",
          description: "La réponse ne contient pas les données attendues. Structure invalide.",
          variant: "destructive",
        });
        return;
      }

      if (data.termes.length === 0) {
        console.error('No terms in response');
        toast({
          title: "Erreur",
          description: "Aucun terme n'a été généré.",
          variant: "destructive",
        });
        return;
      }

      setSubjectData(data);
      
      // Initialize user definitions
      const initialDefinitions: Record<string, string> = {};
      data.termes.forEach((terme: string) => {
        initialDefinitions[terme] = '';
      });
      setUserDefinitions(initialDefinitions);
      
      toast({
        title: "Sujet généré !",
        description: `Définis maintenant les ${data.termes.length} terme${data.termes.length > 1 ? 's' : ''} clé${data.termes.length > 1 ? 's' : ''} du sujet.`,
      });
    } catch (error: any) {
      console.error('Error generating subject:', error);
      const errorMessage = error?.message || error?.error?.message || error?.toString() || "Une erreur s'est produite lors de la génération.";
      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDefinitionChange = (terme: string, value: string) => {
    setUserDefinitions(prev => ({
      ...prev,
      [terme]: value
    }));
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    toast({
      title: "Corrections affichées",
      description: "Compare tes définitions avec les définitions attendues.",
    });
  };

  const handleReset = () => {
    setSubjectData(null);
    setUserDefinitions({});
    setShowAnswers(false);
  };

  const allDefined = subjectData && subjectData.termes.every(terme => userDefinitions[terme]?.trim());

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-gradient-to-br from-white via-orange-50/30 to-white border border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            <Target className="h-6 w-6 text-orange-600" />
            Définir les Termes d'un Sujet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="bg-orange-50 border-orange-200">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-sm text-gray-700">
              <strong>Exercice :</strong> Un sujet de dissertation t'est proposé. Identifie et définis les termes clés 
              qui permettront de construire une problématique solide. C'est la première étape essentielle avant de rédiger !
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Génération du sujet */}
      {!subjectData && (
        <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-600" />
              Générer un sujet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-900">
                Niveau de difficulté
              </Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={difficulty === 'easy' ? 'default' : 'outline'}
                  onClick={() => setDifficulty('easy')}
                  className={difficulty === 'easy' ? 'bg-orange-600 text-white' : ''}
                >
                  Débutant
                </Button>
                <Button
                  type="button"
                  variant={difficulty === 'medium' ? 'default' : 'outline'}
                  onClick={() => setDifficulty('medium')}
                  className={difficulty === 'medium' ? 'bg-orange-600 text-white' : ''}
                >
                  Intermédiaire
                </Button>
                <Button
                  type="button"
                  variant={difficulty === 'hard' ? 'default' : 'outline'}
                  onClick={() => setDifficulty('hard')}
                  className={difficulty === 'hard' ? 'bg-orange-600 text-white' : ''}
                >
                  Avancé
                </Button>
              </div>
            </div>

            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleGenerateSubject();
              }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Génération en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Générer un sujet</span>
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Sujet généré et définitions */}
      {subjectData && (
        <>
          {/* Sujet */}
          <Card className="bg-white rounded-xl shadow-lg border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  Sujet de dissertation
                </CardTitle>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Nouveau sujet
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                  {subjectData.sujet}
                </p>
              </div>
              
              {subjectData.contexte && (
                <Alert className="mt-4 bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-gray-700">
                    <strong>Contexte :</strong> {subjectData.contexte}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Termes à définir */}
          <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-orange-600" />
                Termes à définir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjectData.termes.map((terme, index) => (
                <div key={terme} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                      Terme {index + 1}
                    </Badge>
                    <Label className="text-base font-semibold text-gray-900">
                      {terme}
                    </Label>
                    {subjectData.indices?.[terme] && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        title={subjectData.indices[terme]}
                      >
                        <Info className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  
                  {subjectData.indices?.[terme] && (
                    <Alert className="bg-yellow-50 border-yellow-200">
                      <Lightbulb className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-xs text-gray-700">
                        <strong>Indice :</strong> {subjectData.indices[terme]}
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Textarea
                    placeholder={`Définis le terme "${terme}"...`}
                    value={userDefinitions[terme] || ''}
                    onChange={(e) => handleDefinitionChange(terme, e.target.value)}
                    className="min-h-[100px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-gray-50 rounded-lg resize-none"
                  />
                  
                  {showAnswers && subjectData.definitions_attendues?.[terme] && (
                    <Alert className="bg-green-50 border-green-200">
                      <Check className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-sm text-gray-700">
                        <strong>Définition attendue :</strong> {subjectData.definitions_attendues[terme]}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={handleShowAnswers}
                  disabled={!allDefined || showAnswers}
                  className="flex items-center gap-2 flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Check className="h-4 w-4" />
                  Voir les corrections
                </Button>
              </div>

              {!allDefined && (
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-gray-700">
                    Définis tous les termes avant de voir les corrections.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

