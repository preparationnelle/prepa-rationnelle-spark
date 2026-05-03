import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'Clé API non configurée' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const { action, subject, userParadox } = await req.json();

    if (!action || !['evaluate', 'suggest'].includes(action)) {
      return new Response(JSON.stringify({ error: 'Le champ "action" doit être "evaluate" ou "suggest"' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (!subject || !subject.trim()) {
      return new Response(JSON.stringify({ error: 'Le champ "subject" est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (action === 'evaluate') {
      if (!userParadox || !userParadox.trim()) {
        return new Response(JSON.stringify({ error: 'Le champ "userParadox" est requis pour l\'évaluation' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      const evaluationPrompt = `
Vous êtes un expert en géopolitique SEVÈRE et exigeant. Évaluez ce paradoxe de dissertation avec HONNÊTETE et RIGUEUR.

IMPORTANT : Si la réponse ne fait pas sens, n'hésitez pas à noter 0/20. Soyez intransigeant sur la qualité.

SUJET : ${subject.trim()}
PARADOXE : ${userParadox.trim()}

CRITÈRES D'ÉVALUATION (sur 5 points chacun, maximum) :

1. CLARTÉ : Le paradoxe est-il clairement formulé ? Les termes sont-ils précis ?
2. TENSION : Le paradoxe montre-t-il une réelle tension contradictoire et évite-t-il les truismes ?
3. ANCRAGE : Le paradoxe est-il ancré dans des réalités géopolitiques actuelles ?
4. OUVERTURE : Le paradoxe permet-il d'ouvrir une réflexion analytique approfondie ?
5. PERTINENCE : Le paradoxe aborde-t-il les enjeux stratégiques majeurs du sujet ?

NOTE TOTALE = Somme des 5 critères (maximum 20 points)

Répondez UNIQUEMENT avec un objet JSON valide au format suivant :
{
  "sujet": "${subject.trim()}",
  "diagnostic": "Analyse critique détaillée du paradoxe (3 phrases max)",
  "notes": {
    "clarte": 0-4,
    "paradoxe": 0-4,
    "ancrage": 0-4,
    "ouverture": 0-4,
    "pertinence": 0-4,
    "total": 0-20
  },
  "points_forts": ["Point fort 1", "Point fort 2"],
  "limites": ["Limite 1", "Limite 2"],
  "suggestion": "Une suggestion de reformulation plus percutante du paradoxe"
}
`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Vous êtes un expert en géopolitique chargé d\'évaluer des problématiques de dissertation. Répondez uniquement avec du JSON valide.'
            },
            { role: 'user', content: evaluationPrompt }
          ],
          temperature: 0.3,
          max_tokens: 2000
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API OpenAI: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error('Réponse vide de l\'API OpenAI');
      }

      const evaluation = JSON.parse(content.trim());

      return new Response(JSON.stringify({ evaluation }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

    } else {
      // action === 'suggest'
      const suggestionPrompt = `
Sujet géopolitique : "${subject.trim()}"

Générez un exemple pédagogique de paradoxe pour ce sujet.

CRITÈRES :
- Paradoxe : Doit révéler une tension contradictoire réelle dans le sujet
- Pertinent : Doit aborder des enjeux stratégiques contemporains
- Accessible : Compréhensible pour un étudiant en géopolitique

Répondez UNIQUEMENT avec un objet JSON valide :
{
  "paradoxe": "Formulation concise du paradoxe (1 phrase)",
  "justification": "Brève explication pédagogique (2-3 phrases)"
}
`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Vous êtes un expert en géopolitique. Générez des exemples pédagogiques de paradoxes.'
            },
            { role: 'user', content: suggestionPrompt }
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API OpenAI: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error('Réponse vide de l\'API OpenAI');
      }

      const suggestion = JSON.parse(content.trim());

      return new Response(JSON.stringify({ suggestion }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
