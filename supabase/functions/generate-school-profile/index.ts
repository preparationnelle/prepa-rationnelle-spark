
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const SYSTEM_PROMPT = `Pour chaque école, génère une fiche synthétique incluant :
- 1. valeurs clés
- 2. associations étudiantes majeures/originales 
- 3. doubles diplômes et parcours uniques 
- 4. spécificités du/des campus 
- 5. événements étudiants emblématiques 
- 6. chiffres clés marquants 
- 7. actualités récentes (moins de 2 ans) citées et référencées.
Renvoie tout de façon très structurée (titre + bullet points détaillés par section). Chaque fois que possible, donne les liens des sources.`;

// Handler
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Début de la génération de fiche école");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { school_slug, user_id, school_name } = await req.json();

    // Vérifier que l'API key OpenAI existe
    if (!openAIApiKey) {
      return new Response(
        JSON.stringify({ error: "Clé API OpenAI non configurée" }),
        { status: 500, headers: corsHeaders }
      );
    }
    if (!school_slug || !user_id || !school_name) {
      return new Response(
        JSON.stringify({ error: "Paramètres manquants" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Chercher la fiche existante en cache
    const { data: existing } = await supabase
      .from("school_profiles")
      .select("*")
      .eq("school_slug", school_slug)
      .eq("requested_by", user_id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing) {
      console.log("Fiche trouvée en cache");
      return new Response(JSON.stringify({ cached: true, data: existing.generated_data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Générer avec OpenAI
    const userPrompt = `Dresse une fiche synthèse structurée selon ces sections pour l'école de commerce ${school_name} (${school_slug}). ${SYSTEM_PROMPT} Génère en français.`;
    console.log("Appel à l'API OpenAI...");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Sois informatif, synthétique et structuré, en français." },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.3,
        max_tokens: 1800
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Erreur OpenAI:", errText);
      return new Response(
        JSON.stringify({ error: "Erreur API OpenAI", details: errText }),
        { status: 500, headers: corsHeaders }
      );
    }

    const apiRes = await response.json();
    const message = apiRes.choices?.[0]?.message?.content?.trim();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Aucune réponse générée par OpenAI." }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Sauvegarder le résultat
    const { error: insertError } = await supabase
      .from("school_profiles")
      .insert({
        school_slug,
        requested_by: user_id,
        generated_data: { text: message }
      });

    if (insertError) {
      console.error("Erreur lors de la sauvegarde:", insertError);
    }

    console.log("Génération OpenAI terminée avec succès");

    return new Response(
      JSON.stringify({
        cached: false,
        data: { text: message }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (e) {
    console.error("Erreur générale:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
