
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const openaiApiKey = Deno.env.get("PERPLEXITY_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const SYSTEM_PROMPT = `Pour chaque école, génère une fiche synthétique incluant : 
- 1. valeurs clés
- 2. associations étudiantes majeures/originales 
- 3. doubles diplômes et parcours uniques 
- 4. spécificités du/des campus 
- 5. événements étudiants emblématiques 
- 6. chiffres clés marquants 
- 7. actualités récentes (moins de 2 ans) citées et référencées. 
Renvoie tout de façon très structurée (titre + bullet points détaillés par section). Chaque fois que possible, donne les liens des sources.`;

const REQ_TIMEOUT_MS = 38000;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { school_slug, user_id, school_name } = await req.json();

    // 1. Check if a cached profile exists
    const { data: existing } = await supabase
      .from("school_profiles")
      .select("*")
      .eq("school_slug", school_slug)
      .eq("requested_by", user_id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ cached: true, data: existing.generated_data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Prepare Perplexity API request
    const prompt = `Dresse une fiche synthèse structurée selon ces sections pour l'école de commerce ${school_name} (${school_slug}). ${SYSTEM_PROMPT} Génère en français.`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQ_TIMEOUT_MS);

    const perplexityResponse = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          { role: 'system', content: "Sois informatif, synthétique et structuré, en français." },
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 1500,
        return_images: false,
        return_related_questions: false,
        search_domain_filter: ['perplexity.ai'],
        search_recency_filter: 'year',
        frequency_penalty: 1,
        presence_penalty: 0,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!perplexityResponse.ok) {
      const errText = await perplexityResponse.text();
      return new Response(
        JSON.stringify({ error: "Perplexity API Error", details: errText }),
        { status: 500, headers: corsHeaders }
      );
    }
    const apiRes = await perplexityResponse.json();
    const message = apiRes.choices?.[0]?.message?.content?.trim();

    // 3. Store result in school_profiles
    const insertRes = await supabase
      .from("school_profiles")
      .insert({
        school_slug,
        requested_by: user_id,
        generated_data: { text: message }
      })
      .select()
      .maybeSingle();

    return new Response(
      JSON.stringify({ cached: false, data: insertRes?.generated_data || { text: message } }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
