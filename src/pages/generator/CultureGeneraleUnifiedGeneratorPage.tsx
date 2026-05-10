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
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { getSubjectsByYear } from '@/data/culture-generale-subjects';
import { CultureGeneraleHookEvaluator } from '@/components/generator/CultureGeneraleHookEvaluator';
import { DefinitionTraining } from '@/components/generator/DefinitionTraining';
import { CultureGeneraleParadoxGenerator } from '@/components/generator/CultureGeneraleParadoxGenerator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';
import { PlanGenerator } from '@/components/generator/PlanGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

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
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      {/* Navbar — sticky breadcrumb charte PR */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-pr-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-pr-gray-mid">
              <Link to="/" className="hover:text-pr-orange transition-colors flex items-center gap-1">
                <Library className="h-3.5 w-3.5" /> Accueil
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/generator" className="hover:text-pr-orange transition-colors">Générateurs</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-pr-orange-dark font-semibold uppercase tracking-[0.06em] text-[10px] bg-pr-orange-pale px-2 py-1 rounded-full">
                Culture Générale
              </span>
            </div>

            {/* Sujet en cours */}
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
        {/* Hero */}
        <GeneratorHero
          badge="Culture Générale"
          badgeIcon={Library}
          title="Générateur"
          highlight="Culture Générale"
          subtitle="Un espace unique pour t'exercer : accroche, définitions, paradoxe, problématique et plan."
        />

        {/* Sélection du sujet */}
        {!isSubjectValidated ? (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-sm">
              <div className="h-[3px] w-full bg-pr-orange" />
              <div className="pt-8 pb-2 text-center px-8">
                <h2 className="font-dm-serif text-2xl text-pr-black">Définis ton sujet</h2>
                <p className="text-pr-gray-mid font-dm-sans text-sm mt-1">
                  Pour commencer, choisis ou saisis le sujet de ta dissertation.
                </p>
              </div>
              <div className="p-8 space-y-6">
                {/* Année */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-pr-gray-mid uppercase tracking-[0.08em] font-dm-sans">
                    Année de prépa
                  </label>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setSelectedYear(1)}
                      className={`flex-1 h-12 rounded-xl font-dm-sans ${
                        selectedYear === 1
                          ? 'bg-pr-orange text-white hover:bg-pr-orange-dark'
                          : 'bg-white text-pr-gray-dark border border-pr-gray-light hover:bg-pr-orange-pale hover:border-pr-orange/40 hover:text-pr-orange-dark'
                      }`}
                    >
                      <span className="font-semibold">1ère année</span>
                      <span className="text-xs ml-2 opacity-70">(Thèmes généraux)</span>
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setSelectedYear(2)}
                      className={`flex-1 h-12 rounded-xl font-dm-sans ${
                        selectedYear === 2
                          ? 'bg-pr-orange text-white hover:bg-pr-orange-dark'
                          : 'bg-white text-pr-gray-dark border border-pr-gray-light hover:bg-pr-orange-pale hover:border-pr-orange/40 hover:text-pr-orange-dark'
                      }`}
                    >
                      <span className="font-semibold">2ème année</span>
                      <span className="text-xs ml-2 opacity-70">(Thème : Juger)</span>
                    </Button>
                  </div>
                </div>

                {/* Sujet */}
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
                          {(Object.keys(yearData.categories) as Array<keyof typeof yearData.categories>).map((category) => (
                            <SelectGroup key={category}>
                              <SelectLabel className="text-[10px] uppercase tracking-[0.08em] text-pr-gray-mid font-bold px-3 py-2 mt-2 font-dm-sans">
                                {yearData.getCategoryName(category)}
                              </SelectLabel>
                              {yearData.categories[category].map((subj, idx) => (
                                <SelectItem
                                  key={`${category}-${idx}`}
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
              </div>
            </div>
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
                    <CultureGeneraleHookEvaluator subjectFromParent={selectedSubject} year={selectedYear} />
                  </div>
                </TabsContent>

                <TabsContent value="definitions" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <DefinitionTraining mode="culture-generale" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="paradoxe" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <CultureGeneraleParadoxGenerator subjectFromParent={selectedSubject} year={selectedYear} />
                  </div>
                </TabsContent>

                <TabsContent value="problematique" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <ProblematiquesGenerator mode="culture-generale" subjectFromParent={selectedSubject} />
                  </div>
                </TabsContent>

                <TabsContent value="plan" className="focus-visible:outline-none focus:outline-none">
                  <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <PlanGenerator mode="culture-generale" subjectFromParent={selectedSubject} />
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

export default CultureGeneraleUnifiedGeneratorPage;
