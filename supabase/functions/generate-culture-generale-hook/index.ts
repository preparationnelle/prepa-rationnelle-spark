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
        const { hook, subject, year, userId } = await req.json();

        if (!hook || !subject) {
            throw new Error('Hook and subject are required');
        }

        const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
        if (!OPENAI_API_KEY) {
            throw new Error('OpenAI API key not configured');
        }

        // Build context based on year
        const yearContext = year === 1
            ? `Le sujet relève de la Culture Générale en 1ère année (thèmes généraux: liberté, travail, vérité, technique, art, justice, etc.)`
            : `Le sujet relève de la Culture Générale en 2ème année, centré sur le thème "Juger" (se juger, juger autrui, jugement moral, esthétique, etc.)`;

        const prompt = `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.
${yearContext}

SUJET DE DISSERTATION :
"${subject}"

ACCROCHE PROPOSÉE PAR LE CANDIDAT :
"${hook}"

Ta mission : évaluer cette accroche selon les critères suivants et fournir un feedback constructif et exigeant.

CRITÈRES D'ÉVALUATION (score sur 20 avec répartition) :

1. PERTINENCE (8 points)
   - L'accroche est-elle en lien direct avec le sujet ?
   - Introduit-elle une tension, un paradoxe ou une problématique ?
   - Est-elle philosophiquement riche ?

2. EFFICACITÉ (6 points)
   - Est-elle concise et dynamique ?
   - Capte-t-elle l'attention du lecteur ?
   - Évite-t-elle les banalités et les généralités ?

3. ORIGINALITÉ (6 points)
   - L'accroche témoigne-t-elle d'une culture philosophique/littéraire solide ?
   - Évite-t-elle les exemples trop vus ?
   - Se démarque-t-elle positivement ?

STRUCTURE DE LA RÉPONSE (format JSON strict) :
{
  "globalScore": <note sur 20>,
  "pertinenceScore": <note sur 8>,
  "efficaciteScore": <note sur 6>,
  "originaliteScore": <note sur 6>,
  "hookType": "<type d'accroche: Citation philosophique / Fait d'actualité / Paradoxe conceptuel / Exemple littéraire / Autre>",
  "fatalErrors": [<liste des erreurs critiques (hors-sujet, contresens philosophique, etc.)>],
  "strengths": [<liste des points forts>],
  "improvements": [<liste des axes d'amélioration>],
  "suggestions": [<suggestions concrètes pour améliorer>],
  "improvedProposal": "<proposition d'accroche améliorée basée sur l'accroche initiale, UNIQUEMENT si le score global est inférieur à 14/20, sinon null>"
}

IMPORTANT POUR LA PROPOSITION AMÉLIORÉE :
Lorsque tu proposes une accroche améliorée, elle doit OBLIGATOIREMENT suivre cette structure :
1. Commencer par une CITATION ou un EXEMPLE concret (philosophique, littéraire, culturel, cinématographique)
2. ANALYSER brièvement cette citation/exemple (2-3 phrases max)
3. Terminer en introduisant la question du sujet avec une formule comme "Cette analyse nous amène à nous interroger : [QUESTION DU SUJET]" ou "Dès lors, la question se pose : [QUESTION DU SUJET]"

STRUCTURE INTERDITE : NE JAMAIS terminer par une question rhétorique différente du sujet
STRUCTURE OBLIGATOIRE : Citation → Analyse → Introduction de la question exacte du sujet

EXIGENCES :
- Sois rigoureux et exigeant comme un professeur de classe préparatoire
- Identifie les faiblesses sans complaisance
- Propose des pistes d'amélioration précises
- La proposition améliorée doit conserver l'esprit de l'accroche originale tout en la bonifiant

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
                        content: 'Tu es un expert en dissertation de Culture Générale pour les concours de prépa ECG. Tu évalues des accroches avec rigueur et bienveillance.'
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                temperature: 0.7,
                max_tokens: 1500,
                response_format: { type: "json_object" }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        const evaluation = JSON.parse(content);

        return new Response(
            JSON.stringify(evaluation),
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
