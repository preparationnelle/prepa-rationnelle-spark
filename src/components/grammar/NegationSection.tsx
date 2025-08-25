import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, BookOpen, Lightbulb, AlertTriangle, Code, MessageSquare, Target, Zap, HelpCircle, Clock, Users, ArrowRight, MapPin, Brain, X, Minus, Ban } from 'lucide-react';
import { NegationSection as NegationSectionType } from '@/data/spanishNegationsData';

interface NegationSectionProps {
  section: NegationSectionType;
}

const NegationSectionComponent: React.FC<NegationSectionProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIconForSection = (id: string) => {
    if (id.includes('formes') || id.includes('negatives')) return <X className="h-5 w-5 text-red-600" />;
    if (id.includes('simples') || id.includes('doubles')) return <Minus className="h-5 w-5 text-orange-600" />;
    if (id.includes('usage') || id.includes('mots')) return <Ban className="h-5 w-5 text-purple-600" />;
    if (id.includes('temps') || id.includes('verbaux')) return <Clock className="h-5 w-5 text-blue-600" />;
    if (id.includes('differences') || id.includes('francais')) return <MessageSquare className="h-5 w-5 text-green-600" />;
    if (id.includes('verbes') || id.includes('speciaux')) return <Code className="h-5 w-5 text-indigo-600" />;
    if (id.includes('expressions') || id.includes('idiomatiques')) return <Zap className="h-5 w-5 text-yellow-600" />;
    if (id.includes('complexes') || id.includes('nuances')) return <Target className="h-5 w-5 text-pink-600" />;
    if (id.includes('questions') || id.includes('interrogations')) return <HelpCircle className="h-5 w-5 text-teal-600" />;
    if (id.includes('composes') || id.includes('auxiliaires')) return <ArrowRight className="h-5 w-5 text-cyan-600" />;
    if (id.includes('subjonctif') || id.includes('subjonctif')) return <Brain className="h-5 w-5 text-amber-600" />;
    return <BookOpen className="h-5 w-5 text-red-600" />;
  };

  const getColorForSection = (id: string) => {
    if (id.includes('formes') || id.includes('negatives')) return 'bg-red-100';
    if (id.includes('simples') || id.includes('doubles')) return 'bg-orange-100';
    if (id.includes('usage') || id.includes('mots')) return 'bg-purple-100';
    if (id.includes('temps') || id.includes('verbaux')) return 'bg-blue-100';
    if (id.includes('differences') || id.includes('francais')) return 'bg-green-100';
    if (id.includes('verbes') || id.includes('speciaux')) return 'bg-indigo-100';
    if (id.includes('expressions') || id.includes('idiomatiques')) return 'bg-yellow-100';
    if (id.includes('complexes') || id.includes('nuances')) return 'bg-pink-100';
    if (id.includes('questions') || id.includes('interrogations')) return 'bg-teal-100';
    if (id.includes('composes') || id.includes('auxiliaires')) return 'bg-cyan-100';
    if (id.includes('subjonctif') || id.includes('subjonctif')) return 'bg-amber-100';
    return 'bg-red-100';
  };

  const getBorderColorForSection = (id: string) => {
    if (id.includes('formes') || id.includes('negatives')) return 'border-red-200';
    if (id.includes('simples') || id.includes('doubles')) return 'border-orange-200';
    if (id.includes('usage') || id.includes('mots')) return 'border-purple-200';
    if (id.includes('temps') || id.includes('verbaux')) return 'border-blue-200';
    if (id.includes('differences') || id.includes('francais')) return 'border-green-200';
    if (id.includes('verbes') || id.includes('speciaux')) return 'border-indigo-200';
    if (id.includes('expressions') || id.includes('idiomatiques')) return 'border-yellow-200';
    if (id.includes('complexes') || id.includes('nuances')) return 'border-pink-200';
    if (id.includes('questions') || id.includes('interrogations')) return 'border-teal-200';
    if (id.includes('composes') || id.includes('auxiliaires')) return 'border-cyan-200';
    if (id.includes('subjonctif') || id.includes('subjonctif')) return 'border-amber-200';
    return 'border-red-200';
  };

  return (
    <Card className={`border-2 ${getBorderColorForSection(section.id)} bg-white hover:shadow-sm transition-shadow`}>
      <CardHeader 
        className="cursor-pointer pb-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getColorForSection(section.id)}`}>
              {getIconForSection(section.id)}
            </div>
            <div>
              <CardTitle className="text-xl text-gray-800">{section.title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">{section.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-red-600 border-red-200">
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
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Règles d'emploi
            </h4>
            <ul className="space-y-2">
              {section.content.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-red-800">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
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

          {/* Points d'attention */}
          {section.content.irregularities && section.content.irregularities.length > 0 && (
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Points d'attention et nuances
              </h4>
              <div className="space-y-3">
                {section.content.irregularities.map((irregularity, index) => (
                  <div key={index} className="bg-white rounded p-3 border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-orange-800">{irregularity.pattern}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {irregularity.examples.map((example, exIndex) => (
                        <span key={exIndex} className="text-xs font-mono bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-orange-700">{irregularity.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conseils */}
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Conseils et astuces
            </h4>
            <ul className="space-y-2">
              {section.content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-purple-800">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
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

export default NegationSectionComponent; 