import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, subject, userData, amount, reference } = await req.json()

    const client = new SmtpClient()

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 587,
      username: "preparationnelle@gmail.com",
      password: Deno.env.get("SMTP_PASSWORD"),
    })

    const emailContent = `
Bonjour,

Une nouvelle inscription au Stage de Pré-entrée a été effectuée avec demande de paiement par virement.

**Informations du candidat :**
- Prénom : ${userData.prenom}
- Nom : ${userData.nom}
- Email : ${userData.email}
- Téléphone : ${userData.telephone}

**Détails de la commande :**
- Stage : Stage de Pré-entrée (18-23 août 2025)
- Montant : ${amount}
- Référence : ${reference}

**Action requise :**
Veuillez envoyer le RIB par email à ${userData.email} avec les instructions de paiement.

Cordialement,
Système d'inscription Prépa Rationnelle
    `

    await client.send({
      from: "preparationnelle@gmail.com",
      to: to,
      subject: subject,
      content: emailContent,
    })

    await client.close()

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Erreur envoi email notification:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur lors de l\'envoi de la notification' }),
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