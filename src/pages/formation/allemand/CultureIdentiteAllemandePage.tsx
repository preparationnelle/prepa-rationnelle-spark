import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Users, Globe, Sparkles, BookOpen } from 'lucide-react';

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

const CultureIdentiteAllemandePage: React.FC = () => {
  const cultureTopics = [
    {
      id: 1,
      title: "Multikulturelle Gesellschaft",
      icon: <Globe className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist heute ein <VocabWord word="Einwanderungsland" explanation="ein Land, in das viele Menschen aus anderen Ländern kommen" />. Über 20 Millionen Menschen haben einen <VocabWord word="Migrationshintergrund" explanation="Menschen, die selbst oder deren Eltern aus anderen Ländern kommen" /> – das sind etwa 25% der Bevölkerung.
          </>
        ),
        details: (
          <>
            Diese <VocabWord word="Vielfalt" explanation="viele verschiedene Kulturen und Hintergründe" /> verändert die deutsche Gesellschaft grundlegend. Die größten Gruppen kommen aus der Türkei, Polen, Russland und Syrien. Deutschland diskutiert intensiv über die Frage: Was bedeutet es, deutsch zu sein? Ist die deutsche <VocabWord word="Identität" explanation="wer man ist, die eigenen Werte und Kultur" /> <VocabWord word="multikulturell" explanation="aus vielen verschiedenen Kulturen zusammengesetzt" />, oder gibt es eine feste deutsche <VocabWord word="Leitkultur" explanation="die Hauptkultur, an der sich alle orientieren sollen" />? Diese Debatte zeigt: Deutschland befindet sich in einem Prozess der kulturellen <VocabWord word="Neudefini tion" explanation="neu festlegen, was etwas bedeutet" />.
          </>
        ),
        essayUsage: "Einstieg über kulturelle Identität und gesellschaftliche Transformation."
      }
    },
    {
      id: 2,
      title: "Integration und Zusammenleben",
      icon: <Users className="w-5 h-5" />,
      content: {
        description: (
          <>
            <VocabWord word="Integration" explanation="der Prozess, wie Menschen aus anderen Kulturen Teil der Gesellschaft werden" /> ist eine zentrale Herausforderung. Deutschland bietet <VocabWord word="Integrationskurse" explanation="Kurse, wo Einwanderer Deutsch lernen und über Deutschland lernen" /> an, die Sprache und Werte vermitteln.
          </>
        ),
        details: (
          <>
            Seit 2005 haben über 1,5 Millionen Menschen diese Kurse besucht. Erfolg reiche Integration zeigt sich im Sport: Die deutsche Fußballnationalmannschaft hat Spieler mit türkischen, polnischen und afrikanischen Wurzeln, die stolz für Deutschland spielen. Aber es gibt auch Probleme: Manche Einwanderer leben in <VocabWord word="Parallelgesellschaften" explanation="separate Gemeinschaften, die wenig Kontakt zur Mehrheitsgesellschaft haben" />, besonders in großen Städten. Die Debatte über <VocabWord word="Assimilation" explanation="wenn man seine eigene Kultur komplett aufgibt" /> versus Integration zeigt: Deutschland sucht nach einem Weg, <VocabWord word="Vielfalt" explanation="Unterschiedlichkeit" /> zu bewahren und gleichzeitig <VocabWord word="Zusammenhalt" explanation="dass Menschen zusammen halten, Solidarität" /> zu schaffen.
          </>
        ),
        essayUsage: "Beispiel für Integrationspolitik und gesellschaftliche Herausforderungen."
      }
    },
    {
      id: 3,
      title: "Erinnerungskultur und Geschichte",
      icon: <BookOpen className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die deutsche <VocabWord word="Erinnerungskultur" explanation="wie eine Gesellschaft mit ihrer Geschichte umgeht" /> ist weltweit einzigartig. Deutschland stellt sich aktiv seiner dunklen Vergangenheit, besonders dem Holocaust und dem Zweiten Weltkrieg.
          </>
        ),
        details: (
          <>
            Der Begriff <VocabWord word="Vergangenheitsbewältigung" explanation="die Aufarbeitung und Auseinandersetzung mit der Vergangenheit" /> beschreibt diesen Prozess. Deutschland hat Gedenkstätten wie das Holocaust-Mahnmal in Berlin gebaut, unterrichtet die NS-Zeit ausführlich in Schulen und zahlt <VocabWord word="Wiedergutmachung" explanation="Entschädigung für vergangenes Unrecht" /> an Überlebende. Diese <VocabWord word="Erinnerungsarbeit" explanation="aktive Auseinandersetzung mit der Geschichte" /> wird auch kritisiert: Manche sagen, Deutschland sei zu fixiert auf die Vergangenheit. Aber die meisten sehen darin eine <VocabWord word="moralische Pflicht" explanation="ethische Verpflichtung" /> und ein Zeichen demokratischer <VocabWord word="Reife" explanation="Erwachsenwerden, Verantwortung übernehmen" />.
          </>
        ),
        essayUsage: "Argumentation über Geschichtsbewusstsein und nationale Identität."
      }
    },
    {
      id: 4,
      title: "Kulturelle Szene und Kreativität",
      icon: <Sparkles className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist ein <VocabWord word="Kulturland" explanation="Land mit reicher kultureller Tradition" /> mit über 300 Theatern, 130 Orchestern und unzähligen Museen. Besonders Berlin gilt als <VocabWord word="Kreativhauptstadt" explanation="Zentrum für kreative und künstlerische Menschen" /> Europas.
          </>
        ),
        details: (
          <>
            Die <VocabWord word="Kulturszene" explanation="die Welt der Kunst, Musik, Theater" /> ist vielfältig: klassische Musik (Beethoven, Bach), moderne Kunst, Street Art und elektronische Musik. Berlin zieht Künstler aus der ganzen Welt an – die Stadt ist bekannt für ihre <VocabWord word="alternative Kultur" explanation="nicht-mainstream, experimentell" /> und ihre Clubszene. Deutschland <VocabWord word="fördert" explanation="unterstützt mit Geld" /> Kultur stark: Der Staat gibt jährlich über 10 Milliarden Euro für Kultur aus. Gleichzeitig gibt es Debatten über <VocabWord word="Hochkultur" explanation="klassische, elitäre Kultur" /> versus <VocabWord word="Populärkultur" explanation="Kultur für alle, Mainstream" />. Die Frage: Wessen Kultur wird gefördert?
          </>
        ),
        essayUsage: "Beispiel für kulturelle Vielfalt und staatliche Kulturförderung."
      }
    },
    {
      id: 5,
      title: "Generationen und Wertewandel",
      icon: <Heart className="w-5 h-5" />,
      content: {
        description: (
          <>
            Zwischen den Generationen gibt es einen deutlichen <VocabWord word="Wertewandel" explanation="Veränderung der Werte und Prioritäten" />. Junge Menschen haben andere Prioritäten als die Generation ihrer Eltern und Großeltern.
          </>
        ),
        details: (
          <>
            Die <VocabWord word="Babyboomer" explanation="Generation, geboren 1946-1964" /> legten Wert auf Sicherheit und materiellen Wohlstand. Die heutige junge Generation (oft "Generation Z" genannt) priorisiert <VocabWord word="Work-Life-Balance" explanation="gutes Gleichgewicht zwischen Arbeit und Privatleben" />, Nachhaltigkeit und soziale Gerechtigkeit. Bewegungen wie "Fridays for Future" zeigen: Junge Menschen sind politisch <VocabWord word="engagiert" explanation="aktiv, sich einsetzen für etwas" /> und <VocabWord word="fordern" explanation="verlangen, erwarten" /> Veränderung. Gleichzeitig gibt es <VocabWord word="Generationenkonflikte" explanation="Streit zwischen alten und jungen Menschen" /> über Themen wie Klimaschutz, Rente und Digitalisierung. Diese Spannungen prägen die deutsche Gesellschaft.
          </>
        ),
        essayUsage: "Argumentation über gesellschaftlichen Wandel und Generationenunterschiede."
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
              Kultur und Identität in Deutschland
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Kulturlandschaft, Identitätsfragen und gesellschaftlichen Werte
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Kulturkennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">25%</div>
                <div className="text-sm text-gray-600 mt-1">Bevölkerung mit Migrationshintergrund</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600 mt-1">Theater in Deutschland</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">10Mrd€</div>
                <div className="text-sm text-gray-600 mt-1">Staatliche Kulturförderung pro Jahr</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {cultureTopics.map((topic) => (
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

export default CultureIdentiteAllemandePage;