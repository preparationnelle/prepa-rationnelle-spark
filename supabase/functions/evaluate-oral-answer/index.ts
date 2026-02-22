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

    const { question, answer } = await req.json();

    if (!question || !question.trim()) {
      return new Response(JSON.stringify({ error: 'Le champ "question" est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (!answer || !answer.trim()) {
      return new Response(JSON.stringify({ error: 'Le champ "answer" est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: [
          {
            role: 'system',
            content: `Tu es un coach professionnel spécialisé dans la préparation aux entretiens de personnalité pour les grandes écoles de commerce françaises.

Ton rôle est d'évaluer les réponses des candidats avec bienveillance mais exigence, en donnant un feedback constructif et actionnable.

Évalue la réponse selon ces critères:
- Structure et clarté (introduction, développement, conclusion)
- Pertinence et cohérence avec la question
- Authenticité et personnalisation
- Exemples concrets et storytelling
- Longueur appropriée (2-3 minutes à l'oral)

Tu dois retourner une évaluation JSON avec:
{
  "score": <note sur 20>,
  "strengths": [<3-4 points forts>],
  "weaknesses": [<2-3 points à améliorer>],
  "suggestions": [<3-4 suggestions concrètes d'amélioration>],
  "overall": "<commentaire général bienveillant et motivant>"
}`
          },
          {
            role: 'user',
            content: `Question posée: "${question.trim()}"

Réponse du candidat:
"${answer.trim()}"

Évalue cette réponse en retournant uniquement un objet JSON valide.`
          }
        ],
        temperature: 0.7,
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

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
