import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BookOpen, Loader2, Copy, Check, Sparkles, Info, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const CultureGeneraleParagraphGenerator = () => {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [paragraph, setParagraph] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!details.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez décrire les détails de votre paragraphe.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setParagraph(null);

    try {
      console.log('Calling OpenAI API directly with details:', details.trim());

      const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

      if (!OPENAI_API_KEY) {
        throw new Error('Clé API OpenAI non configurée. Veuillez contacter l\'administrateur.');
      }

      const prompt = `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.

Ta mission : rédiger un paragraphe de dissertation de culture générale parfait, méthodique et conforme aux attentes des correcteurs.

Voici les détails fournis par l'utilisateur pour générer le paragraphe :
"${details.trim()}"

RÈGLES STRICTES POUR UN BON PARAGRAPHE :

1. STRUCTURE DU PARAGRAPHE :
   - Commence par une phrase de transition qui fait le bilan de la sous-partie précédente et montre ses limites
   - Développe ensuite ton nouvel argument de manière claire et structurée
   - Appuie cet argument avec une référence d'auteur (si fournie) ou une analyse approfondie
   - Conclus le paragraphe en préparant la transition vers le suivant

2. RÉFÉRENCES :
   - Une référence par paragraphe maximum (1-2 maximum)
   - La référence doit être parfaitement maîtrisée : auteur, titre de l'œuvre, explication du lien avec l'argument
   - Ne commence JAMAIS le paragraphe par une référence ("Descartes dit que...")
   - La référence vient APRÈS l'argument pour le renforcer
   - Multiplie les types de références (philosophiques, littéraires, musicales, picturales, architecturales)
   - Souligne les titres d'œuvres dans ta réponse

3. STYLE ET MÉTHODE :
   - Soigne l'écriture, évite les ratures
   - N'hésite pas à soulever des questionnements : cela montre que tu réfléchis
   - Fais toujours un lien avec ce qui a été fait avant pour montrer l'enchaînement logique

4. LONGUEUR ET QUALITÉ :
   - Un paragraphe = une idée développée
   - Environ 150-250 mots
   - Cohérent, méthodique, qui répond aux attentes
   - Évite les fautes d'orthographe

Analyse les détails fournis et génère un paragraphe de qualité basé sur ces informations. Réponds UNIQUEMENT avec le paragraphe, sans commentaires supplémentaires.`;

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
              content: 'Tu es un expert en dissertation de Culture Générale pour les concours de prépa ECG. Tu rédiges des paragraphes parfaits, méthodiques et conformes aux attentes des correcteurs.'
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 1000,
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

      const generatedParagraph = data.choices[0].message.content.trim();

      if (!generatedParagraph) {
        console.error('Empty paragraph in response');
        throw new Error("Le paragraphe généré est vide");
      }

      const wordCount = generatedParagraph.split(/\s+/).filter(Boolean).length;

      console.log('Paragraph generated successfully, word count:', wordCount);

      setParagraph(generatedParagraph);
      setWordCount(wordCount);

      toast({
        title: "Paragraphe généré !",
        description: `Votre paragraphe de culture générale a été généré avec succès (${wordCount} mots).`,
      });
    } catch (error: any) {
      console.error('Error generating paragraph:', error);
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
    if (paragraph) {
      navigator.clipboard.writeText(paragraph);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copié !",
        description: "Le paragraphe a été copié dans le presse-papiers.",
      });
    }
  };

  const loadExample = () => {
    setDetails(`Sujet : Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?

Argument à développer : Pour saisir la proximité avec l'animal, il faut se détacher des a priori imposés par notre culture.

Contexte : Les paragraphes précédents ont montré que l'homme partage de nombreuses caractéristiques avec l'animal.

Référence : Montaigne, Essais`);
  };

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-gradient-to-br from-white via-orange-50/30 to-white border border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            <BookOpen className="h-6 w-6 text-orange-600" />
            Rédacteur de Paragraphe de Culture Générale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="bg-orange-50 border-orange-200">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-sm text-gray-700">
              <strong>Comment faire un bon paragraphe ?</strong> Un paragraphe = une idée. 
              Commence par une transition avec le précédent, développe ton argument, puis appuie-le avec une référence (1-2 max). 
              Soigne l'écriture et fais des liens logiques entre les paragraphes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Formulaire */}
      <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-orange-600" />
            Informations pour la génération
          </CardTitle>
        </CardHeader>
          <CardContent className="space-y-6">
            {/* Zone de détails */}
            <div className="space-y-2">
              <Label htmlFor="details" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                Détails du paragraphe à générer <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="details"
                placeholder={`Décrivez le paragraphe que vous voulez générer :

Sujet : Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?

Argument : Pour saisir la proximité avec l'animal, il faut se détacher des a priori imposés par notre culture.

Contexte : Les paragraphes précédents ont montré que l'homme partage de nombreuses caractéristiques avec l'animal.

Référence : Montaigne, Essais

Décrivez autant de détails que possible pour obtenir un paragraphe de qualité !`}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="min-h-[200px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-gray-50 rounded-lg resize-none"
              />
              <p className="text-xs text-gray-500">
                Plus vous donnez de détails (sujet, argument, contexte, références), mieux sera le paragraphe généré.
              </p>
            </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              onClick={loadExample}
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
              disabled={!details.trim() || loading}
              className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Génération en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Générer le paragraphe</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Résultat */}
      {paragraph && (
        <Card className="bg-white rounded-xl shadow-lg border border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-600" />
                Paragraphe généré
              </CardTitle>
              <div className="flex items-center gap-2">
                {wordCount > 0 && (
                  <span className="text-sm text-gray-500 font-medium">
                    {wordCount} mots
                  </span>
                )}
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
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {paragraph}
                </p>
              </div>
            </div>
            
            {/* Conseils */}
            <Alert className="mt-4 bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm text-gray-700">
                <strong>Conseils :</strong> Vérifie que le paragraphe commence bien par une transition, 
                développe clairement l'argument, et utilise la référence de manière pertinente. 
                N'oublie pas de souligner les titres d'œuvres dans ta copie finale.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

