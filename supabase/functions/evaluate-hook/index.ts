
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface HookEvaluationRequest {
    hook: string;
    subject: string;
    context?: string;
    userId?: string;
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        const { hook, subject, context, userId }: HookEvaluationRequest = await req.json();

        console.log('Evaluating hook for user:', userId);

        if (!openAIApiKey) {
            throw new Error('OpenAI API key not configured');
        }

        const prompt = `Tu es un professeur expert en dissertation de géopolitique pour les classes préparatoires ECG. Tu dois évaluer rigoureusement une accroche de dissertation selon la méthodologie officielle des concours BCE.

**SUJET DE DISSERTATION :**
"${subject}"

${context ? `**CONTEXTE :** ${context}` : ''}

**ACCROCHE À ÉVALUER :**
"${hook}"

**CRITÈRES D'ÉVALUATION (notation sur 20) :**

1. **PERTINENCE (sur 8 points)** :
   - Adéquation directe au sujet (utilise-t-elle les termes EXACTS du sujet ?)
   - Contexte et date appropriés (pas d'anachronisme, pas de citation obsolète)
   - Portée ni trop large, ni trop restreinte
   - Lien explicite et naturel avec le sujet (pas de lien artificiel)

2. **EFFICACITÉ (sur 6 points)** :
   - Longueur optimale : 2-3 lignes = excellent (6/6), 4-5 lignes = bien (4/6), >10 lignes = problématique (0-2/6)
   - Concision et dynamisme (va-t-elle droit au but ?)
   - Qualité de la formulation (claire, fluide, agréable à lire)
   - Ne déborde pas sur la problématique ou l'analyse

3. **ORIGINALITÉ (sur 6 points)** :
   - Évite les "tartes à la crème" (JO pour la France, Covid pour les flux, etc.)
   - Actualité récente (<6 mois = excellent, <2 ans = bien) OU profondeur historique pertinente
   - Culture géopolitique démontrée (chiffres précis, noms d'acteurs, événements spécifiques)
   - Se démarque des accroches standards que tous les candidats utilisent

**DÉTECTION DU TYPE D'ACCROCHE :**
Identifie le type parmi : "Actualité récente", "Citation d'auteur/acteur", "Historique", "Chiffre/Statistique", "Mixte (actualité + citation + chiffre)"

**ERREURS FATALES À IDENTIFIER :**
- Hors-sujet dès l'accroche
- Citation obsolète ou mal contextualisée
- Accroche banale/cliché
- Lien artificiel avec le sujet
- Absence d'explicitation du lien
- Trop longue (>10 lignes)

**FORMAT DE RÉPONSE STRICTEMENT JSON :**
{
  "globalScore": <nombre entre 0 et 20>,
  "pertinenceScore": <nombre entre 0 et 8>,
  "efficaciteScore": <nombre entre 0 et 6>,
  "originaliteScore": <nombre entre 0 et 6>,
  "hookType": "<type détecté>",
  "strengths": [
    "<point fort 1>",
    "<point fort 2>",
    "<point fort 3>"
  ],
  "improvements": [
    "<axe d'amélioration 1>",
    "<axe d'amélioration 2>",
    "<axe d'amélioration 3>"
  ],
  "suggestions": [
    "<suggestion concrète 1>",
    "<suggestion concrète 2>",
    "<suggestion concrète 3>"
  ],
  "improvedProposal": "<Proposition d'une version améliorée de l'accroche qui intègre les corrections suggérées. Doit être excellente, pertinente et percutante.>",
  "fatalErrors": [
    "<erreur fatale si détectée, sinon tableau vide>"
  ]
}

**INSTRUCTIONS IMPORTANTES :**
- Sois exigeant mais juste, comme un vrai correcteur de concours
- Les points forts doivent être spécifiques et justifiés
- Les axes d'amélioration doivent être actionnables
- Les suggestions doivent être concrètes et applicables immédiatement
- Si le score est <10/20, identifie clairement les problèmes majeurs
- Si le score est >15/20, l'accroche est excellente, mentionne-le
- Propose une version améliorée de l'accroche ("improvedProposal") qui corrige les défauts identifiés et vise le 20/20.

Réponds UNIQUEMENT avec le JSON, sans texte avant ou après.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${openAIApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo-preview',
                messages: [
                    { role: 'user', content: prompt }
                ],
                temperature: 0.3, // Lower temperature for more consistent evaluation
                max_tokens: 1500,
                response_format: { type: "json_object" }
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenAI API error:', errorText);
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const evaluationResult = JSON.parse(data.choices[0].message.content);

        console.log('Hook evaluation completed successfully');

        return new Response(JSON.stringify(evaluationResult), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error in evaluate-hook function:', error);
        return new Response(JSON.stringify({
            error: error.message || 'Failed to evaluate hook'
        }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
});
