
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useStreamingCaseStudy = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [finalCaseStudy, setFinalCaseStudy] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();

  const generateCaseStudy = async (
    article: string,
    notion: string,
    userId: string,
    language: 'fr' | 'en'
  ) => {
    if (!article.trim() || !notion.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez remplir tous les champs" : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setStreamingContent('');
    setFinalCaseStudy(null);
    setWordCount(0);

    try {
      const { data } = await supabase.functions.invoke('generate-case-study', {
        body: {
          article: article.trim(),
          notion: notion.trim(),
          userId: userId,
          language: language,
        },
      });

      // Handle streaming response
      if (data instanceof ReadableStream) {
        const reader = data.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const jsonData = JSON.parse(line.slice(6));
                
                if (jsonData.type === 'chunk') {
                  setStreamingContent(jsonData.fullContent);
                } else if (jsonData.type === 'complete') {
                  setFinalCaseStudy(jsonData.caseStudy);
                  setWordCount(jsonData.wordCount);
                  toast({
                    title: language === 'fr' ? "Succès" : "Success",
                    description: language === 'fr' ? "Étude de cas générée avec succès !" : "Case study generated successfully!",
                  });
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite" : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    streamingContent,
    finalCaseStudy,
    wordCount,
    generateCaseStudy,
  };
};
