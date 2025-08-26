import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Baby, TrendingDown, MapPin, Heart } from 'lucide-react';

const DemographieAllemandePage: React.FC = () => {
  const demographieTopics = [
    {
      id: 1,
      title: "Alterung der Bevölkerung",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: "Deutschland gilt 2025 als eines der ältesten Länder der Welt: Das Durchschnittsalter liegt bei 46 Jahren. Die Generation der 'Babyboomer' geht in Rente, und bis 2035 werden über 12 Millionen Arbeitskräfte fehlen.",
        details: "Diese Alterung bedroht nicht nur das Rentensystem, sondern auch das Gesundheitssystem. Die Politik reagiert mit einer schrittweisen Anhebung des Renteneintrittsalters und Investitionen in Pflegekräfte. Laut einer Prognose des Statistischen Bundesamts (Januar 2025) könnte die Bevölkerung ohne Migration bis 2040 um fast 10 Millionen schrumpfen. Demografische Alterung ist daher die größte langfristige Herausforderung für Deutschland.",
        vocabulary: [
          { german: "Alterung", french: "vieillissement" },
          { german: "Babyboomer", french: "baby-boomers" },
          { german: "Rentensystem", french: "système de retraite" },
          { german: "schrumpfen", french: "rétrécir" }
        ],
        essayUsage: "Einstieg über die demografische Krise und ihre systemischen Folgen."
      }
    },
    {
      id: 2,
      title: "Geburtenrate und Familienpolitik",
      icon: <Baby className="w-5 h-5" />,
      content: {
        description: "Die Geburtenrate in Deutschland liegt seit Jahren bei etwa 1,4 Kindern pro Frau, deutlich unter dem EU-Durchschnitt. Auch 2024 hat sich dieser Wert nicht verbessert.",
        details: "Das bedeutet, dass die Bevölkerung ohne Zuwanderung immer weiter schrumpfen würde. Um gegenzusteuern, setzt die Politik auf Familienförderung: Ausbau von Kita-Plätzen, längere Elternzeit und finanzielle Hilfen wie das Elterngeld Plus. Trotzdem ist die Wirkung begrenzt, da steigende Wohnkosten und unsichere Arbeitsverhältnisse junge Familien belasten. Ein Bericht des DIW Berlin (April 2025) zeigt, dass 35 % der jungen Paare den Kinderwunsch wegen ökonomischer Unsicherheit verschieben. Die niedrige Geburtenrate bleibt also ein strukturelles Problem.",
        vocabulary: [
          { german: "Geburtenrate", french: "taux de natalité" },
          { german: "Elterngeld", french: "allocation parentale" },
          { german: "Kita", french: "crèche" },
          { german: "verschieben", french: "reporter" }
        ],
        essayUsage: "Beleg für strukturelle Schwäche trotz Familienpolitik."
      }
    },
    {
      id: 3,
      title: "Migration als demografische Lösung",
      icon: <TrendingDown className="w-5 h-5" />,
      content: {
        description: "Um den Fachkräftemangel und die Alterung abzufedern, setzt Deutschland auf Migration. Schon heute haben 28 % der Einwohner einen Migrationshintergrund (Stand 2024).",
        details: "Besonders seit dem Ukraine-Krieg stieg die Zuwanderung stark: Allein 2023 kamen über eine Million Menschen nach Deutschland. Das neue Fachkräfteeinwanderungsgesetz (2023/2024) soll qualifizierte Arbeitskräfte aus Indien, den Philippinen oder Nordafrika anziehen. Doch Integration bleibt eine Herausforderung: Laut einer Studie der Bundesagentur für Arbeit (Februar 2025) arbeiten viele Migranten in Jobs unterhalb ihrer Qualifikation. Migration ist also unverzichtbar, aber nicht ohne soziale Spannungen.",
        vocabulary: [
          { german: "Zuwanderung", french: "immigration" },
          { german: "Fachkräfte", french: "main-d'œuvre qualifiée" },
          { german: "Migrationshintergrund", french: "origine migratoire" },
          { german: "Integration", french: "intégration" }
        ],
        essayUsage: "Beispiel für die Rolle von Migration in der Sicherung der Zukunft."
      }
    },
    {
      id: 4,
      title: "Ost-West-Differenzen und Abwanderung",
      icon: <MapPin className="w-5 h-5" />,
      content: {
        description: "Die demografische Entwicklung ist regional sehr ungleich. Besonders in Ostdeutschland sinkt die Bevölkerung seit Jahren: Laut Statistischem Bundesamt (März 2025) hat Sachsen-Anhalt seit 2000 fast 20 % seiner Einwohner verloren.",
        details: "Viele junge Menschen ziehen in westdeutsche Städte, zurück bleiben ältere Menschen. Diese Landflucht erklärt, warum die AfD im Osten so stark ist, während urbane Zentren im Westen eher grün wählen. Die Politik reagiert mit Förderprogrammen, z. B. dem Zukunftszentrum für Deutsche Einheit in Halle (Eröffnung 2028), um Perspektiven zu schaffen. Ohne Zuwanderung wird die Abwanderung im Osten die Spaltung weiter verstärken.",
        vocabulary: [
          { german: "Abwanderung", french: "exode" },
          { german: "Landflucht", french: "exode rural" },
          { german: "demografische Spaltung", french: "fracture démographique" },
          { german: "Perspektiven", french: "perspectives" }
        ],
        essayUsage: "Argument über Zusammenhänge zwischen Demografie und Politik (AfD-Erfolg)."
      }
    },
    {
      id: 5,
      title: "Soziale Folgen der Demografie",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: "Die Alterung und Schrumpfung der Bevölkerung hat direkte soziale Folgen. Der Arbeitsmarkt verändert sich: Fachkräfte fehlen, während prekäre Jobs zunehmen.",
        details: "Frauen, Migranten und junge Menschen sind besonders betroffen. Laut DIW (April 2025) arbeiten 22 % der Beschäftigten im Niedriglohnsektor. Dazu kommen steigende Gesundheitskosten: Bis 2030 werden die Ausgaben für Pflege um fast 40 % steigen. Diese Probleme verstärken die soziale Ungleichheit. Die Debatte um das Bürgergeld (2023 eingeführt, 2025 reformiert) zeigt, wie stark demografische Faktoren die Sozialpolitik prägen. Deutschland muss also nicht nur die Bevölkerung stabilisieren, sondern auch den sozialen Zusammenhalt sichern.",
        vocabulary: [
          { german: "Niedriglohnsektor", french: "secteur bas-salaire" },
          { german: "Pflegekosten", french: "coûts de soins" },
          { german: "Ungleichheit", french: "inégalité" },
          { german: "Bürgergeld", french: "revenu citoyen" }
        ],
        essayUsage: "Argumentation über direkte soziale Effekte des demografischen Wandels."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-80 left-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-amber-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-50 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-amber-50 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-44 h-44 bg-blue-300 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-10 left-1/2 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 left-2/3 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
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
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Demographie in Deutschland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der demografischen Herausforderungen und ihrer politischen, sozialen und wirtschaftlichen Auswirkungen auf die deutsche Gesellschaft
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              Wichtige demografische Kennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">46</div>
                <div className="text-gray-600">Durchschnittsalter (Jahre)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1,4</div>
                <div className="text-gray-600">Geburtenrate (Kinder pro Frau)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">28%</div>
                <div className="text-gray-600">Migrationshintergrund</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {demographieTopics.map((topic, index) => (
            <Card key={topic.id} className="group bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-200 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 relative z-10">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${topic.id}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-medium text-gray-700">
                        Détails et analyse
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Beschreibung:</h4>
                        <p className="text-gray-700">{topic.content.description}</p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Détails:</h4>
                        <p className="text-gray-600">{topic.content.details}</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-gray-600">{topic.content.essayUsage}</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Wichtige Vokabeln:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {topic.content.vocabulary.map((vocab, vocabIndex) => (
                            <div key={vocabIndex} className="flex justify-between items-center p-2 bg-white rounded border">
                              <span className="font-medium text-gray-800">{vocab.german}</span>
                              <Badge variant="secondary" className="text-xs">
                                {vocab.french}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link to="/formation/allemand/civilisation">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la civilisation
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500">
            Chapitre 2: Demographie
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographieAllemandePage; 