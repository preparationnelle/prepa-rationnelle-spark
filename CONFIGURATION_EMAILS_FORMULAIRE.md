# 📧 Configuration des emails pour le formulaire de contact

## ✅ Ce qui a été configuré

### 1. Migration de base de données créée
**Fichier** : `supabase/migrations/20251022_fix_parent_requests_anon_access.sql`

Cette migration permet :
- ✅ Aux utilisateurs **anonymes** (non connectés) de soumettre le formulaire
- ✅ Rendre le champ téléphone **optionnel**
- ✅ Autoriser les admins à voir et gérer les demandes

### 2. Fonction email configurée
**Fichier** : `supabase/functions/send-parent-teacher-notification/index.ts`

- ✅ Envoie automatiquement un email à `dimitrovdimitar556@gmail.com`
- ✅ Contient toutes les informations du formulaire
- ✅ Utilise Gmail SMTP

---

## 🚀 Étapes pour activer l'envoi d'emails

### Étape 1 : Appliquer la migration Supabase

Vous devez appliquer la migration que je viens de créer. **2 options** :

#### Option A : Via Supabase Dashboard (Plus simple)
1. Allez sur [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. Cliquez sur **"SQL Editor"** dans le menu gauche
4. Cliquez sur **"New query"**
5. Copiez-collez le contenu du fichier `supabase/migrations/20251022_fix_parent_requests_anon_access.sql`
6. Cliquez sur **"Run"**

#### Option B : Via Supabase CLI (Pour développeurs)
```bash
# Si vous avez installé Supabase CLI
supabase db push
```

---

### Étape 2 : Configurer le mot de passe SMTP Gmail

Pour que les emails soient envoyés, vous devez configurer le mot de passe SMTP dans Supabase :

1. **Générer un mot de passe d'application Gmail** :
   - Allez sur [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Activez la **validation en 2 étapes** (si ce n'est pas déjà fait)
   - Allez dans **"Mots de passe des applications"**
   - Créez un nouveau mot de passe pour "Mail"
   - Copiez le mot de passe généré (16 caractères)

2. **Ajouter le mot de passe dans Supabase** :
   - Allez sur [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Sélectionnez votre projet
   - Cliquez sur **"Settings"** (icône engrenage)
   - Cliquez sur **"Edge Functions"** dans le menu gauche
   - Trouvez la section **"Secrets"** ou **"Environment Variables"**
   - Ajoutez une nouvelle variable :
     - **Nom** : `SMTP_PASSWORD`
     - **Valeur** : Le mot de passe d'application Gmail que vous venez de générer

3. **Redéployer la fonction Edge** (si nécessaire) :
   ```bash
   supabase functions deploy send-parent-teacher-notification
   ```

---

### Étape 3 : Vérifier que la fonction Edge est déployée

1. Allez sur [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. Cliquez sur **"Edge Functions"** dans le menu gauche
4. Vérifiez que la fonction **`send-parent-teacher-notification`** est listée et déployée
5. Si elle n'existe pas, vous devez la déployer :
   ```bash
   supabase functions deploy send-parent-teacher-notification
   ```

---

## 🧪 Tester le formulaire

### Test 1 : Soumettre le formulaire
1. Allez sur votre page de formulaire : `/parents` ou `/parent-form`
2. **Déconnectez-vous** (si vous êtes connecté) - important pour tester en tant qu'utilisateur anonyme
3. Remplissez le formulaire avec vos vraies informations
4. Cliquez sur **"Envoyer ma demande"**
5. Vous devriez voir un message de succès

### Test 2 : Vérifier la réception de l'email
1. Vérifiez votre boîte mail `dimitrovdimitar556@gmail.com`
2. Vous devriez recevoir un email avec l'objet : **"Nouvelle demande d'accompagnement - Prépa Rationnelle"**
3. L'email contient toutes les informations du formulaire

### Test 3 : Vérifier dans le dashboard admin
1. Connectez-vous à votre site
2. Allez sur `/gestion`
3. Vous devriez voir votre demande de test dans la liste

---

## ⚠️ Dépannage si les emails ne sont pas envoyés

### Problème 1 : "Erreur envoi email" dans la console
**Solution** : Vérifiez que le mot de passe SMTP est correctement configuré dans Supabase

### Problème 2 : "Function not found"
**Solution** : Déployez la fonction Edge :
```bash
supabase functions deploy send-parent-teacher-notification
```

### Problème 3 : Le formulaire ne se soumet pas (utilisateur non connecté)
**Solution** : Appliquez la migration SQL (Étape 1)

### Problème 4 : Gmail bloque les emails
**Solution** :
- Assurez-vous d'utiliser un **mot de passe d'application** (pas votre mot de passe Gmail normal)
- Vérifiez que la validation en 2 étapes est activée sur votre compte Gmail
- Vérifiez les filtres anti-spam de Gmail

---

## 📊 Où voir les formulaires soumis

### 1. Par email
- ✅ Vous recevez un email à chaque soumission sur `dimitrovdimitar556@gmail.com`

### 2. Dashboard admin
- ✅ Allez sur `/gestion` (vous devez être connecté)
- ✅ Vous voyez tous les formulaires avec leurs détails
- ✅ Vous pouvez changer le statut (en attente → en cours → complété)

### 3. Base de données Supabase
- ✅ Table `parent_requests` dans Supabase Table Editor

---

## 📝 Résumé des actions à faire

- [ ] **Appliquer la migration SQL** (Étape 1)
- [ ] **Configurer le mot de passe SMTP Gmail** (Étape 2)
- [ ] **Vérifier que la fonction Edge est déployée** (Étape 3)
- [ ] **Tester le formulaire** (Étape 4)
- [ ] **Vérifier la réception de l'email**

---

## 🎯 Configuration actuelle

- **Email destinataire** : `dimitrovdimitar556@gmail.com` ✅
- **Email expéditeur** : `preparationnelle@gmail.com` ✅
- **Serveur SMTP** : Gmail (smtp.gmail.com:587) ✅
- **Fonction Edge** : `send-parent-teacher-notification` ✅

---

## 💡 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez les logs Supabase : Dashboard > Edge Functions > Logs
2. Vérifiez la console du navigateur (F12) pour les erreurs JavaScript
3. Vérifiez que la table `parent_requests` existe dans Supabase

Bonne chance ! 🚀

