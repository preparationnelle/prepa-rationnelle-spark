-- Migration: Study Time Tracking
-- Description: Création de la table pour le suivi du temps d'étude hebdomadaire
-- Date: 2026-02-07

-- Table: study_sessions
-- Stocke les sessions d'étude individuelles avec détection automatique d'activité
CREATE TABLE IF NOT EXISTS public.study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  started_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  ended_at TIMESTAMPTZ,
  duration_seconds INTEGER DEFAULT 0,
  week_number INTEGER NOT NULL,
  year INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Index pour améliorer les performances des requêtes
-- Index 1: Requête principale - sessions par utilisateur et semaine
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_week
  ON public.study_sessions(user_id, year, week_number);

-- Index 2: Requêtes par utilisateur (mises à jour de session)
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id
  ON public.study_sessions(user_id);

-- Index 3: Agrégation du classement hebdomadaire (toutes les sessions d'une semaine)
CREATE INDEX IF NOT EXISTS idx_study_sessions_week_year
  ON public.study_sessions(year, week_number);

-- Index 4: Recherche des sessions actives (sans ended_at)
CREATE INDEX IF NOT EXISTS idx_study_sessions_ended_at
  ON public.study_sessions(ended_at)
  WHERE ended_at IS NULL;

-- Row Level Security (RLS)
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

-- Politique RLS: Les utilisateurs peuvent gérer leurs propres sessions d'étude
CREATE POLICY "Users can manage their own study sessions"
  ON public.study_sessions
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Commentaires sur la table pour la documentation
COMMENT ON TABLE public.study_sessions IS 'Suivi automatique du temps d''étude avec détection d''activité et agrégation hebdomadaire';

-- Commentaires sur les colonnes importantes
COMMENT ON COLUMN public.study_sessions.week_number IS 'Numéro de semaine ISO 8601 (1-53) calculé côté client';
COMMENT ON COLUMN public.study_sessions.duration_seconds IS 'Temps d''étude actif en secondes, excluant les périodes d''inactivité (> 2 minutes)';
COMMENT ON COLUMN public.study_sessions.ended_at IS 'NULL pour les sessions actives, défini quand la session se termine ou l''utilisateur devient inactif';
