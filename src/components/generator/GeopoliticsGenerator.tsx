
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, BookOpen, Calendar, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

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
        description: language === 'fr' ? "Veuillez entrer une URL de PDF" : "Please enter a PDF URL",
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
          description: language === 'fr' ? "Erreur lors du traitement du PDF" : "Error processing PDF",
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

  const downloadFlashcards = () => {
    if (!generatedContent?.flashcards) return;
    
    const blob = new Blob([generatedContent.flashcards], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards-geopolitique.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {language === 'fr' ? 'Générateur de géopolitique' : 'Geopolitics Generator'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder={language === 'fr' ? 'URL du PDF (Google Drive, etc.)' : 'PDF URL (Google Drive, etc.)'}
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleGenerate} disabled={isGenerating || !pdfUrl.trim()}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {language === 'fr' ? 'Traitement...' : 'Processing...'}
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  {language === 'fr' ? 'Analyser le PDF' : 'Analyze PDF'}
                </>
              )}
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            {language === 'fr' 
              ? "Entrez l'URL d'un PDF de cours de géopolitique. Le système génèrera automatiquement : un cours structuré, des flashcards, des sujets de dissertation et des actualités liées."
              : "Enter the URL of a geopolitics course PDF. The system will automatically generate: a structured course, flashcards, dissertation topics and related current events."
            }
          </div>
        </CardContent>
      </Card>

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'fr' ? 'Contenu généré' : 'Generated Content'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="course" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="course">
                  <FileText className="h-4 w-4 mr-1" />
                  {language === 'fr' ? 'Cours' : 'Course'}
                </TabsTrigger>
                <TabsTrigger value="flashcards">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {language === 'fr' ? 'Flashcards' : 'Flashcards'}
                </TabsTrigger>
                <TabsTrigger value="topics">
                  <FileText className="h-4 w-4 mr-1" />
                  {language === 'fr' ? 'Sujets' : 'Topics'}
                </TabsTrigger>
                <TabsTrigger value="news">
                  <Calendar className="h-4 w-4 mr-1" />
                  {language === 'fr' ? 'Actualités' : 'News'}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="course" className="mt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {language === 'fr' ? 'Cours structuré' : 'Structured Course'}
                  </h3>
                  <Textarea
                    value={generatedContent.structuredCourse}
                    readOnly
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
              </TabsContent>

              <TabsContent value="flashcards" className="mt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">
                      {language === 'fr' ? 'Flashcards (format Anki)' : 'Flashcards (Anki format)'}
                    </h3>
                    <Button onClick={downloadFlashcards} size="sm">
                      <Upload className="h-4 w-4 mr-1" />
                      {language === 'fr' ? 'Télécharger CSV' : 'Download CSV'}
                    </Button>
                  </div>
                  <Textarea
                    value={generatedContent.flashcards}
                    readOnly
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
              </TabsContent>

              <TabsContent value="topics" className="mt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {language === 'fr' ? 'Sujets de dissertation' : 'Dissertation Topics'}
                  </h3>
                  <Textarea
                    value={generatedContent.dissertationTopics}
                    readOnly
                    className="min-h-[400px]"
                  />
                </div>
              </TabsContent>

              <TabsContent value="news" className="mt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {language === 'fr' ? 'Actualités récentes' : 'Recent News'}
                  </h3>
                  <Textarea
                    value={generatedContent.currentEvents}
                    readOnly
                    className="min-h-[400px]"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
