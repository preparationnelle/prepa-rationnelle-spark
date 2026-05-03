import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Send, Sparkles, User, AlertCircle, X, Maximize2, Minimize2 } from "lucide-react";
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
  const [error, setError] = useState<string | null>(null);
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

  return (
    <div className={cn("w-full h-full", isWidget ? "" : mode === 'embedded' ? "" : "flex justify-center py-6")}>
      <div className={cn(
        "w-full bg-white/80 backdrop-blur-xl border-white/50 overflow-hidden flex flex-col transition-all duration-300",
        isWidget && !isExpanded ? "max-w-md h-[500px]" : "h-full",
        mode === 'full' && "rounded-3xl shadow-2xl border",
        mode === 'embedded' && "rounded-none shadow-none border-0"
      )}>
        {/* Header */}
        <div className="px-6 py-4 bg-white/50 border-b border-blue-100 flex items-center justify-between backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Atlas ECG</h3>
              <p className="text-xs text-blue-600 font-medium flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Tuteur Géopolitique
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {isWidget && onExpand && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onExpand}
                className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title={isExpanded ? "Réduire" : "Agrandir"}
              >
                {isExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            )}
            {isWidget && onClose && (
              <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-gradient-to-b from-blue-50/30 to-white">


          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-end gap-3 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                msg.role === "user" ? "bg-gray-100" : "bg-gradient-to-br from-blue-500 to-indigo-600"
              )}>
                {msg.role === "user" ? <User className="h-5 w-5 text-gray-500" /> : <Globe className="h-5 w-5 text-white" />}
              </div>

              <div className={cn(
                "px-5 py-3 rounded-2xl shadow-sm text-sm sm:text-base leading-relaxed whitespace-pre-line",
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-white border border-blue-100 text-gray-800 rounded-bl-sm"
              )}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-3 max-w-[85%] mr-auto">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div className="bg-white border border-blue-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-blue-100">
          {!isWidget && (
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mask-fade-right">
              {SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => !loading && setInput(suggestion)}
                  disabled={loading}
                  className="whitespace-nowrap px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:border-blue-300 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="h-3 w-3 text-blue-500" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Pose ta question en géopolitique..."
              className="pr-12 py-6 rounded-full border-blue-200 bg-blue-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-base shadow-inner"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className={cn(
                "absolute right-2 h-10 w-10 rounded-full p-0 transition-all",
                input.trim() ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" : "bg-gray-200 text-gray-400"
              )}
            >
              <Send className="h-5 w-5 ml-0.5" />
            </Button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-3">
            Atlas ECG peut faire des erreurs. Vérifie les informations avec tes cours.
          </p>
        </div>
      </div>
    </div>
  );
};
