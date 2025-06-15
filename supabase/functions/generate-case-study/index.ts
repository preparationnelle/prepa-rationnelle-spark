
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CaseStudyRequest {
  article: string;
  notion: string;
  userId: string;
  language: 'fr' | 'en';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { article, notion, userId, language }: CaseStudyRequest = await req.json();

    console.log('Generating case study for user:', userId);
    
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Extract content from URL if provided
    let articleContent = article;
    if (article.startsWith('http')) {
      console.log('Extracting content from URL:', article);
      try {
        const response = await fetch(article);
        const html = await response.text();
        // Simple text extraction (remove HTML tags)
        articleContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      } catch (error) {
        console.log('Failed to extract from URL, using URL as text:', error);
        articleContent = article;
      }
    }

    const prompt = language === 'fr' 
      ? `Tu es professeur de géopolitique en prépa HGGSP.

Voici un article d'actualité : "${articleContent}"
Thème à analyser : "${notion}"

Produis une étude de cas synthétique en 300 mots maximum qui contient exactement ces 4 sections :

**1. CONTEXTE ET ENJEU PRINCIPAL** (100 mots max)
Résume l'enjeu principal et le contexte géopolitique

**2. CHIFFRES ET DONNÉES CLÉS**
- Liste 3-5 données quantifiables importantes
- Chiffres, dates, pourcentages, budgets, etc.

**3. SUJETS DE DISSERTATION APPLICABLES**
Propose exactement 3 sujets de dissertation où cette étude serait pertinente :
- Sujet 1 : [formulation précise]
- Sujet 2 : [formulation précise] 
- Sujet 3 : [formulation précise]

**4. ACTEURS ET DYNAMIQUES**
Identifie les acteurs principaux (États, organisations, entreprises) et leurs enjeux respectifs

Utilise exactement cette structure avec les titres en gras.`
      : `You are a geopolitics professor in French preparatory classes.

Here is a current affairs article: "${articleContent}"
Theme to analyze: "${notion}"

Produce a synthetic case study in 300 words maximum that contains exactly these 4 sections:

**1. CONTEXT AND MAIN ISSUE** (100 words max)
Summarize the main issue and geopolitical context

**2. KEY FIGURES AND DATA**
- List 3-5 important quantifiable data points
- Numbers, dates, percentages, budgets, etc.

**3. APPLICABLE DISSERTATION TOPICS**
Propose exactly 3 dissertation topics where this study would be relevant:
- Topic 1: [precise formulation]
- Topic 2: [precise formulation]
- Topic 3: [precise formulation]

**4. ACTORS AND DYNAMICS**
Identify the main actors (States, organizations, companies) and their respective stakes

Use exactly this structure with bold titles.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    // Create a readable stream for streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let fullContent = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                  // Send final response with word count
                  const finalData = {
                    type: 'complete',
                    caseStudy: fullContent,
                    wordCount: fullContent.split(' ').length
                  };
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify(finalData)}\n\n`));
                  controller.close();
                  return;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content || '';
                  if (content) {
                    fullContent += content;
                    const streamData = {
                      type: 'chunk',
                      content: content,
                      fullContent: fullContent
                    };
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify(streamData)}\n\n`));
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Error in generate-case-study function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate case study' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
