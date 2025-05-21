
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Get API key from header
    const apiKey = req.headers.get('x-api-key');
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Aucune clé API fournie' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Hash the API key
    const keyHash = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(apiKey)
    );
    const hashArray = Array.from(new Uint8Array(keyHash));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Find the key in the database
    const { data, error } = await supabaseClient
      .from('api_keys')
      .select('id, user_id, name')
      .eq('key_hash', hashHex)
      .single();

    if (error || !data) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Clé API invalide' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update last_used timestamp
    await supabaseClient
      .from('api_keys')
      .update({ last_used: new Date().toISOString() })
      .eq('id', data.id);

    return new Response(
      JSON.stringify({ 
        valid: true, 
        user_id: data.user_id,
        key_id: data.id,
        name: data.name
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(
      JSON.stringify({ valid: false, error: 'Erreur de serveur' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
