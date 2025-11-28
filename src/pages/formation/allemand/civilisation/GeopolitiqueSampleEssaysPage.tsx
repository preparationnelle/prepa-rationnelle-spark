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


const GeopolitiqueSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Géopolitique · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Deutschlands Rolle in der Europäischen Union</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Sollte Deutschland eine stärkere Führungsrolle in der EU übernehmen?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland ist die größte <VocabWord word="Volkswirtschaft" explanation="die Wirtschaft eines ganzen Landes" /> in Europa und spielt seit der Gründung der EU eine zentrale Rolle. Mit 83 Millionen Einwohnern und einem Bruttoinlandsprodukt von 4 Billionen Euro ist Deutschland der <VocabWord word="Hauptbeitragszahler" explanation="das Land, das am meisten Geld zahlt" /> der EU. Nach dem Brexit ist Deutschlands Position noch wichtiger geworden. Manche sagen, dass Deutschland mehr <VocabWord word="Verantwortung" explanation="die Pflicht, sich um etwas zu kümmern" /> in der EU übernehmen sollte. Andere warnen vor einem zu dominanten Deutschland. In diesem Kontext kann man sich fragen, ob Deutschland eine stärkere Führungsrolle in der EU übernehmen sollte. Im folgenden Aufsatz werde ich zeigen, dass Deutschland zwar mehr führen sollte, aber immer in <VocabWord word="Partnerschaft" explanation="Zusammenarbeit zwischen gleichen Partnern" /> mit den anderen EU-Ländern.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute wäre eine deutsche <VocabWord word="Vormachtstellung" explanation="eine dominante Position, wo man über andere bestimmt" /> in Europa gefährlich. Sie sagen, dass dies an die dunkle Geschichte erinnert und dass kleine Länder <VocabWord word="unterdrückt" explanation="kontrolliert und nicht frei" /> würden. Ich lehne es ab, diese historischen Parallelen zu akzeptieren. Es ist fraglich, ob das demokratische Deutschland von heute mit dem der Vergangenheit vergleichbar ist. Ich finde es übertrieben, vor deutscher Führung Angst zu haben.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie Deutschland führt. Man sollte zwischen <VocabWord word="Dominanz" explanation="Herrschaft, Kontrolle über andere" /> und verantwortungsvoller Führung unterscheiden. Ich muss zugeben, dass Deutschland während der Euro-Krise manchmal zu hart war. Aber ich betrachte es als falsch, Deutschland deshalb keine Führungsrolle zu geben. Das moderne Deutschland hat aus der Geschichte gelernt.
                            </p>

                            <h3>II. Notwendigkeit deutscher Führung</h3>
                            <p>
                                Meiner Meinung nach braucht die EU deutsche Führung. Es ist höchste Zeit, dass Deutschland mehr Verantwortung übernimmt. Ich bin der Ansicht, dass die EU ohne starke deutsche Beteiligung schwächer wäre.
                            </p>
                            <p>
                                Es fällt auf, dass Deutschland oft die EU-Projekte finanziert. Laut den Statistiken zahlt Deutschland etwa 25 Milliarden Euro netto pro Jahr in den EU-Haushalt. Das ist mehr als Frankreich und Italien zusammen. Im vergleich zu Großbritannien, das die EU verlassen hat, bleibt Deutschland <VocabWord word="treu" explanation="loyal, bleibt dabei" /> zur europäischen Integration.
                            </p>
                            <p>
                                Außerdem hat Deutschland die wirtschaftliche <VocabWord word="Kompetenz" explanation="Fähigkeit, etwas gut zu machen" />, die die EU braucht. Die deutsche Wirtschaft ist stark, stabil und innovativ. Diese Erfahrung ist wichtig für die EU-Politik. Deutschland kann <VocabWord word="Lösungen" explanation="Antworten auf Probleme" /> für wirtschaftliche Krisen <VocabWord word="vorschlagen" explanation="eine Idee präsentieren" />.
                            </p>

                            <h3>III. Führung durch Partnerschaft</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass deutsche Führung nicht deutsche Dominanz bedeuten sollte. Das Paradebeispiel ist die <VocabWord word="deutsch-französische Achse" explanation="die partnerschaftliche Beziehung zwischen Deutschland und Frankreich" />. Seit 1963 arbeiten Deutschland und Frankreich eng zusammen, um Europa voranzutreiben. Dieser <VocabWord word="Ansatz" explanation="die Art und Weise, wie man etwas macht" /> sollte das Modell sein.
                            </p>
                            <p>
                                Ein gutes Beispiel ist die Corona-Pandemie. Deutschland und Frankreich haben zusammen den EU-Wiederaufbaufonds vorgeschlagen. Dieser Fonds von 750 Milliarden Euro hilft den EU-Ländern, sich von der Krise zu <VocabWord word="erholen" explanation="wieder besser werden, sich regenerieren" />. Das zeigt, wie deutsche Führung funktionieren sollte: <VocabWord word="  kooperativ" explanation="zusammenarbeitend, nicht allein" /> und <VocabWord word="solidarisch" explanation="mit Unterstützung für andere" />.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Deutschland eine stärkere Führungsrolle in der EU übernehmen sollte, aber immer in Zusammenarbeit mit den Partnern. Aus diesen Gründen bin ich der Ansicht, dass Deutschland seiner Verantwortung gerecht werden muss. Die EU braucht deutsche wirtschaftliche Stärke und politische Stabilität. Insgesamt kann man feststellen, dass Führung durch Partnerschaft der richtige Weg ist. Diese Diskussion zeigt, dass Größe und Macht auch Pflichten mit sich bringen.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Union européenne</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die EU (Europäische Union)</strong> = UE</li>
                                            <li><strong>die Führungsrolle</strong> = rôle de leader</li>
                                            <li><strong>die Mitgliedstaaten</strong> = États membres</li>
                                            <li><strong>der Hauptbeitragszahler</strong> = principal contributeur</li>
                                            <li><strong>die Integration</strong> = intégration</li>
                                            <li><strong>die Zusammenarbeit</strong> = coopération</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Économie et politique</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Volkswirtschaft</strong> = économie nationale</li>
                                            <li><strong>die Verantwortung</strong> = responsabilité</li>
                                            <li><strong>die Vormachtstellung</strong> = prédominance</li>
                                            <li><strong>die Dominanz</strong> = dominance</li>
                                            <li><strong>die Kompetenz</strong> = compétence</li>
                                            <li><strong>die Partnerschaft</strong> = partenariat</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>übernehmen</strong> = prendre en charge</li>
                                            <li><strong>vorschlagen</strong> = proposer</li>
                                            <li><strong>sich erholen</strong> = se remettre</li>
                                            <li><strong>unterdrücken</strong> = opprimer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die deutsch-französische Achse</strong> = axe franco-allemand</li>
                                            <li><strong>treu sein</strong> = être fidèle à</li>
                                            <li><strong>kooperativ</strong> = coopératif</li>
                                            <li><strong>solidarisch</strong> = solidaire</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 83 millions = population allemande</li>
                                        <li>• 4 billions € = PIB allemand</li>
                                        <li>• 25 milliards € = contribution nette annuelle à l'UE</li>
                                        <li>• 750 milliards € = fonds de relance COVID-19</li>
                                        <li>• 1963 = traité de l'Élysée (axe franco-allemand)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. L'Allemagne est le pilier économique de l'UE</p>
                                        <p className="ml-4">Plus grande économie (4000 Mrd €), principal contributeur (25 Mrd € nets/an), 83 millions d'habitants.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Rôle accru après le Brexit</p>
                                        <p className="ml-4">Le départ du Royaume-Uni renforce la position centrale de l'Allemagne dans l'UE.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Leadership par partenariat, pas domination</p>
                                        <p className="ml-4">L'axe franco-allemand (depuis 1963) comme modèle de coopération équilibrée.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Exemple du fonds de relance COVID</p>
                                        <p className="ml-4">Proposition franco-allemande de 750 Mrd € montre le leadership coopératif et solidaire.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Responsabilité historique</p>
                                        <p className="ml-4">L'Allemagne moderne a tiré les leçons de l'histoire. Leadership démocratique ≠ domination du passé.</p>
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

export default GeopolitiqueSampleEssaysPage;
