import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Info } from 'lucide-react';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';

const GeopoliticsParadoxGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">Générateur de Paradoxes Géopolitiques</h1>
            </div>

            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
              <Target className="h-3 w-3 mr-1" />
              Analyse géopolitique IA
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">

        {/* Generator component */}
        <GeopoliticsParadoxGenerator />

        {/* Help section */}
        <Card className="border border-blue-200 mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Critères d'évaluation (sur 20 points total)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Clarté (4 pts max)</span>
                <span>Question compréhensible et bien posée</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Paradoxe explicite (4 pts max)</span>
                <span>Présence d'une contradiction féconde</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Ancrage géopolitique (4 pts max)</span>
                <span>Mention d'acteurs, d'espaces ou de puissances</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Ouverture analytique (4 pts max)</span>
                <span>Question ouverte, non descriptive</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Pertinence stratégique (4 pts max)</span>
                <span>Enjeux stratégiques majeurs et profondeur</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note :</strong> L'IA est sévère et honnête. Si votre réponse ne fait pas sens, elle peut noter 0/20.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeopoliticsParadoxGeneratorPage;

