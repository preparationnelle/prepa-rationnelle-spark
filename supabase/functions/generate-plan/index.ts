
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

    const { topic, wordLimit } = await req.json();
    
    if (!topic) {
      return new Response(
        JSON.stringify({ error: "No topic provided" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const promptTemplate = `
Tu es un assistant spécialisé dans la création de plans pour des essais de géopolitique et d'actualité.
Génère un plan détaillé sur le sujet suivant: "${topic}"

Le plan doit suivre cette structure:
I. Manifestement... (État des lieux, constat, mise en contexte)
I.1 Historique : origine du phénomène, grandes dates clés.
I.2 Logiques dominantes : ce qui façonne le sujet aujourd'hui.
I.3 Paradoxe / Limites : contradictions du constat initial.

II. Les facteurs explicatifs... (Comprendre pourquoi cette situation)
II.1 Facteurs géopolitiques (puissances, conflits, rivalités, power diffusion, power transition).
II.2 Facteurs économiques (échanges, ressources, dépendances, guerre économique).
II.3 Facteurs sociaux, environnementaux et démographiques (populations, migrations, inégalités).

III. Jusqu'où va-t-on ? (Prospective, évolutions futures)
III.1 Changement d'échelle : analyse locale, régionale et mondiale.
III.2 Les stratégies (des acteurs, nouveaux acteurs, repositionnements géopolitiques, gouvernance mondiale)
III.3 Scénarios d'avenir : tensions émergentes, innovations, défis à venir.

Fournis:
- Un titre sous forme de question ou d'affirmation
- Une introduction détaillée qui pose le contexte (environ 100 mots)
- Pour chaque partie et sous-partie, un titre explicite et 2-3 lignes détaillant les arguments à développer
- Une conclusion synthétique (environ 100 mots)

${wordLimit ? `Le plan complet devrait être d'environ ${wordLimit} mots (±10%).` : 'Le plan devrait être suffisamment développé, mais concis.'}

Réponds uniquement avec un objet JSON contenant les clés: 'title', 'introduction', 'parts' (array avec title et subparts), et 'conclusion'.
`;

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
            role: "user",
            content: promptTemplate,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API error:", data.error);
      return new Response(
        JSON.stringify({ error: data.error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract the content from the OpenAI response
    const content = data.choices[0].message.content;
    
    // Parse the JSON response from the content
    let planData;
    try {
      // The response might be wrapped in ```json and ``` markers, so we need to extract the JSON
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/{[\s\S]*}/);
      const jsonString = jsonMatch ? jsonMatch[0].replace(/```json|```/g, '') : content;
      planData = JSON.parse(jsonString);
    } catch (e) {
      console.error("Error parsing JSON from OpenAI response:", e, content);
      // If parsing fails, return the raw text as a fallback
      planData = {
        title: topic,
        introduction: "Échec du parsing JSON. Voici le contenu brut:",
        parts: [],
        conclusion: content
      };
    }

    // Count words in the generated plan
    const wordCount = countWords(JSON.stringify(planData));

    return new Response(
      JSON.stringify({ 
        plan: planData,
        wordCount,
        rawResponse: content // For debugging
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-plan function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

// Helper function to count words
function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}
