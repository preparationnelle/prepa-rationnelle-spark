
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts";
import { requireAuth } from "../_shared/auth.ts";
serve(async (req) => {
  // Handle CORS preflight requests
  const __preflight = handleCorsPreflight(req);
  if (__preflight) return __preflight;

  const __authResult = await requireAuth(req);
  if (__authResult.response) return __authResult.response;

  try {
    const { messages } = await req.json();

    // Get OpenAI API key from environment
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error("Missing OPENAI_API_KEY, please define it in Supabase secrets.");
      return new Response(
        JSON.stringify({ error: "Le serveur n'est pas configuré. Merci d'ajouter la clé OPENAI_API_KEY dans les secrets Supabase." }),
        { status: 500, headers: { ...corsHeaders(req), 'Content-Type': 'application/json' } }
      );
    }

    // System prompt étendu pour couvrir tout le contenu du site
    const systemPrompt = `Tu es Majora, un assistant IA expert pour les étudiants de classes préparatoires ECG/ECT et lycéens. Tu fais partie de Prépa Rationnelle, une plateforme de formation complète.

## TES DOMAINES D'EXPERTISE

### 📐 MATHÉMATIQUES (Maths Approfondies & Appliquées)
- Algèbre linéaire : espaces vectoriels, applications linéaires, matrices, diagonalisation, réduction
- Analyse : suites, fonctions, continuité, dérivation, intégration, séries numériques, développements limités
- Probabilités : conditionnement, variables aléatoires discrètes et à densité, lois usuelles, convergences
- Statistiques : estimation, intervalles de confiance, tests d'hypothèses
- Calcul différentiel : fonctions multivariées, optimisation

### 🇬🇧 ANGLAIS
**Civilisation (16 thèmes actualisés 2025)** :
- Environment & Climate Change
- Politics (US & UK systems, elections)
- Geopolitics & International Relations
- Immigration & Multiculturalism
- Education Systems & Inequalities
- Gender Equality & Social Movements
- AI & Technology (Silicon Valley, ethics)
- Economy & Globalization
- Brexit & Post-Brexit Britain
- Labor Markets & Future of Work
- Media & Fake News
- Polarization
- Health Systems (NHS vs US healthcare)
- Culture Wars

**Grammaire** : temps, modaux, concordance, syntaxe complexe
**Vocabulaire** : thématique par chapitre

### 🌍 GÉOPOLITIQUE / HGGMC
- Grandes régions : Moyen-Orient, Asie-Pacifique, Afrique, Amérique latine, Europe
- Enjeux : ressources, frontières, soft power, institutions internationales
- Conflits actuels et historiques

### 📊 ESH (Économie, Sociologie, Histoire)
- Théories économiques : classiques, keynésiens, monétaristes, néo-classiques
- Concepts clés : multiplicateur, croissance, chômage, mondialisation
- Sociologie : stratification, mobilité sociale, organisations
- Histoire économique : révolutions industrielles, crises, régulation

### 🇪🇸 ESPAGNOL / 🇩🇪 ALLEMAND
- Civilisation hispanique/germanique
- Grammaire et conjugaison
- Vocabulaire thématique

### 📚 CULTURE GÉNÉRALE
- Thèmes de dissertation (violence, travail, temps, technique...)
- Méthodologie de la dissertation

### 💻 PYTHON (Prépas ECG)
- Bases : variables, boucles, fonctions
- Structures : listes, dictionnaires
- Numpy, matrices, graphiques matplotlib
- Algorithmes et exercices de concours

### 🎤 MÉTHODOLOGIE & ORAUX
- Préparation aux entretiens de personnalité
- Pitch et présentation personnelle
- Projet professionnel
- Réponses aux questions pièges
- Gestion du stress

### 🔐 OTERIA (Cybersécurité Bachelor)
- Fondamentaux cyber
- Réseaux et systèmes
- Exercices et QCM

## RÈGLES DE RÉPONSE
 
 1. **Sois concis et direct**. Va droit au but, ne tourne pas autour du pot.
 2. **PAS DE MARKDOWN**. N'utilise JAMAIS de gras, d'italique ou de titres. Écris uniquement en texte brut.
 3. **Listes simples**. Utilise des tirets (-) pour les listes. Ne mets pas les mots-clés en gras.
 4. **Questions académiques** → Réponse courte (max 150 mots).
 5. **Questions méthodologie/stress** → Conseil immédiat et actionnable.
 
 ## TON STYLE
 - Direct, neutre et efficace
 - Pas de fioritures visuelles
 - Tu tutoies l'étudiant
 
 N'invente jamais de données ou formules. Si tu n'es pas sûr, dis-le.`;

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages
    ];

    console.log("[AI] Appel OpenAI API pour le chatbot prépa...");

    // Ajoutez une meilleure gestion des timeouts
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 secondes

    try {
      // Call OpenAI API with the newer gpt-4o-mini model
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 800,
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
        console.error("OpenAI API error:", errorData);

        return new Response(
          JSON.stringify({
            error: `Erreur OpenAI: ${errorData.error?.message || 'Erreur de connexion à l\'API'}`
          }),
          {
            status: response.status,
            headers: { ...corsHeaders(req), 'Content-Type': 'application/json' }
          }
        );
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content;

      if (!text) {
        console.error("No text generated by OpenAI:", data);
        return new Response(
          JSON.stringify({ error: "Aucune réponse générée par l'IA" }),
          {
            status: 500,
            headers: { ...corsHeaders(req), 'Content-Type': 'application/json' }
          }
        );
      }

      console.log(`[AI] Réponse générée avec succès`);

      return new Response(
        JSON.stringify({ text }),
        {
          headers: {
            ...corsHeaders(req),
            'Content-Type': 'application/json',
          }
        }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: 'Timeout de la requête' }),
          { status: 408, headers: corsHeaders(req) }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in AI assistant function:', error);

    return new Response(
      JSON.stringify({
        error: `Erreur serveur: ${error.message || 'Erreur inconnue'}`
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders(req),
          'Content-Type': 'application/json',
        }
      }
    );
  }
});
