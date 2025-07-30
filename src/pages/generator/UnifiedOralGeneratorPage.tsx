import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnswerGeneratorPage from './AnswerGeneratorPage';
import EMLyonGeneratorPage from './EMLyonGeneratorPage';
import EDHECGeneratorPage from './EDHECGeneratorPage';
import { Mic, MessageSquare, Target, ExternalLink } from 'lucide-react';

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
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur Oraux
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générez vos réponses orales ou entraînez-vous avec des questions types
        </p>
      </div>

      {/* Sélecteur d'outil */}
      <div className="max-w-2xl mx-auto mb-8">
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-800">
              <Mic className="h-6 w-6" />
              Choisissez votre outil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedTool} onValueChange={(value: 'answer' | 'emlyon' | 'edhec') => setSelectedTool(value)}>
              <SelectTrigger className="h-14 text-lg border-2 hover:border-purple-300 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tools.map((tool) => (
                  <SelectItem key={tool.id} value={tool.id} className="py-3">
                    <div className="flex items-center gap-3">
                      <tool.icon className="h-5 w-5 text-purple-600" />
                      <div className="text-left">
                        <div className="font-medium">{tool.title}</div>
                        <div className="text-sm text-gray-500">{tool.description}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Contenu dynamique */}
      <div className="mt-8">
        {currentTool?.component}
      </div>
    </div>
  );
};

export default UnifiedOralGeneratorPage; 