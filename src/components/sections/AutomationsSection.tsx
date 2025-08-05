
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  Languages, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const AutomationsSection = () => {
  const [userTranslation, setUserTranslation] = useState('');
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const sampleSentence = "Les tensions géopolitiques entre la Chine et les États-Unis ont conduit à une révision des politiques commerciales internationales.";
  const correctTranslation = "The geopolitical tensions between China and the United States have led to a revision of international trade policies.";

  const handleTryTranslation = () => {
    if (userTranslation.trim()) {
      setShowResult(true);
      setTimeout(() => {
        // Redirection vers le générateur de langues
        navigate('/generator/languages-unified');
      }, 2000);
    }
  };

  const handleDirectAccess = () => {
    navigate('/generator/languages-unified');
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-[#F36C00]" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Automatisation <span className="text-[#F36C00]">IA</span>
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            Découvrez notre outil d'intelligence artificielle spécialisé qui automatise votre préparation 
            aux thèmes grammaticaux et vous fait gagner des heures de travail.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Languages className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-orange-500 text-white px-3 py-1 text-sm">
                  Nouveau
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                Générateur de Thèmes Grammaticaux
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Traduisez des phrases avec correction instantanée et feedback détaillé
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Phrase à traduire */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🇫🇷 Phrase à traduire en anglais :
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{sampleSentence}"
                </p>
              </div>

              {/* Zone de saisie */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  🇬🇧 Votre traduction :
                </h3>
                <Textarea
                  value={userTranslation}
                  onChange={(e) => setUserTranslation(e.target.value)}
                  placeholder="Tapez votre traduction en anglais ici..."
                  className="min-h-[80px] border-2 border-orange-200 focus:border-orange-400"
                />
              </div>

              {/* Résultat */}
              {showResult && (
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 animate-fade-in">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Correction :</h3>
                  </div>
                  <p className="text-green-700 mb-3">
                    "{correctTranslation}"
                  </p>
                  <p className="text-sm text-green-600">
                    ✅ Redirection vers l'outil complet dans quelques secondes...
                  </p>
                </div>
              )}

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleTryTranslation}
                  disabled={!userTranslation.trim() || showResult}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold"
                >
                  {showResult ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Correction effectuée !
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Corriger ma traduction
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={handleDirectAccess}
                  variant="outline"
                  className="flex-1 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 text-lg font-semibold"
                >
                  Accéder à l'outil complet
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Call to action */}
              <div className="text-center pt-4 border-t border-orange-200">
                <p className="text-sm text-gray-600 mb-2">
                  📚 Plus de 50 phrases spécialisées • 🎯 Correction détaillée • ⚡ Feedback instantané
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
