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
        const { subject, year, userId } = await req.json();

        if (!subject) {
            throw new Error('Subject is required');
        }

        const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
        if (!OPENAI_API_KEY) {
            throw new Error('OpenAI API key not configured');
        }

        // Build context based on year
        const yearContext = year === 1
            ? `Le sujet relève de la Culture Générale en 1ère année (thèmes généraux: liberté, travail, vérité, technique, art, justice, etc.)`
            : `Le sujet relève de la Culture Générale en 2ème année, centré sur le thème "Juger" (se juger, juger autrui, jugement moral, esthétique, juridique, etc.)`;

        const prompt = `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.
${yearContext}

SUJET DE DISSERTATION :
"${subject}"

Ta mission : identifier LE paradoxe central de ce sujet, c'est-à-dire la tension apparemment contradictoire qui structure la réflexion philosophique.

RAPPEL MÉTHODOLOGIQUE :
Un bon paradoxe en Culture Générale :
- Révèle une tension conceptuelle interne au sujet
- N'est pas une simple opposition binaire (thèse/antithèse)
- Permet de problématiser et de nourrir une réflexion dialectique
- S'ancre dans des enjeux philosophiques profonds

Exemples de paradoxes efficaces :
- Sujet "La liberté": Le paradoxe de l'autonomie contrainte (être libre requiert de se donner des lois)
- Sujet "Juger autrui": Le paradoxe du juge partial (juger suppose objectivité, mais on juge toujours depuis un point de vue situé)
- Sujet "La technique": Le paradoxe de l'aliénation libératrice (la technique nous affranchit et nous asservit)

STRUCTURE DE LA RÉPONSE (format JSON strict) :
{
  "paradox": "<Formulation courte et percutante du paradoxe en 1-2 phrases>",
  "explanation": "<Explication détaillée du paradoxe en 4-6 lignes: pourquoi est-ce paradoxal ? Quels concepts sont en tension ? Quels auteurs ont théorisé cette tension ?>",
  "exploitation": "<Pistes concrètes pour exploiter ce paradoxe dans la dissertation: comment le faire vivre dans l'intro, comment le déployer dans le plan, comment le résoudre ou le dépasser ?>"
}

Réponds UNIQUEMENT avec le JSON, sans autre texte.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'system',
                        content: 'Tu es un expert en dissertation de Culture Générale pour les concours de prépa ECG. Tu identifies des paradoxes féconds et philosophiquement riches.'
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                temperature: 0.7,
                max_tokens: 1000,
                response_format: { type: "json_object" }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        const result = JSON.parse(content);

        return new Response(
            JSON.stringify(result),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200,
            }
        );

    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 500,
            }
        );
    }
});
