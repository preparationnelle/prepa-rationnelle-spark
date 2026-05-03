import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Square, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface VoiceRecorderProps {
    onTranscriptionComplete: (text: string) => void;
    language: 'en' | 'de' | 'es' | 'fr';
    disabled?: boolean;
}

type RecordingState = 'idle' | 'recording' | 'processing' | 'error';

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
    onTranscriptionComplete,
    language,
    disabled = false
}) => {
    const [state, setState] = useState<RecordingState>('idle');
    const [recordingTime, setRecordingTime] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Nettoyage à la fin du composant
    useEffect(() => {
        return () => {
            stopRecording();
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    // Timer pour l'enregistrement
    useEffect(() => {
        if (state === 'recording') {
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => {
                    // Limite à 3 minutes (180 secondes)
                    if (prev >= 180) {
                        stopRecording();
                        toast.warning('Durée maximale d\'enregistrement atteinte (3 minutes)');
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            setRecordingTime(0);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [state]);

    const startRecording = async () => {
        try {
            // Demander la permission du microphone
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Créer le MediaRecorder
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm' // Format supporté par la plupart des navigateurs
            });

            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            // Gérer les données audio
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            // Gérer la fin de l'enregistrement
            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

                // Vérifier la taille (max 25MB pour Whisper)
                if (audioBlob.size > 25 * 1024 * 1024) {
                    setState('error');
                    setErrorMessage('Le fichier audio est trop volumineux (max 25MB)');
                    toast.error('Fichier trop volumineux');
                    return;
                }

                // Lancer la transcription
                await transcribeAudio(audioBlob);

                // Arrêter le stream
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach(track => track.stop());
                    streamRef.current = null;
                }
            };

            // Démarrer l'enregistrement
            mediaRecorder.start();
            setState('recording');
            toast.success('Enregistrement démarré - Parlez maintenant');

        } catch (error: any) {
            console.error('Erreur lors de l\'accès au microphone:', error);
            setState('error');

            if (error.name === 'NotAllowedError') {
                setErrorMessage('Veuillez autoriser l\'accès au microphone dans les paramètres de votre navigateur');
                toast.error('Permission microphone refusée');
            } else if (error.name === 'NotFoundError') {
                setErrorMessage('Aucun microphone détecté sur cet appareil');
                toast.error('Microphone non détecté');
            } else {
                setErrorMessage('Erreur lors de l\'accès au microphone');
                toast.error('Erreur microphone');
            }
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && state === 'recording') {
            mediaRecorderRef.current.stop();
            setState('processing');
        }
    };

    const transcribeAudio = async (audioBlob: Blob) => {
        setState('processing');

        try {
            // Créer le FormData pour envoyer le fichier
            const formData = new FormData();
            formData.append('file', audioBlob, 'recording.webm');
            formData.append('language', language);

            // Appeler la Edge Function Supabase
            const { data, error } = await supabase.functions.invoke('transcribe-audio', {
                body: formData,
            });

            if (error) {
                throw error;
            }

            if (data && data.text) {
                // Retourner le texte transcrit
                onTranscriptionComplete(data.text);
                toast.success('Transcription réussie !');
                setState('idle');
                setErrorMessage('');
            } else {
                throw new Error('Aucun texte retourné par l\'API');
            }

        } catch (error: any) {
            console.error('Erreur lors de la transcription:', error);
            setState('error');
            setErrorMessage('Erreur lors de la transcription audio');
            toast.error('Échec de la transcription - Veuillez réessayer');
        }
    };

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const resetError = () => {
        setState('idle');
        setErrorMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center py-4 px-4 w-full bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/80">

            {/* Zone centrale interactive */}
            <div className="relative mb-6 group">

                {/* Cercles d'animation d'arrière-plan */}
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 transition-opacity duration-500 blur-lg group-hover:opacity-20 ${state === 'recording' ? 'animate-ping opacity-20' : ''}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 transition-all duration-500 blur-xl group-hover:opacity-30 ${state === 'recording' ? 'animate-pulse opacity-40 scale-125' : ''}`}></div>

                {/* BOUTON PRINCIPAL - Plus petit (w-16 h-16) */}
                <button
                    onClick={state === 'recording' ? stopRecording : startRecording}
                    disabled={disabled || state === 'processing'}
                    className={`
                        relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 outline-none ring-offset-2 focus:ring-2 ring-orange-200
                        ${state === 'recording'
                            ? 'bg-white border-2 border-red-500'
                            : state === 'processing'
                                ? 'bg-white border-2 border-gray-200 cursor-not-allowed'
                                : 'bg-gradient-to-br from-gray-900 to-gray-700 hover:from-orange-500 hover:to-pink-600 text-white'
                        }
                    `}
                >
                    {state === 'recording' ? (
                        <div className="relative">
                            <Square className="w-6 h-6 text-red-500 fill-current rounded-sm" />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                        </div>
                    ) : state === 'processing' ? (
                        <Loader2 className="w-6 h-6 text-gray-300 animate-spin" />
                    ) : (
                        <Mic className="w-7 h-7" strokeWidth={1.5} />
                    )}
                </button>

                {/* État textuel sous le bouton - Plus proche */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max text-center">
                    {state === 'idle' && (
                        <span className="text-gray-400 font-medium text-xs group-hover:text-gray-600 transition-colors">
                            Appuyez pour parler
                        </span>
                    )}
                    {state === 'recording' && (
                        <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-bold font-mono text-sm tracking-wider">{formatTime(recordingTime)}</span>
                            <div className="flex gap-0.5 items-end h-2">
                                <span className="w-0.5 h-2 bg-red-500 rounded-full animate-[bounce_1s_infinite]"></span>
                                <span className="w-0.5 h-1.5 bg-red-400 rounded-full animate-[bounce_1s_infinite_0.1s]"></span>
                                <span className="w-0.5 h-3 bg-red-600 rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
                            </div>
                        </div>
                    )}
                    {state === 'processing' && (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 font-bold animate-pulse text-xs">
                            Transcription...
                        </span>
                    )}
                    {state === 'error' && (
                        <button onClick={resetError} className="text-red-500 font-medium text-xs hover:underline flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Réessayer
                        </button>
                    )}
                </div>
            </div>

            {/* Message d'aide et Infos - Très compact */}
            <div className="mt-4 text-center">
                {state === 'error' && errorMessage ? (
                    <div className="text-red-600 text-xs flex items-center justify-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errorMessage}
                    </div>
                ) : (
                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
                            Whisper AI • {
                                language === 'en' ? 'Anglais' :
                                    language === 'de' ? 'Allemand' :
                                        language === 'es' ? 'Espagnol' : 'Français'
                            }
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VoiceRecorder;
