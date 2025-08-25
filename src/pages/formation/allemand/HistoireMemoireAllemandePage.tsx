import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Split, Shield, Building, Calendar, Eye } from 'lucide-react';

const HistoireMemoireAllemandePage: React.FC = () => {
  const histoireTopics = [
    {
      id: 1,
      title: "Teilung und Wiedervereinigung",
      icon: <Split className="w-5 h-5" />,
      content: {
        description: "Deutschland war von 1949 bis 1990 geteilt: BRD im Westen und DDR im Osten. Die Mauer in Berlin war das wichtigste Symbol dieser Teilung.",
        details: "Am 3. Oktober 1990 kam die Wiedervereinigung. Viele Menschen sahen das als 'Glücksfall der Geschichte'. Doch bis heute gibt es Unterschiede: im Osten sind die Löhne niedriger und die AfD ist stärker, im Westen sind die Grünen erfolgreicher. 2025 feiert Deutschland 35 Jahre Einheit. Für Essays zeigt dies, dass die deutsche Geschichte bis heute Spuren im politischen und sozialen Leben hinterlässt.",
        vocabulary: [
          { german: "Teilung", french: "division" },
          { german: "Wiedervereinigung", french: "réunification" },
          { german: "Mauer", french: "mur" },
          { german: "Unterschiede", french: "différences" },
          { german: "Einheit", french: "unité" }
        ],
        essayUsage: "Einstieg über Ost-West-Spaltung als Folge der Geschichte."
      }
    },
    {
      id: 2,
      title: "Zweiter Weltkrieg und Holocaust",
      icon: <Shield className="w-5 h-5" />,
      content: {
        description: "Ein zentraler Teil der Erinnerungskultur ist der Holocaust. Deutschland hat Denkmäler wie das Holocaust-Mahnmal in Berlin und Gedenkstätten in ehemaligen Lagern.",
        details: "In Schulen gehört der Holocaust fest zum Unterricht. Politiker wiederholen: 'Nie wieder.' Trotzdem gibt es heute Debatten, besonders mit dem Aufstieg der AfD. Manche wollen die Erinnerung relativieren. 2025 warnte Bundespräsident Steinmeier erneut, dass das Vergessen gefährlich sei. Für Essays kann man dies als Beispiel nutzen, wie Vergangenheit die Gegenwart prägt und die Demokratie schützt.",
        vocabulary: [
          { german: "Holocaust", french: "Holocauste" },
          { german: "Gedenkstätte", french: "lieu de mémoire" },
          { german: "Mahnmal", french: "mémorial" },
          { german: "Erinnerung", french: "mémoire" },
          { german: "Demokratie", french: "démocratie" }
        ],
        essayUsage: "Beispiel für Wertebasis der Bundesrepublik."
      }
    },
    {
      id: 3,
      title: "Leben in der DDR",
      icon: <Building className="w-5 h-5" />,
      content: {
        description: "Die DDR war eine Diktatur: es gab keine freien Wahlen, und die Stasi überwachte die Bürger. Viele Menschen hatten Angst, ihre Meinung zu sagen.",
        details: "Gleichzeitig gab es auch soziale Vorteile wie günstige Mieten und Arbeitsplätze für alle. Nach der Einheit mussten sich die Ostdeutschen an ein neues System gewöhnen. Manche fühlten sich benachteiligt, was noch heute im Wahlverhalten sichtbar ist. 2025 gibt es viele Dokumentarfilme und Ausstellungen über das Leben in der DDR, besonders für junge Generationen. Für Essays kann man zeigen, dass Erinnerung nicht nur den Nationalsozialismus betrifft, sondern auch die DDR-Vergangenheit.",
        vocabulary: [
          { german: "Diktatur", french: "dictature" },
          { german: "Überwachung", french: "surveillance" },
          { german: "Stasi", french: "police politique" },
          { german: "Einheit", french: "unité" },
          { german: "Erinnerungskultur", french: "culture de mémoire" }
        ],
        essayUsage: "Beispiel für Aufarbeitung verschiedener Vergangenheiten."
      }
    },
    {
      id: 4,
      title: "Erinnerungspolitik und Gedenktage",
      icon: <Calendar className="w-5 h-5" />,
      content: {
        description: "Deutschland hat viele offizielle Gedenktage: der 8. Mai erinnert an das Ende des Zweiten Weltkriegs, der 9. November an den Mauerfall und der 3. Oktober ist der Tag der Deutschen Einheit.",
        details: "2025 fanden große Feierlichkeiten zum 35. Jubiläum der Einheit statt, mit Reden von Politikern aus Ost und West. Diese Tage sind wichtig, weil sie die gemeinsame Identität stärken. Für Essays zeigt das Beispiel, wie nationale Geschichte durch Rituale und Feste lebendig bleibt.",
        vocabulary: [
          { german: "Gedenktag", french: "journée commémorative" },
          { german: "Feier", french: "fête" },
          { german: "Jubiläum", french: "anniversaire" },
          { german: "Einheit", french: "unité" },
          { german: "Identität", french: "identité" }
        ],
        essayUsage: "Beispiel für die Bedeutung kollektiver Erinnerung."
      }
    },
    {
      id: 5,
      title: "Erinnerungskultur heute",
      icon: <Eye className="w-5 h-5" />,
      content: {
        description: "Die Erinnerungskultur verändert sich. Zeitzeugen des Zweiten Weltkriegs sterben, und neue Generationen übernehmen die Verantwortung.",
        details: "Digitale Projekte, wie virtuelle Rundgänge durch KZs oder Online-Archive, machen Geschichte für junge Menschen greifbar. Gleichzeitig gibt es Konflikte: Wie geht man mit Kolonialgeschichte um? Soll Deutschland auch an Verbrechen in Afrika erinnern? 2025 wurden in Berlin neue Ausstellungen zur Kolonialzeit eröffnet. Das zeigt, dass Erinnerungskultur nicht nur Vergangenheit, sondern auch Zukunft bedeutet. Für Essays ist das ein gutes Beispiel für eine Gesellschaft, die sich ständig neu mit ihrer Geschichte auseinandersetzt.",
        vocabulary: [
          { german: "Zeitzeugen", french: "témoins" },
          { german: "virtuelle Rundgänge", french: "visites virtuelles" },
          { german: "Kolonialgeschichte", french: "histoire coloniale" },
          { german: "Verantwortung", french: "responsabilité" },
          { german: "Zukunft", french: "avenir" }
        ],
        essayUsage: "Argument über Erinnerung als dynamischer Prozess."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-neutral-50">
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
              Geschichte und Erinnerungskultur in Deutschland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der historischen Entwicklung, der Teilung, der Wiedervereinigung und der Kultur mémorielle
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-stone-600 to-neutral-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige historische Daten und Jubiläen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">35</div>
                <div className="text-stone-100">Jahre Einheit</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1949-1990</div>
                <div className="text-stone-100">Zeit der Teilung</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3. Oktober</div>
                <div className="text-stone-100">Tag der Einheit</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2025</div>
                <div className="text-stone-100">Neue Ausstellungen</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {histoireTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 rounded-lg text-stone-600">
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
                      
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-stone-800 mb-2">Détails:</h4>
                        <p className="text-stone-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-neutral-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-neutral-700">{topic.content.essayUsage}</p>
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
            Chapitre 10: Geschichte und Erinnerung
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoireMemoireAllemandePage; 