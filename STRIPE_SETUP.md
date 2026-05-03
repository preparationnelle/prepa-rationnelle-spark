# Configuration Stripe - Stage de Pré-entrée

## 🔑 Variables d'environnement requises

Ajoutez ces variables dans votre dashboard Supabase (Settings > Environment variables) :

```env
# Clés Stripe
STRIPE_SECRET_KEY=sk_test_... # Clé secrète Stripe (test ou live)
STRIPE_PUBLISHABLE_KEY=pk_test_... # Clé publique Stripe (test ou live)
STRIPE_WEBHOOK_SECRET=whsec_... # Secret du webhook Stripe

# Configuration email
SMTP_PASSWORD=votre_mot_de_passe_app_gmail # Mot de passe d'application Gmail
```

## 🚀 Déploiement des fonctions Supabase

### 1. Déployer les fonctions Edge
```bash
# Dans le dossier supabase/functions
supabase functions deploy create-stripe-session
supabase functions deploy send-rib-notification
supabase functions deploy stripe-webhook
```

### 2. Configurer les variables d'environnement
```bash
supabase secrets set STRIPE_SECRET_KEY=sk_test_...
supabase secrets set STRIPE_PUBLISHABLE_KEY=pk_test_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
supabase secrets set SMTP_PASSWORD=votre_mot_de_passe_app_gmail
```

## 🔗 Configuration Stripe Dashboard

### 1. Créer un compte Stripe
- Allez sur [stripe.com](https://stripe.com)
- Créez un compte ou connectez-vous
- Activez votre compte (informations bancaires requises)

### 2. Récupérer les clés API
- Dashboard Stripe > Developers > API keys
- Copiez la **Secret key** (commence par `sk_test_` ou `sk_live_`)
- Copiez la **Publishable key** (commence par `pk_test_` ou `pk_live_`)

### 3. Configurer le webhook
- Dashboard Stripe > Developers > Webhooks
- Cliquez "Add endpoint"
- URL : `https://votre-projet.supabase.co/functions/v1/stripe-webhook`
- Événements à écouter :
  - `checkout.session.completed`
  - `payment_intent.succeeded`
- Copiez le **Signing secret** (commence par `whsec_`)

### 4. Configurer les URLs de redirection
- Dashboard Stripe > Settings > Checkout settings
- Success URL : `https://votre-domaine.com/offres/pre-rentree?success=true`
- Cancel URL : `https://votre-domaine.com/offres/pre-rentree?canceled=true`

## 📧 Configuration Gmail

### 1. Activer l'authentification à 2 facteurs
- Gmail > Paramètres > Sécurité
- Activez la validation en 2 étapes

### 2. Créer un mot de passe d'application
- Gmail > Paramètres > Sécurité > Mots de passe d'application
- Sélectionnez "Autre (nom personnalisé)"
- Nom : "Prepa Rationnelle API"
- Copiez le mot de passe généré (16 caractères)

## 🧪 Test du système

### 1. Test en mode développement
```bash
# Démarrer Supabase localement
supabase start

# Tester les fonctions
curl -X POST http://localhost:54321/functions/v1/create-stripe-session \
  -H "Content-Type: application/json" \
  -d '{
    "userData": {
      "prenom": "Test",
      "nom": "User",
      "email": "test@example.com",
      "telephone": "0612345678"
    },
    "amount": 19900,
    "description": "Stage de Pré-entrée - 18-23 août 2025",
    "successUrl": "http://localhost:3000/offres/pre-rentree?success=true",
    "cancelUrl": "http://localhost:3000/offres/pre-rentree?canceled=true"
  }'
```

### 2. Test des cartes Stripe
- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0025 0000 3155`

## 🔄 Flux de paiement

### Paiement par carte (Stripe)
1. Utilisateur remplit le formulaire
2. Clic sur "Procéder au paiement"
3. Redirection vers Stripe Checkout
4. Paiement sécurisé
5. Retour sur le site avec `?success=true`
6. Email de confirmation automatique
7. Notification à l'équipe

### Paiement par virement
1. Utilisateur remplit le formulaire
2. Sélectionne "Paiement par virement bancaire"
3. Clic sur "Procéder au paiement"
4. Email de notification à `preparationnelle@gmail.com`
5. Modal de confirmation affiché
6. Envoi manuel du RIB par l'équipe

## 📊 Monitoring

### Logs Supabase
```bash
# Voir les logs des fonctions
supabase functions logs create-stripe-session
supabase functions logs send-rib-notification
supabase functions logs stripe-webhook
```

### Dashboard Stripe
- **Paiements** : Dashboard > Paiements
- **Webhooks** : Dashboard > Developers > Webhooks > Logs
- **Sessions** : Dashboard > Checkout > Sessions

## 🛡️ Sécurité

### Bonnes pratiques
- ✅ Utilisez toujours HTTPS en production
- ✅ Validez les données côté serveur
- ✅ Utilisez des mots de passe d'application Gmail
- ✅ Limitez les tentatives de paiement
- ✅ Surveillez les logs d'erreur

### Variables sensibles
- ❌ Ne commitez jamais les clés Stripe
- ❌ Ne partagez pas les mots de passe d'application
- ❌ Utilisez des variables d'environnement
- ❌ Différenciez test/production

## 🚨 Dépannage

### Erreurs courantes
1. **"Invalid API key"** → Vérifiez STRIPE_SECRET_KEY
2. **"Webhook signature failed"** → Vérifiez STRIPE_WEBHOOK_SECRET
3. **"SMTP authentication failed"** → Vérifiez SMTP_PASSWORD
4. **"CORS error"** → Vérifiez les headers CORS dans les fonctions

### Support
- **Stripe** : [support.stripe.com](https://support.stripe.com)
- **Supabase** : [supabase.com/support](https://supabase.com/support)
- **Gmail** : [support.google.com/mail](https://support.google.com/mail) 