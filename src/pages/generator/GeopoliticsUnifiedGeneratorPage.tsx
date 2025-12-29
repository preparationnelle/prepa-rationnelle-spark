import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, TrendingUp, Loader2, Sparkles, FileText, Info, BookOpenCheck, ChevronRight, Target, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CaseStudyDisplay } from '@/components/generator/CaseStudyDisplay';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';
import { HookEvaluator } from '@/components/generator/HookEvaluator';
import { Link } from 'react-router-dom';

const GeopoliticsUnifiedGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'hook' | 'geopolitics' | 'case-study' | 'definitions' | 'paradoxes' | 'plan'>('geopolitics');
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

  const toolsConfig = [
    {
      id: 'hook',
      label: 'Accroche',
      icon: Target,
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      id: 'geopolitics',
      label: 'Contenu géopolitique',
      icon: Globe,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'case-study',
      label: 'Études de cas',
      icon: TrendingUp,
      gradient: 'from-orange-600 to-orange-700'
    },
    {
      id: 'definitions',
      label: 'Définitions',
      icon: BookOpenCheck,
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      id: 'paradoxes',
      label: 'Paradoxes',
      icon: ListChecks,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'plan',
      label: 'Plan',
      icon: ListChecks,
      gradient: 'from-orange-600 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Orbs Background - Orange theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/generator" className="hover:text-orange-600 transition-colors">
              Générateurs IA
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-medium">
              Générateur <span className="text-orange-600">Géopolitique</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 rounded-full border border-blue-200">
              <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-blue-700 font-semibold">Outils IA Avancés</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="block text-gray-900">Générateur</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Géopolitique
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Outils d'intelligence artificielle pour créer du contenu géopolitique
            <span className="font-bold text-blue-600"> structuré</span>
          </p>
        </div>

        {/* Tool Selector - Modern Pills */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-3 border border-orange-100 shadow-2xl max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {toolsConfig.map((tool) => {
                const Icon = tool.icon;
                const isActive = selectedTool === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id as any)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${isActive
                      ? `bg-gradient-to-r ${tool.gradient} text-white shadow-xl scale-105`
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg hover:scale-105'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="whitespace-nowrap">{tool.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          <Tabs value={selectedTool} onValueChange={(value: any) => setSelectedTool(value)} className="w-full">

            {/* Hook Evaluator Tab */}
            <TabsContent value="hook" className="space-y-6">
              <HookEvaluator />
            </TabsContent>

            {/* Case Study Tab */}
            <TabsContent value="case-study" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl overflow-hidden">
                <CardHeader className="pb-6 bg-gradient-to-r from-orange-50/50 to-transparent">
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Générateur d'Études de Cas</div>
                      <div className="text-gray-600 text-base font-normal mt-1">
                        Transformez vos articles d'actualité en études de cas géopolitiques
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <Label htmlFor="article" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        📄 Article (URL ou texte)
                      </Label>
                      <Textarea
                        id="article"
                        placeholder="Collez une URL d'article ou le texte complet..."
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                        className="min-h-[140px] resize-none border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 bg-white rounded-2xl text-base"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="notion" className="text-base font-semibold text-gray-900">
                        Notion/Thème géopolitique
                      </Label>
                      <Input
                        id="notion"
                        placeholder="Ex: Rivalités de puissances, Frontières, Ressources énergétiques..."
                        value={notion}
                        onChange={(e) => setNotion(e.target.value)}
                        className="border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 bg-white rounded-2xl h-12 text-base"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !article.trim() || !notion.trim()}
                        className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-full h-14 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Génération en cours...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-5 w-5 mr-2" />
                            Générer le thème central
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={loadCaseStudyExample}
                        variant="outline"
                        className="px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-14 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Exemple
                      </Button>
                    </div>
                  </div>

                  <Alert className="border-2 border-orange-200 bg-orange-50/50 rounded-2xl backdrop-blur-sm">
                    <Info className="h-5 w-5 text-orange-600" />
                    <AlertDescription className="text-orange-800 text-base">
                      <span className="font-semibold">💡 Astuce :</span> Entrez l'URL d'un article d'actualité ou collez directement le texte, puis précisez le thème géopolitique à analyser. L'IA générera un thème central structuré avec contexte, chiffres clés, sujets de dissertation et analyse des acteurs.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Geopolitics Content Tab */}
            <TabsContent value="geopolitics" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl overflow-hidden">
                <CardHeader className="pb-6 bg-gradient-to-r from-orange-50/50 to-transparent">
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Générateur de Géopolitique</div>
                      <div className="text-gray-600 text-base font-normal mt-1">
                        Transformez vos cours en contenu pédagogique structuré
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <Label htmlFor="courseContent" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        🌍 Déposez le contenu (Texte, PDF ou lien d'article)
                      </Label>
                      <Textarea
                        id="courseContent"
                        placeholder="Collez le texte de votre cours de géopolitique..."
                        value={courseContent}
                        onChange={(e) => setCourseContent(e.target.value)}
                        className="min-h-[220px] resize-none border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 bg-white rounded-2xl text-base"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !courseContent.trim()}
                        className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-full h-14 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Génération en cours...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-5 w-5 mr-2" />
                            Analyser et générer
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={loadGeopoliticsExample}
                        variant="outline"
                        className="px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-14 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Exemple
                      </Button>
                    </div>
                  </div>

                  <Alert className="border-2 border-orange-200 bg-orange-50/50 rounded-2xl backdrop-blur-sm">
                    <Info className="h-5 w-5 text-orange-600" />
                    <AlertDescription className="text-orange-800 text-base">
                      <span className="font-semibold">💡 Astuce :</span> Entrez le contenu de votre cours de géopolitique. Le système générera automatiquement : fiches structurées, flashcards, sujets de dissertation et actualités connexes.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Definitions Tab */}
            <TabsContent value="definitions" className="space-y-6">
              <DefinitionTraining language="fr" />
            </TabsContent>

            {/* Paradoxes Tab */}
            <TabsContent value="paradoxes" className="space-y-6">
              <GeopoliticsParadoxGenerator />
            </TabsContent>

            {/* Plan Tab */}
            <TabsContent value="plan" className="space-y-6">
              <PlanGenerator />
            </TabsContent>
          </Tabs>

          {/* Generated Content Display */}
          {generatedContent && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {selectedTool === 'case-study' ? (
                <CaseStudyDisplay
                  caseStudy={generatedContent}
                  wordCount={wordCount}
                  language="fr"
                />
              ) : (
                <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-orange-50/50 to-transparent">
                    <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      Contenu Géopolitique Généré
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="prose max-w-none prose-orange" dangerouslySetInnerHTML={{ __html: generatedContent }} />
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default GeopoliticsUnifiedGeneratorPage;