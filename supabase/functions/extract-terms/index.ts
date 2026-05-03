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
        const { subject } = await req.json();

        if (!subject || typeof subject !== "string") {
            return new Response(
                JSON.stringify({ error: "Subject is required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const prompt = `Tu es un expert en géopolitique et en analyse de sujets de dissertation.

Analyse ce sujet de dissertation et extrais UNIQUEMENT les termes les plus importants qui nécessitent une définition précise. 

RÈGLES IMPORTANTES:
- Ignore les pronoms (le, la, les, un, une, des, etc.)
- Ignore les prépositions (de, à, en, dans, sur, etc.)
- Ignore les conjonctions (et, ou, mais, etc.)
- Concentre-toi sur les CONCEPTS CLÉS et les NOTIONS GÉOPOLITIQUES
- Maximum 3-5 termes
- Chaque terme doit être significatif et mériter une définition

Sujet: "${subject}"

Réponds UNIQUEMENT avec un tableau JSON de termes, sans explication supplémentaire.
Format attendu: ["terme1", "terme2", "terme3"]`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Tu es un assistant qui retourne uniquement des tableaux JSON de termes géopolitiques importants.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.3,
            max_tokens: 200,
        });

        const responseText = completion.choices[0]?.message?.content?.trim() || "[]";

        // Parse the JSON array
        let terms: string[];
        try {
            terms = JSON.parse(responseText);
        } catch (e) {
            // Fallback: try to extract terms from a potential text response
            console.error("Failed to parse as JSON, attempting fallback", e);
            // Simple regex to extract terms between quotes
            const matches = responseText.match(/"([^"]+)"/g);
            if (matches) {
                terms = matches.map(m => m.replace(/"/g, ''));
            } else {
                terms = [];
            }
        }

        if (!Array.isArray(terms) || terms.length === 0) {
            return new Response(
                JSON.stringify({ error: "No terms extracted" }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        return new Response(
            JSON.stringify({ terms }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    } catch (error) {
        console.error("Error in extract-terms:", error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
});
