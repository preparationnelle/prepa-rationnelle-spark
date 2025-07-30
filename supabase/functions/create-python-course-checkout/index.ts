
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: { user } } = await supabaseClient.auth.getUser(token);

    if (!user) {
      throw new Error('Non autorisé');
    }

    const stripe = new (await import('https://esm.sh/stripe@13.5.0')).default(
      Deno.env.get('STRIPE_SECRET_KEY') ?? '',
      { apiVersion: '2023-10-16' }
    );

    // Générer un code d'accès unique
    const accessCode = Math.random().toString(36).substring(2, 15).toUpperCase();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Formation Python ECG - Accès Complet',
              description: 'Accès à tous les modules de formation Python pour prépa ECG',
            },
            unit_amount: 9900, // 99 euros en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/formation?success=true&code=${accessCode}`,
      cancel_url: `${req.headers.get('origin')}/formation?canceled=true`,
      metadata: {
        user_id: user.id,
        access_code: accessCode,
        course_type: 'python_formation'
      }
    });

    // Sauvegarder l'achat en attente
    await supabaseClient.from('course_purchases').insert({
      user_id: user.id,
      stripe_session_id: session.id,
      amount: 9900,
      currency: 'eur',
      status: 'pending',
      course_type: 'python_formation'
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Erreur lors de la création de la session Stripe:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
