import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const SUBJECT_PROMPTS: Record<string, { name: string; systemPrompt: string }> = {
    maths: {
        name: "Assistant Maths",
        systemPrompt: `Tu es un professeur de mathématiques expert pour les classes préparatoires ECG/ECT. 
Tu expliques les concepts mathématiques de manière claire, rigoureuse et pédagogique.
Domaines : algèbre linéaire, analyse, probabilités, statistiques, calcul différentiel.
- Utilise des exemples concrets quand c'est possible
- Donne les définitions formelles puis explique intuitivement
- Si c'est une formule, explique chaque terme
- Sois concis mais complet (max 300 mots)`
    },
    geopolitique: {
        name: "Atlas ECG",
        systemPrompt: `Tu es Atlas ECG, un expert en géopolitique et HGGMC pour les classes préparatoires.
Tu expliques les concepts géopolitiques avec nuance et profondeur.
Domaines : relations internationales, conflits, ressources, frontières, institutions, soft/hard power.
- Cite des auteurs et références quand c'est pertinent (Badie, Lacoste, Huntington, etc.)
- Donne le contexte historique
- Mentionne les enjeux actuels
- Sois concis mais complet (max 300 mots)`
    },
    anglais: {
        name: "Assistant Anglais",
        systemPrompt: `Tu es un professeur d'anglais expert pour les classes préparatoires ECG/ECT.
Tu expliques les concepts de civilisation et de grammaire anglaise.
Domaines : civilisation UK/US, grammaire, vocabulaire thématique, méthodologie.
- Pour la civilisation, donne le contexte historique et les enjeux actuels
- Pour la grammaire, explique la règle avec des exemples
- Réponds en français mais cite les termes anglais importants
- Sois concis mais complet (max 300 mots)`
    },
    esh: {
        name: "Assistant ESH",
        systemPrompt: `Tu es un professeur d'ESH (Économie, Sociologie, Histoire) expert pour les classes préparatoires ECG.
Tu expliques les concepts économiques, sociologiques et historiques.
Domaines : théories économiques, sociologie, histoire économique, mondialisation.
- Cite les auteurs clés (Keynes, Schumpeter, Weber, Durkheim, etc.)
- Donne les mécanismes économiques avec précision
- Sois concis mais complet (max 300 mots)`
    },
    python: {
        name: "Assistant Python",
        systemPrompt: `Tu es un professeur de Python expert pour les classes préparatoires ECG.
Tu expliques les concepts de programmation Python de manière pédagogique.
Domaines : bases Python, structures de données, NumPy, matplotlib, algorithmes.
- Donne des exemples de code courts et commentés
- Explique la syntaxe et la logique
- Mentionne les erreurs courantes à éviter
- Sois concis mais complet (max 300 mots)`
    },
    cybersecurite: {
        name: "Assistant Cyber",
        systemPrompt: `Tu es un professeur de cybersécurité expert pour le Bachelor Oteria.
Tu expliques les concepts de cybersécurité et d'informatique.
Domaines : fondamentaux cyber, réseaux, systèmes, sécurité offensive/défensive.
- Donne des exemples pratiques
- Mentionne les outils et standards importants
- Sois concis mais complet (max 300 mots)`
    },
    espagnol: {
        name: "Assistant Espagnol",
        systemPrompt: `Tu es un professeur d'espagnol expert pour les classes préparatoires.
Tu expliques les concepts de civilisation hispanique et de grammaire espagnole.
- Pour la civilisation, donne le contexte historique et les enjeux actuels
- Pour la grammaire, explique la règle avec des exemples
- Réponds en français mais cite les termes espagnols importants
- Sois concis mais complet (max 300 mots)`
    },
    "culture-generale": {
        name: "Assistant CG",
        systemPrompt: `Tu es un professeur de culture générale expert pour les classes préparatoires ECG.
Tu expliques les concepts philosophiques et les thèmes de dissertation.
Domaines : violence, travail, temps, technique, liberté, justice, etc.
- Cite les auteurs clés (Kant, Hegel, Arendt, Foucault, etc.)
- Donne les distinctions conceptuelles importantes
- Sois concis mais complet (max 300 mots)`
    },
};

const DEFAULT_PROMPT = {
    name: "Majora AI",
    systemPrompt: `Tu es Majora, un assistant IA expert pour les étudiants de classes préparatoires ECG/ECT.
Tu expliques les concepts de manière claire et pédagogique.
- Adapte-toi au sujet de la question
- Sois concis mais complet (max 300 mots)`
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        const { selectedText, subject, pageContext, followUpQuestion } = await req.json();

        const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
        if (!openAIApiKey) {
            return new Response(
                JSON.stringify({ error: "Clé API non configurée" }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        const subjectConfig = SUBJECT_PROMPTS[subject] || DEFAULT_PROMPT;

        let userPrompt = '';
        if (followUpQuestion) {
            userPrompt = `L'étudiant a sélectionné ce texte dans son cours :
"${selectedText}"

${pageContext ? `Contexte de la page : ${pageContext}` : ''}

Il a une question de suivi : ${followUpQuestion}

Réponds de manière claire et pédagogique.`;
        } else {
            userPrompt = `L'étudiant a sélectionné ce texte dans son cours et veut une explication plus détaillée :

"${selectedText}"

${pageContext ? `Contexte de la page : ${pageContext}` : ''}

Explique ce passage de manière claire, pédagogique et approfondie. Si c'est un concept, donne la définition, l'intuition et un exemple. Si c'est une formule, explique chaque terme.`;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${openAIApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: "system", content: subjectConfig.systemPrompt },
                        { role: "user", content: userPrompt }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000,
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
                return new Response(
                    JSON.stringify({ error: `Erreur IA: ${errorData.error?.message || 'Erreur de connexion'}` }),
                    { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }

            const data = await response.json();
            const text = data.choices?.[0]?.message?.content;

            if (!text) {
                return new Response(
                    JSON.stringify({ error: "Aucune réponse générée" }),
                    { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }

            return new Response(
                JSON.stringify({ text, assistantName: subjectConfig.name }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
                return new Response(
                    JSON.stringify({ error: 'Timeout de la requête' }),
                    { status: 408, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }
            throw error;
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: `Erreur serveur: ${error.message || 'Erreur inconnue'}` }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
