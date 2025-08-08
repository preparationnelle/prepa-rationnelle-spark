
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno"
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  const body = await req.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error('Erreur signature webhook:', err)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Gérer l'événement
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session
      await handleSuccessfulPayment(session)
      break
    default:
      console.log(`Événement non géré: ${event.type}`)
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  try {
    const { prenom, nom, email, telephone } = session.metadata || {}
    
    if (!email) {
      console.error('Email manquant dans les métadonnées')
      return
    }

    // Envoyer un email de confirmation au client
    const client = new SmtpClient()

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 587,
      username: "preparationnelle@gmail.com",
      password: Deno.env.get("SMTP_PASSWORD"),
    })

    const emailContent = `
Bonjour ${prenom},

Félicitations ! Votre inscription au Stage de Pré-entrée a été confirmée.

**Détails de votre inscription :**
- Stage : Stage de Pré-entrée (18-23 août 2025)
- Montant payé : 199€
- Référence : ${session.id}

**Prochaines étapes :**
1. Vous recevrez un email avec les détails pratiques du stage sous 24h
2. Un lien vers la visioconférence vous sera envoyé la veille du stage
3. Les supports de cours seront disponibles en ligne

**Informations importantes :**
- Horaires : 9h-17h chaque jour
- Support technique inclus
- Enregistrements disponibles
- Garantie satisfaction 48h

Si vous avez des questions, contactez-nous à preparationnelle@gmail.com ou au 06 09 16 46 68.

Cordialement,
L'équipe Prépa Rationnelle
    `

    await client.send({
      from: "preparationnelle@gmail.com",
      to: email,
      subject: "Confirmation d'inscription - Stage de Pré-entrée",
      content: emailContent,
    })

    // Envoyer une notification à l'équipe
    const notificationContent = `
Nouveau paiement confirmé pour le Stage de Pré-entrée !

**Client :**
- Nom : ${nom} ${prenom}
- Email : ${email}
- Téléphone : ${telephone}

**Paiement :**
- Montant : 199€
- Référence Stripe : ${session.id}
- Statut : Payé

**Action :**
Préparer l'envoi des détails pratiques du stage.
    `

    await client.send({
      from: "preparationnelle@gmail.com",
      to: "preparationnelle@gmail.com",
      subject: "Nouveau paiement confirmé - Stage de Pré-entrée",
      content: notificationContent,
    })

    await client.close()

    console.log(`Email de confirmation envoyé à ${email}`)
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails de confirmation:', error)
  }
}
