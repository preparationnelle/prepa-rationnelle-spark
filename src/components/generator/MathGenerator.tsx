import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, Send, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { LatexRenderer } from "@/components/LatexRenderer";

type MathMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const SUGGESTIONS = [
  "Explique-moi le théorème des accroissements finis",
  "Comment appliquer le théorème de Rolle ?",
  "Qu'est-ce qu'une matrice diagonalisable ?",
  "Comment calculer une intégrale définie ?",
  "Explique-moi le développement limité de Taylor",
  "Quelles sont les propriétés des espaces vectoriels ?",
];

interface MathGeneratorProps {
  variant?: 'default' | 'embedded';
}

export const MathGenerator: React.FC<MathGeneratorProps> = ({ variant = 'default' }) => {
  const isEmbedded = variant === 'embedded';
  const [messages, setMessages] = useState<MathMessage[]>([
    {
      role: "assistant",
      content: "Bonjour ! 👋 Je suis votre assistant maths IA pour vous aider à comprendre le cours et vous entraîner.\n\n**Mon rôle :**\n• Expliquer clairement les théorèmes et concepts du programme Maths Approfondies\n• Vous aider à tester vos connaissances du cours\n• Vous proposer des exercices simples pour vous entraîner et vérifier votre compréhension\n\nPosez-moi vos questions sur les théorèmes mathématiques et je vous fournirai des réponses complètes avec les formules en LaTeX, les hypothèses nécessaires et des exemples détaillés. À la fin de chaque réponse, je vous proposerai un petit exercice d'entraînement pour tester votre compréhension !",
      timestamp: new Date()
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

  // Function to render content with LaTeX
  const renderContent = (content: string) => {
    // Split content by LaTeX delimiters - support multiple formats:
    // $$...$$ (block), $...$ (inline), \[...\] (block), \(...\) (inline)
    // Note: In JavaScript strings, \\ represents a single backslash
    const parts = content.split(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+\$|\\\([\s\S]*?\\\))/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // Check for block LaTeX ($$...$$)
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
        const latex = part.slice(2, -2).trim();
        return <LatexRenderer key={index} latex={latex} block={true} className="my-2" />;
      }
      // Check for block LaTeX (\[...\])
      else if (part.startsWith('\\[') && part.endsWith('\\]') && part.length > 4) {
        const latex = part.slice(2, -2).trim();
        return <LatexRenderer key={index} latex={latex} block={true} className="my-2" />;
      }
      // Check for inline LaTeX ($...$)
      else if (part.startsWith('$') && part.endsWith('$') && part.length > 2 && !part.includes('\n')) {
        const latex = part.slice(1, -1).trim();
        if (latex.length > 0 && !/^[a-zA-Z0-9]$/.test(latex)) {
          return <LatexRenderer key={index} latex={latex} inline={true} />;
        }
      }
      // Check for inline LaTeX (\(...\))
      else if (part.startsWith('\\(') && part.endsWith('\\)') && part.length > 4) {
        const latex = part.slice(2, -2).trim();
        if (latex.length > 0) {
          return <LatexRenderer key={index} latex={latex} inline={true} />;
        }
      }

      // Regular text - preserve line breaks and render markdown
      return part.split('\n').map((line, lineIndex) => {
        // Process markdown: **bold**, *italic*
        const processedLine = line
          .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
          .map((segment, segIndex) => {
            if (segment.startsWith('**') && segment.endsWith('**') && segment.length > 4) {
              return <strong key={`${index}-${lineIndex}-${segIndex}`}>{segment.slice(2, -2)}</strong>;
            } else if (segment.startsWith('*') && segment.endsWith('*') && segment.length > 2 && !segment.startsWith('**')) {
              return <em key={`${index}-${lineIndex}-${segIndex}`}>{segment.slice(1, -1)}</em>;
            }
            return segment;
          });

        return (
          <React.Fragment key={`${index}-${lineIndex}`}>
            {processedLine}
            {lineIndex < part.split('\n').length - 1 && <br />}
          </React.Fragment>
        );
      });
    }).filter(Boolean);
  };

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    // Add user message immediately
    const userMessage: MathMessage = {
      role: "user",
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      // Prepare messages for API (exclude the initial greeting)
      const apiMessages = messages
        .slice(1) // Remove the initial greeting
        .concat(userMessage)
        .map(({ role, content }) => ({ role, content }));

      console.log("Sending math question to AI:", message);

      const { data, error: supabaseError } = await supabase.functions.invoke('chat-ai-assistant', {
        body: {
          messages: apiMessages,
          systemPrompt: `Tu es un assistant maths expert spécialisé dans le programme de Maths Approfondies 1ère et 2ème année de prépa ECG. 

**BUT DE CET OUTIL :**
Cet outil a pour objectif d'aider les étudiants à :
1. **Comprendre le cours** : Expliquer clairement les théorèmes et concepts du programme
2. **S'entraîner** : Proposer des exercices simples pour pratiquer
3. **Tester leurs connaissances** : Vérifier leur compréhension du cours avant les examens
4. **Appliquer concrètement** : Mettre en pratique les notions avec des exercices adaptés

Tu dois donc adopter une approche pédagogique qui favorise l'apprentissage actif et l'entraînement pratique. Tu ne dois répondre qu'aux questions portant sur les notions enseignées dans ce programme spécifique.

**PROGRAMME COUVERT - MATHS APPROFONDIES :**

**1ère année :**
- Logique et raisonnement fondamentaux
- Ensembles et applications
- Sommes, produits et coefficients binomiaux
- Suites numériques
- Fonctions d'une variable réelle
- Dérivation (y compris théorème de Rolle et théorème des accroissements finis)
- Intégration sur un segment
- Polynômes
- Matrices et espaces vectoriels
- Algèbre bilinéaire
- Probabilités et conditionnement

**2ème année :**
- Compléments d'algèbre linéaire
- Endomorphismes et matrices avancées
- Fonctions multivariées et calcul différentiel
- Applications linéaires et structures vectorielles
- Optimisation multivariée avancée
- Comparaisons, négligeabilité, équivalence
- Convergences et approximations
- Séries numériques
- Développements limités et formule de Taylor
- Intégrales impropres et critères
- Espaces probabilisés et conditionnement avancé
- Variables aléatoires (discrètes et à densité)
- Théorèmes limites
- Estimation statistique

**INSTRUCTIONS DE FORMAT :**
1. Si la question porte sur une notion HORS de ce programme, réponds poliment que cette notion n'est pas au programme de Maths Approfondies
2. Pour les notions couvertes, donne le théorème complet avec toutes ses hypothèses
3. Fournis une démonstration claire et pédagogique qui aide à la COMPRÉHENSION du cours
4. Donne des exemples concrets tirés du programme pour faciliter l'apprentissage
5. Adopte un ton pédagogique et encourageant pour favoriser l'entraînement et la pratique
6. **FORMAT LATEX OBLIGATOIRE - IMPORTANT :**
   - Utilise UNIQUEMENT $formule$ pour les formules dans le texte (inline)
   - Utilise UNIQUEMENT $$formule$$ pour les formules sur leur propre ligne (block)
   - N'utilise JAMAIS \(...\) ou \[...\] - utilise SEULEMENT $ et $$
   - Chaque formule doit être sur une seule ligne
   - Évite les formules trop courtes (lettres seules)
   - Exemple : $A = A^T$ (pas \(A = A^T\))
6. Structure ta réponse clairement avec des sections
7. Sois précis sur les conditions d'application
8. **OBLIGATOIRE - EXERCICE D'ENTRAÎNEMENT ET TEST DE CONNAISSANCES :**
   - À la fin de chaque réponse, propose TOUJOURS un exercice très simple et court
   - **Objectif principal** : Permettre à l'étudiant de TESTER sa compréhension du cours et de S'ENTRAÎNER
   - L'exercice doit permettre à l'étudiant d'appliquer directement la notion expliquée pour vérifier qu'il a bien compris
   - Il doit être adapté au niveau prépa et au programme Maths Approfondies
   - Formate l'exercice avec un titre "**Exercice d'application :**" ou "**Petit exercice pour tester ta compréhension :**"
   - L'exercice doit être suffisamment simple pour encourager l'étudiant à répondre et continuer la discussion
   - Présente l'exercice comme un moyen de vérifier sa maîtrise du cours : "Pour vérifier que tu as bien compris..."
   - **INTERDICTION ABSOLUE :** Ne JAMAIS suggérer de "consulter des manuels", "ressources en ligne", "livres" ou autres références externes
   - Si l'étudiant veut approfondir, propose-lui plutôt un exercice supplémentaire ou une question de réflexion pour continuer à s'entraîner
   - L'exercice remplace TOUJOURS toute suggestion de ressources externes

**EXEMPLE DE FORMAT CORRECT :**
Le théorème des accroissements finis s'énonce ainsi :
Si $f$ est continue sur $[a, b]$ et dérivable sur $]a, b[$, alors :
$$\\exists c \\in ]a, b[ \\quad f(b) - f(a) = f'(c)(b - a)$$

**FORMAT INCORRECT À ÉVITER :**
Ne pas utiliser \(A = A^T\) mais plutôt $A = A^T$

**EXEMPLE D'EXERCICE À PROPOSER (TEST DE CONNAISSANCES) :**
Pour vérifier que tu as bien compris le théorème des accroissements finis, voici un petit exercice d'entraînement :

**Petit exercice pour tester ta compréhension :** Soit $f(x) = x^2$ sur l'intervalle $[1, 3]$. Trouve un réel $c$ dans $]1, 3[$ tel que $f(3) - f(1) = f'(c)(3 - 1)$.

Cet exercice te permettra de vérifier que tu maîtrises bien l'application du théorème.

**CE QU'IL NE FAUT JAMAIS FAIRE :**
❌ "Si tu souhaites approfondir, n'hésite pas à consulter tes manuels ou des ressources en ligne"
❌ "Pour plus de détails, je te conseille de regarder dans un livre d'algèbre linéaire"
❌ "Tu peux trouver plus d'informations dans des ressources externes"

**CE QU'IL FAUT FAIRE À LA PLACE :**
✅ Toujours terminer par un exercice d'application pour tester la compréhension du cours
✅ Présenter l'exercice comme un moyen de vérifier la maîtrise : "Pour vérifier que tu as bien compris..."
✅ Si l'étudiant veut approfondir, proposer un exercice supplémentaire ou une question plus avancée pour continuer l'entraînement
✅ Encourager l'interaction directe avec des exercices pratiques qui permettent de tester les connaissances
✅ Adopter un ton pédagogique qui valorise l'entraînement et la pratique comme moyen d'apprentissage

Utilise les notations mathématiques standard et assure-toi que toutes les formules sont en LaTeX valide avec les délimiteurs $ et $$ uniquement.`
        }
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

      const assistantMessage: MathMessage = {
        role: "assistant",
        content: data.text || "Désolé, je n'ai pas pu générer une réponse mathématique.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (err) {
      console.error("Error sending math message:", err);
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue s'est produite";
      setError(errorMessage);

      // Add error message to chat
      const errorChatMessage: MathMessage = {
        role: "assistant",
        content: `Désolé, une erreur s'est produite : ${errorMessage}. Veuillez réessayer dans quelques instants.`,
        timestamp: new Date()
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
    <div className={cn("w-full", isEmbedded ? "h-full" : "flex justify-center py-8")}>
      <Card className={cn(
        "w-full flex flex-col",
        isEmbedded ? "h-full border-0 shadow-none rounded-none" : "max-w-4xl rounded-2xl shadow-2xl border border-gray-100 bg-white"
      )}>
        <CardHeader className={cn(
          "bg-gradient-to-r from-orange-600 to-orange-500 border-b-0",
          isEmbedded ? "px-5 py-3 rounded-none" : "px-6 py-6 rounded-t-2xl"
        )}>
          <div className="flex items-center gap-3">
            <div className={cn(
              "bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm",
              isEmbedded ? "w-10 h-10" : "w-14 h-14 rounded-2xl"
            )}>
              <Calculator className={cn("text-white", isEmbedded ? "h-5 w-5" : "h-7 w-7")} />
            </div>
            <div className="flex-1">
              <CardTitle className={cn("font-bold text-white", isEmbedded ? "text-lg" : "text-2xl")}>Assistant Maths IA</CardTitle>
              {!isEmbedded && (
                <CardDescription className="text-white/90 mt-1 font-medium">
                  Théorèmes, démonstrations & exemples avec LaTeX
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className={cn("bg-gray-50/50 flex flex-col flex-1 overflow-hidden", isEmbedded ? "p-4" : "p-6")}>
          {/* Messages Area */}
          <div className="space-y-4 mb-6 flex-1 overflow-y-auto pr-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3 max-w-3xl",
                  message.role === "user" ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-md",
                  message.role === "user"
                    ? "bg-gradient-to-r from-orange-600 to-orange-500"
                    : "bg-orange-100"
                )}>
                  {message.role === "user" ? (
                    <span className="text-white text-sm font-bold">U</span>
                  ) : (
                    <Calculator className="h-5 w-5 text-orange-600" />
                  )}
                </div>
                <div className={cn(
                  "rounded-2xl px-5 py-4 max-w-2xl break-words shadow-lg",
                  message.role === "user"
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                    : "bg-white border border-gray-200 hover:border-orange-200 transition-colors"
                )}>
                  <div className="text-sm leading-relaxed">
                    {renderContent(message.content)}
                  </div>
                  <div className={cn(
                    "text-xs mt-3",
                    message.role === "user" ? "text-white/80" : "text-gray-500"
                  )}>
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex gap-3 max-w-3xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center shadow-md">
                  <Calculator className="h-5 w-5 text-orange-600" />
                </div>
                <div className="bg-white border border-gray-200 shadow-lg rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-4 w-4 animate-spin text-orange-600" />
                    <span className="text-sm text-gray-600">Génération de la réponse mathématique...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="flex gap-3 max-w-3xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center shadow-md">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 shadow-lg">
                  <div className="text-sm text-red-800 mb-3 font-medium">{error}</div>
                  <Button
                    onClick={retryLastMessage}
                    size="sm"
                    variant="outline"
                    className="text-red-600 border-red-300 hover:bg-red-100 hover:border-red-400 rounded-xl"
                  >
                    Réessayer
                  </Button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {!loading && messages.length <= 1 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Suggestions de questions :</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                {SUGGESTIONS.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestion(suggestion)}
                    className="whitespace-nowrap text-xs bg-white hover:bg-orange-50 border-orange-200 text-orange-700 hover:border-orange-400 rounded-xl transition-all duration-200"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSend} className="flex gap-3 mt-auto">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question mathématique..."
              disabled={loading}
              className="flex-1 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl shadow-sm"
            />
            <Button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
