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
        {/* Description */}
        <Card className="border-2 border-blue-200 bg-white mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Info className="h-6 w-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">À propos de cet outil</h2>
                <p className="text-gray-700 mb-3">
                  Cet outil vous aide à construire des problématiques de dissertation en géopolitique en identifiant les paradoxes et tensions sous-jacents à un sujet.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-1">Mode Génération</h3>
                    <p className="text-sm text-gray-600">
                      L'IA identifie les deux tendances opposées d'un sujet et génère un paradoxe puis une problématique pertinente.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-1">Mode Évaluation</h3>
                    <p className="text-sm text-gray-600">
                      Soumettez votre propre problématique et recevez une évaluation détaillée sur 25 points avec des suggestions d'amélioration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generator component */}
        <GeopoliticsParadoxGenerator />

        {/* Help section */}
        <Card className="border border-blue-200 mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Critères d'évaluation</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Clarté (5 pts)</span>
                <span>Question compréhensible et bien posée</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Paradoxe explicite (5 pts)</span>
                <span>Présence d'une contradiction féconde</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Ancrage géopolitique (5 pts)</span>
                <span>Mention d'acteurs, d'espaces ou de puissances</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Ouverture analytique (5 pts)</span>
                <span>Question ouverte, non descriptive</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-blue-700 min-w-[180px]">Pertinence stratégique (5 pts)</span>
                <span>Capacité à structurer un plan dialectique</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeopoliticsParadoxGeneratorPage;

