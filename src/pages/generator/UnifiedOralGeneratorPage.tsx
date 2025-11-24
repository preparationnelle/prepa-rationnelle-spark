import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import AnswerGeneratorPage from './AnswerGeneratorPage';
import EMLyonGeneratorPage from './EMLyonGeneratorPage';
import EDHECGeneratorPage from './EDHECGeneratorPage';
import { Mic, MessageSquare, Target, ExternalLink, HelpCircle, PenTool, Shuffle, CheckCircle, Clock, RotateCcw, Play, Pause, MicOff, Square, Volume2, ChevronDown } from 'lucide-react';

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
    // Reset audio recording
    setAudioUrl(null);
    setAudioChunks([]);
    setRecordingTime(0);
  };

  // Fonctions pour l'enregistrement audio
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

        // Lancer automatiquement la retranscription
        transcribeAudio(audioBlob);

        // Arrêter tous les tracks du stream
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

  // Fonction de retranscription avec Whisper
  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    try {
      const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!openaiApiKey) {
        throw new Error('Clé API OpenAI non configurée');
      }

      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav');
      formData.append('model', 'whisper-1');
      formData.append('language', 'fr'); // Langue française pour les entretiens

      const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erreur API Whisper: ${response.status}`);
      }

      const transcribedText = data.text;

      // Remplir automatiquement le champ de réponse textuelle avec la retranscription
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

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setTimeElapsed(0);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Recording timer effect
  React.useEffect(() => {
    let recordingInterval: NodeJS.Timeout;
    if (isRecording) {
      recordingInterval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(recordingInterval);
  }, [isRecording]);

  // Générer une question au chargement
  React.useEffect(() => {
    generateRandomQuestion();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-orange-600 to-orange-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PenTool className="h-8 w-8" />
            Entraînement Direct aux Questions d'Entretien
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/90">
            Une question vous est posée directement. Répondez comme si vous étiez en entretien réel.
            Utilisez le chronomètre pour simuler les conditions d'entretien.
          </p>
        </CardContent>
      </Card>

      {/* Question Section */}
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <HelpCircle className="h-5 w-5" />
              Question posée
            </CardTitle>
            <Button
              onClick={generateRandomQuestion}
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <Shuffle className="h-4 w-4 mr-2" />
              Nouvelle question
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
            <p className="text-xl font-semibold text-gray-800 text-center">
              {currentQuestion || "Cliquez sur 'Nouvelle question' pour commencer"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section conseils pour questions spécifiques */}
      {currentQuestion && questionTips[currentQuestion] && (
        <div className="space-y-4">
          {/* Card avec menu déroulant des idées importantes */}
          <Card className="border-2 border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700 text-lg">
                <Target className="h-5 w-5" />
                Idées importantes pour votre réponse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedTip} onValueChange={setSelectedTip}>
                <SelectTrigger className="w-full border-blue-300 bg-white">
                  <SelectValue placeholder="Sélectionnez une idée pour vous aider..." />
                </SelectTrigger>
                <SelectContent>
                  {questionTips[currentQuestion].ideas.map((idea, index) => (
                    <SelectItem key={index} value={idea} className="cursor-pointer">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                        <span className="text-sm leading-relaxed">{idea}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedTip && (
                <div className="mt-3 p-3 bg-blue-100 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">💡 Idée sélectionnée :</p>
                  <p className="text-sm text-blue-700 mt-1">{selectedTip}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Card avec proposition de corrigé */}
          <Card className="border-2 border-green-200 bg-green-50/50">
            <Collapsible open={showTips} onOpenChange={setShowTips}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-green-50/80 transition-colors">
                  <CardTitle className="flex items-center justify-between text-green-700 text-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Proposition de corrigé type
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showTips ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 italic">
                      Cette proposition est un exemple structuré. Adaptez-la à votre profil personnel :
                    </p>
                    <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                      {questionTips[currentQuestion].sampleAnswer}
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Conseil :</strong> Personnalisez ce corrigé avec vos expériences concrètes. 
                      Les anecdotes personnelles sont essentielles pour rendre votre réponse mémorable.
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      )}

      {/* Timer Section */}
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <Clock className="h-5 w-5" />
            Chronomètre d'entraînement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {formatTime(timeElapsed)}
              </div>
              <p className="text-sm text-gray-600">Temps écoulé</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={toggleTimer}
                variant={isTimerRunning ? "destructive" : "default"}
                className={isTimerRunning ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
              >
                {isTimerRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isTimerRunning ? "Pause" : "Démarrer"}
              </Button>
              <Button onClick={resetTimer} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Recording Controls */}
          <div className="mt-6 pt-4 border-t border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-orange-800 flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Enregistrement audio
              </h4>
              {isRecording && (
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{formatRecordingTime(recordingTime)}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {!isRecording && !audioUrl && (
                <Button
                  onClick={startRecording}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  Commencer l'enregistrement
                </Button>
              )}

              {isRecording && (
                <Button
                  onClick={stopRecording}
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Square className="h-4 w-4 mr-2" />
                  Arrêter l'enregistrement
                </Button>
              )}

              {audioUrl && (
                <div className="flex items-center gap-2">
                  <audio controls className="h-10">
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
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Transcription Status */}
              {isTranscribing && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Retranscription en cours...</span>
                    <span className="text-xs text-blue-600">Le texte apparaîtra automatiquement dans le champ ci-dessous</span>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-600 mt-2">
              Enregistrez votre réponse orale - La retranscription automatique en texte se lance automatiquement
            </p>
          </div>

          <div className="mt-4 p-3 bg-orange-50 rounded-lg">
            <p className="text-sm text-orange-800">
              <strong>Conseil :</strong> En entretien réel, vous disposez généralement de 2-3 minutes pour répondre.
              Utilisez ce chronomètre pour vous entraîner à respecter le temps imparti.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Answer Section */}
      <Card className="border-2 border-green-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Mic className="h-5 w-5" />
              Votre réponse
            </CardTitle>
            <Button
              onClick={() => setShowAnswer(!showAnswer)}
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              {showAnswer ? "Masquer" : "Voir"} réponse
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder={isTranscribing ? "Retranscription en cours..." : "Tapez votre réponse ici ou enregistrez-vous pour obtenir une retranscription automatique"}
            className="min-h-[200px] text-base leading-relaxed border-2 border-gray-200 focus:border-green-400"
          />
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>{userAnswer.length} caractères</span>
            <span>~{Math.ceil(userAnswer.length / 150)} minutes de parole estimées</span>
          </div>
        </CardContent>
      </Card>

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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header avec bouton info */}
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Générateur Oraux
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Générez vos réponses orales ou entraînez-vous avec des questions types
          </p>
          
          {/* Bouton info flottant */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 right-0 w-10 h-10 rounded-full border-2 border-orange-600 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-orange-600 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Comment ça marche ?
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-900 text-sm">
                      Entrez une question d'entretien classique comme "Parlez-moi de vous" ou "Quels sont vos défauts ?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-900 text-sm">
                      Ajoutez des informations sur votre profil pour personnaliser davantage votre réponse
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-900 text-sm">
                      Notre système génère une réponse structurée avec storytelling, analyse critique et conseils d'entraînement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-900 text-sm">
                      Utilisez cette réponse comme base pour développer votre propre réponse personnalisée
                    </span>
                  </li>
                </ol>
                <p className="text-xs text-gray-500 italic border-t pt-3">
                  Note: Toutes les anecdotes de storytelling seront mises en italique pour faciliter leur identification.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Sélecteur d'outil avec tabs horizontaux */}
        <div className="mb-8">
          <Card className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-200">
            <CardContent className="p-4">
              <Tabs value={selectedTool} onValueChange={(value: 'answer' | 'emlyon' | 'edhec' | 'practice') => setSelectedTool(value)} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-gray-100 p-1">
                  <TabsTrigger
                    value="practice"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                  >
                    <PenTool className="h-4 w-4" />
                    <span className="hidden sm:inline">Entraînement Direct</span>
                    <span className="sm:hidden">Pratique</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="answer"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span className="hidden sm:inline">Réponse d'entretien</span>
                    <span className="sm:hidden">Entretien</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="emlyon"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                  >
                    <Target className="h-4 w-4" />
                    <span className="hidden sm:inline">Questions EM Lyon</span>
                    <span className="sm:hidden">EM Lyon</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="edhec"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">Générateur EDHEC</span>
                    <span className="sm:hidden">EDHEC</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
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