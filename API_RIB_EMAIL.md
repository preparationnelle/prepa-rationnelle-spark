# API Email RIB - Stage de Pré-entrée

## Endpoint
`POST /api/send-rib-email`

## Fonctionnalité
Envoi automatique d'un email avec le RIB en pièce jointe lors de l'inscription par virement bancaire.

## Payload attendu
```json
{
  "to": "candidat@email.com",
  "cc": "preparationnelle@gmail.com",
  "subject": "RIB – Stage de Pré-entrée",
  "userData": {
    "prenom": "Jean",
    "nom": "Dupont",
    "email": "jean.dupont@email.com",
    "telephone": "0612345678"
  },
  "amount": "199€",
  "reference": "PRENTREE-DUPONT-jean.dupont"
}
```

## Contenu de l'email

### Objet
`RIB – Stage de Pré-entrée`

### Corps du message
```
Bonjour [Prénom],

Merci pour votre inscription au Stage de Pré-entrée !

Voici notre RIB pour effectuer le virement :

IBAN: [Votre IBAN]
BIC: [Votre BIC]
Montant: 199€
Référence à mettre en libellé: [PRENTREE-NOM-EMAIL]

Votre place sera confirmée sous 24h après réception du paiement.

Cordialement,
L'équipe Prépa Rationnelle
```

### Pièce jointe
- `RIB.pdf` - Document RIB officiel

## Implémentation recommandée

### Option 1: Supabase Edge Functions
```typescript
// supabase/functions/send-rib-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"

serve(async (req) => {
  const { to, cc, userData, amount, reference } = await req.json()
  
  const client = new SmtpClient()
  
  await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 587,
    username: "preparationnelle@gmail.com",
    password: Deno.env.get("SMTP_PASSWORD"),
  })
  
  await client.send({
    from: "preparationnelle@gmail.com",
    to: to,
    cc: cc,
    subject: "RIB – Stage de Pré-entrée",
    content: generateEmailContent(userData, amount, reference),
    attachments: [{
      filename: "RIB.pdf",
      content: await Deno.readFile("./RIB.pdf"),
    }],
  })
  
  await client.close()
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  })
})
```

### Option 2: Vercel API Routes
```typescript
// pages/api/send-rib-email.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { to, cc, userData, amount, reference } = req.body

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'preparationnelle@gmail.com',
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: 'preparationnelle@gmail.com',
    to: to,
    cc: cc,
    subject: 'RIB – Stage de Pré-entrée',
    html: generateEmailHTML(userData, amount, reference),
    attachments: [{
      filename: 'RIB.pdf',
      path: './public/RIB.pdf',
    }],
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    res.status(500).json({ error: 'Erreur lors de l\'envoi' })
  }
}
```

## Variables d'environnement requises
```env
SMTP_PASSWORD=votre_mot_de_passe_app_gmail
```

## Sécurité
- Utiliser un mot de passe d'application Gmail (pas le mot de passe principal)
- Valider les données d'entrée côté serveur
- Limiter le taux de requêtes (rate limiting)
- Logger les tentatives d'envoi pour audit

## Test
```bash
curl -X POST http://localhost:3000/api/send-rib-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "cc": "preparationnelle@gmail.com",
    "userData": {
      "prenom": "Test",
      "nom": "User",
      "email": "test@example.com",
      "telephone": "0612345678"
    },
    "amount": "199€",
    "reference": "PRENTREE-USER-test"
  }'
``` 