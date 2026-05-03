
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { article, idea, language } = await req.json();

    const languageInstructions = {
      'en': 'Write in English. Generate a 150-word argumentative paragraph for English language preparation.',
      'de': 'Write in German. Generate a 150-word argumentative paragraph for German language preparation.',
      'es': 'Write in Spanish. Generate a 150-word argumentative paragraph for Spanish language preparation.'
    };

    const prompt = `You are a language paragraph generator for HEC preparation.
Based on this press article:
${article}

And this idea to develop:
${idea}

${languageInstructions[language as keyof typeof languageInstructions]}

1. Summarize the main idea in one sentence.
2. Write a structured, rich argumentative paragraph of exactly 150 words with examples.
3. Provide 5-10 key words or expressions useful for language preparation.
4. Give a tip to memorize or reuse this paragraph.

Format the response as:
**Main Idea**
...
**Paragraph (150 words)**
...
**Key Vocabulary**
...
**Memory Tip**
...`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant specialized in language learning for competitive exams.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    return new Response(JSON.stringify({ content: generatedContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-language-paragraph function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
