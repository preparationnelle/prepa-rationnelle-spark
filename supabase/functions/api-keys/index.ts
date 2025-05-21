
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get JWT token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Aucun token d\'authentification fourni' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the user is authenticated
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Utilisateur non authentifié' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const { action, keyId, name } = await req.json();

    // Handle different actions
    switch (action) {
      case 'generate':
        return await generateKey(supabaseClient, user.id, name, corsHeaders);
      case 'list':
        return await listKeys(supabaseClient, user.id, corsHeaders);
      case 'revoke':
        return await revokeKey(supabaseClient, user.id, keyId, corsHeaders);
      default:
        return new Response(
          JSON.stringify({ error: 'Action non reconnue' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(
      JSON.stringify({ error: 'Erreur de serveur' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

// Function to generate a random API key
function generateRandomKey() {
  const prefix = 'PR'; // Prepa Rationnelle prefix
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = prefix + '_';
  for (let i = 0; i < 24; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate new API key
async function generateKey(supabase, userId, name, corsHeaders) {
  const apiKey = generateRandomKey();
  const keyHash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(apiKey)
  );
  const hashArray = Array.from(new Uint8Array(keyHash));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const { data, error } = await supabase
    .from('api_keys')
    .insert({
      user_id: userId,
      name: name || 'API Key',
      key_hash: hashHex,
      created_at: new Date().toISOString(),
    })
    .select();

  if (error) {
    console.error("Error saving API key:", error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la création de la clé API' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Return the full API key only once, after that we only store and show the hash
  return new Response(
    JSON.stringify({
      message: 'Clé API générée avec succès',
      key: apiKey,
      id: data[0].id,
      name: data[0].name,
      created_at: data[0].created_at,
    }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

// List API keys
async function listKeys(supabase, userId, corsHeaders) {
  const { data, error } = await supabase
    .from('api_keys')
    .select('id, name, created_at, last_used')
    .eq('user_id', userId);

  if (error) {
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la récupération des clés API' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ keys: data }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

// Revoke API key
async function revokeKey(supabase, userId, keyId, corsHeaders) {
  // First verify the key belongs to this user
  const { data: keyData, error: keyError } = await supabase
    .from('api_keys')
    .select('id')
    .eq('id', keyId)
    .eq('user_id', userId)
    .single();

  if (keyError || !keyData) {
    return new Response(
      JSON.stringify({ error: 'Clé API non trouvée ou non autorisée' }),
      { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Delete the key
  const { error } = await supabase
    .from('api_keys')
    .delete()
    .eq('id', keyId)
    .eq('user_id', userId);

  if (error) {
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la révocation de la clé API' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ message: 'Clé API révoquée avec succès' }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}
