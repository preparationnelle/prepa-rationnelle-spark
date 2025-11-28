import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap, School, Briefcase, Users, Award } from 'lucide-react';

// Component for clickable vocabulary words with German explanations
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
      <span
        className="font-bold text-orange-700 cursor-pointer hover:text-orange-900 transition-colors"
        onClick={() => setShowTooltip(!showTooltip)}
      >
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

const EducationAllemandePage: React.FC = () => {
  const educationTopics = [
    {
      id: 1,
      title: "Das dreigliedrige Schulsystem",
      icon: <School className="w-5 h-5" />,
      content: {
        description: (
          <>
            Das deutsche Schulsystem ist <VocabWord word="dreigliedrig" explanation="in drei Haupttypen unterteilt" /> aufgebaut: <VocabWord word="Hauptschule" explanation="Schule für praktische Berufe, 5 Jahre" />, <VocabWord word="Realschule" explanation="mittlere Schule, führt zur mittleren Reife" /> und <VocabWord word="Gymnasium" explanation="höhere Schule, führt zum Abitur" />. Diese Trennung beginnt bereits nach der vierten Klasse.
          </>
        ),
        details: (
          <>
            Das System wird oft kritisiert, weil es Kinder sehr früh nach ihrer <VocabWord word="Leistung" explanation="wie gut sie in der Schule sind" /> trennt. Studien zeigen, dass die soziale Herkunft stark beeinflusst, welche Schulform ein Kind besucht. Kinder aus <VocabWord word="bildungsfernen" explanation="Familien mit wenig formaler Bildung" /> Familien haben es schwerer, aufs Gymnasium zu kommen. Viele Bundesländer führen deshalb <VocabWord word="Gesamtschulen" explanation="Schulen, die alle drei Niveaus unter einem Dach vereinen" /> ein, um mehr <VocabWord word="Chancengleichheit" explanation="gleiche Möglichkeiten für alle" /> zu schaffen. Das Gymnasium bleibt aber die begehrteste Schulform – etwa 40% aller Schüler streben das <VocabWord word="Abitur" explanation="der höchste deutsche Schulabschluss" /> an.
          </>
        ),
        essayUsage: "Einstieg über Bildungsungleichheit und soziale Selektion im Schulsystem."
      }
    },
    {
      id: 2,
      title: "Das duale Ausbildungssystem",
      icon: <Briefcase className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist weltbekannt für sein <VocabWord word="duales System" explanation="Ausbildung, die Schule und Betrieb kombiniert" />. Jugendliche lernen gleichzeitig in der <VocabWord word="Berufsschule" explanation="Schule für praktische Berufe" /> und im Betrieb einen <VocabWord word="Ausbildungsberuf" explanation="praktischer Beruf mit Zertifikat" />.
          </>
        ),
        details: (
          <>
            Etwa 50% der Jugendlichen wählen nach der Schule eine <VocabWord word="Berufsausbildung" explanation="praktische Ausbildung in einem Beruf, meist 3 Jahre" /> statt eines Studiums. Beliebte Berufe sind <VocabWord word="Industriemechaniker" explanation="jemand, der Maschinen baut und repariert" />, Bankkaufmann oder Krankenpfleger. Das System verbindet Theorie und Praxis und wird international als <VocabWord word="Erfolgsmodell" explanation="etwas, das sehr gut funktioniert" /> angesehen. Allerdings gibt es Herausforderungen: Immer mehr Jugendliche bevorzugen ein Studium, sodass <VocabWord word="Lehrstellen" explanation="Ausbildungsplätze in Firmen" /> in manchen Berufen unbesetzt bleiben.
          </>
        ),
        essayUsage: "Beispiel für praktische Bildung und den deutschen Mittelstand."
      }
    },
    {
      id: 3,
      title: "Hochschulbildung und Studium",
      icon: <GraduationCap className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland hat über 400 <VocabWord word="Hochschulen" explanation="Universitäten und Fachhochschulen" />, die meisten sind staatlich und kostenfrei. Rund 2,9 Millionen Studierende sind an deutschen Unis <VocabWord word="eingeschrieben" explanation="offiziell als Student registriert" />.
          </>
        ),
        details: (
          <>
            Ein großer Vorteil: In Deutschland gibt es keine <VocabWord word="Studiengebühren" explanation="Geld, das man fürs Studium zahlen muss" /> an staatlichen Unis, nur einen <VocabWord word="Semesterbeitrag" explanation="kleine Gebühr pro Semester, etwa 300 Euro" /> von etwa 300 Euro. Das macht Bildung für alle zugänglich. Allerdings: Die <VocabWord word="Abbrecherquote" explanation="wie viele Studenten ihr Studium nicht beenden" /> liegt bei 28% – viele brechen ab, weil das Studium zu anspruchsvoll ist oder nicht zu ihnen passt. <VocabWord word="Numerus Clausus" explanation="Zulassungsbeschränkung – man braucht eine gute Abiturnote" /> (NC) macht den Zugang zu beliebten Studiengängen wie Medizin oder Psychologie schwierig.
          </>
        ),
        essayUsage: "Argumentation über Vor- und Nachteile des gebührenfreien Studiums."
      }
    },
    {
      id: 4,
      title: "Digitalisierung in Schulen",
      icon: <Award className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Digitalisierung" explanation="die Einführung von digitalen Technologien" /> deutscher Schulen hinkt im internationalen Vergleich hinterher. Während der Corona-Pandemie wurden die Schwächen besonders deutlich.
          </>
        ),
        details: (
          <>
            Viele Schulen haben keine gute <VocabWord word="digitale Infrastruktur" explanation="Computer, Internet, digitale Geräte" /> – WLAN, Tablets und moderne Software fehlen oft. Der <VocabWord word="DigitalPakt Schule" explanation="Programm der Regierung, um Schulen zu digitalisieren" />, ein 5-Milliarden-Euro-Programm, sollte helfen, doch die <VocabWord word="Umsetzung" explanation="die praktische Durchführung" /> ist langsam. Während Länder wie Estland oder Südkorea digital führend sind, fehlt es in Deutschland oft an <VocabWord word="technischer Ausstattung" explanation="Computer, Beamer, Internet" /> und gut ausgebildeten Lehrern. Die Pandemie hat gezeigt: Deutschland muss beim digitalen Lernen aufholen.
          </>
        ),
        essayUsage: "Kritik an der langsamen Digitalisierung des Bildungssystems."
      }
    },
    {
      id: 5,
      title: "Bildungsföderalismus und Ungleichheit",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: (
          <>
            In Deutschland ist Bildung <VocabWord word="Ländersache" explanation="jedes Bundesland entscheidet selbst über Bildung" />. Das bedeutet: Jedes der 16 Bundesländer hat sein eigenes Schulsystem, eigene Lehrpläne und Abiturstandards.
          </>
        ),
        details: (
          <>
            Diese <VocabWord word="föderale Struktur" explanation="Aufteilung der Macht auf Bundesländer" /> führt zu großen Unterschieden. Ein Abitur aus Bayern gilt oft als schwieriger als eines aus Bremen. <VocabWord word="Umzüge" explanation="wenn Familien in ein anderes Bundesland ziehen" /> zwischen Bundesländern sind für Schüler problematisch, weil die Systeme so unterschiedlich sind. Kritiker fordern mehr <VocabWord word="Vereinheitlichung" explanation="dass alles gleicher wird" />, doch die Länder wollen ihre <VocabWord word="Bildungshoheit" explanation="das Recht, über Bildung zu entscheiden" /> nicht aufgeben. Diese Debatte zeigt die Spannungen zwischen föderaler Vielfalt und nationalen Standards.
          </>
        ),
        essayUsage: "Beispiel für föderale Strukturen und regionale Bildungsungleichheit."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Bildung in Deutschland
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse des deutschen Bildungssystems, von der Schule bis zur Hochschule
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Bildungskennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">40%</div>
                <div className="text-sm text-gray-600 mt-1">Schüler streben Abitur an</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600 mt-1">Wählen duale Ausbildung</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">2,9M</div>
                <div className="text-sm text-gray-600 mt-1">Studierende an Hochschulen</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          {educationTopics.map((topic) => (
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

        {/* Navigation */}
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

export default EducationAllemandePage;