import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Loader2, Languages, Target, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { GrammarErrorMemory } from './GrammarErrorMemory';
import { SimilarSentencesGenerator } from './SimilarSentencesGenerator';

interface ThemeSentence {
  french: string;
  translation: string;
  grammar_points: string[];
  notes?: string;
}

interface ThemeEvaluation {
  score: number;
  severity: {
    barbarism: string[];
    omission: string[];
    grammar: string[];
    lexicon: string[];
    spelling: string[];
    other: string[];
  };
  corrected: string;
  reference: string;
  grammar_rules: string[];
  tips: string[];
  weak_grammar_points: string[];
  similar_sentences: string[];
  flashcard_rule: string;
}

const THEMES_SENTENCES: Record<string, ThemeSentence[]> = {
  en: [
    {
      french: "Les entreprises devront s'adapter aux nouvelles réglementations d'ici 2025.",
      translation: "Companies will have to adapt to the new regulations by 2025.",
      grammar_points: ["will have to + infinitive"],
      notes: "Utilisez 'will have to' pour exprimer une obligation future."
    },
    {
      french: "Les prix de l'énergie auraient pu baisser avec de meilleures négociations.",
      translation: "Energy prices could have decreased with better negotiations.",
      grammar_points: ["could have + past participle"],
      notes: "Employez 'could have' pour exprimer une possibilité passée non réalisée."
    },
    {
      french: "Les mesures de sécurité auraient dû être renforcées plus tôt.",
      translation: "Security measures should have been reinforced earlier.",
      grammar_points: ["should have been + past participle"],
      notes: "'Should have been' indique un regret ou une critique sur une action passée."
    },
    {
      french: "La croissance économique a ralenti ces derniers mois.",
      translation: "Economic growth has slowed down in recent months.",
      grammar_points: ["present perfect"],
      notes: "Le 'present perfect' est utilisé pour des actions passées avec un impact actuel."
    },
    {
      french: "Si les taux d'intérêt étaient plus bas, plus de gens achèteraient des maisons.",
      translation: "If interest rates were lower, more people would buy houses.",
      grammar_points: ["if + past simple"],
      notes: "Structure conditionnelle de type 2 : 'if + past simple, would + infinitive'."
    }
  ],
  de: [
    {
      french: "Si l'économie était plus forte, il y aurait moins de chômeurs.",
      translation: "Wenn die Wirtschaft stärker wäre, gäbe es weniger Arbeitslose.",
      grammar_points: ["Konjunktiv II"],
      notes: "Utilisez le Konjunktiv II pour exprimer des situations hypothétiques."
    },
    {
      french: "Les entreprises devront modifier leurs stratégies.",
      translation: "Die Unternehmen werden ihre Strategien ändern müssen.",
      grammar_points: ["werden + müssen"],
      notes: "'Werden + müssen' exprime une nécessité future."
    }
  ],
  es: [
    {
      french: "L'économie aurait crû davantage avec de meilleures politiques.",
      translation: "La economía habría crecido más con mejores políticas.",
      grammar_points: ["condicional compuesto"],
      notes: "Le conditionnel composé exprime des actions hypothétiques passées."
    },
    {
      french: "Le pays devra mettre en œuvre des réformes structurelles.",
      translation: "El país tendrá que implementar reformas estructurales.",
      grammar_points: ["tendrá que + infinitive"],
      notes: "'Tendrá que' indique une obligation future."
    }
  ]
};

export const ThemeGrammaticalGenerator: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'de' | 'es'>('en');
  const [currentSentence, setCurrentSentence] = useState<ThemeSentence | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<ThemeEvaluation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [newError, setNewError] = useState<any>(null);
  const [weakGrammarPoints, setWeakGrammarPoints] = useState<string[]>([]);
  const [similarSentences, setSimilarSentences] = useState<string[]>([]);

  const { currentUser } = useAuth();
  const { toast } = useToast();

  const generateNewSentence = async () => {
    setIsGenerating(true);
    try {
      const sentences = THEMES_SENTENCES[language];
      if (sentences && sentences.length > 0) {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        setCurrentSentence(sentences[randomIndex]);
        setStudentAnswer('');
        setEvaluation(null);
      } else {
        toast({
          title: "Aucune phrase disponible",
          description: "Aucune phrase n'est disponible pour cette langue.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
      toast({
        title: "Erreur de génération",
        description: "Une erreur est survenue lors de la génération de la phrase.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const evaluateAnswer = async () => {
    if (!currentSentence || !studentAnswer.trim()) {
      toast({
        title: "Réponse requise",
        description: "Veuillez entrer votre traduction avant d'évaluer.",
        variant: "destructive"
      });
      return;
    }

    setIsEvaluating(true);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-theme-translation', {
        body: {
          language,
          student: studentAnswer.trim(),
          french: currentSentence.french,
          reference: currentSentence.translation,
          grammar_points: currentSentence.grammar_points
        }
      });

      if (error) throw error;

      setEvaluation(data);
      setWeakGrammarPoints(data.weak_grammar_points || []);
      setSimilarSentences(data.similar_sentences || []);

      // Sauvegarder l'erreur pour la mémoire si il y a des erreurs grammaticales
      if (data.severity.grammar?.length > 0 && currentUser?.id) {
        const grammarError = {
          grammar_point: data.weak_grammar_points?.[0] || currentSentence.grammar_points[0],
          rule: data.flashcard_rule || "Règle à réviser",
          french_sentence: currentSentence.french,
          student_answer: studentAnswer.trim(),
          correct_answer: data.corrected || currentSentence.translation,
          error_type: data.severity.grammar[0] || "Erreur grammaticale"
        };
        setNewError(grammarError);
      }

    } catch (error) {
      console.error('Erreur lors de l\'évaluation:', error);
      toast({
        title: "Erreur d'évaluation",
        description: "Une erreur est survenue lors de l'évaluation de votre réponse.",
        variant: "destructive"
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  const resetExercise = () => {
    setCurrentSentence(null);
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    setNewError(null);
    setWeakGrammarPoints([]);
    setSimilarSentences([]);
  };

  const handlePracticeSentence = (sentence: string) => {
    // Logique pour pratiquer une phrase similaire
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    toast({
      title: "Nouvelle phrase à pratiquer",
      description: "Traduisez cette phrase similaire pour renforcer vos acquis !",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-6 w-6 text-blue-600" />
            Thème Grammatical
          </CardTitle>
          <p className="text-muted-foreground">
            Entraînez-vous à la traduction avec correction automatique et analyse détaillée
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sélection de langue */}
          <div>
            <label className="text-sm font-medium mb-2 block">Langue cible</label>
            <ToggleGroup
              type="single"
              value={language}
              onValueChange={(value) => value && setLanguage(value as 'en' | 'de' | 'es')}
              className="justify-start"
            >
              <ToggleGroupItem value="en">🇬🇧 Anglais</ToggleGroupItem>
              <ToggleGroupItem value="de">🇩🇪 Allemand</ToggleGroupItem>
              <ToggleGroupItem value="es">🇪🇸 Espagnol</ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Zone d'exercice */}
          {!currentSentence ? (
            <div className="text-center py-8">
              <Button
                onClick={generateNewSentence}
                disabled={isGenerating}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Target className="mr-2 h-4 w-4" />
                    Générer une phrase à traduire
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Phrase à traduire */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">À traduire :</p>
                <p className="text-lg text-blue-800">{currentSentence.french}</p>
                
                {/* Bouton pour afficher/masquer les indices */}
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowHints(!showHints)}
                    className="text-blue-700 hover:text-blue-800"
                  >
                    {showHints ? (
                      <>
                        <EyeOff className="mr-2 h-3 w-3" />
                        Masquer les indices
                      </>
                    ) : (
                      <>
                        <Eye className="mr-2 h-3 w-3" />
                        Voir les indices
                      </>
                    )}
                  </Button>
                </div>

                {/* Indices conditionnels */}
                {showHints && (
                  <div className="mt-4 space-y-2">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Points grammaticaux :</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {currentSentence.grammar_points.map((point, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {point}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {currentSentence.notes && (
                      <div>
                        <p className="text-sm font-medium text-blue-700">Notes :</p>
                        <p className="text-sm text-blue-600 italic">{currentSentence.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Zone de réponse */}
              <div>
                <label className="text-sm font-medium mb-2 block">Votre traduction :</label>
                <Textarea
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  placeholder={`Écrivez votre traduction en ${language === 'en' ? 'anglais' : language === 'de' ? 'allemand' : 'espagnol'}...`}
                  className="min-h-[100px]"
                  disabled={isEvaluating}
                />
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3">
                <Button
                  onClick={evaluateAnswer}
                  disabled={isEvaluating || !studentAnswer.trim()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Évaluation...
                    </>
                  ) : (
                    'Évaluer ma réponse'
                  )}
                </Button>
                <Button onClick={resetExercise} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Nouvelle phrase
                </Button>
              </div>
            </div>
          )}

          {/* Résultats de l'évaluation */}
          {evaluation && (
            <div className="bg-white border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Résultats de l'évaluation</h3>
                <Badge
                  variant={evaluation.score >= 8 ? "default" : evaluation.score >= 6 ? "secondary" : "destructive"}
                  className="text-lg px-3 py-1"
                >
                  {evaluation.score}/10
                </Badge>
              </div>

              {/* Corrections */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-red-700">Votre réponse :</p>
                  <p className="text-red-600 bg-red-50 p-2 rounded">{studentAnswer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Correction :</p>
                  <p className="text-green-600 bg-green-50 p-2 rounded">{evaluation.corrected}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Version parfaite :</p>
                  <p className="text-blue-600 bg-blue-50 p-2 rounded">{evaluation.reference}</p>
                </div>
              </div>

              {/* Erreurs détaillées */}
              {Object.entries(evaluation.severity).some(([_, errors]) => errors.length > 0) && (
                <div>
                  <p className="text-sm font-medium mb-2">Erreurs détectées :</p>
                  <div className="space-y-2">
                    {Object.entries(evaluation.severity).map(([type, errors]) => 
                      errors.length > 0 && (
                        <div key={type} className="bg-orange-50 p-2 rounded">
                          <p className="text-xs font-medium text-orange-700 capitalize">{type} :</p>
                          <ul className="text-sm text-orange-600 ml-4">
                            {errors.map((error, index) => (
                              <li key={index} className="list-disc">{error}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Règles grammaticales */}
              {evaluation.grammar_rules.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Règles à retenir :</p>
                  <ul className="space-y-1">
                    {evaluation.grammar_rules.map((rule, index) => (
                      <li key={index} className="text-sm text-blue-600 bg-blue-50 p-2 rounded flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conseils */}
              {evaluation.tips.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Conseils :</p>
                  <ul className="space-y-1">
                    {evaluation.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-purple-600 bg-purple-50 p-2 rounded flex items-start">
                        <span className="text-purple-500 mr-2">💡</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Générateur de phrases similaires */}
      <SimilarSentencesGenerator
        weakGrammarPoints={weakGrammarPoints}
        similarSentences={similarSentences}
        language={language}
        onPracticeSentence={handlePracticeSentence}
      />

      {/* Mémoire des erreurs grammaticales */}
      <GrammarErrorMemory 
        language={language} 
        newError={newError}
      />
    </div>
  );
};
