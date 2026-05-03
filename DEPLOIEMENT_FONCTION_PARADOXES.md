# 🚀 Déploiement de la Fonction Edge : Paradoxes Géopolitiques

## ⚠️ Action Requise

La fonction Edge pour le générateur de paradoxes géopolitiques a été créée mais **doit être déployée manuellement**.

## 📁 Fichier à Déployer

**Chemin** : `supabase/functions/generate-geopolitics-paradox/index.ts`

## 🔧 Commande de Déploiement

Si vous avez Supabase CLI installé :

```bash
supabase functions deploy generate-geopolitics-paradox
```

## 📝 Alternative : Déploiement via Dashboard Supabase

Si vous préférez utiliser l'interface web :

1. Aller sur [https://app.supabase.com](https://app.supabase.com)
2. Sélectionner votre projet
3. Aller dans **Edge Functions**
4. Créer une nouvelle fonction nommée `generate-geopolitics-paradox`
5. Copier le contenu de `supabase/functions/generate-geopolitics-paradox/index.ts`
6. Coller et déployer

## ✅ Vérification

Une fois déployée, tester l'outil :

1. Aller sur `http://localhost:8083/generator/geopolitics-paradox`
2. Tester le mode Génération avec un sujet prédéfini
3. Tester le mode Évaluation avec une problématique

## 🔑 Variables d'Environnement

Assurez-vous que la clé API OpenAI est configurée dans Supabase :

```bash
OPENAI_API_KEY=sk-...
```

## 📊 Fonction Créée

- **Nom** : `generate-geopolitics-paradox`
- **Runtime** : Deno
- **Modèle IA** : GPT-4o-mini
- **Modes** : `generate` et `evaluate`

---

**Status** : ⏳ En attente de déploiement manuel

