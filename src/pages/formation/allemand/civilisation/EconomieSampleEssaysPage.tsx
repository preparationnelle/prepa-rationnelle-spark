import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

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


const EconomieSampleEssaysPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Home className="h-3 w-3" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
                            Formation <span className="text-orange-600">Allemand</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/allemand/civilisation" className="hover:text-foreground transition-colors">
                            Civilisation
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <span className="text-foreground font-medium">Économie · Sujets rédigés</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
                    <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-orange-100">
                                <BookOpen className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Die deutsche Export-Wirtschaft</h2>
                                <p className="text-sm text-gray-600">Essai - Civilisation Allemande</p>
                            </div>
                        </div>
                        <Link to="/formation/allemand/civilisation">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Retour
                            </Button>
                        </Link>
                    </div>

                    <div className="p-6">
                        <div className="prose max-w-none text-gray-800 leading-relaxed">
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Ist die deutsche Wirtschaft zu abhängig vom Export?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland ist <VocabWord word="Exportweltmeister" explanation="das Land, das am meisten Produkte ins Ausland verkauft" /> – dieser Titel beschreibt die deutsche Wirtschaft perfekt. Etwa 50% der deutschen Produktion wird <VocabWord word="exportiert" explanation="in andere Länder verkauft" />. Deutsche Autos, Maschinen und Chemieprodukte sind weltweit gefragt. Das Label „<VocabWord word="Made in Germany" explanation="in Deutschland gemacht - Symbol für gute Qualität" />" steht für Qualität und <VocabWord word="Zuverlässigkeit" explanation="wenn man sich auf etwas verlassen kann, Verlässlichkeit" />. Aber diese starke Export-Orientierung hat auch Risiken. Die Corona-Pandemie und der Ukraine-Krieg haben gezeigt, wie <VocabWord word="verwundbar" explanation="leicht verletzbar, nicht gut geschützt" /> die globalen <VocabWord word="Lieferketten" explanation="der Weg, wie Produkte von der Fabrik zum Kunden kommen" /> sind. In diesem Kontext kann man sich fragen, ob Deutschland zu abhängig vom Export ist. Im folgenden Aufsatz werde ich zeigen, dass der Export wichtig ist, aber Deutschland auch seine <VocabWord word="Binnenwirtschaft" explanation="Wirtschaft innerhalb des Landes, nicht Export" /> stärken sollte.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute ist die Export-Orientierung ein Problem. Sie sagen, dass Deutschland zu abhängig von ausländischen Märkten ist und dass dies gefährlich ist. Ich lehne es ab, den Export grundsätzlich zu kritisieren. Es ist fraglich, ob Deutschland ohne Export so reich wäre. Ich finde es übertrieben zu sagen, dass der Export schlecht ist.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie <VocabWord word="diversifiziert" explanation="verteilt auf viele verschiedene Bereiche" /> der Export ist. Man sollte zwischen Abhängigkeit von einem Land und breitem Export unterscheiden. Ich muss zugeben, dass die starke Abhängigkeit von China problematisch ist. Aber ich betrachte es als falsch, den ganzen Export deshalb zu kritisieren.
                            </p>

                            <h3>II. Stärken des Export-Modells</h3>
                            <p>
                                Meiner Meinung nach ist der Export eine große Stärke Deutschlands. Es ist wichtig zu sehen, dass Millionen von Jobs vom Export abhängen. Ich bin der Ansicht, dass „Made in Germany" ein wertvolles <VocabWord word="Markenzeichen" explanation="Symbol, das für Qualität steht" /> ist.
                            </p>
                            <p>
                                Es fällt auf, dass Deutschland in vielen Bereichen Weltmarktführer ist. Laut den Statistiken ist Deutschland Nummer eins bei <VocabWord word="Werkzeugmaschinen" explanation="Maschinen, die andere Maschinen herstellen" />, <VocabWord word="Chemikalien" explanation="chemische Produkte" /> und Premium-Autos. Im Vergleich zu Ländern wie Italien oder Spanien hat Deutschland eine viel stärkere Exportwirtschaft. Etwa 30% aller Jobs in Deutschland hängen direkt oder indirekt vom Export ab.
                            </p>
                            <p>
                                Außerdem bringt der Export viel Geld ins Land. Deutschland hat seit Jahren einen <VocabWord word="Handelsbilanzüberschuss" explanation="wenn ein Land mehr exportiert als importiert" /> von über 200 Milliarden Euro pro Jahr. Dieses Geld macht Deutschland reich und finanziert das Sozialsystem.
                            </p>

                            <h3>III. Risiken und notwendige Diversifizierung</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass Deutschland nicht nur auf Export setzen sollte. Das Paradebeispiel ist China. Etwa 10% aller deutschen Exporte gehen nach China. Als China während Corona seine Grenzen schloss, hatten viele deutsche Firmen große Probleme. Diese <VocabWord word="einseitige" explanation="nur in eine Richtung gehend, nicht ausgewogen" /> Abhängigkeit ist riskant.
                            </p>
                            <p>
                                Ein gutes Beispiel für Diversifizierung ist der Ausbau des Binnenmarkts. Deutschland sollte mehr in <VocabWord word="Infrastruktur" explanation="Straßen, Brücken, Internet - die Basis der Wirtschaft" />, Bildung und Innovation investieren. Das macht die Wirtschaft <VocabWord word="widerstandsfähiger" explanation="stärker gegen Probleme, resistenter" />. Außerdem sollte Deutschland neue Märkte in Afrika und Lateinamerika erschließen, um nicht nur von Europa und China abhängig zu sein.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass der Export wichtig für Deutschland ist, aber mehr Balance nötig ist. Aus diesen Gründen bin ich der Ansicht, dass Deutschland seinen Export diversifizieren und gleichzeitig die Binnenwirtschaft stärken sollte. „Made in Germany" bleibt wertvoll, aber Deutschland muss <VocabWord word="flexibler" explanation="beweglicher, anpassungsfähiger" /> werden. Insgesamt kann man feststellen, dass eine gesunde Wirtschaft beides braucht: Export und starken Binnenmarkt. Diese Diskussion zeigt, dass zu viel von einer Sache immer Risiken mit sich bringt.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Commerce et économie</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>der Export(e)</strong> = exportation</li>
                                            <li><strong>der Import(e)</strong> = importation</li>
                                            <li><strong>der Exportweltmeister</strong> = champion mondial d'exportation</li>
                                            <li><strong>Made in Germany</strong> = Fabriqué en Allemagne</li>
                                            <li><strong>die Zuverlässigkeit</strong> = fiabilité</li>
                                            <li><strong>die Lieferkette(n)</strong> = chaîne d'approvisionnement</li>
                                            <li><strong>der Handelsbilanzüberschuss</strong> = excédent commercial</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Industrie</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Werkzeugmaschine(n)</strong> = machine-outil</li>
                                            <li><strong>die Chemikalien</strong> = produits chimiques</li>
                                            <li><strong>das Markenzeichen</strong> = marque de fabrique</li>
                                            <li><strong>die Binnenwirtschaft</strong> = économie intérieure</li>
                                            <li><strong>die Infrastruktur</strong> = infrastructure</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>exportieren</strong> = exporter</li>
                                            <li><strong>diversifizieren</strong> = diversifier</li>
                                            <li><strong>erschließen</strong> = ouvrir, développer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Adjectifs</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>verwundbar</strong> = vulnérable</li>
                                            <li><strong>einseitig</strong> = unilatéral</li>
                                            <li><strong>widerstandsfähig</strong> = résilient</li>
                                            <li><strong>flexibel</strong> = flexible</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 50% = part de la production allemande exportée</li>
                                        <li>• 30% = emplois dépendants de l'export</li>
                                        <li>• 200+ Mrd € = excédent commercial annuel</li>
                                        <li>• 10% = exports vers la Chine</li>
                                        <li>• #1 = position mondiale (machines-outils, chimie, autos premium)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Champion mondial des exportations</p>
                                        <p className="ml-4">50% de la production est exportée. "Made in Germany" = symbole de qualité et fiabilité mondiale.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Importance pour l'emploi</p>
                                        <p className="ml-4">30% des emplois dépendent directement ou indirectement des exportations.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Leadership sectoriel</p>
                                        <p className="ml-4">#1 mondial en machines-outils, chimie, automobiles premium. Excédent de 200+ Mrd € par an.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Vulnérabilité chinoise</p>
                                        <p className="ml-4">10% des exports vers la Chine. COVID a montré les risques de cette dépendance unilatérale.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Besoin de diversification</p>
                                        <p className="ml-4">Renforcer l'économie intérieure + nouveaux marchés (Afrique, Amérique latine) = plus de résilience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomieSampleEssaysPage;
