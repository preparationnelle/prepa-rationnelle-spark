
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const perplexityApiKey = Deno.env.get("PERPLEXITY_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const SYSTEM_PROMPT = `Pour chaque école de commerce, génère une fiche synthétique incluant :
- 1. valeurs clés et mission de l'école
- 2. associations étudiantes majeures/originales 
- 3. doubles diplômes et parcours uniques disponibles
- 4. spécificités du/des campus (localisation, infrastructures)
- 5. événements étudiants emblématiques et traditions
- 6. chiffres clés marquants (nombre d'étudiants, classements récents)
- 7. actualités récentes (moins de 2 ans) avec sources citées
Renvoie tout de façon très structurée (titre + bullet points détaillés par section). Privilégie les informations récentes et vérifiées. Chaque fois que possible, cite les sources.`;

// Handler
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Début de la génération de fiche école avec Perplexity");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { school_slug, user_id, school_name } = await req.json();

    // Vérifier que l'API key Perplexity existe
    if (!perplexityApiKey) {
      return new Response(
        JSON.stringify({ error: "Clé API Perplexity non configurée" }),
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

    // Générer avec Perplexity
    const userPrompt = `Dresse une fiche synthèse structurée selon ces sections pour l'école de commerce ${school_name} (${school_slug}). ${SYSTEM_PROMPT} Génère en français et privilégie les informations les plus récentes disponibles.`;
    console.log("Appel à l'API Perplexity...");

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${perplexityApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-large-128k-online",
        messages: [
          { role: "system", content: "Sois informatif, synthétique et structuré, en français. Privilégie les informations récentes et vérifiées." },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 2000,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: "month",
        frequency_penalty: 1,
        presence_penalty: 0
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Erreur Perplexity:", errText);
      return new Response(
        JSON.stringify({ error: "Erreur API Perplexity", details: errText }),
        { status: 500, headers: corsHeaders }
      );
    }

    const apiRes = await response.json();
    const message = apiRes.choices?.[0]?.message?.content?.trim();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Aucune réponse générée par Perplexity." }),
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

    console.log("Génération Perplexity terminée avec succès");

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
