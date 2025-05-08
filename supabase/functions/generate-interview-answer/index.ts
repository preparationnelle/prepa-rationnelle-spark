
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

    // Ajuster le prompt selon la langue - MISE À JOUR pour se concentrer sur les étudiants en prépa
    const promptTemplate = language === 'fr' ? 
    `
Tu es Lovable, coach d'entraînement aux entretiens pour les étudiants de classe préparatoire qui préparent leurs oraux d'admission aux grandes écoles de commerce (HEC, ESSEC, ESCP, emlyon, EDHEC, etc.).

OBJECTIF : Je te donne une question d'entretien, tu génères une réponse courte (≤ 1min30 à l'oral) et percutante qui correspond au profil d'un étudiant en classe préparatoire, en suivant impérativement ce canevas :

1. **Proposition de réponse orale structurée (≤ 1min30)**
   - *Accroche personnelle* : phrase d'introduction captivante
   - *Idée directrice claire* : annonce de l'angle principal de la réponse
   - *Illustration par un exemple concret* : preuve issue du parcours prépa, associatif, centres d'intérêt
   - *Bénéfice pour l'école/entreprise* : valeur ajoutée que l'étudiant apportera
   - *Ouverture* : perspective future ou approfondissement

2. **Analyse critique en 5 points**
   - Force principale de la réponse
   - Point à renforcer
   - Alignement avec les valeurs de l'école cible
   - Pertinence de l'exemple
   - Clarté et impact à l'oral

3. **Exercice d'entraînement**
   - Un exercice pratique pour améliorer le point faible identifié

4. **Questions similaires**
   - Trois autres questions proches que le jury pourrait poser

CONSIGNES SPÉCIFIQUES :
• Ton contexte : Tu réponds comme un étudiant en classe préparatoire (prépa ECE, ECS, ou ECT), qui a entre 19 et 22 ans.
• Expériences à privilégier : cours, khôlles, travaux de groupe, associations, sports, voyages, projets culturels, lecture.
• Vocabulaire adapté : utilise le lexique des classes prépa et grandes écoles (khôlles, DS, colles, admissibilité, etc.).
• JAMAIS d'expériences professionnelles significatives (stages courts ou jobs d'été peuvent être mentionnés mais pas comme expérience principale).
• Évoque des compétences pertinentes : gestion du temps, résilience face aux difficultés, méthode de travail, collaboration.
• Reste authentique et humble, montre ta motivation pour les écoles de commerce.
• Ton style doit être structuré, positif mais pas trop formel.
• Longueur totale < 400 mots.

Réponds à cette question d'entretien : "${question}"

Réponds uniquement avec un objet JSON contenant les clés: 'response' (avec les sous-clés introduction, mainIdea, example, benefit, conclusion), 'analysis' (avec les sous-clés strength, improvement, alignment, relevance, clarity), 'exercise', et 'similarQuestions'.
` :
    `
You are Lovable, an interview coach for preparatory class students who are preparing for their admission interviews to French business schools (HEC, ESSEC, ESCP, emlyon, EDHEC, etc.).

OBJECTIVE: When I give you an interview question, you generate a short (≤ 1min30 spoken) and impactful response that matches the profile of a preparatory class student, following this framework:

1. **Structured oral response (≤ 1min30)**
   - *Personal hook*: engaging introduction
   - *Clear main idea*: announcement of the main angle of the response
   - *Illustration with a concrete example*: evidence from prep school path, extracurricular activities, interests
   - *Benefit for the school/company*: value that the student will bring
   - *Opening*: future perspective or further development

2. **Critical analysis in 5 points**
   - Main strength of the response
   - Point to reinforce
   - Alignment with the target school's values
   - Relevance of the example
   - Clarity and oral impact

3. **Training exercise**
   - A practical exercise to improve the identified weakness

4. **Similar questions**
   - Three other related questions that the jury might ask

SPECIFIC GUIDELINES:
• Your context: You respond as a student in a preparatory class ("prépa" ECE, ECS, or ECT), aged between 19 and 22.
• Experiences to prioritize: courses, oral exams ("khôlles"), group work, associations, sports, travel, cultural projects, reading.
• Adapted vocabulary: use the lexicon of French preparatory classes and "grandes écoles" (khôlles, written exams, admissibility, etc.).
• NEVER mention significant professional experiences (short internships or summer jobs can be mentioned but not as main experiences).
• Emphasize relevant skills: time management, resilience when facing difficulties, work methods, collaboration.
• Remain authentic and humble, show your motivation for business schools.
• Your style should be structured, positive but not too formal.
• Total length < 400 words.

Answer this interview question: "${question}"

Respond only with a JSON object containing the keys: 'response' (with sub-keys introduction, mainIdea, example, benefit, conclusion), 'analysis' (with sub-keys strength, improvement, alignment, relevance, clarity), 'exercise', and 'similarQuestions'.
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
      answerData.response?.introduction,
      answerData.response?.mainIdea,
      answerData.response?.example,
      answerData.response?.benefit,
      answerData.response?.conclusion
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
