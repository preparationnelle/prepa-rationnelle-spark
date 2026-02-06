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
        const { subject, definitions } = await req.json();

        if (!subject || !definitions || !Array.isArray(definitions)) {
            return new Response(
                JSON.stringify({ error: "Subject and definitions array are required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Build the prompt with all definitions
        const definitionsText = definitions
            .map((d: any) => `**${d.term}**: ${d.definition}`)
            .join("\n\n");

        const prompt = `Tu es un expert en géopolitique et en correction de dissertations.

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
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Tu es un correcteur expert en géopolitique. Tu retournes uniquement du JSON valide avec des évaluations précises et constructives.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.4,
            max_tokens: 2000,
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
