import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Baby, TrendingDown, MapPin, Heart } from 'lucide-react';

// Component for clickable vocabulary words with German explanations
const VocabWord = ({ word, explanation }: { word: string; explanation: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <span className="relative inline-block" ref={tooltipRef}>
      <span
        className="font-bold text-orange-700 cursor-pointer hover:text-orange-900 transition-colors"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {word}
      </span>
      {showTooltip && (
        <span className="absolute z-50 top-full left-0 mt-2 w-72 p-3 bg-white border-2 border-orange-400 rounded-lg shadow-xl text-sm text-gray-700">
          <span className="font-semibold text-orange-700 block mb-1">Erklärung:</span>
          <span className="text-gray-800">{explanation}</span>
          <span className="absolute bottom-full left-4 border-8 border-transparent border-b-orange-400"></span>
        </span>
      )}
    </span>
  );
};

const DemographieAllemandePage: React.FC = () => {
  const demographieTopics = [
    {
      id: 1,
      title: "Alterung der Bevölkerung",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland gilt 2025 als eines der ältesten Länder der Welt: Das <VocabWord word="Durchschnittsalter" explanation="das mittlere Alter aller Menschen in einem Land" /> liegt bei 46 Jahren. Die Generation der '<VocabWord word="Babyboomer" explanation="Menschen, die zwischen 1946 und 1964 geboren wurden" />' geht in Rente, und bis 2035 werden über 12 Millionen <VocabWord word="Arbeitskräfte" explanation="Menschen, die arbeiten können" /> fehlen.
          </>
        ),
        details: (
          <>
            Diese <VocabWord word="Alterung" explanation="der Prozess, wenn eine Gesellschaft immer älter wird" /> bedroht nicht nur das <VocabWord word="Rentensystem" explanation="das System, das Geld an alte Menschen zahlt" />, sondern auch das Gesundheitssystem. Die Politik reagiert mit einer schrittweisen Anhebung des Renteneintrittsalters und Investitionen in <VocabWord word="Pflegekräfte" explanation="Menschen, die alte oder kranke Menschen pflegen" />. Laut einer Prognose des Statistischen Bundesamts (Januar 2025) könnte die Bevölkerung ohne Migration bis 2040 um fast 10 Millionen <VocabWord word="schrumpfen" explanation="kleiner werden, weniger werden" />. Demografische Alterung ist daher die größte langfristige Herausforderung für Deutschland.
          </>
        ),
        essayUsage: "Einstieg über die demografische Krise und ihre systemischen Folgen."
      }
    },
    {
      id: 2,
      title: "Geburtenrate und Familienpolitik",
      icon: <Baby className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Geburtenrate" explanation="wie viele Babys pro Jahr geboren werden" /> in Deutschland liegt seit Jahren bei etwa 1,4 Kindern pro Frau, deutlich unter dem EU-Durchschnitt. Auch 2024 hat sich dieser Wert nicht verbessert.
          </>
        ),
        details: (
          <>
            Das bedeutet, dass die Bevölkerung ohne <VocabWord word="Zuwanderung" explanation="wenn Menschen aus anderen Ländern nach Deutschland kommen" /> immer weiter schrumpfen würde. Um gegenzusteuern, setzt die Politik auf <VocabWord word="Familienförderung" explanation="politische Maßnahmen, um Familien zu unterstützen" />: Ausbau von Kita-Plätzen, längere <VocabWord word="Elternzeit" explanation="Zeit, in der Eltern zu Hause bei ihren Kindern bleiben können" /> und finanzielle Hilfen wie das <VocabWord word="Elterngeld Plus" explanation="Geld, das der Staat an Eltern zahlt" />. Trotzdem ist die Wirkung begrenzt, da steigende Wohnkosten und unsichere Arbeitsverhältnisse junge Familien belasten. Ein Bericht des DIW Berlin (April 2025) zeigt, dass 35 % der jungen Paare den Kinderwunsch wegen ökonomischer Unsicherheit <VocabWord word="verschieben" explanation="etwas später machen, nicht jetzt" />. Die niedrige Geburtenrate bleibt also ein strukturelles Problem.
          </>
        ),
        essayUsage: "Beleg für strukturelle Schwäche trotz Familienpolitik."
      }
    },
    {
      id: 3,
      title: "Migration als demografische Lösung",
      icon: <TrendingDown className="w-5 h-5" />,
      content: {
        description: (
          <>
            Um den <VocabWord word="Fachkräftemangel" explanation="wenn nicht genug qualifizierte Arbeiter da sind" /> und die Alterung abzufedern, setzt Deutschland auf Migration. Schon heute haben 28 % der Einwohner einen <VocabWord word="Migrationshintergrund" explanation="Menschen, deren Familien aus anderen Ländern kommen" /> (Stand 2024).
          </>
        ),
        details: (
          <>
            Besonders seit dem Ukraine-Krieg stieg die Zuwanderung stark: Allein 2023 kamen über eine Million Menschen nach Deutschland. Das neue <VocabWord word="Fachkräfteeinwanderungsgesetz" explanation="Gesetz, das qualifizierte Arbeiter leichter nach Deutschland kommen lässt" /> (2023/2024) soll qualifizierte Arbeitskräfte aus Indien, den Philippinen oder Nordafrika anziehen. Doch <VocabWord word="Integration" explanation="der Prozess, wie Einwanderer Teil der Gesellschaft werden" /> bleibt eine Herausforderung: Laut einer Studie der Bundesagentur für Arbeit (Februar 2025) arbeiten viele Migranten in Jobs unterhalb ihrer Qualifikation. Migration ist also unverzichtbar, aber nicht ohne soziale Spannungen.
          </>
        ),
        essayUsage: "Beispiel für die Rolle von Migration in der Sicherung der Zukunft."
      }
    },
    {
      id: 4,
      title: "Ost-West-Differenzen und Abwanderung",
      icon: <MapPin className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die demografische Entwicklung ist regional sehr ungleich. Besonders in Ostdeutschland sinkt die Bevölkerung seit Jahren: Laut Statistischem Bundesamt (März 2025) hat Sachsen-Anhalt seit 2000 fast 20 % seiner Einwohner verloren.
          </>
        ),
        details: (
          <>
            Viele junge Menschen ziehen in westdeutsche Städte, zurück bleiben ältere Menschen. Diese <VocabWord word="Landflucht" explanation="wenn Menschen vom Land in die Stadt ziehen" /> erklärt, warum die AfD im Osten so stark ist, während urbane Zentren im Westen eher grün wählen. Die Politik reagiert mit Förderprogrammen, z. B. dem Zukunftszentrum für Deutsche Einheit in Halle (Eröffnung 2028), um <VocabWord word="Perspektiven" explanation="Zukunftschancen, Hoffnungen" /> zu schaffen. Ohne Zuwanderung wird die <VocabWord word="Abwanderung" explanation="wenn Menschen ein Gebiet verlassen" /> im Osten die Spaltung weiter verstärken.
          </>
        ),
        essayUsage: "Argument über Zusammenhänge zwischen Demografie und Politik (AfD-Erfolg)."
      }
    },
    {
      id: 5,
      title: "Soziale Folgen der Demografie",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die Alterung und Schrumpfung der Bevölkerung hat direkte soziale Folgen. Der Arbeitsmarkt verändert sich: Fachkräfte fehlen, während <VocabWord word="prekäre Jobs" explanation="unsichere Arbeit mit schlechten Bedingungen" /> zunehmen.
          </>
        ),
        details: (
          <>
            Frauen, Migranten und junge Menschen sind besonders betroffen. Laut DIW (April 2025) arbeiten 22 % der Beschäftigten im <VocabWord word="Niedriglohnsektor" explanation="Bereich mit sehr niedrigen Löhnen" />. Dazu kommen steigende Gesundheitskosten: Bis 2030 werden die Ausgaben für <VocabWord word="Pflege" explanation="die Betreuung von alten oder kranken Menschen" /> um fast 40 % steigen. Diese Probleme verstärken die soziale <VocabWord word="Ungleichheit" explanation="wenn einige Menschen viel mehr haben als andere" />. Die Debatte um das <VocabWord word="Bürgergeld" explanation="Sozialhilfe für Menschen ohne Arbeit" /> (2023 eingeführt, 2025 reformiert) zeigt, wie stark demografische Faktoren die Sozialpolitik prägen. Deutschland muss also nicht nur die Bevölkerung stabilisieren, sondern auch den sozialen Zusammenhalt sichern.
          </>
        ),
        essayUsage: "Argumentation über direkte soziale Effekte des demografischen Wandels."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/allemand/civilisation">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la civilisation
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Demographie in Deutschland
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der demografischen Herausforderungen und ihrer politischen, sozialen und wirtschaftlichen Auswirkungen auf die deutsche Gesellschaft
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige demografische Kennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">46</div>
                <div className="text-sm text-gray-600 mt-1">Durchschnittsalter (Jahre)</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">1,4</div>
                <div className="text-sm text-gray-600 mt-1">Geburtenrate (Kinder pro Frau)</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">28%</div>
                <div className="text-sm text-gray-600 mt-1">Migrationshintergrund</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {demographieTopics.map((topic) => (
            <Card key={topic.id} className="border shadow-sm">
              <CardHeader className="border-b bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Beschreibung:</h4>
                    <p className="text-gray-700 leading-relaxed">{topic.content.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Détails:</h4>
                    <p className="text-gray-700 leading-relaxed">{topic.content.details}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verwendung in Aufsätzen:</h4>
                    <p className="text-gray-700 leading-relaxed">{topic.content.essayUsage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 pt-8 border-t">
          <Link to="/formation/allemand/civilisation">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemographieAllemandePage; 