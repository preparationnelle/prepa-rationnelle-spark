import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Loader2,
  AlertCircle,
  RefreshCw,
  Square,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { ColleSessionTimer } from '@/components/colle/ColleSessionTimer';
import { ColleProgressBar } from '@/components/colle/ColleProgressBar';
import { ColleQuestionCard } from '@/components/colle/ColleQuestionCard';
import { ColleAudioRecorder } from '@/components/colle/ColleAudioRecorder';
import { ColleQuestionNav } from '@/components/colle/ColleQuestionNav';
import { useColleSession } from '@/hooks/useColleSession';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

const ColleSessionPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // --- Hooks ---
  const {
    session,
    questions,
    currentQuestionIndex,
    currentQuestion,
    loading,
    error,
    isSubmittingAnswer,
    isEndingSession,
    loadSession,
    submitAnswer,
    nextQuestion,
    goToQuestion,
    endSession,
  } = useColleSession();

  const { speak, isSpeaking, stopSpeaking } = useAudioPlayer();

  // --- Etat local ---
  const [articleExpanded, setArticleExpanded] = useState(false);

  // --- Chargement de la session au mount ---
  useEffect(() => {
    if (sessionId) {
      loadSession(sessionId);
    }
  }, [sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Calcul des questions repondues ---
  const answeredQuestions = useMemo(() => {
    const set = new Set<number>();
    questions.forEach((q, i) => {
      if (q.reponse) set.add(i);
    });
    return set;
  }, [questions]);

  const answeredCount = answeredQuestions.size;

  // --- Handlers ---
  const handlePlayQuestion = () => {
    if (!currentQuestion) return;
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speak(currentQuestion.question_texte, session?.langue ?? 'en');
    }
  };

  const handleRecordingComplete = async (audioUrl: string, transcription: string) => {
    if (!currentQuestion) return;

    try {
      // Creer un blob vide si l'audio URL est vide (le recorder n'expose pas le blob directement)
      const audioBlob = audioUrl
        ? await fetch(audioUrl).then((r) => r.blob())
        : new Blob([], { type: 'audio/webm' });

      await submitAnswer(currentQuestion.id, audioBlob, transcription);

      toast({
        title: 'Reponse enregistree',
        description: 'Votre reponse a ete enregistree et evaluee.',
      });

      // Avancer a la question suivante si possible
      if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
      }
    } catch (err: any) {
      toast({
        title: 'Erreur',
        description: err?.message || 'Impossible de soumettre la reponse.',
        variant: 'destructive',
      });
    }
  };

  const handleEndSession = async () => {
    if (!sessionId) return;

    try {
      await endSession(sessionId);
      toast({
        title: 'Colle terminee !',
        description: 'Generation du feedback en cours...',
      });
      navigate(`/colle/feedback/${sessionId}`);
    } catch (err: any) {
      toast({
        title: 'Erreur',
        description: err?.message || 'Impossible de terminer la session.',
        variant: 'destructive',
      });
    }
  };

  // --- Texte de l'article / theme ---
  const articleText = session?.article_texte || null;
  const themeText = session?.theme || null;
  const displayText = articleText || themeText;
  const isLongText = displayText ? displayText.length > 300 : false;

  // ============================================================================
  // Rendu conditionnel : Loading
  // ============================================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-[#FF6A00] mx-auto" />
          <p className="text-lg text-gray-600 font-medium">
            Chargement de la colle...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================================
  // Rendu conditionnel : Erreur
  // ============================================================================

  if (error || !session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <AlertCircle className="h-12 w-12 text-red-400 mx-auto" />
            <h2 className="text-xl font-bold text-gray-900">Session introuvable</h2>
            <p className="text-sm text-muted-foreground">
              {error || 'Cette session de colle n\'existe pas ou a ete supprimee.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (sessionId) loadSession(sessionId);
                }}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Reessayer
              </Button>
              <Button
                className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white"
                onClick={() => navigate('/colle')}
              >
                Retour a l'accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ============================================================================
  // Rendu principal
  // ============================================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* ====== Header Sticky ====== */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            {/* Timer */}
            <div className="shrink-0">
              <ColleSessionTimer
                startTime={session.created_at}
                dureeCible={session.duree_cible}
              />
            </div>

            {/* Progress Bar */}
            <div className="flex-1 w-full sm:w-auto">
              <ColleProgressBar
                current={answeredCount}
                total={questions.length}
              />
            </div>

            {/* Bouton Terminer */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={isEndingSession}
                  className="shrink-0 gap-2"
                >
                  {isEndingSession ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Finalisation...
                    </>
                  ) : (
                    <>
                      <Square className="h-4 w-4" />
                      Terminer la colle
                    </>
                  )}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Terminer la colle ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {answeredCount < questions.length
                      ? `Vous avez repondu a ${answeredCount} question${answeredCount > 1 ? 's' : ''} sur ${questions.length}. Les questions non repondues ne seront pas evaluees.`
                      : 'Vous avez repondu a toutes les questions. Le feedback sera genere automatiquement.'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Continuer la colle</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleEndSession}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Terminer
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>

      {/* ====== Contenu principal ====== */}
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- Colonne principale (2/3) --- */}
          <div className="md:col-span-2 space-y-5">
            {/* Article / Theme */}
            {displayText && (
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {session.mode === 'article' ? 'Article' : 'Theme'}
                    </h3>
                    {isLongText && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setArticleExpanded(!articleExpanded)}
                        className="gap-1 text-xs text-muted-foreground h-auto py-1"
                      >
                        {articleExpanded ? (
                          <>
                            Reduire <ChevronUp className="h-3 w-3" />
                          </>
                        ) : (
                          <>
                            Voir plus <ChevronDown className="h-3 w-3" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                  <p
                    className={`text-sm text-gray-700 leading-relaxed whitespace-pre-wrap ${
                      !articleExpanded && isLongText
                        ? 'max-h-24 overflow-hidden relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-8 after:bg-gradient-to-t after:from-white after:to-transparent'
                        : ''
                    }`}
                  >
                    {displayText}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Question courante */}
            {currentQuestion && (
              <ColleQuestionCard
                question={currentQuestion}
                onPlayAudio={handlePlayQuestion}
                isPlaying={isSpeaking}
              />
            )}

            {/* Audio Recorder */}
            {currentQuestion && (
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <ColleAudioRecorder
                    langue={session.langue}
                    questionId={currentQuestion.id}
                    onRecordingComplete={handleRecordingComplete}
                    disabled={isSubmittingAnswer || !!currentQuestion.reponse}
                  />
                  {currentQuestion.reponse && (
                    <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <p className="text-sm text-emerald-700 font-medium">
                        Reponse enregistree pour cette question.
                      </p>
                      {currentQuestion.reponse.commentaire_ai && (
                        <p className="text-xs text-emerald-600 mt-1">
                          {currentQuestion.reponse.commentaire_ai}
                        </p>
                      )}
                    </div>
                  )}
                  {isSubmittingAnswer && (
                    <div className="flex items-center gap-2 mt-4 text-sm text-[#FF6A00]">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Evaluation de votre reponse en cours...
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* --- Colonne secondaire (1/3) --- */}
          <div className="md:col-span-1">
            <Card className="shadow-sm sticky top-28">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Navigation
                </h3>
                <ColleQuestionNav
                  totalQuestions={questions.length}
                  currentIndex={currentQuestionIndex}
                  answeredQuestions={answeredQuestions}
                  onNavigate={goToQuestion}
                />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Repondues</span>
                    <span className="font-medium">
                      {answeredCount} / {questions.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Langue</span>
                    <span className="font-medium uppercase">{session.langue}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Mode</span>
                    <span className="font-medium capitalize">
                      {session.mode === 'article' ? 'Article' : 'Theme'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleSessionPage;
