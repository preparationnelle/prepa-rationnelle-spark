import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu, Rocket, Factory, Zap, Brain } from 'lucide-react';

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

const TechnologieInnovationAllemandePage: React.FC = () => {
  const technologieTopics = [
    {
      id: 1,
      title: "Industrie 4.0 und Digitalisierung",
      icon: <Factory className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist <VocabWord word="Vorreiter" explanation="führend, an erster Stelle" /> bei <VocabWord word="Industrie 4.0" explanation="die vierte industrielle Revolution mit digitalen Technologien" />. Das bedeutet: Fabriken werden digital vernetzt, Maschinen kommunizieren miteinander.
          </>
        ),
        details: (
          <>
            Deutsche Firmen wie Siemens und Bosch investieren Milliarden in die <VocabWord word="Digitalisierung" explanation="die Umstellung auf digitale Technologien" /> ihrer Produktion. <VocabWord word="Smart Factories" explanation="intelligente Fabriken mit vernetzten Maschinen" /> nutzen künstliche Intelligenz und <VocabWord word="Robotik" explanation="Einsatz von Robotern" />, um effizienter zu produzieren. Deutschland hat aber auch Probleme: Die <VocabWord word="Breitbandversorgung" explanation="schnelles Internet für alle" /> ist schlechter als in vielen anderen Ländern. Viele ländliche Regionen haben kein schnelles Internet. Die deutsche <VocabWord word="Bürokratie" explanation="komplizierte Verwaltungsabläufe" /> bremst Innovation. Trotzdem: Deutschland bleibt ein wichtiger <VocabWord word="Standort" explanation="Ort, wo Firmen sich ansiedeln" /> für industrielle Innovation.
          </>
        ),
        essayUsage: "Einstieg über technologische Transformation der deutschen Industrie."
      }
    },
    {
      id: 2,
      title: "Start-up-Szene und Innovation",
      icon: <Rocket className="w-5 h-5" />,
      content: {
        description: (
          <>
            Berlin hat sich zu einem europäischen <VocabWord word="Start-up-Hub" explanation="Zentrum für junge, innovative Firmen" /> entwickelt. Die Stadt zieht <VocabWord word="Gründer" explanation="Menschen, die neue Firmen starten" /> und Investoren aus der ganzen Welt an.
          </>
        ),
        details: (
          <>
            Deutschland hat mehrere <VocabWord word="Einhörner" explanation="Start-ups mit einer Bewertung über 1 Milliarde Dollar" />, darunter N26 (Fintech) und Celonis (Software). Der Staat fördert Innovation durch Programme wie den <VocabWord word="High-Tech Gründerfonds" explanation="staatlicher Fonds, der Start-ups finanziert" />. Trotzdem bleibt Deutschland hinter den USA und China zurück: Es fehlt an <VocabWord word="Risikokapital" explanation="Geld für riskante, innovative Projekte" /> und einer <VocabWord word="Fehlerkultur" explanation="Akzeptanz, dass Scheitern okay ist" />. Deutsche Gründer sind oft zu vorsichtig, während Silicon Valley <VocabWord word="Disruption" explanation="radikale Veränderung etablierter Märkte" /> feiert.
          </>
        ),
        essayUsage: "Beispiel für Innovationskultur und unternehmerisches Ökosystem."
      }
    },
    {
      id: 3,
      title: "Künstliche Intelligenz und Forschung",
      icon: <Brain className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland investiert massiv in <VocabWord word="Künstliche Intelligenz" explanation="KI, Computer, die denken und lernen können" /> (KI). Die Regierung hat eine KI-Strategie mit einem Budget von 5 Milliarden Euro <VocabWord word="verabschiedet" explanation="offiziell beschlossen" />.
          </>
        ),
        details: (
          <>
            Deutschland hat <VocabWord word="Forschungszentren" explanation="Institute, die Forschung machen" /> wie das DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz), die weltweit anerkannt sind. Deutsche Forscher sind stark in <VocabWord word="anwendungsorientierter Forschung" explanation="Forschung, die praktische Probleme löst" />, besonders in Bereichen wie autonomes Fahren und Industrie-KI. Aber: Deutschland fehlt es an großen Tech-Konzernen wie Google oder Microsoft, die KI-Entwicklung <VocabWord word="vorantreiben" explanation="nach vorne bringen, beschleunigen" />. Die Debatte über <VocabWord word="ethische Richtlinien" explanation="moralische Regeln für den Einsatz von Technologie" /> für KI ist in Deutschland besonders intensiv.
          </>
        ),
        essayUsage: "Argumentation über Forschung, ethische Fragen und technologische Souveränität."
      }
    },
    {
      id: 4,
      title: "Elektromobilität und Autoindustrie",
      icon: <Zap className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die deutsche Autoindustrie steht vor einem <VocabWord word="Umbruch" explanation="radikale Veränderung" />. Der Wechsel zu <VocabWord word="Elektromobilität" explanation="elektrische Fahrzeuge statt Benzin/Diesel" /> ist die größte Herausforderung seit Jahrzehnten.
          </>
        ),
        details: (
          <>
            Firmen wie VW, BMW und Mercedes investieren Milliarden in <VocabWord word="E-Mobilität" explanation="elektrische Autos und Infrastruktur" />. Deutschland fördert den Umstieg mit <VocabWord word="Kaufprämien" explanation="Geld vom Staat beim Kauf eines E-Autos" /> und dem Ausbau der <VocabWord word="Ladeinfrastruktur" explanation="Netz von Ladestationen für E-Autos" />. Aber die Transformation ist riskant: China dominiert die Batterieproduktion, und Tesla ist technologisch führend. Deutsche Hersteller müssen aufholen. Gleichzeitig gibt es Sorgen um <VocabWord word="Arbeitsplätze" explanation="Jobs, die verloren gehen können" /> – E-Autos brauchen weniger Teile und Arbeitskräfte. Die Frage: Kann Deutschland die <VocabWord word="Wettbewerbsfähigkeit" explanation="die Fähigkeit, mit anderen zu konkurrieren" /> seiner Schlüsselindustrie erhalten?
          </>
        ),
        essayUsage: "Beispiel für industrielle Transformation und wirtschaftliche Risiken."
      }
    },
    {
      id: 5,
      title: "Cybersicherheit und digitale Souveränität",
      icon: <Cpu className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Cybersicherheit" explanation="Schutz vor digitalen Angriffen" /> ist für Deutschland eine wachsende Priorität. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) warnt regelmäßig vor <VocabWord word="Cyberangriffen" explanation="Attacken auf Computer und Netzwerke" />.
          </>
        ),
        details: (
          <>
            Deutsche Firmen und Behörden sind Ziele von Hackern, oft aus Russland oder China. Der Angriff auf den Bundestag 2015 zeigte die <VocabWord word="Verwundbarkeit" explanation="Schwäche, Anfälligkeit" /> kritischer Infrastruktur. Deutschland diskutiert über <VocabWord word="digitale Souveränität" explanation="Unabhängigkeit in der digitalen Welt" /> – soll Europa eigene Cloud-Dienste und Tech-Plattformen haben, statt auf US-Firmen zu setzen? Projekte wie "Gaia-X" sollen eine europäische Cloud-Infrastruktur schaffen. Die <VocabWord word="Abhängigkeit" explanation="wenn man auf andere angewiesen ist" /> von US-amerikanischen und chinesischen Technologien bleibt ein großes Problem.
          </>
        ),
        essayUsage: "Argumentation über digitale Unabhängigkeit und Sicherheitsrisiken."
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
              Technologie und Innovation
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Technologielandschaft, von Industrie 4.0 bis KI
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Technologie-Kennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">5Mrd€</div>
                <div className="text-sm text-gray-600 mt-1">KI-Strategie Budget</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">800K</div>
                <div className="text-sm text-gray-600 mt-1">Jobs in der Autoindustrie</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">3,5%</div>
                <div className="text-sm text-gray-600 mt-1">F&E-Ausgaben (% des BIP)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {technologieTopics.map((topic) => (
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

export default TechnologieInnovationAllemandePage;