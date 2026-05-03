import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { OpenAI } from "https://deno.land/x/openai@v4.20.1/mod.ts";

const openai = new OpenAI({
    apiKey: Deno.env.get("OPENAI_API_KEY"),
});

Deno.serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response(null, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    }

    try {
        const { subject, definitions, mode } = await req.json();

        if (!subject || !definitions || !Array.isArray(definitions)) {
            return new Response(
                JSON.stringify({ error: "Subject and definitions array are required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Déterminer le contexte selon le mode
        const isCultureGenerale = mode === 'culture-generale';
        const contextType = isCultureGenerale ? 'Culture Générale (Lettres et Philosophie)' : 'Géopolitique';

        // Build the prompt with all definitions
        const definitionsText = definitions
            .map((d: any) => `**${d.term}**: ${d.definition}`)
            .join("\n\n");

        const prompt = isCultureGenerale
            ? `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.

Un étudiant doit définir et analyser les termes clés du sujet suivant:
"${subject}"

Voici les propositions de l'étudiant:

${definitionsText}

IMPORTANT : Pour une dissertation de Culture Générale, on n'attend PAS seulement une définition sèche, mais une MICRO-ANALYSE qui :
- Définit le terme avec PRÉCISION philosophique/conceptuelle
- Explore les SENS MULTIPLES et nuances du terme
- Établit des LIENS avec le sujet et la problématique
- Montre une CULTURE philosophique et littéraire (références possibles)
- ÉLARGIT la réflexion sans perdre la précision

Pour CHAQUE terme, évalue selon ces critères :

1. **PRÉCISION DE LA DÉFINITION** (sur 35)
   - Définition rigoureuse et philosophiquement juste ?
   - Évite les approximations et généralités ?

2. **RICHESSE CONCEPTUELLE** (sur 35)
   - Explore-t-il les différents sens du terme ?
   - Mobilise-t-il des références (auteurs, œuvres) ?
   - Montre-t-il une vision large du concept ?

3. **LIENS AVEC LE SUJET** (sur 30)
   - Fait-il des connexions pertinentes avec le sujet ?
   - Aide-t-il à problématiser le sujet ?
   - Détecte-t-il des tensions ou paradoxes ?

Pour chaque terme, fournis dans ton analyse :

A) **Note sur 100** (basée sur les 3 critères ci-dessus)

B) **Feedback détaillé** :
   - Ce qui est BIEN dans sa proposition (2-3 points forts)
   - Ce qui MANQUE ou pourrait être amélioré (2-3 axes d'amélioration)
   - Les OMISSIONS importantes (sens oubliés, liens non exploités)

C) **Définition de référence** : Une définition modèle, riche et complète, qui intègre :
   - Définition précise du terme
   - Ses différents sens et nuances
   - 1-2 références philosophiques/littéraires pertinentes
   - Liens explicites avec le sujet

D) **Pistes alternatives** : Propose 2-3 autres angles d'analyse ou sens à explorer pour enrichir la réflexion

E) **Références suggérées** : Auteurs, œuvres ou concepts connexes pour approfondir

Puis, fournis également :
- Un **score global sur 100** (moyenne pondérée de tous les termes)
- Un **feedback global** constructif et pédagogique (4-5 phrases)
- Des **suggestions transversales** pour améliorer l'ensemble des définitions

Réponds au format JSON suivant (TRÈS IMPORTANT: respecte exactement ce format):
{
  "globalScore": 75,
  "globalFeedback": "Feedback global ici...",
  "transversalSuggestions": [
    "Suggestion 1 pour l'ensemble",
    "Suggestion 2 pour l'ensemble"
  ],
  "individualFeedback": [
    {
      "term": "Juger",
      "score": 80,
      "strengths": [
        "Point fort 1",
        "Point fort 2"
      ],
      "improvements": [
        "Axe d'amélioration 1",
        "Axe d'amélioration 2"
      ],
      "missingElements": [
        "Sens ou lien oublié 1",
        "Sens ou lien oublié 2"
      ],
      "referenceDefinition": "Définition modèle complète et riche...",
      "alternativeAngles": [
        "Angle alternatif 1",
        "Angle alternatif 2"
      ],
      "suggestedReferences": [
        "Auteur/œuvre 1",
        "Auteur/œuvre 2"
      ]
    }
  ]
}`
            : `Tu es un expert en géopolitique et en correction de dissertations.

Un étudiant doit définir les termes clés du sujet suivant:
"${subject}"

Voici les définitions proposées par l'étudiant:

${definitionsText}

Pour chaque terme, évalue:
1. La précision et l'exactitude de la définition
2. La complétude (tous les aspects importants sont couverts?)
3. La clarté et la concision
4. L'adéquation au contexte du sujet

Pour chaque terme, fournis:
- Une note sur 100
- Des recommandations spécifiques pour améliorer (2-3 points concrets)
- La définition formelle et académique attendue pour ce terme dans le contexte du sujet

Puis, fournis également:
- Un score global sur 100 basé sur l'ensemble des définitions
- Un feedback global constructif (3-4 phrases)

Réponds au format JSON suivant (TRÈS IMPORTANT: respecte exactement ce format):
{
  "globalScore": 85,
  "globalFeedback": "Feedback global ici...",
  "individualFeedback": [
    {
      "term": "Mondialisation",
      "score": 90,
      "recommendations": [
        "Recommandation 1",
        "Recommandation 2"
      ],
      "formalDefinition": "Définition académique formelle ici..."
    }
  ]
}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: isCultureGenerale
                        ? "Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG. Tu évalues avec rigueur académique ET bienveillance pédagogique. Tu retournes uniquement du JSON valide."
                        : "Tu es un correcteur expert en géopolitique. Tu retournes uniquement du JSON valide avec des évaluations précises et constructives.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.5,
            max_tokens: 3000,
            response_format: { type: "json_object" },
        });

        const responseText = completion.choices[0]?.message?.content?.trim() || "{}";
        const evaluation = JSON.parse(responseText);

        // Ensure the response has the correct structure
        if (!evaluation.individualFeedback || !Array.isArray(evaluation.individualFeedback)) {
            throw new Error("Invalid response structure from OpenAI");
        }

        return new Response(
            JSON.stringify(evaluation),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    } catch (error) {
        console.error("Error in evaluate-all-definitions:", error);
        return new Response(
            JSON.stringify({
                error: error.message,
                details: "Failed to evaluate definitions. Please check the server logs."
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    }
});
