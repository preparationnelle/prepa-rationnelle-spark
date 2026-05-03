import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'Clé API non configurée' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const { details } = await req.json();

    if (!details || !details.trim()) {
      return new Response(JSON.stringify({ error: 'Le champ "details" est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erreur OpenAI: ${response.status} - ${errorData.error?.message || 'Erreur inconnue'}`);
    }

    const data = await response.json();
    const paragraph = data.choices?.[0]?.message?.content?.trim();

    if (!paragraph) {
      throw new Error('Le paragraphe généré est vide');
    }

    return new Response(JSON.stringify({ paragraph }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
