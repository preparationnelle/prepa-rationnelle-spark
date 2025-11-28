import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Wind, Sun, Droplet, TreeDeciduous } from 'lucide-react';

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

const EcologieAllemandePage: React.FC = () => {
  const ecologieTopics = [
    {
      id: 1,
      title: "Die Energiewende",
      icon: <Wind className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Energiewende" explanation="der Wechsel von fossilen zu erneuerbaren Energien" /> ist eines der ambitioniertesten Projekte Deutschlands. Ziel: bis 2045 <VocabWord word="klimaneutral" explanation="keine CO2-Emissionen mehr" /> werden.
          </>
        ),
        details: (
          <>
            Deutschland setzt auf <VocabWord word="erneuerbare Energien" explanation="Energie aus Wind, Sonne, Wasser" /> wie Wind und Sonne. Bereits über 50% des Stroms kommt aus erneuerbaren Quellen. Der <VocabWord word="Atomausstieg" explanation="das Abschalten aller Atomkraftwerke" /> wurde 2023 abgeschlossen – alle Kernkraftwerke sind abgeschaltet. Das ist <VocabWord word="umstritten" explanation="manche sind dafür, manche dagegen" />: Kritiker sagen, ohne Atomkraft steigen die <VocabWord word="Strompreise" explanation="was Strom kostet" /> und Deutschland bleibt abhängig von fossilen Energien. Der Ausbau der Windkraft stockt wegen <VocabWord word="Bürgerprotesten" explanation="wenn Menschen gegen Windräder demonstrieren" /> und <VocabWord word="Bürokratie" explanation="komplizierte Verwaltungsregeln" />. Die Energiewende ist teuer und komplex.
          </>
        ),
        essayUsage: "Einstieg über Klimapolitik und Transformation des Energiesektors."
      }
    },
    {
      id: 2,
      title: "Klimaschutz und CO2-Emissionen",
      icon: <Leaf className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland will seine <VocabWord word="Treibhausgasemissionen" explanation="Gase, die den Klimawandel verursachen" /> drastisch reduzieren. Bis 2030 sollen die Emissionen um 65% gegenüber 1990 sinken.
          </>
        ),
        details: (
          <>
            Die größten <VocabWord word="Emittenten" explanation="Verursacher von CO2" /> sind Industrie und Verkehr. Deutschland führte eine <VocabWord word="CO2-Steuer" explanation="Steuer auf CO2-Ausstoß" /> ein, um klimaschädliches Verhalten zu bestrafen. Fossile Brennstoffe wie Benzin und Heizöl werden teurer. Das ist sozial <VocabWord word="konfliktreich" explanation="sorgt für Streit" />: Ärmere Menschen können sich teure Elektro autos oder neue Heizungen oft nicht leisten. <VocabWord word="Klimaaktivisten" explanation="Menschen, die sich für Klimaschutz einsetzen" /> wie "Fridays for Future" oder die "Letzte Generation" fordern mehr Tempo. Die Regierung steht unter Druck: Klimaschutz ja, aber ohne die Wirtschaft zu <VocabWord word="schädigen" explanation="Schaden zufügen" />.
          </>
        ),
        essayUsage: "Beispiel für klimapolitische Maßnahmen und gesellschaftliche Konflikte."
      }
    },
    {
      id: 3,
      title: "Verkehrswende und Mobilität",
      icon: <Droplet className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Verkehrswende" explanation="Umstellung auf umweltfreundlichere Mobilität" /> soll den Verkehr klimafreundlicher machen. Deutschland fördert E-Autos, Bahn und Fahrräder.
          </>
        ),
        details: (
          <>
            Die Regierung bietet <VocabWord word="Kaufprämien" explanation="Geld vom Staat beim Kauf" /> für Elektroautos und baut die <VocabWord word="Ladeinfrastruktur" explanation="Netz von Ladestationen" /> aus. Das <VocabWord word="9-Euro-Ticket" explanation="sehr günstiges Ticket für öffentliche Verkehrsmittel" /> (später 49-Euro-Ticket) sollte Menschen zum Umstieg auf die Bahn bewegen. Aber: Der Verkehrssektor verfehlt die Klimaziele. Autos dominieren weiterhin, besonders auf dem Land, wo der <VocabWord word="öffentliche Nahverkehr" explanation="Busse und Bahnen in der Region" /> schlecht ausgebaut ist. Die Debatte um ein <VocabWord word="Tempolimit" explanation="Geschwindigkeitsbegrenzung auf Autobahnen" /> auf Autobahnen zeigt: Verkehrswende ist politisch heikel.
          </>
        ),
        essayUsage: "Argumentation über nachhaltige Mobilität und politische Widerstände."
      }
    },
    {
      id: 4,
      title: "Landwirtschaft und Artenschutz",
      icon: <TreeDeciduous className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die deutsche Landwirtschaft steht vor großen Herausforderungen: <VocabWord word="Artensterben" explanation="wenn Tier- und Pflanzenarten verschwinden" />, <VocabWord word="Nitratbelastung" explanation="zu viel Dünger im Grundwasser" /> und <VocabWord word="intensive Tierhaltung" explanation="viele Tiere auf engem Raum" /> sind große Probleme.
          </>
        ),
        details: (
          <>
            Deutschland fördert <VocabWord word="ökologische Landwirtschaft" explanation="umweltfreundliche Landwirtschaft ohne Chemie" />, doch nur 10% der Flächen werden bio bewirtschaftet. Die <VocabWord word="Agrarlobby" explanation="Interessenvertreter der Bauern" /> ist stark und wehrt sich gegen strenge Auflagen. Ein Beispiel: Das Insektensterben ist dramatisch – über 75% der Insekten sind verschwunden. <VocabWord word="Pestizide" explanation="Chemikalien, die Schädlinge töten" /> und <VocabWord word="Monokulturen" explanation="großflächiger Anbau nur einer Pflanzenart" /> sind Hauptursachen. Deutschland muss einen Weg finden, <VocabWord word="Ernährungssicherheit" explanation="genug Essen für alle" /> und Naturschutz zu vereinbaren.
          </>
        ),
        essayUsage: "Beispiel für Spannungen zwischen Ökologie und Wirtschaft."
      }
    },
    {
      id: 5,
      title: "Kreislaufwirtschaft und Recycling",
      icon: <Sun className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland gilt als <VocabWord word="Recycling-Weltmeister" explanation="führend beim Wiederverwerten von Abfall" />. Fast 70% des Mülls werden <VocabWord word="wiederverwertet" explanation="recycelt, wieder verwendet" />. Das <VocabWord word="Pfandsystem" explanation="man bekommt Geld zurück für leere Flaschen" /> für Flaschen ist weltweit bekannt.
          </>
        ),
        details: (
          <>
            Die <VocabWord word="Kreislaufwirtschaft" explanation="Wirtschaft, die Rohstoffe immer wieder verwendet" /> soll Ressourcen schonen. Deutschland hat strenge <VocabWord word="Mülltrennung" explanation="Abfall in verschiedene Kategorien sortieren" /> – viele Touristen sind überrascht von den vielen verschiedenen Mülltonnen. Trotzdem: Viel Plastikmüll wird nicht wirklich recycelt, sondern <VocabWord word="verbrannt" explanation="in Feuer vernichtet" /> oder exportiert. Die Debatte um <VocabWord word="Einwegplastik" explanation="Plastik, das nur einmal benutzt wird" /> und <VocabWord word="Verpackungsmüll" explanation="Müll von Produktverpackungen" /> zeigt: Deutschland muss mehr tun. Die Vision: eine Wirtschaft ohne Abfall.
          </>
        ),
        essayUsage: "Argumentation über nachhaltige Wirtschaft und Ressourcenschonung."
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
              Ökologie und Umweltschutz
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Umweltpolitik, von der Energiewende bis zum Klimaschutz
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Ökologie-Kennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600 mt-1">Erneuerbare Energien im Strommix</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">-65%</div>
                <div className="text-sm text-gray-600 mt-1">CO2-Reduktionsziel bis 2030</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600 mt-1">Recyclingquote</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {ecologieTopics.map((topic) => (
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

export default EcologieAllemandePage;