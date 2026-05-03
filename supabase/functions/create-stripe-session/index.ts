import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno"

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { userData, amount, description, successUrl, cancelUrl } = await req.json()

    // Créer la session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Stage de Pré-entrée',
              description: '18-23 août 2025 • 6 jours intensifs',
            },
            unit_amount: amount, // 19900 pour 199€
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: userData.email,
      metadata: {
        prenom: userData.prenom,
        nom: userData.nom,
        telephone: userData.telephone,
        email: userData.email,
        type: 'stage_pre_rentree',
      },
      billing_address_collection: 'required',
      locale: 'fr',
    })

    return new Response(
      JSON.stringify({ sessionUrl: session.url }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Erreur création session Stripe:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la création de la session de paiement' }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
} 