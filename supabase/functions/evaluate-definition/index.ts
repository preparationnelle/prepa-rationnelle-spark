import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EvalRequest {
  term: string;
  userDefinition: string;
  referenceDefinition: string;
  language?: 'fr' | 'en';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { term, userDefinition, referenceDefinition, language = 'fr' }: EvalRequest = await req.json();

    if (!openAIApiKey) {
      // Graceful fallback when key is missing
      return new Response(
        JSON.stringify({
          feedback: `${language === 'fr' ? 'API indisponible.' : 'API unavailable.'} Votre proposition: "${userDefinition}".\n\n${language === 'fr' ? 'Référence' : 'Reference'}: ${referenceDefinition}`,
          score: null,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const refWordCount = referenceDefinition?.trim()?.split(/\s+/).length ?? 0;
    const userWordCount = userDefinition?.trim()?.split(/\s+/).length ?? 0;

    const prompt = language === 'fr'
      ? `Tu es correcteur de khôlle en prépa HGG. Corrige une définition de candidat.

Terme: ${term}
Définition du candidat (mots:${userWordCount}): ${userDefinition}
Définition de référence (mots:${refWordCount}): ${referenceDefinition}

Objectif: dire si la définition est bonne et comment l'améliorer.
Barème détaillé (total 100):
- Couverture des thématiques essentielles (mots-clés/idées majeures vs la référence): 60
- Longueur raisonnable et proche de la référence (≈ ±30% de la longueur de la référence, pénalités si <60% ou >140%): 20
- Clarté/rigueur (précision, absence de hors-sujet, structure): 20

Consignes:
- Identifie d'abord 6 à 10 mots-clés essentiels à partir de la référence.
- Marque ceux couverts par le candidat et ceux manquants.
- Accorde un petit bonus si l'angle est différent mais cohérent et couvre l'essentiel; pénalise les oublis majeurs.
- Donne un feedback court, très actionnable.
- Donne comment la définition pourrait être mobilisée en géopolitique (exemples d'usages/sujets).

Réponds STRICTEMENT en JSON (sans Markdown) avec exactement ces champs:
{
  "score": number (0-100),
  "subscores": { "coverage": number, "length": number, "clarity": number },
  "coveredKeywords": string[],
  "missingKeywords": string[],
  "goodPoints": string[],
  "missingPoints": string[],
  "feedback": string,  // 3 à 5 phrases maximum
  "advice": string[],  // 3 conseils courts
  "usage": string      // 1-2 phrases: comment l'utiliser dans une copie
}`
      : `You are a prep-class examiner. Grade a candidate definition.

Term: ${term}
Candidate definition (words:${userWordCount}): ${userDefinition}
Reference definition (words:${refWordCount}): ${referenceDefinition}

Goal: decide if it's good and how to improve.
Rubric (100): coverage of key themes 60, length close to reference (±30%) 20, clarity/rigor 20.
Instructions: extract 6-10 keywords from the reference, mark covered/missing, allow alternative but coherent angles, penalize omissions, provide brief actionable feedback and how to use it in geopolitics (use cases/topics).

Reply STRICTLY as JSON with fields: {
  "score": number,
  "subscores": { "coverage": number, "length": number, "clarity": number },
  "coveredKeywords": string[],
  "missingKeywords": string[],
  "goodPoints": string[],
  "missingPoints": string[],
  "feedback": string,
  "advice": string[],
  "usage": string
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? '';

    // Try to parse JSON; if fails, wrap as feedback
    let parsed: { score: number | null; feedback: string } = { score: null, feedback: content };
    try {
      parsed = JSON.parse(content);
    } catch (_) {
      parsed = { score: null, feedback: content };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('evaluate-definition error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Evaluation failed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});


