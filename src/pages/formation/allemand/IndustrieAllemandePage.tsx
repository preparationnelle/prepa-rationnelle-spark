import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Factory, Euro, Globe, Briefcase } from 'lucide-react';

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

const IndustrieAllemandePage: React.FC = () => {
  const wirtschaftTopics = [
    {
      id: 1,
      title: "Exportweltmeister und Außenhandel",
      icon: <Globe className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland ist <VocabWord word="Exportweltmeister" explanation="Land mit den meisten Exporten weltweit" /> – oder war es lange. Die deutsche Wirtschaft ist stark vom <VocabWord word="Außenhandel" explanation="Handel mit anderen Ländern" /> abhängig. Über 50% des BIP kommen aus Exporten.
          </>
        ),
        details: (
          <>
            Die wichtigsten <VocabWord word="Handelspartner" explanation="Länder, mit denen Deutschland viel Handel treibt" /> sind die USA, China und andere EU-Länder. Deutsche Firmen exportieren vor allem Autos, Maschinen und Chemie. Aber: Die Abhängigkeit von Exporten macht Deutschland <VocabWord word="anfällig" explanation="leicht von Problemen betroffen" /> für globale Krisen. Der Handelskrieg zwischen USA und China, der Ukraine-Krieg und <VocabWord word="Lieferkettenprobleme" explanation="Schwierigkeiten, Waren zu transportieren" /> trafen die deutsche Wirtschaft hart. Deutschland muss seine Märkte <VocabWord word="diversifizieren" explanation="Vielfalt schaffen, nicht nur auf wenige setzen" /> und weniger abhängig von einzelnen Ländern werden.
          </>
        ),
        essayUsage: "Einstieg über die exportorientierte deutsche Wirtschaft."
      }
    },
    {
      id: 2,
      title: "Der Mittelstand als Rückgrat",
      icon: <Briefcase className="w-5 h-5" />,
      content: {
        description: (
          <>
            Der deutsche <VocabWord word="Mittelstand" explanation="kleine und mittlere Unternehmen" /> ist das <VocabWord word="Rückgrat" explanation="die tragende Säule" /> der Wirtschaft. Über 99% aller Firmen sind kleine oder mittlere Unternehmen, sie beschäftigen 60% aller Arbeitnehmer.
          </>
        ),
        details: (
          <>
            Viele Mittelständler sind <VocabWord word="Hidden Champions" explanation="weltmarktführende Firmen, die kaum jemand kennt" /> – kaum bekannt, aber Weltmarktführer in Nischenmärkten. Beispiele: Firmen wie Kärcher (Reinigungsgeräte) oder Trumpf (Lasertechnik). Diese Firmen sind oft <VocabWord word="familiengeführt" explanation="gehören einer Familie und werden von ihr geleitet" /> und investieren stark in Forschung. Aber: Der Mittelstand kämpft mit <VocabWord word="Fachkräftemangel" explanation="nicht genug qualifizierte Arbeiter" />, hohen <VocabWord word="Energiekosten" explanation="was Energie kostet" /> und <VocabWord word="Bürokratie" explanation="komplizierte Regeln und Verwaltung" />. Die Digitalisierung ist eine große Herausforderung.
          </>
        ),
        essayUsage: "Beispiel für die Stärke und Herausforderungen des Mittelstands."
      }
    },
    {
      id: 3,
      title: "Wirtschaftskrise und Stagnation",
      icon: <TrendingUp className="w-5 h-5" />,
      content: {
        description: (
          <>
            Deutschland durchlebt die längste Wirtschaftskrise seit Gründung der Bundesrepublik. Seit 2020 <VocabWord word="stagniert" explanation="wächst nicht mehr" /> die Wirtschaft. Für 2025 erwarten Experten bestenfalls 0,1% <VocabWord word="Wachstum" explanation="Zunahme der Wirtschaftsleistung" />.
          </>
        ),
        details: (
          <>
            Die Gründe sind vielfältig: hohe Energiepreise nach dem <VocabWord word="Atomausstieg" explanation="Abschalten aller Atomkraftwerke" />, <VocabWord word="Strukturwandel" explanation="grundlegende Veränderung der Wirtschaft" /> in der Autoindustrie, internationale Unsicherheiten. Die <VocabWord word="Industrie" explanation="produzierende Unternehmen, Fabriken" /> schrumpft – besonders energieintensive Sektoren wie Chemie und Stahl leiden. Deutschland verliert an <VocabWord word="Wettbewerbsfähigkeit" explanation="die Fähigkeit, mit anderen Ländern zu konkurrieren" />. Die <VocabWord word="Schuldenbremse" explanation="Regel, die hohe Staatsschulden verhindern soll" /> begrenzt Investitionen, obwohl die Infrastruktur <VocabWord word="marode" explanation="kaputt, in schlechtem Zustand" /> ist.
          </>
        ),
        essayUsage: "Argumentation über strukturelle Probleme und Reformbedarf."
      }
    },
    {
      id: 4,
      title: "Soziale Marktwirtschaft",
      icon: <Factory className="w-5 h-5" />,
      content: {
        description: (
          <>
            Das deutsche Wirtschaftsmodell heißt <VocabWord word="Soziale Marktwirtschaft" explanation="Marktwirtschaft mit sozialem Ausgleich" />. Es kombiniert freien Markt mit sozialem <VocabWord word="Schutz" explanation="Absicherung für Menschen" />. Der Staat greift ein, um soziale <VocabWord word="Härten" explanation="Probleme, Not" /> abzufedern.
          </>
        ),
        details: (
          <>
            Ludwig Erhard führte dieses Modell nach dem Zweiten Weltkrieg ein. Es brachte den <VocabWord word="Wirtschaftswunder" explanation="sehr starkes Wirtschaftswachstum in den 1950er Jahren" />. Heute gibt es starke <VocabWord word="Gewerkschaften" explanation="Organisationen, die Arbeiterrechte verteidigen" />, <VocabWord word="Tarifverträge" explanation="Verträge über Löhne und Arbeitsbedingungen" /> und ein umfassendes Sozialsystem. Aber: Das Modell steht unter Druck. Die Bevölkerung altert, die <VocabWord word="Sozialsysteme" explanation="Rente, Krankenversicherung etc." /> sind <VocabWord word="unterfinanziert" explanation="haben zu wenig Geld" />. Die Debatte: Braucht Deutschland eine Reform des Sozialstaats?
          </>
        ),
        essayUsage: "Beispiel für das deutsche Wirtschaftsmodell und soziale Absicherung."
      }
    },
    {
      id: 5,
      title: "Digitalisierung der Wirtschaft",
      icon: <Euro className="w-5 h-5" />,
      content: {
        description: (
          <>
            Die <VocabWord word="Digitalisierung" explanation="Umstellung auf digitale Technologien" /> der deutschen Wirtschaft hinkt hinterher. Deutschland hat keine großen Tech-Konzerne wie die USA oder China.
          </>
        ),
        details: (
          <>
            Während Silicon Valley dominiert, fehlen in Deutschland digitale <VocabWord word="Plattformen" explanation="große Online-Dienste wie Amazon oder Google" />. Deutsche Firmen sind stark in traditioneller Industrie, aber schwach in digitalen Geschäftsmodellen. Die Regierung fördert Digitalisierung, aber die <VocabWord word="Umsetzung" explanation="praktische Durchführung" /> ist langsam. Probleme: schlechte <VocabWord word="Breitbandversorgung" explanation="schnelles Internet" />, <VocabWord word="Datenschutzbedenken" explanation="Sorgen um Privatsphäre" />, die Innovation <VocabWord word="bremsen" explanation="verlangsamen" />, und <VocabWord word="Risikoaversion" explanation="Angst vor Risiken" />. Deutschland muss aufholen, um im digitalen Zeitalter <VocabWord word="konkurrenzfähig" explanation="in der Lage, zu konkurrieren" /> zu bleiben.
          </>
        ),
        essayUsage: "Argumentation über digitale Transformation und Innovationsdefizite."
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
              Wirtschaft und Industrie
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Eine Analyse der deutschen Wirtschaft, vom Mittelstand bis zur Exportstärke
            </p>
          </div>
        </div>

        <Card className="mb-8 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center text-gray-900">
              Wichtige Wirtschaftskennzahlen (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600 mt-1">BIP aus Exporten</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600 mt-1">KMU (Mittelstand)</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-3xl font-bold text-gray-900">0,1%</div>
                <div className="text-sm text-gray-600 mt-1">Erwartetes Wachstum 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {wirtschaftTopics.map((topic) => (
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

export default IndustrieAllemandePage;