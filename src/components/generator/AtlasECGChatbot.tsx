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

  if (isEmbedded) {
    return (
      <div className="w-full h-full flex">
        <div className="m-auto w-full h-full flex flex-col carnet-paper-2 border border-carnet-rule rounded-[6px] shadow-[0_2px_0_rgba(78,55,30,0.05),0_18px_40px_-12px_rgba(78,55,30,0.18)] overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4 border-b border-dashed border-carnet-rule flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center shrink-0">
              <Globe className="h-5 w-5 text-carnet-red" />
            </div>
            <div className="min-w-0">
              <div className="carnet-eyebrow text-[10px] mb-0.5">Assistant IA</div>
              <h3 className="font-lora text-[20px] text-carnet-ink leading-none">
                Atlas <em className="font-lora italic text-carnet-red">ECG</em>
              </h3>
              <p className="font-instrument text-[11px] text-carnet-ink-mute flex items-center gap-1.5 mt-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-carnet-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-carnet-red"></span>
                </span>
                Tuteur géopolitique
              </p>
            </div>
          </div>

          {/* Chat Area — papier ligné visible */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 carnet-paper">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-end gap-2.5 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center shrink-0 border",
                  msg.role === "user"
                    ? "bg-carnet-red text-carnet-paper border-carnet-red"
                    : "bg-[rgba(193,68,58,0.08)] text-carnet-red border-[rgba(193,68,58,0.2)]"
                )}>
                  {msg.role === "user"
                    ? <User className="h-3.5 w-3.5" />
                    : <Globe className="h-3.5 w-3.5" />}
                </div>

                <div className={cn(
                  "px-4 py-2.5 text-[14px] leading-relaxed whitespace-pre-line font-instrument",
                  msg.role === "user"
                    ? "bg-carnet-red text-carnet-paper rounded-2xl rounded-br-md shadow-[0_4px_14px_rgba(193,68,58,0.18)]"
                    : "bg-carnet-paper-2 border border-dashed border-carnet-rule text-carnet-ink rounded-2xl rounded-bl-md"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-end gap-2.5 max-w-[85%] mr-auto">
                <div className="h-8 w-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center shrink-0">
                  <Globe className="h-3.5 w-3.5 text-carnet-red" />
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-carnet-rule px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-carnet-red rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-carnet-red rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-carnet-red rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-5 pt-3 pb-4 border-t border-dashed border-carnet-rule shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mask-fade-right">
              {SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => !loading && setInput(suggestion)}
                  disabled={loading}
                  className="whitespace-nowrap px-3 py-1.5 bg-transparent border border-dashed border-[rgba(193,68,58,0.3)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red rounded-full text-[12px] font-instrument transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="h-3 w-3 text-carnet-red" />
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="relative flex items-center gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Pose ta question en géopolitique…"
                className="pr-12 h-11 rounded-md border border-dashed border-carnet-rule bg-carnet-paper-2 focus:border-carnet-red focus-visible:ring-2 focus-visible:ring-[rgba(193,68,58,0.2)] focus-visible:ring-offset-0 transition-colors text-[14px] font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                className={cn(
                  "absolute right-1.5 h-8 w-8 rounded-md p-0 transition-all",
                  input.trim()
                    ? "bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper shadow-[0_4px_14px_rgba(193,68,58,0.25)]"
                    : "bg-[rgba(193,68,58,0.08)] text-carnet-ink-mute hover:bg-[rgba(193,68,58,0.08)]"
                )}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-center text-[11px] text-carnet-ink-mute mt-2 font-instrument">
              Atlas ECG peut faire des erreurs. Vérifie les informations avec tes cours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full h-full", isWidget ? "" : "flex justify-center py-6")}>
      <div className={cn(
        "w-full bg-carnet-paper-2 overflow-hidden flex flex-col transition-all duration-300",
        isWidget && !isExpanded ? "max-w-md h-[500px] rounded-2xl border border-pr-gray-light shadow-[0_8px_30px_rgba(26,26,24,0.08)]" : "h-full",
        mode === 'full' && "rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)] max-w-4xl"
      )}>
        {!isWidget && <div className="h-[3px] w-full bg-pr-black" />}
        {/* Header */}
        <div className="px-6 py-4 bg-pr-gray-bg border-b border-pr-gray-light flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-carnet-paper-2 border border-pr-black-soft rounded-xl flex items-center justify-center">
              <Globe className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                Assistant IA
              </div>
              <h3 className="font-dm-serif text-pr-black text-lg leading-none">Atlas ECG</h3>
              <p className="text-[11px] text-pr-gray-mid font-medium flex items-center gap-1.5 mt-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pr-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pr-black"></span>
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
                className="text-pr-gray-mid hover:text-pr-black hover:bg-pr-gray-bg rounded-full transition-colors"
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
                className="text-pr-gray-mid hover:text-pr-black hover:bg-pr-gray-bg rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-carnet-paper-2">
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
                  : "bg-pr-gray-bg border border-pr-black-soft"
              )}>
                {msg.role === "user"
                  ? <User className="h-4 w-4 text-pr-gray-dark" />
                  : <Globe className="h-4 w-4 text-pr-black" />}
              </div>

              <div className={cn(
                "px-5 py-3 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed whitespace-pre-line",
                msg.role === "user"
                  ? "bg-pr-black text-white rounded-br-md shadow-[0_4px_14px_rgba(244,132,95,0.25)]"
                  : "bg-pr-gray-bg border border-pr-gray-light text-pr-black rounded-bl-md"
              )}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-3 max-w-[85%] mr-auto">
              <div className="h-9 w-9 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center shrink-0">
                <Globe className="h-4 w-4 text-pr-black" />
              </div>
              <div className="bg-pr-gray-bg border border-pr-gray-light px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                <span className="w-2 h-2 bg-pr-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-pr-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-pr-black rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-carnet-paper-2 border-t border-pr-gray-light">
          {!isWidget && (
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mask-fade-right">
              {SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => !loading && setInput(suggestion)}
                  disabled={loading}
                  className="whitespace-nowrap px-3.5 py-2 bg-carnet-paper-2 border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-full text-[12px] font-medium transition-colors flex items-center gap-2"
                >
                  <Sparkles className="h-3 w-3 text-pr-black" />
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
              className="pr-12 h-12 rounded-xl border-pr-gray-light bg-carnet-paper-2 focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 transition-colors text-[15px] text-pr-black placeholder:text-pr-gray-mid"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className={cn(
                "absolute right-1.5 h-9 w-9 rounded-lg p-0 transition-all",
                input.trim()
                  ? "bg-pr-black hover:bg-pr-black-dark text-white shadow-[0_4px_14px_rgba(244,132,95,0.35)]"
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
