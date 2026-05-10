import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"
import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts"
import { escapeHtml } from "../_shared/auth.ts"

// Internal notification recipient — hardcoded server-side so this endpoint
// can never be used as an open mailer.
const INTERNAL_RECIPIENT = "preparationnelle@gmail.com"
const SUBJECT = "Nouvelle inscription par virement - Stage de Pré-entrée"

serve(async (req) => {
  const preflight = handleCorsPreflight(req)
  if (preflight) return preflight

  try {
    const { userData, amount, reference } = await req.json()

    if (!userData?.email || !userData?.prenom || !userData?.nom) {
      return new Response(
        JSON.stringify({ error: "userData.email, prenom, nom requis" }),
        {
          status: 400,
          headers: { ...corsHeaders(req), "Content-Type": "application/json" },
        },
      )
    }

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

Informations du candidat :
- Prénom : ${escapeHtml(userData.prenom)}
- Nom : ${escapeHtml(userData.nom)}
- Email : ${escapeHtml(userData.email)}
- Téléphone : ${escapeHtml(userData.telephone)}

Détails de la commande :
- Stage : Stage de Pré-entrée (18-23 août 2025)
- Montant : ${escapeHtml(amount)}
- Référence : ${escapeHtml(reference)}

Action requise :
Veuillez envoyer le RIB par email à ${escapeHtml(userData.email)} avec les instructions de paiement.

Cordialement,
Système d'inscription Prépa Rationnelle
    `

    await client.send({
      from: "preparationnelle@gmail.com",
      to: INTERNAL_RECIPIENT,
      subject: SUBJECT,
      content: emailContent,
    })

    await client.close()

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders(req), "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error('Erreur envoi email notification:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur lors de l\'envoi de la notification' }),
      {
        status: 500,
        headers: { ...corsHeaders(req), "Content-Type": "application/json" },
      },
    )
  }
})
