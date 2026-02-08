import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import type {
  ColleSession,
  ColleQuestion,
  ColleQuestionWithReponse,
  ColleConfig,
  GenerateQuestionsResponse,
  EvaluateResponseResponse,
  GenerateFeedbackResponse,
} from '@/types/colle';

// ============================================================================
// Interface publique du hook
// ============================================================================

export interface UseColleSession {
  // Etat
  session: ColleSession | null;
  questions: ColleQuestionWithReponse[];
  currentQuestionIndex: number;
  currentQuestion: ColleQuestionWithReponse | null;
  loading: boolean;
  error: string | null;
  isGeneratingQuestions: boolean;
  isSubmittingAnswer: boolean;
  isEndingSession: boolean;

  // Actions
  createSession: (config: ColleConfig) => Promise<string>;
  loadSession: (sessionId: string) => Promise<void>;
  submitAnswer: (questionId: string, audioBlob: Blob, transcription: string) => Promise<void>;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  endSession: (sessionId: string) => Promise<void>;
  reset: () => void;
}

// ============================================================================
// Hook
// ============================================================================

export const useColleSession = (): UseColleSession => {
  const { currentUser } = useAuth();

  // --- Etat principal ---
  const [session, setSession] = useState<ColleSession | null>(null);
  const [questions, setQuestions] = useState<ColleQuestionWithReponse[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [isSubmittingAnswer, setIsSubmittingAnswer] = useState(false);
  const [isEndingSession, setIsEndingSession] = useState(false);

  // --- Helpers ---

  const currentQuestion = questions[currentQuestionIndex] ?? null;

  const clearError = useCallback(() => setError(null), []);

  // ============================================================================
  // createSession
  // ============================================================================

  const createSession = useCallback(
    async (config: ColleConfig): Promise<string> => {
      if (!currentUser) {
        throw new Error('Vous devez etre connecte pour creer une colle.');
      }

      setLoading(true);
      setError(null);
      setIsGeneratingQuestions(true);

      try {
        // 1. Creer l'entree dans colle_sessions (status = 'en_cours')
        const { data: sessionData, error: sessionError } = await supabase
          .from('colle_sessions')
          .insert({
            user_id: currentUser.id,
            langue: config.langue,
            mode: config.mode,
            theme: config.theme,
            article_texte: config.article_texte ?? null,
            duree_cible: config.duree_cible,
            status: 'en_cours',
          })
          .select()
          .single();

        if (sessionError) {
          console.error('Erreur creation session:', sessionError);
          throw new Error('Impossible de creer la session de colle.');
        }

        const sessionId = sessionData.id;

        // 2. Generer les questions via Edge Function
        const { data: genData, error: genError } = await supabase.functions.invoke(
          'generate-colle-questions',
          {
            body: {
              session_id: sessionId,
              langue: config.langue,
              mode: config.mode,
              theme: config.theme,
              article_texte: config.article_texte ?? null,
              duree_cible: config.duree_cible,
            },
          },
        );

        if (genError) {
          console.error('Erreur generation questions:', genError);
          throw new Error('Impossible de generer les questions de la colle.');
        }

        const generated = genData as GenerateQuestionsResponse;

        if (!generated.questions || generated.questions.length === 0) {
          throw new Error('Aucune question generee par le serveur.');
        }

        // 3. Inserer les questions dans colle_questions
        const questionsToInsert = generated.questions.map((q, index) => ({
          session_id: sessionId,
          ordre: index + 1,
          question_texte: q.texte,
          type_question: q.type,
        }));

        const { data: insertedQuestions, error: insertError } = await supabase
          .from('colle_questions')
          .insert(questionsToInsert)
          .select();

        if (insertError) {
          console.error('Erreur insertion questions:', insertError);
          throw new Error('Impossible de sauvegarder les questions.');
        }

        // 4. Mettre a jour l'etat local
        const typedSession = sessionData as unknown as ColleSession;
        const typedQuestions = (insertedQuestions ?? []).map((q) => ({
          ...q,
          reponse: null,
        })) as ColleQuestionWithReponse[];

        // Trier par ordre
        typedQuestions.sort((a, b) => a.ordre - b.ordre);

        setSession(typedSession);
        setQuestions(typedQuestions);
        setCurrentQuestionIndex(0);

        return sessionId;
      } catch (err: any) {
        const message = err?.message || 'Erreur lors de la creation de la colle.';
        console.error('useColleSession.createSession:', message, err);
        setError(message);
        throw err;
      } finally {
        setLoading(false);
        setIsGeneratingQuestions(false);
      }
    },
    [currentUser],
  );

  // ============================================================================
  // loadSession
  // ============================================================================

  const loadSession = useCallback(
    async (sessionId: string): Promise<void> => {
      if (!currentUser) {
        setError('Vous devez etre connecte pour charger une colle.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // 1. Charger la session
        const { data: sessionData, error: sessionError } = await supabase
          .from('colle_sessions')
          .select('*')
          .eq('id', sessionId)
          .single();

        if (sessionError) {
          console.error('Erreur chargement session:', sessionError);
          throw new Error('Impossible de charger la session.');
        }

        // 2. Charger les questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('colle_questions')
          .select('*')
          .eq('session_id', sessionId)
          .order('ordre', { ascending: true });

        if (questionsError) {
          console.error('Erreur chargement questions:', questionsError);
          throw new Error('Impossible de charger les questions.');
        }

        // 3. Charger les reponses existantes
        const questionIds = (questionsData ?? []).map((q) => q.id);
        let reponsesMap: Record<string, any> = {};

        if (questionIds.length > 0) {
          const { data: reponsesData, error: reponsesError } = await supabase
            .from('colle_reponses')
            .select('*')
            .in('question_id', questionIds);

          if (reponsesError) {
            console.error('Erreur chargement reponses:', reponsesError);
            // On ne bloque pas, on continue sans les reponses
          } else {
            for (const r of reponsesData ?? []) {
              reponsesMap[r.question_id] = r;
            }
          }
        }

        // 4. Assembler questions + reponses
        const questionsWithReponses: ColleQuestionWithReponse[] = (questionsData ?? []).map(
          (q) => ({
            ...(q as unknown as ColleQuestion),
            reponse: reponsesMap[q.id] ?? null,
          }),
        );

        setSession(sessionData as unknown as ColleSession);
        setQuestions(questionsWithReponses);

        // Positionner sur la premiere question sans reponse
        const firstUnanswered = questionsWithReponses.findIndex((q) => !q.reponse);
        setCurrentQuestionIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
      } catch (err: any) {
        const message = err?.message || 'Erreur lors du chargement de la colle.';
        console.error('useColleSession.loadSession:', message, err);
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [currentUser],
  );

  // ============================================================================
  // submitAnswer
  // ============================================================================

  const submitAnswer = useCallback(
    async (questionId: string, audioBlob: Blob, transcription: string): Promise<void> => {
      if (!currentUser) {
        setError('Vous devez etre connecte pour soumettre une reponse.');
        return;
      }

      if (!session) {
        setError('Aucune session active.');
        return;
      }

      setIsSubmittingAnswer(true);
      setError(null);

      try {
        // 1. Upload audio dans Supabase Storage
        const audioPath = `${currentUser.id}/${session.id}/${questionId}.webm`;

        const { error: uploadError } = await supabase.storage
          .from('colle-audio')
          .upload(audioPath, audioBlob, {
            contentType: 'audio/webm',
            upsert: true,
          });

        if (uploadError) {
          console.error('Erreur upload audio:', uploadError);
          throw new Error('Impossible de sauvegarder l\'enregistrement audio.');
        }

        // Obtenir l'URL publique
        const { data: urlData } = supabase.storage
          .from('colle-audio')
          .getPublicUrl(audioPath);

        const audioUrl = urlData?.publicUrl ?? null;

        // 2. Evaluer la reponse via Edge Function
        const targetQuestion = questions.find((q) => q.id === questionId);

        const { data: evalData, error: evalError } = await supabase.functions.invoke(
          'evaluate-colle-response',
          {
            body: {
              session_id: session.id,
              question_id: questionId,
              question_texte: targetQuestion?.question_texte ?? '',
              transcription,
              langue: session.langue,
            },
          },
        );

        if (evalError) {
          console.error('Erreur evaluation reponse:', evalError);
          throw new Error('Impossible d\'evaluer la reponse.');
        }

        const evaluation = evalData as EvaluateResponseResponse;

        // 3. Inserer la reponse dans colle_reponses
        const { data: reponseData, error: reponseError } = await supabase
          .from('colle_reponses')
          .insert({
            question_id: questionId,
            reponse_audio_url: audioUrl,
            reponse_transcription: transcription,
            commentaire_ai: evaluation.commentaire,
            score_fluency: evaluation.score_fluency,
            score_grammar: evaluation.score_grammar,
            score_vocabulary: evaluation.score_vocabulary,
            score_pronunciation: evaluation.score_pronunciation,
          })
          .select()
          .single();

        if (reponseError) {
          console.error('Erreur insertion reponse:', reponseError);
          throw new Error('Impossible de sauvegarder la reponse.');
        }

        // 4. Mettre a jour l'etat local : marquer la question comme repondue
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === questionId
              ? { ...q, reponse: reponseData as any }
              : q,
          ),
        );
      } catch (err: any) {
        const message = err?.message || 'Erreur lors de la soumission de la reponse.';
        console.error('useColleSession.submitAnswer:', message, err);
        setError(message);
      } finally {
        setIsSubmittingAnswer(false);
      }
    },
    [currentUser, session, questions],
  );

  // ============================================================================
  // Navigation entre questions
  // ============================================================================

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const prevQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < questions.length) {
        setCurrentQuestionIndex(index);
      }
    },
    [questions.length],
  );

  // ============================================================================
  // endSession
  // ============================================================================

  const endSession = useCallback(
    async (sessionId: string): Promise<void> => {
      if (!currentUser) {
        setError('Vous devez etre connecte pour terminer la colle.');
        return;
      }

      setIsEndingSession(true);
      setError(null);

      try {
        // 1. Charger toutes les questions + reponses pour cette session
        const { data: questionsData, error: qError } = await supabase
          .from('colle_questions')
          .select('*')
          .eq('session_id', sessionId)
          .order('ordre', { ascending: true });

        if (qError) {
          console.error('Erreur chargement questions pour feedback:', qError);
          throw new Error('Impossible de charger les questions pour le bilan.');
        }

        const questionIds = (questionsData ?? []).map((q) => q.id);
        let reponsesMap: Record<string, any> = {};

        if (questionIds.length > 0) {
          const { data: reponsesData, error: rError } = await supabase
            .from('colle_reponses')
            .select('*')
            .in('question_id', questionIds);

          if (rError) {
            console.error('Erreur chargement reponses pour feedback:', rError);
          } else {
            for (const r of reponsesData ?? []) {
              reponsesMap[r.question_id] = r;
            }
          }
        }

        // Construire le tableau questions + reponses pour l'Edge Function
        const questionsWithResponses = (questionsData ?? []).map((q) => ({
          question_texte: q.question_texte,
          type_question: q.type_question,
          reponse_transcription: reponsesMap[q.id]?.reponse_transcription ?? null,
          scores: reponsesMap[q.id]
            ? {
                fluency: reponsesMap[q.id].score_fluency,
                grammar: reponsesMap[q.id].score_grammar,
                vocabulary: reponsesMap[q.id].score_vocabulary,
                pronunciation: reponsesMap[q.id].score_pronunciation,
              }
            : null,
          commentaire_ai: reponsesMap[q.id]?.commentaire_ai ?? null,
        }));

        // 2. Appeler Edge Function generate-colle-feedback
        const currentSession = session;
        const { data: feedbackData, error: fbError } = await supabase.functions.invoke(
          'generate-colle-feedback',
          {
            body: {
              session_id: sessionId,
              langue: currentSession?.langue,
              theme: currentSession?.theme,
              mode: currentSession?.mode,
              questions: questionsWithResponses,
            },
          },
        );

        if (fbError) {
          console.error('Erreur generation feedback:', fbError);
          throw new Error('Impossible de generer le bilan de la colle.');
        }

        const feedback = feedbackData as GenerateFeedbackResponse;

        // 3. Mettre a jour colle_sessions
        const { error: updateError } = await supabase
          .from('colle_sessions')
          .update({
            status: 'terminee',
            ended_at: new Date().toISOString(),
            note_globale: feedback.note_globale,
            feedback_langue: feedback.feedback_langue as any,
            feedback_civilisation: feedback.feedback_civilisation as any,
          })
          .eq('id', sessionId);

        if (updateError) {
          console.error('Erreur mise a jour session:', updateError);
          throw new Error('Impossible de finaliser la session.');
        }

        // 4. Mettre a jour l'etat local
        setSession((prev) =>
          prev
            ? {
                ...prev,
                status: 'terminee' as const,
                ended_at: new Date().toISOString(),
                note_globale: feedback.note_globale,
                feedback_langue: feedback.feedback_langue,
                feedback_civilisation: feedback.feedback_civilisation,
              }
            : null,
        );
      } catch (err: any) {
        const message = err?.message || 'Erreur lors de la cloture de la colle.';
        console.error('useColleSession.endSession:', message, err);
        setError(message);
      } finally {
        setIsEndingSession(false);
      }
    },
    [currentUser, session],
  );

  // ============================================================================
  // reset
  // ============================================================================

  const reset = useCallback(() => {
    setSession(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setLoading(false);
    setError(null);
    setIsGeneratingQuestions(false);
    setIsSubmittingAnswer(false);
    setIsEndingSession(false);
  }, []);

  // ============================================================================
  // Retour
  // ============================================================================

  return {
    // Etat
    session,
    questions,
    currentQuestionIndex,
    currentQuestion,
    loading,
    error,
    isGeneratingQuestions,
    isSubmittingAnswer,
    isEndingSession,

    // Actions
    createSession,
    loadSession,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    endSession,
    reset,
  };
};

export default useColleSession;
