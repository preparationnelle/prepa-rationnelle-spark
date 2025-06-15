
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
    const { question, language, additionalInfo } = await req.json();

    console.log('Generating interview answer for question:', question);
    
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Build context from additional info
    let context = '';
    if (additionalInfo.filiere) context += `Filière : ${additionalInfo.filiere}\n`;
    if (additionalInfo.specialite) context += `Spécialité : ${additionalInfo.specialite}\n`;
    if (additionalInfo.ecole) context += `École visée : ${additionalInfo.ecole}\n`;
    if (additionalInfo.associatif) context += `Expérience associative : ${additionalInfo.associatif}\n`;
    if (additionalInfo.interets) context += `Centres d'intérêt : ${additionalInfo.interets}\n`;
    if (additionalInfo.voyages) context += `Voyages/Expériences : ${additionalInfo.voyages}\n`;
    if (additionalInfo.sport) context += `Sport : ${additionalInfo.sport}\n`;
    if (additionalInfo.trait) context += `Trait de personnalité : ${additionalInfo.trait}\n`;

    const systemPrompt = language === 'fr' ? 
      `Tu es un expert en préparation d'entretiens pour les écoles de commerce françaises. Tu aides les candidats à structurer leurs réponses avec du storytelling efficace.` :
      `You are an expert in preparing interviews for French business schools. You help candidates structure their answers with effective storytelling.`;

    const userPrompt = language === 'fr' ? 
      `Contexte du candidat :\n${context}\n\nQuestion d'entretien : "${question}"\n\nStructure ta réponse selon cette méthode :\n\n**RÉPONSE DIRECTE** (30 secondes)\nRéponds directement à la question en 2-3 phrases claires\n\n**STORYTELLING** (60-90 secondes)\nRaconte une anecdote concrète qui illustre ta réponse avec :\n- Situation précise\n- Actions que tu as menées\n- Résultats obtenus\n- Apprentissages\n\n**LIEN AVEC L'ÉCOLE** (30 secondes)\nExplique pourquoi cette expérience te prépare pour cette école et tes projets futurs.\n\nTon storytelling doit être :\n- Concret et spécifique\n- Montrer tes qualités en action\n- Authentique et personnel\n- Structuré chronologiquement\n\nÉvite :\n- Les généralités\n- Les listes de qualités\n- Les réponses trop théoriques` :
      `Candidate context:\n${context}\n\nInterview question: "${question}"\n\nStructure your answer using this method:\n\n**DIRECT ANSWER** (30 seconds)\nAnswer the question directly in 2-3 clear sentences\n\n**STORYTELLING** (60-90 seconds)\nTell a concrete anecdote that illustrates your answer with:\n- Specific situation\n- Actions you took\n- Results obtained\n- Learnings\n\n**LINK TO SCHOOL** (30 seconds)\nExplain why this experience prepares you for this school and your future projects.\n\nYour storytelling must be:\n- Concrete and specific\n- Show your qualities in action\n- Authentic and personal\n- Chronologically structured\n\nAvoid:\n- Generalities\n- Lists of qualities\n- Overly theoretical answers`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
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
                  // Parse sections for structured response
                  const sections = parseAnswerSections(fullContent, language);
                  const finalData = {
                    type: 'complete',
                    answer: sections,
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
    console.error('Error in generate-interview-answer function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate interview answer' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function parseAnswerSections(content: string, language: 'fr' | 'en') {
  const directMarker = language === 'fr' ? '**RÉPONSE DIRECTE**' : '**DIRECT ANSWER**';
  const storytellingMarker = language === 'fr' ? '**STORYTELLING**' : '**STORYTELLING**';
  const linkMarker = language === 'fr' ? '**LIEN AVEC L\'ÉCOLE**' : '**LINK TO SCHOOL**';

  let directAnswer = '';
  let storytelling = '';
  let schoolLink = '';

  const directIndex = content.indexOf(directMarker);
  const storytellingIndex = content.indexOf(storytellingMarker);
  const linkIndex = content.indexOf(linkMarker);

  if (directIndex !== -1) {
    const start = directIndex + directMarker.length;
    const end = storytellingIndex !== -1 ? storytellingIndex : content.length;
    directAnswer = content.slice(start, end).trim();
  }

  if (storytellingIndex !== -1) {
    const start = storytellingIndex + storytellingMarker.length;
    const end = linkIndex !== -1 ? linkIndex : content.length;
    storytelling = content.slice(start, end).trim();
  }

  if (linkIndex !== -1) {
    const start = linkIndex + linkMarker.length;
    schoolLink = content.slice(start).trim();
  }

  return {
    directAnswer: directAnswer || content,
    storytelling: storytelling || '',
    schoolLink: schoolLink || '',
    fullText: content
  };
}
