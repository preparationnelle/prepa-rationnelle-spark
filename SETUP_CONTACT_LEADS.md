# 📋 Configuration du Système de Leads - Guide Complet

## ✅ Ce qui a été créé

### 1. **Base de données** 
- ✅ Table `contact_leads` créée dans Supabase
- ✅ Policies RLS configurées (admins peuvent lire/modifier, public peut créer)
- ✅ Indexes pour performance optimale

### 2. **Edge Function**
- ✅ Function `submit-contact-lead` déployée
- ✅ Gère : stockage en base + SMS + Email

### 3. **Interface Utilisateur**
- ✅ Formulaire multi-étapes moderne sur la homepage
- ✅ Dashboard admin `/admin/leads` pour gérer les leads
- ✅ Types TypeScript générés

---

## 🔧 Configuration Requise

### **Étape 1 : Configurer les Variables d'Environnement Supabase**

Allez dans votre projet Supabase : https://supabase.com/dashboard/project/xamkaphelshsavcacbdy/settings/functions

Ajoutez ces variables d'environnement (secrets) :

#### **1. Twilio (pour les SMS)** 📱

```bash
TWILIO_ACCOUNT_SID=votre_account_sid
TWILIO_AUTH_TOKEN=votre_auth_token
TWILIO_PHONE_NUMBER=+33XXXXXXXXX  # Votre numéro Twilio
ADMIN_PHONE_NUMBER=+33609164668   # Votre numéro personnel pour recevoir les SMS
```

**Comment obtenir ces valeurs :**
1. Créez un compte sur https://www.twilio.com/
2. Achetez un numéro de téléphone (environ 1€/mois)
3. Récupérez votre `ACCOUNT_SID` et `AUTH_TOKEN` dans le dashboard Twilio
4. Configurez le numéro que vous avez acheté comme `TWILIO_PHONE_NUMBER`

#### **2. Resend (pour les emails)** 📧

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

**Comment obtenir cette valeur :**
1. Créez un compte sur https://resend.com/
2. Créez une API Key dans Settings > API Keys
3. Copiez la clé et ajoutez-la comme variable d'environnement

---

### **Étape 2 : Tester le Système**

#### **Test du Formulaire**
1. Allez sur votre homepage : https://preparationnelle.com/
2. Remplissez le formulaire de contact
3. Cliquez sur "Être conseillé par l'équipe"
4. Vous devriez recevoir :
   - 📱 Un SMS instantané (si Twilio configuré)
   - 📧 Un email avec tous les détails (si Resend configuré)

#### **Test du Dashboard Admin**
1. Connectez-vous avec un compte admin
2. Allez sur `/admin/leads`
3. Vous devriez voir tous les leads soumis
4. Vous pouvez :
   - Filtrer par statut
   - Rechercher par nom/email/téléphone
   - Modifier les notes et le statut de chaque lead
   - Appeler directement en cliquant sur les numéros

---

## 📊 Utilisation du Dashboard Admin

### **Accès**
- URL : `https://preparationnelle.com/admin/leads`
- Requis : Compte admin (role = 'admin' dans la table `profiles`)

### **Fonctionnalités**

#### **Vue d'ensemble**
- Total de leads
- Nombre de nouveaux leads
- Nombre de leads contactés
- Nombre de leads convertis

#### **Filtres**
- Par statut : Nouveau / Contacté / Converti / Perdu
- Recherche par nom, email, téléphone

#### **Actions sur chaque lead**
- 📞 Appeler directement (click sur le numéro)
- 📧 Envoyer un email (click sur l'email)
- ✏️ Modifier le statut et la priorité
- 📝 Ajouter des notes de suivi

#### **Statuts disponibles**
- 🆕 **Nouveau** : Lead vient d'arriver
- 📞 **Contacté** : Vous avez appelé/écrit
- ✅ **Converti** : Client a accepté votre offre
- ❌ **Perdu** : Lead non intéressé

#### **Priorités**
- ⬇️ **Basse** : Pas urgent
- ➡️ **Normale** : Priorité standard
- ⬆️ **Haute** : À rappeler rapidement
- 🔥 **Urgente** : À rappeler immédiatement

---

## 🎯 Workflow Recommandé

### **Réception d'un nouveau lead**
1. 📱 Vous recevez un SMS instantané
2. 📧 Vous recevez un email détaillé
3. 🏃 **Rappeler dans les 5 minutes** (augmente la conversion de 800% !)

### **Traitement du lead**
1. Allez sur `/admin/leads`
2. Cliquez sur le lead
3. Appelez le numéro
4. Mettez à jour le statut à "Contacté"
5. Ajoutez des notes sur la conversation
6. Définissez la priorité selon l'intérêt

### **Suivi**
1. Filtrez par statut "Contacté"
2. Identifiez les leads à rappeler
3. Ajoutez des rappels dans vos notes
4. Convertissez quand le client accepte

---

## 📱 Structure des Données

### **Champs du formulaire**
- `first_name` : Prénom
- `last_name` : Nom
- `email` : Email
- `phone_student` : Téléphone élève
- `phone_parent` : Téléphone parent (optionnel)
- `city` : Ville (optionnel)
- `student_level` : Prépa / Lycée / Collège
- `student_type` : Élève / Parent
- `service_type` : Stages intensifs / Cours particuliers

### **Champs de gestion**
- `status` : new / contacted / converted / lost
- `priority` : low / normal / high / urgent
- `notes` : Notes de suivi
- `last_contacted_at` : Date du dernier contact
- `created_at` : Date de soumission

---

## 🔒 Sécurité

### **Row Level Security (RLS)**
- ✅ Activé sur la table `contact_leads`
- ✅ Seuls les admins peuvent lire les leads
- ✅ Tout le monde peut soumettre (formulaire public)
- ✅ Seuls les admins peuvent modifier

### **Edge Function**
- ✅ Déployée avec `--no-verify-jwt` (accessible sans auth)
- ✅ Validation des champs côté serveur
- ✅ Protection contre les injections SQL (utilise Supabase client)

---

## 🚀 Prochaines Étapes Recommandées

### **Court terme**
1. ✅ Configurer Twilio et Resend
2. ✅ Tester le formulaire
3. ✅ Donner accès admin à votre compte

### **Moyen terme**
1. Ajouter des templates d'emails de suivi
2. Créer des rappels automatiques
3. Intégrer un CRM (Pipedrive, HubSpot)

### **Long terme**
1. Analytics avancées (taux de conversion, etc.)
2. Scoring automatique des leads
3. Automatisation des emails de suivi

---

## 📞 Support

Pour toute question ou problème :
- Dashboard Supabase : https://supabase.com/dashboard/project/xamkaphelshsavcacbdy
- Edge Functions : https://supabase.com/dashboard/project/xamkaphelshsavcacbdy/functions
- Database : https://supabase.com/dashboard/project/xamkaphelshsavcacbdy/editor

---

## ✅ Checklist Finale

- [ ] Variables d'environnement Twilio configurées
- [ ] Variables d'environnement Resend configurées
- [ ] Test du formulaire effectué
- [ ] SMS de test reçu
- [ ] Email de test reçu
- [ ] Dashboard admin accessible
- [ ] Compte admin créé (role = 'admin')

**Une fois tout coché, vous êtes prêt à recevoir vos premiers leads ! 🎉**
