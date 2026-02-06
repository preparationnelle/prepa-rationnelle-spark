import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles, FileText, Info, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PlanPart {
  title: string;
  subparts: Array<{
    title: string;
    content: string;
  }>;
}

interface PlanData {
  title: string;
  introduction: string;
  parts: PlanPart[];
  conclusion: string;
}

interface PlanGeneratorProps {
  subjectFromParent?: string;
}

export const PlanGenerator = ({ subjectFromParent }: PlanGeneratorProps) => {
  const [topic, setTopic] = useState(subjectFromParent || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<PlanData | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();

  const loadExample = () => {
    if (!subjectFromParent) {
      setTopic("La puissance américaine aujourd'hui");
    }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un sujet",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setPlan(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-plan', {
        body: {
          topic: topic.trim(),
          language: 'fr',
        },
      });

      if (error) {
        console.error('Error generating plan:', error);
        toast({
          title: "Erreur",
          description: error.message || "Erreur lors de la génération du plan",
          variant: "destructive",
        });
        return;
      }

      if (data.error) {
        toast({
          title: "Erreur",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setPlan(data.plan);
      setWordCount(data.wordCount || 0);
      toast({
        title: "Succès",
        description: "Plan généré avec succès !",
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm border border-gray-200">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-[#111111] text-xl">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ListChecks className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-bold">Générateur de Plan Universel</div>
              <div className="text-gray-600 text-sm font-normal mt-1">
                Plan adaptable à tout sujet géopolitique
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-sm font-medium text-[#111111] flex items-center gap-2">
                📝 Sujet géopolitique
              </Label>
              <Input
                id="topic"
                placeholder="Ex: La puissance américaine aujourd'hui, La Chine puissance révisionniste, etc."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-[#FAFAFA] rounded-lg"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !topic.trim()}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl h-12 transition-all duration-300 shadow-sm"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Générer le plan
                  </>
                )}
              </Button>

              <Button
                onClick={loadExample}
                variant="outline"
                className="px-6 border border-gray-300 bg-[#F5F5F5] text-[#111111] hover:bg-gray-100 rounded-xl h-12 transition-all duration-300"
              >
                Exemple
              </Button>
            </div>
          </div>

          <Alert className="border border-blue-200 bg-blue-50 rounded-lg">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800 text-sm italic">
              Entrez un sujet géopolitique et le système générera automatiquement un plan structuré en 3 parties principales avec leurs sous-parties, adapté à votre sujet. Le plan inclura des chiffres précis, des statistiques, des dates exactes et des exemples concrets pour chaque partie.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Affichage du plan généré */}
      {plan && (
        <Card className="bg-white shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#111111]">
              <FileText className="h-5 w-5 text-blue-600" />
              Plan Généré
              {wordCount > 0 && (
                <span className="text-sm font-normal text-gray-500 ml-auto">
                  {wordCount} mots
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Titre */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-2">{plan.title}</h2>
            </div>

            {/* Introduction */}
            {plan.introduction && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Introduction</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{plan.introduction}</p>
              </div>
            )}

            {/* Parties */}
            {plan.parts && plan.parts.length > 0 && (
              <div className="space-y-6">
                {plan.parts.map((part, partIndex) => (
                  <div key={partIndex} className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                      <h3 className="text-lg font-bold text-blue-900">
                        {part.title}
                      </h3>
                    </div>

                    {part.subparts && part.subparts.length > 0 && (
                      <div className="ml-4 space-y-3">
                        {part.subparts.map((subpart, subpartIndex) => (
                          <div key={subpartIndex} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {subpart.title}
                            </h4>
                            <p className="text-gray-700 whitespace-pre-wrap text-sm">
                              {subpart.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Conclusion */}
            {plan.conclusion && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Conclusion</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{plan.conclusion}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

