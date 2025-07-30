
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

const SYSTEM_PROMPT = `Tu es un expert en écoles de commerce françaises. Génère une fiche d'école personnalisée et structurée en français.

INSTRUCTIONS CRITIQUES :
1. TOUJOURS inclure des sources URL cliquables et vérifiables pour chaque information importante
2. Structurer la réponse avec des sections HTML claires et titrées
3. Personnaliser le contenu selon le profil étudiant fourni
4. Privilégier les informations récentes (moins de 2 ans)
5. Faire des liens directs entre l'école et les objectifs de l'étudiant

STRUCTURE OBLIGATOIRE :
- Utilise des balises HTML pour structurer (h3, ul, li, p, a)
- Chaque section doit avoir un titre h3
- Les liens doivent être au format <a href="URL" target="_blank">texte</a>
- Ajoute des sources à la fin de chaque section importante`;

// Handler
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Début de la génération de fiche école personnalisée avec Perplexity");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { 
      school_name, 
      user_id, 
      professional_project, 
      target_association, 
      target_sectors, 
      personal_objectives 
    } = await req.json();

    // Vérifier que l'API key Perplexity existe
    if (!perplexityApiKey) {
      return new Response(
        JSON.stringify({ error: "Clé API Perplexity non configurée" }),
        { status: 500, headers: corsHeaders }
      );
    }
    if (!school_name || !user_id) {
      return new Response(
        JSON.stringify({ error: "Nom d'école et ID utilisateur requis" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Créer une clé de cache basée sur l'école et le profil étudiant
    const profileHash = btoa(`${professional_project}-${target_association}-${target_sectors}-${personal_objectives}`).slice(0, 10);
    const cacheKey = `${school_name.toLowerCase().replace(/\s+/g, '-')}-${profileHash}`;

    // Chercher la fiche existante en cache
    const { data: existing } = await supabase
      .from("school_profiles")
      .select("*")
      .eq("school_slug", cacheKey)
      .eq("requested_by", user_id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing) {
      console.log("Fiche personnalisée trouvée en cache");
      return new Response(JSON.stringify({ cached: true, data: existing.generated_data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Construire le prompt personnalisé
    const personalizedPrompt = `Crée une fiche synthétique et personnalisée pour l'école de commerce "${school_name}" en français, adaptée à ce profil étudiant :

PROFIL ÉTUDIANT :
- Projet professionnel : ${professional_project || "Non spécifié"}
- Association visée : ${target_association || "Non spécifiée"}
- Secteurs d'évolution : ${target_sectors || "Non spécifiés"}
- Objectifs personnels : ${personal_objectives || "Non spécifiés"}

SECTIONS À INCLURE (avec sources cliquables) :
1. **Adéquation avec le projet professionnel** - Comment cette école peut aider à réaliser ce projet
2. **Associations et vie étudiante** - Focus sur les associations pertinentes pour ce profil
3. **Spécialisations et parcours** - Masters, options, doubles-diplômes en lien avec les secteurs visés
4. **Alumni et réseau** - Anciens dans les secteurs visés, entreprises partenaires
5. **Campus et opportunités** - Infrastructures, événements, stages pertinents
6. **Chiffres clés récents** - Classements, taux d'insertion, salaires dans les secteurs visés
7. **Actualités pertinentes** - Nouvelles récentes qui impactent les objectifs de l'étudiant

FORMAT DE RÉPONSE :
- Utilise des balises HTML pour structurer (h3, ul, li, p, a)
- Chaque section avec titre h3
- Liens cliquables : <a href="URL" target="_blank">texte</a>
- Sources vérifiables à la fin de chaque section
- Personnalise le contenu selon le profil fourni`;

    console.log("Appel à l'API Perplexity avec prompt personnalisé...");

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${perplexityApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-large-128k-online",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: personalizedPrompt }
        ],
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 3000,
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

    // Sauvegarder le résultat avec la clé personnalisée
    const { error: insertError } = await supabase
      .from("school_profiles")
      .insert({
        school_slug: cacheKey,
        requested_by: user_id,
        generated_data: { 
          html_content: message,
          school_name,
          profile: {
            professional_project,
            target_association,
            target_sectors,
            personal_objectives
          }
        }
      });

    if (insertError) {
      console.error("Erreur lors de la sauvegarde:", insertError);
    }

    console.log("Génération Perplexity personnalisée terminée avec succès");

    return new Response(
      JSON.stringify({
        cached: false,
        data: { 
          html_content: message,
          school_name,
          profile: {
            professional_project,
            target_association,
            target_sectors,
            personal_objectives
          }
        }
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
