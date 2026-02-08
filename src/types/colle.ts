/**
 * Types pour la fonctionnalité Colle de Langues
 */

// ============================================================================
// Types de base
// ============================================================================

export type Langue = 'en' | 'de' | 'es';
export type ModeColle = 'article' | 'theme';
export type StatusSession = 'en_cours' | 'terminee';
export type TypeQuestion = 'comprehension' | 'analyse' | 'civilisation' | 'ouverture';
export type DureeCible = 10 | 15 | 20;

// ============================================================================
// Interfaces pour les tables de la base de données
// ============================================================================

/**
 * Session de colle (table: colle_sessions)
 */
export interface ColleSession {
  id: string;
  user_id: string;
  langue: Langue;
  mode: ModeColle;
  theme: string;
  article_texte?: string | null;
  duree_cible: DureeCible;
  created_at: string;
  ended_at?: string | null;
  status: StatusSession;
  note_globale?: number | null;
  feedback_langue?: FeedbackLangue | null;
  feedback_civilisation?: FeedbackCivilisation | null;
}

/**
 * Question de colle (table: colle_questions)
 */
export interface ColleQuestion {
  id: string;
  session_id: string;
  ordre: number;
  question_texte: string;
  question_audio_url?: string | null;
  type_question?: TypeQuestion | null;
  created_at: string;
}

/**
 * Réponse à une question (table: colle_reponses)
 */
export interface ColleReponse {
  id: string;
  question_id: string;
  reponse_audio_url?: string | null;
  reponse_transcription?: string | null;
  commentaire_ai?: string | null;
  score_fluency?: number | null;
  score_grammar?: number | null;
  score_vocabulary?: number | null;
  score_pronunciation?: number | null;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// Types pour les feedbacks structurés
// ============================================================================

/**
 * Feedback sur la langue (stocké en JSONB)
 */
export interface FeedbackLangue {
  grammaire: string;
  vocabulaire: string;
  fluidite: string;
  prononciation: string;
  note: number;
}

/**
 * Feedback sur la civilisation (stocké en JSONB)
 */
export interface FeedbackCivilisation {
  pertinence: string;
  richesse_culturelle: string;
  note: number;
}

// ============================================================================
// Types pour la configuration de la colle
// ============================================================================

/**
 * Configuration initiale pour créer une nouvelle colle
 */
export interface ColleConfig {
  langue: Langue;
  mode: ModeColle;
  theme: string;
  article_texte?: string;
  duree_cible: DureeCible;
}

// ============================================================================
// Types pour les vues enrichies (avec jointures)
// ============================================================================

/**
 * Session avec ses questions (pour l'interface de colle)
 */
export interface ColleSessionWithQuestions extends ColleSession {
  questions: ColleQuestion[];
}

/**
 * Question avec sa réponse (pour le feedback)
 */
export interface ColleQuestionWithReponse extends ColleQuestion {
  reponse?: ColleReponse | null;
}

/**
 * Détail complet d'une session (pour la page de feedback)
 */
export interface ColleSessionDetail extends ColleSession {
  questions: ColleQuestionWithReponse[];
}

// ============================================================================
// Types pour les formulaires et composants
// ============================================================================

/**
 * Props pour le formulaire de configuration
 */
export interface ColleConfigFormProps {
  onSubmit: (config: ColleConfig) => Promise<void>;
  isLoading?: boolean;
}

/**
 * Props pour la carte d'une question
 */
export interface ColleQuestionCardProps {
  question: ColleQuestion;
  onPlayAudio?: () => void;
  isPlaying?: boolean;
}

/**
 * Props pour l'enregistreur audio
 */
export interface ColleAudioRecorderProps {
  langue: Langue;
  questionId: string;
  onRecordingComplete: (audioUrl: string, transcription?: string) => void;
  disabled?: boolean;
}

/**
 * Props pour le panneau de feedback
 */
export interface ColleFeedbackPanelProps {
  session: ColleSessionDetail;
}

/**
 * Props pour la carte d'historique
 */
export interface ColleHistoryCardProps {
  session: ColleSession;
  onClick?: () => void;
}

// ============================================================================
// Types pour les filtres et pagination
// ============================================================================

/**
 * Filtres pour l'historique des colles
 */
export interface ColleHistoryFilters {
  langue?: Langue;
  dateFrom?: Date;
  dateTo?: Date;
}

/**
 * Pagination
 */
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

// ============================================================================
// Types pour les réponses des Edge Functions
// ============================================================================

/**
 * Réponse de generate-colle-questions
 */
export interface GenerateQuestionsResponse {
  questions: Array<{
    texte: string;
    type: TypeQuestion;
  }>;
}

/**
 * Réponse de evaluate-colle-response
 */
export interface EvaluateResponseResponse {
  score_fluency: number;
  score_grammar: number;
  score_vocabulary: number;
  score_pronunciation: number;
  commentaire: string;
}

/**
 * Réponse de generate-colle-feedback
 */
export interface GenerateFeedbackResponse {
  note_globale: number;
  feedback_langue: FeedbackLangue;
  feedback_civilisation: FeedbackCivilisation;
}

// ============================================================================
// Types utilitaires
// ============================================================================

/**
 * État de lecture audio
 */
export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentUrl?: string | null;
}

/**
 * État de la synthèse vocale (TTS)
 */
export interface TTSState {
  isSpeaking: boolean;
  currentText?: string | null;
}

/**
 * Statistiques d'une session
 */
export interface ColleSessionStats {
  totalQuestions: number;
  questionsRepondues: number;
  dureeEcoulee: number; // en minutes
  progression: number; // pourcentage 0-100
}
