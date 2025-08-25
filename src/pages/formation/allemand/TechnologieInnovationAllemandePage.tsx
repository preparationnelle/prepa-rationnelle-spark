import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu, Shield, TrendingDown, Scale, Rocket } from 'lucide-react';

const TechnologieInnovationAllemandePage: React.FC = () => {
  const technologieTopics = [
    {
      id: 1,
      title: "Künstliche Intelligenz und technologische Souveränität",
      icon: <Cpu className="w-5 h-5" />,
      content: {
        description: "Deutschland will in Zukunft bei künstlicher Intelligenz (KI) eine führende Rolle spielen. 2025 investiert die Bundesregierung Milliarden in KI-Forschung und Start-ups.",
        details: "Trotzdem liegen die USA und China weit vorne, sowohl in Patenten als auch in Unternehmen. Deutschland setzt stärker auf ethische Regeln und Datenschutz, während andere Länder mehr Risiko eingehen. Ziel ist es, technologische Souveränität zu behalten, also nicht abhängig von ausländischen Technologien zu sein. Für Essays eignet sich das Beispiel KI gut, weil es zeigt, wie Wissenschaft, Ethik und geopolitische Macht verbunden sind.",
        vocabulary: [
          { german: "künstliche Intelligenz", french: "intelligence artificielle" },
          { german: "Forschung", french: "recherche" },
          { german: "Datenschutz", french: "protection des données" },
          { german: "Souveränität", french: "souveraineté" },
          { german: "Start-ups", french: "start-ups" }
        ],
        essayUsage: "Beispiel für Balance zwischen Innovation und Sicherheit."
      }
    },
    {
      id: 2,
      title: "Cybersicherheit und Schutz kritischer Infrastrukturen",
      icon: <Shield className="w-5 h-5" />,
      content: {
        description: "Mit der Digitalisierung wächst die Gefahr von Cyberangriffen. 2024 gab es mehrere Attacken auf deutsche Krankenhäuser und Verwaltungen.",
        details: "Die Regierung reagierte mit neuen Sicherheitszentren und strengeren Gesetzen. 2025 gilt Cybersicherheit als Teil der nationalen Verteidigung. Besonders wichtig ist der Schutz von Energie, Kommunikation und Transport. Für Essays kann man dieses Thema als Beispiel für die Verwundbarkeit moderner Gesellschaften nutzen.",
        vocabulary: [
          { german: "Cybersicherheit", french: "cybersécurité" },
          { german: "Angriff", french: "attaque" },
          { german: "Infrastruktur", french: "infrastructure" },
          { german: "Verteidigung", french: "défense" },
          { german: "Schutz", french: "protection" }
        ],
        essayUsage: "Argument über neue Dimensionen von Sicherheit."
      }
    },
    {
      id: 3,
      title: "Digitaler Rückstand und DESI-Index",
      icon: <TrendingDown className="w-5 h-5" />,
      content: {
        description: "Obwohl Deutschland eine starke Industrie hat, ist es bei der Digitalisierung oft langsam. Im DESI-Index der EU 2024 liegt Deutschland nur im Mittelfeld.",
        details: "Gründe sind Bürokratie, langsames Internet und fehlende Investitionen. Viele Schulen und Behörden arbeiten noch mit Papier statt digital. Im Alltag ist Deutschland weniger digital als Länder wie Estland oder Finnland. Für Essays zeigt dieser Punkt, dass technologische Innovation nicht nur von Industrie abhängt, sondern auch von Politik und Verwaltung.",
        vocabulary: [
          { german: "Rückstand", french: "retard" },
          { german: "Bürokratie", french: "bureaucratie" },
          { german: "Internetanschluss", french: "connexion internet" },
          { german: "Verwaltung", french: "administration" },
          { german: "DESI-Index", french: "indice DESI" }
        ],
        essayUsage: "Beleg für strukturelle Schwächen im digitalen Bereich."
      }
    },
    {
      id: 4,
      title: "Ethik der Technologie",
      icon: <Scale className="w-5 h-5" />,
      content: {
        description: "In Deutschland gibt es viele Debatten über die Ethik neuer Technologien. Sollten Roboter Menschen pflegen dürfen? Darf KI in Gerichten oder in der Polizei eingesetzt werden?",
        details: "Darf man Gesichtserkennung nutzen? Deutschland ist hier vorsichtig und setzt auf Regeln, die die Würde des Menschen schützen. Die DSGVO ist ein Beispiel für diesen Ansatz. Viele sehen darin einen Vorteil: Vertrauen und Sicherheit. Andere kritisieren, dass Deutschland dadurch zu langsam ist und Chancen verpasst. Für Essays eignet sich dieses Beispiel für den Konflikt zwischen Fortschritt und Werten.",
        vocabulary: [
          { german: "Ethik", french: "éthique" },
          { german: "Gesichtserkennung", french: "reconnaissance faciale" },
          { german: "Würde", french: "dignité" },
          { german: "Vertrauen", french: "confiance" },
          { german: "Regeln", french: "règles" }
        ],
        essayUsage: "Argument über Werteorientierung in der Technikpolitik."
      }
    },
    {
      id: 5,
      title: "Innovation und Start-ups",
      icon: <Rocket className="w-5 h-5" />,
      content: {
        description: "Deutschland fördert immer mehr Start-ups im Bereich Technologie, besonders in Berlin, München und Hamburg. Themen sind KI, Biotech, grüne Energie oder Mobilität.",
        details: "2025 gibt es große Investitionsprogramme für junge Firmen. Trotzdem wandern viele Start-ups in die USA, weil dort mehr Kapital und weniger Bürokratie vorhanden sind. Deutschland will diese 'Abwanderung der Talente' stoppen und die eigene Innovationskraft stärken. Für Essays zeigt das Beispiel, wie ein Land versucht, im globalen Wettbewerb attraktiv zu bleiben.",
        vocabulary: [
          { german: "Start-up", french: "start-up" },
          { german: "Investition", french: "investissement" },
          { german: "Biotechnologie", french: "biotechnologie" },
          { german: "Bürokratie", french: "bureaucratie" },
          { german: "Talente", french: "talents" }
        ],
        essayUsage: "Beleg für Konkurrenzfähigkeit im globalen Innovationswettlauf."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
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
              Technologie und Innovation in Deutschland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der technologischen Entwicklung, der Cybersicherheit und der Innovationspolitik im digitalen Zeitalter
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-slate-600 to-sky-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Technologiekennzahlen (2024-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">2025</div>
                <div className="text-slate-100">KI-Investitionen</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Mittelfeld</div>
                <div className="text-slate-100">DESI-Index 2024</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-slate-100">Hauptstädte</div>
              </div>
              <div>
                <div className="text-3xl font-bold">DSGVO</div>
                <div className="text-slate-100">Datenschutz</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {technologieTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
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
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">Détails:</h4>
                        <p className="text-slate-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sky-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-sky-700">{topic.content.essayUsage}</p>
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
            Chapitre 8: Technologie und Digitalisierung
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologieInnovationAllemandePage; 