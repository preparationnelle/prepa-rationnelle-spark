import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "API key not found" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let requestBody;
    try {
      requestBody = await req.json();
    } catch (e) {
      console.error("Error parsing request body:", e);
      return new Response(
        JSON.stringify({ error: "Erreur lors du parsing de la requête" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { difficulty = 'medium' } = requestBody;

    const prompt = `Tu es un expert en Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.

Génère un sujet de dissertation de culture générale authentique et stimulant, du niveau des concours BCE/CCIP.

Le sujet doit :
- Être une question ouverte et problématique
- Faire appel à des références philosophiques, littéraires ou artistiques
- Être adapté au niveau ${difficulty === 'easy' ? 'débutant' : difficulty === 'hard' ? 'avancé' : 'intermédiaire'}
- Contenir 2 à 4 termes clés à définir et analyser

Réponds UNIQUEMENT avec un objet JSON au format suivant :
{
  "sujet": "Le sujet de dissertation complet (exactement comme il apparaîtrait dans un concours)",
  "termes": ["terme1", "terme2", "terme3"],
  "indices": {
    "terme1": "Un indice court pour aider à la réflexion",
    "terme2": "Un indice court pour aider à la réflexion",
    "terme3": "Un indice court pour aider à la réflexion"
  },
  "definitions_attendues": {
    "terme1": "La définition complète et précise attendue (2-3 phrases)",
    "terme2": "La définition complète et précise attendue (2-3 phrases)",
    "terme3": "La définition complète et précise attendue (2-3 phrases)"
  },
  "contexte": "Un contexte court expliquant pourquoi ce sujet est pertinent et quels enjeux il soulève"
}

IMPORTANT : Les termes doivent être des concepts philosophiques, littéraires ou artistiques importants, pas des mots simples.`;

    console.log("Sending request to OpenAI API for culture générale subject");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Tu es un expert en Culture Générale pour les concours de prépa ECG. Tu génères des sujets de dissertation authentiques et stimulants."
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error response:", response.status, errorData);
      return new Response(
        JSON.stringify({ error: `OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API error:", data.error);
      return new Response(
        JSON.stringify({ error: data.error.message || "Erreur OpenAI" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("Invalid OpenAI response structure:", data);
      return new Response(
        JSON.stringify({ error: "Format de réponse OpenAI invalide" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Received response from OpenAI API");

    const content = data.choices[0].message.content.trim();
    
    // Parse JSON from response (might be wrapped in ```json)
    let subjectData;
    try {
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/{[\s\S]*}/);
      const jsonString = jsonMatch ? (jsonMatch[1] || jsonMatch[0].replace(/```json|```/g, '')) : content;
      subjectData = JSON.parse(jsonString);
    } catch (e) {
      console.error("Error parsing JSON:", e, content);
      return new Response(
        JSON.stringify({ error: "Erreur lors du parsing de la réponse" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!subjectData.sujet || !subjectData.termes || !Array.isArray(subjectData.termes)) {
      console.error("Invalid subject data structure:", subjectData);
      return new Response(
        JSON.stringify({ error: "Format de données invalide" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Subject generated successfully");

    return new Response(
      JSON.stringify(subjectData),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-culture-generale-subject function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

