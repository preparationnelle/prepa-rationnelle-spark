import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Euro, Globe, Zap, Building } from 'lucide-react';

const GeopolitiqueEuropeennePage: React.FC = () => {
  const geopolitiqueTopics = [
    {
      id: 1,
      title: "Zeitenwende & Verteidigungsausgaben",
      icon: <Shield className="w-5 h-5" />,
      content: {
        description: "Der russische Angriff auf die Ukraine 2022 hat eine tiefgreifende Zeitenwende ausgelöst. Zum ersten Mal seit 1945 steht Rüstungspolitik im Zentrum der deutschen Debatte.",
        details: "Lange war die Bundeswehr vernachlässigt, doch jetzt plant die Bundesregierung eine massive Modernisierung. Das Verteidigungsbudget steigt 2025 auf 2,4% des BIP, etwa 62 Milliarden Euro. Bis 2029 soll es 3,5% erreichen, zusätzlich investiert man 1,5% in Infrastruktur mit zivilem und militärischem Nutzen. Damit will Deutschland die stärkste konventionelle Armee Europas aufbauen. Dieses Ziel bedeutet einen tiefen Bruch mit dem traditionellen Pazifismus. Jahrzehntelang galt: Deutschland verlässt sich auf die NATO und setzt auf Diplomatie. Heute aber ist klar, dass Deutschland selbst militärische Verantwortung übernehmen muss. Diese Entwicklung verändert nicht nur die Außenpolitik, sondern auch das Selbstbild der Nation. Der Begriff Zeitenwende beschreibt also nicht nur eine Phase, sondern einen echten Kurswechsel für Deutschland.",
        vocabulary: [
          { german: "Verteidigungsbudget", french: "budget de défense" },
          { german: "Bundeswehr", french: "armée fédérale" },
          { german: "Pazifismus", french: "pacifisme" },
          { german: "Verantwortung", french: "responsabilité" },
          { german: "Kurswechsel", french: "changement de cap" }
        ],
        essayUsage: "Argument über Bruch mit Traditionen, neue Rolle Deutschlands."
      }
    },
    {
      id: 2,
      title: "Haushalt & Schuldenbremse",
      icon: <Euro className="w-5 h-5" />,
      content: {
        description: "Um diese Zeitenwende finanzieren zu können, hat der Bundestag 2025 einen 500-Milliarden-Euro-Fonds beschlossen. Er soll über Jahre die Modernisierung der Bundeswehr und große Infrastrukturprojekte sichern.",
        details: "Damit verbunden ist ein historischer Schritt: Verteidigungsausgaben über ein Prozent des BIP sind künftig von der Schuldenbremse ausgenommen. 2025 plant Deutschland neue Schulden von 143 Milliarden Euro, das entspricht über drei Prozent des BIP. Früher war die Schuldenbremse ein Tabu, heute gilt sie als Hindernis für Sicherheit und Modernisierung. Dieser Richtungswechsel zeigt, dass finanzpolitische Stabilität nicht mehr die höchste Priorität hat. Stattdessen stehen Verteidigungsfähigkeit, Energiesicherheit und Wettbewerbsfähigkeit im Vordergrund. Für viele Deutsche ist es ungewohnt, dass der Staat wieder massiv Geld in die Hand nimmt. Doch ohne diese Investitionen wäre die Bundeswehr nicht einsatzfähig und die Infrastruktur nicht zukunftsfähig. Hier zeigt sich, dass geopolitische Krisen direkten Einfluss auf die Haushalts- und Finanzpolitik haben.",
        vocabulary: [
          { german: "Schuldenbremse", french: "frein à l'endettement" },
          { german: "Fonds", french: "fonds" },
          { german: "Infrastruktur", french: "infrastructure" },
          { german: "Richtungswechsel", french: "changement de direction" },
          { german: "Investitionen", french: "investissements" }
        ],
        essayUsage: "Beleg für ökonomische Folgen der Zeitenwende."
      }
    },
    {
      id: 3,
      title: "Europäische Verteidigung & Readiness 2030",
      icon: <Globe className="w-5 h-5" />,
      content: {
        description: "Die europäische Dimension spielt eine immer größere Rolle in der deutschen Außenpolitik. Gemeinsam mit Frankreich und anderen Partnern will Deutschland die EU unabhängiger machen.",
        details: "Unter dem Programm 'Readiness 2030' sollen bis zu 800 Milliarden Euro für Verteidigung und Infrastruktur mobilisiert werden. Ziel ist eine strategische Autonomie Europas, die es erlaubt, auch ohne die USA handlungsfähig zu bleiben. Für Deutschland bedeutet das, dass es nicht nur seine eigenen Ausgaben erhöht, sondern auch eine Führungsrolle in Europa übernehmen muss. Lange galt Deutschland als 'Handelsstaat', der Sicherheit anderen überlässt. Heute wird es zu einem Akteur, der nicht nur ökonomisch, sondern auch militärisch Verantwortung trägt. Projekte wie ein gemeinsames Kampfflugzeug (FCAS) oder ein neuer Kampfpanzer (MGCS) zeigen diese Ambitionen. Gleichzeitig bleibt die enge Zusammenarbeit mit der NATO wichtig. Europa will also beides: Eigenständigkeit stärken und transatlantische Partnerschaft sichern.",
        vocabulary: [
          { german: "strategische Autonomie", french: "autonomie stratégique" },
          { german: "Verteidigungsinfrastruktur", french: "infrastructure de défense" },
          { german: "Führungsrolle", french: "rôle de leader" },
          { german: "Zusammenarbeit", french: "coopération" },
          { german: "Handlungsfähigkeit", french: "capacité d'action" }
        ],
        essayUsage: "Beispiel für Deutschlands Rolle als Motor europäischer Integration."
      }
    },
    {
      id: 4,
      title: "Energie und Diversifikation",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: "Die Energiekrise nach dem russischen Angriffskrieg hat Deutschland gezwungen, seine Energiepolitik neu auszurichten. Früher kam mehr als die Hälfte des Erdgases aus Russland, heute fast nichts mehr.",
        details: "Stattdessen setzt Deutschland auf Flüssiggas aus den USA, Katar und Norwegen. In Wilhelmshaven und Brunsbüttel wurden neue LNG-Terminals in Rekordzeit gebaut. Gleichzeitig investiert die Regierung stark in erneuerbare Energien, mit dem Ziel, bis 2030 mindestens 80 Prozent des Stroms aus Sonne, Wind und Wasser zu erzeugen. Trotzdem bleibt der Umbau schwierig: Energiepreise sind hoch, viele Unternehmen denken über Produktionsverlagerungen ins Ausland nach. Für den Mittelstand ist das kaum möglich, was die Angst vor einer Deindustrialisierung verstärkt. Außenpolitisch bedeutet das, dass Deutschland neue Energiepartner sucht, etwa in Kanada, Chile oder Senegal. Die Diversifikation ist somit nicht nur Energiepolitik, sondern auch ein Teil der Außenpolitik.",
        vocabulary: [
          { german: "Diversifikation", french: "diversification" },
          { german: "LNG", french: "GNL (gaz naturel liquéfié)" },
          { german: "erneuerbare Energien", french: "énergies renouvelables" },
          { german: "Energiekrise", french: "crise énergétique" },
          { german: "Deindustrialisierung", french: "désindustrialisation" }
        ],
        essayUsage: "Beispiel für Zusammenhang zwischen Energiepolitik und Geopolitik."
      }
    },
    {
      id: 5,
      title: "Transatlantik und globale Rolle",
      icon: <Building className="w-5 h-5" />,
      content: {
        description: "Die Beziehungen zu den USA sind für Deutschland zentral. Unter Präsident Biden arbeiten beide Länder eng zusammen, besonders bei der Unterstützung der Ukraine.",
        details: "Deutschland liefert Waffen, finanziert Hilfen und beteiligt sich an internationalen Missionen. Bundeskanzler Friedrich Merz betont, dass Deutschland zugleich Wachstumslokomotive in Europa und verlässlicher NATO-Partner sein will. Trotzdem gibt es Diskussionen über zu große Abhängigkeit von den USA. Deshalb sucht Deutschland auch nach europäischer Eigenständigkeit. Gleichzeitig baut es neue Partnerschaften auf: mit Kanada im Energiebereich, mit Südamerika beim grünen Wasserstoff, mit afrikanischen Staaten wie Senegal für LNG. Diese Netzwerke zeigen, dass Deutschland sich global neu positioniert. Es will nicht mehr nur wirtschaftlich ein Handelsstaat sein, sondern auch außenpolitisch Verantwortung übernehmen. Damit verändert sich das Selbstverständnis des Landes, das lange Zeit als 'Zivilmacht' beschrieben wurde. Heute ist Deutschland ein Akteur mit globalem Anspruch.",
        vocabulary: [
          { german: "Transatlantik", french: "transatlantique" },
          { german: "Wachstumslokomotive", french: "locomotive de croissance" },
          { german: "Partnerschaft", french: "partenariat" },
          { german: "Eigenständigkeit", french: "autonomie" },
          { german: "Zivilmacht", french: "puissance civile" }
        ],
        essayUsage: "Argument über Deutschlands Selbstbild im Wandel."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
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
              Europäische Geopolitik und Verteidigung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Außenpolitik, der Zeitenwende nach 2022 und der neuen Rolle Deutschlands in Europa und der Welt
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Verteidigungs- und Haushaltskennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">2,4%</div>
                <div className="text-orange-100">Verteidigungsbudget (BIP)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">62 Mrd. €</div>
                <div className="text-orange-100">Verteidigungsausgaben</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500 Mrd. €</div>
                <div className="text-orange-100">Sonderfonds</div>
              </div>
              <div>
                <div className="text-3xl font-bold">143 Mrd. €</div>
                <div className="text-orange-100">Neue Schulden</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {geopolitiqueTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
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
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Détails:</h4>
                        <p className="text-orange-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-blue-700">{topic.content.essayUsage}</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Wichtige Vokabeln:</h4>
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
            Chapitre 4: Europäische Geopolitik
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopolitiqueEuropeennePage; 