
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type Langue = 'en' | 'de' | 'es';
type Mode = 'article' | 'theme';
type DureeCible = 10 | 15 | 20;
type TypeQuestion = 'comprehension' | 'analyse' | 'civilisation' | 'ouverture';

interface RequestBody {
  langue: Langue;
  mode: Mode;
  article_texte?: string;
  theme: string;
  duree_cible: DureeCible;
}

interface Question {
  texte: string;
  type: TypeQuestion;
}

const LANGUE_LABELS: Record<Langue, string> = {
  en: 'anglais',
  de: 'allemand',
  es: 'espagnol',
};

function getQuestionRange(duree: DureeCible): { min: number; max: number } {
  switch (duree) {
    case 10: return { min: 4, max: 5 };
    case 15: return { min: 6, max: 7 };
    case 20: return { min: 8, max: 10 };
    default: return { min: 5, max: 7 };
  }
}

function buildSystemPrompt(langue: Langue, mode: Mode, duree: DureeCible): string {
  const langueLabel = LANGUE_LABELS[langue];
  const range = getQuestionRange(duree);

  return `Tu es un examinateur expert de colles (kholles) de ${langueLabel} en classes preparatoires HEC/ECG.

## CONTEXTE
- Matiere : ${langueLabel} (LV1/LV2)
- Format : colle orale de ${duree} minutes
- Niveau attendu : etudiant de prepa ECG (1ere ou 2eme annee)
- Mode : ${mode === 'article' ? "questions basees sur un article de presse" : "questions sur un theme de civilisation"}

## TA MISSION
Genere exactement entre ${range.min} et ${range.max} questions en FRANCAIS pour cette colle de ${langueLabel}.
L'etudiant devra repondre en ${langueLabel}, mais les questions sont posees en francais par l'examinateur.

## TYPES DE QUESTIONS A INCLURE (varier obligatoirement)
1. **comprehension** : Questions de comprehension ${mode === 'article' ? "de l'article (idees principales, arguments, chiffres cles)" : "du theme (definitions, concepts cles, enjeux principaux)"}
2. **analyse** : Questions d'analyse critique (causes, consequences, comparaisons, nuances, limites)
3. **civilisation** : Questions de culture et civilisation ${langueLabel === 'anglais' ? '(monde anglo-saxon : UK, USA, Commonwealth)' : langueLabel === 'allemand' ? '(monde germanophone : Allemagne, Autriche, Suisse)' : '(monde hispanique : Espagne, Amerique latine)'}. Attentes : references historiques, politiques, culturelles precises.
4. **ouverture** : Questions d'ouverture et de reflexion personnelle (opinion argumentee, mise en perspective, lien avec l'actualite)

## REGLES
- Chaque question doit etre claire, precise et stimulante intellectuellement
- Les questions doivent etre progressives (de la comprehension vers la reflexion)
- Inclure au moins une question de chaque type
- Le niveau de difficulte doit correspondre aux attentes des concours BCE/Ecricome
- Les questions de civilisation doivent tester des connaissances precises, pas des generalites
- Les questions d'ouverture doivent permettre a l'etudiant de montrer sa capacite de reflexion personnelle

## FORMAT DE REPONSE
Reponds UNIQUEMENT avec un JSON valide, sans texte autour, au format suivant :
{
  "questions": [
    { "texte": "Question ici...", "type": "comprehension" },
    { "texte": "Question ici...", "type": "analyse" },
    { "texte": "Question ici...", "type": "civilisation" },
    { "texte": "Question ici...", "type": "ouverture" }
  ]
}`;
}

function buildUserPrompt(mode: Mode, theme: string, articleTexte?: string): string {
  if (mode === 'article' && articleTexte) {
    return `Theme general : ${theme}

Article de presse a analyser :
---
${articleTexte}
---

Genere les questions de colle basees sur cet article. Les questions de comprehension doivent porter directement sur le contenu de l'article. Les autres questions peuvent elargir au theme general.`;
  }

  return `Theme de civilisation : ${theme}

Genere les questions de colle sur ce theme. Les questions doivent couvrir differents aspects du theme : historique, politique, social, economique, culturel. Inclure des references precises attendues en prepa.`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { langue, mode, article_texte, theme, duree_cible } = body;

    // Validation des champs requis
    if (!langue || !mode || !theme || !duree_cible) {
      return new Response(
        JSON.stringify({ error: "Champs requis manquants : langue, mode, theme, duree_cible" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!['en', 'de', 'es'].includes(langue)) {
      return new Response(
        JSON.stringify({ error: "Langue invalide. Valeurs acceptees : 'en', 'de', 'es'" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!['article', 'theme'].includes(mode)) {
      return new Response(
        JSON.stringify({ error: "Mode invalide. Valeurs acceptees : 'article', 'theme'" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (![10, 15, 20].includes(duree_cible)) {
      return new Response(
        JSON.stringify({ error: "Duree cible invalide. Valeurs acceptees : 10, 15, 20" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (mode === 'article' && !article_texte) {
      return new Response(
        JSON.stringify({ error: "Le champ article_texte est requis en mode 'article'" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error("Missing OPENAI_API_KEY");
      return new Response(
        JSON.stringify({ error: "Configuration serveur manquante : OPENAI_API_KEY" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const systemPrompt = buildSystemPrompt(langue, mode, duree_cible);
    const userPrompt = buildUserPrompt(mode, theme, article_texte);

    console.log(`[Colle Questions] Langue: ${langue}, Mode: ${mode}, Duree: ${duree_cible}min, Theme: ${theme}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature: 0.8,
          max_tokens: 2000,
          response_format: { type: "json_object" },
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
        console.error("OpenAI API error:", errorData);
        return new Response(
          JSON.stringify({ error: `Erreur OpenAI: ${errorData.error?.message || 'Erreur inconnue'}` }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        console.error("No content from OpenAI:", data);
        return new Response(
          JSON.stringify({ error: "Aucune reponse generee par l'IA" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Parse et valider la reponse JSON
      let parsed: { questions: Question[] };
      try {
        parsed = JSON.parse(content);
      } catch {
        console.error("Failed to parse OpenAI response as JSON:", content);
        return new Response(
          JSON.stringify({ error: "Reponse IA invalide (format JSON attendu)" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!parsed.questions || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
        console.error("Invalid questions structure:", parsed);
        return new Response(
          JSON.stringify({ error: "Structure de questions invalide dans la reponse IA" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Valider chaque question
      const validTypes: TypeQuestion[] = ['comprehension', 'analyse', 'civilisation', 'ouverture'];
      const validatedQuestions: Question[] = parsed.questions.map((q) => ({
        texte: String(q.texte || ''),
        type: validTypes.includes(q.type) ? q.type : 'analyse',
      }));

      console.log(`[Colle Questions] ${validatedQuestions.length} questions generees avec succes`);

      return new Response(
        JSON.stringify({ questions: validatedQuestions }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: "Timeout de la requete (45s)" }),
          { status: 408, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in generate-colle-questions:', error);
    return new Response(
      JSON.stringify({ error: `Erreur serveur: ${error.message || 'Erreur inconnue'}` }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
