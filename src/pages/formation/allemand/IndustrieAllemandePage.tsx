import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Factory, Cpu, Car, Zap, Globe } from 'lucide-react';

const IndustrieAllemandePage: React.FC = () => {
  const industrieTopics = [
    {
      id: 1,
      title: "Krise des deutschen Wirtschaftsmodells",
      icon: <Factory className="w-5 h-5" />,
      content: {
        description: "Das deutsche Wirtschaftsmodell war lange ein Erfolg: starke Industrie, viele Exporte, niedrige Arbeitslosigkeit. Seit 2019 gibt es aber Probleme. 2025 erwartet man fast kein Wachstum.",
        details: "Die Industrie hat Schwierigkeiten wegen hoher Energiepreise, Konkurrenz aus China und USA und schwacher Nachfrage. Früher sprach man vom 'kranken Mann Europas', und viele Ökonomen benutzen diesen Begriff wieder. Besonders die Auto- und Chemieindustrie leiden, weil sie stark vom Export abhängig sind. Gleichzeitig geben die Menschen weniger Geld aus, weil alles teurer wird. Diese Mischung führt zu Stagnation und Unsicherheit. Für einen Aufsatz kann man zeigen, dass ein Modell, das nur auf Exporte und billige Energie gebaut ist, in einer globalen Krise sehr verletzlich wird.",
        vocabulary: [
          { german: "Wachstum", french: "croissance" },
          { german: "Export", french: "exportation" },
          { german: "Nachfrage", french: "demande" },
          { german: "Stagnation", french: "stagnation" },
          { german: "verletzlich", french: "vulnérable" }
        ],
        essayUsage: "Einstieg über die Schwächen des deutschen Modells."
      }
    },
    {
      id: 2,
      title: "Industrie 4.0 und Digitalisierung",
      icon: <Cpu className="w-5 h-5" />,
      content: {
        description: "Deutschland spricht oft von 'Industrie 4.0'. Das bedeutet: Maschinen, Roboter und Computer arbeiten zusammen in der Produktion. Heute gibt es mehr als 260.000 Roboter in deutschen Fabriken.",
        details: "Viele Unternehmen benutzen auch künstliche Intelligenz und Cloud-Systeme. Aber im Vergleich mit anderen Ländern ist Deutschland nicht so weit vorne. Laut EU-Berichten liegt es nur im Mittelfeld bei der Digitalisierung. Kleine Firmen haben oft nicht genug Geld und Personal, um digital zu arbeiten. Es fehlen auch Fachkräfte im IT-Bereich. Deutschland hat also viele Chancen, aber die Umsetzung ist langsam. Für einen Aufsatz kann man zeigen, dass Digitalisierung wichtig für die Zukunft ist, aber Deutschland Probleme mit Geschwindigkeit und Bürokratie hat.",
        vocabulary: [
          { german: "Digitalisierung", french: "numérisation" },
          { german: "Roboter", french: "robot" },
          { german: "künstliche Intelligenz", french: "intelligence artificielle" },
          { german: "Fachkräfte", french: "main-d'œuvre qualifiée" },
          { german: "Bürokratie", french: "bureaucratie" }
        ],
        essayUsage: "Beispiel für Chancen und Hindernisse moderner Industrie."
      }
    },
    {
      id: 3,
      title: "Automobilindustrie unter Druck",
      icon: <Car className="w-5 h-5" />,
      content: {
        description: "Autos sind ein Symbol für Deutschland. Marken wie VW, BMW, Mercedes oder Audi sind weltweit bekannt. Aber 2025 steht die Branche unter Druck.",
        details: "Immer mehr Menschen kaufen Elektroautos, und China ist in diesem Bereich sehr stark. Firmen wie BYD verkaufen billigere Modelle, und deutsche Firmen verlieren Marktanteile. Außerdem gibt es strenge EU-Regeln für CO₂, die Diesel- und Benzinautos unattraktiv machen. VW musste Milliarden wegen des 'Diesel-Skandals' zahlen und setzt jetzt alles auf Elektro. Aber niemand weiß, ob Deutschland seine Spitzenposition behalten kann. Für einen Aufsatz zeigt dieses Beispiel sehr gut, wie Klimapolitik, internationale Konkurrenz und Industrieinteressen in Konflikt kommen.",
        vocabulary: [
          { german: "Automobilindustrie", french: "industrie automobile" },
          { german: "Elektroauto", french: "voiture électrique" },
          { german: "Konkurrenz", french: "concurrence" },
          { german: "Marktanteil", french: "part de marché" },
          { german: "Regeln", french: "règles" }
        ],
        essayUsage: "Beispiel für Transformation einer Schlüsselindustrie."
      }
    },
    {
      id: 4,
      title: "Energiepreise und Deindustrialisierung",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: "Die Energiekrise nach 2022 hat viele Probleme gebracht. Gas und Strom sind viel teurer geworden. Besonders die Chemie- und Metallindustrie leiden darunter.",
        details: "Große Firmen wie BASF haben Teile der Produktion ins Ausland verlagert, wo Energie billiger ist, zum Beispiel in die USA. Kleine Firmen können das nicht, und viele fürchten eine 'Deindustrialisierung' in Deutschland. Die Regierung reagiert mit Subventionen für Betriebe und mit Investitionen in erneuerbare Energien. Es gibt neue LNG-Terminals, und Wind- und Solarkraft werden stärker gefördert. Aber die Lage bleibt unsicher. Für einen Aufsatz zeigt dieser Punkt, wie stark Energiepolitik und Wirtschaft zusammenhängen.",
        vocabulary: [
          { german: "Energiepreise", french: "prix de l'énergie" },
          { german: "Produktion", french: "production" },
          { german: "Ausland", french: "étranger" },
          { german: "Deindustrialisierung", french: "désindustrialisation" },
          { german: "Subventionen", french: "subventions" }
        ],
        essayUsage: "Beleg für Zusammenhang zwischen Energie und Wirtschaftskraft."
      }
    },
    {
      id: 5,
      title: "Globalisierung und neue Partner",
      icon: <Globe className="w-5 h-5" />,
      content: {
        description: "Deutschland war lange sehr abhängig von globalen Lieferketten. China ist seit Jahren der wichtigste Handelspartner. 2023 betrug das Handelsvolumen fast 300 Milliarden Euro.",
        details: "Aber diese Abhängigkeit wird gefährlich, besonders wegen der Spannungen um Taiwan. Deshalb sucht Deutschland neue Partner. Scholz war in Kanada, um eine Energie-Partnerschaft für LNG und Wasserstoff zu unterschreiben. Auch Chile liefert Lithium für Batterien, und Senegal oder Katar liefern Flüssiggas. Ziel ist: weniger Abhängigkeit von autoritären Staaten, mehr Zusammenarbeit mit Demokratien. Für einen Aufsatz zeigt dieses Beispiel, dass Außenpolitik und Wirtschaftspolitik heute eng verbunden sind.",
        vocabulary: [
          { german: "Handelspartner", french: "partenaire commercial" },
          { german: "Lieferketten", french: "chaînes de production" },
          { german: "Abhängigkeit", french: "dépendance" },
          { german: "Partnerschaft", french: "partenariat" },
          { german: "Rohstoffe", french: "matières premières" }
        ],
        essayUsage: "Argument über neue Balance zwischen Globalisierung und Sicherheit."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
              Deutsche Industrie und Wirtschaft
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der Herausforderungen, Transformationen und Zukunftsperspektiven der deutschen Industrie im 21. Jahrhundert
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Wirtschaftskennzahlen (2023-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">0%</div>
                <div className="text-purple-100">Wachstum 2025</div>
              </div>
              <div>
                <div className="text-3xl font-bold">260.000</div>
                <div className="text-purple-100">Roboter in Fabriken</div>
              </div>
              <div>
                <div className="text-3xl font-bold">300 Mrd. €</div>
                <div className="text-purple-100">Handel mit China</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2019</div>
                <div className="text-purple-100">Beginn der Krise</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {industrieTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${topic.id}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-medium text-gray-700">
                        Détails et analyse
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Beschreibung:</h4>
                        <p className="text-gray-700">{topic.content.description}</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Détails:</h4>
                        <p className="text-purple-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-blue-700">{topic.content.essayUsage}</p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-800 mb-2">Wichtige Vokabeln:</h4>
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
            Chapitre 5: Wirtschaft und Industrie
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrieAllemandePage; 