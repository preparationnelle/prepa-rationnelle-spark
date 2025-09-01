
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Target, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface SimilarSentencesGeneratorProps {
  weakGrammarPoints: string[];
  similarSentences: string[];
  language: string;
  onPracticeSentence: (sentence: string) => void;
}

// Base de corrections pour les phrases similaires
const SIMILAR_SENTENCES_CORRECTIONS: Record<string, Record<string, string>> = {
  en: {
    "Si les taux d'intérêt étaient plus bas, plus de gens achèteraient des maisons.": "If interest rates were lower, more people would buy houses.",
    "Si le gouvernement investissait davantage, l'économie se porterait mieux.": "If the government invested more, the economy would be better off.",
    "Les entreprises devront s'adapter aux nouvelles réglementations d'ici 2025.": "Companies will have to adapt to new regulations by 2025.",
    "Le parlement devra voter cette loi avant les vacances.": "Parliament will have to vote on this law before the holidays.",
    "Les prix de l'énergie auraient pu baisser avec de meilleures négociations.": "Energy prices could have decreased with better negotiations.",
    "Cette crise aurait pu être évitée avec plus de prévoyance.": "This crisis could have been avoided with more foresight.",
    "Les mesures de sécurité auraient dû être renforcées plus tôt.": "Security measures should have been strengthened earlier.",
    "Ces informations auraient dû être communiquées au public.": "This information should have been communicated to the public.",
    "La croissance économique a ralenti ces derniers mois.": "Economic growth has slowed down in recent months.",
    "Les investissements ont augmenté de 15% cette année.": "Investments have increased by 15% this year.",
    "Le projet de loi sera débattu au Parlement lundi prochain.": "The bill will be debated in Parliament next Monday.",
    "Les résultats du vote auraient dû être annoncés hier soir.": "The election results should have been announced last night.",
    "Plusieurs pays pourraient imposer des restrictions supplémentaires.": "Several countries could impose additional restrictions.",
    "Selon plusieurs sources, le PDG pourrait démissionner dans les prochains jours.": "According to several sources, the CEO might resign in the coming days."
  },
  de: {
    "Die Wirtschaftskrise führte zu höherer Arbeitslosigkeit.": "Die Wirtschaftskrise führte zu höherer Arbeitslosigkeit.",
    "Klimawandel führt zu extremen Wetterereignissen.": "Klimawandel führt zu extremen Wetterereignissen.",
    "Die EU plant, neue Handelsabkommen zu schließen.": "Die EU plant, neue Handelsabkommen zu schließen.",
    "Viele Städte planen, klimaneutral zu werden.": "Viele Städte planen, klimaneutral zu werden.",
    "Opposition kritisiert die Regierungspolitik scharf.": "Opposition kritisiert die Regierungspolitik scharf.",
    "Bürger kritisieren den Mangel an Transparenz.": "Bürger kritisieren den Mangel an Transparenz.",
    "Die Diskussion eines neuen Gesetzes dauert lange.": "Die Diskussion eines neuen Gesetzes dauert lange.",
    "Die Umsetzung des Plans war erfolgreich.": "Die Umsetzung des Plans war erfolgreich.",
    "Die Regierung setzte das Programm sofort um.": "Die Regierung setzte das Programm sofort um.",
    "Experten stellten neue Theorien vor.": "Experten stellten neue Theorien vor.",
    "Wir brauchen strengere Maßnahmen gegen Korruption.": "Wir brauchen strengere Maßnahmen gegen Korruption.",
    "Die Situation erfordert schnellere Entscheidungen.": "Die Situation erfordert schnellere Entscheidungen.",
    "Minister betonen, dass Reformen notwendig sind.": "Minister betonen, dass Reformen notwendig sind.",
    "Studien zeigen, dass die Lage sich verschlechtert.": "Studien zeigen, dass die Lage sich verschlechtert.",
    "Politiker müssen wachsender Kritik begegnen.": "Politiker müssen wachsender Kritik begegnen.",
    "Europa muss neuen Herausforderungen begegnen.": "Europa muss neuen Herausforderungen begegnen.",
    "Skepsis gegenüber neuen Technologien wächst.": "Skepsis gegenüber neuen Technologien wächst.",
    "Vertrauen gegenüber den Institutionen sinkt.": "Vertrauen gegenüber den Institutionen sinkt.",
    "Das Gericht setzte die Strafe zur Bewährung aus.": "Das Gericht setzte die Strafe zur Bewährung aus.",
    "Die Behörde setzte die Verhandlungen aus.": "Die Behörde setzte die Verhandlungen aus.",
    "Der Minister hat die Bedeutung der Zusammenarbeit hervorgehoben.": "Der Minister hat die Bedeutung der Zusammenarbeit hervorgehoben.",
    "Die Studie hat die Wichtigkeit der Reformen hervorgehoben.": "Die Studie hat die Wichtigkeit der Reformen hervorgehoben."
  },
  es: {
    "La economía habría crecido más con mejores políticas.": "La economía habría crecido más con mejores políticas.",
    "Los precios habrían bajado con más competencia.": "Los precios habrían bajado con más competencia.",
    "El país tendrá que implementar reformas estructurales.": "El país tendrá que implementar reformas estructurales.",
    "La empresa tendrá que reducir sus costos operativos.": "La empresa tendrá que reducir sus costos operativos.",
    "Es importante que el gobierno tome medidas inmediatas.": "Es importante que el gobierno tome medidas inmediatas.",
    "Es necesario que las empresas reduzcan sus emisiones.": "Es necesario que las empresas reduzcan sus emisiones.",
    "La situación está grave pero no es irreversible.": "La situación está grave pero no es irreversible.",
    "El gobierno es responsable pero está dividido.": "El gobierno es responsable pero está dividido.",
    "El gobierno trabaja por el bienestar de los ciudadanos.": "El gobierno trabaja por el bienestar de los ciudadanos.",
    "Las reformas son necesarias para mejorar la economía.": "Las reformas son necesarias para mejorar la economía.",
    "Los resultados fueron anunciados ayer por la tarde.": "Los resultados fueron anunciados ayer por la tarde.",
    "Las medidas serán implementadas en los próximos meses.": "Las medidas serán implementadas en los próximos meses."
  }
};

export const SimilarSentencesGenerator: React.FC<SimilarSentencesGeneratorProps> = ({
  weakGrammarPoints,
  similarSentences,
  language,
  onPracticeSentence
}) => {
  const [showCorrections, setShowCorrections] = useState<Record<number, boolean>>({});

  const toggleCorrection = (index: number) => {
    setShowCorrections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!weakGrammarPoints.length && !similarSentences.length) {
    return null;
  }

  const getCorrection = (sentence: string): string => {
    const corrections = SIMILAR_SENTENCES_CORRECTIONS[language as keyof typeof SIMILAR_SENTENCES_CORRECTIONS];
    return corrections?.[sentence] || sentence;
  };

  return (
    <Card className="mt-6 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Target className="h-5 w-5" />
          Consolidation grammaticale
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {weakGrammarPoints.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-amber-700">Points à renforcer :</h4>
            <div className="flex flex-wrap gap-2">
              {weakGrammarPoints.map((point, index) => (
                <Badge key={index} variant="outline" className="border-amber-300 text-amber-700">
                  {point}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {similarSentences.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-amber-700">Phrases similaires avec corrections :</h4>
            <div className="space-y-3">
              {similarSentences.map((sentence, index) => {
                const correction = getCorrection(sentence);
                const isShowingCorrection = showCorrections[index];
                
                return (
                  <div key={index} className="bg-white rounded border border-amber-200 overflow-hidden">
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm flex-1">{sentence}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleCorrection(index)}
                          className="ml-2 text-xs border-green-500 text-green-700 hover:bg-green-50"
                        >
                          {isShowingCorrection ? (
                            <>
                              <EyeOff className="h-3 w-3 mr-1" />
                              Masquer
                            </>
                          ) : (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Corrigé
                            </>
                          )}
                        </Button>
                      </div>
                      
                      {isShowingCorrection && (
                        <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">Correction :</span>
                          </div>
                          <p className="text-sm text-green-700 font-medium">{correction}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-xs text-amber-700 bg-amber-100 p-2 rounded border border-amber-200">
          💡 Ces phrases travaillent les mêmes structures grammaticales que votre erreur. Cliquez sur "Corrigé" pour voir la traduction correcte !
        </div>
      </CardContent>
    </Card>
  );
};
