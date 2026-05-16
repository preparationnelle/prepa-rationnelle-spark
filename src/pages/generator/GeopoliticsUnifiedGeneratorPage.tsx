import React, { useState } from 'react';
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
  Home,
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
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane sticky */}
      <nav className="sticky top-0 z-50 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Géopolitique</span>
            </div>

            {isSubjectValidated && (
              <div className="hidden md:flex items-center gap-2">
                <span className="carnet-eyebrow text-[10px]">Sujet en cours</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5 text-carnet-red" />
                  <span className="text-sm font-instrument font-medium text-carnet-ink truncate max-w-[280px]" title={selectedSubject}>
                    {selectedSubject}
                  </span>
                </div>
                <Button
                  onClick={handleEditSubject}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-carnet-ink-mute hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] rounded-full"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16 space-y-12">
        {/* Hero */}
        <header className="max-w-[820px]">
          <div className="carnet-eyebrow mb-5">HGG · ECG</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Globe className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Géopolitique</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Une suite d'outils intelligents pour structurer ta pensée, <span className="carnet-hl font-lora italic">analyser tes sujets</span> et perfectionner tes dissertations.
          </p>
        </header>

        {!isSubjectValidated ? (
          <div className="max-w-2xl mx-auto">
            <div className="carnet-card overflow-hidden">
              <div className="pt-8 pb-2 text-center px-8">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="carnet-hand text-[32px] text-carnet-red leading-none font-semibold">01</span>
                  <h2 className="font-lora text-[26px] text-carnet-ink">
                    Définis ton <em className="font-lora italic text-carnet-red">sujet</em>
                  </h2>
                </div>
                <p className="text-carnet-ink-mute font-instrument text-sm mt-1">
                  Pour commencer, choisis ou saisis le sujet de ta dissertation.
                </p>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="carnet-eyebrow text-[11px]">Sujet</label>
                  <div className="flex bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red transition-colors">
                    <Input
                      placeholder="Saisis ton sujet de dissertation..."
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="flex-1 border-0 bg-transparent py-3 px-4 text-base font-medium placeholder:text-carnet-ink-mute focus-visible:ring-0 rounded-md h-auto font-instrument text-carnet-ink"
                    />
                    <div className="pr-2 flex items-center">
                      <Select onValueChange={(value) => setSelectedSubject(value)}>
                        <SelectTrigger className="border-0 shadow-none bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red font-medium w-auto gap-2 px-3 py-2 h-auto rounded transition-colors text-sm font-instrument">
                          <BookOpenCheck className="h-4 w-4" />
                          <span>Suggestions</span>
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px] border-[rgba(78,55,30,0.18)] shadow-xl">
                          {(Object.keys(subjectsByCategory) as Array<keyof typeof subjectsByCategory>).map((category) => (
                            <SelectGroup key={category}>
                              <SelectLabel className="carnet-eyebrow text-[10px] px-3 py-2 mt-2">
                                {getCategoryName(category)}
                              </SelectLabel>
                              {subjectsByCategory[category].map((subj) => (
                                <SelectItem
                                  key={subj}
                                  value={subj}
                                  className="text-sm py-2 text-carnet-ink-soft cursor-pointer focus:bg-[rgba(193,68,58,0.06)] focus:text-carnet-red font-instrument"
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
                  className="w-full h-12 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper text-base font-semibold rounded-md shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-instrument"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Commencer l'analyse
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Tabs value={selectedTool} onValueChange={(value) => setSelectedTool(value as any)} className="w-full space-y-8">
              <div className="flex justify-center">
                <TabsList className="h-auto p-1 carnet-card flex flex-wrap justify-center gap-1">
                  {toolsConfig.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = selectedTool === tool.id;
                    return (
                      <TabsTrigger
                        key={tool.id}
                        value={tool.id}
                        className={`relative px-4 py-2.5 rounded transition-all duration-200 flex items-center gap-2 outline-none font-instrument text-sm ${
                          isActive
                            ? 'bg-carnet-red text-carnet-paper font-semibold'
                            : 'text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red'
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
                  <HookEvaluator subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="definitions" className="focus-visible:outline-none focus:outline-none">
                  <DefinitionTraining language="fr" subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="paradoxes" className="focus-visible:outline-none focus:outline-none">
                  <GeopoliticsParadoxGenerator subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="problematique" className="focus-visible:outline-none focus:outline-none">
                  <ProblematiquesGenerator mode="geopolitics" subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="plan" className="focus-visible:outline-none focus:outline-none">
                  <PlanGenerator subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="geopolitics" className="focus-visible:outline-none focus:outline-none">
                  <div>
                    <div className="carnet-card overflow-hidden">
                      <div className="bg-carnet-paper-2 border-b border-dashed border-[rgba(78,55,30,0.18)] pb-6 pt-6 px-6 sm:px-8">
                        <h3 className="flex items-center gap-3 font-lora text-[24px] text-carnet-ink">
                          <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                            <Globe className="h-5 w-5 text-carnet-red" />
                          </div>
                          Générateur de <em className="font-lora italic text-carnet-red">contenu</em>
                        </h3>
                      </div>
                      <div className="p-6 sm:p-8 space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="courseContent" className="text-sm font-semibold text-carnet-ink flex items-center gap-2 font-instrument">
                            Contenu de référence
                            <span className="carnet-eyebrow text-[10px] bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] px-2 py-0.5 rounded-full">
                              Optionnel
                            </span>
                          </Label>
                          <Textarea
                            id="courseContent"
                            placeholder="Colle ici des éléments de cours, des articles ou des notes pour guider la génération..."
                            value={courseContent}
                            onChange={(e) => setCourseContent(e.target.value)}
                            className="min-h-[220px] resize-none border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 focus:bg-carnet-paper-2 focus:border-carnet-red focus:ring-carnet-red/20 rounded-md text-base shadow-sm leading-relaxed p-4 font-instrument text-carnet-ink"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <Button
                            onClick={handleGenerate}
                            disabled={isGenerating || !courseContent.trim()}
                            className="flex-1 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-semibold rounded-md h-12 text-base transition-all duration-300 font-instrument"
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
                            className="px-6 border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] hover:border-[rgba(193,68,58,0.25)] rounded-md h-12 font-medium font-instrument"
                          >
                            Exemple
                          </Button>
                        </div>
                      </div>
                    </div>

                    {generatedContent && (
                      <div className="mt-10">
                        <div className="carnet-card overflow-hidden">
                          <div className="bg-carnet-paper-2 border-b border-dashed border-[rgba(78,55,30,0.18)] pb-5 pt-5 px-6 sm:px-8">
                            <div className="flex items-center justify-between">
                              <h3 className="flex items-center gap-3 font-lora text-[22px] text-carnet-ink">
                                <FileText className="h-5 w-5 text-carnet-red" />
                                Résultat <em className="font-lora italic text-carnet-red">généré</em>
                              </h3>
                              <div className="text-xs text-carnet-ink-mute font-medium font-instrument">
                                {wordCount > 0 ? `${wordCount} mots` : ''}
                              </div>
                            </div>
                          </div>
                          <div className="p-8 sm:p-10">
                            <div
                              className="prose prose-lg max-w-none prose-headings:font-lora prose-headings:text-carnet-ink prose-p:text-carnet-ink-soft prose-li:text-carnet-ink-soft prose-a:text-carnet-red"
                              dangerouslySetInnerHTML={{ __html: generatedContent }}
                            />
                          </div>
                        </div>
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
