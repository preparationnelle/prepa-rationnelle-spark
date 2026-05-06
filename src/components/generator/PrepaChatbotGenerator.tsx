import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles, Bot, User, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Explique-moi la diagonalisation en maths",
  "Quels sont les enjeux du Brexit ?",
  "Qu'est-ce que le multiplicateur keynésien ?",
  "Comment structurer mon pitch d'entretien ?",
  "Comment utiliser NumPy en Python ?",
  "Comment gérer le stress avant les concours ?",
];

interface PrepaChatbotGeneratorProps {
  variant?: 'default' | 'embedded';
}

export const PrepaChatbotGenerator: React.FC<PrepaChatbotGeneratorProps> = ({ variant = 'default' }) => {
  const isEmbedded = variant === 'embedded';
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis Majora, ton assistant IA Prépa Rationnelle ! Je peux t'aider sur :\n\n📐 Maths (algèbre, analyse, probas)\n🇬🇧 Anglais (civilisation, grammaire)\n🌍 Géopolitique & ESH\n💻 Python\n🎤 Méthodologie & entretiens\n\nPose-moi ta question !"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new message
  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleWhatsAppContact = () => {
    const message = "Bonjour, j'ai une question sur la prépa et j'aimerais échanger avec l'équipe Prépa Rationnelle !";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33609164668?text=${encodedMessage}`, '_blank');
  };

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    // Add user message immediately
    const userMessage: ChatMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      // Prepare messages for API (exclude the initial greeting)
      const apiMessages = messages
        .slice(1) // Remove the initial greeting
        .concat(userMessage)
        .map(({ role, content }) => ({ role, content }));

      console.log("Sending messages to Edge Function:", apiMessages);

      const { data, error: supabaseError } = await supabase.functions.invoke('chat-ai-assistant', {
        body: { messages: apiMessages }
      });

      if (supabaseError) {
        console.error("Supabase function error:", supabaseError);
        throw new Error(`Erreur de connexion: ${supabaseError.message}`);
      }

      if (!data) {
        throw new Error("Aucune réponse reçue du serveur");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.text || "Désolé, je n'ai pas pu générer une réponse."
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue s'est produite";
      setError(errorMessage);

      // Add error message to chat
      const errorChatMessage: ChatMessage = {
        role: "assistant",
        content: `Désolé, une erreur s'est produite : ${errorMessage}. Essayez à nouveau dans quelques instants ou contactez-nous directement sur WhatsApp !`
      };
      setMessages(prev => [...prev, errorChatMessage]);
    } finally {
      setLoading(false);
    }
  }

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !loading) {
      await sendMessage(input.trim());
    }
  };

  const handleSuggestion = (suggestion: string) => {
    if (!loading) {
      setInput(suggestion);
    }
  };

  const retryLastMessage = () => {
    const lastUserMessage = messages
      .slice()
      .reverse()
      .find(msg => msg.role === "user");

    if (lastUserMessage) {
      sendMessage(lastUserMessage.content);
    }
  };

  return (
    <div className={cn("w-full", isEmbedded ? "h-full" : "flex justify-center py-6")}>
      <div className={cn(
        "w-full bg-white overflow-hidden flex flex-col",
        isEmbedded ? "h-full rounded-none border-0" : "max-w-4xl rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)] h-[700px]"
      )}>
        {!isEmbedded && <div className="h-[3px] w-full bg-pr-orange" />}
        {/* Header */}
        <div className="px-6 py-4 bg-pr-gray-bg border-b border-pr-gray-light flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white border border-pr-orange-soft rounded-xl flex items-center justify-center">
              <Bot className="h-5 w-5 text-pr-orange-dark" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
                Assistant IA
              </div>
              <h3 className="font-dm-serif text-pr-black text-lg leading-none">Majora</h3>
              <p className="text-[11px] text-pr-gray-mid font-medium flex items-center gap-1.5 mt-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pr-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pr-orange"></span>
                </span>
                En ligne
              </p>
            </div>
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
                msg.role === "user" ? "bg-pr-gray-bg border border-pr-gray-light" : "bg-pr-orange-pale border border-pr-orange-soft"
              )}>
                {msg.role === "user" ? <User className="h-4 w-4 text-pr-gray-dark" /> : <Bot className="h-4 w-4 text-pr-orange-dark" />}
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
                <Bot className="h-4 w-4 text-pr-orange-dark" />
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
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mask-fade-right">
            {SUGGESTIONS.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => handleSuggestion(suggestion)}
                disabled={loading}
                className="whitespace-nowrap px-3.5 py-2 bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-full text-[12px] font-medium transition-colors flex items-center gap-2"
              >
                <Sparkles className="h-3 w-3 text-pr-orange" />
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Posez votre question sur les maths, la géopolitique, l'anglais…"
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
            Majora peut faire des erreurs. Vérifiez toujours les informations importantes.
          </p>
        </div>
      </div>
    </div>
  );
};
