import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno"
import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts"

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

// Server-controlled product catalog — clients pick a productKey, never set
// price/URLs themselves. Prevents amount tampering and open-redirect via
// success_url/cancel_url.
const PRODUCT_BASE_URL = Deno.env.get("PUBLIC_SITE_URL") ||
  "https://www.preparationnelle.com"

const PRODUCTS = {
  stage_pre_rentree: {
    name: "Stage de Pré-entrée",
    description: "18-23 août 2025 • 6 jours intensifs",
    unit_amount: 19900, // 199 EUR
    currency: "eur",
    success_path: "/offres/pre-rentree?success=true",
    cancel_path: "/offres/pre-rentree?canceled=true",
  },
} as const

type ProductKey = keyof typeof PRODUCTS

serve(async (req) => {
  const preflight = handleCorsPreflight(req)
  if (preflight) return preflight

  try {
    const { productKey, userData } = await req.json()

    if (!productKey || !(productKey in PRODUCTS)) {
      return new Response(
        JSON.stringify({ error: "Produit inconnu" }),
        {
          status: 400,
          headers: { ...corsHeaders(req), "Content-Type": "application/json" },
        },
      )
    }

    const product = PRODUCTS[productKey as ProductKey]

    if (!userData?.email || typeof userData.email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email requis" }),
        {
          status: 400,
          headers: { ...corsHeaders(req), "Content-Type": "application/json" },
        },
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.unit_amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${PRODUCT_BASE_URL}${product.success_path}`,
      cancel_url: `${PRODUCT_BASE_URL}${product.cancel_path}`,
      customer_email: userData.email,
      metadata: {
        prenom: userData.prenom ?? "",
        nom: userData.nom ?? "",
        telephone: userData.telephone ?? "",
        email: userData.email,
        type: productKey,
      },
      billing_address_collection: 'required',
      locale: 'fr',
    })

    return new Response(
      JSON.stringify({ sessionUrl: session.url }),
      {
        headers: { ...corsHeaders(req), "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error('Erreur création session Stripe:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la création de la session de paiement' }),
      {
        status: 500,
        headers: { ...corsHeaders(req), "Content-Type": "application/json" },
      },
    )
  }
})
