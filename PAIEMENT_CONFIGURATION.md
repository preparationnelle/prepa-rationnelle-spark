# ✅ Configuration Paiement - Stage de Pré-entrée

## 🎯 Objectif atteint

Le système de paiement est maintenant **entièrement configuré** avec deux options :

### 💳 **Option 1 : Paiement par carte (Stripe)**
- Interface Stripe Checkout sécurisée
- Paiement en ligne immédiat
- Email de confirmation automatique
- Notification à l'équipe

### 🏦 **Option 2 : Paiement par virement**
- Notification automatique à `preparationnelle@gmail.com`
- Envoi manuel du RIB par l'équipe
- Modal de confirmation pour l'utilisateur

## 🔧 Configuration requise

### 1. Variables d'environnement Supabase
```env
STRIPE_SECRET_KEY=sk_test_... # Clé secrète Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_... # Clé publique Stripe  
STRIPE_WEBHOOK_SECRET=whsec_... # Secret webhook Stripe
SMTP_PASSWORD=votre_mot_de_passe_app_gmail # Gmail API
```

### 2. Déploiement des fonctions
```bash
supabase functions deploy create-stripe-session
supabase functions deploy send-rib-notification
supabase functions deploy stripe-webhook
```

### 3. Configuration Stripe Dashboard
- Créer un compte Stripe
- Récupérer les clés API
- Configurer le webhook
- Définir les URLs de redirection

## 📧 Flux d'emails automatiques

### Paiement Stripe réussi :
1. **Client** → Email de confirmation avec détails du stage
2. **Équipe** → Notification avec informations du client

### Demande de virement :
1. **Équipe** → Notification avec coordonnées du client
2. **Client** → Modal de confirmation (pas d'email automatique)

## 🚀 URLs de test

- **Page principale** : `http://localhost:8082/stage-accompagnement`
- **Page inscription** : `http://localhost:8082/offres/pre-rentree#inscription`
- **Section aide** : `http://localhost:8082/offres/pre-rentree#contact-support`

## 🧪 Cartes de test Stripe

- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0025 0000 3155`

## 📋 Prochaines étapes

1. **Configurer les variables d'environnement** dans Supabase
2. **Déployer les fonctions Edge** 
3. **Configurer le webhook Stripe**
4. **Tester avec les cartes de test**
5. **Passer en mode production** (clés live)

## 📞 Support

- **Documentation complète** : `STRIPE_SETUP.md`
- **API Email RIB** : `API_RIB_EMAIL.md`
- **Logs** : Dashboard Supabase > Functions > Logs

---

**✅ Le système est prêt à être déployé !** 