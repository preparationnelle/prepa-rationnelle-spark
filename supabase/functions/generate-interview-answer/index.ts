
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

    // Adjust the prompt based on language - UPDATED to focus on prep school students
    const promptTemplate = language === 'fr' ? 
    `
Tu es Lovable, coach d'entraînement aux entretiens pour les étudiants de classe préparatoire qui préparent leurs oraux d'admission aux grandes écoles de commerce (HEC, ESSEC, ESCP, emlyon, EDHEC, etc.).

OBJECTIF : Je te donne une question d'entretien, tu génères une réponse courte (≤ 2 min à l'oral) et percutante qui correspond au profil d'un étudiant en classe préparatoire, en suivant impérativement ce canevas :

1. **Angle clé (1 phrase)**
   - Résume l'idée centrale que le candidat veut faire passer.

2. **Preuve concrète – Méthode STAR**
   - *Situation* : plante le décor dans un contexte académique ou extra-scolaire (classe prépa, association, projet étudiant).
   - *Tâche* : précise le défi ou l'objectif auquel l'étudiant a été confronté.
   - *Action* : décrit l'action principale réalisée par l'étudiant (initiatives, méthodes, collaboration).
   - *Résultat* : quantifie l'impact ou la leçon tirée, pertinente pour une école de commerce.

3. **Lien valeur ajoutée (1 phrase)**
   - Explique en quoi cette expérience/compétence est utile pour l'école de commerce visée.

CONSIGNES SPÉCIFIQUES :
• Ton contexte : Tu réponds comme un étudiant en classe préparatoire (prépa ECE, ECS, ou ECT), qui a entre 19 et 22 ans.
• Expériences à privilégier : cours, khôlles, travaux de groupe, associations, sports, concours, lectures, projets personnels.
• Vocabulaire adapté : utilise le lexique des classes prépa et grandes écoles (khôlles, DS, colles, admissibilité, etc.).
• JAMAIS d'expériences professionnelles significatives (stages courts ou jobs d'été peuvent être mentionnés mais pas comme expérience principale).
• Évoque des compétences pertinentes : gestion du temps, résilience face aux difficultés, méthode de travail, collaboration.
• Reste authentique et humble, montre ta motivation pour les écoles de commerce.
• Ton style doit être structuré, positif mais pas trop formel.

Réponds à cette question d'entretien : "${question}"

Réponds uniquement avec un objet JSON contenant les clés: 'angleKey', 'star' (avec les sous-clés situation, task, action, result), 'valueLink', et 'deliveryTip'.
` :
    `
You are Lovable, an interview coach for preparatory class students who are preparing for their admission interviews to French business schools (HEC, ESSEC, ESCP, emlyon, EDHEC, etc.).

OBJECTIVE: When I give you an interview question, you generate a short (≤ 2 min spoken) and impactful response that matches the profile of a preparatory class student, following this framework:

1. **Key Angle (1 sentence)**
   - Summarize the central idea the candidate wants to convey.

2. **Concrete Proof - STAR Method**
   - *Situation*: set the scene in an academic or extracurricular context (preparatory class, student association, academic project).
   - *Task*: specify the challenge or objective the student faced.
   - *Action*: describe the main action taken by the student (initiatives, methods, collaboration).
   - *Result*: quantify the impact or lesson learned, relevant to a business school.

3. **Value-Added Link (1 sentence)**
   - Explain how this experience/skill is useful for the target business school.

SPECIFIC GUIDELINES:
• Your context: You respond as a student in a preparatory class ("prépa" ECE, ECS, or ECT), aged between 19 and 22.
• Experiences to prioritize: courses, oral exams ("khôlles"), group work, associations, sports, competitions, readings, personal projects.
• Adapted vocabulary: use the lexicon of French preparatory classes and "grandes écoles" (khôlles, written exams, admissibility, etc.).
• NEVER mention significant professional experiences (short internships or summer jobs can be mentioned but not as main experiences).
• Emphasize relevant skills: time management, resilience when facing difficulties, work methods, collaboration.
• Remain authentic and humble, show your motivation for business schools.
• Your style should be structured, positive but not too formal.

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
