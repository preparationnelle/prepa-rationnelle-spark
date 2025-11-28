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


const HistoireSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Histoire · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Deutschlands Erinnerungskultur</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Ist die deutsche Erinnerungskultur ein Modell für andere Länder?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland hat eine besondere <VocabWord word="Erinnerungskultur" explanation="wie ein Land mit seiner Geschichte umgeht und sie nicht vergisst" /> entwickelt. Das Land <VocabWord word="gedenkt" explanation="erinnert sich feierlich und respektvoll" /> aktiv an die Verbrechen des <VocabWord word="Nazi-Regimes" explanation="die Diktatur von Hitler zwischen 1933 und 1945" /> und den <VocabWord word="Holocaust" explanation="die systematische Ermordung von 6 Millionen Juden" />. Es gibt über 60.000 „<VocabWord word="Stolpersteine" explanation="kleine Gedenksteine im Boden für Holocaust-Opfer" />" in deutschen Städten, die an Holocaust-Opfer erinnern. Das <VocabWord word="Holocaust-Mahnmal" explanation="großes Denkmal in Berlin für ermordete Juden" /> in Berlin zieht jährlich Millionen Besucher an. Schulen lehren <VocabWord word="ausführlich" explanation="sehr genau, mit vielen Details" /> über diese dunkle Zeit. Aber manche fragen, ob Deutschland zu sehr in der Vergangenheit lebt. Andere sagen, dass andere Länder von Deutschland lernen sollten. In diesem Kontext kann man sich fragen, ob die deutsche Erinnerungskultur ein Modell für andere Länder ist. Im folgenden Aufsatz werde ich zeigen, dass Deutschlands Umgang mit Geschichte <VocabWord word="vorbildlich" explanation="so gut, dass andere es kopieren sollten" /> ist und anderen Ländern als Beispiel dienen sollte.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute ist die deutsche Erinnerungskultur übertrieben. Sie sagen, dass Deutschland zu viel Zeit mit der Vergangenheit verbringt und dass junge Deutsche nicht für die Taten ihrer Großeltern <VocabWord word="verantwortlich" explanation="für etwas die Verantwortung haben" /> sein sollten. Ich lehne es ab, diese Meinung zu akzeptieren. Es ist fraglich, ob man Geschichte einfach vergessen sollte. Ich finde es gefährlich zu sagen, dass Erinnerung unwichtig ist.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie Erinnerung funktioniert. Man sollte zwischen <VocabWord word="Schuld" explanation="die Verantwortung für etwas Schlechtes" /> und <VocabWord word="Verantwortung" explanation="die Pflicht, sich um etwas zu kümmern" /> unterscheiden. Junge Deutsche sind nicht schuldig, aber sie haben die Verantwortung, dass so etwas nie wieder passiert. Ich muss zugeben, dass manche Diskussionen zu emotional werden. Aber ich betrachte es als wichtig, die Erinnerung <VocabWord word="lebendig" explanation="aktiv, nicht vergessen" /> zu halten.
                            </p>

                            <h3>II. Stärken der deutschen Erinnerungskultur</h3>
                            <p>
                                Meiner Meinung nach ist Deutschlands Erinnerungskultur bewundernswert. Es ist höchste Zeit, dass andere Länder ähnlich offen mit ihrer Geschichte umgehen. Ich bin der Ansicht, dass Ehrlichkeit über die Vergangenheit wichtig für die Zukunft ist.
                            </p>
                            <p>
                                Es fällt auf, dass Deutschland sehr transparent ist. Der Holocaust wird in Schulen <VocabWord word="gründlich" explanation="sehr genau, sehr detailliert" /> unterrichtet. Jeder Schüler besucht ein <VocabWord word="Konzentrationslager" explanation="Ort, wo Nazis Menschen gefangen hielten und töteten" /> oder ein <VocabWord word="Gedenkmuseum" explanation="Museum, das an schreckliche Ereignisse erinnert" />. Im Vergleich zu Japan, das seine Kriegsverbrechen oft <VocabWord word="herunterspielt" explanation="als weniger schlimm darstellt als sie waren" />, oder zur Türkei, die den Völkermord an den Armeniern <VocabWord word="leugnet" explanation="sagt, dass etwas nicht passiert ist" />, ist Deutschland vorbildlich.
                            </p>
                            <p>
                                Außerdem hat diese Erinnerungskultur Deutschland zu einem <VocabWord word="verlässlichen" explanation="zuverlässig, man kann darauf vertrauen" /> Partner gemacht. Andere Länder wissen, dass Deutschland aus der Geschichte gelernt hat. Das hat Deutschland geholfen, in Europa wieder <VocabWord word="Vertrauen" explanation="wenn man glaubt, dass jemand gut ist" /> zu gewinnen.
                            </p>

                            <h3>III. Modell für andere Länder</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass viele Länder ähnliche Probleme haben. Das Paradebeispiel ist die USA und die Geschichte der Sklaverei. Das Land tut sich schwer, diese Vergangenheit vollständig <VocabWord word="aufzuarbeiten" explanation="sich mit der Vergangenheit auseinandersetzen und verstehen" />. Frankreich hat Probleme mit seiner Kolonialgeschichte. Deutschland zeigt, dass ehrliche Erinnerung möglich ist.
                            </p>
                            <p>
                                Ein gutes Beispiel ist die <VocabWord word="Versöhnung" explanation="wenn ehemalige Feinde Freunde werden" /> mit Israel. Deutschland zahlt noch heute <VocabWord word="Wiedergutmachung" explanation="Geld oder Hilfe, um für vergangene Schlechte zu entschuldigen" /> an Holocaust-Überlebende. Die Beziehung zwischen Deutschland und Israel ist heute eng. Das zeigt, dass Erinnerung zu <VocabWord word="Heilung" explanation="besser werden, sich erholen" /> führen kann.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich  sagen, dass die deutsche Erinnerungskultur ein wichtiges Modell ist. Aus diesen Gründen bin ich der Ansicht, dass andere Länder von Deutschland lernen sollten. Ehrlichkeit über die Vergangenheit ist der Weg zu einer besseren Zukunft. Insgesamt kann man feststellen, dass Erinnerung nicht Schwäche ist, sondern Stärke. Diese Diskussion zeigt, dass wahre Größe bedeutet, Fehler <VocabWord word="anzuerkennen" explanation="zugeben, akzeptieren" /> und daraus zu lernen.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Mémoire et histoire</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Erinnerungskultur</strong> = culture mémorielle</li>
                                            <li><strong>der Holocaust</strong> = Holocauste</li>
                                            <li><strong>das Nazi-Regime</strong> = régime nazi</li>
                                            <li><strong>das Konzentrationslager</strong> = camp de concentration</li>
                                            <li><strong>die Stolpersteine</strong> = pavés de mémoire</li>
                                            <li><strong>das Holocaust-Mahnmal</strong> = Mémorial de l'Holocauste</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Responsabilité</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Schuld</strong> = culpabilité</li>
                                            <li><strong>die Verantwortung</strong> = responsabilité</li>
                                            <li><strong>die Versöhnung</strong> = réconciliation</li>
                                            <li><strong>die Wiedergutmachung</strong> = réparation</li>
                                            <li><strong>das Vertrauen</strong> = confiance</li>
                                            <li><strong>die Heilung</strong> = guérison</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>gedenken</strong> = commémorer</li>
                                            <li><strong>aufarbeiten</strong> = affronter (le passé)</li>
                                            <li><strong>leugnen</strong> = nier</li>
                                            <li><strong>herunterspielen</strong> = minimiser</li>
                                            <li><strong>anerkennen</strong> = reconnaître</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Adjectifs</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>vorbildlich</strong> = exemplaire</li>
                                            <li><strong>ausführlich</strong> = détaillé</li>
                                            <li><strong>gründlich</strong> = approfondi</li>
                                            <li><strong>lebendig</strong> = vivant</li>
                                            <li><strong>verlässlich</strong> = fiable</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 60.000+ = Stolpersteine (pavés mémoriels) en Allemagne</li>
                                        <li>• 6 millions = Juifs assassinés pendant l'Holocauste</li>
                                        <li>• 1933-1945 = période du régime nazi</li>
                                        <li>• Millions = visiteurs annuels au Mémorial de Berlin</li>
                                        <li>• 100% = écoles allemandes enseignent l'Holocauste</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Culture mémorielle unique</p>
                                        <p className="ml-4">60.000+ Stolpersteine, Mémorial de l'Holocauste, enseignement obligatoire dans TOUTES les écoles.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Distinction Schuld vs Verantwortung</p>
                                        <p className="ml-4">Les jeunes ne sont pas coupables (Schuld) mais ont la responsabilité (Verantwortung) que ça ne se répète pas.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Transparence exemplaire</p>
                                        <p className="ml-4">Tous les élèves visitent camps/musées. Contrairement au Japon (minimise) ou Turquie (nie génocide arménien).</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Réconciliation avec Israël</p>
                                        <p className="ml-4">Réparations continues aux survivants. Relations étroites Allemagne-Israël = preuve que mémoire → guérison.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Modèle pour autres nations</p>
                                        <p className="ml-4">USA (esclavage), France (colonisation) ont du mal à affronter leur passé. L'Allemagne montre la voie.</p>
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

export default HistoireSampleEssaysPage;
