import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, TrendingUp, Loader2, Sparkles, AlertCircle, FileText, Info, BookOpenCheck, ChevronRight, Home, Target, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CaseStudyDisplay } from '@/components/generator/CaseStudyDisplay';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';
import { Link } from 'react-router-dom';

const GeopoliticsUnifiedGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'geopolitics' | 'case-study' | 'definitions' | 'paradoxes' | 'plan'>('geopolitics');
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
          description: "Veuillez remplir tous les champs pour le thème central",
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
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles only */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/generator" className="hover:text-foreground transition-colors">
              Générateurs IA
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">
              Générateur <span className="text-blue-600">Géopolitique</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl relative z-10">
        {/* Header Hero Section */}
        <div className="text-center mb-16">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">Générateur </span>
            <span className="text-blue-600">Géopolitique</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Outils d'intelligence artificielle pour créer du contenu géopolitique structuré
          </p>
        </div>

        {/* Sélecteur d'outil avec tabs horizontaux */}
        <div className="mb-8">
          <Card className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200">
            <CardContent className="p-6">
              <Tabs value={selectedTool} onValueChange={(value: 'geopolitics' | 'case-study' | 'definitions' | 'paradoxes' | 'plan') => setSelectedTool(value)} className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-2 h-auto min-h-[60px]">
                  <TabsTrigger 
                    value="geopolitics" 
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#111111] data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                  >
                    <Globe className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">Contenu géopolitique</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="case-study" 
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#111111] data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                  >
                    <TrendingUp className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">Études de cas</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="definitions" 
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#111111] data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                  >
                    <BookOpenCheck className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">Définitions</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="paradoxes" 
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#111111] data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                  >
                    <Target className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">Paradoxes</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="plan" 
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#111111] data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                  >
                    <ListChecks className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center leading-tight">Plan</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Interface conditionnelle */}
        <div className="space-y-8">
          <Tabs value={selectedTool} onValueChange={(value: 'geopolitics' | 'case-study' | 'definitions' | 'paradoxes' | 'plan') => setSelectedTool(value)} className="w-full">
            
            {/* Études de cas d'actualité */}
            <TabsContent value="case-study" className="space-y-6">
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-[#111111] text-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold">Générateur d'Études de Cas</div>
                      <div className="text-gray-600 text-sm font-normal mt-1">
                        Transformez vos articles d'actualité en études de cas géopolitiques
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="article" className="text-sm font-medium text-[#111111] flex items-center gap-2">
                        📄 Article (URL ou texte)
                      </Label>
                      <Textarea
                        id="article"
                        placeholder="Collez une URL d'article ou le texte complet..."
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                        className="min-h-[120px] resize-none border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-[#FAFAFA] rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notion" className="text-sm font-medium text-[#111111]">
                        Notion/Thème géopolitique
                      </Label>
                      <Input
                        id="notion"
                        placeholder="Ex: Rivalités de puissances, Frontières, Ressources énergétiques..."
                        value={notion}
                        onChange={(e) => setNotion(e.target.value)}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-[#FAFAFA] rounded-lg"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !article.trim() || !notion.trim()}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl h-12 transition-all duration-300 shadow-sm"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Génération en cours...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Générer le thème central
                          </>
                        )}
                      </Button>
                      
                      <Button 
                        onClick={loadCaseStudyExample} 
                        variant="outline"
                        className="px-6 border border-gray-300 bg-[#F5F5F5] text-[#111111] hover:bg-gray-100 rounded-xl h-12 transition-all duration-300"
                      >
                        Exemple
                      </Button>
                    </div>
                  </div>

                  <Alert className="border border-blue-200 bg-blue-50 rounded-lg">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800 text-sm italic">
                      Entrez l'URL d'un article d'actualité ou collez directement le texte, puis précisez le thème géopolitique à analyser. L'IA générera un thème central structuré avec contexte, chiffres clés, sujets de dissertation et analyse des acteurs.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contenu géopolitique complet */}
            <TabsContent value="geopolitics" className="space-y-6">
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-[#111111] text-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold">Générateur de Géopolitique</div>
                      <div className="text-gray-600 text-sm font-normal mt-1">
                        Transformez vos cours en contenu pédagogique structuré
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="courseContent" className="text-sm font-medium text-[#111111] flex items-center gap-2">
                        🌍 Déposez le contenu (Texte, PDF ou lien d'article)
                      </Label>
                      <Textarea
                        id="courseContent"
                        placeholder="Collez le texte de votre cours de géopolitique..."
                        value={courseContent}
                        onChange={(e) => setCourseContent(e.target.value)}
                        className="min-h-[200px] resize-none border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-[#FAFAFA] rounded-lg"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !courseContent.trim()}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl h-12 transition-all duration-300 shadow-sm"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Génération en cours...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Analyser et générer
                          </>
                        )}
                      </Button>
                      
                      <Button 
                        onClick={loadGeopoliticsExample} 
                        variant="outline"
                        className="px-6 border border-gray-300 bg-[#F5F5F5] text-[#111111] hover:bg-gray-100 rounded-xl h-12 transition-all duration-300"
                      >
                        Exemple
                      </Button>
                    </div>
                  </div>

                  <Alert className="border border-blue-200 bg-blue-50 rounded-lg">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800 text-sm italic">
                      Entrez le contenu de votre cours de géopolitique. Le système générera automatiquement : fiches structurées, flashcards, sujets de dissertation et actualités connexes.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Entraînement aux définitions */}
            <TabsContent value="definitions" className="space-y-6">
              <DefinitionTraining language="fr" />
            </TabsContent>

            {/* Générateur de Paradoxes Géopolitiques */}
            <TabsContent value="paradoxes" className="space-y-6">
              <GeopoliticsParadoxGenerator />
            </TabsContent>

            {/* Générateur de Plan Universel */}
            <TabsContent value="plan" className="space-y-6">
              <PlanGenerator />
            </TabsContent>
          </Tabs>

          {/* Affichage du contenu généré */}
          {generatedContent && (
            <div className="space-y-6">
              {selectedTool === 'case-study' ? (
                <CaseStudyDisplay
                  caseStudy={generatedContent}
                  wordCount={wordCount}
                  language="fr"
                />
              ) : (
                <Card className="bg-white shadow-sm border border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#111111]">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Contenu Géopolitique Généré
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: generatedContent }} />
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeopoliticsUnifiedGeneratorPage; 