import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Building, Heart, DollarSign, TrendingUp } from 'lucide-react';

const FemmesEgaliteAllemandePage: React.FC = () => {
  const femmesTopics = [
    {
      id: 1,
      title: "Politische Partizipation",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: "Frauen haben in Deutschland in den letzten Jahren wichtige politische Rollen übernommen. Das beste Beispiel ist Angela Merkel, die 16 Jahre lang Kanzlerin war und internationale Politik geprägt hat.",
        details: "Heute sind Frauen in vielen Parteien in Führungspositionen: Annalena Baerbock ist Außenministerin, Saskia Esken ist SPD-Vorsitzende. Trotzdem gibt es noch keine Parität im Bundestag: 2025 sind nur etwa 35% der Abgeordneten Frauen. In Essays kann man dies als Beispiel für Fortschritte, aber auch für bestehende Ungleichheit nutzen.",
        vocabulary: [
          { german: "Kanzlerin", french: "chancelière" },
          { german: "Vorsitzende", french: "présidente" },
          { german: "Abgeordnete", french: "députée" },
          { german: "Parität", french: "parité" },
          { german: "Führungspositionen", french: "postes de direction" }
        ],
        essayUsage: "Beispiel für Fortschritt und Grenzen in der Politik."
      }
    },
    {
      id: 2,
      title: "Frauen in der Wirtschaft",
      icon: <Building className="w-5 h-5" />,
      content: {
        description: "In der Wirtschaft sind Frauen oft unterrepräsentiert. In Vorständen der großen DAX-Unternehmen beträgt ihr Anteil 2025 rund 22%.",
        details: "Die gesetzliche Frauenquote von 2021 hat Fortschritte gebracht, aber Männer dominieren weiterhin. Viele Frauen schaffen es nicht in Führungspositionen, weil Familie und Karriere schwer vereinbar sind. Gleichzeitig gibt es erfolgreiche Beispiele, wie Belén Garijo, die Chefin von Merck. Für Essays zeigt dieses Thema die Spannung zwischen Gleichstellung und wirtschaftlicher Realität.",
        vocabulary: [
          { german: "Vorstand", french: "conseil d'administration" },
          { german: "Quote", french: "quota" },
          { german: "Karriere", french: "carrière" },
          { german: "Vereinbarkeit", french: "conciliation" },
          { german: "Gleichstellung", french: "égalité" }
        ],
        essayUsage: "Beispiel für strukturelle Barrieren in der Wirtschaft."
      }
    },
    {
      id: 3,
      title: "Familie und Beruf",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: "Die Vereinbarkeit von Familie und Beruf ist ein wichtiges Thema. Deutschland hat in den letzten Jahren die Elternzeit verlängert und den Kita-Ausbau gefördert.",
        details: "Trotzdem übernehmen Frauen oft den Großteil der Familienarbeit. Viele arbeiten in Teilzeit, was ihre Karrieren bremst. 2025 liegt die Teilzeitquote von Frauen bei etwa 47%, bei Männern nur bei 11%. Für Essays kann man zeigen, dass Gleichstellung nicht nur eine Frage von Politik, sondern auch von gesellschaftlichen Rollenbildern ist.",
        vocabulary: [
          { german: "Elternzeit", french: "congé parental" },
          { german: "Kita", french: "crèche" },
          { german: "Teilzeit", french: "temps partiel" },
          { german: "Rollenbild", french: "stéréotype de rôle" },
          { german: "Familienarbeit", french: "travail domestique" }
        ],
        essayUsage: "Beleg für Zusammenhang zwischen Kultur und Arbeitsmarkt."
      }
    },
    {
      id: 4,
      title: "Gender Pay Gap",
      icon: <DollarSign className="w-5 h-5" />,
      content: {
        description: "Der Gender Pay Gap ist in Deutschland immer noch hoch. 2024 verdienten Frauen im Durchschnitt 18% weniger als Männer.",
        details: "Gründe sind Teilzeitarbeit, geringere Chancen auf Führungspositionen und Unterschiede in der Berufswahl. Die Politik versucht gegenzusteuern, etwa mit Transparenzgesetzen und Quoten. Trotzdem bleibt Deutschland im europäischen Vergleich hinten. Für Essays ist dies ein klares Beispiel für strukturelle Ungleichheit trotz moderner Gesetze.",
        vocabulary: [
          { german: "Lohnunterschied", french: "écart salarial" },
          { german: "Gender Pay Gap", french: "écart de rémunération" },
          { german: "Transparenz", french: "transparence" },
          { german: "Berufswahl", french: "choix de carrière" },
          { german: "Transparenzgesetze", french: "lois de transparence" }
        ],
        essayUsage: "Beleg für unvollendete Gleichstellung."
      }
    },
    {
      id: 5,
      title: "Gesellschaftlicher Wandel",
      icon: <TrendingUp className="w-5 h-5" />,
      content: {
        description: "Die Rolle der Frau in der Gesellschaft verändert sich. Immer mehr Frauen studieren: 2024 waren 52% aller Studierenden Frauen.",
        details: "In vielen Bereichen, wie Medizin oder Rechtswissenschaft, stellen sie die Mehrheit. Gleichzeitig gibt es neue Debatten über Feminismus, Diversität und die Rechte von LGBTQ-Personen. Frauenbewegungen sind in sozialen Medien sehr aktiv und beeinflussen die öffentliche Meinung. Für Essays zeigt dieses Thema, dass Deutschland sich kulturell wandelt: Gleichstellung wird nicht nur gesetzlich, sondern auch gesellschaftlich verhandelt.",
        vocabulary: [
          { german: "Feminismus", french: "féminisme" },
          { german: "Diversität", french: "diversité" },
          { german: "Studierende", french: "étudiants" },
          { german: "Wandel", french: "changement" },
          { german: "Öffentlichkeit", french: "opinion publique" }
        ],
        essayUsage: "Beispiel für kulturellen und sozialen Fortschritt."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
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
              Frauen und Gleichstellung in Deutschland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der politischen Partizipation, der wirtschaftlichen Stellung und des gesellschaftlichen Wandels der Frauen
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Gleichstellungszahlen (2024-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">35%</div>
                <div className="text-pink-100">Frauen im Bundestag</div>
              </div>
              <div>
                <div className="text-3xl font-bold">22%</div>
                <div className="text-pink-100">Frauen in DAX-Vorständen</div>
              </div>
              <div>
                <div className="text-3xl font-bold">18%</div>
                <div className="text-pink-100">Gender Pay Gap</div>
              </div>
              <div>
                <div className="text-3xl font-bold">52%</div>
                <div className="text-pink-100">Studentinnen</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {femmesTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
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
                      
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-pink-800 mb-2">Détails:</h4>
                        <p className="text-pink-700">{topic.content.details}</p>
                      </div>

                      <div className="bg-rose-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-rose-800 mb-2">Verwendung in Aufsätzen:</h4>
                        <p className="text-rose-700">{topic.content.essayUsage}</p>
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
            Chapitre 9: Frauen und Gesellschaft
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemmesEgaliteAllemandePage; 