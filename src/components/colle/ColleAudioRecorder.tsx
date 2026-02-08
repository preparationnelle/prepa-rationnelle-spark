import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { VoiceRecorder } from '@/components/voice/VoiceRecorder';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import type { ColleAudioRecorderProps } from '@/types/colle';

type RecorderStatus = 'waiting' | 'recording' | 'processing' | 'done' | 'error';

const STATUS_DISPLAY: Record<
  RecorderStatus,
  { label: string; className: string }
> = {
  waiting: {
    label: 'En attente',
    className: 'text-muted-foreground',
  },
  recording: {
    label: 'Enregistrement...',
    className: 'text-red-500 animate-pulse',
  },
  processing: {
    label: 'Traitement...',
    className: 'text-[#FF6A00] animate-pulse',
  },
  done: {
    label: 'Termin\u00e9 \u2713',
    className: 'text-emerald-600',
  },
  error: {
    label: 'Erreur',
    className: 'text-red-500',
  },
};

export const ColleAudioRecorder: React.FC<ColleAudioRecorderProps> = ({
  langue,
  questionId,
  onRecordingComplete,
  disabled = false,
}) => {
  const [status, setStatus] = useState<RecorderStatus>('waiting');
  const [transcription, setTranscription] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTranscriptionComplete = useCallback(
    (text: string) => {
      setTranscription(text);
      setStatus('done');
      setErrorMessage(null);
    },
    []
  );

  const handleValidate = () => {
    if (!transcription) return;
    // Pass the audio URL (empty string since VoiceRecorder doesn't expose it directly)
    // and the transcription text
    onRecordingComplete('', transcription);
  };

  return (
    <div className="space-y-4">
      {/* Titre */}
      <h3 className="text-base font-semibold">Votre r\u00e9ponse</h3>

      {/* Indicateur de statut */}
      <div className="flex items-center gap-2">
        {status === 'done' && (
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        )}
        {status === 'processing' && (
          <Loader2 className="h-4 w-4 animate-spin text-[#FF6A00]" />
        )}
        {status === 'error' && (
          <AlertCircle className="h-4 w-4 text-red-500" />
        )}
        <span
          className={`text-sm font-medium ${STATUS_DISPLAY[status].className}`}
        >
          {STATUS_DISPLAY[status].label}
        </span>
      </div>

      {/* VoiceRecorder */}
      <VoiceRecorder
        onTranscriptionComplete={handleTranscriptionComplete}
        language={langue}
        disabled={disabled || status === 'processing'}
      />

      {/* Message d'erreur */}
      {errorMessage && (
        <p className="text-sm text-red-500 flex items-center gap-1" role="alert">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {errorMessage}
        </p>
      )}

      {/* Transcription aper\u00e7u */}
      {transcription && (
        <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground italic border border-muted">
          &laquo;&nbsp;{transcription}&nbsp;&raquo;
        </div>
      )}

      {/* Bouton Valider */}
      {transcription && status === 'done' && (
        <Button
          onClick={handleValidate}
          className="w-full bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
          aria-label="Valider la r\u00e9ponse"
        >
          Valider la r\u00e9ponse
        </Button>
      )}
    </div>
  );
};

export default ColleAudioRecorder;
