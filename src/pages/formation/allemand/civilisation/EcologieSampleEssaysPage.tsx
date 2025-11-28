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


const EcologieSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Écologie · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Deutschlands Energiewende trotz Krise</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Soll Deutschland seine Klimaziele trotz der Energiekrise aufgeben?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland hat sich <VocabWord word="ehrgeizige" explanation="sehr hohe und schwierige Ziele, die viel Arbeit brauchen" /> Klimaziele gesetzt: Das Land will bis 2045 klimaneutral werden und plant, bis 2030 etwa 80% des Stroms aus <VocabWord word="erneuerbaren Energien" explanation="Energie, die immer wieder neu kommt, wie Wind, Sonne und Wasser" /> zu erzeugen. Aber die <VocabWord word="Energiekrise" explanation="eine schwierige Situation, wo Energie sehr teuer ist und schwer zu bekommen" /> seit 2022, besonders wegen des Ukraine-Krieges, hat viele Probleme geschaffen. Die Gaspreise sind gestiegen, die Inflation ist höher geworden, und viele Bürger haben Angst vor teuren Energiekosten. Manche Politiker und Wirtschaftsexperten fordern jetzt, die Klimaziele zu <VocabWord word="verschieben" explanation="auf einen späteren Zeitpunkt bewegen, nicht jetzt machen" /> oder sogar aufzugeben. In diesem Kontext kann man sich fragen, inwiefern Deutschland seine Energiewende trotz der aktuellen wirtschaftlichen Schwierigkeiten weiter verfolgen sollte. Im folgenden Aufsatz werde ich aufklären, warum Deutschland trotz der heutigen Energiekrise diese Ziele nicht aufgeben wird.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute kommt es nicht in Frage, dass Deutschland seine Klimaziele in dieser schwierigen Zeit weiter verfolgt. Sie sagen, dass die Energiewende zu teuer ist und dass wir zuerst die wirtschaftlichen Probleme lösen müssen. Ich <VocabWord word="lehne es ab" explanation="sagen, dass man etwas nicht akzeptiert oder nicht will" />, diese Meinung zu akzeptieren. Es ist fraglich, ob <VocabWord word="kurzfristige" explanation="für eine kurze Zeit, nicht lange in die Zukunft" /> wirtschaftliche Interessen wichtiger sind als <VocabWord word="langfristige" explanation="für eine lange Zeit, weit in die Zukunft" /> Klimaziele. Ich finde es übertrieben, dass manche Politiker vorschlagen, zu Kohle und Atomkraft zurückzukehren.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, ob wir zwischen verschiedenen Situationen unterscheiden. Man sollte vielleicht zwischen kurzfristigen <VocabWord word="Notlösungen" explanation="schnelle Lösungen für eine schwierige Situation, nicht perfekt aber helfen sofort" /> und langfristiger Politik unterscheiden. Ich muss zugeben, dass ich gegen temporäre Maßnahmen nichts <VocabWord word="einzuwenden habe" explanation="keine Probleme damit haben, etwas akzeptieren können" />, wenn sie die Energiesicherheit garantieren. Aber ich betrachte es als <VocabWord word="kontraproduktiv" explanation="etwas, das das Gegenteil vom gewünschten Ergebnis bringt" />, die ganze Energiewende aufzugeben. Die fossilen Energien haben uns in diese <VocabWord word="Abhängigkeit" explanation="die Situation, wenn man etwas braucht und nicht ohne leben kann" /> gebracht, besonders von russischem Gas. Es ist sinnlos, die gleichen Fehler zu wiederholen.
                            </p>

                            <h3>II. Wirtschaftliche und strategische Vorteile der Energiewende</h3>
                            <p>
                                Meiner Meinung nach ist es <VocabWord word="unentbehrlich" explanation="absolut notwendig, man kann nicht ohne" />, dass Deutschland seine Energiewende fortsetzt. Es ist höchste Zeit, dass wir unsere Abhängigkeit von fossilen Energien beenden. Die aktuelle Krise zeigt genau, warum wir mehr erneuerbare Energien brauchen. Ich bin der Ansicht, dass die Energiewende nicht das Problem ist, sondern die Lösung.
                            </p>
                            <p>
                                Es fällt auf, dass die erneuerbaren Energien nicht nur gut für das Klima sind, sondern auch für die Wirtschaft. Sie schaffen neue Arbeitsplätze im Bereich der <VocabWord word="grünen Technologien" explanation="moderne Technologien, die gut für die Umwelt und das Klima sind" />. Deutschland ist weltweit <VocabWord word="führend" explanation="an der Spitze, besser als die anderen Länder" /> in der Produktion von Windturbinen und Solarmodulen. Diese Industrie beschäftigt heute etwa 300.000 Menschen. Wenn wir die Energiewende aufgeben, verlieren wir diese wirtschaftlichen Chancen.
                            </p>
                            <p>
                                Außerdem sind erneuerbare Energien langfristig billiger als fossile Energien. Die Kosten für Solarenergie sind in den letzten zehn Jahren um 90% gefallen. Wind- und Solarenergie sind heute die günstigsten Energiequellen. Die hohen Energiekosten kommen nicht von der Energiewende, sondern von der Abhängigkeit von importiertem Gas und Öl. Die Energiewende macht Deutschland <VocabWord word="unabhängiger" explanation="nicht mehr abhängig, selbstständig, braucht keine anderen mehr" /> und sicherer.
                            </p>

                            <h3>III. Konkrete Maßnahmen und Zukunftsperspektiven</h3>
                            <p>
                                Umso wichtiger ist es daher, dass Deutschland schneller in erneuerbare Energien investiert. Das <VocabWord word="Paradebeispiel" explanation="das perfekte Beispiel, das am besten zeigt, was man meint" /> ist Dänemark, das schon heute 80% seines Stroms aus Windkraft produziert. Laut den Statistiken hat Deutschland 2023 etwa 52% seines Stroms aus erneuerbaren Energien erzeugt. Im Vergleich zu dem Jahr 2020 ist die Zahl im Jahr 2023 höher. Die Zahl der Solaranlagen hat zwischen 2020 und 2023 um 30% zugenommen. Dieser Trend ist steigend.
                            </p>
                            <p>
                                Ein gutes Beispiel dafür ist die schnelle Entwicklung von Flüssiggas-Terminals (LNG) in Deutschland. Das Land hat in nur einem Jahr mehrere LNG-Terminals gebaut, um russisches Gas zu ersetzen. Diese schnelle Reaktion zeigt, dass Deutschland die Fähigkeit hat, große Energieprojekte <VocabWord word="durchzuführen" explanation="erfolgreich machen, realisieren, ein Projekt bis zum Ende machen" />. Die gleiche Energie sollte in den <VocabWord word="Ausbau" explanation="etwas größer und stärker machen, mehr entwickeln" /> erneuerbarer Energien fließen.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Deutschland seine Klimaziele trotz der Energiekrise nicht aufgeben sollte. Aus diesen Gründen bin ich der Ansicht, dass die Energiewende die beste Antwort auf die aktuelle Krise ist. Erneuerbare Energien machen Deutschland unabhängiger, schaffen Arbeitsplätze und schützen das Klima. Insgesamt kann man feststellen, dass die Energiekrise eine Chance ist, die Energiewende zu beschleunigen, nicht sie zu stoppen. Diese Diskussion zeigt, dass wirtschaftliche Sicherheit und Klimaschutz zusammen möglich sind.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Énergie et Climat</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Energiewende</strong> = la transition énergétique</li>
                                            <li><strong>die erneuerbaren Energien</strong> = les énergies renouvelables</li>
                                            <li><strong>die Klimaziele</strong> = les objectifs climatiques</li>
                                            <li><strong>klimaneutral</strong> = neutre en carbone</li>
                                            <li><strong>die Solaranlage(n)</strong> = installation solaire</li>
                                            <li><strong>die Windkraft</strong> = énergie éolienne</li>
                                            <li><strong>fossile Energien</strong> = énergies fossiles</li>
                                            <li><strong>die Abhängigkeit</strong> = la dépendance</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Économie</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Energiekrise</strong> = la crise énergétique</li>
                                            <li><strong>die Gaspreise</strong> = les prix du gaz</li>
                                            <li><strong>die Inflation</strong> = l'inflation</li>
                                            <li><strong>die Energiekosten</strong> = les coûts énergétiques</li>
                                            <li><strong>die Arbeitsplätze</strong> = les emplois</li>
                                            <li><strong>die grünen Technologien</strong> = les technologies vertes</li>
                                            <li><strong>die Energiequelle(n)</strong> = source d'énergie</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes d'argumentation</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>aufgeben</strong> = abandonner</li>
                                            <li><strong>fortsetzen</strong> = continuer</li>
                                            <li><strong>verfolgen</strong> = poursuivre</li>
                                            <li><strong>investieren in (+Akk)</strong> = investir dans</li>
                                            <li><strong>beschäftigen</strong> = employer</li>
                                            <li><strong>produzieren</strong> = produire</li>
                                            <li><strong>ersetzen</strong> = remplacer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions essentielles</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>Es ist höchste Zeit, dass...</strong> = Il est grand temps que...</li>
                                            <li><strong>Umso wichtiger ist es...</strong> = D'autant plus important...</li>
                                            <li><strong>Es fällt auf, dass...</strong> = Il est frappant que...</li>
                                            <li><strong>Im Vergleich zu...</strong> = En comparaison avec...</li>
                                            <li><strong>Das Paradebeispiel ist...</strong> = L'exemple parfait est...</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 2045 = objectif de neutralité carbone de l'Allemagne</li>
                                        <li>• 80% = part d'énergies renouvelables visée pour 2030</li>
                                        <li>• 52% = part des énergies renouvelables en 2023</li>
                                        <li>• 300.000 = emplois dans le secteur des technologies vertes</li>
                                        <li>• 90% = baisse des coûts de l'énergie solaire en 10 ans</li>
                                        <li>• +30% = augmentation des installations solaires (2020-2023)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. La crise énergétique renforce la nécessité de la transition</p>
                                        <p className="ml-4">La dépendance au gaz russe a montré les dangers de la dépendance aux énergies fossiles. La crise est une opportunité d'accélérer, pas de ralentir.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Les énergies renouvelables sont économiquement avantageuses</p>
                                        <p className="ml-4">Baisse de 90% des coûts solaires, création de 300.000 emplois, indépendance énergétique accrue.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. L'Allemagne a la capacité de transformation rapide</p>
                                        <p className="ml-4">Construction de terminaux LNG en un an = preuve de la capacité d'action. Cette même énergie doit être dirigée vers les renouvelables.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Vision à long terme vs. solutions à court terme</p>
                                        <p className="ml-4">Accepter des mesures temporaires pour la sécurité énergétique, mais maintenir la trajectoire climatique long terme.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Modèles européens à suivre</p>
                                        <p className="ml-4">Danemark : 80% d'énergie éolienne. L'Allemagne peut et doit suivre cet exemple.</p>
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

export default EcologieSampleEssaysPage;
