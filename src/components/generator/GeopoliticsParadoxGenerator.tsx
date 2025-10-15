import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Loader2, Sparkles, CheckCircle, Target, TrendingUp, TrendingDown } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

interface GeneratedParadox {
  sujet: string;
  tendance1: string;
  tendance2: string;
  paradoxe: string;
  problematique: string;
  justification: string;
}

interface Evaluation {
  sujet: string;
  problematique_candidat: string;
  diagnostic: string;
  notes: {
    clarte: number;
    paradoxe: number;
    ancrage: number;
    ouverture: number;
    pertinence: number;
    total: number;
  };
  points_forts: string[];
  limites: string[];
  suggestion: string;
}

const predefinedSubjects = [
  { id: 1, title: 'La puissance américaine aujourd\'hui' },
  { id: 2, title: 'La Chine, puissance révisionniste ?' },
  { id: 3, title: 'L\'Union européenne : puissance ou dépendance ?' },
  { id: 4, title: 'La mondialisation : intégration ou fragmentation ?' },
  { id: 5, title: 'Le changement climatique : menace ou moteur de coopération ?' },
  { id: 6, title: 'Les ressources énergétiques : instrument ou vulnérabilité de puissance ?' },
  { id: 7, title: 'L\'Amérique latine : périphérie ou acteur global ?' },
  { id: 8, title: 'Les conflits contemporains : retour du hard power ?' },
  { id: 9, title: 'Le cyberespace : nouvel espace de puissance ?' },
  { id: 10, title: 'L\'Afrique : continent d\'avenir ou champ de rivalités ?' }
];

export const GeopoliticsParadoxGenerator = () => {
  const [mode, setMode] = useState<'generate' | 'evaluate'>('generate');
  const [subject, setSubject] = useState('');
  const [userProblematic, setUserProblematic] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedParadox, setGeneratedParadox] = useState<GeneratedParadox | null>(null);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);

  const handleGenerate = async () => {
    if (!subject.trim()) {
      toast.error('Veuillez entrer un sujet géopolitique');
      return;
    }

    setLoading(true);
    setGeneratedParadox(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-geopolitics-paradox', {
        body: {
          subject: subject.trim(),
          mode: 'generate'
        }
      });

      if (error) throw error;

      setGeneratedParadox(data.content);
      toast.success('Paradoxe et problématique générés !');
    } catch (error) {
      console.error('Error generating paradox:', error);
      toast.error('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  const handleEvaluate = async () => {
    if (!subject.trim()) {
      toast.error('Veuillez entrer un sujet géopolitique');
      return;
    }
    if (!userProblematic.trim()) {
      toast.error('Veuillez entrer votre problématique');
      return;
    }

    setLoading(true);
    setEvaluation(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-geopolitics-paradox', {
        body: {
          subject: subject.trim(),
          userProblematic: userProblematic.trim(),
          mode: 'evaluate'
        }
      });

      if (error) throw error;

      setEvaluation(data.content);
      toast.success('Problématique évaluée !');
    } catch (error) {
      console.error('Error evaluating problematic:', error);
      toast.error('Erreur lors de l\'évaluation');
    } finally {
      setLoading(false);
    }
  };

  const selectPredefinedSubject = (title: string) => {
    setSubject(title);
    setGeneratedParadox(null);
    setEvaluation(null);
  };

  return (
    <div className="space-y-6">
      {/* Mode selector */}
      <Tabs value={mode} onValueChange={(value) => setMode(value as 'generate' | 'evaluate')}>
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger value="generate" className="data-[state=active]:bg-white">
            Générer Paradoxe
          </TabsTrigger>
          <TabsTrigger value="evaluate" className="data-[state=active]:bg-white">
            Évaluer Problématique
          </TabsTrigger>
        </TabsList>

        {/* Generate mode */}
        <TabsContent value="generate" className="space-y-6 mt-6">
          {/* Predefined subjects */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Sujets prédéfinis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {predefinedSubjects.map((subj) => (
                  <Button
                    key={subj.id}
                    variant="outline"
                    className="text-left justify-start h-auto py-3 hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => selectPredefinedSubject(subj.title)}
                  >
                    {subj.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subject input */}
          <Card className="border-2 border-blue-200">
            <CardContent className="pt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Sujet géopolitique
                </label>
                <Textarea
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex : La puissance américaine aujourd'hui"
                  className="min-h-[100px] text-base"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={loading || !subject.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Générer le paradoxe et la problématique
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated result */}
          {generatedParadox && (
            <Card className="border-2 border-blue-200 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
                  <CheckCircle className="h-6 w-6" />
                  Résultat de l'analyse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Sujet */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Sujet</h3>
                  <p className="text-blue-800 text-lg">{generatedParadox.sujet}</p>
                </div>

                {/* Tendances */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Tendance 1
                    </h3>
                    <p className="text-blue-800">{generatedParadox.tendance1}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4" />
                      Tendance 2
                    </h3>
                    <p className="text-blue-800">{generatedParadox.tendance2}</p>
                  </div>
                </div>

                {/* Paradoxe */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Paradoxe
                  </h3>
                  <p className="text-blue-800 text-lg font-medium">{generatedParadox.paradoxe}</p>
                </div>

                {/* Problématique */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Problématique
                  </h3>
                  <p className="text-blue-800 text-lg font-medium italic">{generatedParadox.problematique}</p>
                </div>

                {/* Justification */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Justification</h3>
                  <p className="text-blue-800">{generatedParadox.justification}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Evaluate mode */}
        <TabsContent value="evaluate" className="space-y-6 mt-6">
          {/* Input */}
          <Card className="border-2 border-blue-200">
            <CardContent className="pt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Sujet géopolitique
                </label>
                <Textarea
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex : La puissance américaine aujourd'hui"
                  className="min-h-[80px] text-base"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Votre problématique
                </label>
                <Textarea
                  value={userProblematic}
                  onChange={(e) => setUserProblematic(e.target.value)}
                  placeholder="Ex : Dans quelle mesure les États-Unis peuvent-ils conserver leur leadership mondial..."
                  className="min-h-[120px] text-base"
                />
              </div>

              <Button
                onClick={handleEvaluate}
                disabled={loading || !subject.trim() || !userProblematic.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Évaluation en cours...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Évaluer ma problématique
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Evaluation result */}
          {evaluation && (
            <Card className="border-2 border-blue-200 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
                  <CheckCircle className="h-6 w-6" />
                  Évaluation de votre problématique
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Subject and user problematic */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Sujet</h3>
                  <p className="text-blue-800">{evaluation.sujet}</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Problématique du candidat</h3>
                  <p className="text-blue-800 italic">{evaluation.problematique_candidat}</p>
                </div>

                {/* Score */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-blue-900 text-xl">Note totale</h3>
                    <Badge className="bg-blue-600 text-white text-2xl px-4 py-2">
                      {evaluation.notes.total}/25
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Clarté</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.clarte}/5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Paradoxe explicite</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.paradoxe}/5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Ancrage géopolitique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.ancrage}/5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Ouverture analytique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.ouverture}/5</Badge>
                    </div>
                    <div className="flex justify-between items-center md:col-span-2">
                      <span className="text-blue-800">Pertinence stratégique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.pertinence}/5</Badge>
                    </div>
                  </div>
                </div>

                {/* Diagnostic */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Diagnostic</h3>
                  <p className="text-blue-800">{evaluation.diagnostic}</p>
                </div>

                {/* Points forts */}
                {evaluation.points_forts && evaluation.points_forts.length > 0 && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Points forts</h3>
                    <ul className="space-y-2">
                      {evaluation.points_forts.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-800">
                          <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0 text-blue-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limites */}
                {evaluation.limites && evaluation.limites.length > 0 && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Limites</h3>
                    <ul className="space-y-2">
                      {evaluation.limites.map((limite, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-800">
                          <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                          <span>{limite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Suggestion */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Suggestion d'amélioration
                  </h3>
                  <p className="text-blue-800 text-lg font-medium italic">{evaluation.suggestion}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

