import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data } = await req.json()

    if (!type || !data) {
      throw new Error('Missing required fields: type and data')
    }

    const client = new SmtpClient()

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 587,
      username: "preparationnelle@gmail.com",
      password: Deno.env.get("SMTP_PASSWORD"),
    })

    let emailContent = ''
    let subject = ''

    if (type === 'parent_request') {
      subject = 'Nouvelle demande d\'accompagnement - Prépa Rationnelle'
      emailContent = `
Bonjour,

Une nouvelle demande d'accompagnement a été soumise.

**Informations du demandeur :**
- Nom : ${data.requester_first_name} ${data.requester_last_name}
- Email : ${data.requester_email}
- Téléphone : ${data.requester_phone}

**Informations de l'élève :**
${data.is_for_self ? 
  `- C'est pour le demandeur lui-même` : 
  `- Prénom : ${data.student_first_name || 'Non renseigné'}
- Nom : ${data.student_last_name || 'Non renseigné'}
- Téléphone : ${data.student_phone || 'Non renseigné'}
- Email : ${data.student_email || 'Non renseigné'}
- Relation : ${data.relationship || 'Non renseignée'}`}
- Niveau : ${data.student_level}
- Matière : ${data.subject}

**Description des besoins :**
${data.needs_description}

**Action souhaitée :**
${data.action_choice === 'call' ? '📞 Réserver un appel pour échanger' : '👩‍🏫 Choisir directement un professeur'}

**Prochaines étapes :**
1. Contacter le demandeur pour confirmer les besoins
2. Proposer une solution adaptée
3. Mettre à jour le statut dans la page de gestion

Cordialement,
Système Prépa Rationnelle
      `
    } else if (type === 'teacher_application') {
      subject = 'Nouvelle candidature de professeur - Prépa Rationnelle'
      emailContent = `
Bonjour,

Une nouvelle candidature de professeur a été soumise.

**Informations du professeur :**
- Nom : ${data.teacher_name}
- Email : ${data.teacher_email}
- Téléphone : ${data.teacher_phone}

**Informations professionnelles :**
- Matières : ${Array.isArray(data.subjects) ? data.subjects.join(', ') : data.subjects}
- Parcours/Compétences : ${data.background_description}
- Créneaux disponibles : ${data.availability_schedule}
- Heures par semaine : ${data.hours_per_week}h
- Tarif horaire souhaité : ${data.hourly_rate}€

**Prochaines étapes :**
1. Examiner la candidature
2. Contacter le professeur si nécessaire
3. Approuver ou refuser dans la page de gestion

Cordialement,
Système Prépa Rationnelle
      `
    } else {
      throw new Error('Invalid type. Must be "parent_request" or "teacher_application"')
    }

    await client.send({
      from: "preparationnelle@gmail.com",
      to: "dimitrovdimitar556@gmail.com",
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
