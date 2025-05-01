
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

    const { question, language = 'fr' } = await req.json();
    
    if (!question) {
      return new Response(
        JSON.stringify({ error: "No question provided" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Adjust the prompt based on language
    const promptTemplate = language === 'fr' ? 
    `
Tu es Lovable, coach d'entraînement aux entretiens de personnalité.
OBJECTIF : Je te donne une question d'entretien, tu génères une réponse courte (≤ 2 min à l'oral) et percutante en suivant impérativement ce canevas :

1. **Angle clé (1 phrase)**
   - Résume l'idée centrale que le candidat veut faire passer.

2. **Preuve concrète – Méthode STAR**
   - *Situation* : plante le décor en 1 phrase.
   - *Tâche* : précise le défi ou l'objectif.
   - *Action* : décrit l'action principale (verbe d'action, chiffres si possible).
   - *Résultat* : quantifie l'impact ou la leçon tirée.

3. **Lien valeur ajoutée (1 phrase)**
   - Explique en quoi cette histoire/compétence est utile pour l'école ou l'entreprise visée.

CONSIGNES :
• Style positif, authentique, français courant (évite le jargon RH).
• Pas de plan détaillé : livre directement la réponse prête à dire.
• Termine par un bref conseil de mise en voix (respiration, sourire, ton, etc.).

Réponds à cette question d'entretien : "${question}"

Réponds uniquement avec un objet JSON contenant les clés: 'angleKey', 'star' (avec les sous-clés situation, task, action, result), 'valueLink', et 'deliveryTip'.
` :
    `
You are Lovable, a personality interview training coach.
OBJECTIVE: When I give you an interview question, you generate a short (≤ 2 min spoken) and impactful response following this framework:

1. **Key Angle (1 sentence)**
   - Summarize the central idea the candidate wants to convey.

2. **Concrete Proof - STAR Method**
   - *Situation*: set the scene in 1 sentence.
   - *Task*: specify the challenge or objective.
   - *Action*: describe the main action (action verb, figures if possible).
   - *Result*: quantify the impact or lesson learned.

3. **Value-Added Link (1 sentence)**
   - Explain how this story/skill is useful for the target school or company.

GUIDELINES:
• Positive, authentic style, everyday English (avoid HR jargon).
• No detailed outline: deliver the answer ready to say.
• End with a brief voice delivery tip (breathing, smile, tone, etc.).

Answer this interview question: "${question}"

Respond only with a JSON object containing the keys: 'angleKey', 'star' (with sub-keys situation, task, action, result), 'valueLink', and 'deliveryTip'.
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
    let answerData;
    try {
      // The response might be wrapped in ```json and ``` markers, so we need to extract the JSON
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/{[\s\S]*}/);
      const jsonString = jsonMatch ? jsonMatch[0].replace(/```json|```/g, '') : content;
      answerData = JSON.parse(jsonString);
    } catch (e) {
      console.error("Error parsing JSON from OpenAI response:", e, content);
      // If parsing fails, return the raw text as a fallback
      return new Response(
        JSON.stringify({ error: "Failed to parse response", raw: content }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Count words in the generated answer (useful for time estimate)
    const fullAnswer = [
      answerData.angleKey,
      answerData.star?.situation,
      answerData.star?.task,
      answerData.star?.action,
      answerData.star?.result,
      answerData.valueLink
    ].join(' ');
    
    const wordCount = countWords(fullAnswer);

    return new Response(
      JSON.stringify({ 
        answer: answerData,
        wordCount,
        language,
        rawResponse: content // For debugging
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-interview-answer function:", error);
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
