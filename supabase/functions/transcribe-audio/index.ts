import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req) => {
    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    };

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // Récupérer la clé API OpenAI depuis les secrets Supabase
        const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

        if (!OPENAI_API_KEY) {
            console.error('OPENAI_API_KEY is not set');
            return new Response(
                JSON.stringify({ error: 'Configuration serveur manquante' }),
                {
                    status: 500,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            );
        }

        // Récupérer le FormData depuis la requête
        const formData = await req.formData();
        const audioFile = formData.get('file');
        const language = formData.get('language') || 'en';

        if (!audioFile) {
            return new Response(
                JSON.stringify({ error: 'Aucun fichier audio fourni' }),
                {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            );
        }

        // Valider la langue
        const validLanguages = ['en', 'de', 'es'];
        if (!validLanguages.includes(language as string)) {
            return new Response(
                JSON.stringify({ error: 'Langue non supportée' }),
                {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            );
        }

        console.log(`Transcription demandée pour la langue: ${language}`);

        // Préparer le FormData pour OpenAI Whisper
        const openaiFormData = new FormData();
        openaiFormData.append('file', audioFile);
        openaiFormData.append('model', 'whisper-1');
        openaiFormData.append('language', language as string);
        openaiFormData.append('temperature', '0'); // Transcription précise

        // Appeler l'API Whisper d'OpenAI
        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: openaiFormData
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erreur API Whisper:', errorText);
            return new Response(
                JSON.stringify({
                    error: 'Erreur lors de la transcription',
                    details: errorText
                }),
                {
                    status: response.status,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            );
        }

        // Récupérer la transcription
        const data = await response.json();

        console.log('Transcription réussie:', data.text?.substring(0, 50) + '...');

        // Retourner la transcription
        return new Response(
            JSON.stringify(data),
            {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Erreur dans transcribe-audio:', error);
        return new Response(
            JSON.stringify({
                error: 'Erreur serveur lors de la transcription',
                message: error.message
            }),
            {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        );
    }
});
