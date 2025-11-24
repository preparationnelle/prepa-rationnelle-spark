
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dices } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { useProgress } from "@/context/ProgressContext";

const EDHECGeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Générateur de mots EDHEC
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Générateur de mots aléatoires pour votre présentation EDHEC.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r max-w-4xl mx-auto mb-8">
          <h3 className="text-base text-orange-800 font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Mode d'emploi
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">1</span>
              <p className="text-sm text-orange-700 leading-relaxed">
                Cliquez sur <strong>"Générer un mot aléatoire"</strong> pour obtenir un mot surprise
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">2</span>
              <div className="text-sm text-orange-700">
                <p className="mb-2">Préparez une présentation de 3 minutes structurée ainsi :</p>
                <div className="ml-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-medium mt-0.5">•</span>
                    <div>
                      <span className="font-medium text-orange-800">Définition :</span>
                      <span className="text-orange-700 ml-1">Expliquez le mot avec vos propres mots</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-medium mt-0.5">•</span>
                    <div>
                      <span className="font-medium text-orange-800">Exemples personnels :</span>
                      <span className="text-orange-700 ml-1">Illustrez avec vos expériences</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-medium mt-0.5">•</span>
                    <div>
                      <span className="font-medium text-orange-800">Ouverture :</span>
                      <span className="text-orange-700 ml-1">Lie-le à votre projet professionnel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/30 to-orange-50/30">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Dices className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">Générateur de mots EDHEC</div>
              <div className="text-orange-100 text-sm font-normal mt-1">
                Générateur de mots aléatoires pour votre présentation EDHEC
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <RandomWordGenerator type="word" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EDHECGeneratorPage;
