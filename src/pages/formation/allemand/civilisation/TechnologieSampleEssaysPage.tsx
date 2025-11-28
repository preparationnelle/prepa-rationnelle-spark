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


const TechnologieSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Technologie · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Industrie 4.0 und Digitalisierung</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Ist Deutschland gut vorbereitet auf die digitale Revolution?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland ist bekannt für seine starke Industrie – Autos, Maschinen und Chemie haben das Land reich gemacht. Aber heute steht Deutschland vor einer neuen Herausforderung: der <VocabWord word="Digitalisierung" explanation="wenn alles mit Computern und Internet gemacht wird" />. Der Begriff „<VocabWord word="Industrie 4.0" explanation="die vierte industrielle Revolution mit intelligenten Maschinen" />" wurde in Deutschland erfunden und beschreibt die <VocabWord word="Vernetzung" explanation="wenn alle Maschinen und Computer miteinander verbunden sind" /> von Produktion, Daten und künstlicher Intelligenz. Etwa 85% der deutschen Firmen arbeiten schon an Industrie 4.0-Projekten. Aber viele Experten sagen, dass Deutschland in der Digitalisierung <VocabWord word="hinterher hinkt" explanation="langsamer ist als andere, nicht mitkommt" />. In diesem Kontext kann man sich fragen, ob Deutschland wirklich gut auf die digitale Revolution vorbereitet ist. Im folgenden Aufsatz werde ich zeigen, dass Deutschland Stärken in der Industrie hat, aber <VocabWord word="Schwächen" explanation="Bereiche, wo man nicht gut ist" /> in IT und Start-ups.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <       p>
                                Für manche Leute ist Deutschland ein digitaler Nachzügler. Sie sagen, dass das Land zu langsam ist und dass andere Länder wie die USA oder China schon viel weiter sind. Ich lehne es ab, diese pessimistische Sicht komplett zu akzeptieren. Es ist fraglich, ob Deutschland wirklich so weit zurück ist. Ich finde es übertrieben zu sagen, dass Deutschland die Digitalisierung <VocabWord word="verpasst" explanation="eine Chance nicht genutzt hat, zu spät gekommen ist" /> hat.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, welchen Bereich man betrachtet. Man sollte zwischen industrieller Digitalisierung und <VocabWord word="Verbraucher-Technologie" explanation="Technologie für normale Menschen, wie Apps und Smartphones" /> unterscheiden. Ich muss zugeben, dass Deutschland bei Apps und sozialen Medien nicht führend ist. Aber ich betrachte es als unfair, nur diese Bereiche zu betrachten.
                            </p>

                            <h3>II. Stärken der deutschen Industrie 4.0</h3>
                            <p>
                                Meiner Meinung nach ist Deutschland sehr stark in der industriellen Digitalisierung. Es ist höchste Zeit, dass wir diese Erfolge mehr <VocabWord word="anerkennen" explanation="sagen, dass etwas gut ist, würdigen" />. Ich bin der Ansicht, dass Industrie 4.0 wichtiger ist als Social Media.
                            </p>
                            <p>
                                Es fällt auf, dass deutsche Firmen Weltführer in intelligenten Fabriken sind. Laut den Statistiken investieren deutsche Unternehmen etwa 40 Milliarden Euro pro Jahr in Digitalisierung. Siemens hat mit „Digital Factory" eine der <VocabWord word="fortschrittlichsten" explanation="modernsten, am weitesten entwickelten" /> Produktionsplattformen der Welt. BMW und Audi nutzen künstliche Intelligenz und Roboter in ihren Fabriken. Im Vergleich zu anderen europäischen Ländern ist Deutschland führend.
                            </p>
                            <p>
                                Außerdem ist Deutschland stark in der <VocabWord word="Forschung" explanation="wissenschaftliche Arbeit, um Neues zu entdecken" />. Das Land hat über 70 Institute, die an KI arbeiten. Die Regierung investiert 5 Milliarden Euro in KI bis 2025. Diese <VocabWord word="Investitionen" explanation="Geld, das man ausgibt, um später mehr zu haben" /> zeigen, dass Deutschland die Zukunft ernst nimmt.
                            </p>

                            <h3>III. Schwächen und notwendige Verbesserungen</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass Deutschland auch Probleme hat. Das Paradebeispiel ist die langsame <VocabWord word="Breitbandversorgung" explanation="schnelles Internet überall im Land" />. Nur 17% der Deutschen haben <VocabWord word="Glasfaser" explanation="sehr schnelles Internet mit Lichtkabeln" />. Im Vergleich ist das in Südkorea 99%. Das ist ein großes Problem.
                            </p>
                            <p>
                                Ein anderes Beispiel ist die Start-up-Kultur. Deutschland hat weniger erfolgreiche Tech-Start-ups als die USA oder China. Die deutsche Bürokratie macht es schwer, schnell neue Firmen zu gründen. Aber es gibt auch Fortschritte: Berlin ist heute die drittgrößte Start-up-Stadt in Europa nach London und Paris.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Deutschland gemischte Ergebnisse in der Digitalisierung hat. Aus diesen Gründen bin ich der Ansicht, dass Deutschland in der Industrie stark ist, aber bei Infrastruktur und Start-ups <VocabWord word="aufholen" explanation="schneller werden, um andere zu erreichen" /> muss. Industrie 4.0 ist eine deutsche Stärke, aber Glasfaser und digitale Verwaltung müssen besser werden. Insgesamt kann man feststellen, dass Deutschland auf dem richtigen Weg ist, aber schneller werden muss. Diese Diskussion zeigt, dass verschiedene Arten von Digitalisierung unterschiedlich wichtig sind.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Technologie</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Digitalisierung</strong> = digitalisation</li>
                                            <li><strong>Industrie 4.0</strong> = Industrie 4.0</li>
                                            <li><strong>die Vernetzung</strong> = interconnexion</li>
                                            <li><strong>die künstliche Intelligenz (KI)</strong> = IA</li>
                                            <li><strong>die Forschung</strong> = recherche</li>
                                            <li><strong>fortschrittlich</strong> = avancé</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Breitbandversorgung</strong> = couverture haut débit</li>
                                            <li><strong>die Glasfaser</strong> = fibre optique</li>
                                            <li><strong>das Start-up(s)</strong> = start-up</li>
                                            <li><strong>die Investition(en)</strong> = investissement</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>hinkt hinterher</strong> = être en retard</li>
                                            <li><strong>verpassen</strong> = rater, manquer</li>
                                            <li><strong>anerkennen</strong> = reconnaître</li>
                                            <li><strong>aufholen</strong> = rattraper</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Schwächen</strong> = faiblesses</li>
                                            <li><strong>Verbraucher-Technologie</strong> = technologie grand public</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 85% = entreprises allemandes travaillant sur Industrie 4.0</li>
                                        <li>• 40 Mrd € = investissement annuel en digitalisation</li>
                                        <li>• 5 Mrd € = investissement gouvernemental en IA (jusqu'à 2025)</li>
                                        <li>• 70+ = instituts de recherche en IA</li>
                                        <li>• 17% = couverture fibre optique (vs 99% en Corée)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Concept allemand d'Industrie 4.0</p>
                                        <p className="ml-4">L'Allemagne a créé le terme. 85% des entreprises ont des projets 4.0. Focus sur production intelligente.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Leadership en digitalisation industrielle</p>
                                        <p className="ml-4">Siemens Digital Factory, BMW/Audi utilisent IA et robots. 40 Mrd € investis annuellement.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Force en recherche IA</p>
                                        <p className="ml-4">70+ instituts de recherche, 5 Mrd € d'investissement gouvernemental jusqu'en 2025.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Faiblesse en infrastructure numérique</p>
                                        <p className="ml-4">Seulement 17% de couverture fibre (vs 99% Corée du Sud). Retard sur haut débit.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Écosystème start-up en croissance</p>
                                        <p className="ml-4">Berlin = 3ème ville start-up européenne. Moins développé qu'USA/Chine mais en progression.</p>
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

export default TechnologieSampleEssaysPage;
