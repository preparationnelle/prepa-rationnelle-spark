-- Migration: Colle de Langues
-- Description: Création des tables pour la fonctionnalité de colle de langues
-- Date: 2026-02-07

-- Table: colle_sessions
-- Stocke les sessions de colle (une session = une colle complète)
CREATE TABLE IF NOT EXISTS colle_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  langue TEXT NOT NULL CHECK (langue IN ('en', 'de', 'es')),
  mode TEXT NOT NULL CHECK (mode IN ('article', 'theme')),
  theme TEXT NOT NULL,
  article_texte TEXT,
  duree_cible INTEGER DEFAULT 15 CHECK (duree_cible IN (10, 15, 20)),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  ended_at TIMESTAMPTZ,
  status TEXT DEFAULT 'en_cours' CHECK (status IN ('en_cours', 'terminee')) NOT NULL,
  note_globale NUMERIC(5,2),
  feedback_langue JSONB,
  feedback_civilisation JSONB
);

-- Index pour améliorer les performances des requêtes
CREATE INDEX IF NOT EXISTS idx_colle_sessions_user_id ON colle_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_colle_sessions_created_at ON colle_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_colle_sessions_status ON colle_sessions(status);

-- Row Level Security (RLS)
ALTER TABLE colle_sessions ENABLE ROW LEVEL SECURITY;

-- Politique RLS: Les utilisateurs peuvent créer, lire, modifier et supprimer leurs propres sessions
CREATE POLICY "Users can manage their own colle sessions"
  ON colle_sessions
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Table: colle_questions
-- Stocke les questions générées pour chaque session
CREATE TABLE IF NOT EXISTS colle_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES colle_sessions(id) ON DELETE CASCADE NOT NULL,
  ordre INTEGER NOT NULL,
  question_texte TEXT NOT NULL,
  question_audio_url TEXT,
  type_question TEXT CHECK (type_question IN ('comprehension', 'analyse', 'civilisation', 'ouverture')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_colle_questions_session_id ON colle_questions(session_id);
CREATE INDEX IF NOT EXISTS idx_colle_questions_ordre ON colle_questions(session_id, ordre);

-- Row Level Security (RLS)
ALTER TABLE colle_questions ENABLE ROW LEVEL SECURITY;

-- Politique RLS: Les utilisateurs peuvent accéder aux questions de leurs sessions
CREATE POLICY "Users can access questions from their sessions"
  ON colle_questions
  FOR ALL
  USING (
    session_id IN (
      SELECT id FROM colle_sessions WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    session_id IN (
      SELECT id FROM colle_sessions WHERE user_id = auth.uid()
    )
  );

-- Table: colle_reponses
-- Stocke les réponses enregistrées par l'utilisateur pour chaque question
CREATE TABLE IF NOT EXISTS colle_reponses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES colle_questions(id) ON DELETE CASCADE NOT NULL,
  reponse_audio_url TEXT,
  reponse_transcription TEXT,
  commentaire_ai TEXT,
  score_fluency NUMERIC(5,2),
  score_grammar NUMERIC(5,2),
  score_vocabulary NUMERIC(5,2),
  score_pronunciation NUMERIC(5,2),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_colle_reponses_question_id ON colle_reponses(question_id);

-- Row Level Security (RLS)
ALTER TABLE colle_reponses ENABLE ROW LEVEL SECURITY;

-- Politique RLS: Les utilisateurs peuvent accéder aux réponses de leurs questions
CREATE POLICY "Users can access responses from their questions"
  ON colle_reponses
  FOR ALL
  USING (
    question_id IN (
      SELECT q.id FROM colle_questions q
      JOIN colle_sessions s ON q.session_id = s.id
      WHERE s.user_id = auth.uid()
    )
  )
  WITH CHECK (
    question_id IN (
      SELECT q.id FROM colle_questions q
      JOIN colle_sessions s ON q.session_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_colle_reponses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_colle_reponses_updated_at_trigger
  BEFORE UPDATE ON colle_reponses
  FOR EACH ROW
  EXECUTE FUNCTION update_colle_reponses_updated_at();

-- Commentaires sur les tables pour la documentation
COMMENT ON TABLE colle_sessions IS 'Sessions de colle de langues (anglais, allemand, espagnol)';
COMMENT ON TABLE colle_questions IS 'Questions générées par IA pour chaque session de colle';
COMMENT ON TABLE colle_reponses IS 'Réponses audio enregistrées par les étudiants avec évaluation IA';

-- Commentaires sur les colonnes importantes
COMMENT ON COLUMN colle_sessions.feedback_langue IS 'Feedback structuré en JSON: {grammaire, vocabulaire, fluidite, prononciation, note}';
COMMENT ON COLUMN colle_sessions.feedback_civilisation IS 'Feedback structuré en JSON: {pertinence, richesse_culturelle, note}';
COMMENT ON COLUMN colle_questions.type_question IS 'Type de question: comprehension, analyse, civilisation, ouverture';
