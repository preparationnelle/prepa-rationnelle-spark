import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Brain, Loader2, Copy, Check, Sparkles, Info, AlertCircle, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const ProblematiquesGenerator = () => {
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [problematique, setProblematique] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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

      const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

      if (!OPENAI_API_KEY) {
        throw new Error('Clé API OpenAI non configurée. Veuillez contacter l\'administrateur.');
      }

      const prompt = `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.

Ta mission : analyser un sujet de dissertation et formuler une problématique claire, percutante et dialectique.

SUJET À ANALYSER :
"${subject.trim()}"

BASE DE CONNAISSANCES SUR LE CONCEPT DE "JUGER" :

I. Ce que « juger » veut dire (opérations et portée)
• Opérer : attribuer, relier, qualifier (vrai/faux, juste/injuste, beau/laid), hiérarchiser.
• Comparer ou trancher ? Comparer prépare, trancher clôt. Le bon jugement sait quand s'arrêter.
• Juger ≠ condamner : sanctionner est un usage possible du jugement, pas son essence.
• Descartes : jugement = acte de la volonté appliquée à des idées plus ou moins claires. Risque majeur : l'assentiment précipité.
• Kant : juger = subsumer le particulier sous l'universel (entendement), et réfléchir sans concept prédonné (jugement réfléchissant, esthétique/téléologique).

II. Lignes de fracture conceptuelles
1. Juger / Comprendre / Décider
• Comprendre explique (causes/raisons) ; juger évalue ; décider engage.
• Tensions classiques : « comprendre n'est pas excuser », « décider sans juger = arbitraire ».

2. Juger / Connaître
• Connaître établit du vrai ; juger valide (ou non) une prétention à la vérité/valeur.
• « Juger en connaissance de cause » = articuler faits, normes pertinentes et responsabilité de conclure.

3. Juger / Raisonner
• Raisonner produit des inférences ; juger conclut (et assume le risque d'erreur).

4. Percevoir / Sentir / Juger
• La perception brute existe-t-elle ? Ou est-elle déjà « chargée de théorie » (et de jugements implicites) ?

5. Préjuger / Juger
• Préjugé = jugement avant examen. Certains préjugés sont des heuristiques utiles, jusqu'à preuve du contraire.

III. Typologie utile (au lieu des redites)
• Logique : jugements analytiques/synthétiques ; nécessité/contingence ; validité.
• De fait / de valeur : distinguer constat et évaluation sans les opposer naïvement.
• Pratique : moral (bien/mal), politique (opportun/juste), juridique (licite/illicite), technique (efficace/inefficace), esthétique (beau/sans intérêt).
• Singulier/Universel : juger un cas (équité) vs. juger par règle (égalité).
• Individuel/Collectif : jugement intime, jury, opinion publique, comités d'experts.

IV. Domaines d'exercice (questions actuelles et fécondes)
1. Judiciaire : impartialité, fabrication du droit, finalités concurrentes, équité vs légalité
2. Moral : vérité vs justification, intention/conséquences/vertus, dilemmes
3. Politique : qui juge les gouvernants, rationalité vs prudence, moralisation
4. Social : pouvoir des jugements sociaux, réputation, cancel culture
5. Esthétique : universalité sans concept vs pluralisme, expertise vs goût profane
6. Scientifique : qualité des preuves, robustesse des modèles, éthique
7. Histoire : « l'histoire jugera », rôle de l'historien
8. Soi et autrui : se juger soi-même, respecter autrui
9. Interculturel : ethnocentrisme, universaux minimaux
10. Économie : efficacité vs justice

V. Obstacles et conditions d'un bon jugement
• Obstacles : passions, intérêts, conformisme, biais cognitifs, langage flou, info pauvre
• Conditions : information suffisante, normes explicites, capacité de révision, lenteur, courage
• Suspension : l'épochè comme hygiène

VI. Grille rapide « bien juger »
1. Faits (qualité des sources, contradictoire)
2. Normes (laquelle ? pourquoi elle ?)
3. Argument (validité, alternatives, objections)
4. Décision (qui assume ? pour qui ? révisable comment ?)
5. Effets (conséquences prévues, effets pervers)

VII. Couples de thèses opposées
• Juger, c'est penser en public / Penser, c'est juger en privé
• Sans critère, pas de jugement / Le meilleur jugement invente son critère
• Juger vite, c'est juger mal / Juger tard, c'est parfois ne plus juger
• Etc. (tous les couples listés dans la base)

INSTRUCTIONS POUR LA PROBLÉMATIQUE :
1. ANALYSE le sujet et IDENTIFIE les enjeux liés au concept de "juger"
2. FORMULE une problématique dialectique qui pose une tension conceptuelle
3. La problématique doit commencer par "Comment...", "Dans quelle mesure...", "Faut-il..." ou formule similaire
4. Elle doit intégrer au moins 2 aspects opposés du jugement (ex: comprendre/juger, particulier/universel, etc.)
5. Elle doit être FÉCONDE : permettre un développement en 3 parties équilibrées
6. Elle doit être PERTINENTE : s'ancrer dans les enjeux réels du sujet

Réponds UNIQUEMENT avec la problématique formulée, sans explications supplémentaires.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: 'Tu es un expert en dissertation de Culture Générale pour les concours de prépa ECG. Tu analyses les sujets et formules des problématiques dialectiques et fécondes.'
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.6,
          max_tokens: 800,
        }),
      });

      console.log('OpenAI API response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('OpenAI API error response:', response.status, errorData);
        throw new Error(`Erreur OpenAI: ${response.status} - ${errorData.error?.message || 'Erreur inconnue'}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error('OpenAI API error:', data.error);
        throw new Error(data.error.message || "Erreur OpenAI");
      }

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('Invalid OpenAI response structure:', data);
        throw new Error("Format de réponse OpenAI invalide");
      }

      const generatedProblematique = data.choices[0].message.content.trim();

      if (!generatedProblematique) {
        console.error('Empty problematique in response');
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
    setSubject('Pensez-vous, comme l\'a écrit Montaigne, qu\'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?');
  };

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-gradient-to-br from-white via-orange-50/30 to-white border border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            <Brain className="h-6 w-6 text-orange-600" />
            Générateur de Problématiques
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
              placeholder="Ex: Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?"
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


