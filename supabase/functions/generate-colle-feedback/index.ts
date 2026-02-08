
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type Langue = 'en' | 'de' | 'es';

interface QuestionEvaluee {
  question_texte: string;
  reponse_transcription: string;
  scores: {
    fluency: number;
    grammar: number;
    vocabulary: number;
    pronunciation: number;
  };
  commentaire: string;
}

interface RequestBody {
  langue: Langue;
  questions: QuestionEvaluee[];
}

const LANGUE_LABELS: Record<Langue, string> = {
  en: 'anglais',
  de: 'allemand',
  es: 'espagnol',
};

function buildSystemPrompt(langue: Langue): string {
  const langueLabel = LANGUE_LABELS[langue];

  return `Tu es un examinateur senior de colles (kholles) de ${langueLabel} en classes preparatoires HEC/ECG. Tu produis le bilan final d'une session de colle complete.

## CONTEXTE
- Tu as devant toi l'ensemble des questions posees, les transcriptions des reponses orales de l'etudiant, les scores individuels et les commentaires pour chaque question.
- Tu dois produire une synthese globale coherente de la performance.

## TA MISSION
Produire un bilan de colle structure avec :

### 1. Note globale (/20)
- Calcule une note globale qui reflete la performance d'ensemble
- Cette note n'est PAS une simple moyenne arithmetique : pondere selon l'importance relative des criteres
- Ponderation suggeree : Grammaire 30%, Vocabulaire 25%, Fluidite 25%, Prononciation 10%, Qualite du contenu/civilisation 10%
- La note doit etre coherente avec les scores individuels mais peut etre ajustee selon la progression au cours de la colle

### 2. Feedback Langue (note /20 + 4 sous-categories)
Pour chaque sous-categorie, redige un paragraphe (50-100 mots) :

- **grammaire** : Synthese des erreurs grammaticales recurrentes. Identifier les patterns (temps mal utilises, erreurs de syntaxe, accords...). Donner 2-3 regles cles a revoir.
- **vocabulaire** : Richesse lexicale observee. Mots ou expressions remarquables. Lacunes identifiees. Suggestions de champs lexicaux a enrichir.
- **fluidite** : Evaluation de la capacite a s'exprimer de maniere continue. Capacite a developper un argument. Hesitations recurrentes.
- **prononciation** : Estimation basee sur les transcriptions. Sons ou mots problematiques identifies. Conseils d'amelioration.

La note langue (/20) synthetise ces 4 dimensions.

### 3. Feedback Civilisation (note /20 + 2 sous-categories)
- **pertinence** (50-100 mots) : L'etudiant a-t-il repondu aux questions de maniere pertinente ? A-t-il su mobiliser des connaissances appropriees ? Qualite de l'argumentation.
- **richesse_culturelle** (50-100 mots) : References culturelles, historiques, politiques mentionnees. Comparaisons pertinentes. Profondeur de l'analyse.

La note civilisation (/20) synthetise ces 2 dimensions.

## REGLES
- Sois precis : cite des exemples tires des reponses de l'etudiant
- Sois constructif : chaque critique doit etre accompagnee d'un conseil
- Sois coherent : les notes doivent refleter les commentaires
- Sois exigeant : niveau attendu en prepa ECG pour les concours
- Identifie clairement les axes de progression prioritaires

## FORMAT DE REPONSE
Reponds UNIQUEMENT avec un JSON valide, sans texte autour :
{
  "note_globale": <number 0-20>,
  "feedback_langue": {
    "grammaire": "<string>",
    "vocabulaire": "<string>",
    "fluidite": "<string>",
    "prononciation": "<string>",
    "note": <number 0-20>
  },
  "feedback_civilisation": {
    "pertinence": "<string>",
    "richesse_culturelle": "<string>",
    "note": <number 0-20>
  }
}`;
}

function buildUserPrompt(questions: QuestionEvaluee[], langue: Langue): string {
  const langueLabel = LANGUE_LABELS[langue];

  let prompt = `Voici le detail complet de la colle de ${langueLabel} (${questions.length} questions) :\n\n`;

  questions.forEach((q, i) => {
    prompt += `--- QUESTION ${i + 1} ---
Question : "${q.question_texte}"
Reponse (transcription) : "${q.reponse_transcription}"
Scores : Fluidite ${q.scores.fluency}/20, Grammaire ${q.scores.grammar}/20, Vocabulaire ${q.scores.vocabulary}/20, Prononciation ${q.scores.pronunciation}/20
Commentaire de l'evaluateur : ${q.commentaire}

`;
  });

  prompt += `Produis maintenant le bilan global de cette colle.`;

  return prompt;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { langue, questions } = body;

    // Validation
    if (!langue || !questions) {
      return new Response(
        JSON.stringify({ error: "Champs requis manquants : langue, questions" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!['en', 'de', 'es'].includes(langue)) {
      return new Response(
        JSON.stringify({ error: "Langue invalide. Valeurs acceptees : 'en', 'de', 'es'" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      return new Response(
        JSON.stringify({ error: "Le champ questions doit etre un tableau non vide" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Valider la structure de chaque question
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.question_texte || !q.reponse_transcription || !q.scores || !q.commentaire) {
        return new Response(
          JSON.stringify({ error: `Question ${i + 1} : structure invalide. Champs requis : question_texte, reponse_transcription, scores, commentaire` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (
        typeof q.scores.fluency !== 'number' ||
        typeof q.scores.grammar !== 'number' ||
        typeof q.scores.vocabulary !== 'number' ||
        typeof q.scores.pronunciation !== 'number'
      ) {
        return new Response(
          JSON.stringify({ error: `Question ${i + 1} : les scores doivent etre des nombres (fluency, grammar, vocabulary, pronunciation)` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
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
    const userPrompt = buildUserPrompt(questions, langue);

    console.log(`[Colle Feedback] Langue: ${langue}, Questions: ${questions.length}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s pour le feedback global

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
          temperature: 0.5,
          max_tokens: 3000,
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

      // Valider et borner les notes
      const clampScore = (val: unknown): number => {
        const num = Number(val);
        if (isNaN(num)) return 10;
        return Math.max(0, Math.min(20, Math.round(num * 10) / 10)); // Arrondi a 0.5 pres
      };

      const result = {
        note_globale: clampScore(parsed.note_globale),
        feedback_langue: {
          grammaire: String(parsed.feedback_langue?.grammaire || "Non disponible."),
          vocabulaire: String(parsed.feedback_langue?.vocabulaire || "Non disponible."),
          fluidite: String(parsed.feedback_langue?.fluidite || "Non disponible."),
          prononciation: String(parsed.feedback_langue?.prononciation || "Non disponible."),
          note: clampScore(parsed.feedback_langue?.note),
        },
        feedback_civilisation: {
          pertinence: String(parsed.feedback_civilisation?.pertinence || "Non disponible."),
          richesse_culturelle: String(parsed.feedback_civilisation?.richesse_culturelle || "Non disponible."),
          note: clampScore(parsed.feedback_civilisation?.note),
        },
      };

      console.log(`[Colle Feedback] Note globale: ${result.note_globale}/20, Langue: ${result.feedback_langue.note}/20, Civilisation: ${result.feedback_civilisation.note}/20`);

      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: "Timeout de la requete (60s)" }),
          { status: 408, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in generate-colle-feedback:', error);
    return new Response(
      JSON.stringify({ error: `Erreur serveur: ${error.message || 'Erreur inconnue'}` }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
