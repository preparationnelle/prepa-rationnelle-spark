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


const EducationSampleEssaysPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border

/40">
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
                        <span className="text-foreground font-medium">Éducation · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Das duale Ausbildungssystem</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Ist das duale Ausbildungssystem ein Modell für andere Länder?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland ist bekannt für sein <VocabWord word="duales Ausbildungssystem" explanation="ein System, wo man gleichzeitig in einer Firma arbeitet und in der Schule lernt" />, das junge Menschen auf praktische Weise für einen Beruf <VocabWord word="vorbereitet" explanation="fertig macht, trainiert" />. In diesem System arbeiten <VocabWord word="Auszubildende" explanation="junge Menschen, die einen Beruf lernen" /> (Azubis) drei bis vier Tage pro Woche in einer Firma und gehen ein bis zwei Tage zur <VocabWord word="Berufsschule" explanation="eine Schule für praktische Jobs und Berufe" />. Etwa 1,3 Millionen Jugendliche machen aktuell eine Ausbildung in Deutschland. Das System gibt es seit über 100 Jahren und wird in der Welt oft als Vorbild gesehen. Aber manche Kritiker sagen, dass es zu starr ist und nicht modern genug. In diesem Kontext kann man sich fragen, ob das duale System wirklich ein Modell für andere Länder ist. Im folgenden Aufsatz werde ich zeigen, dass das duale System viele Vorteile hat und anderen Ländern als Beispiel dienen kann.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute ist das duale System zu alt und nicht flexibel genug für die moderne Welt. Sie sagen, dass junge Menschen lieber studieren wollen und dass die duale Ausbildung nicht <VocabWord word="attraktiv" explanation="interessant, anziehend" /> ist. Ich lehne es ab, diese Kritik vollständig zu akzeptieren. Es ist fraglich, ob ein <VocabWord word="rein akademisches" explanation="nur theoretisch, nur an der Universität" /> System besser ist. Ich finde es übertrieben zu sagen, dass das duale System überholt ist.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie das System modernisiert wird. Man sollte zwischen traditionellen und neuen Berufen unterscheiden. Ich muss zugeben, dass manche Ausbildungen zu wenig Digitalisierung haben. Aber ich betrachte es als Fehler, das ganze System deswegen zu kritisieren. Das System kann sich <VocabWord word="anpassen" explanation="sich verändern, um besser zu passen" />, wie man bei neuen IT-Ausbildungen sieht.
                            </p>

                            <h3>II. Vorteile des dualen Systems</h3>
                            <p>
                                Meiner Meinung nach ist das duale System sehr effektiv. Es ist höchste Zeit, dass andere Länder von Deutschland lernen. Ich bin der Ansicht, dass die Kombination von Theorie und Praxis ideal ist.
                            </p>
                            <p>
                                Es fällt auf, dass Deutschland eine sehr niedrige <VocabWord word="Jugendarbeitslosigkeit" explanation="wenn junge Menschen keine Arbeit finden" /> hat. Laut den Statistiken liegt sie bei nur 5,6%, während sie in Spanien bei 27% und in Italien bei 22% liegt. Im Vergleich zu diesen Ländern funktioniert das deutsche System viel besser. Die Azubis haben nach der Ausbildung sehr gute Chancen, einen Job zu finden – etwa 70% werden von ihrer Ausbildungsfirma <VocabWord word="übernommen" explanation="bekommen dort einen festen Job" />.
                            </p>
                            <p>
                                Außerdem lernen die Auszubildenden genau die <VocabWord word="Fähigkeiten" explanation="was man können muss, Kompetenzen" />, die die Wirtschaft braucht. Die Firmen bilden nach ihren eigenen Bedürfnissen aus. Das verhindert die <VocabWord word="Lücke" explanation="der Unterschied, der Abstand" /> zwischen Schule und Arbeitswelt, die in vielen Ländern existiert.
                            </p>

                            <h3>III. Internationales Interesse und Anpassungsfähigkeit</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass viele Länder das deutsche Modell studieren. Das Paradebeispiel ist die Schweiz, die ein ähnliches System hat und ebenfalls sehr erfolgreich ist. Auch Österreich nutzt das duale Prinzip. Selbst Länder wie Spanien und Portugal versuchen jetzt, Elemente des dualen Systems zu <VocabWord word="einführen" explanation="neu starten, anfangen zu benutzen" />.
                            </p>
                            <p>
                                Ein gutes Beispiel für die <VocabWord word="Anpassungsfähigkeit" explanation="die Fähigkeit, sich zu verändern und anzupassen" /> des Systems sind neue digitale Ausbildungen. Seit 2020 gibt es Ausbildungen wie „Kaufmann im E-Commerce" oder „Fachinformatiker für Daten- und Prozessanalyse". Das zeigt, dass das duale System modern bleiben kann.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass das duale Ausbildungssystem ein sehr gutes Modell für andere Länder ist. Aus diesen Gründen bin ich der Ansicht, dass mehr europäische Staaten dieses System <VocabWord word="übernehmen" explanation="kopieren, auch benutzen" /> sollten. Das System kombiniert Theorie und Praxis, reduziert Jugendarbeitslosigkeit und passt sich an neue Berufe an. Insgesamt kann man feststellen, dass Deutschlands duales System einer der Gründe für die starke Wirtschaft ist. Diese Diskussion zeigt, dass praktische Ausbildung genauso wichtig ist wie akademische Bildung.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Éducation et formation</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Ausbildung(en)</strong> = formation professionnelle</li>
                                            <li><strong>der/die Auszubildende(n)</strong> = apprenti</li>
                                            <li><strong>die Berufsschule(n)</strong> = école professionnelle</li>
                                            <li><strong>das duale System</strong> = système dual</li>
                                            <li><strong>die Lehre</strong> = apprentissage</li>
                                            <li><strong>der Betrieb(e)</strong> = entreprise</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Compétences et emploi</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Fähigkeit(en)</strong> = compétence, capacité</li>
                                            <li><strong>die Jugendarbeitslosigkeit</strong> = chômage des jeunes</li>
                                            <li><strong>übernehmen</strong> = embaucher, reprendre</li>
                                            <li><strong>vorbereiten</strong> = préparer</li>
                                            <li><strong>ausbilden</strong> = former</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>anpassen</strong> = adapter</li>
                                            <li><strong>einführen</strong> = introduire</li>
                                            <li><strong>kombinieren</strong> = combiner</li>
                                            <li><strong>verhindern</strong> = empêcher</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Lücke schließen</strong> = combler le fossé</li>
                                            <li><strong>als Vorbild dienen</strong> = servir de modèle</li>
                                            <li><strong>rein akademisch</strong> = purement académique</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 1,3 millions = apprentis en Allemagne actuellement</li>
                                        <li>• 5,6% = taux de chômage des jeunes en Allemagne</li>
                                        <li>• 70% = apprentis embauchés par leur entreprise de formation</li>
                                        <li>• 27% = chômage des jeunes en Espagne (comparaison)</li>
                                        <li>• 100+ ans = âge du système dual allemand</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Principe du système dual</p>
                                        <p className="ml-4">3-4 jours en entreprise + 1-2 jours à l'école professionnelle = combinaison théorie-pratique.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Faible chômage des jeunes</p>
                                        <p className="ml-4">5,6% en Allemagne vs 22-27% dans le sud de l'Europe. Le système facilite la transition école-travail.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Taux d'embauche élevé</p>
                                        <p className="ml-4">70% des apprentis sont embauchés par leur entreprise de formation à la fin.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Modèle international</p>
                                        <p className="ml-4">Suisse, Autriche utilisent des systèmes similaires. Espagne et Portugal s'y intéressent.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Modernisation constante</p>
                                        <p className="ml-4">Nouveaux métiers digitaux ajoutés (e-commerce, data analyst) montrent l'adaptabilité du système.</p>
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

export default EducationSampleEssaysPage;
