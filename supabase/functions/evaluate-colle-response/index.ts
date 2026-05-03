
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type Langue = 'en' | 'de' | 'es';

interface RequestBody {
  question_texte: string;
  reponse_transcription: string;
  langue: Langue;
}

const LANGUE_LABELS: Record<Langue, string> = {
  en: 'anglais',
  de: 'allemand',
  es: 'espagnol',
};

function buildSystemPrompt(langue: Langue): string {
  const langueLabel = LANGUE_LABELS[langue];

  return `Tu es un examinateur expert de colles (kholles) de ${langueLabel} en classes preparatoires HEC/ECG. Tu evalues la reponse orale d'un etudiant a une question de colle.

## CONTEXTE
- L'etudiant repond en ${langueLabel} a une question posee en francais
- Tu evalues a partir de la transcription de sa reponse orale
- La notation suit le bareme francais sur 20

## CRITERES D'EVALUATION (chacun note sur 20)

### 1. Fluidite (fluency) - /20
- 18-20 : Expression parfaitement fluide, naturelle, sans hesitation. Rythme soutenu et agreable.
- 14-17 : Bonne fluidite avec de rares hesitations. L'etudiant s'exprime avec aisance.
- 10-13 : Fluidite correcte mais hesitations regulieres. Quelques pauses genantes.
- 6-9 : Expression hachee, hesitations frequentes. Difficultes a construire des phrases longues.
- 0-5 : Expression tres laborieuse. L'etudiant peine a formuler ses idees.

### 2. Grammaire (grammar) - /20
- 18-20 : Maitrise excellente. Structures complexes utilisees correctement (subjonctif, conditionnel, voix passive, relatives...).
- 14-17 : Bonne maitrise avec erreurs rares et mineures. Structures variees.
- 10-13 : Structures de base correctes mais erreurs recurrentes sur les points avances.
- 6-9 : Erreurs frequentes meme sur les structures basiques. Interference avec le francais.
- 0-5 : Grammaire tres defaillante. Communication compromise.

### 3. Vocabulaire (vocabulary) - /20
- 18-20 : Vocabulaire riche, precis, idiomatique. Utilisation de termes specifiques au theme.
- 14-17 : Bon vocabulaire, quelques approximations. Registre adequat.
- 10-13 : Vocabulaire correct mais basique. Manque de precision lexicale.
- 6-9 : Vocabulaire limite. Repetitions, anglicismes/gallicismes. Difficulte a exprimer des nuances.
- 0-5 : Vocabulaire tres pauvre. Communication tres limitee.

### 4. Prononciation estimee (pronunciation_estimate) - /20
Note : Tu estimes la prononciation a partir de la transcription. Les indices sont :
- Mots visiblement mal transcrits (indiquant une mauvaise prononciation)
- Utilisation de mots francais dans la reponse en ${langueLabel}
- Structures calquees du francais suggerant un accent fort
- 18-20 : Aucun indice de probleme de prononciation dans la transcription.
- 14-17 : Quelques indices mineurs.
- 10-13 : Indices moderees de difficultes de prononciation.
- 6-9 : Indices clairs de problemes de prononciation importants.
- 0-5 : Transcription suggerant des problemes majeurs de prononciation.

## COMMENTAIRE
Redige un commentaire detaille en francais (150-250 mots) qui :
- Identifie les points forts de la reponse
- Pointe les erreurs specifiques (avec corrections)
- Donne 2-3 conseils concrets d'amelioration
- Reste constructif et encourageant tout en etant exigeant (niveau prepa)

## FORMAT DE REPONSE
Reponds UNIQUEMENT avec un JSON valide, sans texte autour :
{
  "score_fluency": <number 0-20>,
  "score_grammar": <number 0-20>,
  "score_vocabulary": <number 0-20>,
  "score_pronunciation": <number 0-20>,
  "commentaire": "<string>"
}`;
}

function buildUserPrompt(questionTexte: string, reponseTranscription: string, langue: Langue): string {
  const langueLabel = LANGUE_LABELS[langue];

  return `Question posee (en francais) :
"${questionTexte}"

Reponse de l'etudiant (transcription de l'oral en ${langueLabel}) :
"${reponseTranscription}"

Evalue cette reponse selon les 4 criteres et fournis ton commentaire.`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { question_texte, reponse_transcription, langue } = body;

    // Validation
    if (!question_texte || !reponse_transcription || !langue) {
      return new Response(
        JSON.stringify({ error: "Champs requis manquants : question_texte, reponse_transcription, langue" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!['en', 'de', 'es'].includes(langue)) {
      return new Response(
        JSON.stringify({ error: "Langue invalide. Valeurs acceptees : 'en', 'de', 'es'" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (reponse_transcription.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: "La transcription est trop courte pour etre evaluee (minimum 10 caracteres)" }),
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

    const systemPrompt = buildSystemPrompt(langue);
    const userPrompt = buildUserPrompt(question_texte, reponse_transcription, langue);

    console.log(`[Colle Evaluate] Langue: ${langue}, Question: ${question_texte.substring(0, 50)}...`);

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
          temperature: 0.4,
          max_tokens: 1500,
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

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch {
        console.error("Failed to parse OpenAI response as JSON:", content);
        return new Response(
          JSON.stringify({ error: "Reponse IA invalide (format JSON attendu)" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Valider et borner les scores entre 0 et 20
      const clampScore = (val: unknown): number => {
        const num = Number(val);
        if (isNaN(num)) return 10;
        return Math.max(0, Math.min(20, Math.round(num)));
      };

      const result = {
        score_fluency: clampScore(parsed.score_fluency),
        score_grammar: clampScore(parsed.score_grammar),
        score_vocabulary: clampScore(parsed.score_vocabulary),
        score_pronunciation: clampScore(parsed.score_pronunciation),
        commentaire: String(parsed.commentaire || "Evaluation non disponible."),
      };

      console.log(`[Colle Evaluate] Scores: F=${result.score_fluency} G=${result.score_grammar} V=${result.score_vocabulary} P=${result.score_pronunciation}`);

      return new Response(
        JSON.stringify(result),
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
    console.error('Error in evaluate-colle-response:', error);
    return new Response(
      JSON.stringify({ error: `Erreur serveur: ${error.message || 'Erreur inconnue'}` }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
