import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { subject, mode, userProblematic } = await req.json()
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')

    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    let systemPrompt = ''
    let userPrompt = ''

    if (mode === 'generate') {
      // Mode génération de paradoxe et problématique
      systemPrompt = `Tu es un correcteur expert en géopolitique.
Ton rôle est de générer un **paradoxe** et une **problématique** de dissertation à partir d'un **sujet géopolitique** donné.

### Étapes :
1. **Analyse du sujet :**
   - Identifie les deux **tendances opposées** ou **forces contradictoires** en jeu (ex : puissance / dépendance, intégration / fragmentation, idéalisme / réalisme).
   - Reformule le **paradoxe** en une phrase claire : "Comment expliquer que [tendance A] alors même que [tendance B] ?"

2. **Formulation de la problématique :**
   - Transforme ce paradoxe en une **question centrale** commençant par "Comment…" ou "Dans quelle mesure…".
   - Assure-toi qu'elle soit :
     - claire,
     - ouverte (pas oui/non),
     - dialectique (intègre la tension du paradoxe),
     - ancrée dans une logique géopolitique (acteur, espace, puissance, rivalité, recomposition).

### Format de sortie (FORMAT JSON STRICT) :
{
  "sujet": "[sujet de départ]",
  "tendance1": "...",
  "tendance2": "...",
  "paradoxe": "...",
  "problematique": "...",
  "justification": "..."
}

Réponds UNIQUEMENT avec le JSON, sans texte supplémentaire.`

      userPrompt = `Sujet : ${subject}\n\nGénère le paradoxe et la problématique au format JSON.`

    } else if (mode === 'evaluate') {
      // Mode évaluation d'une problématique
      systemPrompt = `Tu es un examinateur de géopolitique.
Tu dois évaluer la **pertinence d'une problématique** proposée par un candidat à partir d'un **sujet donné**.

### Étapes d'analyse :
1. **Compréhension du sujet :** La problématique reformule-t-elle bien les enjeux du sujet ?
2. **Présence d'un paradoxe :** Oppose-t-elle deux tendances ou dynamiques contradictoires ?
3. **Formulation :** Est-elle formulée sous forme de question claire, ouverte, non rhétorique ?
4. **Pertinence géopolitique :** Fait-elle apparaître des acteurs, des rapports de puissance, des territoires ou des échelles d'analyse ?
5. **Profondeur :** Va-t-elle au-delà du simple "constat" pour poser une vraie **tension explicative** ?

### Grille d'évaluation :
| Critère | Description | Note /5 |
|----------|--------------|---------|
| 1. Clarté | Question compréhensible et bien posée | /5 |
| 2. Paradoxe explicite | Présence d'une contradiction féconde | /5 |
| 3. Ancrage géopolitique | Mention d'acteurs, d'espaces ou de puissances | /5 |
| 4. Ouverture analytique | Question ouverte, non descriptive | /5 |
| 5. Pertinence stratégique | Capacité à structurer un plan dialectique | /5 |

### Format de sortie (FORMAT JSON STRICT) :
{
  "sujet": "...",
  "problematique_candidat": "...",
  "diagnostic": "...",
  "notes": {
    "clarte": X,
    "paradoxe": X,
    "ancrage": X,
    "ouverture": X,
    "pertinence": X,
    "total": X
  },
  "points_forts": ["...", "..."],
  "limites": ["...", "..."],
  "suggestion": "..."
}

Réponds UNIQUEMENT avec le JSON, sans texte supplémentaire.`

      userPrompt = `Sujet : ${subject}\nProblématique du candidat : ${userProblematic}\n\nÉvalue cette problématique au format JSON.`
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('OpenAI API error:', error)
      throw new Error('OpenAI API request failed')
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    // Parse le JSON de la réponse
    let parsedContent
    try {
      // Nettoyer le contenu si nécessaire (enlever les blocs de code markdown)
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      parsedContent = JSON.parse(cleanContent)
    } catch (e) {
      console.error('Failed to parse OpenAI response as JSON:', content)
      parsedContent = { raw_content: content }
    }

    return new Response(
      JSON.stringify({ content: parsedContent }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

