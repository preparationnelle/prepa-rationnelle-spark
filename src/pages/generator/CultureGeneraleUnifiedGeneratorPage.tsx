import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  Library,
  Sparkles,
  BookOpenCheck,
  ChevronRight,
  Target,
  ListChecks,
  Brain,
  CheckCircle2,
  Edit3,
  Lightbulb,
  Home,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { getSubjectsByYear } from '@/data/culture-generale-subjects';
import { CultureGeneraleHookEvaluator } from '@/components/generator/CultureGeneraleHookEvaluator';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { CultureGeneraleParadoxGenerator } from '@/components/generator/CultureGeneraleParadoxGenerator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';

const CultureGeneraleUnifiedGeneratorPage = () => {
  const [selectedYear, setSelectedYear] = useState<1 | 2>(2);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectValidated, setIsSubjectValidated] = useState(false);

  const [selectedTool, setSelectedTool] = useState<'hook' | 'definitions' | 'paradoxe' | 'problematique' | 'plan'>('hook');
  const { toast } = useToast();

  const yearData = getSubjectsByYear(selectedYear);

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

  const toolsConfig = [
    { id: 'hook', label: 'Accroche', icon: Target },
    { id: 'definitions', label: 'Définitions', icon: BookOpenCheck },
    { id: 'paradoxe', label: 'Paradoxe', icon: Lightbulb },
    { id: 'problematique', label: 'Problématique', icon: Brain },
    { id: 'plan', label: 'Plan', icon: ListChecks },
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
              <span className="carnet-eyebrow text-[11px]">Culture Générale</span>
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
          <div className="carnet-eyebrow mb-5">Feedback IA · Culture Générale</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Library className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Culture Générale</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Un espace unique pour t'exercer : <span className="carnet-hl font-lora italic">accroche, définitions, paradoxe, problématique et plan</span>.
          </p>
        </header>

        {/* Sélection du sujet */}
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
                {/* Année */}
                <div className="space-y-2">
                  <label className="carnet-eyebrow text-[11px]">Année de prépa</label>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setSelectedYear(1)}
                      className={`flex-1 h-12 rounded-md font-instrument ${
                        selectedYear === 1
                          ? 'bg-carnet-red text-carnet-paper hover:bg-carnet-red-deep'
                          : 'bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:border-[rgba(193,68,58,0.25)] hover:text-carnet-red'
                      }`}
                    >
                      <span className="font-semibold">1ère année</span>
                      <span className="text-xs ml-2 opacity-70">(Thèmes généraux)</span>
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setSelectedYear(2)}
                      className={`flex-1 h-12 rounded-md font-instrument ${
                        selectedYear === 2
                          ? 'bg-carnet-red text-carnet-paper hover:bg-carnet-red-deep'
                          : 'bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:border-[rgba(193,68,58,0.25)] hover:text-carnet-red'
                      }`}
                    >
                      <span className="font-semibold">2ème année</span>
                      <span className="text-xs ml-2 opacity-70">(Thème : L'humanité)</span>
                    </Button>
                  </div>
                </div>

                {/* Sujet */}
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
                          {(Object.keys(yearData.categories) as Array<keyof typeof yearData.categories>).map((category) => (
                            <SelectGroup key={category}>
                              <SelectLabel className="carnet-eyebrow text-[10px] px-3 py-2 mt-2">
                                {yearData.getCategoryName(category)}
                              </SelectLabel>
                              {yearData.categories[category].map((subj, idx) => (
                                <SelectItem
                                  key={`${category}-${idx}`}
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
                  <CultureGeneraleHookEvaluator subjectFromParent={selectedSubject} year={selectedYear} />
                </TabsContent>

                <TabsContent value="definitions" className="focus-visible:outline-none focus:outline-none">
                  <DefinitionTraining mode="culture-generale" subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="paradoxe" className="focus-visible:outline-none focus:outline-none">
                  <CultureGeneraleParadoxGenerator subjectFromParent={selectedSubject} year={selectedYear} />
                </TabsContent>

                <TabsContent value="problematique" className="focus-visible:outline-none focus:outline-none">
                  <ProblematiquesGenerator mode="culture-generale" subjectFromParent={selectedSubject} />
                </TabsContent>

                <TabsContent value="plan" className="focus-visible:outline-none focus:outline-none">
                  <PlanGenerator mode="culture-generale" subjectFromParent={selectedSubject} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
};

export default CultureGeneraleUnifiedGeneratorPage;
