import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Send, Sparkles, User, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

interface AtlasECGChatbotProps {
  mode?: 'full' | 'widget' | 'embedded';
  onClose?: () => void;
  isExpanded?: boolean;
  onExpand?: () => void;
}

const SUGGESTIONS = [
  "Définis-moi la mondialisation",
  "Quels sont les enjeux de la mer de Chine ?",
  "Donne-moi une accroche sur les BRICS",
  "Qui est Bertrand Badie ?",
  "Soft power vs hard power ?",
  "Plan sur la puissance américaine",
];

export const AtlasECGChatbot: React.FC<AtlasECGChatbotProps> = ({
  mode = 'full',
  onClose,
  isExpanded = false,
  onExpand
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis Atlas ECG, ton tuteur en géopolitique pour les concours BCE/Ecricome.\n\nJe peux t'aider sur :\n- Définitions canoniques du programme\n- Accroches et problématiques de dissertation\n- Références académiques\n- Analyse des enjeux contemporains\n- Révision du glossaire\n\nPose-moi ta question !"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [_error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  async function sendMessage(message: string) {
    if (!message.trim()) return;
    setLoading(true);
    setError(null);

    const userMessage: ChatMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const apiMessages = messages
        .slice(1)
        .concat(userMessage)
        .map(({ role, content }) => ({ role, content }));

      const { data, error: supabaseError } = await supabase.functions.invoke('atlas-ecg-assistant', {
        body: { messages: apiMessages }
      });

      if (supabaseError) throw new Error(`Erreur de connexion: ${supabaseError.message}`);
      if (!data) throw new Error("Aucune réponse reçue du serveur");
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.text || "Désolé, je n'ai pas pu générer une réponse."
      }]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue s'est produite";
      setError(errorMessage);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: `Désolé, une erreur s'est produite : ${errorMessage}. Réessaie dans quelques instants.`
      }]);
    } finally {
      setLoading(false);
    }
  }

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !loading) await sendMessage(input.trim());
  };

  const isWidget = mode === 'widget';
  const isEmbedded = mode === 'embedded';

  return (
    <div className={cn("w-full h-full", isWidget ? "" : isEmbedded ? "" : "flex justify-center py-6")}>
      <div className={cn(
        "w-full bg-white overflow-hidden flex flex-col transition-all duration-300",
        isWidget && !isExpanded ? "max-w-md h-[500px] rounded-2xl border border-pr-gray-light shadow-[0_8px_30px_rgba(26,26,24,0.08)]" : "h-full",
        mode === 'full' && "rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)] max-w-4xl",
        isEmbedded && "rounded-none shadow-none border-0"
      )}>
        {!isEmbedded && !isWidget && <div className="h-[3px] w-full bg-pr-orange" />}
        {/* Header */}
        <div className="px-6 py-4 bg-pr-gray-bg border-b border-pr-gray-light flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white border border-pr-orange-soft rounded-xl flex items-center justify-center">
              <Globe className="h-5 w-5 text-pr-orange-dark" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
                Assistant IA
              </div>
              <h3 className="font-dm-serif text-pr-black text-lg leading-none">Atlas ECG</h3>
              <p className="text-[11px] text-pr-gray-mid font-medium flex items-center gap-1.5 mt-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pr-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pr-orange"></span>
                </span>
                Tuteur géopolitique
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {isWidget && onExpand && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onExpand}
                className="text-pr-gray-mid hover:text-pr-orange-dark hover:bg-pr-orange-pale rounded-full transition-colors"
                title={isExpanded ? "Réduire" : "Agrandir"}
              >
                {isExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            )}
            {isWidget && onClose && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-pr-gray-mid hover:text-pr-orange-dark hover:bg-pr-orange-pale rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-end gap-3 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "h-9 w-9 rounded-xl flex items-center justify-center shrink-0",
                msg.role === "user"
                  ? "bg-pr-gray-bg border border-pr-gray-light"
                  : "bg-pr-orange-pale border border-pr-orange-soft"
              )}>
                {msg.role === "user"
                  ? <User className="h-4 w-4 text-pr-gray-dark" />
                  : <Globe className="h-4 w-4 text-pr-orange-dark" />}
              </div>

              <div className={cn(
                "px-5 py-3 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed whitespace-pre-line",
                msg.role === "user"
                  ? "bg-pr-orange text-white rounded-br-md shadow-[0_4px_14px_rgba(244,132,95,0.25)]"
                  : "bg-pr-gray-bg border border-pr-gray-light text-pr-black rounded-bl-md"
              )}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-3 max-w-[85%] mr-auto">
              <div className="h-9 w-9 rounded-xl bg-pr-orange-pale border border-pr-orange-soft flex items-center justify-center shrink-0">
                <Globe className="h-4 w-4 text-pr-orange-dark" />
              </div>
              <div className="bg-pr-gray-bg border border-pr-gray-light px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                <span className="w-2 h-2 bg-pr-orange rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-pr-orange rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-pr-orange rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-pr-gray-light">
          {!isWidget && (
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mask-fade-right">
              {SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => !loading && setInput(suggestion)}
                  disabled={loading}
                  className="whitespace-nowrap px-3.5 py-2 bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-full text-[12px] font-medium transition-colors flex items-center gap-2"
                >
                  <Sparkles className="h-3 w-3 text-pr-orange" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Pose ta question en géopolitique…"
              className="pr-12 h-12 rounded-xl border-pr-gray-light bg-white focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20 transition-colors text-[15px] text-pr-black placeholder:text-pr-gray-mid"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className={cn(
                "absolute right-1.5 h-9 w-9 rounded-lg p-0 transition-all",
                input.trim()
                  ? "bg-pr-orange hover:bg-pr-orange-dark text-white shadow-[0_4px_14px_rgba(244,132,95,0.35)]"
                  : "bg-pr-gray-light text-pr-gray-mid"
              )}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="text-center text-[11px] text-pr-gray-mid mt-3">
            Atlas ECG peut faire des erreurs. Vérifie les informations avec tes cours.
          </p>
        </div>
      </div>
    </div>
  );
};
