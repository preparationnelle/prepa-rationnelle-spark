import { useState, useCallback, useEffect, useRef } from 'react';

// ============================================================================
// Interface publique du hook
// ============================================================================

export interface UseAudioPlayer {
  // Etat lecture audio
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentUrl: string | null;

  // Etat TTS
  isSpeaking: boolean;
  currentText: string | null;

  // Actions audio
  play: (url: string) => void;
  pause: () => void;
  stop: () => void;
  seek: (time: number) => void;

  // Actions TTS
  speak: (text: string, lang: string) => void;
  stopSpeaking: () => void;
}

// ============================================================================
// Mapping langue -> BCP 47
// ============================================================================

const LANG_MAP: Record<string, string> = {
  en: 'en-GB',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
};

// ============================================================================
// Hook
// ============================================================================

export const useAudioPlayer = (): UseAudioPlayer => {
  // --- Etat audio ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  // --- Etat TTS ---
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);

  // --- Refs ---
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // ============================================================================
  // Helpers internes pour le player audio
  // ============================================================================

  /**
   * Met a jour currentTime en boucle via requestAnimationFrame
   * pour un rendu fluide de la progression.
   */
  const startTimeUpdate = useCallback(() => {
    const update = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
      animationFrameRef.current = requestAnimationFrame(update);
    };
    animationFrameRef.current = requestAnimationFrame(update);
  }, []);

  const stopTimeUpdate = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  /**
   * Nettoie completement l'element audio courant.
   */
  const cleanupAudio = useCallback(() => {
    stopTimeUpdate();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [stopTimeUpdate]);

  // ============================================================================
  // Actions audio
  // ============================================================================

  const play = useCallback(
    (url: string) => {
      // Si on lit deja la meme URL, on reprend simplement la lecture
      if (audioRef.current && currentUrl === url && !isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error('Erreur reprise lecture audio:', err);
        });
        return;
      }

      // Sinon, on reinitialise avec la nouvelle URL
      cleanupAudio();

      const audio = new Audio(url);
      audioRef.current = audio;
      setCurrentUrl(url);

      // --- Event listeners ---
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('play', () => {
        setIsPlaying(true);
        startTimeUpdate();
      });

      audio.addEventListener('pause', () => {
        setIsPlaying(false);
        stopTimeUpdate();
        // Snapshot du temps courant
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        stopTimeUpdate();
        setCurrentTime(0);
      });

      audio.addEventListener('error', (e) => {
        console.error('Erreur lecture audio:', e);
        setIsPlaying(false);
        stopTimeUpdate();
      });

      // Lancer la lecture
      audio.play().catch((err) => {
        console.error('Erreur demarrage lecture audio:', err);
      });
    },
    [currentUrl, isPlaying, cleanupAudio, startTimeUpdate, stopTimeUpdate],
  );

  const pause = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const stop = useCallback(() => {
    cleanupAudio();
    setCurrentUrl(null);
  }, [cleanupAudio]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      const clampedTime = Math.max(0, Math.min(time, audioRef.current.duration || 0));
      audioRef.current.currentTime = clampedTime;
      setCurrentTime(clampedTime);
    }
  }, []);

  // ============================================================================
  // Actions TTS (Text-to-Speech)
  // ============================================================================

  const speak = useCallback(
    (text: string, lang: string) => {
      if (!('speechSynthesis' in window)) {
        console.error('La synthese vocale n\'est pas supportee par ce navigateur.');
        return;
      }

      // Arreter toute lecture en cours (audio + TTS)
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = LANG_MAP[lang] || lang;
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      // Tenter de selectionner une voix appropriee
      const voices = window.speechSynthesis.getVoices();
      const targetLang = LANG_MAP[lang] || lang;
      const matchingVoice = voices.find((v) => v.lang.startsWith(targetLang.split('-')[0]));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      // Events
      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentText(text);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentText(null);
      };

      utterance.onerror = (event) => {
        console.error('Erreur synthese vocale:', event.error);
        setIsSpeaking(false);
        setCurrentText(null);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSpeaking],
  );

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setCurrentText(null);
  }, []);

  // ============================================================================
  // Cleanup a l'unmount du composant
  // ============================================================================

  useEffect(() => {
    return () => {
      // Arreter l'audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
        audioRef.current = null;
      }

      // Arreter le requestAnimationFrame
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Arreter le TTS
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ============================================================================
  // Retour
  // ============================================================================

  return {
    // Etat audio
    isPlaying,
    currentTime,
    duration,
    currentUrl,

    // Etat TTS
    isSpeaking,
    currentText,

    // Actions audio
    play,
    pause,
    stop,
    seek,

    // Actions TTS
    speak,
    stopSpeaking,
  };
};

export default useAudioPlayer;
