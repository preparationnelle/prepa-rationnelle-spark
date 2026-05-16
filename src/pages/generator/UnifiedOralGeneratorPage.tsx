import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import AnswerGeneratorPage from './AnswerGeneratorPage';
import EMLyonGeneratorPage from './EMLyonGeneratorPage';
import EDHECGeneratorPage from './EDHECGeneratorPage';
import { Mic, MessageSquare, Target, ExternalLink, HelpCircle, PenTool, Shuffle, CheckCircle, Clock, RotateCcw, Play, Pause, Square, Volume2, ChevronDown, Loader2, VolumeX, Send, Award, AlertCircle, Lightbulb, TrendingUp, Home, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// Wrapper carte design system PR (réutilisé localement)
const PrCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-carnet-paper-2 rounded-2xl border border-carnet-rule overflow-hidden ${className}`}>
    <div className="h-[3px] w-full bg-pr-black" />
    {children}
  </div>
);

// Composant pour l'entraînement direct aux questions d'entretien
const QuestionPracticePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [selectedTip, setSelectedTip] = useState('');

  // États pour l'enregistrement audio
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);

  // États pour text-to-speech et évaluation
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<{
    score: number;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    overall: string;
  } | null>(null);

  // Questions d'entretien classiques
  const interviewQuestions = [
    "Parlez-moi de vous",
    "Quels sont vos points forts et points faibles ?",
    "Pourquoi voulez-vous intégrer cette école ?",
    "Décrivez une situation où vous avez fait preuve de leadership",
    "Comment gérez-vous le stress et la pression ?",
    "Quel est votre projet professionnel à moyen terme ?",
    "Pourquoi vous plutôt qu'un autre candidat ?",
    "Comment travaillez-vous en équipe ?",
    "Décrivez un échec que vous avez vécu et ce que vous en avez retiré",
    "Quelles sont vos passions en dehors des études ?",
    "Comment vous adaptez-vous au changement ?",
    "Quelle est votre plus grande réussite ?",
    "Comment prenez-vous vos décisions ?",
    "Comment vous informez-vous sur l'actualité ?",
    "Quel est le livre qui vous a le plus marqué ?"
  ];

  // Données pour les questions spécifiques avec conseils
  const questionTips: Record<string, { ideas: string[]; sampleAnswer: string }> = {
    "Pourquoi vous plutôt qu'un autre candidat ?": {
      ideas: [
        "Mettez en avant vos expériences uniques et votre parcours atypique",
        "Démontrez votre motivation et votre connaissance du programme",
        "Soulignez vos qualités personnelles (persévérance, créativité, leadership)",
        "Expliquez comment vos expériences extrascolaires vous différencient",
        "Montrez votre capacité d'adaptation et d'apprentissage rapide",
        "Évoquez vos projets professionnels cohérents avec l'école"
      ],
      sampleAnswer: `Je pense que je me distingue des autres candidats par plusieurs aspects clés.

Tout d'abord, mon parcours atypique m'a permis de développer une grande capacité d'adaptation et une maturité que beaucoup de candidats issus de classes préparatoires traditionnelles n'ont pas encore acquise. Ayant commencé mes études supérieures dans une filière scientifique avant de me réorienter vers les sciences sociales, j'ai dû faire preuve d'une grande détermination et d'autonomie dans mes apprentissages.

Ensuite, mes expériences professionnelles et associatives m'ont donné une vision concrète du monde du travail. En tant que [votre expérience], j'ai pu développer des compétences en [compétences clés] qui seront particulièrement utiles dans le cadre du programme [nom de l'école]. Par exemple, [anecdote concrète].

Enfin, ma motivation pour intégrer votre établissement est particulièrement forte car [raison personnelle liée à l'école]. Je suis convaincu que mon profil complémentaire, alliant rigueur scientifique et ouverture humaniste, me permettra d'apporter une perspective unique aux débats et travaux de groupe.

Je suis persuadé que ces éléments, combinés à ma détermination et à ma capacité de travail, feront de moi un candidat qui saura tirer pleinement parti de la formation dispensée.`
    }
  };

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * interviewQuestions.length);
    setCurrentQuestion(interviewQuestions[randomIndex]);
    setUserAnswer('');
    setShowAnswer(false);
    setTimeElapsed(0);
    setIsTimerRunning(false);
    setShowTips(false);
    setSelectedTip('');
    setAudioUrl(null);
    setAudioChunks([]);
    setRecordingTime(0);
    setEvaluation(null);
  };

  const speakQuestion = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(currentQuestion);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9;
        utterance.pitch = 1.0;

        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => {
          setIsSpeaking(false);
          toast.error('Erreur lors de la lecture audio');
        };

        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      toast.error('La synthèse vocale n\'est pas supportée par votre navigateur');
    }
  };

  const evaluateAnswer = async () => {
    if (!userAnswer.trim()) {
      toast.error('Veuillez d\'abord rédiger une réponse');
      return;
    }

    setIsEvaluating(true);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-oral-answer', {
        body: { question: currentQuestion, answer: userAnswer.trim() },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setEvaluation(data.evaluation);

      toast.success('Évaluation terminée !');
    } catch (error) {
      console.error('Erreur lors de l\'évaluation:', error);
      toast.error('Erreur lors de l\'évaluation de votre réponse');
    } finally {
      setIsEvaluating(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks(chunks => [...chunks, event.data]);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        transcribeAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      setMediaRecorder(recorder);
      setAudioChunks([]);
      recorder.start();
      setIsRecording(true);

    } catch (error) {
      console.error('Erreur lors de l\'accès au microphone:', error);
      alert('Erreur: Impossible d\'accéder au microphone. Vérifiez les permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    try {
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav');
      formData.append('language', 'fr');

      const { data, error } = await supabase.functions.invoke('transcribe-audio', {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de la retranscription");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const transcribedText = data.text;
      setUserAnswer(transcribedText);
      toast.success('Retranscription terminée - Texte ajouté au champ de réponse !');
    } catch (error) {
      console.error('Erreur lors de la retranscription:', error);
      toast.error('Erreur lors de la retranscription audio');
    } finally {
      setIsTranscribing(false);
    }
  };

  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);

  const resetTimer = () => {
    setTimeElapsed(0);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  React.useEffect(() => {
    let recordingInterval: NodeJS.Timeout;
    if (isRecording) {
      recordingInterval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(recordingInterval);
  }, [isRecording]);

  React.useEffect(() => {
    generateRandomQuestion();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-dm-sans">
      {/* En-tête de section */}
      <PrCard>
        <div className="px-6 py-5 sm:px-8 sm:py-6 bg-pr-gray-bg border-b border-pr-gray-light">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-pr-gray-bg text-pr-black flex items-center justify-center shrink-0">
              <PenTool className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-dm-serif text-xl text-pr-black leading-tight">
                Entraînement direct aux questions d'entretien
              </h2>
              <p className="text-sm text-pr-gray-mid mt-0.5">
                Une question vous est posée — répondez comme en entretien réel.
              </p>
            </div>
          </div>
        </div>
      </PrCard>

      {/* Section question */}
      <PrCard>
        <div className="px-6 py-4 sm:px-8 border-b border-pr-gray-light flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-pr-black">
            <HelpCircle className="h-5 w-5" />
            <h3 className="font-dm-serif text-lg text-pr-black">Question posée</h3>
          </div>
          <Button
            onClick={generateRandomQuestion}
            variant="outline"
            size="sm"
            className="border-pr-gray-light/40 text-pr-black hover:bg-pr-black hover:text-white hover:border-pr-black transition-colors"
          >
            <Shuffle className="h-4 w-4 mr-2" />
            Nouvelle question
          </Button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="rounded-xl border border-pr-black/20 bg-pr-gray-bg/40 px-6 py-6 sm:py-8">
            <p className="font-dm-serif text-xl sm:text-2xl text-pr-black text-center leading-snug">
              {currentQuestion || "Cliquez sur « Nouvelle question » pour commencer"}
            </p>
            {currentQuestion && (
              <div className="flex justify-center mt-5">
                <Button
                  onClick={speakQuestion}
                  variant="outline"
                  size="sm"
                  className={`border-pr-gray-light/40 transition-colors ${
                    isSpeaking
                      ? 'bg-pr-black text-white border-pr-black'
                      : 'text-pr-black hover:bg-pr-black hover:text-white hover:border-pr-black'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="h-4 w-4 mr-2" />
                      Arrêter la lecture
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4 mr-2" />
                      Écouter la question
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </PrCard>

      {/* Conseils contextuels */}
      {currentQuestion && questionTips[currentQuestion] && (
        <div className="space-y-6">
          <PrCard>
            <div className="px-6 py-4 sm:px-8 border-b border-pr-gray-light flex items-center gap-2 text-pr-black">
              <Target className="h-5 w-5" />
              <h3 className="font-dm-serif text-lg text-pr-black">Idées importantes pour ta réponse</h3>
            </div>
            <div className="p-6 sm:p-8">
              <Select value={selectedTip} onValueChange={setSelectedTip}>
                <SelectTrigger className="w-full border-carnet-rule bg-carnet-paper-2 text-carnet-ink">
                  <SelectValue placeholder="Sélectionne une idée pour t'aider…" />
                </SelectTrigger>
                <SelectContent>
                  {questionTips[currentQuestion].ideas.map((idea, index) => (
                    <SelectItem key={index} value={idea} className="cursor-pointer">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pr-black rounded-full flex-shrink-0 mt-2"></span>
                        <span className="text-sm leading-relaxed">{idea}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedTip && (
                <div className="mt-4 p-4 bg-pr-gray-bg border border-pr-black/20 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.08em] font-semibold text-pr-black mb-1">
                    Idée sélectionnée
                  </p>
                  <p className="text-sm text-pr-gray-dark leading-relaxed">{selectedTip}</p>
                </div>
              )}
            </div>
          </PrCard>

          <PrCard>
            <Collapsible open={showTips} onOpenChange={setShowTips}>
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className="w-full px-6 py-4 sm:px-8 border-b border-pr-gray-light hover:bg-pr-gray-bg transition-colors text-left"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-pr-black">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-dm-serif text-lg text-pr-black">Proposition de corrigé type</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-pr-gray-mid transition-transform ${showTips ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="bg-pr-gray-bg border border-pr-gray-light rounded-xl p-5">
                    <p className="text-xs text-pr-gray-mid italic mb-3">
                      Cette proposition est un exemple structuré. Adapte-la à ton profil personnel.
                    </p>
                    <div className="text-sm text-pr-gray-dark leading-relaxed whitespace-pre-line">
                      {questionTips[currentQuestion].sampleAnswer}
                    </div>
                  </div>
                  <div className="bg-pr-gray-bg border border-pr-black/20 rounded-xl p-4">
                    <p className="text-sm text-pr-gray-dark">
                      <span className="font-semibold text-pr-black">Conseil :</span> personnalise ce corrigé avec tes expériences concrètes. Les anecdotes personnelles rendent ta réponse mémorable.
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </PrCard>
        </div>
      )}

      {/* Section chronomètre + enregistrement */}
      <PrCard>
        <div className="px-6 py-4 sm:px-8 border-b border-pr-gray-light flex items-center gap-2 text-pr-black">
          <Clock className="h-5 w-5" />
          <h3 className="font-dm-serif text-lg text-pr-black">Chronomètre d'entraînement</h3>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="font-dm-serif text-5xl text-pr-black tabular-nums leading-none mb-2">
                {formatTime(timeElapsed)}
              </div>
              <p className="text-xs uppercase tracking-[0.08em] text-pr-gray-mid font-semibold">
                Temps écoulé
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={toggleTimer}
                className={
                  isTimerRunning
                    ? 'bg-pr-black hover:bg-pr-gray-dark text-white'
                    : 'bg-pr-black hover:bg-pr-black-dark text-white'
                }
              >
                {isTimerRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isTimerRunning ? 'Pause' : 'Démarrer'}
              </Button>
              <Button
                onClick={resetTimer}
                variant="outline"
                className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Bloc enregistrement audio */}
          <div className="mt-8 pt-6 border-t border-pr-gray-light">
            <div className="bg-pr-gray-bg rounded-2xl p-6 border border-pr-gray-light">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h4 className="text-base font-semibold text-pr-black flex items-center gap-3 font-dm-sans">
                  <div className="p-2 bg-pr-gray-bg rounded-xl">
                    <Mic className="h-5 w-5 text-pr-black" />
                  </div>
                  Enregistrement audio
                </h4>
                {isRecording && (
                  <div className="flex items-center gap-2 bg-carnet-paper-2 border border-carnet-rule rounded-full px-4 py-1.5">
                    <div className="w-2.5 h-2.5 bg-pr-black rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-pr-black tabular-nums">
                      {formatRecordingTime(recordingTime)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-6">
                {!isRecording && !audioUrl && (
                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={startRecording}
                      className="group relative w-24 h-24 rounded-full bg-pr-black hover:bg-pr-black-dark text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pr-black-pale"
                    >
                      <Mic className="h-10 w-10 mx-auto transition-transform group-hover:scale-110" />
                    </button>
                    <span className="text-sm font-medium text-pr-gray-dark">Clique pour enregistrer</span>
                  </div>
                )}

                {isRecording && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-1 h-12">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-pr-black rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 100}%`,
                            minHeight: '8px',
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: `${0.5 + Math.random() * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>

                    <button
                      onClick={stopRecording}
                      className="group relative w-24 h-24 rounded-full bg-pr-black hover:bg-pr-gray-dark text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pr-gray-light"
                    >
                      <Square className="h-8 w-8 mx-auto fill-white" />
                      <div className="absolute -inset-2 rounded-full border-2 border-pr-black animate-ping opacity-30"></div>
                    </button>
                    <span className="text-sm font-medium text-pr-black">Clique pour arrêter</span>
                  </div>
                )}

                {audioUrl && !isRecording && (
                  <div className="w-full">
                    <div className="bg-carnet-paper-2 rounded-xl p-4 border border-carnet-rule">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="p-2 bg-pr-gray-bg rounded-lg flex-shrink-0">
                          <Volume2 className="h-5 w-5 text-pr-black" />
                        </div>
                        <audio controls className="flex-1 h-10 min-w-[200px]">
                          <source src={audioUrl} type="audio/wav" />
                          Votre navigateur ne supporte pas l'audio.
                        </audio>
                        <Button
                          onClick={() => {
                            setAudioUrl(null);
                            setRecordingTime(0);
                          }}
                          variant="outline"
                          size="sm"
                          className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:border-pr-gray-light/30 hover:text-pr-black transition-colors"
                        >
                          <RotateCcw className="h-4 w-4 mr-1" />
                          Refaire
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {isTranscribing && (
                  <div className="w-full bg-carnet-paper-2 border border-carnet-rule rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-pr-gray-bg rounded-lg">
                        <Loader2 className="h-4 w-4 animate-spin text-pr-black" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-pr-black">Retranscription en cours…</span>
                        <p className="text-xs text-pr-gray-mid mt-0.5">
                          Le texte apparaîtra automatiquement dans le champ ci-dessous
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-pr-gray-bg rounded-full h-1.5 overflow-hidden">
                      <div className="bg-pr-black h-full rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-pr-gray-mid mt-4 text-center">
                Enregistre ta réponse orale — la retranscription automatique se lance dès l'arrêt.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-pr-gray-bg border border-pr-black/20 rounded-xl">
            <p className="text-sm text-pr-gray-dark">
              <span className="font-semibold text-pr-black">Conseil :</span> en entretien réel, tu disposes généralement de 2 à 3 minutes pour répondre. Utilise ce chronomètre pour t'entraîner à respecter le temps imparti.
            </p>
          </div>
        </div>
      </PrCard>

      {/* Section réponse */}
      <PrCard>
        <div className="px-6 py-4 sm:px-8 border-b border-pr-gray-light flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-pr-black">
            <Mic className="h-5 w-5" />
            <h3 className="font-dm-serif text-lg text-pr-black">Ta réponse</h3>
          </div>
          <Button
            onClick={() => setShowAnswer(!showAnswer)}
            variant="outline"
            size="sm"
            className="border-pr-gray-light/40 text-pr-black hover:bg-pr-black hover:text-white hover:border-pr-black transition-colors"
          >
            {showAnswer ? 'Masquer' : 'Voir'} réponse
          </Button>
        </div>
        <div className="p-6 sm:p-8">
          <Textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder={isTranscribing ? 'Retranscription en cours…' : 'Tape ta réponse ici ou enregistre-toi pour obtenir une retranscription automatique.'}
            className="min-h-[200px] text-base leading-relaxed border border-carnet-rule bg-carnet-paper-2 text-carnet-ink focus-visible:ring-pr-black focus-visible:border-pr-black transition-colors"
          />
          <div className="mt-4 flex items-center justify-between text-xs text-pr-gray-mid font-medium">
            <span>{userAnswer.length} caractères</span>
            <span>~{Math.ceil(userAnswer.length / 150)} min de parole estimées</span>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={evaluateAnswer}
              disabled={isEvaluating || !userAnswer.trim()}
              size="lg"
              className="bg-pr-black hover:bg-pr-black-dark text-white shadow-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Évaluation en cours…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Valider et obtenir une correction
                </>
              )}
            </Button>
          </div>
        </div>
      </PrCard>

      {/* Section évaluation */}
      {evaluation && (
        <PrCard>
          <div className="px-6 py-4 sm:px-8 border-b border-pr-gray-light flex items-center gap-2 text-pr-black">
            <Award className="h-5 w-5" />
            <h3 className="font-dm-serif text-lg text-pr-black">Évaluation de ta réponse</h3>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            {/* Score */}
            <div className="flex items-center justify-center p-6 bg-pr-gray-bg rounded-xl border border-pr-black/20">
              <div className="text-center">
                <div className="font-dm-serif text-6xl text-pr-black mb-1 leading-none">
                  {evaluation.score}<span className="text-3xl text-pr-black">/20</span>
                </div>
                <p className="text-xs uppercase tracking-[0.08em] text-pr-gray-mid font-semibold mt-2">
                  Note globale
                </p>
              </div>
            </div>

            {/* Commentaire général */}
            <div className="p-5 bg-pr-gray-bg rounded-xl border border-pr-gray-light">
              <p className="text-pr-gray-dark leading-relaxed">
                {evaluation.overall}
              </p>
            </div>

            {/* Points forts */}
            <div className="bg-carnet-paper-2 rounded-xl p-5 border border-carnet-rule">
              <h4 className="font-semibold text-pr-black flex items-center gap-2 mb-3 font-dm-sans">
                <CheckCircle className="h-5 w-5 text-pr-black" />
                Points forts
              </h4>
              <ul className="space-y-2">
                {evaluation.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-pr-gray-dark">
                    <span className="text-pr-black mt-0.5 font-semibold">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Points à améliorer */}
            <div className="bg-carnet-paper-2 rounded-xl p-5 border border-carnet-rule">
              <h4 className="font-semibold text-pr-black flex items-center gap-2 mb-3 font-dm-sans">
                <AlertCircle className="h-5 w-5 text-pr-black" />
                Points à améliorer
              </h4>
              <ul className="space-y-2">
                {evaluation.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-pr-gray-dark">
                    <span className="text-pr-black mt-0.5 font-semibold">!</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggestions */}
            <div className="bg-carnet-paper-2 rounded-xl p-5 border border-carnet-rule">
              <h4 className="font-semibold text-pr-black flex items-center gap-2 mb-3 font-dm-sans">
                <Lightbulb className="h-5 w-5 text-pr-black" />
                Suggestions d'amélioration
              </h4>
              <ul className="space-y-2">
                {evaluation.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-pr-gray-dark">
                    <span className="text-pr-black mt-0.5">→</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                onClick={generateRandomQuestion}
                variant="outline"
                className="border-pr-gray-light/40 text-pr-black hover:bg-pr-black hover:text-white hover:border-pr-black transition-colors"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Nouvelle question pour progresser
              </Button>
            </div>
          </div>
        </PrCard>
      )}

    </div>
  );
};

const UnifiedOralGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'answer' | 'emlyon' | 'edhec' | 'practice'>('practice');

  const tools = [
    {
      id: 'practice',
      title: 'Entraînement Direct',
      description: 'Question d\'entretien posée directement - Répondez et entraînez-vous à l\'oral',
      icon: PenTool,
      component: <QuestionPracticePage />
    },
    {
      id: 'answer',
      title: 'Réponse d\'entretien',
      description: 'Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté',
      icon: MessageSquare,
      component: <AnswerGeneratorPage />
    },
    {
      id: 'emlyon',
      title: 'Questions EM Lyon',
      description: 'Questions aléatoires pour l\'entretien \'Flash\' avec cartes thématiques',
      icon: Target,
      component: <EMLyonGeneratorPage />
    },
    {
      id: 'edhec',
      title: 'Générateur de mots EDHEC',
      description: 'Générateur de mots aléatoires pour votre présentation EDHEC',
      icon: ExternalLink,
      component: <EDHECGeneratorPage />
    }
  ];

  const currentTool = tools.find(tool => tool.id === selectedTool);

  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Oraux</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        {/* Hero */}
        <div className="relative mb-12">
          <div className="max-w-[820px]">
            <div className="carnet-eyebrow mb-5">Feedback IA · Oraux</div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Mic className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
                Générateur <em className="font-lora italic text-carnet-red">Oraux</em>.
              </h1>
            </div>
            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
              Génère tes réponses orales ou entraîne-toi avec des <span className="carnet-hl font-lora italic">questions types</span>.
            </p>
          </div>

          {/* Bouton info flottant */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 right-0 w-10 h-10 rounded-full border border-[rgba(193,68,58,0.25)] bg-carnet-paper-2 text-carnet-red hover:bg-carnet-red hover:text-carnet-paper hover:border-carnet-red transition-all duration-300"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-carnet-paper-2 border border-[rgba(78,55,30,0.18)]">
              <DialogHeader>
                <DialogTitle className="font-lora text-[22px] text-carnet-ink flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-carnet-red" />
                  Comment ça <em className="font-lora italic text-carnet-red">marche ?</em>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 font-instrument">
                <ol className="space-y-3">
                  {[
                    "Entre une question d'entretien classique comme « Parlez-moi de vous » ou « Quels sont vos défauts ? »",
                    'Ajoute des informations sur ton profil pour personnaliser davantage la réponse',
                    'Notre système génère une réponse structurée avec storytelling, analyse critique et conseils',
                    'Utilise cette réponse comme base pour développer ta propre version personnalisée',
                  ].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="carnet-hand text-[22px] text-carnet-red leading-none font-semibold w-7 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-carnet-ink-soft text-sm leading-relaxed">{txt}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-carnet-ink-mute italic border-t border-dashed border-[rgba(78,55,30,0.18)] pt-3">
                  Note : toutes les anecdotes de storytelling seront mises en italique pour faciliter leur identification.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Sélecteur d'outil */}
        <div className="mb-10">
          <div className="max-w-2xl mx-auto carnet-card overflow-hidden">
            <div className="p-3">
              <Tabs
                value={selectedTool}
                onValueChange={(value: 'answer' | 'emlyon' | 'edhec' | 'practice') => setSelectedTool(value)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] p-1 rounded-md h-auto">
                  <TabsTrigger
                    value="practice"
                    className="flex items-center gap-2 data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft font-instrument text-sm rounded transition-all py-2"
                  >
                    <PenTool className="h-4 w-4" />
                    <span className="hidden sm:inline">Entraînement</span>
                    <span className="sm:hidden">Pratique</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="answer"
                    className="flex items-center gap-2 data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft font-instrument text-sm rounded transition-all py-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span className="hidden sm:inline">Entretien</span>
                    <span className="sm:hidden">Entretien</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="emlyon"
                    className="flex items-center gap-2 data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft font-instrument text-sm rounded transition-all py-2"
                  >
                    <Target className="h-4 w-4" />
                    <span className="hidden sm:inline">EM Lyon</span>
                    <span className="sm:hidden">EM Lyon</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="edhec"
                    className="flex items-center gap-2 data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft font-instrument text-sm rounded transition-all py-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">EDHEC</span>
                    <span className="sm:hidden">EDHEC</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Contenu dynamique */}
        <div className="mt-8">
          {currentTool?.component}
        </div>
      </div>
    </div>
  );
};

export default UnifiedOralGeneratorPage;
