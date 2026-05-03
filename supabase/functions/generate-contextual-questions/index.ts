
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

    const promptTemplate = language === 'fr' ? 
    `
Tu es un coach d'entretien pour étudiants en classe préparatoire. 

Je te donne une question d'entretien, et tu dois générer 1 à 2 questions contextuelles (maximum 3) pour m'aider à personnaliser ma réponse. Ces questions doivent être spécifiques et ciblées pour identifier les expériences concrètes que l'étudiant peut utiliser.

Question d'entretien : "${question}"

Génère des questions qui permettront d'identifier :
- Les expériences concrètes liées à cette question
- Les situations spécifiques à valoriser
- Les exemples pertinents du parcours étudiant (classe prépa, associatif, sport, etc.)

Exemples de questions contextuelles :
- Pour "Quels sont vos défauts ?" → "Pouvez-vous me décrire une situation récente où ce trait a posé problème ?" + "Comment travaillez-vous concrètement pour vous améliorer ?"
- Pour "Pourquoi cette école ?" → "Quel projet professionnel précis souhaitez-vous développer ?" + "Quelle expérience vous a fait découvrir ce domaine ?"

Réponds uniquement avec un JSON contenant :
{
  "questions": [
    "Question contextuelle 1",
    "Question contextuelle 2"
  ]
}
` :
    `
You are an interview coach for French preparatory class students.

I give you an interview question, and you must generate 1 to 2 contextual questions (maximum 3) to help me personalize my answer. These questions should be specific and targeted to identify concrete experiences the student can use.

Interview question: "${question}"

Generate questions that will help identify:
- Concrete experiences related to this question
- Specific situations to highlight
- Relevant examples from the student's path (prep school, extracurriculars, sports, etc.)

Examples of contextual questions:
- For "What are your weaknesses?" → "Can you describe a recent situation where this trait caused problems?" + "How are you concretely working to improve?"
- For "Why this school?" → "What specific professional project do you want to develop?" + "What experience made you discover this field?"

Respond only with JSON containing:
{
  "questions": [
    "Contextual question 1",
    "Contextual question 2"
  ]
}
`;

    console.log("Sending request to OpenAI API for contextual questions...");
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
    console.log("Received response from OpenAI API");

    if (data.error) {
      console.error("OpenAI API error:", data.error);
      return new Response(
        JSON.stringify({ error: data.error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const content = data.choices[0].message.content;
    console.log("Raw response content:", content);
    
    // Parse the JSON response from the content
    let questionsData;
    try {
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/{[\s\S]*}/);
      const jsonString = jsonMatch ? jsonMatch[0].replace(/```json|```/g, '') : content;
      
      console.log("Attempting to parse JSON:", jsonString);
      questionsData = JSON.parse(jsonString);
      console.log("Successfully parsed JSON");
    } catch (e) {
      console.error("Error parsing JSON from OpenAI response:", e);
      return new Response(
        JSON.stringify({ 
          error: "Failed to parse response", 
          raw: content 
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!questionsData.questions || !Array.isArray(questionsData.questions)) {
      console.error("Invalid response structure:", questionsData);
      return new Response(
        JSON.stringify({ 
          error: "Invalid response structure", 
          raw: content 
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ 
        questions: questionsData.questions,
        language
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-contextual-questions function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
