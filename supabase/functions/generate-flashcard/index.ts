
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface UniversalFlashcardData {
  front: string;
  back: string;
  hint?: string;
  category?: string;
  tags?: string[];
}

// Legacy interface for backward compatibility
interface LegacyFlashcardData {
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
    const body = await req.json();
    const { mode = 'ai', userId } = body;

    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'userId is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let flashcardData: UniversalFlashcardData;

    // =============================================
    // MODE: MANUAL - User provides front/back directly
    // =============================================
    if (mode === 'manual') {
      const { front, back, hint, category, tags } = body;

      if (!front || !back) {
        return new Response(
          JSON.stringify({ error: 'Front and back are required for manual mode' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      flashcardData = {
        front,
        back,
        hint: hint || null,
        category: category || 'Général',
        tags: tags || [],
      };

      console.log('Manual flashcard created:', flashcardData);
    }
    // =============================================
    // MODE: AI - Generate from topic
    // =============================================
    else if (mode === 'ai') {
      const { topic, category } = body;

      if (!topic) {
        return new Response(
          JSON.stringify({ error: 'Topic is required for AI mode' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!openaiApiKey) {
        return new Response(
          JSON.stringify({ error: 'OpenAI API key not configured' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const categoryContext = category ? `La catégorie est: ${category}.` : '';

      const prompt = `Tu es un générateur de flashcards éducatives.
Génère une flashcard de type question/réponse basée sur le sujet fourni.
${categoryContext}

Réponds UNIQUEMENT avec un JSON valide, sans explication ni markdown:

{
  "front": "La question ou le terme à mémoriser",
  "back": "La réponse ou la définition",
  "hint": "Un indice optionnel pour aider (ou null)",
  "tags": ["tag1", "tag2"]
}

Sujet: ${topic}`;

      console.log('Generating AI flashcard for topic:', topic);

      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
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

      try {
        const parsed = JSON.parse(generatedContent);
        flashcardData = {
          front: parsed.front,
          back: parsed.back,
          hint: parsed.hint || null,
          category: category || 'Général',
          tags: parsed.tags || [],
        };
      } catch (error) {
        console.error('Failed to parse OpenAI response:', error);
        return new Response(
          JSON.stringify({ error: 'Invalid response format from AI' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }
    // =============================================
    // MODE: LEGACY - Original bilingual vocabulary mode
    // =============================================
    else if (mode === 'legacy') {
      const { word, language = 'fr' } = body;

      if (!word) {
        return new Response(
          JSON.stringify({ error: 'Word is required for legacy mode' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!openaiApiKey) {
        return new Response(
          JSON.stringify({ error: 'OpenAI API key not configured' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const legacyPrompt = language === 'fr'
        ? `Tu es un générateur de flashcards bilingues.
Réponds qu'avec un JSON pur, sans explication:
{
  "word_en": "le mot en anglais",
  "sentence_en": "phrase en anglais",
  "word_fr": "le mot français original",
  "sentence_fr": "phrase en français"
}
Mot: ${word}`
        : `You are a bilingual flashcard generator.
Only respond with pure JSON:
{
  "word_en": "the original English word",
  "sentence_en": "English sentence",
  "word_fr": "French translation",
  "sentence_fr": "French sentence"
}
Word: ${word}`;

      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: legacyPrompt }],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!openaiResponse.ok) {
        return new Response(
          JSON.stringify({ error: 'Failed to generate flashcard' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const openaiData = await openaiResponse.json();
      const legacyData: LegacyFlashcardData = JSON.parse(openaiData.choices[0].message.content);

      // Save legacy format to database (with new columns populated too)
      const { data, error } = await supabase
        .from('flashcards')
        .insert({
          user_id: userId,
          word_en: legacyData.word_en,
          word_fr: legacyData.word_fr,
          sentence_en: legacyData.sentence_en,
          sentence_fr: legacyData.sentence_fr,
          // Also populate universal columns
          front: legacyData.word_fr,
          back: legacyData.word_en,
          hint: `${legacyData.sentence_fr} / ${legacyData.sentence_en}`,
          category: 'Vocabulaire',
          source: 'ai_generated',
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

      return new Response(
        JSON.stringify({
          success: true,
          flashcard: data,
          generated: legacyData,
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    else {
      return new Response(
        JSON.stringify({ error: 'Invalid mode. Use "manual", "ai", or "legacy"' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Save universal flashcard to database
    const { data, error } = await supabase
      .from('flashcards')
      .insert({
        user_id: userId,
        front: flashcardData.front,
        back: flashcardData.back,
        hint: flashcardData.hint,
        category: flashcardData.category,
        tags: flashcardData.tags,
        source: mode === 'ai' ? 'ai_generated' : 'manual',
        // Keep legacy columns null for new format cards
        word_en: '',
        word_fr: '',
        sentence_en: '',
        sentence_fr: '',
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
        generated: flashcardData,
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
