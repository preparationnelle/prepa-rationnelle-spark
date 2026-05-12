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

  const difficultyOptions: { id: 'easy' | 'medium' | 'hard'; label: string }[] = [
    { id: 'easy', label: 'Débutant' },
    { id: 'medium', label: 'Intermédiaire' },
    { id: 'hard', label: 'Avancé' },
  ];

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-black" />
        <CardHeader className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center">
              <Target className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                Culture générale
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                Définir les termes d'un sujet
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <Alert className="bg-pr-gray-bg/60 border-pr-black-pale rounded-xl">
            <Info className="h-4 w-4 text-pr-black" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              <strong className="text-pr-black">Exercice :</strong> un sujet t'est proposé. Identifie et définis les termes clés
              qui permettront de construire une problématique solide.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Génération du sujet */}
      {!subjectData && (
        <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
          <CardHeader className="px-6 pt-5 pb-4">
            <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-pr-black" />
              Générer un sujet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-6 pb-6">
            <div className="space-y-3">
              <Label className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                  1
                </span>
                Niveau de difficulté
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {difficultyOptions.map(opt => (
                  <Button
                    key={opt.id}
                    type="button"
                    onClick={() => setDifficulty(opt.id)}
                    className={
                      difficulty === opt.id
                        ? 'bg-pr-black hover:bg-pr-black-dark text-white rounded-xl h-11 font-semibold transition-colors'
                        : 'bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-11 font-medium transition-colors'
                    }
                  >
                    {opt.label}
                  </Button>
                ))}
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
              className="w-full flex items-center justify-center gap-2 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none h-12 text-[15px]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Génération en cours…</span>
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
          <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
            <div className="h-[3px] w-full bg-pr-black" />
            <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
                    <Target className="h-5 w-5 text-pr-black" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                      Sujet de dissertation
                    </div>
                    <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                      Énoncé proposé
                    </CardTitle>
                  </div>
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={handleReset}
                  className="bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-lg flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Nouveau sujet
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-7 space-y-4">
              <div className="bg-pr-gray-bg/60 rounded-xl p-6 border border-pr-black-pale">
                <p className="font-lora text-[18px] text-pr-black leading-[1.5]">
                  {subjectData.sujet}
                </p>
              </div>

              {subjectData.contexte && (
                <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
                  <Info className="h-4 w-4 text-pr-black" />
                  <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                    <strong className="text-pr-black">Contexte :</strong> {subjectData.contexte}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Termes à définir */}
          <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
            <CardHeader className="px-6 pt-5 pb-4">
              <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-pr-black" />
                Termes à définir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-6 pb-6">
              {subjectData.termes.map((terme, index) => (
                <div key={terme} className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-pr-gray-bg text-pr-black border border-pr-black-soft hover:bg-pr-gray-bg rounded-full font-semibold text-[10px] uppercase tracking-[0.10em]">
                      Terme {index + 1}
                    </Badge>
                    <Label className="text-[16px] font-semibold text-pr-black font-dm-serif">
                      {terme}
                    </Label>
                  </div>

                  {subjectData.indices?.[terme] && (
                    <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl border-l-[3px] border-l-pr-black">
                      <Lightbulb className="h-4 w-4 text-pr-black" />
                      <AlertDescription className="text-[13px] text-pr-gray-dark">
                        <strong className="text-pr-black">Indice :</strong> {subjectData.indices[terme]}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Textarea
                    placeholder={`Définis le terme « ${terme} »…`}
                    value={userDefinitions[terme] || ''}
                    onChange={(e) => handleDefinitionChange(terme, e.target.value)}
                    className="min-h-[100px] border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 transition-colors rounded-xl resize-y bg-white text-[14px] leading-relaxed p-4 text-pr-black placeholder:text-pr-gray-mid"
                  />

                  {showAnswers && subjectData.definitions_attendues?.[terme] && (
                    <Alert className="bg-pr-gray-bg/60 border-pr-black-pale rounded-xl">
                      <Check className="h-4 w-4 text-pr-black" />
                      <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                        <strong className="text-pr-black">Définition attendue :</strong> {subjectData.definitions_attendues[terme]}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={handleShowAnswers}
                  disabled={!allDefined || showAnswers}
                  className="flex items-center gap-2 flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none h-12 text-[15px]"
                >
                  <Check className="h-4 w-4" />
                  Voir les corrections
                </Button>
              </div>

              {!allDefined && (
                <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
                  <Info className="h-4 w-4 text-pr-black" />
                  <AlertDescription className="text-[13px] text-pr-gray-dark">
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

