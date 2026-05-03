
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
    const { code, question, level, mode } = await req.json();

    let systemPrompt = "";
    let userPrompt = "";

    // Build system and user prompts depending on mode
    if (mode === "analyze") {
      systemPrompt = "Tu es un assistant pédagogique Python qui explique la logique et la structure du code, donne des indications au niveau de programmation de l'utilisateur, sans exécuter le code réellement.";
      userPrompt = `Code à analyser :\n${code}\nQuestion de l'utilisateur : ${question}\nNiveau (contexte) : ${level}`;
    } else if (mode === "debug") {
      systemPrompt = "Tu es un assistant qui identifie les erreurs, bogues ou soucis courants dans un code Python. Explique précisément où ça bloque et propose des pistes de correction sans donner tout de suite la solution complète.";
      userPrompt = `Code à diagnostiquer :\n${code}\nProblème posé : ${question}\nNiveau : ${level}`;
    } else if (mode === "improve") {
      systemPrompt = "Tu es un expert Python. Tu proposes systématiquement une version améliorée et plus lisible du code soumis (formatée en Markdown), puis tu donnes 2 à 3 conseils personnalisés adaptés au niveau précisé.";
      userPrompt = `Code d'origine :\n${code}\nQuestion/subtilité à prendre en compte : ${question}\nNiveau : ${level}`;
    } else {
      systemPrompt = "Tu es un assistant Python pédagogue.";
      userPrompt = `Code :\n${code}\nQuestion : ${question}\nNiveau : ${level}`;
    }

    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        max_tokens: 700,
        temperature: 0.3
      }),
    });

    const completionBody = await completion.json();
    const result = completionBody.choices?.[0]?.message?.content || "Aucune réponse générée. Vérifie le code et réessaie.";

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
