
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Globe, Loader2, AlertCircle, Download, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { downloadAll } from '@/utils/downloadUtils';

// Import nouveaux composants d'affichage
import { FlashcardDisplay } from './FlashcardDisplay';
import { CourseDisplay } from './CourseDisplay';
import { DissertationTopicsDisplay } from './DissertationTopicsDisplay';
import { CurrentEventsDisplay } from './CurrentEventsDisplay';

interface GeopoliticsGeneratorProps {
  language: 'fr' | 'en';
}

interface GeneratedContent {
  structuredCourse: string;
  flashcards: string;
  dissertationTopics: string;
  currentEvents: string;
}

export const GeopoliticsGenerator = ({ language }: GeopoliticsGeneratorProps) => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const handleGenerate = async () => {
    if (!pdfUrl.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez entrer une URL de PDF ou du texte" : "Please enter a PDF URL or text",
        variant: "destructive",
      });
      return;
    }

    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Vous devez être connecté" : "You must be logged in",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('process-geopolitics-pdf', {
        body: {
          pdfUrl: pdfUrl.trim(),
          userId: currentUser.id,
          language: language,
        },
      });

      if (error) {
        console.error('Error processing PDF:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: error.message || (language === 'fr' ? "Erreur lors du traitement" : "Processing error"),
          variant: "destructive",
        });
        return;
      }

      setGeneratedContent(data);
      setPdfUrl('');
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Contenu généré avec succès !" : "Content generated successfully!",
      });

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

  const handleDownloadAll = async () => {
    if (!generatedContent) return;
    
    try {
      await downloadAll(
        generatedContent.structuredCourse,
        generatedContent.flashcards,
        generatedContent.dissertationTopics,
        generatedContent.currentEvents,
        language
      );
      
      toast({
        title: language === 'fr' ? "Téléchargement" : "Download",
        description: language === 'fr' ? "Tous les fichiers ont été téléchargés" : "All files have been downloaded",
      });
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Erreur lors du téléchargement" : "Download error",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-orange" />
        <CardHeader className="px-6 pt-5 pb-4 bg-pr-gray-bg border-b border-pr-gray-light">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-pr-orange-soft flex items-center justify-center">
              <Globe className="h-5 w-5 text-pr-orange-dark" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
                {language === 'fr' ? 'Géopolitique' : 'Geopolitics'}
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                {language === 'fr' ? 'Cours en contenu structuré' : 'Course generator'}
              </CardTitle>
              <div className="text-pr-gray-mid text-[13px] mt-1">
                {language === 'fr' ? 'Transformez vos cours en fiches, flashcards et sujets.' : 'Turn your courses into sheets, flashcards and topics.'}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-7 space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <label className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-orange-pale text-pr-orange-dark text-[11px] font-bold">
                  1
                </span>
                {language === 'fr' ? 'URL du PDF ou texte du cours' : 'PDF URL or course text'}
              </label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale px-2.5 py-1 rounded-full">
                {language === 'fr' ? 'Requis' : 'Required'}
              </span>
            </div>
            <Textarea
              placeholder={language === 'fr' ? 'URL du PDF (Google Drive, etc.) ou collez directement le texte du cours…' : 'PDF URL (Google Drive, etc.) or paste course text directly…'}
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className="min-h-[120px] resize-y border-pr-gray-light focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20 transition-colors rounded-xl text-[15px] leading-relaxed p-4 bg-white text-pr-black placeholder:text-pr-gray-mid"
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !pdfUrl.trim()}
                className="flex-1 h-12 text-[15px] bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {language === 'fr' ? 'Traitement en cours…' : 'Processing…'}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    {language === 'fr' ? 'Analyser et générer' : 'Analyze and generate'}
                  </>
                )}
              </Button>

              {generatedContent && (
                <Button
                  onClick={handleDownloadAll}
                  className="bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-xl h-12 px-5 font-medium transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'Tout télécharger' : 'Download all'}
                </Button>
              )}
            </div>
          </div>

          <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
            <AlertCircle className="h-4 w-4 text-pr-orange" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              {language === 'fr'
                ? <><strong className="text-pr-black">Comment ça marche :</strong> entrez l'URL d'un PDF public ou collez le texte de votre cours. Le système génèrera fiches structurées, flashcards, sujets de dissertation et actualités.</>
                : <><strong className="text-pr-black">How it works:</strong> enter the URL of a public PDF or paste your course text. The system will generate structured sheets, flashcards, dissertation topics and current events.</>
              }
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Affichage du contenu généré */}
      {generatedContent && (
        <div className="space-y-6">
          {/* Cours structuré */}
          <CourseDisplay 
            structuredCourse={generatedContent.structuredCourse}
            language={language}
          />
          
          {/* Flashcards */}
          <FlashcardDisplay 
            flashcards={generatedContent.flashcards}
            language={language}
          />
          
          {/* Sujets de dissertation */}
          <DissertationTopicsDisplay 
            dissertationTopics={generatedContent.dissertationTopics}
            language={language}
          />
          
          {/* Actualités */}
          <CurrentEventsDisplay 
            currentEvents={generatedContent.currentEvents}
            language={language}
          />
        </div>
      )}
    </div>
  );
};
