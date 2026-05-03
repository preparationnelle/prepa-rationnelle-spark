import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

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


const PolitikSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Politik · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Koalitionsregierungen in Deutschland</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Sind Koalitionsregierungen ein Vorteil oder ein Nachteil für Deutschland?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland hat ein <VocabWord word="Mehrparteiensystem" explanation="ein politisches System mit vielen verschiedenen Parteien" />, wo selten eine Partei allein die <VocabWord word="absolute Mehrheit" explanation="mehr als 50% der Stimmen oder Sitze im Parlament" /> im Bundestag bekommt. Deshalb sind <VocabWord word="Koalitionsregierungen" explanation="Regierungen, die aus zwei oder mehr Parteien zusammen bestehen" /> der Normalfall in der deutschen Politik. Seit 1949 hat Deutschland fast immer Koalitionen gehabt, wie die aktuelle SPD-Grüne-FDP-Koalition. Manche Experten sagen, dass Koalitionen zu viel Kompromiss und langsame Entscheidungen führen. Andere argumentieren, dass sie demokratischer und stabiler sind. In diesem Kontext kann man sich fragen, ob Koalitionsregierungen für Deutschland mehr Vorteile oder Nachteile bringen. Im folgenden Aufsatz werde ich zeigen, warum Koalitionen trotz ihrer Schwächen gut für die deutsche Demokratie sind.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute sind Koalitionen ein Problem für eine effektive Regierung. Sie sagen, dass die Parteien zu viele Kompromisse machen müssen und dass wichtige Reformen <VocabWord word="verwässert" explanation="schwächer gemacht, weniger stark als am Anfang" /> werden. Ich <VocabWord word="lehne es ab" explanation="sage, dass ich etwas nicht akzeptiere" />, diese Meinung vollständig zu akzeptieren. Es ist fraglich, ob eine Einparteienregierung wirklich besser wäre. Ich finde es <VocabWord word="übertrieben" explanation="zu stark gesagt, mehr als die Realität" />, dass manche sagen, Koalitionen machen Deutschland <VocabWord word="handlungsunfähig" explanation="nicht in der Lage, Entscheidungen zu treffen und zu handeln" />.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie die Parteien zusammenarbeiten. Man sollte zwischen guten und schlechten Koalitionen unterscheiden. Ich muss zugeben, dass manche Koalitionen wirklich Probleme haben. Das Paradebeispiel ist die <VocabWord word="Ampelkoalition" explanation="SPD (rot), Grüne (grün) und FDP (gelb) - wie eine Ampel" /> 2021-2024, die oft gestritten hat. Aber ich betrachte es als falsch, alle Koalitionen deshalb zu kritisieren.
                            </p>

                            <h3>II. Demokratische Vorteile des Koalitionssystems</h3>
                            <p>
                                Meiner Meinung nach sind Koalitionen gut für die Demokratie. Es ist wichtig, dass verschiedene <VocabWord word="Meinungen" explanation="was Menschen denken und glauben" /> im Parlament <VocabWord word="vertreten" explanation="da sein, repräsentiert werden" /> sind. Ich bin der Ansicht, dass Koalitionen mehr Menschen eine Stimme geben.
                            </p>
                            <p>
                                Es fällt auf, dass Koalitionsregierungen oft stabiler sind als man denkt. Laut den Statistiken hat Deutschland seit 1949 nur 9 Bundeskanzler gehabt. <VocabWord word="Im Vergleich zu" explanation="wenn man etwas mit etwas anderem vergleicht" /> Italien, das 30 Regierungen in der gleichen Zeit hatte, ist Deutschland sehr stabil. Die Große Koalition zwischen CDU und SPD hat von 2013 bis 2021 acht Jahre funktioniert.
                            </p>
                            <p>
                                Außerdem <VocabWord word="verhindern" explanation="stoppen, nicht erlauben dass etwas passiert" /> Koalitionen extreme Politik. Wenn mehrere Parteien zusammenarbeiten müssen, können radikale Ideen nicht einfach <VocabWord word="durchgesetzt" explanation="gemacht werden, auch wenn andere dagegen sind" /> werden. Das ist gut für die Demokratie.
                            </p>

                            <h3>III. Praktische Vorteile und Beispiele</h3>
                            <p>
                                Umso wichtiger ist es zu sehen, dass Koalitionen große Reformen möglich machen. Ein gutes Beispiel ist die <VocabWord word="Energiewende" explanation="der Wechsel von fossilen Energien zu erneuerbaren Energien" /> unter der CDU-FDP-Koalition und später unter der CDU-SPD-Koalition. Diese wichtige Reform wurde von verschiedenen Koalitionen <VocabWord word="vorangetrieben" explanation="weiter entwickelt, nach vorne gebracht" />.
                            </p>
                            <p>
                                Das Paradebeispiel für erfolgreiche Koalitionen ist die Ära von Helmut Kohl (1982-1998). Seine CDU-FDP-Koalition hat 16 Jahre regiert und die deutsche <VocabWord word="Wiedervereinigung" explanation="als Ost- und Westdeutschland wieder ein Land wurden" /> organisiert. Diese <VocabWord word="Leistung" explanation="etwas Großes, das erfolgreich gemacht wurde" /> zeigt, dass Koalitionen sehr effektiv sein können.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Koalitionsregierungen mehr Vorteile als Nachteile für Deutschland haben. Aus diesen Gründen bin ich der Ansicht, dass das Koalitionssystem gut für die deutsche Demokratie ist. Koalitionen machen Politik demokratischer, stabiler und weniger extrem. Insgesamt kann man feststellen, dass Deutschland von diesem System <VocabWord word="profitiert" explanation="Vorteile bekommt, gewinnt" />. Diese Diskussion zeigt, dass Kompromisse nicht Schwäche sind, sondern demokratische Stärke.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Politique</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Koalition(en)</strong> = coalition</li>
                                            <li><strong>die Regierung(en)</strong> = gouvernement</li>
                                            <li><strong>der Bundestag</strong> = parlement allemand</li>
                                            <li><strong>die Partei(en)</strong> = parti politique</li>
                                            <li><strong>die Mehrheit</strong> = majorité</li>
                                            <li><strong>der Kompromiss(e)</strong> = compromis</li>
                                            <li><strong>die Reform(en)</strong> = réforme</li>
                                            <li><strong>die Demokratie</strong> = démocratie</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Gouvernement</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>der Bundeskanzler</strong> = chancelier fédéral</li>
                                            <li><strong>die Ampelkoalition</strong> = coalition feu tricolore (SPD-Grüne-FDP)</li>
                                            <li><strong>die Große Koalition</strong> = grande coalition (CDU-SPD)</li>
                                            <li><strong>regieren</strong> = gouverner</li>
                                            <li><strong>die Stabilität</strong> = stabilité</li>
                                            <li><strong>die Zusammenarbeit</strong> = collaboration</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes d'argumentation</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>verhindern</strong> = empêcher</li>
                                            <li><strong>durchsetzen</strong> = imposer</li>
                                            <li><strong>vertreten</strong> = représenter</li>
                                            <li><strong>vorantreiben</strong> = faire avancer</li>
                                            <li><strong>profitieren von</strong> = profiter de</li>
                                            <li><strong>zusammenarbeiten</strong> = collaborer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions essentielles</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>Es ist fraglich, ob...</strong> = Il est discutable que...</li>
                                            <li><strong>Das Paradebeispiel ist...</strong> = L'exemple parfait est...</li>
                                            <li><strong>Im Vergleich zu...</strong> = En comparaison avec...</li>
                                            <li><strong>Es fällt auf, dass...</strong> = Il est frappant que...</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 1949 = création de la République fédérale d'Allemagne</li>
                                        <li>• 9 = nombre de chanceliers depuis 1949</li>
                                        <li>• 16 ans = durée de la coalition Kohl (CDU-FDP, 1982-1998)</li>
                                        <li>• 8 ans = durée de la Grande Coalition (2013-2021)</li>
                                        <li>• 2021 = début de la coalition Ampel (SPD-Grüne-FDP)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Les coalitions sont la norme en Allemagne</p>
                                        <p className="ml-4">Depuis 1949, presque toutes les gouvernements ont été des coalitions. Le système électoral rend une majorité absolue très difficile.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Stabilité malgré les compromis</p>
                                        <p className="ml-4">L'Allemagne a eu seulement 9 chanceliers en 75 ans. Les coalitions assurent une stabilité politique remarquable.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Protection contre les extrêmes</p>
                                        <p className="ml-4">Les coalitions obligent au compromis et empêchent les politiques radicales. Plusieurs voix doivent être entendues.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Exemples de succès</p>
                                        <p className="ml-4">La réunification allemande (Kohl), l'Energiewende, et de nombreuses réformes ont été réalisées par des coalitions.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Types de coalitions</p>
                                        <p className="ml-4">Grande Coalition (CDU-SPD), Ampelkoalition (SPD-Grüne-FDP), coalitions CDU-FDP historiques.</p>
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

export default PolitikSampleEssaysPage;
