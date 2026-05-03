import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users2, Briefcase, Heart, Award, Scale } from 'lucide-react';

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

const FemmesEgaliteAllemandePage: React.FC = () => {
  const frauenTopics = [
    {
      id: 1,
      title: "Gleichberechtigung und Frauenrechte",
      icon: <Scale className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Gleichberechtigung" explanation="gleiche Rechte für Männer und Frauen" /> ist im deutschen Grundgesetz verankert. Artikel 3 besagt: "Männer und Frauen sind <VocabWord word="gleichberechtigt" explanation="haben die gleichen Rechte" />."
          </>
        ),
        details: (
          <>
            Trotzdem gibt es nach wie vor Ungleichheiten. Frauen verdienen im Durchschnitt 18% weniger als Männer – die sogenannte <VocabWord word="Lohnlücke" explanation="Gender Pay Gap, Unterschied im Gehalt" />. Gründe sind: Frauen arbeiten öfter in schlechter bezahlten Berufen, sie arbeiten häufiger <VocabWord word="Teilzeit" explanation="nur ein paar Stunden pro Woche, nicht Vollzeit" /> wegen Kinderbetreuung, und sie erreichen seltener <VocabWord word="Führungspositionen" explanation="wichtige, gut bezahlte Jobs als Chef" />. Die <VocabWord word="Frauenquote" explanation="Regel, dass ein bestimmter Prozentsatz von Frauen in Führung sein muss" /> soll helfen: Große Firmen müssen mindestens 30% Frauen in Aufsichtsräten haben. Aber: Es ist ein langsamer Prozess.
          </>
        ),
        essayUsage: "Einstieg über Geschlechtergerechtigkeit und strukturelle Ungleichheit."
      }
    },
    {
      id: 2,
      title: "Vereinbarkeit von Familie und Beruf",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Vereinbarkeit" explanation="die Möglichkeit, beides zu machen" /> von Familie und Beruf ist eine große Herausforderung. Besonders Mütter kämpfen mit diesem <VocabWord word="Spagat" explanation="schwierige Balance zwischen zwei Dingen" />.
          </>
        ),
        details: (
          <>
            Deutschland hat <VocabWord word="Elternzeit" explanation="Zeit, die Eltern zu Hause bei Kindern bleiben können" /> eingeführt – Eltern können bis zu 3 Jahre Pause machen und bekommen <VocabWord word="Elterngeld" explanation="Geld vom Staat während der Elternzeit" />. Seit 2007 gibt es das Elterngeld, das auch Väter motivieren soll, Elternzeit zu nehmen. Trotzdem sind es meist Frauen, die ihre Karriere <VocabWord word="unterbrechen" explanation="pausieren, stoppen" />. Der Ausbau von <VocabWord word="Kita-Plätzen" explanation="Kindergartenplätzen für kleine Kinder" /> ist langsam, besonders in ländlichen Regionen fehlen Plätze. Viele Frauen können nicht Vollzeit arbeiten, weil die <VocabWord word="Kinderbetreuung" explanation="jemand, der auf Kinder aufpasst" /> fehlt.
          </>
        ),
        essayUsage: "Beispiel für Familienpolitik und gesellschaftliche Rollenbilder."
      }
    },
    {
      id: 3,
      title: "Frauen in Führungspositionen",
      icon: <Award className="w-5 h-5" />,
      content: {
        description: (
          <>
            Frauen sind in <VocabWord word="Führungspositionen" explanation="Chef-Jobs, Entscheidungspositionen" /> stark unterrepräsentiert. Nur 12% der Vorstandsmitglieder in großen deutschen Firmen sind Frauen.
          </>
        ),
        details: (
          <>
            Das <VocabWord word="Phänomen" explanation="beobachtbare Tatsache" /> heißt "<VocabWord word="gläserne Decke" explanation="unsichtbare Barriere, die Frauen am Aufstieg hindert" />" – Frauen stoßen an eine unsichtbare Barriere. Die Gründe: traditionelle <VocabWord word="Rollenbilder" explanation="Vorstellungen, wie Männer und Frauen sein sollen" />, fehlende Netzwerke und <VocabWord word="unbewusste Vorurteile" explanation="Stereotypen, die wir nicht aktiv denken, aber haben" />. Die <VocabWord word="Frauenquote" explanation="gesetzliche Regel für Frauenanteil" /> von 2015 zwingt große Firmen, mehr Frauen in Aufsichtsräte zu holen. Das Gesetz zeigt Wirkung, aber langsam. Kritiker sagen: Quote ist <VocabWord word="Bevormundung" explanation="wenn man anderen sagt, was sie tun sollen" />, Befürworter sagen: ohne Quote passiert nichts.
          </>
        ),
        essayUsage: "Argumentation über Quote und Chancengleichheit in der Arbeitswelt."
      }
    },
    {
      id: 4,
      title: "Gewalt gegen Frauen",
      icon: <Users2 className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Häusliche Gewalt" explanation="Gewalt in der Familie, zu Hause" /> gegen Frauen ist ein ernstes Problem in Deutschland. Jede dritte Frau erlebt im Laufe ihres Lebens physische oder sexuelle Gewalt.
          </>
        ),
        details: (
          <>
            Deutschland hat die <VocabWord word="Istanbul-Konvention" explanation="internationales Abkommen zum Schutz von Frauen vor Gewalt" /> ratifiziert, die Frauen vor Gewalt schützen soll. Es gibt <VocabWord word="Frauenhäuser" explanation="Notunterkünfte für Frauen, die vor Gewalt fliehen" />, aber es fehlen Plätze – viele Frauen finden keinen sicheren <VocabWord word="Zufluchtsort" explanation="Ort, wo man sicher ist" />. Die Regierung hat Programme zur <VocabWord word="Prävention" explanation="Vorbeugung, Verhin derung" /> gestartet, aber <VocabWord word="Feminizide" explanation="Morde an Frauen wegen ihres Geschlechts" /> – also Morde an Frauen aufgrund ihres Geschlechts – bleiben ein Problem. Jährlich werden etwa 140 Frauen von ihrem Partner oder Ex-Partner getötet. Die Debatte: Deutschland muss mehr tun.
          </>
        ),
        essayUsage: "Beispiel für Gewaltschutz und gesellschaftliche Herausforderungen."
      }
    },
    {
      id: 5,
      title: "Feminismus und gesellschaftlicher Wandel",
      icon: <Briefcase className="w-5 h-5" />,
      content: {
        description: (
          <>
            Der <VocabWord word="Feminismus" explanation="Bewegung für Gleichberechtigung der Geschlechter" /> hat in Deutschland eine lange Geschichte. Heute gibt es eine neue, junge feministische Bewegung, die für <VocabWord word="Geschlechtergerechtigkeit" explanation="Gleichheit zwischen allen Geschlechtern" /> kämpft.
          </>
        ),
        details: (
          <>
            Bewegungen wie #MeToo haben auch in Deutschland zu Debatten über <VocabWord word="Sexismus" explanation="Diskriminierung aufgrund des Geschlechts" /> und <VocabWord word="sexuelle Belästigung" explanation="unerwünschtes sexuelles Verhalten" /> geführt. Junge Feministinnen fordern: gleiche Bezahlung, mehr Frauen in Politik und Wirtschaft, bessere Maßnahmen gegen Gewalt. Die Debatte ist <VocabWord word="polarisiert" explanation="stark geteilt, zwei gegensätzliche Meinungen" />: Manche sehen Feminismus als notwendig, andere als <VocabWord word="übertrieben" explanation="zu weit gehend, zu viel" />. Fakt ist: Deutschland hat Fortschritte gemacht, aber es bleibt viel zu tun.
          </>
        ),
        essayUsage: "Argumentation über feministische Bewegungen und gesellschaftliche Debatten."
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
              Frauen und Gleichberechtigung
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse von Frauenrechten, Gleichberechtigung und gesellschaftlichem Wandel
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Kennzahlen zu Frauen und Gleichheit (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">18%</div>
                <div className="text-sm text-gray-600 mt-1">Lohnlücke (Gender Pay Gap)</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">30%</div>
                <div className="text-sm text-gray-600 mt-1">Frauenquote in Aufsichtsräten</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">12%</div>
                <div className="text-sm text-gray-600 mt-1">Frauen in Vorständen</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {frauenTopics.map((topic) => (
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

export default FemmesEgaliteAllemandePage;