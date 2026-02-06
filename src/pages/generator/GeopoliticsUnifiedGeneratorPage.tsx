import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe, Loader2, Sparkles, FileText, BookOpenCheck, ChevronRight, Target, ListChecks, Brain, CheckCircle2, Edit3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';
import { HookEvaluator } from '@/components/generator/HookEvaluator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';
import { Link } from 'react-router-dom';
import { geopoliticsSubjects, subjectsByCategory, getCategoryName } from '@/data/geopolitics-subjects';

const GeopoliticsUnifiedGeneratorPage = () => {
  // Subject Selection State
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectValidated, setIsSubjectValidated] = useState(false);

  // Tab and Content State
  const [selectedTool, setSelectedTool] = useState<'hook' | 'definitions' | 'paradoxes' | 'problematique' | 'plan' | 'geopolitics'>('hook');
  const [courseContent, setCourseContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const handleValidateSubject = () => {
    if (!selectedSubject.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir ou sélectionner un sujet",
        variant: "destructive",
      });
      return;
    }
    setIsSubjectValidated(true);
    toast({
      title: "Sujet validé",
      description: "Vous pouvez maintenant travailler sur chaque étape.",
    });
  };

  const handleEditSubject = () => {
    setIsSubjectValidated(false);
  };

  const loadGeopoliticsExample = () => {
    setCourseContent("La géopolitique des énergies renouvelables\n\nIntroduction:\nLes énergies renouvelables transforment les équilibres géopolitiques mondiaux...");
  };

  const handleGenerate = async () => {
    if (!courseContent.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir le contenu du cours",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('process-geopolitics-pdf', {
        body: {
          pdfContent: courseContent.trim(),
          userId: currentUser?.id || null,
        }
      });

      if (error) {
        console.error('Error generating content:', error);
        toast({
          title: "Erreur",
          description: error.message || "Erreur lors de la génération",
          variant: "destructive",
        });
        return;
      }

      setGeneratedContent(data.content);
      setWordCount(data.wordCount || 0);
      toast({
        title: "Succès",
        description: "Contenu géopolitique généré avec succès !",
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
    { id: 'hook', label: 'Accroche', icon: Target },
    { id: 'definitions', label: 'Définitions', icon: BookOpenCheck },
    { id: 'paradoxes', label: 'Paradoxes', icon: ListChecks },
    { id: 'problematique', label: 'Problématique', icon: Brain },
    { id: 'plan', label: 'Plan', icon: ListChecks },
    { id: 'geopolitics', label: 'Contenu géopolitique', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Background - Mesh Gradient & Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-50/80 to-transparent"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Sticky Breadcrumb & Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                <Globe className="h-4 w-4" /> Spark
              </Link>
              <ChevronRight className="h-3 w-3 opacity-50" />
              <Link to="/generator" className="hover:text-orange-600 transition-colors">Générateurs</Link>
              <ChevronRight className="h-3 w-3 opacity-50" />
              <span className="text-slate-900 font-medium px-2 py-1 bg-orange-50 text-orange-700 rounded-md text-xs uppercase tracking-wide">Géopolitique</span>
            </div>

            {/* Context Widget in Navbar if validated */}
            {isSubjectValidated && (
              <div className="hidden md:flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Sujet en cours :</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700 truncate max-w-[300px]" title={selectedSubject}>{selectedSubject}</span>
                </div>
                <Button onClick={handleEditSubject} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-full">
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white border border-orange-100 rounded-2xl shadow-xl shadow-orange-500/10 mb-4 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-3 rounded-xl">
              <Globe className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Générateur <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Géopolitique</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Une suite d'outils intelligents pour structurer votre pensée, analyser vos sujets et perfectionner vos dissertations.
          </p>
        </div>

        {/* Subject Selection Zone */}
        {!isSubjectValidated ? (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <Card className="border-0 shadow-2xl shadow-orange-500/10 bg-white/80 backdrop-blur-sm overflow-hidden ring-1 ring-slate-200/50">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div>
              <CardHeader className="pt-8 pb-2 text-center">
                <CardTitle className="text-2xl font-bold text-slate-900">Définissez votre sujet</CardTitle>
                <p className="text-slate-500">Pour commencer, choisissez ou saisissez le sujet de votre dissertation.</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur"></div>
                    <div className="relative flex bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
                      <Input
                        placeholder="Saisissez votre sujet de dissertation..."
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="flex-1 border-0 bg-transparent py-4 px-5 text-lg font-medium placeholder:text-slate-300 focus-visible:ring-0 rounded-xl h-auto"
                      />
                      <div className="pr-2 flex items-center">
                        <Select onValueChange={(value) => setSelectedSubject(value)}>
                          <SelectTrigger className="border-0 shadow-none bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium w-auto gap-2 px-4 py-2 h-auto rounded-lg transition-colors">
                            <BookOpenCheck className="h-4 w-4" />
                            <span>Suggestions</span>
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px] border-slate-100 shadow-xl">
                            {(Object.keys(subjectsByCategory) as Array<keyof typeof subjectsByCategory>).map((category) => (
                              <SelectGroup key={category}>
                                <SelectLabel className="text-xs uppercase tracking-wider text-slate-400 font-bold px-3 py-2 mt-2">{getCategoryName(category)}</SelectLabel>
                                {subjectsByCategory[category].map((subj) => (
                                  <SelectItem key={subj} value={subj} className="text-sm py-2 text-slate-700 cursor-pointer focus:bg-orange-50 focus:text-orange-700">
                                    {subj}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleValidateSubject}
                  disabled={!selectedSubject.trim()}
                  className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg font-semibold rounded-xl shadow-lg shadow-slate-900/20 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Sparkles className="h-5 w-5 mr-2 text-orange-400" />
                  Commencer l'analyse
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Main Workflow Zone */
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Tabs value={selectedTool} onValueChange={(value) => setSelectedTool(value as any)} className="w-full space-y-8">
              <div className="flex justify-center">
                <TabsList className="h-auto p-1.5 bg-white/60 backdrop-blur-md border border-white/40 shadow-lg shadow-slate-200/40 rounded-2xl flex flex-wrap justify-center gap-1 md:gap-2">
                  {toolsConfig.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = selectedTool === tool.id;
                    return (
                      <TabsTrigger
                        key={tool.id}
                        value={tool.id}
                        className={`
                          relative px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-2.5 outline-none ring-0
                          ${isActive
                            ? 'bg-white text-orange-600 shadow-md ring-1 ring-black/5 scale-[1.02] font-semibold'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                          }
                        `}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
                        <span className="text-sm">{tool.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></span>
                        )}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <div className="max-w-5xl mx-auto min-h-[500px]">
                {/* Hook Evaluator Tab */}
                <TabsContent value="hook" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <HookEvaluator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                {/* Definitions Tab */}
                <TabsContent value="definitions" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <DefinitionTraining language="fr" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                {/* Paradoxes Tab */}
                <TabsContent value="paradoxes" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <GeopoliticsParadoxGenerator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                {/* Problematique Tab */}
                <TabsContent value="problematique" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <ProblematiquesGenerator mode="geopolitics" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                {/* Plan Tab */}
                <TabsContent value="plan" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <PlanGenerator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                {/* Geopolitics Content Tab */}
                <TabsContent value="geopolitics" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <Card className="border-0 shadow-xl shadow-slate-200/60 bg-white overflow-hidden ring-1 ring-slate-100">
                      <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-50/50 pb-8 pt-8">
                        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                          <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
                            <Globe className="h-6 w-6" />
                          </div>
                          Générateur de Contenu
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 space-y-8">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <Label htmlFor="courseContent" className="text-base font-semibold text-slate-900 flex items-center gap-2">
                              Contenu de référence <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Optionnel</span>
                            </Label>
                            <Textarea
                              id="courseContent"
                              placeholder="Collez ici des éléments de cours, des articles ou des notes pour guider la génération..."
                              value={courseContent}
                              onChange={(e) => setCourseContent(e.target.value)}
                              className="min-h-[220px] resize-none border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-orange-500/20 rounded-xl text-base shadow-sm leading-relaxed p-4"
                            />
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                              onClick={handleGenerate}
                              disabled={isGenerating || !courseContent.trim()}
                              className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl h-14 text-lg shadow-lg shadow-orange-500/20 transition-all duration-300"
                            >
                              {isGenerating ? (
                                <>
                                  <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                                  Analyse et Rédaction...
                                </>
                              ) : (
                                <>
                                  <Sparkles className="h-5 w-5 mr-3" />
                                  Générer le contenu
                                </>
                              )}
                            </Button>

                            <Button
                              onClick={loadGeopoliticsExample}
                              variant="outline"
                              className="px-8 border-slate-200 text-slate-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 rounded-xl h-14 font-medium"
                            >
                              Exemple
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Generated Content Display */}
                    {generatedContent && (
                      <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <Card className="border-0 shadow-2xl shadow-slate-200/50 bg-white overflow-hidden ring-1 ring-slate-100/50">
                          <CardHeader className="bg-slate-50/80 border-b border-slate-100/80 pb-6">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-900">
                                <FileText className="h-5 w-5 text-orange-500" />
                                Résultat généré
                              </CardTitle>
                              <div className="text-sm text-slate-400 font-medium">
                                {wordCount > 0 ? `${wordCount} mots` : ''}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-8 sm:p-10">
                            <div className="prose prose-lg max-w-none prose-orange prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600" dangerouslySetInnerHTML={{ __html: generatedContent }} />
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
};

export default GeopoliticsUnifiedGeneratorPage;