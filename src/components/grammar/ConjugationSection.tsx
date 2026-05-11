import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, BookOpen, Lightbulb, AlertTriangle } from 'lucide-react';
import { ConjugationSection as ConjugationSectionType } from '@/data/spanishConjugationData';

interface ConjugationSectionProps {
  section: ConjugationSectionType;
}

const ConjugationSectionComponent: React.FC<ConjugationSectionProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border border-gray-200 bg-white hover:shadow-sm transition-shadow">
      <CardHeader 
        className="cursor-pointer pb-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[rgba(193,68,58,0.08)]">
              <BookOpen className="h-5 w-5 text-carnet-red" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-800">{section.title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">{section.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-carnet-red border-[rgba(193,68,58,0.25)]">
              {section.level}
            </Badge>
            <Button variant="ghost" size="sm" className="p-1">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0 space-y-6">
          {/* Règles */}
          <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
            <h4 className="font-semibold text-carnet-red-deep mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Règles de formation
            </h4>
            <ul className="space-y-2">
              {section.content.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-carnet-red-deep">
                  <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                  <span className="text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exemples */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Exemples concrets
            </h4>
            <div className="space-y-3">
              {section.content.examples.map((example, index) => (
                <div key={index} className="bg-white rounded p-3 border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-mono text-green-800 text-sm mb-1">{example.spanish}</p>
                      <p className="text-gray-700 text-sm italic">{example.french}</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-700 mt-2">{example.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Irrégularités */}
          {section.content.irregularities && section.content.irregularities.length > 0 && (
            <div className="bg-[rgba(193,68,58,0.05)] rounded-lg p-4 border border-[rgba(193,68,58,0.25)]">
              <h4 className="font-semibold text-carnet-red-deep mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Irrégularités importantes
              </h4>
              <div className="space-y-3">
                {section.content.irregularities.map((irregularity, index) => (
                  <div key={index} className="bg-white rounded p-3 border border-[rgba(193,68,58,0.25)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-carnet-red-deep">{irregularity.verb}</span>
                      <span className="text-xs text-carnet-red bg-[rgba(193,68,58,0.08)] px-2 py-1 rounded">
                        {irregularity.pattern}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {irregularity.examples.map((example, exIndex) => (
                        <span key={exIndex} className="text-xs font-mono bg-[rgba(193,68,58,0.08)] text-carnet-red-deep px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conseils */}
          <div className="bg-carnet-red-pale rounded-lg p-4 border border-carnet-red/20">
            <h4 className="font-semibold text-carnet-red mb-3 flex items-center gap-2 font-dm-sans">
              <Lightbulb className="h-4 w-4" />
              Conseils et astuces
            </h4>
            <ul className="space-y-2">
              {section.content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-pr-gray-dark font-dm-sans">
                  <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ConjugationSectionComponent; 