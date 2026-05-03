import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, BookOpen, Lightbulb, AlertTriangle, Code, MessageSquare, Target, Zap, HelpCircle, Clock, Users, ArrowRight, MapPin, Brain, Calendar, CalendarDays, Clock as ClockIcon, Sun, Moon, CalendarRange } from 'lucide-react';
import { TemporalSection as TemporalSectionType } from '@/data/spanishTemporalData';

interface TemporalSectionProps {
  section: TemporalSectionType;
}

const TemporalSectionComponent: React.FC<TemporalSectionProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIconForSection = (id: string) => {
    if (id.includes('mois') || id.includes('jours') || id.includes('saisons')) return <Calendar className="h-5 w-5 text-blue-600" />;
    if (id.includes('semaine') || id.includes('semaine')) return <CalendarDays className="h-5 w-5 text-green-600" />;
    if (id.includes('dates') || id.includes('dire-dates')) return <CalendarRange className="h-5 w-5 text-purple-600" />;
    if (id.includes('heure') || id.includes('dire-heure')) return <ClockIcon className="h-5 w-5 text-orange-600" />;
    if (id.includes('calcul') || id.includes('mental')) return <Brain className="h-5 w-5 text-indigo-600" />;
    if (id.includes('expressions') || id.includes('temporelles')) return <MessageSquare className="h-5 w-5 text-teal-600" />;
    if (id.includes('contextes') || id.includes('varies')) return <Target className="h-5 w-5 text-pink-600" />;
    if (id.includes('saisonnier') || id.includes('saisonnier')) return <Sun className="h-5 w-5 text-yellow-600" />;
    if (id.includes('specifiques') || id.includes('heures')) return <Clock className="h-5 w-5 text-red-600" />;
    if (id.includes('historiques') || id.includes('dates')) return <MapPin className="h-5 w-5 text-amber-600" />;
    if (id.includes('planification') || id.includes('temporelle')) return <ArrowRight className="h-5 w-5 text-cyan-600" />;
    return <Calendar className="h-5 w-5 text-blue-600" />;
  };

  const getColorForSection = (id: string) => {
    if (id.includes('mois') || id.includes('jours') || id.includes('saisons')) return 'bg-blue-100';
    if (id.includes('semaine') || id.includes('semaine')) return 'bg-green-100';
    if (id.includes('dates') || id.includes('dire-dates')) return 'bg-purple-100';
    if (id.includes('heure') || id.includes('dire-heure')) return 'bg-orange-100';
    if (id.includes('calcul') || id.includes('mental')) return 'bg-indigo-100';
    if (id.includes('expressions') || id.includes('temporelles')) return 'bg-teal-100';
    if (id.includes('contextes') || id.includes('varies')) return 'bg-pink-100';
    if (id.includes('saisonnier') || id.includes('saisonnier')) return 'bg-yellow-100';
    if (id.includes('specifiques') || id.includes('heures')) return 'bg-red-100';
    if (id.includes('historiques') || id.includes('dates')) return 'bg-amber-100';
    if (id.includes('planification') || id.includes('temporelle')) return 'bg-cyan-100';
    return 'bg-blue-100';
  };

  const getBorderColorForSection = (id: string) => {
    if (id.includes('mois') || id.includes('jours') || id.includes('saisons')) return 'border-blue-200';
    if (id.includes('semaine') || id.includes('semaine')) return 'border-green-200';
    if (id.includes('dates') || id.includes('dire-dates')) return 'border-purple-200';
    if (id.includes('heure') || id.includes('dire-heure')) return 'border-orange-200';
    if (id.includes('calcul') || id.includes('mental')) return 'border-indigo-200';
    if (id.includes('expressions') || id.includes('temporelles')) return 'border-teal-200';
    if (id.includes('contextes') || id.includes('varies')) return 'border-pink-200';
    if (id.includes('saisonnier') || id.includes('saisonnier')) return 'border-yellow-200';
    if (id.includes('specifiques') || id.includes('heures')) return 'border-red-200';
    if (id.includes('historiques') || id.includes('dates')) return 'border-amber-200';
    if (id.includes('planification') || id.includes('temporelle')) return 'border-cyan-200';
    return 'border-blue-200';
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
            <Badge variant="outline" className="text-blue-600 border-blue-200">
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
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Règles d'emploi
            </h4>
            <ul className="space-y-2">
              {section.content.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-blue-800">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
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

export default TemporalSectionComponent; 