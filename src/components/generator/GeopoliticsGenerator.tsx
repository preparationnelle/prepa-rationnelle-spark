
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, BookOpen, Loader2, AlertCircle, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
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
    <div className="space-y-6">
      {/* Section de génération */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="h-6 w-6 text-blue-600" />
            {language === 'fr' ? 'Générateur de Géopolitique' : 'Geopolitics Generator'}
          </CardTitle>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? "Transformez vos cours en contenu pédagogique structuré : fiches, flashcards, sujets et actualités"
              : "Transform your courses into structured educational content: sheets, flashcards, topics and current events"
            }
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Textarea
              placeholder={language === 'fr' ? 'URL du PDF (Google Drive, etc.) ou collez directement le texte du cours...' : 'PDF URL (Google Drive, etc.) or paste course text directly...'}
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className="flex-1 min-h-[120px] resize-none"
            />
            <div className="flex flex-col gap-2">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !pdfUrl.trim()}
                className="h-auto py-3 px-6"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {language === 'fr' ? 'Traitement...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    {language === 'fr' ? 'Analyser' : 'Analyze'}
                  </>
                )}
              </Button>
              
              {generatedContent && (
                <Button 
                  onClick={handleDownloadAll} 
                  variant="outline"
                  className="h-auto py-3 px-6"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {language === 'fr' ? 'Tout télécharger' : 'Download All'}
                </Button>
              )}
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {language === 'fr' 
                ? "Entrez l'URL d'un PDF accessible publiquement ou collez directement le texte de votre cours. Le système génèrera automatiquement un contenu pédagogique complet."
                : "Enter the URL of a publicly accessible PDF or paste your course text directly. The system will automatically generate complete educational content."
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
