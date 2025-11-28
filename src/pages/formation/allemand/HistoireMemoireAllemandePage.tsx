import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Flag, Users, Heart, RotateCcw } from 'lucide-react';

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

const HistoireMemoireAllemandePage: React.FC = () => {
  const geschichteTopics = [
    {
      id: 1,
      title: "Vergangenheitsbewältigung und NS-Zeit",
      icon: <BookOpen className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Vergangenheitsbewältigung" explanation="die Aufarbeitung und Auseinandersetzung mit der Vergangenheit" /> ist ein zentraler Begriff der deutschen Identität. Deutschland stellt sich seiner dunklen Vergangenheit, besonders dem <VocabWord word="Nationalsozialismus" explanation="Nazi-Regime von 1933-1945" /> und dem Holocaust.
          </>
        ),
        details: (
          <>
            Nach 1945 begann ein langer Prozess der <VocabWord word="Aufarbeitung" explanation="sich mit etwas schwierigem auseinandersetzen" />. In Schulen wird die NS-Zeit ausführlich unterrichtet, Deutschland hat <VocabWord word="Gedenkstätten" explanation="Orte des Erinnerns an historische Ereignisse" /> wie das Holocaust-Mahnmal in Berlin gebaut. Deutschland zahlt <VocabWord word="Wiedergutmachung" explanation="Entschädigung für vergangenes Unrecht" /> an Überlebende. Diese <VocabWord word="Erinnerungskultur" explanation="wie eine Gesellschaft mit ihrer Geschichte umgeht" /> ist weltweit einzigartig. Bundespräsident Richard von Weizsäcker sagte 1985: "Der 8. Mai war ein Tag der <VocabWord word="Befreiung" explanation="Freiheit erlangen, nicht mehr unterdrückt sein" />." Diese Haltung zeigt: Deutschland übernimmt <VocabWord word="Verantwortung" explanation="die Pflicht, für etwas einzustehen" /> für seine Geschichte.
          </>
        ),
        essayUsage: "Einstieg über Geschichtsbewusstsein und moralische Verantwortung."
      }
    },
    {
      id: 2,
      title: "Die deutsche Wiedervereinigung",
      icon: <Flag className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Wiedervereinigung" explanation="als Ost- und Westdeutschland wieder ein Land wurden" /> am 3. Oktober 1990 war ein historischer Moment. Nach 40 Jahren Teilung wurde Deutschland wieder ein Land.
          </>
        ),
        details: (
          <>
            Der Fall der <VocabWord word="Berliner Mauer" explanation="Mauer, die Ost-Berlin von West-Berlin trennte" /> am 9. November 1989 war der Anfang. Bundeskanzler Helmut Kohl trieb die <VocabWord word="Einheit" explanation="das Zusammenkommen zu einem Land" /> voran. Die Wiedervereinigung war aber schwierig: Ostdeutschland musste einen radikalen <VocabWord word="Systemwechsel" explanation="Veränderung des ökonomischen und politischen Systems" /> von Planwirtschaft zu Marktwirtschaft durchmachen. Viele Ostdeutsche verloren ihre Jobs, die <VocabWord word="Arbeitslosigkeit" explanation="wenn Menschen keine Arbeit haben" /> stieg. Bis heute gibt es ein <VocabWord word="Ost-West-Gefälle" explanation="Unterschiede zwischen Ost und West" />: Der Osten ist ärmer, jünger und politisch anders. Die <VocabWord word="Aufbau Ost" explanation="Programm zum Wiederaufbau Ostdeutschlands" /> kostete Billionen.
          </>
        ),
        essayUsage: "Beispiel für politische Transformation und gesellschaftliche Integration."
      }
    },
    {
      id: 3,
      title: "Erinnerung an die DDR",
      icon: <RotateCcw className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="DDR" explanation="Deutsche Demokratische Republik, Ostdeutschland 1949-1990" /> (Deutsche Demokratische Republik) war ein sozialistischer Staat. Heute gibt es zwei Arten, sich an die DDR zu erinnern:  <VocabWord word="Ostalgie" explanation="Nostalgie für das Leben in der DDR" /> und kritische Aufarbeitung.
          </>
        ),
        details: (
          <>
            Die DDR war eine <VocabWord word="Diktatur" explanation="undemokratisches System mit einem Machthaber" /> mit der <VocabWord word="Stasi" explanation="Staatssicherheit, Geheimpolizei der DDR" /> als Geheimpolizei. Viele Menschen litten unter <VocabWord word="Überwachung" explanation="konstante Kontrolle und Beobachtung" /> und <VocabWord word="Unterdrückung" explanation="wenn Freiheit eingeschränkt wird" />. Aber: Manche Ostdeutsche erinnern sich positiv an soziale <VocabWord word="Sicherheit" explanation="Schutz, Absicherung" /> und <VocabWord word="Solidarität" explanation="Zusammenhalt, gegenseitige Unterstützung" /> in der DDR. Diese "Ostalgie" ist umstritten. Museen wie die Gedenkstätte Hohenschönhausen (ehemaliges Stasi-Gefängnis) zeigen die dunkle Seite. Deutschland muss beide <VocabWord word="Perspektiven" explanation="Sichtweisen, Blickwinkel" /> integrieren.
          </>
        ),
        essayUsage: "Argumentation über Erinnerungspolitik und geteilte Geschichte."
      }
    },
    {
      id: 4,
      title: "Multidirektionale Erinnerung",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland muss heute nicht nur die NS-Zeit erinnern, sondern auch <VocabWord word="koloniale Verbrechen" explanation="Unrecht während der deutschen Kolonialzeit" />. Die Debatte nennt sich "<VocabWord word="multidirektionale Erinnerung" explanation="verschiedene historische Unrechtstaten gleichzeitig erinnern" />".
          </>
        ),
        details: (
          <>
            Deutschland hatte Kolonien in Afrika (Namibia, Tansania, Kamerun) und beging dort <VocabWord word="Völkermord" explanation="systematische Tötung eines Volkes" />, besonders an den Herero und Nama in Namibia (1904-1908). Lange wurde das <VocabWord word="verdrängt" explanation="ignoriert, vergessen gemacht" />. Erst 2021 erkannte Deutschland den Völkermord offiziell an und zahlte <VocabWord word="Entschädigung" explanation="Geld als Ausgleich für erlittenes Unrecht" />. Gleichzeitig gibt es Debatten über die <VocabWord word="Rückgabe" explanation="zurückgeben" /> von Kunstwerken aus Museen, die während der Kolonialzeit <VocabWord word="geraubt" explanation="gestohlen" /> wurden. Deutschland lernt: Erinnerung muss vielfältig sein.
          </>
        ),
        essayUsage: "Beispiel für erweiterte Erinnerungskultur und Post kolonialismus."
      }
    },
    {
      id: 5,
      title: "Geschichtspolitik heute",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Geschichtspolitik" explanation="wie Politik Geschichte nutzt und interpretiert" /> ist ein aktuelles Thema. Rechte Parteien wie die AfD fordern eine "andere" Erinne rungskultur und kritisieren die <VocabWord word="Schuldkultur" explanation="zu starke Fokussierung auf deutsche Schuld" />.
          </>
        ),
        details: (
          <>
            AfD-Politiker sagen, Deutschland solle stolz auf seine Geschichte sein und nicht nur die NS-Zeit erinnern. Diese <VocabWord word="Relativierung" explanation="etwas weniger wichtig machen" /> des Holocaust ist gefährlich. Andererseits gibt es Stimmen, die sagen: Jüngere Generationen sollten nicht <VocabWord word="belastet" explanation="mit Schuld beschwert" /> werden mit Schuld. Die Debatte zeigt: Erinnerungskultur ist politisch <VocabWord word="umkämpft" explanation="verschiedene Gruppen kämpfen darum" />. Bildungsminister und Historiker betonen: Erinnern heißt nicht Schuld, sondern <VocabWord word="Verantwortung" explanation="Pflicht, daraus zu lernen" /> für die Zukunft. Deutschland sucht einen Weg: Erinnern ohne zu <VocabWord word="instrumentalisieren" explanation="für politische Zwecke missbrauchen" />.
          </>
        ),
        essayUsage: "Argumentation über kontroverse Erinnerungspolitik und Identität."
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
              Geschichte und Erinnerungskultur
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Geschichtspolitik, von der NS-Zeit bis zur Wiedervereinigung
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige historische Daten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">1945</div>
                <div className="text-sm text-gray-600 mt-1">Ende des Zweiten Weltkriegs</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">1989</div>
                <div className="text-sm text-gray-600 mt-1">Fall der Berliner Mauer</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">1990</div>
                <div className="text-sm text-gray-600 mt-1">Deutsche Wiedervereinigung</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {geschichteTopics.map((topic) => (
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

export default HistoireMemoireAllemandePage;