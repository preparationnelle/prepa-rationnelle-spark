import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pythonCommands } from '@/data/pythonCommands';
import SearchBar from '@/components/python/SearchBar';
import CommandSection from '@/components/python/CommandSection';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { CarnetHero } from '@/components/carnet';

const PythonReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const filteredCommands = Object.entries(pythonCommands)
    .map(([key, section]) => ({
      ...section,
      key,
      commands: section.commands.filter(
        (cmd) =>
          cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.commands.length > 0);

  const tabClasses =
    'rounded-full px-4 py-2 text-[12px] font-instrument font-semibold tracking-wide text-carnet-ink-soft data-[state=active]:bg-carnet-ink data-[state=active]:text-carnet-paper transition-all';

  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Référence Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        <CarnetHero
          eyebrow="Référence officielle"
          title="Références"
          accent="Python ECG"
          tagline="Les 54 commandes essentielles du programme — optimisées pour la mémorisation et l'usage en concours."
          highlight="par cœur"
          handNote={'↘ à coller\nau-dessus du PC'}
        />

        <PythonNavigationTabs className="mb-10" />

        {/* Search */}
        <div className="mb-10 max-w-xl mx-auto">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="flex h-auto p-1 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-full gap-1 flex-wrap justify-center">
              <TabsTrigger value="all" className={tabClasses}>Toutes</TabsTrigger>
              <TabsTrigger value="lists" className={tabClasses}>Listes</TabsTrigger>
              <TabsTrigger value="imports" className={tabClasses}>Imports</TabsTrigger>
              <TabsTrigger value="arrays_matrices" className={tabClasses}>Vecteurs/Matrices</TabsTrigger>
              <TabsTrigger value="operations" className={tabClasses}>Opérations</TabsTrigger>
              <TabsTrigger value="math_functions" className={tabClasses}>Fonctions Math</TabsTrigger>
              <TabsTrigger value="linalg" className={tabClasses}>Algèbre</TabsTrigger>
              <TabsTrigger value="random" className={tabClasses}>Probabilités</TabsTrigger>
              <TabsTrigger value="plotting" className={tabClasses}>Graphiques</TabsTrigger>
              <TabsTrigger value="pandas" className={tabClasses}>Pandas</TabsTrigger>
              <TabsTrigger value="sql" className={tabClasses}>SQL</TabsTrigger>
            </TabsList>
          </div>

          <div className="carnet-card p-6 md:p-10 min-h-[600px]">
            <TabsContent value="all" className="mt-0">
              <div className="space-y-12">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((section) => (
                    <div
                      key={section.key}
                      className="border-b border-dashed border-[rgba(78,55,30,0.18)] last:border-0 pb-10 last:pb-0"
                    >
                      <CommandSection
                        title={section.title}
                        commands={section.commands}
                        copiedCommand={copiedCommand}
                        onCopy={copyToClipboard}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-14 h-14 bg-[rgba(193,68,58,0.10)] border border-[rgba(193,68,58,0.25)] rounded-full flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[20px] text-carnet-ink">Aucun résultat trouvé</h3>
                    <p className="font-instrument text-[14px] text-carnet-ink-soft max-w-xs mt-2">
                      Essaie de modifier ta recherche pour trouver la commande souhaitée.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {Object.entries(pythonCommands).map(([key, section]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <CommandSection
                  title={section.title}
                  commands={section.commands}
                  copiedCommand={copiedCommand}
                  onCopy={copyToClipboard}
                />
              </TabsContent>
            ))}

            <TabsContent value="sql" className="mt-0 space-y-10">
              {['sql_queries', 'sql_commands', 'sql_aggregation'].map((key) => {
                // @ts-ignore
                const section = pythonCommands[key];
                if (!section) return null;
                return (
                  <div key={key}>
                    <CommandSection
                      title={section.title}
                      commands={section.commands}
                      copiedCommand={copiedCommand}
                      onCopy={copyToClipboard}
                    />
                  </div>
                );
              })}
            </TabsContent>
          </div>
        </Tabs>

        {/* Call to action */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="carnet-card p-10 md:p-12 carnet-tilt-r relative">
            <div
              className="absolute -top-3 left-8 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold"
              style={{ transform: 'rotate(-3deg)' }}
            >
              Aller plus loin
            </div>
            <h3 className="font-lora text-[28px] sm:text-[32px] text-carnet-ink mb-4 mt-2">
              Prêt à <em className="font-lora italic text-carnet-red">tester</em> tes connaissances&nbsp;?
            </h3>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-8 max-w-lg mx-auto">
              La maîtrise de ces commandes est indispensable. Entraîne-toi avec nos flashcards interactives pour maximiser ton score aux concours.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/python-flashcards">
                <Button
                  size="lg"
                  className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full px-8 font-instrument font-semibold"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Lancer les flashcards
                </Button>
              </Link>
              <Link to="/offre/coaching-python">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red font-instrument font-semibold px-8"
                >
                  Coaching individuel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonReferencePage;
