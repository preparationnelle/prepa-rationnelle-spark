import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe2, Shield, Users, Flag, Building } from 'lucide-react';

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
      <span className="font-bold text-orange-700 cursor-pointer hover:text-orange-900 transition-colors" onClick={() => setShowTooltip(!showTooltip)}>
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

const GeopolitiqueEuropeennePage: React.FC = () => {
  const geopolitikTopics = [
    {
      id: 1,
      title: "Deutschland in der Europäischen Union",
      icon: <Globe2 className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist die größte <VocabWord word="Wirtschaftsmacht" explanation="Land mit der stärksten Wirtschaft" /> in der EU und spielt eine zentrale Rolle. Mit 83 Millionen Einwohnern stellt es die meisten Abgeordneten im <VocabWord word="Europäischen Parlament" explanation="das gewählte Parlament der Europäischen Union" />.
          </>
        ),
        details: (
          <>
            Deutschland ist einer der größten <VocabWord word="Nettozahler" explanation="Land, das mehr Geld einzahlt als es zurückbekommt" /> der EU und finanziert viele europäische Programme. Die <VocabWord word="deutsch-französische Freundschaft" explanation="enge Zusammenarbeit zwischen Deutschland und Frankreich" /> bildet oft den <VocabWord word="Motor" explanation="treibende Kraft" /> der EU-Politik. Deutschland setzt sich für eine <VocabWord word="vertiefte Integration" explanation="engere Zusammenarbeit der EU-Länder" /> ein, besonders bei Wirtschaft und Außenpolitik. Aber: Der Brexit und der Aufstieg <VocabWord word="euroskeptischer" explanation="gegen die EU kritisch eingestellte" /> Parteien stellen Deutschland vor Herausforderungen. Die Frage: Wie kann Deutschland die EU <VocabWord word="zusammenhalten" explanation="verhindern, dass die EU auseinanderfällt" />?
          </>
        ),
        essayUsage: "Einstieg über Deutschlands Führungsrolle und europäische Integration."
      }
    },
    {
      id: 2,
      title: "NATO und Verteidigungspolitik",
      icon: <Shield className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist Mitglied der <VocabWord word="NATO" explanation="Nordatlantische Verteidigungsallianz, militärisches Bündnis" /> seit 1955. Nach dem Ukraine-Krieg 2022 begann eine <VocabWord word="Zeitenwende" explanation="großer historischer Wendepunkt" /> in der deutschen Verteidigungspolitik.
          </>
        ),
        details: (
          <>
            Deutschland stellte ein <VocabWord word="Sondervermögen" explanation="extra Budget für einen besonderen Zweck" /> von 100 Milliarden Euro für die <VocabWord word="Bundeswehr" explanation="die deutsche Armee" /> bereit und erhöhte die Verteidigungsausgaben auf über 2% des BIP – eine NATO-Forderung, die Deutschland lange nicht erfüllt hatte. Die <VocabWord word="pazifistische" explanation="gegen Krieg und Gewalt eingestellte" /> Tradition Deutschlands kollidiert mit der neuen <VocabWord word="Bedrohungslage" explanation="gefährliche Situation, Sicherheitsrisiko" /> durch Russland. Deutschland diskutiert über seine Rolle: Soll es ein "normaler" NATO-Partner werden und mehr militärische <VocabWord word="Verantwortung" explanation="Pflicht, Aufgabe" /> übernehmen?
          </>
        ),
        essayUsage: "Beispiel für den Wandel deutscher Sicherheitspolitik nach 2022."
      }
    },
    {
      id: 3,
      title: "Beziehungen zu Russland und China",
      icon: <Building className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die deutschen <VocabWord word="Außenbeziehungen" explanation="diplomatische Beziehungen zu anderen Ländern" /> zu Russland und China haben sich dramatisch verändert. Früher setzte Deutschland auf "<VocabWord word="Wandel durch Handel" explanation="die Idee, dass Handel zu politischen Veränderungen führt" />".
          </>
        ),
        details: (
          <>
            Deutschlands <VocabWord word="Energieabhängigkeit" explanation="starke Abhängigkeit von Energie aus anderen Ländern" /> von russischem Gas wurde durch den Ukraine-Krieg zum Problem. Die Regierung musste schnell alternative Energiequellen finden und baute <VocabWord word="LNG-Terminals" explanation="Terminals für Flüssiggas-Import" />. Auch die Beziehungen zu China sind kompliziert: China ist Deutschlands größter Handelspartner, aber auch ein <VocabWord word="systemischer Rivale" explanation="Konkurrent mit anderem politischem System" />. Deutsche Firmen sind stark in China <VocabWord word="engagiert" explanation="aktiv, investiert" />, doch die Regierung verlangt "<VocabWord word="Diversifizierung" explanation="Vielfalt, nicht nur auf ein Land setzen" />". Der Spagat zwischen wirtschaftlichen Interessen und politischen Werten bleibt schwierig.
          </>
        ),
        essayUsage: "Argumentation über Abhängigkeiten und außenpolitische Dilemmata."
      }
    },
    {
      id: 4,
      title: "Deutsche Entwicklungspolitik",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist einer der größten <VocabWord word="Geber" explanation="Länder, die Geld für Entwicklungshilfe geben" /> von <VocabWord word="Entwicklungshilfe" explanation="finanzielle und technische Unterstützung für ärmere Länder" /> weltweit. Das Ziel: ärmeren Ländern helfen und globale Probleme wie Armut und Klimawandel bekämpfen.
          </>
        ),
        details: (
          <>
            Deutschland gibt jährlich über 25 Milliarden Euro für Entwicklungspolitik aus. Schwerpunkte sind Afrika und der Nahe Osten. Die Regierung fördert Projekte in Bildung, <VocabWord word="nachhaltige Entwicklung" explanation="Entwicklung, die die Umwelt nicht zerstört" /> und <VocabWord word="Klimaanpassung" explanation="Maßnahmen, um sich an den Klimawandel anzupassen" />. Kritiker sagen: Deutsche Hilfe ist oft an wirtschaftliche <VocabWord word="Eigeninteressen" explanation="eigene Vorteile, die man selbst haben will" /> gebunden. Deutschland will Migration <VocabWord word="bekämpfen" explanation="reduzieren, verhindern" />, indem es die Lebensbedingungen in Herkunftsländern verbessert. Die Frage: Ist das echte <VocabWord word="Solidarität" explanation="Zusammenhalt, gegenseitige Unterstützung" /> oder Eigennutz?
          </>
        ),
        essayUsage: "Beispiel für globale Verantwortung und entwicklungspolitische Strategien."
      }
    },
    {
      id: 5,
      title: "Multilateralismus und UN",
      icon: <Flag className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland setzt stark auf <VocabWord word="Multilateralismus" explanation="Zusammenarbeit vieler Länder in internationalen Organisationen" /> und die <VocabWord word="Vereinten Nationen" explanation="United Nations, internationale Organisation für Frieden" /> (UN). Deutschland will die internationale <VocabWord word="regelbasierte Ordnung" explanation="System mit Regeln für alle Länder" /> stärken.
          </>
        ),
        details: (
          <>
            Deutschland war bereits mehrfach <VocabWord word="nicht-ständiges Mitglied" explanation="temporäres Mitglied ohne Vetorecht" /> im UN-Sicherheitsrat und strebt einen permanenten Sitz an. Deutschland unterstützt UN-Missionen für Frieden und <VocabWord word="humanitäre Hilfe" explanation="Hilfe für Menschen in Not" />. Bundespräsident Steinmeier betont immer wieder: Deutschland muss mehr <VocabWord word="Verantwortung übernehmen" explanation="sich mehr engagieren, mehr tun" /> in der Welt. Aber die Realität ist kompliziert: Die UN ist oft <VocabWord word="gelähmt" explanation="handlungsunfähig" /> durch Vetos. Deutschland sucht nach neuen Wegen, internationale Ordnung zu gestalten.
          </>
        ),
        essayUsage: "Argumentation über internationale Kooperation und Deutschlands globale Rolle."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
              Geopolitik und Außenpolitik
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Rolle in der EU, NATO und internationalen Beziehungen
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige geopolitische Kennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">27</div>
                <div className="text-sm text-gray-600 mt-1">EU-Mitgliedstaaten</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">2%</div>
                <div className="text-sm text-gray-600 mt-1">Verteidigungsausgaben (% des BIP)</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">25Mrd€</div>
                <div className="text-sm text-gray-600 mt-1">Entwicklungshilfe pro Jahr</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {geopolitikTopics.map((topic) => (
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

export default GeopolitiqueEuropeennePage;