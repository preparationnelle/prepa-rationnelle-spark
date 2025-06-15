
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, correction, question, studentLevel, mode } = await req.json();
    // Mode = "hint", "explanation", "answer"
    // Build a prompt following your requirements
    let specificRequest = "";
    if (mode === "hint") {
      specificRequest = "Donne un indice utile pour avancer sur la question, mais ne donne pas la réponse directe.";
    } else if (mode === "explanation") {
      specificRequest = "Fais le pont entre le sujet et le corrigé, explique étape par étape, adapte-toi au niveau précisé, simplifie, mais ne révèle pas la réponse finale.";
    } else if (mode === "answer") {
      specificRequest = "Donne la réponse à la question, accompagne d'explications pédagogiques. Termine par un message d'encouragement.";
    } else {
      specificRequest = "Agis comme un professeur particulier bienveillant de mathématiques.";
    }

    const fullPrompt = `
Sujet d'exercice :
${subject}

Corrigé complet :
${correction}

Question qui pose problème :
${question}

Niveau de l'étudiant : ${studentLevel}

${specificRequest}
SI l'élève est bloqué, donne-lui d'abord un indice. S'il insiste, propose une explication simple puis seulement la réponse complète avec encouragement. Réponses claires et concises !
`;

    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Tu es un professeur particulier de mathématiques, bienveillant et pédagogue. Ta mission est de guider l’étudiant pas à pas sans lui donner tout de suite la solution complète." },
          { role: "user", content: fullPrompt }
        ],
        max_tokens: 600,
      }),
    });

    const completionBody = await completion.json();

    const result = completionBody.choices?.[0]?.message?.content || "Réponse indisponible. Réessaie.";

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
