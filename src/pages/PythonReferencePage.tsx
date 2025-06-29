
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pythonCommands } from '@/data/pythonCommands';
import SearchBar from '@/components/python/SearchBar';
import CommandSection from '@/components/python/CommandSection';

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
    commands: section.commands.filter(cmd => 
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.commands.length > 0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/formation">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Référence Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Toutes les commandes Python au programme de prépa ECG
          </p>
          
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Tabs pour les catégories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="imports">Imports</TabsTrigger>
            <TabsTrigger value="functions">Fonctions</TabsTrigger>
            <TabsTrigger value="vectors">Vecteurs</TabsTrigger>
            <TabsTrigger value="matrices">Matrices</TabsTrigger>
            <TabsTrigger value="operations">Opérations</TabsTrigger>
            <TabsTrigger value="linalg">Algèbre</TabsTrigger>
            <TabsTrigger value="random">Aléatoire</TabsTrigger>
            <TabsTrigger value="graphics">Graphiques</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              {filteredCommands.map((section) => (
                <CommandSection
                  key={section.key}
                  title={section.title}
                  commands={section.commands}
                  copiedCommand={copiedCommand}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          </TabsContent>

          {Object.entries(pythonCommands).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <CommandSection
                title={section.title}
                commands={section.commands}
                copiedCommand={copiedCommand}
                onCopy={copyToClipboard}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PythonReferencePage;
