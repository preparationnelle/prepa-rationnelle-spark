import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AnswerGeneratorPage from './AnswerGeneratorPage';
import EMLyonGeneratorPage from './EMLyonGeneratorPage';
import EDHECGeneratorPage from './EDHECGeneratorPage';
import { Mic, MessageSquare, Target, ExternalLink, HelpCircle } from 'lucide-react';

const UnifiedOralGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'answer' | 'emlyon' | 'edhec'>('answer');

  const tools = [
    {
      id: 'answer',
      title: 'Réponse d\'entretien',
      description: 'Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté',
      icon: MessageSquare,
      component: <AnswerGeneratorPage />
    },
    {
      id: 'emlyon',
      title: 'Questions EM Lyon',
      description: 'Questions aléatoires pour l\'entretien \'Flash\' avec cartes thématiques',
      icon: Target,
      component: <EMLyonGeneratorPage />
    },
    {
      id: 'edhec',
      title: 'Générateur de mots EDHEC',
      description: 'Générateur de mots aléatoires pour votre présentation EDHEC',
      icon: ExternalLink,
      component: <EDHECGeneratorPage />
    }
  ];

  const currentTool = tools.find(tool => tool.id === selectedTool);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header avec bouton info */}
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold text-[#5B3FFF] mb-4">
            Générateur Oraux
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            Générez vos réponses orales ou entraînez-vous avec des questions types
          </p>
          
          {/* Bouton info flottant */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="absolute top-0 right-0 w-10 h-10 rounded-full border-2 border-[#5B3FFF] bg-white hover:bg-[#5B3FFF] hover:text-white transition-all duration-300 shadow-sm"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-[#5B3FFF] flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Comment ça marche ?
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-[#5B3FFF] to-[#FF6B9D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <span className="text-[#333333] text-sm">
                      Entrez une question d'entretien classique comme "Parlez-moi de vous" ou "Quels sont vos défauts ?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-[#5B3FFF] to-[#FF6B9D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <span className="text-[#333333] text-sm">
                      Ajoutez des informations sur votre profil pour personnaliser davantage votre réponse
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-[#5B3FFF] to-[#FF6B9D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <span className="text-[#333333] text-sm">
                      Notre système génère une réponse structurée avec storytelling, analyse critique et conseils d'entraînement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-[#5B3FFF] to-[#FF6B9D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <span className="text-[#333333] text-sm">
                      Utilisez cette réponse comme base pour développer votre propre réponse personnalisée
                    </span>
                  </li>
                </ol>
                <p className="text-xs text-gray-500 italic border-t pt-3">
                  Note: Toutes les anecdotes de storytelling seront mises en italique pour faciliter leur identification.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Sélecteur d'outil avec tabs horizontaux */}
        <div className="mb-8">
          <Card className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-200">
            <CardContent className="p-4">
              <Tabs value={selectedTool} onValueChange={(value: 'answer' | 'emlyon' | 'edhec') => setSelectedTool(value)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
                  <TabsTrigger 
                    value="answer" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#5B3FFF] data-[state=active]:shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span className="hidden sm:inline">Réponse d'entretien</span>
                    <span className="sm:hidden">Entretien</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="emlyon" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#5B3FFF] data-[state=active]:shadow-sm"
                  >
                    <Target className="h-4 w-4" />
                    <span className="hidden sm:inline">Questions EM Lyon</span>
                    <span className="sm:hidden">EM Lyon</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="edhec" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-[#5B3FFF] data-[state=active]:shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">Générateur EDHEC</span>
                    <span className="sm:hidden">EDHEC</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Contenu dynamique */}
        <div className="mt-8">
          {currentTool?.component}
        </div>
      </div>
    </div>
  );
};

export default UnifiedOralGeneratorPage; 