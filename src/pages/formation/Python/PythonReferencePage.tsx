import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pythonCommands } from '@/data/pythonCommands';
import SearchBar from '@/components/python/SearchBar';
import CommandSection from '@/components/python/CommandSection';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
const PythonReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };
  const filteredCommands = Object.entries(pythonCommands).map(([key, section]) => ({
    ...section,
    key,
    commands: section.commands.filter(cmd => cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || cmd.description.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(section => section.commands.length > 0);
  return <div className="min-h-screen bg-[#F8FAFF]">
    {/* Sticky Breadcrumb */}
    <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="h-3 w-3" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
          <Link to="/formations" className="hover:text-foreground transition-colors">
            Toutes les formations
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
          <span className="text-foreground font-medium">Formation <span className="text-orange-600">Python</span> ECG</span>
        </div>
      </div>
    </nav>

    <div className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-100/40 to-emerald-100/40 blur-3xl rounded-full -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Référence Officielle
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Références Python ECG
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Toutes les 54 commandes essentielles pour le programme, <br className="hidden md:inline" />
          optimisées pour la mémorisation et l'usage en concours.
        </p>
      </div>

      {/* Navigation Tabs */}
      <PythonNavigationTabs className="mb-12" />

      <div className="mb-10 max-w-xl mx-auto">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {/* Tabs pour les catégories */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <TabsList className="flex h-auto p-1 bg-slate-100/50 backdrop-blur rounded-full border border-slate-200 gap-1">
            <TabsTrigger
              value="all"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all"
            >
              Toutes
            </TabsTrigger>
            <TabsTrigger value="imports" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Imports</TabsTrigger>
            <TabsTrigger value="functions" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Fonctions</TabsTrigger>
            <TabsTrigger value="constants" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Constantes</TabsTrigger>
            <TabsTrigger value="vectors" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Vecteurs</TabsTrigger>
            <TabsTrigger value="matrices" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Matrices</TabsTrigger>
            <TabsTrigger value="operations" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Opérations</TabsTrigger>
            <TabsTrigger value="linalg" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Algèbre</TabsTrigger>
            <TabsTrigger value="random" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Aléatoire</TabsTrigger>
            <TabsTrigger value="graphics" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm transition-all">Graphiques</TabsTrigger>
          </TabsList>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white shadow-xl shadow-slate-200/50 min-h-[600px]">
          <TabsContent value="all" className="mt-0">
            <div className="space-y-12">
              {filteredCommands.length > 0 ? (
                filteredCommands.map(section => (
                  <div key={section.key} className="border-b border-slate-100 last:border-0 pb-10 last:pb-0">
                    <CommandSection title={section.title} commands={section.commands} copiedCommand={copiedCommand} onCopy={copyToClipboard} />
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Home className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Aucun résultat trouvé</h3>
                  <p className="text-slate-500 max-w-xs mt-2">Essayez de modifier votre recherche pour trouver la commande souhaitée.</p>
                </div>
              )}
            </div>
          </TabsContent>

          {Object.entries(pythonCommands).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <CommandSection title={section.title} commands={section.commands} copiedCommand={copiedCommand} onCopy={copyToClipboard} />
            </TabsContent>
          ))}
        </div>
      </Tabs>

      {/* Call to action */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-10 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors duration-700" />

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">Prêt à tester vos connaissances ?</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
            La maîtrise de ces commandes est indispensable. Entraînez-vous avec nos flashcards interactives pour maximiser votre score aux concours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap relative z-10">
            <Link to="/python-flashcards">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold h-12 px-8 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
                Lancer les Flashcards
              </Button>
            </Link>
            <Link to="/offre/coaching-python">
              <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-slate-100 hover:bg-white/5 hover:text-white h-12 px-8 rounded-full">
                Coaching Individuel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default PythonReferencePage;