import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Brain, Loader2, Copy, Check, Sparkles, Info, AlertCircle, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';

interface ProblematiquesGeneratorProps {
  mode?: 'culture-generale' | 'geopolitics';
  subjectFromParent?: string;
}

export const ProblematiquesGenerator = ({ mode = 'culture-generale', subjectFromParent }: ProblematiquesGeneratorProps) => {
  const [subject, setSubject] = useState(subjectFromParent || '');
  const [loading, setLoading] = useState(false);
  const [problematique, setProblematique] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const isGeopolitics = mode === 'geopolitics';
  const title = isGeopolitics ? "Générateur de Problématiques (Géopolitique)" : "Générateur de Problématiques (Culture G.)";
  const placeholder = isGeopolitics
    ? "Ex: La Chine, une puissance révisionniste ?"
    : "Ex: Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?";

  const handleGenerate = async () => {
    if (!subject.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez entrer un sujet de dissertation.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProblematique(null);

    try {
      console.log('Generating problematique for subject:', subject.trim());

      const { data, error } = await supabase.functions.invoke('generate-problematique', {
        body: { subject: subject.trim(), mode: isGeopolitics ? 'geopolitics' : 'culture_generale' },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const generatedProblematique = data.problematique;

      if (!generatedProblematique) {
        throw new Error("La problématique générée est vide");
      }

      console.log('Problematique generated successfully');

      setProblematique(generatedProblematique);

      toast({
        title: "Problématique générée !",
        description: "Votre problématique de dissertation a été formulée avec succès.",
      });
    } catch (error: any) {
      console.error('Error generating problematique:', error);
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

  const handleCopy = () => {
    if (problematique) {
      navigator.clipboard.writeText(problematique);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copié !",
        description: "La problématique a été copiée dans le presse-papiers.",
      });
    }
  };

  const loadExample = () => {
    if (isGeopolitics) {
      setSubject("L'Union Européenne, une puissance sans puissance ?");
    } else {
      setSubject('Pensez-vous, comme l\'a écrit Montaigne, qu\'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-gradient-to-br from-white via-orange-50/30 to-white border border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="bg-orange-50 border-orange-200">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-sm text-gray-700">
              <strong>La problématique :</strong> C'est la question centrale qui structure votre dissertation.
              Elle doit être dialectique (poser une tension), féconde (permettre 3 parties équilibrées) et pertinente (ancrer dans les enjeux du sujet).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Formulaire */}
      <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-orange-600" />
            Analyser un sujet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sujet */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-900 flex items-center gap-2">
              Sujet de dissertation <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="subject"
              placeholder={placeholder}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="min-h-[120px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-gray-50 rounded-lg resize-none"
            />
            <p className="text-xs text-gray-500">
              Collez ici le sujet de dissertation dont vous voulez analyser la problématique
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                loadExample();
              }}
              variant="outline"
              className="flex items-center gap-2 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-50 hover:border-orange-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              disabled={loading}
            >
              <Info className="h-4 w-4" />
              Exemple
            </Button>

            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleGenerate();
              }}
              disabled={!subject.trim() || loading}
              className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Analyse en cours...</span>
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4" />
                  <span>Générer la problématique</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Résultat */}
      {problematique && (
        <Card className="bg-white rounded-xl shadow-lg border border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-orange-600" />
                Problématique proposée
              </CardTitle>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    Copié
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copier
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                {problematique}
              </p>
            </div>

            {/* Conseils */}
            <Alert className="mt-4 bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm text-gray-700">
                <strong>Évaluation :</strong> Cette problématique est-elle dialectique ? Féconde ? Pertinente ?
                Elle devrait permettre un développement en trois parties équilibrées avec des arguments opposés.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
};


