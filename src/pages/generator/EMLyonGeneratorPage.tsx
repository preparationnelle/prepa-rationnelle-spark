
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { useProgress } from "@/context/ProgressContext";

const EMLyonGeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Questions EM Lyon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Questions aléatoires pour l'entretien 'Flash' avec cartes thématiques.
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/30 to-orange-50/30">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">Questions d'entretien EM Lyon</div>
              <div className="text-orange-100 text-sm font-normal mt-1">
                Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <RandomWordGenerator type="emlyon" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EMLyonGeneratorPage;
