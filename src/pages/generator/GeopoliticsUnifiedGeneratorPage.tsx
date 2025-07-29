import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe, TrendingUp, Loader2, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CaseStudyDisplay } from '@/components/generator/CaseStudyDisplay';

const GeopoliticsUnifiedGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'geopolitics' | 'case-study'>('geopolitics');
  const [article, setArticle] = useState('');
  const [notion, setNotion] = useState('');
  const [courseContent, setCourseContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const loadCaseStudyExample = () => {
    setArticle("https://www.lemonde.fr/international/article/2024/01/15/tensions-en-mer-de-chine-meridionale_6210234_3210.html");
    setNotion("Rivalités de puissances et espaces maritimes");
  };

  const loadGeopoliticsExample = () => {
    setCourseContent("La géopolitique des énergies renouvelables\n\nIntroduction:\nLes énergies renouvelables transforment les équilibres géopolitiques mondiaux...");
  };

  const handleGenerate = async () => {
    if (selectedTool === 'case-study') {
      if (!article.trim() || !notion.trim()) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs pour l'étude de cas",
          variant: "destructive",
        });
        return;
      }
    } else {
      if (!courseContent.trim()) {
        toast({
          title: "Erreur", 
          description: "Veuillez saisir le contenu du cours",
          variant: "destructive",
        });
        return;
      }
    }

    setIsGenerating(true);

    try {
      const functionName = selectedTool === 'case-study' ? 'generate-case-study' : 'process-geopolitics-pdf';
      const body = selectedTool === 'case-study' 
        ? {
            article: article.trim(),
            notion: notion.trim(),
            userId: currentUser?.id || null,
            language: 'fr',
          }
        : {
            pdfContent: courseContent.trim(),
            userId: currentUser?.id || null,
          };

      const { data, error } = await supabase.functions.invoke(functionName, { body });

      if (error) {
        console.error('Error generating content:', error);
        toast({
          title: "Erreur",
          description: error.message || "Erreur lors de la génération",
          variant: "destructive",
        });
        return;
      }

      setGeneratedContent(selectedTool === 'case-study' ? data.caseStudy : data.content);
      setWordCount(selectedTool === 'case-study' ? data.wordCount : data.wordCount || 0);
      toast({
        title: "Succès",
        description: `${selectedTool === 'case-study' ? 'Étude de cas' : 'Contenu géopolitique'} généré avec succès !`,
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur Géopolitique
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Outils d'intelligence artificielle pour créer du contenu géopolitique structuré
        </p>
      </div>

      {/* Sélecteur d'outil */}
      <div className="mb-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Choisissez votre outil</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedTool} onValueChange={(value: 'geopolitics' | 'case-study') => setSelectedTool(value)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geopolitics">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4" />
                    <div>
                      <div className="font-medium">Contenu géopolitique complet</div>
                      <div className="text-sm text-gray-500">Cours structurés, sujets de dissertation, flashcards</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="case-study">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4" />
                    <div>
                      <div className="font-medium">Études de cas d'actualité</div>
                      <div className="text-sm text-gray-500">Transformez des articles en études de cas</div>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Interface conditionnelle */}
      <div className="space-y-8">
        {selectedTool === 'case-study' ? (
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Générateur d'Études de Cas</div>
                  <div className="text-blue-100 text-sm font-normal mt-1">
                    Transformez vos articles d'actualité en études de cas géopolitiques
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="article" className="text-base font-medium">
                    Article (URL ou texte)
                  </Label>
                  <Textarea
                    id="article"
                    placeholder="Collez une URL d'article ou le texte complet..."
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
                    className="min-h-[120px] resize-none border-2 hover:border-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notion" className="text-base font-medium">
                    Notion/Thème géopolitique
                  </Label>
                  <Input
                    id="notion"
                    placeholder="Ex: Rivalités de puissances, Frontières, Ressources énergétiques..."
                    value={notion}
                    onChange={(e) => setNotion(e.target.value)}
                    className="border-2 hover:border-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating || !article.trim() || !notion.trim()}
                    className="flex-1 h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 mr-3" />
                        Générer l'étude de cas
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={loadCaseStudyExample} 
                    variant="outline"
                    className="h-14 px-8 border-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Exemple
                  </Button>
                </div>
              </div>

              <Alert className="border-2 border-blue-200 bg-blue-50">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  Entrez l'URL d'un article d'actualité ou collez directement le texte, puis précisez le thème géopolitique à analyser. L'IA générera une étude de cas structurée avec contexte, chiffres clés, sujets de dissertation et analyse des acteurs.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        ) : (
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-teal-50/30">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Générateur de Géopolitique</div>
                  <div className="text-teal-100 text-sm font-normal mt-1">
                    Transformez vos cours en contenu pédagogique structuré
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="courseContent" className="text-base font-medium">
                    Contenu du cours (PDF ou texte)
                  </Label>
                  <Textarea
                    id="courseContent"
                    placeholder="Collez le texte de votre cours de géopolitique..."
                    value={courseContent}
                    onChange={(e) => setCourseContent(e.target.value)}
                    className="min-h-[200px] resize-none border-2 hover:border-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating || !courseContent.trim()}
                    className="flex-1 h-14 text-lg bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 mr-3" />
                        Analyser et générer
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={loadGeopoliticsExample} 
                    variant="outline"
                    className="h-14 px-8 border-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Exemple
                  </Button>
                </div>
              </div>

              <Alert className="border-2 border-teal-200 bg-teal-50">
                <AlertCircle className="h-4 w-4 text-teal-600" />
                <AlertDescription className="text-teal-800">
                  Entrez le contenu de votre cours de géopolitique. Le système générera automatiquement : fiches structurées, flashcards, sujets de dissertation et actualités connexes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {generatedContent && (
          selectedTool === 'case-study' ? (
            <CaseStudyDisplay
              caseStudy={generatedContent}
              wordCount={wordCount}
              language="fr"
            />
          ) : (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Contenu Géopolitique Généré
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: generatedContent }} />
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default GeopoliticsUnifiedGeneratorPage; 