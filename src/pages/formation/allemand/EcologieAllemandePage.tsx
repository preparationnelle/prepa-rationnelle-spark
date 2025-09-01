import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Wind, Sun, Zap, Factory, Car, Users, Globe } from 'lucide-react';

const EcologieAllemandePage: React.FC = () => {
  const ecologieTopics = [
    {
      id: 1,
      title: "Energiewende: Struktur + Solar-Ziel 2024",
      icon: <Sun className="w-5 h-5" />,
      content: {
        description: "Die Energiewende ist zentral für eine zukunftsfähige deutsche Umweltpolitik: der Weg weg von Kernkraft, Kohle und russischem Gas hin zu erneuerbaren Energien und Energieeffizienz ist in vollem Gang.",
        details: "Aktuell wurden im Bereich Photovoltaik 2024 fast 100 GW installiert – deutlich über dem Jahresziel von 88 GW. Das zeigt: Trotz politischer Unsicherheiten wird der PV-Ausbau massiv vorangetrieben. In einem Aufsatz kann dieser Fakt als starkes Beispiel für Durchsetzungskraft genutzt werden – trotz Widerstand – und um die Diskrepanz zwischen Ziel und Realität zu beleuchten.",
        vocabulary: [
          { german: "Energiewende", french: "transition énergétique" },
          { german: "Energieeffizienz", french: "efficacité énergétique" },
          { german: "Photovoltaik", french: "photovoltaïque" },
          { german: "Zielerreichung", french: "atteinte d'un objectif" }
        ],
        essayUsage: "Einstieg über Kontinuität der Energiewende in einer rezessiven Phase."
      }
    },
    {
      id: 2,
      title: "Ausbau der Windkraft + Offshore-Gigant 'He Dreiht'",
      icon: <Wind className="w-5 h-5" />,
      content: {
        description: "Windenergie ist ein zentraler Pfeiler der Energiewende. 2024 stammten 62,7 % der Stromproduktion aus erneuerbaren Energien.",
        details: "Der Ausbau geht rasant voran: Ende 2024 waren 72,75 GW Wind‑Leistung installiert – ein neuer Rekord. Besonders spektakulär: Der Offshore-Windpark 'He Dreiht', mit 960 MW Leistung, soll Ende 2025 ans Netz gehen und rund 1,1 Mio. Haushalte versorgen. In einem Aufsatz illustriert das, wie technologische Großprojekte Teil der praktischen Umsetzung großer Politikkonzepte werden.",
        vocabulary: [
          { german: "Offshore-Windpark", french: "parc éolien offshore" },
          { german: "Rekordwert", french: "valeur record" },
          { german: "Stromversorgung", french: "approvisionnement électrique" },
          { german: "Großprojekt", french: "grand projet" }
        ],
        essayUsage: "Beispiel für Innovationskraft und Infrastrukturentwicklung."
      }
    },
    {
      id: 3,
      title: "Klimagesetz: Rahmen und Reform 2024",
      icon: <Globe className="w-5 h-5" />,
      content: {
        description: "Das Klimaschutzgesetz (KSG) verankert verbindliche Reduktionsziele: −65 % Treibhausgase bis 2030, −88 % bis 2040, Klimaneutralität bis 2045.",
        details: "2024 wurde es reformiert: künftige Überprüfung erfolgt vorausschauend sektorenübergreifend und regiert schneller bei Zielverfehlung. Damit schiebt Deutschland die Umsetzungspflicht systematisch nach oben. Für ein Aufsatz-Argument eignet sich das als Beispiel für institutionelle Anpassung demokratischer Klimaauflagen – juristisch fundiert und generationengerecht.",
        vocabulary: [
          { german: "Klimaschutzgesetz", french: "loi sur la protection du climat" },
          { german: "vorausschauend", french: "anticipatif" },
          { german: "sektorübergreifend", french: "transversal" },
          { german: "Zielverfehlung", french: "non-atteinte d'objectif" }
        ],
        essayUsage: "Illustration rechtsstaatlicher Klimapolitik; Verbindung zwischen Recht und Umwelt."
      }
    },
    {
      id: 4,
      title: "Energiepolitik der neuen Regierung",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: "Im aktuellen Koalitionsvertrag bestätigt die neue Regierung die Ziele: Klimaneutralität bis 2045, 90%-Emissionseinsparung bis 2040 im Einklang mit EU-Zielen.",
        details: "Die Politik bleibt technologieoffen, marktorientiert und pragmatisch – statt dogmatischer Regulierung. Laut AP (2025) zielt Deutschland weiterhin auf 65% Emissionsreduktion bis 2030, Kohleausstieg bis 2038 und über 54% sauberen Stromanteil – trotz Tonverschiebung hin zu Wirtschaft und Innovation. Das ist ein solider Rahmen für Essays über Kontinuität trotz politischer Neuordnung und Balance zwischen Ökologie und Ökonomie.",
        vocabulary: [
          { german: "technologieoffen", french: "technologiquement neutre" },
          { german: "marktorientiert", french: "orienté marché" },
          { german: "Klimaneutralität", french: "neutralité climatique" },
          { german: "Kohleausstieg", french: "abandon du charbon" }
        ],
        essayUsage: "Argument über Kompromisspolitik – Umweltschutz und Wirtschaft."
      }
    },
    {
      id: 5,
      title: "Klimaschutz versus Konjunkturdruck",
      icon: <Leaf className="w-5 h-5" />,
      content: {
        description: "Trotz der ambitionierten Ziele wächst Kritik: Klimaschützer befürchten Verwässerung im Koalitionsprozess – etwa Abschaffung des Verbots für neue Benzin‑/Dieselautos oder Rücknahme fossiler Heizungsverbote.",
        details: "Auch wenn der verbindliche Rahmen bleibt, kommt Klimapolitik nicht mehr mit dem moralischen Führungsanspruch, sondern wirtschaftlich-pragmatisch: 'Wohlstand, Innovation, Wettbewerbsfähigkeit' stehen im Vordergrund. In einem Essay lässt sich hier der Konflikt dramatisieren: Umwelt versus Alltagssorgen – und die Herausforderung, Klimaaktionen sozial akzeptabel zu gestalten.",
        vocabulary: [
          { german: "Verwässerung", french: "affaiblissement" },
          { german: "moralischer Führungsanspruch", french: "leadership moral" },
          { german: "sozial akzeptabel", french: "socialement acceptable" },
          { german: "Klimapolitik", french: "politique climatique" }
        ],
        essayUsage: "Spannungsfeld zwischen politischer Realität und ökologischer Notwendigkeit."
      }
    },
    {
      id: 6,
      title: "Lützerath und Braunkohle",
      icon: <Factory className="w-5 h-5" />,
      content: {
        description: "In den letzten Monaten stand das Dorf Lützerath im Zentrum der Klimadebatte. Klimaaktivisten haben das Dorf besetzt, um gegen den weiteren Abbau von Braunkohle durch RWE zu protestieren.",
        details: "Auch Greta Thunberg wurde bei den Protesten im Januar 2023 festgenommen. Die Regierung entschied, dass die Kohle unter Lützerath wegen der Energiekrise nach dem russischen Angriff auf die Ukraine genutzt werden soll. Das widerspricht teilweise dem Plan, bis 2030 aus der Kohle auszusteigen. Lützerath wurde so zu einem Symbol für den Konflikt zwischen Energieversorgung und Klimaschutz.",
        vocabulary: [
          { german: "Braunkohle", french: "lignite" },
          { german: "Klimaaktivisten", french: "activistes climatiques" },
          { german: "Energiekrise", french: "crise énergétique" },
          { german: "Kohleausstieg", french: "sortie du charbon" }
        ],
        essayUsage: "Exemple de conflit entre sécurité énergétique et protection climatique."
      }
    },
    {
      id: 7,
      title: "Klimabewegung und Proteste",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: "In Deutschland gibt es viele Aktionen von Klimaaktivisten. Die Bewegung Fridays for Future organisiert regelmäßig Demonstrationen, während die Gruppe Letzte Generation radikalere Methoden benutzt.",
        details: "Sie blockieren Straßen, werfen Suppe auf Gemälde oder kleben sich auf den Asphalt. Diese Aktionen sind sehr umstritten. Viele Menschen unterstützen die Klimaziele, aber nicht die Methoden. 2023 gab es sogar Ermittlungen gegen die Letzte Generation wegen 'krimineller Vereinigung'. Bekannte Aktivisten wie Luisa Neubauer setzen dagegen eher auf politische Gespräche und Zusammenarbeit.",
        vocabulary: [
          { german: "Fridays for Future", french: "Vendredis pour l'avenir" },
          { german: "Letzte Generation", french: "Dernière génération" },
          { german: "Klimaaktivisten", french: "activistes climatiques" },
          { german: "Demonstrationen", french: "manifestations" }
        ],
        essayUsage: "Analyse des militantisme écologique et de ses méthodes controversées."
      }
    },
    {
      id: 8,
      title: "Die Grünen in der Politik",
      icon: <Leaf className="w-5 h-5" />,
      content: {
        description: "Die Grünen wurden in den 1980er Jahren gegründet und gehören heute zu den wichtigsten Parteien in Deutschland. Es gibt zwei Flügel: die Fundis, die radikaler und idealistischer sind, und die Realos, die pragmatisch sind und Kompromisse eingehen.",
        details: "Heute haben die Realos die Führung: Annalena Baerbock ist Außenministerin, Robert Habeck Wirtschaftsminister. Sie spielen eine wichtige Rolle in der Ampelkoalition. Die Grünen setzen sich für Klimaschutz ein, müssen ihre Politik aber oft mit der SPD und FDP abstimmen. Ein Beispiel ist das Heizungsgesetz 2023, das viel Kritik ausgelöst hat.",
        vocabulary: [
          { german: "Fundis", french: "fondamentalistes" },
          { german: "Realos", french: "réalistes" },
          { german: "Ampelkoalition", french: "coalition tricolore" },
          { german: "Heizungsgesetz", french: "loi sur le chauffage" }
        ],
        essayUsage: "Étude de l'évolution du parti écologiste allemand et de sa participation au pouvoir."
      }
    },
    {
      id: 9,
      title: "Atomausstieg und erneuerbare Energien",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: "Nach der Katastrophe von Fukushima 2011 beschloss Deutschland den Atomausstieg. Im April 2023 wurden die letzten drei Atomkraftwerke abgeschaltet. Seitdem setzt Deutschland stärker auf erneuerbare Energien.",
        details: "Heute stammen über 52% des Stroms aus Sonne, Wind, Wasser und Biomasse. Ziel der Regierung ist es, bis 2030 mindestens 80% erneuerbaren Strom zu erreichen. 2025 soll der neue Offshore-Windpark 'He Dreiht' mit fast 1 Gigawatt Leistung in Betrieb gehen. Trotzdem ist der Verbrauch von Braunkohle wegen der Energiekrise wieder gestiegen. Das zeigt die Schwierigkeiten der deutschen Energiewende.",
        vocabulary: [
          { german: "Atomausstieg", french: "sortie du nucléaire" },
          { german: "erneuerbare Energien", french: "énergies renouvelables" },
          { german: "Offshore-Windpark", french: "parc éolien offshore" },
          { german: "Energiewende", french: "transition énergétique" }
        ],
        essayUsage: "Analyse de la transition énergétique allemande et de ses défis."
      }
    },
    {
      id: 10,
      title: "Industrie, Mobilität und VW-Skandal",
      icon: <Car className="w-5 h-5" />,
      content: {
        description: "Deutschland ist eine große Industrienation, was oft mit Umweltproblemen verbunden ist. Ein Beispiel ist der VW-Skandal (Dieselgate) von 2015. Volkswagen hatte Abgastests manipuliert, um Dieselautos sauberer erscheinen zu lassen.",
        details: "Der Bundesgerichtshof entschied 2020, dass Käufer Anspruch auf Schadensersatz haben. Heute setzt die Autoindustrie stark auf Elektromobilität. Auch die Politik versucht, die Mobilität nachhaltiger zu machen: Das 9-Euro-Ticket im Sommer 2022 war ein großer Erfolg im öffentlichen Nahverkehr. Seit 2023 gibt es das Deutschlandticket für 49€. Trotzdem bleibt das Auto für viele Menschen wichtig, und die Umstellung ist noch lange nicht abgeschlossen.",
        vocabulary: [
          { german: "Dieselgate", french: "scandale du diesel" },
          { german: "Elektromobilität", french: "électromobilité" },
          { german: "Deutschlandticket", french: "ticket Allemagne" },
          { german: "öffentlicher Nahverkehr", french: "transports publics locaux" }
        ],
        essayUsage: "Exemple de transformation de l'industrie automobile et des politiques de mobilité durable."
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
              Ökologie und Umwelt in Deutschland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine umfassende Analyse der deutschen Umweltpolitik, Energiewende und der Herausforderungen zwischen Klimaschutz und wirtschaftlicher Entwicklung
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Wichtige Umweltkennzahlen (2024-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">100 GW</div>
                <div className="text-green-100">Photovoltaik installiert</div>
              </div>
              <div>
                <div className="text-3xl font-bold">62,7%</div>
                <div className="text-green-100">Erneuerbare Energien</div>
              </div>
              <div>
                <div className="text-3xl font-bold">72,75 GW</div>
                <div className="text-green-100">Windkraft installiert</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2045</div>
                <div className="text-green-100">Klimaneutralität</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {ecologieTopics.map((topic, index) => (
            <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
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
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Détails:</h4>
                        <p className="text-green-700">{topic.content.details}</p>
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
            Chapitre 3: Ökologie und Umwelt
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcologieAllemandePage; 