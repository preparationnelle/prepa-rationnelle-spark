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
} from '@/components/ui/select';
import {
  Globe,
  Loader2,
  Sparkles,
  FileText,
  BookOpenCheck,
  ChevronRight,
  Target,
  ListChecks,
  Brain,
  CheckCircle2,
  Edit3,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';
import { HookEvaluator } from '@/components/generator/HookEvaluator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';
import { Link } from 'react-router-dom';
import { subjectsByCategory, getCategoryName } from '@/data/geopolitics-subjects';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const GeopoliticsUnifiedGeneratorPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectValidated, setIsSubjectValidated] = useState(false);

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
        title: 'Erreur',
        description: 'Veuillez saisir ou sélectionner un sujet',
        variant: 'destructive',
      });
      return;
    }
    setIsSubjectValidated(true);
    toast({
      title: 'Sujet validé',
      description: 'Vous pouvez maintenant travailler sur chaque étape.',
    });
  };

  const handleEditSubject = () => {
    setIsSubjectValidated(false);
  };

  const loadGeopoliticsExample = () => {
    setCourseContent(
      "La géopolitique des énergies renouvelables\n\nIntroduction:\nLes énergies renouvelables transforment les équilibres géopolitiques mondiaux..."
    );
  };

  const handleGenerate = async () => {
    if (!courseContent.trim()) {
      toast({
        title: 'Erreur',
        description: 'Veuillez saisir le contenu du cours',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('process-geopolitics-pdf', {
        body: {
          pdfContent: courseContent.trim(),
          userId: currentUser?.id || null,
        },
      });

      if (error) {
        console.error('Error generating content:', error);
        toast({
          title: 'Erreur',
          description: error.message || 'Erreur lors de la génération',
          variant: 'destructive',
        });
        return;
      }

      setGeneratedContent(data.content);
      setWordCount(data.wordCount || 0);
      toast({
        title: 'Succès',
        description: 'Contenu géopolitique généré avec succès !',
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Erreur',
        description: "Une erreur s'est produite",
        variant: 'destructive',
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
  ] as const;

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans selection:bg-pr-orange-pale selection:text-pr-orange-dark">
      {/* Sticky breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-pr-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-pr-gray-mid">
              <Link to="/" className="hover:text-pr-orange transition-colors flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" /> Accueil
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/generator" className="hover:text-pr-orange transition-colors">Générateurs</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-pr-orange-dark font-semibold uppercase tracking-[0.06em] text-[10px] bg-pr-orange-pale px-2 py-1 rounded-full">
                Géopolitique
              </span>
            </div>

            {isSubjectValidated && (
              <div className="hidden md:flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                <span className="text-[10px] text-pr-gray-mid font-semibold uppercase tracking-[0.08em]">
                  Sujet en cours
                </span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-pr-orange-pale border border-pr-orange/30 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5 text-pr-orange" />
                  <span className="text-sm font-medium text-pr-black truncate max-w-[280px]" title={selectedSubject}>
                    {selectedSubject}
                  </span>
                </div>
                <Button
                  onClick={handleEditSubject}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-pr-gray-mid hover:text-pr-orange hover:bg-pr-orange-pale rounded-full"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <GeneratorHero
          badge="HGG · ECG"
          badgeIcon={Globe}
          title="Générateur"
          highlight="Géopolitique"
          subtitle="Une suite d'outils intelligents pour structurer ta pensée, analyser tes sujets et perfectionner tes dissertations."
        />

        {!isSubjectValidated ? (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <Card className="border border-pr-gray-light bg-white overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-pr-orange"></div>
              <CardHeader className="pt-8 pb-2 text-center">
                <CardTitle className="font-dm-serif text-2xl text-pr-black">Définis ton sujet</CardTitle>
                <p className="text-pr-gray-mid font-dm-sans text-sm mt-1">
                  Pour commencer, choisis ou saisis le sujet de ta dissertation.
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-pr-gray-mid uppercase tracking-[0.08em] font-dm-sans">
                    Sujet
                  </label>
                  <div className="flex bg-white rounded-xl border border-pr-gray-light focus-within:border-pr-orange transition-colors">
                    <Input
                      placeholder="Saisis ton sujet de dissertation..."
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="flex-1 border-0 bg-transparent py-3 px-4 text-base font-medium placeholder:text-pr-gray-mid focus-visible:ring-0 rounded-xl h-auto font-dm-sans"
                    />
                    <div className="pr-2 flex items-center">
                      <Select onValueChange={(value) => setSelectedSubject(value)}>
                        <SelectTrigger className="border-0 shadow-none bg-pr-orange-pale hover:bg-pr-orange-soft text-pr-orange-dark font-medium w-auto gap-2 px-3 py-2 h-auto rounded-lg transition-colors text-sm font-dm-sans">
                          <BookOpenCheck className="h-4 w-4" />
                          <span>Suggestions</span>
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px] border-pr-gray-light shadow-xl">
                          {(Object.keys(subjectsByCategory) as Array<keyof typeof subjectsByCategory>).map((category) => (
                            <SelectGroup key={category}>
                              <SelectLabel className="text-[10px] uppercase tracking-[0.08em] text-pr-gray-mid font-bold px-3 py-2 mt-2 font-dm-sans">
                                {getCategoryName(category)}
                              </SelectLabel>
                              {subjectsByCategory[category].map((subj) => (
                                <SelectItem
                                  key={subj}
                                  value={subj}
                                  className="text-sm py-2 text-pr-gray-dark cursor-pointer focus:bg-pr-orange-pale focus:text-pr-orange-dark font-dm-sans"
                                >
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

                <Button
                  onClick={handleValidateSubject}
                  disabled={!selectedSubject.trim()}
                  className="w-full h-12 bg-pr-orange hover:bg-pr-orange-dark text-white text-base font-semibold rounded-xl shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-dm-sans"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Commencer l'analyse
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Tabs value={selectedTool} onValueChange={(value) => setSelectedTool(value as any)} className="w-full space-y-8">
              <div className="flex justify-center">
                <TabsList className="h-auto p-1 bg-white border border-pr-gray-light rounded-2xl flex flex-wrap justify-center gap-1">
                  {toolsConfig.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = selectedTool === tool.id;
                    return (
                      <TabsTrigger
                        key={tool.id}
                        value={tool.id}
                        className={`relative px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 outline-none font-dm-sans text-sm ${
                          isActive
                            ? 'bg-pr-orange text-white font-semibold'
                            : 'text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tool.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <div className="max-w-5xl mx-auto min-h-[500px]">
                <TabsContent value="hook" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <HookEvaluator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="definitions" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <DefinitionTraining language="fr" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="paradoxes" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <GeopoliticsParadoxGenerator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="problematique" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <ProblematiquesGenerator mode="geopolitics" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="plan" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <PlanGenerator subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="geopolitics" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <Card className="border border-pr-gray-light bg-white overflow-hidden shadow-sm">
                      <div className="h-[3px] w-full bg-pr-orange" />
                      <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light pb-6 pt-6">
                        <CardTitle className="flex items-center gap-3 font-dm-serif text-2xl text-pr-black">
                          <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                            <Globe className="h-5 w-5 text-pr-orange-dark" />
                          </div>
                          Générateur de Contenu
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="courseContent" className="text-sm font-semibold text-pr-black flex items-center gap-2 font-dm-sans">
                            Contenu de référence
                            <span className="text-[10px] font-semibold text-pr-gray-mid bg-pr-gray-bg px-2 py-0.5 rounded-full uppercase tracking-[0.08em]">
                              Optionnel
                            </span>
                          </Label>
                          <Textarea
                            id="courseContent"
                            placeholder="Colle ici des éléments de cours, des articles ou des notes pour guider la génération..."
                            value={courseContent}
                            onChange={(e) => setCourseContent(e.target.value)}
                            className="min-h-[220px] resize-none border-pr-gray-light bg-pr-gray-bg focus:bg-white focus:border-pr-orange focus:ring-pr-orange/20 rounded-xl text-base shadow-sm leading-relaxed p-4 font-dm-sans"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <Button
                            onClick={handleGenerate}
                            disabled={isGenerating || !courseContent.trim()}
                            className="flex-1 bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold rounded-xl h-12 text-base transition-all duration-300 font-dm-sans"
                          >
                            {isGenerating ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Analyse et rédaction...
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-4 w-4 mr-2" />
                                Générer le contenu
                              </>
                            )}
                          </Button>

                          <Button
                            onClick={loadGeopoliticsExample}
                            variant="outline"
                            className="px-6 border-pr-gray-light text-pr-gray-dark hover:text-pr-orange-dark hover:bg-pr-orange-pale hover:border-pr-orange/40 rounded-xl h-12 font-medium font-dm-sans"
                          >
                            Exemple
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {generatedContent && (
                      <div className="mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <Card className="border border-pr-gray-light bg-white overflow-hidden shadow-sm">
                          <div className="h-[3px] w-full bg-pr-orange" />
                          <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light pb-5 pt-5">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-3 font-dm-serif text-xl text-pr-black">
                                <FileText className="h-5 w-5 text-pr-orange" />
                                Résultat généré
                              </CardTitle>
                              <div className="text-xs text-pr-gray-mid font-medium font-dm-sans">
                                {wordCount > 0 ? `${wordCount} mots` : ''}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-8 sm:p-10">
                            <div
                              className="prose prose-lg max-w-none prose-headings:font-dm-serif prose-headings:text-pr-black prose-p:text-pr-gray-dark prose-li:text-pr-gray-dark prose-a:text-pr-orange-dark"
                              dangerouslySetInnerHTML={{ __html: generatedContent }}
                            />
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
