
import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Comment gérer le stress avant les concours ?",
  "Je me sens débordé, que faire ?",
  "Comment organiser ses révisions ?",
  "Faut-il faire des pauses ?",
];

export const PrepaChatbotGenerator: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis Majora, ton coach IA Prépa pour la motivation, la méthode et le bien-être ! Pose-moi toutes tes questions (gestion du stress, révisions, organisation, motivation...)."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(message: string) {
    setLoading(true);
    setMessages(msgs => [...msgs, { role: "user", content: message }]);
    setInput("");
    try {
      const response = await fetch(
        `${window.location.origin.replace("://", "s://functions.")}/chat-ai-assistant`, 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              // Specialist prepa context for major/misterprepa articles + benevolence
              {
                role: "system",
                content: `Tu es Majora, un assistant IA bienveillant dédié à la préparation des concours et au bien-être en prépa. Tes réponses sont brèves, empathiques et pratiques, inspirées des articles de Major-Prépa et Mister Prépa (sur la gestion du stress, méthodes de révision, motivation et pauses). Ajoute si possible :
- Un conseil méthodologique ou pratique issu de la littérature prépa.
- Si pertinent, une citation inspirante pour motiver l’étudiant ("Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", etc).
- Ne jamais juger, privilégier le soutien et la bienveillance.
N'invente pas de données, mais structure toujours ta réponse.`
              },
              ...messages.map(({ role, content }) => ({ role, content })),
              { role: "user", content: message }
            ]
          })
        }
      );
      const data = await response.json();
      setMessages(msgs =>
        [...msgs, { role: "assistant", content: data.text || "Désolé, je n'ai pas pu répondre pour le moment." }]
      );
    } catch (e) {
      setMessages(msgs => [
        ...msgs,
        { role: "assistant", content: "Je suis désolé, une erreur s'est produite." }
      ]);
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
    setInput(suggestion);
  };

  return (
    <div className="w-full flex justify-center py-3">
      <Card className="w-full max-w-2xl rounded-xl shadow-lg border-0 bg-gradient-to-br from-[#d9f7fa] via-[#f3f6fa] to-[#d5e7f7]">
        <CardHeader className="rounded-t-xl px-6 py-5 bg-gradient-to-r from-teal-500/70 via-sky-400/60 to-violet-300/50 border-b-0">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/30 rounded-lg">
              <Heart className="h-7 w-7 text-pink-600" />
            </span>
            <div>
              <CardTitle className="text-xl font-bold text-teal-900">Chatbot prépa – Conseils & Méthode</CardTitle>
              <CardDescription className="text-sky-900 mt-1 font-medium">
                Pose-moi tes questions : motivation, stress, bien-être, méthode&nbsp;!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col px-5 py-5 gap-4 min-h-[480px]">
          <div
            className="grow flex flex-col gap-2 h-[320px] overflow-y-auto scrollbar-thin pr-2 mb-2"
            style={{ maxHeight: 320 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "mb-1 flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-xs md:max-w-md rounded-lg px-4 py-2 whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-teal-200 text-teal-900"
                      : "bg-white text-gray-800 border border-gray-200"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {SUGGESTIONS.map((suggestion, i) => (
              <button
                key={i}
                type="button"
                className="bg-teal-100 text-teal-800 rounded-full text-xs px-3 py-1 hover:bg-teal-200 border border-teal-200 transition"
                onClick={() => handleSuggestion(suggestion)}
                tabIndex={-1}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex gap-2 mt-auto w-full">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Écris ta question ici..."
              className="flex-1 bg-white/80 border-0 shadow text-base"
              disabled={loading}
              autoFocus
            />
            <Button className="px-4" type="submit" disabled={loading || !input.trim()}>
              {loading ? "Envoi..." : <MessageSquare className="h-5 w-5" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
