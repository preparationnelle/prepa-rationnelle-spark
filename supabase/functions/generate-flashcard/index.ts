
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface FlashcardData {
  word_en: string;
  sentence_en: string;
  word_fr: string;
  sentence_fr: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { word, language = 'fr', userId } = await req.json();

    if (!word || !userId) {
      return new Response(
        JSON.stringify({ error: 'Word and userId are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Determine prompt based on input language
    const prompt = language === 'fr' 
      ? `Tu es un générateur de flashcards bilingues.
Prend le mot français que tu reçois en considération.
Ne réponds qu'avec un JSON pur, sans explication, sans balises Markdown.

Format de réponse attendu :

{
  "word_en": "le mot en anglais",
  "sentence_en": "phrase en anglais avec le mot",
  "word_fr": "le mot français original",
  "sentence_fr": "phrase en français avec le mot"
}

Mot à traiter : ${word}`
      : `You are a bilingual flashcard generator.
Take the English word you receive into consideration.
Only respond with pure JSON, no explanation, no Markdown tags.

Expected response format:

{
  "word_en": "the original English word",
  "sentence_en": "English sentence with the word",
  "word_fr": "French translation of the word",
  "sentence_fr": "French sentence with the word"
}

Word to process: ${word}`;

    console.log('Generating flashcard for word:', word);

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!openaiResponse.ok) {
      console.error('OpenAI API error:', await openaiResponse.text());
      return new Response(
        JSON.stringify({ error: 'Failed to generate flashcard' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const openaiData = await openaiResponse.json();
    const generatedContent = openaiData.choices[0].message.content;

    console.log('Generated content:', generatedContent);

    // Parse the JSON response
    let flashcardData: FlashcardData;
    try {
      flashcardData = JSON.parse(generatedContent);
    } catch (error) {
      console.error('Failed to parse OpenAI response:', error);
      return new Response(
        JSON.stringify({ error: 'Invalid response format from AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save flashcard to database
    const { data, error } = await supabase
      .from('flashcards')
      .insert({
        user_id: userId,
        word_en: flashcardData.word_en,
        word_fr: flashcardData.word_fr,
        sentence_en: flashcardData.sentence_en,
        sentence_fr: flashcardData.sentence_fr,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save flashcard' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Flashcard saved successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        flashcard: data,
        generated: flashcardData 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
