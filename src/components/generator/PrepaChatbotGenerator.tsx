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
        "w-full bg-white/80 backdrop-blur-xl border-white/50 overflow-hidden flex flex-col",
        isEmbedded ? "h-full rounded-none shadow-none border-0" : "max-w-4xl rounded-3xl shadow-2xl border h-[700px]"
      )}>
        {/* Header */}
        <div className="px-6 py-4 bg-white/50 border-b border-gray-100 flex items-center justify-between backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Majora AI</h3>
              <p className="text-xs text-teal-600 font-medium flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                En ligne
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white">


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
                msg.role === "user" ? "bg-gray-100" : "bg-gradient-to-br from-teal-400 to-emerald-500"
              )}>
                {msg.role === "user" ? <User className="h-5 w-5 text-gray-500" /> : <Bot className="h-5 w-5 text-white" />}
              </div>

              <div className={cn(
                "px-5 py-3 rounded-2xl shadow-sm text-sm sm:text-base leading-relaxed whitespace-pre-line",
                msg.role === "user"
                  ? "bg-gray-900 text-white rounded-br-sm"
                  : "bg-white border border-gray-100 text-gray-800 rounded-bl-sm"
              )}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-3 max-w-[85%] mr-auto">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mask-fade-right">
            {SUGGESTIONS.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => handleSuggestion(suggestion)}
                disabled={loading}
                className="whitespace-nowrap px-4 py-2 bg-gray-50 hover:bg-teal-50 text-gray-600 hover:text-teal-700 rounded-full text-xs font-medium border border-gray-200 hover:border-teal-200 transition-colors flex items-center gap-2"
              >
                <Sparkles className="h-3 w-3 text-teal-500" />
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Posez votre question sur les maths, la géopolitique, l'anglais..."
              className="pr-12 py-6 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-teal-500/20 transition-all text-base shadow-inner"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className={cn(
                "absolute right-2 h-10 w-10 rounded-full p-0 transition-all",
                input.trim() ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20" : "bg-gray-200 text-gray-400"
              )}
            >
              <Send className="h-5 w-5 ml-0.5" />
            </Button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-3">
            Majora peut faire des erreurs. Vérifiez toujours les informations importantes.
          </p>
        </div>
      </div>
    </div>
  );
};
