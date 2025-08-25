import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap, Briefcase, University, Users, Zap } from 'lucide-react';

const EducationAllemandePage: React.FC = () => {
  const educationTopics = [
    {
      id: 1,
      title: "Das Bildungssystem",
      icon: <GraduationCap className="w-5 h-5" />,
      content: {
        description: "Deutschland hat ein föderales Bildungssystem: jedes Bundesland entscheidet selbst über Schulen und Lehrpläne. Es gibt ein dreigliedriges System: Hauptschule, Realschule und Gymnasium.",
        details: "Nach der 4. Klasse (in Bayern nach der 6.) entscheiden Eltern und Lehrer über den weiteren Weg. Kritiker sagen, dass dieses System soziale Ungleichheiten verstärkt: Kinder aus wohlhabenden Familien haben bessere Chancen aufs Gymnasium. Befürworter finden, dass es Talente besser fördert. In einem Aufsatz kann man dies als Beispiel für Chancenungleichheit und Bildungsdebatten nutzen.",
        vocabulary: [
          { german: "föderal", french: "fédéral" },
          { german: "Lehrplan", french: "programme scolaire" },
          { german: "Gymnasium", french: "lycée général" },
          { german: "Chancenungleichheit", french: "inégalité des chances" },
          { german: "dreigliedriges System", french: "système à trois voies" }
        ],
        essayUsage: "Einstieg über Struktur und soziale Folgen des Systems."
      }
    },
    {
      id: 2,
      title: "Berufsausbildung und duales System",
      icon: <Briefcase className="w-5 h-5" />,
      content: {
        description: "Deutschland ist bekannt für sein duales Ausbildungssystem. Junge Menschen lernen in Betrieben und besuchen gleichzeitig Berufsschulen. Dieses Modell gilt als Erfolgsrezept, weil es praktische Erfahrung mit Theorie verbindet.",
        details: "Rund 50% der Jugendlichen machen eine Ausbildung. Doch seit einigen Jahren sinkt die Zahl der Auszubildenden, weil mehr junge Menschen lieber studieren. Gleichzeitig klagen Betriebe über Fachkräftemangel. 2025 suchen viele Unternehmen händeringend Lehrlinge, besonders im Handwerk und in der Pflege. In einem Aufsatz kann man dies als Beispiel für Fachkräftemangel und Arbeitsmarktprobleme nennen.",
        vocabulary: [
          { german: "duales System", french: "système dual" },
          { german: "Ausbildung", french: "formation professionnelle" },
          { german: "Lehrling", french: "apprenti" },
          { german: "Fachkräftemangel", french: "pénurie de main-d'œuvre" },
          { german: "Berufsschule", french: "école professionnelle" }
        ],
        essayUsage: "Beispiel für Stärken und Probleme des Arbeitsmarkts."
      }
    },
    {
      id: 3,
      title: "Hochschulen und Forschung",
      icon: <University className="w-5 h-5" />,
      content: {
        description: "Deutschland hat viele renommierte Universitäten, wie die LMU München, die HU Berlin oder Heidelberg. Es gibt keine Studiengebühren (außer in Baden-Württemberg für Ausländer), was den Zugang erleichtert.",
        details: "Das Land ist attraktiv für internationale Studierende: 2024 gab es über 400.000 ausländische Studenten. Gleichzeitig kämpft das Hochschulsystem mit Problemen: überfüllte Hörsäle, zu wenig Personal, und ein starker Wettbewerb um Forschungsförderung. Die Exzellenzinitiative unterstützt Spitzenuniversitäten, aber viele sehen ein Zwei-Klassen-System entstehen. Für Essays zeigt dieses Beispiel den Spagat zwischen Bildungsgerechtigkeit und Leistungsorientierung.",
        vocabulary: [
          { german: "Universität", french: "université" },
          { german: "Forschung", french: "recherche" },
          { german: "Exzellenzinitiative", french: "initiative d'excellence" },
          { german: "Zugang", french: "accès" },
          { german: "Studiengebühren", french: "frais de scolarité" }
        ],
        essayUsage: "Argument über Bildung als Standortfaktor."
      }
    },
    {
      id: 4,
      title: "Bildungsgerechtigkeit und Integration",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: "Ein großes Thema ist die Chancengleichheit im deutschen Bildungssystem. Kinder aus Migrantenfamilien oder sozial schwachen Haushalten haben es oft schwerer.",
        details: "Laut einer Studie von 2023 verlassen immer noch viele Jugendliche die Schule ohne Abschluss – besonders in Großstädten. Gleichzeitig gibt es Förderprogramme wie Sprachkurse oder Ganztagsschulen, um Integration zu verbessern. Die Debatte bleibt: Ist das deutsche System gerecht oder verstärkt es Ungleichheit? In einem Aufsatz kann man dies als Beispiel für soziale Probleme und Integrationsfragen nutzen.",
        vocabulary: [
          { german: "Chancengleichheit", french: "égalité des chances" },
          { german: "Abschluss", french: "diplôme" },
          { german: "Ganztagsschule", french: "école à journée complète" },
          { german: "Integration", french: "intégration" },
          { german: "Förderprogramme", french: "programmes de soutien" }
        ],
        essayUsage: "Beleg für Zusammenhang Bildung – soziale Herkunft."
      }
    },
    {
      id: 5,
      title: "Zukunft der Bildung",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: "Die Digitalisierung verändert das Lernen. Immer mehr Schulen nutzen Tablets, Lernplattformen und KI-gestützte Programme. Doch es gibt Unterschiede: manche Schulen sind modern ausgestattet, andere haben nicht einmal stabiles Internet.",
        details: "Auch die Lehrerfortbildung hinkt oft hinterher. Gleichzeitig diskutiert man über neue Kompetenzen: Programmieren, digitale Medien und Nachhaltigkeit sollen fester Teil des Unterrichts werden. 2025 bleibt die Herausforderung, alle Schüler auf die Zukunft vorzubereiten. Für Essays zeigt dieses Thema die Verbindung von Bildung, Technologie und Gesellschaft.",
        vocabulary: [
          { german: "Digitalisierung", french: "numérisation" },
          { german: "Ausstattung", french: "équipement" },
          { german: "Lehrerfortbildung", french: "formation des enseignants" },
          { german: "Nachhaltigkeit", french: "durabilité" },
          { german: "Lernplattformen", french: "plateformes d'apprentissage" }
        ],
        essayUsage: "Beispiel für Modernisierung und ungleiche Chancen."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              Das deutsche Bildungssystem
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der Struktur, Herausforderungen und Zukunftsperspektiven des deutschen Bildungswesens
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Bildungszahlen (2024-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">50%</div>
                <div className="text-blue-100">Jugendliche in Ausbildung</div>
              </div>
              <div>
                <div className="text-3xl font-bold">400.000</div>
                <div className="text-blue-100">Ausländische Studenten</div>
              </div>
              <div>
                <div className="text-3xl font-bold">16</div>
                <div className="text-blue-100">Bundesländer</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2025</div>
                <div className="text-blue-100">Fachkräftemangel</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {educationTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
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
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Détails:</h4>
                        <p className="text-blue-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-cyan-700">{topic.content.essayUsage}</p>
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
            Chapitre 7: Bildung und Ausbildung
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAllemandePage; 