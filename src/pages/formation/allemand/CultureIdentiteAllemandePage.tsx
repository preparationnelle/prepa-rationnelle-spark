import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Church, History, Smartphone, Palette } from 'lucide-react';

const CultureIdentiteAllemandePage: React.FC = () => {
  const cultureTopics = [
    {
      id: 1,
      title: "Identität und Multikulturalismus",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: "Deutschland ist heute ein multikulturelles Land. Rund 28% der Bevölkerung haben einen Migrationshintergrund. Viele Menschen kommen aus der Türkei, aus Syrien, aus Polen oder aus der Ukraine.",
        details: "Diese Vielfalt verändert die deutsche Identität. Einerseits bereichert sie die Kultur: neue Traditionen, Sprachen und Religionen sind Teil des Alltags. Andererseits gibt es auch Konflikte über Integration, Werte und Zusammenleben. Manche fragen: Was ist heute eigentlich 'deutsch'? Für Essays ist dies ein gutes Beispiel, wie Identität nicht statisch ist, sondern sich ständig verändert.",
        vocabulary: [
          { german: "Identität", french: "identité" },
          { german: "Vielfalt", french: "diversité" },
          { german: "Migrationshintergrund", french: "origine migratoire" },
          { german: "Integration", french: "intégration" },
          { german: "Zusammenleben", french: "cohabitation" }
        ],
        essayUsage: "Einstieg über Wandel der nationalen Identität."
      }
    },
    {
      id: 2,
      title: "Religion und Pluralismus",
      icon: <Church className="w-5 h-5" />,
      content: {
        description: "Deutschland ist offiziell ein säkularer Staat, aber Religion spielt eine Rolle. Traditionell sind viele Menschen katholisch oder evangelisch. Doch die Zahl der Kirchenmitglieder sinkt stark: 2023 traten über 500.000 Menschen aus der Kirche aus.",
        details: "Gleichzeitig wächst der Islam: er ist heute die drittgrößte Religion in Deutschland, mit etwa fünf Millionen Gläubigen. Es gibt Debatten über die Rolle des Islams in der Gesellschaft. Die Kirchensteuer und die Anerkennung muslimischer Organisationen sind aktuelle Themen. Für Essays zeigt dieses Beispiel die Spannung zwischen Tradition und religiösem Pluralismus.",
        vocabulary: [
          { german: "säkular", french: "laïque" },
          { german: "Kirche", french: "église" },
          { german: "Kirchensteuer", french: "impôt religieux" },
          { german: "Islam", french: "islam" },
          { german: "Pluralismus", french: "pluralisme" }
        ],
        essayUsage: "Beleg für gesellschaftliche Vielfalt und Herausforderungen."
      }
    },
    {
      id: 3,
      title: "Historisches Gedächtnis und Vergangenheitsbewältigung",
      icon: <History className="w-5 h-5" />,
      content: {
        description: "Ein wichtiger Teil der deutschen Identität ist die Auseinandersetzung mit der Vergangenheit, besonders mit dem Nationalsozialismus. Deutschland hat viele Denkmäler und Gedenkstätten für den Holocaust.",
        details: "Politiker betonen regelmäßig: 'Nie wieder.' Auch heute spielt das historische Gedächtnis eine Rolle in Debatten über Demokratie und Rechtsextremismus. 2025, mit dem Aufstieg der AfD, warnen viele, die Lehren der Geschichte nicht zu vergessen. Für Essays kann man zeigen, dass die Erinnerungskultur zentral für die politische Identität Deutschlands bleibt.",
        vocabulary: [
          { german: "Vergangenheit", french: "passé" },
          { german: "Vergangenheitsbewältigung", french: "travail de mémoire" },
          { german: "Holocaust", french: "Holocauste" },
          { german: "Gedenkstätte", french: "lieu de mémoire" },
          { german: "Rechtsextremismus", french: "extrême droite" }
        ],
        essayUsage: "Beispiel für Wertebasis und Demokratiebewusstsein."
      }
    },
    {
      id: 4,
      title: "Digitale Kultur und Informationsgesellschaft",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        description: "Die deutsche Gesellschaft verändert sich auch durch die Digitalisierung. Immer mehr Menschen informieren sich über soziale Medien wie Instagram oder TikTok. Das schafft neue Chancen, aber auch Probleme.",
        details: "Fake News, Hate Speech und Desinformation sind große Themen. Die Regierung reagiert mit strengen Datenschutzgesetzen wie der DSGVO und mit neuen Regeln für Plattformen. Gleichzeitig gibt es eine 'digitale Kluft': ältere Menschen haben weniger Zugang zur digitalen Welt, während junge Menschen darin aufwachsen. Für Essays eignet sich dieses Beispiel, um zu zeigen, dass kulturelle Identität heute auch durch Technologie geprägt wird.",
        vocabulary: [
          { german: "Digitalisierung", french: "numérisation" },
          { german: "Fake News", french: "fausses nouvelles" },
          { german: "Datenschutz", french: "protection des données" },
          { german: "soziale Medien", french: "réseaux sociaux" },
          { german: "digitale Kluft", french: "fracture numérique" }
        ],
        essayUsage: "Argument über moderne Gesellschaft und digitale Identität."
      }
    },
    {
      id: 5,
      title: "Kultur, Kunst und Erinnerung",
      icon: <Palette className="w-5 h-5" />,
      content: {
        description: "Deutschland hat eine reiche Kultur: Literatur, Philosophie, Musik, Theater und Kino sind Teil der Identität. Städte wie Berlin sind heute Zentren der Kunst und ziehen Kreative aus aller Welt an.",
        details: "Gleichzeitig ist Kultur ein Ort der Debatte. Viele Künstler setzen sich mit Themen wie Migration, Klimawandel oder Rechtsextremismus auseinander. Festivals wie die Berlinale oder Dokumentationen im Fernsehen prägen das Bild der Gesellschaft. Für Essays zeigt dieser Aspekt, dass Kultur nicht nur Tradition ist, sondern auch ein Spiegel aktueller politischer und sozialer Fragen.",
        vocabulary: [
          { german: "Kultur", french: "culture" },
          { german: "Kunst", french: "art" },
          { german: "Festival", french: "festival" },
          { german: "Gesellschaft", french: "société" },
          { german: "Spiegel", french: "miroir" }
        ],
        essayUsage: "Beispiel für Kultur als Ausdruck gesellschaftlicher Debatten."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
              Deutsche Kultur und Identität
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der kulturellen Vielfalt, des historischen Gedächtnisses und der modernen Identitätsbildung in Deutschland
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Kulturkennzahlen (2023-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">28%</div>
                <div className="text-emerald-100">Migrationshintergrund</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500.000</div>
                <div className="text-emerald-100">Kirchenaustritte 2023</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5 Mio.</div>
                <div className="text-emerald-100">Muslime in Deutschland</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2025</div>
                <div className="text-emerald-100">AfD-Aufstieg</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {cultureTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
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
                      
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-800 mb-2">Détails:</h4>
                        <p className="text-emerald-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-blue-700">{topic.content.essayUsage}</p>
                      </div>

                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-800 mb-2">Wichtige Vokabeln:</h4>
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
            Chapitre 6: Kultur und Gesellschaft
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureIdentiteAllemandePage; 