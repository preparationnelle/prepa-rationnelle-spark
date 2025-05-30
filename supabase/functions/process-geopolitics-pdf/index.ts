
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pdfUrl, userId, language = 'fr' } = await req.json();

    if (!pdfUrl || !userId) {
      return new Response(
        JSON.stringify({ error: 'PDF URL and userId are required' }),
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

    console.log('Processing PDF:', pdfUrl);

    // Convert Google Drive URL to direct download link if needed
    let processedUrl = pdfUrl;
    if (pdfUrl.includes('drive.google.com')) {
      const fileIdMatch = pdfUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileIdMatch) {
        processedUrl = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
      } else if (pdfUrl.includes('/view')) {
        processedUrl = pdfUrl.replace('/view?usp=sharing', '').replace('/view', '') + '/export?format=pdf';
      }
    }

    console.log('Processed URL:', processedUrl);

    // Try to extract text directly from the PDF using a simpler approach
    let extractedText = '';
    
    try {
      // Step 1: Try PDF.co first
      const pdfTextResponse = await fetch('https://api.pdf.co/v1/pdf/convert/to/text', {
        method: 'POST',
        headers: {
          'x-api-key': 'stanislaschmd@gmail.com_IFDkA5WTVdXYogpDx57Mej3iYc4h6hAx5rrY99r7cgMGSTuMIaiXA1rBpKXYb2BL',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: processedUrl
        }),
      });

      if (pdfTextResponse.ok) {
        const pdfData = await pdfTextResponse.json();
        if (pdfData.url) {
          const textResponse = await fetch(pdfData.url);
          extractedText = await textResponse.text();
        }
      } else {
        console.log('PDF.co failed, trying alternative approach');
        throw new Error('PDF.co extraction failed');
      }
    } catch (error) {
      console.log('PDF extraction failed:', error);
      
      // Fallback: Use the URL as raw text input (user can paste text directly)
      if (pdfUrl.length > 100) {
        extractedText = pdfUrl; // Assume user pasted text directly
      } else {
        return new Response(
          JSON.stringify({ 
            error: 'Failed to extract text from PDF. Please ensure the URL is publicly accessible or paste the text directly in the URL field.' 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    if (!extractedText || extractedText.length < 50) {
      return new Response(
        JSON.stringify({ 
          error: 'No text could be extracted from the PDF. Please check the URL or try pasting the text directly.' 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Text extracted successfully, length:', extractedText.length);

    // Step 2: Structure the course with OpenAI
    const structurePrompt = language === 'fr' 
      ? `Tu es un assistant pédagogique pour des élèves de classe préparatoire ECG.
Ta mission est de transformer un cours brut de géopolitique en clarté.

Voici ta méthode :
1. Déduis le plan implicite du cours (I / II / III…) en respectant sa logique.
2. Dans chaque partie, identifie les principes premiers — les idées centrales, non les détails.
3. Pour chaque point-clé, sélectionne un exemple pertinent, simple et marquant.
4. Structure l'ensemble de façon lisible, comme si tu écrivais une fiche pour un élève pressé mais curieux.
5. Extrais toutes les définitions importantes et mets les à la fin du document.

Ne résume pas.
Hiérarchise. Clarifie. Illustre.

Écris avec calme, rigueur, et sobriété.
Comme un esprit qui pense bien.`
      : `You are a pedagogical assistant for ECG preparatory class students.
Your mission is to transform a raw geopolitics course into clarity.

Here is your method:
1. Deduce the implicit plan of the course (I / II / III…) respecting its logic.
2. In each part, identify the first principles — the central ideas, not the details.
3. For each key point, select a relevant, simple and striking example.
4. Structure the whole in a readable way, as if you were writing a sheet for a student in a hurry but curious.
5. Extract all important definitions and put them at the end of the document.

Don't summarize.
Hierarchize. Clarify. Illustrate.

Write with calm, rigor, and sobriety.
Like a mind that thinks well.`;

    const structuredResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: structurePrompt },
          { role: 'user', content: `Voici un cours brut de géopolitique :\n\n${extractedText}` }
        ],
        temperature: 0.7,
      }),
    });

    if (!structuredResponse.ok) {
      throw new Error('Failed to structure course with OpenAI');
    }

    const structuredData = await structuredResponse.json();
    const structuredCourse = structuredData.choices[0].message.content;

    // Step 3: Generate flashcards
    const flashcardsPrompt = `Tu es un assistant pédagogique.
Tu lis un cours structuré de géopolitique (plan, points clés, exemples), et tu génères des flashcards au format Anki.

Consignes :
- Génère 15 à 25 flashcards, pas plus.
- Sois sélectif : une idée ≠ une carte.
- Utilise 4 formats :
  1. Définition → recto : "Définition de : X"
  2. Question → "Question : Pourquoi / Comment X ?"
  3. Concept → "Concept : Quel est le point-clé de Y ?"
  4. Exemple → "Exemple de X ?"

Format final :
- Ligne 1 : front|||back|||type
- Ensuite : une ligne par carte
- Séparateur = trois barres verticales |||

Retourne le CSV brut.
Pas de phrases.
Pas de tableau markdown.
Pas de code block.`;

    const flashcardsResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: flashcardsPrompt },
          { role: 'user', content: `Voici le cours structuré :\n${structuredCourse}` }
        ],
        temperature: 0.7,
      }),
    });

    const flashcardsData = await flashcardsResponse.json();
    const flashcards = flashcardsData.choices[0].message.content;

    // Step 4: Generate dissertation topics
    const topicsPrompt = `Tu es un professeur de géopolitique pour les classes préparatoires ECG.
Ta mission est de créer des sujets d'entraînement à partir d'un cours structuré.
Tes sujets doivent correspondre aux exigences des concours.
Ils doivent permettre de mobiliser les points-clés du chapitre et inviter à problématiser.
Ta réponse doit être claire, concise et directement exploitable pour un étudiant.`;

    const topicsResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: topicsPrompt },
          { role: 'user', content: `Voici le cours structuré :\n${structuredCourse}\n\nGénère 3 sujets de dissertation géopolitique à partir de ce contenu.\nPour chaque sujet, donne :\n\n1. Le sujet en une phrase, formulé clairement.\n2. Un plan structuré (3 parties, avec titres si possible).\n3. Une brève phrase pour expliquer en quoi ce sujet est lié au cours.` }
        ],
        temperature: 0.7,
      }),
    });

    const topicsData = await topicsResponse.json();
    const dissertationTopics = topicsData.choices[0].message.content;

    // Step 5: Generate current events (simplified since we can't use Perplexity directly)
    const currentEventsPrompt = `Tu es un assistant de veille informationnelle. 
Analyse ce cours de géopolitique et cite 3 faits d'actualité récents (moins de 6 mois) en lien avec ce cours.
Pour chaque fait, donne : le fait, sa source (nom du média) et une date approximative.
Sois précis et factuel.`;

    const eventsResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: currentEventsPrompt },
          { role: 'user', content: `Voici un cours structuré : ${structuredCourse}` }
        ],
        temperature: 0.7,
      }),
    });

    const eventsData = await eventsResponse.json();
    const currentEvents = eventsData.choices[0].message.content;

    console.log('All content generated successfully');

    return new Response(
      JSON.stringify({
        structuredCourse,
        flashcards,
        dissertationTopics,
        currentEvents
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error: ' + error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
