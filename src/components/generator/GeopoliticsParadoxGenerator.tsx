import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, CheckCircle, Globe, BookOpen, Target } from 'lucide-react';
import { toast } from 'sonner';

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
  const [subject, setSubject] = useState('');
  const [userParadox, setUserParadox] = useState('');
  const [userProblematic, setUserProblematic] = useState('');
  const [loading, setLoading] = useState(false);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [suggestedParadox, setSuggestedParadox] = useState('');
  const [suggestedProblematic, setSuggestedProblematic] = useState('');
  const [generatingSuggestion, setGeneratingSuggestion] = useState(false);

  const handleEvaluate = async () => {
    if (!subject.trim()) {
      toast.error('Veuillez entrer un sujet géopolitique');
      return;
    }
    if (!userParadox.trim()) {
      toast.error('Veuillez entrer votre paradoxe');
      return;
    }
    if (!userProblematic.trim()) {
      toast.error('Veuillez entrer votre problématique');
      return;
    }

    setLoading(true);
    setEvaluation(null);

    try {
      const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!openaiApiKey) {
        throw new Error('Clé API OpenAI non configurée');
      }

      const evaluationPrompt = `
Vous êtes un expert en géopolitique SEVÈRE et exigeant. Évaluez cette problématique de dissertation avec HONNÊTETE et RIGUEUR.

IMPORTANT : Si la réponse ne fait pas sens, n'hésitez pas à noter 0/20. Soyez intransigeant sur la qualité.

SUJET : ${subject.trim()}
PARADOXE : ${userParadox.trim()}
PROBLÉMATIQUE : ${userProblematic.trim()}

CRITÈRES D'ÉVALUATION (sur 5 points chacun, maximum) :

1. CLARTÉ : La problématique est-elle clairement formulée ? Les termes sont-ils précis et non ambigus ?

2. PARADOXE EXPLICITE : Le paradoxe montre-t-il une réelle tension contradictoire ? Évite-t-il les faux paradoxes ?

3. ANCRAGE GÉOPOLITIQUE : La problématique est-elle ancrée dans des réalités géopolitiques actuelles concrètes ?

4. OUVERTURE ANALYTIQUE : La problématique permet-elle une analyse multidimensionnelle approfondie ?

5. PERTINENCE STRATÉGIQUE : La problématique aborde-t-elle des enjeux stratégiques majeurs avec une réelle profondeur ?

NOTE TOTALE = Somme des 5 critères (maximum 20 points)

Répondez UNIQUEMENT avec un objet JSON valide au format suivant :
{
  "sujet": "${subject.trim()}",
  "problematique_candidat": "${userProblematic.trim()}",
  "diagnostic": "Analyse critique et sévère de la qualité (2-3 phrases). N'hésitez pas à être direct si c'est médiocre.",
  "notes": {
    "clarte": 0-4,
    "paradoxe": 0-4,
    "ancrage": 0-4,
    "ouverture": 0-4,
    "pertinence": 0-4,
    "total": 0-20
  },
  "points_forts": ["Point fort 1", "Point fort 2", ...],
  "limites": ["Limite majeure 1", "Limite majeure 2", ...],
  "suggestion": "Suggestion concrète et précise pour améliorer significativement"
}
`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Vous êtes un expert en géopolitique chargé d\'évaluer des problématiques de dissertation. Répondez uniquement avec du JSON valide.'
            },
            {
              role: 'user',
              content: evaluationPrompt
            }
          ],
          temperature: 0.3,
          max_tokens: 2000
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API OpenAI: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) {
        throw new Error('Réponse vide de l\'API OpenAI');
      }

      // Parser la réponse JSON
      const evaluationData = JSON.parse(content.trim());

      setEvaluation(evaluationData);
      toast.success('Problématique évaluée !');
    } catch (error) {
      console.error('Error evaluating problematic:', error);
      toast.error('Erreur lors de l\'évaluation : ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setLoading(false);
    }
  };

  const generateSuggestion = async (selectedSubject: string) => {
    if (!selectedSubject.trim()) return;

    setGeneratingSuggestion(true);
    try {
      const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!openaiApiKey) {
        throw new Error('Clé API OpenAI non configurée');
      }

      const suggestionPrompt = `
Sujet géopolitique : "${selectedSubject}"

Générez un exemple pédagogique de paradoxe et problématique pour ce sujet.

CRITÈRES :
- Paradoxe : Doit révéler une tension contradictoire réelle dans le sujet
- Problématique : Doit être une vraie question de recherche (pas descriptive)
- Pertinent : Doit aborder des enjeux stratégiques contemporains
- Accessible : Compréhensible pour un étudiant en géopolitique

Répondez UNIQUEMENT avec un objet JSON valide :
{
  "paradoxe": "Formulation concise du paradoxe (1 phrase)",
  "problematique": "Formulation de la problématique (1-2 phrases)",
  "justification": "Brève explication pédagogique (2-3 phrases)"
}
`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Vous êtes un expert en géopolitique. Générez des exemples pédagogiques de paradoxes et problématiques.'
            },
            {
              role: 'user',
              content: suggestionPrompt
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API OpenAI: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) {
        throw new Error('Réponse vide de l\'API OpenAI');
      }

      const suggestionData = JSON.parse(content.trim());
      setSuggestedParadox(suggestionData.paradoxe);
      setSuggestedProblematic(suggestionData.problematique);

      toast.success('Suggestion générée automatiquement !');
    } catch (error) {
      console.error('Error generating suggestion:', error);
      toast.error('Erreur lors de la génération de la suggestion');
    } finally {
      setGeneratingSuggestion(false);
    }
  };

  const selectPredefinedSubject = (title: string) => {
    setSubject(title);
    setEvaluation(null);
    // Générer automatiquement une suggestion pour le sujet sélectionné
    if (title) {
      generateSuggestion(title);
    } else {
      setSuggestedParadox('');
      setSuggestedProblematic('');
    }
  };

  const useSuggestion = () => {
    setUserParadox(suggestedParadox);
    setUserProblematic(suggestedProblematic);
    toast.success('Suggestion appliquée à votre formulaire !');
  };

  return (
    <div className="space-y-6">
      {/* Predefined subjects */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-blue-900 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-700" />
            </div>
            Sujets prédéfinis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg shadow-sm">
                  <Globe className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900 block">
                    Choisissez un sujet géopolitique prédéfini
                  </label>
                  <p className="text-xs text-gray-600 mt-1">
                    10 sujets d'actualité sélectionnés pour vous aider
                  </p>
                </div>
              </div>
              <Select value={subject} onValueChange={selectPredefinedSubject}>
                <SelectTrigger className="w-full h-12 border-2 border-blue-200 hover:border-blue-300 focus:border-blue-400 transition-colors bg-white shadow-sm">
                  <SelectValue placeholder="Sélectionnez un sujet..." />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {predefinedSubjects.map((subj) => (
                    <SelectItem
                      key={subj.id}
                      value={subj.title}
                      className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="text-sm">{subj.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {subject && (
                <div className="mt-3 flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">Sujet sélectionné :</span>
                  <span className="text-green-800">{subject}</span>
                </div>
              )}
            </div>

            {/* AI Suggestions */}
            {subject && (suggestedParadox || suggestedProblematic || generatingSuggestion) && (
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-sm">
                    <Sparkles className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">💡 Suggestion IA automatique</h3>
                    <p className="text-xs text-purple-700">Exemple pédagogique pour ce sujet</p>
                  </div>
                </div>

                {generatingSuggestion ? (
                  <div className="flex items-center gap-3 text-purple-700">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Génération de la suggestion...</span>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {suggestedParadox && (
                      <div className="p-3 bg-white rounded-lg border border-purple-200">
                        <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
                          <Target className="h-3 w-3" />
                          Paradoxe suggéré :
                        </h4>
                        <p className="text-sm text-purple-800 italic">{suggestedParadox}</p>
                      </div>
                    )}

                    {suggestedProblematic && (
                      <div className="p-3 bg-white rounded-lg border border-purple-200">
                        <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
                          <BookOpen className="h-3 w-3" />
                          Problématique suggérée :
                        </h4>
                        <p className="text-sm text-purple-800">{suggestedProblematic}</p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        onClick={useSuggestion}
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        disabled={!suggestedParadox || !suggestedProblematic}
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Utiliser cette suggestion
                      </Button>
                      <Button
                        onClick={() => generateSuggestion(subject)}
                        variant="outline"
                        size="sm"
                        className="border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        <Sparkles className="h-3 w-3 mr-1" />
                        Régénérer
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Détail du sujet sélectionné */}
          {subject === 'L\'Afrique : continent d\'avenir ou champ de rivalités ?' && (
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-3">📋 Analyse détaillée du sujet</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700">🔍 Contexte géopolitique :</h4>
                  <ul className="text-yellow-800 ml-4 space-y-1">
                    <li>• <strong>Ressources naturelles</strong> : 90% des terres rares mondiales, minerais stratégiques</li>
                    <li>• <strong>Démographie</strong> : 1,4 milliard d'habitants (18% de la population mondiale)</li>
                    <li>• <strong>Économie</strong> : Croissance de 4-6% annuel, classe moyenne émergente</li>
                    <li>• <strong>Position stratégique</strong> : Route des matières premières, couloir maritime</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-700">⚔️ Rivalités actuelles :</h4>
                  <ul className="text-yellow-800 ml-4 space-y-1">
                    <li>• <strong>Chine</strong> : Prêt-à-porter, infrastructure (Route de la Soie)</li>
                    <li>• <strong>Russie</strong> : Mercenaires Wagner, influence en Afrique centrale</li>
                    <li>• <strong>États-Unis</strong> : Lutte contre le terrorisme, AFRICOM</li>
                    <li>• <strong>Europe</strong> : Accord de Cotonou, migration</li>
                    <li>• <strong>Turquie</strong> : Soft power, investissements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-700">💡 Paradoxe possible :</h4>
                  <p className="text-yellow-800 italic">
                    "L'Afrique est simultanément un continent d'avenir économique et un champ de rivalités géopolitiques exacerbées"
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-700">🎯 Problématique suggérée :</h4>
                  <p className="text-yellow-800">
                    "Dans quelle mesure la richesse en ressources naturelles de l'Afrique constitue-t-elle un atout pour son développement ou au contraire un facteur de dépendance et de rivalités internationales ?"
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Input form */}
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
              Votre paradoxe
            </label>
            <Textarea
              value={userParadox}
              onChange={(e) => setUserParadox(e.target.value)}
              placeholder="Ex : Les États-Unis sont simultanément la puissance dominante et une puissance en déclin relatif..."
              className="min-h-[100px] text-base"
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
            disabled={loading || !subject.trim() || !userParadox.trim() || !userProblematic.trim()}
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
            {/* Subject and user inputs */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Sujet</h3>
              <p className="text-blue-800">{evaluation.sujet}</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Paradoxe du candidat</h3>
              <p className="text-blue-800 italic">{userParadox || 'Paradoxe non fourni'}</p>
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
                  {evaluation.notes.total}/20
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Clarté</span>
                    <Badge variant="outline" className="bg-white">{evaluation.notes.clarte}/4</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Paradoxe explicite</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.paradoxe}/4</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Ancrage géopolitique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.ancrage}/4</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">Ouverture analytique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.ouverture}/4</Badge>
                    </div>
                    <div className="flex justify-between items-center md:col-span-2">
                      <span className="text-blue-800">Pertinence stratégique</span>
                      <Badge variant="outline" className="bg-white">{evaluation.notes.pertinence}/4</Badge>
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
    </div>
  );
};

